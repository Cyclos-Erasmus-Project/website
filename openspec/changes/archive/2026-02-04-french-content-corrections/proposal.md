# Change: French Website Content Corrections

severity: patch
changelog: French website content corrections from FLVS partner review

## Why

Sophie MCGANNAN (FLVS lead partner) provided a comprehensive document with French language corrections prepared by her colleagues. The corrections improve terminology, phrasing, and accuracy across all French pages of the CYCLOS website.

## What Changes

- **Terminology updates**: "jeunes défavorisés" → "jeunes en situation de vulnérabilité", "Mobilité Verte" → "Mobilité durable"
- **Work package titles and descriptions**: Complete rewrite of all 5 LT (Lots de Travail) with proper French professional phrasing
- **Partner information**: Updated FLVS name to "Fédération Française des Villes Santé", improved all partner expertise descriptions
- **EU funding disclaimer**: Updated to proper co-funding acknowledgment language per Erasmus+ guidelines
- **Accent corrections**: Fixed missing French accents throughout (é, è, ê, à, ô, etc.)
- **Footer enhancement**: Added `footer.description` translation key to all 5 languages for customized footer text

## Impact

- Affected specs: website (content/i18n)
- Affected code:
  - `src/i18n/translations.ts` - All French translation keys
  - `src/pages/fr/*.astro` - All 7 French page files
  - `src/components/Footer.astro` - Uses new footer.description key

## Status

**Implemented** - This is a retrospective proposal documenting changes already applied on 2026-02-04.

## Request Source

- **From**: Sophie MCGANNAN (FLVS)
- **Date**: 2026-02-03
- **Attachment**: CORRECTIONS_WEBSITE_CYCLOS_FR.md
