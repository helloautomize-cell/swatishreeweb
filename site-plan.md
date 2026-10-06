# Site plan · EVE Women and Fertility Clinic, Gunjur, Bangalore

Version 1 · 3 October 2026 · Prepared by Automize Media Labs for review by Dr. Swati Shree
Source of facts: `eve-client-data.md` and the 9 client documents. Anything not confirmed is marked `[CONFIRM: ...]`.
Companion files: `new-website-content.md` (every page, written), `IMAGE-RESOURCES-NEEDED.md`, `eve-styleguide.html` (colours locked).

---

## 1. Positioning in one line

EVE is a founder-led fertility and women's health clinic in Gunjur, East Bangalore, where one reproductive medicine specialist, Dr. Swati Shree (MRCOG UK, DNB Obstetrics and Gynaecology, Fellowship in Reproductive Medicine), starts every patient with a full evaluation, explains every option, and brings in IUI or IVF only when it is genuinely needed.

The promise is not a technology claim. It is a process claim a patient can check on the first visit: **time, an honest evaluation, and every option explained before any decision.**

**Entity statement** (used word for word in About, `llms.txt`, `entity-facts.md` and the Google Business Profile description):

> EVE Women and Fertility Clinic is an outpatient fertility and women's health clinic at LG Complex Towers, Gunjur, Bengaluru (Bangalore), Karnataka 560087, founded in December 2024 by Dr. Swati Shree, MBBS, DNB (Obstetrics and Gynaecology), MRCOG (UK), a reproductive medicine specialist with a fellowship in reproductive medicine. The clinic offers fertility evaluation, natural conception support, follicular monitoring, tubal patency testing, male fertility evaluation, IUI, IVF with lab procedures carried out at associated ART centres, egg freezing and TESA/PESA, along with gynaecological care for PCOS, endometriosis, menstrual disorders, recurrent pregnancy loss, fibroids, adenomyosis, thyroid problems that affect fertility, menopause, early pregnancy scans, cervical screening and HPV vaccination. [CONFIRM: opening hours]. Patients come from Gunjur, Varthur, Whitefield, Sarjapur Road, Bellandur and other parts of East Bengaluru, and from other cities in India.

Naming rules (locked): **EVE Women and Fertility Clinic** (short form "EVE"); **Dr. Swati Shree** on first mention per page, then "Dr. Swati". City: "Bangalore" in titles and headings (the way patients search), "Bengaluru" once in the opening paragraph of key pages and in schema `alternateName`. Never "EVE Fertility" or "EVE Clinic" in site copy.

---

## 2. How this site beats thin competitor pages

Most fertility sites in Bangalore are large-chain pages built on the same pattern: a short service blurb, a "world-class" claim, a success-rate banner and a call button. EVE wins on depth and trust, within Indian medical advertising rules.

| Competitor pattern | EVE answer |
|---|---|
| 150 to 300 words per treatment | 800 to 1,300 words per treatment page with steps, risks, preparation, who it suits, and what it does not do |
| Success-rate claims and superlatives (not allowed) | Honest "what to expect" and "what affects the outcome" sections. This is also what AI answer engines prefer to quote. |
| One generic FAQ for the whole site | 6 to 8 real patient questions on every page (about 150 FAQs in total), 40 to 80 words each, with FAQPage schema |
| Anonymous "our doctors" | A full doctor profile with credentials, registration number, publications and a Physician and ProfilePage schema graph |
| No explanation of Indian rules | ART Act 2021 eligibility, consent and sex-selection rules explained plainly. Competitors avoid this and patients search for it. |
| City-level pages only | One clinic entity, one exact map pin, a tiered service area (neighbourhood, East Bengaluru, outstation) and a "Coming from outside Bangalore" page. No doorway pages. |
| Stock baby photos | Real clinic and doctor photos, designed badges, a calm sage and blush identity |
| Testimonials (not allowed) | "Your fertility journey, explained": an educational page that earns the same trust without patient quotes |

**The content test for every page:** could an AI assistant lift two sentences from this page and give a correct, complete answer to a worried patient? If not, the page is not finished.

---

## 3. Keyword and entity strategy

### 3.1 Query clusters (what patients type)

| Cluster | Example queries | Lands on |
|---|---|---|
| Local clinic | fertility clinic in Bangalore, fertility specialist Gunjur, infertility doctor Varthur, IVF doctor Whitefield, gynaecologist near Sarjapur Road | Home, About, Doctor, Contact |
| Doctor | Dr Swati Shree, MRCOG fertility specialist Bangalore, reproductive medicine specialist Bangalore | Doctor |
| First steps | when to see a fertility doctor, fertility test for women, AMH test Bangalore, semen analysis, how long to try before IVF | Fertility evaluation, Your fertility journey, blog |
| Treatments | IUI treatment Bangalore, IVF treatment Bangalore, egg freezing Bangalore, TESA PESA Bangalore, IUI vs IVF | Treatment pages |
| Conditions | PCOS doctor Bangalore, endometriosis treatment, recurrent miscarriage specialist, thin endometrium, low AMH, fibroids and pregnancy, thyroid and pregnancy | Condition pages |
| Women's health | irregular periods doctor, heavy periods treatment, menopause clinic Bangalore, contraception counselling, Pap smear, HPV vaccine | Condition and service pages |
| Pregnancy | early pregnancy scan Bangalore, heartbeat scan, ectopic pregnancy symptoms | Early pregnancy scan |
| Cost and logistics | IVF cost in Bangalore, fertility consultation fee, IVF age limit India | FAQs (answered without prices, see 12) |

### 3.2 Cannibalisation map (one intent, one URL)

