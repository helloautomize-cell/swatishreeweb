# WINDSURF MASTER PROMPT · EVE Women and Fertility Clinic website (Next.js)

Version 2 · 6 October 2026 · Automize Media Labs · Client: Dr. Swati Shree, Gunjur, Bangalore

> **How to use:** create one Devin session for this project. Attach (or commit under `resources/`) the files listed in Part 2, then paste this whole file as the first message, followed by one line: **"Start Phase 0."** Devin works one phase at a time and stops at every gate. Approve a phase by replying **"APPROVED, start Phase N"**.

---

## PART 0. Mission and quality bar

You are the **senior engineer and front-end designer** building the website for **EVE Women and Fertility Clinic**, a founder-led fertility and women's health clinic in Gunjur, East Bangalore, run by **Dr. Swati Shree** (MBBS, DNB Obstetrics and Gynaecology, MRCOG UK, fellowship in reproductive medicine). You write the production code. All strategy, copy, design decisions, images and compliance rules are already made. They live in the files in Part 2. **You implement them. You do not redesign, rewrite copy or invent facts.**

**The result must feel:** calm, premium, warm, senior and trustworthy. It should read like a boutique specialist clinic, not a hospital chain and not a template. Think generous white space, quiet sage and blush, soft glass over gentle glows, one confident serif accent word per heading, precise alignment, and motion that is felt, not noticed.

**It must also be:** fast (Lighthouse mobile Performance 90 or more), accessible (100), compliant with Indian medical advertising and data-protection rules, and ready for Google and AI search (SEO, GEO, AEO).

**Quality bar in one line:** if a senior designer would circle anything in a screenshot (a misaligned card, an orphan word, an uneven gap, a blurry image, a weak contrast, a janky animation), it is not done.

We match the **patterns and quality** of top specialist-clinic sites. We never copy another site's text, photos, icons or exact layouts.

---

## PART 1. How you work (read twice)

### 1.1 Operating rules

1. **Phases with STOP gates.** Work only on the current phase (Part 13). When it is done, post the phase report (Part 15), push the branch, and **STOP**. Do not start the next phase until the message says **"APPROVED, start Phase N"**. Never approve yourself.
2. **Source files win.** If these files disagree with this prompt, the order of authority is: (1) `eve-styleguide-final.html` for visuals, (2) `new-website-content.md` for every word on the site, (3) `site-plan.md` for URLs, navigation, schema and compliance, (4) `image-manifest.json` for every image slot, (5) this prompt. If two files conflict, **stop and ask**, quoting both lines.
3. **Never invent a fact.** Anything marked `[CONFIRM: ...]` stays a `[CONFIRM]` token (Part 9.2). Do not guess hours, WhatsApp, email, registration numbers, coordinates, years of practice or languages.
4. **Do not rewrite copy.** Render `new-website-content.md` as written. You may fix a typo or a broken link and list it in your report. You may not paraphrase, shorten or "improve" text.
5. **Check before you build.** At the start of every phase, list the exact files you rely on and confirm each exists. If a **required** file is missing, STOP and say which one. If an **asset** file is missing (Part 8.4), use the placeholder, log it in `public/images/_todo.md`, and continue.
6. **Verify visually, always.** You have a browser. After building any visible UI, run it, open it at **390, 768, 1024 and 1440 px wide**, compare it side by side with `eve-styleguide-final.html`, and fix what is off **before** you report. Attach the screenshots to the report.
7. **One branch per phase** (`phase-0`, `phase-1`, ...). Open a pull request into `main` for each, but **never merge** without approval. Use a Vercel preview deploy if you have access. If you do not, run `next build && next start`, take screenshots, and tell me exactly what access you need.
8. **Ask only when truly blocked.** Batch your questions in one message, each with your recommended default, then continue with that default on non-blocking work.
9. **Secrets.** Never commit keys. Use `.env.local` and `.env.example`. Use obvious placeholders.
10. **Do not touch `resources/`.** It is read-only source material. Copy from it, never edit it.
11. **Writing style for everything you write** (UI copy you are allowed to add, commits, PR text, reports): no em dashes and no en dashes, plain short sentences, sentence-case headings, no emojis, no exclamation marks.
12. **Clean output.** No comments that mention AI tools, agents, prompts or "generated". No `console.log`, `data-testid`, TODOs or `[CONFIRM]` text in production output. Neutral `README.md` and `package.json`. Commits are small and descriptive under the agency identity. Do not rewrite history.
13. **If a test fails, fix the cause.** Do not delete, skip or loosen a test or an acceptance criterion to pass. If you believe a criterion is wrong, say so in the report.
14. **Time-box.** If you are stuck on one problem for about 30 minutes, report it with what you tried and your best option.

### 1.2 What "done" means for every phase
All of: acceptance criteria met, tests green, no console errors, no horizontal overflow at 390 / 768 / 1024 / 1440, screenshots attached, report posted, branch pushed, STOP.

---

## PART 2. Source-of-truth files and repo layout

Create the app next to `resources/` (never inside it). Required layout:

```
resources/
  docs/
    DEVIN-MASTER-PROMPT-EVE.md      this file
    site-plan.md                    URLs, navigation, schema, compliance, global copy blocks
    new-website-content.md          every page and blog post, written (the only source of copy)
    eve-client-data.md              locked client facts and open blockers
    credentials-facts.md            qualification facts read from the certificates
    IMAGE-MAP.md                    page by page image map
  reference/
    eve-styleguide-final.html             the approved visual reference (colours locked)
  images/                           contents of eve-images.zip (the dist/ folder)
    image-manifest.json               slot → file, page, ratio, illustrative, caption
    *.avif  *.png  *.jpg              all 38 canonical-name image files
    _originals-as-received/           (never publish; raw batches for reference only)
  assets/                           generated badges, spot icons, scenes (10 batches of 10, delivered after processing)
    asset-manifest.json
```

**Required files (STOP if missing):** `site-plan.md`, `new-website-content.md`, `eve-styleguide-final.html`, `image-manifest.json`, `eve-client-data.md`.
**Asset files (use placeholders if missing):** everything under `resources/assets/`, the SVG logo set, the hero portrait original.

