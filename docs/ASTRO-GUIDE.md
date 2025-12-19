# Astro Framework - Developer Handout

A quick reference guide for developers working on this Astro project.

## What is Astro?

Astro is a modern static site generator that:
- Ships **zero JavaScript** by default (only HTML/CSS)
- Uses **component islands** for interactive elements
- Supports multiple UI frameworks (React, Vue, Svelte, etc.)
- Provides excellent performance out of the box

## Core Concepts

### 1. Astro Components (`.astro` files)

Astro components have two parts separated by `---`:

```astro
---
// Component Script (runs at build time)
const title = "Hello World"
const items = ["One", "Two", "Three"]
---

<!-- Component Template (HTML output) -->
<h1>{title}</h1>
<ul>
  {items.map(item => <li>{item}</li>)}
</ul>

<style>
  /* Scoped CSS - only affects this component */
  h1 { color: blue; }
</style>
```

**Key points:**
- The frontmatter (`---`) runs on the server at build time
- Use `{}` for JavaScript expressions in templates
- Styles are scoped by default (won't leak to other components)

### 2. File-Based Routing

Files in `src/pages/` become routes automatically:

| File | URL |
|------|-----|
| `src/pages/index.astro` | `/` |
| `src/pages/about.astro` | `/about/` |
| `src/pages/en/index.astro` | `/en/` |
| `src/pages/en/contact.astro` | `/en/contact/` |

### 3. Layouts

Layouts wrap pages with shared structure:

```astro
---
// src/layouts/BaseLayout.astro
const { title } = Astro.props
---

<html>
  <head>
    <title>{title}</title>
  </head>
  <body>
    <header>...</header>
    <main>
      <slot />  <!-- Page content goes here -->
    </main>
    <footer>...</footer>
  </body>
</html>
```

Using a layout in a page:

```astro
---
// src/pages/en/about.astro
import BaseLayout from '../../layouts/BaseLayout.astro'
---

<BaseLayout title="About Us">
  <h1>About Us</h1>
  <p>Page content here...</p>
</BaseLayout>
```

### 4. Components

Import and use components like any modern framework:

```astro
---
import Header from '../components/Header.astro'
import Card from '../components/Card.astro'
---

<Header />
<Card title="Feature 1" description="Description here" />
```

### 5. Props

Pass data to components via props:

```astro
---
// Card.astro
interface Props {
  title: string
  description?: string  // Optional
}

const { title, description = "Default text" } = Astro.props
---

<div class="card">
  <h2>{title}</h2>
  <p>{description}</p>
</div>
```

### 6. Slots

Slots allow passing content into components:

```astro
---
// Box.astro
---
<div class="box">
  <slot />  <!-- Content inserted here -->
</div>
```

```astro
---
import Box from './Box.astro'
---

<Box>
  <p>This content goes into the slot!</p>
</Box>
```

## Project-Specific Patterns

### Using Translations

```astro
---
import { translations } from '../i18n/translations'

// Get language from URL
const lang = Astro.url.pathname.split('/')[1] || 'en'
const t = translations[lang]
---

<h1>{t.home.title}</h1>
<p>{t.home.description}</p>
```

### Language-Aware Links

Always include the language prefix in links:

```astro
---
const lang = Astro.url.pathname.split('/')[1] || 'en'
---

<a href={`/${lang}/about/`}>About</a>
<a href={`/${lang}/contact/`}>Contact</a>
```

### Current Page Detection

```astro
---
const pathname = Astro.url.pathname
const isActive = pathname.includes('/about')
---

<a href="/en/about/" class={isActive ? 'active' : ''}>About</a>
```

## Common Tasks

### Adding a New Page

1. Create the file in each language folder:
   ```
   src/pages/en/new-page.astro
   src/pages/fr/new-page.astro
   src/pages/de/new-page.astro
   src/pages/ro/new-page.astro
   src/pages/el/new-page.astro
   ```

2. Use the base layout:
   ```astro
   ---
   import BaseLayout from '../../layouts/BaseLayout.astro'
   import { translations } from '../../i18n/translations'
   
   const lang = 'en'
   const t = translations[lang]
   ---
   
   <BaseLayout title={t.newPage.title}>
     <h1>{t.newPage.title}</h1>
     <!-- Content -->
   </BaseLayout>
   ```

3. Add translations to `src/i18n/translations.ts`

4. Add navigation link in `src/components/Header.astro`

### Adding a New Component

1. Create in `src/components/`:
   ```astro
   ---
   // src/components/Alert.astro
   interface Props {
     type?: 'info' | 'warning' | 'error'
     message: string
   }
   
   const { type = 'info', message } = Astro.props
   ---
   
   <div class={`alert alert-${type}`}>
     {message}
   </div>
   
   <style>
     .alert { padding: 1rem; border-radius: 0.5rem; }
     .alert-info { background: #e0f2fe; }
     .alert-warning { background: #fef3c7; }
     .alert-error { background: #fee2e2; }
   </style>
   ```

2. Import and use:
   ```astro
   ---
   import Alert from '../components/Alert.astro'
   ---
   
   <Alert type="warning" message="This is a warning!" />
   ```

### Adding Static Assets

- **Optimized images**: Place in `src/assets/`, import in components
- **Unprocessed files**: Place in `public/`, reference by path

```astro
---
// Optimized image (processed by Astro)
import logo from '../assets/logo.png'
---

<img src={logo.src} alt="Logo" />

<!-- Unprocessed file from public/ -->
<img src="/images/photo.jpg" alt="Photo" />
```

## Styling with Tailwind CSS

This project uses Tailwind CSS. Apply utility classes directly:

```astro
<div class="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
  <h2 class="text-xl font-bold text-gray-800">Title</h2>
  <button class="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
    Click me
  </button>
</div>
```

### CYCLOS Brand Colors

The project uses two primary brand colors:

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Lime Green | `#CEEE08` | `--color-lime` | Primary accent, highlights, CTAs |
| Blue | `#3E9CFF` | `--color-blue` | Secondary accent, links, interactive elements |

**Using brand colors in components:**

```astro
<!-- Using custom CSS -->
<button class="btn-primary">Get Started</button>

<style>
  .btn-primary {
    background-color: #CEEE08;
    color: #000;
  }
  .btn-primary:hover {
    background-color: #3E9CFF;
    color: #fff;
  }
</style>
```

If brand colors are configured in `tailwind.config.mjs`, use them as utility classes:

```astro
<button class="bg-lime hover:bg-blue text-black hover:text-white">
  Get Started
</button>
```

### Brand Typography

The project uses **Gotham** as the primary font family. Ensure the font is properly loaded in the base layout or global styles.

### Combining Tailwind with Scoped Styles

```astro
<div class="container custom-section">
  <h1 class="text-2xl font-bold">Title</h1>
</div>

<style>
  /* Custom styles alongside Tailwind */
  .custom-section {
    border-left: 4px solid #CEEE08;
  }
</style>
```

## Development Commands

```bash
# Start dev server (hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npx astro check
```

## Debugging Tips

1. **Check the terminal** for build errors
2. **View page source** to see generated HTML
3. **Use browser DevTools** for styling issues
4. **Check Network tab** to verify assets load correctly

## Key Differences from React/Vue

| Concept | React/Vue | Astro |
|---------|-----------|-------|
| Rendering | Client-side | Build-time (static HTML) |
| State | useState/ref | Not needed (no JS by default) |
| Props | Same syntax | Use `Astro.props` |
| Events | onClick, etc. | Use `<script>` for client JS |
| Loops | .map() | Same, but in template |
| Conditionals | && or ternary | Same, in template |

## Resources

- [Astro Documentation](https://docs.astro.build/)
- [Astro Tutorial](https://docs.astro.build/en/tutorial/0-introduction/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

*Last updated: December 2025*