| Topic | Winning URL | Other pages link to it, they do not repeat it |
|---|---|---|
| PCOS | `/conditions/pcos/` | Services hub card, thyroid, menstrual, blog |
| Endometriosis | `/conditions/endometriosis/` | Services hub card, adenomyosis |
| Recurrent miscarriage | `/conditions/recurrent-pregnancy-loss/` | Reproductive immunology, early pregnancy scan |
| Menstrual problems | `/conditions/menstrual-disorders/` | Adolescent gynaecology, endometrial biopsy |
| Menopause | `/conditions/menopause-and-perimenopause/` | Services hub card |
| Male infertility | `/services/male-fertility-evaluation/` | Conditions hub card, TESA/PESA, fertility evaluation |
| Why a woman may not conceive | `/conditions/female-factor-infertility/` (causes, symptoms) | `/services/fertility-evaluation/` covers the tests and the visit only |
| Ovarian reserve and AMH | `/conditions/thin-endometrium-and-low-ovarian-reserve/` | Fertility evaluation, egg freezing |
| IUI vs IVF | `/your-fertility-journey/` (decision guide) | IUI and IVF pages link to it |

Rule: a condition page explains the condition and how EVE helps. A service page explains the visit, the test or the procedure. Never write the same paragraph twice.

### 3.3 Entities every page should use naturally

Clinic and place: EVE Women and Fertility Clinic, Gunjur, Bengaluru, East Bangalore, Varthur, Whitefield, Sarjapur Road, Karnataka.
Doctor and credentials: Dr. Swati Shree, MRCOG, Royal College of Obstetricians and Gynaecologists, DNB, fellowship in reproductive medicine, KJK Hospital Trivandrum.
Regulation and science: ART (Regulation) Act 2021, National ART and Surrogacy Registry, ESHRE, ASRM, WHO semen manual, ICMR, FOGSI, FIGO PALM-COEIN, Rotterdam criteria.
Clinical terms: AMH, antral follicle count, ovulation, fallopian tubes, endometrium, IUI, IVF, ICSI, vitrification, azoospermia.

---

## 4. Page list and URLs (46 pages + 3 blog posts)

`trailingSlash: true`. All URLs lowercase, hyphenated, no dates. "Intent" = I (information), L (local or transactional), T (trust).

### Core (14)

| # | Page | URL | H1 | Primary query | Intent |
|---|---|---|---|---|---|
| 1 | Home | `/` | Fertility care built around *you* | fertility clinic Bangalore, fertility specialist Gunjur | L |
| 2 | About | `/about/` | About EVE Women and *Fertility* Clinic | EVE fertility clinic Bangalore | L, T |
| 3 | Dr. Swati Shree | `/dr-swati-shree/` | Dr. Swati Shree, *MRCOG* (UK) | Dr Swati Shree, reproductive medicine specialist Bangalore | T |
| 4 | All services | `/services/` | Care for every stage, every *question* | gynaecology and fertility services Bangalore | L |
| 5 | All treatments | `/treatments/` | Fertility treatments, explained *before* you decide | IUI IVF egg freezing Bangalore | L |
| 6 | All conditions | `/conditions/` | Know what you are dealing *with* | PCOS, endometriosis, fibroids Bangalore | I |
| 7 | Your fertility journey | `/your-fertility-journey/` | Your fertility *journey*, step by step | IUI or IVF first, fertility treatment steps | I |
| 8 | Plan your visit | `/plan-your-visit/` | Plan your *visit* | EVE clinic timings, address, what to bring | L |
| 9 | Coming from outside Bangalore | `/coming-from-outside-bangalore/` | Coming to EVE from outside *Bangalore* | fertility doctor Bangalore for outstation patients | L |
| 10 | Contact and book | `/contact/` (form `#book`) | Book a consultation or *contact* us | EVE clinic phone number, book fertility consultation | L |
| 11 | FAQs | `/faqs/` | Questions patients *often* ask | | I |
| 12 | Blog | `/blog/` | Fertility and women's health *library* | | I |
| 13 | Thank you (noindex) | `/thank-you/` | Thank you, we have your *request* | | |
| 14 | 404 | | We could not find that *page* | | |

The client list named a "Patient Stories" page. Decision D2 replaces it with page 7 (see section 13).

### Services (11)

| # | Page | URL | Group | Badge | Primary query |
|---|---|---|---|---|---|
| 15 | Fertility evaluation | `/services/fertility-evaluation/` | Fertility | fertility-evaluation | fertility evaluation Bangalore, infertility tests |
| 16 | Natural conception support | `/services/natural-conception-support/` | Fertility | natural-conception | how to conceive naturally, ovulation tracking Bangalore |
| 17 | Follicular monitoring | `/services/follicular-monitoring/` | Fertility | follicular-monitoring | follicular study Bangalore, ovulation scan |
| 18 | Tubal patency test (HSG) | `/services/tubal-patency-test-hsg/` | Fertility | hsg | HSG test Bangalore, tubal patency test |
| 19 | Male fertility evaluation | `/services/male-fertility-evaluation/` | Fertility | male-fertility | semen analysis Bangalore, male infertility |
| 20 | Contraceptive counselling | `/services/contraceptive-counselling/` | Women's health | contraception | contraception options, IUD Bangalore |
| 21 | Early pregnancy scan | `/services/early-pregnancy-scan/` | Pregnancy care | early-pregnancy-scan | early pregnancy scan Bangalore, heartbeat scan |
| 22 | Reproductive immunology | `/services/reproductive-immunology/` | Pregnancy care | reproductive-immunology | immunology and miscarriage, antiphospholipid |
| 23 | Cervical cancer screening and HPV vaccination | `/services/cervical-cancer-screening-hpv-vaccination/` | Preventive | cervical-screening | Pap smear Bangalore, HPV vaccine |
| 24 | Endometrial biopsy | `/services/endometrial-biopsy/` | Preventive | endometrial-biopsy | endometrial biopsy Bangalore |
| 25 | Adolescent gynaecology | `/services/adolescent-gynaecology/` | General | adolescent-gynaecology | gynaecologist for teenage girl, first gynae visit |

### Treatments (4)

| # | Page | URL | Badge | Primary query |
|---|---|---|---|---|
| 26 | IUI | `/treatments/iui/` | iui | IUI treatment Bangalore, intrauterine insemination |
| 27 | IVF | `/treatments/ivf/` | ivf | IVF treatment Bangalore, IVF process |
| 28 | Egg freezing | `/treatments/egg-freezing/` | egg-freezing | egg freezing Bangalore, oocyte cryopreservation |
| 29 | TESA and PESA | `/treatments/tesa-pesa/` | tesa-pesa | TESA PESA Bangalore, surgical sperm retrieval |

