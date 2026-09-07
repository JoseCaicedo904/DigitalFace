# DigitalFace website context

Updated 2026-09-07. This is the actual corporate website source, at C:/Users/jose\_/OneDrive/Documents/WEBSITES/Website Official DF/DF Site.

- React 18, React Router 6, Vite, TypeScript, Express 5. English root URLs and matching /es routes. Twelve route concepts, 24 indexable URLs; three industry funnels plus corporate, contact, booking and legal pages.
- Canonical production origin: https://digitalface.app. shared/site.json is the route/origin registry; client/App.tsx maps route IDs to lazy components. No separate public blog, portfolio or individual service-page routes currently exist.
- Favicon source: `public/DIGITAL FACE favicon.png` (464 x 860 transparent PNG). `scripts/generate-favicons.mjs` derives `/favicon.ico`, `/favicon-48x48.png`, `/favicon-96x96.png` and `/favicon-192x192.png`; `index.html` declares those four icons globally before the generated SEO head.
- pnpm build:client generates sitemap/robots, browser chunks and real static route HTML using React server rendering; SEO validation is part of the build. Client hydration preserves interactive UI. Vercel cleanUrls/trailingSlash settings replace the former universal index.html rewrite; unknown URLs use 404.html.
- usePageMetadata uses actual localized copy for both prerender and client navigation. client/lib/seo.tsx supplies page/service/breadcrumb schema; existing Organization/WebSite and visible industry FAQ data are collected in the initial head.
- VITE_GA4_MEASUREMENT_ID requires the owner's real GA4 stream ID. Only production deployments on digitalface.app initialize tracking. Events: page_view, generate_lead, consultation_click, contact_click and service_request_add. generate_lead requires confirmed API success; a calendar click never claims a booking.
- Existing form endpoint, server-side workflow configuration, service IDs, language paths and GHL booking widget are retained. Do not use a local private configuration value for external testing. .env is preserved locally but removed from Git tracking; prior Git history still needs an owner-led exposure review.
- Local SEO build, favicon validation, typecheck and 148 non-visual tests passed during this work; final validation details live in SEO_IMPLEMENTATION_REPORT.md. No visual automation was used.
- Production deployment: existing Vercel project `digital-face`, deployment `dpl_47g992eta9hKCNWdGyBeWRiGr4TC`, target production, status READY, aliased to https://digitalface.app. Live HTTP verification on 2026-09-07 confirmed the four favicon URLs return public image bytes matching this source. No Google, DNS, GA4, GHL, n8n, form, calendar or provider-account setting was changed.
- The original read-only public HTTP baseline is in seo-audit/live-http-baseline.json. It captured the pre-deployment old SPA behavior and is no longer evidence of current production.
- The current website's Capture / AI / Sales System presentation and usage-credit copy conflict with the older approved Capture / AI / Full Growth pricing in D:/Desktop/DF/PROJECT_CONTEXT.md. This SEO task did not authorize new prices or infer that the current presentation supersedes prior approval; owner reconciliation remains open.

Read AGENTS.md, SEO_IMPLEMENTATION_REPORT.md and SEO_MANUAL_ACTIONS.md before future SEO or deployment changes. Run pnpm build, pnpm typecheck, pnpm test. Build before tests that inspect dist/spa.
