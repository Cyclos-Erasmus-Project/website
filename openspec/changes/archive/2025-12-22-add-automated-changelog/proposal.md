# Change: Add Automated Changelog Generation

## Why

The CYCLOS project needs a changelog to:
- Document project evolution for EU stakeholders and partners
- Provide transparency on website updates and improvements
- Support ERASMUS+ reporting requirements with clear change history
- Enable contributors to understand what has been shipped

Currently, OpenSpec archives contain rich context (proposal.md with "Why" and "What Changes") that is perfect for changelog entries, but there's no automated way to aggregate this into a user-facing CHANGELOG.md.

## What Changes

- Add `changelog` field to proposal.md template (optional short summary for changelog)
- Add `severity` field to proposal.md template (major | minor | patch)
- Create Python script to generate CHANGELOG.md from archived changes
- Create release workflow script to bump version and create git tags
- Group entries by git tag/version when available, otherwise by date
- Retrospectively reconstruct changelog from existing archives and git history

### Hybrid Approach

The solution combines:
1. **OpenSpec archives** - Provide high-level feature/change descriptions with context
2. **Git tags** - Mark release versions (created automatically based on severity)
3. **Python script** - Aggregates archives between tags into versioned changelog

### Semantic Versioning Workflow

When archiving changes, the release script:
1. Reads severity from proposal.md (defaults to `patch` if not specified)
2. Calculates next version based on highest severity among unreleased changes:
   - `major` - Breaking changes (X.0.0)
   - `minor` - New features (x.Y.0)
   - `patch` - Bug fixes, docs (x.y.Z)
3. Creates git tag with new version
4. Regenerates CHANGELOG.md with proper version grouping

## Impact

- Affected specs: `website` (new documentation capability)
- Affected code: `scripts/generate_changelog.py`, `CHANGELOG.md`
- New conventions: Optional `changelog` field in proposal.md
- No breaking changes
