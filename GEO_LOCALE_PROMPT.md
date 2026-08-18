# Prompt — Country-based automatic language routing (EN / ES)

> Paste everything below into Claude Code from the repo root.

---

## Context

This repo is a **Vite + React SPA** deployed on **Vercel** (`vercel.json`, output `dist/spa`, SPA rewrite `/(.*)` -> `/index.html`).

It is **already fully bilingual**. Do not translate anything and do not add an i18n library.

- English lives at the root: `/pricing`, `/about`, `/features`
- Spanish lives under `/es`: `/es/pricing`, `/es/about`, `/es/features`
- Both trees render the same components; the locale is derived from the URL by `getLocaleFromPathname()` in `client/i18n/locale.ts`
- `client/i18n/LocaleProvider.tsx` exposes `useLocale()`, `useTranslation()`, `useLocalePath()`
- Copy lives in `{ en, es }` dictionaries in `client/i18n/content/*`
- `client/components/i18n/LanguageSwitcher.tsx` renders the EN/ES toggle
- `hreflang` alternates already exist in `index.html`; `scripts/generate-sitemap.mjs` already emits both trees

## Goal

First-time visitors from Spanish-speaking countries must land on the Spanish tree automatically. Everyone else stays on English. The visitor's own choice must always win and must persist.

---

## Decision logic — evaluate strictly in this order, first match wins

1. **Bot or crawler?** -> no redirect, ever. Serve exactly what was requested.
2. **`?lang=en` or `?lang=es` in the URL?** -> honor it, redirect to that tree, and set the preference cookie. (Manual escape hatch for testing and for sharing forced links.)
3. **`df_locale` cookie present and valid?** -> honor it. Never override an explicit human choice.
4. **Path already starts with `/es`?** -> leave it alone. No redirect.
5. **IP country is in the SPANISH_COUNTRIES list?** -> `302` to the `/es` equivalent of the same path.
6. **IP country is `US` or `CA` AND the `accept-language` header's highest-weighted entry is a Spanish variant (`es`, `es-MX`, `es-419`, ...)?** -> `302` to the `/es` equivalent. *(Deliberate: this captures the US Hispanic market that the dental / med-spa clients serve.)*
7. **Otherwise** -> English. No redirect.

### SPANISH_COUNTRIES (ISO 3166-1 alpha-2)

```
AR BO CL CO CR CU DO EC SV GQ GT HN MX NI PA PY PE PR ES UY VE
```

Argentina, Bolivia, Chile, Colombia, Costa Rica, Cuba, Dominican Republic, Ecuador, El Salvador, Equatorial Guinea, Guatemala, Honduras, Mexico, Nicaragua, Panama, Paraguay, Peru, Puerto Rico, Spain, Uruguay, Venezuela.

**Explicitly NOT in the list** (these get English): `BR` Brazil, `HT` Haiti, `JM` Jamaica, `BZ` Belize, `GY` Guyana, `SR` Suriname, `TT` Trinidad, `PT` Portugal.

---

## Work to do

### 1. Create `middleware.ts` at the repo root

Vercel Edge Middleware for a non-Next.js project: default-export a function taking a standard `Request` and returning a `Response` (or `undefined` to pass through).

- Read the country from the **`x-vercel-ip-country`** request header (uppercase it; treat missing / `XX` / empty as unknown -> English).
- Read the **`accept-language`** header for rule 6 only.
- Read the **`df_locale`** cookie for rule 3.
- Redirect with **HTTP 302**, never 301. A 301 is permanently cached by browsers and by Google and is extremely hard to reverse.
- On every redirect, set the cookie so the decision is made **once per visitor**, not on every page view:
  `df_locale=<en|es>; Path=/; Max-Age=31536000; SameSite=Lax; Secure`
- Preserve the query string and hash on every redirect. `/pricing?utm_source=meta` must become `/es/pricing?utm_source=meta` — UTM parameters must survive or Meta Ads attribution breaks.
- Set `Vary: Accept-Language, Cookie` and `Cache-Control: no-store` on redirect responses so no CDN or browser caches one visitor's country and serves it to the next.
- Export a `matcher` config that **excludes** `/api`, `/assets`, `/_vercel`, `/robots.txt`, `/sitemap.xml`, and any path containing a file extension (`.js .css .png .jpg .jpeg .svg .webp .ico .txt .xml .json .woff .woff2 .mp4`). Static assets and the sitemap must never be redirected.

### 2. Create `client/i18n/geo.ts`

Pure, unit-testable helpers with no framework imports — the middleware and the tests both consume this:

- `SPANISH_COUNTRIES: ReadonlySet<string>` — the list above.
- `BOT_PATTERN: RegExp` — case-insensitive user-agent match covering at minimum:
  `googlebot, google-inspectiontool, bingbot, duckduckbot, slurp, baiduspider, yandex, applebot, facebookexternalhit, facebot, twitterbot, linkedinbot, whatsapp, slackbot, telegrambot, discordbot, pinterest, redditbot, embedly, quora link preview, ia_archiver, ahrefsbot, semrushbot, petalbot, mj12bot, dotbot, screaming frog, gptbot, oai-searchbot, chatgpt-user, claudebot, claude-web, anthropic-ai, perplexitybot, bytespider, amazonbot, lighthouse, headlesschrome, vercel-screenshot`
