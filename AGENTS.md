# Agent context — archinova

Static site, 11 HTML pages, Bootstrap 5.3 via CDN. No framework, no build step, no backend.
Read `README.md` first for the page list and how to run it. This file covers the conventions
that are not obvious from the code and that are easy to break.

**Active revision is v3** (implemented). Brief, checklist and questions live under
`requirements/v3/`. Open client questions may still be `NEEDS ANSWER` there and in
`requirements/v2/V2-QUESTIONS.md`.

## Before you finish any change

```bash
node tools/verify.mjs
```

It resolves every local `href`/`src` across all 11 pages and asserts the current design is
still in place. It must end in `0 broken references, 0 failed assertions`. Treat a new
failure as your bug, not a stale test. When a revision lands durable invariants, extend the
assertions there rather than weakening existing ones.

## The navbar and footer are generated

They are identical on all 11 pages. **Do not edit the eleven copies** — they will drift.
Edit `tools/apply-shell.mjs`, which holds the single source, and re-run it:

```bash
node tools/apply-shell.mjs
```

It is idempotent; a clean tree reports `no change` for all 11 pages.

## Never run anything in `tools/applied/`

Those are spent one-shot migrations, kept only as a record. They assume the pre-v2 state of
the files. `apply-services.mjs` is not idempotent and will corrupt already-migrated service
pages. `mark-questions.mjs` is obsolete — it expects the old 32-question format.

## Checklists have strict rules

Active: [`requirements/v3/V3-CHECKLIST.md`](requirements/v3/V3-CHECKLIST.md) against
[`requirements/v3/V3.md`](requirements/v3/V3.md).
Archived v2: [`requirements/v2/V2-CHECKLIST.md`](requirements/v2/V2-CHECKLIST.md) against
[`requirements/v2/v2.md`](requirements/v2/v2.md).

- **Rows are never deleted, reworded, or renumbered.** An ID keeps its wording forever.
- Only the `Done`, `Tested` and `Evidence / Notes` cells may change.
- `Done` and `Tested` are separate on purpose: `Done` = code written, `Tested` = proven to
  work with the proof named in `Evidence`. Both must be ticked to count as finished.
- `≈ Ours` means we made the call ourselves and the reasoning is in `Evidence / Notes`.
  `≈ Qn` / `🔒 Qn` point at a question in the matching questions file under the same
  `requirements/vN/` folder.
- No literal `|` inside a cell — it breaks the table. Write "then" or similar.

`node tools/check-refs.mjs` checks both v2 and v3 checklist ↔ questions pairs.

Question numbers in each questions file are permanent and never reused. Each questions file
deliberately contains only what the client must answer; anything we could decide ourselves
was moved to the checklist as `≈ Ours`. Do not renumber v3 questions to match v2 — they are
separate series.

## Conventions that are easy to get wrong

**"England" vs "England & Wales".** Coverage and marketing copy says **"England"**. Legal
and company-registration copy says **"England & Wales"**. This split is intentional and is
itself an open question (v2 Q3) — do not "fix" one to match the other.

**Placeholder phone number is deliberate.** `+44 XX XXXX XXXX` / `tel:+44XXXXXXXXXX` /
`wa.me/44XXXXXXXXXX` appear sitewide via `apply-shell.mjs`. The markup is complete; the
number is fake so it cannot ship unnoticed (v2 Q1). Don't invent one.

**Forms post to Web3Forms.** `js/main.js` → `initEnquiryForms()` handles any element with
`data-enquiry-form`. Two forms use it: Contact, and "Request a Quote" on About. A live
`WEB3FORMS_KEY` is set; submissions POST to `https://api.web3forms.com/submit`. If the key
ever starts with `REPLACE-WITH` again, both forms fall back to `mailto:` so they never post
into a void — leave that fallback in place. The key is public by design (it only allows
sending *to* the signup inbox); don't treat it as a secret to strip from the repo.

**Neither form takes file attachments, on purpose.** Both offer a `fileLink` URL field
instead. Every free-and-cheap form service caps uploads at 25MB per submission at best, and
the DWG files and plan-set PDFs this business receives routinely exceed that, so a share
link beats a paid upload box. `verify.mjs` fails on any `type="file"` — a file input here
would collect a drawing and silently drop it.

**Card and process layouts are CSS grids, not Bootstrap rows.** `.process-grid` for numbered
process steps, `.service-card-grid` for the richer "What We Offer" cards. Never put a
`col-*` div inside either — outside a `.row` a Bootstrap column only contributes gutter
padding, and the grid's own column count silently wins, which is how the Planning and Party
Wall cards once ended up a quarter of their intended width. `verify.mjs` guards both this
and the mirror mistake of bare `.process-box` children in a `.row`.

**Image filenames are URL-safe lowercase hyphenated.** No spaces, ampersands or capitals
anywhere under `assets/images` — the originals had all three. Keep new files to that
pattern.

**Logos live in `assets/images/logo/`.** Shared marks are URL-safe under that folder.
Untrimmed originals may be preserved in `assets/images/logo/_original/` — that folder is a
record, not something to reference from HTML. Navbar uses the horizontal named mark
`logo-blue-named-horizontal.png`.

**`requirements/` is client source material, versioned.** Nothing on the live site links to
it. Don't prune it.

| Folder | Contents |
|--------|----------|
| `requirements/v1/` | Original client briefs, Word docs and images for the first build |
| `requirements/v2/` | v2 brief (`v2.md`), checklist and questions |
| `requirements/v3/` | v3 brief (`V3.md`), checklist and questions |

## Environment

Windows, PowerShell. `&&` chaining and `head`/`tail` are unavailable — use `;` and
`Select-Object -First`. Node is available for scripts; `sharp` is not a committed dependency
and is installed ad hoc when image processing is needed. Do not commit `node_modules`,
Playwright scratch (`.playwright-mcp/`), or `v3-qa-*.png` screenshots.
