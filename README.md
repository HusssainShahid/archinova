# ARCHINOVA STRUCTURES LTD — Website

Static marketing website for ARCHINOVA STRUCTURES LTD (architectural & structural
engineering services). No framework, no build step, no backend — the folder is the
deployable artefact.

## Stack

- HTML5, one file per page
- Bootstrap 5.3 + Bootstrap Icons (CDN)
- Custom CSS (`css/styles.css`) — white backgrounds, navy & royal blue brand colours
- Vanilla JS (`js/main.js`) — active-nav highlight + enquiry forms via Web3Forms

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| About | `about.html` |
| Contact | `contact.html` |
| Architectural Design | `services/architectural.html` |
| Structural Engineering | `services/structural.html` |
| Planning & Building Control | `services/planning.html` |
| Party Wall & Boundary | `services/party-wall.html` |
| Surveys & Inspections | `services/surveys.html` |
| Privacy Policy | `privacy.html` |
| Cookie Policy | `cookies.html` |
| Terms & Conditions | `terms.html` |

## Run locally

Open `index.html` directly, or serve the folder:

```bash
npx http-server . -p 8080
```

## Working on it

**The navbar and footer are generated, not hand-written.** They appear on all 11 pages;
edit `tools/apply-shell.mjs` and re-run it rather than editing the copies:

```bash
node tools/apply-shell.mjs
```

**Verify after every change.** This resolves every local `href`/`src` and asserts the
current design is intact. It should always end in `0 broken references, 0 failed
assertions`:

```bash
node tools/verify.mjs
```

See `tools/README.md` for the rest, including which scripts are spent one-shots that must
not be re-run.

## Project docs

| Path | Purpose |
|------|---------|
| `requirements/v3/V3.md` | Client v3 revision brief. **Active** source of truth for the current pass. |
| `requirements/v3/V3-CHECKLIST.md` | Every v3 requirement as a row (`Done` / `Tested` / evidence). Rows are permanent. |
| `requirements/v3/V3-QUESTIONS.md` | Open v3 client questions. Numbers are permanent. |
| `requirements/v2/v2.md` | Client v2 brief (implemented). Kept for history. |
| `requirements/v2/V2-CHECKLIST.md` | Completed v2 checklist. Rows remain permanent. |
| `requirements/v2/V2-QUESTIONS.md` | Remaining open v2 client questions (and answered ones). |
| `requirements/v1/` | Original client-supplied docs and images for the first build. Not linked from the site. |

## Known gaps

- **Phone and WhatsApp numbers are deliberate placeholders** (`+44 XX XXXX XXXX`,
  `tel:+44XXXXXXXXXX`, `wa.me/44XXXXXXXXXX`). The markup is finished; only the number is
  missing. Blocks launch — see `requirements/v2/V2-QUESTIONS.md` Q1.
- **Enquiry forms post to Web3Forms** (Contact, and "Request a Quote" on About). The access
  key in `js/main.js` is live. See `requirements/v2/V2-QUESTIONS.md` Q2 for the
  privacy-policy follow-up (naming Web3Forms as a processor) still awaiting client wording
  or go-ahead.
- **Neither form accepts file attachments.** Both offer a "Link to Drawings or Documents"
  field instead. This is deliberate: every free-and-cheap form service caps uploads at
  25MB per submission at best, and the DWG files and plan-set PDFs this business receives
  routinely exceed that. A share link does not have a size limit.
- **v3 Achievements copy swap** (100% compliance / 2hrs response) is blocked on
  `requirements/v3/V3-QUESTIONS.md` Q1.
- Privacy, Cookie and Terms copy is the client's own supplied wording, used as given.
