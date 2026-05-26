# Change: Rename project tagline to "Cycling for Inclusion"

severity: patch
changelog: Update project tagline from "Youth Cycling for Inclusion" to "Cycling for Inclusion" across the site and project metadata

## Why

Per partner feedback (Sophie McGannan, email thread of 20 May 2026), "Cycling for Inclusion" is considered the more appropriate framing for the CYCLOS project than "Youth Cycling for Inclusion". The shorter form is more inclusive and avoids implying the initiative is limited to youth only.

## What Changes

- Update the public-facing tagline/expansion of CYCLOS from "Youth Cycling for Inclusion" to "Cycling for Inclusion" across:
  - The homepage hero title (all 5 languages)
  - About-page intro paragraphs (all 5 languages) and project-launch news items
  - The English parenthetical expansion "(Youth Cycling for Inclusion)" used inside translated pages
  - Header logo `alt` text and `BaseLayout` default meta description
  - Hero image `alt` text ("Youth cycling for inclusion" → "Cycling for inclusion")
- Update project metadata and documentation: `README.md`, `package.json` description, `openspec/project.md`, and the docs files.
- Leave the lowercase descriptive phrase "guide on cycling for inclusion" on the resources pages unchanged (it is already correct and not the project title).

Note: This is a tagline/branding refinement only. The project acronym "CYCLOS" and the registered ERASMUS+ project remain unchanged.

## Impact

- Affected specs: `website` (Homepage requirement — tagline anchored to "Cycling for Inclusion")
- Affected code: `src/i18n/translations.ts`, `src/components/Header.astro`, `src/layouts/BaseLayout.astro`, `src/pages/*/index.astro`, `src/pages/*/about.astro`, `src/content/news/*-project-launch.md`
- Affected docs: `README.md`, `package.json`, `openspec/project.md`, `docs/CYCLOS-Change-Request-Form.md`, `docs/CYCLOS-Website-v1-Announcement.md`
