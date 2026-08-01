// Updates only the Done / Tested / Evidence cells. Row IDs and Requirement
// wording are never touched — even when a Requirement itself contains "|".
import { readFileSync, writeFileSync } from "node:fs";
import { MARKS } from "./checklist-marks.mjs";

const path = "V2-CHECKLIST.md";
let md = readFileSync(path, "utf8");

md = md.replace(
  "**Pages in scope (10):** `index.html`, `about.html`, `contact.html`, `privacy.html`,\n`terms.html`,",
  "**Pages in scope (11):** `index.html`, `about.html`, `contact.html`, `privacy.html`,\n`cookies.html`, `terms.html`,"
);

let updated = 0;
let missing = 0;
const lines = md.split(/\r?\n/);
const out = lines.map((line) => {
  if (!line.startsWith("| ")) return line;
  const idMatch = line.match(/^\| ([A-Z0-9]+-[0-9]+) \|/);
  if (!idMatch) return line;
  const id = idMatch[1];
  if (!MARKS[id]) return line;

  // Walk back from the end: Evidence, Tested, Done are the last three cells.
  // Everything between the ID and Done is the Requirement, preserved byte-for-byte.
  const parts = [];
  let rest = line.slice(0, -1); // drop the trailing " |"
  for (let i = 0; i < 3; i++) {
    const idx = rest.lastIndexOf(" | ");
    if (idx === -1) return line;
    parts.unshift(rest.slice(idx + 3));
    rest = rest.slice(0, idx);
  }
  // rest is now "| ID | Requirement"
  const reqMatch = rest.match(/^\| [A-Z0-9]+-[0-9]+ \| ([\s\S]*)$/);
  if (!reqMatch) return line;
  const requirement = reqMatch[1];
  const [newDone, newTested, newEvidence] = MARKS[id];
  updated++;
  return `| ${id} | ${requirement} | ${newDone} | ${newTested} | ${newEvidence} |`;
});

for (const id of Object.keys(MARKS)) {
  if (!lines.some((l) => l.startsWith(`| ${id} |`))) {
    console.warn("! row not found:", id);
    missing++;
  }
}

writeFileSync(path, out.join("\n"));
console.log(`updated ${updated} rows; ${missing} missing`);
