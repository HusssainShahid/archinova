// Marketing/coverage copy says "England"; legal/company copy keeps "England & Wales".
// See V2-QUESTIONS.md Q3. Each edit is explicit so the sweep is auditable.
import { readFileSync, writeFileSync } from "node:fs";

const EDITS = {
  "index.html": [
    ["across England & Wales.", "across England."],
  ],
  "about.html": [
    ["across England & Wales.", "across England."],
  ],
  "services/architectural.html": [
    ["across England & Wales —", "across England —"],
    ["Professional Architectural Design Services Across England &amp; Wales", "Professional Architectural Design Services"],
  ],
  "services/structural.html": [
    ["across England & Wales —", "across England —"],
    ["Professional Structural Engineering Solutions Across England &amp; Wales", "Professional Structural Engineering Solutions"],
  ],
  "services/planning.html": [
    ["across England & Wales from", "across England from"],
    ["Planning &amp; Building Control Services Across England &amp; Wales", "Planning &amp; Building Control Services"],
  ],
  "services/surveys.html": [
    ["across England & Wales —", "across England —"],
    ["Professional Structural Surveys &amp; Property Inspections Across England &amp; Wales", "Professional Structural Surveys &amp; Property Inspections"],
  ],
  "services/party-wall.html": [
    ["Professional Party Wall &amp; Boundary Services Across England", "Professional Party Wall &amp; Boundary Services"],
    ["Professional Service Across England &amp; Wales", "Professional Service Across England"],
  ],
};

let total = 0;
for (const [file, pairs] of Object.entries(EDITS)) {
  let html = readFileSync(file, "utf8");
  for (const [from, to] of pairs) {
    if (!html.includes(from)) {
      console.warn(`  ! ${file}: not found -> ${JSON.stringify(from.slice(0, 60))}`);
      continue;
    }
    html = html.split(from).join(to);
    total++;
    console.log(`  ok ${file}: ${JSON.stringify(from.slice(0, 55))}`);
  }
  writeFileSync(file, html);
}
console.log(`\n${total} replacements applied`);
