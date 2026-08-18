# Human review queue

Items below need a decision or a fact that only DigitalFace holds. Nothing here
was guessed at or written into the site.

---

## 1. Organization schema uses the Cali address as the primary address

**What was done:** `client/lib/structuredData.ts` sets
`address` to `Calle 70 # 1-00, La 14 de Calima, Cali, Valle del Cauca, CO` —
the only address with a street published anywhere on the site (footer, "Offices").

Miami is listed as "Remote-first across the East Coast" with no street, so it is
expressed as `areaServed`, not fabricated into a `PostalAddress`.

**Needed:** if the legal or registered entity is US-based, the primary `address`
should be the Miami one and a real street address must be supplied. Also confirm
`Valle del Cauca` as the `addressRegion` — it is correct for Cali but is the one
value in that block not literally printed on the site.

---

## 2. No social profiles in `sameAs`

`sameAs` was left out entirely. The site references Facebook, Instagram and
WhatsApp as _service capabilities_, never as DigitalFace's own profiles, and no
profile URL appears anywhere in the codebase.

**Needed:** the canonical URLs for DigitalFace's own Instagram / Facebook /
LinkedIn / YouTube, if they exist. They meaningfully help entity resolution in
both classic search and AI answers.

---

## 3. No analytics exists, so no event layer was prepared

There is no GA4, no GTM, no Meta pixel and no `dataLayer` anywhere in the repo.
The implementation brief asks for support for `cta_click`, `form_start`,
`generate_lead`, `book_meeting`, `language_switch`, `resource_download` and
`case_study_view` — but only "where event infrastructure exists".

**Needed:** a decision. Installing tracking is a privacy and consent decision, not
a copy fix, and the published Privacy Policy already describes cookie and
analytics use that the site does not currently perform. Two consequences:

- Nothing on this site is currently measurable. There is no way to tell which
  page or locale produces booked calls, which makes every future SEO or CRO
  decision a guess.
- The Privacy Policy currently describes analytics and advertising cookies that
  are not in use. That is a mismatch worth correcting in one direction or the
  other.

---

## 4. Ten page components exist but are not routed

`client/pages/` contains `Services.tsx`, `Blog.tsx`, `Portfolio.tsx`,
`Websites.tsx`, `SocialMediaAds.tsx`, `ManyChatTemplates.tsx`, `Automations.tsx`,
`AutomationsChatbots.tsx`, `AutomationsCrm.tsx` and `AutomationsWorkflows.tsx`.

None are registered in `client/App.tsx`, so all ten resolve to the 404. They are
also English-only with hardcoded strings, i.e. they predate the i18n system and
would leak English into `/es` if routed as-is.

**Needed:** a decision per file — delete, or rebuild through the `i18n/content`
pattern and route them. Several map to real search demand the site currently has
no page for (`chatbot development`, `workflow automation`, `CRM setup`,
`landing pages`). Left untouched because this is a content-strategy call.

---

## 5. `/pay-per-service` carries ~20 mega-menu anchors that could be pages

The header mega menu links to `#meta-ads`, `#chatbot-development`,
`#workflow-automation`, `#crm-integration`, `#campaign-landing-pages` and about
fifteen more — all anchors on a single page.

Each is a distinct commercial intent. Consolidating them on one page avoids
cannibalization today, but it also means none of them can rank on their own.

**Needed:** decide which of these deserve real URLs. The rule that should govern
it: split only where the page can carry genuinely different content — method,
deliverables, proof, FAQ — not a re-skinned section. Anything less becomes a
doorway page.

---

## 6. No case-study depth anywhere on the site

Two client systems are named on the home page (Dr. Diego Sinisterra, Dra. Jennifer
Sinisterra) with qualitative descriptions and no numbers. That is honest and was
left exactly as-is.

**Needed, if and only if the clients approve publication:** baseline → intervention
→ verified result → time frame → business interpretation, per system. This is the
single highest-leverage missing asset on the site: every industry funnel drives to
a booking with no quantified proof anywhere in the path.

Do not publish any figure that has not been confirmed with the client in writing.

---

## 7. `/about` has no verifiable trust signals

The page describes how the team works but states no founding year, team size,
platform certifications (Meta Business Partner, Google Partner), or client count.

**Needed:** whichever of these are true and documentable. Certifications in
particular are cheap credibility and are directly checkable by a buyer.

---

## 8. Industry funnels: closed-funnel intent vs. crawlability

The three funnels were built as closed funnels — every in-page CTA is an anchor to
`#book-assessment`, and the only outbound links were `/privacy` and `/terms`.

This pass added a footer link block (home, `/features`, `/pricing`, sibling
funnels). It fixes the crawl dead-end and the sibling cross-linking without
touching the funnel body.

**Needed:** confirm this is acceptable. If the closed funnel is a paid-traffic
requirement, the alternative is to keep the links but serve the funnels on a
separate no-nav route for ad traffic. Reverting is a single-block deletion in
`ClosedLandingFooter`.

Related, smaller: the funnel header logo is not a link. Deliberate for a closed
funnel, unconventional for a crawler. Left as-is.

---

## 9. Social share image is 1536×1024

`public/images/digitalface-post.png` is 3:2. It works, but Facebook, LinkedIn and
X all crop toward 1.91:1, so the top and bottom get trimmed unpredictably.

**Needed:** a 1200×630 export. Cheap fix, better previews. Also worth producing
per-vertical share images for the three funnels — `usePageMetadata` already
accepts an `image` override, so wiring them is a one-line change per page.

---

## 10. Spanish country targeting is currently pan-LATAM only

The Spanish tree is one neutral LATAM version at `/es`, marked `hreflang="es"`.
That is the correct call today and should not be changed casually.

**Do not** create `/es-mx/`, `/es-co/` or `/es-ar/` pages that only swap a country
name — that is scaled content and Google treats it accordingly. Country pages earn
their existence only with real local substance: local proof, local pricing
context, local regulations, a local team member, local client stories.

**Needed, before any country expansion:** Search Console query data by country. If
Mexico and Colombia show materially different query patterns and there is real
local content to publish, split then — with `es-MX` / `es-CO`, never `es-419`.
