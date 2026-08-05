// Rewrites the shared navbar, footer and favicon across every page so the ten
// copies cannot drift apart. Re-runnable: applying it twice is a no-op.
import { readFileSync, writeFileSync } from "node:fs";

const PAGES = [
  "index.html",
  "about.html",
  "contact.html",
  "privacy.html",
  "cookies.html",
  "terms.html",
  "services/architectural.html",
  "services/structural.html",
  "services/planning.html",
  "services/party-wall.html",
  "services/surveys.html",
];

// Placeholders until the client supplies the real numbers (requirements/v2/V2-QUESTIONS.md Q1).
const PHONE_DISPLAY = "+44 XX XXXX XXXX";
const PHONE_HREF = "tel:+44XXXXXXXXXX";
const WHATSAPP_HREF = "https://wa.me/44XXXXXXXXXX";
const EMAIL = "info@archinovastructures.co.uk";

const navbar = (r) => `<nav class="navbar navbar-expand-lg site-navbar sticky-top">
    <div class="container">
      <a class="navbar-brand navbar-brand--named" href="${r}index.html" aria-label="ARCHINOVA STRUCTURES LTD — home">
        <img src="${r}assets/images/logo/logo-blue-named-horizontal.png" alt="ARCHINOVA STRUCTURES LTD">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="mainNav">
        <ul class="navbar-nav mx-auto align-items-lg-center">
          <li class="nav-item"><a class="nav-link" href="${r}about.html" data-nav="about">About</a></li>
          <li class="nav-item dropdown nav-item--hover">
            <a class="nav-link dropdown-toggle" href="#" data-nav="services" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Services</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="${r}services/architectural.html" data-nav="architectural.html">Architectural Design</a></li>
              <li><a class="dropdown-item" href="${r}services/structural.html" data-nav="structural.html">Structural Engineering</a></li>
              <li><a class="dropdown-item" href="${r}services/planning.html" data-nav="planning.html">Planning &amp; Building Control</a></li>
              <li><a class="dropdown-item" href="${r}services/party-wall.html" data-nav="party-wall.html">Party Wall &amp; Boundary</a></li>
              <li><a class="dropdown-item" href="${r}services/surveys.html" data-nav="surveys.html">Surveys &amp; Inspections</a></li>
            </ul>
          </li>
          <li class="nav-item ms-lg-2"><a class="btn btn-primary-brand btn-nav-contact px-4" href="${r}contact.html" data-nav="contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>`;

const footer = (r) => `<footer class="site-footer site-footer--lg">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4">
          <div class="footer-brand"><a href="${r}index.html">ARCHINOVA STRUCTURES LTD</a></div>
          <p class="mb-0">Registered Office:<br>128 City Road,<br>London, EC1V 2NX,<br>United Kingdom</p>
        </div>
        <div class="col-6 col-md-2">
          <h4 class="footer-heading">Quick Links</h4>
          <ul>
            <li><a href="${r}index.html">Home</a></li>
            <li><a href="${r}about.html">About</a></li>
            <li><a href="${r}contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-6 col-md-3">
          <h4 class="footer-heading">Services</h4>
          <ul>
            <li><a href="${r}services/architectural.html">Architectural Design</a></li>
            <li><a href="${r}services/structural.html">Structural Engineering</a></li>
            <li><a href="${r}services/planning.html">Planning &amp; Building Control</a></li>
            <li><a href="${r}services/party-wall.html">Party Wall &amp; Boundary</a></li>
            <li><a href="${r}services/surveys.html">Surveys &amp; Inspections</a></li>
          </ul>
        </div>
        <div class="col-md-3">
          <h4 class="footer-heading">Get In Touch</h4>
          <ul>
            <li><a href="mailto:${EMAIL}">${EMAIL}</a></li>
            <li>Phone: <a href="${PHONE_HREF}">${PHONE_DISPLAY}</a></li>
            <li>WhatsApp: <a href="${WHATSAPP_HREF}" target="_blank" rel="noopener">${PHONE_DISPLAY}</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 ARCHINOVA STRUCTURES LTD. All Rights Reserved.
          <span class="footer-legalese">Registered in England &amp; Wales | Company No. 17343941</span>
        </span>
        <div class="footer-legal">
          <a href="${r}privacy.html">Privacy Policy</a>
          <a href="${r}cookies.html">Cookie Policy</a>
          <a href="${r}terms.html">Terms &amp; Conditions</a>
        </div>
      </div>
    </div>
  </footer>`;

const favicon = (r) =>
  `  <link rel="icon" type="image/png" href="${r}assets/images/logo/logo-blue-mark.png">\n`;

let changed = 0;
for (const page of PAGES) {
  const root = page.includes("/") ? "../" : "";
  let html = readFileSync(page, "utf8");
  const before = html;

  const navMatches = html.match(/<nav class="navbar[\s\S]*?<\/nav>/g) ?? [];
  if (navMatches.length !== 1) throw new Error(`${page}: expected 1 <nav>, found ${navMatches.length}`);
  html = html.replace(/<nav class="navbar[\s\S]*?<\/nav>/, navbar(root));

  const footMatches = html.match(/<footer class="site-footer[\s\S]*?<\/footer>/g) ?? [];
  if (footMatches.length !== 1) throw new Error(`${page}: expected 1 <footer>, found ${footMatches.length}`);
  html = html.replace(/<footer class="site-footer[\s\S]*?<\/footer>/, footer(root));

  if (!html.includes('rel="icon"')) html = html.replace("</head>", favicon(root) + "</head>");

  if (html !== before) {
    writeFileSync(page, html);
    changed++;
    console.log(`updated  ${page}`);
  } else {
    console.log(`no change ${page}`);
  }
}
console.log(`\n${changed}/${PAGES.length} pages updated`);
