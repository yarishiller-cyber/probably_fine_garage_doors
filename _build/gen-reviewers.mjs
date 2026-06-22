#!/usr/bin/env node
/**
 * gen-reviewers.mjs — candid reviewer headshots (FLEET-STANDARDS §6 reviewer recipe).
 * Generates a square ~256px circular-ready webp per reviewer, matching the reviewer's
 * name-origin ethnicity + sex. Non-AI-looking (film stock + 85mm + imperfections + negatives).
 * Idempotent: skips a reviewer whose final webp already exists.
 *
 * Usage: GEMINI_API_KEY=... node _build/gen-reviewers.mjs
 * Requires: nano-banana.mjs (Gemini) + cwebp on PATH.
 */
import { existsSync, mkdirSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) { console.error("GEMINI_API_KEY not set"); process.exit(1); }

const NANO = "/home/user/garagedoors-shared/tools/nano-banana.mjs";
const OUT = "assets/img";
const SRC = "_tmp/rev";
mkdirSync(OUT, { recursive: true });
mkdirSync(SRC, { recursive: true });

const REALISM =
  "candid amateur smartphone headshot, an ordinary everyday person (not a model, not a stock " +
  "photo), at home or outdoors, shot on 85mm f/1.8, Kodak Portra 400 film, natural film grain, " +
  "soft overcast Pacific-Northwest daylight, true-to-life skin with visible pores and minor " +
  "imperfections, slight sensor noise, natural depth of field, slightly imperfect amateur framing";
const NEG =
  "no plastic or waxy skin, no over-smoothing, no CGI or 3D-render look, no cartoon, no warped " +
  "hands or extra fingers, no unnatural symmetry, no text or watermark, no over-saturation, " +
  "no HDR glow, not a glamour or studio portrait";

// slug, description (ethnicity + sex matched to the reviewer's name origin)
const REVIEWERS = [
  ["rev-daniel", "a 40-year-old white Canadian man with short brown hair and light stubble, friendly relaxed expression, casual jacket"],
  ["rev-marcus", "a 45-year-old white Canadian man with greying short hair and a trimmed beard, warm easygoing smile, casual shirt"],
  ["rev-priya", "a 35-year-old South Asian (Indian) woman with long dark hair, warm genuine smile, casual top"],
  ["rev-grace", "a 38-year-old East Asian (Chinese-Canadian) woman with shoulder-length black hair, calm friendly expression, casual sweater"],
  ["rev-kevin", "a 50-year-old white Canadian man with short greying hair, weathered outdoorsy face, plaid shirt"],
];

let made = 0;
for (const [slug, who] of REVIEWERS) {
  const finalWebp = `${OUT}/${slug}-256.webp`;
  if (existsSync(finalWebp)) { console.log(`  · skip ${slug}`); continue; }
  const png = `${SRC}/${slug}.png`;
  const prompt = `Close head-and-shoulders portrait of ${who}, looking at the camera. ${REALISM}. ${NEG}.`;
  console.log(`→ ${slug}`);
  try {
    execFileSync("node", [NANO, prompt, png], { stdio: "inherit", env: process.env });
    // square crop centre + resize to 256 + webp via cwebp (crop assumes ~1:1 source)
    execFileSync("cwebp", ["-q", "82", "-resize", "256", "256", png, "-o", finalWebp], { stdio: "inherit" });
    made++;
  } catch (e) { console.log(`  ✗ ${slug}: ${e.message}`); }
}
try { rmSync(SRC, { recursive: true, force: true }); } catch {}
console.log(`Done. ${made} reviewer photo(s).`);
