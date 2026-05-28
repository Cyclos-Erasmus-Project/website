# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

No changes yet.

## [0.11.2] - 2026-05-28

### Fixed
- **Restore Romanian diacritics in the Partners section text (partner review by ASSOC)**
  - Restore Romanian diacritics in the Partners-section strings in `src/i18n/translations.ts`:
  - `partners.workingTogether`: "Lucram impreuna in toata Europa" → "Lucrăm împreună în toată Europa"
  - `partners.workingTogetherDesc`: full sentence corrected to "Parteneriatul nostru divers reunește expertiză în promovarea sănătății, servicii sociale, educație și tehnologie pentru a crea un impact semnificativ pentru tinerii defavorizați."
  - `partners.areasOfExpertise`: "Domenii de expertiza" → "Domenii de expertiză" (same missing-diacritics issue found in the adjacent label)

## [0.11.1] - 2026-05-26

### Fixed
- **Update project tagline from "Youth Cycling for Inclusion" to "Cycling for Inclusion" across the site and project metadata**
  - Update the public-facing tagline/expansion of CYCLOS from "Youth Cycling for Inclusion" to "Cycling for Inclusion" across:
  - The homepage hero title (all 5 languages)
  - About-page intro paragraphs (all 5 languages) and project-launch news items
  - The English parenthetical expansion "(Youth Cycling for Inclusion)" used inside translated pages
  - Header logo `alt` text and `BaseLayout` default meta description

## [0.11.0] - 2026-05-14

### Added
- **Remove the Work Packages page, homepage section, and navigation links from the public website**
  - `src/pages/en/work-packages.astro`
  - `src/pages/fr/work-packages.astro`
  - `src/pages/ro/work-packages.astro`
  - `src/pages/de/work-packages.astro`
  - `src/pages/el/work-packages.astro`

## [0.10.2] - 2026-02-04

### Fixed
- **French website content corrections from FLVS partner review**

## [0.10.1] - 2026-02-02

### Fixed
- **Complete translations for all 5 languages (DE, FR, RO, EL, EN) across all pages**
  - Country names now use translation keys (`t('countries.france')`, etc.) for proper localization

## [0.10.0] - 2025-12-22

### Added
- **Add Privacy-Preserving Analytics**
  - Integrate GoatCounter (free, privacy-first analytics by EU developer)
  - Add analytics script to BaseLayout with environment-based configuration
  - No cookies, no personal data, no consent banner required
  - Document Python script pattern for custom reporting/data export
  - Provider-agnostic design allows future swapping if needed

### Fixed
- **Add Automated Changelog Generation**
  - Add `changelog` field to proposal.md template (optional short summary for changelog)
  - Add `severity` field to proposal.md template (major | minor | patch)
  - Create Python script to generate CHANGELOG.md from archived changes
  - Create release workflow script to bump version and create git tags
  - Group entries by git tag/version when available, otherwise by date
- **Fix Partner Logos Consistency**
  - Ensure all 4 partner logos (FLVS/VIF, ASSOC, AFIS, Computer Solutions SA) are consistently used across all pages
  - Replace placeholder initials with actual partner logos on contact pages
  - Fix the Romanian index page where FLVS logo is set to `null` instead of the actual logo
  - Standardize partner data structure across all language versions

## [0.9.0] - 2025-12-19

### Changed
- **Create CYCLOS Static Website**
  - Initialize Astro project with TypeScript and Tailwind CSS
  - Create responsive, accessible homepage with project overview
  - Build partner organizations showcase page
  - Implement multilingual support (EN, FR, RO, DE, EL)
  - Create about/objectives page explaining project goals
