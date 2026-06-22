#!/usr/bin/env node
/**
 * regen-hero-og.mjs — regenerate the home hero (mobile portrait + desktop landscape)
 * and build a real 1200x630 OG image from it. FLEET-STANDARDS §5 + §6.
 * Uses the van-ref anchor (--ref) for van/uniform consistency, the §6 non-AI recipe,
 * and cwebp for responsive crops (sharp not installed in this env).
 */
import { existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) { console.error("GEMINI_API_KEY not set"); process.exit(1); }

const NANO = "/home/user/garagedoors-shared/tools/nano-banana.mjs";
const REF = "assets/brand/van-ref.png";
const OUT = "assets/img";
const SRC = "_tmp/src";
mkdirSync(OUT, { recursive: true });
mkdirSync(SRC, { recursive: true });
mkdirSync("og", { recursive: true });

const RECIPE =
  "candid documentary photograph, shot on Canon EOS R6, 35mm f/1.8 lens, ISO 400, " +
  "shot on Kodak Portra 400 film, natural film grain. Overcast Pacific-Northwest daylight, " +
  "soft natural light, realistic shadows, natural colour grading. True-to-life textures, " +
  "visible skin pores and imperfections, slight sensor noise, natural depth of field, " +
  "slightly imperfect amateur framing.";
const BRAND =
  "Keep the SAME van wrap, SAME navy-blue uniform and SAME brand colours as the reference image: " +
  "a service van wrapped confident blue with an amber accent stripe reading 'Probably Fine " +
  "Garage Doors' and 'info@probablyfinegaragedoors.ca' in small clean white text, BC plate; " +
  "the technician wears a navy work jacket and navy cap.";
const NEG =
  "no plastic or waxy skin, no over-smoothing, no CGI/3D-render look, no cartoon, no warped " +
  "hands or extra fingers, no unnatural symmetry, no text artifacts, no over-saturation, " +
  "no HDR glow, not a stock photo.";

const SCENE =
  "A residential Greater Vancouver driveway with a wide-open sectional garage door clearly " +
  "visible, the blue-wrapped service van parked in the driveway, and a friendly technician in " +
  "navy uniform standing beside the van holding a tool. All three are clearly in frame: the " +
  "open garage door, the branded van, and the technician.";

const srcPng = `${SRC}/home-hero-new.png`;
const prompt = `${SCENE} ${RECIPE} ${BRAND} ${NEG}`;
console.log("→ generating new home hero");
execFileSync("node", [NANO, prompt, srcPng, "--ref", REF], { stdio: "inherit", env: process.env });

// responsive hero crops via cwebp (gravity centre; source is landscape-ish)
const variants = [
  ["home-hero-desktop-1600.webp", 1600],
  ["home-hero-desktop-960.webp", 960],
  ["home-hero-mobile-960.webp", 960],
  ["home-hero-mobile-480.webp", 480],
];
for (const [file, w] of variants) {
  execFileSync("cwebp", ["-q", "82", "-resize", String(w), "0", srcPng, "-o", `${OUT}/${file}`], { stdio: "inherit" });
}

// OG image 1200x630 — read PNG IHDR for source dims, scale width to 1200, centre-crop to 630 tall.
import { readFileSync } from "node:fs";
const buf = readFileSync(srcPng);
const W = buf.readUInt32BE(16), H = buf.readUInt32BE(20);
// scale so width=1200
const scaleH = Math.round(H * (1200 / W));
const tmpScaled = `${SRC}/og-scaled.webp`;
execFileSync("cwebp", ["-q", "88", "-resize", "1200", "0", srcPng, "-o", tmpScaled], { stdio: "inherit" });
// crop 1200x630 from the vertical centre of the scaled webp
const top = Math.max(0, Math.round((scaleH - 630) / 2));
execFileSync("cwebp", ["-q", "88", "-crop", "0", String(top), "1200", "630", tmpScaled, "-o", "og/home.webp"], { stdio: "inherit" });
// also a jpg fallback for max social compatibility
try { execFileSync("dwebp", ["og/home.webp", "-o", `${SRC}/og.png`], { stdio: "inherit" });
  execFileSync("cwebp", ["-q", "90", `${SRC}/og.png`, "-o", "og/home-1200x630.webp"], { stdio: "inherit" }); } catch {}
console.log("Done: home hero (4 variants) + og/home.webp (1200x630).");
