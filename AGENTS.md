# Fusion Starter

A production-ready full-stack React application template with integrated Express server, featuring React Router 6 SPA mode, TypeScript, Vitest, Zod and modern tooling.

While the starter comes with a express server, only create endpoint when strictly neccesary, for example to encapsulate logic that must leave in the server, such as private keys handling, or certain DB operations, db...

## Tech Stack

- **PNPM**: Prefer pnpm
- **Frontend**: React 18 + React Router 6 (spa) + TypeScript + Vite + TailwindCSS 3
- **Backend**: Express server integrated with Vite dev server
- **Testing**: Vitest
- **UI**: Radix UI + TailwindCSS 3 + Lucide React icons

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/ui/        # Pre-built UI component library
├── App.tsx                # App entry point and with SPA routing setup
└── global.css            # TailwindCSS 3 theming and global styles

server/                   # Express API backend
├── index.ts              # Main server setup (express config + routes)
└── routes/               # API handlers

shared/                   # Types used by both client & server
└── api.ts                # Example of how to share api interfaces
```

## Key Features

## SPA Routing System

The routing system is powered by React Router 6:

- `client/pages/Index.tsx` represents the home page.
- Routes are defined in `client/App.tsx` using the `react-router-dom` import
- Route files are located in the `client/pages/` directory

For example, routes can be defined with:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
  <Route path="*" element={<NotFound />} />
</Routes>;
```

### Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme and design tokens**: Configure in `client/global.css`
- **UI components**: Pre-built library in `client/components/ui/`
- **Utility**: `cn()` function combines `clsx` + `tailwind-merge` for conditional classes

```typescript
// cn utility usage
className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // User overrides
)}
```

### Express Server Integration

- **Development**: Single port (8080) for both frontend/backend
- **Hot reload**: Both client and server code
- **API endpoints**: Prefixed with `/api/`

#### Example API Routes

- `GET /api/ping` - Simple ping api
- `GET /api/demo` - Demo endpoint

### Shared Types

Import consistent types in both client and server:

```typescript
import { DemoResponse } from "@shared/api";
```

Path aliases:

- `@shared/*` - Shared folder
- `@/*` - Client folder

## Development Commands

```bash
pnpm dev        # Start dev server (client + server)
pnpm build      # Production build
pnpm start      # Start production server
pnpm typecheck  # TypeScript validation
pnpm test          # Run Vitest tests
```

## Adding Features

### Add new colors to the theme

Open `client/global.css` and `tailwind.config.ts` and add new tailwind colors.

### New API Route

1. **Optional**: Create a shared interface in `shared/api.ts`:

```typescript
export interface MyRouteResponse {
  message: string;
  // Add other response properties here
}
```

2. Create a new route handler in `server/routes/my-route.ts`:

```typescript
import { RequestHandler } from "express";
import { MyRouteResponse } from "@shared/api"; // Optional: for type safety

export const handleMyRoute: RequestHandler = (req, res) => {
  const response: MyRouteResponse = {
    message: "Hello from my endpoint!",
  };
  res.json(response);
};
```

3. Register the route in `server/index.ts`:

```typescript
import { handleMyRoute } from "./routes/my-route";

// Add to the createServer function:
app.get("/api/my-endpoint", handleMyRoute);
```

4. Use in React components with type safety:

```typescript
import { MyRouteResponse } from "@shared/api"; // Optional: for type safety

const response = await fetch("/api/my-endpoint");
const data: MyRouteResponse = await response.json();
```

### New Page Route

1. Create component in `client/pages/MyPage.tsx`
2. Add route in `client/App.tsx`:

```typescript
<Route path="/my-page" element={<MyPage />} />
```

## Production Deployment

- **Standard**: `pnpm build`
- **Binary**: Self-contained executables (Linux, macOS, Windows)
- **Cloud Deployment**: Use either Netlify or Vercel via their MCP integrations for easy deployment. Both providers work well with this starter template.

## Architecture Notes

- Single-port development with Vite + Express integration
- TypeScript throughout (client, server, shared)
- Full hot reload for rapid development
- Production-ready with multiple deployment options
- Comprehensive UI component library included
- Type-safe API communication via shared interfaces