- `prefersSpanishLanguage(acceptLanguage: string | null): boolean` — true only when the **highest q-value** entry is a Spanish variant. Parse `q=` weights properly: `en-US,en;q=0.9,es;q=0.8` must return **false**.
- `resolveLocale({ pathname, country, acceptLanguage, cookieLocale, queryLang, userAgent })` returning `{ locale: 'en' | 'es', shouldRedirect: boolean, reason: string }`. This function is the single source of truth for the decision table above; the middleware is a thin wrapper that reads headers, calls this, and builds the `Response`.

Reuse the existing `localePath()` and `stripLocaleFromPathname()` from `client/i18n/locale.ts` for URL construction — do not reimplement path logic. If importing from `client/` into a root-level edge file is awkward under the current Vite / tsconfig setup, move those two pure helpers into `geo.ts` and re-export them from `locale.ts` so exactly one implementation survives.

### 3. Make the visitor's choice readable by the edge

The edge runs before any JavaScript, so it cannot read `localStorage`. The preference must also live in a cookie.

In `client/i18n/locale.ts`:

- Add `LOCALE_COOKIE_KEY = "df_locale"`.
- Extend `storeLocale(locale)` to write **both** the existing `localStorage` entry **and** the `df_locale` cookie (`Path=/; Max-Age=31536000; SameSite=Lax`; append `Secure` when `location.protocol === 'https:'`).
- Add `readLocaleCookie(): Locale | null`.
- `readStoredLocale()` currently exists but is **never called anywhere in the codebase**. Make it check the cookie first, then `localStorage`, so the two stores cannot drift apart.

`client/components/i18n/LanguageSwitcher.tsx` already calls `storeLocale(option)` on click, so that call now persists the cookie too — verify it still fires, no other change needed there.

### 4. Browser-side safety net in `client/i18n/LocaleProvider.tsx`

Vercel middleware covers production. It does **not** run under `npm run dev`, and it will not run if the site is ever served from Netlify or a plain static host. Add a one-time client fallback:

- Run once on mount, guarded by a module-level `hasRun` flag so it can never loop.
- **Skip entirely** if the `df_locale` cookie exists (the edge already decided, or the human did).
- **Skip** if the path already starts with `/es`.
- **Skip** if `document.referrer` is same-origin — an internal click is not a first visit.
- Otherwise, if `navigator.language` is a Spanish variant, `navigate(localePath('es', pathname), { replace: true })` and write the cookie.
- Use `replace: true` so the back button is not trapped in a redirect loop.
- Never call a third-party geo-IP API. No `ipapi.co`, no `ipinfo.io`, no network requests at all.

### 5. Keep the SEO surface honest

- Verify the `index.html` `hreflang` alternates still point at `/` and `/es`, and that `x-default` points at the **English root**.
- Confirm `public/robots.txt` does not block `/es`. Create the file if it is missing.
- Confirm `scripts/generate-sitemap.mjs` still emits both trees with reciprocal `hreflang` alternates, and that the sitemap URL is exempt from the middleware matcher.
- Add a self-referencing `hreflang` plus alternate for the *current* page, not only the homepage, if that is not already handled.

---

## Hard constraints

- **Do not** use a 301 redirect anywhere in this feature.
- **Do not** redirect any request whose user-agent matches `BOT_PATTERN`. Googlebot crawls from US IPs; auto-redirecting it means the Spanish tree may never be indexed.
- **Do not** remove or hide the `LanguageSwitcher`. Auto-detection is a convenience, never a lock — VPNs, travelers and expats will be misrouted and need a visible way out.
- **Do not** touch any copy in `client/i18n/content/*` or any page component.
- **Do not** add an i18n dependency (`i18next`, `react-intl`, etc.). The existing system stays.
- **Do not** call any third-party geolocation service.
- **Do not** redirect `/api/*`, static assets, `robots.txt`, or `sitemap.xml`.
- Redirects must be **idempotent** — landing on `/es/pricing` must never bounce again.

## Verification before reporting done

1. `npm run typecheck` passes.
2. Add `client/i18n/geo.test.ts` (vitest is already in the repo) covering at minimum:
   - `CO`, `MX`, `ES`, `AR`, `PR` -> Spanish
   - `US`, `GB`, `BR`, `HT`, `PT`, unknown / `XX` -> English
   - `US` + `accept-language: es-MX,es;q=0.9` -> Spanish
   - `US` + `accept-language: en-US,en;q=0.9,es;q=0.8` -> English (q-weight test)
   - `CO` + `df_locale=en` cookie -> English, no redirect
   - `CO` + user-agent `Googlebot/2.1` -> English, no redirect
   - `CO` + path `/es/pricing` -> no redirect (idempotency)
   - `CO` + `/pricing?utm_source=meta&utm_campaign=x` -> `/es/pricing?utm_source=meta&utm_campaign=x`
3. `npm run test` passes.
4. Start the dev server and confirm the **client-side** fallback works and does not loop: the page must settle on one URL, and clicking EN in the switcher must stick across a reload.
5. Report which files changed and paste the final decision table as implemented.

## Note for me after implementation

Tell me how to test the real geo behavior on a Vercel preview deployment without a VPN — specifically the `curl` command with a spoofed `x-vercel-ip-country` header, and whether Vercel honors that header on preview URLs or overwrites it.
