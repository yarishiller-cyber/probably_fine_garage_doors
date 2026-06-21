#!/usr/bin/env node
// generate.mjs — builds all static HTML for Probably Fine Garage Doors.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";
import {
  cfg, BASE, PHONE, TEL, EMAIL, SMS, I, stars,
  head, header, floating, footer, scripts, picture, pagehead, ctaBand,
  faqBlock, trustMicroline, businessLD, breadcrumbLD, serviceLD, faqLD,
} from "./lib.mjs";
import { SERVICES, CITIES } from "./content.mjs";

const manifest = JSON.parse(readFileSync("/home/user/garagedoors-shared/assets/liftmaster/manifest.json", "utf8"));
const INSTALL_PRICE = { "2220L": 539, "6580L": 689, "98022L": 789, "2420L": 599, "4690": 629, "6690L": 719, "98032": 749 };

const write = (path, html) => { const full = `${path}`; const dir = full.split("/").slice(0, -1).join("/"); if (dir) mkdirSync(dir, { recursive: true }); writeFileSync(full, html); console.log("  ✓ " + full); };

// shared CTA aside for service pages
function quoteAside() {
  return `<aside class="sticky-aside">
<div class="aside-card">
  <h3>Get it fixed today</h3>
  <p>A real human answers, you get a flat written price, and we book a real arrival window.</p>
  <div class="btn-row" style="flex-direction:column">
    <a class="btn btn--call btn--block cta-pulse" href="tel:${TEL}">${I.phone} Call ${PHONE}</a>
    <a class="btn btn--primary btn--block" href="${SMS}">${I.msg} Text us</a>
    <a class="btn btn--ghost btn--block" href="/contact.html">Request a quote</a>
  </div>
  <p class="muted" style="margin:1rem 0 0">${I.shield} ${trustMicroline()}</p>
</div>
</div></aside>`;
}

