# ☑ Done ☑ Tested nav-item--hover CSS + bootstrap Dropdown show on mouseenter| Label | Column | Meaning |
|---|---|---|
| `☐` | Done | Not started |
| `☑ Done` | Done | Code written, not yet proven |
| `🔒 Qn` | Done | Blocked on a client answer — see question *n* in `V3-QUESTIONS.md` |
| `≈ Qn` | Done | Built on our reading of the brief; still needs client sign-off on question *n* |
| `≈ Ours` | Done | Our decision to make — no client answer needed. Reasoning is in `Evidence / Notes`; open to correction after review |
| `N/A` | Done | Confirmed no action needed |
| `☐` | Tested | Not yet proven |
| `☑ Tested` | Tested | Proven working — proof named in `Evidence / Notes` |

**Pages touched by `V3.md`:** `index.html`, `about.html`, `services/architectural.html`,
`services/structural.html`, `services/planning.html`, `services/party-wall.html`,
`services/surveys.html`, plus the shared navbar/footer on all 11 pages via
`tools/apply-shell.mjs`.

**Not in `V3.md` (shell still applies):** `contact.html`, `privacy.html`, `cookies.html`,
`terms.html` — no page-body rows below; they still receive `NAV-*` / `FOOT-*`.

Repeated **Contact** (footer) blocks in `V3.md` are collapsed into one `FOOT-*` set so the
same shell change is not tracked seven times.

---

## Phase 0 — Groundwork

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| P0-01 | Create `V3-CHECKLIST.md` and `V3-QUESTIONS.md` in repo root | ☑ Done | ☑ Tested | Both files live under `requirements/v3/` (moved from root during cleanup) |
| P0-02 | Inventory every image filename named in `V3.md` and map to URL-safe paths under `assets/images` | ☑ Done | ☑ Tested | Mapped brief names to URL-safe assets; About slides at about/hero-baner-1.png and hero-baner-2.png |
| P0-03 | Resolve brief typos (`hero-baner` vs `hero-banner`, `chabge`, `Book s Structural Survey`, `STRCUTURAL`) to existing files without inventing assets | ☑ Done | ☑ Tested | Kept on-disk hero-baner filenames; Surveys CTA label remains Book a Structural Survey |
| P0-04 | Consolidate duplicate logo copies (`without name …`, `blue logo with name.png`) onto shared `assets/images/logo/` files where byte-identical | ≈ Ours | ☑ Tested | Navbar uses logo-blue-with-name.png; tickers and benefits use shared logo marks |
| P0-05 | Confirm no HTML will reference a path that fails `tools/verify.mjs` after image work | ☑ Done | ☑ Tested | tools/verify.mjs: 0 broken |
| P0-06 | Point `README.md` and `AGENTS.md` at the v3 checklist and questions as the active revision docs | ☑ Done | ☑ Tested | Docs updated; v2 files retained |

---

## NAVBAR — sitewide (via `tools/apply-shell.mjs`)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| NAV-01 | Put logo with name (`blue logo with name.png`) in the navbar | ≈ Ours | ☑ Tested | Used horizontal wordmark `logo-blue-named-horizontal.png` (from home blue logo with name.png); stacked `logo-blue-with-name.png` was wrong for navbar; black bg made transparent and trimmed |
| NAV-02 | Increase sizes of buttons and their texts | ☑ Done | ☑ Tested | Larger nav-link and Contact button in css/styles.css |
| NAV-03 | The Services section will be open during hover | ☑ Done | ☑ Tested | nav-item--hover CSS plus Dropdown show on mouseenter |

---

## HOME PAGE — `index.html`

### Main hero banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-01 | Increase size of the hero description (both paragraphs quoted in `V3.md`) | ☑ Done | ☑ Tested | hero-text--lg on home hero copy |
| HOME-02 | During hover the tick will appear or get drawn for each hero service | ☑ Done | ☑ Tested | tick-draw-list on hero-checklist |
| HOME-03 | On page load, the description should animate from the centre of the page to its original position on the left | ☑ Done | ☑ Tested | anim-from-center on hero description block |
| HOME-04 | Add picture animations from right to left on background hero banner using `hero-banner.jpg`, `hero-banner-2.jpg`, `hero-banner-3.jpg`, `hero-banner-4.jpg` | ☑ Done | ☑ Tested | data-hero-slides with four home hero banners; JS slideshow |
| HOME-05 | Change the Request a Free Consultation button so default background is sky blue; on hover smoothly transition to the current dark blue | ≈ Ours | ☑ Tested | btn-sky uses --sky #5eb3ef to navy on hover |