### Conditions (10)

| # | Page | URL | Badge | Primary query |
|---|---|---|---|---|
| 30 | PCOS | `/conditions/pcos/` | pcos | PCOS treatment Bangalore, PCOS and pregnancy |
| 31 | Endometriosis | `/conditions/endometriosis/` | endometriosis | endometriosis treatment Bangalore |
| 32 | Menstrual disorders | `/conditions/menstrual-disorders/` | menstrual | irregular periods doctor, heavy periods treatment |
| 33 | Recurrent pregnancy loss | `/conditions/recurrent-pregnancy-loss/` | pregnancy-loss | recurrent miscarriage treatment Bangalore |
| 34 | Menopause and perimenopause | `/conditions/menopause-and-perimenopause/` | menopause | menopause clinic Bangalore, perimenopause symptoms |
| 35 | Female factor infertility | `/conditions/female-factor-infertility/` | female-infertility | causes of female infertility |
| 36 | Fibroids | `/conditions/fibroids/` | fibroids | fibroids treatment Bangalore, fibroids and fertility |
| 37 | Adenomyosis | `/conditions/adenomyosis/` | adenomyosis | adenomyosis treatment, adenomyosis and pregnancy |
| 38 | Thin endometrium and low ovarian reserve | `/conditions/thin-endometrium-and-low-ovarian-reserve/` | ovarian-reserve | low AMH treatment, thin endometrium and pregnancy |
| 39 | Thyroid and fertility | `/conditions/thyroid-and-fertility/` | thyroid | thyroid and pregnancy, hypothyroidism infertility |

### Legal and trust (7)

| # | Page | URL |
|---|---|---|
| 40 | Privacy Policy | `/privacy-policy/` |
| 41 | Terms of Use | `/terms-of-use/` |
| 42 | Medical Disclaimer | `/medical-disclaimer/` |
| 43 | Editorial and Medical Review Policy | `/editorial-policy/` |
| 44 | Patient Rights and Responsibilities | `/patient-rights/` |
| 45 | Appointments, Cancellation and Refund | `/appointments-cancellation-refund/` |
| 46 | Accessibility Statement | `/accessibility/` |

### Blog at launch (3 posts)

| Slug | Title | Links to |
|---|---|---|
| `/blog/fertility-tests-explained/` | Fertility tests explained: AMH, semen analysis, HSG and scans | Fertility evaluation, HSG, male evaluation, low ovarian reserve |
| `/blog/pcos-and-getting-pregnant/` | PCOS and getting pregnant: what the evidence says | PCOS, follicular monitoring, thyroid |
| `/blog/when-to-see-a-fertility-doctor/` | When to see a fertility doctor: 12 months, 6 months, or sooner | Your fertility journey, fertility evaluation, egg freezing |

Plan after launch: 2 doctor-reviewed posts a month (topic list in section 12).

---

## 5. Navigation

### Utility bar (desktop)
Left: Plan your visit · Blog
Right: clock icon `[CONFIRM: OPD hours]` · phone "72049 21212" · red "Medical emergency? Call 108 or 112" · A / A+

### Header
Logo · Services ▾ · Treatments ▾ · Conditions ▾ · Dr. Swati Shree · About · Book Consultation (two-part button)

### Mega menu panels

**Services** (3 columns + doctor card)
- Fertility: Fertility evaluation · Natural conception support · Follicular monitoring · Tubal patency test (HSG) · Male fertility evaluation
- Women's health and pregnancy: Contraceptive counselling · Early pregnancy scan · Reproductive immunology · Adolescent gynaecology
- Prevention: Cervical cancer screening and HPV vaccination · Endometrial biopsy
- Doctor card: Dr. Swati Shree · MRCOG (UK) · View profile

**Treatments** (1 column + side links + doctor card)
- IUI · IVF · Egg freezing · TESA and PESA
- Side: Your fertility journey · Plan your visit

**Conditions** (2 columns + doctor card)
- Fertility: Female factor infertility · Male factor infertility (links to the male evaluation page) · Thin endometrium and low ovarian reserve · Recurrent pregnancy loss · Thyroid and fertility
- Women's health: PCOS · Endometriosis · Menstrual disorders · Fibroids · Adenomyosis · Menopause and perimenopause

### Mobile menu (accordion, all closed)
Services · Treatments · Conditions · Dr. Swati Shree · About EVE · Your fertility journey · Plan your visit · Coming from outside Bangalore · Blog · FAQs · Contact
Fixed footer: Book · Call · one hours line `[CONFIRM]`

### Mobile action bar
Book Now · Call Now (sheet with two numbers: 72049 21212, 72049 21516) · WhatsApp `[CONFIRM: WhatsApp number]` (pre-filled)

WhatsApp pre-fill pattern: "Hello EVE Women and Fertility Clinic, I would like to book a consultation about [page title]. My name is "

### Footer
- Logo + one line: "Founder-led fertility and women's health care in Gunjur, Bangalore, since December 2024."
- Address (3 lines): EVE Women and Fertility Clinic, 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087 · Get directions
- Hours as 4 stacked rows `[CONFIRM]` · Call 72049 21212 · 72049 21516 · WhatsApp · email (obfuscated)
- Columns: Services · Treatments · Conditions · Patient information (Your fertility journey, Plan your visit, Coming from outside Bangalore, FAQs, Blog, Contact) · Legal (7) + Cookie settings
- Catchment line: "Patients come to us from Gunjur, Varthur, Whitefield, Sarjapur Road, Bellandur and across Bangalore, and travel from other cities for a consultation." `[CONFIRM: Intake Q28]`
- Social: Instagram, Facebook, YouTube, LinkedIn `[CONFIRM: links; icons hidden until set]`
- Bottom: "© [year] EVE Women and Fertility Clinic, Bangalore. This website is run by EVE Women and Fertility Clinic, [address]. The information here is for general education and is not a substitute for a consultation. Registration: [CONFIRM: Karnataka Medical Council registration no.]"