Open `eve-styleguide-final.html` in the browser in Phase 0 and keep it open. Read its **Build notes** box and every `<!-- -->` comment. It is the visual contract.

---

## PART 3. Locked decisions (do not reopen)

| Topic | Decision |
|---|---|
| Names | **EVE Women and Fertility Clinic** (short "EVE"). **Dr. Swati Shree** on first mention per page, then "Dr. Swati". City in titles: "Bangalore". Never "EVE Fertility" or "EVE Clinic". |
| Doctors | **One doctor.** The hero is **ONE large portrait card. No fan, no swap, no second card.** |
| Fonts (fixed) | **Figtree** (all UI and text), **Instrument Serif italic** (one accent word per heading at most), **Noto Sans Devanagari** (only if Hindi text appears; it does not at launch). `next/font`, self-hosted. **Preload only Figtree.** |
| Colours (locked) | Exactly the `:root` tokens in `eve-styleguide-final.html` (Part 4.1). Never change a value. |
| Logo | Sage line art on blush. Use `brand/logo-full-transparent.png`, `logo-white-transparent.png`, `logo-mark-transparent.png` until SVGs arrive, then swap by changing one path in `lib/site-config.ts`. |
| Patient Stories | **The page does not exist.** It is replaced by `/your-fertility-journey/`. No testimonials, no patient quotes, no patient photos, no names on stories. |
| Hospital names | Apollo Fertility, Motherhood Fertility, Garbhagudi IVF Centre appear **only** on `/dr-swati-shree/` and `/about/` as credentials. Never in header, footer, service pages or schema description. |
| IVF wording | IVF is "planned with you at EVE, with laboratory procedures at associated ART centres" `[CONFIRM]`. Never say EVE has its own IVF laboratory. |
| Sex of baby | Never mentioned except to say it is never disclosed (PCPNDT Act). |
| Prices | None anywhere. |
| Donor, surrogacy | Not on the site at launch. |
| Certificates | Never published as images. Facts only, from `credentials-facts.md`. Date of birth, father's name and home address never appear anywhere. |
| Previous surname | Never appears. |
| Language | English (`en-IN`). |
| Domain, hosting | Vercel, functions region `bom1`. Domain `[CONFIRM]`. |

**Site data seed (`lib/site-config.ts`):**
```ts
name: 'EVE Women and Fertility Clinic', shortName: 'EVE', doctor: 'Dr. Swati Shree',
phones: [{ display: '72049 21212', e164: '+917204921212' }, { display: '72049 21516', e164: '+917204921516' }],
address: { line1: '1st Floor, LG Complex Towers', line2: 'Gunjur', city: 'Bangalore', region: 'Karnataka', postalCode: '560087', country: 'IN' },
foundingYear: 2024, foundingMonth: 'December',
hours: CONFIRM, whatsapp: CONFIRM, email: CONFIRM, mapsUrl: CONFIRM, geo: CONFIRM,
registration: { kmc: CONFIRM, art: CONFIRM }, replyTime: '24 hours', legalLastUpdated: CONFIRM
```
`CONFIRM` is the typed token from Part 9.2. Every place that shows one of these values reads it from this file only.

---

## PART 4. Design system

### 4.1 Tokens (copy from `eve-styleguide-final.html`; these are the values)
```css
:root{
  --primary:#5C7450;      /* logo sage: buttons, active tab, links on white (5.16:1 with white text) */
  --secondary:#26382C;    /* deep moss: Book label, footer, gradient end */
  --primary-500:#4F6445;  /* text-safe sage: eyebrows, links, focus ring (6.48:1 on white) */
  --primary-700:#3E5236;  /* pressed */
  --primary-100:#E5ECDF;  /* tabs, chips, icon tiles */
  --primary-50:#F4F7F1;   /* washes, callouts */
  --blush-100:#FCE4E8;    /* washes only, never text */
  --blush-50:#FFF6F8;     /* lightest wash */
  --rose:#A24560;         /* text-safe: ONLY the italic serif accent word and tiny heart marks */
  --glow:#A8C49A;         /* decorative only */
  --accent:#F4B3C1;       /* decorative only: glows, blobs, sparkles */
  --ink:#1F2D26; --ink-2:#55655B; --line:#E3E8DF; --bg:#FFFFFF;
  --alert:#C8302A; --success:#2F7D5B; --star:#F2B233;
  --grad-brand:linear-gradient(90deg,#5C7450 0%,#26382C 100%);
  --grad-btn:linear-gradient(90deg,#5C7450,#26382C,#5C7450);
  --shadow-card:0 1px 2px rgba(31,45,38,.04),0 12px 32px -12px rgba(38,56,44,.18);
  --shadow-hover:0 20px 48px -16px rgba(38,56,44,.28);
  --ease:cubic-bezier(.22,1,.36,1);
}
```
Keep the token names. Show a contrast table on `/styleguide`. `--glow` and `--accent` are **never** used for text. `--blush-*` are washes only. `--alert` appears only on emergency notices and the emergency icon.

### 4.2 Non-negotiable rules (repeat in every PR description)
- **White page background everywhere.** Tints only for chips, tabs, panels, washes and glows.
- **At most one gradient surface per viewport** (primary button, active tab, Book button, mobile bar). Everything else is white or tint.
- Ink is never pure black. No pink buttons, no pink gradients, no hot pink. Rose is an accent, not a surface.
- Body text at least **17px**. Tap targets at least **48px**. Contrast **4.5:1** everywhere, also inside glass.
- All motion respects `prefers-reduced-motion`.
- No em or en dashes in UI copy, JSON-LD or HTML.
- No red cross or red plus anywhere.

### 4.3 Type scale
| Style | Desktop | Mobile | Weight |
|---|---|---|---|
| Display (hero) | 64/68 | 34 to 38/42 | 700, -0.02em |
| H1 | 52/58 | 34/40 | 700 |
| H2 | 40/48 | 28/34 | 650 |
| H3 | 22/30 | 20/28 | 600 |
| Eyebrow | 13/16 | 12/16 | 600, uppercase, 0.14em, "01 / WHY EVE" |
| Body large | 19/30 | 18/28 | 400 |
| Body | 17/28 | 17/27 | 400 |
| Small | 14/20 | 14/20 | 500 |

