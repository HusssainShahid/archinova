# V3 Revision — Client Queries

Raised from `V3.md` against the current site.

This file contains **only what we need the client to answer**. An item earns a place here
if one of three things is true:

1. We physically cannot proceed — the information exists nowhere but with the client.
2. It is a fact about the business, where publishing a guess creates credibility or legal
   exposure.
3. The brief contradicts itself or one of its own reference images, so there is no correct
   reading for us to pick.

Everything else was ours to decide. Those decisions are recorded in `V3-CHECKLIST.md`,
marked `≈ Ours` in the `Done` column with the reasoning in `Evidence / Notes` — review them
on the live site and tell us if you want any changed.

Question numbers are permanent and never reused, so `V3-CHECKLIST.md` can cross-reference
them as `≈ Qn` or `🔒 Qn`.

Open questions left over from v2 stay in `../v2/V2-QUESTIONS.md` and keep their own numbers. This
file does not renumber or replace them.

Status key: `NEEDS ANSWER` · `ANSWERED`

---

## A. Hard blockers — we should not publish these claims without confirmation

### Q1 — Achievements replacement figures · NEEDS ANSWER

`V3.md` asks to replace the third and fourth Achievements cards:

- **England / Areas We Cover** → **Building Regulation Compliance 100%**
- **Residential & Commercial / Specialist Services** → **Average Response Time 2hrs**

These are factual claims about the business. Shipping them without confirmation creates
credibility risk (especially “100%” and a fixed response-time figure).

This also sits next to the still-open v2 **Q22** about the existing **1K+ Projects** figure —
that question remains in `../v2/V2-QUESTIONS.md` and is not closed by this swap.

Please confirm:

- Exact **figure** and **label** for card 3 (compliance), or alternative copy:
- Exact **figure** and **label** for card 4 (response time), or alternative copy:
- Whether the first two cards (**5+ Years**, **1K+ Projects**) stay as they are:

**Answer:**

---

## B. The brief contradicts itself or fights the layout

### Q2 — Benefits section logo: blue mark or white mark? · ANSWERED

Architectural Benefits asks for **`without name blue logo.png`** under the heading.
Structural, Party Wall, and Surveys Benefits ask for **`without name white logo.png`**.

Those three panels use the existing **dark** benefits backgrounds, so a white mark reads
correctly there. Architectural stays on the **light** panel with the blue mark.

**Answer:** Follow the brief per page — blue mark on Architectural (light), white mark on
Structural / Party Wall / Surveys (dark). No change needed from the client.

---

### Q3 — “Update image” for offer cards that already use those files · NEEDS ANSWER

`V3.md` says to update:

- Architectural: `extension.png`, `building-regs.png`, `planning-drawings.png`
- Structural: `foundations.png`, `roof.png`, `reports.png`

Those URL-safe files are **already** on the live cards under `assets/images/architectural/`
and `assets/images/structural/`. No newer replacements with those names were found beyond
what the pages already reference.

Did you mean:

1. **Keep the current images** (no file change — only the surrounding section styling from
   the rest of v3), or
2. **New image files are still to be sent** — if so, please supply them (or point at the
   files in `../v1/`):

**Answer:**

---

## C. Not asked as questions (our calls — correct us if wrong)

Recorded as `≈ Ours` on `V3-CHECKLIST.md` rather than listed above:

- Sky-blue and light section tint hex values from the existing brand tokens
- Animation timing for hero slideshows, tick-draw hover, centre-to-left copy, footer
  underline, counters, and the About process timeline
- Mapping brief filenames (`hero-baner-*`, `blue logo with name.png`, spaces in folder
  names) onto the existing URL-safe files under `assets/images/`
- Collapsing the seven identical footer “Contact” blocks in `V3.md` into one `FOOT-*`
  change applied via `tools/apply-shell.mjs`
- Treating `contact.html` / legal page **bodies** as out of v3 scope (`SCOPE-01`,
  `SCOPE-02`) while still updating their navbar and footer with everyone else
- Planning Why Us final list = Home Why Us list after the “Across England” trim
  (`PLAN-14`), so `PLAN-13` removals do not fight the Home sync
- Brief typo “Book s Structural Survey” → keep correct **Book a Structural Survey**
  button label (`SURV-04`)
