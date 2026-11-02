# NMC Hygiene Audit — EVE Women and Fertility Clinic

Audit date: 26 October 2026
Scope: this repository (`E:\Automize\swatishreeweb`). **No public production domain is configured** (`SITE_URL` unset, `SITE_INDEXABLE` launch lock active — every page is noindex and robots.txt disallows all), so this is a pre-launch audit of the built site. That is the best possible time to fix these items: nothing found here is yet public.
Method: investigation only. No code or content was changed.

---

## 1. Practice profile (Step 1)

| Item | Finding | Evidence |
|---|---|---|
| Practice type | **P2 — Solo doctor who also does procedures** | Single-doctor outpatient clinic; IUI, scans, HSG and biopsy described as done at the clinic; IVF lab work at associated registered ART centres. `resources/content/about.md` ("It is an outpatient clinic… procedures such as IUI are done here"), `resources/content/treatments/iui.md`, `src/lib/site-config.ts:99` (entityStatement) |
| State / Council | Karnataka — **Karnataka Medical Council** | `src/lib/site-config.ts:23`, `resources/content/dr-swati-shree.md:21` |
| Doctors named | Dr. Swati Shree — MBBS, DNB (OBG), Fellowship in Reproductive Medicine (KJK), MRCOG (UK). **Registration number shown:** "Karnataka Medical Council Reg. No. DLH20090000353KTK" | `resources/content/dr-swati-shree.md:21,97`; `src/lib/facts.ts:9,44`; shown sitewide via `kmcRegLine` in `src/components/pages/PageFoot.tsx:21-22` and footer `src/components/shell/SiteFooter.tsx:113`; JSON-LD `src/lib/schema/nodes.ts:211-215,249-254` |
| Procedures described on site | **Yes** — IUI, IVF, egg freezing, TESA/PESA, HSG, endometrial biopsy, early pregnancy scan | `resources/content/treatments/*.md`, `resources/content/services/*.md` |

## 2. Feature inventory (Step 2)

