// Marks each question ASSUMED with the decision we shipped under. The original
// question text is never rewritten — only the status line and Answer slot change.
import { readFileSync, writeFileSync } from "node:fs";

const ANSWERS = {
  Q1: "ASSUMED — wired `tel:` and `wa.me` with the existing `+44 XX XXXX XXXX` placeholder until the real number arrives.",
  Q2: "ASSUMED — kept the mailto handoff; the file input is present with helper text telling the visitor to attach files in their mail client. A real form service still needs a decision.",
  Q3: "ASSUMED — marketing/coverage copy says \"England\"; legal/company copy keeps \"England & Wales\". Applied sitewide.",
  Q4: "ASSUMED — registration line removed from the footer brand column everywhere; shown once in the bottom bar on every page.",
  Q5: "ASSUMED — shipped as its own page `cookies.html`, linked from every footer.",
  Q6: "ASSUMED — hardcoded © 2026 as supplied.",
  Q7: "ASSUMED — used `home/without name blue logo.png` (now `logo/logo-blue-mark.png`).",
  Q8: "ASSUMED — used `About us/pur experty bg.png` (now `about/expertise-bg.png`).",
  Q9: "ASSUMED — used `partywall/inti-vis.jpg`.",
  Q10: "ASSUMED — kept the existing `surveys/hero-bg.png` (no separate hero-banner was supplied).",
  Q11: "ASSUMED — nothing further needed; the new file already sits at the existing path.",
  Q12: "ASSUMED — lightened the overlay via `.page-hero--showcase`; no replacement image was sent.",
  Q13: "ASSUMED — `str-calcs.png` for the What We Offer card; `calcs.png` for the process-step hover. Other five images treated as the new uploads.",
  Q14: "ASSUMED — kept both unlisted cards (Building Regulations Drawings + Loft Conversions).",
  Q15: "ASSUMED — built the 7 items listed in the brief (not the 9 in the template image).",
  Q16: "ASSUMED — renames already applied; images themselves untouched.",
  Q17: "ASSUMED — favicon set to `logo/logo-blue-mark.png` on all pages.",
  Q18: "ASSUMED — all nav links centred via `mx-auto`, coloured royal blue `#1E5AA8`; Contact button stays the primary brand CTA; logo is the home route.",
  Q19: "ASSUMED — larger buttons (`btn-lg`), not promoted to full cards.",
  Q20: "ASSUMED — used the 8 + 10 items from the Party Wall / template content exactly.",
  Q21: "ASSUMED — built 5 zigzag rows using the brief's names and the 5 supplied images; Template.png used as layout reference only.",
  Q22: "ASSUMED — published \"1K+\" exactly as supplied; flagged for client comfort check.",
  Q23: "ASSUMED — option (a): About form matches the new lighter list; Contact form kept its fuller field set.",
  Q24: "ASSUMED — treated as N/A (no Privacy section exists on About); left alone.",
  Q25: "ASSUMED — labels say \"Architectural Design\"; file path kept as `architectural.html`.",
  Q26: "ASSUMED — 4th item links to `#our-services` on the home page.",
  Q27: "ASSUMED — Bootstrap Icons in brand blue instead of emoji.",
  Q28: "ASSUMED — tick circle + icon + label on every benefit row.",
  Q29: "ASSUMED — continuous right-to-left single-line loop that pauses on hover.",
  Q30: "ASSUMED — box scales up in place (no layout jump).",
  Q31: "ASSUMED — logo-swap hover only on Planning and Surveys; no background photos (none were supplied).",
  Q32: "ASSUMED — 18px radius + soft soft shadow as the house style.",
};

let md = readFileSync("V2-QUESTIONS.md", "utf8");

for (const [q, answer] of Object.entries(ANSWERS)) {
  // Flip the status on the heading line.
  md = md.replace(
    new RegExp(`(### ${q} — [^·\\n]+) · OPEN`),
    `$1 · ASSUMED`
  );
  // Q16 already says ASSUMED — leave its heading, still fill the Answer.
  md = md.replace(
    new RegExp(`(### ${q} — [^\\n]+\\n)([\\s\\S]*?)(\\n\\*\\*Answer:\\*\\*)\\s*(\\n)`),
    (_m, head, body, label, nl) => `${head}${body}${label} ${answer}${nl}`
  );
}

writeFileSync("V2-QUESTIONS.md", md);
console.log(`marked ${Object.keys(ANSWERS).length} questions ASSUMED`);
