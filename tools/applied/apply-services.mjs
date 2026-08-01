// Applies the V2 revisions to the five service pages: scrolling banner, larger blue
// "What We Offer" headings, boxed Why Us, boxed process steps with logo-swap circles
// and hover backgrounds, and the new Benefits panels.
import { readFileSync, writeFileSync } from "node:fs";

const LOGO = "../assets/images/logo/logo-white-mark.png";

const benefit = (icon, label) =>
  `            <li><span class="benefit-tick"><i class="bi bi-check-lg"></i></span><i class="bi ${icon} benefit-icon"></i> ${label}</li>`;

const benefitsPanel = ({ bg, tone, description, items }) => `  <section class="section-pad">
    <div class="container">
      <div class="benefits-panel benefits-panel--${tone}" style="background-image: url('${bg}');">
        <div class="row g-4 g-lg-5 align-items-center">
          <div class="col-lg-5">
            <h2>Benefits of Working With ARCHINOVA STRUCTURES</h2>
          </div>
          <div class="col-lg-7">
            <p class="mb-4">${description}</p>
            <ul class="benefit-list">
${items.map(([i, l]) => benefit(i, l)).join("\n")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

`;

const CONFIG = {
  "services/architectural.html": {
    tickerText:
      "Whether you are extending your home, converting a loft, building a new property, or renovating an existing building, our experienced design team delivers practical, innovative, and regulation-compliant architectural solutions tailored to your project.",
    showcaseHero: true,
    processWrapper: ["process-steps", "process-grid process-grid--5"],
    processClass: "process-box process-box--media",
    processBgs: [
      "../assets/images/architectural/consultation.png",
      "../assets/images/architectural/on-site.png",
      "../assets/images/architectural/concept-design.png",
      "../assets/images/architectural/drawings.png",
      "../assets/images/architectural/delivery.png",
    ],
    benefits: {
      bg: "../assets/images/architectural/benefits-bg.png",
      tone: "light",
      description:
        "From concept to completion, we provide reliable architectural solutions backed by technical excellence, clear communication, and professional support.",
      items: [
        ["bi-rulers", "Tailored Design"],
        ["bi-clipboard-check", "Planning Support"],
        ["bi-buildings", "Technical Expertise"],
        ["bi-shield-check", "Regulation Compliance"],
        ["bi-people", "Client Focus"],
        ["bi-clock-history", "Reliable Delivery"],
      ],
    },
    extra: [
      // Fill the "Image coming soon" placeholder with the supplied extension photo.
      [
        `<div class="img-placeholder">\n            <i class="bi bi-image"></i>\n            <span>Image coming soon</span>\n            <small>House Extensions</small>\n          </div>`,
        `<img src="../assets/images/architectural/extension.png" alt="House extensions">`,
      ],
    ],
  },

  "services/structural.html": {
    tickerText:
      "Whether you are planning a home extension, removing a load-bearing wall, constructing a new building, or undertaking major structural alterations, we provide detailed structural calculations, technical drawings, and engineering advice from concept to completion.",
    processWrapper: ["process-steps", "process-grid process-grid--5"],
    processClass: "process-box process-box--media",
    processBgs: [
      "../assets/images/structural/ini-cons.png",
      "../assets/images/structural/str-asses.png",
      "../assets/images/structural/str-desi.png",
      "../assets/images/structural/calcs.png",
      "../assets/images/structural/cons.png",
    ],
    benefits: {
      bg: "../assets/images/structural/benefits-bg.png",
      tone: "dark",
      description:
        "From structural assessments to detailed engineering designs, we deliver safe, practical, and cost-effective structural solutions backed by technical expertise, regulatory compliance, and dependable project support.",
      items: [
        ["bi-rulers", "Precision Engineering"],
        ["bi-building-check", "Safe &amp; Reliable Structures"],
        ["bi-clipboard-data", "Detailed Structural Reports"],
        ["bi-shield-check", "Building Regulation Compliance"],
        ["bi-cash-coin", "Cost-Effective Solutions"],
        ["bi-people", "Professional Engineering Support"],
      ],
    },
    extra: [
      [
        `<div class="img-placeholder">\n            <i class="bi bi-calculator"></i>\n            <span>Image coming soon</span>\n            <small>Structural Calculations</small>\n          </div>`,
        `<img src="../assets/images/structural/str-calcs.png" alt="Structural calculations">`,
      ],
      [
        "Safe, practical, and cost-effective structural solutions that comply with current UK Building Regulations and industry standards.",
        "Professional structural engineering solutions that are safe, practical, and fully compliant with current UK Building Regulations and industry standards.",
      ],
    ],
  },

  "services/party-wall.html": {
    tickerText:
      "Whether you're planning a house extension, loft conversion, basement excavation, new build development, or structural alterations, our experienced team offers reliable support from initial advice through to Party Wall Awards and boundary assessments.",
    processWrapper: ["row g-4", "process-grid process-grid--4"],
    processClass: "process-box process-box--blue process-box--media",
    processBgs: [
      "../assets/images/partywall/inti-vis.jpg",
      "../assets/images/partywall/asses.png",
      "../assets/images/partywall/docu.png",
      "../assets/images/partywall/ongi.png",
    ],
    serviceItem: true,
    benefits: {
      bg: "../assets/images/partywall/benefits-bg.png",
      tone: "dark",
      description:
        "Whether you're planning construction or resolving a neighbour dispute, our experienced surveyors provide impartial Party Wall and Boundary services to protect your property, ensure legal compliance, and help projects progress with confidence.",
      items: [
        ["bi-bank", "Party Wall Expertise"],
        ["bi-file-earmark-text", "Notices &amp; Awards"],
        ["bi-rulers", "Boundary Assessments"],
        ["bi-people", "Dispute Resolution"],
        ["bi-shield-check", "Property Protection"],
        ["bi-clock-history", "Reliable Professional Support"],
      ],
    },
    extra: [
      [
        `style="background-image: linear-gradient(135deg, #0b1f3a 0%, #1e5aa8 100%);"`,
        `style="background-image: url('../assets/images/partywall/hero-banner.png');"`,
      ],
      [
        "Expert guidance to help ensure your project complies with the Party Wall etc. Act 1996 while addressing property boundary considerations.",
        "From serving Party Wall Notices to resolving boundary matters, we provide professional guidance, accurate documentation, and expert support to help your project progress smoothly while ensuring compliance with the Party Wall etc. Act 1996.",
      ],
      // bi-handshake is not a real Bootstrap Icons glyph (BUG-01).
      [`bi bi-handshake`, `bi bi-people`],
    ],
  },

  "services/surveys.html": {
    tickerText:
      "Whether you're purchasing a property, investigating structural cracks, assessing building defects, or inspecting a newly built home, our experienced structural engineers provide clear advice and detailed reports.",
    processWrapper: ["process-steps", "process-grid process-grid--5"],
    processClass: "process-box process-box--blue",
    processBgs: [],
    benefits: {
      bg: "../assets/images/surveys/benefits-bg.png",
      tone: "dark",
      description:
        "Our structural surveys and inspections provide accurate insights into your property's condition, helping homeowners, buyers, developers, and property professionals identify structural issues early, minimise risks, and make informed decisions with confidence.",
      items: [
        ["bi-house-check", "Thorough Property Inspections"],
        ["bi-file-earmark-richtext", "Detailed Engineering Reports"],
        ["bi-search", "Early Defect Identification"],
        ["bi-clipboard-check", "Independent Professional Advice"],
        ["bi-lightning-charge", "Fast Report Delivery"],
        ["bi-award", "Trusted Engineering Expertise"],
      ],
    },
    // bi-balance-scale is not a real Bootstrap Icons glyph (BUG-02).
    extra: [[`bi bi-balance-scale`, `bi bi-clipboard-check`]],
  },

  "services/planning.html": {
    tickerText:
      "Whether you're extending your home, converting a loft, constructing a new build, or carrying out structural alterations, our experienced team provides the professional guidance needed to make your project as smooth and stress-free as possible.",
    processWrapper: ["row g-4", "process-grid process-grid--4"],
    processClass: "process-box process-box--blue",
    processBgs: [],
    iconCards: true,
  },
};