| # | Feature | Present? | Evidence |
|---|---|---|---|
| F1 | Testimonials / reviews / ratings | **No** | Deliberately excluded: `resources/content/editorial-policy.md:48` "We do not publish patient stories or reviews"; no testimonial content in `resources/content/` |
| F2 | Review/rating schema | **No** | No `AggregateRating`/`Review` anywhere in `src/` (grep clean) |
| F3 | Case studies / patient stories | **No** | "Patient Stories" page was dropped and replaced by `/your-fertility-journey/` (`resources/docs/site-plan.md:604`) |
| F4 | Patient clinical photos, X-rays, before/after | **No** — but one staged photo shows an identifiable couple presented as patients | `doctor-consultation-couple-warm-room-5x3.png`, slot "About / how we work" (`public/images/images-map.json`, id D7) → finding NMC-03 |
| F5 | Patient/surgery videos | **No** | No `<video>`, no YouTube embeds in `src/` |
| F6 | Doctor photographs | **Yes** | Home hero `doctor-hero-whitecoat-4x5.jpg` (`src/components/home/HomePage.tsx:65`); "Meet your doctor" `doctor-meet-saree-4x5.jpg` (`HomePage.tsx:210`, `DoctorPage.tsx:71`); avatar `doctor-avatar-1x1.png` in header mini-card (`SiteHeader.tsx:19`), hero doctor chip (`HomePage.tsx:111`), blog AuthorBox (`PageFoot.tsx:106`); consultation photos (D7, D8); MRCOG ceremony + award photos slotted to the doctor page |
| F7 | Numbers / counters / stat tiles | **Yes, limited** | "16 years in practice" (`src/lib/facts.ts:11,46`); "founded December 2025". No patient counts, surgery counts, or success-rate tiles — explicitly refused in `resources/content/treatments/iui.md` "We do not quote pregnancy rates" |
| F8 | Awards / rankings / media logos | **Yes** | "16th GCU International Women's Day Award" — home glass chip (`HomePage.tsx:211-214`), doctor page (`dr-swati-shree.md:70`, year is `[CONFIRM]`), about.md, JSON-LD `award` (`nodes.ts:260`). No logo walls, no paid-ranking badges |
| F9 | Equipment / facility descriptions | **Yes, factual** | Ultrasound, scan, consultation-room descriptions; no superiority or "only centre" claims |
| F10 | Fees / packages / costs | **Yes, policy only** | `appointments-cancellation-refund.md`, `patient-rights.md` — "written estimate before treatment"; **no published prices or packages** |
| F11 | Offers / discounts / camps / referral rewards | **No** | None found in content |
| F12 | Educational content | **Yes** | 60+ blog posts, `/faqs/`, `/conditions/*`, `/your-fertility-journey/`, dedicated `/medical-disclaimer/` |
| F13 | Forms / WhatsApp / chat / pop-ups | **Yes** | Appointment form (`src/components/AppointmentForm.tsx`) with required **unticked** consent checkbox + Privacy Policy link; WhatsApp `wa.me` links, desktop FAB (`WhatsAppFab.tsx`), mobile action bar; click-to-load map (`MapCard.tsx`); **no pop-ups, countdowns, exit-intent or chatbot** |
| F14 | AI content | **Partial** | Copy is AI-assisted in origin and doctor-reviewed (authorship wording still `[CONFIRM]` at `editorial-policy.md:21`); no AI images of people (all imagery is client photos, commissioned illustration, or inline SVG); no AI chatbot |
| F15 | Analytics / pixels / cookies | **Yes** | GA4 behind Consent Mode v2, all ad signals permanently denied, PII-stripped page URLs (`src/lib/analytics.ts`); accept/reject banner (`CookieBanner.tsx`); Cloudflare Turnstile on the form; Resend for server-side email |
| F16 | Third-party credits / links | **Yes** | Footer "Built & Marketed by Automize Media Labs" (`SiteFooter.tsx:116-121`) → finding NMC-01. No pharma/device mentions, no affiliate links, no platform badges |
| F17 | Announcements / greetings | **No** | None found |
| F18 | Doctor directory | **No** | Solo doctor |
| F19 | Social / external profiles | **Partial** | Google Business Profile link live (`site.mapsUrl`, `nodes.ts:159`); Instagram/Facebook/YouTube/LinkedIn are `[CONFIRM]` and not rendered (`site-config.ts:55-58`); WhatsApp Business number linked |

## 3. Applicability (Step 3)

### Must-haves

| Check | Applies? | Status |
|---|---|---|
| M1 Registration disclosure | Always | **Satisfied** — name, qualifications, council and reg. no. on doctor page, footer, every reviewer box, and JSON-LD. (Open client input: which exact string to display — certificate "DLH 2009 0000353 KTK" vs renewal "0000353", `resources/docs/credentials-facts.md:12`) |
| M2 Privacy notice + consent | F13, F15 | **Structurally satisfied** — unticked required checkbox, linked policy covering what/why/retention/rights; **but** grievance contact, privacy email and retention periods are `[CONFIRM]` → NMC-07 |
| M3 Risks and limitations | Procedures described | **Satisfied** — "Risks and limits" on every procedure page (`treatments/iui.md:58`, `treatments/ivf.md:58`, `treatments/egg-freezing.md:58`, `treatments/tesa-pesa.md:52`, `services/tubal-patency-test-hsg.md`, `services/endometrial-biopsy.md:45`); outcomes-vary statements throughout |
| M4 AI disclosure | F14 | **Missing** — no AI-assistance disclosure in editorial policy → NMC-08 |
| M5 Medical disclaimer | F12 | **Satisfied** — per-page line in `ReviewerBox` (`PageFoot.tsx:25-28`) and `AuthorBox` (`PageFoot.tsx:141-149`) plus dedicated `/medical-disclaimer/` |

### Prohibition modules

