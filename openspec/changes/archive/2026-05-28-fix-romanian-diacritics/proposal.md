# Change: Fix Romanian diacritics in Partners section

severity: patch
changelog: Restore Romanian diacritics in the Partners section text (partner review by ASSOC)

## Why

Andra Barboloviciu (ASSOC, Romania) reviewed the Romanian site and flagged that the Partners-section call-to-action text was written without Romanian diacritics (email thread, 27 May 2026, with corrected text attached). The plain-ASCII version ("Lucram impreuna...") is incorrect Romanian; the proper diacritics version improves correctness and readability for Romanian readers.

## What Changes

- Restore Romanian diacritics in the Partners-section strings in `src/i18n/translations.ts`:
  - `partners.workingTogether`: "Lucram impreuna in toata Europa" → "Lucrăm împreună în toată Europa"
  - `partners.workingTogetherDesc`: full sentence corrected to "Parteneriatul nostru divers reunește expertiză în promovarea sănătății, servicii sociale, educație și tehnologie pentru a crea un impact semnificativ pentru tinerii defavorizați."
  - `partners.areasOfExpertise`: "Domenii de expertiza" → "Domenii de expertiză" (same missing-diacritics issue found in the adjacent label)

Note: The official ASSOC legal name ("Asociatia Profesionala Neguvernamentala de Asistenta Sociala") in the partner data is intentionally left without diacritics, matching the organization's own registered/used form.

## Impact

- Affected specs: `website` (Multilingual Support — translated content must use correct language-specific diacritics)
- Affected code: `src/i18n/translations.ts` (Romanian `ro` block)

## Status

**Implemented** - This is a retrospective proposal documenting changes already applied on 2026-05-28.

## Request Source

- **From**: Andra Barboloviciu (ASSOC, Romania)
- **Date**: 2026-05-27
- **Context**: Romanian translation review; corrected text supplied with diacritics in the email body
