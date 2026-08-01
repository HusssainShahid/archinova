# V2 Revision — Client Queries

Raised from `v2.md` against the current site.

This file contains **only what we need the client to answer**. An item earns a place here
if one of three things is true:

1. We physically cannot proceed — the information exists nowhere but with the client.
2. It is a fact about the business, where publishing a guess creates credibility or legal
   exposure.
3. The brief contradicts itself or one of its own reference images, so there is no correct
   reading for us to pick.

Everything else was ours to decide. Those decisions are recorded in `V2-CHECKLIST.md`,
marked `≈ Ours` in the `Done` column with the reasoning in `Evidence / Notes` — review them
on the live site and tell us if you want any changed.

Question numbers are permanent and never reused, so `V2-CHECKLIST.md` can cross-reference
them as `≈ Qn`.

Status key: `NEEDS ANSWER` · `ANSWERED`

---

## A. Hard blockers — the site cannot go live without these

### Q1 — Phone and WhatsApp numbers · NEEDS ANSWER

Every footer, the Contact page and the About "Get In Touch" block currently show the
placeholder `+44 XX XXXX XXXX`. `v2.md` asks for "click on Phone to make call from his
phone" and "add phone:" but no number was supplied.

We have wired the `tel:` and `wa.me` links so the markup is finished — but they point at a
deliberately fake number so it cannot ship unnoticed.

Please provide:
- Number to **display**:
- Number for the **`tel:` link** (international format, e.g. `+441234567890`):
- Number for the **WhatsApp link** (`wa.me` format, e.g. `447123456789`):

**Answer:**

---

### Q2 — Where should enquiries actually be delivered? · NEEDS ANSWER

Both forms currently open the visitor's own email application with a pre-filled draft.
Nothing is sent to a server. That means:

- the enquiry only arrives if the visitor clicks Send themselves;
- the "Upload Drawings or Documents" file is **discarded** — the `mailto:` scheme cannot
  carry attachments at all;
- it does nothing for anyone using webmail in a browser tab (Gmail, Outlook.com), so a
  significant share of visitors will click submit and see no result.

To fix all three the form needs to post to a form service. Free tiers that handle file
uploads and need no backend: Formspree, Web3Forms, EmailJS. Roughly a 20-line change once
chosen.

- Keep the current email-app behaviour, accepting that attachments and webmail users fail?
- Or set up a form service — and if so, which inbox receives submissions?

**Answer:**

---

## B. Facts about the business we cannot verify ourselves

### Q3 — "England" vs "England & Wales" · NEEDS ANSWER

`v2.md` removes "& Wales" from the Home hero and every service page heading, but the
Bottom Bar text supplied keeps "Registered in England & Wales".

Our reading, now live: **coverage/marketing copy says "England"; legal/company copy says
"England & Wales".**

We need this confirmed rather than assumed because it is a public statement about where the
company operates and will accept work. It also appears in these places `v2.md` did not
list, which we changed to match:

- About page hero paragraph
- Meta descriptions on Home, About, Architectural, Structural, Planning, Surveys
- Party Wall "Why Us" bullet: "Professional Service Across England & Wales"
- The final bullet of the supplied `template for why us.png` reference image

**Answer:**

---

### Q22 — Achievements figures · NEEDS ANSWER

The Achievements section now publishes **"1K+ Projects Successfully Delivered"** alongside
**"5+ Years of Industry Experience"**, exactly as supplied.

We are flagging this rather than quietly shipping it: 1,000+ projects in 5 years is around
four per working day, and a prospective client or competitor may query it. This is a claim
about the business that only the client can stand behind.

Confirm the figure, or supply a replacement.

**Answer:**

---

## C. The brief contradicts itself or a reference image

### Q10 — Surveys hero image · NEEDS ANSWER

`v2.md` says "update new image on bg `hero-banner.png`", but the surveys folder contains
only `hero-bg.png` — which the page already uses. No `hero-banner.png` was supplied.

We kept `hero-bg.png`. Is that the image meant, or is a new file still to be sent?

**Answer:**

---

### Q14 — Architectural "What We Offer": 7 cards, but the list covers 5 · NEEDS ANSWER

The supplied list covers Planning Drawings, Extension, Garage Conversion, New Builds and
Internal Alterations. It does not mention **Building Regulations Drawings** or **Loft
Conversions**, both of which already exist on the page with images (`building-regs.png`,
`loft-conversions.png`).

We **kept both**, on the basis that deleting live content is destructive and the omission
reads like an oversight rather than an instruction.

Keep both cards, or remove them?

**Answer:**

---

### Q15 — Our Expertise: 7 items or 9? · NEEDS ANSWER

`v2.md` lists 7 items. The supplied reference image `template for experty.png` shows **9** —
it adds **Commercial Developments** and **Building Regulations**.

We built **7**, treating the written brief as authoritative over the image.

Build 7 or 9? If 9, we need icons for those two.

**Answer:**

---

### Q21 — About > Our Process: 5 steps or 6? · NEEDS ANSWER

`Template.png` shows **6** steps with entirely different names: Consultation &
Understanding, Design & Planning, Review & Approvals, Detailed Drawings & Documentation,
Construction Support, Completion & Handover.

But Rows A–E in the brief describe **5**, and the 5 images supplied match the renamed Home
process steps: Consultation, Site & Project Review, Design & Engineering, Planning
Approval, Project Delivery.

We built **5 rows using the brief's names and the supplied images**, treating
`Template.png` purely as a layout reference.

Confirm, or send the 6-step content and its images.

**Answer:**
