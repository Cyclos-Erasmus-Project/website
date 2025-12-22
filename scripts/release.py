#!/usr/bin/env python3
"""
Release workflow script for version bumping and git tagging.

Usage:
    uv run scripts/release.py [--dry-run]

This script:
1. Reads current version from latest git tag
2. Collects unreleased archived changes and their severities
3. Calculates next version based on highest severity (major > minor > patch)
4. Creates git tag with new version
5. Regenerates CHANGELOG.md with new version section
"""

import argparse
import re
import subprocess
import sys
from dataclasses import dataclass
from datetime import datetime
from pathlib import Path


@dataclass
class Version:
    """Semantic version representation."""

    major: int
    minor: int
    patch: int

    @classmethod
    def from_string(cls, version_str: str) -> "Version":
        """Parse version string like '1.2.3' or 'v1.2.3'."""
        clean = version_str.lstrip("v")
        parts = clean.split(".")
        return cls(
            major=int(parts[0]) if len(parts) > 0 else 0,
            minor=int(parts[1]) if len(parts) > 1 else 0,
            patch=int(parts[2]) if len(parts) > 2 else 0,
        )

    def bump(self, severity: str) -> "Version":
        """Return a new version bumped according to severity."""
        if severity == "major":
            return Version(self.major + 1, 0, 0)
        elif severity == "minor":
            return Version(self.major, self.minor + 1, 0)
        else:  # patch
            return Version(self.major, self.minor, self.patch + 1)

    def __str__(self) -> str:
        return f"{self.major}.{self.minor}.{self.patch}"


def get_latest_tag() -> tuple[str, datetime] | None:
    """Get the latest git tag and its date."""
    result = subprocess.run(
        ["git", "describe", "--tags", "--abbrev=0"],
        capture_output=True,
        text=True,
    )

    if result.returncode != 0:
        return None

    tag_name = result.stdout.strip()

    # Get tag date
    date_result = subprocess.run(
        ["git", "log", "-1", "--format=%ci", tag_name],
        capture_output=True,
        text=True,
        check=True,
    )

    date_str = date_result.stdout.strip()
    # Handle ISO format with timezone: "2025-12-19 20:51:00 +0200"
    if " +" in date_str or " -" in date_str:
        dt_part = date_str.rsplit(" ", 1)[0]
        tz_part = date_str.rsplit(" ", 1)[1]
        tz_formatted = tz_part[:3] + ":" + tz_part[3:]
        date_str = dt_part.replace(" ", "T") + tz_formatted
    else:
        date_str = date_str.replace(" ", "T")
    tag_date = datetime.fromisoformat(date_str)

    return tag_name, tag_date


def get_unreleased_changes(
    archive_dir: Path, since_date: datetime | None
) -> list[tuple[str, str]]:
    """Get archived changes since the last tag. Returns list of (name, severity)."""
    changes = []

    if not archive_dir.exists():
        return changes

    for change_dir in archive_dir.iterdir():
        if not change_dir.is_dir():
            continue

        # Parse date from directory name (YYYY-MM-DD-name)
        match = re.match(r"(\d{4}-\d{2}-\d{2})-(.+)", change_dir.name)
        if not match:
            continue

        date_str, name = match.groups()
        change_date = datetime.strptime(date_str, "%Y-%m-%d")

        # Skip if before the last tag
        if since_date and change_date.date() <= since_date.date():
            continue

        # Read severity from proposal.md
        proposal_path = change_dir / "proposal.md"
        severity = "patch"  # default

        if proposal_path.exists():
            content = proposal_path.read_text(encoding="utf-8")
            severity_match = re.search(
                r"^severity:\s*(major|minor|patch)$",
                content,
                re.MULTILINE | re.IGNORECASE,
            )
            if severity_match:
                severity = severity_match.group(1).lower()

        changes.append((name, severity))

    return changes


def calculate_highest_severity(changes: list[tuple[str, str]]) -> str:
    """Get the highest severity among changes."""
    severity_order = {"major": 3, "minor": 2, "patch": 1}

    if not changes:
        return "patch"

    max_severity = max(changes, key=lambda c: severity_order.get(c[1], 0))
    return max_severity[1]


def create_git_tag(version: str, dry_run: bool = False) -> bool:
    """Create a git tag for the version."""
    tag_name = version

    if dry_run:
        print(f"[DRY RUN] Would create tag: {tag_name}")
        return True

    result = subprocess.run(
        ["git", "tag", "-a", tag_name, "-m", f"Release {tag_name}"],
        capture_output=True,
        text=True,
    )

    if result.returncode != 0:
        print(f"Error creating tag: {result.stderr}")
        return False

    print(f"Created tag: {tag_name}")
    return True


def run_changelog_generation(dry_run: bool = False) -> bool:
    """Run the changelog generation script."""
    script_dir = Path(__file__).parent
    changelog_script = script_dir / "generate_changelog.py"

    if not changelog_script.exists():
        print(f"Error: Changelog script not found at {changelog_script}")
        return False

    cmd = ["uv", "run", str(changelog_script)]
    if dry_run:
        cmd.append("--dry-run")

    result = subprocess.run(cmd, capture_output=not dry_run, text=True)

    if result.returncode != 0:
        if not dry_run:
            print(f"Error generating changelog: {result.stderr}")
        return False

    return True


def main():
    parser = argparse.ArgumentParser(
        description="Release workflow: bump version and create git tag"
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show what would happen without making changes",
    )
    args = parser.parse_args()

    # Find project root
    script_dir = Path(__file__).parent
    project_root = script_dir.parent
    archive_dir = project_root / "openspec" / "changes" / "archive"

    print("=" * 50)
    print("CYCLOS Release Workflow")
    print("=" * 50)

    # Get current version
    tag_info = get_latest_tag()
    if tag_info:
        current_tag, tag_date = tag_info
        current_version = Version.from_string(current_tag)
        print(f"Current version: {current_version} (tagged {tag_date.date()})")
    else:
        current_version = Version(0, 0, 0)
        tag_date = None
        print("No existing tags found. Starting from 0.0.0")

    # Get unreleased changes
    changes = get_unreleased_changes(archive_dir, tag_date)

    if not changes:
        print("\nNo unreleased changes found.")
        print("Nothing to release.")
        return 0

    print(f"\nUnreleased changes ({len(changes)}):")
    for name, severity in changes:
        print(f"  - {name} ({severity})")

    # Calculate next version
    highest_severity = calculate_highest_severity(changes)
    next_version = current_version.bump(highest_severity)

    print(f"\nHighest severity: {highest_severity}")
    print(f"Next version: {next_version}")

    if args.dry_run:
        print("\n[DRY RUN] Would perform the following actions:")
        print(f"  1. Create git tag: {next_version}")
        print("  2. Regenerate CHANGELOG.md")
        print("\nChangelog preview:")
        run_changelog_generation(dry_run=True)
        return 0

    # Confirm
    print("\nProceed with release? [y/N] ", end="")
    response = input().strip().lower()
    if response != "y":
        print("Aborted.")
        return 1

    # Create tag
    if not create_git_tag(str(next_version)):
        return 1

    # Regenerate changelog
    print("\nRegenerating CHANGELOG.md...")
    if not run_changelog_generation():
        return 1

    print("\nRelease complete!")
    print(f"  Tag: {next_version}")
    print("  CHANGELOG.md updated")
    print("\nNext steps:")
    print("  git push origin --tags")
    print("  git add CHANGELOG.md && git commit -m 'docs: update changelog'")

    return 0


if __name__ == "__main__":
    sys.exit(main())
