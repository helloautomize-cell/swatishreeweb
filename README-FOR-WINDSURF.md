# Handoff brief for Windsurf — EVE Women and Fertility Clinic

Prepared 6 October 2026 by Automize Media for Dr. Swati Shree, Gunjur, Bangalore.

---

## What you have

| File | Purpose |
|---|---|
| `WINDSURF-MASTER-PROMPT-EVE.md` | The full build brief. Paste this as your first task. |
| `styleguide/eve-styleguide-final.html` | Locked visual reference. Open in a browser and keep it open. |
| `images/dist/` | 38 production-ready images, canonical names. |
| `images/dist/image-manifest.json` | Every image slot: file, page/section, ratio, illustrative flag, caption, notes. |
| `images/eve-images.zip` | The same `dist/` folder zipped for download. |
| `uploads/hearth/8d1e68d1-...` | `new-website-content_swati.md` — every page and post, written. |
| `uploads/hearth/ca5535bd-...` | `site-plan.md` — URLs, navigation, schema, compliance, global copy. |
| `uploads/hearth/c0fbe5f5-...` | `eve-client-data.md` — locked facts and open `[CONFIRM]` blockers. |

Credentials reference: `images/_credentials-reference/` — NEVER publish as images. Fact-only, from `credentials-facts.md`.

---

## repo `resources/` layout (set this up in Phase 0)

```
resources/
  docs/
    WINDSURF-MASTER-PROMPT-EVE.md
    site-plan.md
    new-website-content.md
    eve-client-data.md
    credentials-facts.md          (you derive this from the cert PDFs; facts only, no images)
    IMAGE-MAP.md                   (copy of images/image-map.md for reference)
  reference/
    eve-styleguide-final.html     <- this is the locked style guide; open it in a browser
  images/                         <- unzip eve-images.zip here
    image-manifest.json
    doctor-hero-cutout.avif
    doctor-meet-cutout.png
    ... (38 files total)
    _originals-as-received/       (never publish; raw batches for reference only)
```

---

## Key differences from the v1 (Devin) prompt

1. **Style guide file is `eve-styleguide-final.html`**, not `eve-styleguide.html`. The v1 prompt named the wrong file everywhere — the patched prompt fixes this.

2. **Service cards are plain white, not arch glass.** Part 4.7 of the master prompt now specifies `ServiceCard`: white background, shadow-card, badge top-left (112px), name, one line, "View service" link pinned at the bottom. No arch tops, no blob animation, no glass on service cards. Glass is still used for Why EVE cards, nav overlays, labels over photos, and the BookButton panel.

3. **Image files are pre-processed** with canonical names. Drop the `dist/` contents straight into `resources/images/` and run `process-images.mjs` (Part 8.1) only for resizing and format conversion — no renaming needed.

---

## One slot still pending

`clinic-outstation-travel-4x3` (slot C6, the Coming from outside Bangalore lead image) is AI-generated and not yet ready. The manifest marks it as a placeholder. Use the badge panel until the file arrives, then drop it in as `clinic-outstation-travel-4x3.png` with no other changes needed.

---

## Two images need background removal before the hero and Meet-your-doctor sections

- `doctor-hero-cutout.avif` (D1) — hero cut-out, left side of Hero B
- `doctor-meet-cutout.png` (D2) — second pose, Meet your doctor section

Both are interim-resolution real photos. Background removal is done by the agency and the files will be replaced; the component just needs to expect a transparent PNG.

---

## Start

Paste `WINDSURF-MASTER-PROMPT-EVE.md` as the task, then add: **"Start Phase 0."**
