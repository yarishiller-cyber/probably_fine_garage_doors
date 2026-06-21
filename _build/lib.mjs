// lib.mjs — shared rendering helpers for Probably Fine Garage Doors generator.
import { readFileSync } from "node:fs";

export const cfg = JSON.parse(readFileSync("site-config.json", "utf8"));
export const BASE = `https://${cfg.domain}`;
export const PHONE = cfg.phoneDisplay;
export const TEL = cfg.phoneTel;
export const EMAIL = cfg.email;
export const SMS = `sms:${TEL}?&body=${encodeURIComponent(cfg.smsBody)}`;
export const VER = String(Date.now());

// ---- inline icons (currentColor) ----
export const I = {
  bolt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  msg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15 9 22 9.3 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9.3 9 9"/></svg>',
  spring: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16M4 20h16M6 4c0 3 12 3 12 6s-12 3-12 6"/></svg>',
  cog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  cable: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3v6a4 4 0 0 0 4 4h8a4 4 0 0 1 4 4v4"/><circle cx="4" cy="3" r="1.6"/><circle cx="20" cy="21" r="1.6"/></svg>',
  track: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="21"/><line x1="18" y1="3" x2="18" y2="21"/><rect x="9" y="7" width="6" height="4" rx="1"/></svg>',
  door: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  handshake: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 12 8 9l-4 4 5 5 2-2"/><path d="m13 12 3 3 4-4-5-5-2 2"/><path d="m11 12 2 2"/></svg>',
};

export function stars(n = 5) { return I.star.repeat(n); }

// ---- <head> ----
export function head({ title, desc, path, ogImg = "/assets/img/home-hero-desktop-1600.webp", preloadHero = null, jsonld = [], noindex = false }) {
  const canonical = BASE + path;
  const robots = noindex ? '\n<meta name="robots" content="noindex">' : "";
  const preload = preloadHero ? `
  <link rel="preload" as="image" href="/assets/img/${preloadHero}-mobile-960.webp" media="(max-width:768px)" fetchpriority="high">
  <link rel="preload" as="image" href="/assets/img/${preloadHero}-desktop-1600.webp" media="(min-width:769px)" fetchpriority="high">` : "";
  const ld = jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j)}</script>`).join("\n");
  return `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">${robots}
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#0d4eb8">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="${cfg.brandName}">
<meta property="og:image" content="${BASE}${ogImg}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">${preload}
<link rel="stylesheet" href="/styles.css?v=${VER}">
${ld}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>`;
}

// ---- header / nav ----
const SERVICE_LINKS = [
  ["/garage-door-spring-repair.html", "Spring Repair"],
  ["/garage-door-opener-repair.html", "Opener Repair"],
  ["/garage-door-opener-installation.html", "Opener Installation"],
  ["/garage-door-cable-repair.html", "Cable Repair"],
  ["/garage-door-off-track-repair.html", "Off-Track Repair"],
  ["/garage-door-roller-repair.html", "Roller Repair"],
  ["/new-garage-door-installation.html", "New Garage Doors"],
  ["/garage-door-maintenance.html", "Maintenance & Tune-Up"],
  ["/emergency-garage-door-repair.html", "Emergency Repair"],
];
const AREA_LINKS = [
  ["/service-areas/vancouver.html", "Vancouver"],
  ["/service-areas/burnaby.html", "Burnaby"],
  ["/service-areas/surrey.html", "Surrey"],
  ["/service-areas/richmond.html", "Richmond"],
  ["/service-areas/coquitlam.html", "Coquitlam"],
  ["/service-areas/", "All service areas"],
];

export function header() {
  const svc = [`<a href="/services.html">All services</a>`, ...SERVICE_LINKS.map(([h, t]) => `<a href="${h}">${t}</a>`)].join("");
  const areas = AREA_LINKS.map(([h, t]) => `<a href="${h}">${t}</a>`).join("");
  return `<header class="site-header">
<div class="container">
<nav class="nav" id="nav">
  <a class="brand" href="/">
    <span class="brand__mark">${I.door}</span>
    <span class="brand__name">Probably&nbsp;Fine <b>Garage&nbsp;Doors</b></span>
  </a>
  <div class="nav__links" id="navLinks">
    <span class="has-menu"><a class="nav__parent" href="/services.html" aria-haspopup="true" aria-expanded="false">Services <span class="caret" aria-hidden="true">▾</span></a><span class="submenu">${svc}</span></span>
    <span class="has-menu"><a class="nav__parent" href="/service-areas/" aria-haspopup="true" aria-expanded="false">Service Areas <span class="caret" aria-hidden="true">▾</span></a><span class="submenu">${areas}</span></span>
    <a href="/garage-door-spring-repair.html">Pricing</a>
    <a href="/about.html">About</a>
    <a href="/faq.html">FAQ</a>
    <a href="/contact.html">Contact</a>
  </div>
  <div class="nav__right">
    <a class="nav__phone" href="tel:${TEL}">${I.phone}<span class="nav__phone-label">${PHONE}</span></a>
    <a class="nav__cta" href="tel:${TEL}">Call now</a>
    <button class="nav__toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="navLinks">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>
