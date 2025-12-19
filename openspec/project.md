# Project Context

## Purpose

CYCLOS (Youth Cycling for Inclusion) is an ERASMUS+ KA220-YOU Cooperation Partnership project focused on promoting the social inclusion of disadvantaged young people through cycling. The project aims to:

- Raise environmental awareness and promote greener mobility
- Help disadvantaged youth become more autonomous and independent
- Boost skills, employability, and social inclusion
- Equip professionals with tools to organize inclusive cycling sessions

This static website serves as the public-facing platform to:
- Communicate the project's mission, objectives, and progress
- Showcase partner organizations across 4 EU countries
- Share project results, resources, and educational materials
- Provide access to the digital platform and learning tools

### Project Details
- **Duration**: 30 months (September 2025 - February 2028)
- **Budget**: €250,000
- **Funded by**: ERASMUS+ Programme (European Union)

### Partner Organizations
1. **FLVS - Fédérons Les Villes pour la Santé** (France) - Lead Partner
2. **ASSOC - Asociatia Profesionala Neguvernamentala de Asistenta Sociala** (Romania)
3. **AFIS - Austrian Forum for Integration and Sustainability** (Austria)
4. **Computer Solutions SA** (Greece)

### Work Packages
- WP1: Project Management
- WP2: Cycling Knowledge (educational guide development)
- WP3: From Theory to Practice (practical cycling sessions)
- WP4: Digital Platform and Awareness (learning app)
- WP5: Dissemination, Recommendations, and Quality Evaluation

## Tech Stack

- **Framework**: Astro (static site generator)
- **Styling**: Tailwind CSS
- **Languages**: TypeScript, HTML, CSS
- **Deployment**: Static hosting (GitHub Pages, Netlify, or Vercel)
- **Content**: Markdown for content pages
- **Internationalization**: i18n support for 5 languages (EN, FR, RO, DE, EL)

## Project Conventions

### Code Style
- Use TypeScript for all scripts
- 2-space indentation
- Single quotes for strings
- No semicolons (Prettier default for Astro)
- File names: kebab-case (e.g., `partner-card.astro`)
- Component names: PascalCase (e.g., `PartnerCard`)

### Architecture Patterns
- Component-based architecture using Astro components
- Page-based routing via `src/pages/`
- Shared layouts in `src/layouts/`
- Reusable components in `src/components/`
- Static assets in `public/`
- Content collections for structured content (partners, news, resources)

### Folder Structure
```
src/
├── components/     # Reusable UI components
├── layouts/        # Page layouts
├── pages/          # Route pages
│   └── [lang]/     # Localized pages
├── content/        # Markdown content collections
├── i18n/           # Translation files
├── styles/         # Global styles
└── assets/         # Images, fonts
public/
├── logos/          # Partner and project logos
└── documents/      # Downloadable PDFs
```

### Testing Strategy
- Manual testing across browsers (Chrome, Firefox, Safari, Edge)
- Lighthouse audits for accessibility and performance
- Build-time validation of content and links

### Git Workflow
- Main branch: `main` (production-ready)
- Feature branches: `feature/[description]`
- Commit convention: Conventional Commits
  - `feat:` new features
  - `fix:` bug fixes
  - `docs:` documentation changes
  - `style:` formatting changes
  - `refactor:` code refactoring

## Domain Context

### Target Audience
1. **Disadvantaged Youth**: Young people facing barriers to employment due to disabilities, migrant backgrounds, or low socioeconomic status
2. **Youth Workers & Professionals**: Those organizing inclusive cycling sessions
3. **Project Partners & Stakeholders**: EU institutions, local governments, NGOs
4. **General Public**: Anyone interested in sustainable mobility and youth inclusion

### Key Terminology
- **NEET**: Not in Education, Employment, or Training
- **Soft Mobility**: Non-motorized transportation (cycling, walking)
- **Social Inclusion**: Integration of marginalized groups into society
- **Green Mobility**: Environmentally sustainable transportation

### Visual Identity
- Project logo available in `logos/` directory
- EU ERASMUS+ co-funding acknowledgment required on all pages
- Partner organization logos to be displayed

## Important Constraints

### EU Funding Requirements
- ERASMUS+ logo and co-funding statement MUST appear on all pages
- Disclaimer: "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them."

### Accessibility
- WCAG 2.1 AA compliance required
- Support for screen readers
- Keyboard navigation
- Sufficient color contrast
- Alt text for all images

### Multilingual Support
- Content must be available in 5 languages: English, French, Romanian, German, Greek
- Language switcher must be accessible from all pages
- URLs should reflect language (e.g., `/en/about`, `/fr/about`)

### Performance
- Static site generation for fast loading
- Optimized images (WebP format where possible)
- Mobile-first responsive design

## External Dependencies

### Required Integrations
- None initially (static site)

### Future Integrations (WP4)
- Digital learning platform (to be developed)
- Possible analytics (privacy-compliant, e.g., Plausible or Fathom)

### External Resources
- ERASMUS+ Programme branding guidelines
- Partner organization logos and information
- Project documentation and reports
