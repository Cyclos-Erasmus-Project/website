## ADDED Requirements

### Requirement: Automated Changelog

The website project SHALL maintain an automated CHANGELOG.md that documents project evolution using OpenSpec archives and git tags.

#### Scenario: Changelog reflects archived changes
- **WHEN** an OpenSpec change is archived
- **THEN** the changelog generation script can extract the change summary
- **AND** group it under the appropriate version or date
- **AND** output a formatted CHANGELOG.md entry

#### Scenario: Version grouping via git tags
- **WHEN** git tags exist (e.g., 0.9.0, 1.0.0)
- **THEN** the changelog groups entries by the tag that follows each archived change
- **AND** entries without a subsequent tag are grouped under "Unreleased"

#### Scenario: Changelog generation
- **WHEN** the changelog generation script is run
- **THEN** it reads all archived changes from `openspec/changes/archive/`
- **AND** extracts the "What Changes" section or optional `changelog` field from each proposal.md
- **AND** generates a CHANGELOG.md in Keep a Changelog format

#### Scenario: Retrospective changelog
- **WHEN** generating the changelog for the first time
- **THEN** the script reconstructs history from existing archives and git commits
- **AND** entries are accurately dated and versioned

### Requirement: Semantic Version Release Workflow

The website project SHALL support automated version bumping and git tagging based on change severity.

#### Scenario: Severity field in proposals
- **WHEN** creating a new change proposal
- **THEN** the author MAY specify a `severity` field (major | minor | patch)
- **AND** if not specified, the default severity is `patch`

#### Scenario: Version calculation from severity
- **WHEN** the release script is run
- **THEN** it reads the severity from all unreleased archived changes
- **AND** calculates the next version based on the highest severity:
  - `major` increments X.0.0 (breaking changes)
  - `minor` increments x.Y.0 (new features)
  - `patch` increments x.y.Z (bug fixes, docs)

#### Scenario: Git tag creation
- **WHEN** the release script completes version calculation
- **THEN** it creates a git tag with the new version number
- **AND** regenerates CHANGELOG.md with the new version section

#### Scenario: Dry-run mode
- **WHEN** the release script is run with --dry-run flag
- **THEN** it displays the calculated version and changes
- **AND** does not create any git tags or modify files
