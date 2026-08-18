# DigitalFace multimedia generation guide

Every prompt below maps to one coded website slot. Save the approved asset at
the exact path shown; the website will replace its branded placeholder
automatically.

## Shared visual direction

- Brand mood: premium, modern, reassuring, technically capable, human.
- Brand accents: restrained violet (`#7C3AED`) and cyan (`#0EA5E9`) light.
- Photography: natural skin and fabric texture, realistic professional spaces,
  diverse adults, candid expressions, no artificial stock-photo smiles.
- Do not bake headlines, logos, buttons, dashboards, or small readable text into
  the media. The website supplies accessible HTML copy above the asset.
- Avoid graphic procedures, needles, exaggerated cosmetic results, perfect
  porcelain teeth, medical claims, futuristic hologram clichés, watermarks, and
  unrelated brand marks.
- Images: generate landscape, then export as optimized WebP in sRGB.
- Videos: 6–10 seconds, muted, seamless loop, stable motion, MP4/H.264. Keep the
  important action inside the center safe area so responsive crops remain useful.

## Asset map

| ID  | Page position                               | Type                | Final path                                                                                          |
| --- | ------------------------------------------- | ------------------- | --------------------------------------------------------------------------------------------------- |
| C01 | Corporate homepage hero background          | Video + poster      | `public/videos/digitalface-hero.mp4` + `public/images/hero-poster.webp`                             |
| C02 | Corporate industry card: Dental             | Image               | `public/media/corporate/industry-dental.webp`                                                       |
| C03 | Corporate industry card: Aesthetic Medicine | Image               | `public/media/corporate/industry-aesthetic.webp`                                                    |
| C04 | Corporate industry card: Med Spa            | Image               | `public/media/corporate/industry-med-spa.webp`                                                      |
| C05 | Corporate system overview banner            | Video + poster      | `public/media/corporate/system-overview.mp4` + `public/media/corporate/system-overview-poster.webp` |
| D01 | Dental landing hero banner                  | Video + poster      | `public/media/dental/hero-loop.mp4` + `public/media/dental/hero-poster.webp`                        |
| D02 | Dental patient-journey banner               | Image               | `public/media/dental/workflow-banner.webp`                                                          |
| A01 | Aesthetic medicine landing hero banner      | Video + poster      | `public/media/aesthetic/hero-loop.mp4` + `public/media/aesthetic/hero-poster.webp`                  |
| A02 | Aesthetic consultation workflow banner      | Image               | `public/media/aesthetic/workflow-banner.webp`                                                       |
| M01 | Med-spa landing hero banner                 | Video + poster      | `public/media/med-spa/hero-loop.mp4` + `public/media/med-spa/hero-poster.webp`                      |
| M02 | Med-spa booking workflow banner             | Image               | `public/media/med-spa/workflow-banner.webp`                                                         |
| P01 | Dra. Jennifer success-client card           | Approved-photo edit | `public/media/clients/jennifer-case-study.webp`                                                     |
| P02 | Dr. Diego success-client card               | Approved-photo edit | `public/media/clients/diego-case-study.webp`                                                        |

---

## C01 — Corporate homepage hero film

**Copy into ChatGPT video generation:**

```text
Use case: ads-marketing
Asset type: full-width corporate website hero background video
Primary request: Create an 8-second seamless cinematic loop that communicates a modern patient-growth system connecting a new inquiry, a fast human-centered response, and a booked appointment.
Scene/backdrop: premium contemporary practice environment blended through subtle match cuts with an abstract phone notification, calendar confirmation, and organized pipeline motion; interfaces must remain abstract and contain no readable text.
Subject: diverse adult patient or client using a phone naturally, followed by a confident practice coordinator reviewing an organized inquiry; authentic and unstaged.
Style/medium: photorealistic premium commercial film, grounded and credible rather than futuristic.
Composition/framing: landscape 16:9; preserve darker negative space across the left 45% for white website copy; keep faces and essential action in the center-right safe area; slow controlled camera movement.
Lighting/mood: warm professional daylight with restrained violet and cyan practical-light accents; calm, capable, optimistic.
Constraints: 8 seconds, muted, seamless loop, natural skin texture, realistic hands and phones, no text, no logo, no watermark, no medical procedure, no claims, no rapid cuts.
Avoid: holograms, neon sci-fi interfaces, exaggerated smiles, stock-photo staging, distorted screens or fingers.
```

**Poster follow-up:**

