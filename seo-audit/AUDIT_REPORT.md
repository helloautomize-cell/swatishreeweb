# SEO / AEO / GEO Audit — EVE Women and Fertility Clinic

**Date:** 24 October 2026 · **Scope:** full production build (`SITE_INDEXABLE=1`, `SITE_URL=https://evefertilityclinic.com`), 107 indexable pages crawled as Googlebot; byte-identical parity verified for GPTBot, ClaudeBot, PerplexityBot and ChatGPT-User.

## 1. Scores

| Area | Score /100 |
|---|---|
| Crawling & AI-bot access | 93 |
| Technical (metadata, canonicals, media, UX signals) | 90 |
| Schema | 94 |
| E-E-A-T | 88 |
| Pillar & supporting linking | 82 |
| FAQs | 76 |
| Entities & semantics | 84 |
| Keywords | 86 |
| Content humanness | 70 |
| AEO/GEO readiness | 88 |
| **Overall** | **85** |

**Issue counts:** 0 × P0 · 3 × P1 · 9 × P2 · 12 × P3 (incl. 1 client-input batch).

**Top 5 fixes**
1. **SEO-001** — Convert 261 Title Case H3 headings in the 59 new blog posts to sentence case (biggest AI fingerprint).
2. **SEO-002** — Resolve 3 cannibalising legacy/cluster post pairs (merge + 301 or clearly split intent).
3. **SEO-003** — Fix the 2 broken markdown tables (blank-line-separated rows render as literal `|` text).
4. **SEO-004** — Expand ~45 supporting-post FAQ answers from 17–38 words to 40–60 words.
5. **SEO-007** — Give the 3 legacy posts real `datePublished` dates (they currently render "Published ·" empty).

## 2. Checklist

### Crawling and indexing

| # | Item | Status | Evidence |
|---|---|---|---|
| 1 | robots.txt exists, links sitemap, blocks nothing needed | **PASS** | `robots.ts` → `User-Agent: * Allow: /`, `Sitemap: https://evefertilityclinic.com/sitemap.xml` |
| 2 | AI bots allowed | **PASS** | Explicit groups for Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, Applebot-Extended + catch-all. Claude-User/Perplexity-User/CCBot not named but permitted via `*` (SEO-014). |
| 3 | No middleware/firewall blocks | **PASS** | No middleware file; identical 135 KB HTML returned to Googlebot, GPTBot, ClaudeBot, PerplexityBot, ChatGPT-User on sampled post. |
| 4 | Sitemap: all indexable pages, absolute URLs, real lastmod | **PASS** | 107 URLs, all 200, `evefertilityclinic.com` absolute. lastmod = real `lastReviewed` dates; missing only on `/` (CONFIRM, SEO-015). |
| 5 | llms.txt | **PASS** | `public/llms.txt` + `llms-full.txt`, generated from live content (107 pages, doctor, services, clusters). |
| 6 | No accidental noindex | **PASS** | SITE_INDEXABLE gate: with =1 no `noindex` anywhere; `/styleguide`, `/thank-you`, 404 deliberately `noindex` ✓. |
| 7 | metadataBase + self canonical | **PASS** | `metadataBase` set; all 107 pages emit absolute self-referencing canonical on `evefertilityclinic.com`. |
| 8 | One host version | **PARTIAL** | Canonical/OG/JSON-LD all hard-code `https://evefertilityclinic.com`; 308 trailing-slash redirect verified. www→apex + http→https must be enforced at host level (SEO-021, unverifiable locally). |
| 9 | Real 404 | **PASS** | `/nonexistent-page-xyz/` → 404 + `noindex` meta. |

### Every word visible to bots

| # | Item | Status | Evidence |
|---|---|---|---|
| 10 | Content, headings, FAQs, byline, dates, links, schema in raw HTML | **PASS** | Verified in raw HTML: `Written by`, `Medically reviewed by`, `Published/Updated` `<time>` elements, FAQPage JSON-LD, breadcrumb nav, all section text — no JS needed. |
| 11 | No client-only content | **PASS** | All content is SSG in `resources/content/*.md` → static HTML; FAQs render inside `<details>`/DOM, not fetched. |
| 12 | Internal links are real `<a href>` | **PASS** | All links via `next/link`; no onClick navigation found. |

