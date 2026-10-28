# DigitalFace — La Jugada del Crecimiento

Prepared locally on October 28, 2026. No deployment, external configuration change,
real participant submission, CRM write, prize delivery or appointment was performed.

## URL and language

- Canonical route: `/es/labs-summit-2026`.
- Prepared production URL: `https://digitalface.app/es/labs-summit-2026` — **not deployed by this task**.
- QR-friendly alias: `/labs-summit-2026` redirects to the Spanish document, preserving query parameters and fragments. Express and Vercel redirect configuration accompany the client redirect.
- One Spanish page. There is no English translation or English language-switch link on this route.
- `Tuluá Labs Summit` appears in the Spanish corporate header, on desktop and in the mobile drawer. English navigation is unchanged.
- The hero prominently displays **TULUÁ LABS SUMMIT 2026**, with the supplied event identity. This overrides the master prompt's suggestion to make the event reference discreet.

For local review, run `pnpm dev` from this repository and open
`http://localhost:8080/es/labs-summit-2026`. The development review used port 8092.
Saved screenshots remain under `seo-audit/labs-summit-2026/`.

## Implemented experience

- Blue/navy/cyan event treatment derived from the supplied DigitalFace print artwork, using the existing Montserrat/Inter typography. Purple emphasizes prize six.
- Lightweight CSS 3D die: six selectable faces, synchronized prize expansion, gentle idle movement, a pause control, keyboard/touch controls and reduced-motion support. No random result, digital roll, prize allocation or download.
- Three participation steps: Instagram, registration, physical die at the stand. Staff validation, one attempt per person/company and the completely-inside-the-circle rule remain explicit.
- All six supplied prizes: Pack de hooks; 5 sesgos psicológicos para vender más; Define tu identidad de marca; De seguidores a comunidad; 30 días de contenido con propósito; Reel profesional.
- Reel: 15–20 seconds recorded at the fair, editing/effects/subtitles, 24-hour delivery subject to conditions, available slots and on-site coordination. Original production photograph supports this card.
- Separate custom registration form with validation, error focus, a loading lock, timeout, honest errors, confirmed success and duplicate states. Instagram and email are optional. Participation and commercial consent are separate; commercial consent starts unchecked.
- All five service areas have relevant supplied imagery. Original DigitalFace brand video is user-controlled, muted, and does not autoplay.
- Exact existing `TechEcosystemSection` and `techLogos` data/logos are reused. Copy describes technologies and compatibility, without claiming formal partnerships.
- Separate scheduling container links to the established `/es/book` page and its existing GHL calendar. The external widget stays confined to the booking page, preserving its confirmation/measurement contract.
- Contact links use the supplied email, Instagram and +57 300 506 1366. WhatsApp and business scheduling are separate actions.
- Unique Spanish metadata, canonical, Spanish-only alternate, social image/alt text, route HTML and sitemap entry. No fabricated dates, results, countdowns or certifications.

## Multimedia audit and asset map

All 10 files in the supplied `MEDIA FOR DF/Landing Page` folder were recursively inventoried before design: nine images and one video. Dimensions, mode and transparency are recorded in `media-inventory.json`; all nine images were visually compared in the contact sheet and the brochure/prize board were examined at larger sizes. Video inspection confirmed a five-second 1280×720 H.264 logo animation with no audio; representative frames are saved.

Original media remain unchanged. Runtime paths use `/media/labs-summit-2026/`, never external Windows paths.

| Original file                           | Optimized destination in `public/media/labs-summit-2026/` | Placement                                                                       |
| --------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `lab summit.jpg`                        | `labs-summit-2026.webp`                                   | Prominent event hero identity                                                   |
| `IMG_0116.PNG`                          | `produccion-digitalface.webp`                             | Reel prize and audiovisual service                                              |
| `DF BROCHURE FINAL TULUA Fair.jpeg`     | `digitalface-tulua.webp`                                  | Social-sharing image                                                            |
| Same brochure, advertising panel        | `publicidad-digital.webp`                                 | Advertising service                                                             |
| Same brochure, website panel            | `sitios-web.webp`                                         | Website service                                                                 |
| Same brochure, messaging panel          | `crm-mensajeria.webp`                                     | CRM/automation service                                                          |
| Same brochure, supplied AI illustration | `asistentes-ia.webp`                                      | AI service                                                                      |
| `DIGITAL FACE MARCA AZUL.jpg`           | `digitalface-video-poster.webp`                           | Brand-video poster                                                              |
| `DF outreach mini vid.mp4`              | `digitalface-presentacion.mp4`                            | Brand introduction; five seconds, 388,094 bytes versus 4,684,813 original bytes |