`text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs. Use tabular numbers for phone numbers and hours. The accent word is `em.acc` (Instrument Serif italic, `color: var(--rose)`, weight 400, tracking 0). **One per heading at most.**

### 4.4 Spacing, radius, shadow
- 8px grid. Container 1240px. Text measure 68ch.
- **Section padding 96px desktop, 56px mobile.** 40px from heading to content.
- Radius: cards 20 to 24, buttons 12, chips pill, arch `999px 999px 24px 24px`, dropdown 16, large portrait card 28.
- Cards use `--shadow-card`, hover `--shadow-hover`. No other shadows.

### 4.5 Glass
```css
.glass{background:rgba(255,255,255,.62);backdrop-filter:blur(18px) saturate(140%);-webkit-backdrop-filter:blur(18px) saturate(140%);
 border:1px solid rgba(255,255,255,.55);box-shadow:var(--shadow-card),inset 0 1px 0 rgba(255,255,255,.6)}
@supports not (backdrop-filter:blur(1px)){.glass{background:rgba(255,255,255,.94)}}
```
Glass only over glows, tints or photos, never flat white. At most about 12 blurred elements per viewport. The panel behind glass cards is a diagonal `--blush-100` to white, with a rose glow (`rgba(244,179,193,.30)`) bottom-right and a faint sage glow (`rgba(92,116,80,.12)`) top-left.

### 4.6 Motion (final, proven)
- **Reveal:** fade up 16px, 500ms, `--ease`, once, 60ms stagger. Content is visible at rest (no-JS and screenshot safe). **Never on the LCP element.**
- **Card hover:** lift 4 to 6px, deeper shadow, arrow slides 3 to 4px, 200ms. On touch, `:active`.
- **Buttons:** gradient `background-position` shift (`background-size:200%`) plus 1px lift.
- **Carousels (Embla):** drag, snap, momentum; arrows (desktop) and pill dots (the active dot widens to 26px) or a progress bar when more than 5 items; keyboard arrows; **auto-play every 4.5s**, loop, pause on hover, focus, touch and hidden tab, resume 6s after the last interaction, a visible pause/play button, off under reduced motion. Edge fade 8% (`mask-image`), never at the start or end side.
- **Marquee:** CSS translate loop, two rows in opposite directions, paused on hover, focus and touch; static and wrapped under reduced motion; one row on mobile.
- **Sticky bands:** `position: sticky`, never `background-attachment: fixed`.
- **Motion budget:** at most three distinct motion types visible in one viewport. Durations 200 to 600ms. Nothing loops except carousels, marquee and the card blobs while on screen.
- **No animation on any photo.** The hero portrait is static.

### 4.7 Signature component: ServiceCard (plain white)
Plain white card, `--shadow-card`, radius 20px, 240px wide desktop, 200px mobile. No arch. No glass. No blob animation.
- **Badge `md` (112px)** top-left of the card (not centred). On first scroll into view: scale 1.06, lift 3px, soft shadow, a diagonal **sheen** sweep once over 600ms; **orbit ring** fades in over 200ms and rotates 360 degrees **once** over 1.2s. Reduced motion: ring fade and glow only. Never loop. Never the same badge on two adjacent cards.
- Below the badge: service name (H3, 17px, ink), one-line description (14px, ink-2).
- **"View service →" link pinned to the card bottom** (14px, `--primary-500`, arrow slides 3px on hover).
- Card hover: lift 4px, `--shadow-hover`, 200ms. No lift inside carousels if it breaks alignment.
- Hub cards use the illustrated badge (Part 8). Never plain line icons.

### 4.8 StepTracker
- **Desktop:** sticky left column with the big number ("04"), the current step name and a vertical rail. Dots 40px apart on a 2px line: done = `--primary-500`, current = `--primary` with a halo ring, future = `--line`. Right column: steps with hairline dividers; current at full opacity, others about 70% (still 4.5:1). Driven by IntersectionObserver and click. Optional sticky photo per step.
- **Mobile:** swipe slides (16:10 image, "Step n of 6", title, one line, progress bar). Step icons are the `visit-*` spot icons.

### 4.9 Reference snippets
Take the snippets for the two-part **BookButton**, orbit ring, blobs, marquee, mobile bar and mega-menu panel from `eve-styleguide-final.html` (they use the EVE tokens). Do not use any colour from another project.

---

## PART 5. Premium UI and UX standards

This is what separates "built" from "crafted". Treat these as acceptance criteria.

### 5.1 Principles
1. **One job per screen.** Each viewport has one primary action (Book Consultation) and at most one secondary (Call). Never two competing gradients.
2. **Hierarchy through space, not decoration.** Group with whitespace, separate with hairlines (`--line`), emphasise with weight and the single serif accent word.
3. **Calm rhythm.** Sections alternate white and a soft tint panel (blush-50, primary-50) inside the white page. Never two tinted panels back to back.
4. **Consistency is the luxury.** One radius family, one shadow pair, one icon stroke (1.75 at 24px), one image radius (24px with a 1px `--line` border), one set of ratios (4:3 leads, 4:5 portraits, 3:2 covers, 1:1 avatars).
5. **Honest imagery.** Photos are real or clearly generic. Illustrations are soft and on palette. Nothing implies a result or an outcome.
6. **Quiet confidence in copy.** Short, plain, warm. No hype. The site never sells.

### 5.2 Interaction states (every interactive element)
| State | Rule |
|---|---|
| Default | Resting style from the styleguide |
| Hover | Lift or tint shift, 200ms. Never colour-only |
| Focus-visible | 3px ring `rgba(79,100,69,.45)` with 2px offset, on every link, button, tab, input and card. Never removed |
| Active | `scale(.97)`, opacity .85 |
| Disabled | 45% opacity, `cursor:not-allowed`, still 4.5:1 for its label where it is text |
| Loading | Button shows an inline spinner and keeps its width; the form never reflows |

### 5.3 Forms (appointment)
- Inputs 52px tall, 12px radius, label above (never placeholder-only), helper text under, 17px text. `inputmode="tel"` for mobile, `autocomplete` set, `+91` shown as a fixed prefix.
- Validation on blur, then on change. Error text in `--alert` with an icon and `aria-describedby`. An **error summary** at the top on submit, focused, with links to fields.
- Time of day as three pill choices, not a dropdown. Date from today to +60 days.
- The under-18 box reveals the guardian field with a smooth height transition. The consent box is unticked and links to the Privacy Policy.
- On failure: keep the data, show Call and WhatsApp buttons. On success: `/thank-you/?type=` with the confirmation line and the emergency line. Works without JavaScript.

### 5.4 Navigation and wayfinding
- Sticky header 88px, shrinking to 68px on scroll, glass on scroll. Active page indicator in the menu. Breadcrumbs on every inner page.
- Anchor targets use `scroll-margin-top: 104px`.
- Detail pages: a **sticky table of contents** on desktop (right of the text) with the active section highlighted and a small Book card beneath it.
- The mobile action bar never covers content (`main` bottom padding 80px) and hides while typing and on the thank-you page.

### 5.4b Content pages (service, treatment, condition)
Order: breadcrumb, split hero (H1 and answer-first intro on the left, **lead image on the right**, max 460px, 4:3, radius 24), **At a glance** card (8 labelled rows with `glance-*` icons), then sections, then a process list with step icons (treatment pages), the emergency callout where it applies, FAQ accordion, collapsed **Sources** (`<details>`), reviewer box, related services (carousel) and 2 related posts, CTA band. Tables stay as real HTML tables on desktop and become stacked key-value blocks on mobile (never a sideways scroll).

### 5.5 Imagery UX
- Every image has a defined ratio, `object-position` from the manifest, a blur placeholder and explicit width and height (CLS 0).
- Images are shown at or below their source width. Never upscale. No filters, no tints, no text over photos.
- Lab, equipment and X-ray images carry the small caption **"Illustrative image"** (14px, `--ink-2`).
- Where a page has no lead photo, show the **badge panel**: a blush-to-white panel with the large badge (`lg`, 200px), two sparkles and a soft ring.

### 5.6 Anti-patterns (reject on sight)
Template "hero with stock smile + three icon boxes", heavy drop shadows, rainbow gradients, more than one serif accent per heading, centred long paragraphs, icon-in-circle grids for everything, autoplay with no pause, carousel arrows overlapping text, cards of unequal height in one row, stray "·" chains, orphan words (one word on the last line of a heading), full-bleed decorative photos on mobile, modal pop-ups, chat widgets, newsletter prompts, counters, ratings, testimonials.

---

## PART 6. Global shell

| Element | Spec |
|---|---|
| Utility bar (desktop) | Thin white bar, hairline below. Left: Plan your visit · Blog. Right: clock + `[CONFIRM: OPD hours]`, phone "72049 21212", red "Medical emergency? Call 108 or 112", A / A+ text-size switch. |
| Header | Sticky white (glass on scroll). Logo left (50px tall, 44px mobile). **Services ▾ · Treatments ▾ · Conditions ▾ · Dr. Swati Shree · About.** Two-part **BookButton** right ("Book Consultation", single line). |
| Mega menus | Compact, solid white (98%), 16px radius, light shadow. Explicit CSS grid per panel (Services: 3 columns + a 220px doctor card; Treatments: 1 column + side links + doctor card; Conditions: 2 columns + doctor card). Column headings as small uppercase eyebrows. 18px line icons beside links are optional. Hover intent 120ms, keyboard and Esc work. Exact link lists are in `site-plan.md` section 5. |
| Mobile menu | Full-screen white sheet, accordion groups all collapsed, 48px rows, 17px text, fixed footer with Book and Call and one hours line. |
| Mobile action bar | Below 1024px on every page: brand gradient at 92% under glass, top corners 16px, safe-area padding. **Book Now · Call Now (sheet with both numbers) · WhatsApp** (pre-filled with the page title). Hidden while typing. |
| Floating WhatsApp | Desktop only, WhatsApp-green 56px circle. |
| Footer | Logo (white version on deep moss), address in 3 lines, hours as 4 stacked rows, phones, obfuscated email, Get directions, link columns (Services, Treatments, Conditions, Patient information, Legal 7), catchment line, social icons only when links are set, bottom line with the education disclaimer and `[CONFIRM: registration]`. Mobile: columns as accordions, contact block open. |
| Cookie banner | Small glass card bottom-left, above the mobile bar. Essential and analytics, Accept / Decline / Settings. Footer "Cookie settings" link. |
| Breadcrumbs | Every inner page, with BreadcrumbList JSON-LD. |

Global copy blocks (emergency line, callout, reviewer box, CTA band, form lines, ART line, no-promise line, pregnancy-scan line) are in `site-plan.md` section 6. Use them verbatim from one `lib/copy.ts`.

---
## PART 7. Pages and templates

All 46 pages and 3 blog posts, with their exact URLs, are in `site-plan.md` section 4. All copy is in `new-website-content.md`, one `## Page N` or `## Post N` block each, with a YAML frontmatter block. Parse it with a script into `resources/content/**.md` plus Zod-validated frontmatter. Do not retype copy.

