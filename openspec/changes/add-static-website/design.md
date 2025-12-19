# Design: CYCLOS Static Website

## Context

The CYCLOS project is an ERASMUS+ funded initiative (KA220-YOU) running from September 2025 to February 2028 with partners in France, Romania, Austria, and Greece. The website must serve as the primary communication channel for project dissemination (WP5) and must comply with EU funding visibility requirements.

**Stakeholders**: Project partners, EU/ERASMUS+ programme, disadvantaged youth, youth workers, general public

**Constraints**:
- EU co-funding acknowledgment mandatory
- 5 languages required (English, French, Romanian, German, Greek)
- WCAG 2.1 AA accessibility compliance
- Static hosting (no server-side requirements)
- Limited technical resources for ongoing maintenance

## Goals / Non-Goals

### Goals
- Create a professional, accessible static website
- Support 5 languages with easy content management
- Meet EU ERASMUS+ branding requirements
- Provide clear information about project objectives, partners, and progress
- Enable easy updates by non-technical team members (via Markdown)
- Fast loading on mobile devices (target: Lighthouse score > 90)

### Non-Goals
- Dynamic features (user accounts, forms backend, databases)
- E-commerce or payment functionality
- Integration with external CMS
- Real-time updates or live content
- Complex animations or heavy JavaScript

## Decisions

### Framework: Astro

**Decision**: Use Astro as the static site generator

**Rationale**:
- Ships zero JavaScript by default (optimal performance)
- Excellent Markdown/MDX support for content management
- Built-in support for static site generation
- Component islands for interactive elements when needed
- Strong TypeScript support
- Growing ecosystem and community

**Alternatives considered**:
- Next.js: Overkill for static site, requires more JavaScript
- Hugo: Faster build, but less flexible component model
- 11ty: Good option, but less modern DX than Astro
- Plain HTML: Too manual, harder to maintain translations

### Styling: Tailwind CSS

**Decision**: Use Tailwind CSS for styling

**Rationale**:
- Utility-first approach enables rapid development
- Built-in responsive design utilities
- Excellent documentation
- Pairs well with Astro
- Consistent design system out of the box

### Internationalization: File-based routing with JSON translations

**Decision**: Use `[lang]/` route structure with JSON translation files

**Rationale**:
- Clean, SEO-friendly URLs (`/en/about`, `/fr/about`)
- Each language has its own folder in `src/pages/[lang]/`
- UI strings stored in `src/i18n/[lang].json`
- Content collections can be language-specific
- No runtime i18n library needed (keeps bundle small)

**Structure**:
```
src/
├── pages/
│   ├── index.astro          # Redirects to default language
│   └── [lang]/
│       ├── index.astro      # Homepage
│       ├── about.astro
│       ├── partners.astro
│       └── ...
├── i18n/
│   ├── en.json
│   ├── fr.json
│   ├── ro.json
│   ├── de.json
│   └── el.json
```

### Content Management: Markdown with Content Collections

**Decision**: Use Astro Content Collections for structured content

**Rationale**:
- Type-safe content with schema validation
- Partners can edit Markdown files without technical knowledge
- Git-based version control for content changes
- No external CMS dependencies

**Collections**:
- `partners`: Partner organization profiles
- `news`: Project updates and news articles
- `resources`: Downloadable materials (future)

### Deployment: GitHub Pages (initial)

**Decision**: Deploy to GitHub Pages initially

**Rationale**:
- Free hosting for static sites
- Simple GitHub Actions workflow
- Easy to migrate to Netlify/Vercel if needed later
- Integrates with existing Git workflow

## Risks / Trade-offs

| Risk | Impact | Mitigation |
|------|--------|------------|
| Translation maintenance burden | Medium | Use structured JSON files, provide partner guide |
| Partner unfamiliar with Markdown | Medium | Create simple editing guide, use GitHub web editor |
| Astro ecosystem changes | Low | Pin dependencies, follow LTS versions |
| Accessibility gaps | High | Test with automated tools + manual screen reader testing |
| EU branding requirements change | Low | Keep disclaimer in single component for easy updates |

## Migration Plan

Not applicable - this is a greenfield project.

## Open Questions

1. **Hosting provider**: GitHub Pages initially, but should we use Netlify/Vercel for preview deployments?
2. **Analytics**: Should we add privacy-compliant analytics (Plausible/Fathom)?
3. **Contact form**: Should contact page have a form, or just email links?
4. **News frequency**: How often will news be updated? (affects content structure)
5. **Partner content**: Will partners provide their own content, or should coordinator draft it?