// ============================ HOME ============================
function buildHome() {
  const reviews = [
    { q: "Snapped spring, car trapped, kids late for school. They answered, quoted a flat price, and fixed it in under an hour. The name had me nervous — the work did not.", who: "Daniel R.", where: "Hastings-Sunrise, Vancouver" },
    { q: "Got three quotes. Probably Fine was the only one who gave a real number over the phone and stuck to it. Replaced both springs, threw in the cables. Done.", who: "Marcus T.", where: "South Surrey" },
    { q: "Booked a tune-up, expected an upsell, got an honest 'your door's good for years, here's what to watch.' Genuinely refreshing for this trade.", who: "Priya S.", where: "Brentwood, Burnaby" },
  ];
  const svcCards = SERVICES.map((s) => `<a class="card svc-card hover-lift" href="/${s.slug}.html">
  <div class="svc-card__media zoom-frame">${picture(s.img, s.h1)}</div>
  <div class="svc-card__body">
    <div class="card__icon">${s.icon}</div>
    <h3>${s.nav}</h3>
    <p>${cardLine(s.slug)}</p>
    <span class="card__link">Learn more ${I.arrow}</span>
  </div>
</a>`).join("\n");

  const areaCards = [...cfg.coverageTowns, ...cfg.moreTowns].map((c) => {
    const city = CITIES.find((x) => x.name === c);
    const href = city ? `/service-areas/${city.slug}.html` : "/service-areas/";
    return `<a href="${href}">${I.pin} ${c}</a>`;
  }).join("");

  const faqs = [
    { q: "Is the name a joke?", a: "The name is the only thing we're not serious about. The work, the pricing, and the warranty are completely serious. We're not 'probably' fine — we're genuinely great, and the name just makes you remember us." },
    { q: "How much does a garage door repair cost in Greater Vancouver?", a: `Most common repairs are flat-priced: single spring $${cfg.springPricing.singleSpring.price}, two springs with free cables $${cfg.springPricing.twoSpringsNewCables.price}, cable repair from $${cfg.otherPricing.cableRepairFrom}, opener repair from $${cfg.otherPricing.openerRepairFrom}. You always get a written quote before any work — no $19.99 bait, no surprises.` },
    { q: "Can you come the same day?", a: "Usually, yes — broken springs and stuck doors are our most common same-day calls across Metro Vancouver. Call or text early and we'll give you a real arrival window, not a vague all-day promise." },
    { q: "Are you actually licensed and insured?", a: "Yes — licensed (municipal business licence), carrying commercial liability insurance, and WorkSafeBC-covered. Garage-door work is an unregulated trade in BC, so we tell you exactly what 'licensed' means rather than implying a certificate that doesn't exist." },
    { q: "What areas do you serve?", a: "All of Greater Vancouver — Vancouver, Burnaby, Surrey, Richmond and Coquitlam plus the Tri-Cities, New West, the North Shore, Delta, Langley, Maple Ridge, Pitt Meadows and White Rock." },
    { q: "What if the repair doesn't hold?", a: "Fixed right or we come back free. That part isn't a joke — every job carries a workmanship warranty and we stand behind it." },
  ];

  const jsonld = [businessLD(), faqLD(faqs)];

  const body = `
<main id="main">
<section class="hero">
<div class="container">
<div class="hero__inner">
  <div class="hero__copy" data-reveal>
    <div class="hero__rating"><span class="stars">${stars(5)}</span> <span>Loved by Greater Vancouver homeowners</span></div>
    <h1>We're not <span class="hl">"probably"</span> fine.<br>We're genuinely great.</h1>
    <p class="hero__sub">Same-day garage door spring, opener, cable &amp; off-track repair across Greater Vancouver — at a flat price we tell you <em>before</em> we start. Funny name. Serious work.</p>
    <div class="btn-row" style="margin-top:1.6rem">
      <a class="btn btn--primary btn--lg cta-pulse" href="tel:${TEL}">${I.phone} Call ${PHONE}</a>
      <a class="btn btn--white btn--lg" href="${SMS}">${I.msg} Text us</a>
    </div>
    <div class="hero__trustline">
      <span>${I.shield} Licensed · Insured · WorkSafeBC</span>
      <span>${I.tag} Upfront flat pricing</span>
      <span>${I.clock} Same-day across Metro Van</span>
    </div>
  </div>
  <div class="hero__media" data-reveal="right" data-reveal-delay="0.1">
    <div class="hero__photo">${picture("home-hero", "Probably Fine technician beside the branded van at a Vancouver home", { eager: true })}</div>
    <div class="status-card" aria-hidden="false">
      <div class="status-card__row">
        <span class="status-card__title">Door Status</span>
        <span class="status-pill">${I.check} Probably fine</span>
      </div>
      <ul>
        <li>${I.check} Spring tension — balanced</li>
        <li>${I.check} Cables &amp; drums — no fraying</li>
        <li>${I.check} Opener &amp; safety sensors — pass</li>
      </ul>
      <p class="status-card__foot">Verified by a real technician. Not a guess.</p>
    </div>
  </div>
</div>
</div>
</section>

<section class="reassure">
<div class="container">
<div class="reassure__grid">
  <div class="reassure__item">${I.clock}<div><b>Same-Day Service</b><span>Most repairs fixed today</span></div></div>
  <div class="reassure__item">${I.tag}<div><b>Upfront Pricing</b><span>Written quote, no bait</span></div></div>
  <div class="reassure__item">${I.shield}<div><b>Licensed &amp; Insured</b><span>WorkSafeBC-covered</span></div></div>
  <div class="reassure__item">${I.check}<div><b>Fixed Right</b><span>Or we come back free</span></div></div>
</div>
</div>
</section>

<section class="section">
<div class="container">
  <div class="center" data-reveal><span class="eyebrow">What we fix</span><h2>Every garage door problem, one honest crew</h2><p class="lead">Tap any service for plain-language detail, real pricing, and answers — then call when you're ready.</p></div>
  <div class="grid grid--3" style="margin-top:2.5rem" data-stagger>
${svcCards}
  </div>
</div>
</section>

<section class="section section--soft">
<div class="container">
<div class="layout-split">
  <div data-reveal>
    <span class="eyebrow">Price transparency</span>
    <h2>The price we say is the price you pay</h2>
    <p>Garage-door scams are a real thing — the BBB warns about $19.99 ads that become $1,000 invoices, mystery "shaft fees," and unmarked vans. We built this company to be the opposite of that.</p>
    <p>You get a <strong>written quote before we touch a thing.</strong> Most repairs are flat-priced, posted right here on the site. The only thing that changes the number is you finding something we missed — and even then, you approve it first.</p>
    <ul>
      <li><strong>Single spring:</strong> $${cfg.springPricing.singleSpring.price} · <strong>Two springs + free cables:</strong> $${cfg.springPricing.twoSpringsNewCables.price}</li>
      <li><strong>Cable repair</strong> from $${cfg.otherPricing.cableRepairFrom} · <strong>Opener repair</strong> from $${cfg.otherPricing.openerRepairFrom}</li>
      <li><strong>Free</strong> safety inspection with every spring job</li>
    </ul>
    <p><a class="btn btn--ghost" href="/garage-door-spring-repair.html">${I.tag} See full spring pricing ${I.arrow}</a></p>
  </div>
  <div data-reveal="right">
    <div class="aside-card">
      <span class="price-note">${I.check} No $19.99 bait. No mystery fees.</span>
      <h3 style="margin-top:1rem">What an honest quote includes</h3>
      <ul>
        <li>${I.check} A real diagnosis, not a sales pitch</li>
        <li>${I.check} The flat price, in writing, up front</li>
        <li>${I.check} Parts sized to your door, not "whatever fits"</li>
        <li>${I.check} A workmanship warranty on the job</li>
      </ul>
      <p class="muted">Diagnostic call $${cfg.otherPricing.diagnostic} — ${cfg.otherPricing.diagnosticNote}.</p>
    </div>
  </div>
</div>
</div>
</section>

<section class="section">
<div class="container">
<div class="layout-split">
  <div data-reveal>
    <span class="eyebrow">Why us</span>
    <h2>A genuinely good company with a genuinely silly name</h2>
    <p>Here's the joke, resolved: we called ourselves <strong>Probably Fine</strong> because every garage-door company in Greater Vancouver sounds identical — "trusted, reliable, same-day, licensed &amp; insured." You can't tell them apart, and some of them are exactly the scam the BBB keeps warning about.</p>
    <p>So we did the opposite. A name you'll remember, paired with the stuff that actually matters: <strong>Canadian-owned, trained technicians, upfront flat pricing, and a fix-it-right-or-we-come-back guarantee.</strong> We're so bad at upselling that we'll just fix the spring you actually need.</p>
    <p><a class="btn btn--ghost" href="/about.html">More about us ${I.arrow}</a></p>
  </div>
  <div data-reveal="right">${picture("about", "The Probably Fine crew beside the branded service van", { cls: "" })}</div>
</div>
</div>
</section>

<section class="section section--soft">
<div class="container">
<div class="center" data-reveal><span class="eyebrow">Social proof</span><h2>What Greater Vancouver neighbours say</h2><p class="lead">Real homeowners, real doors. (We route every review to our Google profile — no funny business with star ratings.)</p></div>
<div class="grid grid--3" style="margin-top:2.5rem" data-stagger>
${reviews.map((r) => `  <div class="review"><div class="review__stars">${stars(5)}</div><p>"${r.q}"</p><div class="review__who"><b>${r.who}</b><br>${r.where}</div></div>`).join("\n")}
</div>
</div>
</section>

<section class="section section--blue">
<div class="container">
<div class="layout-split">
  <div data-reveal>
    <span class="eyebrow">Our guarantee</span>
    <h2>Fixed right — or we come back free</h2>
    <p>That's not marketing fluff. Every repair carries a workmanship warranty, every part is warrantied by the manufacturer, and you get a written quote before any work starts. If something we fixed doesn't hold, we make it right at no charge.</p>
  </div>
  <div data-reveal="right">
    <div class="grid grid--2">
      <div class="reassure__item" style="color:#fff">${I.shield}<div><b style="color:#fff">Workmanship warranty</b><span style="color:rgba(255,255,255,.75)">On every repair</span></div></div>
      <div class="reassure__item" style="color:#fff">${I.tag}<div><b style="color:#fff">Written quote first</b><span style="color:rgba(255,255,255,.75)">Before we start</span></div></div>
      <div class="reassure__item" style="color:#fff">${I.check}<div><b style="color:#fff">Parts warranty</b><span style="color:rgba(255,255,255,.75)">Manufacturer-backed</span></div></div>
      <div class="reassure__item" style="color:#fff">${I.clock}<div><b style="color:#fff">We answer fast</b><span style="color:rgba(255,255,255,.75)">Real human, real ETA</span></div></div>
    </div>
  </div>
</div>
</div>
</section>

<section class="section">
<div class="container">
<div class="center" data-reveal><span class="eyebrow">Service area</span><h2>Serving all of Greater Vancouver</h2><p class="lead">One honest crew, the whole Lower Mainland. Pick your city for local detail.</p></div>
<div class="area-grid" style="margin-top:2rem" data-stagger>
${areaCards}
</div>
</div>
</section>

<section class="section section--soft">
<div class="container">
<div class="center" data-reveal><span class="eyebrow">FAQ</span><h2>Questions, answered honestly</h2></div>
<div style="margin-top:2rem">${faqBlock(faqs)}</div>
</div>
</section>

${ctaBand("Ready when you are", "Broken spring, dead opener, or a door that won't close? Call or text — we'll give you a straight price and get you sorted today.")}
</main>`;

  return head({
    title: "Probably Fine Garage Doors | Honest Garage Door Repair Greater Vancouver",
    desc: "Same-day garage door repair across Greater Vancouver — springs, openers, cables & off-track. Funny name, serious work. Upfront flat pricing, licensed, insured, WorkSafeBC. Call 778-800-0769.",
    path: "/", preloadHero: "home-hero", jsonld,
  }) + header() + body + footer() + floating() + scripts();
}

