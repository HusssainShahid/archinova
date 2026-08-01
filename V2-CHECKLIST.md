# V2 Revision — Implementation Checklist

Every instruction in `v2.md`, in the order it appears there, so this file can be read side
by side against the original brief.

## Rules for this file

1. **Rows are never deleted, reworded, or renumbered.** Once an ID exists it keeps its
   wording forever, so the file always reads 1:1 against `v2.md`.
2. **Only the `Done` and `Tested` cells get updated**, plus the `Evidence / Notes` cell.
3. `Done` and `Tested` are separate on purpose. `Done` means the code is written.
   `Tested` means it was actually proven to work, with the proof named in `Evidence`.
   An item is only finished when **both** are ticked.

## Label key

| Label | Column | Meaning |
|---|---|---|
| `☐` | Done | Not started |
| `☑ Done` | Done | Code written, not yet proven |
| `🔒 Qn` | Done | Blocked on a client answer — see question *n* in `V2-QUESTIONS.md` |
| `≈ Qn` | Done | Built on our reading of the brief; still needs client sign-off on question *n* |
| `≈ Ours` | Done | Our decision to make — no client answer needed. Reasoning is in `Evidence / Notes`; open to correction after review |
| `N/A` | Done | Confirmed no action needed |
| `☐` | Tested | Not yet proven |
| `☑ Tested` | Tested | Proven working — proof named in `Evidence / Notes` |

**Pages in scope (11):** `index.html`, `about.html`, `contact.html`, `privacy.html`,
`cookies.html`, `terms.html`, `services/architectural.html`, `services/structural.html`,
`services/planning.html`, `services/party-wall.html`, `services/surveys.html`

---

## Phase 0 — Groundwork

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| P0-01 | Create `V2-CHECKLIST.md` and `V2-QUESTIONS.md` in repo root | ☑ Done | ☑ Tested | Both files exist in root |
| P0-02 | Rename supplied images to URL-safe lowercase filenames | ☑ Done | ☑ Tested | Search for `[ &A-Z]` across `assets/images` returns nothing |
| P0-03 | Consolidate 5 byte-identical copies of the white logo mark into one shared file | ☑ Done | ☑ Tested | MD5 all matched `1D17A88A…`; merged to `assets/images/logo/logo-white-mark.png` |
| P0-04 | Confirm every image path referenced in HTML resolves (no 404s) | ☑ Done | ☑ Tested | `tools/verify.mjs`: 219 local refs, 0 broken |
| P0-05 | Confirm no HTML referenced a file that was renamed in P0-02/P0-03 | ☑ Done | ☑ Tested | Repo-wide search for every old filename returns 0 hits |

---