| Module | Applies? | Findings |
|---|---|---|
| C1 Claims and wording | Always | NMC-05, NMC-09, NMC-10. Otherwise clean: no superlatives, no outcome promises (all "guarantee" matches are *negations*), no fear/urgency language, no DMR disease-cure claims. Reproductive-immunology page explicitly disclaims unproven therapy |
| C2 Testimonials/reviews | N/A (F1, F2 = no) | — |
| C3 Cases/patient stories | N/A (F3 = no) | — |
| C4 Patient images/video | Applies — staged patient-presented photo exists | NMC-03 |
| C5 Doctor photos | F6 | NMC-02 |
| C6 Numbers/awards/media | F7, F8 | NMC-04. "16 years in practice" is factual and allowed |
| C7 Equipment/facilities | F9 | None — factual descriptions only |
| C8 Fees/offers | F10 (F11 = no) | None — no published prices, no offers; "written estimate" is the compliant pattern |
| C9 Educational content | F12 | None — posts are genuinely educational; single closing consult line per post is acceptable; sources and reviewer dates shown |
| C10 Solicitation/CTAs | F13 | None — no pop-ups, countdowns or auto-open; WhatsApp FAB is user-initiated; CTAs are plain booking/contact |
| C11 AI | F14 | NMC-08 (no AI people, voices or chatbot — keep it that way) |
| C12 Data protection | F13, F15 | None beyond NMC-07 — consent-gated GA4, click-to-load maps, no PII in URLs (only `utm_*` retained), server-side form handling, no health data to ad platforms. Turnstile is a strictly-necessary bot check; acceptable |
| C13 Third parties/agency | F16 | NMC-01 |
| C14 Announcements | N/A (F17 = no) | — |
| C15 Institution rules | N/A (P2, no directory) | — |
| C16 Off-site checklist | F19 (partial) | See section 6 |

## 4. Executive summary

**Overall risk: Moderate.** Zero CRITICAL items. The site was built with the NMC rules already in mind — no testimonials, no ratings schema, no success-rate marketing, no prices or offers, consent-gated analytics, risk sections on every procedure page, and per-page medical disclaimers. The three HIGH findings are an explicit agency marketing credit in the footer (a direct 8.1(ii) exposure), doctor photography used promotionally in the home hero and feature sections (9.2), and one photo showing an identifiable couple presented as patients (6.1–6.4, consent unverified). Five MEDIUM items are disclosure/verification gaps that mostly collapse into two client confirmations (ART registration details, award details). Because the site is still behind the launch lock, all of this is fixable before anything is public.

**Counts:** CRITICAL 0 · HIGH 3 · MEDIUM 5 · LOW 4 — 12 findings.

**Top 5 fixes:**
1. Remove "Built & Marketed by Automize Media Labs", or reduce it to a neutral credit (NMC-01).
2. Take the doctor portrait out of the home hero and feature sections; keep one plain photo on the profile page (NMC-02).
3. Resolve the identifiable-couple photo: document model consent and who is pictured, or replace it (NMC-03).
4. Complete the award citation (year + basis, independently verifiable) or remove it (NMC-04).
5. Confirm the National ART Registry number, then standardise the "ART Level 1" and partner-centre wording (NMC-05, NMC-06).

## 5. Findings

### HIGH

---

**NMC-01 — HIGH — Clause 8.1(ii) (and 8.1(vii),(xi) by adjacency)**
- **Location:** every page footer — `src/components/shell/SiteFooter.tsx:116-121`
- **Quoted:** `Built & Marketed by <a href="https://www.automizemedialabs.com/">Automize Media Labs</a>`
- **Why it breaches:** 8.1(ii) prohibits an RMP engaging a third party for marketing medical services; a public "Marketed by" credit states that arrangement openly on every page.
- **Compliant alternative:** remove the credit entirely. If attribution is contractually required, use a neutral one: `Website: Automize Media Labs` (keep `rel="noopener nofollow"`). Do not use "marketing", "growth", "SEO" or similar wording anywhere public.
- **SEO/AEO note:** negligible — the footer link is already nofollow. Removing a marketing claim strengthens the trust signal the site otherwise works hard to earn.
- **Client input needed:** none for removal; confirm preferred neutral wording if a credit must remain.
- **Effort:** S

---

