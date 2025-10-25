# Changes

## Pages & Routing
- Replaced legacy layout with `client/components/layout/MainLayout.tsx` and updated routing in `client/App.tsx` to focus on `/`, `/about`, `/features`, `/pricing`, and `/contact`.
- Rebuilt core pages (`Index.tsx`, `About.tsx`, `Features.tsx`, `Pricing.tsx`, `Contact.tsx`) with concise marketing copy, larger typographic scale, and reusable section components.

## Sections & Content Mapping
- Header, hero, features, testimonials, integrations, and CTA now live in dedicated components under `client/sections/*`.
- Migrated original site messaging into shorter blurbs: service cards → `FeaturesSection`, proof points → `ValuePropsSection`, success stories → testimonials, automation logos → integrations grid.
- Preserved key stats (5x ROI, +110% leads, 2.5x conversions) and CTAs such as strategy session and pricing requests.

## Design & Theming
- Updated `global.css` and `tailwind.config.ts` with a refreshed 4-color palette, larger radii, custom gradients, and shadows for softer cards.
- Introduced new hero, dark value-prop, and gradient CTA styles aligned with the provided skeleton brief.
- Refreshed `index.html` meta tags for improved SEO and social sharing.

## Deployment & Build
- Adjusted `vercel.json` SPA fallback to `{ "source": "/(.*)", "destination": "/index.html" }`.
- Verified `pnpm build:client` (build completed successfully before the command timeout in the terminal).

## TODO
- Swap placeholder integration labels with actual logos if new brand assets become available.
- Replace the static contact form with a live submission endpoint when backend wiring is defined.
