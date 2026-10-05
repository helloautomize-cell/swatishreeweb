# EVE images · read this first

Final set, batches 1 to 6. Colours come from `eve-styleguide.html`, copy from `new-website-content.md`, page rules from `site-plan.md`.

## Order of reading
1. `image-manifest.json` is the source of truth: every file, its page and section slots, crop, `object_position`, alt text, caption rule, status and treatment.
2. `IMAGE-MAP.md` is the same thing page by page.

## Folders
- `brand/` logo PNGs (transparent full, white, mark; original on blush). SVG versions are coming and replace these.
- `doctor/`, `clinic/`, `services/`, `treatments/`, `conditions/`, `blog/`, `journey/`: process these.
- `_reference/`: never publish. Rebuild the IVF steps infographic as a native component.
- `_hold/`: never publish (watermarked, off-topic, outcome-implying, third-party screenshots, too small).
- `_originals-as-received/`: untouched originals of the two retouched files. Never publish.
- `credentials-reference/`: certificates for verifying text only. Never publish as images. See `credentials-facts.md`.

## Rules
1. Every file is a lossless PNG master converted from the AVIF the client sent. Output AVIF and WebP at widths 320, 480, 768, 1028, never wider than the source, quality 80, dominant-colour blur placeholder, metadata stripped.
2. Hub cards (Services, Treatments, Conditions) use the designed badges. These photos are the LEAD image on each detail page, beside the answer-first intro: right column on desktop (max 460px wide, 4:3, 24px radius, 1px `var(--line)` border, `blush-50` behind), full width on mobile.
3. Only the hero portrait is preloaded, and it is INTERIM (496x620). Replace it with the original before launch. Never animate a photo in. No filters, tints or text over photos.
4. Files with `caption: "Illustrative image"` show that small caption under the image. They are generic lab, equipment or X-ray images and must not imply EVE's own facilities.
5. Pages with no photo (Egg freezing, Endometrial biopsy, Female factor infertility, Fibroids, Adenomyosis, Thin endometrium and low ovarian reserve, Thyroid and fertility) use the designed badge panel. Do not borrow an unrelated photo.
6. The build fails if a status says "after permission" or "after written approval" and the file is still listed for production: keep those slots behind the `[CONFIRM]` chip until the client confirms.
7. Alt text comes from the manifest, never from the file name.
