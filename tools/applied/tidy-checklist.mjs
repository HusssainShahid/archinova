// Collapses the double space the retarget step left where an Evidence cell already
// ended in whitespace before " — our call: …" was appended.
import { readFileSync, writeFileSync } from "node:fs";

const path = "V2-CHECKLIST.md";
const before = readFileSync(path, "utf8");
const after = before.replace(/ {2,}— (our call|DEVIATION)/g, " — $1");

writeFileSync(path, after);
const fixed = (before.match(/ {2,}— (our call|DEVIATION)/g) ?? []).length;
console.log(`collapsed ${fixed} double spaces`);