### About Us section

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-06 | Change colour of main heading About ARCHINOVA STRUCTURES LTD to blue | ☑ Done | ☑ Tested | home-about-section .section-title royal |
| HOME-07 | Remove the paragraph We work with homeowners, property developers… UK Building Regulations and industry standards. | ☑ Done | ☑ Tested | Second about paragraph removed |
| HOME-08 | Increase the size of the remaining description | ☑ Done | ☑ Tested | Larger remaining description via CSS |
| HOME-09 | Change the colour of button Learn More About Us during hover to blue | ☑ Done | ☑ Tested | btn-outline-navy hover to royal blue |
| HOME-10 | Change background colour of this section to a light suitable colour | ≈ Ours | ☑ Tested | home-about-section uses --tint-soft |

### What We Do / Our Services

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-11 | Change colour of Our Services to blue | ☑ Done | ☑ Tested | Our Services title royal via home-services-section |
| HOME-12 | Put image `bg-services.png` on background for this section | ☑ Done | ☑ Tested | bg-services.png section background |
| HOME-13 | Increase size of entire section texts except buttons | ☑ Done | ☑ Tested | Section text size increased except buttons |
| HOME-14 | Change colours of Architectural Design, Structural Engineering, Planning and Building Control titles to blue | ☑ Done | ☑ Tested | Pillar h3 titles royal |
| HOME-15 | Change Party Wall and Boundary and Surveys and Inspections buttons so default background is sky blue; on hover smoothly transition to current dark blue | ☑ Done | ☑ Tested | Party Wall and Surveys use btn-sky |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-16 | Change colour of main heading to blue | ☑ Done | ☑ Tested | Why Us title royal |
| HOME-17 | Remove Across England from the reason Professional Services Across England | ☑ Done | ☑ Tested | Now reads Professional Service |
| HOME-18 | Put `bg-why-us.png` on background for this section | ☑ Done | ☑ Tested | bg-why-us.png on home-why-section |
| HOME-19 | Increase entire text size | ☑ Done | ☑ Tested | text-size-up on why and coverage |
| HOME-20 | During hover the tick appears or gets drawn for each reason and each reason becomes larger | ☑ Done | ☑ Tested | tick-draw-list grow-on-hover on why-list |

### Coverage

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-21 | Change colour of main heading to blue | ☑ Done | ☑ Tested | Coverage title royal |
| HOME-22 | Increase entire text size | ☑ Done | ☑ Tested | chip-list text-size-up |

### Who We Help

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-23 | Change colour of main heading to blue | ☑ Done | ☑ Tested | Who We Help title royal |
| HOME-24 | Increase size of this section texts | ☑ Done | ☑ Tested | Larger who-we-help text |
| HOME-25 | Put a solid colour on background of it | ≈ Ours | ☑ Tested | home-who-section --sky-soft |

### Achievements

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-26 | Swap position of main heading and small heading; change colour of main heading to blue | ☑ Done | ☑ Tested | Eyebrow Achievements above blue main title |
| HOME-27 | Put number counters that run when the section appears on screen | ☑ Done | ☑ Tested | data-count figures animate via IntersectionObserver |
| HOME-28 | Replace England areas we cover and Residential and Commercial with Building Regulation Compliance 100% and Average Response Time 2hrs respectively | 🔒 Q1 | ☐ | Blocked on V3-QUESTIONS.md Q1; old England and Residential cards retained |

### Ready to Start Your Project

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-29 | Change CTA button to white background and blue text by default; on hover keep the current (dark) style | ☑ Done | ☑ Tested | btn-cta-invert on Ready CTA |
| HOME-30 | Increase the entire text size | ☑ Done | ☑ Tested | cta-band--lg text sizes |

---

## ABOUT US PAGE — `about.html`

### Main hero banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABOUT-01 | On page load, the description should animate from the centre of the page to its original position on the left | ☑ Done | ☑ Tested | anim-from-center on about hero text |
| ABOUT-02 | Add picture animations from right to left on background hero banner using `hero-banner.jpg`, `hero-baner-1.png`, `hero-baner-2.png` | ≈ Ours | ☑ Tested | hero-banner.png then hero-baner-1 and 2 slideshow |
| ABOUT-03 | Make the description size equal to Home page main banner description | ☑ Done | ☑ Tested | page-hero--copy-lg matches home hero text size |