**NMC-02 — HIGH — Clause 9.2 (doctor photographs)**
- **Location:** `/` — `src/components/home/HomePage.tsx:65` (hero photo), `:210` (meet-your-doctor photo), `:111` (avatar chip), `:211-214` (award chip over photo); header — `src/components/shell/SiteHeader.tsx:19` (avatar mini-card); all blog posts — `src/components/pages/PageFoot.tsx:105-110` (AuthorBox photo beside a Book button); spec — `resources/content/index.md:23-25`; schema `image` — `src/lib/schema/nodes.ts:217`
- **Quoted:** hero renders `doctor-hero-whitecoat-4x5.jpg` as the primary visual beside "Book Consultation" and "Call" buttons with an "MRCOG" seal chip; "Meet your doctor" repeats a second portrait with an award glass chip.
- **Why it breaches:** 9.2 does not permit a doctor's photograph where the use is self-advertisement, solicitation or promotional publicity. A portrait as the hero visual beside booking CTAs is exactly that context.
- **Compliant alternative (playbook):** keep one plain photo on `/dr-swati-shree/` beside credentials and the registration number (the existing split hero is suitable). Replace the home hero visual with clinic/facility imagery (e.g. `clinic-reception-4x3.jpg` already in the set) or the approved illustrated treatment; remove the avatar from the header mini-card and hero chip (text "Dr. Swati Shree · MRCOG (UK)" suffices); in the AuthorBox either drop the photo or move the `BookButton` out of the box. JUDGEMENT: the 28–40px avatars are lower-risk identification use, but the low-risk option is to remove them everywhere except the profile page. The MRCOG-ceremony and award photos inside the profile page's education timeline are defensible as documentation of factual entries — keep them there only, not in promotional sections. Note all doctor photos are `altApproved: false` pending client review anyway.
- **SEO/AEO note:** no ranking loss — the Physician JSON-LD `image` can keep pointing at the profile photo; E-E-A-T is preserved by the credentials, registration and review dates.
- **Client input needed:** approval of the single profile photo to retain; confirmation that the hero can swap to clinic imagery.
- **Effort:** M

---

**NMC-03 — HIGH — Clauses 6.1–6.4, 8.1(v) (identifiable patient-presented imagery)**
- **Location:** `/about/` (slot "About / how we work") — `public/images/images-map.json` id `D7`, file `doctor-consultation-couple-warm-room-5x3.png` (`resources/images/doctor/`); review the sibling shots `service-fertility-evaluation-4x3.png` (S1, `/services/fertility-evaluation/`), `hub-conditions-4x3.avif`, `blog-when-to-see-3x2.avif` which show the same staged "two adults with a doctor" motif
- **Quoted (alt):** "Dr. Swati Shree consulting a couple in the clinic's warm consultation room."
- **Why it breaches:** the photo shows two adults with clearly identifiable faces presented as patients in a consultation. Under 6.1–6.4, identifiable patient imagery requires documented consent and strictly educational use; on a promotional About page it is prohibited if these are patients — and if they are models, both the consent documentation and the honesty of the presentation need confirmation (C1 accuracy; the pictured clinician should actually be Dr. Swati).
- **Compliant alternative:** (a) confirm in writing who the people are — models/staff with signed consent, or patients with documented consent — and that the doctor pictured is Dr. Swati; then prefer (b) anyway: replace with the unidentifiable-angle version (`doctor-consulting-4x3.png`, patient seen from behind) or an illustration. Identifiable "patient" faces are never the low-risk option.
- **SEO/AEO note:** none — decorative imagery.
- **Client input needed:** who is in the photo, consent on file, whether the clinician is Dr. Swati.
- **Effort:** S–M

### MEDIUM

---

**NMC-04 — MEDIUM — Clause 8.1(iii) (awards)**
- **Location:** `/` — `src/components/home/HomePage.tsx:211-214`; `/dr-swati-shree/` — `resources/content/dr-swati-shree.md:70` ("`[CONFIRM: year]`"); `/about/` — `resources/content/about.md` ("She received the 16th GCU International Women's Day Award"); JSON-LD — `src/lib/schema/nodes.ts:260`
- **Quoted:** `16th GCU International Women's Day Award, Garden City University`
- **Why it breaches:** awards are permitted only if independently verifiable with the awarding body, date and basis disclosed. The body is named but the year is an open `[CONFIRM]` and no basis is stated.
- **Compliant alternative:** once confirmed, cite it fully: "16th GCU International Women's Day Award, Garden City University, [year], for [basis]" with a verifiable source; if it cannot be independently verified, remove it from the chip, page and schema. Also remove the award glass chip from the meet-your-doctor photo per NMC-02.
- **SEO/AEO note:** a fully-cited award is a stronger entity signal than an uncited one; an unverifiable award is a liability.
- **Client input needed:** year, basis, and a link/document that verifies it.
- **Effort:** S