</nav>
</div>
</header>`;
}

// ---- floating mobile CTAs ----
export function floating() {
  return `<div class="floating" role="region" aria-label="Quick contact">
  <a class="btn btn--call" href="tel:${TEL}" aria-label="Call ${PHONE}">${I.phone} Call now</a>
  <a class="btn btn--primary" href="${SMS}" aria-label="Text us">${I.msg} Text us</a>
</div>`;
}

// ---- hero / pagehead pictures ----
export function picture(name, alt, { eager = false, cls = "" } = {}) {
  return `<picture>
  <source media="(max-width:768px)" srcset="/assets/img/${name}-mobile-960.webp 960w, /assets/img/${name}-mobile-480.webp 480w" sizes="100vw">
  <source media="(min-width:769px)" srcset="/assets/img/${name}-desktop-1600.webp 1600w, /assets/img/${name}-desktop-960.webp 960w" sizes="100vw">
  <img class="${cls}" src="/assets/img/${name}-desktop-960.webp" width="1600" height="900" alt="${alt}" ${eager ? 'fetchpriority="high" decoding="async"' : 'loading="lazy" decoding="async"'}>
</picture>`;
}

// interior page header with bg image (decorative)
export function pagehead({ crumbs = [], h1, sub, img }) {
  const bg = img ? `<picture>
  <source media="(max-width:768px)" srcset="/assets/img/${img}-mobile-960.webp" >
  <img class="pagehead__bg" src="/assets/img/${img}-desktop-1600.webp" alt="" aria-hidden="true" fetchpriority="high" decoding="async" width="1600" height="900">
</picture>` : "";
  const bc = crumbs.length ? `<nav class="breadcrumb" aria-label="Breadcrumb">${crumbs.map((c, i) => i === crumbs.length - 1 ? `<span>${c.name}</span>` : `<a href="${c.item}">${c.name}</a> / `).join("")}</nav>` : "";
  return `<section class="pagehead${img ? " pagehead--img" : ""}">
${bg}
<div class="container">
${bc}
<h1>${h1}</h1>
${sub ? `<p>${sub}</p>` : ""}
<div class="btn-row hero-cta" style="margin-top:1.2rem">
  <a class="btn btn--primary btn--lg" href="tel:${TEL}">${I.phone} Call ${PHONE}</a>
  <a class="btn btn--white" href="${SMS}">${I.msg} Text us</a>
</div>
</div>
</section>`;
}

// ---- reusable blocks ----
export function trustMicroline() {
  return `Licensed (business licence) · Insured · WorkSafeBC-covered`;
}

export function ctaBand(headline, sub) {
  return `<section class="section section--tight"><div class="container"><div class="cta-band" data-reveal>
  <h2>${headline}</h2>
  <p>${sub}</p>
  <div class="btn-row" style="justify-content:center;margin-top:1.4rem">
    <a class="btn btn--primary btn--lg cta-pulse" href="tel:${TEL}">${I.phone} Call ${PHONE}</a>
    <a class="btn btn--white" href="${SMS}">${I.msg} Text us</a>
  </div>
  <p class="muted" style="color:rgba(255,255,255,.8);margin-top:1rem;font-size:.85rem">Upfront pricing. Written quote before we touch a thing. No $19.99 bait.</p>
</div></div></section>`;
}

export function faqBlock(faqs) {
  return `<div class="faq" data-stagger>
${faqs.map((f) => `  <details><summary>${f.q}</summary><div><p>${f.a}</p></div></details>`).join("\n")}
</div>`;
}

// ---- footer ----
export function footer() {
  const p = cfg.springPricing, o = cfg.otherPricing;
  const svc = SERVICE_LINKS.slice(0, 8).map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("");
  const areas = AREA_LINKS.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join("");
  return `<footer class="site-footer">
