# DigitalFace SEO + CRO audit — change log

Date: 2026-08-18
Scope: `digitalfacemarketing.com` (Vite + React Router 6 SPA, EN at root, ES under `/es`)

## Executive summary

The site was in better shape than a typical pre-audit baseline. Copy is already
outcome-first, evidence-bounded and genuinely transcreated rather than translated;
the locale architecture (edge middleware, cookie persistence, bot passthrough,
reciprocal `hreflang`) is well built and did not need correcting. So this pass did
**not** rewrite working copy. It closed the gaps that were actually costing
visibility:

1. **Nothing on the site was machine-readable.** There was no structured data of
   any kind — no `Organization`, no `BreadcrumbList`, no `FAQPage`. Added, built
   only from facts already published on the site.
2. **Titles were named after internal vocabulary, not search demand.** "Dental
   Practice Growth System", "Sales System", "Pay per Service" and "Plans" are what
   the team calls these things; they are not what buyers type. Rewritten in both
   locales around the vertical + outcome terms this business actually competes for.
3. **The three industry funnels were near-orphaned.** They linked out only to
   `/privacy` and `/terms`, so crawlers could enter but not leave and no link
   equity flowed back to the pages meant to rank. Fixed in the funnel footer.
4. **The 404 was indexable.** The SPA answers every unknown URL with HTTP 200 and
   carried no robots directive, so any stale or mistyped inbound link was eligible
   to be indexed as a soft 404. Now `noindex, follow`.
5. **`robots.txt` did not point at the sitemap**, and the social preview was
   incomplete (no `og:image`, no Twitter card, and `og:locale:alternate` claimed
   Spain for a Latin-America-facing Spanish tree).

## Files changed

| File                                                                         | Change                                                                                                                      |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `public/robots.txt`                                                          | Added `Sitemap:` directive                                                                                                  |
| `scripts/generate-sitemap.mjs`                                               | Added `<lastmod>` (build date) to every URL entry                                                                           |
| `index.html`                                                                 | Completed Open Graph + Twitter tags; `og:locale:alternate` `es_ES` → `es_LA`; title/description aligned with the home route |
| `client/hooks/usePageMetadata.ts`                                            | Now manages `og:image`, `og:locale(:alternate)`, Twitter card tags and an optional `noindex` directive                      |
| `client/pages/NotFound.tsx`                                                  | Passes `{ noindex: true }`                                                                                                  |
| `client/lib/structuredData.ts`                                               | **New.** Schema builders (Organization, WebSite, BreadcrumbList, FAQPage)                                                   |
| `client/components/seo/StructuredData.tsx`                                   | **New.** Injects JSON-LD into `<head>` and removes it on unmount                                                            |
| `client/components/layout/MainLayout.tsx`                                    | Emits Organization + WebSite for the corporate tree                                                                         |
| `client/pages/industries/IndustryLandingPage.tsx`                            | Emits Organization + WebSite + BreadcrumbList + FAQPage; footer now links back into the site                                |
| `client/pages/industries/industryTypes.ts`                                   | Five new typed footer copy keys                                                                                             |
| `client/pages/industries/industryContent.{en,es}.ts`                         | Titles, descriptions and the new footer link labels                                                                         |
| `client/i18n/content/{home,about,contact,features,pricing,payPerService}.ts` | Titles and meta descriptions; one H1 change on `/features`                                                                  |

## URLs changed

**None.** No route was added, removed or renamed, so no redirects, canonical
rewrites or sitemap migrations were required.

## Metadata improvements

Every indexable route now has a unique, intent-bearing title in both locales, with
a consistent `… | DigitalFace Marketing` suffix (the Spanish industry pages
previously used a shorter `| DigitalFace`). Descriptions now name the market
(US / Latin America) and the buyer outcome instead of listing modules.

The full before/after table is in `digitalface-page-inventory.csv`.

## Copy improvements

Deliberately minimal — the existing copy passes the guardrails. One change:

- `/features` H1 was `The DigitalFace Sales System`, which states a brand name and
  no subject. Now `The DigitalFace Sales System: from patient inquiry to booked
appointment` (ES: `El Sistema de Ventas DigitalFace: de la consulta del paciente
a la cita agendada`). The brand term is preserved per the "do not overwrite
  intentional brand terminology" rule; only the subject was added.