---

**NMC-05 — MEDIUM — Clause 8.1(ix) (verifiable accuracy of institutional claims)**
- **Location:** ~12 occurrences in `resources/docs/new-website-content.md` propagating to 10 generated posts, e.g. `resources/content/blog/pregnancy-after-ivf.md:416` "EVE is an ART Level 1 certified clinic"; `male-infertility-causes-semen-analysis-treatment.md:269`; `endometriosis-fertility-symptoms-diagnosis-treatment-ivf.md:177`; also `patient-rights.md` ("Our ART registration number is `[CONFIRM]`") and `about.md` ("National ART and Surrogacy Registry no. `[CONFIRM]`"); `src/lib/site-config.ts:49`
- **Quoted:** "EVE is an ART Level 1 certified clinic."
- **Why it breaches:** the clinic's National ART and Surrogacy Registry number is still `[CONFIRM]` in `site-config.ts`, so a public "certified / Level 1" claim is currently unverifiable; "certified" is also imprecise — the Act provides registration, not certification.
- **Compliant alternative:** once the client supplies the registry number and scope, standardise to: "EVE is registered under the ART (Regulation) Act, 2021 (registration no. ___); its scope covers fertility assessment, counselling, ovulation induction, follicle monitoring and IUI. IVF laboratory procedures are carried out at associated registered ART centres." If registration is held by the partner centres rather than the clinic, remove the Level-1 claim entirely and state only the actual arrangement.
- **SEO/AEO note:** a verifiable registration number is a strong entity/trust signal; an unverified certification claim invites correction.
- **Client input needed:** registry number, scope of registration, who holds it.
- **Effort:** S

---

**NMC-06 — MEDIUM — Clause 8.1(viii) (referral/third-party solicitation, by adjacency); site-plan never-list**
- **Location:** ~15 occurrences in `resources/docs/new-website-content.md` propagating to ≥10 posts, e.g. `resources/content/blog/pcos-fertility-ovulation-iui-ivf.md:395`, `pregnancy-after-ivf.md:416,472`, `ivf-process-step-by-step-consultation-embryo-transfer.md:47,112`, `male-infertility-causes-semen-analysis-treatment.md:269`, `when-ivf-recommended-situations.md:63`, `fertility-after-thirty-five-egg-quality-age-treatment.md:162`
- **Quoted:** "…partner fertility centres in Bangalore, Apollo Fertility and Motherhood Fertility, where Dr. Swati Shree is a visiting consultant."
- **Why it breaches:** repeating two named commercial centres as "partner" centres across marketing-adjacent blog posts reads as a named referral arrangement — which the project's own site-plan never-list prohibits (`resources/docs/site-plan.md:595`) and the approved resolutions restricted to About and the doctor profile. It is also inconsistent with the still-`[CONFIRM]` arrangement wording on `/treatments/ivf/` and the home FAQ.
- **Compliant alternative:** in blog bodies generalise to "associated, registered ART centres" (the wording already used elsewhere). Keep the names only where they are factual CV entries (About, doctor profile) — and, if the client confirms the arrangement in writing, as a single factual disclosure on `/treatments/ivf/` naming the registered centre(s) where laboratory steps happen, which is legitimate ART-Act transparency rather than promotion.
- **SEO/AEO note:** no loss — naming adds nothing to rankings; consistent "associated, registered ART centres" phrasing is cleaner entity copy.
- **Client input needed:** the actual arrangement and approved wording (already an open CONFIRM).
- **Effort:** M

---

