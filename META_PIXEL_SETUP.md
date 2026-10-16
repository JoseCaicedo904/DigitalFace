# DigitalFace Meta pixel — 2026-10-16

## Prepared installation

The owner explicitly selected Nicolas Caicedo's existing pixel, **2450656048502915**, for **https://digitalface.app**. The browser implementation is in `client/lib/metaPixel.ts`, called by the existing analytics entry points. No access token, new dependency, additional booking widget or Conversions API integration is required.

**Status: local installation prepared; not deployed or verified in Meta Events Manager.** No Meta settings, ad account, GHL calendar or other external service was changed.

| Meta event | Trigger                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PageView   | One per resolved known route change, including English and Spanish routes.                                                                                                      |
| Schedule   | Existing `/booking-confirmed` redirect after a same-tab booking attempt from `/book` or `/es/book`; the shared booking state changes from `pending` to `fired` before dispatch. |

A consultation click, booking-page view, form submission or direct confirmation-page visit does not send Schedule. Confirmation refreshes do not count again; a new booking attempt can count once. This reuses the existing client-side completion contract; it does not add server-side booking verification. Google Analytics/Ads configuration is unchanged, and Meta does not depend on a GA4 Measurement ID being present.

## Collection and failure boundaries

- Requires a production build, production deployment environment and exact `https://digitalface.app` origin. Pixel ID is public configuration, not a secret. Development, preview and localhost stay untracked.
- Uses Meta's SDK with automatic configuration disabled and `fbq.disablePushState = true`, then explicitly dispatches `trackSingle` events to the chosen ID. A separately installed pixel prevents this loader from initializing rather than silently causing duplicates.
- No form/contact payloads, custom event parameters, advanced matching or automatic form events are supplied. Browser Global Privacy Control and Do Not Track opt-outs prevent this integration from initializing or dispatching.
- The Meta SDK reads the actual page URL and referrer. The integration skips contexts containing unknown URL query keys, email-like query values, unsafe fragments or unknown internal paths. Known campaign parameters, `fbclid`, `lang` and `from` are allowed. This is a conservative eligibility check, not a claim that the third-party SDK rewrites URLs or collects no browser identifiers.
- Events wait for SDK load, then recheck the current URL. Pages left before the SDK loads may not be counted. Blocking, network failures or unavailable session storage can prevent measurement; navigation and booking must still work.
- No consent banner or CMP was added. Existing privacy/cookie controls and disclosures remain the site's responsibility. These checks do not establish legal compliance.

## Deployment and live test

1. Obtain the separately required production-deployment authorization and deploy through the existing `digital-face` project. The existing Vite configuration supplies the production deployment gate from `VERCEL_ENV`. There is no new environment variable or token to configure.
2. Open this pixel's **Probar eventos** tab. Visit `https://digitalface.app/?lang=en` in a browser session where tracking is permitted, then navigate to a Spanish page. Confirm the chosen pixel receives PageView events and there is one `fbevents.js` loader. Browser privacy signals and extensions may intentionally block the test.
3. With authorization for a controlled booking, complete the actual GHL consultation flow from `/book` or `/es/book`. Confirm the calendar creates the booking and redirects to `/booking-confirmed`; expect one Schedule. Refresh the confirmation and check that no second Schedule appears. Opening `/book` or clicking a consultation link must not count as Schedule.
4. Confirm Schedule is available to the intended ad account before choosing it as the website campaign's completed-consultation conversion. A custom conversion is not needed simply to name the installed pixel. Keep automatic events and automatic advanced matching off for this explicit-event setup.

Do not claim the pixel is active from a successful local test alone. Real Meta receipt and a real GHL booking remain unverified until these live checks pass. No live booking is part of the local validation.

## Validation and rollback

Run scoped Prettier, `pnpm build`, `pnpm typecheck` and `pnpm test`. The build includes route/SEO validation; synthetic tests cover environment and URL guards, load timing, duplicate protection, SDK failures and completed-booking deduplication. Tests do not call Meta or GHL.

Completed locally on 2026-10-16: production build (with the production deployment gate), all 27 route/SEO checks, TypeScript, scoped Prettier and **211 tests in 19 files**, including 24 Meta-specific tests. The selected pixel appears in one browser bundle. Existing large-chunk, Browserslist-age and React Router future-flag warnings remain. No browser/visual QA, real Meta SDK request, Meta event receipt or live booking was performed.

Rollback removes the two Meta dispatch calls/import from `client/lib/analytics.ts` and redeploys. The new module/tests can then be removed. No data migration is required; already recorded Meta events are not erased by a rollback.

Implementation reference: [Meta's official pixel tag template](https://github.com/facebook/GoogleTagManager-WebTemplate-For-FacebookPixel/blob/main/template.tpl), including automatic-configuration controls, history-event controls and `trackSingle` dispatch.
