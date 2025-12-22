#!/usr/bin/env python3
"""
Generate CHANGELOG.md from OpenSpec archives and git tags.

Usage:
    uv run scripts/generate_changelog.py [--output CHANGELOG.md]

This script:
1. Reads archived changes from openspec/changes/archive/
2. Extracts "What Changes" or optional "changelog" field from proposal.md
3. Maps archives to git tags by date
4. Generates CHANGELOG.md in Keep a Changelog format
"""

import argparse
import re
import subprocess
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path


@dataclass
class ArchivedChange:
    """Represents an archived OpenSpec change."""

    name: str
    date: str
    severity: str
    summary: str
    what_changes: list[str]


@dataclass
class GitTag:
    """Represents a git tag with its date."""

    name: str
    date: datetime
    commit: str


def get_git_tags() -> list[GitTag]:
    """Get all git tags with their dates, sorted by date descending."""
    result = subprocess.run(
        [
            "git",
            "tag",
            "-l",
            "--format=%(refname:short)|%(creatordate:iso)|%(objectname:short)",
        ],
        capture_output=True,
        text=True,
        check=True,
    )

    tags = []
    for line in result.stdout.strip().split("\n"):
        if not line:
            continue
        parts = line.split("|")
        if len(parts) >= 3:
            name, date_str, commit = parts[0], parts[1], parts[2]
            try:
                # Handle ISO format with timezone: "2025-12-19 20:51:00 +0200"
                date_str = date_str.strip()
                if " +" in date_str or " -" in date_str:
                    # Split datetime and timezone
                    dt_part = date_str.rsplit(" ", 1)[0]
                    tz_part = date_str.rsplit(" ", 1)[1]
                    # Format timezone as +02:00
                    tz_formatted = tz_part[:3] + ":" + tz_part[3:]
                    date_str = dt_part.replace(" ", "T") + tz_formatted
                else:
                    date_str = date_str.replace(" ", "T")
                date = datetime.fromisoformat(date_str)
                tags.append(GitTag(name=name, date=date, commit=commit))
            except ValueError:
                continue

    return sorted(tags, key=lambda t: t.date, reverse=True)


def parse_proposal(proposal_path: Path) -> ArchivedChange:
    """Parse a proposal.md file and extract changelog-relevant information."""
    content = proposal_path.read_text(encoding="utf-8")

    # Extract archive name from parent directory
    archive_dir = proposal_path.parent.name
    # Format: YYYY-MM-DD-change-name
    match = re.match(r"(\d{4}-\d{2}-\d{2})-(.+)", archive_dir)
    if match:
        date = match.group(1)
        name = match.group(2)
    else:
        date = "Unknown"
        name = archive_dir

    # Look for optional changelog field (single line after "changelog:")
    changelog_match = re.search(
        r"^changelog:\s*(.+)$", content, re.MULTILINE | re.IGNORECASE
    )
    if changelog_match:
        summary = changelog_match.group(1).strip()
    else:
        # Extract title from "# Change: ..." header
        title_match = re.search(r"^#\s*Change:\s*(.+)$", content, re.MULTILINE)
        summary = (
            title_match.group(1).strip()
            if title_match
            else name.replace("-", " ").title()
        )

    # Look for severity field
    severity_match = re.search(
        r"^severity:\s*(major|minor|patch)$", content, re.MULTILINE | re.IGNORECASE
    )
    severity = severity_match.group(1).lower() if severity_match else "patch"

    # Extract "What Changes" section
    what_changes = []
    what_changes_match = re.search(
        r"##\s*What Changes\s*\n(.*?)(?=\n##|\n#\s|$)",
        content,
        re.DOTALL | re.IGNORECASE,
    )
    if what_changes_match:
        section = what_changes_match.group(1)
        # Extract bullet points
        for line in section.split("\n"):
            line = line.strip()
            if line.startswith("- "):
                # Clean up the bullet point
                item = line[2:].strip()
                # Skip sub-headers and complex items
                if item and not item.startswith("#") and not item.startswith("**"):
                    what_changes.append(item)

    return ArchivedChange(
        name=name,
        date=date,
        severity=severity,
        summary=summary,
        what_changes=what_changes,
    )


