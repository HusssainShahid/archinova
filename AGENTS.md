# Agent context — archinova

Static site, 11 HTML pages, Bootstrap 5.3 via CDN. No framework, no build step, no backend.
Read `README.md` first for the page list and how to run it. This file covers the conventions
that are not obvious from the code and that are easy to break.

The v2 revision brief (`v2.md`) has been fully implemented. What remains is 8 open client
questions in `V2-QUESTIONS.md`.

## Before you finish any change

```bash
node tools/verify.mjs
```

It resolves every local `href`/`src` across all 11 pages and asserts the v2 design is still
in place. It must end in `0 broken references, 0 failed assertions`. Treat a new failure as
your bug, not a stale test.

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

## `V2-CHECKLIST.md` has strict rules

The client reads this file against `v2.md`, line by line.

- **Rows are never deleted, reworded, or renumbered.** An ID keeps its wording forever.
- Only the `Done`, `Tested` and `Evidence / Notes` cells may change.
- `Done` and `Tested` are separate on purpose: `Done` = code written, `Tested` = proven to
  work with the proof named in `Evidence`. Both must be ticked to count as finished.
- `≈ Ours` means we made the call ourselves and the reasoning is in `Evidence / Notes`.
  `≈ Qn` / `🔒 Qn` point at a question in `V2-QUESTIONS.md`.
- No literal `|` inside a cell — it breaks the table. Write "then" or similar.

`node tools/check-refs.mjs` catches a checklist row pointing at a question that no longer
exists.

Question numbers in `V2-QUESTIONS.md` are also permanent and never reused, because the
checklist cross-references them. The file deliberately contains only what the client must
answer; anything we could decide ourselves was moved to the checklist as `≈ Ours`.

## Conventions that are easy to get wrong

**"England" vs "England & Wales".** Coverage and marketing copy says **"England"**. Legal
and company-registration copy says **"England & Wales"**. This split is intentional and is
itself an open question (Q3) — do not "fix" one to match the other.

**Placeholder phone number is deliberate.** `+44 XX XXXX XXXX` / `tel:+44XXXXXXXXXX` /
`wa.me/44XXXXXXXXXX` appear sitewide via `apply-shell.mjs`. The markup is complete; the
number is fake so it cannot ship unnoticed (Q1). Don't invent one.

**Forms have no backend.** `js/main.js` → `initEnquiryForms()` handles any element with
`data-enquiry-form`, builds a `mailto:` and assigns it to `window.location.href`. Two forms
use it: Contact, and "Request a Quote" on About. Consequence: file uploads are silently
discarded (`mailto:` cannot carry attachments) and webmail users see nothing happen (Q2).

**Image filenames are URL-safe lowercase hyphenated.** No spaces, ampersands or capitals
anywhere under `assets/images` — the originals had all three. Keep new files to that
pattern.

**Logos live in `assets/images/logo/`.** Five byte-identical copies of the white mark were
consolidated into one shared file. The supplied files had a large empty border that made the
mark render tiny, so they were trimmed; untrimmed originals are preserved in
`assets/images/logo/_original/` — that folder is a record, not something to reference from
HTML.

**`requirements/` is client source material.** Original briefs and images. Nothing on the
live site links to it. Don't prune it.

## Environment

Windows, PowerShell. `&&` chaining and `head`/`tail` are unavailable — use `;` and
`Select-Object -First`. Node is available for scripts; `sharp` is not a committed dependency
and is installed ad hoc when image processing is needed.
