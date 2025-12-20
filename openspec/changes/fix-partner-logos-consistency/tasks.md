# Tasks: Fix Partner Logos Consistency

## 1. Fix Romanian Index Page
- [x] 1.1 Update `src/pages/ro/index.astro` to use `flvsLogo.src` instead of `null` for FLVS partner

## 2. Add Partner Logos to Contact Pages
- [x] 2.1 Import partner logo assets in `src/pages/en/contact.astro`
- [x] 2.2 Add logo field to partner data structure in `src/pages/en/contact.astro`
- [x] 2.3 Update contact page template to display logos instead of initials
- [x] 2.4 Repeat for `src/pages/fr/contact.astro`
- [x] 2.5 Repeat for `src/pages/de/contact.astro`
- [x] 2.6 Repeat for `src/pages/ro/contact.astro`
- [x] 2.7 Repeat for `src/pages/el/contact.astro`

## 3. Verification
- [x] 3.1 Run build to verify no errors (`npm run build`)
- [x] 3.2 Visually verify all partner sections display correct logos across all languages
