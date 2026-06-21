#!/usr/bin/env node
/**
 * gen-images.mjs — Probably Fine Garage Doors image pipeline.
 *
 * 1. Generates each source scene once with Nano Banana (Gemini 2.5 Flash Image),
 *    reusing assets/brand/van-ref.png as a --ref so the van wrap / uniform / colours
 *    stay identical across the whole site (BRAND-IMAGERY.md).
 * 2. Crops every ~1:1 source into art-directed DUAL hero variants via sharp:
 *      - desktop landscape 16:9  -> <name>-desktop-1600.webp / -960.webp
 *      - mobile portrait  4:5    -> <name>-mobile-960.webp  / -480.webp
 *    so each page can serve a true <picture> (SITE-REQUIREMENTS §3) with no extra API calls.
 * Idempotent: skips a scene whose final webp already exists; keep reruns cheap.
 *
 * Usage: GEMINI_API_KEY=... node _build/gen-images.mjs
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import sharp from "sharp";

const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = process.env.GEMINI_IMAGE_MODEL || "gemini-2.5-flash-image";
if (!API_KEY) { console.error("GEMINI_API_KEY not set"); process.exit(1); }

const OUT = "assets/img";
const SRC = "_tmp/src";
mkdirSync(OUT, { recursive: true });
mkdirSync(SRC, { recursive: true });

const STYLE =
  "photorealistic documentary photograph shot on 35mm, natural Pacific-Northwest daylight, " +
  "soft overcast sky, realistic skin texture and worn materials, candid, true-to-life ordinary " +
  "working people (not models), no studio lighting, no retouching, no text overlays";

const BRAND =
  "the technician wears a navy-blue work jacket with a small amber chest logo and a navy cap; " +
  "the service van is a white Ford Transit wrapped in confident blue with an amber accent stripe, " +
  "'Probably Fine Garage Doors' on the side and 'info@probablyfinegaragedoors.ca' below it in small " +
  "clean text, BC licence plate; brand colours are blue and amber; SAME van wrap, SAME uniform, " +
  "SAME brand colours as the reference image";

const REF = "assets/brand/van-ref.png";

// name, scene, useRef (whether to pass the brand reference)
const SCENES = [
  ["home-hero",
    "An ordinary friendly Canadian garage-door technician beside the wrapped service van in the " +
    "driveway of a Vancouver craftsman house with an open double garage door, overcast morning, wide composition", true],
  ["spring",
    "Close realistic shot of a technician's gloved hands replacing a broken torsion spring on the " +
    "steel shaft above a residential garage door, real cluttered garage interior, worn work gloves", true],
  ["opener-repair",
    "A technician on a step ladder inspecting a ceiling-mounted garage-door opener motor unit inside " +
    "a real home garage, natural light from the open door", true],
  ["opener-install",
    "A technician on a ladder fitting a new white garage-door opener motor to the garage ceiling rail, " +
    "tools on the floor, real residential garage", true],
  ["cable",
    "Close shot of a technician's gloved hands repairing a frayed steel garage-door cable beside the " +
    "cable drum and bottom bracket, real garage interior", true],
  ["off-track",
    "A technician realigning a residential garage door that has come off its metal track, rollers and " +
    "track visible, focused work, real garage", true],
  ["roller",
    "Close detail of a technician replacing worn nylon rollers in the vertical track of a garage door, " +
    "hands and tools in frame", true],
  ["new-door",
    "A beautiful finished modern sectional garage door newly installed on a Vancouver home, the wrapped " +
    "service van parked in the driveway, overcast PNW daylight, real-estate composition", true],
  ["maintenance",
    "A technician with a clipboard performing an annual tune-up, lubricating the springs and hinges of " +
    "a residential garage door, methodical, real garage", true],
  ["emergency",
    "The wrapped service van parked outside a Vancouver home at dusk with the garage light on and door " +
    "half open, technician with a flashlight, calm and reassuring not dramatic", true],
  ["partner",
    "Two ordinary blue-collar tradespeople shaking hands beside the wrapped blue service van in a driveway, " +
    "genuine candid moment, overcast daylight", true],
  ["about",
    "A small friendly crew of two ordinary garage-door technicians standing relaxed beside the wrapped " +
    "service van, candid, real people of different ages", true],
  ["city-vancouver",
    "The wrapped service van parked on a leafy Vancouver residential street of craftsman and character " +
    "homes, North Shore mountains faintly in the distance, overcast daylight", true],
  ["city-burnaby",
    "The wrapped service van parked on a Burnaby residential street with a mix of mid-century houses and " +
    "newer townhomes on a hillside, overcast daylight", true],
  ["city-surrey",
    "The wrapped service van parked in front of a newer Surrey suburban family home with a wide driveway " +
    "and double garage, overcast daylight", true],
  ["city-richmond",
    "The wrapped service van parked on a flat Richmond residential street of newer homes under a big open " +
    "delta sky, overcast daylight", true],
  ["city-coquitlam",
    "The wrapped service van parked on a Coquitlam street backing onto forested green mountains of the " +
    "Tri-Cities, overcast daylight", true],
];

async function generate(name, scene, useRef) {
  const srcPath = `${SRC}/${name}.png`;
  if (existsSync(srcPath)) return srcPath;
  const prompt = `${scene}. ${STYLE}. ${BRAND}.`;
  const parts = [{ text: prompt }];
  if (useRef && existsSync(REF)) {
    parts.push({ inlineData: { mimeType: "image/png", data: readFileSync(REF).toString("base64") } });
  }
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-goog-api-key": API_KEY },
        body: JSON.stringify({ contents: [{ parts }] }),
      });
      if (!res.ok) throw new Error(`API ${res.status}: ${(await res.text()).slice(0, 200)}`);
      const data = await res.json();
      const outParts = data?.candidates?.[0]?.content?.parts || [];
      const img = outParts.find((p) => p.inlineData?.data);
      if (!img) throw new Error("no image returned");
      writeFileSync(srcPath, Buffer.from(img.inlineData.data, "base64"));
      console.log(`  ✓ generated ${name}`);
      return srcPath;
    } catch (e) {
      console.log(`  … ${name} attempt ${attempt} failed: ${e.message}`);
      if (attempt === 3) return null;
      await new Promise((r) => setTimeout(r, attempt * 2000));
    }
  }
}

async function crops(name, srcPath) {
  const variants = [
    [`${name}-desktop-1600.webp`, 1600, 900],
    [`${name}-desktop-960.webp`, 960, 540],
    [`${name}-mobile-960.webp`, 960, 1200],
    [`${name}-mobile-480.webp`, 480, 600],
  ];
  for (const [file, w, h] of variants) {
    const dest = `${OUT}/${file}`;
    if (existsSync(dest)) continue;
    await sharp(srcPath)
      .resize(w, h, { fit: "cover", position: sharp.strategy.attention })
      .webp({ quality: 80 })
      .toFile(dest);
  }
}

let made = 0;
for (const [name, scene, useRef] of SCENES) {
  const finalCheck = `${OUT}/${name}-desktop-1600.webp`;
  if (existsSync(finalCheck)) { continue; }
  console.log(`→ ${name}`);
  const src = await generate(name, scene, useRef);
  if (!src) { console.log(`  ✗ skipped ${name} (generation failed)`); continue; }
  await crops(name, src);
  made++;
}
console.log(`Done. ${made} new scene(s) processed.`);