function cardLine(slug) {
  return {
    "garage-door-spring-repair": "Snapped torsion spring? Same-day, flat-priced, free cables on pairs.",
    "garage-door-opener-repair": "Humming, clicking or dead? Most openers fixed same day from $149.",
    "garage-door-opener-installation": "Quiet belt, tough chain, or wall-mount — smart openers installed clean.",
    "garage-door-cable-repair": "Frayed or snapped cable? Fast fix — free with any two-spring job.",
    "garage-door-off-track-repair": "Door jumped the rails? Don't force it — we'll re-track it today.",
    "garage-door-roller-repair": "Grinding, shaky door? Quiet nylon rollers from $129.",
    "new-garage-door-installation": "Insulated steel, modern glass & carriage doors, free measure.",
    "garage-door-maintenance": "Yearly 25-point tune-up from $109 — prevent the breakdown.",
    "emergency-garage-door-repair": "Car trapped or house exposed? We answer fast and fix today.",
  }[slug] || "";
}

// ============================ SERVICE PAGES ============================
function buildService(s) {
  const crumbs = [{ name: "Home", item: "/" }, { name: "Services", item: "/garage-door-spring-repair.html" }, { name: s.nav, item: `/${s.slug}.html` }];
  const priceObj = s.priceFrom ? { price: s.priceFrom } : { minPrice: s.priceMin, maxPrice: s.priceMax };
  const jsonld = [
    breadcrumbLD([{ name: "Home", item: "/" }, { name: s.nav, item: `/${s.slug}.html` }]),
    serviceLD({ serviceType: s.serviceType, desc: s.metaDesc, path: `/${s.slug}.html`, ...priceObj }),
    faqLD(s.faqs),
  ];

  let extra = "";
  if (s.money) extra += springTiers();
  if (s.openers) extra += openerPicker();

  const sections = s.sections.map((sec) => `<h2>${sec.h2}</h2>\n${sec.html}`).join("\n");
  const otherSvc = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 4).map((x) => `<li><a href="/${x.slug}.html">${x.nav}</a></li>`).join("");

  const body = `
<main id="main">
${pagehead({ crumbs, h1: s.h1, sub: s.sub, img: s.img })}
<section class="section">
<div class="container">
<div class="layout-split">
  <div class="prose" data-reveal>
    <div class="answer">${s.answer}</div>
    ${sections}
    ${extra}
    <h2>Frequently asked</h2>
    ${faqBlock(s.faqs)}
    <h2>Related services</h2>
    <ul>${otherSvc}</ul>
    <p style="margin-top:1.5rem"><a href="/service-areas/">See all Greater Vancouver service areas ${I.arrow}</a></p>
  </div>
  ${quoteAside()}
</div>
</div>
</section>
${ctaBand("Let's get your door sorted", "Call or text for a flat, written price and a same-day arrival window across Greater Vancouver.")}
</main>`;

  return head({ title: s.seoTitle, desc: s.metaDesc, path: `/${s.slug}.html`, ogImg: `/assets/img/${s.img}-desktop-1600.webp`, preloadHero: s.img, jsonld }) + header() + body + footer() + floating() + scripts();
}

