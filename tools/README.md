# tools/

Plain Node scripts, no dependencies, no build step. Run from the repo root:

```bash
node tools/verify.mjs
```

## Live scripts — safe to run any time

| Script | What it does |
|--------|--------------|
| `verify.mjs` | The regression suite. Resolves every local `href`/`src` on all 11 pages and asserts the v2 changes are still in place. **Run this after any edit.** Exits non-zero on failure. |
| `apply-shell.mjs` | Regenerates the navbar, footer and favicon on all 11 pages from a single source. Idempotent — running it twice changes nothing. Edit this script, never the eleven copies, for any nav/footer change. |
| `check-refs.mjs` | Cross-checks `V2-CHECKLIST.md` against `V2-QUESTIONS.md`: catches a checklist row pointing at a question that no longer exists. |

## `applied/` — already run, do not run again

One-shot migrations kept only as a record of how the v2 revision was carried out.
They assume the pre-v2 state of the files.

`apply-services.mjs` in particular is **not idempotent** — it transforms service-page
markup by pattern, so a second run corrupts pages that were already migrated.

`mark-questions.mjs` is additionally obsolete: `V2-QUESTIONS.md` was later restructured
from 32 questions to 8 and the script's expected format no longer matches.

`trim-logos.mjs` needs `sharp` installed, which is intentionally not a committed dependency.