```text
From the approved corporate hero video, produce one matching clean landscape poster frame. Preserve the left-side dark negative space and the center-right human focal point. No text, logo, controls, watermark, or motion blur.
```

## C02 — Dental gateway card

```text
Use case: photorealistic-natural
Asset type: corporate website industry gateway card
Primary request: Create a premium, authentic image representing a modern dental consultation before treatment.
Scene/backdrop: bright contemporary dental consultation room with subtle technology, clean surfaces, and no visible brand marks.
Subject: adult patient seated comfortably while a dental treatment coordinator listens and reviews a tablet; reassuring conversation, no procedure taking place.
Style/medium: photorealistic editorial healthcare photography with natural skin and fabric texture.
Composition/framing: landscape 16:9, medium-wide, both people clearly visible, center-safe crop, uncluttered background.
Lighting/mood: soft daylight, calm, trustworthy, sophisticated; very subtle violet and cyan environmental accents.
Constraints: no text, no logo, no watermark, realistic teeth, realistic hands, inclusive casting, no instruments inside a mouth.
Avoid: exaggerated white smiles, before-and-after imagery, masks hiding every face, staged stock-photo poses.
```

## C03 — Aesthetic medicine gateway card

```text
Use case: photorealistic-natural
Asset type: corporate website industry gateway card
Primary request: Create a physician-led aesthetic medicine consultation image centered on trust, listening, and professional guidance.
Scene/backdrop: refined modern medical-aesthetic consultation office, elegant but clinically credible.
Subject: licensed-looking physician in professional attire speaking with an adult patient and reviewing a treatment-interest tablet; no treatment underway.
Style/medium: photorealistic premium editorial photography, natural faces and realistic skin texture.
Composition/framing: landscape 16:9, medium-wide, balanced two-person composition with center-safe focal area.
Lighting/mood: soft flattering daylight, quiet confidence, warm neutral materials with restrained violet accent light.
Constraints: no text, no logo, no watermark, no needles, no procedure, no outcome claim, no sexualized styling.
Avoid: plastic-looking skin, luxury-spa fantasy, white-coat stock-photo cliché, dramatic before-and-after framing.
```

## C04 — Med-spa gateway card

```text
Use case: photorealistic-natural
Asset type: corporate website industry gateway card
Primary request: Create an inviting premium med-spa arrival and welcome moment that suggests booking, membership, and long-term client care.
Scene/backdrop: modern med-spa reception with warm stone, light wood, subtle greenery, and clean contemporary design.
Subject: friendly coordinator welcoming an adult client and confirming an appointment on a tablet; candid interaction.
Style/medium: photorealistic hospitality-meets-wellness editorial photography.
Composition/framing: landscape 16:9, medium-wide, natural body language, central safe area for responsive crop.
Lighting/mood: warm daylight with a restrained cyan highlight, polished but approachable.
Constraints: no text, no logo, no watermark, no visible private data, realistic hands and devices, inclusive casting.
Avoid: robes, champagne, excessive luxury props, empty generic spa room, staged handshake.
```

## C05 — Corporate system overview film

```text
Use case: stylized-concept
Asset type: wide website explainer video banner
Primary request: Create an 8-second seamless visual loop showing one inquiry moving through four connected stages: new contact, immediate response, appointment booking, and clear pipeline visibility.
Scene/backdrop: deep navy premium digital environment grounded in clean product-design aesthetics, not science fiction.
Subject: one luminous opportunity signal travels smoothly through four distinct abstract interface moments represented by a message bubble, response pulse, calendar confirmation, and organized pipeline columns; no readable interface text.
Style/medium: elegant 3D motion design with subtle glass, matte surfaces, and crisp UI-inspired geometry.
Composition/framing: ultra-wide banner composition; left-to-right flow; keep the lower third visually quiet for the website overlay; all essential elements inside the center 80%.
Lighting/mood: confident, precise, calm; restrained DigitalFace violet and cyan with a small emerald completion accent.
Constraints: 8 seconds, muted, seamless loop, no words, no numbers, no logo, no watermark, no tiny dashboard details, no camera shake.
Avoid: holograms, cyberpunk neon, busy data walls, coins, rockets, generic AI robot imagery.
```

**Poster follow-up:**

```text
Create a still poster matching the approved system-overview animation at the moment all four stages are visibly connected. Preserve the quiet lower third. No text, logo, watermark, or playback controls.
```

## D01 — Dental landing hero film

