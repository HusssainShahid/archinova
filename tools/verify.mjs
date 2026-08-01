// Verification pass: resolves every local asset/link reference on every page and
// asserts the sitewide changes actually landed in all of them.
import { readFileSync, existsSync } from "node:fs";
import { dirname, join, normalize } from "node:path";

const PAGES = [
  "index.html", "about.html", "contact.html", "privacy.html", "cookies.html", "terms.html",
  "services/architectural.html", "services/structural.html", "services/planning.html",
  "services/party-wall.html", "services/surveys.html",
];

const decode = (s) => s.replace(/&amp;/g, "&");
let broken = 0;
let checked = 0;

console.log("=== Local asset + link resolution ===");
for (const page of PAGES) {
  const html = readFileSync(page, "utf8");
  const base = dirname(page);
  const refs = new Set();

  for (const m of html.matchAll(/(?:src|href)="([^"]+)"/g)) refs.add(m[1]);
  for (const m of html.matchAll(/url\('([^']+)'\)/g)) refs.add(m[1]);

  for (let ref of refs) {
    ref = decode(ref);
    if (/^(https?:|mailto:|tel:|#|data:)/.test(ref)) continue;
    const target = normalize(join(base, ref.split("#")[0]));
    checked++;
    if (!existsSync(target)) {
      console.log(`  BROKEN  ${page}  ->  ${ref}`);
      broken++;
    }
  }
}
console.log(`${checked} local references checked, ${broken} broken\n`);

console.log("=== Sitewide assertions ===");
const assertions = [
  ["navbar logo present", (h) => h.includes("logo/logo-blue-mark.png")],
  ['no "Home" nav link', (h) => !h.includes('data-nav="home"')],
  ["nav links centred", (h) => h.includes('navbar-nav mx-auto')],
  ["email is a mailto link", (h) => h.includes('href="mailto:info@archinovastructures.co.uk"')],
  ["phone is a tel link", (h) => h.includes('href="tel:')],
  ["whatsapp is a wa.me link", (h) => h.includes("wa.me/")],
  ["bottom bar legalese", (h) => h.includes("Registered in England &amp; Wales | Company No. 17343941")],
  ["no registration line in footer brand column", (h) => !h.includes("Registered in England &amp; Wales<br>Company Registration No. 17343941")],
  ["cookie policy links to its own page", (h) => h.includes('href="../cookies.html"') || h.includes('href="cookies.html"')],
  ["no stale privacy#cookies link", (h) => !h.includes("privacy.html#cookies")],
  ["favicon present", (h) => h.includes('rel="icon"')],
  ["architectural labelled Architectural Design", (h) => h.includes(">Architectural Design<")],
  ["no legacy step-num markup", (h) => !h.includes('class="step-num"')],
  ["no image-coming-soon placeholder", (h) => !h.includes("Image coming soon")],
];

let failures = 0;
for (const [label, test] of assertions) {
  const bad = PAGES.filter((p) => !test(readFileSync(p, "utf8")));
  if (bad.length) {
    console.log(`  FAIL  ${label}  (${bad.length}/${PAGES.length})  -> ${bad.join(", ")}`);
    failures++;
  } else {
    console.log(`  pass  ${label}  (${PAGES.length}/${PAGES.length})`);
  }
}

console.log("\n=== Per-page feature assertions ===");
const perPage = [
  ["index.html", "achievements section", (h) => h.includes("achievement-grid")],
  ["index.html", "reviews section removed", (h) => !h.includes("reviews-placeholder")],
  ["index.html", "process boxes", (h) => (h.match(/class="process-box"/g) ?? []).length === 5],
  ["index.html", "industries: Estate Agents added", (h) => h.includes("Estate Agents")],
  ["index.html", "industries: Investors removed", (h) => !h.includes("Investors")],
  ["index.html", "industries: Commercial Property Owners removed", (h) => !h.includes("Commercial Property Owners")],
  ["index.html", "Why Us two-column template", (h) => h.includes("why-list") && h.includes("chip-list")],
  ["index.html", "About Us in a panel box", (h) => h.includes("panel-box")],
  ["index.html", "hero service links", (h) => h.includes('href="services/architectural.html"><i class="bi bi-check-circle-fill"')],
  ["about.html", "mission panel", (h) => h.includes("mission-panel")],
  ["about.html", "zig-zag process timeline", (h) => (h.match(/timeline-row/g) ?? []).length === 5],
  ["about.html", "expertise panel with 7 tiles", (h) => (h.match(/expertise-tile/g) ?? []).length === 7],
  ["about.html", "FAQ with 6 questions", (h) => (h.match(/accordion-item/g) ?? []).length === 6],
  ["about.html", "request a quote form", (h) => h.includes("Request Your Free Quote")],
  ["about.html", "industries section removed", (h) => !h.includes("Industries We Serve")],
  ["about.html", "ready-to-work CTA removed", (h) => !h.includes("Ready to Work With Us")],
  ["contact.html", "contact panel", (h) => h.includes("contact-panel")],
  ["contact.html", "4 contact cards", (h) => (h.match(/class="contact-card"/g) ?? []).length === 4],
  ["contact.html", "hero logo", (h) => h.includes("logo-white-with-name.png")],
  ["contact.html", "office hours formatted", (h) => h.includes("office-hours")],
  ["contact.html", "areas we cover removed", (h) => !h.includes("areas-text")],
  ["services/architectural.html", "ticker banner", (h) => h.includes("ticker-band")],
  ["services/architectural.html", "benefits panel", (h) => h.includes("benefits-panel")],
  ["services/architectural.html", "5 process hover backgrounds", (h) => (h.match(/--step-bg/g) ?? []).length === 5],
  ["services/architectural.html", "lighter hero overlay", (h) => h.includes("page-hero--showcase")],
  ["services/architectural.html", "why-us boxes", (h) => h.includes("why-box")],
  ["services/structural.html", "5 process hover backgrounds", (h) => (h.match(/--step-bg/g) ?? []).length === 5],
  ["services/structural.html", "new hero description", (h) => h.includes("Professional structural engineering solutions that are safe")],
  ["services/party-wall.html", "4 process hover backgrounds", (h) => (h.match(/--step-bg/g) ?? []).length === 4],
  ["services/party-wall.html", "hero photo replaces gradient", (h) => h.includes("partywall/hero-banner.png")],
  ["services/party-wall.html", "service-item styling", (h) => h.includes("service-item")],
  ["services/party-wall.html", "new hero description", (h) => h.includes("From serving Party Wall Notices")],
  ["services/surveys.html", "blue process text", (h) => h.includes("process-box--blue")],
  ["services/planning.html", "icon swaps to logo on hover", (h) => h.includes("icon-logo")],
  ["services/planning.html", "blue process text", (h) => h.includes("process-box--blue")],
];

for (const [page, label, test] of perPage) {
  const ok = test(readFileSync(page, "utf8"));
  if (!ok) failures++;
  console.log(`  ${ok ? "pass" : "FAIL"}  ${page}: ${label}`);
}

console.log(`\n${broken} broken references, ${failures} failed assertions`);
process.exitCode = broken || failures ? 1 : 0;
