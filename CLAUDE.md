# CLAUDE.md — Probably Fine Garage Doors (site-specific)

> The METHOD lives in `_shared/CLAUDE.md` + `_shared/playbooks/`. This file holds the SPECIFICS.
> (`_shared/` = the `garagedoors-shared` repo mounted alongside this one.)

## This site
- **Brand:** Probably Fine Garage Doors
- **Domain:** probablyfinegaragedoors.ca · deploys to Hostinger via Git push to `main`.
- **Email:** info@probablyfinegaragedoors.ca
- **Phone (temporary):** 778-800-0769 → `tel:+17788000769`
- **Coverage model:** `gva-wide` — serves ALL of Greater Vancouver. Hub + a unique page per
  major GVA city. Built first: Vancouver, Burnaby, Surrey, Richmond, Coquitlam.
- **Emphasis:** residential.
- **Primary keyword:** garage door repair Greater Vancouver.

## Identity (distinct from siblings — logged in `_shared/sites-registry.md`)
- **Voice:** deadpan-reassuring / dry. "We're not 'probably' fine. We're genuinely great."
  Resolve the joke instantly, pair every laugh with a hard trust signal. Never joke about
  safety, competence, or the customer's money.
- **Palette:** confident blue `#1f6feb` + amber `#f4b400`.
- **Type:** Space Grotesk headings / Inter body.
- **Layout:** layout-a, varied — confident centered hero + a deadpan "Door Status: probably
  fine ✓" check-card device; crisp/snappy motion.
- **Compliance wording:** "Licensed (business licence), insured & WorkSafeBC-covered" — never
  imply a garage-door trade certificate (unregulated trade in BC).

## Build
- Static HTML/CSS/vanilla JS only, no build step at deploy. Pages are generated locally by
  `_build/generate.mjs` (data → static `.html`) and `_build/gen-images.mjs` (Nano Banana →
  responsive dual-crop WebP). The committed output is plain static HTML — the generators are
  dev tools only and are blocked from being served by `.htaccess`.
- To rebuild pages: `node _build/generate.mjs`. To (re)generate imagery:
  `GEMINI_API_KEY=… node _build/gen-images.mjs` (idempotent; skips existing).
- All facts live in `site-config.json`.

## When done
Update `_shared/LESSONS.md` + `_shared/sites-registry.md`, push the shared repo, then this one.
