# DigitalFace Meta pixel — 2026-10-16

## Prepared installation

The owner explicitly selected Nicolas Caicedo's existing pixel, **2450656048502915**, for **https://digitalface.app**. The browser implementation is in `client/lib/metaPixel.ts`, called by the existing analytics entry points. No access token, new dependency, additional booking widget or Conversions API integration is required.

**Status, 2026-10-16: deployment reported by the owner; live public code verified.** Read-only inspection of all 42 referenced JavaScript assets confirms the selected pixel ID and SDK loader in the live site. Browser execution, Meta event receipt and a real booking remain unverified. No agent-side deployment, Meta setting, ad account or GHL calendar change occurred.

**Lead/Contact expansion, 2026-10-16: local changes awaiting a new deployment.** The earlier public-code check covers the base PageView/Schedule installation only. The owner authorized adding successful-form and WhatsApp-click conversions to the same pixel.

| Meta event | Trigger                                                                                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PageView   | One per resolved known route change, including English and Spanish routes.                                                                                                                                                   |
| Schedule   | Existing `/booking-confirmed` redirect after a same-tab booking attempt from `/book` or `/es/book`; the shared booking state changes from `pending` to `fired` before dispatch.                                              |
| Lead       | Existing `generate_lead` signal emitted only after the form receives both HTTP success and an application response with `ok: true`. Includes only the fixed `lead_type` category (`contact` or `service_request`).           |
| Contact    | Existing delegated WhatsApp link click, including the real floating button in English and Spanish. Includes only `contact_method: "whatsapp"`. This measures opening WhatsApp, not a sent message or confirmed conversation. |

A consultation click, booking-page view, form submission or direct confirmation-page visit does not send Schedule. Confirmation refreshes do not count again; a new booking attempt can count once. This reuses the existing client-side completion contract; it does not add server-side booking verification. Google Analytics/Ads configuration is unchanged, and Meta does not depend on a GA4 Measurement ID being present.

Failed/invalid form requests and the honeypot discard path do not emit Lead. Email and telephone clicks do not emit Meta Contact in this scope. The same visitor can perform several of these actions; their sum is not a distinct-person count.

## Collection and failure boundaries

- Requires a production build, production deployment environment and exact `https://digitalface.app` origin. Pixel ID is public configuration, not a secret. Development, preview and localhost stay untracked.
- Uses Meta's SDK with automatic configuration disabled and `fbq.disablePushState = true`, then explicitly dispatches `trackSingle` events to the chosen ID. A separately installed pixel prevents this loader from initializing rather than silently causing duplicates.
- No form/contact payloads, advanced matching or automatic form events are supplied. Lead and Contact receive only the fixed category labels described above; names, phone numbers, emails, messages, selected-service lists and arbitrary parameters are excluded from those payloads. Browser Global Privacy Control and Do Not Track opt-outs prevent this integration from initializing or dispatching.
- The Meta SDK reads the actual page URL and referrer. The integration skips contexts containing unknown URL query keys, email-like query values, unsafe fragments or unknown internal paths. Known campaign parameters, `fbclid`, `lang` and `from` are allowed. This is a conservative eligibility check, not a claim that the third-party SDK rewrites URLs or collects no browser identifiers.
- Events wait for SDK load, then recheck the current URL. Pages left before the SDK loads may not be counted. Pending Lead/Contact events are associated with their originating known path and are not replayed using another page's URL. Blocking, rapid navigation, network failures or unavailable booking storage can prevent measurement; navigation, contact actions and booking must still work.
- No consent banner or CMP was added. Existing privacy/cookie controls and disclosures remain the site's responsibility. These checks do not establish legal compliance.

## Deployment and live test

1. Base deployment is owner-reported and its public pixel code is verified. Deploy the new Lead/Contact expansion through the same project before testing it. The existing Vite configuration supplies the production deployment gate from `VERCEL_ENV`. There is no new environment variable or token to configure.
2. Open this pixel's **Probar eventos** tab. Visit `https://digitalface.app/?lang=en` in a browser session where tracking is permitted, then navigate to a Spanish page. Confirm the chosen pixel receives PageView events and there is one `fbevents.js` loader. Browser privacy signals and extensions may intentionally block the test.
3. With authorization for a controlled booking, complete the actual GHL consultation flow from `/book` or `/es/book`. Confirm the calendar creates the booking and redirects to `/booking-confirmed`; expect one Schedule. Refresh the confirmation and check that no second Schedule appears. Opening `/book` or clicking a consultation link must not count as Schedule.
4. Using an owned synthetic test contact, submit a valid website contact form and confirm both the website success state and one Lead in Meta. A failed submission must not produce Lead. Repeat with a selected-service request if that flow needs separate verification; its category is `service_request`.
5. Click the real WhatsApp button on an English page and a Spanish page. Expect one Contact per actual click with `contact_method: whatsapp`. The test does not require sending a WhatsApp message. Confirm that no form values, message text or phone number appear in the custom event data.
6. Confirm the desired events are available to the intended ad account before selecting a website campaign conversion. Keep the three actions distinct; a custom conversion is not needed simply to name the installed pixel. Keep automatic events and automatic advanced matching off for this explicit-event setup.

Do not claim the pixel is active from a successful local test alone. Real Meta receipt and a real GHL booking remain unverified until these live checks pass. No live booking is part of the local validation.

## Validation and rollback

Run scoped Prettier, `pnpm build`, `pnpm typecheck` and `pnpm test`. The build includes route/SEO validation; synthetic tests cover environment and URL guards, load timing, duplicate protection, SDK failures and completed-booking deduplication. Tests do not call Meta or GHL.

Initial installation checks on 2026-10-16 passed 211 tests. **The subsequent Lead/Contact expansion passed production build (with the production deployment gate), all 27 route/SEO checks, TypeScript, scoped Prettier and 219 tests in 19 files**, including 30 Meta tests, success/failure form checks and actual WhatsApp-button clicks in both languages. Existing large-chunk, Browserslist-age and React Router future-flag warnings remain. No browser/visual QA, real Meta SDK request, Meta event receipt, live form submission, WhatsApp message or booking was performed in this expansion.

To revert only the expansion, remove the Lead/WhatsApp dispatches from `trackEvent` in `client/lib/analytics.ts` and redeploy; PageView/Schedule remain intact. To remove the entire integration, remove all Meta imports and dispatch calls from that file, remove the module/tests, and redeploy. No data migration is required; already recorded Meta events are not erased by a rollback.

Implementation reference: [Meta's official pixel tag template](https://github.com/facebook/GoogleTagManager-WebTemplate-For-FacebookPixel/blob/main/template.tpl), including automatic-configuration controls, history-event controls and `trackSingle` dispatch.
