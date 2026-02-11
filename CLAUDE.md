# PurelyGreen

Band website for PurelyGreen — Gatsby v5 static site, React 18.
Production URL: purelygreenband.com

## Commands

- `npm run develop` / `npm start` — dev server (localhost:8000)
- `npm run build` — production build
- `npm run serve` — serve built site
- `npm run clean` — clear Gatsby cache
- `npm run format` — Prettier formatting
- No test suite configured

## Tech Stack

- **Framework:** Gatsby 5 + React 18
- **Styling:** styled-components
- **Images:** gatsby-plugin-image / sharp for optimization
- **CMS:** Airtable for gallery images (via gatsby-source-airtable)
- **Contact form:** Formspree
- **Carousels:** Swiper + react-responsive-carousel

## Project Structure

- `src/pages/index.js` — single-page app entry
- `src/components/` — all UI components (Hero, Gallery, Contact, Nav, Footer, etc.)
- `src/hooks/useMediaQuery.ts` — custom responsive hook
- `src/assets/images/` — SVG assets
- `src/styles/global.css` — global styles
- `gatsby-config.js` — main config (plugins, site metadata, Airtable config)

## Code Conventions

- No semicolons (Prettier: `semi: false`)
- Arrow parens avoided (`arrowParens: "avoid"`)
- Functional components only, React hooks
- styled-components for all component styling
- Mix of `.js` and `.jsx` extensions
- Responsive breakpoint: `768px`
- Color palette: primary green `#62c980`, darks `#000`/`#1D372A`/`#1f2937`, white `#fff`
- GraphQL via `useStaticQuery` for data fetching
- No ESLint configured

## Environment Variables

- `GATSBY_AIRTABLE_API` — Airtable API key
- `GATSBY_AIRTABLE_BASE` — Airtable base ID
