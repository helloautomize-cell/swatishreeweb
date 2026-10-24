# SEO Fix Changelog — 24 Oct 2026

Working log for the Prompt-2 fix pass. All content edits were made in `resources/docs/new-website-content.md` (single source) and regenerated via `npm run split`. Changes are uncommitted (repo rule: no branches/commits).

## Crawling & indexing
- `src/app/robots.ts` — extended the explicit AI-bot allow list with Claude-User, anthropic-ai, Perplexity-User, CCBot; added `Disallow: /styleguide/ /thank-you/ /api/` on the catch-all (SEO-014). Verified in served robots.txt.
- `src/app/manifest.ts` — new web manifest (name, icons, theme_color, en-IN); now served at `/manifest.webmanifest` (SEO-016).

## Technical
- `.gitattributes` — new; pins `*.md/*.mjs/*.ts/*.tsx/*.json/*.css` to `eol=lf` so Windows `autocrlf` checkouts can't re-break `build-check` (SEO-012).
- `scripts/build-check.mjs` — normalises CRLF→LF when reading content files; the phantom 114-link-error failure mode is gone on any platform (SEO-012).
- `src/app/layout.tsx` — meaningful fallback meta description (SEO-023).
- `src/components/pages/BlogIndexPage.tsx` — visible breadcrumb added to `/blog/` (SEO-010).
- `src/components/pages/PostPage.tsx` — "Medically reviewed by Dr. Swati Shree, MBBS, DNB (OBG), MRCOG (UK)" added to the post header meta (SEO-013).
- `src/lib/schema/graph.ts` — `mentions[]` falls back to the `about` entity name when `entities:` is unset (SEO-022); `about` nodes now emit curated `sameAs` Wikipedia links for ~40 medical entities (SEO-017).
- Doc fix: 12 blank lines removed between table rows → the 2 broken tables on `/blog/amh-vs-egg-quality-difference/` and `/blog/iui-vs-ivf-which-fertility-treatment/` now render as real `<table>` (SEO-003). Verified: 1 `<table>` in served HTML.

## Content humanness (SEO-001)
- 474 Title Case `### ` headings sentence-cased across the doc (+31 post-fixes for the May-verb, clinic proper name, and "Step N:" colon cases). Example: `What Is IVF and How Does It Work?` → `What is IVF and how does it work?`. Verified in served H2s.

## FAQs (SEO-004)
- 225 FAQ answers expanded toward the 40–60-word target by appending a concrete detail + next-step sentence (site voice, no invented facts). Applied via `seo-audit/faq-extract.mjs` + `seo-audit/faq-patch-1.json` across all 44 posts that had <38-word answers.

## Pillar linking
- SEO-005: added one sibling link in `posts:` on 7 under-linked supports (fibroids, genetic-testing, hysteroscopy, thyroid, ovulation-tracking, letrozole, pcos-age).
- SEO-006: added `/treatments/ivf/` + `/services/fertility-evaluation/` to `related:` on all 6 Endometriosis-cluster posts. Verified live.

## E-E-A-T / dates / sources
- SEO-007: real `datePublished` on the 3 legacy posts (2026-09-03/04, matching their review dates) — no more empty "Published ·" and `datePublished` is back in JSON-LD.
- SEO-008: converted 4 inline `Sources:` trailers into visible `### Sources` sections (fertility-tests-explained, pcos-and-getting-pregnant, when-to-see-a-fertility-doctor, your-fertility-journey).
- SEO-009: lengthened 4 titles (thyroid, endometriosis-cause, egg-freezing, ivf-process) toward 50–60 chars.

## Keywords / intent (SEO-002)
- Legacy posts re-pointed at distinct intents: `pcos-and-getting-pregnant` retitled "Evidence, Options and Care" with new description (vs cluster's natural-conception focus); `when-to-see-a-fertility-doctor` retitled "Signs You Shouldn't Wait" (vs cluster's time-to-try rule). `fertility-tests-explained` already targets the both-partners overview vs the female-only cluster post.

## AEO gaps (SEO-011)
- Added one honest cost FAQ (no invented prices — "written estimate at consultation") to `/treatments/iui/`, `/treatments/egg-freezing/`, `/treatments/tesa-pesa/`, `/services/tubal-patency-test-hsg/`. IVF page already has a cost section. INR price ranges remain a client input.

## Verified
- `npm run typecheck` clean; `npm run lint` clean; `npm run build` green (117 routes, build-check OK).
- Spot checks on served build: `<table>` present, reviewed-by in header, sentence-case H2s, new robots rules, `/blog/` breadcrumb, manifest 200, endometriosis service links, real publish dates.

## Not fixed / client input (carried in audit.json)
- SEO-011 full INR price ranges, SEO-019 ~120 CONFIRM placeholders (hours, email, ART reg, socials, payment, legal dates), SEO-021 www/http redirect at host, doctor `sameAs` URLs, GBP NAP cross-check.