### 7.1 Home page, top to bottom (copy: "Page 1 · Home")
| # | Section | Spec |
|---|---|---|
| 1 | **Hero** | White panel, rose glow top-right, faint sage ring bottom-left. Eyebrow, H1 "Fertility care built around *you*" (one accent word), one-line sub, BookButton plus "Call 72049 21212", service chips (1 to 2 lines, no orphan), DoctorChip (round avatar plus "Doctor-led care"). Right: **ONE large portrait card** (4:5, radius 28, frosted name pill off the face, one small glass label off the face). **Preload only this image. Never animate it.** Mobile order: eyebrow, H1 (34px), portrait (about 300px tall), one short line, Book plus Call icon in ONE row, all above the fold at 390 x 844. Chips and the chip pill hidden on mobile. |
| 2 | **Answer-first summary** | The paragraph from the content file, directly under the hero, real HTML (also the `speakable` text). |
| 3 | **Find care by concern** | One row of 8 pills with small line icons (links as listed). Horizontal scroll on mobile. |
| 4 | **01 / Why EVE** | 6 glass cards (icon tile with the `why-*` icon, title, 2 lines) on the blush panel with glows. Mobile: swipe carousel. |
| 5 | **02 / About EVE** | Reception photo with 1 to 2 small glass labels off faces. Right: H2, paragraph, two rows with the doctor badge. |
| 6 | **03 / How we can help** | Tabs (single scrollable row on mobile) with a ServiceCarousel of plain white ServiceCards (Part 4.7) per tab, an intro line per tab and "View all services". Auto-play, edge fade, progress bar on mobile. |
| 7 | **04 / Your first visit** | StepTracker (6 steps) with step photos per `IMAGE-MAP.md` and `visit-*` icons. |
| 8 | **Visit band** | Desktop: 60vh sticky photo (interim: reception photo with a 40% deep-moss overlay) with a frosted "Visit us in Gunjur" card (address once, Get directions, Plan your visit). Mobile: compact card only. |
| 9 | **05 / Meet your doctor** | Card with the 4:5 photo, name, qualifications on max 2 lines, role, chips (`[CONFIRM]` tokens), "Book with Dr. Swati" and "Read her profile". **No star ratings.** |
| 10 | **06 / A plan that starts with you** | Short feature panel with the paragraph and link to the journey page. |
| 11 | **07 / Conditions we look after** | Marquee of 13 condition pills (line icon plus name, linked). |
| 12 | **08 / From our blog** | 3 cards with designed or approved covers, category chip, title, "Written by Dr. Swati Shree · date · n min read" (nowrap). Mobile: swipe. |
| 13 | **09 / Quick answers** | 5 FAQ accordions plus "See all FAQs" (FAQPage JSON-LD). |
| 14 | **Contact block** | Address, phones, email, hours as 4 stacked rows, emergency line, photo card with "Show map" click to load. |
| 15 | **CTA band** | Global CTA block. |

