/**
 * motion.js — the fleet's animation layer (bulletproof reveal).
 *
 * Built on Motion (https://motion.dev) loaded from a CDN — same engine as Framer Motion,
 * vanilla, no build step. Animates with declarative data-* attributes.
 *
 * HARD RULE: content must NEVER stay hidden. Earlier versions hid [data-reveal] elements at
 * opacity:0 and only revealed them when an IntersectionObserver threshold was met — which
 * never happened for elements taller than the viewport (e.g. a long article column), leaving
 * whole page bodies blank on real phones. This version:
 *   - never hides an element that's already in the viewport or taller than ~85% of it,
 *   - triggers as soon as an element's edge enters (low threshold),
 *   - and runs a failsafe timer that force-reveals anything still hidden.
 *
 * USAGE (per site): load Motion + this file before </body>:
 *   <script type="module">
 *     import { animate, inView, scroll, stagger } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";
 *     window.__motion = { animate, inView, scroll, stagger };
 *     import("./js/motion.js").then(m => m.initMotion());
 *   </script>
 *
 * Attributes: data-reveal[="left|right|down"], data-reveal-delay, data-stagger, data-parallax.
 * Accessibility: everything is skipped under prefers-reduced-motion: reduce.
 */

const REDUCED = typeof window !== "undefined"
  && window.matchMedia
  && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const REVEAL_OFFSETS = {
  up:    { y: 24,  x: 0  },
  down:  { y: -24, x: 0  },
  left:  { x: 32,  y: 0  },
  right: { x: -32, y: 0  },
  none:  { x: 0,   y: 0  },
};

function showEl(el) { el.style.opacity = "1"; el.style.transform = "none"; }
function showChildren(parent) { Array.from(parent.children).forEach((c) => { c.style.opacity = "1"; c.style.transform = "none"; }); }

export function initMotion() {
  const M = (typeof window !== "undefined" && window.__motion) || null;

  // No Motion (CDN blocked) or reduced-motion → show everything immediately.
  if (!M || REDUCED) {
    document.querySelectorAll("[data-reveal]").forEach(showEl);
    document.querySelectorAll("[data-stagger]").forEach(showChildren);
    return;
  }

  const { animate, inView, scroll } = M;
  const vh = () => window.innerHeight || document.documentElement.clientHeight;

  // --- Scroll reveals -------------------------------------------------------------------
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    const dir = el.getAttribute("data-reveal") || "up";
    const off = REVEAL_OFFSETS[dir] || REVEAL_OFFSETS.up;
    const delay = parseFloat(el.getAttribute("data-reveal-delay") || "0");
    const r = el.getBoundingClientRect();

    // Already visible on load, or too tall to ever cross a threshold → just show it.
    const alreadyVisible = r.top < vh() && r.bottom > 0;
    const tooTall = r.height > vh() * 0.85;
    if (alreadyVisible || tooTall) { showEl(el); return; }

    el.style.opacity = "0";
    el.style.transform = `translate(${off.x}px, ${off.y}px)`;
    let done = false;
    const run = () => { if (done) return; done = true; animate(el, { opacity: 1, transform: "translate(0px, 0px)" }, { duration: 0.6, delay, easing: [0.16, 1, 0.3, 1] }); };
    inView(el, run, { amount: 0.01, margin: "0px 0px -10% 0px" });
  });

  // --- Staggered children ---------------------------------------------------------------
  document.querySelectorAll("[data-stagger]").forEach((parent) => {
    const children = Array.from(parent.children);
    const step = parseFloat(parent.getAttribute("data-stagger") || "0.08") || 0.08;
    children.forEach((c) => { c.style.opacity = "0"; c.style.transform = "translateY(20px)"; });
    let done = false;
    const run = () => {
      if (done) return; done = true;
      children.forEach((c, i) => animate(c, { opacity: 1, transform: "translateY(0px)" }, { duration: 0.55, delay: i * step, easing: [0.16, 1, 0.3, 1] }));
    };
    inView(parent, run, { amount: 0.01, margin: "0px 0px -8% 0px" });
  });

  // --- Subtle parallax ------------------------------------------------------------------
  // Images carry CSS `transform:scale(1.08)` so the translate never reveals an edge; we bake
  // that scale into the inline transform here (inline style would otherwise clobber the CSS).
  document.querySelectorAll("[data-parallax]").forEach((el) => {
    const intensity = parseFloat(el.getAttribute("data-parallax") || "0.2") || 0.2;
    const scale = el.classList.contains("parallax") ? " scale(1.08)" : "";
    scroll(
      (progress) => { el.style.transform = `translateY(${(progress - 0.5) * intensity * 120}px)${scale}`; },
      { target: el, offset: ["start end", "end start"] }
    );
  });

  // --- FAILSAFE: never leave content hidden --------------------------------------------
  setTimeout(() => {
    document.querySelectorAll("[data-reveal]").forEach((el) => { if (parseFloat(getComputedStyle(el).opacity) < 0.99) showEl(el); });
    document.querySelectorAll("[data-stagger]").forEach((p) => { Array.from(p.children).forEach((c) => { if (parseFloat(getComputedStyle(c).opacity) < 0.99) { c.style.opacity = "1"; c.style.transform = "none"; } }); });
  }, 1600);
}

// Auto-init if Motion is already present when this module loads.
if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { if (window.__motion) initMotion(); });
  } else if (window.__motion) {
    initMotion();
  }
}
