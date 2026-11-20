# DigitalFace Meta pixel — 2026-10-16

**November 20 migration:** The owner requested that digitalface.app stop sending events to the Nicolas pixel (`2450656048502915`) before installing its successor. This release removes the hard-coded ID and keeps Meta tracking inactive unless a valid `VITE_META_PIXEL_ID` is supplied at build time. For the replacement, verify DigitalFace owns the new dataset and that it is connected to the intended ad account. Then configure the public ID for Vercel Production, redeploy, and verify PageView, Schedule, Lead and Contact in Events Manager. The October 16 receipts below apply to the historical installation.

## October 16 installation history

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

- Requires a valid `VITE_META_PIXEL_ID`, a production build, production deployment environment and exact `https://digitalface.app` origin. The pixel ID is public configuration. Development, preview and localhost stay untracked.
- Uses Meta's SDK with automatic configuration disabled and `fbq.disablePushState = true`, then explicitly dispatches `trackSingle` events to the chosen ID. A separately installed pixel prevents this loader from initializing rather than silently causing duplicates.
- No form/contact payloads, advanced matching or automatic form events are supplied. Lead and Contact receive only the fixed category labels described above; names, phone numbers, emails, messages, selected-service lists and arbitrary parameters are excluded from those payloads. Browser Global Privacy Control and Do Not Track opt-outs prevent this integration from initializing or dispatching.
- The Meta SDK reads the actual page URL and referrer. The integration skips contexts containing unknown URL query keys, email-like query values, unsafe fragments or unknown internal paths. Known campaign parameters, `fbclid`, `lang` and `from` are allowed. This is a conservative eligibility check, not a claim that the third-party SDK rewrites URLs or collects no browser identifiers.
- Events wait for SDK load, then recheck the current URL. Pages left before the SDK loads may not be counted. Pending Lead/Contact events are associated with their originating known path and are not replayed using another page's URL. Blocking, rapid navigation, network failures or unavailable booking storage can prevent measurement; navigation, contact actions and booking must still work.
- No consent banner or CMP was added. Existing privacy/cookie controls and disclosures remain the site's responsibility. These checks do not establish legal compliance.

## Conversions API for website leads

The local server implementation reports one `Lead` after the DigitalFace intake webhook returns HTTP success and `success: true`. The Pixel sends the same event name and ID so Meta can deduplicate the two copies. The site preserves the lead's success response if Meta rejects the event or exceeds the 1.5-second delivery timeout.

1. In **DF AGENCY (1148795828005152)**, continue through **Seleccionar eventos** and choose **Cliente potencial (Lead)** for website events. In **Seleccionar detalles de eventos**, select the event name, timestamp, action source, event source URL and event ID. For customer information, select **User agent**, **Browser ID (\_fbp)** and **Click ID (\_fbc)**. The server uses existing Meta cookies when available and sends a conversion only when the visitor chooses the optional form checkbox. Keep email, phone, name, IP address and form answers out of this setup.
2. In the instructions or the dataset's **Configuración → API de conversiones** section, generate a token for this dataset and store it directly in Vercel as the Production Secret `META_CAPI_ACCESS_TOKEN`. Keep the existing `VITE_META_PIXEL_ID=1148795828005152` and set `VITE_META_CAPI_ENABLED=true` for Production when ready to deploy. The flag exposes the optional checkbox and enables the server path only when the token is also present.
3. For a controlled check, copy the server test code from **Probar eventos** into the temporary server setting `META_CAPI_TEST_EVENT_CODE` and deploy. Open the website from the browser section of **Probar eventos** and submit one approved, owned test lead with the optional box checked. This is a real intake in the existing CRM flow. Check for **Lead** via **Servidor** and **Navegador**, with the same event ID and successful deduplication. Remove the test code and redeploy once verified. While present, the code is added to all eligible server leads, and Meta can include test-coded events in measurement. [Meta Test Events](https://developers.facebook.com/documentation/ads-commerce/conversions-api/using-the-api#testEvents)

Use a confirmed booking from the calendar system before adding a server `Schedule`. The corporate booking confirmation page measures a browser redirect. WhatsApp clicks measure a link open. Those events and `PageView` continue through the browser Pixel. To turn off server delivery, unset `VITE_META_CAPI_ENABLED` and redeploy.

## Deployment and live test

1. For a new installation, add the approved dataset ID as `VITE_META_PIXEL_ID` in the Vercel project's Production environment and redeploy. Leave the variable unset while Meta tracking is paused. Vite uses `VERCEL_ENV` for the production gate.
2. Open the new dataset's **Probar eventos** tab. Visit `https://digitalface.app/?lang=en` in a browser session where tracking is permitted, then navigate to a Spanish page. Confirm the new pixel receives PageView events and there is one `fbevents.js` loader. Browser privacy signals and extensions may intentionally block the test.
3. With authorization for a controlled booking, complete the actual GHL consultation flow from `/book` or `/es/book`. Confirm the calendar creates the booking and redirects to `/booking-confirmed`; expect one Schedule. Refresh the confirmation and check that no second Schedule appears. Opening `/book` or clicking a consultation link must not count as Schedule.
4. Using an owned synthetic test contact, submit a valid website contact form and confirm both the website success state and one Lead in Meta. A failed submission must not produce Lead. Repeat with a selected-service request if that flow needs separate verification; its category is `service_request`.
5. Click the real WhatsApp button on an English page and a Spanish page. Expect one Contact per actual click with `contact_method: whatsapp`. The test does not require sending a WhatsApp message. Confirm that no form values, message text or phone number appear in the custom event data.
6. Confirm the desired events are available to the intended ad account before selecting a website campaign conversion. Keep the three actions distinct; a custom conversion is not needed simply to name the installed pixel. Keep automatic events and automatic advanced matching off for this explicit-event setup.

Local tests alone do not establish Meta receipt. For this release, receipt of all four browser event types is confirmed by the user-provided live Meta output above. The owner reports completing the booking test; the calendar record was not independently inspected.

## Validation and rollback

Run scoped Prettier, `pnpm build`, `pnpm typecheck` and `pnpm test`. The build includes route/SEO validation; synthetic tests cover environment and URL guards, load timing, duplicate protection, SDK failures and completed-booking deduplication. Tests do not call Meta or GHL.

Initial installation checks on 2026-10-16 passed 211 tests. **The subsequent Lead/Contact expansion passed production build (with the production deployment gate), all 27 route/SEO checks, TypeScript, scoped Prettier and 219 tests in 19 files**, including 30 Meta tests, success/failure form checks and actual WhatsApp-button clicks in both languages. Existing large-chunk, Browserslist-age and React Router future-flag warnings remain. The implementation tests made no external Meta or booking requests. Subsequent live event receipt was established through the owner's tests described above.

To disable tracking after a new installation, unset `VITE_META_PIXEL_ID` and redeploy. Use a release that includes the November 20 configuration change so the historical hard-coded ID stays out of production. Previously recorded events remain in Meta.

Implementation reference: [Meta's official pixel tag template](https://github.com/facebook/GoogleTagManager-WebTemplate-For-FacebookPixel/blob/main/template.tpl), including automatic-configuration controls, history-event controls and `trackSingle` dispatch.