**Do NOT include:** testimonials, review cards, ratings, counters, before and after, price offers, newsletter or push pop-ups, patient stories.

### 7.2 Templates
| Template | Used for | Notes |
|---|---|---|
| **Hub** | `/services/`, `/treatments/`, `/conditions/` | Breadcrumb, hero (H1, intro, Book and Call), grouped ServiceCards (Part 4.7, plain white with badge top-left), a "how to choose" panel, FAQs, CTA. `/treatments/` also has the IUI versus IVF comparison table and the ART rules panel. |
| **Detail** (service, treatment, condition) | 25 pages | Part 5.4b. Treatment pages add the process list with `step-*` icons. `/treatments/ivf/` renders the **8-step IVF component** natively (never the infographic image). |
| **Doctor profile** | `/dr-swati-shree/` | Split hero (portrait plus key-facts glass card with `[CONFIRM]` tokens), About, education timeline (MRCOG entry uses the ceremony photo), work experience, teaching and award (award photo), "How Dr. Swati works", **non-clickable chip groups** (desktop all; mobile 6 per group plus "Show all"), FAQs, CTA. Physician and ProfilePage JSON-LD. |
| **About** | `/about/` | Story, how we work (5 steps), what we do, the founder, clinic, facts at a glance, FAQs. |
| **Journey** | `/your-fertility-journey/` | Four stages with `stage-*` icons, `journey-path` rail, the decision table, ART eligibility panel, FAQs. |
| **Plan your visit** and **Coming from outside Bangalore** | 2 pages | Info cards with logistics icons, directions, click-to-load map, outstation plan as a numbered list. No per-town pages. |
| **Contact** | `/contact/` | The form (Part 5.3) beside a clinic image with glass info cards. `#book` anchor. |
| **FAQs** | `/faqs/` | 30 questions in 5 category groups with anchors, accordion, FAQPage JSON-LD. |
| **Blog list and post** | `/blog/`, 3 posts | Category chips, cards with designed covers, "In brief" box (primary-50), body at 68ch, callouts, FAQs, sources, reviewer box, 3 related services and 2 related posts. |
| **Legal** | 7 pages | Left table of contents, last-updated date, print styles. |
| **Utility** | `/thank-you/` (noindex), 404 | On brand, link to the main services. |

### 7.3 Per-page image slots
Use `resources/images/image-manifest.json` and `IMAGE-MAP.md`. For each page and section, the manifest gives the file, crop, `object_position`, alt text, caption and status. Pages with no photo (Egg freezing, Endometrial biopsy, Female factor infertility, Fibroids, Adenomyosis, Thin endometrium and low ovarian reserve, Thyroid and fertility) use the **badge panel** unless a generated lead illustration exists in `resources/assets/`.

---

## PART 8. Images and assets pipeline

### 8.1 Image pre-treatment (`scripts/process-images.mjs`, sharp)
- Read `resources/images/` and `resources/assets/`, write to `public/images/`. **Never upscale.** Output AVIF and WebP at widths 320, 480, 768 and 1028, never wider than the source; `next/image` serves them (`images.formats: ['image/avif','image/webp']`), quality 80.
- Blur placeholder (dominant colour). Strip EXIF, GPS and camera metadata; keep sRGB. Leave any C2PA credentials on AI images untouched.
- Only process files listed under `images` in the manifest. **Never process or publish anything in `_hold/`, `_reference/`, `_originals-as-received/` or `credentials-reference/`.**
- `public/images/alt-text.json` from the manifest. Alt text is never taken from file names.
- Slots whose status says "after permission" or "after written approval" render behind a `[CONFIRM]` token and are excluded from production by `launch-check`.
- Log every missing or interim file to `public/images/_todo.md`.

### 8.2 Doctor images
`doctor-hero-portrait-4x5-INTERIM.png` is **interim** (496 x 620). Use it for development. Build the portrait component so the real photographer's file (4:5, at least 2000px tall) swaps in by changing one path. Do not sharpen or upscale it. Avatar: `doctor-avatar-1x1.png`.

### 8.3 Badges, spot icons, scenes (generated assets)
Delivered as processed PNGs in `resources/assets/` with an `asset-manifest.json` (file, group, size, page and section, alt text). Groups: **badges** (26, the illustrated glass-card badges), **spot icons** (journey stages, process steps, why-EVE, visit steps, at-a-glance, emergency, review seal), **category icons**, **lead illustrations**, **scenes**, **botanical decoration**.
- Build `lib/service-badges.ts` (service slug to badge file). Never show the same badge on two adjacent cards.
- Badge sizes: `sm` 56, `md` 112, `lg` 200. Spot icons render at 40 to 64px.
- UI icons at 24px and below come from **Lucide** (stroke 1.75) and brand glyphs from **Simple Icons**. Blobs, rings, arches, dividers, dot grids and sparkles are **drawn in CSS and inline SVG**, not images.
- If an asset is missing, render the matching **placeholder from `eve-styleguide-final.html`** and log it.