**NMC-07 — MEDIUM — Clause 7.6, DPDP Act 2023 (must-have M2)**
- **Location:** `resources/content/privacy-policy.md` §1 (privacy contact `[CONFIRM]`), §6 (retention periods `[CONFIRM]`), §8 (privacy email + reply window `[CONFIRM]`), §11 (grievance officer `[CONFIRM]`); `editorial-policy.md` §8 (contact email); `appointments-cancellation-refund.md` §8; `patient-rights.md` complaint section
- **Quoted:** "Privacy contact:`[CONFIRM: name, email, phone]`", "`[CONFIRM: name, email, phone, address]`" (grievance officer)
- **Why it breaches:** M2 requires a working notice — what is collected, why, retention, and a grievance contact. The structure is fully built and the form consent is correctly unticked, but the notice is incomplete until these placeholders are filled.
- **Compliant alternative:** client supplies the privacy contact, grievance officer, retention periods and clinic email. `npm run launch-check` already fails while these remain, so this cannot ship silently — the finding is that the inputs are still outstanding.
- **SEO/AEO note:** none; a complete privacy policy is a baseline trust requirement.
- **Client input needed:** yes — the items above.
- **Effort:** S

---

**NMC-08 — MEDIUM — Clause 7.2(c) (must-have M4)**
- **Location:** `resources/content/editorial-policy.md:21` — "Written by: the clinic's content team, working from guidelines and Dr. Swati's clinical approach `[CONFIRM: authorship wording]`"
- **Quoted:** as above — no AI-assistance disclosure anywhere on the site.
- **Why it breaches:** the site copy is AI-assisted in origin and is published after Dr. Swati's review; 7.2(c) requires disclosure of material AI assistance through the editorial policy. The placeholder exists precisely because this wording is unresolved.
- **Compliant alternative:** resolve the CONFIRM with a plain disclosure, e.g.: "Pages are drafted with the help of AI writing tools and are then checked, edited and approved by Dr. Swati Shree before publication. No patient photographs, stories or reviews on this site are AI-generated." Keep the rest of C11 clean: no AI people, voices, quotes or chatbots.
- **SEO/AEO note:** disclosure supports E-E-A-T and pre-empts "undisclosed AI content" criticism; no ranking downside.
- **Client input needed:** approval of the authorship/AI wording.
- **Effort:** S

### LOW

---

**NMC-09 — LOW — Clause 8.1(ix) / polish**
- **Location:** 12 `Pasted text(YYYYMMDD-HHMMSS)` artifacts in `resources/docs/new-website-content.md` (e.g. lines 5371, 7289, 9501), propagating to `resources/content/blog/`: `iui-treatment-intrauterine-insemination.md` (2), `low-amh-ovarian-reserve-fertility.md` (4), `pcos-fertility-ovulation-iui-ivf.md` (3), `pregnancy-after-ivf.md` (2), `recurrent-miscarriage-causes-tests-treatment.md` (1)
- **Quoted:** "…Advanced IVF laboratory procedures are carried out through partner facilities. Pasted text(20261003-120516)"
- **Why it breaches:** stray clipboard artifacts rendering as page text — sloppy on a medical site and unverifiable-looking sourcing.
- **Compliant alternative:** delete every ` Pasted text…` tail in `resources/docs/new-website-content.md` and re-run `node scripts/split-content.mjs` (content files are generated, never edited by hand). Fix alongside NMC-05/06 wording edits in the same pass.
- **SEO/AEO note:** visible artifacts hurt snippet quality and credibility.
- **Client input needed:** no.
- **Effort:** S

---

**NMC-10 — LOW (JUDGEMENT) — Clause 8.1(iii) flagged-word list**
- **Location:** `resources/content/blog/frozen-embryo-transfer-process-preparation.md:51,72,87`; `why-both-partners-need-fertility-evaluation.md:87`; `fertility-after-thirty-five-egg-quality-age-treatment.md:332`
- **Quoted:** "The transfer is quick and usually painless." / "A semen analysis is simple and painless"
- **Why it breaches:** "painless" is on the prohibited outcome-claim list. In context these are factual descriptions of minimally invasive procedures, not marketing promises — hence JUDGEMENT — but the rest of the site already uses the safer pattern.
- **Compliant alternative:** standardise to "most women feel little or no discomfort" / "quick and usually comfortable", matching `iui.md` and `ivf.md`.
- **SEO/AEO note:** none.
- **Client input needed:** no.
- **Effort:** S