### On-page

| # | Item | Status | Evidence |
|---|---|---|---|
| 13 | Unique title 50–60 + description 140–160 | **PARTIAL** | All 107 unique. 4 titles 30–37 chars, 2 legal descriptions 109 chars (SEO-009). |
| 14 | One H1, clean hierarchy | **PASS** | h1count=1 on all 107; H2/H3 nest correctly. |
| 15 | Clean descriptive URLs | **PASS** | `/blog/slug/`, `/conditions/pcos/` etc.; long but descriptive. |
| 16 | Image alt + width/height + next/image | **PASS** | All `next/image` with dimensions; content photos descriptive (`"Dr. Swati Shree in a white coat standing in the clinic corridor."`); decorative badges/covers correctly `alt=""` inside titled links. |
| 17 | OG + Twitter tags | **PASS** | og:title/description/url/image + twitter card on all pages; per-page generated OG cards (`/og/*.png`, 200). |
| 18 | Visible breadcrumbs on inner pages | **PARTIAL** | All except `/blog/` index (SEO-010). |
| 19 | Core Web Vitals | **PARTIAL** | Not lab-measured. SSG + `next/font` + `next/image` with `priority` on hero, minimal client JS → likely green; run Lighthouse after launch (field data). |
| 20 | No broken/redirected internal links | **PASS** | `build-check` enforces resolution at build; 0 orphans, all links resolve. |

### Schema