### 8.4 Not yet delivered (use placeholders now, swap later)
SVG logo set, hero portrait original, square face photo, building exterior, ultrasound room, team photo, the generated asset set. Each swap must be a file replacement plus a path change in one config, with no component edits.

---

## PART 9. Content pipeline and voice

### 9.1 Pipeline
- Split `new-website-content.md` into `resources/content/**.md`, one file per page, with the YAML block as frontmatter validated by Zod: `title` (60 characters max), `description` (155 max), `url`, `h1`, `badge`, `about`, `entities`, `reviewer`, `lastReviewed`, `faqs`, `related`, `posts`, `schema`.
- Render with remark and rehype. Support: callouts (emergency, info, warning), At a glance, process steps, tables, FAQ accordions, collapsed sources, reviewer box, CTA band, step icons.
- Italic accent word: `*word*` inside an H1 or H2 becomes `<em class="acc">`.
- **Build checks:** unique titles and descriptions, length limits, zero em or en dashes, FAQ text equals the FAQ JSON-LD text, every internal link resolves, every image slot resolves or logs a todo.

### 9.2 The `[CONFIRM]` system
`[CONFIRM: ...]` in the content and `CONFIRM` in `site-config.ts` render as a **yellow chip in development**, are **hidden in production**, and `npm run launch-check` **fails while any remain** anywhere in content, config, JSON-LD or image captions. Keep a generated `client-inputs-needed.md` that lists every one with its page.

### 9.3 Voice rules (also check any copy you add)
- Plain, warm, precise. For a 35-year-old reading at 2 am and a worried parent. Short sentences. "We" and "you". Terms explained on first use.
- **Never write:** delve, navigate (as a metaphor), embark, realm, tapestry, testament, seamless, comprehensive, holistic, robust, leverage, empower, elevate, unlock, tailored, cutting-edge, state-of-the-art, world-class, top-notch, game-changer, peace of mind, rest assured, one-stop solution, "it's important to note", "in today's fast-paced world", "look no further", furthermore, moreover, additionally (sentence start), rhetorical-question headings, exclamation marks, emojis, Title Case headings, em and en dashes.

---

## PART 10. Compliance (India, medical): built in from day one

- **Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002** apply while the 2023 NMC regulations remain in abeyance. Factual information only. No self-praise, comparisons, inducements or testimonials.
- **Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954:** no cure claims, no drug brands, no promises.
- **ART (Regulation) Act, 2021 and Rules, 2022:** the ART line appears on every treatment page. Show the registration number when confirmed. State eligibility only as in the content file. No sex selection. No donor or surrogacy offers.
- **PCPNDT Act, 1994:** the pregnancy-scan line appears on the early pregnancy scan page and in the FAQ.
- **DPDP Act 2023 and Rules 2025** (notified 13 Nov 2025; main duties apply from May 2027): unticked consent, guardian consent under 18, privacy contact, retention, rights, cookie consent before analytics.
- **Always:** the emergency line in the utility bar and on symptom pages; a reviewer box and last-reviewed date on every medical page.
- **Never:** "best", "No. 1", "leading", "world-class", "guaranteed", "cure", "permanent", "100%", success rates, patient numbers, testimonials, ratings, before and after, prices, drug brands, `AggregateRating` or `Review` schema, named referral arrangements, unapproved therapies.
- The 7 legal pages are in the content file.

---

## PART 11. SEO, schema, GEO and AEO

Implement exactly what `site-plan.md` sections 9 and 10 define. Summary of what you build:
- **One `@graph` per page** with stable `@id`s `#clinic`, `#place`, `#dr-swati-shree`, `#website`, generated from `lib/site-config.ts` and each page's frontmatter in `lib/schema/*`. Types: MedicalClinic, Place (GeoCoordinates, `hasMap`), Physician plus Person, WebSite, MedicalWebPage, MedicalCondition, MedicalProcedure, MedicalTherapy, MedicalTest, Service plus ServiceChannel plus tiered `areaServed` (GeoCircle, City, AdministrativeArea, State, neighbourhood Places), FAQPage, BreadcrumbList, ProfilePage, ContactPage with ReserveAction, AboutPage, CollectionPage with ItemList, Blog and BlogPosting, ImageObject, ContactPoint, OpeningHoursSpecification, EducationalOccupationalCredential, SpeakableSpecification.
- FAQ JSON-LD only where the FAQs are visible and identical.
- **Never** `AggregateRating` or `Review`. No `[CONFIRM]` string and no em or en dash in JSON-LD (build check).
- Technical: unique titles and descriptions, self-canonicals, `trailingSlash: true`, sitemap with `lastModified`, `lang="en-IN"`, `og:locale en_IN`, OG image per page (`opengraph-image`), security headers (HSTS, nosniff, Referrer-Policy, Permissions-Policy, X-Frame-Options, a CSP allowing only YouTube-nocookie if used, Maps after click, GA after consent, Turnstile, Speed Insights), `poweredByHeader:false`, no production source maps, branded 404.
- **`SITE_INDEXABLE` switch:** until launch, `X-Robots-Tag: noindex`, meta noindex and `robots.txt Disallow: /` on every host, including the temporary vercel.app URL.
- GEO and AEO: `/llms.txt` and `/llms-full.txt` generated from content at build time; `robots.txt` allows Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended and Applebot-Extended **at launch**; answer-first intros, At a glance lists, FAQ, tab and carousel text all in the **initial HTML** (verify with curl); `entity-facts.md` generated from `site-config.ts`; IndexNow after deploys (enabled at launch).
- Local: one genuine clinic entity, one exact map pin, tiered service area, no doorway pages.

---

## PART 12. Engineering standards

**Stack:** Next.js App Router (latest stable, check the docs, do not rely on memory), TypeScript strict, Tailwind v4 with tokens as CSS variables, Radix primitives (NavigationMenu, Dialog or Sheet; Tabs and Accordion may be native), Embla, `next/font`, `next/image`, sharp, Zod, remark and rehype, Lucide, Simple Icons. Vercel hosting, region `bom1`.