---

# DigitalFace SEO, copy and localization rules

Permanent rules for this repository. They outrank any generic starter guidance
above when the two conflict. Full audit context lives in `seo-audit/`.

## What this site is

DigitalFace Marketing installs and runs patient acquisition, follow-up and booking
systems for **dental practices, aesthetic medicine / plastic surgery, and med
spas**, in the **United States and Latin America**, in **English and Spanish**.
It is a vertical healthcare-adjacent agency, not a generic full-service one — copy
and keyword decisions should reflect that.

## Never invent

- No client results, reviews, ratings, awards, certifications, partner status,
  office addresses, staff counts, founding dates, or business statistics.
- Only claims already published on the site or supplied in writing may be used.
- If an existing claim cannot be verified, leave it and flag it — never delete
  silently, never amplify.
- No "best", "#1", "leading", "award-winning" or "top-rated" without a verified,
  attributable source.

## Localization

- English lives at the root, Spanish under `/es`, same slugs. The URL is the only
  source of truth for locale (`client/i18n/geo.ts`).
- Spanish is **transcreated**, not translated. Use neutral LATAM vocabulary
  (_pauta_, _agendamiento_, _captación de pacientes_), not Spain-specific terms.
- Never mix languages within a page — that includes `<title>`, meta description,
  form labels, validation messages and alt text.
- `hreflang` values are `en`, `es` and `x-default` only. **Never emit
  `hreflang="es-419"`** — Google does not support it. If country targeting is ever
  added, use `es-MX`, `es-CO`, `es-AR`, `es-CL`, `es-PE`; `es-ES` for Spain only.
- Open Graph is a separate system: the Spanish tree uses `og:locale` `es_LA`
  (Latin America), not `es_ES` (Spain).
- Never create thin country or city pages that only swap a place name.

## Metadata

- Every indexable route gets a unique title and description via `usePageMetadata`.
- Title pattern: `{what the buyer searches} | DigitalFace Marketing`. Lead with the
  search term, not the internal product name. "Growth System", "Sales System" and
  "Pay per Service" are internal vocabulary — they may appear in the H1, not as the
  whole title.
- Descriptions state the outcome, the vertical and the market. They must accurately
  summarize what is visible on the page.
- Any page that must not be indexed passes `{ noindex: true }`. This matters here:
  the SPA answers unknown URLs with HTTP 200, so an undirected error page is
  indexable.

## Structured data

- Built in `client/lib/structuredData.ts`, injected by
  `client/components/seo/StructuredData.tsx`.
- Every property must be backed by copy visible on the same page or in the footer.
- Do not add `aggregateRating`, `review`, `award`, `foundingDate`, `numberOfEmployees`
  or `Offer` prices without written confirmation.
- Do not use `LocalBusiness` — DigitalFace is remote-first and the type overstates
  the physical-premises claim. `Organization` is the correct type.

## Copy

Write specific, concise, confident, evidence-based, easy to scan. Prefer the
concrete outcome over the adjective.

Avoid unless the surrounding context makes them unusually concrete: _unlock,
revolutionize, cutting-edge, game-changing, unparalleled, world-class, 360°,
results-driven, innovative solutions, leverage, elevate your brand_.

Do not rewrite copy that already works. Every edit must improve at least one of:
search-intent alignment, comprehension, differentiation, credibility, conversion,
localization, accessibility, or technical SEO.

## Structural rules

- Do not change public URLs without adding redirects and updating canonicals,
  internal links, `hreflang` and `scripts/generate-sitemap.mjs`.
- Routes added to `client/App.tsx` must also be added to the sitemap generator —
  the generator warns on drift but does not fail the build.
- One dominant search intent per URL. Do not create separate pages for keyword
  synonyms.
- Use descriptive internal anchors. Avoid "click here", "read more", "learn more"
  where a real description fits.
- Preserve accessibility semantics, `data-media-slot` / `data-form-slot` hooks, and
  any analytics or CRM integration attributes.
- Run `pnpm format.fix`, `pnpm typecheck`, `pnpm test` and `pnpm build` after edits.