function springTiers() {
  const p = cfg.springPricing;
  const tier = (t, featured, flag) => `<div class="tier${featured ? " tier--featured" : ""}">
${flag ? `<span class="tier__flag">${flag}</span>` : ""}
<h3>${t.label}</h3>
<div class="tier__price">$${t.price}</div>
<ul>${(t.bullets || []).map((b) => `<li>${I.check} ${b}</li>`).join("")}</ul>
<a class="btn ${featured ? "btn--primary" : "btn--ghost"} btn--block" href="tel:${TEL}">${I.phone} Book this</a>
</div>`;
  const t1 = { ...p.singleSpring, bullets: ["Replace one broken torsion spring", "Correctly sized to your door", "Free safety inspection", "Workmanship warranty"] };
  const t2 = { ...p.twoSpringsNewCables, bullets: ["Replace both springs", "<strong>New cables included free</strong>", "Free safety inspection", "Best value for most homes"] };
  const t3 = { ...p.twoSpringsHighCycle, bullets: ["Two premium high-cycle springs", "Rated ~2–3× longer life", "<strong>New cables included free</strong>", "Free safety inspection"] };
  return `<h2 id="pricing">Spring repair pricing — flat, posted, honest</h2>
<p>Three clear options, no haggling. Every two-spring job includes new cables free, and every job includes a free safety inspection. You approve the price in writing before we start.</p>
<div class="tiers" data-stagger style="margin:1.5rem 0">
${tier(t1, false, "")}
${tier(t2, true, "Most popular")}
${tier(t3, false, "Longest life")}
</div>
<div class="free-banner">
  <span class="free-pill">${I.check} Free cables on 2-spring jobs</span>
  <span class="free-pill">${I.check} Free safety inspection</span>
  <span class="free-pill">${I.check} Written quote first</span>
</div>`;
}

function openerPicker() {
  const all = [...manifest.primary.map((m) => ({ ...m, primary: true })), ...manifest.secondary.map((m) => ({ ...m, primary: false }))];
  const row = (m) => {
    const price = INSTALL_PRICE[m.sku];
    const pills = m.specs.slice(0, 4).map((sp, i) => `<li class="${i === 0 ? "is-feature" : ""}">${sp}</li>`).join("");
    return `<div class="opener${m.primary ? "" : " opener-extra"}"${m.primary ? "" : " hidden"}>
  <div class="opener__main">
    <img class="opener__img" src="/assets/openers/${m.image}" alt="${m.imageAlt}" loading="lazy" width="150" height="118">
    <div class="opener__info">
      <span class="opener__tag">${m.tag}</span>
      <h3>${m.name}</h3>
      <p class="opener__spec">${m.drive} · ${m.tagline}</p>
      <p class="opener__price">from $${price} <span style="font-size:.8rem;font-weight:600;color:var(--ink-soft)">installed</span></p>
      <ul class="opener__pills">${pills}</ul>
    </div>
  </div>
</div>`;
  };
  return `<h2 id="openers">Pick the right LiftMaster opener</h2>
<p>We install the LiftMaster line-up — the openers we trust on our own calls. Prices are supplied-and-installed, including programming and haul-away of your old unit.</p>
<div class="openers" data-stagger style="margin:1.5rem 0">
${all.map(row).join("\n")}
</div>
<button class="btn btn--ghost openers__toggle" id="openerToggle" aria-expanded="false">View more openers</button>
<p class="muted" style="margin-top:1rem">Not sure which? Tell us what's above the garage (bedroom? nothing?) and how often the door runs — we'll recommend the right one, not the priciest one.</p>`;
}

// ============================ CITY PAGES ============================
function buildCity(c) {
  const crumbs = [{ name: "Home", item: "/" }, { name: "Service Areas", item: "/service-areas/" }, { name: c.name, item: `/service-areas/${c.slug}.html` }];
  const jsonld = [
    breadcrumbLD(crumbs),
    { ...serviceLD({ serviceType: `Garage Door Repair ${c.name}`, desc: c.metaDesc, path: `/service-areas/${c.slug}.html`, minPrice: 129, maxPrice: 419 }), areaServed: { "@type": "City", "name": c.name } },
    faqLD(c.faqs),
  ];
  const nb = c.neighbourhoods.map((n) => `<li>${n}</li>`).join("");
  const svc = SERVICES.slice(0, 6).map((s) => `<a href="/${s.slug}.html">${s.icon} ${s.nav}</a>`).join("");
  const otherCities = CITIES.filter((x) => x.slug !== c.slug).map((x) => `<a href="/service-areas/${x.slug}.html">${I.pin} ${x.name}</a>`).join("");

  const body = `
<main id="main">
${pagehead({ crumbs, h1: c.h1, sub: c.sub, img: c.img })}
<section class="section">
<div class="container">
<div class="layout-split">
  <div class="prose" data-reveal>
    <div class="answer">${c.answer}</div>
    <h2>Garage doors in ${c.name} — what we see</h2>
    ${c.local}
    <h2>Neighbourhoods we cover in ${c.name}</h2>
    <ul class="chips" style="margin-bottom:1.5rem">${nb}</ul>
    <h2>All our services in ${c.name}</h2>
    <div class="area-grid">${svc}</div>
    <div class="review" style="margin:2rem 0"><div class="review__stars">${stars(5)}</div><p>"${c.testimonial.q}"</p><div class="review__who"><b>${c.testimonial.who}</b><br>${c.testimonial.where}</div></div>
    <h2>${c.name} garage door FAQ</h2>
    ${faqBlock(c.faqs)}
    <h2>Other areas we serve</h2>
    <div class="area-grid">${otherCities}</div>
  </div>
  ${quoteAside()}
</div>
</div>
</section>
${ctaBand(`Garage door trouble in ${c.name}?`, `Call or text for a flat written price and a same-day arrival window across ${c.name} and the rest of Greater Vancouver.`)}
</main>`;

  return head({ title: c.seoTitle, desc: c.metaDesc, path: `/service-areas/${c.slug}.html`, ogImg: `/assets/img/${c.img}-desktop-1600.webp`, preloadHero: c.img, jsonld }) + header() + body + footer() + floating() + scripts();
}

