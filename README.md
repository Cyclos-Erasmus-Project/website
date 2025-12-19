# CYCLOS - Youth Cycling for Inclusion

A static website for the CYCLOS ERASMUS+ KA220-YOU Cooperation Partnership project, promoting social inclusion of disadvantaged young people through cycling.

## About the Project

**CYCLOS** (Youth Cycling for Inclusion) is an EU-funded initiative that:
- Raises environmental awareness and promotes greener mobility
- Helps disadvantaged youth become more autonomous and independent
- Boosts skills, employability, and social inclusion
- Equips professionals with tools to organize inclusive cycling sessions

### Project Details
- **Duration**: 30 months (September 2025 - February 2028)
- **Budget**: €250,000
- **Funded by**: ERASMUS+ Programme (European Union)

### Partner Organizations
| Organization | Country | Role |
|-------------|---------|------|
| FLVS - Fédérons Les Villes pour la Santé | France | Lead Partner |
| ASSOC - Asociatia Profesionala Neguvernamentala de Asistenta Sociala | Romania | Partner |
| AFIS - Austrian Forum for Integration and Sustainability | Austria | Partner |
| Computer Solutions SA | Greece | Partner |

## Brand Identity

### Colors
| Color | Hex | Usage |
|-------|-----|-------|
| Lime Green | `#CEEE08` | Primary accent, highlights, CTAs |
| Blue | `#3E9CFF` | Secondary accent, links, interactive elements |

### Typography
- **Primary Font**: Gotham

### Logo
Project logo files are located in `/logos/`:
- `logo.jpg` - Main CYCLOS logo
- `colors-font.jpg` - Brand color and typography reference

## Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.0 (Static Site Generator)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v3.4
- **Language**: TypeScript
- **i18n**: 5 languages (English, French, Romanian, German, Greek)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18.14.1 or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd cyclos-web
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Project Structure

```
cyclos-web/
├── public/              # Static assets (copied as-is)
│   └── favicon.svg
├── src/
│   ├── assets/          # Optimized images and fonts
│   ├── components/      # Reusable Astro components
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── LanguageSwitcher.astro
│   ├── content/         # Content collections (news, resources)
│   │   └── config.ts
│   ├── i18n/            # Translation files
│   │   └── translations.ts
│   ├── layouts/         # Page layouts
│   │   └── BaseLayout.astro
│   ├── pages/           # File-based routing
│   │   ├── index.astro  # Redirect to default locale
│   │   ├── en/          # English pages
│   │   ├── fr/          # French pages
│   │   ├── ro/          # Romanian pages
│   │   ├── de/          # German pages
│   │   └── el/          # Greek pages
│   └── styles/          # Global CSS
├── documents/           # Downloadable project documents
├── logos/               # Project and partner logos
├── astro.config.mjs     # Astro configuration
├── tailwind.config.mjs  # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── package.json
```

## Pages

Each language folder contains the following pages:

| Page | Path | Description |
|------|------|-------------|
| Home | `/[lang]/` | Project overview and highlights |
| About | `/[lang]/about/` | Project background, objectives, timeline |
| Partners | `/[lang]/partners/` | Partner organization profiles |
| Work Packages | `/[lang]/work-packages/` | WP1-WP5 descriptions |
| News | `/[lang]/news/` | Project updates and announcements |
| Resources | `/[lang]/resources/` | Downloadable materials |
| Contact | `/[lang]/contact/` | Partner contact information |

## Internationalization

The site supports 5 languages with URL-based routing:
- English: `/en/`
- French: `/fr/`
- Romanian: `/ro/`
- German: `/de/`
- Greek: `/el/`

Translations are managed in `src/i18n/translations.ts`. To add or modify translations:

1. Open `src/i18n/translations.ts`
2. Add/update the translation key for each language
3. Use translations in components via the translation helper

## Adding Content

### News Articles

News articles use Astro's Content Collections. To add a new article:

1. Create a new `.md` file in `src/content/news/[lang]/`
2. Include required frontmatter:
   ```markdown
   ---
   title: "Article Title"
   description: "Brief description"
   pubDate: 2025-01-15
   ---
   
   Article content here...
   ```

### Resources

Resources follow the same pattern in `src/content/resources/[lang]/`.

## Development Guidelines

### Code Style
- Use TypeScript for all scripts
- 2-space indentation
- Single quotes for strings
- No semicolons
- File names: kebab-case (`partner-card.astro`)
- Component names: PascalCase (`PartnerCard`)

### Accessibility Requirements
- WCAG 2.1 AA compliance
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
- Sufficient color contrast

### EU Compliance
Every page must include:
- ERASMUS+ logo and EU co-funding statement
- Disclaimer: "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them."

## Building for Production

```bash
npm run build
```

This generates a static site in the `./dist/` directory, ready for deployment to any static hosting provider (GitHub Pages, Netlify, Vercel, etc.).

### Preview Production Build

```bash
npm run preview
```

## Deployment

The site can be deployed to any static hosting service:

- **GitHub Pages**: Push to `gh-pages` branch or use GitHub Actions
- **Netlify**: Connect repository and set build command to `npm run build`
- **Vercel**: Import project and deploy automatically

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch: `feature/[description]`
2. Follow commit conventions:
   - `feat:` new features
   - `fix:` bug fixes
   - `docs:` documentation changes
   - `style:` formatting changes
   - `refactor:` code refactoring
3. Submit a pull request

## License

This project is developed as part of the CYCLOS ERASMUS+ project. All rights reserved by the project consortium.

## Acknowledgments

This project is co-funded by the European Union through the ERASMUS+ Programme.

---

**CYCLOS - Youth Cycling for Inclusion**  
ERASMUS+ KA220-YOU Cooperation Partnership