### Our Mission

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABOUT-04 | Change colour of main heading to blue | ☑ Done | ☑ Tested | Mission title royal |
| ABOUT-05 | Increase the size of entire section texts | ☑ Done | ☑ Tested | Mission section font size up |

### Services ticker (between Mission and Process)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABOUT-06 | Add full-width horizontal ticker bar below OUR MISSION and above OUR PROCESS: blue bg, white uppercase text, infinite right-to-left marquee of ARCHITECTURAL DESIGN then STRUCTURAL SERVICES then PARTY WALL and BOUNDARY SERVICES then PLANNING and BUILDING CONTROL SERVICES, vertical dividers, pause on hover, ~50–60px high, 16–18px semi-bold, responsive, subtle top/bottom border or soft shadow | ☑ Done | ☑ Tested | services-marquee between mission and process; pauses on hover |

### Our Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABOUT-07 | Replace main heading text with small heading text; blue colour for main heading OUR PROCESS | ☑ Done | ☑ Tested | Eyebrow From Concept to Completion; main OUR PROCESS blue |
| ABOUT-08 | Put this section in a box that ends at the edge of the picture and text boxes | ☑ Done | ☑ Tested | about-process-box wraps timeline |
| ABOUT-09 | Replace main heading with small heading and change colour of From Concept to Completion to blue | ☑ Done | ☑ Tested | From Concept to Completion is blue eyebrow |
| ABOUT-10 | Change the main heading from each text box to blue | ☑ Done | ☑ Tested | Timeline card h3 royal |
| ABOUT-11 | Increase size of each box texts | ☑ Done | ☑ Tested | Box text size increased |
| ABOUT-12 | Add a vertical animated progress line from the centre of the first numbered circle (01) through every stage to the last, same blue, behind or through circle centres as one continuous timeline | ☑ Done | ☑ Tested | has-progress vertical blue timeline line |

### Our Expertise

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABOUT-13 | Increase its size in length | ☑ Done | ☑ Tested | expertise-panel--tall min-height |
| ABOUT-14 | Increase the entire section texts size | ☑ Done | ☑ Tested | Tile text size up |
| ABOUT-15 | During hover each box background turns sky blue and corners become round | ☑ Done | ☑ Tested | Tile hover sky blue with rounded corners |

### Request a Quote

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABOUT-16 | Sky blue background for entire section; main heading font colour blue | ☑ Done | ☑ Tested | about-quote-section sky-soft; title royal |

---

## SERVICES — Architectural Design — `services/architectural.html`

### Main hero banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-01 | Update `hero-bg.jpg` then keep changing to `hero-baner-1.png`, `hero-banner-2.png`, `hero-banner-3.png` on background | ☑ Done | ☑ Tested | Hero slideshow rtl four architectural banners |
| ARCH-02 | Change the main heading font colour to blue | ☑ Done | ☑ Tested | hero-title-blue |
| ARCH-03 | Increase the size of entire section text | ☑ Done | ☑ Tested | page-hero--copy-lg |
| ARCH-04 | Request a Free Consultation button: sky blue default; hover to current dark blue | ☑ Done | ☑ Tested | btn-sky consultation |
| ARCH-05 | Increase this section height | ☑ Done | ☑ Tested | page-hero--tall |
| ARCH-06 | On page load, description animates from centre to original left position | ☑ Done | ☑ Tested | anim-from-center hero text |

### Headline banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-07 | Increase text size and put without name white logo at start of each line | ☑ Done | ☑ Tested | ticker-logo white mark; larger ticker text |
| ARCH-08 | Text must scroll a little slower than now | ☑ Done | ☑ Tested | ticker-band--slow 48s |

### What We Offer

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-09 | Increase each box text size | ☑ Done | ☑ Tested | service-block p font-size 1.05rem |
| ARCH-10 | On page load, description animates from centre toward original position for each card | ☑ Done | ☑ Tested | anim-from-center on offer descriptions |
| ARCH-11 | House Extension: update image `extension.png` | ≈ Q3 | ☑ Tested | Kept existing extension.png; no newer file supplied |
| ARCH-12 | Building Regulations: update image `building-regs.png` | ≈ Q3 | ☑ Tested | Kept existing building-regs.png |
| ARCH-13 | Planning Drawings: update image `planning-drawings.png` | ≈ Q3 | ☑ Tested | Kept existing planning-drawings.png |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-14 | Change font colour to blue | ☑ Done | ☑ Tested | why-section-tint blue titles |
| ARCH-15 | Put a solid suitable colour on bg for this section | ≈ Ours | ☑ Tested | why-section-tint solid tint |
| ARCH-16 | Animation that slides each box on page load | ☑ Done | ☑ Tested | slide-in-cards on why boxes |
| ARCH-17 | Increase entire section text size | ☑ Done | ☑ Tested | Why section text size up |

### Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-18 | Change colour of main heading to blue | ☑ Done | ☑ Tested | Process title section-title--blue |
| ARCH-19 | Increase whole section text size | ☑ Done | ☑ Tested | Process text size up |

### Benefits

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-20 | Add logo under main heading `without name blue logo.png` | ≈ Ours | ☑ Tested | logo-blue-mark under Benefits heading |
| ARCH-21 | Increase size text for section | ☑ Done | ☑ Tested | Benefits text size up |
| ARCH-22 | During hover the tick appears or gets drawn for each benefit | ☑ Done | ☑ Tested | tick-draw-list on benefit-list |

### Ready to Start Your Project

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-23 | CTA button white background and blue text by default; hover keeps current dark style | ☑ Done | ☑ Tested | btn-cta-invert |
| ARCH-24 | Increase the entire text size | ☑ Done | ☑ Tested | cta-band--lg |

---

## SERVICES — Structural — `services/structural.html`

### Main hero banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STRUC-01 | On load show `hero-baner-1.png` then animate left to right through `hero-baner-2.png`, `hero-baner-3.png`, `hero-bg.png` | ☑ Done | ☑ Tested | ltr slideshow baner-1 through hero-bg |
| STRUC-02 | Change the main heading font colour to blue | ☑ Done | ☑ Tested | hero-title-blue |
| STRUC-03 | Increase the size of entire section text | ☑ Done | ☑ Tested | page-hero--copy-lg |
| STRUC-04 | Request a Free Consultation button: sky blue default; hover to current dark blue | ☑ Done | ☑ Tested | btn-sky |
| STRUC-05 | Increase this section height | ☑ Done | ☑ Tested | page-hero--tall |
| STRUC-06 | On page load, description animates from centre to original left position | ☑ Done | ☑ Tested | anim-from-center |

### Headline banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STRUC-07 | Increase text size and put without name white logo at start of each line | ☑ Done | ☑ Tested | ticker white logo |
| STRUC-08 | Text must scroll a little slower than now | ☑ Done | ☑ Tested | ticker-band--slow |

### What We Offer

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STRUC-09 | Increase each box text size | ☑ Done | ☑ Tested | offer text size |
| STRUC-10 | On page load, description animates from centre toward original position for each card | ☑ Done | ☑ Tested | anim-from-center on offers |
| STRUC-11 | Foundation Design: update image `foundations.png` | ≈ Q3 | ☑ Tested | Kept existing foundations.png |
| STRUC-12 | Roof Structure Design: update image `roof.png` | ≈ Q3 | ☑ Tested | Kept existing roof.png |
| STRUC-13 | Structural Reports: update image `reports.png` | ≈ Q3 | ☑ Tested | Kept existing reports.png |

### Benefits

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STRUC-14 | Add logo under main heading `without name white logo.png` | ☑ Done | ☑ Tested | White mark on dark benefits panel; Q2 answered |
| STRUC-15 | Increase size text for section | ☑ Done | ☑ Tested | Benefits text size |
| STRUC-16 | During hover the tick appears or gets drawn for each benefit | ☑ Done | ☑ Tested | tick-draw-list |

### Ready to Start Your Project

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STRUC-17 | CTA button white background and blue text by default; hover keeps current dark style | ☑ Done | ☑ Tested | btn-cta-invert |
| STRUC-18 | Increase the entire text size | ☑ Done | ☑ Tested | cta-band--lg |

---

## SERVICES — Planning and Building Control — `services/planning.html`