**Single sources:** `lib/site-config.ts`, `lib/nav.ts`, `lib/service-badges.ts`, `lib/booking-context.ts` (page to reason prefill), `lib/whatsapp.ts` (page-based message), `lib/consent.ts`, `lib/copy.ts` (global blocks), `lib/schema/*`.

**Forms:** Server Action plus Resend, no database. Fields, validation and states per Part 5.3 and `new-website-content.md` Page 10. Spam: honeypot, 3-second minimum fill time, Turnstile when keys are set. The email to the clinic is a field table with `tel:` and `wa.me` links, source page, IST time, and the **exact consent text and time**. Verify the clinic domain in Resend (add SPF, DKIM, DMARC; never touch MX).

**Analytics:** GA4 only after Accept (Consent Mode v2, ad signals always denied). Events `book_click`, `call_click`, `whatsapp_click`, `directions_click`, `map_load`, `generate_lead` (`form_type` only). No personal or health data. Strip query strings except `utm_*`. Vercel Speed Insights (cookieless).

**Tests (Playwright):**
- nested interactives: `a a`, `a button`, `button a` count is 0 on every route
- forms: validation, under-18 guardian, success, failure, honeypot
- consent: zero GA, Maps or video requests before consent or click
- design: no overflow at 390, 768, 1024, 1440; no non-hero section taller than 1.3 x the viewport on mobile; autoplay pauses; marquee pauses
- mega menu: no overlapping links, panel inside the viewport
- content: dashes, `[CONFIRM]`, FAQ and JSON-LD equality, links, image slots
- accessibility: axe on every route, zero serious or critical

**Known pitfalls (avoid):** cards that contain links use the **stretched-link pattern** (no `<a>` inside `<a>`); `useSyncExternalStore` `getSnapshot` must return a cached value; never apply `content-visibility:auto` above the fold; give each Radix mega-menu panel an explicit grid width; reveal animations must never delay the LCP element; preload only one font; do not overlay titles on images with baked-in text; do not use video thumbnails as blog covers; confirm LCP with a direct measurement when Lighthouse simulation looks inflated.

**Performance budgets:** Lighthouse mobile Performance 90 or more, Accessibility 100, Best Practices 100, SEO 100 at launch (about 69 before launch because of noindex is expected). CLS under 0.1 (target 0). Home first-load JS at most 230 KB gzipped. Only the hero image preloaded. Fonts self-hosted. Map and video load on click. Report **medians of 3 runs** on the deployed URL.

**Mobile rules:** any section with more than 3 cards, photos or list items becomes a self-moving swipe carousel below 768px (cards about 84% wide, next card peeking, scroll-snap, a progress bar when more than 5 items), with the Part 4.6 auto-play rules. Doctor visible before the first CTA ends. No full-screen decorative photos on mobile. Mobile Home target about 9,000 to 10,000px tall at 390px wide.

---
## PART 13. Phases, acceptance criteria and gates

Every phase: branch `phase-N`, PR, preview, report (Part 15), STOP. Acceptance criteria are measurable. Meet all of them.

### Phase 0 · Setup and resource check
1. Create the repo structure in Part 2. Confirm every **required** file exists and list every asset file found or missing.
2. Open `eve-styleguide-final.html` and read its Build notes. Summarise in 10 lines the rules you will follow.
3. Run a **content audit script** over `new-website-content.md`: count pages (expect 46 plus 3 posts), FAQs (about 249), list every `[CONFIRM]` with its page, and flag any title over 60 or description over 155 characters.
4. Report open blockers and the list of `[CONFIRM]` tokens grouped by theme.
**Acceptance:** audit numbers posted; no code beyond the repo skeleton, `README.md` and the audit script. STOP.

### Phase 1 · Foundation and `/styleguide`
1. Next.js app, TypeScript strict, Tailwind v4, ESLint, Prettier, Playwright, Zod. Tokens (Part 4.1) as CSS variables and Tailwind theme. Fonts via `next/font`.
2. `scripts/process-images.mjs` (Part 8.1) run over the manifest. `public/images/alt-text.json` and `_todo.md`.
3. `/styleguide` (noindex) showing: swatches with a contrast table, type scale, every button (two-part BookButton included), Why glass cards with real copy, tabs plus ServiceCarousel of plain white ServiceCards (Part 4.7) with real badges and every hover effect, StepTracker with the 6 real steps, both card sizes of the doctor card, callouts (emergency, info, warning), hero portrait card, DoctorChip, the badge grid (sm, md, lg), the spot-icon grid, the Lucide icon grid, a form with every state, FAQ accordion, comparison table (desktop and stacked mobile), and the mobile action bar in a phone frame.
**Acceptance:** side-by-side screenshots at 390 and 1440 against the reference; axe zero serious; no console errors; Lighthouse accessibility 100 on `/styleguide`; keyboard focus visible everywhere. STOP.

### Phase 2 · Site shell
Utility bar, header, three mega menus, mobile menu, mobile action bar, floating WhatsApp, footer, cookie banner, breadcrumbs, 404, thank-you. `lib/nav.ts` from `site-plan.md` section 5.
**Acceptance:** mega-menu panels inside the viewport with no overlapping links at 1024, 1280, 1440; focus and Esc work; mobile menu accordions collapsed; mobile bar safe-area correct; Playwright tests for nested interactives and menus pass. STOP.

### Phase 3 · Content pipeline and all pages rendering
Content split, Zod frontmatter, renderer, `[CONFIRM]` system, `launch-check`, `client-inputs-needed.md`, all 46 pages and 3 posts rendering through templates with placeholders where assets are missing. Schema generators for all page types.
**Acceptance:** 49 routes build; build checks (Part 9.1) pass; `launch-check` fails only on `[CONFIRM]`; JSON-LD validates (no errors) on 6 sample pages; zero dashes in HTML and JSON-LD. STOP.

### Phase 4 · Home page and signature templates
Home (Part 7.1), Hub, Detail, Doctor, Journey templates polished to the styleguide, the native 8-step IVF component, the At a glance card, sticky table of contents, badge panels.
**Acceptance:** Home mobile height 9,000 to 10,000px at 390; hero fully above the fold at 390 x 844; no section over 1.3 x viewport on mobile; no horizontal overflow; reveal never on LCP; screenshots of Home, `/services/`, `/treatments/ivf/`, `/conditions/pcos/`, `/dr-swati-shree/` at 390 and 1440. STOP.

