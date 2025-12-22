# Change: Add Privacy-Preserving Analytics

severity: minor

## Why

The CYCLOS website needs visitor analytics for EU project reporting and content optimization. As an ERASMUS+ funded project, GDPR compliance is mandatory. Current state has no analytics, limiting our ability to:
- Report website reach to EU stakeholders
- Understand geographic distribution of visitors
- Identify popular content and optimize user experience
- Track traffic sources and campaign effectiveness

## What Changes

- Integrate GoatCounter (free, privacy-first analytics by EU developer)
- Add analytics script to BaseLayout with environment-based configuration
- No cookies, no personal data, no consent banner required
- Document Python script pattern for custom reporting/data export
- Provider-agnostic design allows future swapping if needed

## Impact

- Affected specs: `website`
- Affected code: `src/layouts/BaseLayout.astro`, environment configuration
- No breaking changes
- No user-facing consent requirements (cookieless tracking)

## Decision Rationale

| Considered | Verdict | Reason |
|------------|---------|--------|
| Google Analytics | Rejected | Requires cookies, consent banners, US data transfer issues |
| Plausible Cloud | Rejected | $9/mo cost unjustified for modest traffic static site |
| Fathom | Rejected | $14/mo, same cost concern |
| Umami self-hosted | Rejected | Requires Vercel + Postgres setup, maintenance overhead |
| Cloudflare Analytics | Rejected | Would require hosting migration from GitHub Pages |
| **GoatCounter** | **Selected** | Free for non-commercial, EU developer, privacy-first, dashboard included |
| Custom Python solution | Documented | Available as enhancement for advanced reporting needs |

## Selected: GoatCounter

- **Cost**: Free (non-commercial use) or €15/year (commercial)
- **Privacy**: No cookies, no PII, GDPR-compliant by design
- **Developer**: Martin Tournoij (Netherlands, EU)
- **Script size**: ~3.5KB
- **Features**: Dashboard, data export API, geographic data
- **Self-host option**: Available if needed later

## Custom Python Enhancement

The project's UV infrastructure enables Python helper scripts for:
- Exporting GoatCounter data via API
- Generating custom reports for EU stakeholders
- Creating visualizations not available in standard dashboard
- Aggregating data across reporting periods

## Privacy Compliance

- **Cookieless**: No cookies set, no consent banner needed
- **No PII**: No personal data collected or stored
- **EU Developer**: GoatCounter developed in Netherlands
- **GDPR Article 6(1)(f)**: Legitimate interest basis for anonymous analytics
- **Data Export**: Full data ownership, can export/delete anytime