// ============================ SERVICE-AREAS HUB ============================
function buildAreasHub() {
  const crumbs = [{ name: "Home", item: "/" }, { name: "Service Areas", item: "/service-areas/" }];
  const cards = CITIES.map((c) => `<a class="card svc-card hover-lift" href="/service-areas/${c.slug}.html">
  <div class="svc-card__media zoom-frame">${picture(c.img, c.h1)}</div>
  <div class="svc-card__body"><h3>${I.pin} ${c.name}</h3><p>${c.sub}</p><span class="card__link">${c.name} garage door repair ${I.arrow}</span></div>
</a>`).join("\n");
  const more = cfg.moreTowns.map((t) => `<li>${t}</li>`).join("");
  const jsonld = [breadcrumbLD(crumbs), businessLD()];
  const body = `
<main id="main">
${pagehead({ crumbs, h1: "Garage Door Repair Across Greater Vancouver", sub: "One honest crew covering the whole Lower Mainland. We've built deep local pages for our busiest cities — and we serve everywhere in between.", img: "city-vancouver" })}
<section class="section">
<div class="container">
  <div class="center" data-reveal><span class="eyebrow">Featured cities</span><h2>Pick your city</h2><p class="lead">Local detail, local pricing, local FAQs — because a Steveston salt-air cable and a Burke Mountain cold-snap spring aren't the same problem.</p></div>
  <div class="grid grid--3" style="margin-top:2.5rem" data-stagger>${cards}</div>
  <div style="margin-top:3rem" data-reveal>
    <h2 class="center">Everywhere else in Metro Vancouver</h2>
    <p class="center lead">We also serve, same-day where we can:</p>
    <ul class="chips" style="justify-content:center;max-width:760px;margin:1.5rem auto 0">${more}</ul>
  </div>
</div>
</section>
${ctaBand("Not sure if you're in our area?", "If you're anywhere in Greater Vancouver, you almost certainly are. Call or text and we'll confirm an arrival window.")}
</main>`;
  return head({ title: "Service Areas — Garage Door Repair Greater Vancouver | Probably Fine", desc: "Probably Fine Garage Doors serves all of Greater Vancouver — Vancouver, Burnaby, Surrey, Richmond, Coquitlam and beyond. Same-day spring, opener, cable & off-track repair.", path: "/service-areas/", preloadHero: "city-vancouver", jsonld }) + header() + body + footer() + floating() + scripts();
}

// ============================ SIMPLE PAGES ============================
function pageShell({ title, desc, path, h1, sub, img, crumbs, inner, jsonld = [], preloadHero }) {
  return head({ title, desc, path, ogImg: img ? `/assets/img/${img}-desktop-1600.webp` : undefined, preloadHero, jsonld }) + header() +
    `<main id="main">${pagehead({ crumbs, h1, sub, img })}${inner}</main>` + footer() + floating() + scripts();
}

function buildAbout() {
  const crumbs = [{ name: "Home", item: "/" }, { name: "About", item: "/about.html" }];
  const inner = `<section class="section"><div class="container"><div class="layout-split">
<div class="prose" data-reveal>
<div class="answer"><p><strong>Probably Fine Garage Doors is a Canadian-owned garage-door repair company serving all of Greater Vancouver.</strong> We do same-day spring, opener, cable and off-track repair, plus new doors and tune-ups — with upfront flat pricing and a fix-it-right-or-we-come-back guarantee. The name's a joke. Everything else is dead serious.</p></div>
<h2>Why "Probably Fine"?</h2>
<p>Every garage-door company in the Lower Mainland sounds exactly the same: trusted, reliable, same-day, licensed and insured. It's a wall of identical promises — and hiding in that wall are the operators the BBB keeps warning about: the $19.99 ad that becomes a four-figure invoice, the unmarked van, the "your whole system needs replacing" upsell on a $200 spring.</p>
<p>We couldn't out-shout them on sounding trustworthy. So we did the opposite. We picked a name you'll actually remember — then backed it with the only things that matter in this trade: honest pricing, trained hands, and a guarantee we honour.</p>
<h2>What you can count on</h2>
<ul>
<li><strong>Canadian-owned and local.</strong> We live and work here; we know the coast eats cheap springs.</li>
<li><strong>Trained technicians.</strong> Real diagnostics, correctly-sized parts, tidy work.</li>
<li><strong>Upfront flat pricing.</strong> Written quote before we start. No mystery fees.</li>
<li><strong>We never joke about the serious stuff</strong> — your safety, our competence, or your money.</li>
<li><strong>Fixed right or we come back free.</strong> Workmanship warranty on every job.</li>
</ul>
<h2>Licensed, insured, and honest about what that means</h2>
<p>Garage-door technician is an <strong>unregulated trade in British Columbia</strong> — there is no provincial trade licence or certificate for it. So when we say "licensed," we mean exactly this: a <strong>municipal business licence</strong>, mandatory <strong>WorkSafeBC</strong> coverage, and commercial liability insurance. We will never imply a trade certification that doesn't exist. That precision is the whole point of who we are.</p>
<p><a class="btn btn--primary" href="tel:${TEL}">${I.phone} Call ${PHONE}</a></p>
</div>
${quoteAside()}
</div></div></section>
${ctaBand("Give the funny name a serious try", "Call or text — flat pricing, same-day service, and a guarantee that isn't a punchline.")}`;
  return pageShell({ title: "About Probably Fine Garage Doors | Greater Vancouver", desc: "Canadian-owned, honest garage door repair across Greater Vancouver. Upfront flat pricing, trained techs, fixed-right guarantee — and a refreshingly silly name. Licensed, insured, WorkSafeBC.", path: "/about.html", h1: "Honestly great. We just have a funny name.", sub: "The story behind Probably Fine — and the very serious promises underneath the joke.", img: "about", preloadHero: "about", crumbs, inner, jsonld: [breadcrumbLD(crumbs), businessLD()] });
}

