# Tasks: Add Automated Changelog Generation

## 1. Retrospective Changelog Reconstruction
- [x] 1.1 Analyze existing archives (add-static-website, add-privacy-analytics, fix-partner-logos-consistency)
- [x] 1.2 Review git history for commits between initial commit and tag 0.9.0
- [x] 1.3 Review git history for commits after tag 0.9.0
- [x] 1.4 Assign retrospective severity to each archived change
- [x] 1.5 Create initial CHANGELOG.md with retrospective entries

## 2. Changelog Generation Script
- [x] 2.1 Create `scripts/generate_changelog.py` using UV infrastructure
- [x] 2.2 Parse OpenSpec archives (extract proposal.md "What Changes" or `changelog` field)
- [x] 2.3 Parse `severity` field from proposal.md (major | minor | patch, default: patch)
- [x] 2.4 Map archives to git tags using commit dates
- [x] 2.5 Group entries by version/date
- [x] 2.6 Generate markdown output in Keep a Changelog format

## 3. Release Workflow Script
- [x] 3.1 Create `scripts/release.py` for version bumping and tagging
- [x] 3.2 Read current version from latest git tag
- [x] 3.3 Collect unreleased archived changes and their severities
- [x] 3.4 Calculate next version based on highest severity (major > minor > patch)
- [x] 3.5 Create git tag with new version
- [x] 3.6 Regenerate CHANGELOG.md with new version section

## 4. Convention Updates
- [x] 4.1 Document optional `changelog` field in proposal.md template
- [x] 4.2 Document `severity` field in proposal.md template (major | minor | patch)
- [x] 4.3 Update AGENTS.md with changelog and release workflow guidance

## 5. Validation
- [x] 5.1 Run changelog script against existing archives
- [x] 5.2 Verify generated CHANGELOG.md is accurate
- [x] 5.3 Test release script with dry-run option
- [x] 5.4 Test full workflow with future change archive