```text
Use case: photorealistic-natural
Asset type: dental landing-page cinematic banner video
Primary request: Create an 8-second seamless loop of a reassuring high-value dental consultation journey before treatment.
Scene/backdrop: premium contemporary dental consultation suite; clean, credible, comfortable, with subtle digital intake tools.
Subject: adult patient arrives, receives a warm welcome from a coordinator, then sits for a calm consultation preview; show listening and confidence, not a procedure.
Style/medium: photorealistic premium healthcare film with authentic human detail.
Composition/framing: landscape 16:9 with a center 21:9 safe area; slow lateral or gentle push-in movement; faces remain usable in wide responsive crops.
Lighting/mood: soft morning daylight, reassuring and aspirational; restrained violet/cyan reflections that feel architectural.
Constraints: 8 seconds, muted, seamless loop, no readable text, no logo, no watermark, no mouth close-up, no instruments, realistic natural teeth.
Avoid: dramatic smile reveal, before-and-after implication, overly white clinic, stock-photo posing, distorted hands.
```

**Poster follow-up:**

```text
Export a clean representative still from the approved dental hero film showing the patient and coordinator in a calm consultation moment. Preserve natural teeth and skin. No text, logo, watermark, or motion blur.
```

## D02 — Dental consultation workflow image

```text
Use case: photorealistic-natural
Asset type: dental patient-journey section banner
Primary request: Create an authentic scene showing how organized intake supports a human dental consultation.
Scene/backdrop: modern consultation area adjacent to a dental practice, with a tablet and subtle patient-information materials containing no readable data.
Subject: adult patient and treatment coordinator reviewing general consultation steps together; a dentist is available in the softly focused background, suggesting appropriate human review.
Style/medium: photorealistic editorial healthcare photography, natural texture, candid expressions.
Composition/framing: wide 21:9-ready landscape; main interaction slightly off-center but entirely inside the middle 70%; clear negative space around subjects.
Lighting/mood: calm daylight, organized, reassuring, premium.
Constraints: no readable records, no text, no logo, no watermark, no clinical recommendation depicted, no procedure.
Avoid: fake charts, exaggerated smile, patient distress, sterile stock photography.
```

## A01 — Aesthetic medicine landing hero film

```text
Use case: photorealistic-natural
Asset type: aesthetic medicine landing-page cinematic banner video
Primary request: Create an 8-second seamless loop centered on a respectful physician-led aesthetic consultation.
Scene/backdrop: sophisticated medical-aesthetic office combining clinical credibility with warm modern design.
Subject: adult patient speaking with a physician who listens, takes general notes on a tablet, and explains a consultation process without performing treatment.
Style/medium: photorealistic premium medical editorial film; natural skin, realistic pores, tasteful wardrobe.
Composition/framing: landscape 16:9 with center 21:9 safe area; slow, stable camera move; balanced two-person framing suitable for wide crop.
Lighting/mood: soft natural window light, calm expertise, subtle violet edge light.
Constraints: 8 seconds, muted, seamless loop, no text, no logo, no watermark, no needles, no procedure, no body transformation claim.
Avoid: perfect plastic skin, sensual spa imagery, before-and-after language, white-coat cliché, beauty-filter appearance.
```

**Poster follow-up:**

```text
Create a matching poster still from the approved aesthetic consultation film. Select a composed listening moment with both physician and patient visible. Keep real skin texture. No text, logo, watermark, or treatment equipment in use.
```

## A02 — Aesthetic consultation workflow image

```text
Use case: photorealistic-natural
Asset type: aesthetic consultation workflow section banner
Primary request: Show an aesthetic medicine team organizing a new consultation inquiry while preserving a clear human and clinical handoff.
Scene/backdrop: contemporary medical-aesthetic coordination area with a clean workstation and consultation room nearby.
Subject: coordinator reviews an abstract inquiry on a tablet while a physician joins the conversation with an adult patient; collaborative, calm, no treatment.
Style/medium: photorealistic editorial photography with natural skin and understated professional styling.
Composition/framing: wide landscape suitable for a 21:9 crop; three-person interaction centered with clean margins.
Lighting/mood: refined daylight, competent and reassuring, soft neutral palette with restrained violet/cyan accents.
Constraints: no readable private information, no text, no logo, no watermark, no procedure, realistic devices and hands.
Avoid: futuristic displays, beauty-filter skin, posed team lineup, exaggerated luxury.
```

## M01 — Med-spa landing hero film