Doctor affiliations (Apollo Fertility, Motherhood Fertility and the others) appear **only** on the doctor profile and About page as credentials (decision D1). They are not in the footer, header or service pages.

---

## 6. Global copy blocks (reuse exactly)

**Emergency line:** Medical emergency? Call 108 or 112.

**Emergency callout (symptom pages):**
> **When to get help straight away.** Call 108 or 112, or go to the nearest hospital emergency, if you have very heavy bleeding, sudden severe pain in the lower abdomen or shoulder, fainting or dizziness, or any bleeding with pain in early pregnancy. Do not wait for a clinic appointment.

**Reviewer box:**
> Medically reviewed by **Dr. Swati Shree**, MBBS, DNB (OBG), MRCOG (UK) · [CONFIRM: Karnataka Medical Council registration no.] · Last reviewed [date set at sign-off]
> This page explains general care at EVE. It does not replace a consultation. Read our [editorial policy](/editorial-policy/).

**CTA band:**
> Ready to talk to a *specialist*?
> Book a consultation, call 72049 21212 or message us on WhatsApp. We aim to reply within 24 hours.
> [Book Consultation] [Call] [WhatsApp]

**Form consent line (checkbox, unticked):**
> I agree that EVE Women and Fertility Clinic may use these details to contact me about my appointment, as explained in the [Privacy Policy](/privacy-policy/).

**Under the form:**
> Please do not include detailed medical information here. You can share it with Dr. Swati at your visit.

**Generic test line:** Dr. Swati decides which tests you need after she has listened to your history and examined you, so you only do the tests that help.

**ART line (treatment pages):** IUI and IVF are regulated by the Assisted Reproductive Technology (Regulation) Act, 2021. Consent, counselling and eligibility rules apply, and sex selection is prohibited by law.

**No outcome promises line (treatment pages):** No clinic can promise a pregnancy. What we promise is a clear explanation of your options and honest follow-up at every step.

**Pregnancy scan line:** We do not tell patients the sex of the baby. This is prohibited by Indian law.

---

## 7. Writing rules applied in every page

- Plain English for a 35-year-old reading at 2 am and a worried parent. Short sentences. "We" and "you". Warm, never clinical-cold, never cute.
- Every term explained on first use (for example "AMH, a blood test that reflects how many egg-containing follicles are left").
- **Answer-first:** each page opens with 2 to 3 sentences that say what it is, who it is for, and what happens at EVE. The first sentence names EVE, Bangalore and Dr. Swati naturally (entity linking for AI answers).
- An **At a glance** list near the top of every service, treatment and condition page (plain HTML bullets, short quotable facts).
- One question-style H2 where it matches a real search ("What is PCOS?"). Otherwise statement headings, sentence case.
- 6 to 8 FAQs per page, 40 to 80 words each, each answer complete on its own.
- Honest limits: every treatment page says what it cannot do, the risks, and when something else is better.
- No em or en dashes. Ranges use "to".
- Banned: best, leading, top, No. 1, world-class, guaranteed, cure, permanent, 100%, success rate, state-of-the-art, comprehensive, holistic, seamless, tailored, advanced (as a boast), peace of mind, miracle, painless.
- No patient numbers, testimonials, review quotes, prices, drug brand names, machine models, protocols with doses.
- No sex-selection wording. No fetal sex information. No surrogacy or donor-gamete claims at launch (decision D5).
- Indian context first: ICMR and FOGSI guidance, Indian ART law, Indian diet, work and family settings. Say "periods" and "cycle", and use local terms where helpful.
- Statistics only from named guidelines, always rounded and attributed in the Sources block.

---

## 8. Internal linking

- Every service, treatment and condition page links up to its hub, sideways to 2 or 3 related pages, and to 1 or 2 blog posts.
- Hubs link down to every child page with a glass card.
- `/your-fertility-journey/` is linked from every treatment page and from the Fertility evaluation page.
- Every page ends with the CTA band. The Book button carries the page as the booking reason (`lib/booking-context.ts`).
- The doctor profile links to every hub. Every reviewer box links to the profile.
- "Coming from outside Bangalore" is linked from Contact, Plan your visit and the footer catchment line.
- Anchor text is descriptive ("IUI treatment", "tubal patency test"). Never "click here".

**Booking reason dropdown:** Fertility evaluation · Trying to conceive naturally · Follicular monitoring · Tubal patency test (HSG) · Male fertility evaluation · IUI · IVF · Egg freezing · TESA or PESA · PCOS · Endometriosis · Irregular, heavy or painful periods · Recurrent miscarriage · Early pregnancy scan · Fibroids or adenomyosis · Thyroid and fertility · Low AMH or thin endometrium · Contraception · Pap smear or HPV vaccine · Menopause · Teenage girl's first visit · Other

---

## 9. Schema plan (one `@graph` per page)

### 9.1 Types in use (13 types, no forbidden types)