function buildContact() {
  const crumbs = [{ name: "Home", item: "/" }, { name: "Contact", item: "/contact.html" }];
  const inner = `<section class="section"><div class="container"><div class="layout-split">
<div data-reveal>
<div class="answer"><p><strong>The fastest way to get your garage door fixed is to call or text ${PHONE}.</strong> A real person answers, gives you a flat written price, and books a same-day arrival window wherever we can across Greater Vancouver. Prefer to send details? Use the form and we'll reply quickly.</p></div>
<h2>Request a quote</h2>
<form class="form" id="leadForm" data-endpoint="leads" data-redirect="/thank-you.html">
  <div class="field"><label for="name">Name</label><input id="name" name="name" required autocomplete="name"></div>
  <div class="field--row">
    <div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" required autocomplete="tel"></div>
    <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" autocomplete="email"></div>
  </div>
  <div class="field"><label for="city">City / area</label><input id="city" name="city" placeholder="e.g. Burnaby"></div>
  <div class="field"><label for="issue">What's happening?</label>
    <select id="issue" name="issue">
      <option value="">Choose an issue…</option>
      <option>Broken spring</option><option>Opener not working</option><option>Cable broken/frayed</option>
      <option>Door off-track / stuck</option><option>Noisy / shaky door</option><option>New garage door</option>
      <option>Annual tune-up</option><option>Emergency</option><option>Something else</option>
    </select>
  </div>
  <div class="field"><label for="message">Details (optional)</label><textarea id="message" name="message" placeholder="Tell us what the door's doing…"></textarea></div>
  <button class="btn btn--primary btn--block btn--lg" type="submit">Send request ${I.arrow}</button>
  <p class="form__note">By sending you agree to be contacted about your request. We don't share your details. For emergencies, please call.</p>
  <p class="form__status" id="leadStatus" role="status"></p>
</form>
</div>
<aside class="sticky-aside">
<div class="aside-card">
<h3>Talk to a human</h3>
<div class="btn-row" style="flex-direction:column">
  <a class="btn btn--call btn--block cta-pulse" href="tel:${TEL}">${I.phone} ${PHONE}</a>
  <a class="btn btn--primary btn--block" href="${SMS}">${I.msg} Text us</a>
  <a class="btn btn--ghost btn--block" href="mailto:${EMAIL}">✉ ${EMAIL}</a>
</div>
<hr style="border:none;border-top:1px solid var(--line);margin:1.2rem 0">
<p><strong>Hours:</strong> Mon–Sun, 7am–8pm</p>
<p><strong>Area:</strong> All of Greater Vancouver, BC</p>
<p class="muted">${I.shield} ${trustMicroline()}</p>
</div>
</aside>
</div></div></section>`;
  return pageShell({ title: "Contact Probably Fine Garage Doors | Call 778-800-0769", desc: "Call or text 778-800-0769 for same-day garage door repair across Greater Vancouver, or request a quote online. Flat pricing, real human, fast reply.", path: "/contact.html", h1: "Contact us", sub: "Call, text, email, or send the form — whichever's easiest. We answer fast.", img: "emergency", preloadHero: "emergency", crumbs, inner, jsonld: [breadcrumbLD(crumbs), businessLD()] });
}

function buildFaq() {
  const crumbs = [{ name: "Home", item: "/" }, { name: "FAQ", item: "/faq.html" }];
  const faqs = [
    { q: "Is the name a joke?", a: "Yes — the name is the only thing we don't take seriously. We're genuinely great; the name just makes you remember us. We never joke about your safety, our competence, or your money." },
    { q: "How much does garage door repair cost in Greater Vancouver?", a: `Most repairs are flat-priced: single spring $${cfg.springPricing.singleSpring.price}, two springs with free cables $${cfg.springPricing.twoSpringsNewCables.price}, two high-cycle springs $${cfg.springPricing.twoSpringsHighCycle.price}, cable repair from $${cfg.otherPricing.cableRepairFrom}, off-track from $${cfg.otherPricing.offTrackFrom}, opener repair from $${cfg.otherPricing.openerRepairFrom}, tune-up from $${cfg.otherPricing.tuneUpFrom}. You always get a written quote first.` },
    { q: "Do you offer same-day service?", a: "Most of the time, yes — broken springs and stuck doors are our most common same-day calls. Call or text early for the best chance at a same-day window." },
    { q: "Is it safe to fix a garage door spring myself?", a: "We strongly advise against it. Torsion springs store enormous energy and regularly injure DIYers. This is the one job where 'probably fine' truly isn't — leave the winding bars to insured pros." },
    { q: "Are you licensed and insured?", a: "Yes: a municipal business licence, WorkSafeBC coverage, and commercial liability insurance. Garage-door work is an unregulated trade in BC, so we're precise — we never imply a trade certificate that doesn't exist." },
    { q: "What's your guarantee?", a: "Fixed right or we come back free. Every repair carries a workmanship warranty, and parts are manufacturer-warrantied." },
    { q: "How do I avoid a garage-door scam?", a: "Watch for $19.99 'too good to be true' ads, unmarked vans, no written quote, and pressure to replace the whole system over a small repair. Insist on an upfront written price — which is exactly how we work, every time." },
    { q: "What brands do you work on?", a: "All major opener brands — LiftMaster, Chamberlain, Genie, Marantec, Craftsman — and all common door makes. We install the LiftMaster line-up on new openers." },
    { q: "Do you do commercial or strata work?", a: "Yes — we service residential, strata, and light commercial overhead doors across Metro Vancouver. Ask about multi-door rates for stratas and rental properties." },
    { q: "What areas do you cover?", a: "All of Greater Vancouver: Vancouver, Burnaby, Surrey, Richmond, Coquitlam and the Tri-Cities, New Westminster, the North Shore, Delta, Langley, Maple Ridge, Pitt Meadows and White Rock." },
  ];
  const inner = `<section class="section"><div class="container">
<div class="center" data-reveal><span class="eyebrow">FAQ</span><h2>Everything you might be wondering</h2><p class="lead">Straight answers about pricing, timing, safety, and — yes — the name.</p></div>
<div style="margin-top:2rem">${faqBlock(faqs)}</div>
</div></section>
${ctaBand("Still have a question?", "The quickest answer is a phone call. We're happy to talk you through it before you book a thing.")}`;
  return pageShell({ title: "Garage Door FAQ — Pricing, Timing & Safety | Probably Fine", desc: "Honest answers about garage door repair cost, same-day service, spring safety, licensing, guarantees and scam-avoidance across Greater Vancouver.", path: "/faq.html", h1: "Frequently asked questions", sub: "Honest answers — including whether the name is a joke (it is).", img: "maintenance", preloadHero: "maintenance", crumbs, inner, jsonld: [breadcrumbLD(crumbs), faqLD(faqs)] });
}

