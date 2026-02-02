# Change: Complete all language page translations

severity: patch
changelog: Complete translations for all 5 languages (DE, FR, RO, EL, EN) across all pages

## Why

User feedback from Nigar (Project Assistant) identified that while navigation and headings are correctly translated, significant portions of body text remain in English across multiple language versions. This affects the about, partners, work-packages, contact, news, and resources pages. Additionally, some country names and UI labels remain untranslated.

The fix was initially scoped for German but expanded to ensure consistency across all 5 supported languages.

## What Changes

### Shared Component Changes

**Footer (`src/components/Footer.astro`):**
- Country names now use translation keys (`t('countries.france')`, etc.) for proper localization

### Per-Language Page Content

For each language (DE, FR, RO, EL), the following pages were updated:

**About page:**
- Translate 6 objectives list items
- Translate target group descriptions
- Translate "Project Overview" prose paragraphs
- Translate "Funded by the European Union" section
- Translate timeline labels ("of collaborative work")

**Partners page:**
- Translate country names to native language
- Translate partner descriptions
- Translate "Areas of Expertise" heading
- Translate expertise tags
- Translate "Working Together Across Europe" CTA section

**Work Packages page:**
- Translate all activity items (5 work packages × 5 activities each)
- Translate all deliverable items
- Translate "Key Activities" and "Deliverables" headings
- Translate "Budget Overview" section labels
- Translate "Led by" and "Budget allocation" labels

**Contact page:**
- Translate "Get in Touch" heading
- Translate "General Inquiries", "Media & Press", "Partnership Opportunities" sections
- Translate "Send Email" button
- Translate "Our European Network" section
- Translate country names

**News page:**
- Translate "Stay Updated" section
- Translate placeholder news items (titles and excerpts)
- Translate "Check back soon" text

**Resources page:**
- Translate "Resources Coming Soon" section
- Translate expected resources list items

**Homepage:**
- Fix country names in partners array to use native language

### Translation Keys (Added to `translations.ts`)

Added keys for all 5 languages:
- Country names (`countries.france`, `countries.romania`, `countries.austria`, `countries.greece`)
- Partner page UI elements (`partners.areasOfExpertise`, `partners.workingTogether`, etc.)
- Work packages UI elements (`wp.activities`, `wp.deliverables`, `wp.budgetOverview`, etc.)
- Contact page UI elements (`contact.getInTouch`, `contact.generalInquiries`, etc.)

## Impact

- Affected specs: `website` (i18n requirements)
- Affected code:
  - `src/components/Footer.astro` - Use translation keys for country names
  - `src/i18n/translations.ts` - Add new translation keys for all languages
  - `src/pages/de/*` - 7 German page files
  - `src/pages/fr/*` - 7 French page files
  - `src/pages/ro/*` - 7 Romanian page files
  - `src/pages/el/*` - 7 Greek page files
  - Total: 29 files modified