| Type | Where | Purpose |
|---|---|---|
| `MedicalClinic` (#clinic) | every page | The entity: NAP, geo, hours, services, area served |
| `Place` (#place) with `GeoCoordinates`, `hasMap` | every page | The exact clinic location |
| `Physician` + `Person` (#dr-swati-shree) | every page | The doctor: credentials, memberships, languages |
| `WebSite` (#website, `en-IN`) | every page | Site entity, publisher = clinic |
| `MedicalWebPage` (or sub-type) | all medical pages | `about`, `reviewedBy`, `lastReviewed`, `audience`, `speakable` |
| `MedicalCondition` | condition pages | symptoms, causes, tests, treatments |
| `MedicalProcedure`, `MedicalTherapy`, `MedicalTest` | treatment and service pages | `howPerformed`, `preparation`, `followup`, `typicalTest` |
| `Service` + `ServiceChannel` + `areaServed` | home, contact, hubs | The serviceable location and booking channels |
| `FAQPage` | every page with visible FAQs | Question and answer entities |
| `BreadcrumbList` | every inner page | Navigation entity |
| `ProfilePage` | doctor page | `mainEntity` = #dr-swati-shree |
| `ContactPage`, `AboutPage`, `CollectionPage` + `ItemList` | contact, about, hubs | Page-type precision |
| `BlogPosting` (+ `MedicalWebPage`), `Blog` | blog | author, reviewer, dates, `citation` |
| `ImageObject`, `ContactPoint`, `OpeningHoursSpecification`, `EducationalOccupationalCredential`, `SpeakableSpecification` | supporting | logo, phones, hours, credentials, voice answers |

**Never used:** `AggregateRating`, `Review`, `Offer` with prices, `MedicalBusiness` claims of outcomes. Every property value must match visible page text.

### 9.2 Page matrix

| Page | `@graph` contains |
|---|---|
| All pages | WebSite, MedicalClinic, Place, Physician, BreadcrumbList |
| Home | + MedicalWebPage, Service (area served), FAQPage, ItemList (services) |
| About | + AboutPage, `founder`, `foundingDate`, credentials |
| Doctor | + ProfilePage (mainEntity Physician), FAQPage |
| Service pages | + MedicalWebPage (about = MedicalTest or MedicalProcedure, reviewedBy, lastReviewed), FAQPage |
| Treatment pages | + MedicalWebPage (about = MedicalProcedure or MedicalTherapy), FAQPage |
| Condition pages | + MedicalWebPage (about = MedicalCondition), FAQPage |
| Hubs | + CollectionPage + ItemList of children |
| Journey page | + MedicalWebPage, FAQPage |
| Plan your visit | + WebPage, FAQPage |
| Coming from outside | + WebPage, Service with wide `areaServed`, FAQPage |
| Contact | + ContactPage, ReserveAction |
| Blog index | + Blog, ItemList |
| Posts | + BlogPosting + MedicalWebPage, FAQPage, `citation` |
| Legal pages | + WebPage with `dateModified` |
| Thank you, 404 | none (noindex) |

### 9.3 The clinic and exact location (copy into `lib/schema/clinic.ts`)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://[DOMAIN]/#clinic",
      "name": "EVE Women and Fertility Clinic",
      "alternateName": ["EVE Women & Fertility Clinic", "EVE Women and Fertility Clinic by Dr Swati Shree", "EVE Clinic Bengaluru"],
      "url": "https://[DOMAIN]/",
      "logo": { "@type": "ImageObject", "url": "https://[DOMAIN]/images/brand/logo-full.svg", "width": 1099, "height": 338 },
      "image": ["https://[DOMAIN]/images/clinic/exterior.jpg", "https://[DOMAIN]/images/clinic/consultation-room.jpg"],
      "description": "[entity statement from section 1]",
      "slogan": "Fertility care built around you",
      "founder": { "@id": "https://[DOMAIN]/#dr-swati-shree" },
      "employee": { "@id": "https://[DOMAIN]/#dr-swati-shree" },
      "foundingDate": "2024-12",
      "medicalSpecialty": ["Gynecologic", "Obstetric"],
      "knowsAbout": ["Infertility", "In vitro fertilisation", "Intrauterine insemination", "Egg freezing", "Polycystic ovary syndrome", "Endometriosis", "Recurrent pregnancy loss", "Menopause", "Male infertility", "Cervical cancer screening"],
      "isAcceptingNewPatients": true,
      "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
      "telephone": "+91-7204921212",
      "email": "[CONFIRM: clinic email]",
      "contactPoint": [
        { "@type": "ContactPoint", "contactType": "appointments", "telephone": "+91-7204921212", "availableLanguage": ["en", "[CONFIRM]"], "areaServed": "IN", "hoursAvailable": "[CONFIRM: phone hours]" },
        { "@type": "ContactPoint", "contactType": "appointments", "telephone": "+91-7204921516", "availableLanguage": ["en", "[CONFIRM]"] }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1st Floor, LG Complex Towers, Gunjur",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "postalCode": "560087",
        "addressCountry": "IN"
      },
      "location": { "@id": "https://[DOMAIN]/#place" },
      "geo": { "@type": "GeoCoordinates", "latitude": "[CONFIRM: from Maps pin]", "longitude": "[CONFIRM: from Maps pin]" },
      "hasMap": "[CONFIRM: Google Maps share URL]",
      "openingHoursSpecification": [
        { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "[CONFIRM]", "closes": "[CONFIRM]" }
      ],
      "areaServed": [
        { "@type": "GeoCircle", "name": "Primary area: Gunjur and nearby East Bengaluru", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "[CONFIRM]", "longitude": "[CONFIRM]" }, "geoRadius": "8000" },
        { "@type": "GeoCircle", "name": "Greater Bengaluru", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "[CONFIRM]", "longitude": "[CONFIRM]" }, "geoRadius": "30000" },
        { "@type": "City", "name": "Bengaluru", "sameAs": "https://en.wikipedia.org/wiki/Bangalore" },
        { "@type": "AdministrativeArea", "name": "Bengaluru Urban district" },
        { "@type": "State", "name": "Karnataka" },
        { "@type": "Place", "name": "Varthur, Bengaluru" },
        { "@type": "Place", "name": "Whitefield, Bengaluru" },
        { "@type": "Place", "name": "Sarjapur Road, Bengaluru" },
        { "@type": "Place", "name": "Bellandur, Bengaluru" },
        { "@type": "Place", "name": "Marathahalli, Bengaluru" }
      ],
      "availableService": [
        { "@id": "https://[DOMAIN]/treatments/iui/#procedure" },
        { "@id": "https://[DOMAIN]/treatments/ivf/#procedure" },
        { "@id": "https://[DOMAIN]/treatments/egg-freezing/#procedure" },
        { "@id": "https://[DOMAIN]/treatments/tesa-pesa/#procedure" },
        { "@id": "https://[DOMAIN]/services/fertility-evaluation/#test" }
      ],
      "amenityFeature": [{ "@type": "LocationFeatureSpecification", "name": "Lift access", "value": "[CONFIRM]" }, { "@type": "LocationFeatureSpecification", "name": "Wheelchair access", "value": "[CONFIRM]" }],
      "paymentAccepted": "[CONFIRM]",
      "currenciesAccepted": "INR",
      "sameAs": ["[CONFIRM: Google Business Profile URL]", "[CONFIRM: Instagram]", "[CONFIRM: Facebook]", "[CONFIRM: YouTube]", "[CONFIRM: LinkedIn]"],
      "potentialAction": {
        "@type": "ReserveAction",
        "name": "Book a consultation",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://[DOMAIN]/contact/#book", "inLanguage": "en-IN", "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] },
        "result": { "@type": "Reservation", "name": "Consultation request" }
      }
    },
    {
      "@type": "Place",
      "@id": "https://[DOMAIN]/#place",
      "name": "EVE Women and Fertility Clinic, LG Complex Towers",
      "address": { "@type": "PostalAddress", "streetAddress": "1st Floor, LG Complex Towers, Gunjur", "addressLocality": "Bengaluru", "addressRegion": "Karnataka", "postalCode": "560087", "addressCountry": "IN" },
      "geo": { "@type": "GeoCoordinates", "latitude": "[CONFIRM]", "longitude": "[CONFIRM]" },
      "hasMap": "[CONFIRM]",
      "containedInPlace": { "@type": "AdministrativeArea", "name": "Gunjur, Varthur, East Bengaluru" },
      "publicAccess": true
    },
    {
      "@type": "WebSite",
      "@id": "https://[DOMAIN]/#website",
      "url": "https://[DOMAIN]/",
      "name": "EVE Women and Fertility Clinic",
      "inLanguage": "en-IN",
      "publisher": { "@id": "https://[DOMAIN]/#clinic" }
    }
  ]
}
```

Sanity check for coordinates: Gunjur, Varthur Hobli, sits at roughly 12.92 N, 77.75 E. The build must use the exact pin from the Google Maps share link, and `launch-check` fails while `[CONFIRM]` remains.

### 9.4 The serviceable-location layer (home, contact, "Coming from outside")

```json
{
  "@type": "Service",
  "@id": "https://[DOMAIN]/#service-consultation",
  "name": "Fertility and women's health consultation",
  "serviceType": "Gynaecology and reproductive medicine consultation",
  "provider": { "@id": "https://[DOMAIN]/#clinic" },
  "audience": { "@type": "PeopleAudience", "suggestedGender": "female" },
  "areaServed": [
    { "@type": "GeoCircle", "geoMidpoint": { "@type": "GeoCoordinates", "latitude": "[CONFIRM]", "longitude": "[CONFIRM]" }, "geoRadius": "30000" },
    { "@type": "City", "name": "Bengaluru" },
    { "@type": "Country", "name": "India" }
  ],
  "availableChannel": [
    { "@type": "ServiceChannel", "serviceLocation": { "@id": "https://[DOMAIN]/#place" }, "servicePhone": { "@type": "ContactPoint", "telephone": "+91-7204921212", "contactType": "appointments" }, "serviceUrl": "https://[DOMAIN]/contact/#book", "availableLanguage": ["en"], "name": "Clinic visit" }
  ],
  "hoursAvailable": "[CONFIRM]"
}
```

Tier logic (shown in text on "Coming from outside Bangalore" and kept identical in schema and the Google profile):
1. **Tier 1, walk-in neighbourhoods:** Gunjur, Varthur, Balagere, Panathur, Whitefield, Sarjapur Road, Bellandur, Marathahalli, Dommasandra `[CONFIRM: Intake Q28]`.
2. **Tier 2, Greater Bengaluru:** the rest of the city by road or Namma Metro plus cab.
3. **Tier 3, outstation:** other Karnataka towns and other states. No per-town landing pages (doorway pages are not allowed).

### 9.5 Doctor entity (`Physician` + `Person`, also on the profile page)

```json
{
  "@type": ["Physician", "Person"],
  "@id": "https://[DOMAIN]/#dr-swati-shree",
  "name": "Dr. Swati Shree",
  "honorificPrefix": "Dr.",
  "honorificSuffix": "MBBS, DNB (OBG), MRCOG (UK)",
  "jobTitle": "Reproductive medicine specialist and founder",
  "url": "https://[DOMAIN]/dr-swati-shree/",
  "image": "https://[DOMAIN]/images/doctors/dr-swati-shree-hero.jpg",
  "medicalSpecialty": ["Gynecologic", "Obstetric"],
  "knowsAbout": ["Reproductive medicine", "Infertility", "IVF", "IUI", "PCOS", "Recurrent pregnancy loss", "Menopause"],
  "knowsLanguage": ["en", "[CONFIRM]"],
  "worksFor": { "@id": "https://[DOMAIN]/#clinic" },
  "alumniOf": [
    { "@type": "CollegeOrUniversity", "name": "All India Institute of Medical Sciences [CONFIRM: campus]" },
    { "@type": "Organization", "name": "KJK Hospital, Thiruvananthapuram" }
  ],
  "hasCredential": [
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "MBBS" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "degree", "name": "DNB, Obstetrics and Gynaecology" },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "certificate", "name": "Fellowship in Reproductive Medicine", "recognizedBy": { "@type": "Organization", "name": "KJK Hospital, Thiruvananthapuram" } },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "membership", "name": "MRCOG", "recognizedBy": { "@type": "Organization", "name": "Royal College of Obstetricians and Gynaecologists", "sameAs": "https://en.wikipedia.org/wiki/Royal_College_of_Obstetricians_and_Gynaecologists" } },
    { "@type": "EducationalOccupationalCredential", "credentialCategory": "Medical registration", "recognizedBy": { "@type": "Organization", "name": "Karnataka Medical Council [CONFIRM]" }, "identifier": "[CONFIRM: registration no.]" }
  ],
  "memberOf": [{ "@type": "Organization", "name": "Royal College of Obstetricians and Gynaecologists" }],
  "award": "16th GCU International Women's Day Award, Garden City University",
  "affiliation": [
    { "@type": "MedicalOrganization", "name": "Apollo Fertility [CONFIRM: wording]" },
    { "@type": "MedicalOrganization", "name": "Motherhood Fertility [CONFIRM: wording]" }
  ],
  "sameAs": ["[CONFIRM: LinkedIn]", "[CONFIRM: Practo or other profile]"]
}
```

### 9.6 Condition page (example: PCOS)

```json
{
  "@type": ["MedicalWebPage", "WebPage"],
  "@id": "https://[DOMAIN]/conditions/pcos/#webpage",
  "url": "https://[DOMAIN]/conditions/pcos/",
  "name": "PCOS Treatment in Bangalore | EVE Women and Fertility Clinic",
  "inLanguage": "en-IN",
  "isPartOf": { "@id": "https://[DOMAIN]/#website" },
  "about": { "@id": "https://[DOMAIN]/conditions/pcos/#condition" },
  "reviewedBy": { "@id": "https://[DOMAIN]/#dr-swati-shree" },
  "lastReviewed": "[CONFIRM: sign-off date]",
  "audience": { "@type": "MedicalAudience", "audienceType": "Patient" },
  "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".answer-first", ".at-a-glance"] },
  "mainEntity": { "@id": "https://[DOMAIN]/conditions/pcos/#faq" }
},
{
  "@type": "MedicalCondition",
  "@id": "https://[DOMAIN]/conditions/pcos/#condition",
  "name": "Polycystic ovary syndrome",
  "alternateName": ["PCOS", "PCOD", "Polycystic ovarian disease"],
  "sameAs": "https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome",
  "signOrSymptom": [{ "@type": "MedicalSymptom", "name": "Irregular or missed periods" }, { "@type": "MedicalSymptom", "name": "Acne" }, { "@type": "MedicalSymptom", "name": "Excess hair growth" }],
  "riskFactor": [{ "@type": "MedicalRiskFactor", "name": "Family history" }, { "@type": "MedicalRiskFactor", "name": "Insulin resistance" }],
  "typicalTest": [{ "@type": "MedicalTest", "name": "Pelvic ultrasound" }, { "@type": "MedicalTest", "name": "Blood hormone tests" }],
  "possibleTreatment": [{ "@type": "MedicalTherapy", "name": "Lifestyle changes" }, { "@type": "MedicalTherapy", "name": "Ovulation induction" }],
  "associatedAnatomy": { "@type": "AnatomicalStructure", "name": "Ovary" }
}
```

### 9.7 Treatment and test pages (example: IVF and a test)

```json
{
  "@type": "MedicalProcedure",
  "@id": "https://[DOMAIN]/treatments/ivf/#procedure",
  "name": "In vitro fertilisation (IVF)",
  "alternateName": ["IVF", "IVF with ICSI"],
  "procedureType": "https://schema.org/PercutaneousProcedure",
  "bodyLocation": "Ovary and uterus",
  "preparation": "Fertility evaluation, counselling and consent under the ART (Regulation) Act, 2021.",
  "howPerformed": "Ovarian stimulation with ultrasound monitoring, egg collection under sedation, fertilisation in the laboratory, embryo culture and embryo transfer.",
  "followup": "Pregnancy blood test about two weeks after transfer, then early scans.",
  "status": { "@type": "EventStatusType", "name": "Available through associated ART centres [CONFIRM]" }
},
{
  "@type": "MedicalTest",
  "@id": "https://[DOMAIN]/services/male-fertility-evaluation/#test",
  "name": "Semen analysis",
  "usedToDiagnose": { "@type": "MedicalCondition", "name": "Male factor infertility" },
  "signDetected": [{ "@type": "MedicalSign", "name": "Low sperm count" }],
  "normalRange": "Reference limits from the WHO laboratory manual, 6th edition (2021)"
}
```

### 9.8 FAQ, breadcrumb, blog, contact

```json
{ "@type": "FAQPage", "@id": ".../#faq", "mainEntity": [ { "@type": "Question", "name": "[visible question]", "acceptedAnswer": { "@type": "Answer", "text": "[visible answer, plain text]" } } ] }
{ "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://[DOMAIN]/" }, { "@type": "ListItem", "position": 2, "name": "Conditions", "item": "https://[DOMAIN]/conditions/" }, { "@type": "ListItem", "position": 3, "name": "PCOS" } ] }
{ "@type": ["BlogPosting", "MedicalWebPage"], "headline": "[title]", "author": { "@id": ".../#dr-swati-shree" }, "reviewedBy": { "@id": ".../#dr-swati-shree" }, "datePublished": "[date]", "dateModified": "[date]", "lastReviewed": "[date]", "publisher": { "@id": ".../#clinic" }, "isPartOf": { "@type": "Blog", "@id": ".../blog/#blog" }, "image": ".../blog/[slug]/opengraph-image", "citation": ["[source 1]", "[source 2]"], "mentions": [{ "@type": "MedicalCondition", "name": "[entity]" }] }
{ "@type": "ContactPage", "@id": ".../contact/#webpage", "mainEntity": { "@id": ".../#clinic" } }
```

### 9.9 Build rules for schema
- One `@graph` per page, stable `@id`s: `#clinic`, `#place`, `#dr-swati-shree`, `#website`.
- JSON-LD is generated from `lib/site-config.ts` and each page's frontmatter, never typed by hand.
- Every FAQ in the JSON-LD must be visible on the page, word for word.
- Dates: `lastReviewed` comes from the doctor sign-off. No fake `dateModified` refreshes.
- Validate with Google's Rich Results Test and the Schema.org validator. Zero errors, zero warnings is the launch bar.
- No `[CONFIRM]` string may ever appear in production JSON-LD. `npm run launch-check` fails on it.
- Zero em or en dashes in JSON-LD (build check).

