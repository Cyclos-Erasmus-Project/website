## 1. Public site content

- [x] 1.1 Update homepage hero title in `src/i18n/translations.ts` (`home.hero.title`, all 5 languages)
- [x] 1.2 Update "(Youth Cycling for Inclusion)" parenthetical in about intros in `translations.ts` (EN, FR, RO, DE, EL)
- [x] 1.3 Update the same parenthetical in the about-page templates (`src/pages/{en,fr,ro,de,el}/about.astro`)
- [x] 1.4 Update hero image `alt` text in `src/pages/{en,fr,ro,de,el}/index.astro`
- [x] 1.5 Update Header logo `alt` in `src/components/Header.astro`
- [x] 1.6 Update default meta description in `src/layouts/BaseLayout.astro`
- [x] 1.7 Update project-launch news items (`src/content/news/{en,fr}-project-launch.md`)

## 2. Project metadata & docs

- [x] 2.1 Update `package.json` description
- [x] 2.2 Update `README.md` (title, intro, footer)
- [x] 2.3 Update `openspec/project.md` purpose line
- [x] 2.4 Update `docs/CYCLOS-Change-Request-Form.md` and `docs/CYCLOS-Website-v1-Announcement.md`

## 3. Verification

- [x] 3.1 Re-run search to confirm no unintended "Youth Cycling for Inclusion" remain
- [x] 3.2 `npm run build` succeeds
- [x] 3.3 `openspec validate update-tagline-cycling-for-inclusion --strict` passes
