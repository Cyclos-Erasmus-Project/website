## 1. Romanian content corrections

- [x] 1.1 Fix `partners.workingTogether` diacritics in `src/i18n/translations.ts` (ro block)
- [x] 1.2 Fix `partners.workingTogetherDesc` diacritics in `src/i18n/translations.ts` (ro block)
- [x] 1.3 Fix `partners.areasOfExpertise` diacritics in `src/i18n/translations.ts` (ro block)
- [x] 1.4 Scan the full Romanian (`ro`) translation block for any other missing diacritics

## 2. Verification

- [x] 2.1 Confirm partner data inline strings in `src/pages/ro/partners.astro` are correct (legal name left as-is by design)
- [x] 2.2 `npm run build` succeeds
- [x] 2.3 `openspec validate fix-romanian-diacritics --strict` passes
