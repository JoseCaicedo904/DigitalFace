# DigitalFace Meta pixel — 2026-10-16

**Migration requested 2026-10-21:** the owner reports that the existing Nicolas pixel is in the wrong advertising setup and wants a new independent DigitalFace Pixel/Dataset for the same website. The owner confirms it has not been created yet and requests guided creation. Verify the DigitalFace business portfolio as owner and the intended DigitalFace ad account connection before switching IDs. The source still targets `2450656048502915`; no replacement ID, runtime change, deployment or Meta mutation has occurred. Preserve PageView, Schedule, Lead and Contact with their existing guards during the eventual switch, then retest all four against the new pixel. The October 16 receipts below apply to the old pixel only.

## Prepared installation

The owner explicitly selected Nicolas Caicedo's existing pixel, **2450656048502915**, for **https://digitalface.app**. The browser implementation is in `client/lib/metaPixel.ts`, called by the existing analytics entry points. No access token, new dependency, additional booking widget or Conversions API integration is required.

**Status, 2026-10-16: deployed by the owner; all four browser event types received and processed in Meta.** Public-code inspection confirmed the pixel ID/SDK loader. The owner's subsequent Probar eventos output for digitalface.app and this pixel shows PageView, Programar (Schedule), Contactar (Contact) and Cliente potencial (Lead), each processed from the browser. The owner reports that all action tests worked, including scheduling, the contact button and the form. The basic event-receipt tests are complete.

This is user-provided Meta UI evidence, not agent-side account inspection. The calendar record, live event payload contents, refresh-specific duplicate check, ad-account conversion-goal selection and paid attribution were not independently inspected. No agent-side deployment, live form/message/booking or external setting change occurred. The repeat-test steps below remain available for later releases.

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

1. Deployment is owner-reported and all four browser event types have passed the user-provided Meta receipt check. For later changes, deploy through the same project before repeating the tests. The existing Vite configuration supplies the production deployment gate from `VERCEL_ENV`. There is no new environment variable or token to configure.
2. Open this pixel's **Probar eventos** tab. Visit `https://digitalface.app/?lang=en` in a browser session where tracking is permitted, then navigate to a Spanish page. Confirm the chosen pixel receives PageView events and there is one `fbevents.js` loader. Browser privacy signals and extensions may intentionally block the test.
3. With authorization for a controlled booking, complete the actual GHL consultation flow from `/book` or `/es/book`. Confirm the calendar creates the booking and redirects to `/booking-confirmed`; expect one Schedule. Refresh the confirmation and check that no second Schedule appears. Opening `/book` or clicking a consultation link must not count as Schedule.
4. Using an owned synthetic test contact, submit a valid website contact form and confirm both the website success state and one Lead in Meta. A failed submission must not produce Lead. Repeat with a selected-service request if that flow needs separate verification; its category is `service_request`.
5. Click the real WhatsApp button on an English page and a Spanish page. Expect one Contact per actual click with `contact_method: whatsapp`. The test does not require sending a WhatsApp message. Confirm that no form values, message text or phone number appear in the custom event data.
6. Confirm the desired events are available to the intended ad account before selecting a website campaign conversion. Keep the three actions distinct; a custom conversion is not needed simply to name the installed pixel. Keep automatic events and automatic advanced matching off for this explicit-event setup.

Local tests alone do not establish Meta receipt. For this release, receipt of all four browser event types is confirmed by the user-provided live Meta output above. The owner reports completing the booking test; the calendar record was not independently inspected.

## Validation and rollback

Run scoped Prettier, `pnpm build`, `pnpm typecheck` and `pnpm test`. The build includes route/SEO validation; synthetic tests cover environment and URL guards, load timing, duplicate protection, SDK failures and completed-booking deduplication. Tests do not call Meta or GHL.

Initial installation checks on 2026-10-16 passed 211 tests. **The subsequent Lead/Contact expansion passed production build (with the production deployment gate), all 27 route/SEO checks, TypeScript, scoped Prettier and 219 tests in 19 files**, including 30 Meta tests, success/failure form checks and actual WhatsApp-button clicks in both languages. Existing large-chunk, Browserslist-age and React Router future-flag warnings remain. The implementation tests made no external Meta or booking requests. Subsequent live event receipt was established through the owner's tests described above.

To revert only the expansion, remove the Lead/WhatsApp dispatches from `trackEvent` in `client/lib/analytics.ts` and redeploy; PageView/Schedule remain intact. To remove the entire integration, remove all Meta imports and dispatch calls from that file, remove the module/tests, and redeploy. No data migration is required; already recorded Meta events are not erased by a rollback.

Implementation reference: [Meta's official pixel tag template](https://github.com/facebook/GoogleTagManager-WebTemplate-For-FacebookPixel/blob/main/template.tpl), including automatic-configuration controls, history-event controls and `trackSingle` dispatch.