for (const [file, cfg] of Object.entries(CONFIG)) {
  let html = readFileSync(file, "utf8");
  const log = [];

  // 1. Intro paragraph -> looping single-line banner (duplicated for a seamless loop).
  const introRe = new RegExp(
    `  <section class="section-pad">\\s*<div class="container">\\s*<p class="section-lead mb-0">${cfg.tickerText.replace(
      /[.*+?^${}()|[\]\\]/g,
      "\\$&"
    )}</p>\\s*</div>\\s*</section>`
  );
  if (introRe.test(html)) {
    html = html.replace(
      introRe,
      `  <section class="ticker-band" aria-label="Service summary">
    <div class="ticker-viewport">
      <div class="ticker-track"><span>${cfg.tickerText}</span></div>
      <div class="ticker-track" aria-hidden="true"><span>${cfg.tickerText}</span></div>
    </div>
  </section>`
    );
    log.push("ticker");
  } else {
    console.warn(`  ! ${file}: intro paragraph not matched`);
  }

  // 2. Bigger blue heading on the offer/services block.
  html = html.replace(
    /<h2 class="section-title">(Our (?:Architectural Services|Structural Engineering Services|Structural Survey &amp; Inspection Services|Services))<\/h2>/,
    '<h2 class="section-title section-title--lg">$1</h2>'
  );

  // 3. Why Us reasons become boxes that invert to blue on hover.
  if (html.includes('class="why-item"')) {
    html = html.split('class="why-item"').join('class="why-item why-box"');
    log.push("why-box");
  }

  // 4. Process steps -> boxes with logo-swap circles (and hover photo where supplied).
  const [fromWrap, toWrap] = cfg.processWrapper;
  html = html.replace(`<div class="${fromWrap}">`, `<div class="${toWrap}">`);

  let step = 0;
  html = html.replace(
    /(?:<div class="col-md-6 col-lg-3">)?<div class="process-step"><span class="step-num">(\d+)<\/span><h3>([\s\S]*?)<\/h3><p>([\s\S]*?)<\/p><\/div>(?:<\/div>)?/g,
    (_m, num, heading, body) => {
      const bg = cfg.processBgs[step++];
      const style = bg ? ` style="--step-bg: url('${bg}');"` : "";
      const cls = bg ? cfg.processClass : cfg.processClass.replace(" process-box--media", "");
      return `<div class="${cls}"${style}>
          <span class="process-badge">
            <span class="badge-num">${num}</span>
            <span class="badge-logo"><img src="${LOGO}" alt=""></span>
          </span>
          <h3>${heading}</h3>
          <p>${body}</p>
        </div>`;
    }
  );
  log.push(`process(${step})`);

  // 5. Party Wall service blocks get the lifted light-card treatment.
  if (cfg.serviceItem) {
    html = html.split('<div class="icon-service">').join('<div class="icon-service service-item">');
    log.push("service-item");
  }

  // 6. Planning service cards: icon swaps to the logo mark on hover.
  if (cfg.iconCards) {
    html = html.split('<div class="icon-service">').join('<div class="icon-service icon-service--card">');
    html = html.replace(
      /<div class="icon-wrap"><i class="([^"]+)"><\/i><\/div>/g,
      `<div class="icon-wrap"><i class="$1"></i><span class="icon-logo"><img src="${LOGO}" alt=""></span></div>`
    );
    log.push("icon-cards");
  }

  // 7. Lighter hero overlay so the photo reads through.
  if (cfg.showcaseHero) {
    html = html.replace(
      'class="page-hero page-hero--sm"',
      'class="page-hero page-hero--sm page-hero--showcase"'
    );
    log.push("showcase-hero");
  }

  // 8. Per-page copy and image fixes.
  for (const [from, to] of cfg.extra ?? []) {
    if (html.includes(from)) {
      html = html.split(from).join(to);
    } else {
      console.warn(`  ! ${file}: extra not found -> ${JSON.stringify(from.slice(0, 50))}`);
    }
  }

  // 9. Benefits panel, inserted directly above the FAQ (or above the closing CTA).
  if (cfg.benefits) {
    const anchor = '  <section class="section-pad">\n    <div class="container">\n      <div class="row justify-content-center">';
    if (html.includes(anchor)) {
      html = html.replace(anchor, benefitsPanel(cfg.benefits) + anchor);
      log.push("benefits");
    } else {
      console.warn(`  ! ${file}: FAQ anchor not found, benefits not inserted`);
    }
  }

  writeFileSync(file, html);
  console.log(`updated ${file}  [${log.join(", ")}]`);
}