```text
Use case: photorealistic-natural
Asset type: med-spa landing-page cinematic banner video
Primary request: Create an 8-second seamless loop showing a premium but approachable med-spa client journey from arrival to confirmed appointment experience.
Scene/backdrop: contemporary med-spa reception and consultation lounge using warm stone, pale wood, soft textiles, and subtle greenery.
Subject: adult client is welcomed by a coordinator, naturally checks a phone confirmation, and transitions into a friendly consultation conversation.
Style/medium: photorealistic wellness and hospitality commercial film with authentic detail.
Composition/framing: landscape 16:9 with center 21:9 safe area; slow stable tracking movement; people remain central for responsive crops.
Lighting/mood: warm daylight, restorative, organized, premium without excess; restrained cyan and violet accents.
Constraints: 8 seconds, muted, seamless loop, no readable phone text, no logo, no watermark, no procedure, inclusive casting.
Avoid: champagne, bathrobes, candles everywhere, empty treatment room, sexualized styling, over-retouched skin.
```

**Poster follow-up:**

```text
Create a matching poster still from the approved med-spa film showing the welcome or consultation moment. Preserve the warm modern environment and natural skin. No text, logo, watermark, or motion blur.
```

## M02 — Med-spa booking and reactivation image

```text
Use case: photorealistic-natural
Asset type: med-spa client-journey section banner
Primary request: Create a warm, authentic interaction that suggests organized booking, rebooking, and long-term client care.
Scene/backdrop: premium med-spa reception desk with a discreet tablet and a comfortable consultation area behind it.
Subject: returning adult client and coordinator reviewing the next appointment together; relaxed recognition and professional warmth.
Style/medium: photorealistic editorial hospitality photography, candid and natural.
Composition/framing: wide landscape prepared for a 21:9 crop; subjects in the center 65%; uncluttered margins.
Lighting/mood: warm natural light, welcoming, dependable, quietly premium.
Constraints: no readable client data, no text, no logo, no watermark, realistic hands and tablet, no procedure.
Avoid: staged handshake, loyalty cards with text, excessive spa props, beauty-filter skin.
```

## P01 — Dra. Jennifer case-study image

Do not generate a new likeness from her name. Upload one approved real photo as
**Image 1**, then use this edit prompt:

```text
Use case: identity-preserve
Asset type: verified client case-study banner
Input images: Image 1: approved real portrait of Dra. Jennifer Sinisterra, edit target
Primary request: Reframe the approved portrait into a premium landscape case-study image and place her naturally within a modern cosmetic-dentistry consultation environment.
Style/medium: photorealistic professional editorial portrait.
Composition/framing: landscape 16:9, subject positioned within the center 60%, enough environmental context to read as a real professional practice.
Lighting/mood: soft professional daylight with subtle DigitalFace violet and cyan accents in the environment.
Constraints: preserve her exact face, body proportions, hair, skin tone, age, expression, and identity; change only framing, background, color balance, and subtle professional polish; no text, no logo, no watermark, no invented dental result.
Avoid: face redesign, beauty filtering, altered teeth, excessive retouching, synthetic white coat unless present in Image 1.
```

## P02 — Dr. Diego case-study image

Do not generate a new likeness from his name. Upload one approved real photo as
**Image 1**, then use this edit prompt:

```text
Use case: identity-preserve
Asset type: verified client case-study banner
Input images: Image 1: approved real portrait of Dr. Diego Sinisterra, edit target
Primary request: Reframe the approved portrait into a premium landscape case-study image and place him naturally within a credible modern aesthetic-medicine consultation environment.
Style/medium: photorealistic professional editorial portrait.
Composition/framing: landscape 16:9, subject positioned within the center 60%, modern professional environment visible without distracting from identity.
Lighting/mood: soft professional daylight with restrained DigitalFace violet and cyan environmental accents.
Constraints: preserve his exact face, body proportions, hair, skin tone, age, expression, and identity; change only framing, background, color balance, and subtle professional polish; no text, no logo, no watermark, no procedure or treatment claim.
Avoid: face redesign, beauty filtering, altered skin texture, excessive retouching, invented medical equipment or credentials.
```

## Recommended generation order

1. Generate the three gateway images: C02, C03, C04.
2. Generate the three niche workflow images: D02, A02, M02.
3. Generate niche hero videos and posters: D01, A01, M01.
4. Generate the corporate system film: C05.
5. Replace the existing corporate hero only if C01 improves on the current film.
6. Create P01 and P02 only from approved real client photographs.

This order makes the largest visual improvement quickly while leaving the
current working corporate hero intact until a stronger replacement is ready.