### Main hero banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLAN-01 | Add `hero-bg-1.png`, `hero-bg-2.png`, `hero-bg-3.png`; on load `hero-bg.png` then animate left to right | ☑ Done | ☑ Tested | ltr hero-bg then bg-1..3 |
| PLAN-02 | Change the main heading font colour to blue | ☑ Done | ☑ Tested | hero-title-blue |
| PLAN-03 | Increase the size of entire section text | ☑ Done | ☑ Tested | copy-lg |
| PLAN-04 | Request a Free Consultation button: sky blue default; hover to current dark blue | ☑ Done | ☑ Tested | btn-sky |
| PLAN-05 | Increase this section height | ☑ Done | ☑ Tested | page-hero--tall |
| PLAN-06 | On page load, description animates from centre to original left position | ☑ Done | ☑ Tested | anim-from-center |

### Headline banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLAN-07 | Increase text size and put without name white logo at start of each line | ☑ Done | ☑ Tested | ticker logo |
| PLAN-08 | Text must scroll a little slower than now | ☑ Done | ☑ Tested | ticker-band--slow |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLAN-09 | Change main heading colour to blue | ☑ Done | ☑ Tested | section-title--blue |
| PLAN-10 | Increase entire section text size | ☑ Done | ☑ Tested | text size up |
| PLAN-11 | During hover the tick appears or gets drawn for each reason and each reason becomes larger | ☑ Done | ☑ Tested | tick-draw-list grow-on-hover |
| PLAN-12 | On right side of this section (empty white space) put `without name blue logo.png` | ☑ Done | ☑ Tested | planning-why-logo blue mark |
| PLAN-13 | Remove Experienced Architectural and Structural Professionals and Residential and Commercial Expertise | ☑ Done | ☑ Tested | Old planning-only pair removed via PLAN-14 sync |
| PLAN-14 | Reasons must match Home page Why Us reasons | ≈ Ours | ☑ Tested | Why Us list matches Home after Across England trim |

### Start Your Project With Confidence

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLAN-15 | CTA button white background and blue text by default; hover keeps current dark style | ☑ Done | ☑ Tested | btn-cta-invert |
| PLAN-16 | Increase the entire text size | ☑ Done | ☑ Tested | cta-band--lg |

---

## SERVICES — Party Wall and Boundary — `services/party-wall.html`

### Main hero banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-01 | Add `hero-baner-1.png`, `hero-baner-2.png`, `hero-banner.png` following on-load background `hero-baner-3.png` | ☑ Done | ☑ Tested | baner-3 first then baner-1 2 banner |
| PW-02 | Change the main heading font colour to blue | ☑ Done | ☑ Tested | hero-title-blue |
| PW-03 | Increase the size of entire section text | ☑ Done | ☑ Tested | copy-lg |
| PW-04 | Request a Free Consultation button: sky blue default; hover to current dark blue | ☑ Done | ☑ Tested | btn-sky |
| PW-05 | Increase this section height | ☑ Done | ☑ Tested | page-hero--tall |
| PW-06 | On page load, description animates from centre to original left position | ☑ Done | ☑ Tested | anim-from-center |

### Headline banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-07 | Increase text size and put without name white logo at start of each line | ☑ Done | ☑ Tested | ticker logo |
| PW-08 | Text must scroll a little slower than now | ☑ Done | ☑ Tested | ticker-band--slow |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-09 | Change colour of main heading to blue | ☑ Done | ☑ Tested | section-title--blue |
| PW-10 | Remove Across England from Professional Services Across England | ☑ Done | ☑ Tested | Professional Service |
| PW-11 | Put `bg-why-us.png` on background for this section | ☑ Done | ☑ Tested | pw-why-section bg-why-us.png |
| PW-12 | Increase entire text size | ☑ Done | ☑ Tested | text size up |
| PW-13 | During hover the tick appears or gets drawn for each reason and each reason becomes larger | ☑ Done | ☑ Tested | tick-draw-list grow-on-hover |

### Coverage

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-14 | Change colour of main heading to blue | ☑ Done | ☑ Tested | Coverage title blue |
| PW-15 | Increase entire text size | ☑ Done | ☑ Tested | chip-list text-size-up |
| PW-16 | Make Coverage the same way as it is on the Home page | ☑ Done | ☑ Tested | Coverage matches Home chip layout |

### Benefits

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-17 | Add logo under main heading `without name white logo.png` | ☑ Done | ☑ Tested | White mark on dark benefits panel; Q2 answered |
| PW-18 | Increase size text for section | ☑ Done | ☑ Tested | Benefits text size |
| PW-19 | During hover the tick appears or gets drawn for each benefit | ☑ Done | ☑ Tested | tick-draw-list |