No other body copy was touched. No claim, metric, client name or capability was
added, removed or amplified.

## Technical fixes

- `robots.txt` now declares the sitemap location.
- Sitemap entries carry `<lastmod>`. It is the build date — the only date this
  script can state truthfully — not a fabricated per-page timestamp.
- `og:image` (1536×1024, with `:alt`, `:width`, `:height`), `og:site_name`,
  `og:url` and `twitter:card` / `title` / `description` / `image` added, and now
  kept in sync per route by the metadata hook.
- 404 route emits `noindex, follow`. The directive is **removed** (not set to
  `index`) on every other route, so an in-app navigation away from the 404 cannot
  leave a stale `noindex` on a real page.

## hreflang changes

**None were needed, and none were made.** The existing implementation is correct:
`en`, `es` and `x-default`, reciprocal, emitted both per-route and in the sitemap.
No `es-419` is ever emitted as an `hreflang` value — Google does not support it as
a region code, and the code already avoided it. The string does appear in
`client/i18n/geo.test.ts`, where it is an inbound `Accept-Language` header value a
real browser can send; parsing it is correct and must stay.

The one locale correction was in Open Graph, which is a different system:
`og:locale:alternate` said `es_ES` (Spain) for a Spanish tree that serves Latin
America and US Hispanic audiences. Now `es_LA`.

## Internal-link changes

The industry funnel footer gained two blocks with descriptive anchors:

- **More from DigitalFace** → home, `/features`, `/pricing`
- **Other practice types** → the two sibling industry funnels

Anchors describe the destination ("How the patient acquisition system works")
rather than "learn more". The funnel body, hero, header and CTA flow are
unchanged, so the closed-funnel behaviour is preserved — see `HUMAN-REVIEW.md` if
that trade-off should be revisited.

## Structured data added

| Scope                             | Types                                                  |
| --------------------------------- | ------------------------------------------------------ |
| Corporate tree (via `MainLayout`) | `Organization`, `WebSite`                              |
| Three industry funnels            | `Organization`, `WebSite`, `BreadcrumbList`, `FAQPage` |

Sourced only from copy already visible on the site: brand name, site URL, logo,
`sales@digitalfacemarketing.com`, the Cali street address from the footer, the
EN/ES language pair, and the FAQ entries the page itself renders. No rating,
review count, award, founding date, employee count, price or client result was
asserted. `LocalBusiness` was deliberately **not** used — this is a remote-first
agency and the type would overstate the physical-premises claim.

## Claims requiring human verification

See `HUMAN-REVIEW.md`. Nothing unverifiable was introduced by this pass.

## Opportunities not implemented

- No analytics or tag manager exists in the repo, so the `cta_click` /
  `generate_lead` / `language_switch` event layer could not be prepared without
  installing tracking the site does not currently have. Flagged, not added.
- Ten page components (`Services`, `Blog`, `Portfolio`, `Websites`,
  `SocialMediaAds`, `Automations*`, `ManyChatTemplates`) exist but are not routed
  in `App.tsx`. Reachable only as 404s. Content strategy decision, not a bug fix.
- The `/pay-per-service` mega menu points at ~20 in-page anchors that could become
  real ranking sub-pages.
- No case-study depth (baseline → intervention → result → time frame). The two
  live client systems are described qualitatively, which is honest but leaves the
  strongest conversion asset unbuilt.

## Tests / build status

| Check                               | Result                                                                                                                                                                            |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `prettier --write` on changed files | Clean                                                                                                                                                                             |
| `tsc --noEmit`                      | Pass, 0 errors                                                                                                                                                                    |
| `vitest --run`                      | 89 passed, 3 files                                                                                                                                                                |
| `npm run build`                     | Success (sitemap + client + server)                                                                                                                                               |
| Browser verification (dev server)   | Head tags, JSON-LD, canonical, hreflang, `noindex` set-and-clear, and footer links confirmed on `/`, `/es`, `/industries/dental-practices`, `/es/industries/med-spas` and the 404 |

The pre-existing >500 kB chunk-size warning in the client build is unchanged and
was not introduced or suppressed here.