function buildPartner() {
  const crumbs = [{ name: "Home", item: "/" }, { name: "Become a Partner", item: "/become-a-partner.html" }];
  const inner = `<section class="section"><div class="container"><div class="layout-split">
<div data-reveal>
<div class="answer"><p><strong>We get more calls than we can take — and we'd rather send the overflow to a vetted local pro than leave a homeowner waiting.</strong> If you're an independent technician or a garage-door / trades company in Greater Vancouver with capacity, apply below to receive vetted overflow leads in your area.</p></div>
<h2>How the partner program works</h2>
<ul>
<li><strong>You tell us your trade and your area.</strong> We match overflow jobs near you.</li>
<li><strong>Real jobs, real homeowners.</strong> These are calls we genuinely can't get to fast enough.</li>
<li><strong>You keep our standard.</strong> Upfront pricing, tidy work, no scammy upsells — that's the deal.</li>
<li><strong>No lock-in.</strong> Take the jobs that fit your schedule.</li>
</ul>
<h2>Apply to become a partner</h2>
<form class="form" id="partnerForm" data-endpoint="partners" data-redirect="/thank-you.html?p=1">
  <div class="field--row">
    <div class="field"><label for="pname">Your name</label><input id="pname" name="name" required autocomplete="name"></div>
    <div class="field"><label for="pcompany">Company (if any)</label><input id="pcompany" name="company" autocomplete="organization"></div>
  </div>
  <div class="field"><label for="ptrade">Trade / service</label><input id="ptrade" name="trade" placeholder="e.g. garage doors, handyman, electrician" required></div>
  <div class="field"><label for="parea">Service area</label><input id="parea" name="service_area" placeholder="e.g. Surrey, Langley" required></div>
  <div class="field--row">
    <div class="field"><label for="pphone">Phone</label><input id="pphone" name="phone" type="tel" required autocomplete="tel"></div>
    <div class="field"><label for="pemail">Email</label><input id="pemail" name="email" type="email" required autocomplete="email"></div>
  </div>
  <div class="field"><label for="pcap">Capacity / notes</label><textarea id="pcap" name="notes" placeholder="How many jobs a week can you take? Tickets, insurance, WorkSafeBC?"></textarea></div>
  <button class="btn btn--primary btn--block btn--lg" type="submit">${I.handshake} Apply to partner</button>
  <p class="form__note">We'll review and get back to you. Applying doesn't guarantee leads — we match by area, capacity and standards.</p>
  <p class="form__status" id="partnerStatus" role="status"></p>
</form>
</div>
<aside class="sticky-aside"><div class="aside-card">
<div class="card__icon">${I.handshake}</div>
<h3>Vetted overflow, not lead-spam</h3>
<p>We don't sell the same lead to ten companies. Overflow goes to partners who hold our pricing-and-quality standard, by area.</p>
<p class="muted">Questions? <a href="mailto:${EMAIL}">${EMAIL}</a> or call ${PHONE}.</p>
</div></aside>
</div></div></section>`;
  return pageShell({ title: "Become a Partner — Overflow Garage Door Leads | Probably Fine", desc: "Independent techs & trades companies in Greater Vancouver: apply to receive vetted overflow garage-door leads from Probably Fine. Real jobs, no lock-in.", path: "/become-a-partner.html", h1: "Become a Partner", sub: cfg.partnerProgram.headline + " across Greater Vancouver.", img: "partner", preloadHero: "partner", crumbs, inner, jsonld: [breadcrumbLD(crumbs)] });
}

function buildThankYou() {
  const inner = `<section class="section"><div class="container center" style="max-width:640px" data-reveal>
<div class="card__icon" style="margin:0 auto 1.5rem;width:64px;height:64px">${I.check}</div>
<h1>Thanks — we've got it.</h1>
<p class="lead" style="margin-inline:auto">Your request is in. A real human from Probably Fine will get back to you shortly. If it's urgent — a broken spring or a door that won't close — please call us now so we can prioritise it.</p>
<div class="btn-row" style="justify-content:center;margin-top:2rem">
  <a class="btn btn--primary btn--lg" href="tel:${TEL}">${I.phone} Call ${PHONE}</a>
  <a class="btn btn--ghost btn--lg" href="/">Back to home</a>
</div>
<p class="muted" style="margin-top:2rem">${I.shield} ${trustMicroline()}</p>
</div></section>`;
  return head({ title: "Thank You | Probably Fine Garage Doors", desc: "Thanks for contacting Probably Fine Garage Doors. We'll be in touch shortly.", path: "/thank-you.html", jsonld: [], noindex: true }) +
    header() + `<main id="main">${inner}</main>` + footer() + floating() + scripts();
}