---

## 10. Local SEO, GEO and AEO

**Local SEO**
- One genuine listing: EVE Women and Fertility Clinic by Dr Swati Shree. Primary category: Fertility clinic. Secondary: Gynaecologist, Women's health clinic. `[CONFIRM: GBP access]`
- NAP, hours and services identical on the site, in schema, on Google, Practo and Justdial (`entity-facts.md`).
- GBP: add the exact services list, the website link with UTM, Q&A seeded from the FAQ page, photos from the shoot, and weekly posts from the blog. No review gating.
- The "Coming from outside Bangalore" page plus one line on Contact, Plan your visit and the footer. No per-neighbourhood or per-town doorway pages.

**GEO and AEO**
- `/llms.txt` and `/llms-full.txt` generated at build time from the content files.
- `robots.txt` allows Googlebot, Bingbot, GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended and Applebot-Extended at launch.
- Answer-first intro in real HTML on every page. All FAQ, tab and carousel text is present in the initial HTML (check with curl).
- "At a glance" boxes are plain lists, not images.
- Definitions, thresholds and age limits are written as short standalone sentences with the source named (for example, "The WHO 2021 semen manual sets the lower reference limit for sperm concentration at 16 million per mL").
- Comparison content that AI answers reuse: IUI vs IVF table, "who can have ART in India" list, "what each test tells you" table.
- `entity-facts.md`: identical clinic and doctor facts for all directories. IndexNow pings after deploys (enabled at launch).
- Question phrasing for H2s and FAQ: "How long does an IVF cycle take?", "Can I get pregnant with PCOS?", "Is IUI painful?", "What is a normal AMH level?", "Who can have IVF in India?".

