# Tasks: Remove Work Packages Section

## 1. Remove dedicated Work Packages pages

- [x] 1.1 Delete `src/pages/en/work-packages.astro`
- [x] 1.2 Delete `src/pages/fr/work-packages.astro`
- [x] 1.3 Delete `src/pages/ro/work-packages.astro`
- [x] 1.4 Delete `src/pages/de/work-packages.astro`
- [x] 1.5 Delete `src/pages/el/work-packages.astro`

## 2. Update shared navigation components

- [x] 2.1 Remove the Work Packages entry from the nav array in `src/components/Header.astro`
- [x] 2.2 Remove the Work Packages link from the footer link list in `src/components/Footer.astro`

## 3. Remove homepage Work Packages section

For each homepage (5 files), remove the `workPackages` array constant, the `<!-- Work Packages Section -->` block (cards + heading + subtitle), and the "Learn More" CTA link:

- [x] 3.1 `src/pages/en/index.astro`
- [x] 3.2 `src/pages/fr/index.astro`
- [x] 3.3 `src/pages/ro/index.astro`
- [x] 3.4 `src/pages/de/index.astro`
- [x] 3.5 `src/pages/el/index.astro`

## 4. Remove translation keys

In `src/i18n/translations.ts`, for each of the 5 language blocks (EN, FR, RO, DE, EL):

- [x] 4.1 Remove `nav.workPackages`
- [x] 4.2 Remove `home.workPackages.title` and `home.workPackages.viewAll`
- [x] 4.3 Remove all `wp.*` keys (`wp.title`, `wp.subtitle`, `wp.activities`, `wp.deliverables`, `wp.budgetOverview`, `wp.ledBy`, `wp.budgetAllocation`, `wp.totalBudget`)
- [x] 4.4 Remove all `wp.wp1.*` through `wp.wp5.*` keys (title + desc per WP)

## 5. Verification

- [x] 5.1 Run `npm run build` and confirm a clean build with no broken-link or missing-key warnings — 30 pages built (down from 35, matching the 5 removed routes)
- [x] 5.2 Grep the repo for residual references: `work-packages`, `workPackages`, `wp\.` — confirmed only legitimate historical references remain (CHANGELOG entry, requests log, this proposal's files, news article prose at `src/content/news/en-first-meeting.md`, archived proposals, and the dated v1 announcement doc)
- [x] 5.3 Manually load each language's homepage in `npm run dev` and confirm: no Work Packages section, nav menu has no Work Packages entry, footer has no Work Packages link
- [x] 5.4 Manually visit `/[lang]/work-packages/` for each language and confirm a 404
- [x] 5.5 Run `openspec validate remove-work-packages --strict` and confirm it passes

## 6. Documentation updates

- [x] 6.1 Update `README.md` Pages table to remove Work Packages row
- [x] 6.2 Add explanatory note to `openspec/project.md` clarifying the WP structure is internal-only (not exposed on the public site)
- [x] 6.3 Add Unreleased entry to `CHANGELOG.md`
- [x] 6.4 Update `docs/CYCLOS-Change-Request-Form.md` affected-pages checklist (remove Work Packages row)
- [x] 6.5 Leave `docs/CYCLOS-Website-v1-Announcement.md` unchanged — it is a dated v1.0 (December 2025) snapshot document, and the Work Packages page did exist at v1 launch