function buildLegal(kind) {
  const isPriv = kind === "privacy";
  const crumbs = [{ name: "Home", item: "/" }, { name: isPriv ? "Privacy Policy" : "Terms of Service", item: isPriv ? "/privacy-policy.html" : "/terms-of-service.html" }];
  const priv = `<h2>Privacy Policy</h2>
<p><em>Last updated: ${new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}.</em></p>
<p>${cfg.brandName} ("we", "us") respects your privacy. This policy explains what we collect and why.</p>
<h3>What we collect</h3><p>When you call, text, email, or submit a form, we collect the details you provide — name, phone, email, address/area, and a description of your garage-door issue — solely to respond to your request and provide service.</p>
<h3>How we use it</h3><p>We use your information to contact you, provide quotes and service, and keep records of work performed. We do not sell your personal information. We may use a database provider to securely store form submissions.</p>
<h3>Cookies &amp; analytics</h3><p>This site uses minimal cookies. We may use privacy-respecting analytics to understand traffic. We do not run intrusive ad-tracking.</p>
<h3>Your choices</h3><p>You can ask us to access or delete the information you've given us at any time by emailing <a href="mailto:${EMAIL}">${EMAIL}</a>.</p>
<h3>Contact</h3><p>Questions? Email <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="tel:${TEL}">${PHONE}</a>.</p>`;
  const terms = `<h2>Terms of Service</h2>
<p><em>Last updated: ${new Date().toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}.</em></p>
<p>These terms govern your use of this website and the services of ${cfg.brandName}.</p>
<h3>Quotes &amp; pricing</h3><p>Prices shown on this site are honest estimates for typical jobs in Greater Vancouver. The price for your specific job is the written quote we provide before work begins. We do not begin chargeable work without your approval.</p>
<h3>Workmanship guarantee</h3><p>We stand behind our work: if a repair we performed fails due to our workmanship within the warranty period, we will return and correct it at no labour charge. Parts are covered by their manufacturer warranties.</p>
<h3>Licensing</h3><p>Garage-door technician is an unregulated trade in British Columbia. We hold a municipal business licence, WorkSafeBC coverage, and commercial liability insurance. We do not claim a provincial trade certificate, as none exists for this trade.</p>
<h3>Liability</h3><p>We are not liable for pre-existing damage, or for damage caused by continuing to operate a door we have advised you not to use. Always follow our safety guidance.</p>
<h3>Contact</h3><p>Email <a href="mailto:${EMAIL}">${EMAIL}</a> or call <a href="tel:${TEL}">${PHONE}</a>.</p>`;
  const inner = `<section class="section"><div class="container"><div class="prose" style="max-width:780px;margin-inline:auto" data-reveal>${isPriv ? priv : terms}</div></div></section>`;
  return pageShell({ title: `${isPriv ? "Privacy Policy" : "Terms of Service"} | ${cfg.brandName}`, desc: `${isPriv ? "Privacy policy" : "Terms of service"} for ${cfg.brandName}, serving Greater Vancouver.`, path: isPriv ? "/privacy-policy.html" : "/terms-of-service.html", h1: isPriv ? "Privacy Policy" : "Terms of Service", sub: "", crumbs, inner, jsonld: [breadcrumbLD(crumbs)] });
}

function build404() {
  const inner = `<section class="section"><div class="container center" style="max-width:620px" data-reveal>
<p class="eyebrow">404 — but it's probably fine</p>
<h1>This page is off its track.</h1>
<p class="lead" style="margin-inline:auto">We couldn't find what you were looking for. Your garage door, however, we can definitely find — and fix.</p>
<div class="btn-row" style="justify-content:center;margin-top:2rem">
  <a class="btn btn--primary btn--lg" href="/">Back to home</a>
  <a class="btn btn--ghost btn--lg" href="tel:${TEL}">${I.phone} Call ${PHONE}</a>
</div>
</div></section>`;
  return head({ title: "Page not found | Probably Fine Garage Doors", desc: "That page is off its track. Head back home or call us for same-day garage door repair across Greater Vancouver.", path: "/404.html", noindex: true }) +
    header() + `<main id="main">${inner}</main>` + footer() + floating() + scripts();
}

// ============================ STATIC FILES ============================
function buildRobots() {
  return `# robots.txt — ${cfg.domain}
User-agent: *
Allow: /

# AI search / answer engines (drive citations) — allowed
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Claude-SearchBot
Allow: /
User-agent: Applebot
Allow: /
User-agent: Bingbot
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /

Sitemap: ${BASE}/sitemap.xml
`;
}

function buildSitemap(urls) {
  const today = new Date().toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${BASE}${u}</loc><lastmod>${today}</lastmod></url>`).join("\n")}
</urlset>
`;
}

function buildFavicon() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="12" fill="#0d4eb8"/><g fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"><rect x="14" y="14" width="36" height="36" rx="2"/><line x1="14" y1="26" x2="50" y2="26"/><line x1="14" y1="38" x2="50" y2="38"/></g><circle cx="46" cy="46" r="9" fill="#f4b400" stroke="#0d4eb8" stroke-width="2"/></svg>`;
}

function buildManifest() {
  return JSON.stringify({ name: cfg.brandName, short_name: "Probably Fine", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#0d4eb8", icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }] });
}

function buildHumans() {
  return `/* TEAM */
Probably Fine Garage Doors — honest garage-door repair across Greater Vancouver.
Contact: ${EMAIL}
Phone: ${PHONE}

/* SITE */
Standards: HTML5, CSS3, vanilla JS, Motion (motion.dev)
Built: ${new Date().getFullYear()} · Static, no build step, deployed on Hostinger.
The name is a joke. The work is not.
`;
}

// ============================ RUN ============================
console.log("Building Probably Fine Garage Doors…");
write("index.html", buildHome());
const urls = ["/"];
for (const s of SERVICES) { write(`${s.slug}.html`, buildService(s)); urls.push(`/${s.slug}.html`); }
write("service-areas/index.html", buildAreasHub()); urls.push("/service-areas/");
for (const c of CITIES) { write(`service-areas/${c.slug}.html`, buildCity(c)); urls.push(`/service-areas/${c.slug}.html`); }
write("about.html", buildAbout()); urls.push("/about.html");
write("contact.html", buildContact()); urls.push("/contact.html");
write("faq.html", buildFaq()); urls.push("/faq.html");
write("become-a-partner.html", buildPartner()); urls.push("/become-a-partner.html");
write("privacy-policy.html", buildLegal("privacy")); urls.push("/privacy-policy.html");
write("terms-of-service.html", buildLegal("terms")); urls.push("/terms-of-service.html");
write("thank-you.html", buildThankYou());
write("404.html", build404());
write("robots.txt", buildRobots());
write("sitemap.xml", buildSitemap(urls));
write("favicon.svg", buildFavicon());
write("site.webmanifest", buildManifest());
write("humans.txt", buildHumans());
console.log(`Done — ${urls.length} indexable pages + supporting files.`);