---

## 11. Compliance (built in from day one)

| Rule | What the site does |
|---|---|
| Indian Medical Council (Professional Conduct, Etiquette and Ethics) Regulations, 2002 (in force; the 2023 NMC regulations remain in abeyance, re-checked 3 Oct 2026) | Factual information only. No self-praise, comparison or inducement. No testimonials. |
| Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954 | No cure claims, no drug brands, no promise for listed conditions. |
| ART (Regulation) Act, 2021 and Rules 2022 | Clinic registration number displayed `[CONFIRM: National ART and Surrogacy Registry no.]`. Eligibility stated correctly: married couples with the woman 21 to 50 and the man 21 to 55, and widowed or divorced women 21 to 50. Written consent and counselling explained. No sex selection. No donor or surrogacy offers (D5). |
| PCPNDT Act, 1994 | Early pregnancy scan page and FAQ state that fetal sex is never disclosed. |
| DPDP Act 2023 and DPDP Rules 2025 (notified 13 Nov 2025; main duties apply from May 2027) | Consent notice, unticked checkbox, guardian consent for under-18s, privacy contact, retention, rights. Built to the 2027 standard now. |
| Telemedicine Practice Guidelines 2020 | Applies only if tele-consults are offered `[CONFIRM: Intake]`. Not claimed. |
| Charter of Patients' Rights | Patient Rights page. Displayed at reception `[CONFIRM]`. |