The two printed game boards informed the rules, prize wording and visual language; their QR codes were not reproduced as a conflicting digital participation path. The remaining logo variants were inspected; the established site logo continues to serve the corporate header/footer. Service-panel crops are deliberately small supplied artwork, not fabricated screenshots or new stock imagery. Exact sizes and destinations are in `seo-audit/labs-summit-2026/asset-map.json`.

## Registration integration and remaining setup

**The UI and local API are implemented. Live event registration storage is not configured or verified.**

The ordinary `/api/lead` contract requires email and feeds a different inquiry/offer workflow. It cannot establish event identity uniqueness or the new consent purposes, so this task keeps it intact and adds `POST /api/event-registration`.

The new endpoint validates the same shared schema as the browser, normalizes international phone numbers, rejects extra fields (including self-selected prizes), rejects a filled honeypot, checks browser origins and applies a process-local burst guard. It forwards only to the separately configured HTTPS `EVENT_REGISTRATION_WEBHOOK_URL`. This server-only variable has an empty example; no private value was read, copied or added. Environment guidance follows the `env-vars` skill; hosting values must remain in the approved secret store, never a `VITE_` variable.

Required receiver contract:

1. Create/select an approved private event intake receiver and durable store. Do not point this variable at the existing ordinary lead workflow without implementing this event contract.
2. Save the participant fields, optional email/Instagram, business need, separate consent booleans, server-stamped `receivedAt`, `consentVersion`, privacy-policy URL, `source = labs_summit_2026`, `campaign = la_jugada_del_crecimiento`, and `resultStatus = pending_staff_validation`.
3. Enforce atomic uniqueness for **either** `(campaign, personKey)` or `(campaign, businessKey)`. Both SHA-256 keys and the `Idempotency-Key` header are server-generated. Phone normalization and normalized business names make ordinary retries stable. Concurrent/retried requests must return the existing record rather than create another registration. Ambiguous cross-record collisions require staff review; do not silently merge people. These are duplicate aids, not identity verification or proof of a physical attempt.
4. Add durable abuse controls at the receiving boundary as appropriate to event traffic. The local burst map resets across serverless instances/restarts and is not a distributed limiter or durable duplicate store. Shared-network traffic must be considered when setting provider-level limits.
5. Return HTTP 200 **only after persistence** with this JSON shape:

   ```json
   {
     "ok": true,
     "persisted": true,
     "registrationId": "internal_record_123",
     "duplicate": false
   }
   ```

   A retry for an existing saved record uses `duplicate: true`. `registrationId` must contain 8–100 letters, digits, underscores or hyphens. A generic webhook HTTP 200, empty response, missing persistence acknowledgment or provider failure is rejected by the website. The browser receives only `ok` and `duplicate`; it never receives a private endpoint or record identifier.

6. Configure `EVENT_REGISTRATION_WEBHOOK_URL` in the hosting secret store when deployment is authorized. The website enforces HTTPS, rejects redirects and times out upstream requests after 10 seconds. The client times out after 15 seconds. Do not place participant data in URLs, public files or analytics.
7. With authorization, test one synthetic registration end to end, a duplicate, concurrent retries, provider failure and a retry after timeout. Verify the store/CRM record and preserved consent states. Leave staff in control of Instagram/participation validation, the physical die outcome and Reel availability. No public field or endpoint awards prize six.

Without configuration, a valid local submission receives HTTP 503 and tells the visitor to register with staff at the stand. Provider failures return HTTP 502. The form retains typed values in the current DOM for retry, without writing participant data to browser storage. A registration success never claims prize assignment or an appointment.

Before public launch, confirm the operating dates, complete event conditions, actual Reel capacity, 24-hour delivery procedure and staff resource-delivery process. No event dates, quantities, eligibility restrictions or automated WhatsApp delivery were invented. The five educational resources themselves were not supplied for hosting or distribution.

