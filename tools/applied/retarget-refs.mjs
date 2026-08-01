// Part B was removed from V2-QUESTIONS.md because those items need no client answer.
// Their checklist rows must stop pointing at a question that no longer exists: the marker
// becomes `≈ Ours` (our decision, open to correction) and the reasoning moves into
// Evidence / Notes. Requirement wording is never touched.
import { readFileSync, writeFileSync } from "node:fs";

// Questions that remain in V2-QUESTIONS.md and keep their `≈ Qn` reference.
const KEPT = new Set([1, 2, 3, 10, 14, 15, 21, 22]);

// Reasoning that previously lived in the Part B table, keyed by question number.
// Appended to Evidence so removing Part B loses no information.
const RATIONALE = {
  4: "our call: resolves the brief asking to both add and remove the line",
  5: "our call: the copy was supplied as a standalone document",
  6: "our call: fixed year as supplied, not auto-updating",
  7: "our call: only a blue mark was supplied",
  8: "our call: matched despite the \"pur experty\" typo in the original filename",
  9: "our call: brief gave no file extension",
  11: "our call: the new file already sits at the path the page uses",
  12: "our call: no replacement image was supplied, so the overlay was lightened",
  13: "our call: two similar files were supplied; split card vs process hover",
  17: "our call: there was no favicon before",
  18: "our call: royal blue #1E5AA8; logo is now the route home since Home was removed",
  19: "our call: large buttons as asked, not promoted to full cards",
  20: "our call: reference image content used verbatim",
  23: "our call: About uses the new lighter list, Contact keeps Property Type",
  24: "our call: no Privacy section exists on this page, so treated as a no-op",
  25: "our call: URL kept so existing links and search indexing survive",
  26: "our call: 4th item has no page of its own",
  27: "DEVIATION from brief: brand icons instead of the emoji supplied — emoji render inconsistently across platforms and read as informal",
  28: "our call: tick + icon + label, as literally described",
  29: "our call: pauses on hover so the text is readable",
  30: "our call: scales in place so neighbours do not shift",
  31: "DEVIATION from brief: no hover background photos — none were supplied for this page",
  32: "our call: 18px radius + soft shadow as the house standard",
};

const path = "V2-CHECKLIST.md";
let md = readFileSync(path, "utf8");

let retargeted = 0;
const out = md.split(/\r?\n/).map((line) => {
  if (!/^\| [A-Z0-9]+-[0-9]+ \|/.test(line)) return line;

  // Peel the last three cells: Done, Tested, Evidence.
  const parts = [];
  let rest = line.slice(0, -1);
  for (let i = 0; i < 3; i++) {
    const idx = rest.lastIndexOf(" | ");
    if (idx === -1) return line;
    parts.unshift(rest.slice(idx + 3));
    rest = rest.slice(0, idx);
  }
  const [done, tested, evidence] = parts;

  const m = done.match(/^≈ Q(\d+)$/);
  if (!m) return line;
  const n = Number(m[1]);
  if (KEPT.has(n)) return line;

  const note = RATIONALE[n];
  const newEvidence = note ? `${evidence} — ${note}` : evidence;
  retargeted++;
  return `${rest} | ≈ Ours | ${tested} | ${newEvidence} |`;
});

md = out.join("\n");

// Teach the label key about the new marker, and retire the now-unused 🔒 row wording
// by appending rather than editing.
md = md.replace(
  "| `≈ Qn` | Done | Built on our reading of the brief; still needs client sign-off on question *n* |",
  "| `≈ Qn` | Done | Built on our reading of the brief; still needs client sign-off on question *n* |\n" +
    "| `≈ Ours` | Done | Our decision to make — no client answer needed. Reasoning is in `Evidence / Notes`; open to correction after review |"
);

writeFileSync(path, md);
console.log(`retargeted ${retargeted} rows from ≈ Qn to ≈ Ours`);