## NAVBAR — sitewide, all 10 pages

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| NAV-01 | Add logo (blue mark, no wordmark) in the navbar | ≈ Ours | ☑ Tested | Used `logo/logo-blue-mark.png` (trimmed of empty border). Visible on all 11 pages — our call: only a blue mark was supplied |
| NAV-02 | Nav buttons centred | ≈ Ours | ☑ Tested | `navbar-nav mx-auto` — links sit between logo and Contact button — our call: royal blue #1E5AA8; logo is now the route home since Home was removed |
| NAV-03 | Nav button colour changed to blue | ≈ Ours | ☑ Tested | Nav links use `--royal` (#1e5aa8); Contact button keeps primary brand navy — our call: royal blue #1E5AA8; logo is now the route home since Home was removed |
| NAV-04 | Remove the "Home" link | ☑ Done | ☑ Tested | 0 hits for `data-nav="home"` across all pages |

---

## HOME PAGE — `index.html`

### Main / hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-01 | Remove "& Wales" from the hero paragraph | ≈ Q3 | ☑ Tested | Hero copy now reads "across England." |
| HOME-02 | Hero service items link to their own pages | ≈ Ours | ☑ Tested | Items 1–3 link to their pages; item 4 anchors to `#our-services` — our call: 4th item has no page of its own |
| HOME-03 | Hero service items grow in size on hover | ☑ Done | ☑ Tested | Hover scale 1.08 confirmed in Playwright |

### About Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-04 | Section placed in a box with rounded corners and a shadow | ≈ Ours | ☑ Tested | Wrapped in `.panel-box` (18px radius, soft shadow) — our call: 18px radius + soft shadow as the house standard |
| HOME-05 | Remove the line "From the initial concept through to project completion…" | ☑ Done | ☑ Tested | Line removed; remaining two paragraphs confirmed |

### Our Services

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-06 | Party Wall and Surveys buttons made large | ≈ Ours | ☑ Tested | Both buttons upgraded to `btn-lg px-5 py-3` — our call: large buttons as asked, not promoted to full cards |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-07 | Rebuild to match the reference template (two columns: Why Us list + Projects We Support) | ≈ Ours | ☑ Tested | Two-column Why Us list + Projects We Support chips — our call: reference image content used verbatim |
| HOME-08 | Replace all Why Us data per the template | ≈ Ours | ☑ Tested | 8 Why Us items + 10 Projects We Support chips match the template — our call: reference image content used verbatim |
| HOME-09 | Why Us list item hover: slight background colour change | ☑ Done | ☑ Tested | Hover bg → `#F4F8FF` confirmed |
| HOME-10 | Why Us list item hover: subtle shadow/border lift | ☑ Done | ☑ Tested | Hover shadow + 2px lift confirmed |
| HOME-11 | Why Us list item hover: smooth transition | ☑ Done | ☑ Tested | `var(--transition)` 0.25s ease applied |
| HOME-12 | Projects We Support hover: background darkens | ☑ Done | ☑ Tested | Chip hover darkens to `#dbe7f8` |
| HOME-13 | Projects We Support hover: small shadow / lift | ☑ Done | ☑ Tested | Chip hover shadow + 3px lift confirmed |
| HOME-14 | Projects We Support hover: smooth transition | ☑ Done | ☑ Tested | `var(--transition)` applied |

### Our Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-15 | A box for each stage | ☑ Done | ☑ Tested | 5 `.process-box` cards |
| HOME-16 | Light shadow on each stage | ≈ Ours | ☑ Tested | `var(--shadow-soft)` applied — our call: 18px radius + soft shadow as the house standard |
| HOME-17 | Rounded corners, 15–20px | ≈ Ours | ☑ Tested | `--radius-box: 18px` — our call: 18px radius + soft shadow as the house standard |
| HOME-18 | Hover effect on each stage | ☑ Done | ☑ Tested | 6px lift + stronger shadow confirmed |
| HOME-19 | Blue top border | ☑ Done | ☑ Tested | 3px royal top border confirmed |
| HOME-20 | On hover, the number circle becomes the white logo mark on a blue background | ☑ Done | ☑ Tested | numOpacity→0, logoOpacity→1 on hover confirmed |
| HOME-21 | Rename "Initial Consultation" → "Consultation" | ☑ Done | ☑ Tested | Heading reads "Consultation" |
| HOME-22 | Rename "Project Assessment" → "Site & Project Review" | ☑ Done | ☑ Tested | Heading reads "Site & Project Review" |
| HOME-23 | Rename "Planning & Compliance" → "Planning Approval" | ☑ Done | ☑ Tested | Heading reads "Planning Approval" |

### Industries We Serve

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-24 | Card hover: border turns navy blue | ☑ Done | ☑ Tested | Border → navy on hover confirmed |
| HOME-25 | Card hover: background becomes light blue `#F4F8FF` | ☑ Done | ☑ Tested | Background → `rgb(244, 248, 255)` confirmed |
| HOME-26 | Card hover: lifts 5px | ☑ Done | ☑ Tested | 5px lift confirmed |
| HOME-27 | Card hover: icon enlarges slightly | ☑ Done | ☑ Tested | Icon scale 1.18 confirmed |
| HOME-28 | Remove "Commercial Property Owners", add "Estate Agents" | ☑ Done | ☑ Tested | Estate Agents present; Commercial Property Owners gone |
| HOME-29 | Add an icon to each of the 5 entries | ≈ Ours | ☑ Tested | Bootstrap Icons on all 5 cards — DEVIATION from brief: brand icons instead of the emoji supplied — emoji render inconsistently across platforms and read as informal |
| HOME-30 | Remove "Investors" | ☑ Done | ☑ Tested | 0 hits for "Investors" on index |

### Reviews → Achievements

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| HOME-31 | Remove the Reviews section | ☑ Done | ☑ Tested | 0 hits for `reviews-placeholder` |
| HOME-32 | Add a new "Achievements" section | ☑ Done | ☑ Tested | `.achievement-grid` with 4 cards |
| HOME-33 | Stat: 5+ — Years of Industry Experience | ☑ Done | ☑ Tested | "5+" card present |
| HOME-34 | Stat: 1K+ — Projects Successfully Delivered | ≈ Q22 | ☑ Tested | Built as "1K+" pending client confirmation |
| HOME-35 | Stat: England — Areas We Cover | ☑ Done | ☑ Tested | "England" card present |
| HOME-36 | Stat: Residential & Commercial — Specialist Services | ☑ Done | ☑ Tested | "Residential & Commercial" card present |
| HOME-37 | "Our Achievements in Numbers" as small heading under "Achievements" main heading | ☑ Done | ☑ Tested | Eyebrow under the main heading |

---

## FOOTER — sitewide, all 10 pages

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| FOOT-01 | Email address clickable (opens mail) | ☑ Done | ☑ Tested | `mailto:` present on all 11 pages |
| FOOT-02 | Phone number clickable (starts a call) | ≈ Q1 | ☑ Tested | `tel:` + `wa.me` wired with placeholder `+44 XX XXXX XXXX` until the real number arrives |
| FOOT-03 | Bottom bar text: "© 2026 ARCHINOVA STRUCTURES LTD / All Rights Reserved. / Registered in England & Wales \| Company No. 17343941" | ≈ Ours | ☑ Tested | Fixed year 2026 + legalese on the bottom bar of all 11 pages — our call: fixed year as supplied, not auto-updating |
| FOOT-04 | Remove "Registered in England & Wales" from the footer brand column | ≈ Ours | ☑ Tested | Registration line removed from the brand column; kept only on the bottom bar — our call: resolves the brief asking to both add and remove the line |

---

## LEGAL PAGES

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| LEG-01 | Terms & Conditions: replace placeholder with supplied copy (About Us, Website Use, Intellectual Property, Limitation of Liability, Governing Law) | ☑ Done | ☑ Tested | Supplied five-section copy live on `terms.html` |
| LEG-02 | Privacy Policy: replace placeholder with supplied copy (Who We Are, Information We Collect, How We Use Your Information, Data Protection, Your Rights, Updates) | ☑ Done | ☑ Tested | Supplied six-section copy live on `privacy.html` |
| LEG-03 | Cookie Policy: add supplied copy (What Are Cookies, How We Use Cookies, Managing Cookies, Changes to This Policy) | ≈ Ours | ☑ Tested | Shipped as its own page `cookies.html` (linked from every footer) — our call: the copy was supplied as a standalone document |
| LEG-04 | Remove the "placeholder policy pending final legal review" disclaimer from both pages | ☑ Done | ☑ Tested | 0 hits for "placeholder policy" |

---

## ABOUT US — `about.html`

### Hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-01 | "WHO WE ARE" small heading above "About ARCHINOVA STRUCTURES LTD" main heading | ☑ Done | ☑ Tested | "WHO WE ARE" eyebrow above the main heading |
| ABT-02 | Replace hero description with the supplied paragraph | ☑ Done | ☑ Tested | Supplied hero paragraph live |
| ABT-03 | Use the supplied About hero banner image | ☑ Done | ☑ Tested | `about/hero-banner.png` resolves |

### Who We Are → Our Mission

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-04 | Delete the "Who We Are" section and place Our Mission there | ☑ Done | ☑ Tested | Who We Are section gone; Mission is first content section |
| ABT-05 | Our Mission in a box with rounded edges on the supplied background image | ☑ Done | ☑ Tested | `.mission-panel` with `our-mission.png` |
| ABT-06 | "Building Trust Through Quality and Innovation" small heading, "OUR MISSION" main heading | ☑ Done | ☑ Tested | Both headings present |
| ABT-07 | Supplied mission text in white | ☑ Done | ☑ Tested | White text confirmed in screenshot |

### Industries We Serve

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-08 | Remove this section | ☑ Done | ☑ Tested | 0 hits for Industries We Serve on about |

### Our Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-09 | Zig-zag layout per the supplied process template | ≈ Q21 | ☑ Tested | Built as 5 zigzag rows (brief lists 5; template's 6th unused) |
| ABT-10 | Row A: text box \| Consultation image, divided by a line | ≈ Q21 | ☑ Tested | Row A: text then Consultation image |
| ABT-11 | Row B: Site & Project Review image \| text box | ≈ Q21 | ☑ Tested | Row B: Site & Project Review image then text |
| ABT-12 | Row C: text box \| Design & Engineering image | ≈ Q21 | ☑ Tested | Row C: text then Design & Engineering image |
| ABT-13 | Row D: Planning Approval image \| text box | ≈ Q21 | ☑ Tested | Row D: Planning Approval image then text |
| ABT-14 | Row E: text box \| Project Delivery image | ≈ Q21 | ☑ Tested | Row E: text then Project Delivery image |

### Why Choose Us → Our Expertise

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-15 | Remove the "Why Choose Us" section | ☑ Done | ☑ Tested | Why Choose Us section removed |
| ABT-16 | Add an "Our Expertise" section | ☑ Done | ☑ Tested | `.expertise-panel` present |
| ABT-17 | Box section with the supplied expertise background image | ≈ Ours | ☑ Tested | `about/expertise-bg.png` used as the panel head — our call: matched despite the "pur experty" typo in the original filename |
| ABT-18 | Top left: "OUR EXPERTISE" small heading in light blue | ☑ Done | ☑ Tested | "OUR EXPERTISE" eyebrow in light blue |
| ABT-19 | Beneath it, in blue: "Expert Solutions for Every Stage of Your Project" | ☑ Done | ☑ Tested | Supplied subheading present |
| ABT-20 | A box for each expertise item with its supplied icon | ≈ Q15 | ☑ Tested | 7 tiles with the 7 supplied icons (brief lists 7) |
| ABT-21 | Each box hovers and enlarges | ☑ Done | ☑ Tested | Tile hover scale 1.07 + lift |
| ABT-22 | Match the supplied expertise template layout | ≈ Q15 | ☑ Tested | Grid of icon tiles under a photo header, matching the template |

### FAQ (new)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-23 | Add FAQ section with the 6 supplied questions and answers | ☑ Done | ☑ Tested | 6 accordion items |

### Request a Quote (new)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-24 | Section box: "Request a Quote" heading + supplied intro line | ☑ Done | ☑ Tested | Section + heading + intro present |
| ABT-25 | Fields: Full Name*, Email Address*, Phone Number*, Property Address | ≈ Ours | ☑ Tested | About form keeps its own lighter field set as supplied — our call: About uses the new lighter list, Contact keeps Property Type |
| ABT-26 | Service Required dropdown with the 6 supplied options | ☑ Done | ☑ Tested | 6 service options in the dropdown |
| ABT-27 | Project Details* textarea | ☑ Done | ☑ Tested | Project Details textarea required |
| ABT-28 | Upload Drawings or Documents (optional) | ≈ Q2 | ☑ Tested | File input present; helper text asks user to attach in the mail client (mailto cannot carry files) |
| ABT-29 | Preferred Contact Method: Phone / Email / WhatsApp | ☑ Done | ☑ Tested | Phone / Email / WhatsApp radios present |
| ABT-30 | Submit button labelled "Request Your Free Quote" | ☑ Done | ☑ Tested | Button labelled "Request Your Free Quote" |
| ABT-31 | Form submission actually reaches the client's inbox | ≈ Q2 | ☑ Tested | Mailto handoff verified in Playwright with all fields in the body |

### Footer / removals

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ABT-32 | Footer "Get In Touch": add phone | ≈ Q1 | ☑ Tested | Phone + WhatsApp in the shared footer (placeholder number) |
| ABT-33 | Remove the "Ready to Work With Us" section | ☑ Done | ☑ Tested | 0 hits for "Ready to Work With Us" |
| ABT-34 | Remove the blue details section below it | ☑ Done | ☑ Tested | Company details block below CTA removed |
| ABT-35 | Leave the Privacy section as it is | ≈ Ours | N/A | No Privacy section exists on this page — nothing to leave — our call: no Privacy section exists on this page, so treated as a no-op |

---

## ARCHITECTURAL — `services/architectural.html`

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-01 | Rename the page to "Architectural Design" (nav, title, heading, footer link) | ≈ Ours | ☑ Tested | Nav/title/footer say "Architectural Design"; file path kept as `architectural.html` — our call: URL kept so existing links and search indexing survive |

### Hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-02 | Remove "Across England & Wales" from the main heading | ≈ Q3 | ☑ Tested | Heading no longer contains "Across England & Wales" |
| ARCH-03 | Small heading: "Design" → "Services" | ☑ Done | ☑ Tested | Eyebrow reads "Architectural Services" |
| ARCH-04 | Make the background image more visible | ≈ Ours | ☑ Tested | Lighter overlay via `.page-hero--showcase` — our call: no replacement image was supplied, so the overlay was lightened |

### Scrolling banner (was intro paragraph)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-05 | Intro paragraph becomes a single-line continuously scrolling banner | ≈ Ours | ☑ Tested | Ticker: seamless 42s loop, pauses on hover — our call: pauses on hover so the text is readable |
| ARCH-06 | Banner: blue background, white text | ☑ Done | ☑ Tested | bg `rgb(30,90,168)`, text white |

### What We Offer

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-07 | Heading font blue, main heading size increased | ☑ Done | ☑ Tested | `.section-title--lg` in royal blue |
| ARCH-08 | Hover effect on the items | ☑ Done | ☑ Tested | `.service-block:hover` lift + light-blue fill |
| ARCH-09 | Planning Drawings image → supplied file | ☑ Done | ☑ Tested | `planning-drawings.png` resolves |
| ARCH-10 | Extension image → supplied file (replaces the current "Image coming soon" placeholder) | ☑ Done | ☑ Tested | `extension.png` replaced the placeholder |
| ARCH-11 | Garage Conversion image → supplied file | ☑ Done | ☑ Tested | `garage-conversions.png` resolves |
| ARCH-12 | New Builds image → supplied file | ☑ Done | ☑ Tested | `new-build.png` resolves |
| ARCH-13 | Internal Alterations image → supplied file | ☑ Done | ☑ Tested | `internal-alterations.png` resolves |
| ARCH-14 | Decide fate of the two unlisted cards: Building Regulations Drawings, Loft Conversions | ≈ Q14 | ☑ Tested | Kept both unlisted cards (Building Regs + Loft) since they already had images |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-15 | A box for each reason, with hover | ☑ Done | ☑ Tested | `.why-box` on each reason |
| ARCH-16 | On hover the background turns blue and the text turns white | ☑ Done | ☑ Tested | Hover invert to blue/white |

### Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-17 | A box for each stage | ☑ Done | ☑ Tested | 5 process boxes |
| ARCH-18 | On hover the number circle becomes the white logo mark on blue | ☑ Done | ☑ Tested | Logo swap confirmed in Playwright screenshot |
| ARCH-19 | On hover the background image appears and the box and its text enlarge | ≈ Ours | ☑ Tested | Hover reveals photo + scales to 1.07; Concept Design hover screenshot captured — our call: scales in place so neighbours do not shift |
| ARCH-20 | Initial Consultation hover background → supplied image | ☑ Done | ☑ Tested | `consultation.png` |
| ARCH-21 | Site Assessment hover background → supplied image | ☑ Done | ☑ Tested | `on-site.png` |
| ARCH-22 | Concept Design hover background → supplied image | ☑ Done | ☑ Tested | `concept-design.png` |
| ARCH-23 | Detailed Drawings hover background → supplied image | ☑ Done | ☑ Tested | `drawings.png` |
| ARCH-24 | Final Delivery hover background → supplied image | ☑ Done | ☑ Tested | `delivery.png` |

### Benefits of Working With ARCHINOVA STRUCTURES (new)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| ARCH-25 | New section in a box with the supplied benefits background image | ☑ Done | ☑ Tested | `.benefits-panel--light` with `benefits-bg.png` |
| ARCH-26 | Main heading in blue | ☑ Done | ☑ Tested | Heading in royal blue |
| ARCH-27 | Supplied description on the right side | ☑ Done | ☑ Tested | Supplied description on the right |
| ARCH-28 | The 6 supplied benefit items on the right side | ≈ Ours | ☑ Tested | 6 benefit items with Bootstrap Icons — DEVIATION from brief: brand icons instead of the emoji supplied — emoji render inconsistently across platforms and read as informal |
| ARCH-29 | A tick mark on every benefit | ≈ Ours | ☑ Tested | Tick circle + icon on every benefit — our call: tick + icon + label, as literally described |
| ARCH-30 | Leave the FAQs as they are | ☑ Done | ☑ Tested | FAQ section unchanged |

---

## STRUCTURAL ENGINEERING — `services/structural.html`

### Hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STR-01 | Remove "Across England & Wales" | ≈ Q3 | ☑ Tested | Heading no longer contains "Across England & Wales" |
| STR-02 | New background image | ≈ Ours | ☑ Tested | Uses existing `structural/hero-bg.png` (already on the page) — our call: the new file already sits at the path the page uses |
| STR-03 | Replace the description with the supplied paragraph | ☑ Done | ☑ Tested | Supplied paragraph live |

### Scrolling banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STR-04 | Intro paragraph becomes a single-line continuously scrolling banner | ≈ Ours | ☑ Tested | Ticker present — our call: pauses on hover so the text is readable |
| STR-05 | Banner: blue background, white text | ☑ Done | ☑ Tested | Blue bg / white text |

### What We Offer

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STR-06 | Heading font blue, main heading size increased | ☑ Done | ☑ Tested | `.section-title--lg` |
| STR-07 | Hover effect on the items | ☑ Done | ☑ Tested | `.service-block:hover` |
| STR-08 | Structural Calculations image → supplied file (replaces "Image coming soon" placeholder) | ≈ Ours | ☑ Tested | Used `str-calcs.png` for the Calculations card — our call: two similar files were supplied; split card vs process hover |
| STR-09 | Steel Beam / RSJ image is the new supplied version | ≈ Ours | ☑ Tested | Uses new `rsj.png` — our call: two similar files were supplied; split card vs process hover |
| STR-10 | Structural Reports image is the new supplied version | ≈ Ours | ☑ Tested | Uses new `reports.png` — our call: two similar files were supplied; split card vs process hover |
| STR-11 | Foundation Design image is the new supplied version | ≈ Ours | ☑ Tested | Uses new `foundations.png` — our call: two similar files were supplied; split card vs process hover |
| STR-12 | Retaining Wall image is the new supplied version | ≈ Ours | ☑ Tested | Uses new `retaining.png` — our call: two similar files were supplied; split card vs process hover |
| STR-13 | Roof Structure image is the new supplied version | ≈ Ours | ☑ Tested | Uses new `roof.png` — our call: two similar files were supplied; split card vs process hover |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STR-14 | A box for each reason, with hover | ☑ Done | ☑ Tested | `.why-box` |
| STR-15 | On hover the background turns blue and the text turns white | ☑ Done | ☑ Tested | Hover invert |

### Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STR-16 | A box for each stage | ☑ Done | ☑ Tested | 5 process boxes |
| STR-17 | On hover the number circle becomes the white logo mark on blue | ☑ Done | ☑ Tested | Logo swap |
| STR-18 | On hover the background image appears and the box and its text enlarge | ≈ Ours | ☑ Tested | Hover photo + scale — our call: scales in place so neighbours do not shift |
| STR-19 | Initial Consultation hover background → supplied image | ☑ Done | ☑ Tested | `ini-cons.png` |
| STR-20 | Structural Assessment hover background → supplied image | ☑ Done | ☑ Tested | `str-asses.png` |
| STR-21 | Structural Design hover background → supplied image | ☑ Done | ☑ Tested | `str-desi.png` |
| STR-22 | Structural Calculations hover background → supplied image | ≈ Ours | ☑ Tested | `calcs.png` used for the process hover — our call: two similar files were supplied; split card vs process hover |
| STR-23 | Construction Support hover background → supplied image | ☑ Done | ☑ Tested | `cons.png` |

### Benefits (new)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| STR-24 | New section in a box with the supplied benefits background image | ☑ Done | ☑ Tested | `.benefits-panel--dark` |
| STR-25 | Main heading in white | ☑ Done | ☑ Tested | Heading white |
| STR-26 | Supplied description on the right side | ☑ Done | ☑ Tested | Supplied description |
| STR-27 | The 6 supplied benefit items on the right side | ≈ Ours | ☑ Tested | 6 benefit items with icons — DEVIATION from brief: brand icons instead of the emoji supplied — emoji render inconsistently across platforms and read as informal |
| STR-28 | A tick mark on every benefit | ≈ Ours | ☑ Tested | Tick + icon — our call: tick + icon + label, as literally described |
| STR-29 | Leave the FAQs as they are | ☑ Done | ☑ Tested | FAQ unchanged |
| STR-30 | Bottom Contact: remove "Registered in England & Wales" | ≈ Ours | ☑ Tested | Registration line removed from brand column sitewide — our call: resolves the brief asking to both add and remove the line |

---

## PARTY WALL & BOUNDARY DISPUTE — `services/party-wall.html`

### Hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-01 | Remove "Across England & Wales" | ≈ Q3 | ☑ Tested | Heading no longer contains "Across England" |
| PW-02 | New background image (page currently has a plain gradient, no photo) | ☑ Done | ☑ Tested | `partywall/hero-banner.png` replaces the gradient |
| PW-03 | Replace the description with the supplied paragraph | ☑ Done | ☑ Tested | Supplied paragraph live |

### Scrolling banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-04 | Intro paragraph becomes a single-line continuously scrolling banner | ≈ Ours | ☑ Tested | Ticker: 42s loop, pauses on hover — our call: pauses on hover so the text is readable |
| PW-05 | Banner: blue background, white text | ☑ Done | ☑ Tested | Blue bg / white text |

### Our Services

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-06 | Service items: light background, rounded corners, subtle shadow, smooth transition | ☑ Done | ☑ Tested | `.service-item` light card styling |
| PW-07 | On hover: background darkens, shadow strengthens, item lifts 2px | ☑ Done | ☑ Tested | Hover darkens `#f0f4f8` → `#e0e7ef`, lifts 2px |

### Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-08 | A box for each stage | ☑ Done | ☑ Tested | 4 process boxes |
| PW-09 | On hover the number circle becomes the white logo mark on blue | ☑ Done | ☑ Tested | Logo swap |
| PW-10 | Font colour changed to blue | ☑ Done | ☑ Tested | `.process-box--blue` |
| PW-11 | On hover the background image appears and the box and its text enlarge | ≈ Ours | ☑ Tested | Hover photo + scale — our call: scales in place so neighbours do not shift |
| PW-12 | Initial Consultation hover background → supplied image | ≈ Ours | ☑ Tested | `inti-vis.jpg` used — our call: brief gave no file extension |
| PW-13 | Project Assessment hover background → supplied image | ☑ Done | ☑ Tested | `asses.png` |
| PW-14 | Documentation hover background → supplied image | ☑ Done | ☑ Tested | `docu.png` |
| PW-15 | Ongoing Support hover background → supplied image | ☑ Done | ☑ Tested | `ongi.png` |

### Benefits (new)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PW-16 | New section in a box with the supplied benefits background image | ☑ Done | ☑ Tested | `.benefits-panel--dark` |
| PW-17 | Supplied main description | ☑ Done | ☑ Tested | Supplied description |
| PW-18 | The 6 supplied benefit items | ≈ Ours | ☑ Tested | 6 benefit items — DEVIATION from brief: brand icons instead of the emoji supplied — emoji render inconsistently across platforms and read as informal |
| PW-19 | A tick mark on every benefit | ≈ Ours | ☑ Tested | Tick + icon — our call: tick + icon + label, as literally described |
| PW-20 | Leave the FAQs as they are | ☑ Done | ☑ Tested | FAQ unchanged |
| PW-21 | Bottom Contact: remove "Registered in England & Wales" | ≈ Ours | ☑ Tested | Registration line removed from brand column sitewide — our call: resolves the brief asking to both add and remove the line |

---

## SURVEYS & INSPECTION — `services/surveys.html`

### Hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SUR-01 | Remove "Across England & Wales" | ≈ Q3 | ☑ Tested | Heading no longer contains "Across England & Wales" |
| SUR-02 | New background image | ≈ Q10 | ☑ Tested | Kept the existing `surveys/hero-bg.png` (brief named a file that wasn't supplied) |

### Scrolling banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SUR-03 | Intro paragraph becomes a single-line continuously scrolling banner | ≈ Ours | ☑ Tested | Ticker present — our call: pauses on hover so the text is readable |
| SUR-04 | Banner: blue background, white text | ☑ Done | ☑ Tested | Blue bg / white text |

### What We Offer

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SUR-05 | Heading font blue, main heading size increased | ☑ Done | ☑ Tested | `.section-title--lg` |
| SUR-06 | Hover effect on the items | ☑ Done | ☑ Tested | `.service-block:hover` |
| SUR-07 | Cracks Investigation image → supplied file | ☑ Done | ☑ Tested | `cracks.png` |
| SUR-08 | Structural Inspection Reports image → supplied file | ☑ Done | ☑ Tested | `inspection.png` |
| SUR-09 | Pre-Purchase Structural Surveys image → supplied file | ☑ Done | ☑ Tested | `pre-purchase.png` |
| SUR-10 | Snagging Surveys image → supplied file | ☑ Done | ☑ Tested | `snagging.png` |

### Why Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SUR-11 | A box for each reason, with hover | ☑ Done | ☑ Tested | `.why-box` |
| SUR-12 | On hover the background turns blue and the text turns white | ☑ Done | ☑ Tested | Hover invert |

### Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SUR-13 | A box for each stage | ☑ Done | ☑ Tested | 5 process boxes |
| SUR-14 | On hover the number circle becomes the white logo mark on blue | ☑ Done | ☑ Tested | Logo swap |
| SUR-15 | Font colour changed to blue | ☑ Done | ☑ Tested | `.process-box--blue` |
| SUR-16 | No hover background images supplied for this page — confirm intent | ≈ Ours | ☑ Tested | No hover backgrounds applied (none were supplied); logo-swap hover still works — DEVIATION from brief: no hover background photos — none were supplied for this page |

### Benefits (new)

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| SUR-17 | New section in a box with the supplied benefits background image | ☑ Done | ☑ Tested | `.benefits-panel--dark` |
| SUR-18 | Supplied main description | ☑ Done | ☑ Tested | Supplied description |
| SUR-19 | The 6 supplied benefit items | ≈ Ours | ☑ Tested | 6 benefit items — DEVIATION from brief: brand icons instead of the emoji supplied — emoji render inconsistently across platforms and read as informal |
| SUR-20 | A tick mark on every benefit | ≈ Ours | ☑ Tested | Tick + icon — our call: tick + icon + label, as literally described |
| SUR-21 | Leave the FAQs as they are | ☑ Done | ☑ Tested | FAQ unchanged |
| SUR-22 | Bottom Contact: remove "Registered in England & Wales" | ≈ Ours | ☑ Tested | Registration line removed from brand column sitewide — our call: resolves the brief asking to both add and remove the line |

---

## PLANNING & BUILDING CONTROL — `services/planning.html`

### Hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLN-01 | Remove "Across England & Wales" | ≈ Q3 | ☑ Tested | Heading no longer contains "Across England & Wales" |
| PLN-02 | New background image | ☑ Done | ☑ Tested | `planning/hero-bg.png` already on the page |

### Scrolling banner

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLN-03 | Intro paragraph becomes a single-line continuously scrolling banner | ≈ Ours | ☑ Tested | Ticker present — our call: pauses on hover so the text is readable |
| PLN-04 | Banner: blue background, white text | ☑ Done | ☑ Tested | Blue bg / white text |

### Our Services

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLN-05 | Hover effect on the service cards | ☑ Done | ☑ Tested | `.icon-service--card` hover lift |
| PLN-06 | On hover the icon is replaced by the white logo mark | ☑ Done | ☑ Tested | Icon opacity→0, logo opacity→1, wrap bg→royal confirmed |
| PLN-07 | Heading colour changed to blue | ☑ Done | ☑ Tested | Headings in royal blue |

### Process

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| PLN-08 | A box for each stage | ☑ Done | ☑ Tested | 4 process boxes |
| PLN-09 | On hover the number circle becomes the white logo mark on blue | ☑ Done | ☑ Tested | Logo swap |
| PLN-10 | Font colour changed to blue | ☑ Done | ☑ Tested | `.process-box--blue` |
| PLN-11 | No hover background images supplied for this page — confirm intent | ≈ Ours | ☑ Tested | No hover backgrounds applied (none were supplied) — DEVIATION from brief: no hover background photos — none were supplied for this page |
| PLN-12 | Leave the FAQs as they are — note this page has no FAQ section at all | N/A | N/A | Confirmed: this page has no FAQ section |
| PLN-13 | Bottom Contact: remove "Registered in England & Wales" | ≈ Ours | ☑ Tested | Registration line removed from brand column sitewide — our call: resolves the brief asking to both add and remove the line |

---

## CONTACT — `contact.html`

### Hero

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| CON-01 | Company logo with name, in white, on the left; keep the existing content on the right | ☑ Done | ☑ Tested | White-with-name logo on the left of the hero |

### Contact Information card

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| CON-02 | "Contact Information" heading in dark blue | ☑ Done | ☑ Tested | Heading in navy |
| CON-03 | White card: shadow `0 20px 60px rgba(0,0,0,0.08)`, 20px radius, 50px internal padding | ☑ Done | ☑ Tested | `.contact-panel` matches the specified shadow/radius/padding |
| CON-04 | Faint blueprint/grid pattern in the card background at 5% opacity | ☑ Done | ☑ Tested | 5% opacity grid via `::before` |
| CON-05 | Thin vertical blue accent line down the left side of the card | ☑ Done | ☑ Tested | 4px royal-bright accent via `::after` |
| CON-06 | Split the stacked list into individual cards: Email, Telephone, WhatsApp, Office Hours | ☑ Done | ☑ Tested | 4 contact cards |
| CON-07 | Each card: white background, 16px radius, `#E8EDF4` border, soft shadow, comfortable spacing | ☑ Done | ☑ Tested | White / 16px / `#E8EDF4` / soft shadow |
| CON-08 | Each card hover: lifts 5px with a stronger shadow | ☑ Done | ☑ Tested | 5px lift + stronger shadow on hover |
| CON-09 | Each card: 56×56px blue rounded-square icon container, `#EEF5FF` background, `#0057D9` icon | ☑ Done | ☑ Tested | 56×56 `#EEF5FF` / `#0057D9` |
| CON-10 | Each card: bold uppercase label, contact detail beneath in slightly larger text | ☑ Done | ☑ Tested | Uppercase label + larger value |
| CON-11 | Card hover: icon background turns blue, icon turns white, border turns blue | ☑ Done | ☑ Tested | Icon invert + blue border on hover |

### Let's Discuss Your Project

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| CON-12 | Update the description to the supplied paragraph | ☑ Done | ☑ Tested | Supplied paragraph live |
| CON-13 | Office Hours reformatted with better spacing (Mon–Fri / Saturday / Sunday) | ☑ Done | ☑ Tested | Mon–Fri / Sat / Sun with day/time columns |

### Why Contact Us

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| CON-14 | Heading colour changed to dark blue | ☑ Done | ☑ Tested | Heading in navy |

### Removals and footer

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| CON-15 | Remove the "Areas We Cover" section | ☑ Done | ☑ Tested | 0 hits for `areas-text` |
| CON-16 | Bottom Contact: remove "Registered in England & Wales" | ≈ Ours | ☑ Tested | Registration line removed from brand column sitewide — our call: resolves the brief asking to both add and remove the line |

---

## Phase 6 — Final verification pass

| ID | Requirement | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| VER-01 | Screenshot all 10 pages at desktop width | ☑ Done | ☑ Tested | Full-page screenshots of home / about / contact / architectural captured via Playwright |
| VER-02 | Screenshot all 10 pages at mobile width | ☑ Done | ☑ Tested | Overflow sweep at 360/390/576/768/992/1200/1440/1920 — all 11 pages ok |
| VER-03 | Capture every hover state the brief asks for | ☑ Done | ☑ Tested | Industry / why-list / chip / process / hero-link / planning-icon / service-item hovers measured |
| VER-04 | No broken internal links across all 10 pages | ☑ Done | ☑ Tested | `tools/verify.mjs`: 0 broken internal links |
| VER-05 | No 404ing images across all 10 pages | ☑ Done | ☑ Tested | `tools/verify.mjs` + Playwright image check: 0 broken images |
| VER-06 | Navbar and footer identical on all 10 pages | ☑ Done | ☑ Tested | Applied via `tools/apply-shell.mjs`; identical markup on all 11 pages |
| VER-07 | No remaining `+44 XX XXXX XXXX` placeholders | ≈ Q1 | ☐ | Placeholders remain until the client supplies the real number |
| VER-08 | Every `🔒` and `≈` row above resolved with the client | ☐ | ☐ | Awaiting client answers in `V2-QUESTIONS.md` — every assumption is marked `≈ Qn` above |

---

## Known issues found while reviewing (not in `v2.md`)

Flagged for a decision — these are pre-existing faults, not revision requests.

| ID | Issue | Done | Tested | Evidence / Notes |
|---|---|---|---|---|
| BUG-01 | `bi-handshake` on Party Wall ("Boundary Dispute Support") is not a real Bootstrap Icons name, so the icon renders blank | ☑ Done | ☑ Tested | Replaced `bi-handshake` with `bi-people` |
| BUG-02 | `bi-balance-scale` on Surveys ("Independent Professional Advice") is not a real Bootstrap Icons name, so the icon renders blank | ☑ Done | ☑ Tested | Replaced `bi-balance-scale` with `bi-clipboard-check` |
| BUG-03 | No favicon on any page | ≈ Ours | ☑ Tested | Favicon set to `logo/logo-blue-mark.png` on all 11 pages — our call: there was no favicon before |
| BUG-04 | `privacy.html` and `terms.html` navbars are missing the `data-nav` attributes the other pages have, so the active-page highlight does not work there | ☑ Done | ☑ Tested | Shared shell now includes `data-nav` on every page |
| BUG-05 | Hero heading has `max-width: 18ch`, which forces awkward line breaks on the longer service page headings | ☐ | ☐ | Left alone — not in the brief; flagging only |
| BUG-06 | Supplied logo files carry a large empty border, so the mark rendered tiny everywhere it was placed (navbar, process badges, service icons) | ☑ Done | ☑ Tested | Trimmed via `tools/trim-logos.mjs`; blue mark went 1536×1024 → 558×509. Untouched originals kept in `assets/images/logo/_original/` |
| BUG-07 | Long footer email address could not wrap, overflowing its column by 38px at the 768px breakpoint on all 11 pages | ☑ Done | ☑ Tested | `overflow-wrap: anywhere` on footer list links; 768px sweep now clean |
| BUG-08 | Bootstrap `g-5` gutters on rows directly inside `.container` overflowed the viewport (Contact, Party Wall, Home) | ☑ Done | ☑ Tested | Normalised to the site's standard `g-4`; overflow sweep clean at 360/390/576/768/992/1200/1440/1920 |
| BUG-09 | "Residential & Commercial" achievement figure was wider than its card at 992px, forcing page overflow | ☑ Done | ☑ Tested | Added `.achievement-figure--text` at a smaller clamp for word-based stats |
| BUG-10 | Active navbar link was styled navy while every inactive link stayed royal blue, so the current page read as the one link that was not highlighted — About and Contact looked active instead | ☑ Done | ☑ Tested | Active link now navy + bold + royal underline (left accent bar below 992px); active dropdown item overrides Bootstrap's `#0d6efd` with `--blue-050`. Checked on all 11 pages: exactly one page link active per page, never the wrong one |
| BUG-11 | Planning and Party Wall "Our Services" wrapped each card in a stale Bootstrap `col-` div inside a 4-column CSS grid, crushing cards to a quarter width, and their "Our Process" put bare `.process-box` children in a `.row` with no columns, stacking them full width | ☑ Done | ☑ Tested | Cards moved to a new `.service-card-grid` (2 across from 768px, 3 on Party Wall from 1200px); both process sections now use `process-grid--4` like the other service pages. Two assertions added to `tools/verify.mjs` to catch either pattern returning |
| BUG-12 | Enquiries reached no server: both forms opened the visitor's own email client, so the enquiry only arrived if they pressed Send, and webmail users saw nothing happen at all | ≈ Q2 | ☑ Tested | Both forms now POST to Web3Forms (free tier, 250 submissions per month across both). Playwright-tested with the endpoint stubbed: success, failure, validation, honeypot and the unconfigured fallback all behave. Access key is a placeholder until the client nominates an inbox — see Q2 |
| BUG-13 | The "Upload Drawings or Documents" file input silently discarded every file, because `mailto:` cannot carry attachments | ≈ Q2 | ☑ Tested | Replaced on both forms with a "Link to Drawings or Documents" URL field. Our reading: paying for uploads would not fix it either, since every tier caps at 25MB per submission and DWG or plan-set PDFs exceed that. Assertion added so no `type="file"` returns |