Never on the site: "best IVF doctor", "high success rate", pregnancy-rate numbers, "100% safe", before and after, baby photos used as proof, price offers, drug names, named hospital referral arrangements, `AggregateRating` or `Review` schema.

---

## 12. Open decisions for Dr. Swati and the agency

| # | Decision | Recommendation |
|---|---|---|
| D1 | Where hospital names (Apollo Fertility, Motherhood Fertility, Garbhagudi IVF Centre) appear | Doctor profile and About only, as credentials. The lab partnership line says "associated ART centres" until she confirms the exact wording in writing. |
| D2 | Patient Stories page | Replace with "Your fertility journey, explained". Patient quotes are testimonials and are prohibited. Reintroduce nothing until the rules change. |
| D3 | Early pregnancy scan placement | Pregnancy care (not Treatments). |
| D4 | Fees on the site | None. FAQs explain what affects cost and how estimates are given `[CONFIRM]`. |
| D5 | Donor gametes, surrogacy, embryo or sex-related services | Not mentioned at launch. Add only after written approval and registration check. |
| D6 | Doctor's personal pregnancy story | Keep on About and the Doctor page in her words only after written approval. Her son is never named or photographed. |
| D7 | Language | Site in English. Kannada or Hindi text needs a decision, because it changes fonts. |
| D8 | Tele-consults | Not offered unless confirmed. |
| D9 | Blog name | "Blog" in navigation (as the client listed), heading "Fertility and women's health library". |
| D10 | Reproductive immunology wording | Guideline-based only. We say clearly where evidence is limited, and we do not promote unproven treatments. |

---

## 13. Blog topic list (year one, 24 topics)

**Getting started:** When to see a fertility doctor · Fertility tests explained · How age affects fertility · Preconception check-up: what to do before you try · Folic acid and pregnancy planning · Ovulation: signs, tracking and common mistakes · Why a normal scan does not always mean normal fertility
**Conditions:** PCOS and getting pregnant · PCOS diet myths · Endometriosis and fertility · Fibroids: when do they matter · Thyroid tests before pregnancy · Low AMH: what it means and what it does not · Thin endometrium: causes and next steps · Recurrent miscarriage: tests worth doing
**Treatments:** IUI or IVF: how to decide · What happens in an IVF cycle week by week · Egg freezing: who should consider it and when · Male fertility: lifestyle and testing · TESA and PESA explained
**Women's health:** Heavy periods and anaemia · Perimenopause: the early signs · HPV vaccine and Pap smear in India: a simple guide · Your teenager's first gynaecology visit

---

## 14. Production notes for Windsurf

- Content: `resources/content/**.md`, one file per page, frontmatter validated with Zod (`title` at most 60 characters, `description` at most 155, `url`, `h1`, `badge`, `reviewer`, `lastReviewed`, `about`, `entities`, `faqs`, `related`, `posts`).
- Single sources: `lib/site-config.ts` (NAP, hours, phones, email, `legalLastUpdated`), `lib/nav.ts`, `lib/service-badges.ts`, `lib/booking-context.ts`, `lib/whatsapp.ts`, `lib/schema/*`.
- Style guide: `eve-styleguide.html` wins for visuals. Colours are locked.
- `[CONFIRM]` shows as a yellow chip in development, is hidden in production, and fails `npm run launch-check`.
- `SITE_INDEXABLE` stays off until launch (noindex header, meta and `robots.txt Disallow: /` on every host).
- Hero: one doctor, one large portrait card, no fan.