def get_archived_changes(archive_dir: Path) -> list[ArchivedChange]:
    """Get all archived changes, sorted by date ascending."""
    changes = []

    if not archive_dir.exists():
        return changes

    for change_dir in archive_dir.iterdir():
        if not change_dir.is_dir():
            continue
        proposal_path = change_dir / "proposal.md"
        if proposal_path.exists():
            try:
                changes.append(parse_proposal(proposal_path))
            except Exception as e:
                print(f"Warning: Failed to parse {proposal_path}: {e}")

    return sorted(changes, key=lambda c: c.date)


def map_changes_to_versions(
    changes: list[ArchivedChange],
    tags: list[GitTag],
) -> dict[str, list[ArchivedChange]]:
    """Map changes to version numbers based on dates."""
    version_map: dict[str, list[ArchivedChange]] = {"Unreleased": []}

    # Sort tags by date ascending for easier processing
    sorted_tags = sorted(tags, key=lambda t: t.date)

    for change in changes:
        try:
            change_date = datetime.strptime(change.date, "%Y-%m-%d")
        except ValueError:
            version_map["Unreleased"].append(change)
            continue

        # Find the first tag after this change
        assigned_version = "Unreleased"
        for tag in sorted_tags:
            if tag.date.date() >= change_date.date():
                assigned_version = tag.name
                break

        if assigned_version not in version_map:
            version_map[assigned_version] = []
        version_map[assigned_version].append(change)

    return version_map


def generate_changelog(
    version_map: dict[str, list[ArchivedChange]],
    tags: list[GitTag],
) -> str:
    """Generate CHANGELOG.md content in Keep a Changelog format."""
    lines = [
        "# Changelog",
        "",
        "All notable changes to this project will be documented in this file.",
        "",
        "The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),",
        "and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).",
        "",
    ]

    # Get tag dates for header
    tag_dates = {tag.name: tag.date.strftime("%Y-%m-%d") for tag in tags}

    # Order: Unreleased first, then versions in descending order
    versions = ["Unreleased"] + sorted(
        [v for v in version_map.keys() if v != "Unreleased"],
        key=lambda v: tag_dates.get(v, "0000-00-00"),
        reverse=True,
    )

    for version in versions:
        changes = version_map.get(version, [])
        if not changes and version != "Unreleased":
            continue

        # Version header
        if version == "Unreleased":
            lines.append("## [Unreleased]")
        else:
            date = tag_dates.get(version, "")
            lines.append(f"## [{version}] - {date}")
        lines.append("")

        if not changes:
            lines.append("No changes yet.")
            lines.append("")
            continue

        # Group by severity/type
        added = []
        changed = []
        fixed = []

        for change in changes:
            if change.severity == "major":
                changed.append(change)
            elif change.severity == "minor":
                added.append(change)
            else:  # patch
                fixed.append(change)

        if added:
            lines.append("### Added")
            for change in added:
                lines.append(f"- **{change.summary}**")
                for item in change.what_changes[:5]:  # Limit items
                    lines.append(f"  - {item}")
            lines.append("")

        if changed:
            lines.append("### Changed")
            for change in changed:
                lines.append(f"- **{change.summary}**")
                for item in change.what_changes[:5]:
                    lines.append(f"  - {item}")
            lines.append("")

        if fixed:
            lines.append("### Fixed")
            for change in fixed:
                lines.append(f"- **{change.summary}**")
                for item in change.what_changes[:5]:
                    lines.append(f"  - {item}")
            lines.append("")

    return "\n".join(lines)


def main():
    parser = argparse.ArgumentParser(
        description="Generate CHANGELOG.md from OpenSpec archives"
    )
    parser.add_argument(
        "--output",
        "-o",
        default="CHANGELOG.md",
        help="Output file path (default: CHANGELOG.md)",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Print to stdout instead of writing to file",
    )
    args = parser.parse_args()

    # Find project root (where openspec/ directory is)
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    archive_dir = project_root / "openspec" / "changes" / "archive"

    print(f"Reading archives from: {archive_dir}")

    # Get data
    changes = get_archived_changes(archive_dir)
    tags = get_git_tags()

    print(f"Found {len(changes)} archived changes")
    print(f"Found {len(tags)} git tags")

    # Map changes to versions
    version_map = map_changes_to_versions(changes, tags)

    # Generate changelog
    changelog = generate_changelog(version_map, tags)

    if args.dry_run:
        print("\n--- CHANGELOG.md ---\n")
        print(changelog)
    else:
        output_path = project_root / args.output
        output_path.write_text(changelog, encoding="utf-8")
        print(f"Written to: {output_path}")


if __name__ == "__main__":
    main()
