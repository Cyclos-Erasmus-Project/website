# User Requests Log

This log tracks stakeholder feedback and requests that result in OpenSpec change proposals.

---

## 2026-05-07: Romania Partner Meeting Feedback

**From:** Project consortium (in-person meeting)
**Location:** Romania
**Dates:** 5–7 May 2026

### Summary

Two website change requests surfaced during the partner meeting:

1. **Remove the Work Packages section** — partners want the dedicated work packages page (and its navigation entry) taken out of the public site.
2. **Hero images appear too dark** — the hero imagery across pages reads as visually dark; partners would like them lightened or replaced with brighter alternatives.

### Status

1. **Remove Work Packages section** — **Implemented in v0.11.0** (2026-05-14). OpenSpec change archived at `openspec/changes/archive/2026-05-14-remove-work-packages/`.
2. **Lighten hero imagery** — **Declined.**

### Rationale for declining (2)

The hero section is a video background (`/videos/hero1.mp4`) with a heavy dark-blue gradient overlay at 70–80% opacity (`bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-900/80`), white foreground text, and `drop-shadow` for cosmetic legibility. The overlay is what guarantees the white headline/subtitle clear WCAG 2.1 AA contrast (4.5:1 normal text, 3:1 large text) against every frame of the underlying video.

Naively lightening the overlay (or swapping in a brighter video without compensating) would make contrast frame-dependent — passing on dark frames and failing on bright ones (sky, light clothing, pavement). This is exactly the failure mode WCAG SC 1.4.3 prohibits, and the `website` spec's *Accessibility › Color contrast* scenario requires AA compliance for all text. Drop shadows do not count toward measured contrast.

Decision: keep the current hero treatment. If partners raise it again, mitigation options that preserve AA — localized scrim behind text only, bottom-up gradient, or a brighter source video paired with a sufficient overlay — should be evaluated first rather than a blanket opacity reduction.

### Notes

- Removing the Work Packages page touches the `website` spec (currently includes a Work Packages requirement) and will require a `REMOVED Requirements` delta if approved.

---

## 2026-02-03: French Website Content Corrections

**From:** Sophie MCGANNAN <sophie.mcgannan@vivonsenforme.org>  
**To:** o.giannakopoulou, Nigar, oefisteam, s.pitoglou  
**Date:** Tuesday, 3 February 2026 at 08:59  
**Subject:** Re: Corrections Website CYCLOS FR  
**Attachment:** CORRECTIONS_WEBSITE_CYCLOS_FR.md

### Summary

Sophie (FLVS) forwarded a document with comprehensive French language corrections prepared by her colleagues. The corrections cover all major pages of the French website with improvements to:

1. **Terminology updates** - "jeunes défavorisés" → "jeunes en situation de vulnérabilité", "Mobilité Verte" → "Mobilité durable"
2. **Proper French phrasing** - More natural and professional French throughout
3. **Work package descriptions** - Complete rewrite of all 5 work package titles and descriptions
4. **Partner descriptions** - Updated FLVS name to "Fédération Française des Villes Santé" and improved all partner expertise descriptions
5. **EU funding disclaimer** - Updated to proper co-funding acknowledgment language
6. **Accent corrections** - Fixed missing accents throughout (é, è, ê, à, etc.)

### Implementation

**Status:** Implemented directly (no OpenSpec change proposal needed for content corrections)  
**Severity:** patch

### Files Modified

- `src/i18n/translations.ts` - Updated all French translation keys
- `src/pages/fr/index.astro` - Fixed partner info
- `src/pages/fr/about.astro` - Updated project overview, objectives, target groups, funding section
- `src/pages/fr/partners.astro` - Updated all 4 partner descriptions and expertise areas
- `src/pages/fr/work-packages.astro` - Updated all 5 work package activities and deliverables
- `src/pages/fr/resources.astro` - Updated resource categories and descriptions
- `src/pages/fr/contact.astro` - Fixed partner names and city names
- `src/components/Footer.astro` - Now uses new `footer.description` translation key

### Additional Changes

- Added `footer.description` translation key to all 5 languages to support customized footer text per language

### Original Email

> Thank you Olympia.
>
> My colleagues have also checked the French site and made the corrections in the attached document (in green)
>
> Best wishes,  
> Sophie

---

## 2026-02-02: German Translation Completeness

**From:** Nigar Sultanli <researcher@oefis.org>  
**To:** Sophie MCGANNAN <sophie.mcgannan@vivonsenforme.org>, oefisteam <oefisteam@gmail.com>  
**Date:** Monday, 2 February 2026 at 09:04  
**Subject:** Update the German website review

### Summary

Nigar (Project Assistant at AFIS) reviewed the German version of the website (/de/) and identified translation gaps:

1. **Body text in English** - While main headings and menus are correctly in German, detailed descriptions in the about, partners, and work packages sections remain in English
2. **Country names untranslated** - "Romania" and "Greece" displayed in English instead of German ("Rumänien", "Griechenland")
3. **Form fields in English** - Some smaller UI details still in English

### Change Proposal

**Change ID:** `complete-german-translations`  
**Status:** Implemented  
**Severity:** patch

**Note:** While the request was specifically about German, the fix was expanded to ensure translation completeness across all 5 supported languages (DE, FR, RO, EL). The same hardcoded English content existed in all non-English pages.

### Original Email

> Hi Sophie,
>
> I hope you're having a wonderful week.
>
> This is Nigar, the Project Assistant. I've been taking a close look at the German version of the CYCLOS website (/de/) to familiarize myself with the content, and I wanted to kindly share a few observations with you.
>
> The overall layout and structure look great!
>
> I noticed that while the main headings and menus are correctly in German, a significant portion of the body text, especially in the about, partners, and work packages sections, is still shown in English. It looks like the detailed descriptions haven't been fully translated yet.
>
> I also would like to kindly mention that some smaller details, such as country names, for example, Romania, Greece and some form fields, are still in English across the site.
>
> I thought I'd flag this for you so the web team can take a look when they have a moment.
>
> Thank you!
>
> Best regards,
>
> Nigar
