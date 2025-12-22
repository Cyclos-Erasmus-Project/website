# Change: Fix Partner Logos Consistency

## Why
Partner logos are inconsistently used across the website. Some pages display actual logos while others show placeholder initials or have `logo: null`. This creates an unprofessional appearance and fails to properly represent partner organizations.

## What Changes
- Ensure all 4 partner logos (FLVS/VIF, ASSOC, AFIS, Computer Solutions SA) are consistently used across all pages
- Replace placeholder initials with actual partner logos on contact pages
- Fix the Romanian index page where FLVS logo is set to `null` instead of the actual logo
- Standardize partner data structure across all language versions

## Impact
- Affected specs: `website` (Partners Page, Homepage, Contact Page requirements)
- Affected code:
  - `src/pages/*/index.astro` (5 files - homepage partner sections)
  - `src/pages/*/contact.astro` (5 files - contact partner listings)
  - `src/pages/*/partners.astro` (5 files - partner detail pages)

## Issues Found

### 1. Romanian Index Page - Missing FLVS Logo
In `src/pages/ro/index.astro:28`, the FLVS partner has `logo: null` while all other language versions correctly use `flvsLogo.src`.

### 2. Contact Pages - No Partner Logos
All contact pages (`src/pages/*/contact.astro`) display partner initials as placeholders instead of actual logos. The partner data structure doesn't include logo imports or references.

### 3. Inconsistent Partner Data Structure
- Homepage and Partners pages: Include logo references
- Contact pages: No logo field in partner data

## Available Logo Assets
All partner logos exist in `src/assets/`:
- `vif.png` - FLVS/Vivons en Forme logo
- `assoc.png` - ASSOC logo
- `afis.png` - AFIS logo
- `cssa.png` - Computer Solutions SA logo