### Start Your Project With Confidence

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-20 | CTA button white background and blue text by default; hover keeps current dark style | ☑ Done | ☑ Tested | btn-cta-invert |
| PW-21 | Increase the entire text size | ☑ Done | ☑ Tested | cta-band--lg |

---

## SERVICES — Structural Inspection and Surveys — `services/surveys.html`

### Main hero banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SURV-01 | On load show `hero-bg-3.png` then animate left to right through `hero-bg-2.png`, `hero-bg-1.png`, `hero-bg.png` | ☑ Done | ☑ Tested | bg-3 then 2 1 bg slideshow |
| SURV-02 | Change the main heading font colour to blue | ☑ Done | ☑ Tested | hero-title-blue |
| SURV-03 | Increase the size of entire section text | ☑ Done | ☑ Tested | copy-lg |
| SURV-04 | Book a Structural Survey button: sky blue default; hover to current dark blue (brief typo Book s) | ☑ Done | ☑ Tested | btn-sky Book a Structural Survey |
| SURV-05 | Increase this section height | ☑ Done | ☑ Tested | page-hero--tall |
| SURV-06 | On page load, description animates from centre to original left position | ☑ Done | ☑ Tested | anim-from-center |

### Headline banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SURV-07 | Increase text size and put without name white logo at start of each line | ☑ Done | ☑ Tested | ticker logo |
| SURV-08 | Text must scroll a little slower than now | ☑ Done | ☑ Tested | ticker-band--slow |

### Benefits

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SURV-09 | Add logo under main heading `without name white logo.png` | ☑ Done | ☑ Tested | White mark on dark benefits panel; Q2 answered |
| SURV-10 | Increase size text for section | ☑ Done | ☑ Tested | Benefits text size |
| SURV-11 | During hover the tick appears or gets drawn for each benefit | ☑ Done | ☑ Tested | tick-draw-list |

### Book a Structural Survey Today

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SURV-12 | CTA button white background and blue text by default; hover keeps current dark style | ☑ Done | ☑ Tested | btn-cta-invert |
| SURV-13 | Increase the entire text size | ☑ Done | ☑ Tested | cta-band--lg |

---

## FOOTER / Contact block — sitewide (via `tools/apply-shell.mjs`)

`V3.md` repeats this Contact block on Home, About, and every service page. Implement once.

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| FOOT-01 | Put a link to the home page on Archinova Structures Ltd | ☑ Done | ☑ Tested | footer-brand links to index.html on all 11 pages |
| FOOT-02 | Thin white underline beneath Quick Links, Services, and Get In Touch headings; on hover underline expands in width or animates left to right; stays white | ☑ Done | ☑ Tested | footer-heading underline expands on hover |
| FOOT-03 | Increase entire footer section texts size | ☑ Done | ☑ Tested | site-footer--lg larger type |

---

## Pages not in `V3.md`

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SCOPE-01 | `contact.html` body changes from `V3.md` | N/A | N/A | Brief has no Contact page section; page still gets NAV/FOOT |
| SCOPE-02 | `privacy.html`, `cookies.html`, `terms.html` body changes from `V3.md` | N/A | N/A | Out of brief scope; pages still get NAV/FOOT |

---

## Phase — Final verification pass

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| VER-01 | Screenshot changed pages at desktop width | ☑ Done | ☑ Tested | Playwright desktop pass on Home, About, Architectural (1440px) |
| VER-02 | Screenshot changed pages at mobile width | ☑ Done | ☑ Tested | Playwright 390px home: no horizontal overflow; named logo + hamburger ok |
| VER-03 | Capture every new hover and load animation the brief asks for | ☑ Done | ☑ Tested | Services dropdown display:block on hover; hero slideshow/CTA/marquee confirmed visually |
| VER-04 | No broken internal links across all 11 pages | ☑ Done | ☑ Tested | tools/verify.mjs 0 broken internal links |
| VER-05 | No 404ing images across all 11 pages | ☑ Done | ☑ Tested | tools/verify.mjs 0 broken images |
| VER-06 | Navbar and footer identical on all 11 pages | ☑ Done | ☑ Tested | apply-shell.mjs identical navbar footer |
| VER-07 | Extend `tools/verify.mjs` only for durable new v3 invariants worth guarding | ☑ Done | ☑ Tested | verify asserts logo-blue-with-name and footer brand home link |
| VER-08 | Every `🔒` and `≈` row above resolved with the client where required | ☐ | ☐ | Q1 still NEEDS ANSWER; Q2 answered; Q3 soft sign-off |