---

**NMC-11 — LOW (JUDGEMENT) — Clause 8.1, good practice**
- **Location:** `resources/content/about.md` — "> **Dr. Swati's story.** `[CONFIRM: Dr. Swati approves this text in writing before publishing]` …son was born at 30 weeks and spent 28 days in the neonatal intensive care unit…"
- **Why it is flagged:** the doctor's own narrative is not a prohibited category and contains no patient identifiers (son unnamed, no photo — already correct), but it is emotionally persuasive personal content that should only publish with her written approval on file.
- **Compliant alternative:** keep the `[CONFIRM]` gate exactly as is; obtain the written approval (launch-check already blocks otherwise). No rewording needed.
- **SEO/AEO note:** genuine founder narrative is a strong differentiator — worth keeping once approved.
- **Client input needed:** written approval from Dr. Swati.
- **Effort:** S

---

**NMC-12 — LOW (JUDGEMENT) — Clause 9.2 / housekeeping**
- **Location:** `/styleguide/` — `src/app/styleguide/page.tsx` (renders doctor photos, DoctorCard, PhoneFrame, SpecimenForm); `src/app/robots.ts:32` disallows it and the page is `noindex`
- **Why it is flagged:** the page is a build artifact but is still publicly reachable by URL and displays doctor imagery and UI specimens outside any reviewed content flow.
- **Compliant alternative:** before launch, gate the route (env flag or remove from the production build). Robots/noindex already prevent indexing — this is belt-and-braces.
- **SEO/AEO note:** none.
- **Client input needed:** no.
- **Effort:** S

## 6. Off-site checklist (C16)

The site itself only links Google Maps and WhatsApp. The team must verify each external profile against the same rules — nothing off-site was audited:

| Profile | Status | What to check manually |
|---|---|---|
| Google Business Profile (linked via `mapsUrl`, cid 6293365160818405640) | Live | Description has no superlatives or offers; no review-solicitation posts; registration number in the profile; photos are clinic/doctor only — no identifiable patients, no before/after; no "best" claims in posts or Q&A |
| WhatsApp Business (`wa.me` links live) | Live | Business profile description contains no offers, claims or testimonials; catalogue/away messages are factual |
| Instagram / Facebook / YouTube / LinkedIn | `[CONFIRM]` — not yet connected | When set up: no testimonials or reshared patient praise, no before/after, no offers/camps as promotions, registration number on informational posts, "AI-generated" label on any AI media, no paid "top doctor" badges |

## 7. Verified clean (no action)

- No testimonials, reviews, star ratings, review widgets, or `AggregateRating`/`Review` schema (F1/F2 — editorial policy enforces this).
- No patient stories, before/after, surgery videos, or clinical patient media.
- No success rates, patient counts, surgery counts, or stat counters; "we do not quote pregnancy rates".
- No superlatives or outcome guarantees anywhere; every "guarantee" occurrence is a *negation*.
- No fees, offers, discounts, camps, coupons or referral schemes published.
- Every procedure page carries a "Risks and limits" section and outcomes-vary language (M3).
- Reproductive immunology page explicitly declines unproven tests/treatments (NK cell, IVIG, intralipids) — textbook-compliant.
- Registration number displayed on the profile page, footer, every reviewer box and in JSON-LD (M1).
- Per-page "does not replace a consultation" line plus a dedicated medical-disclaimer page (M5).
- Appointment form: unticked required consent checkbox linked to the privacy policy; honeypot + Turnstile; data emailed to the clinic only (Resend), nothing stored client-side, no PII in URLs (M2 structure, C12).
- Analytics: GA4 only after explicit accept, Consent Mode v2 with ad signals permanently denied, IP anonymised, query strings stripped to `utm_*`; reject revokes going forward; equal-weight Accept/Reject banner (C12).
- Maps load only on explicit click; no autoplaying media; cookie settings re-openable from the footer.
- OG share cards are logo + page title only — no doctor photo or claims (`scripts/og-images.mjs`).
- CONFIRM chips are dev-only and stripped in production; `npm run launch-check` fails while any remain.
- PCPNDT position stated on Home FAQ, FAQs and medical disclaimer.
