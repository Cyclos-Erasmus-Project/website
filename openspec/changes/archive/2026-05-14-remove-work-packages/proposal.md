# Change: Remove Work Packages section from public website

severity: minor
changelog: Remove the Work Packages page, homepage section, and navigation links from the public website

## Why

During the partner consortium meeting in Romania (5–7 May 2026), partners agreed that the Work Packages section should be removed from the public-facing website. The WP1–WP5 breakdown describes internal project-management structure (budget allocations, deliverables, "Led by" labels) that is not appropriate for the public audiences the site targets (disadvantaged youth, youth workers, general public). It also dilutes the site's narrative focus on inclusion, cycling, and outcomes.

Removing it cleans up the public site and aligns the public surface with audience-relevant content (Home, About, Partners, News, Resources, Contact).

## What Changes

### Pages removed
- `src/pages/en/work-packages.astro`
- `src/pages/fr/work-packages.astro`
- `src/pages/ro/work-packages.astro`
- `src/pages/de/work-packages.astro`
- `src/pages/el/work-packages.astro`

### Navigation
- Remove the "Work Packages" entry from the main nav (`src/components/Header.astro`).
- Remove the "Work Packages" entry from the footer link list (`src/components/Footer.astro`).

### Homepage
For each `src/pages/<lang>/index.astro` (5 files):
- Remove the entire "Work Packages Section" (`workPackages` array, `<section>` block listing WP1–WP5 cards, and "Learn More About Our Work" CTA).

### Translations (`src/i18n/translations.ts`)
Remove the following keys from all 5 language blocks (EN, FR, RO, DE, EL):
- `nav.workPackages`
- `home.workPackages.title`
- `home.workPackages.viewAll`
- `wp.title`, `wp.subtitle`, `wp.activities`, `wp.deliverables`, `wp.budgetOverview`, `wp.ledBy`, `wp.budgetAllocation`, `wp.totalBudget`
- `wp.wp1.title`, `wp.wp1.desc` … `wp.wp5.title`, `wp.wp5.desc`

### Spec deltas (capability: `website`)
- **REMOVED** Requirement: *Work Packages Page*
- **MODIFIED** Requirement: *Navigation* — remove "Work Packages" from the enumerated menu items

## Out of scope

- The About page and other pages remain unchanged. The project background and objectives there already cover the project narrative without WP terminology.
- News articles that mention work packages historically (if any) are not edited — they are dated content reflecting project state at publication time.
- No redirects from `/[lang]/work-packages/` are added; the project is pre-1.0 and the pages were never externally promoted. Build output for those routes simply disappears.

## Impact

- Affected specs: `website` (Work Packages Page requirement removed; Navigation requirement modified)
- Affected code:
  - `src/components/Header.astro` — 1 nav entry removed
  - `src/components/Footer.astro` — 1 footer link removed
  - `src/pages/{en,fr,ro,de,el}/work-packages.astro` — 5 files deleted
  - `src/pages/{en,fr,ro,de,el}/index.astro` — 5 files (homepage section + workPackages array removed)
  - `src/i18n/translations.ts` — ~14 keys removed × 5 language blocks
  - Total: 13 files modified or deleted
- Build output: 5 fewer routes (`/[lang]/work-packages/`)
- No data migration; no external API contract; pre-1.0 project so no deprecation window required.