<div class="container">
<div class="footer-grid">
  <div>
    <div class="footer__brand"><span class="brand__mark">${I.door}</span> ${cfg.brandName}</div>
    <p style="font-size:.9rem">Honestly great garage-door repair across Greater Vancouver. We just have a funny name. Same-day spring, opener, cable &amp; off-track repair — fixed right or we come back free.</p>
    <p style="font-size:.85rem">${I.shield} ${trustMicroline()}</p>
    <div class="footer__price-toggle" hidden data-jsonly>
      <button class="btn footer-btn" id="priceToggle" aria-expanded="false" aria-controls="footerPrices">${I.tag} See our prices</button>
    </div>
    <div class="footer-prices" id="footerPrices">
      <h4>Honest Lower-Mainland pricing</h4>
      <table>
        <tr><td>Single torsion spring</td><td>$${p.singleSpring.price}</td></tr>
        <tr><td>Two springs + new cables (cables free)</td><td>$${p.twoSpringsNewCables.price}</td></tr>
        <tr><td>Two high-cycle springs (cables free)</td><td>$${p.twoSpringsHighCycle.price}</td></tr>
        <tr><td>Cable repair</td><td>from $${o.cableRepairFrom}</td></tr>
        <tr><td>Off-track repair</td><td>from $${o.offTrackFrom}</td></tr>
        <tr><td>Opener repair</td><td>from $${o.openerRepairFrom}</td></tr>
        <tr><td>Annual tune-up</td><td>from $${o.tuneUpFrom}</td></tr>
        <tr><td>Diagnostic call</td><td>$${o.diagnostic} (${o.diagnosticNote})</td></tr>
      </table>
      <p class="muted" style="color:rgba(255,255,255,.7);margin:.6rem 0 0;font-size:.78rem">Ranges, not promises — you get a written quote before any work. Free safety inspection with every spring job.</p>
    </div>
  </div>
  <div>
    <h4>Services</h4>
    <ul>${svc}</ul>
  </div>
  <div>
    <h4>Service Areas</h4>
    <ul>${areas}</ul>
  </div>
  <div>
    <h4>Get in touch</h4>
    <ul>
      <li>${I.phone} <a href="tel:${TEL}">${PHONE}</a></li>
      <li>${I.msg} <a href="${SMS}">Text us</a></li>
      <li>✉ <a href="mailto:${EMAIL}">${EMAIL}</a></li>
      <li>${I.clock} Mon–Sun, 7am–8pm</li>
      <li>${I.pin} Serving all of Greater Vancouver, BC</li>
    </ul>
    <p style="margin-top:1rem"><a class="btn footer-btn" href="/become-a-partner.html">${I.handshake} Become a Partner</a></p>
  </div>
</div>
<div class="footer-bottom">
  <span>© ${new Date().getFullYear()} ${cfg.brandName}. ${trustMicroline()}.</span>
  <span>
    <a href="/about.html">About</a>
    <a href="/contact.html">Contact</a>
    <a href="/privacy-policy.html">Privacy</a>
    <a href="/terms-of-service.html">Terms</a>
  </span>
</div>
</div>
</footer>`;
}

// ---- closing scripts ----
export function scripts() {
  return `<script src="/script.js?v=${VER}" defer></script>
<script type="module">
  import { animate, inView, scroll, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
  window.__motion = { animate, inView, scroll, stagger };
  import("/js/motion.js?v=${VER}").then(m => m.initMotion());
</script>
</body>
</html>`;
}

// ---- business JSON-LD graph (reused) ----
export function businessLD() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": `${BASE}/#business`,
        "name": cfg.brandName,
        "image": `${BASE}/assets/img/home-hero-desktop-1600.webp`,
        "url": `${BASE}/`,
        "telephone": cfg.phone,
        "email": EMAIL,
        "priceRange": cfg.priceRange,
        "areaServed": [...cfg.coverageTowns, ...cfg.moreTowns].map((c) => ({ "@type": "City", "name": c })),
        "address": { "@type": "PostalAddress", "addressLocality": "Vancouver", "addressRegion": "BC", "addressCountry": "CA" },
        "geo": { "@type": "GeoCoordinates", "latitude": cfg.geo.lat, "longitude": cfg.geo.lng },
        "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "07:00", "closes": "20:00" }],
        "slogan": cfg.signatureHook,
      },
      { "@type": "WebSite", "@id": `${BASE}/#website`, "url": `${BASE}/`, "name": cfg.brandName, "publisher": { "@id": `${BASE}/#business` } },
    ],
  };
}

export function breadcrumbLD(crumbs) {
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((c, i) => ({ "@type": "ListItem", "position": i + 1, "name": c.name, "item": BASE + c.item })),
  };
}

export function serviceLD({ serviceType, desc, minPrice, maxPrice, price, path }) {
  const offer = { "@type": "Offer", "priceCurrency": "CAD" };
  if (minPrice && maxPrice) offer.priceSpecification = { "@type": "PriceSpecification", "minPrice": String(minPrice), "maxPrice": String(maxPrice), "priceCurrency": "CAD" };
  else if (price) offer.price = String(price);
  return {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": serviceType, "description": desc,
    "provider": { "@id": `${BASE}/#business` },
    "areaServed": [...cfg.coverageTowns, ...cfg.moreTowns].map((c) => ({ "@type": "City", "name": c })),
    "url": BASE + path,
    "offers": offer,
  };
}

export function faqLD(faqs) {
  return {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a.replace(/<[^>]+>/g, "") } })),
  };
}