### Phase 5 · Blog, preview deploy, site-wide QA
3 blog posts, blog list, related content, legal pages with table of contents, OG images, sitemap, `llms.txt`, real Lighthouse on the deployed preview, site-wide link and image QA, `client-inputs-needed.md` final.
**Acceptance:** Lighthouse **medians of 3** on Home, one treatment page, one condition page, one post (mobile): Performance 90 or more, Accessibility 100; CLS 0; first-load JS within budget; zero broken links; zero 4xx or 5xx. STOP.

### Phase 6 · Forms, email, analytics, lock-down
Appointment form (Part 5.3), thank-you flow, Resend email (verified domain), honeypot and Turnstile, consent-gated GA4, Speed Insights, `SITE_INDEXABLE` lock on every host, security headers and CSP.
**Acceptance:** form tests green including no-JS submit; email arrives with consent text and time; zero GA, Maps or video requests before consent; headers verified with curl; preview URL returns noindex. STOP.

### Phase 7 · Design polish
Run the **pixel pass** (Part 14) on every template at 390, 768, 1024 and 1440. Fix everything in one pass. Replace placeholders with delivered assets (SVG logos, hero portrait original, generated assets) where available.
**Acceptance:** a pass log listing every fix; a before and after screenshot set for Home and three templates; zero items left on the Part 14 checklist. STOP.

### Phase 8 · SEO, GEO, AEO and clean-up
`site-plan.md` sections 9 and 10 verified line by line, Rich Results Test and Schema validator zero errors and warnings, `curl` checks that FAQ, tab and carousel text is in the initial HTML, AI-fingerprint clean-up (Part 1.1 rule 12), tone sweep logged to `tone-cleanup.md`, redirects and 410s if an old URL list is supplied.
**Acceptance:** a checklist table with status per item; `launch-check` green except unresolved client `[CONFIRM]` items listed by name. STOP.

### Phase 9 · Hand-off
`entity-facts.md`, final `client-inputs-needed.md`, a one-page README for the agency (how to edit content, swap images, set env vars, run checks, deploy), and the launch runbook (domain, DNS, `SITE_INDEXABLE` on, GSC and Bing, IndexNow, GBP updates). Do not turn indexing on without explicit instruction.
**Acceptance:** runbook reviewed. STOP.

---

## PART 14. Pixel pass checklist (premium finish)

Go section by section, top to bottom, desktop first, then mobile. Reject and fix any item below.
1. **Alignment:** everything sits on the 1240px container and the 8px grid; text edges align across sections; card rows have equal heights; icon and label baselines align.
2. **Spacing:** section padding 96 / 56; heading to content 40; no gap larger than 1.3 x its neighbours; no gap before the footer.
3. **Typography:** no orphan word in a heading (use `text-wrap: balance`); no widow line in a paragraph; one serif accent per heading; tabular numbers on phones and hours; no faux bold.
4. **Colour:** only tokens; contrast table passes; inactive states still 4.5:1; one gradient surface per viewport; rose never used as a fill.
5. **Imagery:** correct ratio and `object-position`; no blur from upscaling; consistent radius and border; "Illustrative image" captions present; no text over photos; no labels on faces.
6. **Glass:** only over a glow or tint; readable; at most about 12 blurred elements per viewport.
7. **Motion:** reveal once, no LCP delay; carousels pause correctly; marquee pauses; no loops besides the allowed; reduced motion honoured; no jank when scrolling at 60fps.
8. **States:** hover, focus-visible, active and disabled on every interactive element; focus ring never clipped.
9. **Icons:** one stroke weight; same optical size per row; no mixed styles in one group; badges never repeated on adjacent cards.
10. **Copy:** no dashes, no stray "·" chains, no duplicate links, no `[CONFIRM]` in production, hours and NAP identical everywhere.
11. **Mobile:** hero above the fold, carousels moving and pausable, tap targets 48px, sticky bar not covering content, no section over 1.3 x viewport, no horizontal scroll.
12. **Performance feel:** no layout shift on load, fonts do not flash, images fade in from the blur placeholder.

---

## PART 15. Report templates

### 15.1 Header for every phase (what you re-read at the start)
```
# Phase N: [name]
Files I rely on (confirmed to exist): [exact paths]. If a required one is missing: STOP and tell me.
Branch: phase-N. PR to main. Preview deploy if possible. Do not merge until approved.
Non-negotiables: Parts 3, 4.2, 5, 9.3 and 10 of the master prompt.
```

### 15.2 Footer for every phase (what you post when done)
```
## Report
- Built, by part. Deviations from the files and why (or "none").
- Screenshots: [exact list at 390, 768, 1024, 1440] attached.
- Tests: what ran and the result. Lighthouse medians where relevant.
- Placeholders still in use (from _todo.md).
- Open questions (batched, with my recommended default).
- Remaining issues.
STOP. I will not start Phase N+1 until "APPROVED, start Phase N+1".
```

### 15.3 Status line (post at the top of every report)
```
PHASE   P0 ✅ · P1 ✅ · P2 ⏳ · P3 ◻ · P4 ◻ · P5 ◻ · P6 ◻ · P7 ◻ · P8 ◻ · P9 ◻
BLOCKERS  [CONFIRM] left: N · assets missing: N · access needed: [list]
NEXT    Waiting for: [approval | assets | answers]
```

---

## PART 16. Open items you must never guess

Opening hours (OPD, phone, Sunday and holidays), WhatsApp number, clinic email (the current address contains the misspelling "cliic"), Google Maps pin and coordinates, Karnataka Medical Council number string to display (the certificate shows both "DLH 2009 0000353 KTK" and "0000353"), National ART and Surrogacy Registry number, years in practice, languages spoken, legal entity name, privacy contact, domain and DNS access, Resend and Turnstile keys, social links. All appear as `[CONFIRM]` in the content. Show a chip in development. Do not fill them in.

---

**Start Phase 0 now.** Confirm the resource files, run the content audit, and post the Phase 0 report. Then STOP.