Consent wording describes participation/WhatsApp coordination separately from optional marketing and links to the existing Spanish privacy policy. The reference checked was [Ley 1581 de 2012, official text](https://www1.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981). This implementation does not claim legal approval or automatic compliance.

## Analytics and scheduling status

The existing gated analytics infrastructure handles route visits. Fixed, non-personal event names were added: `event_registration_click`, `event_prize_explore`, and `event_registration_success`. The success event fires only after the local API's acknowledged nonduplicate success. Existing `consultation_click` and WhatsApp `contact_click` behavior is reused. No duplicate `generate_lead`, fake `appointment_booked`, GA4 key event or advertising conversion configuration was added. Event registrations do not automatically emit the regular Meta Lead conversion. No live analytics ingestion was tested.

Scheduling uses the existing `/es/book` flow. No new calendar URL, fake availability or confirmation was introduced; provider availability and booking completion were not exercised live.

## Validation

| Check                    | Result                                                                                                                                                                                                |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm build`             | Passed: client, prerender, SEO validation and server build                                                                                                                                            |
| Generated routes         | 28 actual documents, including the new Spanish page; 27 indexable sitemap URLs                                                                                                                        |
| `pnpm typecheck`         | Passed                                                                                                                                                                                                |
| `pnpm test`              | 244 tests passed in 21 files                                                                                                                                                                          |
| New event-specific tests | 17 API integrity tests, six form acknowledgment tests, event hydration coverage and alias HTTP coverage                                                                                               |
| Direct route/refresh     | Built HTTP tests serve the Spanish document; alias returns 308 with campaign parameters preserved                                                                                                     |
| Browser widths           | 320, 360, 390, 768 and 1440 pixels passed without horizontal overflow; die controls fit                                                                                                               |
| Media                    | All event and carousel image sources loaded in browser validation; video has native controls and a local optimized source/poster                                                                      |
| Browser interactions     | Die/prize synchronization, validation focus, unavailable state, mocked acknowledgment success, fresh page without stored participant state, Spanish mobile header and unchanged English header passed |
| Accessibility surface    | Associated form labels, error descriptions/focus, six accessible face selectors, visible focus, full-width mobile prizes, reduced-motion behavior and pause control checked                           |
| Browser runtime          | No uncaught page errors in the event checks                                                                                                                                                           |
| Real local API boundary  | Empty POST returned HTTP 400 / `ok: false`; no forwarding                                                                                                                                             |
| Formatting               | Scoped Prettier checks; no repository lint script exists                                                                                                                                              |
| Live provider chain      | Not tested; dedicated receiver/configuration remains necessary                                                                                                                                        |

Browser success/unavailable responses were deliberately mocked; they do not establish live storage. API integrity tests mock only the external receiver. Existing route/hydration, forms, booking, locale, analytics and Meta regression tests passed. Browser third-party widgets were blocked during isolated UI checks; no GHL account, analytics account or live booking was changed. No field Core Web Vitals or comprehensive WCAG certification is claimed. The build retains its existing large shared-bundle and old Browserslist-data warnings.

Evidence: `browser-qa-final.json`, `viewport-qa-final.json`, `final-*.png`, media inventories/contact sheets and the generated route audit under `seo-audit/`.

## Files

Created:

- `client/pages/LabsSummit2026.tsx`, `LabsSummitRedirect.tsx`, `labs-summit-2026.css`.
- `client/components/event/InteractiveDice.tsx`, `EventRegistrationForm.tsx`, `EventRegistrationForm.test.tsx`.
- `shared/eventRegistration.ts`.
- `server/routes/event-registration.ts`, `event-registration.test.ts`.
- `public/media/labs-summit-2026/` selected optimized assets.
- This report and `seo-audit/labs-summit-2026/` review evidence/scripts.

Modified:

- `client/App.tsx`, `client/components/layout/MainLayout.tsx`, `shared/site.json`: route and Spanish header link.
- `client/lib/seo.tsx`, `client/hooks/usePageMetadata.ts`: optional accurate social-image alt text.
- `client/lib/analytics.ts`: event-specific names using the existing safe event pipeline.
- `server/index.ts`, `.env.example`: separate event endpoint/configuration boundary.
- `server/static-site.ts`, `vercel.json`: short Spanish URL alias.
- `client/lib/seo.test.ts`, `client/hydration.test.tsx`, `server/static-site.test.ts`: single-language SEO, hydration and alias coverage.
- `public/sitemap.xml`, `seo-audit/generated-route-audit.json`: regenerated route evidence.
- Both workspace and website `PROJECT_CONTEXT.md` files: durable local implementation status.

Pre-existing user changes in `META_PIXEL_SETUP.md` and the website context were preserved. No existing plans/prices, other service pages, workflows, credentials or external settings were changed.

## Rollback

Remove the event manifest entry/page mapping, redirect alias and Spanish navigation item together; remove the event endpoint registration and its separate configuration if unused. Regenerate the sitemap/build. Existing lead and booking routes need no migration. After real records exist, preserve them and their consent evidence in the private receiver; removing the page must not delete event records. No database migration or live rollback is required for this local-only task.