| # | Item | Status | Evidence |
|---|---|---|---|
| 21 | One `@graph` per page, stable `@id`s | **PASS** | `#clinic`, `#place`, `#dr-swati-shree`, `#website`, `#service-consultation` stable across all pages. |
| 22 | Article schema complete | **PASS** | `BlogPosting`+`MedicalWebPage` with author, reviewedBy, datePublished, dateModified, lastReviewed, about, publisher, citation, wordCount, articleSection, mentions, speakable. |
| 23 | Physician schema | **PASS** | `Physician`+`Person` with KMC registration identifier, hasCredential (MBBS/DNB/MRCOG/fellowship), alumniOf, memberOf, award, knowsAbout, image, url. |
| 24 | Service/condition types | **PASS** | `MedicalCondition` on /conditions/*; procedure/test about-nodes on services/treatments; `Service` consultation node. |
| 25 | BreadcrumbList + FAQPage | **PASS** | BreadcrumbList all inner pages; FAQPage on 97 pages. |
| 26 | Schema matches visible content, no dupes/placeholders | **PASS** | Single graph per page, generated from same data as visible page; CONFIRM values pruned (never emitted). |

### YMYL / E-E-A-T

| # | Item | Status | Evidence |
|---|---|---|---|
| 27 | Dedicated crawlable doctor page, linked from articles | **PASS** | `/dr-swati-shree/` with photo, quals, KMC reg, experience, memberships; byline links to it from every post. |
| 28 | Written by + reviewed by + dates near top | **PARTIAL** | "Written by Dr. Swati Shree · Published · Updated" in post header; "Medically reviewed by" only in bottom ReviewerBox (SEO-013). |
| 29 | Trust pages exist + footer-linked | **PASS** | About, Contact (address/phone/map), Editorial Policy, Medical Disclaimer, Privacy, Terms, Patient Rights, Accessibility — all in footer. |
| 30 | Claims cite authoritative sources, links work | **PARTIAL** | Citations to NHS, ACOG, NICE, WHO, NICHD, ASRM in JSON-LD + visible `### Sources` details on 85 pages; 4 pages schema-only (SEO-008). Link liveness not re-verified externally. |
| 31 | No risky claims | **PASS** | All "guarantee/cure" usages are disclaimers ("does not guarantee", "no diet can cure"). No "best doctor" claims. |
| 32 | "When to see a doctor" on condition pages | **PASS** | All 10 condition pages have it. |
| 33 | First-hand clinical experience + Indian context | **PARTIAL** | Good doctor-voice specificity (Bangalore localities, ART Act references) but zero INR cost content (SEO-011). |
| 34 | NAP consistent | **PASS** | Single source `site-config.ts` feeds footer, contact page, schema — name/address/phone identical everywhere. |

### Pillar & supporting

| # | Item | Status | Evidence |
|---|---|---|---|
| 35 | Every pillar has 5 supporting articles | **PASS** | 10 clusters × 6 posts each (see §5). |
| 36 | Pillar links all 5 supports in body | **PASS** | All 10 pillars link to all 5 supports in body copy (5–9 links each). |
| 37 | Supports link pillar early + ≥2 siblings | **PARTIAL** | All 50 link to pillar ("This article is part of our X guide"); 7 have <2 siblings (SEO-005). |
| 38 | Pillar/supports link to service + doctor pages | **PARTIAL** | Doctor page linked via byline on all posts; service links exist via `related:` on most — but entire Endometriosis cluster has zero service/treatment links (SEO-006). |
| 39 | Descriptive varied anchors | **PASS** | No "click here"/"read more"; anchors are topical ("IUI treatment", "How Many IUI Cycles Should You Try Before IVF?"). |
| 40 | No orphans; ≤3 clicks deep | **PASS** | BFS from home: all 107 within 3 clicks, 0 orphans. |

### FAQs

| # | Item | Status | Evidence |
|---|---|---|---|
| 41 | 4–8 unique real-patient FAQs per pillar/support/service/condition | **PASS** | Every content page has 4–8; wording is page-specific patient questions. |
| 42 | Direct answer first, 40–60 words | **PARTIAL** | Direct-answer-first ✓; length fails on ~45 supporting posts (17–38 words, SEO-004). |
| 43 | FAQs in raw HTML matching FAQPage schema verbatim | **PASS** | Both generated from same parse; spot-checked identical. |

### Entities, keywords, semantic writing

| # | Item | Status | Evidence |
|---|---|---|---|
| 44 | Primary + related entities covered per page | **PARTIAL** | Strong coverage (symptoms/causes/tests/treatment/next steps); cost entity absent sitewide (SEO-011); `mentions` empty where `entities:` unset (SEO-022). |
| 45 | Primary entity defined in first 100 words | **PASS** | Every post opens with "Quick answer:" quotable definition (also `speakable` targets `.answer-first`). |
| 46 | H2 answers one question, names entity | **PARTIAL** | H2s are question-form and topical ✓, but Title Case formatting (SEO-001). |
| 47 | Medical + plain term pairing on first mention | **PASS** | e.g. "intrauterine insemination (IUI)", "oocyte cryopreservation (egg freezing)". |
| 48 | Primary keyword in title/H1/URL/first-100-words/H2/desc | **PASS** | Verified on samples; `keywords:` frontmatter + `keywords` schema field. |
| 49 | No cannibalisation | **FAIL** | 3 legacy/cluster pairs overlap intent (SEO-002). |
| 50 | Quotable specifics: numbers, INR costs, timelines, tables | **PARTIAL** | Numbers/timelines/comparison tables ✓; INR costs absent (SEO-011). |

### AI writing & agent fingerprints

| # | Item | Status | Evidence |
|---|---|---|---|
| 51 | ChatGPT tells | **PARTIAL** | 261 Title Case H3s (59 files) is the dominant tell. No delve/tapestry/embark/empower/seamless/"comprehensive guide"/"In conclusion"/emoji. "whether you" hits are benign medical phrasing, not the "whether you're X or Y" template. |
| 52 | Claude tells | **PASS** | Zero em/en dashes (build-enforced), no "That said…" patterns (1 benign "that said"), no heavy hedging. |
| 53 | Uniformity tells | **PARTIAL** | Same H1→Quick answer→In brief→sections→FAQs→boxes template on all 63 posts; unique per-post intros otherwise (SEO-018). |
| 54 | Devin/Windsurf fingerprints | **PASS** | No lorem ipsum/John Doe/example.com/TODO/console.log/CRA meta; `/styleguide` + `/thank-you` noindexed; no duplicate metas/alts/FAQs. "Published ·" empty chip on 3 posts is the only visible artifact (SEO-007). |

### Extra checks

| # | Item | Status | Evidence |
|---|---|---|---|
| 55 | lang en-IN, favicon+manifest, no mixed content | **PARTIAL** | `lang="en-IN"` ✓, favicon+icon+apple-icon ✓, no mixed content (all self-hosted/https); **no web manifest** (SEO-016). |
| 56 | Unique service/location pages, GBP-consistent NAP | **PASS** | Pages are unique clinical content, not city-swapped; NAP single-sourced. GBP cross-check at launch (client input). |
| 57 | Entity sameAs links (Wikipedia/Wikidata/MeSH) | **PARTIAL** | City/Bengaluru + MRCOG credential have sameAs; doctor sameAs pending (CONFIRM); condition/procedure about-nodes lack sameAs (SEO-017). |
| 58 | PAA/cost/vs questions answered | **PARTIAL** | "vs" posts exist (IUI vs IVF, AMH vs egg quality); FAQs map PAA well; cost questions unanswered (SEO-011). |
| 59 | Reading level 7–9; outdated-fact check | **PARTIAL** | FK ≈9–13 (medical vocabulary inflates it); content medically conservative, nothing flagged as outdated. |
| 60 | No self-serving ratings/fake testimonials/stock doctor photos | **PASS** | No review/aggregateRating schema, no testimonials, real doctor photos. |
| 61 | NMC/DMR Act compliance | **PASS** | No cure/guarantee claims; disclaimers everywhere. |
| 62 | Correct rel attributes | **PASS** | External links `noopener noreferrer`; agency credit `noopener nofollow`; no affiliate links present. |
| 63 | Top-5 AI-query quotability | **PARTIAL** | See §7 — strong for definitions/timelines/when-to-see; weak for cost and "best clinic/doctor near me" commercial queries. |

## 3. Issues

Full machine-readable list: [`audit.json`](./audit.json). Summary:

| ID | Pri | Issue |
|---|---|---|
| SEO-001 | P1 | 261 Title Case H3s across 59 blog files |
| SEO-002 | P1 | 3 legacy posts cannibalise cluster articles |
| SEO-003 | P1 | 2 posts: markdown tables render as literal pipe text |
| SEO-004 | P2 | ~45 supporting posts: FAQ answers 17–38w (<40–60) |
| SEO-005 | P2 | 7 supports with <2 sibling links |
| SEO-006 | P2 | Endometriosis cluster: zero service/treatment links |
| SEO-007 | P2 | 3 posts render "Published" with empty date; no schema datePublished |
| SEO-008 | P2 | 4 pages: citations in JSON-LD but no visible Sources block |
| SEO-009 | P2 | 4 short titles, 2 short descriptions |
| SEO-010 | P2 | `/blog/` lacks visible breadcrumb |
| SEO-011 | P2 | No INR cost content sitewide |
| SEO-012 | P2 | Windows `autocrlf` checkout breaks `build-check` (frontmatter regex) |
| SEO-013 | P3 | "Medically reviewed by" only at bottom of posts |
| SEO-014 | P3 | robots.txt omits some AI UAs; styleguide/thank-you not disallowed (already noindex) |
| SEO-015 | P3 | Home lacks sitemap lastmod |
| SEO-016 | P3 | No web manifest |
| SEO-017 | P3 | Doctor sameAs empty; about-nodes lack Wikipedia/MeSH sameAs |
| SEO-018 | P3 | Identical article template on all 63 posts |
| SEO-019 | P3 | ~120 CONFIRM/[date] placeholders — client inputs |
| SEO-020 | P3 | Reading level FK ~9–13 |
| SEO-021 | P3 | www/http host canonicalisation pending at infra level |
| SEO-022 | P3 | `mentions[]` empty on posts without `entities:` frontmatter |
| SEO-023 | P3 | Root fallback description thin |

## 4. Page-by-page table

See [`page-table.md`](./page-table.md) (107 rows) and machine data in [`page-table.json`](./page-table.json). Columns: URL, page type, cluster, title/description length, byline, dates, FAQ schema, internal links in/out.

**AI-likeness scores:** the site is unusually low-tell vs typical AI content — deterministic template + zero banned-phrase hits. Per-post scores: pillars ≈ 35–45 (uniform template, some Title Case), supports ≈ 30–40 (Title Case H3s + short FAQs + same template), conditions/services ≈ 20–30 (sentence case, doctor voice, more varied). The 5 "worst" sentences are structural rather than prose quality:

- `"Step 4: Trigger Injection and Egg Collection"` — Title Case robotic step-heading pattern (ivf-process post, repeated sitewide).
- `"How Do They Compare?"` + identical `### What ...`/`### Who ...` question scaffolding on nearly every post — uniform section order is the strongest machine signature.
- `"This article is part of our IUI treatment guide."` — templated cluster sentence repeated verbatim on all 50 supports (good for linking, but identical phrasing = footprint).
- `"Written by Dr. Swati Shree · Published  · Updated 4 September 2026"` — the empty-CONFIRM dangling "Published" on 3 posts.
- `"A fertility specialist looks at all of these together before suggesting whether to keep trying, try IUI or go straight to IVF."` — representative of the uniform measured tone + repeated "whether to X, Y or Z" cadence across posts.

## 5. Cluster table

| Pillar | Cluster | Supports (5) | Missing links |
|---|---|---|---|
| /blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/ | Endometriosis | adenomyosis-and-fertility; can-endometriosis-cause-infertility; endometriosis-and-ivf; endometriosis-symptoms-not-to-ignore; pregnant-with-endometriosis-without-ivf | **0 service/treatment links cluster-wide** (SEO-006); adenomyosis + endometriosis-and-ivf 1 sibling |
| /blog/low-amh-ovarian-reserve-fertility/ | Low AMH & Ovarian Reserve | amh-vs-egg-quality-difference; can-you-get-pregnant-naturally-low-amh; low-amh-and-ivf-treatment; low-amh-at-30-35-40-age; ovarian-hyperstimulation-syndrome-warning-signs | OHSS post: 1 sibling |
| /blog/pregnancy-after-ivf/ | Pregnancy After IVF | blastocyst-transfer-embryo-grading; early-pregnancy-after-ivf-warning-signs; embryo-implantation-after-ivf-timeline; frozen-embryo-transfer-process-preparation; positive-pregnancy-test-after-ivf-next-steps | blastocyst + frozen-embryo: 1 sibling |
| /blog/female-infertility-causes-symptoms-tests-treatment/ | Female Infertility | blocked-fallopian-tubes; female-infertility-tests; fibroids-and-fertility; how-long-try-conceive; unexplained-infertility | fibroids: 1 sibling |
| /blog/fertility-after-thirty-five-egg-quality-age-treatment/ | Fertility After 35 | egg-freezing-fertility-preservation; egg-quality-after-35; fertility-after-35-when-to-seek-help; ivf-after-35; pregnancy-after-40 | ivf-after-35: 1 sibling |
| /blog/recurrent-miscarriage-causes-tests-treatment/ | Recurrent Pregnancy Loss | genetic-testing-in-ivf-pgt-a; hysteroscopy-for-infertility; recurrent-miscarriage-recurrent-pregnancy-loss; tests-after-recurrent-miscarriage; thyroid-problems-and-fertility | genetic-testing, hysteroscopy, thyroid: 1 sibling each |
| /blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/ | IVF Treatment | happens-after-embryo-transfer; how-long-does-ivf-take; ivf-process-step-by-step; ivf-success-factors; when-ivf-recommended | how-long-does-ivf-take: 1 sibling |
| /blog/iui-treatment-intrauterine-insemination/ | IUI | how-many-iui-cycles-before-ivf; iui-success-factors; iui-vs-ivf; ovulation-tracking; what-to-do-after-iui | ovulation-tracking: 1 sibling |
| /blog/male-infertility-causes-semen-analysis-treatment/ | Male Infertility | icsi-male-infertility; low-sperm-count-treatment; male-infertility-causes-symptoms; semen-analysis-explained; why-both-partners-need-fertility-evaluation | all ≥2 siblings ✓ |
| /blog/pcos-fertility-ovulation-iui-ivf/ | PCOS & Fertility | letrozole-pcos-ovulation-induction; pcos-age-metabolic-health; pcos-ivf-when-needed-or-not; pcos-ovulation-irregular-periods; pcos-pregnancy-natural-conception | letrozole + pcos-age: 1 sibling each |

All pillars link all 5 supports in body copy ✓. All supports link their pillar ✓.

**Unclustered legacy posts** (cannibalisation candidates, SEO-002): `/blog/pcos-and-getting-pregnant/`, `/blog/fertility-tests-explained/`, `/blog/when-to-see-a-fertility-doctor/`.

## 6. Needs from client (lowest priority)

1. OPD opening/closing times (24-hour HH:MM) + display hours — feeds schema `openingHoursSpecification` + contact page.
2. Clinic email address.
3. National ART and Surrogacy Registry number — feeds `MedicalClinic` schema.
4. Instagram / Facebook / YouTube / LinkedIn URLs — feeds Physician/clinic `sameAs`.
5. Payment methods accepted — feeds `paymentAccepted`.
6. Last-updated dates for legal pages.
7. `datePublished` for the 3 legacy posts (or decision to merge them per SEO-002).
8. Approved INR price ranges (for SEO-011 cost content) — optional but high AEO value.
9. Google Business Profile name/address/phone for the NAP consistency check at launch.

## 7. Top-5 AI-query readiness (item 63)

| Query | What an AI engine needs to quote EVE | Status |
|---|---|---|
| "IVF success rate after 35" / "IVF process step by step" | Quotable definition + numbers + reviewed-by medical authority | **Ready** — Quick answer blocks, FAQPage, BlogPosting with author/reviewer/citations. Missing: clinic-specific success context (deliberately avoided — good YMYL choice). |
| "IUI vs IVF which is better" | Direct comparison | **Ready** — dedicated post + table + FAQs (fix SEO-003 table first). |
| "IVF/IUI cost in Bangalore" | INR ranges | **Missing** — AI will cite Practo/competitors instead (SEO-011). |
| "PCOS pregnancy" / "low AMH natural pregnancy" | Quotable direct answers | **Ready** — dedicated supports with quick answers. |
| "best fertility clinic/doctor in Whitefield/Gunjur" | Entity + local signals + reputation | **Partial** — MedicalClinic + Physician + geo + areaServed strong; GBP/reviews/social proof pending client inputs. |

## Notes on method

- Audited the **as-launched** state (`SITE_INDEXABLE=1`). In the repo's current default the whole site correctly serves `Disallow: /` + `noindex` + `X-Robots-Tag` — the launch gate working as designed.
- Core Web Vitals not lab-measured (item 19 marked PARTIAL); everything is SSG so risk is low.
- External citation link liveness not re-fetched (offline audit of generated output).
- **Build environment caveat:** on this machine `core.autocrlf=true` produced CRLF working-tree files for the newly pulled blog content, which made `build-check` report 114 phantom "link does not resolve" errors and fail the build. Normalizing to LF fixed it; root-cause fix is `.gitattributes`/regex hardening (SEO-012). The pulled-in files' line endings are currently normalized to LF in the working tree.
