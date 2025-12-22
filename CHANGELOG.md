# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

No changes yet.

## [0.10.0] - 2025-12-22

### Added
- **Add Privacy-Preserving Analytics**
  - Integrate GoatCounter (free, privacy-first analytics by EU developer)
  - Add analytics script to BaseLayout with environment-based configuration
  - No cookies, no personal data, no consent banner required
  - Document Python script pattern for custom reporting/data export
  - Provider-agnostic design allows future swapping if needed

### Fixed
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
