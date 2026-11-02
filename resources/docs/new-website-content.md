# EVE Women and Fertility Clinic · New website content

Version 1 for review by Dr. Swati Shree · 3 October 2026 · Prepared by Automize Media Labs

46 pages + 3 blog posts · about 34,000 words · about 290 FAQs
Facts come from `eve-client-data.md`. Page list, URLs, menus, schema blueprints and global copy blocks are in `site-plan.md`.

Contents
- Part 1 · Core pages (Home, About, Dr. Swati Shree, Services, Treatments, Conditions, Your fertility journey, Plan your visit, Coming from outside Bangalore, Contact, FAQs, Blog, Thank you, 404)
- Part 2 · Services (11 pages)
- Part 3 · Treatments (4 pages)
- Part 4 · Conditions (10 pages)
- Part 5 · Legal and trust pages (7 pages)
- Part 6 · Blog launch articles (3 posts)
- Part 7 · Review guide for Dr. Swati and open confirmations

# Part 1 · Core pages

Each page starts with its frontmatter. Italic word in an H1 or H2 = the one Instrument Serif accent word. `[CONFIRM: ...]` = shown as a yellow chip in development, hidden in production, blocks launch. `schema:` lists the node types added to the page's `@graph` on top of the global nodes (see site plan, section 9). `entities:` lists the named things the page must mention naturally.

---

## Page 1 · Home

```yaml
title: "Fertility Clinic in Bangalore | EVE, Dr. Swati Shree"
description: "Fertility and women's health clinic in Gunjur, Bangalore. Dr. Swati Shree, MRCOG (UK): evaluation, IUI, IVF, egg freezing, PCOS and miscarriage care."
url: /
reviewer: dr-swati-shree
lastReviewed: "[CONFIRM: date of Dr. Swati sign-off]"
schema: [MedicalWebPage, Service, FAQPage, ItemList]
entities: [Gunjur, Varthur, Whitefield, Sarjapur Road, MRCOG, ART Act 2021, IUI, IVF, PCOS, AMH]
```

### Hero

Eyebrow: EVE WOMEN AND FERTILITY CLINIC · GUNJUR, BANGALORE

H1: Fertility care built around *you*

Sub: Unhurried, honest care for fertility, PCOS, pregnancy and women's health, led by Dr. Swati Shree, MRCOG (UK).

Buttons: [Book Consultation] [Call 72049 21212]

Service chips: Fertility evaluation · PCOS · Recurrent pregnancy loss · IUI and IVF · Egg freezing · Male fertility · Menopause

Doctor chip: (avatar) Doctor-led care · Dr. Swati Shree, MRCOG (UK)

Portrait card name pill: Dr. Swati Shree · MBBS, DNB (OBG), MRCOG (UK)

Mobile short line (under the portrait): A full evaluation first. Every option explained.

### Answer-first summary (visible, directly under the hero; also the `speakable` text)

EVE Women and Fertility Clinic is a fertility and women's health clinic in Gunjur, Bengaluru, founded in December 2025 by Dr. Swati Shree, a reproductive medicine specialist with an MRCOG from the Royal College of Obstetricians and Gynaecologists (UK). Every patient starts with a complete evaluation and a long conversation. IUI, IVF, egg freezing and other treatments are explained clearly and used only when they are the right step for you.

### Find care by concern

Row label: What brings you here today

Pills (each links to a page):
- Trying to conceive, not yet pregnant → /services/fertility-evaluation/
- Irregular periods or PCOS → /conditions/pcos/
- More than one miscarriage → /conditions/recurrent-pregnancy-loss/
- Heavy or painful periods → /conditions/menstrual-disorders/
- Thinking about IUI or IVF → /your-fertility-journey/
- Planning to freeze eggs → /treatments/egg-freezing/
- A positive test and an early scan → /services/early-pregnancy-scan/
- Menopause symptoms → /conditions/menopause-and-perimenopause/

### 01 / Why EVE

H2: Time, honesty and *options*

Intro: Fertility care is often rushed. At EVE, you get a consultation built around your questions, one doctor who stays with you from the first visit, and a plan that starts with the simplest option that can work.

Cards (6):
1. **Time, not rush.** Consultations are built around your history and your questions, not the clock. Partners are welcome at every visit.
2. **Years of hospital experience.** Dr. Swati has worked as a consultant in busy fertility centres in Bangalore, after resident roles in obstetrics and gynaecology.
3. **A full evaluation first.** We look at ovulation, the tubes, the uterus, the ovarian reserve and the male partner before recommending any treatment.
4. **Every option explained.** Natural conception support, IUI, IVF and egg freezing are laid out side by side, with the honest pros and cons of each.
5. **One doctor throughout.** Dr. Swati sees every patient herself and follows you over time, so you do not repeat your story at each visit.
6. **A founder-led clinic.** EVE was started by Dr. Swati Shree in December 2025 to offer fertility care that feels personal.

### 02 / About EVE

H2: A founder-led clinic in *Gunjur*

Photo labels (placed off faces): "Caring for East Bangalore since December 2025" · Open 11 am - 8 pm

Paragraph: Dr. Swati Shree opened EVE Women and Fertility Clinic in December 2025 at LG Complex Towers, Gunjur, in East Bangalore. She trained in obstetrics and gynaecology, completed a fellowship in reproductive medicine at KJK Hospital in Trivandrum, and earned the MRCOG from the Royal College of Obstetricians and Gynaecologists in the UK. After years as a consultant in busy fertility centres, she built EVE around one idea: patients deserve time, plain explanations and a plan that respects their choices.

Rows:
- (doctor badge) **Consultations** · Fertility, PCOS, periods, pregnancy loss, early pregnancy and menopause
- (ivf badge) **Treatments** · IUI at the clinic, IVF and egg freezing explained and planned with you, TESA and PESA for male factor infertility

Link: Read about EVE →

### 03 / How we can help

H2: Care for every stage, every *question*

Tabs and cards (each card: title + one line + arrow):

**Fertility**
Intro: Understanding what is happening in your body is the first step, whether you are trying naturally or need a closer look.
- Fertility evaluation · A complete first assessment for both partners
- Natural conception support · Cycle mapping and ovulation timing
- Follicular monitoring · Ultrasound tracking of your fertile window
- Tubal patency test (HSG) · Checking that the fallopian tubes are open
- Male fertility evaluation · Semen analysis and expert counselling

**Treatments**
Intro: When natural conception or a simple evaluation is not enough, the options are explained before any decision is made.
- IUI · A gentler first step for the right couple
- IVF · A plan built around your fertility profile
- Egg freezing · More choices for the years ahead
- TESA and PESA · Surgical sperm retrieval for male factor infertility

**Women's health**
Intro: Everyday concerns deserve unhurried, judgment-free consultations.
- PCOS · Hormones, cycles and long-term health
- Endometriosis · Pain care that respects your goals
- Menstrual disorders · Irregular, heavy or painful periods
- Contraceptive counselling · Honest guidance on every option
- Menopause and perimenopause · Support through the transition

**Pregnancy care**
Intro: From the earliest days of pregnancy to the harder questions after a loss.
- Early pregnancy scan · Confirm a pregnancy and see how it is growing
- Recurrent pregnancy loss · A careful, kind workup
- Reproductive immunology · Looking at immune factors, guided by the evidence

**Prevention and general care**
Intro: Catching things early often means a simpler fix.
- Cervical screening and HPV vaccination · Pap test and vaccine advice
- Endometrial biopsy · A check on the uterine lining
- Adolescent gynaecology · A gentle first visit for teenagers
- Fibroids and adenomyosis · Careful evaluation and clear choices

Link: View all services →

### 04 / Your first visit, step by step

Steps (6, with the step photos listed in IMAGE-RESOURCES-NEEDED):
1. **Book.** Use the form, call 72049 21212 or 72049 21516, or message us on WhatsApp. We aim to reply within 24 hours.
2. **Arrive and register.** Bring past reports, scans and prescriptions. If you are trying to conceive, note the dates of your last few periods. Your partner is welcome.
3. **Consultation.** Dr. Swati listens first, asks about your history, and examines you. There is time for every question.
4. **Tests if needed.** A scan or blood tests may be advised after the consultation. Dr. Swati decides which, and explains why.
5. **Your options.** Each option is explained in plain words, from natural conception support to IUI or IVF where suitable, so the decision is yours.
6. **Follow-up.** Review as planned. Reach the team between visits by phone or WhatsApp.

### Visit band

H2: Visit us in *Gunjur*
Text: EVE is on the 1st floor of LG Complex Towers, Gunjur, Bangalore 560087, close to Varthur, Balagere, Whitefield and Sarjapur Road. `[CONFIRM: landmark and parking]`
Hours: 11 am - 8 pm
Buttons: [Get directions] [Plan your visit]

### 05 / Meet your doctor

H2: Meet *Dr. Swati Shree*

Card text: Reproductive medicine specialist and founder of EVE Women and Fertility Clinic.
Qualifications line: MBBS · DNB (Obstetrics and Gynaecology) · Fellowship in Reproductive Medicine, KJK Hospital, Trivandrum · MRCOG (UK)
Experience: Junior Resident at AIIMS, New Delhi; Senior Resident in obstetrics and gynaecology at Kanke General Hospital and Sakra World Hospital. Former consultant at associated fertility centres in Bangalore. Recipient, 16th GCU International Women's Day Award.
Chips: `16 years in practice` · `English, Hindi and Kannada`
Buttons: [Book with Dr. Swati] [Read her profile]

### 06 / Why a full evaluation comes first

H2: A plan that starts with *you*, not a protocol

Text: Many couples are offered IVF as a first step. Sometimes that is right. Often a simple cause, such as irregular ovulation, a thyroid problem or a low sperm count that can be improved, can be found and treated first. At EVE, Dr. Swati reviews your cycle, your hormones, your tubes, your uterus and your partner's semen report before suggesting anything. If IUI or IVF is the right choice, you will know why. If a simpler path can work, you will hear that too.

Link: Read how a fertility journey works →

### 07 / Conditions we look after (marquee)

PCOS · Endometriosis · Irregular periods · Heavy periods · Recurrent miscarriage · Low AMH · Thin endometrium · Fibroids · Adenomyosis · Thyroid and fertility · Male factor infertility · Perimenopause · Menopause

### 08 / From our blog

Three latest cards: Fertility tests explained · PCOS and getting pregnant · When to see a fertility doctor
Link: Read the blog →

### 09 / Quick answers

1. **When should I see a fertility specialist?**
   See a specialist if you have not conceived after 12 months of trying, or after 6 months if the woman is 35 or older. See one sooner if periods are very irregular or absent, you have known endometriosis, fibroids or tubal problems, you have had two or more miscarriages, or the male partner has a known semen problem.
2. **Do I need IVF to get pregnant?**
   Not necessarily. Many couples conceive with ovulation tracking, treatment of a hormone problem, or IUI. IVF is usually advised when the tubes are blocked, sperm counts are very low, other treatments have not worked, or age and ovarian reserve leave little time. Dr. Swati recommends the starting point after your evaluation.
3. **Does EVE offer IVF?**
   Dr. Swati plans and guides IVF with you at EVE. The laboratory procedures, such as egg collection, embryo culture and embryo transfer, are carried out at associated ART centres that are registered under Indian law. `[CONFIRM: exact arrangement and wording]`
4. **Can my partner come to the visit?**
   Yes, and we encourage it. Fertility involves both partners, and the male partner's semen analysis is one of the first tests. Partners are welcome in the consultation room, and you can also come alone if you prefer.
5. **Do you tell the sex of the baby on a scan?**
   No. Disclosing or testing for the sex of the baby is prohibited by Indian law, and we never do it. A scan at EVE is for checking location, growth and the heartbeat.

### Contact block

Title: Talk to us
- **Call** 72049 21212 · 72049 21516
- **WhatsApp** `[CONFIRM: number]`
- **Email** `[CONFIRM: clinic email]`
- **Address** EVE Women and Fertility Clinic, 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087 · Get directions
- **Hours** 11 am - 8 pm

### CTA band

Use the global CTA band from `site-plan.md`, section 6.

---

## Page 2 · About EVE

```yaml
title: "About EVE Women and Fertility Clinic | Gunjur, Bangalore"
description: "How EVE began, how Dr. Swati Shree works, and what to expect: a founder-led fertility and women's health clinic in Gunjur, East Bangalore, since 2025."
url: /about/
lastReviewed: "2026-09-01"
reviewer: dr-swati-shree
schema: [AboutPage]
entities: [Gunjur, Bengaluru, MRCOG, ART Act 2021, KJK Hospital]
```

H1: About EVE Women and *Fertility* Clinic

Intro (answer-first): EVE Women and Fertility Clinic is a founder-led fertility and women's health clinic in Gunjur, Bengaluru (Bangalore), started in December 2025 by Dr. Swati Shree. It exists to offer fertility care that is unhurried, honest and clear, with a full evaluation first and every option explained.

### Why EVE was started

Dr. Swati Shree spent years as a consultant in busy fertility and IVF centres. She saw how often couples left a visit with a treatment plan but without understanding why, and how often the first conversation was the shortest one. EVE was built to change that. The clinic is small on purpose, so that every patient gets time with the doctor, and every plan is explained in plain words before anything begins.

The name "EVE" stands for the woman at the centre of care. The logo, a mother holding her child in a single line, reflects what many patients hope for, and the quiet, steady way we try to help.

### How we work

1. **Listen first.** The first consultation is for your story, your questions and your goals, not for a sales conversation.
2. **Evaluate fully.** We look at both partners, and at ovulation, hormones, tubes, uterus and ovarian reserve, so that the plan is based on a reason.
3. **Start with the simplest option that can work.** Not every couple needs IVF. We do not default to the most intensive option first.
4. **Explain every option.** Natural conception support, IUI, IVF and egg freezing are compared honestly, including risks and limits.
5. **Respect your choice.** The decision is yours. We support it, whichever way it goes.

### What we do at EVE

- **Fertility care:** evaluation, natural conception support, follicular monitoring, tubal patency testing, male fertility evaluation
- **Treatments:** IUI at the clinic; IVF, egg freezing and TESA/PESA explained, planned and followed up with you
- **Women's health:** PCOS, endometriosis, menstrual disorders, fibroids, adenomyosis, thyroid problems that affect fertility, menopause
- **Pregnancy care:** early pregnancy scans, recurrent pregnancy loss evaluation, reproductive immunology
- **Prevention:** cervical cancer screening, HPV vaccination advice, endometrial biopsy, adolescent gynaecology, contraceptive counselling

### The founder

Dr. Swati Shree holds an MBBS, a DNB in Obstetrics and Gynaecology, a fellowship in reproductive medicine from KJK Hospital in Trivandrum, and the MRCOG from the Royal College of Obstetricians and Gynaecologists (UK). She worked as a Junior Resident at AIIMS, New Delhi, and as a Senior Resident in obstetrics and gynaecology at Kanke General Hospital and Research Centre and Sakra World Hospital, and has worked as a consultant at Garbhagudi IVF Centre, Apollo Fertility and Motherhood Fertility. She also teaches: she has taken MRCOG Part 1 and Part 2 preparation sessions with StudyMedic and spoken at a one-day Clinical Embryology workshop at Garden City University. She received the 16th GCU International Women's Day Award.

> **Dr. Swati's story.** `[CONFIRM: Dr. Swati approves this text in writing before publishing]` Dr. Swati's own path to motherhood was difficult. Her son was born at 30 weeks and spent 28 days in the neonatal intensive care unit. He is now 11 years old. That experience taught her what anxiety and waiting feel like from the patient's side, and it shapes how she speaks to every couple. She does not share her son's name or photograph.

### The clinic

EVE is on the 1st floor of LG Complex Towers in Gunjur, East Bangalore. It is an outpatient clinic: consultations, scans, tests and procedures such as IUI are done here. `[CONFIRM: HSG, biopsy and other procedures done on site or at a partner centre]` IVF laboratory procedures are carried out at associated, registered ART centres. `[CONFIRM: wording and registration]`

### Facts at a glance

- **Name:** EVE Women and Fertility Clinic, by Dr Swati Shree
- **Founded:** December 2025
- **Location:** 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087, Karnataka
- **Doctor:** Dr. Swati Shree, MBBS, DNB (OBG), MRCOG (UK), fellowship in reproductive medicine
- **Experience:** 16 years in practice
- **Phone:** 72049 21212 · 72049 21516
- **Hours:** 11 am - 8 pm
- **Registration:** Karnataka Medical Council Reg. No. DLH20090000353KTK · National ART and Surrogacy Registry no. `[CONFIRM]`
- **Areas served:** Gunjur, Varthur, Whitefield, Sarjapur Road, Bellandur and the rest of Bangalore; patients travel from other cities `[CONFIRM: catchment]`

### FAQs

1. **Who runs EVE Women and Fertility Clinic?**
   EVE was founded in December 2025 by Dr. Swati Shree, a reproductive medicine specialist with an MRCOG (UK), a DNB in obstetrics and gynaecology and a fellowship in reproductive medicine. She personally leads the clinic and sees every patient herself.
2. **Where is EVE located?**
   EVE is on the 1st floor of LG Complex Towers in Gunjur, Bangalore 560087, in East Bengaluru. It is close to Varthur, Balagere, Whitefield and Sarjapur Road. `[CONFIRM: landmark]` See Plan your visit for directions and parking.
3. **Is EVE a hospital?**
   No. EVE is an outpatient clinic. You do not stay overnight. Consultations, scans, tests and clinic procedures happen here. For procedures that need a hospital or a registered ART laboratory, Dr. Swati explains where it will be done before you decide.
4. **Does EVE treat only fertility problems?**
   No. EVE also looks after PCOS, endometriosis, menstrual problems, fibroids, thyroid issues linked to pregnancy, early pregnancy scans, cervical screening, contraception counselling and menopause care. You do not need to be trying to conceive to see Dr. Swati.
5. **Do you accept patients from outside Bangalore?**
   Yes. Many couples travel for the first evaluation. We try to complete tests in as few visits as possible and plan follow-up with you. See Coming from outside Bangalore for a visit plan.
6. **How can I check that the clinic and doctor are registered?**
   Dr. Swati's registration is with the Karnataka Medical Council, number DLH20090000353KTK, and can be checked on the National Medical Commission's Indian Medical Register. The clinic's ART registration `[CONFIRM: National ART and Surrogacy Registry no.]` appears in the footer and on the Patient Rights page.

Reviewer note: this page is reviewed and approved by Dr. Swati Shree. Last reviewed 1 September 2026.

---

## Page 3 · Dr. Swati Shree

```yaml
title: "Dr. Swati Shree, MRCOG | Fertility Specialist Bangalore"
description: "Dr. Swati Shree: MBBS, DNB (OBG), MRCOG (UK), fellowship in reproductive medicine. Fertility and gynaecology specialist at EVE, Gunjur, Bangalore."
url: /dr-swati-shree/
lastReviewed: "2026-09-14"
reviewer: dr-swati-shree
schema: [ProfilePage, Physician, FAQPage]
entities: [MRCOG, Royal College of Obstetricians and Gynaecologists, DNB, KJK Hospital, AIIMS, Garbhagudi IVF Centre, Apollo Fertility, Motherhood Fertility, Garden City University, StudyMedic]
```

### Hero (split)

H1: Dr. Swati Shree, *MRCOG* (UK)

Title line: Reproductive medicine specialist and gynaecologist, founder of EVE Women and Fertility Clinic

Key facts card:
- **Qualifications:** MBBS · DNB (Obstetrics and Gynaecology) · Fellowship in Reproductive Medicine, KJK Hospital, Trivandrum · MRCOG, Royal College of Obstetricians and Gynaecologists (UK)
- **Experience:** 16 years in practice
- **Languages:** English, Hindi and Kannada
- **Registration:** Karnataka Medical Council Reg. No. DLH20090000353KTK
- **Practice:** EVE Women and Fertility Clinic, Gunjur, Bangalore (founder)

Buttons: [Book with Dr. Swati] [Call 72049 21212]

### About

Dr. Swati Shree is a fertility and women's health specialist in Bangalore and the founder of EVE Women and Fertility Clinic in Gunjur. She trained in medicine and then in obstetrics and gynaecology, completing a DNB, and went on to a fellowship in reproductive medicine at KJK Hospital in Trivandrum. She is a Member of the Royal College of Obstetricians and Gynaecologists (MRCOG), a UK postgraduate qualification that tests knowledge and clinical judgment in obstetrics and gynaecology to an international standard.

She worked as a Junior Resident at AIIMS, New Delhi, and as a Senior Resident in obstetrics and gynaecology at Kanke General Hospital and Research Centre, Ranchi, and Sakra World Hospital, Bangalore. She has worked as a consultant at Garbhagudi IVF Centre, Apollo Fertility and Motherhood Fertility.

Alongside clinical work, Dr. Swati teaches. She has conducted MRCOG Part 1 and Part 2 preparation sessions with StudyMedic and has been a speaker at a one-day Clinical Embryology workshop at Garden City University. She received the 16th GCU International Women's Day Award.

She opened EVE in December 2025 to offer care built around time, honest evaluation and clear explanations.

### How Dr. Swati works

H2: How Dr. Swati *works*

1. **A full evaluation first.** "I do not believe in forcing a protocol. We look at both partners and find the reason, and then decide the next step together."
2. **Every option explained.** "You should leave the room understanding what your choices are, what each can and cannot do, and what it costs you in time and effort."
3. **Care that respects you.** "A fertility journey is personal. The decision is always yours, and I will support it."

Note for build: quotes are Dr. Swati's own approach, from the client documents, lightly edited for reading. `[CONFIRM: Dr. Swati approves the quoted wording.]`

### Education and qualifications (timeline)

- 2008 · MBBS, Patna Medical College and Hospital, Patna University
- 2017 · DNB, Obstetrics and Gynaecology, National Board of Examinations
- 2021 · Fellowship in Reproductive Medicine, KJK Hospital and Fertility Research Centre
- 2021 · Certificate Course in Laparoscopy and Hysteroscopy (February - March)
- 2023 · MRCOG, Royal College of Obstetricians and Gynaecologists, UK

### Work experience

- Since December 2025 · Founder and consultant, EVE Women and Fertility Clinic, Gunjur, Bangalore
- Nov 2024 - present · Consultant Infertility Specialist, Motherhood Fertility and IVF Centre, Whitefield
- Feb 2022 - Oct 2024 · Consultant Infertility Specialist, Apollo Fertility, Brookefield and Varthur
- Mar 2021 - Jan 2022 · Consultant, Garbhagudi IVF Centre, Bangalore
- Jan 2020 - Jan 2021 · Fellowship in Reproductive Medicine, KJK Hospital and Fertility Research Centre, Trivandrum
- Apr 2019 - Sep 2019 · Senior Resident, Obstetrics and Gynaecology, Sakra World Hospital, Bangalore
- May 2017 - Mar 2019 · Senior Resident, Obstetrics and Gynaecology, Kanke General Hospital and Research Centre, Ranchi
- Jan 2013 - Mar 2014 · Casualty Medical Officer, Deen Dayal Hospital, Delhi
- Jul 2011 - Sep 2011 · Junior Resident, Department of Blood Bank, AIIMS, New Delhi

### Teaching, talks and award

- MRCOG Part 1 and Part 2 preparation sessions, StudyMedic
- Session at a one-day Clinical Embryology workshop, Garden City University
- 16th GCU International Women's Day Award, Garden City University `[CONFIRM: year]`

Publications and memberships: free paper "Role of maternal serum PAPP-A and Uterine artery PI at 11-13 weeks in predicting Pre Eclampsia" at the 60th AICOG, 2017; poster "Seizure in Pregnancy: Malaria or Preeclampsia" at the Obstetric Medicine Update, Society of Obstetric Medicine of India, November 2018. Member of IMA, FOGSI, SOMI and ISAR.

### Conditions and services (non-clickable chip groups)

- **Fertility:** Infertility evaluation · Natural conception support · Follicular monitoring · Tubal patency test · Male fertility evaluation · IUI · IVF · Egg freezing · TESA and PESA
- **Hormones and cycles:** PCOS · Menstrual disorders · Thyroid and fertility · Menopause · Perimenopause
- **Uterus and ovary:** Endometriosis · Fibroids · Adenomyosis · Thin endometrium · Low ovarian reserve
- **Pregnancy:** Early pregnancy scan · Recurrent pregnancy loss · Reproductive immunology
- **Prevention and young women:** Cervical screening · HPV vaccination advice · Endometrial biopsy · Contraceptive counselling · Adolescent gynaecology

Mobile: 6 per group + "Show all (n)".

### FAQs

1. **What kind of doctor is Dr. Swati Shree?**
   Dr. Swati Shree is an obstetrician and gynaecologist who specialises in reproductive medicine. She holds a DNB in obstetrics and gynaecology, a fellowship in reproductive medicine from KJK Hospital in Trivandrum, and an MRCOG from the Royal College of Obstetricians and Gynaecologists in the UK. She looks after fertility problems and women's health conditions.
2. **What does MRCOG mean?**
   MRCOG stands for Member of the Royal College of Obstetricians and Gynaecologists. It is a UK postgraduate qualification earned by passing demanding written and clinical examinations in obstetrics and gynaecology. It does not indicate a treatment outcome, but it shows training to an international standard.
3. **Which languages does Dr. Swati speak?**
   English, Hindi and Kannada. You can speak in the language you are most comfortable with, and she will explain your reports and plan in the same language.
4. **Where does Dr. Swati see patients?**
   Dr. Swati sees patients at EVE Women and Fertility Clinic, 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087. Call 72049 21212 or 72049 21516 to book. She previously worked as a consultant at associated fertility centres.
5. **Do I see Dr. Swati herself at every visit?**
   Yes. EVE is a founder-led clinic, and Dr. Swati sees every patient herself. Scans and tests may be done by trained staff under her supervision, but the consultation, the plan and the decisions are hers and yours.
6. **How can I check Dr. Swati's registration?**
   Dr. Swati is registered with the Karnataka Medical Council, registration number DLH20090000353KTK. You can verify registered doctors through the National Medical Commission's Indian Medical Register, or by contacting the Karnataka Medical Council.

Reviewer note: this page is reviewed and approved by Dr. Swati Shree. Last reviewed 14 September 2026.

---
## Page 4 · All services

```yaml
title: "Fertility and Gynaecology Services in Bangalore | EVE"
description: "Fertility evaluation, follicular monitoring, HSG, male fertility testing, early pregnancy scans, cervical screening and more with Dr. Swati Shree, Gunjur."
url: /services/
lastReviewed: "2026-09-18"
schema: [CollectionPage, ItemList, FAQPage]
```

H1: Care for every stage, every *question*

Intro: EVE Women and Fertility Clinic in Gunjur, Bangalore offers fertility tests, pregnancy care, preventive gynaecology and everyday women's health care with Dr. Swati Shree. Each service below has its own page that explains what it is, who needs it and what happens at the visit.

### Fertility

- **Fertility evaluation** · A complete first assessment for both partners → /services/fertility-evaluation/
- **Natural conception support** · Cycle mapping, ovulation timing and lifestyle advice → /services/natural-conception-support/
- **Follicular monitoring** · Ultrasound tracking of follicles and the uterine lining → /services/follicular-monitoring/
- **Tubal patency test (HSG)** · An X-ray test to check the fallopian tubes → /services/tubal-patency-test-hsg/
- **Male fertility evaluation** · Semen analysis, examination and counselling → /services/male-fertility-evaluation/

### Women's health

- **PCOS care** → /conditions/pcos/
- **Endometriosis** → /conditions/endometriosis/
- **Menstrual disorders** → /conditions/menstrual-disorders/
- **Contraceptive counselling** · Every option explained without pressure → /services/contraceptive-counselling/
- **Menopause and perimenopause** → /conditions/menopause-and-perimenopause/
- **Adolescent gynaecology** · A gentle first visit for teenagers → /services/adolescent-gynaecology/

### Pregnancy care

- **Early pregnancy scan** → /services/early-pregnancy-scan/
- **Recurrent pregnancy loss** → /conditions/recurrent-pregnancy-loss/
- **Reproductive immunology** → /services/reproductive-immunology/

### Preventive gynaecology

- **Cervical cancer screening and HPV vaccination** → /services/cervical-cancer-screening-hpv-vaccination/
- **Endometrial biopsy** → /services/endometrial-biopsy/

### How to choose where to start

Not sure which service you need? Start with a consultation. Dr. Swati will listen to your history, examine you, and tell you which tests help and which do not. If you are trying to conceive, the first step is usually a fertility evaluation. If your periods are irregular or painful, start with the condition pages and book a consultation.

### FAQs

1. **Which service is right for me?**
   If you are not sure, book a consultation. Dr. Swati reviews your history first and then decides which tests or services help. You do not need to know the right service in advance, and you are not committing to any treatment by booking a first visit.
2. **Can I see Dr. Swati if I am not trying to conceive?**
   Yes. EVE looks after PCOS, periods, endometriosis, fibroids, contraception, menopause and preventive care, as well as fertility. Many patients come for women's health concerns with no plan for pregnancy.
3. **Do I need to bring my partner?**
   For fertility problems, a first visit with both partners is the most useful, because the male partner's semen analysis is one of the first tests. For other concerns, you can come alone.
4. **Are tests done on the same day?**
   Many scans can be done at the visit. Blood tests and some procedures are planned for specific days of your cycle. Dr. Swati explains the timing so you do not make extra trips. `[CONFIRM: which tests are done on site]`
5. **Do you offer treatment in a single visit?**
   Some concerns, such as a simple review or a scan, can be settled in one visit. Fertility care usually takes a few visits over one or two cycles, because tests and treatment are timed to your cycle.

---

## Page 5 · All treatments

```yaml
title: "IUI, IVF and Egg Freezing in Bangalore | EVE"
description: "IUI, IVF, egg freezing and TESA/PESA explained by Dr. Swati Shree, MRCOG, in Gunjur, Bangalore. Honest options, clear steps, no pressure."
url: /treatments/
lastReviewed: "2026-09-26"
schema: [CollectionPage, ItemList, FAQPage]
```

H1: Fertility treatments, explained *before* you decide

Intro: When natural conception or a simple evaluation is not enough, EVE offers fertility treatments with the same honesty that defines the clinic. Dr. Swati Shree explains what each treatment does, what it cannot do, and why it is, or is not, the right step for you. IUI, IVF and egg freezing are regulated in India by the Assisted Reproductive Technology (Regulation) Act, 2021.

### Treatments

- **IUI (intrauterine insemination)** · Prepared sperm placed in the uterus around ovulation → /treatments/iui/
- **IVF (in vitro fertilisation)** · Eggs and sperm combined in a laboratory, with embryo transfer to the uterus → /treatments/ivf/
- **Egg freezing** · Preserving eggs now, for use later → /treatments/egg-freezing/
- **TESA and PESA** · Surgical sperm retrieval for men with very low or no sperm in the semen → /treatments/tesa-pesa/

### IUI vs IVF at a glance

| | IUI | IVF |
|---|---|---|
| What it does | Places prepared sperm in the uterus | Fertilises eggs in a laboratory and transfers an embryo |
| Fallopian tubes | At least one open tube needed | Tubes do not need to be open |
| Usual reasons | Unexplained infertility, mild male factor, ovulation problems, cervical factor | Blocked tubes, severe male factor, endometriosis, low reserve, failed IUI |
| Medicines | Often mild or none | Several, with close monitoring |
| Time | A few days in one cycle | A few weeks per cycle |
| Where | At the clinic | Planned with you at EVE, with laboratory steps at associated ART centres `[CONFIRM]` |

### The rules every patient should know

IUI and IVF are regulated by the ART (Regulation) Act, 2021. Treatment is offered to married couples where the woman is 21 to 50 years old and the man is 21 to 55, and to widowed or divorced women aged 21 to 50, with written consent and counselling. Sex selection is prohibited. We explain these rules at your first visit. `[CONFIRM: Dr. Swati approves this wording]`

### FAQs

1. **How do I know which treatment I need?**
   It depends on your evaluation results, age, how long you have been trying, and your diagnosis. Dr. Swati recommends the right starting point at your consultation rather than defaulting to the most intensive option.
2. **Is IVF always the next step after IUI?**
   Not always. After a limited number of IUI cycles without pregnancy, the plan is reviewed. IVF may then be advised, or other causes may be looked for. Dr. Swati explains the reasoning at each step, so the decision is yours.
3. **Do you promise a pregnancy?**
   No clinic can. A pregnancy depends on age, the cause of infertility, egg and sperm quality and chance. What EVE promises is an honest explanation, careful follow-up and respect for your decisions.
4. **How much do treatments cost?**
   The cost depends on the treatment, the medicines you need and the number of cycles. After your evaluation, you receive a clear estimate before anything starts. `[CONFIRM: fee and estimate policy]`
5. **Do I need to stop work for treatment?**
   Most people keep working. IUI needs a few short visits for scans and the procedure. IVF needs more frequent visits during stimulation and one or two days off around egg collection and transfer. Dr. Swati plans the dates with you.
6. **Can single women or unmarried couples have IUI or IVF?**
   Under the ART Act, services are for married couples and for widowed or divorced women within the age limits. Dr. Swati can explain what applies to your situation. Egg freezing has its own rules, which she explains at your consultation.

---

## Page 6 · All conditions

```yaml
title: "PCOS, Endometriosis, Fibroids and More | EVE Bangalore"
description: "Plain-English guides to PCOS, endometriosis, recurrent miscarriage, fibroids, thyroid, low AMH and menopause, reviewed by Dr. Swati Shree, Bangalore."
url: /conditions/
lastReviewed: "2026-09-05"
schema: [CollectionPage, ItemList, FAQPage]
```

H1: Know what you are dealing *with*

Intro: Understanding a diagnosis takes away a lot of the fear. These guides explain ten common conditions in women's health and fertility, in plain English, and describe how Dr. Swati Shree evaluates and manages each at EVE Women and Fertility Clinic in Gunjur, Bangalore.

### Fertility conditions

- **Female factor infertility** · The common reasons a woman may not conceive → /conditions/female-factor-infertility/
- **Male factor infertility** · Low sperm count, poor motility and more → /services/male-fertility-evaluation/
- **Thin endometrium and low ovarian reserve** · When the lining or egg supply is the problem → /conditions/thin-endometrium-and-low-ovarian-reserve/
- **Recurrent pregnancy loss** · Two or more miscarriages → /conditions/recurrent-pregnancy-loss/
- **Thyroid and fertility** · A simple blood test that often matters → /conditions/thyroid-and-fertility/

### Women's health conditions

- **PCOS** · Irregular cycles, hormones and long-term health → /conditions/pcos/
- **Endometriosis** · Pain, and sometimes difficulty conceiving → /conditions/endometriosis/
- **Menstrual disorders** · Irregular, heavy or painful periods → /conditions/menstrual-disorders/
- **Fibroids** · Common non-cancerous growths in the uterus → /conditions/fibroids/
- **Adenomyosis** · When the uterine lining grows into the muscle wall → /conditions/adenomyosis/
- **Menopause and perimenopause** · The transition years → /conditions/menopause-and-perimenopause/

### When you are unsure what is wrong

Symptoms overlap. Painful periods can be endometriosis or adenomyosis. Irregular periods can be PCOS or a thyroid problem. Heavy periods can be fibroids, adenomyosis or a hormone imbalance. A consultation and a scan usually sort this out quickly. Use these pages to understand the terms, and book a visit to find out which applies to you.

### FAQs

1. **What should I do first if I think I have a gynaecological condition?**
   Note your symptoms, the dates of your last few periods, and any medicines you take. Bring past reports and scans. Book a consultation. Dr. Swati examines you, decides which tests are needed, and explains the diagnosis before any treatment begins.
2. **Can I have more than one condition at once?**
   Yes, and this is common. PCOS and thyroid disease occur together often. Endometriosis, adenomyosis and fibroids can coexist. Dr. Swati looks at the whole picture, so that treating one does not worsen another.
3. **Which symptoms need attention straight away?**
   Very heavy bleeding that soaks through a pad every hour, sudden severe pelvic pain, fainting, fever with pelvic pain, or bleeding with pain in early pregnancy need urgent care. Call 108 or 112, or go to the nearest hospital emergency.
4. **Do all conditions affect fertility?**
   No. Many conditions, such as simple fibroids or mild menstrual problems, do not stop you getting pregnant. Others, such as untreated PCOS, endometriosis or blocked tubes, can. A fertility evaluation shows whether your condition matters for conception.

---

## Page 7 · Your fertility journey

```yaml
title: "Your Fertility Journey: IUI or IVF First? | EVE Bangalore"
description: "How a fertility journey works, step by step: tests, simple options, IUI, IVF and how to decide. Honest guidance from Dr. Swati Shree, Gunjur, Bangalore."
url: /your-fertility-journey/
lastReviewed: "2026-09-30"
reviewer: dr-swati-shree
schema: [MedicalWebPage, FAQPage]
entities: [IUI, IVF, ICSI, AMH, ART Act 2021, ESHRE]
```

H1: Your fertility *journey*, step by step

Intro (answer-first): A fertility journey at EVE Women and Fertility Clinic in Bangalore usually moves through four stages: understanding why conception is taking time, trying the simplest options that can work, moving to IUI or IVF if needed, and following up with care and clarity. No two paths are the same, and you can stop or pause at any point. This page explains the stages, so that you know what to expect and what to ask.

### At a glance

- **When to start:** after 12 months of trying, or 6 months if the woman is 35 or older, or sooner with a known problem
- **Stage 1:** a full evaluation of both partners
- **Stage 2:** treating what can be treated, and timed attempts with monitoring
- **Stage 3:** IUI or IVF, if the evaluation or time points that way
- **Stage 4:** early pregnancy care, or a calm review if the cycle does not work
- **Time:** the evaluation takes one to two cycles
- **Rules:** IUI and IVF follow the ART (Regulation) Act, 2021, including written consent

### Stage 1 · Understand why

You and your partner meet Dr. Swati for a long first consultation. She asks about your cycles, past pregnancies, medical and surgical history, medicines and lifestyle. She asks the same of your partner. You are examined, and tests are planned for the right days of your cycle. Typical tests are a pelvic ultrasound with an antral follicle count, an AMH blood test, thyroid and prolactin tests, a tubal check such as an HSG, and a semen analysis for your partner. See Fertility evaluation for details.

About one in three couples with infertility have a cause mainly in the woman, one in three mainly in the man, and the rest have causes in both or none found. That is why both partners are evaluated together.

### Stage 2 · Treat what can be treated

Many findings can be addressed directly. An underactive thyroid can be corrected. Irregular ovulation can be treated with ovulation-inducing medicine. Lifestyle factors, such as weight, smoking, alcohol and sleep, can be improved for both partners. Sometimes a uterine polyp or fibroid needs removal. Alongside this, you may use natural conception support with follicular monitoring, which means ultrasound scans that tell you when ovulation is close, so timing is right.

### Stage 3 · IUI or IVF, and how to decide

Both are used only when they fit. The table below shows the usual reasons.

| Situation | Usually starts with |
|---|---|
| Unexplained infertility, young, open tubes | Timed attempts with monitoring, then IUI |
| Mild male factor, open tubes | IUI |
| Irregular ovulation, open tubes | Ovulation induction, then IUI if needed |
| Blocked or damaged tubes | IVF |
| Severe male factor | IVF with ICSI, with TESA or PESA if no sperm in semen |
| Endometriosis with reduced reserve | IVF, earlier |
| Age 38 or more, or low ovarian reserve | Discussion of earlier IVF, as time matters |
| Repeated IUI without pregnancy | Review, then IVF |

In IUI, prepared sperm are placed in the uterus around ovulation. In IVF, eggs are collected, fertilised in a laboratory (sometimes with ICSI, where one sperm is injected into one egg), cultured for several days, and an embryo is transferred to the uterus. Read the IUI and IVF pages for steps and risks.

### Stage 4 · After the cycle

If a pregnancy test is positive, an early scan confirms where the pregnancy is and that it is growing. If it is negative, Dr. Swati reviews what happened, and the options for the next step. Both outcomes are discussed with care. Some couples choose to pause. That is also a valid choice, and we support it.

### What helps you cope

- Come to visits together when you can.
- Write down your questions between visits, and bring them.
- Decide in advance what you are comfortable with: how many cycles, what kinds of treatment, and what budget.
- Protect sleep, meals and some quiet time.
- Tell us if the process is affecting your mood or relationship. We can talk, and point you to counselling support.

### Who can have ART in India

Under the ART (Regulation) Act, 2021, IUI and IVF are offered to married couples with an infertility diagnosis where the woman is 21 to 50 years old and the man is 21 to 55, and to widowed or divorced women aged 21 to 50. Written consent is required, and sex selection is prohibited. If you have questions about eligibility, ask at your consultation. `[CONFIRM: Dr. Swati approves this wording]`

### FAQs

1. **Should I try IUI or IVF first?**
   It depends on your diagnosis, age and how long you have tried. IUI suits some couples with open tubes and mild problems. IVF suits blocked tubes, severe male factor, endometriosis or limited time. Dr. Swati recommends the starting point after your evaluation, and explains why.
2. **How many IUI cycles are reasonable before moving to IVF?**
   Most guidelines support a limited number of IUI cycles, then a review. The number depends on your age, your tests, and your response to treatment. Dr. Swati explains your plan in advance so you know when the next review is.
3. **How long does a fertility evaluation take?**
   Usually one to two menstrual cycles, because some tests are timed to specific cycle days. Your first consultation is the longest visit. You may need two or three short visits for scans, blood tests and the tubal check.
4. **Is infertility always the woman's problem?**
   No. A male factor is the main or a contributing cause in about half of couples. That is why a semen analysis is one of the first tests, and why both partners are seen together.
5. **Can stress cause infertility?**
   Everyday stress is unlikely to be the sole cause of infertility, but fertility treatment itself can be stressful. Sleep, meals, movement and honest conversations help. If low mood or anxiety are affecting you, tell us and we can suggest counselling.
6. **How do I know if I should stop treatment?**
   That is a personal decision. We can review your results and your options at any point. Some couples pause, some change plans, and some stop. Dr. Swati supports each choice without pressure.

### Sources
- ESHRE Guideline on Unexplained Infertility (2023)
- NICE Guideline CG156, Fertility problems: assessment and treatment
- ASRM Practice Committee, Definition of infertility (2023)
- ART (Regulation) Act, 2021

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 30 September 2026.

---

## Page 8 · Plan your visit

```yaml
title: "Plan Your Visit | EVE Fertility Clinic, Gunjur Bangalore"
description: "Address, timings, directions, what to bring and how to prepare for your first consultation at EVE Women and Fertility Clinic, Gunjur, Bangalore."
url: /plan-your-visit/
lastReviewed: "2026-09-17"
schema: [WebPage, FAQPage]
```

H1: Plan your *visit*

Intro: EVE Women and Fertility Clinic is on the 1st floor of LG Complex Towers, Gunjur, Bangalore 560087. This page tells you when we are open, how to reach us, what to bring, and how to prepare.

### Timings

- **OPD hours:** 11 am - 8 pm
- **Phone and WhatsApp hours:** 11 am - 8 pm
- **Holidays:** Holiday hours may change. Please call before you visit. `[CONFIRM]`

### Address and directions

EVE Women and Fertility Clinic
1st Floor, LG Complex Towers
Gunjur, Bangalore 560087, Karnataka
`[CONFIRM: landmark, for example "opposite ..."]`

[Get directions] (opens Google Maps) · Show map (click to load)

Reaching us: from Varthur, Whitefield, Sarjapur Road and Bellandur, the clinic is a short drive by road. `[CONFIRM: distances, bus routes, nearest Namma Metro station and approximate cab time]`

Parking: `[CONFIRM]`
Lift or stairs to the 1st floor: `[CONFIRM]`

### Booking

Book through the form on the Contact page, call 72049 21212 or 72049 21516, or message us on WhatsApp. We aim to reply within 24 hours. Walk-ins are possible, but an appointment avoids waiting. `[CONFIRM: walk-in policy]`

### Before your first consultation

- **Both partners if possible.** Fertility involves both of you.
- **Bring all reports:** previous scans, blood tests, semen analysis, HSG or laparoscopy reports, and any treatment summaries.
- **Bring your medicines** and supplements, or a list.
- **Note your cycle:** the first day of your last three periods, and how long they last.
- **Write down your questions.** There is time for them.
- **Wear comfortable clothes.** A scan or an examination may be part of the visit.

### Tests and fasting

Most first visits need no fasting. If blood tests are advised, Dr. Swati tells you if you should fast and which cycle day to come. Some tests, such as hormone tests and a tubal check, are timed to the cycle, so you may be asked to return on a specific day.

### Payment

`[CONFIRM: payment modes accepted, for example cash, UPI, cards; fees policy]` An estimate is given before any treatment starts.

### Access

`[CONFIRM: lift, ramp, wheelchair access, washroom, step at the entrance]`

### Children and young people

Girls under 18 are welcome with a parent or guardian, and consent is taken from the guardian. Teenagers can ask to speak to the doctor alone for part of the visit. See Adolescent gynaecology.

### FAQs

1. **Do I need an appointment?**
   An appointment is recommended, because consultations are unhurried and slots are planned. Call 72049 21212, use the form or message on WhatsApp. If you must walk in, we will fit you in as soon as we can. `[CONFIRM: walk-in policy]`
2. **How long is a first consultation?**
   `[CONFIRM: usual duration]` The first consultation is the longest visit, because Dr. Swati takes a complete history. Plan for enough time, and bring your partner if you can.
3. **What if my periods start on the day of my appointment?**
   Come anyway for the consultation. Some tests, such as an HSG, need the days just after your period, and others are timed later in the cycle. Tell the front desk when you book, and Dr. Swati plans around your cycle.
4. **Can I bring someone with me?**
   Yes. Your partner, a family member or a friend is welcome in the consultation. For an examination or scan, you may choose who stays. A female attendant is available. `[CONFIRM]`
5. **Is the clinic open on Sundays and holidays?**
   `[CONFIRM: Sunday and holiday timings]` Please call before you travel on a holiday.
6. **Will I have to undress for the first visit?**
   Not always. The first visit is mainly a conversation. If an examination or transvaginal scan is needed, it is explained first and done only with your consent, in privacy. You can ask for a pause at any point.

---

## Page 9 · Coming from outside Bangalore

```yaml
title: "Fertility Doctor Bangalore for Outstation Patients | EVE"
description: "Planning a fertility consultation with Dr. Swati Shree from another city? How to plan a visit, what to bring, and how follow-up works from far away."
url: /coming-from-outside-bangalore/
lastReviewed: "2026-09-05"
schema: [WebPage, Service, FAQPage]
```

H1: Coming to EVE from outside *Bangalore*

Intro: Many couples travel to Bangalore for a fertility evaluation with Dr. Swati Shree. EVE Women and Fertility Clinic in Gunjur is planned so that the first visit gives you as much clarity as possible, and follow-up can be done with fewer trips. This page explains how to plan.

### Plan a first visit

1. **Book a consultation** and tell us your cycle day and where you are travelling from.
2. **Send your reports ahead.** Share scans, blood tests and semen analysis by WhatsApp or email, so that Dr. Swati can read them before you arrive. `[CONFIRM: preferred method]`
3. **Choose the right cycle day.** Some tests are best done on certain days. We tell you the best day to arrive.
4. **Come together.** If possible, both partners come on the first visit.
5. **Plan two to three days** if tests such as a scan and HSG are needed, and a night's stay near Gunjur or Whitefield. `[CONFIRM: any partner stay or travel guidance]`

### Tests that can usually be done on the first visit

- Consultation and examination
- Pelvic and antral follicle count ultrasound
- AMH, thyroid and other blood tests (reports ready in a day or so) `[CONFIRM]`
- Semen analysis for the male partner
- Tubal patency test (HSG), if timed to your cycle `[CONFIRM: where done]`

### Follow-up from far away

Some follow-up can be done by phone, WhatsApp or by sharing reports. Scans during a treatment cycle, such as follicle tracking, can be done at a reliable local centre, and the reports shared with Dr. Swati. Procedures such as IUI, egg collection and embryo transfer need you at the clinic or the associated centre. `[CONFIRM: tele-consult policy and local monitoring arrangement]`

### Getting here

Gunjur is in East Bangalore, off Varthur Road. `[CONFIRM: distance and time from Kempegowda International Airport, Bengaluru railway stations and the nearest metro station]`

### FAQs

1. **Can I have a consultation without travelling?**
   `[CONFIRM: whether video consultations are offered]` At present, EVE focuses on in-person consultations, because fertility care needs an examination and scans. Reports can often be shared in advance so that the visit is more useful.
2. **How many days should I plan for a first visit?**
   Most outstation couples plan two to three days. The consultation, scan and blood tests can often be done on the first day. A tubal test or a semen analysis may need a different day, depending on your cycle.
3. **Can local scans be used for follicle tracking?**
   Often, yes. Follicle tracking during a cycle can be done at a trusted local centre. You share the reports with Dr. Swati, who adjusts your plan. Procedures at the time of ovulation or egg collection need a visit to Bangalore.
4. **Can I get IVF done in Bangalore if I live in another state?**
   Yes, patients from other states can have IVF in Bangalore, within the ART Act's rules on eligibility and consent. The plan and the laboratory steps are explained at your first visit, and each cycle is timed with you.
5. **Is there anywhere to stay nearby?**
   `[CONFIRM: nearby hotels or service apartments, no endorsement]` Gunjur, Varthur and Whitefield have many hotels and service apartments. We can suggest the area to stay in, but we do not recommend or partner with any particular hotel.

---

## Page 10 · Contact and book

```yaml
title: "Book a Fertility Consultation | EVE Bangalore, Gunjur"
description: "Book with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur. Call 72049 21212 or 72049 21516. We aim to reply within 24 hours."
url: /contact/
lastReviewed: "2026-09-12"
schema: [ContactPage, ReserveAction]
```

H1: Book a consultation or *contact* us

Intro: Fill in the form and we will contact you to confirm a time. We aim to reply within 24 hours. You can also call 72049 21212 or 72049 21516.

Emergency notice above the form: This form is not for emergencies. In a medical emergency, call 108 or 112.

### Form (`#book`)

- Patient name
- Mobile number (+91)
- Age, in years
- Reason for visit (dropdown, see site plan section 8)
- Preferred date (today to 60 days ahead)
- Preferred time: Morning · Afternoon · Evening
- Town or city (optional)
- "The patient is under 18": guardian name (required if ticked) + "I am the parent or legal guardian and I consent to EVE Women and Fertility Clinic using these details to arrange care for this patient."
- Consent checkbox (global line)
- Button: Request appointment
- Under the form: global line

### Contact cards (beside the form, over the clinic image)

- **Call** 72049 21212 · 72049 21516
- **WhatsApp** `[CONFIRM: number]`
- **Email** `[CONFIRM: obfuscated clinic email]`
- **Address** EVE Women and Fertility Clinic, 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087 · Get directions
- **Hours** 11 am - 8 pm
- Line: Coming from outside Bangalore? [Plan your visit]

Map: Show map (click to load; pin from `[CONFIRM: Google Maps share URL]`)

---

## Page 11 · FAQs

```yaml
title: "Fertility and Women's Health FAQs | EVE Bangalore"
description: "Answers to common questions on fertility tests, IUI, IVF, PCOS, miscarriage, egg freezing, booking, privacy and the ART Act, from EVE, Gunjur, Bangalore."
url: /faqs/
lastReviewed: "2026-09-15"
schema: [FAQPage]
```

H1: Questions patients *often* ask

Intro: Straight answers to the questions we hear most. For anything specific to you, book a consultation with Dr. Swati Shree.

### Booking and visits

1. **How do I book an appointment?**
   Use the form on the Contact page, call 72049 21212 or 72049 21516, or message us on WhatsApp. We aim to reply within 24 hours and confirm a time that suits you.
2. **Should my partner come to the first visit?**
   If you can, yes. Fertility involves both partners, and many tests involve the male partner. If your partner cannot come, you can still book, and he can be tested later.
3. **What should I bring?**
   Bring previous reports, scans, semen analysis, any treatment summaries, your medicines, and the dates of your last three periods. Write down your questions as well.
4. **Is the first consultation long?**
   Yes, on purpose. The first visit is the longest, because Dr. Swati takes a full history before suggesting any test or treatment. `[CONFIRM: typical duration]`
5. **Is my information private?**
   Yes. We use your details only to arrange and give care, as explained in our Privacy Policy. We do not publish patient names, photographs or stories without written consent, and we do not share information with your employer or relatives without your permission.

### Fertility basics

6. **When should I see a fertility specialist?**
   After 12 months of trying without a pregnancy, or after 6 months if the woman is 35 or older. Sooner if periods are irregular or absent, if there is known endometriosis, fibroids or tubal disease, or after two or more miscarriages.
7. **What are the first tests for infertility?**
   Usually a pelvic ultrasound with an antral follicle count, an AMH blood test, thyroid and prolactin tests, a tubal patency check, and a semen analysis for the male partner. Dr. Swati decides which are needed.
8. **What is AMH?**
   AMH, or anti-Mullerian hormone, is a blood test that reflects how many small egg-containing follicles you have. It helps estimate ovarian reserve and guide treatment planning. It does not, on its own, predict whether you will conceive.
9. **How does age affect fertility?**
   Fertility in women declines gradually from the late twenties and more steeply after 35, because egg number and quality fall. In men, sperm quality can also change with age, though more slowly. This is why timing matters.
10. **Can I get pregnant with PCOS?**
    Yes, many women with PCOS conceive. PCOS can make ovulation irregular, so treatment focuses on regular ovulation, weight and metabolic health, and sometimes ovulation-inducing medicine. See the PCOS page.
11. **Does a normal ultrasound mean normal fertility?**
    Not always. A scan shows the uterus and ovaries, but it does not show whether the tubes are open, how good the eggs are, or whether the semen is normal. A fertility evaluation looks at all of these.
12. **How long should we try before seeking help?**
    The guideline is 12 months for most couples, and 6 months if the woman is 35 or older. If you are worried earlier, it is fine to ask. An early check can save months.

### Treatments

13. **What is IUI?**
    Intrauterine insemination places washed, prepared sperm directly into the uterus around ovulation. It suits some couples with unexplained infertility, mild male factor, or ovulation problems, and needs at least one open fallopian tube.
14. **What is IVF?**
    In vitro fertilisation means collecting eggs, fertilising them with sperm in a laboratory, growing the embryos for a few days, and transferring one into the uterus. It is used when other approaches are unlikely to work or have not worked.
15. **Is IVF painful?**
    Hormone injections cause mild discomfort, and some people feel bloated during stimulation. Egg collection is done under sedation, so you do not feel it, and you may have cramps afterward. Embryo transfer is usually quick and feels like a Pap test.
16. **What is egg freezing?**
    Egg freezing means stimulating the ovaries, collecting eggs and freezing them by vitrification for later use. It preserves eggs at the age they were frozen, but it does not guarantee a future pregnancy.
17. **Who can have IUI or IVF in India?**
    Under the ART (Regulation) Act, 2021, services are for married couples with infertility, where the woman is 21 to 50 and the man is 21 to 55, and for widowed or divorced women aged 21 to 50. Written consent is required.
18. **How much does IVF cost?**
    The cost depends on the medicines, the number of eggs and embryos, the laboratory steps and the number of cycles. After your evaluation, you receive a written estimate before treatment begins. `[CONFIRM: fee policy]`
19. **Do you tell the baby's sex?**
    No. Telling or testing for the sex of the baby is prohibited by Indian law, and EVE never does it.
20. **Does EVE do surrogacy or donor treatment?**
    `[CONFIRM: not offered at launch]` EVE does not offer surrogacy or donor treatment at this time. Please ask at your consultation if you want to understand the rules.

### Women's health and pregnancy

21. **I have irregular periods. Should I worry?**
    Occasional variation is common, but cycles that are often longer than 35 days, or shorter than 21, or missed for three months, are worth a check. Causes include PCOS, thyroid problems and stress. See Menstrual disorders.
22. **What is recurrent miscarriage?**
    It means two or more pregnancy losses. Most losses happen by chance, but two or more deserve a careful workup. See the Recurrent pregnancy loss page.
23. **How soon can an early pregnancy scan show a heartbeat?**
    A transvaginal scan can usually show a heartbeat at about 6 weeks of pregnancy, counted from the first day of your last period. If it is too early, the scan is repeated in a week or so.
24. **What age should I start Pap smears and HPV vaccination?**
    Cervical screening is generally advised from the mid-twenties to thirty, depending on history and guideline. HPV vaccination works best before exposure, and India's national programme now offers a free single dose to 14-year-old girls. See that page.
25. **When does menopause start in India?**
    The average age is about 46 to 47 in Indian women, a few years earlier than in many Western countries. Perimenopause can begin years before that. See the Menopause page.

### Payment and privacy

26. **What payment modes do you accept?**
    `[CONFIRM: cash, UPI, cards]` Payment is taken at the clinic. Treatment estimates are given in advance in writing.
27. **Can I get a refund if I cancel?**
    See our Appointments, Cancellation and Refund page for the rules on rescheduling and refunds of consultation and test fees.
28. **How do you protect my data?**
    We collect only what we need, store it securely, and use it for your care and booking. You can ask to see, correct or delete your data. See the Privacy Policy.
29. **Do you share reports with my family doctor?**
    Only with your permission. If you want your reports sent to another doctor, tell us and we will arrange it.
30. **Can I be treated confidentially if I am unmarried?**
    Consultations and tests for women's health concerns are confidential and open to all adults. Some fertility treatments are regulated by the ART Act, which sets eligibility rules, and Dr. Swati can explain what applies.

---

## Page 12 · Blog (index)

```yaml
title: "Fertility and Women's Health Blog | EVE Bangalore"
description: "Doctor-reviewed articles on fertility tests, PCOS, IUI, IVF, egg freezing, periods and menopause by Dr. Swati Shree, EVE Women and Fertility Clinic."
url: /blog/
lastReviewed: "2026-09-03"
schema: [Blog, ItemList]
```

H1: Fertility and women's health *library*

Intro: Clear, doctor-reviewed articles to help you understand tests, conditions and treatments before you decide anything. Written for patients, reviewed by Dr. Swati Shree.

Filters: All · IVF Treatment · PCOS & Fertility · Female Infertility · Low AMH & Ovarian Reserve · Endometriosis · IUI (Intrauterine Insemination) · Male Infertility · Pregnancy After IVF · Recurrent Pregnancy Loss · Fertility After 35 · Getting started · Conditions · Treatments · Women's health

Cards (3 at launch):
1. Fertility tests explained: AMH, semen analysis, HSG and scans · Getting started · 7 min read
2. PCOS and getting pregnant: what the evidence says · Conditions · 7 min read
3. When to see a fertility doctor: 12 months, 6 months, or sooner · Getting started · 6 min read

Footer line: New articles are added twice a month. Every article is reviewed by Dr. Swati before it is published. Read our editorial policy.

---

## Page 13 · Thank you (noindex)

```yaml
title: "Thank You | EVE Women and Fertility Clinic"
url: /thank-you/
lastReviewed: "2026-09-26"
robots: noindex
```

H1: Thank you, we have your *request*

Body: We will call or message you within 24 hours to confirm your appointment. If you need us sooner, call 72049 21212. If this is a medical emergency, call 108 or 112 now.

Buttons: [Call 72049 21212] [Back to home]

---

## Page 14 · 404

H1: We could not find that *page*

Body: The page may have moved, or the link may be wrong. Try one of these:
[Services] [Treatments] [Conditions] [Contact]
Or call 72049 21212.

---
# Part 2 · Services (11 pages)

Each service page follows the same order: Intro (answer-first) · At a glance · What it is · Who needs it · What happens at EVE · How to prepare · Risks and limits · When to get help · FAQs · Sources · Reviewer note. Condition pages that cover services (PCOS, endometriosis, recurrent pregnancy loss, menstrual disorders, menopause) are in Part 4.

---

## Page 15 · Fertility evaluation

```yaml
title: "Fertility Evaluation in Bangalore | EVE, Gunjur"
description: "A complete fertility evaluation for both partners: AMH, scans, tubal check and semen analysis, explained by Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /services/fertility-evaluation/
reviewer: dr-swati-shree
lastReviewed: "2026-09-22"
h1: "Fertility *evaluation*"
badge: fertility-evaluation
about: { type: MedicalTest, name: "Infertility evaluation", alternateName: ["Fertility workup", "Infertility investigation"] }
related: [/services/male-fertility-evaluation/, /services/tubal-patency-test-hsg/, /conditions/female-factor-infertility/]
posts: [/blog/fertility-tests-explained/, /blog/when-to-see-a-fertility-doctor/]
schema: [MedicalWebPage, FAQPage]
entities: [AMH, antral follicle count, HSG, semen analysis, ESHRE, ASRM, WHO]
```

### Intro

A fertility evaluation is a planned set of conversations, scans and tests that looks for the reason conception is taking time. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree evaluates both partners together, so that any treatment starts from a clear diagnosis and not from a guess.

### At a glance

- **Who needs it:** couples who have not conceived after 12 months of trying, or 6 months if the woman is 35 or older, or sooner with irregular periods or known problems
- **What it covers:** history, examination, ovulation, ovarian reserve, tubes, uterus and the male partner's semen
- **Time:** usually one to two menstrual cycles
- **Both partners:** the male partner's semen analysis is one of the first tests
- **At EVE:** consultation, ultrasound with antral follicle count, blood tests, tubal check and semen analysis, planned in order
- **Result:** a written summary and a plan you can understand and question

### What a fertility evaluation looks for

Conception needs five things to work: an egg that is released (ovulation), healthy sperm, open fallopian tubes, a healthy uterus and lining, and the right timing. The evaluation checks each of these.

| Question | How it is checked |
|---|---|
| Are you ovulating regularly? | Cycle history, follicle tracking, mid-luteal progesterone`[CONFIRM]`, thyroid and prolactin tests |
| How many eggs are left (ovarian reserve)? | AMH blood test and antral follicle count on ultrasound |
| Are the fallopian tubes open? | HSG, or a saline contrast ultrasound; laparoscopy in selected cases |
| Is the uterus normal? | Pelvic ultrasound; 3D scan or hysteroscopy if needed |
| Is the semen normal? | Semen analysis, read against WHO reference limits |
| Any hormone problem? | Blood tests such as FSH, LH, estradiol, TSH, prolactin, as advised |

### What happens at EVE

1. **A long first consultation.** Dr. Swati asks about cycles, past pregnancies, surgery, infections, medicines, work, sleep, stress, diet and habits, for both partners.
2. **Examination and ultrasound.** A transvaginal scan checks the uterus and ovaries and counts antral follicles. It is explained first and done with your consent, in privacy.
3. **Blood tests.** Some are done on specific cycle days. Dr. Swati tells you which and why.
4. **Semen analysis.** The male partner gives a sample after 2 to 7 days of abstinence, as the WHO manual advises. `[CONFIRM: sample collected at the clinic or a partner laboratory]`
5. **Tubal check.** An HSG is usually done after your period ends and before ovulation. See the HSG page.
6. **Review and plan.** You return to review the results together. Dr. Swati explains what is normal, what is not, and what the options are.

### How to prepare

- Come together, and bring all earlier reports
- Note the first day of your last three periods
- Bring your medicines and supplements
- Avoid sexual intercourse for 2 to 7 days before the semen sample, as advised
- Do not self-start any fertility medicines before the evaluation

### What the evaluation cannot do

Even after full testing, about one in four to one in three couples have no cause found. This is called unexplained infertility and is common. It does not mean nothing can be done. Timed attempts, IUI or IVF are options that Dr. Swati can explain.

### FAQs

1. **What tests are done in a fertility evaluation?**
   Usually a pelvic ultrasound with an antral follicle count, an AMH blood test, thyroid and prolactin tests, a tubal check such as HSG, and a semen analysis. Additional hormone tests or a hysteroscopy are added only if your history suggests them.
2. **How long does a fertility evaluation take?**
   One to two menstrual cycles in most cases, because some tests must be done on certain cycle days. The first consultation is the longest visit, and you may need two or three short visits after that.
3. **Do both partners need to be tested?**
   Yes. A male factor is the main or a contributing cause in about half of couples. A semen analysis is simple, inexpensive and one of the first tests. Evaluating only the woman can delay the diagnosis by months.
4. **Is a fertility evaluation painful?**
   Most of it is a conversation, blood tests and a scan. A transvaginal ultrasound may feel uncomfortable but is quick. An HSG can cause cramps for a short time. Dr. Swati explains each step first and pauses if you ask.
5. **What if all my tests are normal?**
   Normal tests mean there is no clear cause, which is called unexplained infertility. It is common. Timed attempts with monitoring, IUI and IVF are options. Dr. Swati reviews your age and time trying to suggest the next step.
6. **When should I get tested?**
   After 12 months of trying, or 6 months if the woman is 35 or older. Get tested sooner if periods are very irregular, if you have endometriosis, fibroids, tubal disease or a past pelvic infection, or if the male partner has a known problem.

### Sources
- ASRM Practice Committee, Definition of infertility (2023) and Evaluation of the infertile female (2015)
- ESHRE Guideline: Unexplained infertility (2023)
- NICE Guideline CG156: Fertility problems: assessment and treatment
- WHO laboratory manual for the examination and processing of human semen, 6th edition (2021)

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 22 September 2026.

---

## Page 16 · Natural conception support

```yaml
title: "Natural Conception Support in Bangalore | EVE Clinic"
description: "Ovulation tracking, cycle mapping and preconception advice to help you conceive naturally, guided by Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /services/natural-conception-support/
reviewer: dr-swati-shree
lastReviewed: "2026-09-24"
h1: "Natural conception *support*"
badge: natural-conception
about: { type: MedicalProcedure, name: "Preconception counselling and ovulation timing" }
related: [/services/follicular-monitoring/, /services/fertility-evaluation/, /conditions/pcos/]
posts: [/blog/when-to-see-a-fertility-doctor/]
schema: [MedicalWebPage, FAQPage]
entities: [ovulation, fertile window, folic acid, LH surge]
```

### Intro

Natural conception support helps you get pregnant without IUI or IVF, by finding your fertile window, treating anything that interferes, and improving the health of both partners. At EVE Women and Fertility Clinic in Bangalore, Dr. Swati Shree starts with the simplest approach that can work, because many couples conceive with timing and small changes.

### At a glance

- **Who it suits:** couples trying for under a year, couples with irregular cycles, and anyone planning a pregnancy
- **What it includes:** cycle mapping, ovulation tracking, preconception advice, treatment of minor problems
- **Fertile window:** about six days, ending on the day of ovulation
- **Timing advice:** intercourse every one to two days in the fertile window
- **At EVE:** consultation, simple tests, and follicular monitoring if needed
- **When to move on:** if there is no pregnancy after the agreed time, the plan is reviewed

### How conception works, simply

An egg is released once a cycle (ovulation) and lives for about 12 to 24 hours. Sperm can live in the reproductive tract for up to five days. This means pregnancy is possible from about five days before ovulation to the day of ovulation. The two or three days before ovulation are the most fertile.

### What happens at EVE

1. **Map your cycle.** Dr. Swati reviews your period dates, cycle length and symptoms, and works out when you are likely to ovulate.
2. **Choose a tracking method.** Options include a calendar, ovulation test strips that detect the LH surge, cervical mucus changes, basal temperature and follicular monitoring with ultrasound. Dr. Swati advises the method that fits your cycle.
3. **Check what could interfere.** A basic check of thyroid, prolactin and weight, and a pelvic scan if needed, find the common fixable causes.
4. **Preconception advice.** Folic acid, vaccination status, medicines, alcohol, smoking, caffeine, sleep and weight are reviewed for both partners.
5. **Review.** If you are not pregnant after the agreed number of cycles, or earlier if age or history call for it, the plan moves to a full fertility evaluation.

### Simple habits that help

- Have intercourse every one to two days from about five days before expected ovulation, rather than only on one day
- Take folic acid daily, as advised, before and during early pregnancy
- Aim for a healthy weight, since being much over or under weight can disturb ovulation
- Stop smoking, and keep alcohol low. Smoking affects both egg and sperm health
- Avoid steroid or testosterone products, which can switch off sperm production
- Keep medical conditions such as thyroid disease and diabetes well controlled
- Sleep regularly and keep stress manageable

### What natural conception support cannot do

It cannot open a blocked tube, replace missing sperm, or overcome age-related decline in eggs. If the evaluation finds one of these, Dr. Swati explains the next step honestly.

### FAQs

1. **How long should we try naturally before seeing a doctor?**
   For most couples, 12 months of regular unprotected intercourse. If the woman is 35 or older, 6 months. If periods are irregular, or there is a known problem such as endometriosis or low sperm count, come sooner. An early visit can save time.
2. **How often should we have intercourse to conceive?**
   Every one to two days during the fertile window is as effective as daily and less stressful. Timing intercourse on one day only can miss ovulation. If your cycles are irregular, ovulation tracking helps.
3. **Do ovulation test strips work?**
   They detect the LH surge that comes 24 to 36 hours before ovulation, and are useful if your cycles are regular. In PCOS they can mislead, because LH can be high without ovulation. Follicular monitoring with ultrasound is more reliable then.
4. **Which supplements should I take before pregnancy?**
   Folic acid is advised daily before and in early pregnancy. Other supplements depend on your tests, such as vitamin D or iron. Avoid taking many products on your own, and tell Dr. Swati what you already take.
5. **Do lifestyle changes really matter?**
   Yes, modestly. Smoking, heavy alcohol, being very over or underweight, and anabolic steroids can all reduce fertility. They do not replace medical treatment, but improving them can raise the chance of natural conception and help treatment work better.
6. **Can stress stop me from getting pregnant?**
   Everyday stress rarely stops conception on its own, though severe stress can disturb cycles. Trying to conceive can itself be stressful. Sleep, shared time and clear information help, and we can suggest counselling support.

### Sources
- ESHRE Guideline: Unexplained infertility (2023)
- NICE Guideline CG156: Fertility problems
- WHO guidance on preconception care
- ICMR and FOGSI guidance on preconception care `[CONFIRM: exact titles]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 24 September 2026.

---

## Page 17 · Follicular monitoring

```yaml
title: "Follicular Monitoring in Bangalore | EVE, Gunjur"
description: "Follicular study with serial ultrasound to time ovulation and plan IUI or natural attempts, with Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /services/follicular-monitoring/
reviewer: dr-swati-shree
lastReviewed: "2026-09-22"
h1: "Follicular *monitoring*"
badge: follicular-monitoring
about: { type: MedicalTest, name: "Follicular monitoring by transvaginal ultrasound", alternateName: ["Follicular study", "Ovulation tracking scan", "Folliculometry"] }
related: [/services/natural-conception-support/, /treatments/iui/, /conditions/pcos/]
posts: [/blog/pcos-and-getting-pregnant/]
schema: [MedicalWebPage, FAQPage]
entities: [follicle, ovulation, endometrial thickness, transvaginal ultrasound]
```

### Intro

Follicular monitoring uses a series of short ultrasound scans in one cycle to watch the egg-containing follicles grow and to see when ovulation is close. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree uses it to time natural attempts and IUI, and to see whether you ovulate at all.

### At a glance

- **What it is:** repeated transvaginal ultrasounds across one cycle
- **What it measures:** follicle size, the number of growing follicles, the thickness and pattern of the uterine lining, and signs that ovulation has occurred
- **Typical start:** around day 8 to 10 of a 28-day cycle, or as advised
- **Number of scans:** usually 3 to 5, every 2 to 3 days as the follicle approaches maturity
- **Mature follicle:** often about 18 to 24 mm, though this varies
- **Time per scan:** about 10 minutes
- **Used for:** timing intercourse, planning IUI, checking ovulation, monitoring ovulation-inducing medicine

### Why it helps

Many couples think that ovulation happens on day 14. For some women it is much earlier or later, and in PCOS it may not happen at all. A scan shows what is actually happening in your ovaries. This replaces guesswork with a date.

### What happens at EVE

1. **Baseline visit** (often cycle day 2 to 3, or as advised): an antral follicle count and a check of the ovaries. If medicine for ovulation is advised, you start it.
2. **Follow-up scans** from about day 8 to 10: each scan measures the leading follicles and the lining.
3. **Timing advice:** when the follicle is near mature size and the lining looks good, Dr. Swati advises when to have intercourse, or schedules IUI. A trigger injection may be advised in some cycles.
4. **Confirmation scan:** a later scan checks whether the follicle has ruptured, which suggests ovulation.
5. **Review:** after the cycle, you review what was seen and decide whether to repeat, add treatment or change course.

### What the lining tells us

The endometrium, the lining of the uterus, thickens through the cycle. A lining that is thin or has an unusual pattern near ovulation can reduce the chance of implantation. If this is seen, Dr. Swati looks for the cause. See Thin endometrium.

### Risks and limits

A transvaginal scan is safe, with no radiation, and may be uncomfortable. If ovulation-inducing medicines are used, monitoring helps prevent too many follicles growing, which raises the chance of multiple pregnancy. Monitoring shows ovulation timing but does not show egg quality or tube health.

### How to prepare

- Come with an empty bladder for a transvaginal scan, unless advised otherwise
- Note the first day of your period, and the day you plan to start tracking
- Wear comfortable clothes
- Bring your partner or a companion if you wish

### FAQs

1. **What is a follicular study?**
   A follicular study, also called follicular monitoring, is a series of transvaginal ultrasounds across one cycle to track follicle growth and the thickness of the uterine lining. It shows when you are likely to ovulate, so that timing of intercourse or IUI is accurate.
2. **When should a follicular study start?**
   Often between cycle day 8 and day 10 of a 28-day cycle, with a baseline scan at day 2 or 3 if medicine is used. Dr. Swati adjusts the start for shorter or longer cycles.
3. **How many scans will I need?**
   Usually 3 to 5 in one cycle, spaced 2 to 3 days apart, becoming closer as the follicle nears maturity. If you take ovulation-inducing medicine, the number can be higher.
4. **Is a follicular scan painful?**
   It is not painful, though a transvaginal probe can feel uncomfortable. The scan takes about 10 minutes, and the probe is covered and cleaned for each patient. Tell us if you want to pause.
5. **Does a mature follicle guarantee ovulation?**
   No. Occasionally a follicle grows but does not release the egg. This is why a follow-up scan after ovulation is useful. If it happens often, Dr. Swati looks for the cause.
6. **Can I do a follicular study if I have irregular periods?**
   Yes, and it is often most useful then. Irregular cycles make timing by calendar unreliable. Monitoring shows if and when you ovulate, and guides treatment such as ovulation induction.

### Sources
- ESHRE Guideline: Unexplained infertility (2023)
- ESHRE Guideline: Ovarian stimulation for IVF/ICSI (2020), for follicle monitoring principles
- International evidence-based guideline for the assessment and management of PCOS (2023)

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 22 September 2026.

---

## Page 18 · Tubal patency test (HSG)

```yaml
title: "HSG Test in Bangalore | Tubal Patency Test, EVE Clinic"
description: "HSG checks whether your fallopian tubes are open. What happens, how to prepare, risks and results, explained by Dr. Swati Shree, Gunjur, Bangalore."
url: /services/tubal-patency-test-hsg/
reviewer: dr-swati-shree
lastReviewed: "2026-09-25"
h1: "Tubal patency test *(HSG)*"
badge: hsg
about: { type: MedicalTest, name: "Hysterosalpingography", alternateName: ["HSG", "Tubal patency test", "Uterine tube X-ray"] }
related: [/services/fertility-evaluation/, /treatments/iui/, /conditions/endometriosis/]
posts: [/blog/fertility-tests-explained/]
schema: [MedicalWebPage, FAQPage]
entities: [hysterosalpingography, fallopian tubes, contrast, hysterosalpingo-contrast sonography]
```

### Intro

A tubal patency test checks whether your fallopian tubes are open, so that an egg and sperm can meet. The most common one is hysterosalpingography (HSG), a quick X-ray after a dye is passed through the womb. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree plans an HSG as part of a fertility evaluation, and explains the result and what it means for your treatment.

### At a glance

- **What it shows:** whether the tubes are open, the shape of the uterine cavity, and some tubal abnormalities
- **How:** a thin tube is passed through the cervix, contrast dye is introduced, and X-ray images are taken
- **When:** after your period ends and before ovulation, usually between day 6 and day 12 `[CONFIRM: cycle days]`
- **Time:** about 10 to 15 minutes
- **Sensation:** cramping for a few minutes, usually settling soon
- **Do not do it if:** you might be pregnant, have an active pelvic infection or have heavy bleeding
- **Where:** `[CONFIRM: on site or at an associated radiology centre]`

### Why it matters

If both tubes are blocked, natural conception and IUI are unlikely to work, and IVF is usually advised. If at least one tube is open, IUI or timed attempts can be considered. Knowing this early prevents months of treatment that cannot work.

### What happens at EVE

1. **Planning.** Dr. Swati chooses a day in your cycle, and checks that you are not pregnant. You may be asked to take a pain-relief medicine beforehand, and sometimes an antibiotic, as advised.
2. **The test.** You lie on your back. A speculum is placed, the cervix is cleaned, and a thin catheter is introduced. Dye is passed slowly while images are taken. You may feel menstrual-type cramps.
3. **Right after.** You can rest for a short time, and go home. You may have light spotting, or cramping, for a day.
4. **Results.** The images are reported, and Dr. Swati explains them: both tubes open, one open, both blocked, or an abnormal uterine cavity.

### Other ways to check the tubes

- **Saline or contrast ultrasound (HyCoSy, or HyFoSy):** fluid or foam is introduced during an ultrasound. There is no radiation, and it can be done in the scan room.
- **Laparoscopy with dye test:** a keyhole surgery under anaesthesia that shows the tubes and the pelvis, usually reserved for those with symptoms or suspected endometriosis.

Dr. Swati advises the best method for you.

### Risks and limits

- Cramping, spotting and a short vasovagal faint are common and settle quickly
- Pelvic infection after the test is uncommon, and is why antibiotics may be given if there is a history of infection
- Allergy to the dye is rare. Tell us about any allergies
- X-ray exposure is small, but the test is not done if pregnancy is possible
- HSG shows if tubes are open, but not whether they work normally

### How to prepare

- Book it for the correct day, after bleeding stops and before ovulation
- Avoid intercourse from the end of your period until the test, to avoid an early pregnancy
- Bring a companion if you like
- Tell us about allergies, past infections and any chance of pregnancy
- Take medicines as advised, and eat lightly beforehand `[CONFIRM: instructions]`

### FAQs

1. **Is an HSG painful?**
   Most women feel menstrual-type cramps for a few minutes as the dye passes through, and some feel nothing much. Pain-relief medicine beforehand helps. The test takes 10 to 15 minutes, and cramping usually settles within an hour.
2. **When should an HSG be done?**
   After your period has finished and before ovulation, usually between day 6 and day 12 of a regular cycle. This reduces the chance of an undetected early pregnancy and gives clear images of the cavity. Dr. Swati confirms your date.
3. **Can an HSG help me get pregnant?**
   Sometimes. A few women conceive in the months after an HSG, possibly because the flush clears minor blockages. This is not the aim, and it should not be relied on, but it explains why some couples conceive soon after the test.
4. **What if my HSG shows a blocked tube?**
   A blocked tube may be real or caused by temporary spasm. Dr. Swati may repeat or confirm with another test. If one tube is open, IUI may still be possible. If both are blocked, IVF is usually advised. Surgery is sometimes considered in selected cases.
5. **Is HSG safe?**
   Yes, when done correctly. Radiation is low, and serious complications such as infection are uncommon. It is not done if you are pregnant, have an active pelvic infection, or have unexplained heavy bleeding. Tell us about all allergies and previous infections.
6. **How soon can I try to conceive after an HSG?**
   You can usually try in the same cycle, unless advised otherwise. If you have had spotting or cramps, wait until they settle. If you have fever, severe pain or a foul discharge in the days after the test, contact us the same day.

> **When to get help straight away.** Fever, severe lower abdominal pain, foul-smelling discharge or heavy bleeding in the days after an HSG need urgent review. Call us, or go to the nearest hospital emergency.

7. **What does an HSG test cost in Bangalore?**
   Charges differ between diagnostic centres and clinics, and depend on whether contrast or ultrasound dye is used. Ask the clinic for the exact fee when you book, including any review appointment after the test.
### Sources
- ASRM Practice Committee, Role of tubal surgery in the era of assisted reproductive technology
- NICE Guideline CG156: Fertility problems
- ESHRE Guideline: Unexplained infertility (2023)

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 25 September 2026.

---

## Page 19 · Male fertility evaluation

```yaml
title: "Male Fertility Test in Bangalore | Semen Analysis, EVE"
description: "Semen analysis, examination and counselling for male infertility with Dr. Swati Shree at EVE, Gunjur, Bangalore. What results mean and what can help."
url: /services/male-fertility-evaluation/
reviewer: dr-swati-shree
lastReviewed: "2026-09-23"
h1: "Male fertility *evaluation*"
badge: male-fertility
about: { type: MedicalTest, name: "Semen analysis", alternateName: ["Semen test", "Sperm test", "Male infertility evaluation"] }
related: [/services/fertility-evaluation/, /treatments/tesa-pesa/, /treatments/iui/]
posts: [/blog/fertility-tests-explained/]
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [semen analysis, azoospermia, varicocele, WHO 2021, ICSI, TESA]
```

### Intro

Male factor infertility means that a man's sperm count, movement or shape is a main or contributing reason a couple has not conceived. It is found in about half of couples with infertility. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree arranges a semen analysis and a careful counselling visit for the male partner as an early step, since the test is simple and the answer can change the whole plan.

### At a glance

- **How common:** a male factor contributes to about half of couples' infertility
- **First test:** semen analysis, after 2 to 7 days of abstinence
- **Result read against:** WHO laboratory manual, 6th edition (2021) reference limits
- **Lower reference limits:** volume 1.4 mL, concentration 16 million per mL, total number 39 million, total motility 42 percent, progressive motility 30 percent, normal forms 4 percent
- **Repeat:** if abnormal, repeat after about 2 to 3 months, as sperm take about 3 months to form
- **Common causes:** varicocele, infection, hormonal problems, lifestyle factors, medicines, genetic causes
- **No sperm in the semen (azoospermia):** TESA or PESA may retrieve sperm for IVF with ICSI

### Understanding the semen report

| Term | What it means |
|---|---|
| Volume | The amount of semen |
| Concentration | Sperm per millilitre |
| Total motility and progressive motility | The percent of sperm that move, and move forward |
| Morphology | The percent of sperm with normal shape (a low number is common and not alarming alone) |
| Azoospermia | No sperm in the sample |
| Oligozoospermia, asthenozoospermia, teratozoospermia | Low count, poor motility, abnormal shape |

These are lower reference limits from healthy fertile men, not pass or fail marks. A result under a limit does not mean conception is impossible, and a result above does not guarantee it.

### Common causes

- **Varicocele:** enlarged veins around the testicle, a frequent and treatable cause
- **Hormonal causes:** problems with pituitary or testicular hormones
- **Infections** and past mumps after puberty
- **Blockage** of the sperm ducts, as in obstructive azoospermia
- **Genetic causes** in severe cases, such as Klinefelter syndrome or Y chromosome microdeletions
- **Lifestyle and medicines:** smoking, heavy alcohol, obesity, anabolic steroids and testosterone products, which can switch off sperm production, and some medicines
- **Heat:** frequent hot baths or sauna and prolonged laptop on the lap have limited evidence, but avoiding them costs nothing

### What happens at EVE

1. **Counselling visit.** Dr. Swati talks with the male partner, with respect and privacy. She asks about medical and surgical history, medicines, habits, and sexual function.
2. **Semen analysis.** A sample is given after 2 to 7 days of abstinence. `[CONFIRM: where it is collected, and where analysed]`
3. **Examination or referral.** If needed, a physical examination or scrotal ultrasound is arranged, sometimes by a urologist or andrologist. `[CONFIRM: referral arrangement]`
4. **Further tests.** Hormone tests, genetic tests or a sperm DNA fragmentation test are done only when they will change the plan.
5. **Plan.** Options include treating the cause, lifestyle changes, IUI, IVF with ICSI, and TESA or PESA in azoospermia.

### How to prepare for the semen sample

- Abstain for 2 to 7 days, as advised
- Wash hands, and collect the full sample in the container given
- Keep the sample at body temperature and bring it quickly, usually within 30 to 60 minutes `[CONFIRM: collection policy]`
- Tell us about fever in the last 3 months, medicines and supplements

### Limits

A single normal sample is reassuring, but sperm counts vary, so results are read together with a repeat if abnormal. A semen analysis does not show how well sperm fertilise an egg.

### FAQs

1. **What is a normal sperm count?**
         The WHO 2021 manual gives a lower reference limit of 16 million sperm per millilitre, and 39 million in the whole sample. These are lower limits of normal in fertile men, not a pass mark. Dr. Swati reads your full report, including motility and shape. WHO reference values are about 16 million per mL concentration and 39 million per ejaculate, with motility and shape also counted. One slightly low value matters less than the trend across two tests.
2. **Can male infertility be treated?**
         Often, yes. Some causes can be treated directly, such as a varicocele or an infection. Lifestyle changes improve sperm in many men. If sperm numbers or motility stay low, IUI, IVF with ICSI or sperm retrieval can help. The right choice depends on your report. Often, yes, depending on the cause: infections, hormones, varicocele, lifestyle and some blockages are treatable. When direct treatment falls short, ICSI with IVF can work with very few sperm.
3. **How do I give a semen sample?**
   After 2 to 7 days without ejaculation, collect the sample by masturbation into the clean container given, with clean hands. Do not use lubricants or condoms. Keep it at body temperature and deliver it promptly. We explain this when you book.
4. **What if the first semen report is abnormal?**
   Repeat the test after 2 to 3 months, because sperm production takes about three months and results vary. Dr. Swati also looks for a cause. A repeat avoids unnecessary worry or unnecessary treatment.
5. **Does age affect male fertility?**
         Sperm quality and DNA integrity decline slowly with age, and some risks rise for fathers over 40 to 45. This is a smaller effect than the age effect in women, and many men remain fertile into later life. Yes, though far more gradually than in women. Counts and motility decline with age and DNA damage rises, which is why very low values or repeated failures deserve a proper urology review.
6. **Do tight underwear, mobile phones or hot baths cause infertility?**
   Evidence is limited and the effects are small. Smoking, heavy alcohol, obesity, anabolic steroids and untreated varicocele matter more. Avoiding heat is harmless but should not replace testing.

### Sources
- WHO laboratory manual for the examination and processing of human semen, 6th edition (2021)
- AUA/ASRM Guideline: Diagnosis and treatment of infertility in men (2020)
- ASRM Practice Committee, Diagnostic evaluation of the infertile male (2015)
- EAU Guidelines on Sexual and Reproductive Health `[CONFIRM: edition]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 23 September 2026.

---

## Page 20 · Contraceptive counselling

```yaml
title: "Contraceptive Counselling in Bangalore | EVE, Gunjur"
description: "Honest, judgment-free contraception advice with Dr. Swati Shree at EVE, Gunjur, Bangalore: pills, IUDs, implants, emergency contraception and more."
url: /services/contraceptive-counselling/
reviewer: dr-swati-shree
lastReviewed: "2026-09-19"
h1: "Contraceptive *counselling*"
badge: contraception
about: { type: MedicalProcedure, name: "Contraceptive counselling" }
related: [/conditions/menstrual-disorders/, /services/adolescent-gynaecology/, /conditions/pcos/]
posts: []
schema: [MedicalWebPage, FAQPage]
entities: [contraception, IUD, emergency contraception, condoms, copper IUD]
```

### Intro

Contraceptive counselling is a private conversation to help you choose a method of birth control that suits your body, your health, and your plans. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree explains every option without pressure and without judgment, whether you want protection for a few months, for years, or want to plan the right time for pregnancy.

### At a glance

- **Who it is for:** any adult who wants to prevent or delay pregnancy, after childbirth, or when changing methods
- **Methods covered:** condoms, combined and progestin-only pills, copper and hormonal IUDs, injections, implants where available, emergency contraception, sterilisation, fertility awareness
- **Not about pressure:** you decide, and you can change your mind at any time
- **Also useful for:** heavy or painful periods, PCOS and acne, where some methods treat symptoms
- **Condoms** are the only method that also reduces the risk of many sexually transmitted infections
- **At EVE:** a private consultation, examination if needed, and follow-up

### How the methods compare

| Method | How it works | Usual effectiveness with typical use | Points to know |
|---|---|---|---|
| Condoms | Barrier | Moderate | Protect against many infections too |
| Combined pill | Hormones stop ovulation | High if taken daily | Not suitable if you have certain clot, migraine or smoking risks |
| Progestin-only pill | Thickens mucus, sometimes stops ovulation | High if taken on time | Option while breastfeeding |
| Copper IUD | Prevents fertilisation | Very high | Non-hormonal, may make periods heavier at first |
| Hormonal IUD | Thins the lining, thickens mucus | Very high | Often lightens periods |
| Injection and implant | Hormones over weeks to years | Very high | Periods may change `[CONFIRM: availability at EVE]` |
| Emergency contraception | Delays ovulation or prevents fertilisation | Works best soon after intercourse | A back-up, not a regular method |
| Sterilisation | Surgical block of the tubes | Very high | Intended as a lasting choice; counselling is important |

Effectiveness depends on correct, consistent use. Dr. Swati explains the real figures for your choice.

### What happens at EVE

1. **A private conversation.** You talk about your health, periods, past pregnancies, medicines, smoking, plans and worries.
2. **Checks if needed.** Blood pressure, weight, and a pelvic examination or scan are done only if relevant, and with your consent.
3. **Choosing together.** Dr. Swati explains benefits, risks and side effects, and what to expect in the first months.
4. **Starting the method.** Some methods start the same day. `[CONFIRM: whether IUD insertion and removal are done at EVE]`
5. **Follow-up.** A visit after a few weeks or months checks how the method suits you.

### Contraception and fertility

Most methods are reversible, and fertility returns soon after stopping. Fertility can take a few months to return after an injection. If you are planning a pregnancy in the near future, Dr. Swati advises a preconception check, folic acid and a review of medicines.

### When to get help straight away

> If you use an IUD or implant and have severe lower abdominal pain, fainting, heavy bleeding, or a missed period with pain, get urgent care. If you take the combined pill and develop chest pain, sudden breathlessness, severe leg swelling or pain, or sudden severe headache or vision loss, seek emergency care. Call 108 or 112.

### FAQs

1. **Which contraceptive method should I choose?**
   There is no single right method for everyone. The right one depends on your health, your periods, whether you want to conceive soon, how often you can remember a pill, and your comfort. Dr. Swati reviews your history and explains the options so you can choose.
2. **Does contraception affect fertility later?**
   No. Pills, IUDs and implants are reversible, and ovulation usually returns within a few months of stopping. The injection can delay return to regular cycles for several months. Age and other health factors matter more for fertility than past contraception.
3. **Is emergency contraception safe, and when should I take it?**
   Emergency contraception pills are safe and work best the sooner they are taken after unprotected sex, within 72 to 120 hours depending on the type. A copper IUD placed within 5 days is the most effective form. They do not end an existing pregnancy.
4. **Can I use contraception while breastfeeding?**
   Yes. The progestin-only pill, IUDs, implants and condoms are suitable. Estrogen-containing methods are usually delayed for several weeks after delivery. Dr. Swati chooses with you based on how recently you gave birth.
5. **Can contraception help with PCOS or heavy periods?**
   Some can. Combined pills and hormonal IUDs reduce heavy bleeding and can regulate cycles in PCOS, and some reduce acne. They do not cure PCOS, and stopping may bring symptoms back. See the PCOS and Menstrual disorders pages.
6. **Can a young or unmarried woman get advice here?**
   Yes. Contraceptive counselling is private and given without judgment to any adult. Teenagers are welcome with a parent or guardian, and may also speak to the doctor alone for part of the visit. See Adolescent gynaecology.

### Sources
- WHO Medical eligibility criteria for contraceptive use (5th edition, 2015, with updates)
- Ministry of Health and Family Welfare, India, Family Planning guidelines
- FOGSI good clinical practice recommendations on contraception `[CONFIRM: exact title]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 19 September 2026.

---
## Page 21 · Early pregnancy scan

```yaml
title: "Early Pregnancy Scan in Bangalore | EVE, Gunjur"
description: "Early pregnancy scan to confirm location, heartbeat and dates, with Dr. Swati Shree at EVE, Gunjur, Bangalore. What to expect and when to scan."
url: /services/early-pregnancy-scan/
reviewer: dr-swati-shree
lastReviewed: "2026-09-21"
h1: "Early pregnancy *scan*"
badge: early-pregnancy-scan
about: { type: MedicalTest, name: "Early pregnancy ultrasound", alternateName: ["Dating scan", "Viability scan", "Heartbeat scan", "Transvaginal pregnancy scan"] }
related: [/conditions/recurrent-pregnancy-loss/, /services/follicular-monitoring/, /treatments/ivf/]
posts: []
schema: [MedicalWebPage, FAQPage]
entities: [gestational sac, yolk sac, fetal heartbeat, ectopic pregnancy, PCPNDT Act]
```

### Intro

An early pregnancy scan is a transvaginal ultrasound, usually done between 5 and 10 weeks, that confirms the pregnancy is inside the uterus, checks for a heartbeat, and estimates the due date. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree offers early scans for women after a positive test, after fertility treatment, after a previous miscarriage, or when there is bleeding or pain.

### At a glance

- **When:** usually from about 6 weeks, counted from the first day of your last period; earlier if there is pain, bleeding or a past ectopic pregnancy
- **Method:** transvaginal ultrasound, because it shows more detail early on
- **What it checks:** the pregnancy is in the uterus, the number of embryos, a heartbeat, size and dates
- **A heartbeat** can usually be seen at about 6 weeks, sometimes a little later
- **Time:** about 10 to 15 minutes
- **Not done:** we never tell or test the sex of the baby, as Indian law forbids it

### Why have an early scan

- To **confirm** that the pregnancy is in the uterus, and not in a fallopian tube (ectopic)
- To **see a heartbeat** and reassure you
- To **date** the pregnancy accurately, especially if cycles are irregular
- To **check for twins** or more, which is more common after fertility treatment
- To look at the uterus and ovaries for **fibroids or cysts**
- To **assess bleeding or pain** in early pregnancy
- After **fertility treatment** such as IUI or IVF, to confirm a pregnancy that began with it

### What happens at EVE

1. **A short history.** Dr. Swati asks about your last period, symptoms, past pregnancies and any fertility treatment.
2. **The scan.** You lie on a couch. A slim, covered probe is gently placed in the vagina. You can ask to pause at any time.
3. **What you see.** Dr. Swati shows you the screen and explains what is visible: the gestational sac, the yolk sac, and the tiny embryo, and the heartbeat if present.
4. **Next steps.** She tells you what to do next, including when to repeat the scan if it is too early to be sure.

### What an early scan may show

| Finding | What it usually means |
|---|---|
| Sac in the uterus, yolk sac, heartbeat | An ongoing early pregnancy |
| Sac without a heartbeat yet | Often too early. A repeat scan in about a week answers it. |
| Nothing in the uterus with a positive test | Very early pregnancy, or an ectopic pregnancy. Blood hCG tests and a repeat scan are needed. |
| Empty or irregular sac with bleeding | A possible miscarriage. Dr. Swati explains and supports you. |

### Pregnancy of unknown location and ectopic pregnancy

An ectopic pregnancy grows outside the uterus, usually in a fallopian tube. It can be serious. Risks are higher after tubal disease, previous ectopic pregnancy, pelvic infection, and some fertility treatments. If a positive test is followed by pain or bleeding and no pregnancy is seen in the uterus, tests are repeated until the location is clear.

### Limits

A scan too early may be inconclusive, which can be stressful but is not unusual. Dates may need to be adjusted after a scan. A single scan does not predict the whole pregnancy.

### When to get help straight away

> Severe one-sided lower abdominal pain, pain in the shoulder tip, fainting or dizziness, or heavy bleeding in early pregnancy needs emergency care. Call 108 or 112, or go to the nearest hospital emergency. Do not wait for a clinic appointment.

### FAQs

1. **When should I have my first pregnancy scan?**
   About 6 weeks after the first day of your last period, which is roughly 2 weeks after a missed period. A heartbeat is usually visible by then. If you have pain, bleeding, a past ectopic pregnancy or fertility treatment, Dr. Swati may scan earlier.
2. **Can an early scan miss a pregnancy?**
   A very early scan can show nothing even when you are pregnant, because the structures are tiny. If the scan is inconclusive, a repeat scan in about a week, and sometimes a blood hCG test, answers the question.
3. **Is a transvaginal scan safe in early pregnancy?**
   Yes. It uses sound waves, not radiation, and does not harm the pregnancy. The probe is covered, cleaned between patients, and placed gently. You can ask for the scan to stop at any time.
4. **When can a heartbeat be seen?**
   Usually at about 6 weeks, sometimes at 5.5 to 7 weeks, depending on your dates. If the scan is too early, no heartbeat does not mean a problem. A repeat scan about a week later is usual.
5. **Do you tell the baby's sex?**
   No. Telling the sex of the baby is prohibited under the PCPNDT Act, and EVE never does it. Scans at the clinic are for location, growth, number and heartbeat.
6. **I had a miscarriage before. Can I come for an early scan?**
   Yes. An early scan can reassure you, and Dr. Swati can plan extra care. If you have had two or more losses, see Recurrent pregnancy loss for evaluation, ideally before the next pregnancy.

### Sources
- RCOG Green-top Guideline No. 21: Diagnosis and management of ectopic pregnancy
- NICE Guideline NG126: Ectopic pregnancy and miscarriage
- Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, 1994

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 21 September 2026.

---

## Page 22 · Reproductive immunology

```yaml
title: "Reproductive Immunology in Bangalore | EVE, Gunjur"
description: "Immune factors in miscarriage and implantation failure, explained honestly by Dr. Swati Shree at EVE, Gunjur. What is tested, what helps, what is unproven."
url: /services/reproductive-immunology/
reviewer: dr-swati-shree
lastReviewed: "2026-09-24"
h1: "Reproductive *immunology*"
badge: reproductive-immunology
about: { type: MedicalProcedure, name: "Evaluation of immune factors in pregnancy loss and implantation failure" }
related: [/conditions/recurrent-pregnancy-loss/, /treatments/ivf/, /conditions/thyroid-and-fertility/]
posts: []
schema: [MedicalWebPage, FAQPage]
entities: [antiphospholipid syndrome, NK cells, thrombophilia, ESHRE, RCOG]
```

### Intro

Reproductive immunology looks at whether the immune system, or a clotting or autoimmune problem, is contributing to repeated miscarriage or to failed implantation. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree uses guideline-supported tests, explains where the evidence is strong and where it is weak, and does not recommend treatments that have not been shown to work.

### At a glance

- **Who it may help:** women with recurrent pregnancy loss (two or more), or repeated failed embryo transfers
- **Strongest-evidence test:** antiphospholipid antibodies, which cause antiphospholipid syndrome (APS)
- **Proven treatment in APS:** blood-thinning treatment during pregnancy, started and monitored by a doctor
- **Often not recommended by guidelines:** routine natural killer (NK) cell tests, and immune treatments such as IVIG or intralipids outside research
- **At EVE:** a clear explanation of which tests are useful in your situation, and which are not

### What is reproductive immunology?

A pregnancy is half foreign to the mother's body, so the immune system must adapt. In a few women, an abnormal immune or clotting response may contribute to pregnancy loss. Reproductive immunology studies this area. It is a field with some well-proven findings and many contested claims. Being honest about both is the aim of this page.

### What the evidence supports

- **Antiphospholipid syndrome (APS):** an autoimmune condition, found by blood tests on two occasions at least 12 weeks apart, that raises the risk of miscarriage and clots. Treatment with low-dose aspirin and heparin during pregnancy improves outcomes in confirmed APS.
- **Thyroid autoimmunity:** thyroid antibodies are linked to a higher risk of miscarriage in some studies. Thyroid function is checked and treated as needed. See Thyroid and fertility.
- **Other autoimmune disease:** such as lupus, when known, needs joint care with a rheumatologist.

### What the evidence does not support

- **Routine NK cell testing** in blood or in the uterine lining does not reliably predict loss or guide treatment, according to ESHRE and RCOG guidance
- **Routine testing for inherited thrombophilia** in women with recurrent loss is not advised outside research or special situations
- **Immune treatments** such as IVIG, intralipid infusions, steroids or lymphocyte immunisation have not been shown to improve live birth rates in unexplained recurrent loss, and some carry risks

Where tests or treatments have limited evidence, Dr. Swati says so plainly. If you are considering them, she will explain what is known, what is not, and the cost and risk.

### What happens at EVE

1. **Review your history** of pregnancy losses, the weeks at which they happened, and any tests already done.
2. **Basic tests first:** scans of the uterus, thyroid function, blood sugar, and other causes of recurrent loss. See Recurrent pregnancy loss.
3. **Targeted immune tests** such as antiphospholipid antibodies, when your history fits.
4. **Plan:** if APS is confirmed, a treatment plan with monitoring is made. If tests are normal, supportive care and early scans are planned.
5. **Follow-up** in early pregnancy, with scans and clear communication.

### Limits

Not every loss has an immune cause. In about half of couples with recurrent loss, no cause is found, and many of those go on to have a healthy pregnancy with supportive care. A test that is not recommended by guidelines is also not a reliable reason to buy a costly treatment.

### FAQs

1. **Is reproductive immunology proven?**
   Part of it is. Antiphospholipid syndrome is a well-established cause of recurrent miscarriage, with proven treatment. Other areas, such as NK cell testing and immune therapies, are not supported by current guidelines. Dr. Swati explains which category your situation falls into.
2. **Should I have an NK cell test?**
   Guidelines from ESHRE and RCOG do not recommend routine NK cell testing in recurrent loss or failed IVF, because results do not reliably predict outcomes or guide treatment. If you are considering it, Dr. Swati explains the evidence and the cost first.
3. **What is antiphospholipid syndrome?**
         APS is an autoimmune condition where antibodies raise the risk of blood clots and pregnancy loss. It is diagnosed by blood tests repeated at least 12 weeks apart. In pregnancy it is treated with blood-thinning medicine, which improves the chance of a healthy pregnancy. An immune condition where certain antibodies raise clotting risk and are linked to recurrent miscarriage. It is found on blood tests and treated in the next pregnancy with aspirin and heparin.
4. **Can immune treatments like IVIG or intralipids help me?**
   Current guidelines do not recommend them for unexplained recurrent miscarriage or failed implantation, because trials have not shown that they improve live births. Some carry risks. Dr. Swati will not recommend an unproven treatment as routine.
5. **Do I need a thrombophilia test?**
   Not routinely. ESHRE advises against testing for inherited thrombophilia in recurrent loss outside research or special cases, such as a personal or strong family history of clots. Dr. Swati decides after reviewing your history.
6. **What if my tests are all normal?**
   Normal results are reassuring. Many women with unexplained recurrent loss go on to have a healthy pregnancy with early scans, supportive care and close follow-up. Dr. Swati continues to support you, and rechecks if something changes.

### Sources
- ESHRE Guideline: Recurrent pregnancy loss (2022)
- RCOG Green-top Guideline No. 17: Recurrent first-trimester and second-trimester miscarriage
- ASRM Practice Committee, Evaluation and treatment of recurrent pregnancy loss (2012)
`[CONFIRM: Dr. Swati approves the evidence stance on this page.]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 24 September 2026.

---

## Page 23 · Cervical cancer screening and HPV vaccination

```yaml
title: "Pap Smear and HPV Vaccine in Bangalore | EVE, Gunjur"
description: "Cervical cancer screening (Pap smear, HPV test) and HPV vaccination advice with Dr. Swati Shree at EVE, Gunjur, Bangalore. Who, when and what to expect."
url: /services/cervical-cancer-screening-hpv-vaccination/
reviewer: dr-swati-shree
lastReviewed: "2026-09-19"
h1: "Cervical cancer screening and *HPV vaccination*"
badge: cervical-screening
about: { type: MedicalTest, name: "Cervical cancer screening", alternateName: ["Pap smear", "Pap test", "HPV DNA test", "Cervical cytology"] }
related: [/services/adolescent-gynaecology/, /services/endometrial-biopsy/, /conditions/menstrual-disorders/]
posts: []
schema: [MedicalWebPage, FAQPage]
entities: [HPV 16, HPV 18, Pap smear, colposcopy, Gardasil, WHO cervical cancer elimination]
```

### Intro

Cervical cancer is largely preventable, through screening tests that find early changes and a vaccine that prevents the infection behind most cases. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree offers Pap smear and HPV testing, explains your results, and advises on HPV vaccination for girls and women.

### At a glance

- **The cause:** persistent infection with high-risk human papillomavirus (HPV), mainly types 16 and 18
- **Screening tests:** Pap smear (cells from the cervix), HPV DNA test, or both
- **Visit time:** about 10 minutes for the test
- **India's national programme:** screening is advised for women aged 30 to 65; many gynaecologists start earlier based on history
- **Vaccine:** India launched a national HPV vaccination programme in February 2026, giving a free single dose to 14-year-old girls at government facilities
- **Private vaccination:** available for other ages, with doses depending on age at the first dose
- **At EVE:** a private consultation, the test, result explanation and, if needed, colposcopy or referral `[CONFIRM: colposcopy offered]`

### Who should be screened

Dr. Swati advises a screening schedule for you based on your age, sexual history and past results. As a guide:

- **30 to 65 years:** screening is recommended in India's programme and by WHO
- **Younger than 30:** screening may begin earlier on medical advice, such as after sexual activity begins, or with a history of abnormal results, a weak immune system, or HIV
- **After 65:** may stop if earlier results were normal, on your doctor's advice
- **Previous hysterectomy:** whether you need screening depends on the reason for the surgery

### What happens at EVE

1. **Consultation.** A short history and an explanation of the test.
2. **The test.** You lie on a couch. A speculum is placed, and a small brush collects cells from the cervix. It takes a few minutes. It can be uncomfortable but is not usually painful.
3. **Results.** Reports usually come in a few days. `[CONFIRM: turnaround]`
4. **Next steps.** If the test is normal, Dr. Swati tells you when to repeat it. If abnormal, you may need a colposcopy (a magnified look at the cervix) and a small biopsy, and treatment of any pre-cancerous change.

### How to prepare for a Pap smear or HPV test

- Schedule it when you are not having your period
- Avoid intercourse, vaginal creams, douches and tampons for 24 to 48 hours before
- Tell us if you may be pregnant, or if you have had abnormal tests before

### HPV vaccination

The HPV vaccine prevents infection with the virus types that cause most cervical cancers. It works best before any exposure, which is why girls aged 9 to 14 are the main group. India's free programme gives a single dose to 14-year-old girls at government health facilities. For those outside the programme, private vaccination is available, and the number of doses depends on the age at first dose. Dr. Swati advises on the right plan. `[CONFIRM: vaccine availability at EVE or referral]`

The vaccine does not treat an existing infection, and does not remove the need for screening later in life.

### FAQs

1. **What is the difference between a Pap smear and an HPV test?**
   A Pap smear looks at cervical cells under a microscope for abnormal changes. An HPV test looks for the virus that causes those changes. Many programmes use the HPV test first from age 30. Dr. Swati recommends the test, or both together, based on your age and history.
2. **At what age should I start Pap smears?**
   India's national programme targets women 30 to 65. Many gynaecologists start earlier based on risk. If you have been sexually active, or have a history of abnormal tests, a weak immune system or HIV, ask Dr. Swati when to begin. `[CONFIRM: Dr. Swati's preferred wording]`
3. **How often should I be screened?**
   If the results are normal, many guidelines advise repeating a Pap smear every 3 years, or an HPV test every 5 years. Your schedule may be different if you have had abnormal results. Dr. Swati sets your interval.
4. **Does the HPV vaccine cause infertility?**
   No. There is no evidence that the HPV vaccine affects fertility. It is non-live and has been used safely in many countries for years. It protects against infection linked to cervical cancer.
5. **I am already married or older. Is the vaccine still useful?**
   It may be, though benefit is greatest before exposure. Women up to 26, and in some cases older, can be vaccinated. Screening remains important. Dr. Swati can advise based on your age and history.
6. **What does an abnormal Pap smear mean?**
   An abnormal result usually means cell changes, not cancer. Most are caused by HPV and are mild. You may need an HPV test, a colposcopy and sometimes a biopsy. Early changes are treatable, and this is exactly what screening aims to find.

### Sources
- WHO guideline for screening and treatment of cervical pre-cancer lesions for cervical cancer prevention (2021)
- Ministry of Health and Family Welfare, National HPV vaccination programme, launched February 2026
- ICMR and National Programme for Prevention and Control of Non-Communicable Diseases screening guidance
- ACOG and ASCCP cervical screening guidance `[CONFIRM: edition]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 19 September 2026.

---

## Page 24 · Endometrial biopsy

```yaml
title: "Endometrial Biopsy in Bangalore | EVE, Gunjur"
description: "Endometrial biopsy checks the uterine lining for abnormal bleeding, thickening or infection. What happens and what to expect, with Dr. Swati Shree, Gunjur."
url: /services/endometrial-biopsy/
reviewer: dr-swati-shree
lastReviewed: "2026-09-21"
h1: "Endometrial *biopsy*"
badge: endometrial-biopsy
about: { type: DiagnosticProcedure, name: "Endometrial biopsy", alternateName: ["Endometrial sampling", "Pipelle biopsy"] }
related: [/conditions/menstrual-disorders/, /conditions/menopause-and-perimenopause/, /conditions/thin-endometrium-and-low-ovarian-reserve/]
posts: []
schema: [MedicalWebPage, FAQPage]
entities: [endometrium, endometrial hyperplasia, abnormal uterine bleeding, histopathology]
```

### Intro

An endometrial biopsy takes a tiny sample of the uterine lining (the endometrium) to look at it under a microscope. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree advises it when abnormal bleeding, a thickened lining on scan, or a suspected infection needs a firm answer, and she explains each step beforehand.

### At a glance

- **What it checks:** thickening (hyperplasia), cancer, infection (chronic endometritis), or hormonal effects on the lining
- **Method:** a thin, flexible tube is passed through the cervix and a small sample is gently suctioned
- **Time:** about 5 to 10 minutes in the clinic `[CONFIRM: done at EVE]`
- **Sensation:** cramping, which usually passes within an hour
- **Result:** a pathology report in about a week `[CONFIRM: turnaround]`
- **No general anaesthetic** is usually needed

### Who may need one

- Heavy or irregular bleeding, especially at 45 or older, or younger with risk factors such as obesity, PCOS or long gaps between periods
- Bleeding after menopause
- A thick or unusual lining on ultrasound
- Suspected chronic endometritis in some fertility settings
- Bleeding while on certain hormone treatments

### What happens at EVE

1. **Consultation and scan.** Dr. Swati reviews your history and the ultrasound, and explains why a biopsy is needed.
2. **Consent and preparation.** A pregnancy test is done if pregnancy is possible. You may take a pain-relief medicine beforehand.
3. **The procedure.** A speculum is placed, the cervix is cleaned, and a thin tube takes a small sample from the lining. You may feel period-type cramps.
4. **Afterward.** You can usually return to normal activity the same day. Light spotting or cramping may last a day or two.
5. **Results.** Dr. Swati explains the report and the next steps at a follow-up visit.

### Risks and limits

- Cramping and light bleeding are common
- Infection and uterine injury are uncommon
- A biopsy may miss a small area, so a normal report is read along with the scan and symptoms. If symptoms continue, further tests, such as hysteroscopy, may be advised
- Not done if you are pregnant or have an active pelvic infection

### How to prepare

- Book it for a day that suits your cycle, as advised
- Eat normally, and take the pain-relief medicine if advised
- Arrange a companion if you wish
- Tell us about blood-thinning medicines, allergies and any chance of pregnancy

### When to get help straight away

> Fever, heavy bleeding that soaks a pad every hour, severe pain, or foul-smelling discharge after a biopsy need urgent review. Call us, or go to the nearest hospital emergency.

### FAQs

1. **Is an endometrial biopsy painful?**
   You may feel menstrual-type cramps for a few minutes. Many women find it tolerable, especially with a pain-relief medicine beforehand. The procedure takes about 5 to 10 minutes, and cramps settle soon after. You can ask Dr. Swati to pause at any time.
2. **Why do I need a biopsy if my scan is normal?**
   A scan shows the thickness of the lining but not what the cells look like. When bleeding is persistent, or you are at higher risk, a biopsy gives a definite answer that a scan cannot.
3. **Does a biopsy mean I have cancer?**
   No. Most biopsies are done to rule out cancer or pre-cancer, and most results are benign. Hormonal effects, polyps and infection are common findings. If a problem is found, early detection makes treatment simpler.
4. **Can I have a biopsy if I am trying to conceive?**
   Sometimes. Dr. Swati plans it in a cycle when pregnancy is not possible, or before a treatment cycle. Tell us if you are trying, so that the timing is right.
5. **How long are the results?**
   Usually about a week, since the sample goes to a pathology laboratory. `[CONFIRM]` Dr. Swati explains the report and plans the next step at a follow-up visit.
6. **How soon can I get back to normal activity?**
   Most women go back to work the same day. Avoid heavy exercise, baths, and intercourse for a day or two or as advised, to reduce infection risk. Light spotting is normal for a short while.

### Sources
- ACOG Practice Bulletin: Diagnosis of abnormal uterine bleeding in reproductive-aged women
- FIGO PALM-COEIN classification of abnormal uterine bleeding
- NICE Guideline NG88: Heavy menstrual bleeding

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 21 September 2026.

---

## Page 25 · Adolescent gynaecology

```yaml
title: "Adolescent Gynaecologist in Bangalore | EVE, Gunjur"
description: "A gentle first gynaecology visit for teenage girls: periods, PCOS, pain, HPV vaccine and questions, with Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /services/adolescent-gynaecology/
reviewer: dr-swati-shree
lastReviewed: "2026-09-18"
h1: "Adolescent *gynaecology*"
badge: adolescent-gynaecology
about: { type: MedicalProcedure, name: "Adolescent gynaecology consultation" }
related: [/conditions/menstrual-disorders/, /conditions/pcos/, /services/cervical-cancer-screening-hpv-vaccination/]
posts: []
schema: [MedicalWebPage, FAQPage]
entities: [menarche, adolescent, dysmenorrhoea, PCOS, HPV vaccine]
```

### Intro

Adolescent gynaecology is care for girls and young women, from about 10 to 19 years, who have questions or problems with periods, pain, hormones, body changes or health. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree offers a gentle, private, unhurried first visit, so that a young person gets honest answers and a parent gets reassurance.

### At a glance

- **Who:** girls from about 10 to 19 years, usually with a parent or guardian
- **Common reasons:** irregular, heavy, painful or missing periods, PCOS signs, acne and hair growth, vaginal discharge, vaccination advice
- **First visit:** a conversation, with an examination only if needed
- **Privacy:** the young person may speak to the doctor alone for part of the visit
- **Guardian consent:** needed for patients under 18
- **Good first age:** many experts suggest a first reproductive health visit between 13 and 15, even without a problem

### What is normal in the first years

Periods usually begin between 10 and 15 years. For the first two years, cycles can be irregular and vary from about 21 to 45 days. Mild cramps are common. Concern grows if there are no periods by 15 years, if periods are very heavy or very painful, or if pain keeps a girl from school.

### Common concerns

- **Painful periods (dysmenorrhoea):** common, and often relieved with simple treatment. Severe pain that does not respond may need a check for endometriosis.
- **Irregular or heavy periods:** may reflect the immature hormone cycle, but heavy bleeding can cause anaemia and should be checked.
- **PCOS:** diagnosing PCOS in teenagers needs care, because irregular cycles can be normal in the first years. See the PCOS page.
- **Missing periods:** needs a check for pregnancy, weight, thyroid, hormones and structure.
- **Discharge and itching:** common causes are simple to treat.
- **HPV vaccination:** India's national programme offers a free single dose at 14. See the HPV page.

### What happens at EVE

1. **A welcome conversation.** Dr. Swati speaks with the young person, and the parent, about what is worrying them.
2. **Time alone, if wished.** Part of the visit can be one-to-one, so a teenager can ask what she may not ask in front of a parent.
3. **Examination only if needed.** A general check and abdominal examination are done. A pelvic or internal examination is rarely needed in young girls. An abdominal ultrasound may be used.
4. **A plan.** The plan is explained to both. It may include tests, a treatment, lifestyle advice or a follow-up.
5. **Follow-up** for repeat checks, and ongoing support.

### What Dr. Swati will not do

She will not pressure a young person, will not share what she says with others without a good reason and consent where possible, and will not do an internal examination unless clearly necessary and the young person agrees. Where safety is at risk, she follows the law and explains this.

### How to prepare

- Note the date of the first period and the last three periods
- Write down questions, or let the teenager write her own
- Bring any earlier reports
- Let the teenager decide how much to say, and who is in the room

### FAQs

1. **At what age should a girl first see a gynaecologist?**
   There is no fixed age. A first reproductive health visit between 13 and 15 is suggested by some experts, and sooner if there are problems such as very painful periods, very heavy bleeding, or no periods by 15. Many girls need only a conversation.
2. **Will my daughter need an internal examination?**
   Rarely. Most teenage concerns are assessed by talking, a general check and, if needed, an abdominal ultrasound. An internal examination is done only when it is clearly necessary and with the young person's agreement. We explain first.
3. **My daughter's periods are irregular. Is this normal?**
   It is common for the first two years after periods begin. Cycles can range from about 21 to 45 days. See a doctor if periods are very heavy, come with severe pain, stop for 3 months, or have not begun by 15.
4. **Can a teenager come alone?**
   Patients under 18 attend with a parent or guardian, who gives consent. The teenager can also speak with the doctor alone for part of the visit. This helps young people ask honestly.
5. **Is PCOS common in teenagers?**
   PCOS can begin in the teen years, but diagnosis needs care, as irregular periods and acne can also be normal in early puberty. Dr. Swati uses age-appropriate criteria and avoids over-labelling. Lifestyle support helps either way.
6. **Should my daughter get the HPV vaccine?**
   Yes, it is best given early. India's national programme now offers a free single dose to 14-year-old girls, and private vaccination is available for other ages. Dr. Swati advises on the plan. See the HPV vaccination page.

### Sources
- ACOG Committee Opinion: The initial reproductive health visit
- ACOG Committee Opinion: Menstruation in girls and adolescents, using the menstrual cycle as a vital sign
- International evidence-based guideline for the assessment and management of PCOS (2023)
- Ministry of Health and Family Welfare, National HPV vaccination programme, 2026

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 18 September 2026.

---
# Part 3 · Treatments (4 pages)

Treatment pages carry the ART line and the "no outcome promises" line from `site-plan.md`, section 6. They never quote success rates, prices, drug names or doses.

---

## Page 26 · IUI

```yaml
title: "IUI Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "IUI (intrauterine insemination) explained: who it suits, steps, risks, timing and what to expect, with Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /treatments/iui/
reviewer: dr-swati-shree
lastReviewed: "2026-09-28"
h1: "IUI *(intrauterine insemination)*"
badge: iui
about: { type: MedicalProcedure, name: "Intrauterine insemination", alternateName: ["IUI", "Artificial insemination with husband's sperm", "IUI-H"] }
related: [/treatments/ivf/, /services/follicular-monitoring/, /services/male-fertility-evaluation/]
posts: [/blog/pcos-and-getting-pregnant/]
schema: [MedicalWebPage, FAQPage]
entities: [IUI, ovulation induction, sperm preparation, ART Act 2021, ESHRE]
```

### Intro

Intrauterine insemination (IUI) is a fertility treatment where washed, concentrated sperm are placed directly into the uterus around the time of ovulation, to raise the chance that sperm meet the egg. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree offers IUI to couples for whom it is a reasonable step, after a proper evaluation, and explains honestly when it is likely to help and when IVF is the better choice.

### At a glance

- **What it is:** prepared sperm placed in the uterus through a thin catheter, in a short, clinic-based procedure
- **Who it may suit:** unexplained infertility, mild male factor, ovulation problems, cervical mucus factor, some cases of mild endometriosis
- **Needed:** at least one open fallopian tube, and enough healthy sperm after preparation
- **Not suited to:** both tubes blocked, severe male factor, or limited time due to age and low ovarian reserve
- **Medicines:** mild ovulation-inducing medicine in many cycles, sometimes none
- **Monitoring:** follicular scans to time the procedure
- **The procedure:** takes a few minutes, and no anaesthetic is needed
- **Pregnancy test:** about two weeks after
- **Regulation:** IUI is an assisted reproductive technology under the ART (Regulation) Act, 2021

### How IUI works

Sperm normally travel from the vagina through the cervix, uterus and into the tube to meet the egg. In IUI, the sperm sample is processed in a laboratory so that the most active sperm are separated from fluid and debris. These are placed in the uterus, so they start closer to the egg. The egg is still fertilised inside your body.

### Who IUI may suit, and who it does not

| May suit | Less likely to help |
|---|---|
| Unexplained infertility | Both fallopian tubes blocked |
| Mild male factor, such as slightly low count or motility | Severe male factor or no sperm |
| Irregular ovulation, with open tubes | Moderate to severe endometriosis affecting tubes |
| Cervical mucus problems | Women with very low ovarian reserve or older age, where time matters |
| Using a partner who cannot have intercourse for medical or physical reasons | After several unsuccessful IUI cycles, where the plan needs review |

### What happens at EVE

1. **Evaluation first.** Tubal patency, semen analysis, ovarian reserve and thyroid are checked before IUI is planned.
2. **Consent and counselling.** As required by the ART Act, you and your partner receive counselling and sign written consent.
3. **Cycle planning.** Dr. Swati advises on a natural cycle or one with mild ovulation-inducing medicine, and how many follicles are acceptable.
4. **Follicular monitoring.** Ultrasound scans track the follicle and the lining.
5. **Timing.** When the follicle is mature, ovulation may be triggered with an injection, and IUI is scheduled about 24 to 40 hours later, depending on the plan.
6. **Sperm preparation.** On the day, your partner gives a sample, which is washed and concentrated. `[CONFIRM: where preparation is done]`
7. **The IUI.** You lie on a couch. A speculum is placed, and a soft thin catheter delivers the sperm into the uterus. It takes a few minutes, may cause mild cramps, and you can rest briefly afterward.
8. **Luteal support and test.** You may be advised progesterone support. A pregnancy test follows in about two weeks.

### What to expect and how many cycles

Not every IUI cycle ends in pregnancy. Guidelines support a limited number of cycles, with a review if the plan has not worked, so that time is not lost. Dr. Swati discusses this before you begin, including when IVF may be a better next step. We do not quote pregnancy rates, because they depend on age, diagnosis, and chance, and a general figure can mislead.

### Risks and limits

- **Multiple pregnancy** if several follicles ovulate, which carries higher risks for mother and babies. Monitoring helps prevent this.
- **Ovarian hyperstimulation:** uncommon with mild stimulation.
- **Cramping, spotting** and a small risk of infection.
- **Emotional strain** of waiting. Tell us if you are finding it hard.
- IUI cannot overcome blocked tubes or severe sperm problems.

### How to prepare

- Complete your tests, and keep any earlier reports handy
- Your partner should abstain for 2 to 7 days before giving the sample, as advised `[CONFIRM: abstinence advice]`
- Eat and rest normally. A full bladder is not needed
- Plan to be free on the days of scans and the procedure
- Take medicines only as prescribed

### ART rules

IUI is regulated by the ART (Regulation) Act, 2021. Treatment is offered to married couples where the woman is 21 to 50 and the man is 21 to 55, and to widowed or divorced women aged 21 to 50, with written consent and counselling. Sex selection is prohibited. `[CONFIRM: wording, clinic ART registration no.]`

### FAQs

1. **Is IUI painful?**
         Most women feel little more than mild cramping, similar to a Pap test. No anaesthetic is needed, and the procedure takes a few minutes. You can rest briefly and then go home or back to work. Tell us if you feel uncomfortable, and we will pause. It feels much like a Pap smear: a thin catheter passes through the cervix in under a minute, with mild cramping possible for a few hours after. No anaesthesia or recovery time is needed.
2. **When should I consider IUI instead of IVF?**
   IUI is usually considered when the tubes are open, sperm quality is adequate after preparation, and the cause is unexplained, mild male factor or ovulation related. IVF is usually advised for blocked tubes, severe male factor, endometriosis, or limited time. Dr. Swati advises after your evaluation.
3. **How many IUI cycles should we try?**
   Guidelines support a limited number of cycles, then a review of the plan. The number depends on your age, tests and response. Dr. Swati sets a clear point to review before you begin, so you are not left trying indefinitely.
4. **Does IUI need fertility medicines?**
   Not always. Some cycles are natural, and some use mild ovulation-inducing medicine to produce one or two follicles. Dr. Swati decides based on your cycle and monitors closely, to avoid too many follicles and a multiple pregnancy.
5. **Can IUI cause twins?**
   The chance of twins or more is higher than in natural conception, especially if more than one follicle ovulates. Scans before the procedure help limit this. If too many follicles develop, Dr. Swati may advise cancelling the cycle.
6. **Is IUI affected by the ART Act?**
   Yes. IUI is an assisted reproductive technology, and the clinic follows rules on eligibility, consent and counselling. Sex selection is prohibited. Dr. Swati explains these at your first visit.
7. **What can I do after IUI?**
   You can resume normal activities, including work and light exercise. Bed rest is not needed. Take any progesterone as prescribed, avoid smoking and alcohol, and do a pregnancy test on the date advised, not earlier, to avoid confusing results.

8. **What does IUI cost in Bangalore?**
   Costs vary with the medicines used, the number of monitoring scans and the clinic. IUI is usually far less expensive than IVF per cycle. At EVE you receive a written estimate before the cycle starts, so ask for it at your consultation.
### Sources
- ESHRE Guideline: Unexplained infertility (2023)
- NICE Guideline CG156: Fertility problems
- ASRM Practice Committee, Use of clomiphene citrate and intrauterine insemination in unexplained infertility
- ART (Regulation) Act, 2021 and Rules, 2022

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 28 September 2026.

---

## Page 27 · IVF

```yaml
title: "IVF Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "IVF explained step by step: who needs it, the process, risks, timing and ART Act rules, with Dr. Swati Shree, MRCOG, at EVE, Gunjur, Bangalore."
url: /treatments/ivf/
reviewer: dr-swati-shree
lastReviewed: "2026-09-29"
h1: "In vitro fertilisation *(IVF)*"
badge: ivf
about: { type: MedicalProcedure, name: "In vitro fertilisation", alternateName: ["IVF", "IVF-ICSI", "Test tube baby treatment"] }
related: [/treatments/iui/, /treatments/egg-freezing/, /treatments/tesa-pesa/]
posts: [/blog/when-to-see-a-fertility-doctor/]
schema: [MedicalWebPage, FAQPage]
entities: [IVF, ICSI, embryo transfer, ovarian stimulation, OHSS, ART Act 2021, National ART and Surrogacy Registry]
```

### Intro

In vitro fertilisation (IVF) is a fertility treatment where eggs are collected from the ovaries, combined with sperm in a laboratory, and one or more embryos are transferred into the uterus. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree, MRCOG (UK), plans your IVF with you, guides each step, and explains what to expect. The laboratory procedures are carried out at associated, registered ART centres. `[CONFIRM: exact arrangement and wording]`

### At a glance

- **What it is:** egg collection, fertilisation in a laboratory, embryo culture and embryo transfer
- **Who may need it:** blocked or absent tubes, severe male factor, endometriosis, low ovarian reserve with limited time, unexplained infertility after other treatments, or genetic reasons
- **A cycle takes:** a few weeks from the start of stimulation to the embryo transfer
- **Stimulation:** usually about 8 to 12 days of hormone injections, with scans and blood tests
- **Egg collection:** a short procedure under sedation, about 34 to 36 hours after the trigger injection
- **Pregnancy test:** about two weeks after embryo transfer
- **Regulation:** IVF is regulated by the ART (Regulation) Act, 2021

### Who may need IVF

| Situation | Why IVF may be advised |
|---|---|
| Both fallopian tubes blocked or removed | Eggs cannot reach sperm in the tubes |
| Severe male factor, very low count or motility | ICSI places one sperm into one egg |
| No sperm in the semen | TESA or PESA to retrieve sperm, then ICSI |
| Endometriosis with reduced reserve or tubal damage | Bypasses damaged tubes |
| Low ovarian reserve, or age 38 and above | Time is limited, so a more efficient step is considered sooner |
| Unexplained infertility after IUI cycles | Allows the doctor to see fertilisation and embryo development |
| Genetic reasons | Embryo testing, where permitted, with counselling |

### The IVF process, step by step

1. **Evaluation and counselling.** Tests, a plan, a written estimate and consent under the ART Act. You and your partner understand the steps, risks and choices.
2. **Ovarian stimulation.** Daily hormone injections, usually for 8 to 12 days, help several follicles grow. You come for scans and blood tests every few days, so the dose is adjusted.
3. **Trigger injection.** When follicles are ready, a trigger injection prepares the eggs for collection.
4. **Egg collection.** Under sedation, a fine needle guided by ultrasound collects eggs through the vaginal wall. It takes about 15 to 20 minutes, and you go home the same day.
5. **Sperm and fertilisation.** Eggs and sperm are combined in the laboratory. In ICSI, one sperm is injected into each mature egg.
6. **Embryo culture.** Embryos grow for 3 to 5 days under careful laboratory conditions. They are assessed for quality.
7. **Embryo transfer.** One or more embryos are placed into the uterus through a thin catheter. It is quick and feels like a Pap test. A fresh transfer happens in the same cycle. A frozen transfer happens in a later cycle, when your body is prepared with medicines.
8. **Support and test.** You take hormone support, and a blood pregnancy test is done about two weeks later.
9. **Early scans.** If positive, scans confirm the pregnancy at about 6 weeks.

### Fresh and frozen transfers

Embryos can be transferred fresh, or frozen by vitrification and transferred later. Freezing all embryos is advised in some situations, such as a high risk of overstimulation, or when the lining is not ready. A frozen transfer lets your body recover first. Dr. Swati explains which approach suits you.

### Risks and limits

- **Ovarian hyperstimulation syndrome (OHSS):** swelling of the ovaries with bloating and, rarely, severe illness. Careful monitoring and tailoring of medicines reduce the risk.
- **Multiple pregnancy** if more than one embryo is transferred. Many clinics now favour single embryo transfer when appropriate.
- **Bleeding or infection** after egg collection are uncommon.
- **Sedation risks** are small, and the anaesthetist reviews your health first.
- **Emotional strain:** the process is demanding. Be honest about how you feel, and ask for support.
- **Not every cycle works.** No clinic can promise a pregnancy. Outcomes depend on age, egg and sperm quality, the cause of infertility and chance.

### The legal framework

IVF and ICSI are regulated by the ART (Regulation) Act, 2021. Clinics must be registered with the National ART and Surrogacy Registry. Treatment is offered to married couples where the woman is 21 to 50 and the man is 21 to 55, and to widowed or divorced women aged 21 to 50. Written consent and counselling are required. Sex selection is prohibited. `[CONFIRM: registration number and wording]`

### How to prepare

- Complete the evaluation and any treatment advised, such as thyroid correction
- Both partners: stop smoking, limit alcohol, and keep a healthy diet and sleep
- Plan time for scans and the days around egg collection and transfer
- Ask about costs, number of cycles and what each estimate includes
- Arrange support: someone to accompany you on procedure days

### FAQs

1. **How long does an IVF cycle take?**
   From the start of stimulation to embryo transfer, usually 3 to 5 weeks in a fresh cycle. Stimulation takes about 8 to 12 days, egg collection follows about 36 hours after the trigger, and embryos grow for 3 to 5 days. A frozen cycle adds a few weeks.
2. **Is IVF painful?**
   Injections cause mild discomfort, and some women feel bloated during stimulation. Egg collection is done under sedation, so you do not feel it, and cramping afterward is usually mild. Embryo transfer is quick and usually comfortable.
3. **What is the difference between IVF and ICSI?**
   In standard IVF, eggs and sperm are mixed in a dish. In ICSI, one sperm is injected directly into one egg. ICSI is used in many cases of male factor infertility. Both belong to the same IVF process.
4. **Does IVF guarantee a baby?**
   No. IVF cannot promise a pregnancy. The chance depends mainly on the woman's age, egg and sperm quality, the cause of infertility and chance. Dr. Swati explains the factors that affect your situation, and does not quote general figures that could mislead.
5. **Who can have IVF in India?**
   Under the ART Act, 2021, married couples with a diagnosis of infertility, where the woman is 21 to 50 and the man is 21 to 55, and widowed or divorced women aged 21 to 50, with written consent. Clinics must be registered. Sex selection is not permitted.
6. **How many embryos are transferred?**
   Often one, sometimes two, depending on age, embryo quality and past attempts. Fewer embryos reduce the risk of twins and complications. Dr. Swati discusses this with you before transfer, and the decision is documented.
7. **Does IVF cause cancer or harm the ovaries?**
   Large studies have not shown that IVF causes ovarian cancer or leads to early menopause. IVF uses eggs that would otherwise be lost that month. The main medical risks are OHSS and multiple pregnancy, which monitoring helps prevent.
8. **What if my IVF does not work?**
   A cycle that does not work is hard. Dr. Swati reviews what happened, such as the response to stimulation, fertilisation and embryo quality, and discusses whether to change the plan, test further, repeat, or pause. The decision is yours, with her support.

### Sources
- ESHRE Guideline: Ovarian stimulation for IVF/ICSI (2020)
- ESHRE Good practice recommendations on add-ons in reproductive medicine (2023)
- NICE Guideline CG156: Fertility problems
- ART (Regulation) Act, 2021 and Rules, 2022

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 29 September 2026.

---

## Page 28 · Egg freezing

```yaml
title: "Egg Freezing in Bangalore | EVE, Dr. Swati Shree"
description: "Egg freezing (oocyte cryopreservation) explained: who, when, steps, limits and legal rules, with Dr. Swati Shree, MRCOG, at EVE, Gunjur, Bangalore."
url: /treatments/egg-freezing/
reviewer: dr-swati-shree
lastReviewed: "2026-09-28"
h1: "Egg *freezing*"
badge: egg-freezing
about: { type: MedicalProcedure, name: "Oocyte cryopreservation", alternateName: ["Egg freezing", "Fertility preservation", "Vitrification of eggs"] }
related: [/treatments/ivf/, /conditions/thin-endometrium-and-low-ovarian-reserve/, /conditions/endometriosis/]
posts: [/blog/when-to-see-a-fertility-doctor/]
schema: [MedicalWebPage, FAQPage]
entities: [oocyte cryopreservation, vitrification, AMH, antral follicle count, ESHRE, ART Act 2021]
```

### Intro

Egg freezing, or oocyte cryopreservation, means collecting and freezing a woman's eggs so that she may try for a pregnancy with them later. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree helps women understand whether egg freezing makes sense for them, what it can and cannot do, and how it is done, so the decision is made with open eyes and not under pressure.

### At a glance

- **What it is:** hormone stimulation, egg collection and freezing by vitrification, a fast-freezing method
- **Why women do it:** to protect fertility before medical treatment, to postpone pregnancy, when no partner is present yet, or because of a family history of early menopause
- **Age matters most:** eggs frozen at a younger age generally have better chances later
- **The process:** about 2 weeks of stimulation, then a short procedure under sedation
- **Not a guarantee:** frozen eggs do not guarantee a future pregnancy
- **Later use:** thawing, fertilisation with sperm (usually ICSI) and embryo transfer
- **Regulation:** governed by the ART (Regulation) Act, 2021 and its rules

### Who may consider egg freezing

- **Medical reasons:** before cancer treatment, or other treatments that may harm the ovaries, and in some cases before surgery for endometriosis or ovarian cysts
- **Family history** of early menopause, or a genetic condition linked to early ovarian failure
- **Postponing pregnancy** because of career, studies, health or not having a partner yet
- **Women with declining reserve,** after a talk about realistic expectations

### Age, reserve and numbers

Egg quality and number decline with age, gradually in the early thirties and faster after about 35. The number of eggs that can be collected depends on your ovarian reserve, measured with AMH and an antral follicle count. More eggs frozen at a younger age gives a better chance later. If reserve is low, fewer eggs are collected per cycle, and sometimes more than one cycle is discussed. Dr. Swati reviews your numbers and explains them honestly before you decide.

### What happens at EVE

1. **Consultation and tests.** AMH, antral follicle count and a general health check, and a discussion of your aims, the number of eggs to aim for and cost.
2. **Counselling and consent.** As required by the ART Act, with a clear explanation of storage, use and legal rules.
3. **Stimulation.** Hormone injections for about 10 to 12 days. Scans and blood tests every few days monitor your response.
4. **Trigger and egg collection.** A trigger injection is given, and about 34 to 36 hours later, eggs are collected under sedation. It takes about 15 to 20 minutes. You go home the same day.
5. **Freezing.** Mature eggs are frozen by vitrification at a registered facility. `[CONFIRM: where eggs are frozen and stored]`
6. **Storage and review.** Eggs are stored under agreed terms. Dr. Swati reviews your plan when you are ready to use them.

### Using frozen eggs later

When you are ready, eggs are thawed, fertilised with sperm in the laboratory (usually by ICSI) and embryos are grown. One or more are transferred to the uterus in a prepared cycle. Not every egg survives thawing, fertilises or becomes a viable embryo. This is why the number frozen matters.

### Legal points

Indian law sets rules on who may freeze eggs, the storage period and consent. These are in the ART (Regulation) Act, 2021 and its rules. Dr. Swati explains what applies to your situation at your consultation. `[CONFIRM: Dr. Swati approves the wording on eligibility, storage period and use after the age limit]`

### Risks and limits

- **OHSS** is uncommon with careful monitoring
- **Bleeding, infection, and sedation risks** are small
- **Frozen eggs may not result in a pregnancy.** It is a chance, not a promise.
- **Emotional and financial costs** include storage fees over the years
- **Pregnancy at an older age** carries higher medical risks, whatever the age of the eggs

### How to prepare

- Book a consultation to check your reserve before deciding
- Have your AMH and antral follicle count done early in a cycle
- Consider the number of eggs you hope to freeze, and the cost of each cycle and storage
- Plan around your cycle and work
- Bring someone with you on collection day

### FAQs

1. **What is the right age for egg freezing?**
   Younger is generally better, because egg quality is higher and more eggs can be collected. Many specialists suggest considering it in the late twenties to mid-thirties. Results fall steadily after 35. Dr. Swati reviews your AMH, scan and age, and explains what is realistic for you.
2. **How many eggs should I freeze?**
         It depends on your age and what you hope for. More eggs frozen at a younger age gives better chances. One cycle may not be enough, especially if reserve is low. Dr. Swati estimates a target for you after your tests. Commonly ten to twenty mature eggs gives a reasonable chance of one future pregnancy, depending on age at freezing. Some women need more than one cycle, which your specialist estimates upfront.
3. **Is egg freezing a guarantee of a future baby?**
   No. Frozen eggs may not all survive thawing, fertilise or become embryos, and an embryo may not implant. Freezing improves your options, but it is not insurance. Dr. Swati gives realistic expectations before you start.
4. **Is egg freezing painful or risky?**
   Injections cause mild discomfort and bloating. Egg collection is under sedation, with mild cramps afterward. Serious complications such as OHSS, bleeding or infection are uncommon. Careful monitoring and dose adjustment keep risks low.
5. **How long can eggs be stored?**
   Frozen eggs can remain viable for many years. Indian regulations set a storage period and conditions, which Dr. Swati explains. Storage fees apply. `[CONFIRM: storage period under ART Act and rules]`
6. **Can any woman freeze her eggs in India?**
   The ART Act and rules decide who is eligible and under what conditions, including consent and age. Dr. Swati explains what applies to your situation at the consultation, so that you plan with correct information. `[CONFIRM: wording]`
7. **Does egg freezing affect my natural fertility or periods?**
   No. A cycle of stimulation uses eggs that would otherwise be lost that month, and does not use up future eggs. Your periods return to normal in the next cycle. It does not bring on menopause.

8. **What does egg freezing cost in Bangalore?**
   Costs depend on the stimulation medicines, the number of eggs and cycles, and storage fees, which recur each year. Prices vary between clinics. EVE shares a written estimate after your first consultation, so you can plan clearly.
### Sources
- ESHRE Guideline: Female fertility preservation (2020)
- ASRM Ethics Committee and Practice Committee opinions on planned oocyte cryopreservation
- ART (Regulation) Act, 2021 and Rules, 2022

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 28 September 2026.

---

## Page 29 · TESA and PESA

```yaml
title: "TESA PESA in Bangalore | Sperm Retrieval, EVE Clinic"
description: "TESA and PESA retrieve sperm for men with no sperm in the semen. How they work, who needs them, risks and next steps, with EVE, Gunjur, Bangalore."
url: /treatments/tesa-pesa/
reviewer: dr-swati-shree
lastReviewed: "2026-09-29"
h1: "TESA and PESA *(surgical sperm retrieval)*"
badge: tesa-pesa
about: { type: MedicalProcedure, name: "Percutaneous sperm retrieval (TESA and PESA)", alternateName: ["Testicular sperm aspiration", "Percutaneous epididymal sperm aspiration"] }
related: [/services/male-fertility-evaluation/, /treatments/ivf/, /treatments/iui/]
posts: [/blog/fertility-tests-explained/]
schema: [MedicalWebPage, FAQPage]
entities: [azoospermia, TESA, PESA, ICSI, obstructive azoospermia, non-obstructive azoospermia]
```

### Intro

TESA (testicular sperm aspiration) and PESA (percutaneous epididymal sperm aspiration) are procedures that collect sperm directly from the testicle or the epididymis, using a fine needle, for men whose semen contains no sperm. The sperm found are used in IVF with ICSI. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree helps couples understand whether sperm retrieval is the right path, and plans the treatment with them. `[CONFIRM: who performs the procedure and where]`

### At a glance

- **Who needs it:** men with azoospermia, meaning no sperm in the semen
- **Obstructive azoospermia:** sperm are made, but a blockage stops them reaching the semen. Sperm retrieval often finds sperm.
- **Non-obstructive azoospermia:** sperm production is very low or absent. Retrieval may still find sperm in some men.
- **PESA:** needle from the epididymis. **TESA:** needle from the testicle.
- **Anaesthesia:** usually local, sometimes with sedation
- **Time:** about 15 to 30 minutes
- **Used with:** IVF and ICSI, with fresh or frozen sperm
- **Result:** not every attempt finds sperm

### Understanding azoospermia

Azoospermia is found in about 1 in 100 men, and in a larger share of men with infertility. It has two main types. In **obstructive** azoospermia, the testicles make sperm but a blockage, from infection, surgery or being born without the tube (vas deferens), stops sperm leaving the body. In **non-obstructive** azoospermia, the testicles produce very few sperm or none, due to hormonal, genetic or other causes. The type decides whether PESA, TESA or another procedure is suitable.

### How the evaluation works

1. **Confirm azoospermia** with at least two semen analyses, with the centrifuged sample checked for rare sperm.
2. **History and examination** for infection, surgery, undescended testis, medicines, and varicocele.
3. **Hormone tests** (FSH, LH, testosterone) and scrotal ultrasound.
4. **Genetic tests** such as karyotype and Y chromosome microdeletion, in selected men, with counselling.
5. **Plan.** Dr. Swati explains whether retrieval is likely to help, and which procedure is suitable. In some cases, a urologist or andrologist performs the retrieval. `[CONFIRM]`

### What happens at the procedure

1. **Timing with your partner's cycle.** For fresh use, retrieval is planned on or near the day of the partner's egg collection. For frozen use, it can be done at any time.
2. **Anaesthesia.** Local anaesthetic is given, sometimes with sedation.
3. **Aspiration.** A fine needle is passed through the skin into the epididymis (PESA) or the testicle (TESA), and fluid or tissue is withdrawn.
4. **In the laboratory.** An embryologist checks the sample for sperm.
5. **Use.** Sperm found are used immediately for ICSI, or frozen for a later cycle.
6. **Recovery.** Most men go home the same day. Mild pain, swelling or bruising may last a few days.

### Risks and limits

- **Pain, swelling and bruising** are common and settle in days
- **Bleeding, infection** are uncommon
- **Haematoma** (a collection of blood) is rare
- **Sperm may not be found,** especially in non-obstructive azoospermia. The couple may then discuss other options, including another retrieval method, using donor sperm (where the law permits), or other paths. `[CONFIRM: donor sperm is not offered at launch]`
- **Genetic risks:** some causes of male infertility can be passed on to sons. Genetic counselling is advised where relevant.
- TESA and PESA retrieve sperm. They do not treat the cause of azoospermia.

### How to prepare

- Complete the evaluation and hormone tests first
- Share all earlier reports and surgical history
- Tell us about blood-thinning medicines and allergies
- Plan with your partner's IVF cycle, if fresh retrieval is intended
- Arrange for someone to accompany you home

### ART rules

TESA, PESA and ICSI fall under the ART (Regulation) Act, 2021. Consent and counselling are required. Sex selection is prohibited. `[CONFIRM: wording]`

### FAQs

1. **What is the difference between TESA and PESA?**
   PESA takes sperm from the epididymis, the coiled tube behind the testicle, with a needle. TESA takes sperm or tissue from the testicle itself. PESA is often used in obstruction, and TESA when production is the problem. The choice depends on your tests.
2. **Is TESA or PESA painful?**
   Local anaesthetic numbs the area, so you feel pressure rather than sharp pain. Sedation may be added. Mild aching, swelling and bruising are common for a few days. Most men go home the same day, and return to work within a few days.
3. **Will sperm definitely be found?**
   Not always. In obstructive azoospermia, the chance of finding sperm is high. In non-obstructive azoospermia, it is lower and depends on the cause. Dr. Swati explains your likely situation before the procedure, so expectations are realistic.
4. **Can sperm from TESA or PESA be used for IUI?**
   No. Sperm retrieved this way are few and need ICSI, where one sperm is injected into one egg in the IVF laboratory. IUI needs many motile sperm and is not suitable here.
5. **Can retrieved sperm be frozen?**
   Yes, often. Frozen sperm can be used in a later IVF-ICSI cycle, which avoids repeating the procedure. Not all samples survive freezing, so the laboratory advises on the best plan.
6. **Does a male fertility problem mean my sons will have it too?**
   Sometimes. Certain genetic causes, such as Y chromosome microdeletions or some conditions affecting the vas deferens, can be passed on. Genetic counselling and testing, when advised, help you understand any risk before treatment.

7. **What does TESA or PESA cost in Bangalore?**
   The procedure fee depends on whether it is done alone or as part of an IVF-ICSI cycle, plus lab and storage charges. Costs vary, so ask for a written estimate at your consultation before deciding.
### Sources
- AUA/ASRM Guideline: Diagnosis and treatment of infertility in men (2020)
- EAU Guidelines on Sexual and Reproductive Health `[CONFIRM: edition]`
- WHO laboratory manual for the examination and processing of human semen, 6th edition (2021)
- ART (Regulation) Act, 2021 and Rules, 2022

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 29 September 2026.

---
# Part 4 · Conditions (10 pages)

Condition pages explain the condition, then how Dr. Swati evaluates and manages it at EVE. They link to the service or treatment pages for the visit and the procedure, and never repeat their text. Male factor infertility lives on `/services/male-fertility-evaluation/`.

---

## Page 30 · PCOS

```yaml
title: "PCOS Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "PCOS explained: symptoms, diagnosis, treatment and getting pregnant with PCOS. Evidence-based care by Dr. Swati Shree, MRCOG, at EVE, Gunjur, Bangalore."
url: /conditions/pcos/
reviewer: dr-swati-shree
lastReviewed: "2026-09-10"
h1: "PCOS *(polycystic ovary syndrome)*"
badge: pcos
about: { type: MedicalCondition, name: "Polycystic ovary syndrome", alternateName: ["PCOS", "PCOD", "Polycystic ovarian disease"] }
related: [/services/follicular-monitoring/, /conditions/thyroid-and-fertility/, /conditions/menstrual-disorders/]
posts: [/blog/pcos-and-getting-pregnant/]
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [Rotterdam criteria, insulin resistance, AMH, ovulation induction, 2023 international PCOS guideline]
```

### Intro

Polycystic ovary syndrome (PCOS) is a common hormonal condition where ovulation is irregular and androgen (male-type hormone) levels may be high, causing irregular periods, acne, excess hair and sometimes difficulty conceiving. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree diagnoses PCOS carefully, treats the parts that trouble you most, and helps women with PCOS who want to conceive, and those who do not.

### At a glance

- **How common:** roughly 1 in 10 women of reproductive age worldwide. Indian studies report a wide range, depending on the criteria used.
- **Diagnosis (adults):** two of three: irregular or absent ovulation, signs of high androgens, and polycystic ovarian appearance on ultrasound or a high AMH, after other causes are excluded
- **Main features:** irregular periods, acne, excess facial or body hair, scalp hair thinning, weight gain, darker skin patches
- **Linked health risks:** insulin resistance, type 2 diabetes, high cholesterol, fatty liver, sleep apnoea, endometrial thickening
- **First-line treatment:** lifestyle, then medicines matched to your goals
- **Fertility:** most women with PCOS can conceive, often with ovulation-inducing treatment
- **PCOD or PCOS?** Many people use PCOD and PCOS to mean the same thing. The medical term is PCOS.

### What is PCOS?

In PCOS, the ovaries do not release an egg regularly, because the hormone signals that trigger ovulation are disturbed. Many women also have insulin resistance, where the body needs more insulin to control sugar, and this can raise androgens. Many follicles may stay small in the ovaries, which on ultrasound can look like a string of pearls. The word "cyst" is misleading: these are small follicles, not harmful cysts.

### Symptoms

- Periods that are infrequent, irregular, or missing
- Acne, oily skin
- Hair growth on the face, chest or abdomen, and thinning on the scalp
- Weight gain, especially around the waist
- Dark, velvety skin patches on the neck or armpits
- Difficulty getting pregnant
- Mood changes, low mood and anxiety, which are common and deserve attention

### How PCOS is diagnosed

Dr. Swati reviews your cycle history and symptoms, and examines you. Tests may include a pelvic ultrasound, blood tests for hormones (including testosterone), thyroid and prolactin to exclude look-alikes, and blood sugar and cholesterol. AMH can be used in adults in place of ultrasound to show polycystic ovary morphology. In teenagers, diagnosis is more cautious, because irregular cycles can be normal in the first years after periods begin.

### Treatment: matched to your goals

- **Lifestyle:** a 5 to 10 percent weight loss, where weight is raised, can restore ovulation in some women and improves metabolic health. Regular movement, a balanced diet and good sleep help all women with PCOS, whatever their weight.
- **To regulate periods and protect the lining:** hormonal options, such as combined pills or progestins, are used when pregnancy is not wanted.
- **For acne and excess hair:** targeted medicines, sometimes combined with cosmetic treatments.
- **Metabolic care:** insulin resistance, sugar and cholesterol are checked, and treated when needed.
- **To get pregnant:** ovulation induction with medicine is often the first step, with follicular monitoring. If it does not work, IUI or IVF may be considered.
- **Mental health:** support for mood and body image is part of care.

### PCOS and getting pregnant

PCOS is one of the most treatable causes of infertility. Many women ovulate after weight, metabolic and lifestyle changes, or with medicine. Monitoring avoids overstimulation, since women with PCOS can develop many follicles. Dr. Swati also checks the tubes and the partner's semen, so that treatment is not delayed by a missed second cause. In IVF, women with PCOS need special care to lower the risk of OHSS.

### Long-term health

PCOS is lifelong, though symptoms change over time. Regular checks on blood pressure, sugar and cholesterol, and a lining check if periods are very infrequent, protect health. Having a period at least every three months helps keep the uterine lining healthy.

### When to see a doctor

- Periods fewer than 8 in a year, or none for 3 months
- Trying to conceive for 6 to 12 months
- Rapid hair growth, severe acne or scalp thinning
- Signs of diabetes, such as increased thirst and tiredness

### FAQs

1. **Is PCOS the same as PCOD?**
   In everyday use, PCOD and PCOS describe the same condition: ovaries with many small follicles, irregular ovulation and hormone changes. PCOS is the medical term. What matters is not the name but your symptoms, the tests and a plan matched to your goals.
2. **Can I get pregnant with PCOS?**
   Yes. Many women with PCOS conceive, often with lifestyle changes and ovulation-inducing medicine, with monitoring. Some need IUI or IVF. PCOS makes ovulation irregular, but it does not mean you cannot become pregnant. Dr. Swati plans treatment after checking your tubes and partner's semen.
3. **Does PCOS go away?**
   PCOS does not go away, but it can be managed. Symptoms such as irregular periods and acne often improve with treatment and lifestyle changes, and ovulation can become regular. Long-term checks on sugar, cholesterol and blood pressure remain important, even when you feel well.
4. **Do I have to lose weight to treat PCOS?**
   Not everyone needs to. If weight is raised, losing 5 to 10 percent can improve cycles, ovulation and sugar control. Lean women with PCOS benefit from activity, sleep and a balanced diet. Dr. Swati sets realistic, kind goals without blame.
5. **Which diet helps in PCOS?**
   There is no single PCOS diet. A balanced diet with whole grains, pulses, vegetables, healthy fats and adequate protein, with fewer sweet drinks and refined foods, helps most women. Extreme diets are not advised. A food plan that suits your culture, budget and routine works best.
6. **Can PCOS cause diabetes?**
   PCOS raises the risk of insulin resistance and type 2 diabetes. Regular checks on blood sugar, and lifestyle measures, lower the risk. If you plan pregnancy, sugar and thyroid levels are checked first, since both affect fertility and pregnancy.
7. **Are birth control pills the only treatment for irregular periods in PCOS?**
   No. Pills are one option when pregnancy is not wanted, and they regulate periods and reduce acne. Other options include progestins, lifestyle changes, and medicine for insulin resistance. If you want to conceive, ovulation induction is used instead. Dr. Swati matches treatment to your goals.

### Sources
- International evidence-based guideline for the assessment and management of polycystic ovary syndrome (2023)
- ESHRE and ASRM consensus on PCOS and infertility
- ICMR and FOGSI guidance on PCOS `[CONFIRM: titles]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 10 September 2026.

---

## Page 31 · Endometriosis

```yaml
title: "Endometriosis Treatment in Bangalore | EVE Clinic"
description: "Endometriosis: symptoms, diagnosis, pain care, surgery and fertility, explained by Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore."
url: /conditions/endometriosis/
reviewer: dr-swati-shree
lastReviewed: "2026-09-07"
h1: "*Endometriosis*"
badge: endometriosis
about: { type: MedicalCondition, name: "Endometriosis", alternateName: ["Chocolate cyst", "Endometrioma"] }
related: [/conditions/adenomyosis/, /treatments/ivf/, /conditions/menstrual-disorders/]
posts: []
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [endometrioma, laparoscopy, chronic pelvic pain, dysmenorrhoea, ESHRE]
```

### Intro

Endometriosis is a condition where tissue similar to the lining of the uterus grows outside it, causing painful periods, pelvic pain and sometimes difficulty getting pregnant. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree evaluates endometriosis carefully, treats pain in a way that respects your plans for pregnancy, and explains the choices between medicine, surgery and fertility treatment.

### At a glance

- **How common:** about 1 in 10 women of reproductive age
- **Main symptoms:** painful periods, pain during sex, pelvic pain, pain on passing stools or urine at the time of periods, heavy bleeding, difficulty conceiving
- **Diagnosis delay:** often several years, because pain is dismissed as "normal"
- **Tests:** history, examination, pelvic ultrasound, sometimes MRI; laparoscopy in selected cases
- **Treatment:** pain relief, hormonal treatment, surgery, and fertility treatment where needed
- **Fertility:** many women with endometriosis conceive, some with help
- **Chronic:** it can recur, so long-term planning matters

### What is endometriosis?

Each month, the lining of the uterus builds up and is shed as a period. In endometriosis, similar tissue sits outside the uterus, on the ovaries, the tubes, the pelvic wall or the bowel, and responds to the same hormones. It bleeds and causes inflammation and scarring (adhesions). On the ovary, it can form a cyst filled with old blood, called an endometrioma, or "chocolate cyst".

### Symptoms

- Painful periods that stop you from working or studying
- Pain during or after sex
- Pelvic or lower back pain between periods
- Pain with bowel movements or urination, worse around periods
- Heavy or irregular bleeding
- Fatigue, bloating
- Difficulty conceiving

The severity of pain does not match the stage of disease. Mild disease can cause severe pain, and some women with extensive disease have few symptoms.

### How endometriosis is diagnosed

Dr. Swati listens carefully to your symptoms and examines you. A transvaginal ultrasound can show endometriomas and sometimes deeper disease. MRI helps in deep disease. Current guidelines allow treatment to start on clinical grounds, without waiting for surgery. Laparoscopy, a keyhole operation, is used when diagnosis is unclear, when treatment fails, or when surgery is planned for other reasons.

### Treatment options

- **Pain relief:** simple anti-inflammatory medicines, heat, and lifestyle measures
- **Hormonal treatment:** pills, progestins or a hormonal IUD to reduce periods and pain. These prevent pregnancy while taken.
- **Surgery:** laparoscopic removal or treatment of endometriosis, and of endometriomas, in selected women, with care to protect the ovaries
- **Fertility treatment:** if you want to conceive, options include timed attempts, IUI, or IVF, depending on severity, age, tubes and ovarian reserve
- **Pelvic pain support:** physiotherapy and pain specialists in persistent pain

### Endometriosis and fertility

Endometriosis can affect fertility through inflammation, scarring, blocked tubes, and reduced egg reserve, especially with ovarian endometriomas. Not every woman with endometriosis has difficulty conceiving. Where it does, treatment depends on age, severity and time. Because surgery on the ovary can reduce reserve, Dr. Swati weighs benefits and risks carefully, and may advise IVF sooner when time or reserve is limited. Egg freezing is sometimes discussed before ovarian surgery.

### When to see a doctor

- Period pain that interrupts normal life, or does not respond to simple medicines
- Pain during sex that does not go away
- Trying to conceive for over 6 months with these symptoms
- A cyst on the ovary found on a scan

> **When to get help straight away.** Sudden severe pelvic pain, fainting or fever with pelvic pain need emergency care. Call 108 or 112.

### FAQs

1. **What causes endometriosis?**
   The cause is not fully known. Possible factors include menstrual blood flowing backwards, immune and hormonal factors, and genetics. It is not caused by anything you did, and it is not contagious. It is a chronic condition that can be managed.
2. **Is painful periods normal or is it endometriosis?**
   Mild cramps are common. Pain that stops you from going to work or school, needs strong painkillers, or comes with heavy bleeding or pain during sex is not something to ignore. It may be endometriosis, adenomyosis or another condition. A check is worthwhile.
3. **Can I get pregnant with endometriosis?**
   Many women do, naturally or with treatment. Endometriosis can reduce fertility, especially when tubes are damaged or reserve is low. Dr. Swati checks your tubes, reserve and your partner's semen, then explains whether to try naturally, use IUI, or move to IVF.
4. **Do I need surgery for endometriosis?**
   Not always. Many women are managed with medicine. Surgery is considered for severe pain that does not improve, large endometriomas, deep disease, or specific fertility reasons. Dr. Swati explains benefits and risks, including the effect of ovarian surgery on egg reserve.
5. **Does endometriosis come back after treatment?**
   It can. Hormonal treatment after surgery lowers the chance. Long-term treatment is common unless you plan pregnancy. Pregnancy often brings relief while it lasts, but it is not a treatment. Regular review keeps symptoms in control.
6. **Does endometriosis increase the risk of cancer?**
   The risk of ovarian cancer is slightly higher in some types, but the overall chance remains low. Most women with endometriosis do not develop cancer. Follow-up and scanning of cysts help, and Dr. Swati advises when further tests are needed.

### Sources
- ESHRE Guideline: Endometriosis (2022)
- ACOG Practice Bulletin: Management of endometriosis
- ASRM Practice Committee, Treatment of pelvic pain associated with endometriosis

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 7 September 2026.

---

## Page 32 · Menstrual disorders

```yaml
title: "Irregular and Heavy Periods Treatment Bangalore | EVE"
description: "Irregular, heavy, painful or missed periods: causes, tests and treatment with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore."
url: /conditions/menstrual-disorders/
reviewer: dr-swati-shree
lastReviewed: "2026-09-10"
h1: "Menstrual *disorders*"
badge: menstrual
about: { type: MedicalCondition, name: "Abnormal uterine bleeding", alternateName: ["Irregular periods", "Heavy menstrual bleeding", "Dysmenorrhoea", "Amenorrhoea"] }
related: [/conditions/pcos/, /conditions/fibroids/, /services/endometrial-biopsy/]
posts: []
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [PALM-COEIN, FIGO, heavy menstrual bleeding, amenorrhoea, anaemia]
```

### Intro

Menstrual disorders are changes in the timing, amount or pain of periods that are outside the usual pattern. They include irregular periods, heavy bleeding, painful periods and missed periods. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree finds the cause using the FIGO PALM-COEIN framework, treats it, and helps you avoid complications such as anaemia.

### At a glance

- **Typical cycle:** about 21 to 35 days in adults, with bleeding for up to 8 days
- **Heavy bleeding signs:** soaking a pad every 1 to 2 hours, clots larger than a coin, periods that interfere with work or sleep, tiredness or breathlessness from anaemia
- **Common causes:** PCOS, thyroid disorders, fibroids, polyps, adenomyosis, hormone imbalance, bleeding disorders, medicines, pregnancy
- **Tests:** pregnancy test, blood count, thyroid, ultrasound, others as indicated
- **Treatments:** medicine, hormonal IUD, procedures, or surgery, matched to the cause
- **Missed periods:** need a pregnancy test first

### Types of menstrual disorder

| Problem | What it means |
|---|---|
| Irregular periods | Cycles that vary widely in length, or come less than 21 or more than 35 days apart |
| Heavy menstrual bleeding | Bleeding that interferes with daily life, often over 80 mL a month |
| Painful periods (dysmenorrhoea) | Severe cramps that limit activity |
| Missed periods (amenorrhoea) | No periods for 3 months or more, after pregnancy is excluded |
| Bleeding between periods or after sex | Needs examination to find the cause |
| Premenstrual symptoms | Severe mood or physical symptoms before periods |

### Causes (PALM-COEIN)

Doctors use the FIGO PALM-COEIN system. **PALM** are structural causes: Polyps, Adenomyosis, Leiomyoma (fibroids) and Malignancy or hyperplasia. **COEIN** are non-structural causes: Coagulopathy (bleeding disorders), Ovulatory dysfunction, Endometrial causes, Iatrogenic (medicine-related) and Not otherwise classified. This framework helps find a cause, rather than treating the symptom alone.

### What happens at EVE

1. **History.** Dr. Swati asks about your cycle length, flow, pain, clots, medicines and family history.
2. **Examination.** A general and, if needed, pelvic examination.
3. **Tests.** Pregnancy test, a blood count for anaemia, thyroid and prolactin, and a pelvic ultrasound. Further tests such as a biopsy are used when indicated.
4. **Treatment.** Options include non-hormonal medicine to reduce bleeding and pain, hormonal pills, a hormonal IUD, treatment of the underlying condition, and procedures or surgery for polyps, fibroids and adenomyosis.
5. **Follow-up.** A review after a few cycles shows if the plan is working.

### Heavy bleeding and anaemia

Heavy periods are a common cause of iron-deficiency anaemia in Indian women, causing tiredness, breathlessness, dizziness, hair loss and poor concentration. Dr. Swati checks haemoglobin and iron, and treats the anaemia as well as the bleeding.

### When to see a doctor

- Periods that are very heavy, last over 8 days, or cause tiredness or dizziness
- No periods for 3 months, and you are not pregnant
- Bleeding after sex, between periods or after menopause
- Severe pain with periods that is new or getting worse

> **When to get help straight away.** Heavy bleeding that soaks a pad every hour for several hours, bleeding with dizziness or fainting, or bleeding with severe pain in a woman who might be pregnant needs emergency care. Call 108 or 112.

### FAQs

1. **What is a normal period?**
   In adults, cycles usually come every 21 to 35 days, and last up to 8 days, with a flow that does not stop you from living normally. Cycles vary a little each month. Teenagers can have longer, more irregular cycles in the first two years.
2. **Why are my periods irregular?**
   Common causes are PCOS, thyroid problems, high prolactin, stress, weight change, intense exercise, breastfeeding and approaching menopause. Pregnancy should always be ruled out. A history, a scan and a few blood tests usually find the cause.
3. **How do I know if my bleeding is too heavy?**
   Heavy bleeding means soaking through a pad every hour or two, passing large clots, bleeding that lasts over 8 days, or feeling tired, dizzy or breathless. If periods affect work or sleep, or you may be anaemic, see a doctor.
4. **Can heavy periods be treated without surgery?**
   Often, yes. Non-hormonal tablets that reduce bleeding, hormonal pills and a hormonal IUD are effective for many women. Treatment depends on the cause. Fibroids, polyps and adenomyosis may need procedures. Dr. Swati explains all options.
5. **Does an irregular cycle affect fertility?**
   Yes, if it means you ovulate irregularly or not at all. Irregular periods are a common sign of PCOS or thyroid problems, both treatable. A fertility evaluation and follicular monitoring show whether you ovulate and when.
6. **I missed my period. Should I worry?**
   First do a pregnancy test. If it is negative and you miss three periods in a row, or are late repeatedly, see a doctor. Causes include stress, weight change, PCOS, thyroid problems and early menopause. They are usually treatable.

### Sources
- FIGO classification of causes of abnormal uterine bleeding in the reproductive years (PALM-COEIN)
- NICE Guideline NG88: Heavy menstrual bleeding: assessment and management
- ACOG Committee Opinion: Menstruation in girls and adolescents

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 10 September 2026.

---

## Page 33 · Recurrent pregnancy loss

```yaml
title: "Recurrent Miscarriage Treatment in Bangalore | EVE"
description: "Two or more miscarriages? Causes, tests and care for recurrent pregnancy loss with Dr. Swati Shree, MRCOG, at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/recurrent-pregnancy-loss/
reviewer: dr-swati-shree
lastReviewed: "2026-09-11"
h1: "Recurrent pregnancy *loss*"
badge: pregnancy-loss
about: { type: MedicalCondition, name: "Recurrent pregnancy loss", alternateName: ["Recurrent miscarriage", "Habitual abortion"] }
related: [/services/reproductive-immunology/, /services/early-pregnancy-scan/, /conditions/thyroid-and-fertility/]
posts: []
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [antiphospholipid syndrome, karyotype, ESHRE 2022, RCOG, uterine septum]
```

### Intro

Recurrent pregnancy loss means two or more pregnancy losses. It is painful, and often comes with guilt and fear that are not deserved. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree offers a careful, kind evaluation based on the ESHRE 2022 guideline, looks for causes that can be treated, and supports you through the next pregnancy.

### At a glance

- **Definition (ESHRE 2022):** two or more pregnancy losses
- **How common:** about 1 to 3 percent of couples
- **Most losses** are caused by a chromosome problem in the embryo, which is chance, not something you did
- **Treatable causes:** antiphospholipid syndrome, uterine abnormalities, thyroid disease, diabetes, and some others
- **Often no cause is found,** and the outlook is better than most couples fear
- **Supportive care** with early scans and close follow-up helps
- **Unproven treatments** are not recommended

### Why it happens

A single miscarriage is common, affecting about 1 in 4 pregnancies, usually because of a chromosome error in the embryo. Having two or more is less likely by chance, so doctors look for a cause. Known causes include:

- **Antiphospholipid syndrome (APS):** an autoimmune condition that causes clots and is treatable
- **Uterine abnormalities:** a septum, polyps, fibroids that distort the cavity, or adhesions
- **Chromosome rearrangements** in one partner (in about 2 to 5 percent of couples)
- **Thyroid disease and uncontrolled diabetes**
- **High prolactin**
- **Lifestyle factors:** smoking, heavy alcohol, high caffeine and obesity
- **Age:** the risk of loss rises with the woman's age
- **Often, no cause is found,** called unexplained recurrent loss

### What tests are recommended

Dr. Swati follows the ESHRE 2022 guideline. Tests may include:

| Test | Looks for |
|---|---|
| Antiphospholipid antibodies, repeated after 12 weeks if positive | APS |
| Pelvic ultrasound, 3D scan or hysteroscopy | Uterine shape, septum, polyps, fibroids |
| Thyroid function and thyroid antibodies | Thyroid disease |
| HbA1c or glucose | Diabetes |
| Prolactin | High prolactin |
| Karyotype (both partners) | Chromosome rearrangements, in selected couples |
| Testing tissue from a loss, if available | Chromosome error in the embryo |

Tests not routinely advised include inherited thrombophilia, NK cell tests and many immune panels, because they do not change care. See Reproductive immunology.

### Treatment

- **APS:** low-dose aspirin and heparin in pregnancy, which improves outcomes
- **Uterine septum or polyps:** removal through hysteroscopy
- **Thyroid and diabetes:** treatment before pregnancy
- **Lifestyle:** quitting smoking, limiting alcohol and caffeine, healthy weight
- **Unexplained loss:** supportive care, with early scans and regular reviews, which is associated with good outcomes. Dr. Swati explains where progesterone may be considered, such as in women with bleeding in early pregnancy and a history of loss.
- **IVF with embryo testing** is not routinely recommended for unexplained loss, but may be discussed in selected cases.

### Outlook and emotional care

Many couples with recurrent loss, even with no cause found, go on to have a healthy pregnancy. The outlook depends on age and the number of past losses, and Dr. Swati discusses your own picture with care. The grief of a loss is real, even when it is early. If you are overwhelmed, tell us. We can suggest counselling and support.

### When to see a doctor

- After two or more pregnancy losses, ideally before trying again
- After one loss at a later stage, after 10 weeks, or with a known risk factor
- If you are planning a pregnancy and have a history of loss

> **When to get help straight away.** Heavy bleeding, severe pain, fainting, or fever in early pregnancy need emergency care. Call 108 or 112.

### FAQs

1. **How many miscarriages count as recurrent?**
   The ESHRE 2022 guideline defines recurrent pregnancy loss as two or more pregnancy losses. Earlier definitions required three. Doctors now start the evaluation after two, so that treatable causes are found sooner.
2. **Is it my fault?**
   No. Most miscarriages happen because the embryo has a chromosome error, which is chance and not caused by work, stress, exercise, a fall, or anything you did. Please be kind to yourself. A medical evaluation looks for causes that can be treated.
3. **Will I be able to carry a pregnancy to term?**
   Many couples with recurrent loss do, including those with no cause found. The chance depends on age, the number of earlier losses and any cause found. Dr. Swati reviews your history and explains your outlook honestly, without false promises.
4. **What tests should I have after two miscarriages?**
   Usually antiphospholipid antibodies, a pelvic ultrasound or hysteroscopy, thyroid and blood sugar tests, prolactin and sometimes karyotyping of both partners. Dr. Swati chooses based on your history. Tests that guidelines do not support are not recommended.
5. **Can I take any treatment during my next pregnancy?**
   Treatment depends on the cause. In confirmed APS, aspirin and heparin help. For some women with bleeding and earlier loss, progesterone may be considered. For unexplained loss, supportive care and early scans are advised. Dr. Swati explains the evidence for any option.
6. **When can I try again after a miscarriage?**
   Many couples can try again after one normal period, once physical and emotional recovery allow. If you have had two or more losses, getting evaluated first is wise. Dr. Swati can guide the timing and the early scan.

### Sources
- ESHRE Guideline: Recurrent pregnancy loss (2022)
- RCOG Green-top Guideline No. 17: Recurrent first-trimester and second-trimester miscarriage
- ASRM Practice Committee, Evaluation and treatment of recurrent pregnancy loss

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 11 September 2026.

---

## Page 34 · Menopause and perimenopause

```yaml
title: "Menopause Clinic in Bangalore | EVE, Dr. Swati Shree"
description: "Perimenopause and menopause: symptoms, tests, hormone therapy and bone and heart health, with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/menopause-and-perimenopause/
reviewer: dr-swati-shree
lastReviewed: "2026-09-09"
h1: "Menopause and *perimenopause*"
badge: menopause
about: { type: MedicalCondition, name: "Menopause", alternateName: ["Perimenopause", "Climacteric", "Premature ovarian insufficiency"] }
related: [/conditions/menstrual-disorders/, /services/endometrial-biopsy/, /conditions/thyroid-and-fertility/]
posts: []
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [menopausal hormone therapy, hot flushes, osteoporosis, genitourinary syndrome of menopause, NICE NG23]
```

### Intro

Menopause is the end of periods, confirmed after 12 months without a period, and perimenopause is the years of change before it. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree supports women through this stage with clear information, symptom relief, and care for bone, heart and sexual health, and also sees women whose periods stop earlier than expected.

### At a glance

- **Average age in India:** about 46 to 47 years, a few years earlier than in many Western countries
- **Perimenopause:** can start in the early to mid forties, or earlier, and last 4 to 8 years
- **Premature ovarian insufficiency:** periods stopping before 40
- **Early menopause:** between 40 and 45
- **Common symptoms:** hot flushes, night sweats, sleep problems, mood changes, irregular periods, vaginal dryness, joint aches
- **Most effective treatment for hot flushes:** menopausal hormone therapy, suitable for many women
- **Long-term health:** bone, heart and sexual health need attention

### Stages

| Stage | What happens |
|---|---|
| Perimenopause | Cycles become irregular, symptoms start, hormones fluctuate. Pregnancy is still possible. |
| Menopause | 12 months with no period |
| Postmenopause | Years after, when bone and heart care become more important |

### Symptoms

- Hot flushes and night sweats
- Irregular, heavier or lighter periods
- Poor sleep, tiredness, low mood, anxiety, poor concentration
- Vaginal dryness, pain during sex, urinary urgency or repeated infections
- Reduced sex drive
- Joint and muscle aches
- Changes in skin and hair

Symptoms vary. Some women have very few, and some are significantly affected.

### How it is assessed

In women aged 45 and above with typical symptoms, menopause is diagnosed from symptoms, and hormone tests are not routinely needed. In younger women, or if symptoms are unusual, Dr. Swati may advise hormone tests, thyroid and other checks, because other conditions can look similar. For heavy or irregular bleeding, a scan and sometimes an endometrial biopsy are done.

### Treatment options

- **Lifestyle:** regular exercise including strength training, a balanced diet with enough calcium and protein, weight control, no smoking, limited alcohol, and good sleep habits
- **Menopausal hormone therapy (MHT):** the most effective treatment for hot flushes and night sweats. Benefits and risks depend on age, time since menopause, and your health. For many healthy women under 60, or within 10 years of menopause, benefits outweigh risks. It is not suitable for everyone, such as women with some breast cancers or unexplained bleeding.
- **Non-hormonal options:** certain medicines that reduce hot flushes, for women who cannot or do not want hormones
- **Vaginal estrogen:** a local treatment for dryness and urinary symptoms, with very little absorption
- **Bone health:** calcium, vitamin D, exercise and, where needed, a bone density test and treatment
- **Heart health:** blood pressure, sugar, cholesterol and weight checks
- **Mood and sleep:** support, counselling, and treatment when needed

### Premature and early menopause

Periods that stop before 40 (premature ovarian insufficiency) or between 40 and 45 (early menopause) need evaluation, including hormone tests and sometimes genetic and autoimmune checks. Hormone therapy is usually advised until about the age of natural menopause, to protect bone and heart health, and fertility options are discussed where relevant.

### When to see a doctor

- Symptoms that affect sleep, work or relationships
- Irregular or heavy periods in your forties
- Any bleeding after menopause, which always needs evaluation
- Periods stopping before 45

### FAQs

1. **At what age does menopause start in India?**
   Studies suggest an average age of about 46 to 47 years among Indian women, a few years earlier than in many Western countries. Perimenopause can begin earlier, even in the late thirties or early forties. Early menopause is before 45, and premature menopause before 40.
2. **What are the first signs of perimenopause?**
   Often, periods become irregular, shorter or longer, lighter or heavier. Hot flushes, night sweats, poor sleep, mood changes, and vaginal dryness may follow. Symptoms can be confused with thyroid problems, so a check is worth it if you are unsure.
3. **Is hormone therapy safe?**
   For many healthy women under 60, or within 10 years of menopause, hormone therapy is safe and the most effective treatment for hot flushes. Risks depend on your age, history and type of therapy. It is not suitable for everyone. Dr. Swati reviews your risks and explains the choices.
4. **Can I get pregnant during perimenopause?**
   Yes. Ovulation becomes unpredictable, but it still occurs, so pregnancy is possible until menopause is confirmed. If you do not want to conceive, continue contraception until a doctor advises it is safe to stop.
5. **How can I protect my bones and heart after menopause?**
   Exercise regularly, including weight-bearing and strength work. Eat enough calcium, protein and vitamin D, and avoid smoking and heavy alcohol. Control blood pressure, sugar and cholesterol. A bone density test may be advised, and treatment started if bone loss is significant.
6. **Is bleeding after menopause normal?**
   No. Any bleeding after 12 months without periods needs a check, usually a pelvic ultrasound and sometimes a biopsy. Most causes are benign, such as thin lining or polyps, but a few are serious, and early evaluation matters.

### Sources
- NICE Guideline NG23: Menopause: diagnosis and management
- International Menopause Society, Recommendations on women's midlife health and menopause hormone therapy
- The 2022 hormone therapy position statement of The North American Menopause Society
- Indian Menopause Society position statements `[CONFIRM: titles]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 9 September 2026.

---
## Page 35 · Female factor infertility

```yaml
title: "Female Infertility Causes and Care in Bangalore | EVE"
description: "Why a woman may not conceive: ovulation, tubes, uterus, ovarian reserve and age. Evaluation and options with Dr. Swati Shree, EVE, Gunjur, Bangalore."
url: /conditions/female-factor-infertility/
reviewer: dr-swati-shree
lastReviewed: "2026-09-08"
h1: "Female factor *infertility*"
badge: female-infertility
about: { type: MedicalCondition, name: "Female infertility", alternateName: ["Female factor infertility", "Subfertility"] }
related: [/services/fertility-evaluation/, /conditions/pcos/, /conditions/thin-endometrium-and-low-ovarian-reserve/]
posts: [/blog/when-to-see-a-fertility-doctor/]
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [ovulation disorder, tubal factor, uterine factor, age-related decline, ASRM]
```

### Intro

Female factor infertility means that a cause in the woman is the main or a contributing reason a couple has not conceived. The causes fall into a few groups: ovulation, the fallopian tubes, the uterus, ovarian reserve and age. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree finds which of these apply, so treatment targets the actual cause. This page explains the causes. The tests and the visit are described under Fertility evaluation.

### At a glance

- **Infertility is defined as** no pregnancy after 12 months of regular unprotected intercourse, or 6 months if the woman is 35 or older
- **Main causes:** ovulation problems, tubal damage, uterine problems, endometriosis, reduced ovarian reserve, age
- **Contributing share:** in about one-third of couples the main cause is in the woman, one-third in the man, and the rest in both or unexplained
- **Common, treatable causes:** PCOS, thyroid problems, high prolactin, blocked tubes
- **Age:** egg number and quality fall with age, faster after 35
- **Treatment** depends on the cause, from ovulation induction to IUI or IVF

### The main causes

**1. Ovulation problems.** If the egg is not released regularly, conception is difficult. Causes include PCOS, thyroid disease, high prolactin, extreme weight loss or gain, intense exercise, and early ovarian insufficiency. These are often treatable.

**2. Tubal factor.** The fallopian tubes carry the egg and are where sperm and egg meet. Past pelvic infection, tuberculosis, endometriosis, surgery, a previous ectopic pregnancy or adhesions can block or damage them. This is a common cause in India, where genital tuberculosis is a recognised cause. `[CONFIRM: Dr. Swati's wording on genital TB]`

**3. Uterine factor.** Fibroids that distort the cavity, polyps, a uterine septum, adhesions after infection or surgery (Asherman syndrome), and a thin lining can interfere with implantation.

**4. Endometriosis and adenomyosis.** Both can affect tubes, eggs, and the lining. See their pages.

**5. Ovarian reserve and age.** The number and quality of eggs decline over time. AMH and antral follicle count estimate the number, but only age reflects quality. See Low ovarian reserve.

**6. Cervical factor.** Rarely, problems with cervical mucus or past cervical surgery.

**7. Other factors:** medical conditions such as diabetes, autoimmune disease, some medicines, smoking, alcohol, and very high or low body weight.

### Symptoms that point to a cause

| Symptom | May point to |
|---|---|
| Irregular or absent periods | Ovulation problem, PCOS, thyroid, prolactin |
| Painful periods, pain during sex | Endometriosis, adenomyosis |
| Heavy periods | Fibroids, polyps, adenomyosis |
| Past pelvic infection or surgery | Tubal factor |
| Regular periods with no symptoms | Many causes, including unexplained |

Many women with infertility have no symptoms at all, which is why testing matters.

### What happens at EVE

Dr. Swati begins with a long consultation, an examination and scan. She plans tests for ovulation, reserve, tubes and uterus, and the male partner's semen analysis. You then receive a clear explanation and plan. See Fertility evaluation for the full sequence.

### Treatment depends on the cause

| Cause | Possible approach |
|---|---|
| Ovulation problem | Treat the cause, ovulation induction with monitoring |
| Mild tubal damage, one open tube | Timed attempts or IUI |
| Blocked tubes | IVF, or surgery in selected cases |
| Uterine polyp, septum or fibroid | Hysteroscopic or other surgical correction |
| Endometriosis | Medical or surgical treatment, then fertility planning |
| Low reserve, older age | Earlier IVF, discussion of egg freezing where appropriate |
| Unexplained | Timed attempts, IUI, then IVF |

### When to see a doctor

See a specialist after 12 months of trying, 6 months if you are 35 or older, or sooner with irregular cycles, known endometriosis or fibroids, pelvic infection or surgery, or after two or more miscarriages.

### FAQs

1. **What is the most common cause of female infertility?**
   Ovulation problems are among the most common, with PCOS the most common cause. Tubal damage and endometriosis are also frequent, and age-related decline is a key factor after 35. Often more than one factor is present, so a full evaluation matters.
2. **Can a woman be infertile with regular periods?**
   Yes. Regular periods suggest ovulation is likely, but they do not show whether tubes are open, the uterus is healthy, or the eggs are of good quality. A fertility evaluation looks at these.
3. **Does age affect fertility in women?**
   Yes. Fertility declines gradually from the late twenties, and more steeply after 35, because egg number and quality fall. The chance of miscarriage also rises with age. This is why older women are advised to seek help after 6 months of trying.
4. **Can blocked fallopian tubes be treated?**
   Some can, with surgery, when damage is mild. For many women with blocked tubes, IVF is advised because it bypasses the tubes. If one tube is open, timed attempts or IUI may still work. Dr. Swati explains which suits your findings.
5. **Does genital tuberculosis cause infertility?**
   It can. Genital TB may damage the tubes and uterine lining, and it can be present without obvious symptoms. It is considered when tests suggest it, especially with tubal damage or a thin lining. It is treatable with the right medicines. `[CONFIRM: Dr. Swati reviews wording]`
6. **Can lifestyle changes improve female fertility?**
   They can help. Quitting smoking, limiting alcohol, achieving a healthy weight, and managing thyroid and diabetes support ovulation and general fertility. They do not replace treatment for blocked tubes or very low reserve, but improving them gives treatment a better chance.

### Sources
- ASRM Practice Committee, Definition of infertility (2023); Evaluation of the infertile female (2015)
- ESHRE Guideline: Unexplained infertility (2023)
- NICE Guideline CG156: Fertility problems

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 8 September 2026.

---

## Page 36 · Fibroids

```yaml
title: "Fibroids Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "Uterine fibroids: symptoms, scan, treatment options and effects on pregnancy, explained by Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/fibroids/
reviewer: dr-swati-shree
lastReviewed: "2026-09-09"
h1: "*Fibroids*"
badge: fibroids
about: { type: MedicalCondition, name: "Uterine fibroids", alternateName: ["Leiomyoma", "Myoma", "Uterine fibroid"] }
related: [/conditions/menstrual-disorders/, /conditions/adenomyosis/, /conditions/female-factor-infertility/]
posts: []
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [leiomyoma, myomectomy, hysteroscopy, submucosal fibroid, FIGO]
```

### Intro

Fibroids are non-cancerous growths in the muscle of the uterus. They are very common, and many cause no problems, but some cause heavy periods, pressure, pain or difficulty with pregnancy. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree maps the fibroids with a scan, tells you whether they matter for your symptoms or your plans, and explains your options, including doing nothing.

### At a glance

- **How common:** a large share of women develop fibroids by age 50, and they are more common in some groups
- **Non-cancerous:** the chance of cancer is very low
- **Many cause no symptoms** and need only observation
- **Symptoms when present:** heavy or long periods, anaemia, pelvic pressure, frequent urination, pain, and sometimes difficulty with pregnancy
- **Location matters:** a fibroid inside the cavity affects fertility more than one on the outer wall
- **Tests:** pelvic ultrasound, sometimes MRI or hysteroscopy
- **Treatment:** observation, medicine, or a procedure

### Types

| Type | Location | Effect |
|---|---|---|
| Submucosal | Inside the uterine cavity | Heavy bleeding, may lower implantation and raise miscarriage risk |
| Intramural | Within the muscle wall | Heavy periods and pressure if large, can distort the cavity |
| Subserosal | On the outer surface | Pressure on bladder or bowel, little effect on bleeding |

### Symptoms

- Heavy or prolonged periods, clots, and anaemia
- Pelvic pressure, back pain, bloating
- Frequent urination or constipation
- Pain with sex or periods
- Difficulty getting pregnant, or recurrent miscarriage in some women
- A feeling of fullness or a lump in the lower abdomen

### How fibroids are assessed

A transvaginal ultrasound shows the number, size and location of fibroids. A 3D scan, saline sonography, MRI or hysteroscopy may be used to see if fibroids touch the cavity, which matters for fertility and for planning treatment. Blood tests check for anaemia.

### Fibroids and pregnancy

Most women with fibroids conceive and have healthy pregnancies. Fibroids that distort the uterine cavity can reduce implantation and raise miscarriage risk, and removing them can help. Fibroids that do not touch the cavity are usually left alone, even in women planning pregnancy. In pregnancy, large fibroids may cause pain, and are monitored by scan. Dr. Swati weighs the benefit of surgery against its risks, including scarring and effects on the uterus.

### Treatment options

- **Observation:** for fibroids without symptoms. Regular review and scans.
- **Medicines:** to reduce bleeding and pain, such as non-hormonal bleeding tablets, hormonal methods and a hormonal IUD. Some medicines can shrink fibroids for a time, usually before surgery.
- **Procedures:** hysteroscopic removal of fibroids in the cavity, laparoscopic or open myomectomy to remove fibroids while keeping the uterus, uterine artery embolisation, and hysterectomy when childbearing is complete. Where a procedure is needed, Dr. Swati explains the options and where it can be done.
- **Fertility treatment:** IUI or IVF where fibroids are not the only cause.

### When to see a doctor

- Heavy periods, tiredness or breathlessness
- Pelvic pressure, pain or urinary symptoms
- Difficulty conceiving, or two or more miscarriages
- A fibroid found on a scan, to learn if it matters

> **When to get help straight away.** Sudden severe pelvic pain, very heavy bleeding, or fainting need emergency care. Call 108 or 112.

### FAQs

1. **Are fibroids cancer?**
   No. Fibroids are non-cancerous growths of muscle in the uterus. A cancerous change in a fibroid is very rare. Rapid growth after menopause, or unusual features on a scan, are reasons for closer evaluation.
2. **Do fibroids stop me getting pregnant?**
   Not usually. Most women with fibroids conceive. Fibroids that distort the uterine cavity, especially submucosal fibroids, can reduce implantation and raise miscarriage risk. Dr. Swati identifies whether your fibroids matter, and removal is advised only when it is likely to help.
3. **Do all fibroids need treatment?**
   No. Fibroids without symptoms and not affecting fertility can be watched with regular review. Treatment is advised for heavy bleeding, anaemia, pressure symptoms, pain, or fertility problems linked to the fibroid.
4. **Can fibroids be treated without surgery?**
   Often. Medicines can reduce bleeding and pain, and a hormonal IUD helps heavy periods in many women. Medicines do not remove fibroids, but they can control symptoms. Surgery is considered when symptoms persist or the fibroid affects fertility.
5. **Will fibroids come back after surgery?**
   They can. Removal of a fibroid does not stop new ones forming, especially in younger women with many fibroids. Hysterectomy ends the risk, but is only for women who have completed their families. Dr. Swati discusses the chance of recurrence.
6. **Do fibroids shrink after menopause?**
   Usually, yes, because they depend on estrogen. Fibroids tend to shrink after menopause, and symptoms ease. Growth after menopause, or bleeding, is not expected and should be checked.

### Sources
- ACOG Practice Bulletin: Management of symptomatic uterine leiomyomas
- NICE Guideline NG88: Heavy menstrual bleeding
- ASRM Practice Committee, Removal of myomas in asymptomatic patients to improve fertility
- FIGO classification of fibroid location

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 9 September 2026.

---

## Page 37 · Adenomyosis

```yaml
title: "Adenomyosis Treatment in Bangalore | EVE Clinic"
description: "Adenomyosis: painful, heavy periods and fertility effects, diagnosis by ultrasound or MRI, and treatment options with Dr. Swati Shree, Gunjur, Bangalore."
url: /conditions/adenomyosis/
reviewer: dr-swati-shree
lastReviewed: "2026-09-07"
h1: "*Adenomyosis*"
badge: adenomyosis
about: { type: MedicalCondition, name: "Adenomyosis", alternateName: ["Uterine adenomyosis"] }
related: [/conditions/endometriosis/, /conditions/fibroids/, /conditions/menstrual-disorders/]
posts: []
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [adenomyosis, myometrium, transvaginal ultrasound, MRI, levonorgestrel IUS]
```

### Intro

Adenomyosis is a condition where the tissue that lines the uterus grows into the muscle wall of the uterus, making periods heavy and painful and sometimes affecting fertility. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree diagnoses it with a careful history and a specialist ultrasound, and treats it according to whether you want relief, pregnancy or both.

### At a glance

- **What happens:** endometrial tissue lies within the muscle (myometrium), and the uterus can enlarge and become tender
- **Typical symptoms:** heavy periods, painful periods, pelvic pressure, pain with sex
- **Often found:** in women in their thirties and forties, and often together with fibroids or endometriosis
- **Tests:** transvaginal ultrasound, and MRI in doubtful cases
- **Treatment:** pain relief, hormonal treatment, a hormonal IUD, and surgery in selected women
- **Fertility:** adenomyosis may reduce the chance of implantation, but many women conceive

### How it differs from endometriosis and fibroids

| | Adenomyosis | Endometriosis | Fibroids |
|---|---|---|---|
| Where | Inside the uterine muscle wall | Outside the uterus | A defined muscle lump in the uterus |
| Main symptom | Heavy, painful periods | Pelvic pain, painful periods | Heavy periods, pressure |
| Often coexists with | Endometriosis, fibroids | Adenomyosis | Adenomyosis |

### Symptoms

- Periods that are heavy or long
- Severe period cramps
- Pain during intercourse
- A bloated, tender lower abdomen, or an enlarged uterus
- Tiredness from anaemia
- Difficulty conceiving or repeated early miscarriage, in some women

Some women have no symptoms.

### How adenomyosis is diagnosed

Dr. Swati examines you and uses a transvaginal ultrasound, looking at the shape and texture of the uterine muscle. MRI can confirm doubtful cases. Only a tissue examination after hysterectomy gives a definite diagnosis, but modern imaging is reliable enough for treatment in most women.

### Treatment

- **Pain relief:** anti-inflammatory medicines at the start of periods
- **Reducing bleeding:** non-hormonal tablets that reduce bleeding
- **Hormonal treatment:** pills, progestins or a hormonal IUD, which often lighten periods and ease pain. These stop pregnancy while used.
- **Procedures:** uterine artery embolisation or conservative surgery in selected women. Where a procedure is needed, Dr. Swati explains the options and where it can be done.
- **Hysterectomy:** for women who have completed their families and have severe symptoms despite treatment
- **If you want to conceive:** treatment aims to keep the uterus and improve implantation. Options include medical suppression before an embryo transfer, and IVF where other causes exist. Dr. Swati discusses the evidence, which is still developing.

### Adenomyosis and pregnancy

Adenomyosis is linked with a higher risk of implantation problems, miscarriage and pregnancy complications, though many women have healthy pregnancies. Early scans and closer follow-up in pregnancy are advised.

### When to see a doctor

- Heavy or painful periods that interfere with life
- Persistent pelvic pain
- Trouble conceiving or recurrent miscarriage with heavy painful periods

### FAQs

1. **What causes adenomyosis?**
   The cause is not known. It may relate to uterine surgery or pregnancy, hormones, or how the lining invades the muscle. It is not caused by anything you did and is not infectious. Treatment aims at controlling symptoms and, when wanted, supporting pregnancy.
2. **Can adenomyosis be cured?**
   Hysterectomy ends adenomyosis, but it is only for women who have completed their families. Otherwise, symptoms can be controlled with medicine, a hormonal IUD or procedures, and they usually ease after menopause. Dr. Swati plans treatment around your goals.
3. **Can I get pregnant with adenomyosis?**
   Many women do. Adenomyosis can lower the chance of implantation and raise the risk of miscarriage, so some need fertility treatment. Dr. Swati evaluates other causes too, and advises early scans and closer follow-up once you are pregnant.
4. **How is adenomyosis different from endometriosis?**
   In adenomyosis, lining-type tissue grows into the muscle wall of the uterus. In endometriosis, it grows outside the uterus, such as on the ovaries or pelvic lining. They can occur together, and both cause painful periods.
5. **Does adenomyosis need surgery?**
   Not always. Many women are managed with medicine or a hormonal IUD. Surgery is considered when symptoms persist, or when fertility goals require it. Dr. Swati explains the options, benefits and risks.
6. **Does adenomyosis go away after menopause?**
         Usually the symptoms ease after menopause, because the condition depends on hormones. Heavy bleeding or new pain after menopause is not expected and should be checked. Usually it settles, since it is driven by the same hormones that stop at menopause. Until then it is managed with pain relief, hormonal treatment or, in selected cases, surgery.
### Sources
- ESHRE Guideline: Endometriosis (2022), for overlapping conditions
- ACOG Practice Bulletin: Abnormal uterine bleeding
- Morphological Uterus Sonographic Assessment (MUSA) consensus for adenomyosis

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 7 September 2026.

---

## Page 38 · Thin endometrium and low ovarian reserve

```yaml
title: "Low AMH and Thin Endometrium Care in Bangalore | EVE"
description: "Low ovarian reserve (low AMH) and thin endometrium: causes, tests and options with Dr. Swati Shree, MRCOG, at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/thin-endometrium-and-low-ovarian-reserve/
reviewer: dr-swati-shree
lastReviewed: "2026-09-11"
h1: "Thin endometrium and low *ovarian reserve*"
badge: ovarian-reserve
about: { type: MedicalCondition, name: "Diminished ovarian reserve and thin endometrium", alternateName: ["Low AMH", "Poor ovarian reserve", "Thin uterine lining"] }
related: [/treatments/egg-freezing/, /treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/fertility-tests-explained/]
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [AMH, antral follicle count, FSH, Asherman syndrome, chronic endometritis, ASRM]
```

### Intro

Two different problems share this page because both are common questions in fertility care. Low ovarian reserve means that the number of eggs left in the ovaries is lower than expected for age. A thin endometrium means the uterine lining is thinner than needed for an embryo to implant. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree explains both honestly: what the numbers mean, what they do not mean, and what can be done.

### At a glance

- **Low ovarian reserve:** a low AMH or antral follicle count for your age. It affects how many eggs can be collected, and how much time you have.
- **It does not mean** that you cannot conceive naturally. Age is the main driver of egg quality.
- **AMH:** a blood test, valid at any day of the cycle, that reflects the number of small follicles
- **Antral follicle count (AFC):** follicles counted on a scan early in the cycle
- **Thin endometrium:** often a lining under about 7 mm around ovulation or before transfer, though the cut-off varies
- **Causes of a thin lining:** low estrogen, scarring (Asherman syndrome), chronic endometritis, past surgery or infection, and genital tuberculosis
- **Treatment:** matched to the cause

### Low ovarian reserve

**Understanding the tests.** AMH and AFC estimate how many eggs remain. They tell you about number, not quality. A low value suggests that fewer eggs may be collected in IVF and that time may be shorter, but it does not by itself predict that a pregnancy is impossible. A high value, such as in PCOS, is not a measure of better fertility either.

**Causes:** age, genetic factors, surgery on the ovaries, endometriosis, chemotherapy or radiation, some autoimmune conditions, smoking, and sometimes no known cause.

**What helps, honestly.**
- Acting early. With low reserve, time matters more than in most situations.
- Considering IUI or IVF sooner if you are over 35, or if reserve is very low.
- Discussing egg freezing, if you do not plan pregnancy soon. With low reserve, fewer eggs are collected per cycle, so expectations must be realistic.
- Avoiding unproven supplements and add-ons, which have little or no evidence. Dr. Swati explains the evidence for any option you ask about.
- Stopping smoking, and keeping medical conditions under control.

### Premature ovarian insufficiency

When periods stop before 40, with high FSH on tests, it is called premature ovarian insufficiency. It needs a medical evaluation, hormone therapy for health, and a discussion of fertility options. See Menopause and perimenopause.

### Thin endometrium

The endometrium needs to be thick enough, and well-formed, for an embryo to implant. A thin lining can be seen in women with and without fertility problems. A lining below about 7 mm at the time of ovulation or embryo transfer is commonly considered thin, but there is no single threshold.

**Causes**
- Low estrogen
- Scarring from infection or procedures (Asherman syndrome)
- Chronic endometritis, an inflammation of the lining
- Genital tuberculosis
- Poor blood flow
- Medicines used in some treatment cycles

**Evaluation.** A transvaginal scan across the cycle, and, when suspected, hysteroscopy, a tissue biopsy, or tests for infection and tuberculosis.

**Treatment**
- Treat the cause: antibiotics for chronic endometritis, hysteroscopic division of adhesions, treatment of tuberculosis if found
- Estrogen priming in a prepared embryo transfer cycle
- Freezing embryos and transferring in a later, better prepared cycle
- Other measures, such as platelet-rich plasma, growth factors, or low-dose aspirin, have limited evidence, and are discussed only with clear explanations of what is known

### When to see a doctor

- AMH reported low, or antral follicle count low on a scan
- Periods stopping, becoming very light, or irregular, especially before 40
- A thin lining reported on scan, or failed embryo transfers
- Trying to conceive over 35, with limited time

### FAQs

1. **What is a normal AMH level?**
   There is no single normal level. AMH falls with age, and values are compared with the typical range for your age and the laboratory. Very low values suggest reduced reserve, and very high values are seen in PCOS. Dr. Swati reads your AMH with your age, scan and history.
2. **Does low AMH mean I cannot get pregnant?**
   No. AMH reflects egg number, not quality, and women with low AMH can conceive naturally. It may mean that fewer eggs respond to stimulation, and that time is shorter. Acting earlier matters. Dr. Swati advises on options such as timed attempts, IUI or IVF.
3. **Can I increase my AMH?**
   AMH cannot be increased in any proven way, since it reflects eggs already present. Supplements and treatments sold for this purpose have little evidence. Healthy habits, such as stopping smoking, support general health. If you plan pregnancy, an early evaluation helps more.
4. **What is a thin endometrium, and can it be treated?**
   A thin endometrium is a lining that is thinner than needed for implantation, often under about 7 mm. Causes include low estrogen, scarring and infection. Treating the cause, estrogen support, and sometimes freezing embryos for a better prepared transfer can help.
5. **Can I freeze eggs if my reserve is low?**
   Sometimes. With low reserve, fewer eggs are collected in each cycle, and more than one cycle may be needed. Egg freezing may still be worth discussing, especially if you are young, but the benefit is less certain. Dr. Swati gives a realistic view.
6. **Does a thin lining always cause implantation failure?**
   No. Pregnancies can occur with a thin lining, though the chance is lower. A thin lining is one factor among several. Dr. Swati checks for treatable causes, such as adhesions or infection, before advising a plan.

### Sources
- ASRM Practice Committee, Testing and interpreting measures of ovarian reserve (2015)
- ESHRE Guideline: Ovarian stimulation for IVF/ICSI (2020)
- ESHRE Good practice recommendations on add-ons in reproductive medicine (2023)
- ESHRE Guideline: Premature ovarian insufficiency (2024)

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 11 September 2026.

---

## Page 39 · Thyroid and fertility

```yaml
title: "Thyroid and Fertility in Bangalore | EVE, Dr. Swati Shree"
description: "How thyroid problems affect periods, fertility and pregnancy, which tests to have, and how treatment helps, with Dr. Swati Shree, EVE Clinic, Gunjur."
url: /conditions/thyroid-and-fertility/
reviewer: dr-swati-shree
lastReviewed: "2026-09-12"
h1: "Thyroid and *fertility*"
badge: thyroid
about: { type: MedicalCondition, name: "Thyroid disorders in women planning pregnancy", alternateName: ["Hypothyroidism and infertility", "Thyroid and pregnancy"] }
related: [/conditions/pcos/, /conditions/recurrent-pregnancy-loss/, /conditions/menstrual-disorders/]
posts: [/blog/fertility-tests-explained/]
schema: [MedicalWebPage, MedicalCondition, FAQPage]
entities: [TSH, hypothyroidism, hyperthyroidism, thyroid antibodies, ATA 2017]
```

### Intro

The thyroid gland controls the body's metabolism, and it also affects periods, ovulation and pregnancy. Thyroid problems are common in Indian women and are simple to test for and usually simple to treat. At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree checks thyroid function as part of fertility and miscarriage evaluations, and helps you keep it in the right range before and during pregnancy.

### At a glance

- **Test:** TSH, a simple blood test, with free T4 when needed; thyroid antibodies in selected women
- **Underactive thyroid (hypothyroidism)** is the most common problem and can cause irregular periods, difficulty conceiving, and a higher risk of miscarriage
- **Overactive thyroid (hyperthyroidism)** can also disturb cycles and pregnancy
- **Target when planning pregnancy:** many guidelines aim for a TSH below about 2.5 mIU/L. Your doctor sets your own target.
- **Treatment:** daily thyroid hormone tablets for an underactive thyroid, taken on an empty stomach
- **In pregnancy,** the dose often needs to be increased, so tell your doctor as soon as you know

### How the thyroid affects fertility

Thyroid hormone influences the signals that control ovulation. When it is too low, periods can become irregular or heavy, ovulation can stop, and prolactin can rise. Even mild hypothyroidism, with a raised TSH and normal T4, can matter when trying to conceive. Untreated thyroid disease raises the risks of miscarriage, preterm birth, and effects on the baby's development. These are largely preventable with treatment.

### Who should be tested

Dr. Swati advises thyroid testing for women who:
- Are trying to conceive and have not yet, or are starting fertility treatment
- Have irregular periods, PCOS or heavy periods
- Have had a miscarriage, especially more than one
- Have a family history of thyroid disease, or other autoimmune disease such as type 1 diabetes
- Have symptoms such as tiredness, weight change, hair loss, cold or heat intolerance, or a swelling in the neck

### Thyroid antibodies

Some women have antibodies against the thyroid (TPO antibodies) even with normal TSH. They are linked with a higher risk of miscarriage in some studies. The benefit of treating antibodies alone is not clearly proven, so Dr. Swati checks thyroid function more often and treats if TSH rises.

### What happens at EVE

1. **A blood test** for TSH, with free T4 and antibodies as indicated.
2. **Treatment if needed.** For an underactive thyroid, thyroid hormone tablets. For an overactive thyroid, medicine and a plan with a physician or endocrinologist.
3. **Retesting** after about 6 to 8 weeks, to adjust the dose.
4. **Planning pregnancy.** Aim for a target TSH before treatment such as IUI or IVF, and recheck in early pregnancy.
5. **In pregnancy.** The dose is checked early and often adjusted, and testing is repeated through the pregnancy.

### Taking thyroid medicine well

- Take it on an empty stomach, with water, about 30 to 60 minutes before breakfast, at the same time daily
- Separate it from iron, calcium and some other supplements by at least 4 hours
- Do not stop or change the dose yourself
- If you become pregnant, contact us at once about the dose

### When to see a doctor

- Irregular periods, difficulty conceiving or a miscarriage, with no thyroid check yet
- Known thyroid disease and planning pregnancy
- A positive pregnancy test while on thyroid medicine

### FAQs

1. **Can hypothyroidism cause infertility?**
   Yes. An underactive thyroid can cause irregular ovulation, heavy or irregular periods, and a higher risk of miscarriage. Most women conceive once thyroid levels are corrected with medicine. It is one of the simplest causes of infertility to test for and treat.
2. **What TSH level is right when trying to conceive?**
   Many guidelines aim for a TSH below about 2.5 mIU/L when planning pregnancy, though targets vary slightly. Dr. Swati sets a target for you, based on your tests and history, and adjusts your dose to reach it.
3. **Do I need to change my thyroid dose in pregnancy?**
   Often, yes. Pregnancy raises the need for thyroid hormone, and many women need a higher dose, often by about 25 to 30 percent. Contact your doctor as soon as you have a positive test, and do not adjust the dose on your own.
4. **Does thyroid medicine harm the baby?**
   No. Thyroid hormone replacement is safe in pregnancy, and untreated hypothyroidism is far more harmful. Overactive thyroid needs particular care in medicine choice. Dr. Swati explains your plan and coordinates with an endocrinologist when needed.
5. **Should I get thyroid antibodies tested?**
   They may be useful if you have had miscarriages, or if TSH is borderline. Having antibodies increases the chance of thyroid problems later, so monitoring is advised. Treating antibodies alone is not clearly proven to help. Dr. Swati decides whether testing is useful for you.
6. **Can thyroid problems cause irregular periods?**
   Yes. Both underactive and overactive thyroid can change cycle length and flow. A thyroid test is part of the first check for irregular periods. See the Menstrual disorders and PCOS pages.

### Sources
- American Thyroid Association guidelines for the diagnosis and management of thyroid disease during pregnancy and the postpartum (2017)
- Endocrine Society guideline: Management of thyroid dysfunction during pregnancy and postpartum
- ESHRE Guideline: Recurrent pregnancy loss (2022)
- Indian Thyroid Society guidance `[CONFIRM: title]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed 12 September 2026.

---
# Part 5 · Legal and trust pages (7 pages)

These pages are drafts for review by a lawyer before launch`[CONFIRM: legal review]`. Dates come from `legalLastUpdated` in `lib/site-config.ts`. "EVE", "we" and "us" mean EVE Women and Fertility Clinic. Every legal page has a one-paragraph plain summary at the top, then the numbered sections.

---

## Page 40 · Privacy Policy

```yaml
title: "Privacy Policy | EVE Women and Fertility Clinic"
description: "How EVE Women and Fertility Clinic collects, uses, stores and protects your personal data, and your rights under the DPDP Act 2023."
url: /privacy-policy/
lastReviewed: "2026-09-17"
schema: [WebPage]
```

H1: Privacy *Policy*

Last updated: `[date]`

**In short.** We collect only what we need to book your appointment and look after you. We do not sell your data, and we do not publish patient names, photographs or stories. You can ask to see, correct or delete your information at any time.

### 1. Who we are

EVE Women and Fertility Clinic, 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087, Karnataka, run by Dr. Swati Shree. `[CONFIRM: legal entity name]` We decide why and how your personal data is used, which makes us the "data fiduciary" under the Digital Personal Data Protection Act, 2023 (DPDP Act). Privacy contact:`[CONFIRM: name, email, phone]`.

### 2. What we collect

- **Through the website form:** your name, mobile number, age, reason for visit, preferred date and time, town, and, for patients under 18, the guardian's name.
- **At the clinic:** your medical history, examination notes, scans, test results, treatment records, payment details and your partner's details where relevant to care.
- **Automatically:** basic technical data such as pages visited, device and browser type, if you accept analytics cookies. We do not use advertising trackers on medical pages.
- **WhatsApp or phone:** messages and call details you choose to share with us.

Please do not put detailed medical information in the website form. Share it with Dr. Swati at your visit.

### 3. Why we use it

- To arrange and give care, and to contact you about your appointment
- To keep medical records as required by law and good practice
- To issue bills and receipts
- To respond to your questions
- To improve the website, using anonymous statistics
- To comply with the law, including the ART (Regulation) Act, 2021 where treatment falls under it

We ask for your consent where the law requires, and you can withdraw it at any time. Withdrawing consent for the website form does not affect care already given.

### 4. Who sees your data

Only the clinic team who need it for your care. We may share information with a laboratory, an associated ART centre, a radiology centre or another doctor when it is needed for your care, and only with your knowledge. We use service providers for website hosting, email and appointment messages, under contract and security requirements. We do not sell or rent your data. We may disclose information where the law requires it.

### 5. Children

For patients under 18, a parent or legal guardian gives consent for us to use the child's data to arrange care. We do not use children's data for advertising, tracking or behavioural monitoring.

### 6. How long we keep it

- Website enquiries that do not lead to care: up to `[CONFIRM: 12]` months
- Medical records: for the period required by law and professional guidance `[CONFIRM: period]`
- Billing records: as required by tax law
- Records connected with ART treatment: for the period required under the ART Act and rules `[CONFIRM]`

After this, data is deleted or anonymised.

### 7. Security

We use access controls, encrypted connections and limited access to records. No system is completely secure. If a breach affecting your data occurs, we will inform you and the authorities as the law requires.

### 8. Your rights

Under the DPDP Act, you may:
- Ask for a summary of the data we hold and how it is used
- Ask us to correct or complete inaccurate data
- Ask us to erase data we no longer need, subject to legal record-keeping duties
- Withdraw consent
- Seek redress for grievances, first from us, and then from the Data Protection Board of India
- Nominate someone to exercise your rights in case of death or incapacity

Write to `[CONFIRM: privacy email]` or call 72049 21212. We aim to reply within `[CONFIRM: 15]` days.

### 9. Cookies

We use essential cookies for the site to work. Analytics cookies are used only if you accept them. You can change your choice any time under "Cookie settings" in the footer. Maps and videos load only when you click.

### 10. Changes

We may update this policy. The date at the top shows the latest version. The DPDP Act's main duties for data fiduciaries take effect in May 2027, and we are following its requirements now.

### 11. Contact and grievance officer

`[CONFIRM: name, email, phone, address]`

---

## Page 41 · Terms of Use

```yaml
title: "Terms of Use | EVE Women and Fertility Clinic"
description: "The terms for using the EVE Women and Fertility Clinic website, including content, bookings, links and limits of liability."
url: /terms-of-use/
lastReviewed: "2026-09-25"
schema: [WebPage]
```

H1: Terms of *Use*

Last updated: `[date]`

**In short.** This website gives general information and lets you request appointments. It does not give medical advice, and it is not for emergencies. Please read the terms below.

### 1. Acceptance

By using this website, you agree to these terms. If you do not agree, please do not use it.

### 2. What the website is for

The website provides information about EVE Women and Fertility Clinic, Dr. Swati Shree and the care we offer, and lets you ask for an appointment. It is not a substitute for a consultation.

### 3. Not medical advice, not for emergencies

Information on this site is general and educational. It cannot diagnose or treat you. Please do not delay or avoid seeking care because of something you read here. In an emergency, call 108 or 112 or go to the nearest hospital.

### 4. Appointment requests

Submitting the form is a request, not a confirmed appointment. An appointment is confirmed only when we confirm it by phone, WhatsApp or message. See Appointments, Cancellation and Refund.

### 5. Your information

You agree to give accurate details. Do not send emergency messages or detailed medical records through the form. Our Privacy Policy explains how we use your data.

### 6. Content and copyright

All text, images, logos and design on this site belong to EVE Women and Fertility Clinic or its licensors. You may view and print pages for personal use. You may not copy, republish or sell content without written permission. You may link to our pages.

### 7. Treatment and regulation

Fertility treatments such as IUI and IVF are regulated by the ART (Regulation) Act, 2021. Eligibility, consent and counselling rules apply. Nothing on this website promises a particular result.

### 8. Third-party links and services

Links to other sites, maps, social media or video are for convenience. We do not control them and are not responsible for their content or privacy practices.

### 9. Limits of liability

We take care to keep the information accurate and current, but we do not promise that it is complete or error-free. To the extent the law allows, we are not liable for loss arising from your use of the website. Nothing here limits liability that cannot be limited by law, including for medical negligence.

### 10. Changes

We may update the website and these terms. Continued use means you accept the changes.

### 11. Governing law

These terms are governed by the laws of India. Courts at Bangalore `[CONFIRM]` have jurisdiction, subject to the law.

### 12. Contact

`[CONFIRM: email]` · 72049 21212 · 72049 21516

---

## Page 42 · Medical Disclaimer

```yaml
title: "Medical Disclaimer | EVE Women and Fertility Clinic"
description: "General information on this website is educational and does not replace a consultation. Read the medical disclaimer for EVE, Gunjur, Bangalore."
url: /medical-disclaimer/
lastReviewed: "2026-09-16"
schema: [WebPage]
```

H1: Medical *Disclaimer*

Last updated: `[date]`

**In short.** Our pages explain general medical information. They cannot replace a consultation, and results vary from person to person.

### 1. General information only

The content on this website is written for general education and is reviewed by Dr. Swati Shree. It is not individual medical advice, diagnosis or treatment.

### 2. See a doctor about your own health

Every person is different. Your age, history, tests and goals decide the right plan. Please talk to a qualified doctor about your own situation before making any decision about tests, medicines or treatment.

### 3. Emergencies

If you have very heavy bleeding, sudden severe pain, fainting, or any bleeding with pain in early pregnancy, call 108 or 112 or go to the nearest hospital emergency. Do not wait for a clinic appointment.

### 4. No promise of results

No treatment can guarantee a pregnancy or a particular outcome. Where we describe what a treatment may do, we describe what is generally expected, not a promise for you.

### 5. Medicines and procedures

We do not give doses or brand recommendations on this site. Please take medicines only as prescribed. Do not start, stop or change a medicine because of something you read here.

### 6. Evidence changes

Medical knowledge and guidelines change. We review content regularly and show the last review date on each page. If you notice something outdated, please tell us.

### 7. Regulation

IUI, IVF, egg freezing and related treatments are regulated by the ART (Regulation) Act, 2021. Eligibility, consent and registration rules apply. Telling or testing for the sex of an unborn baby is prohibited under the PCPNDT Act, 1994, and we never do it.

### 8. Third-party content

Links and references to other sources are for information. We are not responsible for their accuracy.

---

## Page 43 · Editorial and Medical Review Policy

```yaml
title: "Editorial and Medical Review Policy | EVE Clinic"
description: "How EVE writes, sources, reviews and updates its medical content, who reviews it, and how to report an error."
url: /editorial-policy/
lastReviewed: "2026-09-14"
schema: [WebPage]
```

H1: Editorial and medical review *policy*

Last updated: `[date]`

**In short.** Every medical page is written for patients, based on named guidelines, and reviewed by Dr. Swati Shree before it is published. We show the review date and the sources.

### 1. Why this matters

Fertility and women's health decisions are important. People need information they can trust, so we explain how our content is made.

### 2. Who writes and reviews

- **Written by:** Pages are drafted by the clinic's content team with the help of AI writing tools, then checked, edited and approved by Dr. Swati Shree before publication. No patient photographs, stories or reviews on this site are AI-generated.
- **Medically reviewed by:** Dr. Swati Shree, MBBS, DNB (OBG), MRCOG (UK), Karnataka Medical Council Reg. No. DLH20090000353KTK
- Her review checks accuracy, tone, and whether the page matches how she practises

### 3. Sources we use

- International and Indian clinical guidelines, such as those of ESHRE, ASRM, NICE, RCOG, WHO, FIGO, ICMR and FOGSI
- Indian law and regulations, such as the ART (Regulation) Act, 2021
- Peer-reviewed studies, where guidelines are silent

Each page lists its main sources. We do not use patient testimonials as evidence.

### 4. How we write

- Plain language, with medical terms explained
- No exaggerated claims, no outcome promises, no success-rate marketing
- Honest limits: we say what a test or treatment cannot do
- Statistics only with a named source

### 5. Updates

Pages are reviewed at least once a year, and sooner when guidelines or laws change. The "last reviewed" date shows the latest review. If we correct an error, we update the page.

### 6. What we do not do

- We do not accept payment from drug or device companies to change content
- We do not name drug brands or devices
- We do not publish patient stories or reviews, in line with Indian medical advertising rules
- We do not tell you the sex of a baby, ever

### 7. Advertising and independence

This website carries no third-party advertising. Content is funded by the clinic. Our content team does not receive commission from any treatment decision.

### 8. Report an error

If you find something inaccurate or out of date, please write to`[CONFIRM: email]`. We review reports within `[CONFIRM: 7]` working days.

---

## Page 44 · Patient Rights and Responsibilities

```yaml
title: "Patient Rights and Responsibilities | EVE Clinic"
description: "Your rights as a patient at EVE Women and Fertility Clinic, including consent, privacy and information, and what we ask of you."
url: /patient-rights/
lastReviewed: "2026-09-16"
schema: [WebPage]
```

H1: Patient rights and *responsibilities*

Last updated: `[date]`

**In short.** You have the right to be treated with respect, to understand your care, to say no, and to have your privacy protected. This page follows the Charter of Patients' Rights, and a copy is displayed at the clinic`[CONFIRM]`.

### Your rights

1. **Respect and dignity.** You will be treated with courtesy, without discrimination on grounds of religion, caste, gender, marital status, sexual orientation, disability or any other ground.
2. **Information.** You have the right to clear, honest information about your diagnosis, options, risks, benefits, likely costs and alternatives, in a language you understand.
3. **Informed consent.** No treatment starts without your consent. For ART treatment, written consent and counselling are required by law. You may withdraw consent at any time before a procedure.
4. **Privacy and confidentiality.** Your records and conversations are confidential and shared only as the law allows or with your permission. You may ask for a chaperone during an examination.
5. **Second opinion and records.** You may seek a second opinion, and you may ask for copies of your reports and records.
6. **Costs.** You have the right to know the fees and an estimate before treatment. `[CONFIRM: fee display policy]`
7. **Safe care.** You have the right to safe care, in a clean setting, with trained people.
8. **Feedback.** You may give feedback or make a complaint without fear of changes to your care.
9. **Partner and family.** You decide who joins your consultations.

### Your responsibilities

1. Give accurate information about your health, medicines and history
2. Follow the plan you agree on, or tell us if you cannot
3. Keep appointments, or tell us in time if you need to change
4. Treat staff and other patients with respect
5. Pay agreed fees
6. Respect clinic rules on safety and privacy, including not recording others

### ART-specific points

IUI, IVF and related treatments are regulated by the ART (Regulation) Act, 2021. You will be counselled, and asked for written consent. Sex selection is prohibited. Our ART registration number is`[CONFIRM]`.

### Making a complaint

Speak to Dr. Swati or the front desk first. You may also write to`[CONFIRM: email]`. If you remain unsatisfied, you may approach the Karnataka Medical Council, the District Health Officer, or a consumer forum.

---

## Page 45 · Appointments, Cancellation and Refund

```yaml
title: "Appointments, Cancellation and Refund | EVE Clinic"
description: "How booking works at EVE Women and Fertility Clinic, how to reschedule or cancel, and when fees are refunded."
url: /appointments-cancellation-refund/
lastReviewed: "2026-09-02"
schema: [WebPage]
```

H1: Appointments, cancellation and *refund*

Last updated: `[date]`

**In short.** A website request is confirmed only when we confirm it. Tell us early if you need to change, and we will help where we can. Mistaken payments are refunded.

### 1. Booking

- Request an appointment through the form, by phone (72049 21212 or 72049 21516) or on WhatsApp.
- We aim to reply within 24 hours. Your appointment is confirmed when we confirm the date and time.
- Please arrive about `[CONFIRM: 10]` minutes early for registration.

### 2. Consultation fees and payment

Fees are told to you before the consultation`[CONFIRM: fee policy]`. We accept`[CONFIRM: cash, UPI, cards]`. A receipt is given for every payment.

### 3. Rescheduling

You can change your appointment by calling or messaging us, preferably at least `[CONFIRM: 24]` hours before. We will offer the next available time.

### 4. Cancellation and no-show

- Cancel as early as you can, so another patient can use the slot.
- If you do not attend and do not tell us, we may ask you to rebook. `[CONFIRM: any fee for late cancellation or no-show]`

### 5. Treatment cycles

Timed treatments, such as follicular monitoring or IUI, depend on your cycle. If a date needs to move because of your cycle or a medical reason, we will tell you why and plan a new date. Fees and refunds for a treatment cycle are explained in the written estimate you receive before starting. `[CONFIRM: policy for cancelled or incomplete cycles]`

### 6. Refunds

- If you paid in advance and we cancel, you get a full refund or a new appointment, as you prefer.
- If you paid by mistake, or twice, we refund the extra amount within `[CONFIRM: 7]` working days.
- Fees for services already given are not refundable.
- Refunds go back to the original payment method.

### 7. If we are late or need to change

We try to keep to time. Procedures and emergencies may cause delay. If we need to reschedule, we will tell you as early as we can.

### 8. Contact

Questions about a booking or payment: 72049 21212 · `[CONFIRM: email]`

---

## Page 46 · Accessibility Statement

```yaml
title: "Accessibility Statement | EVE Women and Fertility Clinic"
description: "How EVE works to make its website and clinic accessible to everyone, what we have done, known gaps and how to ask for help."
url: /accessibility/
lastReviewed: "2026-09-02"
schema: [WebPage]
```

H1: Accessibility *statement*

Last updated: `[date]`

**In short.** We want everyone to be able to use this website and visit the clinic. We aim to meet WCAG 2.2 level AA, and we welcome your feedback.

### 1. Our aim

EVE Women and Fertility Clinic wants people of all abilities to find information and book care easily. This website is built to meet the Web Content Accessibility Guidelines (WCAG) 2.2, level AA, and to follow the Guidelines for Indian Government Websites (GIGW) principles where relevant.

### 2. What we have done

- Text and background colours checked for contrast
- A visible keyboard focus and logical tab order
- Descriptive page titles, headings and link text
- Alt text on meaningful images
- Forms with clear labels and error messages
- Text that can be enlarged with the A / A+ control or browser zoom, up to 200 percent
- Videos and maps load only when you click, and do not play automatically
- Reduced motion respected for users who ask for it
- Works on mobile screens and with screen readers

### 3. Known limits

- Some PDF documents may not be fully accessible `[CONFIRM: if any]`
- Third-party maps and embedded content may not fully meet the standard

We are working on these.

### 4. At the clinic

`[CONFIRM: lift or stairs to 1st floor, ramp, wheelchair access, accessible washroom, seating, assistance available]`

If you need support, such as a wheelchair, an assistant, or a quiet time to visit, tell us when you book.

### 5. Language and reading level

The site is in English, written in plain language. Dr. Swati and the team can speak in English, Hindi and Kannada at the clinic.

### 6. Tell us about a problem

If you find something you cannot use or read, please write to `[CONFIRM: email]` or call 72049 21212. Tell us the page and what went wrong. We aim to reply within `[CONFIRM: 7]` working days, and to fix the issue or give you another way to get the information.

### 7. Date of this statement

This statement was prepared on `[date]` using our own review`[CONFIRM: and an independent audit, if done]`.

---
# Part 6 · Blog launch articles (3 posts)

Each post: title, author chip (Dr. Swati Shree), "Published [date] · Updated [date]", "In brief" box, body (68ch), callouts, FAQs + FAQPage schema, reviewer box, 3 related service cards + 2 related posts. Cover: designed gradient + the post badge (never a photo with text). Schema: `BlogPosting` + `MedicalWebPage`, `citation`, `FAQPage`.

---

## Post 1 · Fertility tests explained

```yaml
title: "Fertility Tests Explained: AMH, Semen, HSG, Scans"
description: "What each fertility test measures, what the numbers mean and what they cannot tell you: AMH, antral follicle count, semen analysis, HSG and thyroid tests."
url: /blog/fertility-tests-explained/
lastReviewed: "2026-09-03"
category: Getting started
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-09-03"
dateModified: "2026-09-03"
badge: fertility-evaluation
readingTime: 7
related: [/services/fertility-evaluation/, /services/tubal-patency-test-hsg/, /services/male-fertility-evaluation/]
posts: [/blog/female-infertility-tests-amh-ultrasound-hsg/]
```

H1: Fertility tests explained: AMH, semen analysis, HSG and *scans*

**In brief**
- A fertility evaluation checks ovulation, egg reserve, the tubes, the uterus and the male partner's semen.
- AMH and the antral follicle count estimate egg number, not egg quality.
- A semen analysis is simple, and should be done early. The WHO 2021 lower reference limit for concentration is 16 million per mL.
- An HSG shows if the fallopian tubes are open.
- Thyroid and prolactin tests find common, treatable causes.
- Test results are read together with your age and history, never alone.

### Why testing comes before treatment

When conception takes time, it is natural to want a treatment. But treatment works best when it matches the cause. A test that finds a blocked tube, a low sperm count or an underactive thyroid changes what you should do next. That is why Dr. Swati Shree at EVE Women and Fertility Clinic in Bangalore begins with a full evaluation of both partners.

### The tests, one by one

| Test | What it tells you | What it cannot tell you |
|---|---|---|
| AMH (blood) | Roughly how many small follicles remain | Egg quality, or whether you will conceive |
| Antral follicle count (scan) | Follicles seen early in the cycle | Whether the tubes are open |
| Pelvic ultrasound | Shape of uterus, fibroids, polyps, cysts | Egg quality, tube function |
| Thyroid (TSH) | Underactive or overactive thyroid | Other hormone issues |
| Prolactin | A hormone that can stop ovulation | |
| FSH, LH, estradiol | Ovarian and pituitary hormone balance | |
| HSG or contrast ultrasound | Whether the tubes are open | How well the tubes move the egg |
| Semen analysis | Count, movement and shape of sperm | How well sperm fertilise an egg |
| Mid-luteal progesterone or follicle tracking | Whether you ovulate | |

### AMH: what it is and is not

AMH is made by small follicles in the ovaries. A lower value suggests fewer eggs, and a higher value suggests more. It can be tested any day of the cycle. It is helpful to plan IVF stimulation and to decide how soon to act. It does not predict whether you will conceive naturally, because egg quality depends mainly on age. A low AMH in a young woman is not a reason to give up.

### The semen analysis

The semen analysis checks volume, concentration, motility and shape of sperm. The WHO 2021 manual gives lower reference limits, such as 16 million per mL for concentration and 42 percent for total motility. These are limits seen in fertile men, not pass marks. For a good sample, abstain for 2 to 7 days, collect in the container supplied, and deliver it promptly. If the result is abnormal, repeat after about 2 to 3 months, because sperm production takes about three months.

### HSG: checking the tubes

If both tubes are blocked, natural conception and IUI are unlikely to work. An HSG is a quick X-ray test, done after your period ends and before ovulation. It may cause cramps for a few minutes. It is not done if pregnancy is possible. See the HSG page for detail.

### What happens if everything is normal?

About one in four to one in three couples have no cause found. This is unexplained infertility, and it is common. It does not mean nothing can be done. Timed attempts, IUI or IVF are options that depend on your age and time trying.

### How to prepare

- Come together, with earlier reports
- Note the first day of your last three periods
- Do blood tests and scans on the cycle days advised
- Do not self-start medicines before the evaluation

### FAQs

1. **Which fertility test should I do first?**
   Usually a pelvic ultrasound with an antral follicle count, an AMH blood test, thyroid and prolactin tests, and a semen analysis for the male partner. The tubal check follows at the right cycle day. Dr. Swati orders what fits your history, so you do only tests that help.
2. **Can I do an AMH test on any day?**
   Yes. AMH varies little through the cycle, so it can be tested on any day. Some other hormones, such as FSH and estradiol, are best on day 2 or 3. The scan for antral follicle count is also done early in the cycle.
3. **Is a normal semen analysis enough to rule out male factor?**
   A normal result is reassuring, but sperm counts vary. If your partner's result is borderline or if fertility is still a problem, a repeat test is sensible. The test does not show how well sperm function in fertilisation.
4. **Does a low AMH mean I cannot get pregnant?**
   No. AMH shows how many eggs remain, not how good they are. Many women with low AMH conceive. It does mean that time may be shorter and that fewer eggs may be collected in IVF. Dr. Swati advises on timing.
5. **Do I need all these tests?**
   Not always. Dr. Swati chooses tests after hearing your history. Some couples need fewer, and some need more. If something is not helpful for you, she will tell you, and explain why.

### Sources
- WHO laboratory manual for the examination and processing of human semen, 6th edition (2021)
- ASRM Practice Committee, Testing and interpreting measures of ovarian reserve (2015)
- NICE Guideline CG156
- ESHRE Guideline: Unexplained infertility (2023)

Reviewer box: use global text.

---

## Post 2 · PCOS and getting pregnant

```yaml
title: "PCOS and Getting Pregnant: Evidence, Options and Care"
description: "PCOS and getting pregnant: what the evidence says about ovulation, lifestyle, letrozole, IUI and IVF, and which path suits you. By Dr. Swati Shree."
url: /blog/pcos-and-getting-pregnant/
lastReviewed: "2026-09-04"
category: Conditions
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-09-04"
dateModified: "2026-09-04"
badge: pcos
readingTime: 7
related: [/conditions/pcos/, /services/follicular-monitoring/, /conditions/thyroid-and-fertility/]
posts: [/blog/pcos-pregnancy-natural-conception/]
```

H1: PCOS and getting pregnant: what the evidence *says*

**In brief**
- PCOS is one of the most treatable causes of infertility.
- It makes ovulation irregular, but most women with PCOS can conceive.
- Lifestyle change is the first step, and a 5 to 10 percent weight loss helps when weight is raised.
- Ovulation-inducing medicine, with monitoring, is the usual next step.
- IUI or IVF is considered if other steps do not work, or if another cause is present.
- Check your thyroid, sugar and partner's semen before long treatment.

### What PCOS does to fertility

In PCOS, the ovaries do not release an egg regularly. The cycle may be long, or you may skip periods. Without ovulation, there is no egg to fertilise. This is the main reason for the difficulty in conceiving, and it is also why treatment is so effective: when ovulation is restored, pregnancy often follows.

### Step 1: Lifestyle that is realistic

- If weight is raised, aim for a modest loss of 5 to 10 percent. This alone can restore ovulation in some women.
- Eat regular meals with whole grains, pulses, vegetables and protein, and cut sweet drinks. There is no single "PCOS diet".
- Move most days. Walking, cycling, yoga and strength work all help insulin.
- Sleep well, and take care of stress.
- Stop smoking and keep alcohol low.
- Take folic acid, as advised, before you conceive.

Dr. Swati sets goals that are kind and realistic. Weight is not a moral failing, and lean women with PCOS also benefit from healthy habits.

### Step 2: Check the rest

Before treatment goes on for months, check your thyroid, prolactin and sugar, the tubes if indicated, and your partner's semen. A second cause missed is a common reason that treatment does not work.

### Step 3: Ovulation induction

Medicine can prompt the ovary to release an egg. In PCOS, letrozole is widely used as a first-line medicine, according to the 2023 international guideline, and the choice and the dose are decided by your doctor. The cycle is monitored with follicular scans, to avoid too many follicles, which raises the chance of twins. If one cycle does not work, the plan is reviewed, not simply repeated forever.

### Step 4: IUI and IVF

If ovulation induction does not lead to pregnancy after a few cycles, or if another cause is present, IUI or IVF may be advised. Women with PCOS respond strongly to IVF stimulation, so protocols are chosen to reduce the risk of ovarian hyperstimulation.

### Things that do not help

- Taking leftover medicines or supplements without advice
- Crash diets and long fasting
- Costly "PCOS cure" packages, which no treatment can honestly promise
- Delaying a check for a year or more when periods are very irregular

### FAQs

1. **Can I get pregnant naturally with PCOS?**
   Yes, some women do, especially when cycles are only mildly irregular or after lifestyle changes. Ovulation may be unpredictable, so tracking helps. If you have not conceived after 6 to 12 months, see a doctor, because treatment is effective and time is valuable.
2. **Is weight loss necessary to get pregnant with PCOS?**
   It is not necessary for everyone. When weight is raised, a 5 to 10 percent loss can restore ovulation and improve pregnancy outcomes. Lean women with PCOS benefit more from regular activity and a balanced diet. Dr. Swati advises based on your own picture.
3. **Does PCOS increase miscarriage risk?**
         Some studies show a slightly higher risk, linked to weight, insulin resistance and age. Good sugar control and a healthy weight lower it. Many women with PCOS have healthy pregnancies. Early care and monitoring help. The risk is slightly higher, mainly when insulin resistance or other factors are also present. Good control of weight, sugar and thyroid before conception lowers it. Your doctor will explain what applies to you.
4. **Is IVF always needed in PCOS?**
   No. Many women with PCOS conceive with ovulation induction or IUI. IVF is considered when these do not work, or when there is a tubal or male factor. Dr. Swati will not recommend IVF before simpler steps have been tried, unless your tests point that way.
5. **Will PCOS affect my pregnancy?**
   PCOS raises the chance of gestational diabetes and high blood pressure in pregnancy. Early checks, healthy habits and regular antenatal care manage these well. Dr. Swati advises on a plan during pregnancy.

### Sources
- International evidence-based guideline for the assessment and management of PCOS (2023)
- ESHRE Guideline: Ovarian stimulation for IVF/ICSI (2020)
- ASRM Practice Committee guidance on ovulation induction

Reviewer box: use global text.

---

## Post 3 · When to see a fertility doctor

```yaml
title: "When to See a Fertility Doctor: Signs You Shouldn't Wait"
description: "When to see a fertility specialist: the 12-month and 6-month rules, signs to act sooner, what to bring, and what happens at the first visit."
url: /blog/when-to-see-a-fertility-doctor/
lastReviewed: "2026-09-04"
category: Getting started
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-09-04"
dateModified: "2026-09-04"
badge: natural-conception
readingTime: 6
related: [/your-fertility-journey/, /services/fertility-evaluation/, /treatments/egg-freezing/]
posts: [/blog/how-long-try-conceive-before-fertility-specialist/]
```

H1: When to see a fertility doctor: 12 months, 6 months, or *sooner*

**In brief**
- Infertility is defined as no pregnancy after 12 months of regular unprotected intercourse.
- If the woman is 35 or older, see a doctor after 6 months.
- See someone sooner if periods are very irregular, if there is known endometriosis, fibroids or tubal disease, after two or more miscarriages, or with a known sperm problem.
- Both partners should be evaluated together.
- Going early does not mean starting IVF. It means finding out.

### The 12-month rule

About 8 in 10 couples conceive within a year of trying regularly, and more in the second year. That is why most guidelines define infertility after 12 months. It is not a signal to panic at month 11, and it is not a reason to wait if there are other concerns.

### The 6-month rule after 35

Egg number and quality decline faster after 35, so there is less time to lose. The advice is to see a doctor after 6 months of trying, and some doctors suggest even earlier after about 38 to 40. An early evaluation, even if you do not need treatment, gives you a plan.

### Reasons to go sooner

- Periods are very irregular, or you have gone more than 3 months without one
- Known endometriosis, fibroids, PCOS or pelvic infection
- Past surgery on the ovaries, tubes or uterus
- Two or more miscarriages
- A known low sperm count, past testicular problem, or cancer treatment
- You have had chemotherapy or radiation
- You plan to delay pregnancy and want to know your options, including egg freezing

### What happens at the first visit

At EVE Women and Fertility Clinic, Dr. Swati Shree begins with a long conversation. She asks about both of you, examines, and plans tests for the right days of your cycle. You leave with a plan and the reasons for it. See Your fertility journey and Fertility evaluation.

### What you can do while you wait

- Have intercourse every one to two days in the fertile window
- Take folic acid
- Stop smoking, and limit alcohol
- Aim for a healthy weight
- Avoid steroid or testosterone products
- Keep thyroid and diabetes controlled

### FAQs

1. **How long should I try before seeing a doctor?**
   Twelve months of regular unprotected intercourse for most couples, and six months if the woman is 35 or older. Go sooner if your periods are very irregular, you have a known condition, or you have had miscarriages. An early visit is allowed whatever your worry.
2. **Do I have to start IVF if I see a fertility doctor?**
   No. The first visit is for evaluation. Many couples conceive with simple steps such as treating a thyroid problem, ovulation tracking or medicine for ovulation. IVF is advised only when it fits your situation. Dr. Swati does not default to it.
3. **Should my husband or partner come too?**
   Yes, if possible. A male factor contributes to about half of couples' infertility, and a semen analysis is simple. Coming together saves time and gives a complete picture. If your partner cannot come, you can start, and he can join later.
4. **Is it too early to see a doctor if I am in my twenties?**
   Not if you have concerns. If you are under 35 and healthy, the 12-month rule applies. If you have irregular periods or a medical condition, there is no need to wait. A planning visit before you try can also help.
5. **I want to delay pregnancy. Should I see a fertility doctor?**
   It can help. A check of AMH and antral follicle count, plus a talk about egg freezing, gives you information. Age matters most, and the earlier you ask, the more options you have. Dr. Swati explains what is realistic, without pressure.

### Sources
- ASRM Practice Committee, Definition of infertility (2023)
- ESHRE Guideline: Unexplained infertility (2023)
- NICE Guideline CG156: Fertility problems

Reviewer box: use global text.

---

## Post 4 · IVF Treatment Guide

```yaml
title: "IVF Treatment in Bangalore: Eligibility, Process, Pregnancy"
description: "Who needs IVF, what happens from the first injection to embryo transfer, the risks worth knowing, and how early pregnancy after IVF is monitored."
url: /blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/
lastReviewed: "2026-10-01"
category: "IVF Treatment"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-01"
dateModified: "2026-10-01"
badge: fertility-evaluation
readingTime: 18
cluster: "IVF Treatment"
pillar: true
keywords: []
about: {type: MedicalTherapy, name: "In vitro fertilization", alternateName: ["IVF"]}
related: [/treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/low-amh-ovarian-reserve-fertility/, /blog/iui-treatment-intrauterine-insemination/, /blog/pregnancy-after-ivf/, /blog/ivf-process-step-by-step-consultation-embryo-transfer/, /blog/ivf-success-factors-age-egg-quality-sperm-embryos/, /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/]
```

H1: IVF Treatment Guide: Eligibility, Process and Pregnancy

> **Quick answer:** IVF combines eggs and sperm in a laboratory to create embryos, then places an embryo in the uterus. Doctors may suggest it for blocked tubes, severe male infertility, endometriosis, low ovarian reserve or unexplained infertility, or after IUI hasn't worked. One fresh cycle usually takes four to six weeks from the first injection to the pregnancy blood test.

IVF, or in vitro fertilisation, is a fertility treatment in which a woman's eggs are collected and fertilised with sperm in a laboratory. A few days later, an embryo is placed inside her uterus, where it may implant and develop into a pregnancy. In India it's often called "test tube baby" treatment, though the embryo spends those first days in a small culture dish, not a tube.

Doctors use IVF for a wide range of fertility problems. Blocked fallopian tubes, a low sperm count, endometriosis and infertility with no obvious cause are among the most common reasons.

Maybe a doctor has just mentioned IVF to you. Or maybe you've been trying for a while and want to know what the treatment involves before you sit across from a specialist. Either way, the sections below cover eligibility, each stage of a cycle, the risks, and what happens once a pregnancy test comes back positive.

### What is IVF and how does it work?

Think about how conception happens naturally. Each month the ovary releases one egg, which is picked up by the fallopian tube. Sperm has to swim up to meet it there. If fertilisation happens, the early embryo drifts down into the uterus over several days and tries to implant.

A lot can go wrong along that route. The tube may be blocked. There may be too few healthy sperm to reach the egg. Ovulation may be irregular.

IVF takes the hardest parts of the process out of the body. Hormone medicines help several eggs mature in one cycle instead of just one. Those eggs are collected, fertilised in the lab, and watched as they grow. The doctor then transfers an embryo straight into the uterus, so it never needs to pass through the tubes at all.

## Is IVF the same as a test tube baby?

Yes, the two terms mean the same treatment. Only fertilisation and roughly the first five days of growth happen in the lab. After transfer, the pregnancy develops inside the mother exactly as any other pregnancy would.

## How is ICSI different from IVF?

ICSI (intracytoplasmic sperm injection) is a lab technique used as part of an IVF cycle, not a separate treatment. With standard IVF, the embryologist places each egg in a dish with many prepared sperm and lets fertilisation happen by itself. With ICSI, the embryologist picks out one sperm and injects it directly into the egg.

It's mainly used when sperm count, movement or shape is very poor, or when eggs didn't fertilise well in an earlier IVF attempt.

### Who may need IVF treatment?

IVF usually isn't the first thing a fertility specialist tries. Plenty of couples conceive with ovulation tablets or IUI (intrauterine insemination), which are simpler and cost less. IVF tends to come in when those options are unlikely to work for a particular diagnosis, or when they've already been tried without success.

The situations where IVF is most often discussed include the following.
- Fallopian tubes that are blocked or damaged, for example after a pelvic infection, a previous ectopic pregnancy or surgery
- Severe male factor infertility, such as a very low sperm count or very few moving sperm
- Endometriosis, particularly when it's moderate to severe or involves the tubes and ovaries
- Low ovarian reserve, often picked up through a low AMH result
- PCOS that hasn't responded to ovulation medicines or IUI
- Unexplained infertility after a reasonable period of trying or a few IUI cycles
- Fertility decline linked to age, especially in the late 30s and 40s
- Certain genetic conditions where testing embryos may be discussed
- Freezing eggs or embryos before cancer treatment

A diagnosis on its own doesn't settle the question. Two women with endometriosis can have very different plans depending on age, AMH, the state of the tubes and the husband's semen report. That's why the decision is made after testing, not before.

## Should you try IUI first?

Sometimes it makes sense, and sometimes it would only waste time. IUI can work reasonably well for younger women with mild sperm issues, ovulation problems or unexplained infertility. It can't help if both tubes are blocked, because the egg and sperm still need to meet inside the tube. It also does little for severe sperm problems.

|  | IUI | IVF |
|---|---|---|
| Where fertilisation happens | Inside the body | In the laboratory |
| Medicines | Mild ovulation medicines, or none | Daily hormone injections for around 8 to 14 days |
| Main procedure | Washed sperm placed in the uterus | Egg collection under sedation, then embryo transfer |
| Needs at least one open tube | Yes | No |
| Helps with severe sperm problems | Rarely | Yes, often with ICSI |
| Cost and intensity | Lower | Higher |


## Is IVF regulated in India?

It is. The Assisted Reproductive Technology (Regulation) Act, 2021 governs IVF clinics and banks in India. Clinics have to be registered, and the law covers consent, donors, record keeping and who can access treatment. Eligibility can turn on individual circumstances, so it's worth raising any questions about it directly with your clinic.

### What tests are done before IVF?

Both partners get tested. The results tell your doctor what's causing the difficulty and help decide how much medicine to use, whether ICSI is needed, and whether anything in the uterus should be corrected first.

| Test | For | Why it's done |
|---|---|---|
| AMH blood test | Woman | Gives an estimate of how many eggs remain (ovarian reserve) |
| Antral follicle count scan | Woman | Counts small follicles in the ovaries early in the cycle |
| Day 2 or 3 hormones (FSH, LH, estradiol) | Woman | Shows how the ovaries and pituitary are working |
| TSH and prolactin | Woman | Picks up thyroid and prolactin problems that affect fertility and pregnancy |
| Transvaginal ultrasound | Woman | Looks for fibroids, polyps, cysts and checks the uterus |
| HSG or another tube test | Woman, if needed | Checks whether the tubes are open |
| Semen analysis | Man | Measures sperm count, movement and shape |
| HIV, hepatitis B and C and other screening | Both | Needed for safe handling of eggs, sperm and embryos |


If the scan hints at a polyp or something inside the uterine cavity, your doctor may suggest a hysteroscopy. A thin camera is passed through the cervix to look directly inside, and small problems can often be removed at the same time.

### What happens during an IVF cycle?

Clinics differ in the details, but most IVF cycles follow the same broad sequence.

## Step 1. Planning your treatment

Your doctor goes through your history, test results and any previous treatment. You'll talk about which stimulation protocol suits you, whether ICSI will be used, and whether a fresh or frozen transfer is more likely. Bring up costs and timelines here too. It's far easier to plan leave from work and family commitments when you know the dates in advance.

## Step 2. Stimulating the ovaries

For roughly 8 to 14 days you'll take daily hormone injections that encourage several follicles to grow at once. (A follicle is a small fluid-filled sac in the ovary that holds an egg.) Another medicine is added partway through to stop the eggs being released too early.

Most of these are small injections given just under the skin of the belly. A nurse will show you how, and a lot of women end up doing them at home in a couple of minutes. Expect some bloating, tender breasts, tiredness and mood swings during these days.

## Step 3. Monitoring

You'll come in every two or three days for a transvaginal scan, often with a blood test. The scans show how many follicles are growing and how fast, and your doctor uses them to adjust the dose. This is the same follicle monitoring, or follicular study, that's done in IUI cycles.

## Step 4. The trigger injection

Once enough follicles reach the right size, you get one final injection to help the eggs finish maturing. Egg collection is booked for about 34 to 36 hours afterwards. The timing matters a great deal here, so take this injection at exactly the hour your clinic gives you.

## Step 5. Egg collection

Egg collection, also called ovum pick-up, takes around 15 to 30 minutes. You're given sedation or light anaesthesia, so you won't feel the procedure. Guided by ultrasound, the doctor passes a fine needle through the vaginal wall into each follicle and draws out the fluid, which the embryologist checks for eggs.

Most women go home the same day. Cramping and a little spotting for a day or two are common.

Don't be thrown if the number of eggs is lower than the number of follicles seen on the scan. Some follicles are empty, and some eggs collected won't be mature enough to use.

## Step 6. Fertilisation and embryo growth

The same day, your husband gives a semen sample, unless frozen or surgically retrieved sperm is being used. The eggs are fertilised by standard IVF or by ICSI.

Over the next three to five days the embryologist watches how the embryos divide. An embryo that keeps developing to day 5 or 6 is called a blastocyst, and many clinics prefer to transfer at this stage. Numbers usually drop each day as some embryos stop growing. Your clinic will call to update you, and the drop is expected.

## Step 7. Embryo transfer

Transfer is quick and usually needs no anaesthesia. Most women compare it to a Pap smear. The doctor slides a very thin, soft catheter through the cervix under ultrasound guidance and releases the embryo inside the uterus. You may be asked to arrive with a fairly full bladder because it gives a clearer view on the scan.

## Step 8. Waiting for the test

After transfer you'll usually take hormone support, most often progesterone, to support the lining of the uterus. The pregnancy blood test, called a beta hCG, is generally done 9 to 14 days after transfer, depending on the embryo's stage and your clinic's routine.

Try not to test at home before then. The trigger injection can leave enough hCG-like hormone in your body to show a false positive in the first days, and a test taken too early can just as easily show a false negative.

## How long does the whole thing take?

| Stage | Roughly how long |
|---|---|
| Tests and planning | 2 to 4 weeks, sometimes more |
| Injections | 8 to 14 days |
| Trigger to egg collection | 34 to 36 hours |
| Embryo culture | 3 to 5 days |
| Transfer to blood test | 9 to 14 days |


So once injections begin, a fresh cycle takes about four to six weeks to reach the pregnancy test. If the embryos are frozen and transferred later, add another month or more.

### Fresh or frozen embryo transfer?

With a fresh transfer, the embryo goes in a few days after egg collection, in the same cycle. With a frozen embryo transfer (FET), the embryos are frozen by a fast-freezing method called vitrification and transferred in a later month once the uterine lining has been prepared, either in a natural cycle or with hormone tablets.

|  | Fresh transfer | Frozen transfer |
|---|---|---|
| When | 3 to 5 days after egg collection | A later cycle |
| Hormone levels at transfer | Still raised from the injections | Closer to normal |
| OHSS risk | Can be higher in women at risk | Lower |
| Often chosen when | Response was normal with no warning signs | OHSS risk is high, the lining isn't ready, or embryos are being tested |


Neither one is the better choice for everybody. Your doctor decides based on how your ovaries responded and how your hormone levels look around egg collection. A practical advantage of freezing is that any extra good embryos can be stored, so a second transfer may not require another round of injections.

### How many embryos should be transferred?

The move worldwide has been towards transferring one embryo at a time, particularly for younger women with a good-quality blastocyst. Putting back two or more raises the odds of twins or triplets, and carrying multiples brings higher risks of premature birth, high blood pressure and diabetes in pregnancy.

You and your doctor will decide together, looking at your age, embryo quality, earlier cycles and the limits set under Indian law.

### What affects the chances of IVF working?

No clinic can promise that IVF will result in a baby. What's possible is to understand the factors in your own case.

Age matters more than anything else. A woman's eggs fall in both number and quality as she gets older, and the change speeds up after 35. That's why two couples with the same diagnosis can have quite different outlooks.

Ovarian reserve plays a part too. AMH and the antral follicle count help predict how many eggs might be collected, though neither says much about egg quality. Embryo development matters, and embryos that reach the blastocyst stage generally implant more often. Sperm quality affects fertilisation and early growth, although ICSI can work around many sperm problems.

Then there's the uterus. Polyps, fibroids inside the cavity, scarring or a thin lining can make implantation harder, and some of these can be treated beforehand. Smoking, heavy drinking, and being very overweight or underweight also tend to lower the chances.

The success rates you see online are averages pooled across thousands of women of different ages and diagnoses. They may tell you very little about your own situation. A better question to put to your doctor is what your particular results suggest.

### What are the risks and side effects of IVF?

For most women IVF goes smoothly, but there are some risks you should know before you start.

## Ovarian hyperstimulation syndrome (OHSS)

OHSS happens when the ovaries overreact to the stimulation medicines. In its mild form you feel bloated and uncomfortable, and it settles in a few days. Severe OHSS is uncommon. Fluid can collect in the abdomen and sometimes around the lungs, and it needs hospital care. Women with PCOS or a high AMH are more prone to it. Doctors lower the risk by choosing the right protocol and trigger, and by freezing all embryos instead of transferring fresh when the risk is high.

## Twins and triplets

The main cause is transferring more than one embryo. Transferring one at a time keeps this risk low.

## Ectopic pregnancy

A pregnancy can still implant outside the uterus after IVF, most often in a tube. The early scan is partly there to rule this out.

## Complications from egg collection

Bleeding, infection or injury to nearby organs can happen, but they're rare.

## Side effects of the medicines

Headaches, hot flushes, bloating, mood changes and soreness where you inject are all common and usually pass once the injections stop.

## The emotional load

Nobody warns you how tiring the waiting is. Waiting for scan results, waiting for the call from the lab, waiting through the two weeks after transfer. Add the cost and questions from relatives, and it's a lot to carry. Feeling worn down during IVF is common, and it says nothing about your strength.

## Are babies born through IVF healthy?

The large majority are healthy and grow up like any other child. Some studies have found slightly higher rates of certain pregnancy complications after IVF, though part of that seems to relate to the underlying infertility, not the treatment itself. Your doctor can explain how this applies to you.

### What happens after a positive IVF pregnancy test?

A positive result is the start of a few weeks of closer follow-up.

Your doctor may repeat the hCG blood test after two or three days to check that the level is rising the way it should. Keep taking your hormone support until you're told to stop. Stopping progesterone or other medicines on your own can be risky.

A transvaginal scan is usually done about two to three weeks after the positive test. It confirms that the pregnancy is inside the uterus and, often, shows a heartbeat. Once things look settled, your care moves to regular antenatal visits with your obstetrician.

Some spotting is quite common in early IVF pregnancies. Still, tell your doctor about any bleeding or pain so it can be checked.

### What if the cycle doesn't work?

Sometimes good embryos don't implant, and nobody can fully explain why. When a cycle ends without a pregnancy, the disappointment can be heavy. Give yourselves time before deciding anything.

When you're ready, a follow-up consultation looks back at the whole cycle. How did the ovaries respond? How many eggs were mature? How did the embryos grow? Was the lining a good thickness? Sometimes more tests are needed. Many couples go on to conceive from a frozen embryo saved from the same cycle, or in a later cycle with a changed plan.

If your earlier IVF was at another centre, a second opinion can help you see whether anything should be done differently.

### Diet, lifestyle and coping during IVF

There's no special IVF diet, whatever you may read on social media. Ordinary home food does the job. Dal, sabzi, curd, eggs or other protein, fruit, and whole grains such as millets, brown rice or rotis made from whole wheat give you what you need. If you have PCOS, cutting back on sweets, fried snacks and packaged food helps more than any supplement.

Stop smoking and avoid alcohol while you're in treatment. Keep tea and coffee to a couple of cups a day. Walking and gentle yoga are fine unless your doctor says otherwise. Sleep matters more than people think, and long hours in Bangalore's tech offices don't help, so plan scan days and the days after egg collection in advance with your manager if you can.

Only take supplements your doctor has recommended. Herbal powders and "fertility kadhas" from relatives haven't been tested for safety alongside IVF medicines.

On the emotional side, decide together how much you'll share and with whom. You don't owe your extended family a running update. Some couples find counselling or a support group useful. Others just need a few evenings where IVF isn't the topic of conversation.

### Common IVF myths in India

## "If a couple can't conceive, it's the woman's problem."

Male factors are involved in a large share of couples with infertility. That's why the husband's semen test is part of the first workup, not something done later.

## "IVF babies aren't normal."

The embryo spends about five days in the lab. After that, the pregnancy and the baby develop exactly the same way any other pregnancy does.

## "You must stay in bed after embryo transfer."

Studies haven't shown that bed rest helps the embryo implant. Light normal activity, including going back to desk work, is generally fine.

## "IVF works the first time."

For some couples it does. Many others need more than one transfer or cycle, depending on age and diagnosis.

## "IVF always means twins."

Twins happen mostly when two or more embryos are transferred. One embryo at a time keeps that chance low.

## "With low AMH, IVF won't work."

Low AMH usually means fewer eggs are collected in a cycle. It doesn't measure egg quality, and it doesn't rule out a pregnancy.

### How much does IVF cost in Bangalore?

There's no single figure, because the total depends on your treatment. The biggest variable is usually the medicine dose, which depends on your ovarian reserve and response. ICSI, embryo freezing and storage, the type of transfer, extra procedures such as hysteroscopy, embryo testing or surgical sperm retrieval, and the number of cycles you need all change the cost.

Before you start, ask for a written estimate that spells out what's included and what isn't.

### Questions worth asking your fertility doctor
- Why IVF for us, and not IUI or another option?
- Based on our reports, what are our chances?
- Will we need ICSI?
- What protocol will I be on, and what's being done to lower my OHSS risk?
- Do you expect a fresh or frozen transfer, and how many embryos?
- What happens to embryos we don't use?
- What will the full cycle cost?
- Who do we call at night or on a Sunday if something feels wrong?

### How is IVF planned at EVE Women and Fertility Clinic?

At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree starts with a full evaluation of both partners. She goes through your history, AMH and hormone results, ultrasound findings and semen report, and looks first at whether ovulation induction or IUI could reasonably work for you.

If IVF is the right next step, Dr. Swati Shree assesses you at EVE and guides your IVF treatment. Egg collection, the IVF laboratory work, embryo freezing and embryo transfer are carried out at associated, registered ART centres, while the same doctor stays with you through the whole process.

EVE is in Gunjur, close to Varthur, Whitefield, Sarjapur Road and Bellandur.

### When should you get urgent medical help during IVF?

Call your doctor straight away, or go to the nearest emergency department, if any of the following happen.
- Severe belly pain or bloating that keeps getting worse after injections or egg collection
- Breathlessness, or passing much less urine than usual
- Putting on weight quickly over a day or two during treatment
- Fever or foul-smelling discharge after a procedure
- Heavy bleeding from the vagina
- Pain on one side of the pelvis, pain at the tip of the shoulder, dizziness or fainting in early pregnancy

The first three can point to OHSS. The last can be a sign of ectopic pregnancy.

### When should you see a fertility specialist?

Most guidelines suggest getting checked if you're under 35 and haven't conceived after a year of regular unprotected sex, or if you're 35 or older and it's been six months. At 40 and above, it's sensible not to wait.

See someone sooner if your periods are very irregular or have stopped, if you already know you have PCOS, endometriosis, fibroids or a thyroid problem, or if you've had a pelvic infection, an ectopic pregnancy or pelvic surgery. The same applies if your husband has a known sperm problem, if you've had two or more miscarriages, or if earlier IUI or IVF hasn't worked.

Getting evaluated doesn't commit you to IVF. Often it simply means you get answers earlier.

### Key Takeaways
- IVF fertilises eggs with sperm in a lab and places an embryo in the uterus.
- It's commonly used for blocked tubes, severe male factor infertility, endometriosis, low AMH, unexplained infertility and after unsuccessful IUI.
- A fresh cycle usually takes four to six weeks from the first injection to the blood test.
- ICSI is a lab technique within IVF, used mostly for sperm problems.
- Single embryo transfer lowers the risk of twins and triplets.
- The woman's age has the biggest effect on the chance of success.
- OHSS and ectopic pregnancy are the two complications to watch for most closely.
- Both partners should be tested, and emotional support deserves the same attention as the medical side.

### Final Thoughts

Most couples come to IVF after months or years of trying, and it's normal to feel hopeful and nervous at once. Knowing what each stage involves, what affects your chances and which symptoms need attention takes a lot of the fear out of it.

IVF won't work in every cycle for every couple. It has, though, helped a great many couples who had started to lose hope. What matters most is a plan built around your own test results, health and priorities.

If you'd like to find out whether IVF is right for you, or what else might help first, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [When Is IVF Recommended? Key Situations Explained](/blog/when-ivf-recommended-situations/)
- [IVF Process Step by Step: Consultation to Embryo Transfer](/blog/ivf-process-step-by-step-consultation-embryo-transfer/)
- [How Long Does IVF Take? The Real Timeline](/blog/how-long-does-ivf-take-timeline-pregnancy-test/)
- [IVF Success Factors: Age, Egg Quality, Sperm & Embryos](/blog/ivf-success-factors-age-egg-quality-sperm-embryos/)
- [What Happens After Embryo Transfer? Symptoms and Tests](/blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/)

### FAQs

1. **Does IVF hurt?**
   Most of IVF involves only mild discomfort. The daily injections feel like a quick pinch, and many women give them at home after a nurse shows them how. Egg collection is done under sedation or light anaesthesia, so you won't feel it, though cramping afterwards is common. Embryo transfer feels much like a Pap smear and usually needs no anaesthesia.
2. **How many days of injections does IVF need?**
   Stimulation injections usually run for 8 to 14 days. The exact number depends on your ovarian reserve and how your ovaries respond, which your doctor tracks with scans every few days. When the follicles are ready, you get a trigger injection, and egg collection follows about 34 to 36 hours later.
3. **Do I need bed rest after embryo transfer?**
   No. Research hasn't found that lying in bed after transfer improves the chance of pregnancy. Most women go back to light routine activities, including office work, within a day or so. It's sensible to skip heavy lifting and strenuous workouts for a while, and to follow any specific advice your fertility team gives you.
4. **Can IVF work if my AMH is low?**
   It can. Low AMH usually means fewer eggs are collected in each cycle, but AMH doesn't measure egg quality, and it doesn't rule out pregnancy. Your doctor may change the stimulation plan to suit a lower reserve. Your age and other test results also shape your chances, so a personal consultation gives the clearest picture.
5. **What's the difference between IVF and ICSI?**
   In standard IVF, each egg is placed in a dish with many sperm and fertilisation happens on its own. In ICSI, an embryologist injects a single sperm directly into each mature egg. ICSI is done as part of an IVF cycle, usually for a low sperm count, poor sperm movement, or poor fertilisation in an earlier attempt.
6. **When can I take a pregnancy test after IVF?**
   The beta hCG blood test is usually done 9 to 14 days after embryo transfer, depending on the embryo's stage and your clinic's advice. Home tests taken earlier can mislead you. The trigger injection may cause a false positive in the first days, and testing too soon can also give a false negative.
7. **Where can I see a fertility specialist about IVF in East Bangalore?**
   Dr. Swati Shree consults at EVE Women and Fertility Clinic in Gunjur, which is convenient from Varthur, Whitefield, Sarjapur Road and Bellandur. She evaluates couples at EVE, and when IVF is needed the laboratory steps are carried out at associated, registered ART centres, so the same specialist oversees your care from start to finish.

### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 5 · When Is IVF Recommended? Key Situations Explained

```yaml
title: "When Is IVF Recommended? Key Situations Explained"
description: "Blocked tubes, severe sperm problems, endometriosis, low AMH or IUI that has not worked. Learn when IVF is recommended and what to discuss before deciding."
url: /blog/when-ivf-recommended-situations/
lastReviewed: "2026-10-01"
category: "IVF Treatment"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-01"
dateModified: "2026-10-01"
badge: fertility-evaluation
readingTime: 4
cluster: "IVF Treatment"
pillar: false
keywords: []
about: {type: MedicalTherapy, name: "In vitro fertilization", alternateName: ["IVF"]}
related: [/treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/ivf-process-step-by-step-consultation-embryo-transfer/, /blog/iui-vs-ivf-which-fertility-treatment/, /blog/ivf-success-factors-age-egg-quality-sperm-embryos/]
```

H1: When Is IVF Recommended? Key Situations Explained

> **Quick answer:** IVF is commonly considered for blocked or damaged fallopian tubes, severe sperm problems, moderate to severe endometriosis, low ovarian reserve, and PCOS or unexplained infertility that has not responded to ovulation tablets or IUI. Age and test results shape the final advice.

Most couples reach IVF after simpler options have been tried, or after a specialist has looked at the reports and judged that those options are unlikely to work. The treatment collects eggs, fertilises them with sperm in a laboratory, and places an embryo in the uterus. The decision turns on the cause of the difficulty, the woman's age and what has already been done. A single test result rarely settles it.

This article is part of our [IVF treatment](/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/) guide.

### Why is IVF rarely the first step?

IVF is far more demanding than ovulation tablets or IUI. It involves daily injections, repeated scans, a short procedure under sedation and laboratory work, and it costs more. Specialists start with the simpler options in most cases. A specific diagnosis is what tips the balance towards IVF.

### When do blocked or damaged tubes lead to IVF?

IUI depends on the egg and sperm meeting inside the fallopian tube. If both tubes are blocked or badly scarred, that meeting cannot happen, and IVF avoids the tubes altogether. Past pelvic infection, an ectopic pregnancy or pelvic surgery are common causes of this damage. A swollen, fluid-filled tube may need treatment before embryo transfer, because fluid leaking into the uterus can interfere with implantation.

### When do sperm problems lead to IVF?

Mild sperm problems often respond to IUI. IVF becomes the more likely route when the count is very low, the sperm barely move, or very few have a normal shape. The embryologist may then use ICSI, which places one selected sperm inside each mature egg. ICSI is a step within the IVF cycle, not a treatment of its own.

### Does endometriosis make IVF more likely?

Mild endometriosis may not prevent natural conception. Moderate to severe disease, endometriosis involving the tubes or ovaries, and disease that has not settled with IUI are the situations where IVF enters the conversation more often. Endometriosis can also reduce ovarian reserve, so AMH results and scans help shape the plan.

### What does a low AMH result change?

AMH is a blood test that gives a rough sense of how many eggs remain. A low value usually means fewer eggs can be collected in one cycle, which lowers the chances with IUI. The test does not measure egg quality, and it does not rule out pregnancy. The stimulation dose can be tailored to a lower reserve.

### When are PCOS and unexplained infertility reasons for IVF?

Many women with PCOS respond well to ovulation tablets. IVF usually comes up after several cycles of ovulation induction and IUI have been tried. Unexplained infertility means the standard tests look normal. After a reasonable number of IUI cycles, IVF may be advised, because it can work around subtle problems with eggs, sperm or tubes that routine tests miss.

### How does age change the advice?

Age has a strong effect on fertility. Egg number and quality decline over time, and the decline quickens after 35. Women in their late 30s and 40s are often guided towards IVF sooner, rather than spending long stretches on simpler cycles. Egg freezing is also worth discussing for women who want to keep options open for later.

### What can IVF not fix?

IVF cannot improve egg quality on its own. A polyp, a fibroid pressing into the uterine cavity or a very thin lining may need treatment first. Raising these early helps you decide whether IVF should begin now or after a short correction.

### How is the decision made at EVE?

At EVE Women and Fertility Clinic in Gunjur, Bangalore, Dr. Swati Shree usually evaluates both partners before any plan is made. If IVF is the right step, she assesses you at EVE and guides your treatment. Egg collection, laboratory work and embryo transfer take place at associated, registered ART centres.

### When should you see a fertility specialist?

Guidelines generally suggest a check-up if you are under 35 and have not conceived after a year of regular unprotected sex. For women aged 35 or older, six months is the usual point to seek advice. From 40 onwards, waiting is rarely sensible. During treatment, get urgent care for severe belly pain, breathlessness, much less urine or heavy bleeding.

### Key Takeaways
- IVF is usually considered once simpler treatments are unlikely to work or have already failed.
- Blocked or damaged tubes, severe sperm problems, moderate endometriosis, low AMH and unexplained infertility are common reasons.
- ICSI is a laboratory step within IVF, used mainly for sperm problems.
- Age affects both the timing and the outlook.
- Some uterine problems may need correcting before IVF starts.

### Final Thoughts

An IVF recommendation can feel sudden, even after months of trying. It rests on your own reports and history. Ask your doctor why IVF is suggested for you and what waiting would mean in your case. If you would like a personal assessment, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **How many IUI cycles should be tried before IVF is suggested?**
   No fixed number suits everyone. The decision depends on your age, the diagnosis, how your ovaries responded and how many cycles have already been done. Women over 35, or those with a clear reason to act sooner, are often advised to move on earlier. Ask your doctor to walk you through the reasoning behind the advice, so the plan makes sense to you.
2. **Can IVF help if both fallopian tubes are blocked?**
   Yes. The egg is fertilised in the laboratory and the embryo is placed directly into the uterus, so the tubes are bypassed. Blocked tubes are one of the most common reasons for suggesting IVF. Some tube problems, such as a fluid-filled tube, may need treatment before transfer. Your specialist will review your imaging before planning the cycle.
3. **Does a low AMH mean IVF is always needed?**
   Not necessarily. A low AMH does not automatically call for IVF, and it does not mean pregnancy is impossible. Some couples with low AMH conceive naturally or with IUI, particularly when other factors are favourable. AMH helps estimate how many eggs may be collected, so it informs the treatment choice alongside everything else. A personal consultation gives the clearest picture.
4. **Is IVF recommended for men with a low sperm count?**
   It may be, when sperm problems are severe, because ICSI can fertilise an egg using a single sperm. Milder male factor issues often respond to IUI. A semen analysis is usually among the first tests, since the report helps decide between IUI, IVF and ICSI. Stopping smoking and cutting back on alcohol may support sperm quality. A specialist can explain what applies to you.
5. **Where can I get a fertility evaluation for IVF in East Bangalore?**
   You can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore, which is convenient from Varthur, Whitefield, Sarjapur Road and Bellandur. She reviews your reports at EVE and, if IVF is needed, guides treatment; the laboratory steps are carried out at associated, registered ART centres. Having one specialist oversee your care from start to finish can make the process easier to follow.

### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 6 · IVF Process Step by Step

```yaml
title: "IVF Process Step by Step in Bangalore: What to Expect"
description: "Learn the IVF process step by step, from your first fertility consultation and tests to stimulation, egg collection and embryo transfer, with clear."
url: /blog/ivf-process-step-by-step-consultation-embryo-transfer/
lastReviewed: "2026-10-01"
category: "IVF Treatment"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-01"
dateModified: "2026-10-01"
badge: fertility-evaluation
readingTime: 4
cluster: "IVF Treatment"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Embryo transfer"}
related: [/treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/, /blog/ivf-success-factors-age-egg-quality-sperm-embryos/, /blog/iui-vs-ivf-which-fertility-treatment/]
```

H1: IVF Process Step by Step: Consultation to Embryo Transfer

> **Quick answer:** A standard IVF cycle moves through evaluation, ovarian stimulation, egg collection, embryo culture and transfer. Stimulation usually lasts 8 to 14 days, and egg collection takes place about 34 to 36 hours after the trigger injection. For a fresh cycle, plan on roughly four to six weeks from the first injection to the pregnancy blood test.

IVF, or in vitro fertilisation, is a treatment in which eggs are collected from the ovaries and fertilised with sperm in a laboratory. The resulting embryo is then placed in the uterus. If your doctor has just mentioned IVF, the steps below show what lies ahead, from the first visit to the pregnancy test.

This article is part of our [IVF treatment](/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/) guide.

### Step 1: The first consultation and tests

The first visit is mostly a conversation. The doctor asks about your periods, past treatment, surgeries and infections, and asks your partner similar questions. Bring any reports you already have. An AMH result, ultrasound films, hormone levels, a semen analysis and notes from earlier IUI or IVF cycles all shape the plan. Sometimes the results point to a simpler option, such as ovulation tablets or IUI, before IVF is considered.

The workup typically covers AMH, an antral follicle count scan, day 2 or 3 hormone levels, thyroid and prolactin tests, a transvaginal ultrasound and a semen analysis. Both partners also complete infection screening, because eggs, sperm and embryos need safe handling in the lab.

### Step 2: Planning the cycle

Once the reports are in, the doctor picks a stimulation protocol, decides whether ICSI is needed and discusses fresh versus frozen transfer. This is a good moment to ask for a written cost estimate and timeline, so you can arrange leave and family support early. Consent forms are signed before treatment starts, as required under India's Assisted Reproductive Technology (Regulation) Act, 2021.

### Step 3: Stimulation and monitoring

Over 8 to 14 days, you inject a hormone medicine every day, usually into the skin of the belly. Scans every two or three days measure the follicles, fluid-filled sacs that can each hold an egg. Their growth guides any change in dose. Bloating, tender breasts and mood swings are common during this phase, and they settle once the injections stop.

### Step 4: Trigger injection and egg collection

The trigger injection helps the eggs complete their final stage of maturing. Its timing is strict, so set an alarm for the exact hour your clinic gives you. Collection follows 34 to 36 hours later. Under sedation, a fine needle guided by ultrasound draws fluid from each follicle. The procedure takes 15 to 30 minutes, and most women go home the same day with cramping that eases within a day or two.

Egg collection and IVF laboratory work take place at associated, registered ART centres.

### Step 5: Fertilisation and embryo culture

Your partner gives a semen sample that same day. Eggs are fertilised by standard IVF or by ICSI, which places a single sperm into each mature egg. The embryologist then tracks development for three to five days. Embryos stop growing at different points, so the number often falls each day. A drop does not mean something went wrong, and your team will keep you updated at every stage.

### Step 6: Embryo transfer

A fresh transfer happens 3 to 5 days after collection, within the same cycle. A frozen transfer uses embryos that were vitrified (rapidly frozen) and is planned for a later cycle. Freezing is often chosen when the risk of ovarian hyperstimulation is high or the uterine lining needs more time.

The transfer itself is brief and usually needs no anaesthesia. Many women compare it to a Pap smear. Under ultrasound, a thin catheter carries the embryo through the cervix into the uterus. Transferring one good-quality embryo at a time keeps the chance of twins low, and most clinics now favour this approach.

| Stage | Typical timing | What you do |
|---|---|---|
| Consultation and tests | 2 to 4 weeks | Bring reports and complete blood and semen tests |
| Stimulation | 8 to 14 days | Daily injections and scans every 2 to 3 days |
| Trigger to egg collection | 34 to 36 hours | Take the injection at the exact time given |
| Embryo culture | 3 to 5 days | Wait for the lab update |
| Transfer to pregnancy test | 9 to 14 days | Continue progesterone and avoid early home tests |


### The two-week wait

For many couples, this is the hardest part of the process. Progesterone usually continues through it. The beta hCG blood test is done 9 to 14 days after transfer. Bed rest does not improve implantation, so light daily activity, including office work, is fine.

### When should you get urgent medical help?

Contact your doctor promptly, or go to the nearest emergency department, if you notice:
- Severe or worsening belly pain, or rapid bloating, after injections or egg collection
- Breathlessness, or much less urine than usual
- One-sided pelvic pain, shoulder tip pain, fainting or heavy bleeding in early pregnancy
- Fever after a procedure

The first two can point to ovarian hyperstimulation. The third can point to an ectopic pregnancy.

### When should you see a fertility specialist?

Most guidelines suggest an evaluation after a year of trying, or after six months from age 35. If you already know about PCOS, endometriosis, tube problems or a sperm issue, there is no need to wait that long.

### Key Takeaways
- Each step builds on the one before, so the tests done early shape the whole cycle.
- A fresh cycle usually runs four to six weeks, from the first injection to the blood test.
- Trigger timing matters more than most people expect.
- Transferring one embryo at a time lowers the risk of twins.
- A home test taken too early can mislead you, so wait for the blood test.

### Final Thoughts

Nobody understands every term on day one, and you don't have to. Your doctor will explain each stage as you reach it, and a written list of questions makes those visits far more useful. If you would like to know whether IVF suits your situation, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **How long does the IVF process take from the first consultation to embryo transfer?**
   Tests and planning often take two to four weeks, sometimes longer. Stimulation then runs for 8 to 14 days, and collection happens about 34 to 36 hours after the trigger shot. A fresh transfer follows 3 to 5 days later. Altogether, a fresh cycle takes around four to six weeks from the first injection to the pregnancy test. Frozen transfers take longer because they happen in a later cycle.
2. **Do I have to start IVF right after the first consultation?**
   It depends on your results. Your doctor reviews the tests first and may suggest ovulation tablets or IUI, depending on your diagnosis, age and how long you have been trying. Some couples go directly to IVF, for instance when both tubes are blocked or sperm problems are severe. Ask for a written plan and cost estimate before any medicine is started.
3. **Does egg collection hurt?**
   The procedure is done under sedation or light anaesthesia, so you won't feel it. Cramping and light spotting for a day or two are common afterwards. Ask your clinic which pain relief is safe for you. Heavy bleeding, fever or severe belly pain after collection should be assessed promptly.
4. **Why are there fewer embryos than eggs collected?**
   Not every follicle contains an egg, and some collected eggs are immature and cannot be fertilised. After fertilisation, some embryos stop dividing during the three to five days in culture. Early embryo loss also happens in natural conception. Your embryologist will tell you which embryos are developing well enough for transfer or freezing.
5. **Can I take a home pregnancy test after embryo transfer?**
   It is better to wait for the blood test, done 9 to 14 days after transfer. The trigger injection can leave hormone traces that cause a false positive early on, and testing too soon can also miss a pregnancy. If you notice bleeding or symptoms in the meantime, call your doctor rather than testing again and again. Keep taking progesterone until your team advises otherwise.
6. **Where can I get an IVF evaluation in East Bangalore?**
   Dr. Swati Shree consults at EVE Women and Fertility Clinic in Gunjur, Bangalore, which is within easy reach of Varthur, Whitefield, Sarjapur Road and Bellandur. Where IVF is recommended, the laboratory procedures are carried out at associated, registered ART centres while she guides your treatment throughout. A consultation lets her build the plan around your own reports.

### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 7 · How Long Does IVF Take? The Real Timeline

```yaml
title: "How Long Does IVF Take? Timeline to Pregnancy Test"
description: "IVF timeline from first consultation to the pregnancy blood test, stage by stage. Learn why some cycles run longer and how to plan leave without guesswork."
url: /blog/how-long-does-ivf-take-timeline-pregnancy-test/
lastReviewed: "2026-10-02"
category: "IVF Treatment"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-02"
dateModified: "2026-10-02"
badge: fertility-evaluation
readingTime: 4
cluster: "IVF Treatment"
pillar: false
keywords: []
about: {type: MedicalTherapy, name: "In vitro fertilization", alternateName: ["IVF"]}
related: [/treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/iui-vs-ivf-which-fertility-treatment/, /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/, /blog/how-many-iui-cycles-before-ivf/, /blog/low-amh-and-ivf-treatment/]
```

H1: How Long Does IVF Take? The Real Timeline

> **Quick answer:** A fresh IVF cycle typically takes four to six weeks from the first injection to the pregnancy test. Planning adds a few more weeks at the start, and a frozen embryo transfer generally adds at least a month.

Most IVF cycles run about four to six weeks, from the first hormone injection to the pregnancy blood test. If you count the tests and planning that come beforehand, the whole process often stretches to six to ten weeks. Your own timing depends on how your ovaries respond, whether embryos go back fresh or frozen, and what the scans reveal along the way.

This article is part of our [IVF treatment](/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/) guide.

### Why planning comes first

Stimulation doesn't start until the team has the full picture. Expect an AMH blood test, hormone levels from early in the cycle, an antral follicle scan, a semen analysis, and infection screening for both partners. Several of these must be done on specific cycle days, so the start date is often fixed a few weeks ahead.

### What does the timeline look like, stage by stage?

| Stage | Typical timing | What to expect |
|---|---|---|
| Consultation and tests | 2 to 4 weeks | Blood work, scans, semen analysis and a treatment plan |
| Ovarian stimulation | 8 to 14 days | Daily injections, with scans every 2 to 3 days |
| Trigger injection | Final dose | Helps the eggs complete maturation |
| Egg collection | 34 to 36 hours after trigger | Brief procedure under sedation |
| Fertilisation and embryo growth | 3 to 5 days | Embryos monitored in the lab |
| Embryo transfer | 3 to 5 days after collection (fresh) | Quick, usually without anaesthesia |
| Pregnancy blood test | 9 to 14 days after transfer | Beta hCG test |


### How long do the injections take?

Stimulation runs 8 to 14 days. Scans every two or three days show how the follicles are growing, and the dose changes based on what they find. Some women respond slowly and need a few extra days. That gives the doctor more to work with, and it doesn't mean the cycle is lost. The trigger shot has to be taken at the exact hour your clinic gives you, since egg collection follows 34 to 36 hours later.

### What happens between collection and the test?

Eggs are fertilised the same day, through standard IVF or ICSI. The embryos are then tracked for three to five days. Many clinics prefer to transfer a blastocyst, an embryo that reaches day 5 or 6. Not every embryo keeps developing, so numbers often drop along the way. Most clinics will call you with updates as they come in.

Transfer is brief, and most women describe it as similar to a Pap smear. Progesterone support continues afterwards. The beta hCG blood test is usually booked 9 to 14 days after transfer.

Home tests can mislead during this window. The trigger shot leaves a hormone similar to hCG in the body for several days, so a test taken too soon may show a positive result with no pregnancy behind it.

### Why do some cycles take longer?
- A slow or excessive response to stimulation, which adds injection days
- A pause or cancellation for safety reasons
- Embryos that stop developing before reaching the blastocyst stage
- Freezing all embryos to reduce the risk of ovarian hyperstimulation syndrome (OHSS), with transfer in a later cycle
- A uterine finding, such as a polyp, that is treated before transfer
- A frozen transfer, which needs time to prepare the lining

### How can you plan around the timeline?

Scan dates can move at short notice, so it helps to build some flexibility into your work plans. Ask for leave early, especially if your commute across Bangalore is long. Many clinics also expect a companion to take you home after egg collection, since sedation is involved. A written calendar from the first visit makes all of this easier to manage.

### When should you seek urgent care?

Call your clinic or doctor without delay if you notice:
- Severe pain in the belly, rapid bloating, breathlessness, or passing very little urine after injections or collection. These can be signs of OHSS.
- Fever after any procedure
- If you are pregnant: pain on one side of the pelvis, shoulder tip pain, fainting or heavy bleeding. These may point to an ectopic pregnancy or a miscarriage.

### Key Takeaways
- A fresh cycle usually runs four to six weeks from the first injection to the blood test.
- Tests and planning before treatment can add two to four weeks.
- Frozen transfers generally add a month or more.
- Schedule changes after scans are common and are part of careful monitoring.

### Final Thoughts

The wait after transfer is hard for most couples, and feeling drained is understandable. Talking it through with your partner, or with a counsellor, often helps more than trying to stay calm alone. If you are considering IVF, a consultation with Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore, can show how this timeline applies to your own reports. She can evaluate you at EVE and guide your IVF treatment; laboratory work is carried out at associated, registered ART centres.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **How long does IVF take from the first injection to the pregnancy test?**
   For a fresh cycle, the active treatment window is 8 to 14 days of injections, a trigger shot, egg collection about 34 to 36 hours later, three to five days of embryo growth, and a beta hCG test 9 to 14 days after transfer. Together these stages usually add up to four to six weeks. Your schedule may be shorter or longer depending on how your ovaries respond.
2. **How long does the whole IVF process take from the first consultation?**
   Counting consultation, blood tests, scans and semen analysis, most couples should set aside six to ten weeks. Occasionally a procedure such as a hysteroscopy comes first, which adds time. Tests that must be repeated on specific cycle days can also shift the start date. A written schedule from the first visit makes it easier to plan leave.
3. **Why does a frozen embryo transfer take longer?**
   A frozen transfer means the embryos are stored and placed in a later cycle. The lining must be prepared first, either through a natural cycle or with hormone tablets, and that preparation typically adds a month or more. Doctors often suggest this route when the ovaries responded strongly, when OHSS risk is a concern, or when embryo testing is planned.
4. **Is it safe to take a home pregnancy test before the blood test?**
   Waiting for the scheduled blood test gives the clearest answer. The trigger shot can leave a hormone similar to hCG in the body for several days, so an early home test may read positive without a pregnancy. A test taken too soon can also read negative even when a pregnancy has started. Report any worrying symptoms to your clinic rather than relying on a home kit.
5. **Where can I get IVF timeline guidance in East Bangalore?**
   Gunjur sits in East Bangalore, close to Varthur and Whitefield. EVE Women and Fertility Clinic offers fertility consultations there, and IVF laboratory work is carried out at associated, registered ART centres. Bringing previous test reports to the first visit lets the timeline reflect your own situation.

### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 8 · IVF Success Factors

```yaml
title: "IVF Success Factors: Age, Egg, Sperm and Embryo Quality"
description: "Age sets the ceiling in IVF, but eggs, sperm and embryos decide how far a cycle can go. Here is how each factor works and what you can act on before."
url: /blog/ivf-success-factors-age-egg-quality-sperm-embryos/
lastReviewed: "2026-10-02"
category: "IVF Treatment"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-02"
dateModified: "2026-10-02"
badge: male-fertility
readingTime: 4
cluster: "IVF Treatment"
pillar: false
keywords: []
about: {type: MedicalTherapy, name: "In vitro fertilization", alternateName: ["IVF"]}
related: [/treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/ivf-process-step-by-step-consultation-embryo-transfer/, /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/, /blog/iui-vs-ivf-which-fertility-treatment/]
```

H1: IVF Success Factors: Age, Egg Quality, Sperm & Embryos

> **Quick answer:** Age is the strongest factor in IVF outcomes. Egg reserve, egg maturity, sperm quality and embryo development also influence results, and they affect each other. No clinic can promise a pregnancy. A good fertility specialist can, however, show you which of these factors apply to your case and what they mean for your plan.

If you have started reading about IVF, you have probably seen the same question asked in a dozen different ways: will it work for us? The honest answer depends on a handful of factors. Age sits at the top of that list, followed by egg reserve, egg maturity, sperm health and how well embryos develop. Some of these can be measured before you begin. Others can only be supported. Your own reports will tell you far more than any average figure you find online.

This article is part of our [IVF treatment](/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/) guide.

### Why does age matter so much?

Every woman is born with the eggs she will have for life, and that supply falls steadily. Fewer eggs remain each year, and more of them carry chromosome errors. Chromosome errors are one of the main reasons an embryo fails to implant or is lost early. The decline is gentle through the late twenties and early thirties, then becomes noticeable after 35. Two couples on the same protocol can get very different results, and age is usually the first reason a doctor will point to.

### Egg reserve and egg quality are not the same thing

Egg reserve is estimated with the AMH blood test and the antral follicle count. Together, these tests tell your doctor roughly how many follicles may respond to stimulation. They do not show how healthy each egg is. A low AMH usually means fewer eggs per cycle, and the medicine dose is adjusted to suit. It does not mean pregnancy is out of reach, because a handful of good eggs can still become a healthy embryo. Egg quality is judged indirectly, through how many eggs mature, fertilise and develop into embryos.

### What role does sperm quality play?

Semen analysis looks at count, movement and shape. DNA integrity also shapes how an embryo develops, but it is not part of a routine report. Your doctor may suggest a DNA fragmentation test after repeated miscarriages or cycles that failed without a clear reason. Sperm take around three months to mature, so smoking, heavy drinking and long hours of heat exposure can affect the sperm used in a cycle a few months from now.

In standard IVF, sperm reach the egg without help. In ICSI, the embryologist selects one sperm and injects it into a mature egg. ICSI addresses many male factor problems, so a weak semen report usually changes the method rather than ending the plan.

### Do embryos really decide the result?

Embryos are graded after fertilisation, based on cell number and how evenly the cells divide. Embryos that reach the blastocyst stage, around day 5 or 6, usually implant more often than those that stop developing earlier. A high grade is encouraging, but it is never a guarantee. Some embryos with a lower grade go on to healthy pregnancies, and some well graded embryos do not implant.

Chromosome screening (PGT-A) is not advised for every patient by ESHRE or ASRM. It is usually discussed for older women, couples with repeated pregnancy loss, or those who have had several unsuccessful transfers.

### What about the uterus and general health?

A healthy embryo still needs a receptive uterus. Polyps, fibroids that distort the cavity, adhesions and a thin lining can all make implantation harder, and many of these can be treated before transfer. General health counts too. Thyroid disease, poorly controlled diabetes, obesity, smoking and heavy drinking can lower the chances, and addressing them early usually helps.

### What can you change and what can you not?

| Factor | Can it be changed? | What helps |
|---|---|---|
| Age | No | Timely evaluation and avoiding long delays |
| Ovarian reserve (AMH, antral follicles) | Not directly | A stimulation plan matched to your reserve |
| Egg maturity and fertilisation | Partly | Protocol choice and ICSI when needed |
| Sperm quality | Partly | Lifestyle changes, treating causes, ICSI |
| Uterine factors | Often | Hysteroscopy or treatment of polyps and fibroids |
| Smoking, alcohol, body weight | Yes | Quitting, a healthy weight, medical guidance |


### Why are published success rates so hard to use?

Published rates pool women of many ages and diagnoses, so an average can say little about your own odds. A more useful conversation starts with your numbers. Bring your AMH report, your scan results, the semen analysis and notes from any earlier cycles, and ask what those results suggest for your plan.

### When should you see a fertility specialist?

Do not wait too long if you are 35 or older, have had two or more miscarriages, have a low AMH, or had a cycle that did not lead to pregnancy. During treatment, seek urgent care for worsening belly pain or bloating, breathlessness, a sharp drop in urine output, fever after a procedure, or heavy bleeding. These symptoms can point to ovarian hyperstimulation syndrome (OHSS) or another complication, so do not wait for your next scheduled visit.

### Key Takeaways
- Age is the strongest factor, and no treatment can change it.
- AMH and the antral follicle count estimate how many eggs you may produce, not how healthy they are.
- Sperm quality matters, and ICSI can handle many male factor problems.
- Embryo grade is helpful but never a guarantee.
- Uterine health and daily habits are worth addressing before treatment starts.

### Final Thoughts

Most couples feel overwhelmed the first time they see these numbers. The aim here is not to hand you a verdict. It is to help you ask sharper questions and plan with a clearer picture. If you would like a detailed review of your reports, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore. She assesses you at EVE and guides IVF treatment; laboratory work is carried out at associated, registered ART centres.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **Which factor matters most for IVF success?**
   Age, almost every time. As a woman gets older, both the number of eggs and the share with normal chromosomes tend to drop. That affects how many embryos develop well and how likely they are to implant. Egg reserve, sperm quality, uterine health and embryo grade still matter, and your doctor weighs them together with age.
2. **Can IVF work with a low AMH?**
   Often, yes, though the approach may differ. A low AMH usually predicts fewer eggs in a cycle, so the stimulation plan may be adjusted. AMH does not measure egg quality, and a few healthy eggs can still lead to pregnancy. Your age, antral follicle count and other results help your doctor set realistic expectations.
3. **Does a weak semen report mean IVF will fail?**
   Rarely on its own. A semen report below WHO reference values tells the team that sperm need extra support. ICSI can work around many problems with count, movement and shape, because one selected sperm is placed into each egg. Depending on the findings, your doctor may recommend lifestyle changes, treatment for an underlying cause or further testing.
4. **Should every IVF embryo be tested for chromosomes?**
   Not for everyone. ESHRE and ASRM do not recommend routine testing for all patients. It may be considered for older women, couples with repeated pregnancy loss, or those with several unsuccessful transfers. Testing involves an embryo biopsy and has its own limits, so weigh the benefits, costs and drawbacks with your doctor before agreeing to it.
5. **Do lifestyle changes make a real difference?**
   They can, especially for sperm and the uterine lining. Quitting smoking, cutting back on alcohol, reaching a healthy weight and keeping thyroid disease or diabetes under control all help. Skip herbal powders and supplements your doctor has not prescribed, because some can interfere with IVF medicines or affect the body in unexpected ways.
6. **Where can I get an IVF evaluation in East Bangalore?**
   Dr. Swati Shree sees patients at EVE Women and Fertility Clinic in Gunjur, a practical choice for people in Varthur, Whitefield, Sarjapur Road and Bellandur. She evaluates both partners at EVE. If IVF is the right next step, the laboratory work is carried out at associated, registered ART centres, so the same doctor follows you from start to finish.

### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 9 · What Happens After Embryo Transfer? Symptoms and Tests

```yaml
title: "What Happens After Embryo Transfer? Symptoms and Tests"
description: "Find out what is normal after embryo transfer, which symptoms need a doctor, the precautions to follow, and when a pregnancy blood test gives a reliable."
url: /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/
lastReviewed: "2026-10-02"
category: "IVF Treatment"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-02"
dateModified: "2026-10-02"
badge: fertility-evaluation
readingTime: 4
cluster: "IVF Treatment"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Embryo transfer"}
related: [/treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/ivf-process-step-by-step-consultation-embryo-transfer/, /blog/ivf-success-factors-age-egg-quality-sperm-embryos/]
```

H1: What Happens After Embryo Transfer? Symptoms and Tests

> **Quick answer:** Cramping, light spotting, bloating, and breast tenderness are common after transfer, but none of them confirm or rule out pregnancy. Keep taking progesterone as prescribed. The reliable check is a beta hCG blood test, usually done 9 to 14 days after transfer. Severe pain, heavy bleeding, breathlessness, or fainting always need prompt medical care.

The embryo transfer itself takes only a few minutes. Most women walk out of the clinic the same day, and then the real waiting begins. Over the next two weeks, the body sends a steady stream of signals, and most of them look the same whether or not implantation has happened. This guide explains what is usually normal, what needs urgent attention, and when a pregnancy test can actually be trusted.

This article is part of our [IVF treatment](/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/) guide.

### What is happening inside the body?

Most transferred embryos are at the blastocyst stage, around day 5 or 6 of development. Over the next several days, the embryo attaches to the uterine lining. This attachment is called implantation. Progesterone keeps the lining receptive during this window, which is why doctors stress regular dosing.

### Common symptoms after embryo transfer

Many women ask whether a particular twinge means something. The honest answer is that most early symptoms overlap with pregnancy and with progesterone side effects. Mild lower abdominal cramping, light spotting, bloating, breast tenderness, tiredness, and mood swings are typical. If progesterone is given as a gel or pessary, some vaginal discharge or irritation is also expected.

Symptoms alone are not a reliable guide. Some women feel nothing and test positive, while others feel a great deal and test negative.

### When to seek urgent care

Contact your clinic immediately, or go to the nearest emergency unit, if you develop:
- Severe or worsening abdominal pain, or rapid swelling of the belly, which can signal ovarian hyperstimulation syndrome (OHSS)
- Breathlessness, very little urine passed, or dizziness
- One-sided pelvic pain, pain in the shoulder tip, or fainting, which can point to an ectopic pregnancy
- Heavy bleeding or fever with chills

### Precautions to Follow

Bed rest is not required. Gentle walking and normal daily routines are generally fine, and many women return to desk work within a day or two. Avoid heavy lifting, strenuous exercise, and long road journeys until your doctor says it is safe. Ask your doctor about resuming sex, because clinics sometimes differ on this.

Stick to the medicines you have been prescribed. Avoid smoking and alcohol, and keep tea and coffee to a couple of cups a day. Herbal mixes and supplements that your doctor has not recommended can interfere with fertility medicines, so check with the clinic before starting anything new.

### When should you take a pregnancy test?

The dependable test is a beta hCG blood test, usually done 9 to 14 days after transfer. The exact day depends on the embryo's stage and your clinic's protocol.

Home urine tests done too early are a common source of confusion. The trigger injection given before egg collection can remain in the body for several days, which may produce a false positive. A test taken too soon can also miss a pregnancy that is already present. If the blood test is negative, your doctor will go through the cycle with you before suggesting the next step.

### What happens after a positive test?

A positive result usually leads to a repeat blood test after two or three days, to check that the level is rising appropriately. A transvaginal scan about two to three weeks later confirms that the pregnancy is inside the uterus. Progesterone continues until you are told to stop. Light spotting is fairly common in early pregnancy, but any bleeding or pain should be reported so it can be checked.

### Key Takeaways
- Cramping and spotting are common, but they do not answer the pregnancy question.
- Continue progesterone unless your doctor advises otherwise.
- Wait for the blood test, usually 9 to 14 days after transfer.
- Seek urgent care for severe pain, heavy bleeding, breathlessness, or fainting.

### Final Thoughts

Feeling both hopeful and frightened during this wait is completely understandable. If a symptom worries you, call the clinic rather than searching for answers late at night. If your IVF cycle was carried out at an associated ART centre, you can still bring your reports to Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore, for review and guidance.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **Does cramping after embryo transfer mean the transfer worked?**
   Cramping is common and does not prove that implantation has happened. The uterus can cramp because of the procedure, progesterone, or normal cycle changes. Mild cramping that eases is usually reassuring. Severe, one-sided, or worsening pain should be assessed promptly, whatever the cause.
2. **Is spotting after embryo transfer something to worry about?**
   Light spotting is fairly common in the two weeks after transfer, with or without a pregnancy. Heavy bleeding, or bleeding with severe pain or dizziness, needs urgent care. Mention any spotting to your doctor so it can be recorded and reviewed.
3. **Can I take a home pregnancy test a few days after transfer?**
   It is better to wait. The trigger injection can leave hCG-like hormone in the body for days, which may cause a false positive. An early test can also miss a real pregnancy. The beta hCG blood test, done 9 to 14 days after transfer, is the most dependable option.
4. **Is bed rest necessary after embryo transfer?**
         No. Studies have not shown that bed rest improves implantation. Walking and normal daily routines are generally fine. Avoid heavy lifting and strenuous exercise until your doctor confirms it is safe for you. No. Studies show strict bed rest does not improve implantation and may even reduce blood flow. Normal daily activity is fine; avoid heavy lifting, intense workouts and heat on the abdomen for a few days.
5. **Where can I get post-transfer care in East Bangalore?**
   Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore, offers fertility consultations and follow-up guidance, including for patients whose IVF cycles were done at associated, registered ART centres. Gunjur is close to Varthur and Whitefield. Bring your transfer details, current medicine list, and recent blood reports to the appointment.

### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 10 · PCOS and Fertility

```yaml
title: "PCOS and Fertility: Ovulation, Natural Pregnancy, IUI & IVF"
description: "PCOS can make ovulation unpredictable, but pregnancy is still possible. Understand natural conception, ovulation treatment, IUI and IVF options."
url: /blog/pcos-fertility-ovulation-iui-ivf/
lastReviewed: "2026-10-03"
category: "PCOS & Fertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-03"
dateModified: "2026-10-03"
badge: follicular-monitoring
readingTime: 16
cluster: "PCOS & Fertility"
pillar: true
keywords: []
about: {type: MedicalProcedure, name: "Intrauterine insemination", alternateName: ["IUI"]}
related: [/conditions/pcos/, /services/follicular-monitoring/]
posts: [/blog/female-infertility-causes-symptoms-tests-treatment/, /blog/fertility-after-thirty-five-egg-quality-age-treatment/, /blog/pcos-pregnancy-natural-conception/, /blog/pcos-ovulation-irregular-periods-pregnancy/, /blog/pcos-ivf-when-needed-or-not/, /blog/pcos-age-metabolic-health-fertility-planning/]
```

H1: PCOS and Fertility: Ovulation, Natural Pregnancy, IUI & IVF

### Can you get pregnant with PCOS?

Yes. PCOS does not mean that you cannot become pregnant. The main difficulty for many women with PCOS is irregular ovulation. If an egg is not released regularly, there are fewer opportunities for conception and it can become difficult to predict the fertile days.

Some women with PCOS conceive naturally. Others may need help with ovulation treatment, IUI or IVF. Which option makes sense depends on more than the PCOS diagnosis. Age, sperm health, fallopian tubes, ovarian reserve, previous pregnancies and how often ovulation occurs all have a role.

That is why PCOS-related fertility care starts with understanding what is actually happening in your reproductive system rather than assuming that IVF is necessary.

### How does PCOS affect fertility?

PCOS is a hormonal condition that can affect ovulation, menstrual cycles and androgen levels. Not every woman with PCOS has the same symptoms, and the effect on fertility varies considerably.

For some women, periods may come every 35 to 60 days. Others may go several months without a period. Some women have relatively regular cycles despite having PCOS.

The fertility concern is usually related to ovulation.

During a normal ovulatory cycle, a follicle develops in the ovary and eventually releases an egg. If ovulation happens infrequently, conception becomes less predictable.

This does not mean the ovaries have stopped working.

It means that the process of developing and releasing an egg may not be happening regularly.

## Does having periods mean that you are ovulating?

Not always.

Menstrual bleeding and ovulation are related, but they are not the same thing. A woman can have bleeding without having regular ovulation.

This is particularly relevant when periods are very irregular.

If you have PCOS and your cycles are unpredictable, a fertility specialist can assess whether you are ovulating and whether anything else may be affecting conception.

### Can you conceive naturally with PCOS?

Yes. Many women with PCOS become pregnant without IVF.

If you are ovulating and there are no significant problems involving the fallopian tubes or sperm, natural conception may be possible.

The difficulty is often knowing when ovulation is happening.

For someone with a 28-day cycle, estimating the fertile period may be relatively straightforward. With PCOS, a cycle can be much longer or change from month to month. That makes calendar-based fertility tracking less reliable.

Ovulation-prediction kits can also be difficult to interpret in some women with PCOS because hormone patterns may affect the test result.

If you are trying to conceive, regular intercourse throughout the cycle may be more practical than relying entirely on one predicted ovulation day.

If periods are very infrequent, however, it is worth discussing the situation with a fertility specialist rather than simply waiting indefinitely.

### How long should you try naturally with PCOS?

There is no single answer for every woman.

Age and menstrual history matter.

For women younger than 35 without known fertility problems, infertility evaluation is generally considered after 12 months of trying. At 35 or older, evaluation is generally recommended after 6 months. Earlier assessment may be appropriate when there is already a known or suspected fertility problem.

PCOS with very irregular or absent periods is one reason not to rely only on a standard "wait for a year" approach.

If you are rarely getting periods, you may also be ovulating rarely. Finding out why can save months of uncertainty.

A PCOS diagnosis does not automatically explain every case of delayed pregnancy.

A proper fertility assessment looks at both partners and considers several parts of reproduction.

## Ovulation

Your doctor may review your cycle pattern and use blood tests or ultrasound when appropriate.

If treatment is started, follicular monitoring can show how the ovary is responding.

## Fallopian tubes

The fallopian tubes need to be open for sperm and egg to meet naturally.

Depending on your history and treatment plan, your doctor may recommend a test such as an HSG or another assessment of tubal patency.

## Semen analysis

A man's fertility matters too.

If pregnancy is not occurring, checking the semen analysis can provide important information about sperm count, movement and morphology.

Treating ovulation without identifying a significant male-factor problem can delay appropriate care.

## Ovarian reserve

Tests such as AMH and antral follicle count can provide information about ovarian reserve.

But ovarian reserve and fertility are not interchangeable terms.

A low or high AMH result by itself does not tell you whether you will or will not become pregnant naturally.

When PCOS is causing anovulatory infertility and there are no other infertility factors, treatment often begins by helping the ovary ovulate.

This is called ovulation induction.

The international PCOS guideline recommends letrozole as the preferred first-line pharmacological treatment for ovulation induction in women with PCOS who are not ovulating and have no other infertility factors.

The treatment is not something to start on your own. The choice of medicine, dose and monitoring depends on your medical history and fertility assessment.

### How does ovulation induction work?

The basic aim is simple: help a follicle develop and release an egg.

A treatment cycle may involve:
- Starting medication at the prescribed time.
- Monitoring follicle development when required.
- Identifying the likely time of ovulation.
- Timing intercourse or IUI appropriately.
- Assessing the result of the cycle.

The exact protocol varies between patients.

Some women respond well to treatment. Others may need a change in the approach after reviewing how their ovaries responded.

### What is a follicular study?

A follicular study is a series of ultrasound examinations used to follow the development of ovarian follicles during a menstrual cycle.

It can help the doctor see:
- Whether a follicle is developing
- How it is growing
- Whether ovulation appears likely
- How the ovaries are responding to medication
- When intercourse or IUI should be timed

For women with PCOS, this can be useful because ovulation may not follow a predictable calendar.

A follicular study does not guarantee pregnancy. Its purpose is to give the fertility team better information when making treatment decisions.

Lifestyle is part of PCOS care, but it should not become a source of blame.

There is no single diet that works for every woman with PCOS, and fertility problems are not caused simply by a lack of willpower.

A sustainable routine can include:
- Regular physical activity
- A balanced diet
- Adequate sleep
- Attention to blood sugar and metabolic health
- Avoiding smoking
- Limiting alcohol where relevant
- Reviewing medicines before pregnancy
- Appropriate preconception care

Indian meals can still fit into a healthy eating pattern.

There is no requirement to completely remove rice, dal, roti or other familiar foods. What matters is the overall dietary pattern, portion balance, protein and fibre intake, and whether the approach can realistically be maintained.

If weight is affecting metabolic health, your doctor may discuss gradual changes. That conversation should be about health, not shame.

Women with PCOS can have fertility problems at different body weights, so weight alone should never be used to explain infertility.

IUI stands for intrauterine insemination.

During IUI, sperm is prepared in the laboratory and then placed directly into the uterus around the time of ovulation.

For a woman with PCOS, IUI may be considered when ovulation has been induced or is being monitored and the other fertility factors are suitable.

A typical IUI cycle may involve:
- Ovulation assessment or induction
- Follicular monitoring
- Timing of ovulation
- Semen collection
- Laboratory preparation of the sperm
- Placement of the prepared sperm into the uterus
- Pregnancy testing at the appropriate time

The sperm still has to fertilise the egg inside the reproductive tract.

IUI is therefore different from IVF.

| IUI | IVF |
|---|---|
| Prepared sperm is placed inside the uterus | Eggs are retrieved and fertilised outside the body |
| Fertilisation occurs inside the reproductive tract | Fertilisation occurs in the laboratory |
| Usually involves a less complex treatment process | Requires ovarian stimulation, egg retrieval and laboratory procedures |
| May be considered in selected fertility situations | May be considered when other treatment is unsuitable or unsuccessful, or another indication exists |
| Does not involve embryo creation in a laboratory | Embryos are created and subsequently transferred according to the treatment plan |


The choice should be based on the individual fertility assessment rather than the PCOS diagnosis alone.

No.

If ovulation can be achieved and there are no other major fertility problems, timed intercourse may be appropriate in some cases.

IUI becomes a consideration when the clinical situation makes it useful.

The doctor may look at:
- Age
- Duration of infertility
- Ovulation
- Sperm parameters
- Fallopian-tube status
- Previous treatment
- Other fertility conditions

There is no universal number of IUI cycles that is right for everyone.

IVF is not automatically the next step after a PCOS diagnosis.

For women with PCOS who have anovulatory infertility and no other major infertility factors, IVF may be considered if first- or second-line ovulation treatments have not resulted in pregnancy.

IVF may also enter the discussion earlier when another fertility factor is present.

For example, the treatment plan may be different if there is:
- Significant tubal disease
- A substantial male-factor fertility problem
- Another reproductive condition affecting conception
- Previous unsuccessful fertility treatment
- A clinical reason that makes IVF more appropriate

The decision is made after looking at the whole fertility picture.

The basic IVF process includes several stages.

## 1. Fertility assessment

Before treatment, the fertility team reviews the medical history, ovarian reserve, ultrasound findings, semen analysis and other relevant information.

## 2. Ovarian stimulation

Medicines are used to stimulate the ovaries so that several follicles can develop.

Women with PCOS may respond strongly to ovarian stimulation, so careful monitoring is important.

## 3. Monitoring

Ultrasound and, when appropriate, blood tests are used to assess the ovarian response.

## 4. Egg retrieval

When the follicles are ready, the eggs are retrieved using a medical procedure.

## 5. Fertilisation

The eggs are fertilised with sperm in an IVF laboratory. Conventional IVF or ICSI may be considered depending on the circumstances.

## 6. Embryo development

The resulting embryos are monitored in the laboratory.

## 7. Embryo transfer

An embryo may then be transferred into the uterus according to the treatment plan.

## 8. Pregnancy testing

The fertility team advises when pregnancy testing should be performed.

Women with PCOS also need to be counselled about ovarian hyperstimulation syndrome (OHSS). Treatment protocols can be adjusted to reduce this risk.

PCOS is associated with an increased risk of ovarian hyperstimulation because the ovaries may contain a large number of follicles and can respond strongly to stimulation medicines.

This does not mean that OHSS will happen.

Modern IVF treatment includes strategies designed to reduce the risk, and the stimulation protocol can be selected according to the woman's ovarian response.

After fertility treatment, severe abdominal swelling, significant abdominal pain, breathlessness or reduced urine output require prompt medical assessment.

PCOS does not stop being relevant once pregnancy occurs.

Women with PCOS have an increased risk of some pregnancy complications, including gestational diabetes and hypertensive disorders. This is one reason preconception care and appropriate pregnancy monitoring matter.

It is also important not to interpret this information as a prediction for an individual woman.

Having PCOS does not mean that a pregnancy will necessarily have complications.

Your obstetric team can assess your personal risk and decide what monitoring is appropriate.

Yes.

PCOS can interfere with ovulation, but it does not prevent the normal age-related changes in female fertility.

This distinction is easy to miss.

A 32-year-old woman with PCOS and irregular ovulation has a different fertility situation from a 39-year-old woman with PCOS, even if both have similar menstrual symptoms.

Age should therefore be considered alongside:
- Ovulation
- Ovarian reserve
- Sperm quality
- Tubal status
- Previous pregnancy history
- Duration of infertility
- Other reproductive conditions

For women in their 30s or 40s who are concerned about fertility timing, an early consultation can provide more useful information than waiting until pregnancy becomes urgent.

There is no specific age at which every woman with PCOS suddenly becomes infertile.

At the same time, fertility does decline with age, particularly because egg number and egg quality change over time.

If you are over 30 and planning pregnancy, the useful question is not simply "Do I have PCOS?"

It is:

How often am I ovulating, and are there any other factors that could affect conception?

That answer can be much more informative when planning treatment.

### "PCOS means I cannot have a baby."

PCOS can make conception more difficult, particularly when ovulation is irregular. It does not mean pregnancy is impossible.

### "If my periods come, I must be ovulating."

Not necessarily. Irregular bleeding does not always represent regular ovulation.

### "Every woman with PCOS needs IVF."

No. Treatment may range from natural conception and ovulation induction to IUI or IVF, depending on the individual situation.

### "PCOS is caused by being overweight."

PCOS is a complex hormonal and metabolic condition. Women with different body types can have PCOS.

### "Only i need fertility testing because i have PCOS."

No. Fertility involves two partners, where applicable. A semen analysis can be an important part of the evaluation.

### "If one treatment does not work, IVF is automatically the only option."

Not necessarily. The next step depends on what happened during treatment and what the overall fertility evaluation shows.

A consultation is easier when you know what you want to understand.

You may want to ask:
- Am I ovulating?
- Do I need a follicular study?
- Should my partner have a semen analysis?
- Do my fallopian tubes need to be checked?
- Which ovulation treatment is suitable for me?
- Would timed intercourse be reasonable?
- Is IUI appropriate in my situation?
- What would make IVF necessary?
- How will my response to treatment be monitored?
- How does my age affect the plan?

There is no need to decide on IUI or IVF before the evaluation is complete.

A fertility consultation may be useful if:
- Your periods are very irregular or absent
- You have PCOS and have been trying to conceive without success
- You are younger than 35 and have been trying for 12 months
- You are 35 or older and have been trying for 6 months
- You are over 40 and want to discuss fertility planning
- You have a known tubal problem
- You have endometriosis or another reproductive condition
- Your partner has an abnormal semen analysis
- You have previously undergone fertility treatment
- You want to understand your options before delaying pregnancy further

With very irregular periods, it can be reasonable to seek advice sooner because irregular ovulation itself may be affecting your chances of conception.

Fertility treatment is generally closely monitored, but certain symptoms should not be ignored.

Seek urgent medical advice if you develop:
- Severe abdominal or pelvic pain
- Significant abdominal swelling
- Breathlessness
- A marked reduction in urine
- Heavy bleeding
- Fainting or severe dizziness
- One-sided pelvic pain during early pregnancy
- Shoulder-tip pain with early-pregnancy bleeding
- Fever following a procedure

These symptoms can sometimes occur with complications such as OHSS, ectopic pregnancy, bleeding or infection.

EVE Women and Fertility Clinic in Gunjur, Bangalore provides fertility assessment, counselling, ovulation induction, follicle monitoring and IUI.

For advanced ART procedures, egg retrieval, ICSI, embryo culture, embryo freezing and embryo transfer are carried out at associated, registered ART centres, not at the clinic.

This distinction is worth understanding before treatment begins. A fertility plan can involve several stages, and those stages do not necessarily take place at the same facility.
- PCOS does not automatically mean infertility.
- Irregular or absent ovulation is one of the main ways PCOS can affect conception.
- Natural pregnancy is possible for many women with PCOS.
- Fertility evaluation should consider both partners.
- Letrozole is the recommended first-line pharmacological option for ovulation induction in women with PCOS-related anovulatory infertility when there are no other infertility factors.
- Follicular monitoring can help determine how the ovaries are responding to treatment.
- IUI may be appropriate for some couples.
- IVF is not automatically required because of PCOS.
- Age, sperm health, tubal status and other reproductive factors can change the treatment plan.
- Metabolic health and preconception care deserve attention before pregnancy.
- Treatment should be based on the individual fertility assessment, not on the PCOS label alone.

A PCOS diagnosis can make trying to conceive feel uncertain, especially when periods are unpredictable. But an irregular cycle does not tell the whole story.

The first useful step is to find out whether you are ovulating and whether anything else may be affecting conception.

For one woman, that may mean trying naturally. For another, ovulation induction and follicular monitoring may be enough. IUI can be considered in selected situations, while IVF may be appropriate when other treatments are unsuccessful or another fertility factor is present.

There is no single PCOS fertility treatment that applies to everyone.

If you are looking for fertility care in Gunjur or East Bangalore, you can discuss your cycle pattern, previous treatment and pregnancy plans with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [PCOS and Pregnancy: Can You Conceive Naturally?](/blog/pcos-pregnancy-natural-conception/)
- [PCOS and Ovulation: Why Irregular Periods Affect Pregnancy](/blog/pcos-ovulation-irregular-periods-pregnancy/)
- [Letrozole for PCOS and How It Can Help You Conceive](/blog/letrozole-pcos-ovulation-induction/)
- [PCOS and IVF: When Is IVF Needed and When Is It Not?](/blog/pcos-ivf-when-needed-or-not/)
- [PCOS After 30: Age, Metabolic Health and Fertility Planning](/blog/pcos-age-metabolic-health-fertility-planning/)

### FAQs

1. **Can I get pregnant naturally if I have PCOS?**
   Yes. PCOS does not automatically prevent natural pregnancy. The main difficulty is often irregular ovulation. If ovulation occurs and there are no significant problems involving the fallopian tubes, sperm or other reproductive factors, natural conception may be possible.
2. **Which treatment is usually used first for PCOS-related ovulation problems?**
         For women with PCOS who are not ovulating and have no other infertility factors, letrozole is recommended as the first-line pharmacological treatment for ovulation induction. It should be prescribed and monitored by a qualified doctor. Letrozole is the usual first choice for ovulation induction in PCOS, given for five days early in the cycle with follicular scan monitoring. If it does not work, the dose or medicine is changed.
3. **Does PCOS mean I need IVF?**
   No. IVF is not automatically required for PCOS. Depending on the fertility assessment, treatment may involve natural conception, ovulation induction or IUI. IVF may be considered when other treatment has not worked or another fertility factor makes it appropriate.
4. **Is IUI useful for women with PCOS?**
         IUI can be considered in selected cases. The decision depends on factors such as ovulation, sperm quality, tubal status, age and previous treatment. During IUI, prepared sperm is placed into the uterus around the time of ovulation. It can be, once ovulation is reliably triggered and at least one tube is open and the semen report is reasonable. IUI is usually considered after a few ovulation-induction cycles have not led to pregnancy.
5. **Can irregular periods mean I am not ovulating?**
         Yes. Very irregular or absent periods can indicate ovulatory dysfunction. However, the exact situation needs medical assessment. A fertility specialist may use menstrual history, blood tests or ultrasound to assess ovulation. Often, yes. Periods that come very late or unpredictably usually reflect irregular or absent ovulation. A mid-luteal progesterone blood test or follicular scans can confirm whether you actually ovulate.
6. **Should my partner have a semen analysis if I have PCOS?**
         Yes, where applicable. Fertility problems can involve the woman, the man, both partners or sometimes no clearly identifiable factor. A semen analysis can help identify male-factor fertility problems before treatment is planned. Yes. Male factors contribute to roughly a third of fertility problems, so testing both partners from the start saves months of treating the wrong problem. A semen analysis is quick and inexpensive.
7. **When should a woman with PCOS see a fertility specialist?**
   Earlier assessment may be useful when periods are very irregular or absent. In general, evaluation is considered after 12 months of trying for women under 35 and after 6 months for women aged 35 or older. Known fertility concerns may justify earlier evaluation.
8. **Where can I get fertility care for PCOS in East Bangalore?**
   EVE Women and Fertility Clinic in Gunjur, Bangalore provides fertility assessment, ovulation induction, follicle monitoring and IUI. IVF laboratory procedures are carried out at associated, registered ART centres.

### Sources and further reading

- [NHS: Polycystic ovary syndrome](https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/)
- [NICHD: Polycystic ovary syndrome](https://www.nichd.nih.gov/health/topics/pcos)
- [ACOG: Polycystic ovary syndrome](https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos)

Reviewer box: use global text.

---

## Post 11 · PCOS and Pregnancy

```yaml
title: "PCOS and Pregnancy: Can You Conceive Naturally?"
description: "Irregular cycles don't always rule out pregnancy. Understand how PCOS affects ovulation, when natural conception works, and when to see a fertility."
url: /blog/pcos-pregnancy-natural-conception/
lastReviewed: "2026-10-03"
category: "PCOS & Fertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-03"
dateModified: "2026-10-03"
badge: natural-conception
readingTime: 4
cluster: "PCOS & Fertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Polycystic ovary syndrome", alternateName: ["PCOS"]}
related: [/conditions/pcos/, /services/follicular-monitoring/]
posts: [/blog/pcos-ovulation-irregular-periods-pregnancy/, /blog/pcos-ivf-when-needed-or-not/, /blog/pcos-age-metabolic-health-fertility-planning/]
```

H1: PCOS and Pregnancy: Can You Conceive Naturally?

> **Quick answer:** Many women with PCOS conceive naturally. The condition mainly affects how regularly the ovaries release an egg. When ovulation does happen, the fallopian tubes are open and the partner's semen results are normal, natural conception is possible, though it may take longer than average.

If your periods come every 45 days, or skip months altogether, you may be wondering whether pregnancy is still possible without treatment. In many cases it is. Polycystic ovary syndrome (PCOS) mostly interferes with the timing of ovulation, and that timing is usually the first thing worth investigating.

This article is part of our [PCOS and fertility](/blog/pcos-fertility-ovulation-iui-ivf/) guide.

### What PCOS changes about ovulation

Each cycle, a follicle in the ovary is meant to mature and release an egg. In PCOS, follicles often begin to develop but do not reach release on schedule, or do not reach it at all. The ovaries are still active. What's missing is a predictable rhythm.

## Can a period tell you that ovulation happened?

Not reliably. Bleeding and ovulation are linked, but a woman can bleed without releasing an egg. Many women only learn this after a blood test or a scan.

### Can you conceive naturally with PCOS?

For many women, yes. A regular 28-day cycle makes fertile days easy to estimate. With PCOS, cycles may stretch to 35 to 60 days, or shift in length from one month to the next. Ovulation kits can also give unclear readings. Couples often do better with regular intercourse through the cycle than with a single guessed date.

### How long should you try before seeing a doctor?

For women under 35 without known problems, specialists generally suggest a fertility evaluation after 12 months of trying. From age 35, the advice is to come in after 6 months. If your periods are very infrequent, there is little point in waiting for those milestones. Infrequent ovulation may be the reason pregnancy is delayed, and an early check can save months of guesswork.

### What tests are needed?

A PCOS diagnosis is only one part of the picture. A proper assessment looks at both partners.

| Test | What it tells you |
|---|---|
| Ovulation check (cycle history, blood tests, ultrasound) | Whether an egg is being released |
| Tubal assessment | Whether the fallopian tubes are open |
| Semen analysis | Sperm count, movement and shape |
| AMH and antral follicle count | Ovarian reserve, which is separate from fertility |


### Lifestyle and Diet

Lifestyle changes can help many women feel better and support metabolic health, though they are rarely a quick fix. Regular activity, adequate sleep, balanced meals and steady blood sugar all play a part. Rice, dal and roti don't need to leave the plate. Portion size and consistency usually count for more than strict elimination. Body weight is also not the whole story, since women at many different weights have PCOS, and many of them conceive.

### When is ovulation treatment considered?

Doctors usually start with ovulation induction when ovulation is absent and no other major factor is present. The international PCOS guideline recommends letrozole, a tablet taken by mouth, as the first-line choice. It should only be started on a doctor's prescription, with monitoring to match.

Follicular monitoring uses a series of ultrasound scans to show how the ovary responds. Those results help time intercourse or IUI. IVF is seldom the first step for PCOS. It is generally discussed after other treatments have not led to pregnancy, or when another factor, such as blocked tubes, makes it the better route.

### Risks and Limitations

Some women with PCOS respond strongly to ovulation medicines. In uncommon cases, this can lead to ovarian hyperstimulation syndrome (OHSS), so treatment is planned with that risk in mind. PCOS is also linked to a slightly higher chance of gestational diabetes and high blood pressure in pregnancy, which is why early monitoring helps. These are patterns seen across large groups of women. They cannot predict what will happen in your pregnancy.

### When should you see a doctor?

Book a consultation if your periods are very irregular or absent, if you have been trying for the timeframes above, or if you have a known tubal, endometriosis or semen concern.

Seek urgent care for severe pelvic pain, rapid abdominal swelling, breathlessness, very little urine, heavy bleeding, fainting or one-sided pelvic pain in early pregnancy. A fever after a procedure also needs prompt review.

### Key Takeaways
- PCOS rarely makes pregnancy impossible, but it often makes timing unpredictable.
- Confirming whether you ovulate is usually the most useful first step.
- Many women conceive naturally once ovulation becomes regular.
- Both partners should be evaluated.
- Treatment decisions depend on the full workup, not the diagnosis label alone.

### Final Thoughts

Trying to conceive with irregular cycles can wear you down, especially when every month brings the same question. Clarity helps. Once you know whether and when you ovulate, the next steps tend to become much easier to plan.

If you are in Gunjur or nearby East Bangalore, Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore, can review your cycle history and plan the right tests with you. IVF laboratory procedures are carried out at associated, registered ART centres.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **Can PCOS stop me from getting pregnant naturally?**
   PCOS does not stop pregnancy by itself, but it often makes ovulation irregular, which reduces the number of fertile days. Plenty of women with PCOS conceive without medication once ovulation is confirmed. A fertility assessment can show whether ovulation, the tubes and semen results are working in your favour.
2. **Why are my periods so irregular if I am trying to conceive?**
   Irregular cycles usually mean ovulation is happening rarely, or not at all. Hormonal changes linked to PCOS can delay follicle maturity, so cycle length keeps shifting. A doctor can check hormone levels and arrange a scan to confirm what is going on. That is more reliable than counting days on a calendar.
3. **If I have PCOS, will I need IVF?**
   IVF is not usually the first step. Most women with PCOS are first evaluated for timed intercourse or ovulation induction, and some then move on to IUI. IVF is generally considered when those options have not led to pregnancy, or when another factor such as tubal disease is present. The right route is decided after a full assessment.
4. **Should my partner have a semen test?**
   Usually, yes. Fertility difficulties can involve the woman, the man, both partners, or sometimes no obvious cause. A semen analysis looks at sperm count, movement and shape. Getting it done early means a male factor is not overlooked while ovulation treatment is underway, which can save time and frustration later.
5. **How does IUI work for women with PCOS?**
   IUI is considered in selected cases, usually once ovulation has been induced or is being closely monitored. Sperm is washed and prepared in the laboratory, then placed into the uterus close to the time of ovulation. Fertilisation still happens inside the body. Age, sperm quality, tube status and earlier treatment all shape whether it suits you.
6. **Where can I get PCOS fertility care in East Bangalore?**
   Dr. Swati Shree sees patients at EVE Women and Fertility Clinic in Gunjur, Bangalore. Care includes fertility assessment, counselling, ovulation induction, follicle monitoring and IUI. If IVF becomes the plan, egg retrieval and embryo transfer take place at associated, registered ART centres, and your care team explains that pathway step by step.

### Sources and further reading

- [NHS: Polycystic ovary syndrome](https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/)
- [NICHD: Polycystic ovary syndrome](https://www.nichd.nih.gov/health/topics/pcos)
- [ACOG: Polycystic ovary syndrome](https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos)

Reviewer box: use global text.

---

## Post 12 · PCOS and Ovulation

```yaml
title: "PCOS, Irregular Periods and Ovulation: Pregnancy Guide"
description: "Irregular periods in PCOS often mean irregular ovulation. Learn why this affects conception, when to get tested and which treatment options may help you."
url: /blog/pcos-ovulation-irregular-periods-pregnancy/
lastReviewed: "2026-10-03"
category: "PCOS & Fertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-03"
dateModified: "2026-10-03"
badge: follicular-monitoring
readingTime: 4
cluster: "PCOS & Fertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Polycystic ovary syndrome", alternateName: ["PCOS"]}
related: [/conditions/pcos/, /services/follicular-monitoring/]
posts: [/blog/pcos-pregnancy-natural-conception/, /blog/pcos-ivf-when-needed-or-not/, /blog/pcos-age-metabolic-health-fertility-planning/, /blog/low-amh-ovarian-reserve-fertility/]
```

H1: PCOS and Ovulation: Why Irregular Periods Affect Pregnancy

> **Quick answer:** PCOS often disrupts ovulation. Eggs are released less often, the fertile window becomes harder to pin down, and the chance of conception in any single month falls. Most women with PCOS can still conceive, particularly once ovulation is confirmed and treated where needed.

If your periods come irregularly, you are probably wondering whether PCOS is the reason you are not conceiving. Often it is, but usually through ovulation, the monthly release of an egg, rather than through the periods themselves. Ovulation may happen rarely or at unpredictable times, and that is where the difficulty begins.

This article is part of our [PCOS and fertility](/blog/pcos-fertility-ovulation-iui-ivf/) guide.

### Why does PCOS make periods irregular?

A healthy cycle follows a sequence. A follicle, a fluid filled sac in the ovary, matures and releases an egg. About two weeks later, the uterine lining sheds as a period. In PCOS, follicles often begin to grow but stall before release. Raised androgens (male pattern hormones) and insulin resistance, both common in PCOS, can interrupt this sequence.

## Can a Period Happen Without Ovulation?

It can. Bleeding may occur without an egg being released, so a period on its own does not confirm ovulation. Some women with PCOS bleed only every few months, and that pattern can hide whether ovulation is happening at all.

### How irregular is too irregular?

| Cycle pattern | What it may suggest | Helpful next step |
|---|---|---|
| 21 to 35 days, fairly regular | Ovulation is likely, though not certain | Track cycles and note any symptoms |
| Longer than 35 days, or fewer than 8 periods a year | Ovulation may be infrequent | Discuss an ovulation assessment |
| No period for 3 months or more | Ovulation may be absent or rare | Seek a medical evaluation |


### Why does irregular ovulation affect conception?

Timing is the core problem. An egg survives only briefly after release, and sperm must already be in the tubes to meet it. When ovulation is unpredictable, intercourse can easily miss the window.

Home ovulation kits add to the confusion. Many women with PCOS have raised LH levels, the hormone these kits detect. A positive strip can appear even when no egg has been released.

### How is ovulation checked?

A specialist usually starts with your cycle pattern, then adds blood tests and ultrasound. A progesterone test in the second half of the cycle can show whether ovulation took place. A follicular study uses serial scans to follow a developing follicle and estimate when it may release an egg.

A raised AMH level reflects a larger number of small follicles. It tells the doctor about ovarian reserve, not about how likely you are to conceive.

### What treatments may help ovulation?

For women who are overweight, gradual weight reduction can restore ovulation in some cases. Weight matters, but it is not the full picture. Women at a healthy weight can have ovulation problems as well.

If ovulation stays irregular, medicines that stimulate it may be considered. Letrozole is often the preferred first medicine in current international PCOS guidance. The dose and monitoring depend on the individual, so do not start, stop or adjust any medicine without your doctor.

Ovulation induction is usually followed by scans, which help time intercourse or IUI. IUI may be considered once ovulation is achieved and other factors are suitable. IVF tends to come into the discussion when other options have not worked or are unsuitable, or when another fertility factor points that way. IVF laboratory steps take place at associated, registered ART centres, while Dr. Swati Shree guides the assessment and treatment.

### What happens at a fertility assessment?
- Review of your cycle pattern and medical history
- Hormone blood tests and pelvic ultrasound
- Semen analysis for your partner
- Tubal assessment where clinically needed
- Agreed next steps and follow up

### Lifestyle, diet and emotional wellbeing

Rice, dal, roti and sweets do not have to go. Balanced portions, enough protein and fibre, and plenty of vegetables work well within an Indian meal. Regular activity, sleep, giving up smoking and limiting alcohol all help hormone balance.

Irregular cycles can be worrying, and questions from relatives can add pressure. Asking for support is a reasonable step. A counsellor can help if the waiting starts to feel heavy.

### Risks, side effects and limitations

Ovulation medicines can increase the chance of twins or more. Fertility injections can cause ovarian hyperstimulation syndrome (OHSS) in some women. No treatment can promise a pregnancy, and some couples need more than one approach before they get there.

### Common myths and mistakes
- PCOS means you can never conceive. Most women with PCOS can, with the right care.
- A period proves that you ovulated. It does not.
- Herbal mixes can fix ovulation. No proven remedy replaces a medical assessment.
- Only women need testing. Semen analysis is part of the couple's evaluation.

### Questions to ask your fertility doctor
- Am I ovulating, and how do you know?
- Do we need tubal or semen tests?
- Why this treatment first?
- How will you monitor my response?
- Which side effects should I report straight away?

### When should you see a fertility specialist?

Consider an evaluation after 12 months of trying if you are under 35, or after 6 months if you are 35 or older. Do not wait that long if your periods are very irregular or have been absent for three months or more.

Seek urgent care for severe abdominal pain or bloating after fertility injections, breathlessness, reduced urine output, pain on one side of the pelvis, fainting, or heavy bleeding in early pregnancy.

### Key Takeaways
- PCOS mainly affects the timing of ovulation, not the capacity to conceive.
- Irregular periods do not confirm ovulation.
- Home kits can be unreliable in PCOS.
- Ovulation can often be assessed and treated.
- IUI and IVF are chosen after an individual assessment.

### Final Thoughts

Irregular periods make pregnancy planning feel uncertain, and proper testing removes a good part of that uncertainty. If you have been trying for a while, a consultation with Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore, is a practical next step.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **Can I conceive with PCOS if my periods are very irregular?**
   Many women with very irregular periods do conceive. Infrequent periods suggest that ovulation is rare, which makes timing harder, but they do not rule out pregnancy. A specialist can confirm whether you are ovulating, check for other contributing factors and recommend a plan based on your history. Raising the question early can save you months of guessing.
2. **Does PCOS always lead to IVF?**
   Usually not. Many women begin with lifestyle changes and ovulation induction, and some move on to IUI once ovulation is achieved and other factors look favourable. IVF is considered when those options are unsuitable or have not worked, or when another factor makes it the better fit. The decision rests on a full assessment of both partners.
3. **Where can I get a PCOS fertility evaluation in East Bangalore?**
   Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore, sees women with PCOS, irregular periods and ovulation concerns. Consultations may include cycle review, hormone tests and follicular monitoring when needed. Advanced IVF laboratory procedures are carried out at associated, registered ART centres. A consultation is the most reliable way to learn what applies to your situation.
4. **Are ovulation kits reliable for PCOS?**
   Often they are not. The raised LH levels seen in PCOS can produce a positive result even when no egg is released, and a negative reading may miss rare ovulation. Kits can still offer some guidance, but they work best alongside a progesterone blood test or a follicular study. Ask your doctor how to read your results.
5. **Can weight loss restore ovulation in PCOS?**
   For some women who are overweight, gradual weight reduction improves ovulation and cycle regularity. Results vary, and women at a healthy weight can have ovulation problems too. Weight should never be blamed for infertility. Discuss any weight plan with your doctor, especially if you are planning pregnancy or taking medicines.

### Sources and further reading

- [NHS: Polycystic ovary syndrome](https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/)
- [NICHD: Polycystic ovary syndrome](https://www.nichd.nih.gov/health/topics/pcos)
- [ACOG: Polycystic ovary syndrome](https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos)

Reviewer box: use global text.

---

## Post 13 · Letrozole for PCOS and How It Can Help You Conceive

```yaml
title: "Letrozole for PCOS and How It Can Help You Conceive"
description: "Letrozole is often the first ovulation treatment for PCOS. Learn how it works, what a cycle involves, possible side effects and when to see a specialist."
url: /blog/letrozole-pcos-ovulation-induction/
lastReviewed: "2026-10-04"
category: "PCOS & Fertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-04"
dateModified: "2026-10-04"
badge: follicular-monitoring
readingTime: 4
cluster: "PCOS & Fertility"
pillar: false
keywords: []
about: {type: MedicalTherapy, name: "Ovulation induction"}
related: [/conditions/pcos/, /services/follicular-monitoring/]
posts: [/blog/pcos-fertility-ovulation-iui-ivf/, /blog/pcos-ovulation-irregular-periods-pregnancy/]
```

H1: Letrozole for PCOS and How It Can Help You Conceive

Letrozole is usually the first tablet a fertility specialist considers when PCOS is the main reason ovulation is absent or unpredictable. It belongs to a class of medicines called aromatase inhibitors. Over a short course, it lowers estrogen signalling in the brain, which prompts the pituitary gland to release more follicle stimulating hormone (FSH). That rise in FSH can help a follicle in the ovary mature and release an egg.

This article is part of our [PCOS and fertility](/blog/pcos-fertility-ovulation-iui-ivf/) guide.

### What is Letrozole used for in PCOS?

Letrozole is the recommended first-line medicine for ovulation induction in women with PCOS who do not ovulate regularly and have no other significant fertility factor. The 2023 international evidence-based PCOS guideline supports this position. It is a prescription medicine, and it works best when a doctor monitors each cycle. It can make ovulation more predictable, but it cannot promise pregnancy.

### Why is Letrozole often chosen before other options?

Clomiphene citrate was the default first tablet for years. Studies in PCOS have generally found that letrozole achieves similar or better ovulation and pregnancy results, with a lower chance of twins. That combination is the main reason it moved to the front of the treatment ladder.

### Who is a good candidate?

Letrozole makes most sense when periods are irregular or absent, ovulation tests point to a problem, and the fallopian tubes and semen analysis look reassuring. Your age, body weight and metabolic health also shape the plan.

### What does a Letrozole cycle involve?

Most protocols begin early in the cycle and run for a set number of days. Serial ultrasound scans, known as follicular studies, measure how a follicle is growing. Once the follicle is mature, the team advises timed intercourse or an IUI. A pregnancy test follows at the advised time.

The dose and duration are individual. Please do not change them, and do not restart a missed course, without speaking to your doctor.

### What side effects can happen?

Headache, hot flushes, fatigue, mood changes and mild lower abdominal discomfort are the most commonly reported effects. They usually settle. Report anything that persists or feels unusual.

### What are the limitations?

Ovulation medicines can stimulate more than one follicle, which can lead to twins. The risk is lower with letrozole than with older options, but it is not zero. Severe ovarian overstimulation is uncommon with oral treatment, and monitoring is how it gets caught early.

A cycle without pregnancy is very common. It rarely means the door has closed. Doctors often refine the plan after reviewing how the ovaries responded.

### Is Letrozole used with IUI?

When ovulation is confirmed and semen parameters are suitable, letrozole is often paired with IUI. Prepared sperm is placed into the uterus close to ovulation. Fertilisation still takes place inside the reproductive tract.

### Common myths about Letrozole

"Letrozole is an injection." It is a tablet.

"Letrozole ensures twins." It does not. Twins remain a possibility, and monitoring helps manage that risk.

"One unsuccessful cycle means treatment has ended." Many couples conceive once the plan has been refined.

### How do lifestyle and emotions fit in?

Adequate sleep, regular movement and balanced meals support insulin sensitivity and hormonal balance, both relevant in PCOS. Rice, dal, roti and sweets can remain part of a balanced diet when portions are sensible. Waiting out each cycle is emotionally draining, and counselling eases that strain for many couples. A delayed pregnancy affects both partners, and neither should carry the blame alone.

### When should you see a fertility specialist?

Speak to a specialist before starting letrozole, particularly if periods are very irregular or absent. Evaluation is generally advised after 12 months of trying for women under 35, and after 6 months from age 35.

### When is urgent care needed?

Seek prompt medical care for severe abdominal or pelvic pain, bloating with breathlessness, markedly reduced urine output, heavy bleeding, fainting, one-sided pelvic pain in early pregnancy, or fever after a procedure.

### Key Takeaways
- Letrozole is the recommended first medicine for many women with PCOS and irregular ovulation.
- It is a prescription tablet that needs monitoring.
- Follicular scans guide the timing of intercourse or IUI.
- Pregnancy cannot be guaranteed, and some cycles will not work.
- Both partners are usually assessed before a plan is finalised.

### Final Thoughts

For many women with PCOS, letrozole offers a practical, well-studied route to ovulation. Whether it suits you depends on your cycle pattern, test results and overall health. If you want to talk it through, Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore can review your history and outline the options.

Medical Disclaimer: This article is for education only and does not replace professional medical advice. Treatment outcomes differ from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **Is letrozole given as an injection?**
   No. Letrozole is an oral tablet. Your doctor sets the dose and number of days based on your cycle history, blood tests and ultrasound findings. Injections enter the picture only in certain plans, usually when the ovary does not respond well to tablets. Do not start letrozole without a prescription, even if a friend or an online source suggests it.
2. **How long before you know whether letrozole has worked?**
   The response is usually judged across one or more cycles. Follicular scans and symptoms show whether ovulation occurred, and a pregnancy test is taken at the recommended time, typically about two weeks after ovulation. A cycle without pregnancy is common and does not signal permanent failure. Your doctor will review what happened before recommending the next step.
3. **Is letrozole with IUI available in Bangalore?**
   Yes, for suitable couples. It is often used alongside IUI when ovulation can be induced and tracked on scans, and when semen quality and tubal status look appropriate. EVE Women and Fertility Clinic in Gunjur offers ovulation induction, follicle monitoring and IUI. Patients from East Bangalore can book a consultation with Dr. Swati Shree to discuss whether this suits them.
4. **What happens if letrozole does not lead to pregnancy?**
   The next step depends on what the cycles showed. Options can include adjusting the dosing schedule, adding closer monitoring, moving to IUI, or checking other factors such as sperm quality and the fallopian tubes. IVF is usually discussed when ovulation treatments have not worked or another factor makes it more appropriate. Advanced IVF laboratory procedures are carried out at associated, registered ART centres.
5. **Can letrozole be used for irregular periods without PCOS?**
   It can be considered, but only once the cause is clear. Irregular periods may stem from thyroid disease, raised prolactin or other hormonal conditions, and these need investigation first. If a specialist confirms that ovulation is the problem, letrozole may be an option. The decision rests on your full clinical picture, not on your period pattern alone.

### Sources and further reading

- [NHS: Polycystic ovary syndrome](https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/)
- [NICHD: Polycystic ovary syndrome](https://www.nichd.nih.gov/health/topics/pcos)
- [ACOG: Polycystic ovary syndrome](https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos)

Reviewer box: use global text.

---

## Post 14 · PCOS and IVF

```yaml
title: "PCOS and IVF: When Is IVF Needed and When Is It Not?"
description: "Is IVF always needed for PCOS? Learn when simpler treatments come first, when IVF may be considered, and what to ask your doctor before deciding."
url: /blog/pcos-ivf-when-needed-or-not/
lastReviewed: "2026-10-04"
category: "PCOS & Fertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-04"
dateModified: "2026-10-04"
badge: female-infertility
readingTime: 4
cluster: "PCOS & Fertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Polycystic ovary syndrome", alternateName: ["PCOS"]}
related: [/conditions/pcos/, /services/follicular-monitoring/]
posts: [/blog/pcos-pregnancy-natural-conception/, /blog/pcos-ovulation-irregular-periods-pregnancy/, /blog/iui-vs-ivf-which-fertility-treatment/, /blog/pcos-age-metabolic-health-fertility-planning/]
```

H1: PCOS and IVF: When Is IVF Needed and When Is It Not?

> **Quick answer:** For most women with PCOS, the sequence runs roughly like this. First, confirm whether ovulation is happening. Then treat it if it is not, consider IUI where it suits, and move to IVF if pregnancy still does not follow. Occasionally IVF is brought forward for a specific reason. Your fertility specialist sets that order after a full assessment.

Many women with PCOS hear that IVF is the only way forward. In practice, it usually is not. Most women start with a close look at ovulation, and many conceive with ovulation treatment or IUI. IVF tends to come in when those steps have not worked, or when the initial workup points to it sooner.

This article is part of our [PCOS and fertility](/blog/pcos-fertility-ovulation-iui-ivf/) guide.

### Why doesn't PCOS always lead to IVF?

PCOS mostly disrupts ovulation. The eggs are often still there, but they may be released less often and at unpredictable times. Blocked tubes or a significant sperm problem are separate issues, and each needs its own treatment. Your partner's semen report, your ovarian reserve, your age and how long you have been trying all matter too. A PCOS diagnosis alone seldom settles the question.

### When are simpler treatments tried first?

Less intensive options usually come first when ovulation responds to medicines and monitoring, the fallopian tubes are open, and the semen report is suitable for IUI or timed intercourse.

### When may IVF be considered?

Here is where IVF typically enters the discussion.

| Situation | Often tried first | IVF may be considered when |
|---|---|---|
| Ovulation | Irregular, but achievable with induction and monitoring | Ovulation is not achieved despite treatment |
| Fallopian tubes | Open | Tubes are blocked or damaged |
| Semen analysis | Suitable for IUI or timed intercourse | Severe male-factor problems are present, where ICSI may be discussed |
| Treatment response | Monitored cycles still being assessed | Monitored cycles have not led to pregnancy, as judged by your doctor |
| Age and ovarian reserve | Time allows the steps to be tried in order | Time is a significant factor |


### What does IVF involve for women with PCOS?

An IVF cycle means stimulating the ovaries, tracking follicle growth with ultrasound and blood tests, retrieving the eggs, fertilising them in the laboratory and transferring an embryo into the uterus. Women with PCOS can respond briskly to stimulation, which is why the protocol is planned with care to reduce the risk of ovarian hyperstimulation syndrome (OHSS). A higher risk is not the same as a certainty.

Dr. Swati Shree can assess you at EVE Women and Fertility Clinic in Gunjur, Bangalore, and guide your IVF treatment from there. The laboratory stages are carried out at associated, registered ART centres.

### Is IVF better than IUI for PCOS?

Not as a rule. IVF is not a higher level that everyone eventually moves up to. IUI is simpler and suits selected couples well. IVF earns its place when its extra steps offer a particular couple a realistic advantage. Your evaluation should guide that call, not the PCOS label.

### Which myths about PCOS and IVF should you drop?

"PCOS means IVF is the only way to conceive." Most women with PCOS never need it.

"One failed IUI cycle leaves IVF as the only option." How that cycle went, and what the full workup shows, decide the next step.

"IVF is always quicker." It can shorten the timeline in some situations, but it is more intensive, so the timing is worth discussing in detail with your doctor.

### When should you seek urgent care?

Get medical help without delay if you develop severe abdominal pain, rapid swelling, breathlessness, reduced urine, heavy bleeding, fainting or fever after a procedure. These can signal complications and should not wait.

### When to see a fertility specialist?

Book an evaluation sooner if your periods are very irregular or have stopped. For women under 35, a workup is generally considered after 12 months of trying. From age 35, it is usually suggested after 6 months. If you already know about tubal disease, endometriosis or an earlier fertility treatment, do not wait for those timelines.

### Key Takeaways
- PCOS alone does not decide whether you need IVF.
- Ovulation treatment and IUI are often tried before IVF.
- IVF may be recommended when tubes, sperm, ovarian reserve or past treatment point that way.
- Both partners should be assessed before a treatment is chosen.
- The plan should follow your own evaluation.

### Final Thoughts

Most treatment paths with PCOS are built one step at a time, and that is reasonable. A few well-chosen tests and an honest conversation with your doctor usually make the next step much clearer. If you want to talk through your cycles and options, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **Does PCOS always end in IVF?**
   Usually not. Many women with PCOS are first checked for ovulation and may be offered induction or IUI. IVF is generally considered once those options have not led to pregnancy, or sooner if a factor such as blocked tubes or a significant male-factor problem is found. Your specialist will explain how those findings apply to you.
2. **Why would a doctor skip IUI and suggest IVF?**
   The usual reasons include blocked or damaged fallopian tubes, severely reduced sperm parameters, several monitored cycles without pregnancy, or conditions such as significant endometriosis. IUI places prepared sperm into the uterus, while IVF fertilises eggs in the laboratory. Your own tests and history will show which route makes sense.
3. **Is IVF more effective than IUI for PCOS?**
   There is no single answer, because results depend on age, ovulation, sperm quality, tubal health, ovarian reserve and the reason for infertility. Published figures are averages across many people, so they rarely describe one couple accurately. Ask your doctor what your own factors suggest for each option.
4. **Is IVF risky for women with PCOS?**
   IVF is widely used, but women with PCOS have a higher chance of ovarian hyperstimulation syndrome, since their ovaries can react strongly to stimulation medicines. Protocols are adjusted and monitored closely to lower that risk. Severe abdominal pain, rapid swelling, breathlessness or reduced urine after treatment needs prompt medical review.
5. **Where can I get PCOS fertility care in East Bangalore?**
   Dr. Swati Shree sees patients at EVE Women and Fertility Clinic in Gunjur, Bangalore. Ovulation induction, follicle monitoring and IUI are offered at the clinic, and IVF laboratory procedures are carried out at associated, registered ART centres. Patients from Whitefield, Varthur and Sarjapur Road can book a consultation to talk through their cycle history.

### Sources and further reading

- [NHS: Polycystic ovary syndrome](https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/)
- [NICHD: Polycystic ovary syndrome](https://www.nichd.nih.gov/health/topics/pcos)
- [ACOG: Polycystic ovary syndrome](https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos)

Reviewer box: use global text.

---

## Post 15 · PCOS After 30

```yaml
title: "PCOS After 30: Age, Metabolic Health and Fertility Planning"
description: "PCOS after 30 can still allow pregnancy. Learn how age, metabolic health and ovarian reserve shape fertility planning, and when to see a specialist early."
url: /blog/pcos-age-metabolic-health-fertility-planning/
lastReviewed: "2026-10-04"
category: "PCOS & Fertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-04"
dateModified: "2026-10-04"
badge: ovarian-reserve
readingTime: 5
cluster: "PCOS & Fertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Polycystic ovary syndrome", alternateName: ["PCOS"]}
related: [/conditions/pcos/, /services/follicular-monitoring/]
posts: [/blog/endometriosis-and-ivf/, /blog/fertility-after-35-when-to-seek-help/, /blog/pcos-ovulation-irregular-periods-pregnancy/]
```

H1: PCOS After 30: Age, Metabolic Health and Fertility Planning

> **Quick answer:** Can you still get pregnant with PCOS after 30? Yes, many women with PCOS in their 30s conceive naturally or with treatment. Age narrows the window mainly because irregular cycles hide fertile days, and egg quality keeps shifting in the background. For that reason, many specialists do not wait the full 12 months of trying when periods are irregular.

Most women with PCOS can still conceive after 30. The condition itself does not change at that age, but the planning around it does. Ovulation often stays irregular, egg numbers decline gradually, and blood sugar or weight can affect both conception and the health of a pregnancy. Knowing what to check, and when to check it, saves months.

This article is part of our [PCOS and fertility](/blog/pcos-fertility-ovulation-iui-ivf/) guide.

### Why does age matter more with PCOS?

Egg supply declines with age in every woman. With PCOS, the bigger problem is that cycles are hard to read. If ovulation happens only now and then, fertile days pass without anyone noticing. Those unnoticed months add up, and they add up faster after 30.

### How does metabolic health affect fertility?

Insulin resistance is common in PCOS. The body produces more insulin to keep blood sugar in range, and that extra insulin can push the ovaries to make more androgens. Higher androgen levels can disturb ovulation.

Metabolic health also shapes the pregnancy itself. Women with PCOS carry a higher risk of gestational diabetes and high blood pressure, so these are worth checking before conception rather than after. A pre-pregnancy review usually includes:
- Fasting blood sugar or HbA1c
- Lipid profile (cholesterol and triglycerides)
- Thyroid function (TSH)
- Blood pressure and body weight

Modest, steady weight loss helps some women ovulate more regularly. The aim is a healthier cycle, not a particular number on the scale.

### Which fertility tests matter after 30?

AMH and antral follicle count estimate ovarian reserve, meaning the number of eggs remaining. They say little about egg quality or the likelihood of natural conception. AMH tends to run high in PCOS, which makes the number easy to misread. A high result does not guarantee easy conception, and a lower one does not close the door.

| Area | Why it matters after 30 | Common next step |
|---|---|---|
| Ovulation pattern | Missed fertile windows add months | Cycle review, hormone tests, ultrasound |
| Metabolic health | Affects ovulation and pregnancy risk | Glucose, HbA1c, lipid and thyroid tests |
| Ovarian reserve | Helps plan timing and treatment | AMH and antral follicle count |
| Semen analysis | Male factors contribute to many cases | Partner's semen test |
| Fallopian tubes | Needed before IUI or IVF decisions | Tubal assessment if advised |


### When should you start fertility planning?

There is no single age cutoff. A specialist looks at your age, cycle pattern, ovarian reserve, tubal status and your partner's semen report as one picture. Many couples lose time waiting for periods to become regular before anyone checks anything. Starting early keeps more options available.

### What treatment options are usually discussed?

The assessment shapes the plan. When ovulation is irregular and other tests are normal, ovulation induction with oral medicines is often the first step. Follicular monitoring then helps time intercourse or IUI. IVF may come up sooner if age, ovarian reserve or another factor makes it the better fit. Dr. Swati Shree evaluates patients at EVE, and IVF laboratory work is carried out at associated, registered ART centres.

### Can everyday habits help?

They can, and the changes do not need to be dramatic. Rice, dal and roti can stay on the plate. Smaller portions of refined carbohydrates, more protein and fibre at each meal, a short walk after eating, regular sleep and quitting smoking all support metabolic health. Planning a pregnancy is also stressful, and talking to someone about it is a reasonable step.

### When should you seek urgent care?

Get medical help quickly if you have:
- Severe or one-sided lower abdominal pain, dizziness or fainting, or bleeding in early pregnancy, which may point to an ectopic pregnancy
- Heavy bleeding during pregnancy
- Severe bloating, breathlessness or reduced urine after fertility injections, which may point to ovarian hyperstimulation
- Fever after any procedure

If you have not had a period for three months or more, book a review even if you feel well.

### Key Takeaways
- Natural conception or pregnancy with treatment remains possible after 30 with PCOS.
- Irregular ovulation and age both shorten the time available, so early assessment helps.
- Metabolic health affects ovulation and pregnancy safety, and it can be checked before conception.
- AMH reflects ovarian reserve, not egg quality or the chance of pregnancy on its own.
- There is no universal age cutoff, so the plan should follow a full assessment.

### Final Thoughts

Planning after 30 with PCOS asks for clarity more than urgency. Once you know where your ovulation, metabolic health and ovarian reserve stand, the next step becomes much easier to choose. If you are planning a pregnancy, a consultation with Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore, is a sensible place to begin.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### FAQs

1. **Is it too late to try for a baby with PCOS at 30 or older?**
   Not necessarily. Age matters, but many women over 30 with PCOS do conceive. What matters more is how far along your planning is. Early checks of ovulation, metabolic health, your partner's semen analysis and ovarian reserve help you move forward without guesswork. There is no universal cutoff, so your timeline depends on your own picture.
2. **Should I get an AMH test if I have PCOS?**
   AMH is often part of the assessment in PCOS, but the result needs careful reading. PCOS commonly raises AMH, so a high value does not mean egg quality is good, and a lower value does not rule out pregnancy. Your doctor will read AMH alongside your cycle pattern, ultrasound findings and your partner's semen report before suggesting a next step.
3. **Can PCOS and diabetes affect pregnancy?**
   They can. Women with PCOS have a higher risk of gestational diabetes and high blood pressure during pregnancy. Screening blood sugar and blood pressure before conception lets your doctor plan ahead, and good metabolic control before and during pregnancy supports a healthier outcome. It is worth raising this early.
4. **Do I need IVF straight away after 30 with PCOS?**
   Usually not. Many women with PCOS begin with ovulation induction and monitoring, and IUI may be considered in suitable cases. IVF comes into the picture when other factors make it more appropriate, such as tubal problems, a significant semen issue, age-related concerns or earlier treatment that did not lead to pregnancy.
5. **Where can I get a PCOS fertility assessment in Bangalore?**
   EVE Women and Fertility Clinic in Gunjur, Bangalore, offers fertility consultation, ovulation induction, follicle monitoring and IUI under Dr. Swati Shree. Bring previous blood test reports and ultrasound records to your first visit. For IVF, laboratory work is carried out at associated, registered ART centres.

### Sources and further reading

- [NHS: Polycystic ovary syndrome](https://www.nhs.uk/conditions/polycystic-ovary-syndrome-pcos/)
- [NICHD: Polycystic ovary syndrome](https://www.nichd.nih.gov/health/topics/pcos)
- [ACOG: Polycystic ovary syndrome](https://www.acog.org/womens-health/faqs/polycystic-ovary-syndrome-pcos)

Reviewer box: use global text.

---

## Post 16 · Female Infertility

```yaml
title: "Female Infertility Causes, Tests & Treatment | Bangalore"
description: "Why some women find it hard to conceive, which fertility tests find the cause, and what treatment usually looks like. Guidance from a Bangalore specialist."
url: /blog/female-infertility-causes-symptoms-tests-treatment/
lastReviewed: "2026-10-05"
category: "Female Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-05"
dateModified: "2026-10-05"
badge: male-fertility
readingTime: 17
cluster: "Female Infertility"
pillar: true
keywords: []
about: {type: MedicalCondition, name: "Female infertility"}
related: [/conditions/female-factor-infertility/, /services/fertility-evaluation/]
posts: [/blog/pcos-fertility-ovulation-iui-ivf/, /blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/, /blog/male-infertility-causes-semen-analysis-treatment/, /blog/female-infertility-tests-amh-ultrasound-hsg/, /blog/unexplained-infertility-normal-tests/, /blog/low-amh-ovarian-reserve-fertility/]
```

H1: Female Infertility: Causes, Signs, Tests and Treatment

> **Quick answer:** The usual reasons a woman struggles to conceive are irregular or absent ovulation, blocked or damaged fallopian tubes, problems inside the uterus, endometriosis, and the fall in egg numbers and quality that comes with age. For some couples, tests come back normal and no single reason is found. Testing typically starts with a consultation, hormone blood tests including AMH, a transvaginal ultrasound and a check of the tubes. The husband or partner should get a semen analysis at the same time. Treatment depends on what the tests show. It might be thyroid medicine, tablets to help you ovulate, IUI, a small surgical procedure, or IVF.

Female infertility is when a woman doesn't get pregnant after a year of regular, unprotected sex. If she is 35 or older, doctors shorten that to six months. In most cases the cause can be found with a handful of simple tests, and a good number of those causes respond to treatment.

It's more common than most people think. The World Health Organization estimates that about 1 in 6 people of reproductive age will face infertility at some point. In India, where relatives start asking about "good news" a few months after the wedding, that number rarely gets talked about.

Below you'll find what causes infertility in women, which symptoms deserve attention, how doctors test for it, and what treatment usually involves.

### What counts as female infertility?

Doctors use time and age to decide when to start investigating. If you're under 35, the usual advice is to see a doctor after 12 months of trying. Between 35 and 40, that drops to six months. Over 40, most specialists would rather see you right away.

"Trying" here means having sex every two or three days through the month, without contraception. Couples who live apart for work or travel a lot may not have really been trying for as long as the calendar suggests, and that's worth mentioning to your doctor.

## Primary and secondary infertility

Primary infertility means you have never been pregnant. Secondary infertility means you've been pregnant before, whether that pregnancy ended in a birth or not, and now it isn't happening again.

Secondary infertility catches a lot of couples off guard. Having a child already doesn't protect against problems later. Age, a new infection, a caesarean section, weight gain or a thyroid problem that wasn't there before can all change things.

## Is it always the woman's problem?

No, and this belief causes real harm in Indian families. Infertility can sit with the woman, the man, both of them, or neither in any way tests can detect. Problems with sperm play a part for a large share of couples.

That's why a proper evaluation includes both partners from the first visit. A semen test is quick and comfortable. Skipping it can mean months of scans and medicines for the woman that were never going to solve the problem.

### Why it helps to get checked sooner

Women are born with every egg they will ever have. The number goes down every year, and so does the quality, with the change becoming more noticeable after the mid thirties.

A lot of fertility problems are simple to pick up. Thyroid imbalance, high prolactin and PCOS-related ovulation problems usually show up on basic blood tests and a scan. Waiting two or three years in the hope that things will settle can use up time that would have been more useful earlier.

Seeing a specialist doesn't commit you to IVF. Quite often the first appointment ends with a clearer picture and a small next step, like better timing or a course of medicine.

### What causes infertility in women?

Doctors sort the causes into a few broad groups. It's common to have more than one.

| Cause | What goes wrong | Examples |
|---|---|---|
| Ovulation problems | Eggs are released irregularly, or not at all | PCOS, thyroid disorders, high prolactin, being very underweight or overweight |
| Tubal problems | Egg and sperm can't meet | Old pelvic infection, genital TB, past surgery, endometriosis |
| Uterine problems | An embryo may find it harder to implant | Fibroids, polyps, a uterine septum, scar tissue |
| Endometriosis | Inflammation and scarring around the pelvic organs | Painful periods, ovarian cysts called endometriomas |
| Age and ovarian reserve | Fewer eggs, and lower egg quality | Low AMH, age over 35, early menopause |
| Unexplained | Standard tests are normal | Good reports, but no pregnancy |


## Ovulation problems

If no egg is released in a cycle, pregnancy can't happen that month. Irregular ovulation is one of the most frequent reasons women come for a fertility consultation.

PCOS, or polycystic ovary syndrome, is the condition most people have heard of. Hormone levels shift in a way that makes ovulation unpredictable. Periods may come every 40 or 60 days, or skip months altogether. Some women also notice acne, extra hair on the face or body, or weight that's hard to shift, though plenty of women with PCOS have none of these. PCOS doesn't mean you can't have a baby. A lot of women with PCOS get pregnant, some on their own and some with a little help to ovulate.

Thyroid problems are common among Indian women and can upset the cycle whether the thyroid is underactive or overactive. They're usually easy to treat once found.

High prolactin, a hormone normally linked to breastfeeding, can switch off ovulation. A milky discharge from the breasts outside of breastfeeding is sometimes the clue.

Ovulation can also stop when the brain cuts back the hormone signals that drive it. This tends to happen with very low body weight, heavy training or severe ongoing stress. And in a small group of women, the ovaries stop working normally before 40. This is called premature ovarian insufficiency, and periods often become patchy or stop.

## Tubal problems

The egg travels from the ovary down the fallopian tube, and that's normally where sperm meets it. If both tubes are blocked or badly damaged, fertilisation can't take place.

Pelvic infection is the most common reason. Chlamydia and gonorrhoea can damage the tubes quietly, sometimes years before anyone tries for a baby. In India, genital tuberculosis is another important cause, and it often gives no obvious symptoms. Previous abdominal or pelvic surgery, a burst appendix, an earlier ectopic pregnancy and endometriosis can also leave the tubes scarred.

Most women with blocked tubes feel nothing unusual. That's the reason a tube test is part of a routine work-up rather than something saved for later.

## Problems inside the uterus

An embryo needs a healthy lining and a cavity of fairly normal shape to settle in.

Fibroids are non-cancerous lumps of muscle, and they're very common. The ones that push into the cavity, called submucosal fibroids, are the type most likely to get in the way. Fibroids in the outer wall often don't affect fertility at all.

Polyps are small growths of the lining. A septum is a band of tissue, present from birth, that divides the cavity. Scar tissue inside the uterus (Asherman syndrome) can form after infection or repeated procedures, and very light periods after a past D&C can be a hint that it's there. Adenomyosis, where the lining grows into the muscle wall, tends to cause heavy and painful periods.

## Endometriosis

In endometriosis, tissue similar to the lining of the uterus grows outside it, usually on the ovaries, the tubes and the walls of the pelvis. It can cause inflammation, scarring and cysts on the ovary called endometriomas.

Plenty of women with endometriosis conceive without treatment. In others it affects how the tubes work, the quality of the eggs or the number left in the ovaries, which is why it needs careful assessment rather than a blanket answer.

## Age and ovarian reserve

Ovarian reserve is the number of eggs remaining. It falls naturally with age. Egg quality drops too, and older eggs are more likely to carry chromosomal errors, which partly explains why miscarriage becomes more common later on.

A low AMH result tells you the reserve is smaller than average for your age. It doesn't mean pregnancy is impossible. AMH is better at predicting how your ovaries will respond to fertility drugs than at predicting whether you'll conceive naturally.

## Unexplained infertility

Sometimes everything checks out. Hormones fine, tubes open, scan normal, semen report normal. And still no pregnancy.

Doctors call this [unexplained infertility](/blog/unexplained-infertility-normal-tests/). It doesn't mean there's nothing wrong, only that whatever is going on is too subtle for routine tests to see. Couples in this group often do well with ovulation induction and IUI, and IVF is an option if that doesn't work.

## Lifestyle factors

Weight at either extreme, smoking (including passive smoke at home), heavy drinking, poorly controlled diabetes and some medicines can all lower fertility. So can past chemotherapy or radiation. These are rarely the whole story, and none of them is a reason to blame yourself.

### What are the signs of female infertility?

For most women, the only sign is that pregnancy isn't happening. You can feel completely healthy and still have a blocked tube or low reserve.

Some symptoms do point towards a condition worth checking. Cycles shorter than 21 days or longer than 35 days, periods that don't come for months, or periods that have become more painful year after year are all worth mentioning. So is deep pain during sex, very heavy bleeding, bleeding between periods, or periods that became very light after a uterine procedure.

Excess facial hair, persistent acne and sudden weight gain can go along with PCOS. A milky breast discharge when you aren't breastfeeding may mean high prolactin. Hot flushes or periods stopping before 40 can suggest the ovaries are winding down early.

Your history matters too. A past pelvic infection, TB, abdominal surgery, or two or more miscarriages are good reasons to see a specialist early.

None of these on its own means you're infertile. They just mean it's sensible not to wait.

### How do doctors diagnose female infertility?

Testing happens in stages, and not everyone needs every test. Your doctor will pick what's useful based on your age, your history and anything already done.

## The first appointment

Most of the first visit is talking. Expect questions about how long you've been trying and how often you have sex, what your periods are like, any earlier pregnancies, miscarriages or terminations, past infections or operations, medicines and supplements, your work hours, and your partner's health.

Bring every old report you have, including ones that seemed unimportant at the time. They often save a repeat test.

## Fertility tests for women

| Test | What it tells you | Usual timing |
|---|---|---|
| FSH, LH and estradiol | How the hormones controlling the ovaries are working | Day 2 to 5 of the cycle |
| AMH | An estimate of how many eggs remain | Any day |
| TSH | Thyroid function | Any day |
| Prolactin | Whether prolactin is raised | Any day, usually in the morning |
| Progesterone | Whether ovulation took place | About a week before your period is due |
| Transvaginal ultrasound and antral follicle count | Uterus, ovaries, fibroids, cysts and egg reserve | Early in the cycle |
| HSG or HyCoSy | Whether the tubes are open, and the shape of the uterus | After bleeding stops, before ovulation |
| Follicular study | Follicle growth and the timing of ovulation | Several scans across one cycle |


Blood sugar, haemoglobin, rubella immunity and infection screening are often added as part of planning for pregnancy.

## Making sense of the main tests

AMH is a hormone released by the small follicles in your ovaries. Higher levels generally mean more eggs in reserve. It says nothing about egg quality, and it can't tell you when menopause will arrive.

A transvaginal ultrasound uses a slim probe placed in the vagina. It gives a much clearer view than a scan over the tummy and can show fibroids, polyps, cysts and the typical ovary pattern of PCOS. The sonographer also counts the small resting follicles, which is another way of estimating reserve.

For an HSG, a dye is passed gently through the cervix while X-ray pictures are taken. If the dye spills out of the ends of the tubes, they're open. Most women get some cramping that settles within a short while. HyCoSy is a similar test done with ultrasound instead of X-ray.

A follicular study is a series of scans, usually a couple of days apart, to watch the egg follicle grow. Many patients in Bangalore know it simply as "follicular monitoring." It confirms whether you're ovulating and helps time intercourse or IUI.

## When more tests are needed

If the first round raises questions, your doctor might suggest a hysteroscopy, where a thin camera looks inside the uterus. Polyps, a septum or scar tissue can often be dealt with during the same procedure. A laparoscopy, which is keyhole surgery under anaesthesia, may be recommended when endometriosis or pelvic scarring is suspected. Women who have had repeated miscarriages may need genetic tests and blood tests for clotting conditions such as antiphospholipid syndrome.

## Testing your partner

A semen analysis looks at how many sperm there are, how well they move and their shape. One abnormal result is often repeated after a few weeks, since sperm counts can vary from sample to sample. Many men feel awkward about this test. It's routine, and it's one of the most useful tests a couple can do.

### How is female infertility treated?

The plan depends on the cause, your age, how long you've been trying and your partner's report. Usually doctors start with the simplest option that has a fair chance of working, and step up if needed.

## Treating what's underneath

Sometimes one correction is enough. Bringing thyroid levels back into range, lowering prolactin or getting diabetes under control can allow regular ovulation to return in some women.

## Weight, food and habits

For women with PCOS who are carrying extra weight, even losing a modest amount can make periods more regular and help ovulation. Women who are underweight may find ovulation returns once they gain a little. Both partners benefit from giving up smoking.

## Medicines to help you ovulate

Ovulation induction uses medicine to help the ovaries release an egg. Letrozole and clomiphene are tablets commonly used for this. Some women need injectable hormones called gonadotropins.

These should only be taken with a doctor's supervision and follicle scans. Taken blindly, they can cause twins or triplets, or simply not work while you lose months. Please don't start, stop or change fertility medicines on your own.

## IUI

In IUI, or intrauterine insemination, your partner's semen sample is washed and concentrated in the lab. Around the time you ovulate, it's placed inside the uterus through a thin, soft tube. It takes a few minutes and feels much like a Pap smear.

IUI is often suggested for mild sperm problems, ovulation problems alongside ovulation induction, unexplained infertility, mild endometriosis, or when intercourse itself is difficult. At least one tube needs to be open and the sperm count reasonable for it to have a fair chance.

## Surgery

Surgery helps when something structural is in the way. That might be removing polyps or a septum through hysteroscopy, taking out certain fibroids, treating endometriosis, or freeing adhesions. Not every fibroid or cyst needs to come out, and surgery on the ovaries can reduce egg reserve, so your doctor will weigh the likely gain against the risk.

## IVF and ICSI

During IVF, injections stimulate the ovaries to grow several eggs. These are collected under sedation and mixed with sperm in a lab. A few days later, an embryo is placed into the uterus. ICSI is a variation where a single sperm is injected into each egg, often used when sperm numbers or movement are low.

IVF is usually considered for blocked tubes, severe endometriosis, low ovarian reserve, significant male factor, unexplained infertility after simpler treatment hasn't worked, or when age makes time a bigger concern.

At EVE Women and Fertility Clinic in Gunjur, Dr. Swati Shree can carry out your evaluation and plan treatment. IVF laboratory procedures are carried out at associated, registered ART centres.

## Donor eggs and egg freezing

For women with very low reserve or premature ovarian insufficiency, donor eggs may come up in discussion. In India this falls under the ART (Regulation) Act, 2021, and eligibility rules apply, so it's best talked through in detail with your specialist.

Egg freezing lets some women keep the option of pregnancy for later, for example before cancer treatment. It works better at younger ages and can't promise a future pregnancy.

## IUI and IVF compared

|  | IUI | IVF |
|---|---|---|
| Where fertilisation happens | Inside the body | In the lab |
| Fallopian tubes | At least one must be open | Not required |
| Medicines | Tablets or low-dose injections | Daily injections during stimulation |
| Procedure | Short, no anaesthesia | Egg collection under sedation, then embryo transfer |
| Often considered for | Milder problems, earlier in treatment | Blocked tubes, severe male factor, low reserve, after IUI cycles that didn't work |


### What does a fertility work-up look like in practice?

For most couples it goes something like this. You meet the doctor together and go through your history. Early in your next cycle, around day 2 to 5, you have blood tests and a scan. Your partner gives a semen sample. Once your period finishes, the tubes are checked with an HSG or HyCoSy. Later that cycle, a progesterone test or a few follicle scans show whether you ovulated.

Then you sit down with the results and talk about what they mean and what to do next. That could be timed intercourse, ovulation tablets, IUI, a procedure, or a referral pathway towards IVF.

The basic tests can usually be finished within one or two cycles.

### Food, exercise and looking after yourself

There isn't a single food that makes you fertile, and there isn't one that ruins your chances either. An ordinary balanced Indian diet works well. Dal, rajma and chana, seasonal vegetables and fruit, curd, a handful of nuts, and whole grains like ragi, jowar, brown rice or whole wheat rotis.

If you have PCOS, cutting back on mithai, sugary drinks, bakery snacks and large helpings of white rice tends to help, along with a bit more protein at each meal. Small changes you can keep up beat a strict diet you drop after three weeks.

Folic acid is generally advised for anyone trying to conceive. Your doctor can suggest the right one.

Moderate exercise like brisk walking, yoga or swimming helps with weight and insulin. Extreme training on very little food can do the opposite. Sleep matters too, and that's hard for couples in Whitefield or Sarjapur Road dealing with long commutes, late calls and night shifts. Do what's realistic.

The emotional side gets less attention than it should. The monthly wait, the disappointment, the questions at family functions, the unasked-for advice. It wears people down. Stress on its own is rarely what causes infertility, so working long hours or feeling anxious doesn't mean you did this. Talking honestly with your partner, deciding together how much to share with family, and seeing a counsellor if things feel heavy can all make the months easier.

### Risks and limits of treatment

Supervised fertility treatment is generally safe, but it isn't free of risk.

Ovulation medicines and IVF raise the chance of twins or more, and multiple pregnancies carry more risk for both mother and babies. Regular scans help keep that risk down.

Some women over-respond to injectable hormones and develop ovarian hyperstimulation syndrome, or OHSS. Mild OHSS feels like bloating and discomfort. Severe OHSS is uncommon but needs urgent care.

A pregnancy can also implant outside the uterus, usually in a tube. Women with tubal damage have a higher chance of this ectopic pregnancy.

Tests like HSG and hysteroscopy, and egg collection in IVF, can leave you with cramps or spotting for a day or two.

And no treatment can promise a baby. Treatment raises the odds, and how much depends on age, diagnosis, egg reserve, sperm quality and other individual factors.

### Myths worth letting go of

The idea that infertility is the woman's fault is probably the most damaging one. Male factors are common, and both partners need testing.

Many women hear that PCOS means they'll never conceive. Most women with PCOS who want a baby can get pregnant, often with fairly simple help to ovulate.

Low AMH gets treated like a final verdict. It means fewer eggs, and women with low AMH do get pregnant.

Regular periods are reassuring, but they don't rule out blocked tubes, endometriosis or a sperm problem.

"Just relax and it'll happen" is well meant. Relaxing won't open a tube or fix a thyroid, though.

Some families worry that IVF babies aren't "normal." The vast majority of children born through IVF are healthy, and the treatment has been used and studied for decades.

Probably the costliest mistake is spending years on herbal mixtures and wait-and-see advice, especially after 35, when time is worth more.

### Questions you might want to ask your doctor
- Which tests do we both need, and what will each one tell us?
- What do my AMH and scan results mean at my age?
- Are my tubes open, and am I ovulating?
- Have you found a cause, or does this look unexplained?
- What would you try first, and how long before we change the plan?
- Which side effects or warning signs should I watch for?
- If we need IVF, how does that work and where is it done?
- Is there anything we can do at home that actually helps?

### When should you see a fertility specialist?

Book an appointment if you're under 35 and have been trying for a year, if you're between 35 and 40 and it's been six months, or if you're over 40 and want to conceive. Don't wait the full time if your periods are very irregular or have stopped, if you already know you have PCOS, endometriosis, fibroids or a thyroid problem, if you've had pelvic infection, TB or pelvic surgery, if you've had two or more miscarriages, or if your partner has a known sperm problem or hasn't been tested yet.

For women in Gunjur, Varthur, Whitefield, Sarjapur Road and the rest of East Bangalore, having a fertility specialist close by makes the repeated scans and follow-up visits much easier to fit around work.

## Get urgent help if you notice
- Severe tummy pain, swelling, breathlessness or passing very little urine after fertility injections, which can mean OHSS
- Pain on one side of the pelvis, pain in the shoulder tip, dizziness, fainting or bleeding in early pregnancy, which can mean an ectopic pregnancy
- Heavy bleeding during pregnancy
- Fever, a bad-smelling discharge or severe pain after any procedure
- Severe pelvic pain with fever, which may be an infection

### Key Takeaways
- Infertility is diagnosed after 12 months of trying, or 6 months if you're 35 or older.
- Ovulation problems, blocked tubes, uterine conditions, endometriosis and age-related changes in egg reserve are the most common causes.
- Many women have no symptoms, so tests tell you more than waiting does.
- A basic work-up covers hormones, AMH, an ultrasound, a tube test and a semen analysis.
- Treatment can range from thyroid medicine or ovulation tablets to IUI, surgery or IVF.
- Both partners should be tested together from the beginning.
- Earlier assessment usually means more options, especially after 35.
- Treatment improves the chance of pregnancy but can't guarantee it.

### Final Thoughts

For a lot of women, the hardest part isn't the tests or the treatment. It's not knowing why. A careful evaluation usually turns that into specific answers and a plan you can act on.

Some couples need very little, perhaps a thyroid tablet or better timing. Others need more. Whichever group you fall into, you should get honest information, be treated with respect, and have room to make decisions at your own pace.

If you've been trying for a while and have questions, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore. She can go through your history and reports with you, suggest the tests that make sense, and talk through treatment options that fit your situation.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [Blocked Fallopian Tubes Symptoms, HSG and Treatment](/blog/blocked-fallopian-tubes-symptoms-hsg-treatment/)
- [Female Infertility Tests: AMH, Ultrasound, Hormones, HSG](/blog/female-infertility-tests-amh-ultrasound-hsg/)
- [Fibroids and Fertility Can You Get Pregnant](/blog/fibroids-and-fertility-can-you-get-pregnant/)
- [Unexplained Infertility: When Fertility Tests Are Normal](/blog/unexplained-infertility-normal-tests/)
- [How Long to Try Before Seeing a Fertility Specialist](/blog/how-long-try-conceive-before-fertility-specialist/)

### FAQs

1. **What is the most common cause of female infertility?**
   Problems with ovulation are among the most frequent causes, and PCOS is a leading reason ovulation becomes irregular. Blocked fallopian tubes, endometriosis, fibroids or polyps in the uterus, and the drop in egg reserve that comes with age are also common. Many couples have more than one factor, and sperm problems often play a part too, so both partners should be tested.
2. **Can a woman with regular periods still be infertile?**
   Yes. Regular periods usually mean you're ovulating, which is a good sign, but they don't rule everything out. Blocked tubes, endometriosis, polyps, low ovarian reserve or a sperm problem in your partner can all exist alongside a perfectly regular cycle. If pregnancy hasn't happened in the expected time, testing is still worth doing.
3. **Which tests are used to check female fertility?**
   Most evaluations include blood tests for FSH, LH, estradiol, thyroid and prolactin, plus an AMH test to estimate egg reserve. A transvaginal ultrasound looks at the uterus and ovaries, and an HSG or HyCoSy checks whether the tubes are open. A follicular study or progesterone test confirms ovulation. The male partner should have a semen analysis alongside these.
4. **Can female infertility be treated?**
   Often, yes. Thyroid and prolactin problems usually respond to medicine, ovulation can be helped with tablets or injections, and some uterine problems can be corrected with a short procedure. IUI and IVF are options when simpler steps aren't enough. Treatment improves the chance of pregnancy, though results depend on age, diagnosis and other personal factors.
5. **How long should we try before seeing a fertility doctor?**
         The general advice is 12 months of regular unprotected sex if you're under 35, and six months if you're between 35 and 40. Over 40, it's sensible to see a doctor straight away. Go sooner if your periods are irregular, you have PCOS or endometriosis, you've had a pelvic infection, or you've had repeated miscarriages. Twelve months of regular unprotected intercourse under 35, or six months at 35 and above. Come earlier with irregular periods, severe pain, known conditions or a history of pelvic infection.
6. **Does low AMH mean I can't get pregnant?**
   No. Low AMH means your ovaries hold fewer eggs than average for your age. It doesn't measure egg quality and doesn't rule out pregnancy, and many women with low AMH conceive either naturally or with treatment. Doctors mainly use AMH to judge how your ovaries may respond to fertility medicines and how soon to start treatment.
7. **Where can I get a fertility consultation in East Bangalore?**
   If you live in Gunjur, Varthur, Whitefield, Sarjapur Road or nearby, you can see Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur. The clinic provides fertility assessment, counselling, ovulation induction, follicle monitoring and IUI. When IVF is needed, the laboratory procedures are carried out at associated, registered ART centres.
8. **Can stress cause infertility in women?**
   Stress by itself is rarely the main cause, and feeling anxious doesn't mean you caused the problem. Severe stress combined with very low food intake or intense exercise can sometimes disturb ovulation. More often it works the other way round, with infertility causing the stress. Counselling, rest and honest conversations with your partner can make treatment easier to get through.

### Sources and further reading

- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)

Reviewer box: use global text.

---

## Post 17 · Blocked Fallopian Tubes Symptoms, HSG and Treatment

```yaml
title: "Blocked Fallopian Tubes Symptoms, HSG and Treatment"
description: "Blocked fallopian tubes can stop an egg and sperm from meeting. Learn the causes, how HSG detects blockage, treatment options and when IVF is advised."
url: /blog/blocked-fallopian-tubes-symptoms-hsg-treatment/
lastReviewed: "2026-10-05"
category: "Female Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-05"
dateModified: "2026-10-05"
badge: hsg
readingTime: 4
cluster: "Female Infertility"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Hysterosalpingography", alternateName: ["HSG"]}
related: [/services/tubal-patency-test-hsg/, /conditions/female-factor-infertility/]
posts: [/blog/female-infertility-tests-amh-ultrasound-hsg/, /blog/when-ivf-recommended-situations/, /blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/, /blog/hysteroscopy-for-infertility-when-is-it-needed/]
```

H1: Blocked Fallopian Tubes Symptoms, HSG and Treatment

> **Quick answer:** Blocked tubes often cause no symptoms and are usually discovered during a fertility evaluation. A hysterosalpingogram, or HSG, which uses X-ray dye, is a common test. Treatment depends on the location and extent of damage and may include surgery or IVF, which bypasses the tubes entirely.

The fallopian tubes carry the egg from the ovary to the womb and are where fertilisation normally happens. If one or both tubes are blocked or damaged, sperm may not reach the egg or the embryo may not travel properly, leading to infertility or ectopic pregnancy.

This article is part of our [female infertility](/blog/female-infertility-causes-symptoms-tests-treatment/) guide.

### What causes tubal blockage?

Common causes include pelvic infections such as pelvic inflammatory disease, past tuberculosis, previous abdominal or pelvic surgery, endometriosis, ruptured appendix, previous ectopic pregnancy and sexually transmitted infections such as chlamydia. In some women no cause is found.

### What are the symptoms?

Many women have no symptoms. Some have pelvic pain, abnormal discharge or a history of infection. A tube that fills with fluid, called hydrosalpinx, can cause pain or discharge. Infertility may be the only sign.

### How is it diagnosed?

## Hysterosalpingogram

Dye is injected through the cervix while X-ray images show the womb and tubes. If the dye does not pass through, the tube may be blocked. The test can cause cramping and is done after the period ends and before ovulation.

## Sonohysterosalpingography

An ultrasound-based method that uses fluid or foam to check whether the tubes are open, without radiation.

## Laparoscopy with dye test

A surgical camera test that directly views the pelvis and tubes. It also allows treatment of problems such as adhesions or endometriosis.

### Can blocked tubes be treated?

## Tubal surgery

Some blockages near the tube ends or adhesions may be treated with laparoscopic surgery. Success depends on the type and severity. Blockage in the middle of the tube or severe damage is less likely to respond.

## Removing a damaged tube

If a tube is filled with fluid, doctors often recommend removing or blocking it before IVF, because the fluid can reduce the chance of implantation.

## IVF

In vitro fertilisation bypasses the tubes by fertilising eggs in the laboratory and transferring embryos into the womb. It is often the best option for severe tubal damage.

### What about ectopic pregnancy risk?

Tubal damage raises the risk of pregnancy implanting in the tube. If you have a positive pregnancy test and tubal disease, early scans are important. Seek urgent help for severe pain, bleeding, dizziness or shoulder pain.

### How do doctors decide on treatment?

They consider your age, ovarian reserve, partner's semen analysis, the type and site of blockage, previous surgery and your preferences. Time is important, especially for women over 35.

### Key Takeaways
- Blocked tubes usually cause no symptoms.
- HSG and other tests show whether tubes are open.
- Surgery or IVF are the main treatments.
- Fluid-filled tubes may need treatment before IVF.
- Tubal disease raises ectopic pregnancy risk.

### Final Thoughts

A tubal factor does not mean pregnancy is impossible. Today's options give many couples a route forward. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru offers assessment and treatment planning for tubal infertility.

### FAQs

1. **Can you get pregnant with one blocked fallopian tube?**
         Yes, many women conceive with one open tube, though the chance may be reduced depending on other factors. Your doctor will assess the open tube and the rest of your fertility picture. Yes, many women conceive with one open tube, since either ovary can release the egg that month. The open tube must be healthy, which an HSG confirms. If it does not happen within the usual time, evaluation is the next step.
2. **Is HSG painful?**
         Many women feel cramping similar to period pain during the dye injection, and some feel little. Pain medicine taken beforehand and a gentle technique help. Discomfort usually settles soon after. Most women feel strong period-like cramps for a few minutes as the dye is pushed through. Taking a painkiller an hour before helps. Severe pain is uncommon, and the discomfort settles quickly once the test ends.
3. **When is the best time to do an HSG?**
         It is usually done after the period has stopped and before ovulation, in the first half of the cycle, to avoid disturbing a possible pregnancy. Your doctor will give exact timing. It is done after your period ends and before ovulation, usually between cycle day 7 and 10, when there is no chance of an early pregnancy. Your clinic will tell you which day to book.
4. **Can blocked tubes open on their own?**
         Some temporary blockage can clear, and flushing during HSG may open minor obstructions in some women, but established damage does not usually resolve on its own. Your doctor will advise next steps. Sometimes mild spasm or a mucus plug clears, but true scarring or damage does not reverse on its own. If the blockage is real, options are tubal surgery in selected cases or IVF, which bypasses the tubes.
5. **Is IVF the only option for blocked tubes?**
         No. Some tubal problems can be treated surgically, but when damage is severe or surgery is unlikely to help, IVF is usually advised because it bypasses the tubes. The best option depends on your situation. Not always. Younger women with limited damage near the tube end may be offered laparoscopic repair. IVF is preferred when damage is severe, both tubes are affected, or other fertility factors coexist.
### Sources and further reading

- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)

Reviewer box: use global text.

---

## Post 18 · Female Infertility Tests

```yaml
title: "Female Infertility Tests: AMH, Ultrasound, Hormones, HSG"
description: "Fertility tests help find why pregnancy is not happening. Learn what AMH, ultrasound, hormone tests and HSG check, when they are done and what results."
url: /blog/female-infertility-tests-amh-ultrasound-hsg/
lastReviewed: "2026-10-05"
category: "Female Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-05"
dateModified: "2026-10-05"
badge: hsg
readingTime: 5
cluster: "Female Infertility"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Hysterosalpingography", alternateName: ["HSG"]}
related: [/services/tubal-patency-test-hsg/, /conditions/female-factor-infertility/]
posts: [/blog/female-infertility-causes-symptoms-tests-treatment/, /blog/blocked-fallopian-tubes-symptoms-hsg-treatment/, /blog/unexplained-infertility-normal-tests/, /blog/semen-analysis-explained/, /blog/fertility-tests-explained/]
```

H1: Female Infertility Tests: AMH, Ultrasound, Hormones, HSG

> **Quick answer:** Common female fertility tests include AMH and an antral follicle count to estimate ovarian reserve, transvaginal ultrasound to examine the uterus and ovaries, hormone tests such as FSH, LH, oestradiol, thyroid function and prolactin, a mid-luteal progesterone test to confirm ovulation, and HSG or sonography to check whether the fallopian tubes are open. The exact tests depend on age, history and symptoms.

When pregnancy does not happen as expected, fertility testing helps identify possible causes and guide treatment. Female fertility evaluation looks at ovulation, egg reserve, the fallopian tubes and the uterus. Testing for the male partner is done at the same time, since both partners contribute.

This article is part of our [female infertility](/blog/female-infertility-causes-symptoms-tests-treatment/) guide.

### What does AMH show?

Anti-Mullerian hormone is made by small follicles in the ovaries. Its level gives an estimate of ovarian reserve, meaning the number of eggs remaining. It helps predict how the ovaries may respond to IVF stimulation. AMH does not measure egg quality and cannot predict natural fertility accurately on its own.

### What does a transvaginal ultrasound check?

A transvaginal scan examines the uterus and ovaries. It can detect fibroids, polyps, ovarian cysts, endometriomas and signs of PCOS. It is also used to count antral follicles, small follicles in early cycle that reflect ovarian reserve.

### Which hormone tests are done?

## Day 2 to 3 FSH, LH and oestradiol

These early-cycle tests help assess ovarian function and identify problems such as diminished ovarian reserve or PCOS patterns.

## Progesterone

A mid-luteal progesterone level, about a week before the expected period, helps confirm whether ovulation occurred.

## Thyroid tests (TSH)

Thyroid problems can affect ovulation and pregnancy.

## Prolactin

High prolactin can disrupt ovulation.

## Androgens

Testosterone and related tests may be done if PCOS is suspected.

### How are the fallopian tubes checked?

## Hysterosalpingogram (HSG)

Dye is passed through the cervix and X-ray images show whether the tubes are open and the uterine shape.

## Sonohysterosalpingography (HyCoSy or HyFoSy)

An ultrasound-based alternative using fluid or foam, without radiation.

## Laparoscopy

A surgical camera test used when other tests suggest tubal disease or endometriosis.

### Are other tests needed?
- Rubella immunity and infection screening such as HIV, hepatitis B and C
- Blood count and blood group
- Vitamin D or other tests based on history
- Hysteroscopy if an abnormality of the uterine cavity is suspected

### When should testing start?

Testing is usually recommended after 12 months of trying under age 35, after 6 months at 35 or older, and sooner if periods are irregular, there is known endometriosis, previous pelvic surgery or infection, or the woman is over 40.

### Key Takeaways
- Fertility testing checks ovulation, ovarian reserve, tubes and uterus.
- AMH estimates egg quantity, not quality.
- Ultrasound detects uterine and ovarian problems.
- HSG checks whether tubes are open.
- Both partners should be tested together.

### Final Thoughts

The right tests give a clear picture and help avoid unnecessary delays. Your fertility specialist will select tests based on your history. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru provides complete fertility evaluation.

### FAQs

1. **What tests are done for female infertility?**
         Common tests include AMH, transvaginal ultrasound with antral follicle count, hormone tests such as FSH, LH, oestradiol, TSH and prolactin, progesterone to confirm ovulation and HSG to check the tubes. The standard set is AMH and other hormone blood tests, a pelvic ultrasound with antral follicle count, a tubal check such as HSG or HyCoSy, and a mid-luteal progesterone test. Your partner's semen analysis runs alongside.
2. **What does a low AMH mean?**
         Low AMH suggests a lower egg reserve. It does not mean you cannot conceive and does not measure egg quality. It helps plan treatment, especially IVF. It means the ovary's egg reserve is smaller than average for your age. It does not mean you cannot conceive, because it says nothing about egg quality. It mainly guides how urgently to plan treatment.
3. **Is the HSG test painful?**
         Many women feel cramping similar to period pain during HSG. Taking pain relief beforehand as advised can help. Discomfort usually settles quickly. Most women feel brief period-like cramps while the dye passes through the tubes, settling within minutes. A painkiller beforehand helps. If a tube is blocked, pressure can build up and cause stronger but still short-lived pain.
4. **When should I get fertility tests?**
         Usually after 12 months of trying under 35, after 6 months at 35 or older, and earlier with irregular periods, endometriosis, previous pelvic surgery or age over 40. After 12 months of trying under 35, or after 6 months if you are 35 or older. Come sooner with very irregular periods, known tubal damage, severe period pain or a previous pelvic infection.
5. **Does my partner need testing too?**
         Yes. Male factors contribute to many cases of infertility. A semen analysis is usually done at the same time as female testing. Yes. Male factors play a role in around a third of couples, and a semen analysis is far simpler than the tests women undergo. Testing both partners together avoids months of one-sided investigation.
### Sources and further reading

- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)

Reviewer box: use global text.

---

## Post 19 · Fibroids and Fertility Can You Get Pregnant

```yaml
title: "Fibroids and Fertility Can You Get Pregnant"
description: "Many women with fibroids conceive naturally, but some fibroids affect fertility. Learn which types matter, how they are diagnosed and when treatment is."
url: /blog/fibroids-and-fertility-can-you-get-pregnant/
lastReviewed: "2026-10-06"
category: "Female Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-06"
dateModified: "2026-10-06"
badge: female-infertility
readingTime: 4
cluster: "Female Infertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Uterine fibroids"}
related: [/conditions/female-factor-infertility/, /services/fertility-evaluation/]
posts: [/blog/adenomyosis-and-fertility-symptoms-treatment/, /blog/hysteroscopy-for-infertility-when-is-it-needed/, /blog/female-infertility-causes-symptoms-tests-treatment/, /blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/, /blog/when-ivf-recommended-situations/, /blog/female-infertility-tests-amh-ultrasound-hsg/]
```

H1: Fibroids and Fertility Can You Get Pregnant

> **Quick answer:** Many women with fibroids conceive and have healthy pregnancies. Fibroids that distort the inside of the womb, called submucosal fibroids, are most likely to reduce the chance of pregnancy and increase miscarriage risk. Large fibroids may also contribute. Treatment is considered based on symptoms, location and fertility plans.

Uterine fibroids are non-cancerous growths in the muscle of the womb. They are very common in women of reproductive age, and many cause no symptoms. Whether they affect fertility depends on their size, number and especially their location.

This article is part of our [female infertility](/blog/female-infertility-causes-symptoms-tests-treatment/) guide.

### What are the types of fibroids?

## Submucosal

Grow into the uterine cavity and are most strongly linked with infertility and miscarriage.

## Intramural

Grow within the muscle wall. Large ones that distort the cavity may affect fertility.

## Subserosal

Grow on the outer surface and generally have little effect on fertility unless very large.

### How can fibroids affect fertility?

Fibroids can distort the uterine cavity, interfere with embryo implantation, block the openings of the fallopian tubes, alter blood flow to the lining or change uterine contractions. Not every fibroid causes these problems.

### What are the symptoms?

Many women have no symptoms. Others have heavy or prolonged periods, pelvic pressure, frequent urination, constipation, pain or a feeling of fullness. Heavy bleeding can cause anaemia.

### How are fibroids diagnosed?

A pelvic ultrasound, often transvaginal, shows fibroids' size and location. Hysteroscopy, saline infusion sonography or MRI can evaluate the uterine cavity and map fibroids more precisely when planning treatment.

### When is treatment recommended?

If you are trying to conceive and have a fibroid that distorts the uterine cavity, treatment before conception is often advised. Fibroids that do not distort the cavity and are small may not need removal. Your fertility specialist weighs your age, other fertility factors and symptoms.

### What are the treatment options?

## Hysteroscopic myomectomy

Removal of submucosal fibroids through the cervix using a camera, without cuts on the abdomen.

## Laparoscopic or open myomectomy

Fibroid removal through small cuts or an abdominal incision for intramural or subserosal fibroids that need treatment.

## Medicines

Some medicines control bleeding or shrink fibroids temporarily but are not suitable when trying to conceive.

## Other procedures

Uterine artery embolisation and similar treatments are generally not preferred when future pregnancy is desired.

### What happens after surgery?

Your doctor advises how long to wait before trying to conceive and whether delivery should be by caesarean section, depending on how deep the fibroid was.

### Key Takeaways
- Many women with fibroids conceive naturally.
- Location matters more than size alone.
- Submucosal fibroids most affect fertility.
- Treatment decisions are individual.
- Hysteroscopy and imaging guide planning.

### Final Thoughts

A fibroid diagnosis does not mean you cannot have a baby. A careful evaluation helps decide whether treatment is needed. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru provides personalised fertility assessment and care.

### FAQs

1. **Can fibroids cause infertility?**
         Fibroids can reduce fertility, especially when they grow into the uterine cavity or distort its shape. Many women with fibroids still conceive naturally. A fertility evaluation shows whether fibroids are relevant in your case. Only certain ones do. Fibroids that bulge into the uterine cavity (submucosal) or large ones that distort it can interfere with implantation. Fibroids in the outer wall usually do not affect fertility.
2. **Do I need to remove fibroids before IVF?**
         Fibroids that distort the uterine cavity are usually treated before IVF because they can reduce implantation success. Small fibroids outside the cavity may not need removal. Your specialist will advise. Not automatically. Removal is considered when the fibroid distorts the cavity, is large, or previous transfers failed. Small fibroids away from the lining are usually left alone and just monitored.
3. **How long after myomectomy can I try to conceive?**
         The waiting time depends on the type of surgery and how deeply the fibroid extended into the muscle, and is typically a few months. Your surgeon will give specific advice. Usually three to six months, depending on how deeply the fibroid sat in the wall. Your surgeon will advise based on the cavity and whether a caesarean-style entry was made into the uterus.
4. **Can fibroids cause miscarriage?**
         Submucosal fibroids and some large fibroids are linked with higher miscarriage risk. Removing cavity-distorting fibroids before pregnancy may help. Discuss your history with your doctor. Cavity-distorting fibroids are linked to a higher miscarriage risk, which is one reason they may be removed before pregnancy. Fibroids that leave the lining untouched are not clearly tied to miscarriage.
5. **Do fibroids shrink on their own?**
         Fibroids can shrink after menopause, and some change in size during pregnancy. During the reproductive years they often remain or grow slowly. Your doctor will monitor and advise. They can shrink after menopause when hormone levels fall, but during the reproductive years they tend to stay or slowly grow. Small fibroids are usually watched with periodic scans rather than treated.
### Sources and further reading

- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)

Reviewer box: use global text.

---

## Post 20 · Unexplained Infertility

```yaml
title: "Unexplained Infertility: When Fertility Tests Are Normal"
description: "Unexplained infertility means standard tests are normal but pregnancy has not happened. Learn possible hidden causes, treatment options from IUI to IVF."
url: /blog/unexplained-infertility-normal-tests/
lastReviewed: "2026-10-06"
category: "Female Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-06"
dateModified: "2026-10-06"
badge: fertility-evaluation
readingTime: 4
cluster: "Female Infertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Female infertility"}
related: [/conditions/female-factor-infertility/, /services/fertility-evaluation/]
posts: [/blog/female-infertility-causes-symptoms-tests-treatment/, /blog/female-infertility-tests-amh-ultrasound-hsg/, /blog/iui-vs-ivf-which-fertility-treatment/, /blog/when-ivf-recommended-situations/]
```

H1: Unexplained Infertility: When Fertility Tests Are Normal

> **Quick answer:** Unexplained infertility means ovulation, fallopian tubes, uterus and semen analysis appear normal, yet pregnancy has not occurred. Possible hidden factors include subtle egg or sperm quality issues, mild endometriosis, implantation problems or fertilisation difficulties. Treatment options include continued trying for younger couples, ovulation induction with IUI and IVF, guided by age, duration of infertility and preferences.

Unexplained infertility is diagnosed when a couple has not conceived after trying for the recommended time, but standard tests for both partners appear normal. It can be frustrating to hear that nothing is wrong. Unexplained does not mean untreatable. It means current routine tests have not identified a specific cause.

This article is part of our [female infertility](/blog/female-infertility-causes-symptoms-tests-treatment/) guide.

### What tests are usually normal?
- Regular ovulation confirmed by cycle tracking or hormone tests
- Open fallopian tubes on HSG or similar tests
- Normal uterine cavity on ultrasound
- Normal semen analysis for the male partner
- Adequate ovarian reserve for age

### What might be behind it?
- Egg quality, which cannot be measured directly
- Subtle sperm function problems not seen on routine analysis
- Mild endometriosis not visible on ultrasound
- Problems with fertilisation or early embryo development
- Implantation difficulties
- Timing of intercourse
- Age-related decline in fertility

### How is unexplained infertility treated?

## Expectant management

For younger couples with a short duration of infertility, continued trying with well-timed intercourse may be reasonable for a period.

## Ovulation induction with IUI

Medicines to stimulate ovulation combined with intrauterine insemination can improve the chances per cycle for some couples.

## IVF

IVF can bypass several possible hidden causes and also reveals information about egg fertilisation and embryo development. It is often recommended for older women, longer duration of infertility or after unsuccessful IUI.

## Lifestyle factors

Healthy weight, not smoking, limiting alcohol, managing stress and good sleep support fertility for both partners.

### How do doctors decide the next step?

They consider the woman's age, ovarian reserve, how long the couple has been trying, previous treatments, emotional and financial factors and the couple's preferences.

### How can couples cope emotionally?

Unexplained infertility can feel especially frustrating because there is no clear answer. Open communication, emotional support, counselling and connecting with others in similar situations can help.

### Key Takeaways
- Unexplained infertility means routine tests are normal.
- Hidden factors may affect eggs, sperm or implantation.
- Treatment options include IUI and IVF.
- Age and duration of trying guide decisions.
- Emotional support matters.

### Final Thoughts

An unexplained diagnosis can be hard to accept, but effective treatments exist and many couples go on to conceive. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru provides personalised plans for unexplained infertility.

### FAQs

1. **What does unexplained infertility mean?**
         It means standard fertility tests for both partners are normal, yet pregnancy has not occurred after the recommended time of trying. A specific cause has not been identified by routine tests. It means standard tests show normal ovulation, open tubes, a normal uterus and a reasonable semen report, yet pregnancy has not happened. About a quarter of couples fall into this group.
2. **Can couples with unexplained infertility get pregnant naturally?**
         Yes, some couples conceive naturally, especially when younger and with a shorter duration of trying. Others benefit from treatment such as IUI or IVF. Yes, a meaningful share conceive without treatment over the following one to two years, especially younger women. Whether to keep trying or move to treatment depends mainly on age and time already spent.
3. **Is IUI or IVF better for unexplained infertility?**
         IUI with ovulation induction may be tried first in some couples, while IVF is often recommended for older women or after unsuccessful IUI. Your specialist will advise based on your situation. IUI with ovulation medicine is often tried first because it is simpler and cheaper. If a few cycles do not work, or age and duration argue for faster results, IVF is the next step.
4. **What causes unexplained infertility?**
         Possible hidden causes include egg or sperm quality issues, mild endometriosis, fertilisation problems and implantation difficulties that routine tests cannot detect. The label hides subtler issues current tests miss: egg or sperm quality, fertilisation problems, mild endometriosis, or tubal transport problems. IVF itself sometimes reveals where the failure happens.
5. **Should we do more tests for unexplained infertility?**
         Additional tests may sometimes be considered, but many couples move to treatment rather than extensive testing. Your specialist will discuss what is useful. Often not, because routine testing already covers the main causes. Repeating tests rarely changes the plan. A specialist may add a laparoscopy or specific tests only when your history suggests something.
### Sources and further reading

- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)

Reviewer box: use global text.

---

## Post 21 · How Long to Try Before Seeing a Fertility Specialist

```yaml
title: "How Long to Try Before Seeing a Fertility Specialist"
description: "Most couples are advised to try for 12 months before testing, or 6 months if the woman is 35 or older. Learn when to seek help sooner and what the first."
url: /blog/how-long-try-conceive-before-fertility-specialist/
lastReviewed: "2026-10-07"
category: "Female Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-07"
dateModified: "2026-10-07"
badge: fertility-evaluation
readingTime: 4
cluster: "Female Infertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Female infertility"}
related: [/conditions/female-factor-infertility/, /services/fertility-evaluation/]
posts: [/blog/female-infertility-causes-symptoms-tests-treatment/, /blog/female-infertility-tests-amh-ultrasound-hsg/, /blog/ovulation-tracking-how-to-know-fertile-window/, /blog/fertility-after-35-when-to-seek-help/, /blog/male-infertility-causes-semen-analysis-treatment/]
```

H1: How Long to Try Before Seeing a Fertility Specialist

> **Quick answer:** Couples are generally advised to see a fertility specialist after 12 months of regular unprotected intercourse if the woman is under 35, after 6 months if she is 35 or older, and promptly if she is over 40. Seek help sooner if periods are irregular or absent, there is known endometriosis, PCOS, previous pelvic infection or surgery, recurrent miscarriage, or a known male fertility issue.

Many couples wonder how long they should keep trying before seeking help. The answer depends mainly on the woman's age and any known health issues. Seeking help at the right time avoids unnecessary waiting while not rushing into treatment.

This article is part of our [female infertility](/blog/female-infertility-causes-symptoms-tests-treatment/) guide.

### Why does age matter?

Female fertility gradually declines with age, especially after about 35, because the number and quality of eggs decrease. Earlier evaluation helps make the most of available time.

### When should you seek help sooner?

## For women
- Irregular, very infrequent or absent periods
- Known PCOS or endometriosis
- Previous pelvic infection, ectopic pregnancy or abdominal surgery
- Previous cancer treatment
- Two or more miscarriages
- Very painful periods or pain during intercourse
- Thyroid or other hormone conditions

## For men
- Previous testicular surgery, injury or undescended testes
- Sexual problems such as erectile or ejaculation difficulties
- Previous cancer treatment
- Known low sperm count

### What increases your chance of conceiving?
- Intercourse every two to three days, or around ovulation
- Healthy weight for both partners
- Not smoking and limiting alcohol
- Folic acid supplementation for the woman, as advised
- Managing chronic conditions such as diabetes or thyroid disease
- Reducing stress where possible

### What happens at the first fertility visit?

The specialist takes a detailed history of both partners, examines as needed and orders tests such as AMH, ultrasound, hormone tests, tubal assessment and semen analysis. A plan is then made based on results.

### Is it okay to seek help earlier without a reason?

Yes. If you are anxious or want reassurance, a consultation can provide information and basic tests. Early advice can help optimise your chances.

### Key Takeaways
- Under 35: seek help after 12 months of trying.
- 35 or older: seek help after 6 months.
- Over 40: seek help promptly.
- Known issues mean seeking help sooner.
- Both partners should be evaluated.

### Final Thoughts

Knowing when to seek help helps couples make the most of time and avoid unnecessary worry. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru offers fertility consultations and evaluation for couples at every stage.

### FAQs

1. **How long should we try before seeing a fertility doctor?**
   If the woman is under 35, after 12 months of trying. If she is 35 or older, after 6 months. If she is over 40, see a specialist promptly.
2. **Should we see a specialist sooner if periods are irregular?**
         Yes. Irregular or absent periods may indicate ovulation problems such as PCOS, so evaluation should happen sooner. Yes. Irregular periods usually mean irregular or absent ovulation, which testing can confirm quickly. There is little value waiting a full year when the problem is already visible and easily treated.
3. **Does the male partner need testing?**
         Yes. Male factors contribute to many infertility cases. A semen analysis is a simple, important early test. Yes. A semen analysis is simple, cheap and answers a large part of the question. Male factors contribute to about a third of infertility, so testing him early prevents one-sided treatment.
4. **Can we see a fertility specialist before trying?**
         Yes. A preconception consultation can review health, check basic fertility markers and give advice to improve your chances. Yes. A preconception visit covers health checks, folic acid, medicines review, vaccination and conditions like thyroid or diabetes. It is sensible planning, not a sign that something is wrong.
5. **How often should we have intercourse when trying?**
         Intercourse every two to three days throughout the cycle, or more often around ovulation, gives a good chance of conception without needing perfect timing. Every two to three days through the cycle covers the fertile window without pressure. Timing only the ovulation day actually lowers the chances, because sperm live several days and the window is wider than one day.
### Sources and further reading

- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)

Reviewer box: use global text.

---

## Post 22 · Low AMH & Ovarian Reserve

```yaml
title: "Low AMH & Ovarian Reserve: Fertility Explained"
description: "Low AMH does not always mean infertility. Learn what AMH says about ovarian reserve, egg quality, natural pregnancy, IVF and fertility planning."
url: /blog/low-amh-ovarian-reserve-fertility/
lastReviewed: "2026-10-07"
category: "Low AMH & Ovarian Reserve"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-07"
dateModified: "2026-10-07"
badge: ovarian-reserve
readingTime: 16
cluster: "Low AMH & Ovarian Reserve"
pillar: true
keywords: []
about: {type: MedicalTest, name: "Anti-Mullerian hormone test", alternateName: ["AMH test"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /services/follicular-monitoring/]
posts: [/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/, /blog/fertility-after-thirty-five-egg-quality-age-treatment/, /blog/can-you-get-pregnant-naturally-low-amh/, /blog/low-amh-and-ivf-treatment/, /blog/low-amh-at-30-35-40-age/]
```

H1: Low AMH & Ovarian Reserve: What It Means for Fertility

> **Quick answer:** Low AMH usually indicates reduced ovarian reserve, but it does not mean that you cannot get pregnant. AMH is useful for estimating ovarian reserve and helping a fertility specialist understand how the ovaries may respond to stimulation. It does not directly measure egg quality or tell you whether you will conceive naturally. Your age, menstrual and ovulation history, antral follicle count, fallopian tubes, uterus, sperm factors and previous reproductive history all add important information. So, if your AMH is low, the right question is not simply, "Can I get pregnant?" It is, "What does this result mean in my particular situation, and what should I do with that information?"

### Introduction

Seeing "low AMH" on a fertility report can be unsettling. Many women immediately wonder whether they have run out of eggs, whether they can still become pregnant, or whether IVF is now the only option.

AMH, or anti-Müllerian hormone, is mainly a marker of ovarian reserve. It gives an indication of the pool of small developing follicles in the ovaries. It does not tell you whether your eggs are good quality, and it cannot predict pregnancy on its own.

That distinction matters. A woman can have low AMH and still ovulate and conceive naturally. Another woman with a reassuring AMH result may have difficulty conceiving for an entirely different reason.

AMH is therefore best understood as one part of a fertility assessment, not as a fertility score.

The content strategy for this pillar specifically identifies AMH interpretation, ovarian reserve versus egg quality, age, natural conception, IVF, antral follicle count and fertility preservation as the main areas the article should address. Dr_Swati_Shree_Content_Strategy…

Low AMH usually indicates reduced ovarian reserve, but it does not mean that you cannot get pregnant.

AMH is useful for estimating ovarian reserve and helping a fertility specialist understand how the ovaries may respond to stimulation. It does not directly measure egg quality or tell you whether you will conceive naturally.

Your age, menstrual and ovulation history, antral follicle count, fallopian tubes, uterus, sperm factors and previous reproductive history all add important information.

So, if your AMH is low, the right question is not simply, "Can I get pregnant?"

It is, "What does this result mean in my particular situation, and what should I do with that information?"

### What Is AMH?

AMH stands for anti-Müllerian hormone.

It is produced by cells surrounding small developing follicles in the ovaries. These follicles contain immature eggs.

Because AMH is associated with the number of developing follicles, a blood test can provide useful information about ovarian reserve.

This is why AMH has become a common part of fertility assessments.

It is also why AMH reports can cause so much confusion.

The test tells you something about egg quantity, but not everything about fertility.

A low result should not be read as a statement that pregnancy is impossible.

## What can AMH tell your fertility specialist?

AMH can help with:
- Assessing ovarian reserve
- Estimating how the ovaries may respond to stimulation
- Planning fertility treatment
- Identifying a possible reduced ovarian response
- Interpreting ovarian reserve alongside ultrasound findings
- Discussing fertility preservation when appropriate

## What can AMH not tell you?

AMH cannot tell you:
- Whether you will become pregnant naturally
- Whether you are ovulating every month
- Whether your fallopian tubes are open
- Whether your uterus is suitable for pregnancy
- Whether your eggs are genetically normal
- Whether your partner has a fertility problem
- Whether an IVF cycle will result in pregnancy
- Exactly how many years of fertility you have left

That is why an AMH result should always be interpreted in context.

### What does ovarian reserve mean?

Ovarian reserve refers broadly to the number of eggs remaining in the ovaries.

Women are born with their lifetime supply of eggs. That supply decreases over time.

The decline in ovarian reserve is a normal part of reproductive ageing, although the rate of decline differs between individuals.

Ovarian reserve is mainly about quantity.

It is not the same as egg quality.

It is also not the same as ovulation.

A woman can have a reduced ovarian reserve and continue to ovulate. She may still conceive naturally.

At the same time, a woman with a seemingly reassuring ovarian reserve can have difficulty becoming pregnant because of age-related egg quality changes, blocked fallopian tubes, endometriosis, uterine problems, sperm factors or other causes.

This is why ovarian reserve testing should never be treated as a simple "fertile" or "infertile" result.

### Is low AMH the same as infertility?

No.

A low AMH result does not by itself diagnose infertility.

It tells you that the ovarian reserve may be reduced. It does not tell you that natural pregnancy cannot happen.

Fertility depends on several systems working together.

Ovulation needs to occur. The sperm must be capable of fertilising an egg. The fallopian tubes need to allow sperm and egg to meet. The uterus needs to provide a suitable environment for implantation and pregnancy.

Age also matters, particularly because egg quality changes over time.

So if an AMH report comes back low, it is worth looking at the complete picture rather than making a decision based on one number.

### What is the difference between ovarian reserve and egg quality?

This is one of the most common points of confusion.

Ovarian reserve refers mainly to how many eggs remain. Egg quality refers to the developmental and genetic competence of those eggs.

AMH is used as a marker of ovarian reserve. It is not a direct test of egg quality.

There is no routine blood test that can look at your AMH and tell you whether your eggs are genetically healthy.

Age provides important information about egg quality. As reproductive age increases, the likelihood of chromosomal abnormalities in eggs also changes.

This is why two women with the same AMH can have very different fertility situations.

| Ovarian reserve | Egg quality |
|---|---|
| Mainly relates to the remaining quantity of eggs | Relates to the developmental and genetic potential of eggs |
| AMH and AFC can provide information about reserve | There is no routine blood test that directly measures egg quality |
| Helps estimate ovarian response to stimulation | Influences fertilisation, embryo development and pregnancy potential |
| Can be reduced even when ovulation continues | Is strongly influenced by age |
| Does not directly predict natural pregnancy | Cannot be determined from AMH alone |


A low AMH therefore should not automatically be described as "poor egg quality."

### Does AMH decline with age?

Generally, yes.

AMH tends to decline as ovarian reserve decreases with age.

But there is no single AMH value that can be used to define fertility for every woman at a particular age.

Two women who are both 32 can have different AMH levels. A result that appears low in one woman may need a different interpretation in another depending on her medical history, ultrasound findings and reproductive goals.

This is why rigid online charts can be misleading.

Your doctor may consider:
- Your age
- AMH
- Antral follicle count
- Menstrual pattern
- Ovulation
- Previous pregnancy history
- Previous fertility treatment
- Ovarian or pelvic conditions
- Other fertility factors

Age and AMH answer different questions. They should not be treated as interchangeable.

### What does a low AMH result mean?

A low AMH generally suggests that the number of developing follicles available in the ovaries is reduced.

That information can be useful, especially when planning fertility treatment.

However, the result does not tell you exactly how many eggs you have left.

It also does not tell you whether the egg that ovulates this month can result in a pregnancy.

The clinical meaning of a low AMH depends on the individual.

For one woman, it may prompt a discussion about trying to conceive sooner. For another, it may be relevant to fertility preservation. In someone undergoing IVF, it may help the fertility specialist anticipate a lower ovarian response to stimulation.

There is no single response that applies to every woman with low AMH.

### Why can AMH be low?

AMH can be lower when ovarian reserve is reduced.

Age is one important factor, but it is not the only one.

A reduced AMH may be seen in association with:
- Increasing reproductive age
- Previous ovarian surgery
- Certain conditions affecting the ovaries
- Some medical treatments, including certain cancer treatments
- Endometriosis or ovarian endometriomas in some circumstances
- Other situations associated with reduced ovarian reserve

The cause cannot be established from the AMH number alone.

If your AMH is unexpectedly low, your doctor may look at your medical history and ultrasound findings to understand whether there is a possible explanation.

### Can you get pregnant naturally with low AMH?

Yes.

A low AMH does not automatically prevent natural conception.

A woman with low AMH may still release an egg during ovulation, and pregnancy can occur if other factors are favourable.

What matters is the broader fertility picture.

For example, your doctor may want to know:
- Are your periods regular?
- Are you ovulating?
- How long have you been trying?
- What is your age?
- Are the fallopian tubes open?
- Is there endometriosis?
- Are there uterine abnormalities?
- What does your partner's semen analysis show?
- Have you had a previous pregnancy?
- Have you undergone fertility treatment before?

These questions often provide more useful information than AMH alone.

The low AMH result is still important. It may indicate that ovarian reserve is reduced and may influence discussions about timing and treatment.

But it should not be turned into a prediction that pregnancy cannot happen.

### Does low AMH mean you should stop trying naturally?

Not necessarily.

Whether natural conception should be attempted, for how long, or whether fertility treatment should be discussed depends on the individual situation.

Age is particularly relevant.

A younger woman with low AMH and no other fertility concerns may have a different treatment discussion from a woman in her late 30s or 40s who has been trying for some time.

There is no universal rule that says every woman with low AMH must immediately undergo IVF.

At the same time, a low AMH should not simply be ignored, especially when pregnancy is an important goal.

A fertility consultation can help you understand whether waiting, trying naturally, considering IUI or discussing IVF makes sense in your circumstances.

### How is ovarian reserve tested?

AMH is only one part of ovarian reserve assessment.

## Antral follicle count

An antral follicle count, or AFC, is measured using transvaginal ultrasound.

The clinician looks at the ovaries and counts small antral follicles.

AFC and AMH are commonly considered together because both provide information related to ovarian reserve and expected response to ovarian stimulation.

## FSH and estradiol

Follicle-stimulating hormone, or FSH, may also be measured during a fertility assessment.

Estradiol may be assessed alongside it.

These tests provide different information from AMH and are interpreted according to the timing of the test and the rest of the clinical picture.

## Ultrasound

A pelvic or transvaginal ultrasound may also identify other findings that matter for fertility, including:
- Ovarian cysts
- Endometriomas
- Fibroids
- Polyps
- Uterine abnormalities
- Antral follicles

Not every woman needs every fertility test. The appropriate evaluation depends on the history and clinical question.

### AMH vs AFC: what is the difference?

Both AMH and AFC provide information about ovarian reserve, but they measure it in different ways.

| Test | What it provides | Method |
|---|---|---|
| AMH | A hormonal marker associated with developing ovarian follicles | Blood test |
| AFC | An estimate based on visible antral follicles | Transvaginal ultrasound |
| FSH | Information about ovarian function in the relevant clinical context | Blood test |
| Estradiol | Hormonal information that may complement other fertility tests | Blood test |


AMH and AFC can be particularly useful when a fertility specialist is planning ovarian stimulation.

Neither test directly tells you whether your eggs are genetically healthy.

### Can AMH tell you exactly how many eggs you have?

No.

AMH is not an egg-counting test.

The ovaries contain follicles at different stages of development, and AMH reflects the activity of a particular group of developing follicles.

It is therefore more accurate to describe AMH as a marker of ovarian reserve than as a literal measurement of the number of eggs remaining.

Be cautious about websites or social media posts that claim they can convert one AMH value into an exact number of eggs.

That level of precision is not what the test provides.

### What does low AMH mean for IVF?

Low AMH can be important when planning IVF.

During IVF, ovarian stimulation is used to encourage several follicles to develop so that eggs can be collected.

When ovarian reserve is reduced, the ovaries may respond less strongly to stimulation in some women. This can mean that fewer eggs are retrieved.

That possibility is useful for treatment planning.

It does not, however, mean that IVF cannot be considered.

A fertility specialist will look at your AMH together with your age, AFC, previous treatment response, sperm factors, reproductive history and the reason for treatment.

The number of eggs retrieved is also not the same thing as the chance of pregnancy.

There are several steps between egg retrieval and pregnancy, and each has its own biological factors.

### Can IVF work with very low AMH?

A low AMH does not by itself determine the outcome of IVF.

It may indicate that fewer eggs are likely to be obtained during stimulation, but it cannot tell you whether a pregnancy will or will not occur.

The response to treatment can vary from one woman to another.

This is why a fertility specialist may discuss realistic expectations rather than using one AMH value as a yes-or-no decision about IVF.

If IVF is recommended, the treatment pathway should also be explained clearly, including what happens at the fertility centre and what the ovarian reserve result means for stimulation and egg retrieval.

At EVE Women and Fertility Clinic, Dr. Swati Shree evaluates patients and guides IVF treatment. IVF laboratory procedures are carried out at associated, registered ART centres.

### Should you consider egg freezing with low AMH?

A low AMH can become relevant when discussing fertility preservation.

If ovarian reserve is already reduced, the number of eggs obtained during stimulation may be lower in some women. That makes the timing of a fertility-preservation discussion important.

But AMH alone does not tell you whether egg freezing is the right choice.

Your age, reproductive plans, medical history and ovarian reserve all need to be considered together.

If you are thinking about delaying pregnancy or are considering egg freezing, it is reasonable to discuss your options before making assumptions based on an AMH report.

Fertility preservation is one of the focus areas identified for EVE Women and Fertility Clinic.

### Can low AMH be increased?

This is where a lot of misinformation exists.

There is no established treatment that can simply restore eggs that have already been lost or create a new ovarian reserve.

You may see supplements, diets, injections or other products promoted as ways to "increase AMH." A change in the AMH number does not necessarily mean that the underlying ovarian reserve has been restored.

A healthy lifestyle is important for general health and reproductive wellbeing, but it should not be presented as a way to reverse the natural decline in ovarian reserve.

Do not start fertility medicines, hormones or supplements simply because an advertisement or social media post claims they can raise AMH.

The more useful question is what your current result means and whether any action is appropriate.

### Can AMH change from one test to another?

AMH is not necessarily a perfectly fixed number.

Results can vary because of differences between laboratory assays and individual biological factors. Certain medications and hormonal contraception can also affect AMH measurements in some circumstances.

If a result does not seem to fit the rest of your fertility assessment, your doctor may decide whether repeating the test is useful.

Repeatedly testing AMH without a clear clinical reason, however, can create more anxiety than information.

A single number should always be viewed alongside the rest of the assessment.

### Does low AMH affect pregnancy once you conceive?

AMH is mainly used to assess ovarian reserve.

It is not a test that tells you whether a pregnancy will continue normally.

Once pregnancy occurs, different factors become important for monitoring pregnancy and assessing potential risks.

Therefore, a previous low AMH result should not automatically be interpreted as meaning that a pregnancy is at high risk.

If you have conceived after being told that your AMH is low, discuss your pregnancy care with your doctor rather than assuming that the AMH result predicts what will happen next.

### Does low AMH cause miscarriage?

Low AMH should not be treated as a direct cause of miscarriage.

AMH provides information about ovarian reserve. It does not directly measure the chromosomal health of an embryo.

Age is an important factor in egg quality and chromosomal abnormalities, which is one reason age is considered separately from ovarian reserve.

If someone has both low AMH and recurrent pregnancy loss, the two findings should not automatically be assumed to have the same cause.

Recurrent pregnancy loss has its own evaluation pathway, and the appropriate investigations depend on the individual's history.

### What does low AMH mean at 30?

A low AMH at 30 can suggest that ovarian reserve is lower than expected for that individual.

It does not mean that pregnancy is impossible.

If you are not currently trying to conceive but expect to delay pregnancy for several years, the result may be relevant to a discussion about reproductive planning or fertility preservation.

If you are already trying to conceive, the duration of trying and other fertility factors matter just as much.

The important point is to avoid treating the AMH value as a countdown clock.

### What does low AMH mean at 35?

At 35, both age and ovarian reserve become relevant to fertility planning.

A low AMH may indicate reduced ovarian reserve, while age also provides important information about egg quality.

If you are trying to conceive, have been trying for some time, or are considering delaying pregnancy, discussing the complete fertility picture can be more useful than repeatedly checking AMH.

The content strategy for this cluster specifically calls for age-based interpretation at 30, 35 and 40 without rigid "normal" AMH cut-offs. Dr_Swati_Shree_Content_Strategy…

### What does low AMH mean at 40?

At 40, age-related changes in fertility and egg quality become particularly important.

Low AMH may also indicate reduced ovarian reserve.

These are related but different pieces of information.

A fertility assessment can help determine how AMH, age, ovulation, AFC and other factors fit together.

If pregnancy is your goal, it may be more useful to have that discussion early rather than spending months trying to interpret an AMH number on its own.

### What should you do after getting a low AMH report?

First, try not to panic.

Then look at the report in context.

A fertility specialist may consider:
- Your age
- The AMH result and laboratory information
- Your menstrual cycle pattern
- Whether you are ovulating
- Your AFC on ultrasound
- Previous pregnancies
- Previous fertility treatment
- Ovarian or pelvic conditions
- Tubal factors when indicated
- Your partner's semen analysis
- How long you have been trying to conceive
- Whether you are considering fertility preservation

The purpose of the assessment is not just to put a label on your ovarian reserve.

It is to understand what the result means for the pregnancy or fertility decision you are facing now.

### Questions to ask your fertility specialist about low AMH

Take your actual report to the appointment if possible.

You can ask:
- What does my AMH mean for my age?
- Does my ultrasound support the AMH result?
- What is my antral follicle count?
- Am I ovulating regularly?
- Do I need any additional fertility tests?
- Could my medical history explain the result?
- Should I continue trying naturally?
- Should I discuss IUI or IVF?
- Does fertility preservation make sense for me?
- How does my partner's fertility assessment affect the overall picture?

A good consultation should leave you understanding what the result means, what it does not mean and what your reasonable next steps are.

### Common myths about low AMH

## "Low AMH means I cannot have a baby."

Not necessarily.

Low AMH indicates reduced ovarian reserve. Natural pregnancy can still occur, depending on age and other fertility factors.

## "Low AMH means my eggs are poor quality."

Not automatically.

AMH does not directly measure egg quality. Age is a major factor in egg quality.

## "High AMH means I am highly fertile."

Not necessarily.

A high AMH does not guarantee pregnancy. AMH is primarily useful as a marker of ovarian reserve and expected ovarian response.

## "AMH tells me exactly how many eggs I have."

It does not.

AMH is a marker of ovarian reserve, not an exact egg count.

## "I can restore my egg reserve by increasing AMH."

There is no established treatment that creates a new supply of eggs or reliably restores lost ovarian reserve.

## "Low AMH means IVF will definitely fail."

No.

Low AMH may indicate a lower ovarian response to stimulation, but it does not independently determine the outcome of IVF.

## "Normal AMH means I can safely delay pregnancy."

A normal AMH does not guarantee that fertility will remain unchanged over time. Age remains an important part of reproductive planning.

### When should you see a fertility specialist?

Consider speaking with a fertility specialist if:
- You have received a low AMH result and do not understand it.
- You have been trying to conceive without success.
- Your periods are irregular or absent.
- You have a history of ovarian surgery.
- You have endometriosis or an ovarian endometrioma.
- You are considering egg freezing.
- You have previously had a low response during fertility treatment.
- You are concerned about fertility because of your age.
- You want to understand your options before postponing pregnancy.

You do not need to wait until AMH becomes "very low" before asking questions.

Early information can make fertility planning clearer.

### When is urgent medical care needed?

Low AMH itself does not cause an emergency.

Urgent symptoms are more relevant during fertility treatment or pregnancy.

Seek prompt medical assessment if you experience:
- Severe abdominal or pelvic pain
- Severe abdominal swelling or bloating
- Breathlessness
- Markedly reduced urine after fertility injections
- One-sided pelvic pain during early pregnancy
- Shoulder-tip pain, fainting or significant bleeding during early pregnancy
- Heavy bleeding during pregnancy
- Fever after a fertility procedure

These symptoms can have several causes, but some require urgent assessment.

### Low AMH and fertility care in Bangalore

If you are looking for fertility evaluation in Bangalore, low AMH can be assessed as part of a broader fertility consultation.

EVE Women and Fertility Clinic in Gunjur provides fertility assessment and counselling, along with services such as ovulation induction, follicle monitoring and IUI.

For women concerned about ovarian reserve, the aim is to understand the AMH result alongside age, menstrual history, ultrasound findings and other relevant fertility factors.

If IVF becomes part of the discussion, Dr. Swati Shree can assess you at EVE and guide IVF treatment. IVF laboratory procedures are carried out at associated, registered ART centres.

### Key Takeaways
- Low AMH usually indicates reduced ovarian reserve.
- Low AMH does not automatically mean infertility.
- AMH does not directly measure egg quality.
- Age and ovarian reserve provide different information.
- Natural pregnancy is possible with low AMH.
- AMH can help predict ovarian response during fertility treatment.
- AFC provides another useful assessment of ovarian reserve.
- Low AMH does not automatically mean IVF cannot be considered.
- AMH does not give an exact count of remaining eggs.
- There is no single AMH number that can predict pregnancy for every woman.
- Supplements or online treatments should not be used simply to try to increase AMH.
- Fertility preservation decisions depend on more than AMH.
- The meaning of a low AMH result should be discussed in the context of your age and complete fertility assessment.

### Final Thoughts

A low AMH result can sound much more frightening than it actually is.

It is information about ovarian reserve. It is not a verdict on your fertility.

The same AMH value can mean something different for two women because fertility is influenced by age, ovulation, sperm factors, the fallopian tubes, the uterus, previous reproductive history and several other factors.

If you have received a low AMH result, the most useful step is to understand it properly rather than trying to interpret the number alone.

For women in Bangalore who want a detailed fertility assessment, a consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur can help put the AMH result into the context of the rest of the fertility picture.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [Ovarian Hyperstimulation Syndrome Warning Signs](/blog/ovarian-hyperstimulation-syndrome-warning-signs/)
- [Can You Get Pregnant Naturally With Low AMH?](/blog/can-you-get-pregnant-naturally-low-amh/)
- [Low AMH and IVF: What It Means for Treatment](/blog/low-amh-and-ivf-treatment/)
- [AMH vs Egg Quality: What Is the Difference?](/blog/amh-vs-egg-quality-difference/)
- [Low AMH at 30, 35 or 40: What Changes With Age](/blog/low-amh-at-30-35-40-age/)

### FAQs

1. **Can I get pregnant naturally with low AMH?**
   Yes. Low AMH does not automatically prevent natural pregnancy. AMH mainly provides information about ovarian reserve. Age, ovulation, fallopian tubes, sperm factors, endometriosis, uterine factors and the length of time you have been trying to conceive also influence fertility.
2. **Does low AMH mean poor egg quality?**
         No. AMH is primarily a marker of ovarian reserve and does not directly measure egg quality. Egg quality is strongly influenced by age, and there is no routine blood test that can directly determine the genetic quality of individual eggs. No. AMH counts quantity, not quality. Egg quality depends mainly on age. A younger woman with low AMH often has good eggs; an older woman with normal AMH may not.
3. **Is IVF possible with low AMH?**
   IVF may still be considered when AMH is low. A low AMH can suggest that the ovaries may produce fewer eggs during stimulation, which can affect treatment planning. However, AMH alone does not determine whether an IVF cycle will result in pregnancy.
4. **Can low AMH be increased naturally?**
   There is no established treatment that can restore eggs that have already been lost or create a new ovarian reserve. Healthy lifestyle choices support general health, but they should not be presented as a way to reverse reduced ovarian reserve. Fertility decisions should be based on proper medical assessment.
5. **Is AMH the same as antral follicle count?**
         No. AMH is measured through a blood test, while antral follicle count is assessed using transvaginal ultrasound. Both provide information about ovarian reserve and may be considered together when planning fertility treatment. No, but they measure the same thing differently. AMH is a blood test of the hormone small follicles release; AFC is a scan count of visible follicles. Together they estimate reserve better than either alone.
6. **Does low AMH cause miscarriage?**
   Low AMH should not be considered a direct cause of miscarriage. AMH primarily reflects ovarian reserve. Pregnancy loss has multiple possible causes, and age-related egg quality and chromosomal factors are considered separately when assessing fertility and pregnancy history.
7. **Should I worry about low AMH at 35 or 40?**
   A low AMH at 35 or 40 should be interpreted alongside age rather than by itself. Both ovarian reserve and age-related changes in egg quality can be relevant. A fertility specialist can review AMH, AFC, menstrual history and other factors to discuss appropriate reproductive planning.
8. **Where can I get a low AMH fertility consultation in Bangalore?**
         A fertility consultation with Dr. Swati Shree is available at EVE Women and Fertility Clinic in Gunjur, Bangalore. The consultation can help assess low AMH alongside age, ovarian reserve, menstrual history and other relevant fertility factors. At EVE Women and Fertility Clinic in Gunjur, East Bangalore, Dr. Swati Shree reviews AMH with your age, scan and history before any plan. Call 72049 21212 to book a consultation.
### Sources and further reading

- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 23 · Ovarian Hyperstimulation Syndrome Warning Signs

```yaml
title: "Ovarian Hyperstimulation Syndrome Warning Signs"
description: "OHSS is a possible complication of IVF stimulation. Learn the symptoms, who is at higher risk, how it is prevented and when to seek urgent medical help."
url: /blog/ovarian-hyperstimulation-syndrome-warning-signs/
lastReviewed: "2026-10-07"
category: "Low AMH & Ovarian Reserve"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-07"
dateModified: "2026-10-07"
badge: fertility-evaluation
readingTime: 4
cluster: "Low AMH & Ovarian Reserve"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Ovarian hyperstimulation syndrome", alternateName: ["OHSS"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /services/follicular-monitoring/]
posts: [/blog/ivf-process-step-by-step-consultation-embryo-transfer/, /blog/frozen-embryo-transfer-process-preparation/, /blog/pcos-ivf-when-needed-or-not/, /blog/low-amh-and-ivf-treatment/]
```

H1: Ovarian Hyperstimulation Syndrome Warning Signs

> **Quick answer:** OHSS usually appears a few days after the egg trigger injection or in early pregnancy. Mild symptoms include bloating and mild abdominal discomfort. Warning signs of severe OHSS include rapid weight gain, severe abdominal pain, vomiting, reduced urination, shortness of breath and marked swelling. Contact your clinic or go to hospital urgently if these occur.

Ovarian hyperstimulation syndrome, or OHSS, is a condition that can occur when the ovaries overreact to fertility medicines. The ovaries enlarge and fluid leaks into the abdomen and sometimes the chest. Most cases are mild, but severe OHSS needs urgent care.

This article is part of our [low AMH and ovarian reserve](/blog/low-amh-ovarian-reserve-fertility/) guide.

### Why does OHSS happen?

Fertility medicines used to stimulate the ovaries can cause many follicles to develop. After the trigger injection, ovarian blood vessels become leaky because of chemical signals, allowing fluid to move into the abdomen. The risk is higher with high hormone levels, many follicles and pregnancy, which keeps hormone stimulation going.

### Who is at higher risk?

Risk is higher in younger women, women with PCOS, those with high AMH or many antral follicles, those with a previous episode of OHSS, a high number of eggs retrieved and women with very high oestrogen levels during stimulation. Your specialist assesses risk and adjusts your plan.

### What are the symptoms?

## Mild

Bloating, mild abdominal pain, nausea and slight weight gain.

## Moderate

More abdominal distension, nausea, vomiting and diarrhoea, with ultrasound showing enlarged ovaries and fluid.

## Severe

Rapid weight gain over a few days, marked abdominal swelling and pain, persistent vomiting, very little urine, shortness of breath, dizziness, leg swelling or pain, and in rare cases blood clots.

### How is OHSS prevented?

Doctors use individualised stimulation doses, close monitoring with scans and blood tests, trigger medicines that reduce risk in high-risk women, freezing all embryos for later transfer, and medicines that lower the risk in selected cases. Following your clinic's instructions helps.

### How is it treated?

Mild OHSS is managed at home with rest, drinking fluids, monitoring weight and symptoms and pain relief approved by your doctor. Avoid anti-inflammatory painkillers unless advised. Moderate and severe cases may need hospital admission for fluids, monitoring, drainage of excess fluid, medicines to prevent clots and close observation. OHSS usually settles within one to two weeks, longer if pregnancy occurs.

### What can you do at home?

Drink plenty of fluids including those with electrolytes, eat a protein-rich diet, avoid strenuous exercise and intercourse while ovaries are enlarged, weigh yourself daily and record your urine output if advised. Keep your clinic's emergency number handy.

### When should you seek urgent help?

Seek urgent care for rapid weight gain, severe abdominal pain, shortness of breath, reduced urination, dizziness, calf swelling or pain, or persistent vomiting.

### Key Takeaways
- OHSS is a risk of ovarian stimulation, mostly mild.
- High AMH, PCOS and young age raise the risk.
- Prevention strategies reduce risk.
- Severe symptoms need urgent care.
- It usually resolves with care.

### Final Thoughts

OHSS is uncommon in its severe form, and clinics monitor closely to prevent it. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru individualises IVF stimulation to protect patient safety.

### FAQs

1. **What are the first signs of OHSS?**
         Early signs include bloating, mild abdominal discomfort, nausea and slight weight gain a few days after the trigger. Severe signs include rapid weight gain, severe pain, vomiting, breathlessness and reduced urination. Bloating, abdominal discomfort, mild nausea and quick weight gain within days of the trigger injection or egg collection. Mild cases settle alone; worsening swelling, vomiting or breathlessness needs same-day review.
2. **How long does OHSS last?**
         Mild OHSS usually settles in about a week. If pregnancy occurs, symptoms can last longer, sometimes two weeks or more. Severe cases need medical care. Mild cases settle in about a week once the hormone levels fall. If pregnancy occurs, symptoms can linger a few weeks longer. Severe OHSS needing hospital care is uncommon with modern protocols.
3. **Can OHSS be prevented?**
         Risk can be reduced by individualised medicine doses, careful monitoring, special trigger options and freezing all embryos for later transfer. Your specialist selects the safest protocol for you. Risk can be lowered a lot: antagonist protocols, an agonist trigger, adjusted doses and freezing all embryos instead of a fresh transfer. Women with PCOS or many follicles benefit most from these steps.
4. **Does OHSS affect the chance of pregnancy?**
         OHSS itself does not necessarily reduce the chance of pregnancy, but doctors may freeze embryos and delay transfer until you recover. Pregnancy can prolong OHSS symptoms. The OHSS episode itself does not reduce your chances, but a fresh transfer is usually postponed so the body recovers. The frozen embryo transfer that follows has outcomes as good as a fresh one.
5. **Should I go to hospital for bloating after egg collection?**
         Mild bloating is common. Go to the hospital or call your clinic for rapid weight gain, severe pain, vomiting, shortness of breath, very little urine or leg swelling. Mild bloating is expected. Go the same day if you have severe or worsening pain, marked swelling, vomiting, very little urine, leg swelling or breathlessness. When in doubt, call your clinic first.
### Sources and further reading

- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 24 · Can You Get Pregnant Naturally With Low AMH?

```yaml
title: "Can You Get Pregnant Naturally With Low AMH?"
description: "Low AMH does not automatically mean infertility. Learn what low AMH really tells you, why natural pregnancy is still possible and when to consider."
url: /blog/can-you-get-pregnant-naturally-low-amh/
lastReviewed: "2026-10-08"
category: "Low AMH & Ovarian Reserve"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-08"
dateModified: "2026-10-08"
badge: ovarian-reserve
readingTime: 4
cluster: "Low AMH & Ovarian Reserve"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Anti-Mullerian hormone test", alternateName: ["AMH test"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /services/follicular-monitoring/]
posts: [/blog/low-amh-ovarian-reserve-fertility/, /blog/low-amh-and-ivf-treatment/, /blog/amh-vs-egg-quality-difference/, /blog/low-amh-at-30-35-40-age/, /blog/egg-freezing-fertility-preservation/]
```

H1: Can You Get Pregnant Naturally With Low AMH?

> **Quick answer:** Yes, many women with low AMH can conceive naturally, especially if they ovulate regularly, are younger and have no other fertility problems. AMH reflects egg quantity, not egg quality, and it does not predict natural conception well on its own. Because low AMH may mean a shorter fertility window, it is wise to see a fertility specialist promptly, particularly if you are over 35.

AMH, or anti-Mullerian hormone, is a blood test that estimates the number of eggs remaining in the ovaries. Hearing that your AMH is low can be alarming. However, low AMH does not mean you cannot get pregnant, and many women with low AMH conceive naturally.

This article is part of our [low AMH and ovarian reserve](/blog/low-amh-ovarian-reserve-fertility/) guide.

### What does AMH actually measure?

AMH is produced by small follicles in the ovaries. A higher level suggests more eggs remaining, and a lower level suggests fewer. Only one egg is usually released each month in a natural cycle, so a lower number of eggs does not stop ovulation by itself.

### What does AMH not tell you?
- Egg quality, which is mainly linked to age
- Whether you will conceive naturally in a given month
- Exactly when menopause will occur

### Who is more likely to conceive naturally with low AMH?
- Younger women with regular periods
- Women with open fallopian tubes and a normal uterus
- Couples with normal semen analysis
- Those who have not been trying for very long

### Why might low AMH still matter?

Low AMH may signal that the reproductive window is shorter than average. It also predicts that the ovaries may produce fewer eggs during IVF stimulation. This information helps with planning, especially if you want more than one child or are considering egg freezing.

### What should you do if your AMH is low?
- See a fertility specialist promptly, especially if 35 or older
- Complete a full fertility evaluation for both partners
- Track ovulation and time intercourse
- Discuss timelines for natural trying versus treatment
- Consider fertility preservation if pregnancy is not planned soon

### Can AMH be increased?

There is no proven way to significantly increase AMH or the number of eggs. Claims about supplements raising AMH lack strong evidence. Healthy lifestyle habits support overall reproductive health, but they do not create new eggs.

### When is treatment recommended?

Treatment may be advised if you have been trying without success, are older, have other fertility factors or have very low AMH. Options include ovulation induction with IUI or IVF, depending on your situation.

### Key Takeaways
- Low AMH does not mean you cannot conceive naturally.
- AMH measures egg quantity, not quality.
- Age remains the main factor for egg quality.
- Low AMH may mean a shorter fertility window.
- Seek specialist advice promptly to plan wisely.

### Final Thoughts

A low AMH result is useful information, not a final verdict. With timely advice, many women go on to have healthy pregnancies. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru helps women understand AMH results and plan next steps.

### FAQs

1. **Can I get pregnant with low AMH naturally?**
         Yes. Many women with low AMH conceive naturally, especially if they are younger, ovulate regularly and have no other fertility issues. Seeking specialist advice helps plan timelines. Yes. Low AMH means fewer eggs remain, not zero, and one egg is released each cycle. Age matters more than the AMH number itself, so acting sooner rather than waiting is the practical advice.
2. **Does low AMH mean poor egg quality?**
   No. AMH reflects the number of eggs, not their quality. Egg quality is mainly related to age.
3. **What is considered a low AMH level?**
         Ranges vary by laboratory and age. Your fertility specialist will interpret your AMH in the context of your age, antral follicle count and other findings. Labs differ, but below about 1.0 ng/mL is generally called low, and under 0.5 very low. The number is always read against your age, since the same value means different things at 28 and 40.
4. **Can supplements increase AMH?**
         There is no strong evidence that supplements significantly raise AMH or egg numbers. Discuss any supplements with your doctor before taking them. No supplement has been proven to raise AMH meaningfully or reverse reserve loss. Vitamin D and general health measures are reasonable, but be sceptical of products sold with promises of restored reserve.
5. **Should I freeze my eggs if my AMH is low?**
         If you are not planning pregnancy soon, egg freezing may be worth discussing. Low AMH may mean fewer eggs retrieved, so earlier consideration is often advised. Worth discussing if you are under about 36 and not ready to conceive soon, because future reserve only shrinks. With very low AMH the yield per cycle may be small, so individual counselling matters.
### Sources and further reading

- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 25 · Low AMH and IVF

```yaml
title: "Low AMH and IVF: What It Means for Treatment"
description: "Low AMH often means fewer eggs in IVF, but pregnancy is still possible. Learn how doctors adjust stimulation, what to expect from egg retrieval and."
url: /blog/low-amh-and-ivf-treatment/
lastReviewed: "2026-10-08"
category: "Low AMH & Ovarian Reserve"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-08"
dateModified: "2026-10-08"
badge: ovarian-reserve
readingTime: 4
cluster: "Low AMH & Ovarian Reserve"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Anti-Mullerian hormone test", alternateName: ["AMH test"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /services/follicular-monitoring/]
posts: [/blog/low-amh-ovarian-reserve-fertility/, /blog/can-you-get-pregnant-naturally-low-amh/, /blog/amh-vs-egg-quality-difference/, /blog/ivf-process-step-by-step-consultation-embryo-transfer/, /blog/ovarian-hyperstimulation-syndrome-warning-signs/]
```

H1: Low AMH and IVF: What It Means for Treatment

> **Quick answer:** Low AMH predicts a lower number of eggs retrieved during IVF stimulation. Doctors may adjust medicine doses and protocols, consider accumulating embryos over more than one cycle, or discuss options such as donor eggs if response is very poor. Egg quality, which depends mainly on age, has a larger effect on pregnancy chances than AMH alone.

AMH is one of the most useful tests for planning IVF because it helps predict how the ovaries will respond to stimulation medicines. A low AMH usually means fewer eggs will be collected. It does not mean IVF cannot work, but it does influence how treatment is planned.

This article is part of our [low AMH and ovarian reserve](/blog/low-amh-ovarian-reserve-fertility/) guide.

### Why does AMH matter in IVF?

During IVF, medicines stimulate several follicles to grow so multiple eggs can be collected. AMH reflects how many follicles are available to respond. Lower AMH usually means fewer follicles respond, so fewer eggs are retrieved.

### How is IVF adjusted for low AMH?

## Individualised stimulation

Doctors choose medicine type and dose based on AMH, antral follicle count, age and previous response.

## Different protocols

Antagonist protocols, mild stimulation or natural-cycle approaches may be considered depending on the patient.

## Embryo accumulation

Some patients undergo more than one stimulation cycle to collect and freeze eggs or embryos before transfer.

## Close monitoring

Frequent ultrasound and hormone checks guide timing of egg retrieval.

### Does low AMH affect egg quality?

AMH measures quantity, not quality. A younger woman with low AMH may have fewer eggs but still have good-quality eggs and reasonable chances per embryo. Age remains the strongest predictor of egg quality.

### What are realistic expectations?

Fewer eggs can mean fewer embryos and fewer chances per cycle. Some cycles may be cancelled if response is very low. Success rates vary widely depending on age and other factors, so ask your clinic for personalised guidance rather than general numbers.

### What options exist if response is very low?
- Repeating stimulation with an adjusted protocol
- Accumulating embryos across cycles
- Donor eggs, which can offer higher success in some situations
- Discussing realistic goals and emotional support

### Can supplements help?

Some supplements are promoted for low ovarian reserve, but evidence is limited or mixed. Discuss any supplement with your specialist before use.

### Key Takeaways
- Low AMH predicts fewer eggs in IVF.
- Egg quality depends mainly on age.
- Protocols are tailored to low responders.
- Multiple cycles may be considered.
- Donor eggs are an option in some cases.

### Final Thoughts

Low AMH changes how IVF is planned, not whether hope exists. A personalised approach and honest counselling help you make the right choices. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru plans IVF tailored to ovarian reserve.

### FAQs

1. **Can IVF work with low AMH?**
         Yes. IVF can work with low AMH, though fewer eggs are usually collected. Success depends strongly on age and egg quality, and treatment is tailored to your response. Yes, though fewer eggs are collected per cycle. The plan focuses on maximising each cycle: tailored doses, sometimes multiple cycles, and using every embryo well. Quality, not the count, decides the outcome.
2. **How many eggs can I expect with low AMH?**
         Egg numbers vary widely depending on AMH, age, antral follicle count and protocol. Your specialist can give a personalised estimate after assessment. It varies widely, often single digits to low double digits depending on the level and your response. Your doctor predicts from the AMH, antral follicle count and past cycles, then sets expectations honestly.
3. **Does low AMH mean my IVF cycle will fail?**
         Not necessarily. Low AMH predicts quantity, not quality. Younger women with low AMH can still achieve pregnancy with good-quality eggs. No. Low AMH predicts fewer eggs, not failure. Pregnancy depends on getting at least one good embryo, and many low-AMH cycles succeed. Unrealistic promises either way should be treated with caution.
4. **Should I do multiple IVF cycles with low AMH?**
         Some patients benefit from more than one stimulation cycle to accumulate eggs or embryos. Your specialist will discuss whether this suits you. Sometimes it helps to bank embryos across two or three cycles before transferring, especially when reserve is very low. Your doctor weighs cost, time and response after seeing how the first cycle goes.
5. **When are donor eggs considered?**
                           Donor eggs may be considered when ovarian response is very low, repeated cycles have not succeeded or age significantly affects egg quality. This is a personal decision made after counselling. When own-egg chances are very low despite reasonable attempts, or reserve is essentially exhausted. It is a personal decision made after honest counselling about odds, not something any doctor should push early. When own-egg chances are very low despite reasonable attempts, or reserve is essentially gone. They offer high success and are a personal decision made after honest counselling, never pushed early.
### Sources and further reading

- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 26 · AMH vs Egg Quality

```yaml
title: "AMH vs Egg Quality: What Is the Difference?"
description: "AMH reflects how many eggs remain, not how healthy they are. Learn the difference between egg quantity and quality, what affects each and what it means."
url: /blog/amh-vs-egg-quality-difference/
lastReviewed: "2026-10-08"
category: "Low AMH & Ovarian Reserve"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-08"
dateModified: "2026-10-08"
badge: ovarian-reserve
readingTime: 4
cluster: "Low AMH & Ovarian Reserve"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Anti-Mullerian hormone test", alternateName: ["AMH test"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /services/follicular-monitoring/]
posts: [/blog/low-amh-ovarian-reserve-fertility/, /blog/can-you-get-pregnant-naturally-low-amh/, /blog/low-amh-and-ivf-treatment/, /blog/egg-quality-after-35/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/]
```

H1: AMH vs Egg Quality: What Is the Difference?

> **Quick answer:** AMH measures egg quantity, not egg quality. A woman can have low AMH with good-quality eggs, or normal AMH with poorer-quality eggs. Egg quality is mainly determined by age, because the chance of chromosomal errors in eggs rises over time. AMH is most useful for predicting response to IVF stimulation, while age is the best guide to egg quality.

Many women assume that AMH tells them how good their eggs are. In reality, AMH and egg quality are different things. AMH estimates the number of eggs remaining, called ovarian reserve, while egg quality refers to an egg's ability to be fertilised, develop into a healthy embryo and lead to pregnancy.

This article is part of our [low AMH and ovarian reserve](/blog/low-amh-ovarian-reserve-fertility/) guide.

### What is egg quantity?

Egg quantity is the number of eggs left in the ovaries. It decreases throughout life. AMH and antral follicle count on ultrasound are the main ways to estimate it.

### What is egg quality?

Egg quality refers to whether an egg has the right genetic material and cellular health to be fertilised and develop into a healthy embryo. Poor-quality eggs are more likely to have chromosomal errors, which can lead to failed fertilisation, failed implantation or miscarriage.

### How do they compare?

| Feature | Egg quantity | Egg quality |
|---|---|---|
| Meaning | Number of eggs remaining | Ability to form a healthy embryo |
| Main tests | AMH, antral follicle count | No direct test, inferred from age and IVF outcomes |
| Main influence | Age, genetics, surgery, conditions | Mainly age |
| Role in IVF | Predicts number of eggs collected | Influences embryo development and pregnancy |

### Why is age the key factor for quality?

Eggs age along with the woman. As age increases, especially after about 35, a higher proportion of eggs have chromosomal abnormalities. This is why pregnancy chances fall and miscarriage risk rises with age, even when AMH is normal.

### Can a young woman with low AMH have good eggs?

Yes. A younger woman with low AMH may have fewer eggs but each egg is more likely to be chromosomally normal than an egg from an older woman. Her chances per embryo may be relatively good.

### Can egg quality be improved?

Age-related changes cannot be reversed. However, healthy habits may support overall reproductive health:
- Not smoking
- Limiting alcohol
- Maintaining a healthy weight
- Managing conditions such as diabetes and thyroid disease
- Eating a balanced diet and staying active

Evidence for supplements is limited, so discuss them with your doctor.

### How is egg quality assessed in IVF?

During IVF, embryologists observe how eggs fertilise and how embryos develop. Genetic testing of embryos (PGT-A) may give information about chromosomes in selected cases.

### Key Takeaways
- AMH measures egg quantity, not quality.
- Egg quality depends mainly on age.
- Low AMH does not mean poor egg quality.
- Normal AMH does not guarantee good egg quality.
- Healthy habits support reproductive health.

### Final Thoughts

Understanding the difference between AMH and egg quality helps set realistic expectations and avoids unnecessary worry. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru helps women interpret ovarian reserve tests and plan treatment.

### FAQs

1. **Does AMH measure egg quality?**
         No. AMH estimates how many eggs remain in the ovaries. It does not measure whether those eggs are healthy. No. AMH reflects how many follicles remain, not how healthy the eggs inside them are. Age is the main marker of quality. A low AMH in a young woman is not the same problem as in an older one.
2. **What determines egg quality?**
         Age is the main factor. As women age, more eggs carry chromosomal errors. Lifestyle and some medical conditions may also play a role. Mainly age. Chromosome errors rise steadily through the 30s and sharply after 38, which is why age, not AMH, predicts embryo health. Smoking, severe illness and some conditions also play a role.
3. **Can you have low AMH and good egg quality?**
         Yes. Younger women with low AMH may have fewer eggs, but those eggs can still be of good quality. Yes, especially if you are younger. Low AMH narrows the number of eggs per cycle, not their health. It argues for acting sooner rather than assuming the eggs themselves are the problem.
4. **Is there a test for egg quality?**
                           There is no direct test. Egg quality is inferred from age and observed in IVF through fertilisation and embryo development. Genetic testing of embryos can provide additional information. No blood or scan test reads egg quality directly. Age is the best guide, and embryo development during IVF shows it indirectly. Marketing claims of quality tests should be treated carefully. No test reads egg quality directly. Age is the best guide, and embryo development during IVF shows it indirectly. Be cautious of products or tests that claim to measure it.
5. **Can I improve my egg quality?**
         Age-related changes cannot be reversed, but not smoking, limiting alcohol, a healthy weight and managing health conditions support reproductive health. You cannot reverse age-related change, but stopping smoking, limiting alcohol, treating thyroid problems and good metabolic health help the environment eggs mature in. Supplements have limited, unproven benefit.
### Sources and further reading

- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 27 · Low AMH at 30, 35 or 40

```yaml
title: "Low AMH at 30, 35 or 40: What Changes With Age"
description: "Low AMH means different things at different ages. Learn how age and ovarian reserve interact at 30, 35 and 40, and what next steps are sensible at each."
url: /blog/low-amh-at-30-35-40-age/
lastReviewed: "2026-10-09"
category: "Low AMH & Ovarian Reserve"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-09"
dateModified: "2026-10-09"
badge: ovarian-reserve
readingTime: 4
cluster: "Low AMH & Ovarian Reserve"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Anti-Mullerian hormone test", alternateName: ["AMH test"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /services/follicular-monitoring/]
posts: [/blog/low-amh-ovarian-reserve-fertility/, /blog/can-you-get-pregnant-naturally-low-amh/, /blog/amh-vs-egg-quality-difference/, /blog/fertility-after-35-when-to-seek-help/, /blog/egg-freezing-fertility-preservation/]
```

H1: Low AMH at 30, 35 or 40: What Changes With Age

> **Quick answer:** At 30, low AMH suggests fewer eggs than expected for age, but egg quality is usually still good, so prompt evaluation and timely planning are advised. At 35, low AMH combined with the natural decline in egg quality means seeking specialist help sooner and considering treatment earlier. At 40, low AMH is common and age is the main factor in egg quality, so prompt assessment and realistic discussion of options such as IVF or donor eggs are important.

AMH naturally declines with age as the number of eggs decreases. A low AMH result therefore means different things depending on how old you are. Interpreting AMH alongside age, antral follicle count and your fertility goals gives a clearer picture.

This article is part of our [low AMH and ovarian reserve](/blog/low-amh-ovarian-reserve-fertility/) guide.

### Why does age matter so much?

AMH tells you about egg quantity. Age tells you most about egg quality. Together, they help predict both natural fertility timelines and IVF response.

### What does low AMH mean at 30?
- Fewer eggs than typical for your age
- Egg quality is usually still relatively good
- Natural conception is often possible, especially with regular cycles
- The fertility window may be shorter than average

## Sensible steps
- See a fertility specialist for a full evaluation
- Do not delay trying if pregnancy is planned
- Consider egg freezing if pregnancy is not planned soon

### What does low AMH mean at 35?
- Egg numbers are lower than expected
- Egg quality is beginning to decline with age
- Natural conception remains possible but time matters more

## Sensible steps
- Seek specialist evaluation after 6 months of trying, or earlier
- Discuss timelines for natural trying, IUI or IVF
- Consider fertility preservation promptly if pregnancy is not planned soon

### What does low AMH mean at 40?
- Low AMH is more common at this age
- Egg quality is the main limiting factor
- Natural conception chances are lower, and miscarriage risk is higher

## Sensible steps
- Seek specialist help promptly
- Discuss IVF and realistic expectations
- Consider options such as donor eggs where appropriate
- Get support for emotional and practical decisions

### Can AMH change over time?

AMH can vary slightly between tests and laboratories, and some factors such as hormonal contraception or vitamin D deficiency may affect readings. Overall, AMH declines with age and cannot be significantly increased.

### What other tests help?

Antral follicle count, FSH, oestradiol and a full fertility evaluation of both partners help interpret AMH more accurately.

### Key Takeaways
- AMH must be interpreted with age.
- At 30, low AMH mainly affects quantity and timing.
- At 35, both quantity and quality start to matter more.
- At 40, age is the main factor in egg quality.
- Early specialist advice helps plan the best options.

### Final Thoughts

Low AMH is a planning tool, not a final answer. Understanding what it means at your age helps you make informed choices. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru provides age-appropriate fertility guidance and treatment.

### FAQs

1. **What does low AMH mean at age 30?**
         It suggests fewer eggs than typical for your age, but egg quality is usually still good. Natural conception is often possible, and early specialist evaluation helps with planning. It means reserve is smaller than typical for your age, but egg quality is usually still good. The practical advice is to start trying sooner or discuss egg freezing rather than assuming infertility.
2. **Is low AMH at 35 a concern?**
         It means time matters more. Seek specialist evaluation sooner and discuss timelines for natural trying or treatment, as egg quality also begins to decline with age. It deserves prompt attention because both quantity and quality decline from here. It is still very possible to conceive; the point is not to lose time. Evaluation of both partners should start now.
3. **Can I get pregnant at 40 with low AMH?**
         It is possible, but chances are lower and miscarriage risk is higher because egg quality declines with age. Prompt specialist advice on options such as IVF or donor eggs is important. It is possible but harder, since age affects quality as well as quantity. Options include prompt IVF, banking embryos or, honestly discussed, donor eggs. A specialist should map realistic odds for you.
4. **Does AMH decrease every year?**
         AMH generally declines with age, though individual results can vary between tests. Your specialist will interpret trends alongside other tests. Broadly yes, it declines with age, though the fall varies between women and occasional readings fluctuate. One value matters less than the trend and the whole picture, including your scan.
5. **Should I freeze my eggs if I have low AMH at 30?**
         If you are not planning pregnancy soon, egg freezing may be worth discussing. Earlier freezing generally gives better outcomes. It is a reasonable option if pregnancy is some years away, since eggs frozen now are younger than any you would produce later. Discuss expected yield with your specialist before deciding.
### Sources and further reading

- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ACOG: Evaluating infertility](https://www.acog.org/womens-health/faqs/evaluating-infertility)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 28 · Endometriosis and Fertility

```yaml
title: "Endometriosis and Fertility: Treatment & IVF in Bangalore"
description: "Can you get pregnant with endometriosis? See how it affects fertility, how doctors diagnose it, and when surgery, IUI or IVF may help you conceive."
url: /blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/
lastReviewed: "2026-10-09"
category: "Endometriosis"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-09"
dateModified: "2026-10-09"
badge: female-infertility
readingTime: 16
cluster: "Endometriosis"
pillar: true
keywords: []
about: {type: MedicalCondition, name: "Endometriosis"}
related: [/conditions/endometriosis/, /conditions/adenomyosis/, /treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/female-infertility-causes-symptoms-tests-treatment/, /blog/recurrent-miscarriage-causes-tests-treatment/, /blog/can-endometriosis-cause-infertility/, /blog/endometriosis-symptoms-not-to-ignore/, /blog/endometriosis-and-ivf/]
```

H1: Endometriosis and Fertility: Symptoms, Diagnosis and IVF

> **Quick answer:** Endometriosis can lower fertility, but it doesn't rule out pregnancy. It may cause inflammation in the pelvis, scar tissue around the tubes and ovaries, and a drop in egg reserve when cysts form on the ovaries. Depending on your age and test results, a doctor may suggest trying naturally, laparoscopic surgery, ovulation induction with IUI, or IVF.

Endometriosis is a long-term condition where tissue similar to the lining of the uterus grows outside it, usually on the ovaries, the fallopian tubes and the lining of the pelvis. It often causes painful periods and pelvic pain, and it can make getting pregnant harder. Plenty of women with endometriosis still conceive. Whether that happens naturally or with help depends on your age, your egg reserve, the state of your tubes, your partner's sperm and how widespread the disease is.

Below, we go through how endometriosis interferes with fertility, how it's diagnosed, what treatment involves, and where IVF fits in.

### What is endometriosis?

The inside of the uterus is lined by the endometrium, the tissue that thickens each month and sheds as your period. In endometriosis, tissue much like it turns up in places it doesn't belong. It still reacts to your monthly hormones. It swells, bleeds a little and irritates whatever it's sitting on, and over months and years that irritation can leave scar tissue. Sometimes the scarring forms adhesions, sticky bands that hold organs together in odd positions.

According to the World Health Organization, roughly 1 in 10 women and girls of reproductive age have endometriosis. Diagnosis often takes years. In many Indian homes, severe period pain is something you're told to put up with, so women frequently reach a doctor only when they can't get pregnant.

## Where does it grow?

Most often on the ovaries, the tubes, the outer wall of the uterus and the peritoneum (the thin lining of the pelvis). It also likes the pocket of space behind the uterus, just in front of the rectum.

In some women it goes deeper and involves the bowel, bladder or the tubes that carry urine from the kidneys. That's called deep endometriosis, and surgery for it is usually done by a specialised team.

## What is a chocolate cyst?

The medical name is endometrioma. It's a cyst on the ovary filled with old, thick, brown blood, which is where the nickname comes from. For fertility, these cysts matter more than most other forms of the disease because they sit right inside the tissue that holds your eggs.

## How is adenomyosis different?

Adenomyosis is a cousin of endometriosis. Here the lining-like tissue grows into the muscle wall of the uterus instead of outside it. Periods tend to be heavy and painful, and the uterus can feel enlarged. The two conditions often show up together, so a good scan will look for both.

### Can endometriosis cause infertility?

It can, and it's one of the conditions doctors find most often in women who are struggling to conceive. Still, a diagnosis of endometriosis is not a diagnosis of infertility. Many women get pregnant without ever knowing they had it.

When it does get in the way, there are a few likely reasons. The pelvis becomes inflamed, and that environment isn't kind to eggs, sperm or a newly fertilised embryo. Scar tissue can bend or trap the tubes so they can't pick up the egg after it's released. In more advanced disease the tubes may be blocked outright. Cysts on the ovaries, and sometimes the surgery used to remove them, can reduce the number of eggs left. Researchers are also looking at whether endometriosis changes how well the uterine lining accepts an embryo, though that question isn't settled yet.

## Does endometriosis lower AMH?

It can. Ovarian reserve is the doctor's term for how many eggs you have left, and it's usually estimated two ways. One is a blood test for AMH (anti-Müllerian hormone). The other is an ultrasound count of the small resting follicles in each ovary, known as the antral follicle count, or AFC.

An endometrioma can damage the healthy ovarian tissue around it. Cutting the cyst out can take some of that healthy tissue too, and AMH often falls after surgery. That's why ovarian surgery in a woman who wants children needs careful thought, preferably with a fertility specialist involved before the operation, not after.

Keep in mind that AMH measures how many eggs, not how good they are. A low number doesn't mean you can't get pregnant. It may mean your doctor won't want to wait as long before suggesting treatment.

## Does the stage matter?

Doctors usually grade endometriosis from stage I to IV, minimal to severe, based on what they see during laparoscopy. Higher stages are more likely to involve cysts, adhesions and damaged tubes, so they're more often tied to fertility trouble.

The stage has surprising blind spots, though. Pain doesn't track it well. Someone with stage I disease can be in agony while someone with stage IV barely notices. And stage alone won't tell you your odds of pregnancy. After surgery, some specialists use the Endometriosis Fertility Index, which factors in your age, how long you've been trying, how well your tubes work and what the surgeon found, to estimate the chance of conceiving naturally.

### What are the symptoms?

Period pain is the classic one, particularly pain that has crept up over the years or makes you miss work or college. Other common signs:
- Pelvic pain on days when you're not bleeding
- Deep pain during or after sex
- Pain when you pass stool or urine, often worse during your period
- Bloating, constipation or loose stools around your period
- Heavy or irregular bleeding in some women
- Tiredness that doesn't lift
- Trouble getting pregnant

If you've been told that pain is just part of being a woman, or that it'll settle after marriage, it's worth knowing that pain bad enough to disrupt your life isn't something you have to quietly accept. It should be checked.

## Can it be silent?

Yes. Some women have no pain at all. Their endometriosis is found during fertility tests, a scan done for another reason, or an unrelated operation.

### What causes endometriosis?

Nobody knows for sure. One long-standing theory is retrograde menstruation, where some period blood flows backwards through the tubes into the pelvis. Most women have a little of this, so the immune system probably plays a part too, perhaps failing to clear the stray tissue. Oestrogen feeds the condition, which is why symptoms rise and fall with the cycle. It also runs in families. If your mother or sister has it, your own risk is higher.

Starting periods early, having short cycles and having heavy flow may all add to the risk.

What doesn't cause it is anything you did. Stress didn't cause it. Neither did marrying late, focusing on your career or having used contraception.

### How is endometriosis diagnosed?

It starts with a conversation. Your doctor will want to know about your periods, your pain, how long you've been trying and what you've already been told. A pelvic examination comes next, then imaging.

| Test | What it can show | What it can miss |
|---|---|---|
| History and pelvic exam | Pain patterns, tender spots, nodules, a uterus that feels fixed in place | Early or mild disease |
| Transvaginal ultrasound | Chocolate cysts, adenomyosis, and some deep disease if the sonologist is experienced | Small patches on the pelvic lining |
| MRI (selected cases) | Deep disease near the bowel, bladder or nerves, often to help plan surgery | Small surface patches |
| Laparoscopy | A direct look inside the pelvis, with biopsy and treatment in the same sitting | Very little, but it means an operation |


## Is laparoscopy always needed?

Not anymore. Laparoscopy is keyhole surgery. A thin camera goes in through a small cut at the navel so the surgeon can see the pelvic organs directly. For a long time it was the only accepted way to confirm endometriosis.

The current ESHRE guideline takes a different view. It accepts ultrasound or MRI as enough for diagnosis in many women, and suggests saving laparoscopy for cases where the scans look normal but symptoms persist, where medical treatment hasn't worked, or where surgery is already planned. A clear scan isn't a complete all-clear, since tiny surface patches rarely show up on imaging.

If you're trying to conceive, the laparoscopy question becomes part of the fertility plan. Surgery costs you recovery time and may cost you some egg reserve, and those trade-offs have to be weighed against what it might gain.

### Which fertility tests will you need?

The endometriosis is only one piece. Before deciding anything, your doctor will usually check:
- AMH, a simple blood test
- Antral follicle count, on an ultrasound early in your cycle
- Hormones such as FSH, LH, oestradiol, TSH for thyroid, and prolactin if needed
- Whether and when you ovulate, sometimes with a follicular study (a few scans over several days to watch an egg grow and release)
- Whether your tubes are open, using an HSG dye test or HyCoSy, an ultrasound version, unless a laparoscopy has already shown this
- A semen analysis for your husband, read against WHO reference values

That last one gets skipped more often than it should. Men in India can be reluctant to give a sample, and there's still a quiet assumption in many families that fertility is the woman's problem. It isn't. A sperm issue changes the whole treatment plan, and finding it early can spare you procedures that were never going to work.

### How is endometriosis treated when you want a baby?

There are two goals here and they don't always point the same way. One is controlling pain. The other is getting pregnant. Which matters more to you right now, along with your age and test results, shapes the plan.

| Treatment | Main aim | Usually considered for |
|---|---|---|
| Pain relief medicines | Easing pain | Most women, alongside other care |
| Hormonal treatment | Easing pain, slowing the disease | Women not trying to conceive yet |
| Laparoscopic surgery | Pain relief, confirming diagnosis, sometimes better natural fertility | Selected women after a careful discussion |
| Ovulation induction with IUI | A better chance of pregnancy each cycle | Mild disease, open tubes, normal sperm |
| IVF or ICSI | Getting around damaged tubes and pelvic disease | More advanced disease, tubal damage, low reserve, age over 35, male factor, or earlier treatment that didn't work |


## Will hormonal treatment help me get pregnant?

No, though it's very useful for other reasons. The pill, progestins and GnRH-based medicines settle pain by switching the cycle down, and that also switches off ovulation. While you're on most of them, you can't conceive.

ESHRE specifically advises against using these medicines to boost natural fertility. They don't improve your chances afterwards, and they eat into time you could have spent trying. Where they shine is in keeping symptoms manageable until you're ready. Don't start or stop any of them without talking to your doctor first.

## Can surgery improve my chances?

For minimal to mild disease, removing or burning away the visible patches during laparoscopy may give natural conception a modest lift in some women. The surgeon can also free up adhesions and put the anatomy around the tubes and ovaries back into a more normal shape.

With moderate or severe disease the picture is murkier. Surgery may help with pain, and sometimes with fertility, but the pregnancy benefit is less certain and the operation is bigger. Each repeat surgery on the ovaries tends to cost more egg reserve, so second and third operations in women hoping to conceive are generally approached with real caution.

If surgery is on the table, get your AMH and other baseline tests done first. Then you and your doctor know exactly what you're starting with.

## Does a chocolate cyst have to come out before I try?

Often it doesn't. This is one of the most common questions women bring to the clinic.

Taking the cyst out may ease pain and confirms what it is. It can also take a bite out of your egg reserve, more so if there are cysts on both sides or you've had ovarian surgery before. For women heading towards IVF, guidelines don't routinely recommend removing an endometrioma just to improve IVF results.

There are situations where surgery is still sensible. A cyst that's large or growing, pain that nothing else controls, a scan that leaves any doubt about what the cyst actually is, or a cyst positioned so that it blocks the needle path during egg collection. In some of these cases, freezing eggs or embryos before the operation is worth discussing.

## Where does IUI fit in?

IUI, or intrauterine insemination, means placing washed and concentrated sperm directly into the uterus around the time you ovulate. It's usually paired with ovulation induction, where tablets or injections help one or a few eggs mature in that cycle.

For minimal or mild endometriosis, IUI can be a reasonable step if at least one tube is healthy and open and the semen analysis is normal or close to it. It's much less likely to help when the tubes are damaged, the egg reserve is low or the disease is more advanced.

Couples living around Gunjur, Varthur, Whitefield and Sarjapur Road can start their evaluation, follicle monitoring, ovulation induction and IUI with Dr. Swati Shree at EVE Women and Fertility Clinic, without travelling across Bangalore for the early stages of care.

### When does IVF come in?

In IVF, eggs are collected from the ovaries and fertilised with sperm in a laboratory. A resulting embryo is then placed in the uterus. Because fertilisation happens outside the body, IVF sidesteps most of the damage endometriosis does in the pelvis and tubes.

Doctors usually start talking about IVF when one or more of these apply. The tubes are blocked or badly damaged. The disease is moderate to severe. AMH or the follicle count is low. You're over 35 and time has become a factor. There's a sperm problem as well. Surgery or IUI hasn't led to a pregnancy. Or there are cysts on both ovaries and another operation would put your reserve at risk.

ICSI (intracytoplasmic sperm injection) is a type of IVF where one sperm is injected straight into each egg. It's mainly used for significant sperm problems or when eggs didn't fertilise well in an earlier cycle.

Dr. Swati Shree assesses you at EVE and then guides your IVF. IVF laboratory procedures are carried out at associated, registered ART centres, including egg collection, lab work and embryo transfer.

## What does an IVF cycle look like with endometriosis?

Mostly the same as anyone else's, with a bit of extra attention in places.
- Planning. Your doctor goes over your scans, AMH, past surgery and the semen report, then decides on a stimulation plan.
- Stimulation. Daily hormone injections, usually for about ten to fourteen days, encourage several follicles to grow. Endometriomas can affect how the ovaries respond, which is why monitoring matters.
- Monitoring. Scans and blood tests every few days, with doses adjusted as needed.
- Trigger. One final injection to bring the eggs to maturity.
- Egg collection. Done under anaesthesia with a fine needle passed through the vaginal wall, guided by ultrasound. If an endometrioma sits in the way, the team plans around it.
- Fertilisation and culture. Eggs and sperm are brought together, either by conventional IVF or ICSI, and the embryos grow in the lab for a few days.
- Transfer. A single embryo goes into the uterus, either in the same cycle or later as a frozen embryo transfer.
- Pregnancy test. A blood hCG test, usually about two weeks after egg collection, on the date your doctor gives you.

Some specialists lean towards frozen transfers for certain women with endometriosis or adenomyosis, occasionally after a stretch of hormonal preparation. This is decided individually, and the research is still catching up.

## Does endometriosis make IVF less likely to work?

The biggest influence on IVF in women with endometriosis is the same as for everyone else, and that's age. After that come egg reserve and how well the ovaries respond, egg and embryo quality, sperm quality, the condition of the uterus (adenomyosis and fibroids count here) and what's happened in earlier treatment.

Some studies find that women with severe endometriosis tend to get fewer eggs at collection, while the chance of pregnancy per embryo is often fairly similar. What that means for you depends on your own numbers, and your doctor can walk you through them. Any clinic promising a baby from a single cycle isn't being straight with you.

### Can you get pregnant naturally with endometriosis?

Many women do. The odds are better when the disease is mild, at least one tube is open, you ovulate regularly, your egg reserve is reasonable for your age, your husband's semen analysis is normal and you're on the younger side.

With that kind of picture, your doctor may suggest giving it a set amount of time, sometimes after laparoscopy, before moving on to treatment. If you're over 35, your AMH is low or you've already been trying for a while, open-ended waiting usually isn't the best use of the time you have.

### Is egg freezing worth considering?

It can be, especially if you aren't ready for a baby yet but your reserve is under pressure. That includes women with cysts on both ovaries, women facing ovarian surgery, women whose AMH is already low for their age, and women who plan to delay pregnancy for personal or work reasons.

Frozen eggs don't come with a promise. Their chances later depend mostly on how old you were when they were frozen and how many were stored. Whether it's right for you is a personal call, and one worth making with good information rather than in a rush.

### What about pregnancy with endometriosis?

Most women with endometriosis go on to have healthy pregnancies. Without periods, pain often eases for those nine months, though not for everyone.

Some research links endometriosis with a slightly higher chance of certain complications, including problems with where the placenta sits and early delivery. Your obstetrician may want to see you a little more often. That's careful monitoring, nothing more alarming than that.

Pregnancy doesn't make endometriosis go away. Symptoms often come back once periods return after delivery, so it helps to plan your ongoing care before then.

### Daily life, food and feelings

No diet or supplement has been shown to cure endometriosis or reliably improve fertility with it. Online claims to the contrary are everywhere, so be wary.

That said, everyday habits do help you feel better. Ordinary home food works well, with dal, sabzi, millets or brown rice, fruit, nuts and curd. You don't need to cut out whole food groups unless your doctor has a specific reason. Walking, yoga or any gentle movement you enjoy may take the edge off pain and lift your mood. Sleep matters more than people think, and long hours and late-night screens are hard to avoid if you work in Bangalore's tech belt. Smoking and alcohol are worth dropping, for both partners.

Herbal mixes and detox kits deserve a mention too. Some can interact with treatment. Tell your doctor about anything you're taking, even if it's "only natural".

## The emotional weight

Years of pain that nobody took seriously, followed by months of negative pregnancy tests, wears people down. Add relatives asking when the good news is coming and it can feel relentless.

Endometriosis is a medical condition. You didn't bring it on yourself, and fertility is something you and your partner face together. A counsellor, a support group, or just honest conversations at home can lighten the load. Looking after your mind is part of the treatment, not a distraction from it.

### Myths you can let go of

"Period pain is normal, so there's nothing to check." Some cramping is normal. Pain that stops you functioning, or that's getting worse, isn't.

"Endometriosis means no baby." Plenty of women with it conceive, with or without help.

"Pregnancy cures it." Symptoms may quieten for a while, then often return after periods restart.

"Chocolate cysts always have to be removed first." Surgery isn't always needed and can lower your egg reserve.

"Hormonal tablets now will improve my chances later." They help pain, but they don't improve natural fertility, and you can't ovulate while on most of them.

"Teenagers don't get endometriosis." Symptoms often start in the teens. A schoolgirl with crippling period pain deserves a check-up.

"The right diet will make it disappear." Eating well supports your health. It won't make endometriosis vanish.

### Questions worth asking your fertility doctor
- What type and stage of endometriosis do you think I have, and how certain are we?
- What do my AMH and follicle count mean at my age?
- Are my tubes open?
- Has my husband's semen been tested, and was it normal?
- Do I need surgery, and what might it do to my egg reserve?
- How long should I try naturally before we change the plan?
- Is IUI realistic for me, or should we be thinking about IVF?
- Should I freeze eggs or embryos before any operation?
- How do we manage my pain while I'm trying to conceive?

### Warning signs that need urgent care

Get to an emergency department, or call your doctor straight away, if you notice any of the following.
- Sudden, severe pain in the lower abdomen, which can mean a cyst has burst or an ovary has twisted
- Fever along with pelvic pain, particularly after any procedure
- Fainting, dizziness or a racing heart
- Bad bloating, breathlessness, vomiting or hardly passing urine after fertility injections, possible signs of ovarian hyperstimulation syndrome (OHSS)
- Pain on one side, pain at the tip of the shoulder, or bleeding in early pregnancy, which can point to an ectopic pregnancy
- Heavy bleeding at any stage of pregnancy

Don't hold on until your next appointment with any of these.

### When should you see a fertility specialist?

NICE and ASRM both suggest getting checked after 12 months of trying if you're under 35, or after 6 months if you're 35 or older. If you already know you have endometriosis, there's no need to wait that long.

It's also worth booking sooner if you have a chocolate cyst on one or both ovaries, if you've had ovarian surgery before, if your periods are both painful and irregular, if you've been told your AMH is low, or if treatment elsewhere hasn't worked.

For couples in East Bangalore looking for a fertility specialist who sees a lot of endometriosis, Dr. Swati Shree consults at EVE Women and Fertility Clinic in Gunjur, a short drive from Varthur, Whitefield and Sarjapur Road.

### Key Takeaways
- Endometriosis is common. Around 1 in 10 women of reproductive age have it.
- It can lower fertility through inflammation, scarring, tubal damage and reduced egg reserve, yet many women still conceive.
- Ultrasound, and sometimes MRI, can often diagnose it without surgery.
- Get AMH, a follicle count, a tubal test and your husband's semen analysis done before big decisions.
- Hormonal medicines help pain but won't improve natural fertility.
- Ovarian surgery can lower egg reserve, so plan it carefully and with fertility in mind.
- IUI can suit mild disease with open tubes. IVF is more often advised for advanced disease, blocked tubes, low reserve or age over 35.
- Ask about egg freezing if surgery is coming or your reserve is already low.
- Sudden severe pain, fever, fainting or heavy symptoms after fertility injections need urgent attention.

### Final Thoughts

Endometriosis can stretch out the road to pregnancy, and it's natural to feel worn down by it. What helps most is knowing where you actually stand. A proper look at both partners usually tells you more in a few weeks than a year of waiting and guessing.

If you have endometriosis, or think you might, and you're hoping to start a family, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore. You'll go through your reports, your options and the trade-offs of each, at whatever pace suits you.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [Can Endometriosis Cause Infertility?](/blog/can-endometriosis-cause-infertility/)
- [Endometriosis Symptoms Women Should Not Ignore](/blog/endometriosis-symptoms-not-to-ignore/)
- [Adenomyosis and Fertility Symptoms and Treatment](/blog/adenomyosis-and-fertility-symptoms-treatment/)
- [Pregnancy With Endometriosis Without IVF: Is It Possible?](/blog/pregnant-with-endometriosis-without-ivf/)
- [Endometriosis and IVF: When Is IVF Considered?](/blog/endometriosis-and-ivf/)

### FAQs

1. **Can I get pregnant if I have endometriosis?**
   Many women with endometriosis get pregnant, some naturally and some with treatment. How likely it is for you depends on your age, how advanced the disease is, whether your tubes are open, your egg reserve and your partner's sperm. A fertility specialist looks at all of these together before suggesting whether to keep trying, try IUI or go straight to IVF.
2. **Does endometriosis reduce AMH levels?**
   It can, mainly when there are chocolate cysts (endometriomas) on the ovaries. Removing those cysts surgically may lower AMH further, since some healthy ovarian tissue often comes out with them. AMH reflects how many eggs you have, not how healthy they are. A low result doesn't mean pregnancy is impossible, though it may push your doctor to start treatment sooner.
3. **Is surgery necessary before IVF if I have endometriosis?**
   Usually not. Guidelines don't routinely recommend removing a chocolate cyst just to improve IVF results, because the operation can reduce egg reserve. Surgery may still make sense if pain is severe, the cyst is large or looks unusual on scans, or it sits in the way of egg collection. Your fertility doctor will help you weigh this.
4. **Is IUI or IVF better for endometriosis?**
   That depends on your situation. IUI with ovulation induction may be tried for minimal or mild endometriosis, provided at least one tube is open and the semen analysis is normal. IVF is more often advised for moderate to severe disease, blocked tubes, low egg reserve, age over 35, sperm problems, or when earlier treatment hasn't resulted in pregnancy.
5. **Can endometriosis be seen on an ultrasound?**
   Partly. A transvaginal ultrasound picks up chocolate cysts and adenomyosis quite well, and an experienced sonologist can spot some deep endometriosis. The small patches scattered on the pelvic lining usually don't show up. So a normal scan doesn't fully rule it out. If symptoms carry on, an MRI or a diagnostic laparoscopy may be suggested.
6. **Will taking hormonal pills for endometriosis help me conceive later?**
   They won't improve your fertility. Hormonal pills and similar medicines ease pain and may slow the disease, but they stop ovulation while you're taking them, and they don't raise your chances once you stop. They're useful for keeping symptoms under control until you're ready to try. Check with your doctor before starting or stopping any of them.
7. **Where can I get an endometriosis and fertility consultation in East Bangalore?**
   Dr. Swati Shree, a reproductive medicine specialist, sees patients at EVE Women and Fertility Clinic in Gunjur, Bangalore, close to Varthur, Whitefield and Sarjapur Road. Evaluation, follicle monitoring, ovulation induction and IUI are done at EVE. When IVF is needed, the laboratory procedures are carried out at associated, registered ART centres.

### Sources and further reading

- [NHS: Endometriosis](https://www.nhs.uk/conditions/endometriosis/)
- [NICHD: Endometriosis](https://www.nichd.nih.gov/health/topics/endometriosis)
- [ACOG: Endometriosis](https://www.acog.org/womens-health/faqs/endometriosis)

Reviewer box: use global text.

---

## Post 29 · Can Endometriosis Cause Infertility?

```yaml
title: "Can Endometriosis Cause Infertility? What Helps"
description: "Endometriosis can make conception harder, but many women with it still get pregnant. Learn how it affects fertility, who is more affected and what."
url: /blog/can-endometriosis-cause-infertility/
lastReviewed: "2026-10-09"
category: "Endometriosis"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-09"
dateModified: "2026-10-09"
badge: female-infertility
readingTime: 4
cluster: "Endometriosis"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Endometriosis"}
related: [/conditions/endometriosis/, /conditions/adenomyosis/, /treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/endometriosis-symptoms-not-to-ignore/, /blog/endometriosis-and-ivf/, /blog/adenomyosis-and-fertility-symptoms-treatment/, /blog/female-infertility-tests-amh-ultrasound-hsg/]
```

H1: Can Endometriosis Cause Infertility?

> **Quick answer:** Endometriosis is found in a significant share of women with infertility, yet many women with mild disease conceive without treatment. It can reduce fertility through inflammation, scarring around the tubes and ovaries, ovarian cysts called endometriomas and changes in egg reserve. A fertility evaluation helps decide whether to try naturally, or whether IUI, surgery or IVF may be considered.

Yes, endometriosis can cause infertility, but it does not affect every woman the same way. Many women with endometriosis conceive naturally. Others find it harder because the condition can affect the tubes, ovaries, egg release and the environment where sperm and eggs meet. How much it affects fertility depends on the stage, location and your age.

This article is part of our [endometriosis and fertility](/blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/) guide.

### What is endometriosis?

Endometriosis is a condition where tissue similar to the lining of the womb grows outside it, usually on the ovaries, fallopian tubes, the lining of the pelvis or behind the uterus. This tissue reacts to monthly hormones, causing inflammation, pain and sometimes scarring.

### How can endometriosis affect fertility?

## Inflammation in the pelvis

The condition creates an inflamed environment. This may affect sperm movement, egg quality and early embryo development.

## Scarring and adhesions

Bands of scar tissue can bind the tubes and ovaries, making it harder for the tube to pick up the egg.

## Blocked or damaged tubes

In more advanced cases, the tubes may be blocked or distorted.

## Endometriomas and ovarian reserve

Cysts on the ovaries, often called chocolate cysts, can affect healthy ovarian tissue. Surgery on these cysts may also lower egg reserve, so it is planned carefully.

## Painful intercourse

Pain during sex can reduce how often couples try, which also affects the chance of conception.

### Does every woman with endometriosis have infertility?

No. Many women with endometriosis have children without help. The severity of pain does not always match the effect on fertility. Some women with mild pain have significant disease, and others with severe pain have only small patches.

### What factors change the outlook?
- Your age and egg reserve (AMH and antral follicle count)
- Stage and location of endometriosis
- Whether the tubes are open
- Size of ovarian cysts
- Your partner's semen analysis
- How long you have been trying

### What options may be considered?
- Trying naturally for a time in mild cases
- Ovulation support with IUI in selected couples
- Laparoscopic surgery to remove endometriosis or scar tissue in some cases
- IVF when tubes are damaged, egg reserve is low, age is a factor or other options have not worked

The right path depends on your full evaluation.

### Key Takeaways
- Endometriosis can reduce fertility but does not always cause infertility.
- It may affect tubes, ovaries and the pelvic environment.
- Pain severity does not predict fertility impact.
- Age and egg reserve strongly shape treatment choices.
- Options range from natural attempts to IVF.

### Final Thoughts

A diagnosis of endometriosis can feel heavy, especially when you are planning a family. With a clear evaluation, most women can find a realistic path forward. For a personalised fertility plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Can I get pregnant naturally with endometriosis?**
         Many women do, especially when the disease is mild, the tubes are open and egg reserve is good. If pregnancy does not happen within the recommended time for your age, a fertility specialist can suggest next steps. Many women do, especially with mild disease. The chance depends on how severe it is, whether the tubes and ovaries are affected, your age and egg reserve. A specialist can stage the likely impact.
2. **Does endometriosis affect egg quality?**
         It may affect the pelvic environment and, in some women, ovarian reserve. The effect on egg quality is still being studied. Age remains the most important factor for egg quality in most women. The evidence is mixed. Severe disease and ovarian cysts can lower reserve and may affect the environment eggs mature in, but many women with endometriosis produce good embryos. Individual assessment matters more than the label.
3. **Does surgery for endometriosis improve fertility?**
         In some women, removing endometriosis or scar tissue may help. Surgery on ovarian cysts must be planned carefully because it can reduce egg reserve. Your doctor will weigh the benefits and risks for your situation. Sometimes, mainly for moderate to severe disease or painful symptoms, where removing lesions can restore anatomy. Surgery on ovarian cysts can also reduce reserve, so it is weighed carefully before operating.
4. **How is endometriosis diagnosed?**
         Doctors use your symptoms, a pelvic examination and ultrasound. Endometriomas and deep disease can often be seen on scans. Laparoscopy can confirm the diagnosis in uncertain cases and treat it at the same time. Ultrasound can pick up endometriotic cysts and deep disease, and MRI adds detail. Mild endometriosis is only proven by laparoscopy, which is not always needed to start treatment.
5. **Is IVF needed for endometriosis?**
         Not always. IVF may be considered when tubes are damaged, egg reserve is low, age is a concern or other treatments have not worked. Many women with mild disease conceive without IVF. Not always. Mild disease with open tubes and good reserve may be tried naturally or with IUI first. IVF is advised when tubes are damaged, reserve is low, age is a factor or simpler steps have failed.
6. **Should I see a specialist if I have painful periods and cannot conceive?**
         Yes. Painful periods, pain during sex or pelvic pain along with difficulty conceiving can point to endometriosis. A fertility specialist can evaluate both pain and fertility together and plan suitable care. Yes. Severe period pain plus difficulty conceiving is a classic reason to look for endometriosis. Early review finds treatable causes and avoids months of waiting while the disease progresses.
### Sources and further reading

- [NHS: Endometriosis](https://www.nhs.uk/conditions/endometriosis/)
- [NICHD: Endometriosis](https://www.nichd.nih.gov/health/topics/endometriosis)
- [ACOG: Endometriosis](https://www.acog.org/womens-health/faqs/endometriosis)

Reviewer box: use global text.

---

## Post 30 · Endometriosis Symptoms Women Should Not Ignore

```yaml
title: "Endometriosis Symptoms Women Should Not Ignore"
description: "Severe period pain is not something to simply live with. Learn the common and less obvious signs of endometriosis, and when they deserve a gynaecology."
url: /blog/endometriosis-symptoms-not-to-ignore/
lastReviewed: "2026-10-10"
category: "Endometriosis"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-10"
dateModified: "2026-10-10"
badge: female-infertility
readingTime: 4
cluster: "Endometriosis"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Endometriosis"}
related: [/conditions/endometriosis/, /conditions/adenomyosis/, /treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/can-endometriosis-cause-infertility/, /blog/endometriosis-and-ivf/, /blog/adenomyosis-and-fertility-symptoms-treatment/, /blog/fibroids-and-fertility-can-you-get-pregnant/]
```

H1: Endometriosis Symptoms Women Should Not Ignore

> **Quick answer:** See a gynaecologist if period pain is not eased by usual painkillers, causes you to miss work or college, gets worse over time, or comes with pain during sex, bowel or bladder pain, heavy bleeding or difficulty conceiving. These symptoms do not confirm endometriosis, but they deserve proper assessment.

The most common symptom of endometriosis is period pain that is severe enough to disrupt daily life. Other signs include pain during sex, long-term pelvic pain, painful bowel movements or urination during periods and difficulty getting pregnant. Many women are told this pain is normal, which delays diagnosis. If your symptoms affect work, study or relationships, a gynaecology evaluation is worthwhile.

This article is part of our [endometriosis and fertility](/blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/) guide.

### Why is endometriosis often missed?

Period pain is common, so severe pain is often dismissed as normal. Symptoms also overlap with other conditions such as irritable bowel syndrome or urinary infection. Many women live with symptoms for years before diagnosis.

### Common Symptoms

## Severe period pain

Cramping that starts before the period, lasts several days and does not respond well to usual painkillers.

## Pain during or after sex

Deep pain during intercourse is a common sign, especially when endometriosis is behind the uterus.

## Chronic pelvic pain

Pain in the lower abdomen or back that continues outside the period.

## Heavy or irregular bleeding

Some women have heavy periods or spotting between periods.

## Difficulty conceiving

Endometriosis is found in many women undergoing fertility evaluation.

### Less obvious symptoms
- Pain while passing stools, especially during periods
- Pain or burning while passing urine during periods
- Bloating, often called "endo belly"
- Fatigue that worsens around the period
- Lower back or leg pain linked to the cycle
- Rarely, chest pain or shortness of breath during periods if endometriosis affects the diaphragm

### When should you seek help?

Book a gynaecology appointment if:
- Period pain stops you from normal activities
- Painkillers do not help or you need them for many days
- Pain is getting worse each year
- You have pain during sex
- You have been trying to conceive without success
- You have a family history of endometriosis

### When is it urgent?

Seek urgent care for sudden, severe pelvic pain, fever with pelvic pain, fainting, or pain with a positive pregnancy test. These need immediate assessment to rule out problems such as ovarian cyst rupture, torsion or ectopic pregnancy.

### How is it evaluated?

A doctor takes a detailed history, may do a pelvic examination and orders an ultrasound. Endometriomas and deep disease can often be seen on a scan. In some cases, MRI or laparoscopy is used to confirm the diagnosis.

### Key Takeaways
- Severe, disabling period pain is not normal.
- Pain during sex is a common sign of endometriosis.
- Bowel or bladder pain during periods can be linked.
- Difficulty conceiving may be the first clue.
- Early evaluation shortens the delay in diagnosis.

### Final Thoughts

Your pain is real and deserves to be taken seriously. Getting a proper evaluation can open the door to effective pain relief and better fertility planning. For a careful assessment, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Is severe period pain always endometriosis?**
         No. Severe period pain can have other causes, such as adenomyosis, fibroids or pelvic infection. However, pain that disrupts daily life should be checked. A doctor can find the cause and suggest the right treatment. No, but pain that stops normal life is not something to simply endure. Adenomyosis, fibroids and other causes look similar. A gynaecology review with a scan is the way to find out which it is.
2. **Can endometriosis be seen on ultrasound?**
         Ovarian cysts called endometriomas and some deep endometriosis can be seen on a good-quality ultrasound. Small surface patches may not be visible. Laparoscopy may be used if the diagnosis is unclear. Endometriotic cysts and deep nodules often can be, especially on a good transvaginal scan. Superficial deposits are invisible on scans and are found only at laparoscopy or suspected from symptoms.
3. **At what age does endometriosis start?**
         Symptoms often begin in the teens or twenties, sometimes with the first periods. Many women are diagnosed later because symptoms were dismissed. Teenagers with severe period pain also deserve evaluation. It can begin in the teenage years and is most often diagnosed between 25 and 40. Symptoms may be present for years before the diagnosis, which is why persistent severe period pain deserves review.
4. **Can endometriosis cause pain outside periods?**
         Yes. Many women have pelvic or lower back pain at other times in the cycle, pain during sex or pain while passing stools. Pain patterns vary from person to person. Yes. Some women have pain through the month, pain with intercourse, pain passing urine or opening bowels, or lower back pain. Cyclical worsening around periods is a typical clue.
5. **Does endometriosis run in families?**
         It can. Women whose mother or sister has endometriosis have a higher chance of developing it. If you have a family history and painful periods, mention it to your doctor. It can. Having a mother or sister with endometriosis raises your risk several-fold, though most women with the condition have no family history. Genes are one factor among several.
6. **Can endometriosis go away after pregnancy?**
         Symptoms may improve during pregnancy and breastfeeding because of hormonal changes, but endometriosis often returns afterward. Pregnancy is not a treatment. Long-term management depends on your symptoms and plans. Pregnancy often quiets symptoms for a while, but endometriosis does not reliably disappear and frequently returns after periods restart. It is not a cure, despite the common advice.
### Sources and further reading

- [NHS: Endometriosis](https://www.nhs.uk/conditions/endometriosis/)
- [NICHD: Endometriosis](https://www.nichd.nih.gov/health/topics/endometriosis)
- [ACOG: Endometriosis](https://www.acog.org/womens-health/faqs/endometriosis)

Reviewer box: use global text.

---

## Post 31 · Adenomyosis and Fertility Symptoms and Treatment

```yaml
title: "Adenomyosis and Fertility Symptoms and Treatment"
description: "Adenomyosis causes heavy, painful periods and may affect fertility. Learn how it differs from endometriosis, how it is diagnosed and treatment options."
url: /blog/adenomyosis-and-fertility-symptoms-treatment/
lastReviewed: "2026-10-10"
category: "Endometriosis"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-10"
dateModified: "2026-10-10"
badge: female-infertility
readingTime: 4
cluster: "Endometriosis"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Adenomyosis"}
related: [/conditions/endometriosis/, /conditions/adenomyosis/, /treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/, /blog/fibroids-and-fertility-can-you-get-pregnant/, /blog/frozen-embryo-transfer-process-preparation/, /blog/female-infertility-causes-symptoms-tests-treatment/, /blog/endometriosis-symptoms-not-to-ignore/]
```

H1: Adenomyosis and Fertility Symptoms and Treatment

> **Quick answer:** Adenomyosis causes heavy or prolonged periods, severe period pain and sometimes pain during intercourse. Diagnosis uses transvaginal ultrasound or MRI. Treatment depends on whether you want to conceive and may include pain relief, hormonal therapy, surgery or assisted reproduction. It often coexists with endometriosis or fibroids.

Adenomyosis is a condition in which the tissue that normally lines the womb grows into the muscular wall of the uterus. It can cause heavy, painful periods and an enlarged, tender womb. Its effect on fertility is still being studied, but it may reduce the chance of conception for some women.

This article is part of our [endometriosis and fertility](/blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/) guide.

### What is adenomyosis?

The inner lining of the uterus, the endometrium, normally sheds each month. In adenomyosis, endometrial tissue is found within the muscle wall, which can thicken and enlarge the womb. This can cause bleeding and inflammation. It is different from endometriosis, where similar tissue grows outside the womb, though the two can occur together.

### What are the symptoms?

Typical symptoms include heavy or long periods, severe cramping that worsens over time, pelvic pain, pain during intercourse, a bulky or tender uterus, clots and anaemia. Some women have no symptoms and the condition is discovered during a fertility evaluation.

### How may adenomyosis affect fertility?

It may alter the uterine environment, affect the uterine lining's receptivity, change contractions and cause inflammation, which may make implantation harder and raise the risk of miscarriage in some women. Many women with adenomyosis still conceive, and the impact varies widely. Associated conditions such as endometriosis can also play a role.

### How is it diagnosed?

Transvaginal ultrasound is often the first test and may show characteristic features in the uterine wall. MRI provides more detailed images and is helpful when the diagnosis is uncertain or treatment is being planned. A definitive diagnosis historically came from examining tissue after hysterectomy, but imaging is now commonly used.

### What are the treatment options?

## For symptom relief

Pain relievers, anti-inflammatory medicines, hormonal intrauterine devices, birth control pills and other hormonal medicines can reduce bleeding and pain. These are not suitable while trying to conceive.

## When planning pregnancy

Doctors may suggest tailored approaches such as treatment to calm the uterus before IVF, frozen embryo transfer in a prepared cycle or, in selected cases, surgery to remove affected tissue. Each option has benefits and limitations.

## Assisted reproduction

IUI or IVF may be recommended depending on age, ovarian reserve and other factors. A specialist can advise on the best timing.

## Hysterectomy

Removal of the uterus is a definitive option for women who have completed their families and have severe symptoms.

### What should you discuss with your doctor?

Your symptoms, how long you have been trying, previous treatments, ovarian reserve, other conditions such as endometriosis and fibroids, and your priorities. Treatment should address both symptoms and fertility goals.

### Key Takeaways
- Adenomyosis involves womb lining tissue in the uterine muscle.
- It causes heavy, painful periods.
- It may affect fertility in some women.
- Imaging aids diagnosis.
- Treatment depends on pregnancy plans.

### Final Thoughts

If you have heavy painful periods and trouble conceiving, ask about adenomyosis. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru provides evaluation and personalised fertility planning.

### FAQs

1. **Can you get pregnant with adenomyosis?**
         Many women with adenomyosis conceive, though the condition may reduce the chance of pregnancy or raise miscarriage risk in some. A fertility evaluation helps decide on treatment and timing. Many women do, though severe disease can make implantation harder. Treatment may calm the inflammation first, and options range from natural attempts to IVF depending on severity and age.
2. **What is the difference between adenomyosis and endometriosis?**
         In adenomyosis, endometrial-like tissue grows into the muscle wall of the uterus, while in endometriosis it grows outside the womb. They can occur together and cause overlapping symptoms. In adenomyosis, lining-like tissue grows inside the womb muscle itself; in endometriosis it sits outside the uterus. Both cause pain and heavy periods and often coexist, but they are different conditions.
3. **How is adenomyosis diagnosed?**
         Doctors use symptoms, pelvic examination and imaging such as transvaginal ultrasound or MRI. Imaging shows changes in the uterine wall that suggest adenomyosis. Transvaginal ultrasound showing an enlarged, uneven womb muscle usually suggests it, and MRI confirms the extent. Unlike endometriosis, it rarely needs surgery just for diagnosis.
4. **Can adenomyosis be treated before IVF?**
         Some patients benefit from medical treatment or specific protocols before embryo transfer, and surgery may be considered selectively. Your specialist will individualise the plan. Yes. A few months of hormone suppression can calm the uterus before embryo transfer in selected cases. Your specialist decides based on severity, because suppression is not right for everyone.
5. **Does adenomyosis go away after menopause?**
   Symptoms usually improve after menopause because hormones that stimulate the tissue decline. Treatment for symptoms during the reproductive years depends on your goals.

### Sources and further reading

- [NHS: Endometriosis](https://www.nhs.uk/conditions/endometriosis/)
- [NICHD: Endometriosis](https://www.nichd.nih.gov/health/topics/endometriosis)
- [ACOG: Endometriosis](https://www.acog.org/womens-health/faqs/endometriosis)

Reviewer box: use global text.

---

## Post 32 · Pregnancy With Endometriosis Without IVF

```yaml
title: "Pregnancy With Endometriosis Without IVF: Is It Possible?"
description: "Many women with endometriosis conceive without IVF. Learn which factors make natural pregnancy more likely and when IUI, surgery or IVF may be considered."
url: /blog/pregnant-with-endometriosis-without-ivf/
lastReviewed: "2026-10-10"
category: "Endometriosis"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-10"
dateModified: "2026-10-10"
badge: female-infertility
readingTime: 4
cluster: "Endometriosis"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Endometriosis"}
related: [/conditions/endometriosis/, /conditions/adenomyosis/, /treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/can-endometriosis-cause-infertility/, /blog/endometriosis-and-ivf/, /blog/endometriosis-symptoms-not-to-ignore/, /blog/iui-vs-ivf-which-fertility-treatment/]
```

H1: Pregnancy With Endometriosis Without IVF: Is It Possible?

> **Quick answer:** Natural pregnancy or IUI may be reasonable when you are younger, endometriosis is mild, both tubes are open, egg reserve is adequate and sperm parameters are normal. IVF may be considered sooner if you are older, have blocked tubes, large cysts, low egg reserve, male factor concerns or have tried other options without success.

Yes. Many women with endometriosis get pregnant without IVF, either naturally or with simpler treatments such as ovulation support and IUI. The chance depends on your age, the stage of endometriosis, whether your tubes are open, your egg reserve and your partner's sperm health. IVF is usually considered only when these factors suggest other options are less likely to work.

This article is part of our [endometriosis and fertility](/blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/) guide.

### What makes natural conception more likely?
- Age under 35
- Mild or minimal endometriosis
- Both fallopian tubes open
- Normal AMH and antral follicle count
- Regular ovulation
- Normal semen analysis
- Shorter duration of trying

### What non-ivf options may be considered?

## Timed intercourse

For younger women with mild disease, trying naturally for a defined period with cycle tracking may be advised.

## Ovulation support with IUI

Some couples may be offered ovulation induction with intrauterine insemination. This increases the number of eggs available and places sperm closer to the egg.

## Laparoscopic surgery

In selected cases, removing endometriosis patches or adhesions may improve the chance of natural conception, especially when pain is also a problem. Surgery on ovarian cysts is planned with care to protect egg reserve.

## Treating pain and inflammation

Pain control helps quality of life. Some hormonal treatments used for pain also stop ovulation, so they are paused when you are trying to conceive.

### When is IVF considered sooner?
- Age 35 or older, especially with low egg reserve
- Moderate to severe endometriosis
- Blocked or damaged tubes
- Large or recurrent endometriomas
- Male factor infertility
- No pregnancy after a few IUI cycles or after surgery

### How long should you try before moving on?

There is no single timeline for everyone. Your specialist will consider your age and test results to set a realistic plan. For women over 35, time is especially important, so plans tend to move faster.

### Key Takeaways
- Many women with endometriosis conceive without IVF.
- Age, tubes and egg reserve are key factors.
- IUI and surgery may help selected women.
- Hormonal pain treatments are paused while trying.
- IVF may be considered sooner in more complex cases.

### Final Thoughts

Endometriosis does not automatically mean IVF. A clear evaluation helps you choose the simplest option with a fair chance of success and move on at the right time if needed. For a balanced fertility plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Can mild endometriosis stop pregnancy?**
         Mild endometriosis can reduce fertility slightly, but many women with it conceive naturally. If pregnancy does not happen within a reasonable time for your age, your doctor may suggest IUI or other options. It can contribute, mainly by inflammation around the tubes and eggs, but mild disease often slows rather than prevents conception. Many women with mild endometriosis conceive without IVF.
2. **Does IUI work for endometriosis?**
         IUI with ovulation support may help some women with mild endometriosis, open tubes and normal sperm. It is less suitable when tubes are damaged or the disease is advanced. Your test results guide the choice. It can help in mild disease with open tubes, good reserve and a reasonable semen report. For moderate or severe disease, or once simpler steps have failed, IVF is usually more effective.
3. **Should I have surgery before trying to conceive?**
         Not always. Surgery may help when pain is significant or adhesions are suspected. For ovarian cysts, surgery can reduce egg reserve, so the decision is made carefully with a fertility specialist. Only in selected cases, such as significant disease affecting anatomy or severe pain. Surgery on the ovaries can reduce egg reserve, so it is weighed against the expected fertility benefit.
4. **Can I take hormone tablets for pain while trying to conceive?**
         Many hormonal treatments for endometriosis pain prevent ovulation, so they are usually stopped when you are trying to get pregnant. Your doctor can suggest other ways to manage pain during this time. Most hormonal treatments for endometriosis stop ovulation, so they cannot be used while trying. Pain relief compatible with conception exists; your doctor will choose what is safe at each stage.
5. **How long should I try naturally with endometriosis?**
   It depends on your age and test results. Younger women with mild disease may try for a while, while women over 35 or with other factors may be advised to seek help sooner. Your specialist will guide you.
6. **Does endometriosis come back after pregnancy?**
         Symptoms often ease during pregnancy but may return after delivery or breastfeeding. Long-term care depends on your symptoms and future plans. Regular follow-up helps manage it well. Often, yes. Pregnancy may ease symptoms temporarily but is not a cure. If it was part of why conception took time, planning the next pregnancy sooner is usually wise.
### Sources and further reading

- [NHS: Endometriosis](https://www.nhs.uk/conditions/endometriosis/)
- [NICHD: Endometriosis](https://www.nichd.nih.gov/health/topics/endometriosis)
- [ACOG: Endometriosis](https://www.acog.org/womens-health/faqs/endometriosis)

Reviewer box: use global text.

---

## Post 33 · Endometriosis and IVF

```yaml
title: "Endometriosis and IVF: When Is IVF Considered?"
description: "IVF may be considered for endometriosis when tubes are damaged, egg reserve is low or simpler options have not worked. Learn how IVF is planned and what."
url: /blog/endometriosis-and-ivf/
lastReviewed: "2026-10-11"
category: "Endometriosis"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-11"
dateModified: "2026-10-11"
badge: female-infertility
readingTime: 4
cluster: "Endometriosis"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Endometriosis"}
related: [/conditions/endometriosis/, /conditions/adenomyosis/, /treatments/ivf/, /services/fertility-evaluation/]
posts: [/blog/can-endometriosis-cause-infertility/, /blog/low-amh-and-ivf-treatment/, /blog/frozen-embryo-transfer-process-preparation/, /blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/]
```

H1: Endometriosis and IVF: When Is IVF Considered?

> **Quick answer:** IVF may enter the treatment pathway when natural conception, IUI or surgery are unlikely to work or have already been tried. Key triggers include tubal damage, endometriomas with reduced egg reserve, age 35 or older, male factor problems and long duration of infertility. The decision depends on your full evaluation, not on the diagnosis of endometriosis alone.

IVF may be considered for women with endometriosis when the fallopian tubes are blocked or damaged, egg reserve is low, the disease is moderate to severe, age is a concern or simpler treatments have not led to pregnancy. IVF works around many of the ways endometriosis affects fertility because fertilisation happens in the lab and the embryo is placed directly into the uterus.

This article is part of our [endometriosis and fertility](/blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/) guide.

### How does IVF help with endometriosis?

Endometriosis can affect the tubes, ovaries and pelvic environment. IVF helps by:
- Bypassing blocked or damaged tubes
- Collecting eggs directly from the ovaries
- Allowing fertilisation in a controlled lab setting
- Placing the embryo directly into the uterus

### When is IVF usually considered?

## Tubal damage

If scar tissue has blocked or distorted the tubes, the egg and sperm cannot meet naturally.

## Endometriomas and low egg reserve

Ovarian cysts and previous ovarian surgery can reduce egg reserve. IVF can make the best use of the eggs available.

## Age 35 or older

Time becomes more important with age. Moving to IVF sooner may be advised.

## Moderate to severe disease

More extensive endometriosis lowers the chance of natural conception and IUI success.

## Male factor infertility

If the partner's semen analysis is abnormal, IVF with ICSI may be advised.

## Previous treatments have not worked

If IUI cycles or surgery have not led to pregnancy, IVF may be the next step.

### How is IVF planned for endometriosis?

## Evaluation

AMH, antral follicle count, ultrasound and semen analysis guide planning. Large cysts are assessed carefully.

## Should cysts be removed first?

Not always. Removing endometriomas before IVF can lower egg reserve. Many specialists leave small or medium cysts alone unless they cause pain, are very large or look unusual. This is a personalised decision.

## Stimulation and egg collection

Ovaries are stimulated with medicines to grow several eggs, which are then collected in a short procedure.

## Embryo transfer

Some clinics may consider a frozen embryo transfer in selected endometriosis cases, after a hormonal preparation. Your doctor will explain the reasons for your plan.

### What should you expect?

IVF outcomes depend mainly on age, egg reserve and embryo quality. Endometriosis may lower the number of eggs collected in some women, but many still achieve pregnancy. Your specialist will discuss realistic expectations based on your results.

### Key Takeaways
- IVF is one option for endometriosis, not the only one.
- Tubal damage and low egg reserve often lead to IVF.
- Age plays a major role in timing.
- Cyst removal before IVF is not always needed.
- Plans are tailored to each woman's results.

### Final Thoughts

IVF can be a hopeful option when endometriosis affects fertility, especially when time or egg reserve is a concern. A careful plan helps you avoid unnecessary steps. To discuss whether IVF suits you, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Is IVF successful with endometriosis?**
         Many women with endometriosis conceive with IVF. Outcomes depend mostly on age, egg reserve and embryo quality. Your specialist can explain what to expect based on your own test results rather than general figures. Yes, outcomes are reasonable, though severe disease can lower response and embryo numbers. Protocols are adjusted for the inflammation and reduced reserve that sometimes come with the condition.
2. **Should I remove endometriosis cysts before IVF?**
         Not always. Surgery can reduce egg reserve. Small or medium cysts are often left alone. Surgery may be considered if cysts are very large, painful, block egg collection or look unusual on a scan. Not routinely. Cyst surgery can cost you egg reserve, so it is reserved for large cysts, suspicion of something other than endometriosis, or easy access problems at egg collection.
3. **Does endometriosis affect embryo quality?**
         Research is ongoing. Some studies suggest a small effect, while others show similar embryo quality. Age remains the most important factor. Your embryologist will assess embryo development in your cycle. Evidence is mixed. Severe disease and ovarian cysts may affect the eggs' environment, but many women with endometriosis make good embryos. Reserve and age are better guides than the label.
4. **Can endometriosis get worse during IVF?**
         IVF medicines raise hormone levels for a short time, but this rarely causes lasting worsening. Some women notice temporary pain. Your doctor will monitor you and manage any symptoms. Stimulation can temporarily aggravate symptoms, and ovarian cysts can grow a little, but IVF does not typically drive the disease forward. Your team watches for this during the cycle.
5. **Is frozen embryo transfer better for endometriosis?**
         Some specialists prefer frozen transfer in selected cases, after preparing the uterus with medicines. Evidence is still evolving. The choice depends on your response to stimulation and your doctor's assessment. Often preferred, because it lets the hormones settle first and sometimes follows a period of suppression that calms the uterus. Your specialist will recommend it when the uterus needs quietening.
6. **How soon should I move to IVF with endometriosis?**
         It depends on age, egg reserve, tubal status and previous treatments. Women over 35 or with low reserve may be advised to consider IVF sooner. A fertility specialist can set the right timeline. Sooner if disease is moderate to severe, tubes are damaged, reserve is low or you are over 35. With mild disease and time on your side, a short trial of simpler options may come first.
### Sources and further reading

- [NHS: Endometriosis](https://www.nhs.uk/conditions/endometriosis/)
- [NICHD: Endometriosis](https://www.nichd.nih.gov/health/topics/endometriosis)
- [ACOG: Endometriosis](https://www.acog.org/womens-health/faqs/endometriosis)

Reviewer box: use global text.

---

## Post 34 · IUI Treatment

```yaml
title: "IUI Treatment: Complete Guide to Intrauterine Insemination"
description: "Learn how IUI treatment works, who may benefit, how the procedure is timed, what happens afterward, possible risks and when IVF may be considered."
url: /blog/iui-treatment-intrauterine-insemination/
lastReviewed: "2026-10-11"
category: "IUI (Intrauterine Insemination)"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-11"
dateModified: "2026-10-11"
badge: fertility-evaluation
readingTime: 16
cluster: "IUI (Intrauterine Insemination)"
pillar: true
keywords: []
about: {type: MedicalProcedure, name: "Intrauterine insemination", alternateName: ["IUI"]}
related: [/treatments/iui/, /services/follicular-monitoring/]
posts: [/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/, /blog/pcos-fertility-ovulation-iui-ivf/, /blog/male-infertility-causes-semen-analysis-treatment/, /blog/low-amh-ovarian-reserve-fertility/, /blog/iui-vs-ivf-which-fertility-treatment/]
```

H1: IUI Treatment: Complete Guide to Intrauterine Insemination

> **Quick answer:** IUI is a form of assisted conception in which prepared sperm is introduced into the uterus using a thin catheter close to the time of ovulation. Unlike IVF, the egg is not removed from the ovary and fertilised in a laboratory. Fertilisation, if it occurs, happens inside the body. An IUI cycle may involve natural ovulation or medicines to stimulate ovulation. Ultrasound monitoring may be used to follow follicle development and help determine the appropriate time for insemination. Whether IUI is suitable depends on several factors, including age, ovulation, fallopian-tube status, sperm quality, ovarian reserve and the reason for infertility. The content strategy for this pillar identifies these same areas as the main patient questions, including IUI eligibility, ovulation induction, semen preparation, timing, pregnancy testing, treatment outcomes, number of cycles and the difference between IUI and IVF. Dr_Swati_Shree_Content_Strategy…

If you have been told that IUI might be an option, it is natural to have questions. What actually happens during the procedure? Does it hurt? How is the timing decided? And when does IUI make sense instead of IVF?

IUI, or intrauterine insemination, is a fertility treatment in which prepared sperm is placed directly into the uterus around the time of ovulation. The sperm still has to fertilise the egg naturally inside the reproductive tract. IUI can be used in selected cases of infertility, including some ovulation problems, unexplained infertility and certain male-factor fertility problems.

The treatment is relatively straightforward, but deciding whether it is suitable requires a proper assessment of both partners.

### How does IUI work?

The easiest way to understand IUI is to compare it with what normally happens during intercourse.

After ejaculation, sperm must travel through the vagina, pass through the cervix and uterus, and eventually reach the fallopian tube. Fertilisation usually takes place in the fallopian tube.

During IUI, the sperm sample is processed first. The prepared sperm is then placed directly into the uterus.

This bypasses the cervix and reduces some of the distance sperm would otherwise need to travel.

It does not bypass the need for ovulation, fertilisation or implantation.

A simplified IUI cycle looks like this:

Follicle development, then ovulation, then sperm preparation, then IUI, then fertilisation, if it occurs, then implantation, then pregnancy

The important point is that IUI creates a better opportunity for sperm to meet the egg. It cannot make fertilisation happen.

### Why might a fertility specialist recommend IUI?

IUI is not a treatment that fits every infertility diagnosis.

A doctor first looks at whether there is a reasonable pathway for sperm to reach an egg and whether insemination is likely to add value.

## Unexplained infertility

Sometimes fertility investigations do not reveal a clear reason why pregnancy has not occurred. This is known as unexplained infertility.

IUI may be considered in selected couples with unexplained infertility, often alongside ovarian stimulation depending on the clinical situation.

The decision is based on the couple's age, duration of infertility, previous treatment and other fertility findings.

## Problems with ovulation

Ovulation disorders can make conception difficult because there may not be a mature egg available when sperm are present.

This can occur with conditions such as PCOS.

In such cases, treatment may first focus on helping ovulation occur. Ultrasound scans can then be used to monitor follicle development before the insemination is timed.

## Some male-factor fertility problems

Semen analysis looks at factors such as sperm concentration, movement and morphology.

In selected cases of mild male-factor infertility, preparing the semen sample and placing the more motile sperm directly into the uterus may be considered.

That does not mean IUI is appropriate for every abnormal semen report. When sperm abnormalities are more significant, IVF with ICSI may be discussed instead.

## Certain cervical factors

In some situations, sperm may have difficulty passing through the cervix.

Because IUI places prepared sperm inside the uterus, it can bypass the cervical passage.

Whether this is clinically useful depends on the wider fertility assessment.

### When may IUI not be the right treatment?

IUI has clear limitations.

It may not be suitable when there is no practical route for sperm to reach the egg or when another treatment is more appropriate.

Examples include:
- Blockage of both fallopian tubes
- Severe male-factor infertility
- Some advanced pelvic or reproductive conditions
- Certain situations involving reduced ovarian reserve or advancing reproductive age
- Previous treatment history suggesting that IVF may be more appropriate
- Other medical factors identified during the fertility assessment

The presence of one of these factors does not mean the same treatment is required for everyone. Fertility treatment is individualised.

### What tests are done before IUI?

The preparation for IUI is often more important than the insemination itself.

Before starting treatment, the fertility specialist needs to understand what may be preventing pregnancy and whether IUI has a reasonable chance of helping.

## Ovulation assessment

Your doctor may ask about the pattern of your menstrual cycles and look for evidence of ovulation.

Hormone tests and ultrasound may be used when needed.

If periods are very irregular, identifying the cause of irregular ovulation becomes particularly important.

## Follicular study

A follicular study involves ultrasound scans performed during the menstrual cycle to follow the growth of ovarian follicles.

A follicle contains an egg. As it grows, ultrasound can help the doctor assess whether it is developing appropriately and estimate when ovulation is likely to occur.

This information can be used to plan the timing of IUI.

## Fallopian-tube assessment

At least one fallopian tube generally needs to be open for IUI to have a route through which sperm and egg can meet.

A doctor may recommend a test such as an HSG or another assessment of tubal patency depending on the patient's history.

## Semen analysis

The male partner's semen analysis is an important part of fertility assessment.

It provides information about sperm concentration, motility and morphology.

One abnormal semen report does not necessarily tell the whole story. Results can vary, and the doctor considers the overall pattern and clinical history when deciding whether IUI is appropriate.

Fertility evaluation should involve both partners. Infertility is not automatically a female problem.

### What happens during an IUI cycle?

There is no single IUI protocol that is used for every patient.

Some cycles use natural ovulation. Others involve medication and ultrasound monitoring.

The broad process is usually similar.

## 1. Fertility consultation

The doctor reviews the couple's history and existing test results.

This may include menstrual history, previous pregnancies, duration of trying to conceive, previous fertility treatment, ultrasound findings, ovarian reserve testing, semen analysis and assessment of the fallopian tubes.

The aim is to answer a basic question:

Is IUI a sensible treatment for this particular couple?

## 2. Monitoring follicle development

If treatment involves ovarian stimulation, medication may be prescribed to encourage follicle development.

Ultrasound monitoring helps the doctor see how the ovaries are responding.

The dose and timing of fertility medicines should always be determined by the treating doctor. They should not be changed independently.

## 3. Determining when ovulation will occur

Timing matters in IUI.

Depending on the treatment protocol, the doctor may monitor the natural LH surge or use an ovulation-triggering medicine.

The insemination is then planned around the expected time of ovulation.

This is why there is no universal "day 14" rule for IUI. The timing depends on how the individual cycle is developing.

## 4. Semen collection

A semen sample is usually collected on the day of the procedure.

The laboratory then processes the sample.

## 5. Sperm preparation

Semen contains much more than sperm. During processing, the laboratory separates the sperm from seminal fluid and concentrates a selected fraction of motile sperm.

This process is often called sperm washing.

The prepared sample is then used for insemination.

## 6. The insemination

The prepared sperm is placed in a small syringe connected to a thin catheter.

The catheter is gently passed through the cervix and into the uterus.

The sperm is then introduced into the uterine cavity.

The procedure usually takes only a short time.

## 7. After the procedure

Most people can return to their usual activities unless their doctor advises otherwise.

There is generally no reason to assume that strict bed rest is required after an uncomplicated IUI.

The difficult part for many patients comes next: waiting for the pregnancy test.

### Does IUI Hurt?

Most people tolerate IUI well.

You may feel some pressure when the catheter is inserted, or mild cramping afterward. A small amount of spotting can also occur.

Some women feel almost nothing.

There is no need to expect significant pain from a routine IUI procedure.

However, severe or persistent pain is different. If pain becomes intense, particularly when accompanied by heavy bleeding or fever, contact your fertility team.

### When is IUI done?

IUI is timed around ovulation.

It is not simply scheduled according to a particular calendar day.

In a monitored cycle, the doctor follows follicle growth with ultrasound. Depending on the protocol, ovulation may be detected naturally or triggered medically.

The insemination is then scheduled around the expected release of the egg.

Getting the timing right matters because an egg remains available for fertilisation for a relatively short period after ovulation.

This is also why follicular monitoring can be useful in IUI treatment.

### What happens after IUI?

Once the sperm has been placed in the uterus, the rest of the process is biological.

Sperm must reach the egg. Fertilisation has to occur. The resulting embryo then needs to develop and implant in the uterine lining.

So, an IUI procedure itself does not tell you whether pregnancy has occurred.

You may notice symptoms such as:
- Mild cramps
- Light spotting
- Breast tenderness
- Bloating
- Changes related to fertility medicines
- No symptoms at all

None of these symptoms can reliably confirm pregnancy.

Some of the symptoms associated with early pregnancy overlap with normal hormonal changes after ovulation, so trying to interpret every sensation during the waiting period can be misleading.

### When should you take a pregnancy test after IUI?

Your fertility clinic will tell you when to test.

Testing too early can produce an uncertain result. This is especially relevant if an hCG trigger injection was used because the medicine itself can temporarily affect a pregnancy test.

A blood beta-hCG test may be recommended when confirmation is needed.

It is better to follow the testing date provided by the treating team rather than repeatedly testing very early and trying to interpret faint or changing lines.

### What affects the chances of pregnancy with IUI?

There is no single IUI success rate that applies to every patient.

Age is one factor, but it is far from the only one.

The doctor may also consider:

| Factor | Why it matters |
|---|---|
| Age | Egg quality and reproductive potential change with age |
| Ovulation | IUI needs to be coordinated with ovulation |
| Sperm quality | Sperm concentration and movement affect the likelihood of fertilisation |
| Tubal status | At least one functioning open tube is generally needed |
| Ovarian reserve | Provides information about egg supply and helps with treatment planning |
| Diagnosis | The underlying cause of infertility affects whether IUI is likely to help |
| Endometriosis or pelvic disease | These conditions can influence fertility and treatment decisions |
| Previous treatment | Previous response can help guide the next step |
| Follicle response | Excessive follicle development can increase multiple-pregnancy risk |


This is why a doctor should not estimate an individual's outcome from one number, such as AMH or sperm count.

### How many IUI cycles should you try?

This is one of the most common questions patients ask.

There is no fixed number that applies to everyone.

For selected couples with unexplained infertility, clinical guidance has described a limited course of stimulated IUI before considering IVF when pregnancy has not occurred. ASRM's guideline discusses approximately three or four cycles in this context. That recommendation is not a universal rule for every diagnosis or every patient. (ASRM)

The decision to continue IUI or move to another treatment may depend on:
- Age
- Diagnosis
- Ovarian reserve
- Sperm quality
- Tubal status
- Response to stimulation
- Previous pregnancies
- Previous IUI cycles
- How long the couple has been trying
- Whether another treatment is likely to provide a more suitable pathway

For one couple, another IUI cycle may be reasonable. For another, continuing IUI may simply delay a treatment that is more appropriate.

### IUI vs IVF: how are they different?

Patients sometimes think of IUI as a simpler version of IVF. They are actually quite different.

| IUI | IVF |
|---|---|
| Prepared sperm is placed inside the uterus | Eggs are retrieved from the ovaries |
| Fertilisation occurs inside the body | Fertilisation takes place in a laboratory |
| No egg retrieval | Egg retrieval is required |
| Usually less invasive | More involved treatment |
| No embryo is created during the IUI procedure | Embryos are created in the laboratory |
| May be suitable for selected fertility problems | Can be used for a wider range of infertility situations |


Neither treatment should be selected simply because one sounds easier.

For example, severe sperm abnormalities, blocked tubes or certain other fertility problems may make IUI unsuitable.

On the other hand, some couples may have a reasonable opportunity to try IUI before moving to IVF.

The choice needs to be based on the couple's fertility assessment.

### What are the risks of IUI?

IUI itself is a relatively simple procedure, but fertility medicines used alongside IUI can introduce additional risks.

## Multiple pregnancy

If medicines are used to stimulate several follicles, the chance of twins or a higher-order multiple pregnancy can increase.

This is one reason doctors monitor stimulated cycles carefully.

More follicles are not automatically better. The goal is to achieve an appropriate response while keeping treatment as safe as possible.

## Ovarian hyperstimulation syndrome

Ovarian hyperstimulation syndrome, or OHSS, can occur after ovarian stimulation.

Symptoms that need medical attention include:
- Significant abdominal swelling
- Severe abdominal pain
- Breathlessness
- Reduced urine output
- Rapid worsening of bloating or discomfort

Severe symptoms require prompt medical assessment.

## Infection

Infection after IUI is uncommon, but fever or worsening pelvic pain after a procedure should not be ignored.

## Cramping and spotting

Mild cramping or light spotting may occur around the time of insemination.

Heavy bleeding or severe pain requires assessment.

### Can IUI be used for PCOS?

It can be considered in selected women with PCOS.

The main issue is often irregular or absent ovulation. Treatment may therefore begin with ovulation induction and follicular monitoring.

IUI can then be timed around ovulation when other fertility factors are suitable.

Having PCOS does not automatically mean that IVF is necessary.

The doctor also needs to consider age, sperm quality, fallopian tubes, ovarian reserve, previous treatment and how long the couple has been trying to conceive.

### Can you have IUI with low AMH?

A low AMH result does not automatically rule out IUI.

AMH provides information about ovarian reserve. It does not directly tell you whether an individual egg will fertilise or whether pregnancy is impossible.

At the same time, ovarian reserve is relevant when planning fertility treatment, particularly alongside age and ultrasound findings.

A doctor will usually look at the complete picture rather than making a treatment decision from AMH alone.

### Is IUI possible with endometriosis?

Sometimes.

The answer depends on the extent of endometriosis and several other fertility factors.

The doctor may consider:
- Age
- Ovarian reserve
- Fallopian-tube function
- Sperm quality
- Severity and location of endometriosis
- Previous treatment
- Duration of infertility

For some women, IUI may be considered. In other situations, IVF may be discussed instead.

The important point is that endometriosis does not automatically lead to one treatment for every patient.

### Common questions and misconceptions about IUI

## Does IUI guarantee pregnancy?

No. IUI can improve the opportunity for sperm to meet the egg in appropriately selected cases, but it cannot guarantee fertilisation or pregnancy.

## Does fertilisation happen during IUI?

No. The IUI procedure only places prepared sperm into the uterus. If fertilisation occurs, it happens naturally inside the reproductive tract.

## Is IUI the same as IVF?

No. IUI does not involve egg retrieval or laboratory fertilisation. IVF involves retrieving eggs and fertilising them outside the body.

## Does having more follicles improve IUI?

Not necessarily. Multiple mature follicles can increase the chance of multiple pregnancy. Treatment needs to balance potential benefit with safety.

## Is infertility only a woman's problem?

No. Male factors, female factors, a combination of factors or unexplained infertility can all be involved. Both partners may need evaluation.

## Do you need complete bed rest after IUI?

Strict bed rest is generally not necessary after an uncomplicated IUI. Your fertility team may provide specific instructions based on your treatment.

### What should you ask before starting IUI?

A fertility consultation should leave you with a clear understanding of why IUI is being suggested.

You can ask:
- What is the likely reason we have not conceived?
- Are my fallopian tubes open?
- Am I ovulating?
- Do I need medication to stimulate ovulation?
- How will my follicles be monitored?
- What does my partner's semen analysis mean for IUI?
- How will the timing of insemination be decided?
- What happens if too many follicles develop?
- When should we take the pregnancy test?
- How many IUI attempts would make sense in our situation?
- When would you recommend considering IVF?
- Which symptoms after treatment should prompt a call to the clinic?

These questions are particularly useful because IUI should be a planned treatment rather than something done simply because it is less invasive than IVF.

### When should you see a fertility specialist?

Waiting is not always the right approach.

A fertility evaluation is generally recommended after 12 months of regular unprotected intercourse without pregnancy when there are no known risk factors and the woman is under 35.

Earlier assessment may be appropriate when there are known or suspected fertility problems.

Examples include:
- Irregular or absent periods
- PCOS
- Endometriosis
- Known tubal problems
- Previous pelvic surgery
- Previous fertility treatment
- Recurrent pregnancy loss
- Known or suspected male-factor infertility
- Concerns about ovarian reserve
- Increasing maternal age

Women in their mid-to-late 30s and beyond may benefit from discussing fertility sooner rather than waiting for a full year.

The right timing depends on the individual history.

### When should you seek urgent medical attention?

Some symptoms after fertility treatment need prompt assessment.

Contact your fertility team or seek urgent medical care if you develop:
- Severe or increasing abdominal pain
- Marked abdominal swelling
- Difficulty breathing
- Very low urine output
- Heavy vaginal bleeding
- Fever following a procedure
- Fainting or severe dizziness

If you become pregnant, one-sided pelvic pain, shoulder-tip pain, fainting or bleeding can be warning signs of an ectopic pregnancy and require urgent assessment.

Do not wait for your next scheduled fertility appointment if you have severe symptoms.

### Key Takeaways
- IUI stands for intrauterine insemination.
- Prepared sperm is placed directly inside the uterus around ovulation.
- Fertilisation still occurs naturally inside the reproductive tract.
- IUI may be considered for selected cases of unexplained infertility, ovulation problems and some male-factor fertility problems.
- At least one open fallopian tube is generally needed for IUI to have a route to fertilisation.
- Follicular monitoring can help determine the timing of insemination.
- Semen preparation concentrates a selected fraction of motile sperm.
- IUI does not guarantee pregnancy.
- Age, sperm quality, ovulation, ovarian reserve, tubal status and the underlying diagnosis all influence treatment planning.
- Stimulation medicines can increase the risk of multiple pregnancy and, in some cases, OHSS.
- There is no universal number of IUI cycles that suits everyone.
- IVF differs from IUI because IVF involves egg retrieval and laboratory fertilisation.
- Both partners should be assessed when investigating infertility.

### Final Thoughts

IUI is a relatively simple fertility procedure, but deciding whether it is the right treatment is not quite as simple.

The useful question is not just, "Can we do IUI?" It is, "Does IUI make sense for our fertility situation?"

That answer comes from looking at the couple as a whole: ovulation, fallopian tubes, sperm health, ovarian reserve, age, previous treatment and the reason pregnancy has not occurred.

For couples considering IUI treatment in Bangalore, a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur can help clarify the available treatment options. EVE's stated fertility services include fertility assessment, ovulation induction, follicle monitoring and IUI.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [Ovulation Tracking How to Know Your Fertile Window](/blog/ovulation-tracking-how-to-know-fertile-window/)
- [IUI vs IVF: Which Fertility Treatment Is Considered When?](/blog/iui-vs-ivf-which-fertility-treatment/)
- [How Many IUI Cycles Should You Try Before IVF?](/blog/how-many-iui-cycles-before-ivf/)
- [What to Do After IUI: Precautions, Symptoms and Pregnancy Test Timing](/blog/what-to-do-after-iui-precautions-symptoms-test-timing/)
- [IUI Success Factors: Age, Ovulation and Sperm Quality](/blog/iui-success-factors/)

### FAQs

1. **What is IUI treatment and how does it work?**
   IUI treatment involves placing specially prepared sperm directly into the uterus around the time of ovulation. The procedure does not involve laboratory fertilisation. After insemination, sperm still needs to reach and fertilise an egg naturally. IUI may be considered when the fertility assessment suggests that this approach has a reasonable chance of helping.
2. **Does IUI hurt?**
   IUI is usually a brief procedure. Some women experience mild cramping, pressure or light spotting when the catheter passes through the cervix. Others experience very little discomfort. Severe or persistent pain is not expected after a routine procedure and should be discussed with the treating fertility team.
3. **How soon after IUI can you take a pregnancy test?**
   The appropriate testing date depends on when ovulation occurred and whether an hCG trigger was used. Testing very early can be misleading because an hCG trigger may temporarily affect the result. Your fertility clinic will usually provide a specific date for pregnancy testing, and a blood beta-hCG test may be used when confirmation is needed.
4. **How many IUI cycles are usually needed?**
   There is no fixed number of IUI cycles for every patient. The decision depends on age, diagnosis, ovarian reserve, sperm quality, tubal status and the response to previous treatment. For selected couples with unexplained infertility, a limited course of stimulated IUI may be considered before IVF, but treatment should be individualised.
5. **Can women with PCOS have IUI?**
   Yes, IUI can be considered for selected women with PCOS. Since PCOS can cause irregular or absent ovulation, treatment may first focus on inducing or supporting ovulation and monitoring follicle development. Whether IUI is appropriate also depends on sperm quality, fallopian-tube status, age and other fertility factors.
6. **Is IUI better than IVF?**
   IUI and IVF serve different purposes. IUI places prepared sperm inside the uterus, while IVF involves retrieving eggs and fertilising them in a laboratory. IUI may be appropriate for some couples, while IVF may be more suitable when there are factors such as significant sperm problems, blocked tubes or other fertility concerns.
7. **Where can I get IUI treatment in Bangalore?**
   EVE Women and Fertility Clinic in Gunjur, Bangalore provides fertility assessment, ovulation induction, follicle monitoring and IUI. A consultation with Dr. Swati Shree can help determine whether IUI fits your fertility history and what investigations may be needed before treatment.

### Sources and further reading

- [NHS: Intrauterine insemination](https://www.nhs.uk/conditions/intrauterine-insemination-iui/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 35 · Ovulation Tracking How to Know Your Fertile Window

```yaml
title: "Ovulation Tracking How to Know Your Fertile Window"
description: "Timing intercourse around ovulation raises your chance of pregnancy. Learn how to track ovulation using cycle dates, symptoms, kits and ultrasound."
url: /blog/ovulation-tracking-how-to-know-fertile-window/
lastReviewed: "2026-10-12"
category: "IUI (Intrauterine Insemination)"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-12"
dateModified: "2026-10-12"
badge: follicular-monitoring
readingTime: 4
cluster: "IUI (Intrauterine Insemination)"
pillar: false
keywords: []
about: {type: MedicalTherapy, name: "Ovulation induction"}
related: [/treatments/iui/, /services/follicular-monitoring/]
posts: [/blog/pcos-ovulation-irregular-periods-pregnancy/, /blog/how-long-try-conceive-before-fertility-specialist/, /blog/thyroid-problems-and-fertility/, /blog/female-infertility-tests-amh-ultrasound-hsg/, /blog/iui-success-factors/]
```

H1: Ovulation Tracking How to Know Your Fertile Window

> **Quick answer:** You can estimate ovulation by tracking your cycle, noticing cervical mucus and body signs, using urine ovulation predictor kits or having a follicular monitoring ultrasound. Intercourse every one to two days during the fertile window gives the best chance of conception. Irregular cycles make tracking harder and may need medical evaluation.

Ovulation is the release of an egg from the ovary, usually once each menstrual cycle. The egg survives for about 12 to 24 hours, while sperm can survive for up to several days in the female reproductive tract. The fertile window is the roughly six days that end on the day of ovulation.

This article is part of our [IUI treatment](/blog/iui-treatment-intrauterine-insemination/) guide.

### When does ovulation happen?

In a typical 28-day cycle, ovulation occurs around day 14, but cycle lengths and ovulation timing vary. Ovulation usually happens about 12 to 16 days before the next period. In women with irregular cycles, ovulation may be unpredictable or absent.

### How can you track ovulation?

## Cycle tracking

Record the first day of each period for several months to understand your average cycle length. Apps estimate the fertile window but can be inaccurate for irregular cycles.

## Cervical mucus

Around ovulation, mucus becomes clear, slippery and stretchy, similar to raw egg white. This indicates high fertility.

## Basal body temperature

Your resting temperature rises slightly after ovulation. Tracking shows that ovulation has happened but does not predict it in advance, so it is most useful for understanding your pattern.

## Ovulation predictor kits

These urine tests detect the rise of luteinising hormone that occurs about 24 to 36 hours before ovulation. A positive result signals a time to have intercourse. Women with PCOS may get misleading positives.

## Ultrasound follicular monitoring

A doctor tracks follicle growth by ultrasound and may time ovulation precisely. It is useful for irregular cycles, ovulation induction and fertility treatment.

## Other signs

Some women notice mild one-sided pelvic pain, increased libido, breast tenderness or light spotting.

### How often should you have intercourse?

Having intercourse every one to two days during the fertile window, starting a few days before the expected ovulation, is generally recommended. You do not need to time intercourse perfectly or restrict it to a single day.

### What if your cycles are irregular?

Irregular cycles may signal conditions such as PCOS, thyroid disorders or high prolactin. If your cycles are very irregular, absent or you have been trying for a year without success, see a fertility specialist. If you are over 35, seeking advice after six months is recommended.

### What mistakes should you avoid?

Do not rely only on apps, do not stress over daily tracking, avoid lubricants that may harm sperm unless fertility-friendly and avoid unnecessary restrictions. Stress and obsession can affect wellbeing.

### Key Takeaways
- The fertile window lasts about six days.
- Cycle tracking, mucus, kits and ultrasound help estimate ovulation.
- Intercourse every one to two days in the window is ideal.
- Irregular cycles need medical review.
- Over-tracking can create stress.

### Final Thoughts

Understanding your cycle puts you in control, but you do not need to track every detail. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru offers ovulation monitoring and fertility guidance.

### FAQs

1. **When is the best time to get pregnant in a cycle?**
         The best chance of pregnancy is in the fertile window, the few days leading up to and including ovulation. Intercourse every one to two days in this window is recommended. The five days before ovulation and the day of it, because sperm survive several days but the egg lives only about a day. Regular intercourse every two to three days covers it without pressure.
2. **How accurate are ovulation kits?**
         Ovulation kits detect the LH surge and are fairly reliable for most women, but results can be confusing in conditions like PCOS or when taking certain medicines. Ultrasound monitoring is more precise. Good at detecting the LH surge that precedes ovulation by about a day, but they can mislead in PCOS where LH runs high anyway. They confirm a surge, not that an egg was actually released.
3. **Can I get pregnant if my cycle is irregular?**
         Yes, but ovulation timing is less predictable, and irregular cycles may signal underlying issues. See a doctor if your cycles are very irregular or you have been trying for a year. Yes, though the fertile window is harder to predict, so signs like cervical mucus or follicular scans help more than calendar counting. Investigating why cycles are irregular often reveals a fixable cause.
4. **What is follicular monitoring?**
         Follicular monitoring uses serial ultrasounds to watch the growth of the egg-containing follicle and check when it is ready to release the egg. It helps time intercourse or treatments like IUI. A series of transvaginal scans across one cycle that watch the follicle grow and confirm it releases an egg. It tells you the actual fertile days and is used to time intercourse or IUI.
5. **Does basal body temperature predict ovulation?**
         Temperature rises after ovulation, so it confirms ovulation in retrospect rather than predicting it. It is useful for seeing your pattern over several cycles. It confirms ovulation only after it has happened, since temperature rises once progesterone appears. Useful as a record over months, but not for timing this cycle's fertile days on its own.
### Sources and further reading

- [NHS: Intrauterine insemination](https://www.nhs.uk/conditions/intrauterine-insemination-iui/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 36 · IUI vs IVF

```yaml
title: "IUI vs IVF: Which Fertility Treatment Is Considered When?"
description: "IUI places prepared sperm in the uterus, while IVF fertilises eggs in a lab. Compare how they work, who suits each, intensity, costs and when doctors."
url: /blog/iui-vs-ivf-which-fertility-treatment/
lastReviewed: "2026-10-12"
category: "IUI (Intrauterine Insemination)"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-12"
dateModified: "2026-10-12"
badge: fertility-evaluation
readingTime: 5
cluster: "IUI (Intrauterine Insemination)"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Intrauterine insemination", alternateName: ["IUI"]}
related: [/treatments/iui/, /services/follicular-monitoring/]
posts: [/blog/iui-treatment-intrauterine-insemination/, /blog/how-many-iui-cycles-before-ivf/, /blog/what-to-do-after-iui-precautions-symptoms-test-timing/, /blog/when-ivf-recommended-situations/, /blog/ovulation-tracking-how-to-know-fertile-window/]
```

H1: IUI vs IVF: Which Fertility Treatment Is Considered When?

> **Quick answer:** IUI places washed, concentrated sperm directly into the uterus around ovulation, often with mild ovulation medicines, and fertilisation happens naturally inside the body. IVF stimulates the ovaries to produce several eggs, which are collected and fertilised in a laboratory before an embryo is transferred to the uterus. IUI is simpler and less intensive, while IVF is more effective per cycle and suits more complex fertility problems.

IUI (intrauterine insemination) and IVF (in vitro fertilisation) are two of the most common fertility treatments. They differ in how they work, how intensive they are and who they suit. Understanding the differences helps couples discuss the right path with their specialist.

This article is part of our [IUI treatment](/blog/iui-treatment-intrauterine-insemination/) guide.

### How does IUI work?

1. Ovulation is monitored, often with mild medicines to stimulate one or two follicles.

2. An injection may be used to trigger ovulation.

3. The partner's or donor's sperm is washed and concentrated.

4. Sperm is placed into the uterus through a thin catheter.

5. A pregnancy test follows about two weeks later.

### How does IVF work?

1. The ovaries are stimulated with injections to grow several follicles.

2. Eggs are collected in a short procedure under sedation.

3. Eggs are fertilised with sperm in the lab, sometimes using ICSI.

4. Embryos develop in the lab for several days.

5. An embryo is transferred to the uterus, and extra embryos may be frozen.

6. A pregnancy test follows.

### How do they compare?

| Feature | IUI | IVF |
|---|---|---|
| Where fertilisation happens | Inside the body | In the laboratory |
| Medicines | Mild or none | More intensive stimulation |
| Procedures | Simple insemination | Egg collection and embryo transfer |
| Tubes need to be open | Yes | No |
| Success per cycle | Lower | Higher |
| Cost and time | Lower | Higher |

### Who may be suited to IUI?
- Mild male factor infertility
- Unexplained infertility in younger women
- Ovulation problems such as PCOS, with ovulation induction
- Cervical factor or difficulties with intercourse
- Use of donor sperm

At least one fallopian tube must be open.

### Who may be suited to IVF?
- Blocked or damaged fallopian tubes
- Moderate to severe male factor infertility
- Endometriosis affecting fertility
- Low ovarian reserve or older age
- Unexplained infertility after unsuccessful IUI
- Need for embryo genetic testing
- Fertility preservation

### When do doctors move from IUI to IVF?

Many couples try a limited number of IUI cycles first if suitable. Moving to IVF is often considered if IUI cycles are unsuccessful, if the woman is older, if new findings appear or if the couple prefers a more effective option.

### Key Takeaways
- IUI is simpler, IVF is more intensive.
- IUI needs at least one open tube.
- IVF has higher success per cycle.
- Age and diagnosis guide the choice.
- Many couples move to IVF after unsuccessful IUI.

### Final Thoughts

There is no one-size-fits-all fertility treatment. A specialist can match the approach to your diagnosis, age and preferences. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru offers both IUI and IVF with personalised planning.

### FAQs

1. **What is the main difference between IUI and IVF?**
         In IUI, sperm is placed in the uterus and fertilisation happens inside the body. In IVF, eggs are collected and fertilised in a laboratory, and an embryo is transferred to the uterus. The difference also drives everything else: cost, intensity, medicines and who each treatment suits. Your diagnosis and how long you have been trying decide which starting point makes sense for you.
2. **Is IUI or IVF more successful?**
         IVF generally has higher success rates per cycle than IUI. However, IUI may be appropriate for some couples because it is simpler and less intensive. Per cycle IVF gives higher rates, which is why older women or those with tubal or severe sperm issues are advised it earlier. For suitable couples, a few IUI cycles first is a reasonable plan.
3. **Can I have IUI if my tubes are blocked?**
         No. IUI requires at least one open fallopian tube. IVF bypasses the tubes and is usually recommended for blocked tubes. No, at least one tube must be open for the egg and sperm to meet. With both tubes blocked, IVF is the effective route; with one open and healthy tube, IUI may still be tried.
4. **Should I try IUI before IVF?**
         For some couples, such as those with mild male factor or unexplained infertility and younger age, a few IUI cycles may be tried first. Others may be advised to go directly to IVF. If you are younger with mild male factor, ovulation problems or unexplained infertility, a few IUI cycles first is reasonable. Severe tubal or sperm disease points straight to IVF instead.
5. **Is IUI painful?**
   IUI is usually quick and causes only mild discomfort, similar to a Pap smear. Some women have mild cramping afterward.

### Sources and further reading

- [NHS: Intrauterine insemination](https://www.nhs.uk/conditions/intrauterine-insemination-iui/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 37 · How Many IUI Cycles Should You Try Before IVF?

```yaml
title: "How Many IUI Cycles Should You Try Before IVF?"
description: "There is no single number of IUI cycles for everyone. Learn how age, diagnosis and response shape the decision, and when moving to IVF makes sense."
url: /blog/how-many-iui-cycles-before-ivf/
lastReviewed: "2026-10-12"
category: "IUI (Intrauterine Insemination)"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-12"
dateModified: "2026-10-12"
badge: fertility-evaluation
readingTime: 4
cluster: "IUI (Intrauterine Insemination)"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Intrauterine insemination", alternateName: ["IUI"]}
related: [/treatments/iui/, /services/follicular-monitoring/]
posts: [/blog/iui-treatment-intrauterine-insemination/, /blog/iui-vs-ivf-which-fertility-treatment/, /blog/what-to-do-after-iui-precautions-symptoms-test-timing/, /blog/iui-success-factors/, /blog/when-ivf-recommended-situations/]
```

H1: How Many IUI Cycles Should You Try Before IVF?

> **Quick answer:** Many specialists suggest up to about three to four IUI cycles in suitable couples, because most IUI pregnancies happen in the first few attempts. Moving to IVF sooner may be advised for women over about 35 to 38, those with low ovarian reserve, tubal problems, significant male factor or endometriosis, or after unsuccessful IUI cycles.

IUI is often used as an earlier, less intensive fertility treatment. A common question is how many IUI attempts are reasonable before moving to IVF. There is no single number for everyone. The decision depends on age, the cause of infertility, how you respond to treatment and your preferences.

This article is part of our [IUI treatment](/blog/iui-treatment-intrauterine-insemination/) guide.

### Why is there no fixed number?

Each couple's situation is different. A younger woman with unexplained infertility and good ovarian reserve may reasonably try more cycles, while an older woman may benefit from moving to IVF sooner because time affects egg quality.

### Which factors influence the decision?

## Age

Fertility declines with age, especially after 35. Spending too long on less effective treatments can reduce overall chances.

## Cause of infertility

IUI suits mild male factor, unexplained infertility and ovulation problems. It is less suitable for tubal damage, severe male factor or advanced endometriosis.

## Ovarian reserve

Low AMH or antral follicle count may favour moving to IVF earlier.

## Response to treatment

How follicles develop and the quality of the sperm sample after washing are reviewed each cycle.

## Emotional, physical and financial factors

The stress and cost of repeated cycles also matter.

### Why do most IUI pregnancies happen early?

Studies suggest most IUI pregnancies occur within the first three to four cycles. If pregnancy has not happened by then, the chance per additional cycle tends to fall, which is why many couples consider IVF at that point.

### When is IVF recommended directly?
- Blocked or damaged fallopian tubes
- Moderate to severe male factor infertility
- Older age, especially near or over 40
- Low ovarian reserve
- Moderate to severe endometriosis
- Need for genetic testing of embryos

### What should you discuss with your specialist?
- Your age and ovarian reserve
- Results of previous cycles
- Your diagnosis and other factors
- Expected chances with IUI versus IVF
- Costs, time and emotional considerations

### Key Takeaways
- There is no single correct number of IUI cycles.
- Most IUI pregnancies happen in the first few cycles.
- Age and diagnosis guide when to move to IVF.
- Some couples should go straight to IVF.
- Regular review with your specialist is key.

### Final Thoughts

Choosing when to move from IUI to IVF is a personal decision best made with expert guidance. Dr. Swati Shree at Eve Women and Fertility Clinic in Bengaluru helps couples review results and plan the next step.

### FAQs

1. **How many IUI cycles should I try?**
         Many specialists suggest up to about three to four cycles for suitable couples. Older women or those with other fertility factors may move to IVF sooner. Commonly three to four, since most IUI pregnancies happen in the first few cycles. If it has not worked by then, more cycles rarely change the odds and moving to IVF is usually wiser.
2. **Is it worth trying more than four IUI cycles?**
         The chance per cycle tends to fall after the first few attempts. Some couples continue, but many are advised to consider IVF. Discuss with your specialist. Usually not, because success drops sharply after the first three to four attempts. Exceptions exist for specific situations, but in general continuing adds cost and delay without improving the odds much.
3. **Should women over 35 try IUI?**
         IUI may be tried in some women over 35 with suitable conditions, but fewer cycles are often advised before moving to IVF because of age-related fertility decline. A short trial may be reasonable if tests look good, but time matters more after 35. Many specialists suggest fewer IUI cycles, or going to IVF sooner, so the best years are not lost.
4. **Why did my IUI fail?**
         IUI may not work because of egg or sperm factors, timing, unexplained factors or age. It does not always mean something is wrong. Your specialist will review and suggest next steps. A failed cycle usually reflects the monthly chance, not something done wrong. Repeated failures may point to factors IUI cannot overcome, like egg quality or mild sperm issues, and argue for reassessment.
5. **When should we go directly to IVF?**
         IVF is often recommended directly for blocked tubes, significant male factor infertility, older age, low ovarian reserve or severe endometriosis. When both tubes are blocked, sperm counts are very low, egg reserve is poor, the woman is older, or infertility has run for years. In those cases IUI adds little and IVF is the effective route.
### Sources and further reading

- [NHS: Intrauterine insemination](https://www.nhs.uk/conditions/intrauterine-insemination-iui/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 38 · What to Do After IUI

```yaml
title: "What to Do After IUI: Precautions, Symptoms and Pregnancy"
description: "After IUI you can usually return to normal activities. Learn what to do during the two-week wait, which symptoms are common, when to take a pregnancy."
url: /blog/what-to-do-after-iui-precautions-symptoms-test-timing/
lastReviewed: "2026-10-13"
category: "IUI (Intrauterine Insemination)"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-13"
dateModified: "2026-10-13"
badge: early-pregnancy-scan
readingTime: 4
cluster: "IUI (Intrauterine Insemination)"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Intrauterine insemination", alternateName: ["IUI"]}
related: [/treatments/iui/, /services/follicular-monitoring/]
posts: [/blog/iui-vs-ivf-which-fertility-treatment/, /blog/how-many-iui-cycles-before-ivf/, /blog/iui-success-factors/, /blog/embryo-implantation-after-ivf-timeline/, /blog/how-long-try-conceive-before-fertility-specialist/]
```

H1: What to Do After IUI: Precautions, Symptoms and Pregnancy Test Timing

> **Quick answer:** After IUI, rest for a short while if you wish, then resume light daily activities. Take any prescribed progesterone as advised, avoid smoking and alcohol, and do a blood or urine pregnancy test about two weeks after the procedure, on the date your clinic gives you. Mild cramps or spotting can be normal. Severe pain, heavy bleeding, fever, or marked bloating need a call to your doctor.

After intrauterine insemination (IUI), most women can go back to their normal routine almost straight away. The procedure is quick, and strict bed rest is not usually needed. The next two weeks, often called the two-week wait, can feel long, so knowing what is normal and what is not can make it easier.

This article is part of our [IUI treatment](/blog/iui-treatment-intrauterine-insemination/) guide.

### What happens right after the procedure?

IUI takes only a few minutes. A thin catheter places washed sperm into the uterus around the time of ovulation. You may lie down for a short time afterward, and then you can usually go home.

Some women feel mild cramping or notice a little spotting. Both usually settle within a day or two.

### Do you need bed rest after IUI?

No. There is no proof that lying in bed for days improves success. Normal walking and light work are safe. Your doctor may suggest avoiding very heavy lifting or intense exercise for a few days, which is a sensible precaution while you wait.

### What should you do during the two-week wait?
- Take progesterone or other medicines exactly as prescribed
- Eat balanced meals and drink enough water
- Keep up gentle activity such as walking
- Sleep well and make time to relax
- Avoid smoking, alcohol and unprescribed medicines
- Check with your doctor before taking any painkiller or supplement
- Ask your doctor when it is safe to have intercourse again

### Which symptoms are common?

Some women notice:
- Mild cramps
- Light spotting
- Breast tenderness
- Bloating
- Tiredness
- Mood changes

These can happen because of fertility medicines or progesterone. They can also happen whether or not you are pregnant, so they are not a reliable sign of success or failure. Many women who conceive feel nothing at all.

### When should you take a pregnancy test?

Most clinics advise a blood beta-hCG test or a urine test about 14 days after IUI. Testing too early can give a false result. If you had a trigger injection, it contains hCG, which can stay in the body for several days and may cause a false positive on an early home test.

Follow the date your clinic gives you, even if you feel tempted to test sooner.

### What if the test is negative?

A negative result is disappointing, and it is normal to feel sad or anxious. It does not mean you cannot conceive. Many couples need more than one cycle. Your doctor will review the cycle, look at your age and test results, and talk with you about whether to try another IUI or move to another option such as IVF.

### What if the test is positive?

Your doctor will usually repeat the hCG test and plan an early ultrasound a few weeks later to confirm that the pregnancy is in the uterus. You may continue progesterone for some time. Do not stop any medicine unless your doctor says so.

### When should you call your doctor?

Contact your clinic or seek urgent care if you have:
- Heavy bleeding or passing clots
- Severe or one-sided abdominal pain
- Fever or chills
- Foul-smelling discharge
- Marked bloating with rapid weight gain
- Breathlessness
- Passing very little urine
- Dizziness or fainting
- Shoulder tip pain

These can point to infection, ovarian overstimulation or, rarely, an ectopic pregnancy, and they need prompt medical assessment.

### How can you cope with the wait?

The two-week wait is emotionally hard for many people. Gentle routines, time outdoors, and talking with your partner or a trusted friend can help. If worry becomes overwhelming, speak with your doctor or a counsellor.

### Key Takeaways
- Bed rest is not needed after IUI.
- Take prescribed medicines exactly as directed.
- Mild cramps and spotting can be normal.
- Symptoms cannot confirm pregnancy.
- Test about two weeks after IUI on your clinic's date.
- Severe pain, heavy bleeding, fever or marked bloating need urgent attention.

### When to see a doctor

Call your clinic the same day for heavy bleeding, severe or one-sided pain, fever, breathlessness, dizziness or very little urine. Go to emergency care if you feel faint or the pain is severe.

### Final Thoughts

What you do after IUI matters less than people fear. Staying calm, taking your medicines and following your clinic's test date are the most useful steps. Whatever the result, you do not have to go through it alone. For IUI care and support, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru. This article is for general information and does not replace personal medical advice.

### FAQs

1. **Can I go to work after IUI?**
         Yes. Most women return to work the same day or the next. Avoid very heavy lifting or intense exercise for a few days if your doctor advises it. Yes, normal activity including work is fine the same day. Avoid very strenuous exercise, heavy lifting and heat on the abdomen for a couple of days, but there is no need for bed rest.
2. **Is spotting after IUI normal?**
         Light spotting can happen from the catheter or from progesterone. It does not confirm or rule out pregnancy. Tell your clinic about any bleeding, and call urgently if it is heavy or comes with pain. Light spotting for a day or two is common and usually comes from the catheter touching the cervix. Heavy bleeding, severe pain or fever is not typical and deserves a call to the clinic.
3. **When can I have intercourse after IUI?**
         Your doctor will advise. Many clinics say it is safe after a short interval, but follow your own instructions. Intercourse on the same day or the next is usually fine and may even be advised unless your doctor says otherwise. It does not disturb the sperm already placed in the uterus.
4. **How soon can I take a pregnancy test after IUI?**
         Most clinics suggest about 14 days after IUI. Testing earlier may give a false result, especially if you had a trigger injection. Wait about 14 days after the procedure. Testing earlier risks a false negative, or a false positive if a trigger injection was used. A blood test at the clinic is the reliable check.
5. **What symptoms mean I should call the doctor?**
         Heavy bleeding, severe or one-sided pain, fever, marked bloating with rapid weight gain, breathlessness, fainting or very little urine need prompt medical attention. Severe or worsening pelvic pain, fever, heavy bleeding, or marked bloating and vomiting if ovulation medicines were used, since that can signal ovarian hyperstimulation. Mild cramps and spotting are expected.
### Sources and further reading

- [NHS: Intrauterine insemination](https://www.nhs.uk/conditions/intrauterine-insemination-iui/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 39 · IUI Success Factors

```yaml
title: "IUI Success Factors: Age, Ovulation and Sperm Quality"
description: "IUI outcomes depend on age, ovulation, open tubes, sperm quality and timing. Learn which factors matter most, which you can influence and when to."
url: /blog/iui-success-factors/
lastReviewed: "2026-10-13"
category: "IUI (Intrauterine Insemination)"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-13"
dateModified: "2026-10-13"
badge: male-fertility
readingTime: 4
cluster: "IUI (Intrauterine Insemination)"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Intrauterine insemination", alternateName: ["IUI"]}
related: [/treatments/iui/, /services/follicular-monitoring/]
posts: [/blog/iui-vs-ivf-which-fertility-treatment/, /blog/how-many-iui-cycles-before-ivf/, /blog/what-to-do-after-iui-precautions-symptoms-test-timing/, /blog/ovulation-tracking-how-to-know-fertile-window/, /blog/semen-analysis-explained/]
```

H1: IUI Success Factors: Age, Ovulation and Sperm Quality

> **Quick answer:** IUI tends to work best when the woman is younger, ovulates with or without medicine, has open tubes, and the partner's sperm count and motility after preparation are adequate. Outcomes are generally lower with advancing age, low egg reserve, moderate to severe endometriosis, blocked tubes or significant male factor problems. Your specialist will explain your chances based on your own results.

IUI success depends on several factors working together: the woman's age, whether she ovulates well, whether at least one fallopian tube is open, the quality of the prepared sperm sample and accurate timing. The underlying cause of infertility also matters. No single factor guarantees success, but understanding them helps couples set realistic expectations.

This article is part of our [IUI treatment](/blog/iui-treatment-intrauterine-insemination/) guide.

### What Is IUI?

Intrauterine insemination places a washed and concentrated sperm sample directly into the uterus around the time of ovulation. It shortens the distance sperm must travel and increases the number of sperm reaching the egg. It is less intensive than IVF.

### Which factors affect IUI outcomes?

## Woman's age

Age is the strongest factor because egg quality declines over time. IUI usually has better outcomes in younger women.

## Ovarian reserve

AMH and antral follicle count show how the ovaries may respond to medicines. Low reserve may reduce success.

## Ovulation

Regular ovulation, natural or with medicine, is essential. Follicular monitoring confirms that an egg is ready.

## Fallopian tubes

At least one tube must be open for the egg and sperm to meet. An HSG or similar test checks this before IUI.

## Sperm quality

The number of moving sperm after washing is an important factor. Very low counts or poor motility may reduce IUI success, and IVF with ICSI may be advised.

## Cause of infertility

IUI may suit mild male factor, unexplained infertility, ovulation problems, cervical factors or mild endometriosis. It is less suitable for blocked tubes or severe endometriosis.

## Timing

IUI is planned close to ovulation, often after a trigger injection. Accurate timing improves the chance of the sperm meeting the egg.

## Number of cycles

Most pregnancies from IUI happen in the first few cycles. If several well-timed cycles do not work, your specialist may suggest moving on.

### Which factors can you influence?
- Stop smoking and limit alcohol, for both partners
- Maintain a healthy weight
- Manage thyroid, sugar and other health conditions
- Follow abstinence advice before sample collection
- Attend all monitoring scans on time

### When might IVF be better?
- Blocked or damaged tubes
- Very low sperm count or motility
- Low egg reserve or older age
- Several unsuccessful IUI cycles
- Moderate to severe endometriosis

### Key Takeaways
- Age is the most important IUI success factor.
- At least one open tube is essential.
- Prepared sperm count and motility matter.
- Accurate ovulation timing improves outcomes.
- Your specialist will advise when to move on.

### Final Thoughts

IUI is a gentle first step for many couples, and understanding what shapes its success helps you plan with confidence. Not every couple needs to rush to IVF. For a personalised IUI plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **What is the best age for IUI?**
         IUI generally has better outcomes in younger women because egg quality is higher. Women over 35 can still benefit, but specialists may suggest fewer IUI cycles before considering IVF. Age is always weighed with other test results. Younger women do better, with the strongest results under about 35. Rates decline with age, which is why older women are often advised fewer IUI cycles before moving to IVF.
2. **Does sperm count matter for IUI?**
         Yes. The number of moving sperm after washing is an important factor. If counts are very low, IUI may not be the best option, and IVF with ICSI may be considered instead. Yes. The prepared sample needs enough moving sperm; severe male factor lowers IUI success considerably, and IVF with ICSI is usually advised instead once counts are very poor.
3. **Do both tubes need to be open for IUI?**
         At least one healthy, open tube is needed. If both tubes are blocked, IUI cannot work because the egg and sperm cannot meet. A tubal test is usually done before planning IUI. At least one must be open and healthy, since fertilisation still happens inside the tube. An HSG or HyCoSy confirms this before starting; both blocked tubes mean IVF is the route.
4. **Does ovulation medicine improve IUI outcomes?**
         In many couples, mild ovulation medicines with monitoring can improve IUI outcomes by ensuring an egg is ready at the right time. They are used carefully to avoid too many follicles. For women with ovulation problems or unexplained infertility, mild stimulation improves the odds by ensuring one or two mature follicles. It is monitored to avoid too many follicles and twins.
5. **Can lifestyle changes improve IUI success?**
         Healthy habits support fertility for both partners. Stopping smoking, limiting alcohol, keeping a healthy weight and managing health conditions may help. They do not change age-related factors. To a degree: not smoking, sensible weight, low alcohol and folic acid help the odds. They support the cycle but cannot overcome blocked tubes, severe sperm problems or the effect of age.
6. **Can stress affect IUI results?**
         Stress is common during fertility treatment. Its direct effect on IUI outcomes is uncertain, but managing stress improves well-being. Counselling, gentle exercise and support from your partner can help. Everyday stress does not appear to change outcomes measurably, though it makes the process harder to live through. Practical support and realistic expectations help more than chasing perfect calm.
### Sources and further reading

- [NHS: Intrauterine insemination](https://www.nhs.uk/conditions/intrauterine-insemination-iui/)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)
- [NICE Guideline CG156: Fertility problems](https://www.nice.org.uk/guidance/cg156)

Reviewer box: use global text.

---

## Post 40 · Male Infertility

```yaml
title: "Male Infertility Causes, Tests & Treatment | Bangalore"
description: "Male infertility explained in plain language. Causes, how to read a semen analysis report, and when IUI, IVF or ICSI may be suggested for couples in."
url: /blog/male-infertility-causes-semen-analysis-treatment/
lastReviewed: "2026-10-13"
category: "Male Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-13"
dateModified: "2026-10-13"
badge: male-fertility
readingTime: 17
cluster: "Male Infertility"
pillar: true
keywords: []
about: {type: MedicalTest, name: "Semen analysis"}
related: [/services/male-fertility-evaluation/, /treatments/tesa-pesa/]
posts: [/blog/female-infertility-causes-symptoms-tests-treatment/, /blog/iui-treatment-intrauterine-insemination/, /blog/semen-analysis-explained/, /blog/male-infertility-causes-symptoms/, /blog/icsi-male-infertility/, /blog/iui-vs-ivf-which-fertility-treatment/]
```

H1: Male Infertility: Causes, Semen Analysis, IVF and ICSI

> **Quick answer:** What is male infertility? Male infertility means a man's sperm production, sperm quality or sperm delivery is reducing the couple's chance of conceiving. Common causes include varicocele, hormone imbalance, infections, blocked tubes, genetic conditions, steroid use, smoking and heavy drinking. The first test is a semen analysis. Treatment depends on the cause and may involve lifestyle change, medicines, surgery, IUI, or IVF with ICSI.

Male infertility is when a problem on the man's side lowers a couple's chance of getting pregnant. Usually the issue lies in how many sperm he makes, how well they swim, how they are shaped, or whether they can leave the body at all. A semen analysis is the test that picks it up, and many of the causes can be treated or bypassed with IUI, IVF or ICSI.

In most Indian homes, questions about a delayed pregnancy land on the wife. Fertility doctors see where that leads. A couple spends a year on her scans, blood tests and tablets, while the husband's semen test, which needs one visit to a lab, gets done last or not at all.

Male factors play a part in a large share of couples who struggle to conceive. That is the reason fertility guidelines ask for both partners to be checked at the first visit.

### Why should both partners be tested for infertility?

A pregnancy needs a healthy egg, healthy sperm, open fallopian tubes and a uterus that can hold an embryo. If any one of those is missing, it does not happen. Checking only the woman leaves half the picture blank.

The semen test is also the cheapest and least invasive test in the whole fertility workup. No injections, no scans, no waiting for a particular day of the cycle. Getting it done in the first month can save a couple many months of treatment aimed at the wrong problem.

And it changes how the couple talks about it at home. When both reports are on the table, there is less room for blame and more room for planning.

## How long should a couple try before getting tested?

The usual advice is to see a doctor after 12 months of regular unprotected sex without a pregnancy. If the woman is 35 or older, six months is enough.

Men with certain histories should not wait that long. That includes a history of undescended testes (even if surgery fixed it in childhood), past surgery in the groin or scrotum, mumps after puberty with testicular swelling, chemotherapy or radiation, trouble with erections or ejaculation, low sex drive, or any use of testosterone injections or gym steroids. A previous low sperm count is another reason to come in early.

### How does sperm production work?

A little biology makes the semen report far easier to follow.

Sperm are made inside the testes, in long, tightly coiled tubes. The brain runs the process. A small gland at its base, the pituitary, releases two hormones called FSH (follicle stimulating hormone) and LH (luteinising hormone). LH tells the testes to make testosterone. FSH and testosterone together keep sperm production going.

One sperm takes roughly two to three months to form and mature. Keep that number in mind. A bad fever six weeks ago can still drag down today's report, and a man who quits smoking this week won't see the effect on a test for a couple of months.

Once mature, sperm move through the epididymis, a coiled storage tube behind each testis, and then up the vas deferens. They mix with fluid from the seminal vesicles and the prostate and leave the body as semen.

Trouble anywhere along that route, from the brain's signals to the last stretch of tube, can cause infertility.

### What causes male infertility?

Doctors tend to sort the causes into four groups. The hormone signals may be weak. The testes themselves may not be producing well. A blockage may be trapping sperm inside. Or a sexual or ejaculation problem may be stopping sperm from reaching the egg.

Some men go through every test and no cause turns up. This is called idiopathic, or unexplained, male infertility, and it is fairly common. Treatment can still go ahead.

## Varicocele

A varicocele is a cluster of swollen veins in the scrotum, much like varicose veins in the legs. It is one of the most frequent findings in men tested for infertility. The pooled blood may warm the area around the testes and affect sperm.

Plenty of men have a varicocele and father children without any trouble. Whether it needs surgery depends on its size, the semen results and the couple's overall situation, and that call is made by a urologist.

## Hormonal causes

These are less common, but worth finding because some respond well to treatment.

In hypogonadotropic hypogonadism, the brain does not release enough FSH and LH, and the testes slow down. Hormone injections can often restart production. A raised prolactin level can lower testosterone and sperm output. Thyroid disorders may affect sperm and sexual function too.

Then there is testosterone itself. Men who take testosterone injections, anabolic steroids, or gym products laced with steroids often have no idea this can shut sperm production down, sometimes completely. The body sees plenty of testosterone coming in from outside and the brain stops signalling the testes. Production frequently recovers after stopping, but recovery can take months, and any prescribed hormone should only be stopped on a doctor's advice.

## Problems in the testes

Undescended testes in childhood, even when corrected, can affect sperm production in adult life. So can mumps after puberty (mumps orchitis), a past injury, testicular torsion, and cancer treatment with chemotherapy or radiation. Some genetic conditions also act directly on the testes.

## Genetic causes

In men with a very low count or no sperm at all, a genetic cause is sometimes found. Klinefelter syndrome, where a man carries an extra X chromosome, is one. Small missing segments on the Y chromosome, called Y chromosome microdeletions, are another. Certain changes in the CFTR gene, the gene linked to cystic fibrosis, can leave a man born without the vas deferens.

Genetic tests are not routine. They come up when the sperm count is severely low or zero.

## Blockages

Sometimes the testes make sperm perfectly well and the sperm simply can't get out. Old infections, injury, earlier surgery, a vasectomy, or being born without the vas deferens can all block the way. These men usually have normal hormone levels and normal-sized testes, which is one of the clues doctors look for.

## Infections

Infections of the prostate, epididymis or testes, including some sexually transmitted infections, can damage sperm or leave scarring behind. An active infection needs treating, often in both partners.

## Erection and ejaculation problems

Erectile dysfunction makes regular intercourse difficult. In retrograde ejaculation, semen flows backward into the bladder instead of out through the penis, which can happen with diabetes, after some prostate surgery, or with certain medicines. Premature or delayed ejaculation can also get in the way.

Men often sit on these problems for years before mentioning them. In a fertility clinic they are routine, and most can be treated.

## Lifestyle and environment

Habits rarely cause infertility on their own, but they add up. Smoking cigarettes or chewing tobacco and gutka, heavy drinking, cannabis and other recreational drugs, obesity, and poorly controlled diabetes can all affect sperm. So may frequent heat around the groin from hot tubs, saunas, or long hours with a laptop resting on the lap.

Some jobs bring exposure to pesticides, heavy metals or industrial chemicals. Certain prescription medicines can play a role as well, so it helps to carry a list of everything you take to the appointment.

Age matters for men too, though less sharply than for women. Sperm quality tends to drift downward slowly over the years.

### What are the symptoms of male infertility?

For most men, there are none. Sex is normal, the semen looks normal, he feels fine. The only sign is a pregnancy that isn't happening.

A smaller group does notice something. Erections may be difficult, or sex drive low. The amount of semen may be very small. There may be pain, swelling or a lump in the scrotum. Less body or facial hair, or some breast enlargement, can point toward a hormone problem. Rarely, frequent chest or sinus infections link to a genetic condition that also affects fertility.

Sperm can only be seen under a microscope. How semen looks to the eye says nothing reliable about what is in it.

### What is a semen analysis and how is it done?

A semen analysis is a lab test that measures the volume of semen and checks the number, movement and shape of the sperm inside it. It is the first and most useful test for male fertility.

## How to prepare for a semen test

Avoid ejaculation for 2 to 7 days beforehand. A shorter gap tends to lower the count, and a much longer one leaves more old, sluggish sperm in the sample.

Collect the whole sample in the sterile container the lab gives you, since the first portion usually carries the most sperm. Skip lubricants, oil and saliva, all of which can harm sperm. Regular condoms are a problem too, because many contain substances that kill sperm.

If you are collecting at home, get the container to the lab within about an hour and keep it close to body temperature on the way, for example in an inside pocket. And tell the lab if you had a fever, an illness or started any new medicine in the past three months.

Most labs in Bangalore have a private room for collection. Plenty of men find the whole thing awkward. The staff deal with it all day, every day.

## How to read a semen analysis report

The World Health Organization (WHO) publishes reference values drawn from men whose partners got pregnant within a year. The figures below are the lower reference limits from the WHO laboratory manual published in 2021.

| Parameter | What it measures | WHO lower reference limit |
|---|---|---|
| Semen volume | Total amount of fluid | 1.4 mL |
| Sperm concentration | Sperm per millilitre | 16 million per mL |
| Total sperm count | Sperm in the whole sample | 39 million per ejaculate |
| Total motility | Percentage of sperm moving | 42% |
| Progressive motility | Percentage moving forward | 30% |
| Vitality | Percentage of live sperm | 54% |
| Normal morphology | Percentage with normal shape | 4% |


Read these as reference points rather than a pass mark. A man just under the line can still father a child naturally, and a man comfortably above it isn't guaranteed fertility.

The morphology figure surprises people. Seeing "4% normal forms" sounds terrible, yet it sits inside the reference range. Under strict lab criteria, most sperm in every man look imperfect.

## Common terms you may see on the report

| Term | Meaning in simple words |
|---|---|
| Normozoospermia | All main values within reference range |
| Oligozoospermia | Low sperm count |
| Asthenozoospermia | Low sperm movement |
| Teratozoospermia | Low percentage of normally shaped sperm |
| OAT (oligoasthenoteratozoospermia) | Low count, movement and shape together |
| Azoospermia | No sperm found in the sample |
| Necrozoospermia | High percentage of dead sperm |
| Pus cells (leukocytes) | White blood cells, which may suggest infection |


## Why one test is rarely the final word

Sperm counts swing quite a bit from one sample to the next. A recent fever, a stressful week or a short abstinence gap can all pull numbers down. When the first report comes back abnormal, doctors usually ask for a repeat after a few weeks to three months before deciding anything.

### What other tests may be needed?

An abnormal semen report often leads to a few more investigations. Which ones depends on what the first test showed.

| Test | Why it may be done |
|---|---|
| Physical examination | To check testis size, look for a varicocele and feel for the vas deferens |
| Hormone tests (FSH, LH, testosterone, prolactin, TSH) | To find hormonal causes and judge how well the testes are producing |
| Scrotal ultrasound | To look at the testes and detect a varicocele or lump |
| Post-ejaculation urine test | To check for retrograde ejaculation when semen volume is low |
| Genetic tests (karyotype, Y microdeletion, CFTR) | For very low or zero sperm counts |
| Semen culture | When infection is suspected |
| Sperm DNA fragmentation test | In selected cases, such as repeated miscarriage or unexplained IVF outcomes |


Sperm DNA fragmentation testing is still argued over. It can help in particular situations, but experts have not agreed on using it for everyone. It is fair to ask your doctor whether the result would actually change your plan.

Assessing the male partner often brings in a urologist or andrologist, a doctor who focuses on male reproductive health. At EVE Women and Fertility Clinic, Dr. Swati Shree reviews semen reports as part of the couple's assessment and arranges referral to a male fertility specialist when the findings call for it.

### What does it mean if no sperm is found?

The report says azoospermia. No sperm seen. For most men this is a hard thing to read, and it is natural to assume the worst. In many cases, though, it is not the end of the road to a biological child.

There are two broad types.

In obstructive azoospermia, the testes are making sperm but a blockage keeps them from reaching the semen. Sperm can often be collected straight from the testis or the epididymis through a minor procedure.

In non-obstructive azoospermia, the testes produce very little or nothing. Some men still have small patches of active production. A specialised operation called micro-TESE (microdissection testicular sperm extraction) can find sperm in a portion of these men, though it does not work for everyone.

Hormone levels, testis size and genetic results help the doctor work out which type is more likely and what is worth trying.

### What are the treatment options for male infertility?

The plan depends on the cause, how severe it is, the female partner's age and fertility, and how long the couple has been trying. Doctors generally aim for the least intensive route that has a fair chance of working.

## Lifestyle changes

Quitting cigarettes and tobacco, cutting alcohol right down, and getting weight and blood sugar under control all support sperm production. So does steering clear of recreational drugs, unsupervised steroids and so-called testosterone boosters. Keep heat away from the groin for long stretches.

Food does not need to be fancy. A regular Indian plate with dal, vegetables, fruit, whole grains, millets, some nuts and enough protein covers most of what sperm need. Sleep and regular physical activity help too.

Give any of these changes two to three months before judging them by a new test. That is how long a fresh batch of sperm takes to come through.

## Treating the underlying cause

Some causes have direct treatments. Low FSH and LH can often be corrected with hormone injections under specialist care. High prolactin and thyroid problems may settle with medicines. Infections are treated with the right antibiotics, frequently in both partners.

Retrograde ejaculation sometimes improves with medication, and if it doesn't, sperm can be recovered from urine for use in treatment. Erection and ejaculation problems usually respond well to a mix of medical treatment and counselling.

## Antioxidants and supplements

Many men end up on antioxidant capsules for sperm health, either prescribed or bought over the counter. The research on whether they lead to more pregnancies is mixed, and not strong enough to recommend them for everyone. Talk to your doctor before starting a combination of products on your own.

## Varicocele repair

Surgery may be offered when a varicocele can be felt on examination, the semen report is abnormal and the couple is actively trying. It does not help every man, and any improvement in the semen may take several months to show. If the female partner is older or has fertility issues of her own, the doctor may advise moving straight to assisted reproduction instead of waiting.

## Surgical sperm retrieval

When the semen contains no sperm, they can sometimes be taken directly from the reproductive tract. PESA draws sperm from the epididymis with a fine needle. TESA does the same from the testis. TESE involves a small surgical biopsy, and micro-TESE uses an operating microscope to search for pockets of production. The sperm collected are generally used with ICSI and can often be frozen for later cycles.

## Donor sperm

When no sperm can be retrieved, some couples consider donor sperm. In India this falls under the Assisted Reproductive Technology (Regulation) Act, 2021, and there are eligibility rules. A detailed discussion with the fertility specialist and a counsellor is the right place to start.

### How do IUI, IVF and ICSI help with male infertility?

All three help sperm and egg meet more effectively. The choice comes down mostly to how many good, moving sperm are available and how the female partner's fertility looks.

## IUI (intrauterine insemination)

For IUI, the semen sample is washed and concentrated in the lab so that the best swimmers are separated out. Around the time of ovulation, these are placed directly into the uterus through a thin, soft tube. It takes a few minutes, needs no anaesthesia, and most women describe it as mildly uncomfortable at worst.

IUI suits mild male factor problems, provided the woman's tubes are open and she is ovulating. When counts or motility are very low, it has less to offer. EVE Women and Fertility Clinic offers IUI and follicle monitoring in Gunjur.

## IVF (in vitro fertilisation)

In IVF, the woman takes hormone injections for about a couple of weeks so that several eggs grow at once. The eggs are collected in a short procedure, mixed with prepared sperm in the lab, and the embryos that form are grown for a few days. One is then transferred into the uterus.

IVF may come up for moderate male factor problems, after IUI cycles that did not result in pregnancy, or when the woman also has fertility concerns.

## ICSI (intracytoplasmic sperm injection)

ICSI is done as part of an IVF cycle. Rather than leaving sperm to find and enter the egg, an embryologist picks a single sperm and injects it into each mature egg with a very fine needle under a microscope.

Doctors usually suggest ICSI when the count, motility or shape is severely affected, when sperm have been taken surgically, when eggs failed to fertilise in an earlier IVF cycle, or when only a small amount of frozen sperm is available.

ICSI raises the chance of fertilisation when sperm are the main obstacle. It can't make up for egg quality and it doesn't promise a pregnancy. If a genetic cause has been found in the man, genetic counselling is usually advised before going ahead.

## IUI vs IVF vs ICSI at a glance

| Feature | IUI | IVF | ICSI |
|---|---|---|---|
| Where fertilisation happens | Inside the body | In the lab | In the lab, one sperm injected per egg |
| Sperm needed | A reasonable number of moving sperm | A moderate number | Very few can be enough |
| Steps for the woman | Ovulation monitoring, sometimes tablets or injections | Injections, egg collection, embryo transfer | Same as IVF |
| Usually considered for | Mild male factor | Moderate male factor or problems in both partners | Severe male factor or surgically retrieved sperm |


## Where IVF and ICSI happen for EVE patients

Assessment, counselling, follicle monitoring and IUI take place at EVE. For IVF or ICSI, Dr. Swati Shree evaluates the couple at EVE and then guides treatment; the laboratory work is carried out at associated, registered ART centres.

### What are the risks and limitations of treatment?

No treatment comes with a guarantee. Results lean heavily on the woman's age and ovarian reserve, on sperm quality, and on a long list of smaller factors.

Varicocele surgery may leave the semen report unchanged. In non-obstructive azoospermia, a sperm retrieval operation may not find sperm. With IVF and ICSI, the woman goes through the injections and procedures even when the main problem lies with the man, and couples do well to talk about that openly.

Fertility injections carry a small risk of ovarian hyperstimulation syndrome (OHSS) for the woman. Cost and time weigh on people too, especially when more than one cycle is needed.

### Common myths about male infertility

## Is infertility mostly the woman's problem?

It isn't. Male factors turn up often, sometimes alone and sometimes alongside a female factor. Both partners need testing.

## If a man can have sex and ejaculate, is he fertile?

Not necessarily. Sexual function and sperm production run on separate systems. The majority of men with low counts have completely normal sex lives.

## Does thick semen mean strong sperm?

Thickness or colour tells you nothing dependable about count or quality. Only a lab test can.

## Does one bad report mean he can never be a father?

One report is a snapshot. Results vary between samples, many causes respond to treatment, and assisted reproduction can work around many of the rest.

## Does zero sperm rule out a biological child?

Often it doesn't, particularly when a blockage is to blame. Sperm can frequently be retrieved directly from the testis or epididymis.

## Will testosterone tablets or injections boost fertility?

They usually do the opposite. Testosterone taken from outside tends to suppress sperm production.

## Can herbal mixes fix a low count?

There is no reliable evidence for unregulated herbal products in male infertility. Some have been found to contain hidden steroids, which can make things worse.

### How can couples look after their emotional wellbeing?

An abnormal semen report can shake a man more than he lets on. Embarrassment and guilt are common. So is the feeling that his masculinity is somehow on trial, which is one reason many men put off the test in the first place.

It may help to see the report for what it is, a medical finding about one organ system. It doesn't measure strength, character or how good a husband he is.

Couples who attend appointments together tend to find it easier, and so do those who agree beforehand how much to tell the family. If stress starts eating into sleep, work or the relationship, a fertility counsellor can help. And try to stay off the internet at 2 a.m. Write the questions down and bring them to the doctor.

For parents and in-laws, the most useful thing is patience and no blame in either direction.

### Questions to ask your fertility doctor
- Is my semen report normal, borderline or clearly abnormal?
- Should I repeat the test, and when?
- Do I need hormone tests, an ultrasound or genetic testing?
- Could any of my medicines or supplements be affecting my sperm?
- If I have a varicocele, is it worth treating?
- Does IUI make sense for us, or should we look at IVF or ICSI?
- How does my wife's age and fertility change our options?
- Should I see a urologist or andrologist?
- Can my sperm be frozen before surgery or cancer treatment?

### When should you see a fertility specialist?

Book an evaluation after 12 months of trying without a pregnancy, or after six months if the woman is 35 or older. Come sooner if the man has a known risk factor, such as past testicular surgery, undescended testes, cancer treatment, steroid use, or difficulty with erections or ejaculation.

Men about to start cancer treatment should ask about sperm freezing before the first dose.

Get urgent medical care for any of the following.
- Sudden, severe pain in a testicle, which can be testicular torsion and needs emergency treatment
- A lump or hard area in a testicle that does not hurt
- Fever with a painful, swollen scrotum

For the female partner on ovulation medicines or IVF injections, severe abdominal pain, marked bloating, breathlessness or passing much less urine than usual need urgent attention, as these can be signs of OHSS.

Couples in Gunjur, Varthur, Whitefield, Sarjapur Road and the rest of East Bangalore who want their semen analysis reviewed alongside the woman's tests can start with a combined fertility consultation.

### Key Takeaways
- Male infertility is common, and both partners should be tested from the start.
- Most affected men have no symptoms.
- The semen analysis is the first test, and an abnormal result is usually repeated.
- WHO reference values are guides rather than strict cut-offs.
- Causes include varicocele, hormone problems, blockages, infections, genetic conditions, steroid use and lifestyle factors.
- Testosterone and anabolic steroids can sharply lower sperm production.
- Treatment ranges from lifestyle change and medicines to surgery, IUI, IVF and ICSI.
- Even with no sperm in the semen, sperm can sometimes be retrieved surgically.
- ICSI helps when sperm are very few, but it does not promise a pregnancy.

### Final Thoughts

Male infertility belongs to the couple, and it is a medical condition like any other. A semen test early on can save a great deal of time and worry. Many causes respond to treatment, and where they don't, assisted reproduction often still leaves a workable route to pregnancy.

If you and your partner have been trying for a while and want both sides looked at properly, you can book a fertility consultation with Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore. She will go through your reports with you, explain what the numbers mean, and plan the next step with both of you in the room.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [Male Infertility: Causes, Symptoms and When to Seek Help](/blog/male-infertility-causes-symptoms/)
- [Semen Analysis Explained: Count, Motility and Morphology](/blog/semen-analysis-explained/)
- [Low Sperm Count: Natural and Medical Treatment Options](/blog/low-sperm-count-treatment-options/)
- [ICSI for Male Infertility: When Is It Recommended?](/blog/icsi-male-infertility/)
- [Why Both Partners Need Fertility Evaluation](/blog/why-both-partners-need-fertility-evaluation/)

### FAQs

1. **Can a man with a low sperm count still father a child?**
   Many men with a low count do become fathers, some naturally and some with treatment. A lot depends on how low the count is, how well the sperm move, what is causing the problem and how fertile the female partner is. Milder cases may respond to lifestyle changes, treatment of the cause or IUI. Severe cases often move to IVF with ICSI.
2. **How many days of abstinence are needed before a semen analysis?**
   The WHO recommends 2 to 7 days without ejaculation before giving a sample. Too short a gap tends to lower the count, while a very long gap leaves more old, slow sperm in the sample. Collect the whole ejaculate in the sterile container from the lab, and avoid lubricants, saliva and ordinary condoms, since these can damage sperm.
3. **Does a normal semen analysis mean a man is definitely fertile?**
   A normal report is reassuring but not a guarantee. The test measures count, movement and shape, and it cannot fully judge whether sperm will fertilise an egg. In the other direction, results a little below the reference limits don't rule out a natural pregnancy. Doctors read the report together with the couple's history and the woman's test results.
4. **What is the difference between IVF and ICSI?**
   With standard IVF, eggs and prepared sperm are placed together in a lab dish and the sperm fertilise the eggs on their own. With ICSI, an embryologist injects one sperm directly into each mature egg. ICSI is usually chosen for severe male infertility, for surgically retrieved sperm, or after eggs failed to fertilise in an earlier IVF cycle. The woman's side of treatment is the same for both.
5. **Does every varicocele need surgery?**
   Most men with a varicocele have normal fertility and need nothing done. Surgery may be considered when the varicocele can be felt on examination, the semen report is abnormal and the couple is trying to conceive. The woman's age also matters, because waiting several months for semen to improve after surgery does not suit every couple. A urologist usually makes this call.
6. **Can gym supplements or testosterone injections lower sperm count?**
   They can, and often quite sharply. Testosterone injections, anabolic steroids and some gym products with hidden steroids signal the brain to stop driving sperm production, sometimes down to zero. Production frequently comes back after stopping, though it may take months. Anyone on prescribed testosterone should speak to their doctor before stopping it.
7. **Where can couples get a fertility evaluation in East Bangalore?**
   Couples from Gunjur, Varthur, Whitefield, Sarjapur Road and nearby areas can see Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore. The consultation looks at both partners, including guidance on the semen analysis, and EVE provides follicle monitoring and IUI. When IVF or ICSI is needed, the laboratory procedures are carried out at associated, registered ART centres.
8. **Does a man need a separate doctor for male infertility?**
   The first visit is often with a fertility specialist who sees both partners and reviews the semen report. If it points to something significant, such as no sperm, a varicocele, a hormone problem or a possible blockage, the next step may be a urologist or andrologist. These specialists handle male examinations, surgery and sperm retrieval procedures.

### Sources and further reading

- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ASRM: Infertility topics](https://www.asrm.org/topics/topics-index/infertility/)

Reviewer box: use global text.

---

## Post 41 · Male Infertility

```yaml
title: "Male Infertility: Causes, Symptoms and When to Seek Help"
description: "Male infertility often has no clear symptoms. Learn the common causes, the subtle warning signs and when a man should get a semen analysis while trying."
url: /blog/male-infertility-causes-symptoms/
lastReviewed: "2026-10-14"
category: "Male Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-14"
dateModified: "2026-10-14"
badge: male-fertility
readingTime: 4
cluster: "Male Infertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Male infertility"}
related: [/services/male-fertility-evaluation/, /treatments/tesa-pesa/]
posts: [/blog/semen-analysis-explained/, /blog/icsi-male-infertility/, /blog/male-infertility-causes-semen-analysis-treatment/]
```

H1: Male Infertility: Causes, Symptoms and When to Seek Help

> **Quick answer:** Common causes of male infertility include problems with sperm production, varicocele, hormone imbalance, infections, blockages, genetic factors and lifestyle factors like smoking, heavy alcohol use and obesity. A man should consider a semen analysis if the couple has not conceived after 12 months of trying, or after 6 months if the woman is 35 or older, or sooner if he has known risk factors.

Male infertility means a man's reproductive health is reducing the couple's chance of pregnancy. It is involved in a large share of couples who have difficulty conceiving. Most men have no obvious symptoms, so the problem is usually found through a semen analysis. Testing early saves time and helps choose the right treatment for the couple.

This article is part of our [male infertility](/blog/male-infertility-causes-semen-analysis-treatment/) guide.

### Why does male fertility matter?

Fertility is a shared issue. In many couples, male factors contribute alone or alongside female factors. Testing both partners together avoids unnecessary treatment for the woman and finds the full picture faster.

### What causes male infertility?

## Sperm production problems

Low sperm count, poor movement or abnormal shape can result from many factors, including genetics and past illness.

## Varicocele

Enlarged veins in the scrotum can raise temperature around the testes and affect sperm quality.

## Hormonal imbalance

Problems with testosterone, FSH, LH, prolactin or thyroid can affect sperm production.

## Infections

Past infections such as mumps affecting the testes, or infections of the reproductive tract, can harm sperm production or cause blockage.

## Blockages

Blocked tubes that carry sperm, from birth or after infection or surgery, can stop sperm from reaching the semen.

## Genetic causes

Some chromosome or gene changes can lead to very low or absent sperm.

## Lifestyle and environment

Smoking, heavy alcohol, recreational drugs, obesity, heat exposure, some medicines and anabolic steroids can reduce sperm quality.

### Are there any symptoms?

Most men feel completely normal. Possible signs include:
- Difficulty with erection or ejaculation
- Low sex drive
- Pain, swelling or a lump in the testicles
- Reduced facial or body hair
- Small or firm testes
- Breast enlargement

These signs should be checked by a doctor even if fertility is not the main concern.

### When should a man seek help?
- After 12 months of trying without pregnancy
- After 6 months if the female partner is 35 or older
- Sooner if he has had testicular surgery, injury or infection
- If he has erection or ejaculation problems
- If he has had chemotherapy or radiation
- If he has a known varicocele

### What happens at evaluation?

Evaluation usually starts with a semen analysis and a medical history. Depending on the results, hormone blood tests, a physical examination, scrotal ultrasound or genetic tests may follow.

### Key Takeaways
- Male factors play a role in many couples' infertility.
- Most men have no obvious symptoms.
- Semen analysis is the first and simplest test.
- Lifestyle factors can affect sperm quality.
- Test both partners early.

### Final Thoughts

Male infertility is common and often treatable, but it can only be addressed once it is found. A simple test at the start can change the whole treatment plan. For couple-centred fertility evaluation, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Can a man look healthy and still be infertile?**
         Yes. Most men with low sperm count or poor motility feel completely normal and have normal sexual function. A semen analysis is the only reliable way to check sperm health. Yes, most men with fertility problems have no symptoms at all. Normal health, erections and libido say nothing about sperm count or quality, which is why a semen analysis is the only way to know.
2. **What lifestyle habits reduce male fertility?**
         Smoking, heavy alcohol, recreational drugs, obesity, long exposure to heat and anabolic steroids can all reduce sperm quality. Improving these habits may help, though changes take around three months to show. Smoking, heavy alcohol, anabolic steroids, recreational drugs, obesity and regular heat exposure such as saunas or laptops on the lap. Reversing them helps, though sperm take about three months to renew.
3. **Does age affect male fertility?**
   Yes, but more gradually than in women. Sperm quality and DNA integrity may decline with age, especially after the mid-forties. Age is one factor among many in a couple's evaluation.
4. **Can male infertility be treated?**
   Many causes can be treated or improved, such as hormone problems, varicocele or lifestyle factors. When treatment is not enough, IUI or IVF with ICSI can help couples conceive.
5. **Should men be tested before women start fertility treatment?**
         Ideally, both partners should be tested at the start. A semen analysis is simple and low-cost, and its results can change which treatment is suitable for the couple. Yes, and it should happen at the same time as the woman's evaluation. A semen analysis is quick and comfortable, and skipping it can mean months of treating the woman for a problem that is his.
6. **Can stress affect sperm?**
         Long-term stress may affect hormones and sexual function, which can influence fertility. Managing stress through sleep, exercise and support is helpful, but it is not usually the only cause of male infertility. Severe prolonged stress may affect hormones and indirectly sperm, but it is a smaller factor than smoking, heat or illness. Worrying about stress itself is counterproductive during a workup.
### Sources and further reading

- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ASRM: Infertility topics](https://www.asrm.org/topics/topics-index/infertility/)

Reviewer box: use global text.

---

## Post 42 · Semen Analysis Explained

```yaml
title: "Semen Analysis Explained: Count, Motility and Morphology"
description: "A semen analysis checks sperm count, movement and shape. Learn what each value means, how to prepare for the test and why one abnormal report is not a."
url: /blog/semen-analysis-explained/
lastReviewed: "2026-10-14"
category: "Male Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-14"
dateModified: "2026-10-14"
badge: male-fertility
readingTime: 4
cluster: "Male Infertility"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Semen analysis"}
related: [/services/male-fertility-evaluation/, /treatments/tesa-pesa/]
posts: [/blog/male-infertility-causes-symptoms/, /blog/icsi-male-infertility/, /blog/iui-success-factors/]
```

H1: Semen Analysis Explained: Count, Motility and Morphology

> **Quick answer:** A semen analysis measures semen volume, sperm concentration, total count, motility, morphology and other features such as vitality and signs of infection. Labs compare results with reference values, often based on World Health Organization standards. Values below the reference range suggest reduced fertility potential, not certain infertility.

A semen analysis is a lab test that checks the health of sperm and semen. The main values are sperm count (how many), motility (how well they move) and morphology (their shape). It is the first and most important test of male fertility. Because results can vary from one sample to another, an abnormal report is usually repeated before conclusions are drawn.

This article is part of our [male infertility](/blog/male-infertility-causes-semen-analysis-treatment/) guide.

### How do you prepare?
- Avoid ejaculation for 2 to 7 days before the test, as advised by the lab
- Collect the sample by masturbation into the sterile container provided
- Avoid lubricants, saliva or regular condoms
- Collect the whole sample, as the first part contains many sperm
- Deliver it to the lab within the advised time, usually within an hour, kept at body temperature
- Tell the lab about recent fever or medicines

### What do the main values mean?

## Volume

The amount of semen. Low volume may point to incomplete collection, short abstinence, blockage or retrograde ejaculation.

## Sperm concentration

The number of sperm in each millilitre of semen. Low concentration is called oligozoospermia.

## Total sperm count

The total number of sperm in the whole sample.

## Motility

The percentage of sperm that move. Progressive motility, meaning sperm that swim forward, is especially important. Low motility is called asthenozoospermia.

## Morphology

The percentage of sperm with normal shape. Strict criteria are used, so even fertile men may have a low percentage of normal forms. Low morphology is called teratozoospermia.

## Vitality

The percentage of live sperm, checked when motility is very low.

## pH and liquefaction

Semen should liquefy within a set time and have a normal pH. Abnormal values may suggest infection or blockage.

## White blood cells

Raised white cells may point to infection or inflammation.

### What if there are no sperm?

This is called azoospermia. It may be due to blockage or a production problem. Further tests, including hormone levels, scans and genetic tests, help find the cause. In some cases, sperm can be retrieved surgically for IVF with ICSI.

### Why repeat the test?

Sperm numbers naturally vary between samples. Fever, illness, stress and short or long abstinence can change results. If the first report is abnormal, doctors usually repeat it after a few weeks.

### Key Takeaways
- Semen analysis checks count, motility and morphology.
- Prepare with the advised abstinence period.
- Results are compared with reference values.
- Abnormal results should be repeated.
- Results guide whether IUI, IVF or ICSI may be suitable.

### Final Thoughts

A semen analysis gives couples quick, useful answers early in their fertility evaluation. Understanding the report makes the next steps clearer and less stressful. For help interpreting your results, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **What is a normal sperm count?**
   Labs use reference values, often based on World Health Organization standards, to decide what is within the expected range. Your report will show these values. A count slightly below the range does not always mean infertility.
2. **Can I collect a semen sample at home?**
         Some labs allow home collection if the sample reaches them within the advised time and is kept at body temperature. Others prefer collection on site. Ask the lab for clear instructions before you start. Often yes, if the lab allows it and the sample reaches them within about an hour kept at body temperature. Many clinics prefer on-site collection so conditions and timing are controlled.
3. **What does low motility mean?**
   Low motility means fewer sperm are moving forward well. This can make it harder for sperm to reach the egg. Treatment depends on the cause and severity, and may include IUI or IVF with ICSI.
4. **Is low morphology a serious problem?**
         Morphology is judged by strict criteria, so many fertile men have a low percentage of normal forms. On its own, it may have limited impact. Doctors look at all values together. Not always. Strict scoring makes even normal samples show low normal-shape percentages, and many men with low morphology still father children. It matters most read with count and motility.
5. **How long does a semen analysis take?**
         The test is usually completed on the same day, and results are often available within a day or two. Some advanced tests, such as DNA fragmentation, may take longer. The appointment itself is short, and results usually come within a few days. Two to seven days of abstinence before the test gives a sample that reflects your usual production.
6. **What should I do if my semen analysis is abnormal?**
         Do not panic. Ask your doctor to repeat the test after a few weeks. If it is still abnormal, further tests may be advised. Many problems can be treated or worked around with assisted reproduction. Repeat it after several weeks, since single results fluctuate with illness, fever and abstinence. A persistently abnormal result leads to a physical exam, hormone tests or a urology review.
### Sources and further reading

- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ASRM: Infertility topics](https://www.asrm.org/topics/topics-index/infertility/)

Reviewer box: use global text.

---

## Post 43 · Low Sperm Count

```yaml
title: "Low Sperm Count: Natural and Medical Treatment Options"
description: "Low sperm count can sometimes improve with lifestyle changes or medical treatment, while other cases need IUI or IVF. Learn which causes are reversible."
url: /blog/low-sperm-count-treatment-options/
lastReviewed: "2026-10-14"
category: "Male Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-14"
dateModified: "2026-10-14"
badge: male-fertility
readingTime: 4
cluster: "Male Infertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Male infertility"}
related: [/services/male-fertility-evaluation/, /treatments/tesa-pesa/]
posts: [/blog/semen-analysis-explained/, /blog/male-infertility-causes-symptoms/, /blog/icsi-male-infertility/, /blog/iui-vs-ivf-which-fertility-treatment/]
```

H1: Low Sperm Count: Natural and Medical Treatment Options

> **Quick answer:** Treatment for low sperm count depends on the cause. Lifestyle changes support sperm health over about three months. Medical options include treating hormone imbalance, infections and varicocele. If sperm numbers remain low, IUI may be considered for mild cases and IVF with ICSI for more severe cases. Avoid unproven supplements sold as quick cures.

Low sperm count can sometimes be improved, depending on its cause. Lifestyle changes may help when habits like smoking, alcohol or obesity play a role. Medical treatment can help when there is a hormone problem, infection or varicocele. When the count stays low, assisted reproduction such as IUI or IVF with ICSI can still help couples conceive.

This article is part of our [male infertility](/blog/male-infertility-causes-semen-analysis-treatment/) guide.

### Why does the cause matter?

Low sperm count is a finding, not a diagnosis. Some causes are reversible, some are treatable and some are not. Finding the cause, through history, examination, hormone tests and scans, helps choose the right approach.

### What lifestyle changes may help?

Sperm take about 70 to 90 days to develop, so changes need time to show:
- Stop smoking and avoid tobacco in any form
- Limit alcohol and avoid recreational drugs
- Reach and maintain a healthy weight
- Exercise regularly but avoid extreme training
- Avoid long hot baths, saunas and laptops on the lap
- Wear comfortable, breathable underwear
- Sleep well and manage stress
- Eat a balanced diet with fruits, vegetables, whole grains and nuts
- Avoid anabolic steroids and testosterone supplements unless prescribed

### What medical treatments are available?

## Hormone treatment

If tests show low FSH, LH or other hormone problems, specific treatment may help. Testosterone supplements can lower sperm production, so they are not used to treat infertility.

## Treating infections

Infections in the reproductive tract can be treated with appropriate medicines.

## Varicocele repair

In selected men with a varicocele and abnormal semen, surgery may improve sperm parameters.

## Stopping harmful medicines

Some medicines affect sperm. Your doctor may change them if safe.

## Surgical sperm retrieval

When there are no sperm in the semen but some production in the testes, sperm may be retrieved surgically for IVF with ICSI.

### Do supplements work?

Some antioxidants are studied for sperm health, but results are mixed. Supplements are not a substitute for proper evaluation. Discuss any supplement with your doctor and avoid products promising guaranteed results.

### When is assisted reproduction considered?
- IUI: may help when sperm count or motility is mildly reduced
- IVF: may help when IUI is not suitable or has not worked
- ICSI: a single sperm is injected into each egg, useful for severe low count or poor motility

### Key Takeaways
- Treatment depends on the cause of low sperm count.
- Lifestyle changes take about three months to show.
- Testosterone supplements can lower sperm production.
- Varicocele and hormone problems may be treatable.
- IUI or IVF with ICSI can help when counts stay low.

### Final Thoughts

A low sperm count is not the end of the road. Many men see improvement with the right changes, and assisted options offer real hope when needed. For a couple-focused plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **How long does it take to improve sperm count?**
         Sperm take about 70 to 90 days to develop. Any lifestyle or medical changes need at least three months to show in a semen analysis. Your doctor may repeat the test after this time. About three months minimum, since sperm take roughly 74 days to develop. Lifestyle change or treatment started today shows in a semen report after two to three months, not sooner.
2. **Can diet improve sperm count?**
         A balanced diet supports overall health and may help sperm quality. Fruits, vegetables, whole grains, nuts and lean protein are good choices. Diet alone may not fix a medical cause, so evaluation is still important. A balanced diet with vegetables, protein, zinc-rich foods and less processed fat supports production, but no single food or supplement reverses a genuinely low count. Weight and smoking matter more.
3. **Does testosterone help low sperm count?**
         No. Testosterone supplements usually lower sperm production by signalling the body to stop making its own hormones. They should not be used to treat male infertility unless a specialist advises it for a specific reason. Counterintuitively, no. Outside testosterone suppresses the brain signals that drive sperm production and can drop the count further. Never self-medicate; hormone issues need specific, supervised treatment.
4. **Can a varicocele be the cause of low sperm count?**
         It can be in some men. A varicocele may raise testicular temperature and affect sperm. Repair may help selected men with abnormal semen. Not every varicocele needs treatment. Yes, enlarged scrotal veins are a common, treatable cause. Repair is considered when the varicocele is significant and the semen report is poor, but not every small varicocele needs surgery.
5. **Can a man with very low sperm count become a father?**
         Often yes. IVF with ICSI needs only a small number of healthy sperm. Even when no sperm are in the semen, sperm can sometimes be retrieved surgically. A specialist will explain the options. Very often, yes. ICSI needs only a few viable sperm injected into each egg during IVF, so even severe counts can lead to biological children. The first step is confirming the level on repeat testing.
6. **Are fertility supplements for men effective?**
         Evidence for antioxidants and fertility supplements is mixed. They may help some men but are not a cure. Speak with your doctor before using them and avoid products that promise guaranteed results. Evidence for supplements like zinc, selenium and CoQ10 is modest at best; they may help borderline results but will not fix a genuinely low count. Treat the cause first, and see supplements as optional extras.
### Sources and further reading

- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ASRM: Infertility topics](https://www.asrm.org/topics/topics-index/infertility/)

Reviewer box: use global text.

---

## Post 44 · ICSI for Male Infertility

```yaml
title: "ICSI for Male Infertility: When Is It Recommended?"
description: "ICSI injects one sperm directly into each egg during IVF. Learn how it differs from standard IVF, when it is recommended for male infertility and what it."
url: /blog/icsi-male-infertility/
lastReviewed: "2026-10-15"
category: "Male Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-15"
dateModified: "2026-10-15"
badge: male-fertility
readingTime: 4
cluster: "Male Infertility"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Intracytoplasmic sperm injection", alternateName: ["ICSI"]}
related: [/services/male-fertility-evaluation/, /treatments/tesa-pesa/]
posts: [/blog/semen-analysis-explained/, /blog/male-infertility-causes-symptoms/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/, /blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/]
```

H1: ICSI for Male Infertility: When Is It Recommended?

> **Quick answer:** ICSI may be recommended for severe low sperm count, poor motility or abnormal morphology, azoospermia with surgical sperm retrieval, high sperm DNA damage in some cases, previous failed fertilisation with standard IVF and when using frozen sperm of limited quality. It is part of IVF, not a separate treatment.

ICSI, or intracytoplasmic sperm injection, is a lab technique used during IVF where an embryologist injects a single sperm directly into each mature egg. It is mainly recommended when sperm count, movement or shape are significantly reduced, when sperm are retrieved surgically, or when fertilisation failed in a previous IVF cycle. ICSI helps sperm and egg meet but does not fix every cause of infertility.

This article is part of our [male infertility](/blog/male-infertility-causes-semen-analysis-treatment/) guide.

### How is ICSI different from standard IVF?

## Standard IVF

Eggs and many sperm are placed together in a dish. Sperm must swim to the egg and enter it on their own.

## ICSI

An embryologist selects one sperm and injects it directly into the egg using a very fine needle under a microscope. This bypasses the need for the sperm to swim and penetrate the egg.

All other IVF steps, such as ovarian stimulation, egg collection, embryo culture and transfer, stay the same.

### When is ICSI recommended?

## Severe male factor

Very low sperm count, poor motility or very abnormal shape may prevent normal fertilisation.

## Azoospermia

When there are no sperm in the semen, sperm may be retrieved from the testis or epididymis. These sperm usually need ICSI.

## Previous fertilisation failure

If eggs did not fertilise in a past IVF cycle, ICSI may be used next time.

## Frozen or limited sperm samples

When sperm numbers are limited, such as after cancer treatment, ICSI makes the best use of each sperm.

## Some other situations

ICSI may be considered for testing embryos genetically or when few eggs are available. Your specialist will explain if this applies.

### What ICSI cannot do
- It cannot improve egg quality
- It cannot fully correct genetic problems in sperm
- It does not guarantee fertilisation or pregnancy
- It does not overcome uterine problems

### Is ICSI Safe?

ICSI has been widely used for decades. Most babies born after ICSI are healthy. Some studies suggest a small increase in certain risks, which may relate to the underlying male infertility rather than the technique. Genetic counselling may be offered in selected cases, such as severe male factor with genetic causes.

### How is sperm selected?

Embryologists choose sperm with good movement and shape under high magnification. Some centres use advanced selection methods, though their benefit varies.

### Key Takeaways
- ICSI injects one sperm into each egg during IVF.
- It is mainly used for significant male infertility.
- It is essential when sperm are surgically retrieved.
- It may help after previous fertilisation failure.
- It does not fix egg or uterine problems.

### Final Thoughts

ICSI has given many couples with male factor infertility a real chance of parenthood. The decision to use it should be based on test results and history, not routine use for everyone. For a clear discussion of your options, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Is ICSI the same as IVF?**
         ICSI is a technique used within IVF. The main difference is how fertilisation happens. In standard IVF, sperm fertilise the egg on their own. In ICSI, a single sperm is injected directly into each egg. ICSI is a step inside an IVF cycle, not a different treatment. Standard IVF lets sperm and egg meet in a dish; ICSI injects one chosen sperm directly into each egg, mainly for male factor.
2. **Does ICSI improve pregnancy chances?**
         ICSI improves fertilisation when there is significant male infertility. It does not usually improve pregnancy chances when sperm are normal. Pregnancy still depends on egg quality, embryo development and the uterus. When sperm is the problem, yes, it markedly improves fertilisation. For couples without male factor it adds little, so clinics reserve it for the cases where it genuinely helps.
3. **Is ICSI painful for the woman?**
         The ICSI step happens in the lab, so it causes no extra pain. The woman goes through the same IVF steps, including stimulation and egg collection, which is done under sedation. The process is identical to IVF for her: injections, monitoring and egg collection under sedation. ICSI happens entirely in the lab afterward, so she feels no difference at all.
4. **Can ICSI be used with surgically retrieved sperm?**
         Yes. Sperm collected from the testis or epididymis are usually few and less mobile, so ICSI is the standard way to use them for fertilisation. Yes, and that is one of its main uses. Sperm from TESA or PESA are too few and too immature for standard IVF, so injecting them directly into the egg is how such samples are used.
5. **Are babies born through ICSI healthy?**
         Most babies born through ICSI are healthy. Some small increased risks have been reported, which may be linked to the father's infertility itself. Your doctor can discuss genetic counselling if needed. Large studies show outcomes broadly similar to standard IVF, with a small debated increase in certain anomalies linked more to the infertility itself than the technique. Your doctor will discuss this openly.
6. **Will ICSI fix poor sperm DNA quality?**
         ICSI helps sperm enter the egg, but it does not repair damaged DNA. In some cases, doctors may suggest lifestyle changes, treatment of causes or using testicular sperm. Results vary. Not necessarily. ICSI gets the sperm into the egg but cannot repair DNA fragmentation. High fragmentation may need lifestyle change, treatment of causes, or testicular sperm in selected cases.
### Sources and further reading

- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ASRM: Infertility topics](https://www.asrm.org/topics/topics-index/infertility/)

Reviewer box: use global text.

---

## Post 45 · Why Both Partners Need Fertility Evaluation

```yaml
title: "Why Both Partners Need Fertility Evaluation"
description: "Fertility is a shared issue. Learn why testing both partners together saves time, avoids unnecessary treatment and leads to a clearer, more accurate."
url: /blog/why-both-partners-need-fertility-evaluation/
lastReviewed: "2026-10-15"
category: "Male Infertility"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-15"
dateModified: "2026-10-15"
badge: fertility-evaluation
readingTime: 4
cluster: "Male Infertility"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Male infertility"}
related: [/services/male-fertility-evaluation/, /treatments/tesa-pesa/]
posts: [/blog/male-infertility-causes-symptoms/, /blog/semen-analysis-explained/, /blog/female-infertility-tests-amh-ultrasound-hsg/, /blog/unexplained-infertility-normal-tests/]
```

H1: Why Both Partners Need Fertility Evaluation

> **Quick answer:** A couple-based evaluation looks at ovulation, egg reserve, tubes and the uterus in the woman, and semen quality in the man, at the same time. This gives a complete picture, avoids delays and helps choose the right treatment from the start, whether that is natural conception, IUI or IVF with or without ICSI.

Both partners should be evaluated when a couple has trouble conceiving because infertility can come from the woman, the man, both or neither. Male factors play a role in a large share of couples. Testing only the woman can lead to months of unnecessary treatment while a simple, treatable male problem goes unnoticed.

This article is part of our [male infertility](/blog/male-infertility-causes-semen-analysis-treatment/) guide.

### Why is male testing often delayed?

In many families, fertility problems are assumed to be the woman's responsibility. Men may feel uncomfortable discussing it. As a result, women often undergo several tests and treatments before the man is tested. This wastes time, especially when age is a factor.

### What does couple-based evaluation include?

## For the woman
- Medical and menstrual history
- Pelvic ultrasound
- Hormone tests such as AMH, TSH and prolactin
- Ovulation assessment
- Tubal test such as HSG when indicated

## For the man
- Medical and lifestyle history
- Semen analysis
- Hormone tests and examination if the semen report is abnormal

## For the couple
- How long they have been trying
- Frequency of intercourse
- Any sexual difficulties
- Lifestyle factors for both, such as smoking, alcohol and weight

### How does it change treatment?
- If the semen report is normal and the woman has ovulation problems, treatment focuses on ovulation
- If there is mild male factor, IUI may be suitable
- If there is severe male factor, IVF with ICSI may be advised early
- If both have issues, a combined plan saves time
- If all tests are normal, the couple may have unexplained infertility, with its own options

### Are there emotional benefits?

Yes. Shared evaluation reduces blame and stress on one partner. It encourages couples to see fertility as a shared goal and make decisions together.

### When should a couple get tested?
- After 12 months of trying, if the woman is under 35
- After 6 months, if the woman is 35 or older
- Sooner if either partner has known risk factors, such as irregular periods, past pelvic infection, testicular problems or previous surgery

### Key Takeaways
- Infertility can involve one or both partners.
- Male factors are common and often missed.
- Testing both partners together saves time.
- Results guide the right treatment from the start.
- Shared evaluation reduces stress and blame.

### Final Thoughts

Fertility is a shared goal, and evaluation should be shared too. Testing both partners at the first visit is one of the simplest ways to move forward faster. For couple-centred fertility care, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Why should the man be tested if the woman has irregular periods?**
         Even if the woman has a known issue, the man may also have a sperm problem. Treating only one partner may not work. A semen analysis is simple and ensures nothing is missed. Because two problems can coexist, and hers being found does not make his impossible. Male factors sit in about a third of couples, so skipping his test risks solving only half the problem.
2. **Is male infertility common?**
         Yes. Male factors contribute in many couples who struggle to conceive, either alone or along with female factors. Testing both partners is the standard approach recommended by fertility specialists. Yes, it contributes to roughly a third of cases and is the sole cause in a good share of them. It is common enough that a semen analysis belongs in the first round of every evaluation.
3. **What is the first test for men?**
         A semen analysis is the first test. It checks sperm count, movement and shape. It is quick and comfortable, and gives important information for planning treatment. A semen analysis after two to seven days of abstinence. It reports count, movement and shape in one cheap, quick test, and abnormal results lead to an exam and possibly hormone blood tests.
4. **Can both partners be tested on the same visit?**
         Yes. Many clinics arrange the woman's scan and blood tests and the man's semen analysis around the same visit. This speeds up the process and allows results to be reviewed together. Yes, and that is how it should work. The woman's blood tests and scan can be planned by cycle day while the man gives a semen sample, so most of the workup finishes inside one cycle.
5. **What if both partners have normal tests?**
         This is called unexplained infertility. It does not mean nothing can be done. Options may include timed intercourse, IUI or IVF, depending on age and how long the couple has been trying. That is called unexplained infertility, about a quarter of couples. Options range from a few IUI cycles to IVF depending on age and how long you have been trying, and a specialist will lay them out.
6. **How can couples support each other through testing?**
         Attend appointments together, share information openly and avoid blaming each other. Counselling and support groups can also help couples cope with the emotional side of fertility evaluation. Attend appointments together, share results as a team rather than as blame, and keep the process in perspective. A single semen sample or blood draw is a small step, not a verdict on either person.
### Sources and further reading

- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)
- [NICHD: Infertility and fertility](https://www.nichd.nih.gov/health/topics/infertility)
- [ASRM: Infertility topics](https://www.asrm.org/topics/topics-index/infertility/)

Reviewer box: use global text.

---

## Post 46 · Pregnancy After IVF

```yaml
title: "Pregnancy After IVF: Embryo Transfer & Early Pregnancy"
description: "Pregnancy after IVF explained, including implantation, hCG testing, early symptoms, ultrasound monitoring and warning signs after embryo transfer."
url: /blog/pregnancy-after-ivf/
lastReviewed: "2026-10-15"
category: "Pregnancy After IVF"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-15"
dateModified: "2026-10-15"
badge: fertility-evaluation
readingTime: 16
cluster: "Pregnancy After IVF"
pillar: true
keywords: []
about: {type: MedicalProcedure, name: "Embryo transfer"}
related: [/treatments/ivf/, /services/early-pregnancy-scan/]
posts: [/blog/ivf-treatment-eligibility-process-embryo-transfer-pregnancy/, /blog/recurrent-miscarriage-causes-tests-treatment/, /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/, /blog/embryo-implantation-after-ivf-timeline/, /blog/early-pregnancy-after-ivf-warning-signs/]
```

H1: Pregnancy After IVF: What Happens After Embryo Transfer

> **Quick answer:** After IVF embryo transfer, the embryo may implant in the uterine lining and begin producing hCG. Your fertility clinic will tell you when to have the pregnancy test. If the result is positive, further hCG testing and an early ultrasound may be advised to assess how the pregnancy is developing and confirm that it is located inside the uterus. Heavy bleeding, severe abdominal or pelvic pain, fainting, shoulder-tip pain or severe breathlessness need prompt medical assessment.

### Introduction

Getting a positive pregnancy test after IVF can feel very different from getting one after natural conception. There may be relief, excitement and, at the same time, a lot of questions. What happens next? When does implantation occur? Is cramping normal? When should hCG be checked? When will the pregnancy be visible on ultrasound?

After embryo transfer, the embryo needs to implant in the uterine lining for pregnancy to become established. Once implantation occurs, the developing pregnancy produces human chorionic gonadotropin, known as hCG. A blood pregnancy test can then detect this hormone. Early follow-up may include repeat hCG testing and an ultrasound at the appropriate stage of pregnancy.

The important thing to remember is that symptoms alone cannot tell you whether implantation has occurred or whether an early pregnancy is progressing normally. The timing of tests and scans matters.

After IVF embryo transfer, the embryo may implant in the uterine lining and begin producing hCG. Your fertility clinic will tell you when to have the pregnancy test. If the result is positive, further hCG testing and an early ultrasound may be advised to assess how the pregnancy is developing and confirm that it is located inside the uterus. Heavy bleeding, severe abdominal or pelvic pain, fainting, shoulder-tip pain or severe breathlessness need prompt medical assessment.

### What happens after an IVF embryo transfer?

Embryo transfer is the procedure in which an embryo is placed into the uterus. It is an important part of IVF, but the transfer itself does not confirm pregnancy.

After the transfer, the embryo continues its development. If implantation takes place, the pregnancy begins producing hCG. This hormone eventually becomes detectable in the mother's blood.

There is therefore a period between embryo transfer and the pregnancy test.

That waiting period can be difficult. It is common to notice every small change in the body and wonder whether it means something. Unfortunately, most early symptoms are not specific enough to provide an answer.

Mild cramps, breast tenderness, tiredness or spotting can occur. Some women have no symptoms at all.

None of these findings can reliably confirm implantation.

### What is implantation after IVF?

Implantation is the process in which an embryo attaches to and becomes established within the lining of the uterus.

The embryo transferred during IVF does not immediately become a pregnancy simply because it has been placed in the uterus. It has to continue developing and interact with the uterine lining.

Once implantation occurs, cells associated with the developing pregnancy start producing hCG.

This is the biological reason pregnancy testing cannot provide a useful answer immediately after embryo transfer.

## Can You Feel Implantation?

There is no reliable physical sensation that tells you implantation has occurred.

Some women describe mild cramping or light spotting around this period. Others notice nothing.

Cramping and spotting can also have other causes, including the embryo transfer procedure itself, hormonal medicines or normal changes in the uterine lining.

So, if you do not feel anything, it does not mean implantation has not happened. If you experience cramps or spotting, it does not prove that it has happened.

The pregnancy test is far more useful than trying to interpret these sensations.

### What is hCG after IVF?

Human chorionic gonadotropin, or hCG, is a hormone produced by pregnancy tissue after implantation.

A blood beta-hCG test measures this hormone and is commonly used to confirm an early pregnancy following IVF.

Your doctor may look at more than one result. A repeat test can show how the hCG level is changing over time.

The result needs to be interpreted in context. The date of embryo transfer, the timing of implantation, symptoms and later ultrasound findings all matter.

One hCG number cannot answer every question about an early pregnancy.

### When is the pregnancy test done after IVF?

Your fertility clinic will give you a specific date for pregnancy testing.

Testing too soon after embryo transfer can cause confusion. The embryo may not yet have implanted, or hCG may not have reached a level that can be detected reliably.

There is another reason very early testing can sometimes be misleading. Some IVF protocols use an hCG-containing trigger injection. If a pregnancy test is taken too soon afterward, hCG remaining from the medication can contribute to a positive result.

For this reason, it is better to follow the testing date provided by your fertility team rather than repeatedly testing at home.

### What happens after a positive IVF pregnancy test?

A positive pregnancy test is an important milestone, but early follow-up still matters.

Your doctor may recommend:
- A repeat blood hCG test
- Continued prescribed medicines
- An early pregnancy ultrasound
- Further ultrasound monitoring
- Review of any bleeding, pain or other symptoms

The early ultrasound is particularly important because it helps establish where the pregnancy is located and how it is developing.

Depending on the stage of pregnancy, the scan may show a gestational sac, yolk sac, embryo and, later, cardiac activity.

The exact timing matters. A scan performed too early may not show structures that become visible a few days later.

### What is the early pregnancy timeline after IVF?

The sequence is broadly similar for many IVF pregnancies, although the timing can vary.

| Stage | What may happen |
|---|---|
| Embryo transfer | The embryo is placed in the uterus |
| After transfer | The embryo continues to develop |
| Implantation | The embryo attaches to the uterine lining |
| After implantation | hCG production begins |
| Pregnancy testing | Blood hCG is checked at the time advised by the clinic |
| Repeat hCG | May be recommended to assess the change over time |
| Early ultrasound | Pregnancy location and development are assessed |
| Further monitoring | Follow-up is planned according to the pregnancy and clinical findings |


Your own timeline may not match someone else's exactly. That is normal.

### What symptoms can occur after embryo transfer?

The days after transfer can be confusing because IVF medicines can produce symptoms that feel similar to early pregnancy.

You may notice:
- Mild lower abdominal cramping
- Breast tenderness
- Bloating
- Fatigue
- Mild spotting
- Increased vaginal discharge
- A feeling of pelvic heaviness
- Nausea as pregnancy progresses

Some women experience several of these symptoms. Others feel completely normal.

Both situations can occur in pregnancy.

Progesterone, which may be prescribed during IVF treatment, can itself cause breast tenderness, bloating and tiredness. That makes it particularly difficult to use symptoms as a way of judging whether an embryo has implanted.

## Does Having No Symptoms Mean the IVF Did Not Work?

No.

Early pregnancy symptoms vary considerably. Some women notice changes very early, while others feel little different from usual.

The absence of nausea, breast tenderness or cramping does not mean that pregnancy has not occurred.

Likewise, having several symptoms does not prove that the IVF cycle has resulted in pregnancy.

The scheduled pregnancy test provides much more useful information.

### Is spotting after embryo transfer normal?

Light spotting can occur after embryo transfer, but it should not automatically be labelled as implantation bleeding.

Spotting can have several causes, including changes in the cervix, the transfer procedure, hormonal treatment or early pregnancy.

It is therefore not possible to determine the outcome of an IVF cycle from spotting alone.

If bleeding becomes heavy, continues or occurs with significant pain, contact your fertility team.

Heavy bleeding accompanied by severe pain, fainting or marked weakness requires urgent medical assessment.

### Should IVF medicines be continued after a positive pregnancy test?

Do not stop or change your IVF medicines without speaking to your fertility doctor.

Hormonal support may form part of the treatment plan, depending on how the IVF cycle was managed.

A positive pregnancy test does not automatically mean that medication should be stopped. At the same time, different patients may have different treatment plans.

Continue medicines according to the instructions you were given. If you are uncertain about a medicine, call the clinic rather than making the decision yourself.

### What happens at the first ultrasound after IVF?

An early pregnancy ultrasound provides information that a pregnancy test cannot.

One of the first questions is whether the pregnancy is located inside the uterus.

Depending on the stage of pregnancy, the scan may identify:
- A gestational sac
- A yolk sac
- An embryo
- Cardiac activity when the pregnancy is developed enough for it to be seen

A transvaginal ultrasound may be used in early pregnancy because it can provide detailed views of the uterus and early pregnancy structures.

It is also important not to panic if an early scan does not show everything you expected.

Pregnancy structures become visible at different stages. If the scan is performed very early, your doctor may recommend repeating it after an appropriate interval.

### Why is pregnancy location checked after IVF?

An ectopic pregnancy occurs when a pregnancy develops outside the main cavity of the uterus. The fallopian tube is the most common location.

IVF does not eliminate the possibility of an ectopic pregnancy.

That is one reason early pregnancy follow-up is important. The doctor needs to consider the hCG results, symptoms and ultrasound findings together.

If the first scan does not clearly establish the pregnancy location, additional monitoring may be necessary.

### What are the warning signs of an ectopic pregnancy?

Seek urgent medical attention if you develop:
- Severe or worsening abdominal pain
- One-sided pelvic pain
- Vaginal bleeding accompanied by pain
- Shoulder-tip pain
- Fainting or feeling as though you may faint
- Significant dizziness or weakness

These symptoms do not automatically mean you have an ectopic pregnancy. They can have other causes. However, they can occur with a potentially serious complication and should not be ignored.

Do not wait for your next routine appointment if severe symptoms develop.

### What happens after a frozen embryo transfer?

A frozen embryo transfer, often shortened to FET, uses an embryo that was previously frozen and stored during an earlier IVF cycle.

The uterus may be prepared in different ways depending on the treatment plan. Some cycles follow the woman's natural cycle, while others use hormonal preparation.

Once pregnancy occurs, the basic principles of early monitoring remain similar.

The doctor may monitor hCG and arrange an early ultrasound to assess pregnancy location and development.

The fact that the embryo was frozen does not remove the need for routine early pregnancy assessment.

### Fresh vs frozen embryo transfer in early pregnancy

Fresh and frozen embryo transfers differ in how the treatment cycle is organised, but the goals of early pregnancy monitoring are similar.

| Feature | Fresh embryo transfer | Frozen embryo transfer |
|---|---|---|
| When the embryo is transferred | During the IVF treatment cycle | During a later cycle |
| Embryo status | Embryo is transferred without prior freezing | Previously frozen embryo is thawed before transfer |
| Uterine preparation | Part of the IVF stimulation cycle | May involve a natural, modified or hormone-supported cycle |
| Pregnancy testing | Scheduled after transfer | Scheduled after transfer |
| hCG monitoring | May be used | May be used |
| Early ultrasound | Used when appropriate | Used when appropriate |


Your doctor will decide the follow-up plan according to your individual treatment cycle.

### Can early pregnancy symptoms be different after IVF?

They can.

There is no standard set of symptoms that every IVF pregnancy should produce.

Fatigue, nausea, breast tenderness and increased urination are common early pregnancy symptoms, but they may appear at different times or may be absent altogether.

Hormonal treatment can make this even harder to interpret.

For example, progesterone can cause tiredness and breast tenderness even before a pregnancy test becomes positive.

That is why symptom comparison with another IVF patient is rarely helpful.

### Why does early pregnancy after IVF feel so uncertain?

For many couples, the positive pregnancy test comes after a long period of treatment, appointments and waiting.

That can make the early weeks emotionally intense.

A small cramp may lead to worry. A day without nausea may lead to more worry. Even a normal scan can be followed by questions about the next milestone.

These feelings are understandable.

Try to remember that symptoms are not a daily scorecard for pregnancy health. The pregnancy is assessed through appropriate clinical tests and scans.

If anxiety becomes difficult to manage, tell your doctor. Counselling or other emotional support can be useful during fertility treatment and early pregnancy.

### What should you do after a positive IVF pregnancy test?

Once pregnancy is confirmed, the focus should shift from repeatedly checking for symptoms to following the care plan.

You should:
- Attend scheduled appointments.
- Continue prescribed medicines as instructed.
- Complete blood tests when advised.
- Attend the recommended ultrasound.
- Tell your doctor about bleeding or significant pain.
- Check before taking new medicines or supplements.
- Follow your doctor's advice about pregnancy care.
- Seek urgent attention if serious warning symptoms appear.

You do not need to monitor every sensation in your body.

A calm and structured follow-up plan is more useful.

### Is bed rest necessary after embryo transfer?

Prolonged bed rest is not routinely necessary simply because an embryo has been transferred.

An embryo does not fall out of the uterus because you stand, walk or carry out ordinary daily activities.

Your doctor may give specific instructions based on your medical situation or the procedure you have undergone. Those instructions should be followed.

It is also worth being careful about advice from social media, relatives or other patients. What was recommended to one person may not be necessary for another.

### What should you avoid after embryo transfer?

Your fertility clinic should provide individual instructions.

Do not stop prescribed medicines without medical advice. Before starting a new medicine, supplement or herbal preparation, check with your doctor.

You should also contact your clinic if you develop:
- Significant pelvic or abdominal pain
- Heavy bleeding
- Fever
- Severe vomiting
- Breathlessness
- Marked abdominal swelling
- Any symptom that feels unusual or rapidly worsening

There is no benefit in turning every normal activity into a source of fear.

### When should you contact your IVF doctor?

Contact your fertility team if you are concerned about:
- Vaginal bleeding
- Persistent pelvic or abdominal pain
- Your hCG results
- A medication you are taking
- The timing of your next scan
- New symptoms
- Questions about activity or pregnancy precautions

Some symptoms require urgent care rather than a routine phone call.

## Seek urgent medical care for:
- Severe abdominal or pelvic pain
- One-sided pelvic pain with bleeding
- Shoulder-tip pain accompanied by other concerning symptoms
- Fainting
- Severe dizziness
- Heavy vaginal bleeding
- Severe breathlessness
- Severe abdominal swelling or pain following fertility treatment

These symptoms can have different causes, but some require immediate assessment.

### What if the first ultrasound is too early?

Sometimes an early ultrasound does not show everything that a patient expects.

This does not necessarily mean that the pregnancy is not developing.

The timing of the scan matters because early pregnancy structures become visible progressively.

Your doctor may recommend another ultrasound after a suitable interval. The decision is based on the initial scan, pregnancy dating, hCG results and any symptoms.

The same principle applies to hCG.

One result rarely tells the entire story. Your doctor may look at how the hormone changes over time and combine that information with ultrasound findings.

### What are common mistakes during the waiting period?

The time between embryo transfer and pregnancy testing can lead to a lot of unnecessary worry.

## Taking pregnancy tests too early

An early result may be difficult to interpret, particularly when hCG medication was used during treatment.

## Stopping medication after a positive result

Do not stop prescribed medicines unless your fertility doctor tells you to do so.

## Treating every cramp as a sign of implantation

Cramping is not specific to implantation.

## Assuming no symptoms means no pregnancy

Some early pregnancies cause very few symptoms.

## Comparing yourself with another patient

Another woman's hCG levels, symptoms or ultrasound dates may be completely different from yours.

## Ignoring severe symptoms

A positive pregnancy test does not make severe pain or heavy bleeding normal. Concerning symptoms still need assessment.

### Questions to ask your fertility doctor after a positive IVF test

You can take a short list of questions to your appointment:
- When should I repeat my hCG test?
- Do I need any further blood tests?
- Which medicines should I continue?
- When should I have my first ultrasound?
- What should I do if I notice spotting?
- Which symptoms mean I should seek urgent care?
- When will my care move from fertility monitoring to routine antenatal care?
- Does my fresh or frozen transfer affect my follow-up?
- Who should I contact if I develop symptoms outside clinic hours?
- Are there any specific instructions based on my medical history?

Having these questions written down can be useful. It is easy to forget them when an appointment brings a mixture of excitement and anxiety.

### When should you see a fertility specialist?

A fertility consultation can be useful if you are planning IVF, have questions after embryo transfer, have had a cycle that did not result in pregnancy or need help understanding early pregnancy monitoring.

Your doctor can look at the complete picture, including your IVF protocol, embryo transfer details, medical history, medicines, blood tests and ultrasound findings.

For patients in Gunjur and other parts of Bangalore, Dr. Swati Shree provides fertility evaluation and counselling at EVE Women and Fertility Clinic.

IVF laboratory procedures such as egg retrieval, ICSI, embryo culture, embryo freezing and embryo transfer are carried out at associated, registered ART centres.

### Key Takeaways
- Embryo transfer does not immediately confirm pregnancy.
- Implantation must occur before the developing pregnancy begins producing hCG.
- A blood beta-hCG test is used to confirm early pregnancy after IVF.
- Your clinic will tell you when testing should be done.
- Cramping, spotting, breast tenderness and tiredness can occur after transfer and do not confirm implantation.
- Having no symptoms does not mean that an IVF cycle has not resulted in pregnancy.
- Do not stop prescribed IVF medicines without speaking with your doctor.
- Early ultrasound helps assess pregnancy location and development.
- Ectopic pregnancy can occur after IVF and requires prompt attention when warning symptoms develop.
- Severe pain, heavy bleeding, fainting, shoulder-tip pain or severe breathlessness should be assessed urgently.
- Emotional uncertainty during early pregnancy after IVF is common and deserves appropriate support.

### Final Thoughts

The period after an embryo transfer can feel unusually long. There is often a strong urge to look for signs that something is happening.

But early pregnancy does not always announce itself through symptoms.

Some women have cramps. Some have spotting. Some feel tired. Others feel almost exactly as they did before treatment. These differences do not tell you whether the embryo has implanted or how the pregnancy is developing.

The most useful approach is to follow the testing and scan schedule given by your fertility team, continue prescribed medicines as instructed and contact your doctor if something concerns you.

A positive IVF pregnancy test is an important step. The next stage is careful early-pregnancy monitoring, followed by ongoing antenatal care when the pregnancy is established.

For fertility or early pregnancy guidance in Gunjur, Bangalore, you can consult Dr. Swati Shree at EVE Women and Fertility Clinic.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [Positive Pregnancy Test After IVF: What Happens Next?](/blog/positive-pregnancy-test-after-ivf-next-steps/)
- [Embryo Implantation After IVF: Timeline and Signs](/blog/embryo-implantation-after-ivf-timeline/)
- [Blastocyst Transfer and Embryo Grading Explained](/blog/blastocyst-transfer-embryo-grading-explained/)
- [Frozen Embryo Transfer Process and Preparation](/blog/frozen-embryo-transfer-process-preparation/)
- [Early Pregnancy After IVF: When to Call Your Doctor](/blog/early-pregnancy-after-ivf-warning-signs/)

### FAQs

1. **How soon can I test for pregnancy after IVF embryo transfer?**
   Your fertility clinic will give you a specific date for pregnancy testing. Testing immediately after transfer is too early to provide a useful answer. Waiting until the recommended date allows enough time for implantation and hCG production. Very early testing can also be confusing when an hCG-containing medication was used during treatment.
2. **What are the first signs of pregnancy after IVF?**
   Early pregnancy may cause fatigue, breast tenderness, nausea, increased urination, mild cramping or spotting. However, these symptoms can also be caused by fertility medicines, particularly progesterone. Some women have very few symptoms. A pregnancy test and appropriate follow-up are more reliable than symptoms.
3. **What happens after a positive IVF pregnancy test?**
   After a positive test, your fertility team may repeat the hCG test and arrange an early ultrasound. The scan helps assess the location and development of the pregnancy. Your doctor will also review your medicines and explain the next stage of pregnancy care.
4. **Can you feel implantation after embryo transfer?**
   There is no reliable symptom that confirms implantation. Mild cramping or spotting may occur, but these symptoms can have several causes. Some women experience no noticeable symptoms at all. Implantation is assessed indirectly through subsequent hCG testing and, later, ultrasound findings.
5. **Can an ectopic pregnancy happen after IVF?**
   Yes. IVF does not completely eliminate the possibility of an ectopic pregnancy. This is why early pregnancy monitoring includes attention to the location of the pregnancy. Severe or one-sided pelvic pain, bleeding, shoulder-tip pain, fainting or significant dizziness should receive prompt medical assessment.
6. **Should I continue progesterone after a positive IVF test?**
   Do not stop progesterone or another prescribed IVF medicine without speaking with your fertility doctor. The type and duration of hormonal support depend on the treatment protocol and individual circumstances. If you are unsure whether to continue a medicine, contact your fertility clinic for specific instructions.
7. **Is early pregnancy monitoring different after frozen embryo transfer?**
   The treatment used to prepare the uterus can differ between frozen embryo transfer cycles, but the main principles of early pregnancy monitoring remain similar. hCG testing and an ultrasound may be used to assess pregnancy development and location. Your doctor will determine the appropriate schedule.
8. **Where can I get fertility and early pregnancy guidance in East Bangalore?**
   Dr. Swati Shree provides fertility evaluation and counselling at EVE Women and Fertility Clinic in Gunjur, Bangalore. IVF laboratory procedures are carried out at associated, registered ART centres.

### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)

Reviewer box: use global text.

---

## Post 47 · Positive Pregnancy Test After IVF

```yaml
title: "Positive Pregnancy Test After IVF: What Happens Next?"
description: "A positive test after IVF is the start of close monitoring. Learn about repeat hCG tests, the first scans, medicines and when care moves to a regular."
url: /blog/positive-pregnancy-test-after-ivf-next-steps/
lastReviewed: "2026-10-16"
category: "Pregnancy After IVF"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-16"
dateModified: "2026-10-16"
badge: early-pregnancy-scan
readingTime: 4
cluster: "Pregnancy After IVF"
pillar: false
keywords: []
about: {type: MedicalTherapy, name: "In vitro fertilization", alternateName: ["IVF"]}
related: [/treatments/ivf/, /services/early-pregnancy-scan/]
posts: [/blog/embryo-implantation-after-ivf-timeline/, /blog/early-pregnancy-after-ivf-warning-signs/, /blog/frozen-embryo-transfer-process-preparation/, /blog/blastocyst-transfer-embryo-grading-explained/, /blog/ovarian-hyperstimulation-syndrome-warning-signs/]
```

H1: Positive Pregnancy Test After IVF: What Happens Next?

> **Quick answer:** The usual next steps are a repeat beta-hCG blood test about two days later, a transvaginal ultrasound around 5 to 7 weeks of pregnancy to confirm the location and number of sacs, a scan for heartbeat at about 6 to 8 weeks, and continued progesterone support as advised. Report bleeding, severe pain or dizziness right away.

After a positive pregnancy test following IVF, your clinic will usually repeat the blood hCG test to check that levels are rising, then schedule an early ultrasound to confirm the pregnancy is in the uterus and to look for a heartbeat. You will typically continue hormone support medicines for some weeks before care moves to a regular obstetrician.

This article is part of our [pregnancy after IVF](/blog/pregnancy-after-ivf/) guide.

### Step 1: Repeat hCG test

hCG is the pregnancy hormone. A single positive result is good news, but doctors look for a rising trend. In a healthy early pregnancy, levels usually rise significantly over 48 hours. A slow rise or fall may need closer monitoring.

### Step 2: First ultrasound

Usually done around 5 to 7 weeks of pregnancy, counting from the start of the last period equivalent date your clinic calculates. This scan checks:
- The pregnancy is inside the uterus
- The number of gestational sacs
- The early yolk sac

### Step 3: Heartbeat scan

A heartbeat is usually visible around 6 to 8 weeks. Seeing it is an important reassurance milestone, though early pregnancy still needs care.

### Step 4: Medicines and support

Most IVF pregnancies need hormone support, usually progesterone, for some weeks. In frozen embryo transfers, estrogen may also be used. Never stop these medicines without asking your doctor.

### Step 5: Moving to regular antenatal care

Many fertility clinics continue care until about 8 to 12 weeks. Then care moves to an obstetrician for routine antenatal visits, including the 11 to 14 week scan and screening tests.

### What should you expect to feel?

Some women feel nausea, breast tenderness or tiredness. Others feel nothing at all. Both are normal. Symptoms alone are not a reliable guide to how the pregnancy is going.

### When should you contact your doctor immediately?
- Heavy bleeding or passing clots
- Severe one-sided abdominal pain
- Shoulder tip pain, dizziness or fainting
- Severe bloating, breathlessness or reduced urine, which could signal ovarian hyperstimulation
- Fever or foul-smelling discharge

### How to care for yourself
- Take medicines exactly as prescribed
- Continue folic acid
- Eat balanced meals and stay hydrated
- Rest when tired, but light activity is usually fine
- Avoid smoking, alcohol and unprescribed medicines
- Seek emotional support, as anxiety is common

### Key Takeaways
- A repeat hCG test checks for rising levels.
- The first scan confirms the pregnancy is in the uterus.
- A heartbeat is usually seen around 6 to 8 weeks.
- Continue hormone support as advised.
- Report bleeding, severe pain or dizziness promptly.

### Final Thoughts

A positive test after IVF brings joy and many questions. Clear steps and timely scans make the early weeks less stressful. For guidance through early IVF pregnancy, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Why is hCG repeated after a positive test?**
         One result shows pregnancy, but a repeat test shows whether hCG is rising as expected. A healthy rise is reassuring. A slow rise or fall may need more tests or an early scan. One value confirms pregnancy; the rise between two tests a few days apart shows whether it is developing as expected. A slow or falling level prompts earlier scanning to check the pregnancy is in the right place.
2. **When will I have my first scan after IVF?**
         Most clinics do the first ultrasound around 5 to 7 weeks of pregnancy. It confirms the pregnancy is in the uterus and shows the number of sacs. A heartbeat scan usually follows. Usually around six to seven weeks of pregnancy, when the scan can confirm the sac is inside the uterus and ideally show a heartbeat. Your clinic schedules it once the hCG trend looks right.
3. **Is spotting normal in early IVF pregnancy?**
         Light spotting can happen and does not always mean a problem. Still, inform your clinic about any bleeding. Heavy bleeding, clots or pain need prompt assessment. Light spotting is common, especially with progesterone support and a sensitive cervix, and is often harmless. Heavy bleeding, pain or one-sided pain needs a same-day call, since ectopic risk matters after IVF.
4. **How long do I need progesterone after IVF?**
         It varies by clinic and type of transfer, but many women continue progesterone for several weeks. Your doctor will tell you when it is safe to stop. Do not stop on your own. Commonly until about ten to twelve weeks, when the placenta takes over hormone production. Your clinic gives a clear stopping plan, so do not stop early even if everything feels fine.
5. **Is an IVF pregnancy high risk?**
         Most IVF pregnancies progress like natural pregnancies. Some factors, such as twins, age or underlying conditions, may need closer monitoring. Your obstetrician will plan care based on your health. Not automatically. Most IVF pregnancies progress normally, though early monitoring is closer and some factors like age or twins add risk. After the first trimester it is managed much like any pregnancy.
6. **When can I share the news?**
         This is a personal choice. Many couples wait until after the heartbeat scan or the 12-week scan. Choose the time that feels right for you and your family. Whenever you feel ready, though many couples wait for the first heartbeat scan or the end of the first trimester when miscarriage risk falls. There is no medical rule about timing.
### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)

Reviewer box: use global text.

---

## Post 48 · Embryo Implantation After IVF

```yaml
title: "Embryo Implantation After IVF: Timeline and Signs"
description: "Implantation usually happens within a few days of embryo transfer. Learn the day-by-day timeline, why symptoms are unreliable and when a blood test gives."
url: /blog/embryo-implantation-after-ivf-timeline/
lastReviewed: "2026-10-16"
category: "Pregnancy After IVF"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-16"
dateModified: "2026-10-16"
badge: fertility-evaluation
readingTime: 4
cluster: "Pregnancy After IVF"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Embryo transfer"}
related: [/treatments/ivf/, /services/early-pregnancy-scan/]
posts: [/blog/pregnancy-after-ivf/, /blog/blastocyst-transfer-embryo-grading-explained/, /blog/frozen-embryo-transfer-process-preparation/, /blog/early-pregnancy-after-ivf-warning-signs/, /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/]
```

H1: Embryo Implantation After IVF: Timeline and Signs

> **Quick answer:** After a day 5 blastocyst transfer, the embryo usually hatches and starts to implant within 1 to 3 days, and hCG begins to rise afterward. A blood test about 9 to 12 days after transfer, as advised by your clinic, is the reliable way to know if implantation has led to pregnancy. Cramps, spotting or breast tenderness can be caused by medicines and do not confirm success or failure.

Implantation is when the embryo attaches to and begins to embed in the lining of the uterus. After a blastocyst (day 5) transfer, this usually begins within about 1 to 3 days. After a day 3 transfer, it may take a little longer. Many women feel no symptoms during implantation, and symptoms that do occur are not reliable signs of pregnancy.

This article is part of our [pregnancy after IVF](/blog/pregnancy-after-ivf/) guide.

### What happens after embryo transfer?

## Day 0

The embryo is placed into the uterus.

## Days 1 to 2 (after a blastocyst transfer)

The embryo continues to develop and hatches out of its outer shell.

## Days 2 to 3

The embryo attaches to the uterine lining and begins to embed.

## Days 4 to 5

Implantation progresses. The embryo starts producing hCG.

## Days 6 to 9

hCG levels rise steadily in the blood.

## Days 9 to 12

A blood beta-hCG test can usually detect pregnancy. Your clinic will give you the exact test date.

Timings are slightly longer after a day 3 embryo transfer.

### Are there signs of implantation?

Some women notice:
- Mild cramping
- Light spotting
- Breast tenderness
- Tiredness
- Bloating

However, these symptoms are very common with progesterone and other IVF medicines. They can occur whether or not pregnancy happens. Many women who conceive have no symptoms at all.

### Why are symptoms unreliable?

Progesterone, which is given after transfer, causes many pregnancy-like symptoms. The body's response to the procedure itself can also cause mild cramps. Only a blood test can confirm pregnancy.

### Should you take a home test early?

Testing too early can give false results. A trigger injection used for egg collection contains hCG, which may still be in the blood in some cases. Early tests can also be negative even if implantation is happening. Waiting for the clinic test date avoids confusion and stress.

### What can help during the wait?
- Take all medicines as prescribed
- Continue normal light activity; strict bed rest is not usually needed
- Eat well and stay hydrated
- Avoid heavy lifting and strenuous exercise if advised
- Keep busy with gentle, enjoyable activities
- Lean on your partner, friends or a counsellor

### When to contact your clinic
- Heavy bleeding
- Severe abdominal pain
- Fever
- Severe bloating, breathlessness or reduced urine

### Key Takeaways
- Implantation usually starts within 1 to 3 days after a blastocyst transfer.
- hCG rises after implantation.
- Symptoms are not reliable signs of pregnancy.
- A blood test on the clinic date gives the answer.
- Avoid early home tests to reduce confusion.

### Final Thoughts

The wait after embryo transfer can feel very long. Knowing what is happening inside the body can bring some calm. For guidance and support through this stage, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **How soon does implantation happen after embryo transfer?**
         After a day 5 blastocyst transfer, implantation usually begins within about 1 to 3 days. After a day 3 transfer, it may take a few extra days. hCG then starts rising in the blood. Usually within one to three days after a day-5 transfer, once the embryo hatches and embeds in the lining. The blood test about nine to twelve days later is the reliable way to know it worked.
2. **Is implantation bleeding common after IVF?**
         Some women notice light spotting, but many do not. Spotting can also come from progesterone or the transfer itself. It does not confirm pregnancy. Inform your clinic about any bleeding. Light spotting around the expected period can happen but is not reliable evidence either way, and many successful cycles have none. Only the blood test gives a real answer.
3. **Can I feel the embryo implanting?**
         Most women do not feel anything during implantation. Mild cramps may occur but are usually due to medicines or the uterus settling. Feeling nothing is completely normal. Almost never. Mild cramps or twinges in the two-week wait are common and mean nothing either way, since progesterone causes similar sensations. Symptoms are a poor guide; the test is the answer.
4. **When should I take a pregnancy test after embryo transfer?**
         Most clinics recommend a blood hCG test about 9 to 12 days after transfer. Testing earlier can give false positive or false negative results. Follow your clinic's advice. On the day your clinic advises, usually nine to twelve days after a day-5 transfer. Testing early risks a false negative, or a false positive if a trigger injection is still clearing.
5. **Does bed rest help implantation?**
         Research does not show that strict bed rest improves implantation. Light, normal activity is usually fine. Avoid heavy lifting and intense workouts if your doctor advises it. No. Studies show bed rest does not improve implantation and may even be unhelpful. Gentle normal activity is fine; just avoid heavy lifting, intense workouts and heat on the abdomen for a few days.
6. **Can stress stop implantation?**
         There is no strong evidence that everyday stress prevents implantation. The wait is stressful for most couples. Gentle activities, rest and emotional support can help you feel better during this time. Ordinary stress has not been shown to block implantation, though the two-week wait is genuinely hard. Simple routines, gentle activity and avoiding hour-by-hour symptom checking help more than chasing calm.
### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)

Reviewer box: use global text.

---

## Post 49 · Blastocyst Transfer and Embryo Grading Explained

```yaml
title: "Blastocyst Transfer and Embryo Grading Explained"
description: "Embryo grades and blastocyst transfer can be confusing. Learn how embryos develop, how grading works, what it can and cannot predict and why day 5."
url: /blog/blastocyst-transfer-embryo-grading-explained/
lastReviewed: "2026-10-17"
category: "Pregnancy After IVF"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-17"
dateModified: "2026-10-17"
badge: fertility-evaluation
readingTime: 4
cluster: "Pregnancy After IVF"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Embryo transfer"}
related: [/treatments/ivf/, /services/early-pregnancy-scan/]
posts: [/blog/frozen-embryo-transfer-process-preparation/, /blog/ivf-success-factors-age-egg-quality-sperm-embryos/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/, /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/, /blog/ivf-process-step-by-step-consultation-embryo-transfer/]
```

H1: Blastocyst Transfer and Embryo Grading Explained

> **Quick answer:** A blastocyst is an embryo at about day 5 or 6 with an inner cell mass that becomes the baby and an outer layer, the trophectoderm, that becomes the placenta. Grading assesses expansion, inner cell mass and trophectoderm quality. Higher grades are linked with better implantation chances, but grades are not a guarantee and cannot detect all genetic problems.

In IVF, fertilised eggs grow in the laboratory for several days before transfer. By day 5 or 6 a healthy embryo may reach the blastocyst stage. Embryologists grade embryos to help choose which one to transfer or freeze. Understanding the grades helps you ask better questions without overinterpreting them.

This article is part of our [pregnancy after IVF](/blog/pregnancy-after-ivf/) guide.

### How do embryos develop?

## Day 1

Fertilisation is checked, and the fertilised egg is called a zygote.

## Day 2 to 3

The embryo divides into multiple cells, called the cleavage stage.

## Day 5 to 6

Some embryos form a blastocyst, with a fluid-filled cavity. Not all embryos reach this stage, and that is a natural selection process.

### Why is blastocyst transfer used?

Culturing to day 5 lets the laboratory observe which embryos continue developing, which may help select embryos with better potential. It also matches the timing of natural implantation. However, not every cycle is suitable for extended culture, and some patients with few embryos may be advised to transfer earlier. The decision is individual.

### How are blastocysts graded?

Many labs use a system that gives a number and two letters, such as 4AA.

## Expansion grade

A number from 1 to 6 describes how expanded the blastocyst is, with higher numbers indicating more advanced expansion or hatching.

## Inner cell mass grade

A letter from A to C describes the cluster of cells that forms the baby. A means many tightly packed cells.

## Trophectoderm grade

A letter from A to C describes the outer layer that forms the placenta. A means many cells forming a cohesive layer.

Different clinics use slightly different systems, so ask your embryologist to explain theirs.

### What do grades predict?

Higher-grade embryos generally have a better chance of implanting, but lower-grade embryos can also result in healthy pregnancies. Grading looks at appearance and does not show chromosomes. Patient age, uterine receptivity and other factors strongly influence outcomes. Never judge your chances by a single number.

### What is chromosomal testing?

Preimplantation genetic testing can examine an embryo's chromosomes in selected situations. It is a separate procedure that has benefits and limitations and is not necessary for everyone.

### How many embryos should be transferred?

Many specialists recommend transferring a single good-quality blastocyst to reduce the risk of twins, which carry higher pregnancy risks. Extra embryos can be frozen for later use.

### Questions to ask your embryologist

What grade are my embryos, how does your clinic grade them, how many embryos reached blastocyst stage, which embryo is recommended for transfer and why, and what are my options for freezing the rest?

### Key Takeaways
- Blastocysts are day 5 or 6 embryos.
- Grading assesses expansion, inner cell mass and trophectoderm.
- Higher grades suggest better potential but are not guarantees.
- Grades do not assess chromosomes.
- Single embryo transfer reduces twin risk.

### Final Thoughts

Embryo reports can feel overwhelming, but you can ask your team to explain each step. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru discusses embryo quality and transfer planning in clear language.

### FAQs

1. **What is a blastocyst?**
   A blastocyst is an embryo that has developed for about five to six days and formed a fluid-filled cavity with an inner cell mass and an outer layer. It is the stage at which embryos naturally implant in the womb.
2. **What does embryo grade 4AA mean?**
         The number describes how expanded the blastocyst is, and the letters rate the inner cell mass and trophectoderm, with A being the best. A 4AA blastocyst is a well-expanded, high-quality embryo, though grading does not guarantee success. The number is expansion stage and the letters grade the inner cell mass and trophectoderm, with A best. A 4AA is a well-expanded, high-quality embryo, though grading predicts potential, not a guaranteed outcome.
3. **Can a low-grade embryo result in a healthy baby?**
         Yes. Lower-grade embryos can implant and lead to healthy pregnancies, although the average chance is lower than for higher grades. Grading is only one factor among many. Yes. Grading is a prediction tool, not a verdict, and lower-grade embryos do produce healthy babies. Doctors transfer the best available, but a lower grade does not mean the cycle is lost.
4. **Is day 5 transfer better than day 3 transfer?**
         Day 5 transfer can help select embryos with better developmental potential in some patients, but it is not better for everyone, especially when few embryos are available. Your specialist will recommend the best timing. For most patients, yes, because embryos that reach day 5 have proven stronger development and single blastocyst transfer reduces twins. Day 3 may be chosen when few embryos are growing.
5. **Why do some embryos stop growing before day 5?**
         Embryos may stop developing because of chromosomal or other abnormalities that are common in human embryos. It is a natural selection process and does not usually reflect anything done by the patient. Most arrest because of chromosome errors that prevent further development, which is exactly what the culture period reveals. It is disappointing but means the lab selected the embryos with the best chance.
### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)

Reviewer box: use global text.

---

## Post 50 · Frozen Embryo Transfer Process and Preparation

```yaml
title: "Frozen Embryo Transfer Process and Preparation"
description: "Frozen embryo transfer uses embryos stored from a previous IVF cycle. Learn how the cycle is prepared, what the transfer involves and what to expect."
url: /blog/frozen-embryo-transfer-process-preparation/
lastReviewed: "2026-10-17"
category: "Pregnancy After IVF"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-17"
dateModified: "2026-10-17"
badge: fertility-evaluation
readingTime: 4
cluster: "Pregnancy After IVF"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Frozen embryo transfer", alternateName: ["FET"]}
related: [/treatments/ivf/, /services/early-pregnancy-scan/]
posts: [/blog/ivf-process-step-by-step-consultation-embryo-transfer/, /blog/happens-after-embryo-transfer-symptoms-precautions-pregnancy-test/, /blog/blastocyst-transfer-embryo-grading-explained/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/, /blog/ovarian-hyperstimulation-syndrome-warning-signs/]
```

H1: Frozen Embryo Transfer Process and Preparation

> **Quick answer:** In a frozen embryo transfer cycle, the lining of the womb is prepared with hormones or by tracking your natural cycle, and a thawed embryo is placed in the uterus with a thin catheter. A pregnancy test is done about ten to fourteen days later. Whether FET suits you depends on your embryos, health and treatment plan.

Frozen embryo transfer, or FET, is a fertility treatment in which embryos created in an earlier IVF cycle and stored by freezing are thawed and placed in the womb. It allows the womb to be prepared separately from the egg collection cycle and is increasingly common.

This article is part of our [pregnancy after IVF](/blog/pregnancy-after-ivf/) guide.

### Why is a frozen transfer done?

Reasons include having extra embryos after a fresh IVF cycle, avoiding transfer in a cycle with very high hormone levels or risk of ovarian hyperstimulation, allowing time for genetic testing of embryos, preparing a better uterine lining, and fertility preservation. Many clinics now freeze all embryos in selected situations.

### How is the cycle prepared?

## Natural cycle

The cycle is monitored by ultrasound and blood tests, and the transfer is timed around your own ovulation. It suits women with regular cycles.

## Hormone replacement cycle

Oestrogen is used to thicken the lining, and progesterone is added to prepare it for implantation. This gives flexible scheduling and is suitable for irregular cycles.

## Modified natural or stimulated cycle

Some protocols use mild medicines to support ovulation along with monitoring.

Your doctor chooses the plan based on your cycle and history.

### What happens on transfer day?

The embryo is thawed in the laboratory and assessed. You lie down, a speculum is placed, and under ultrasound guidance a soft catheter places the embryo in the womb. The procedure is quick and most women feel little or no discomfort, similar to a Pap smear. You may rest briefly afterward.

### What happens after the transfer?

You continue hormone support as prescribed. You can usually resume normal activities, avoiding strenuous exercise as advised. A blood pregnancy test is done about ten to fourteen days after transfer. Mild cramping, spotting or bloating can occur but are not reliable signs of success or failure.

### What are the possible risks?

FET carries the usual risks of embryo transfer, such as the possibility of multiple pregnancy if more than one embryo is transferred, and ectopic pregnancy. Hormone medicines can cause side effects such as bloating or breast tenderness. Some studies show differences in pregnancy complications between fresh and frozen cycles, which your doctor can explain.

### How many embryos should be transferred?

Many clinics recommend single embryo transfer to reduce multiple pregnancy risk, particularly with good quality embryos. Your specialist will discuss the best approach for you.

### Does freezing harm embryos?

Modern freezing, called vitrification, preserves embryos very well, and most embryos survive thawing. Your clinic will tell you the survival and outcomes relevant to your situation, without making unrealistic promises.

### Key Takeaways
- FET uses embryos frozen from a previous cycle.
- The lining is prepared using natural or hormonal cycles.
- The transfer is quick and most women feel little or no discomfort.
- A pregnancy test follows about ten to fourteen days later.
- Single embryo transfer lowers multiple pregnancy risk.

### Final Thoughts

Frozen embryo transfer gives flexibility and, for many patients, a gentler path. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru provides IVF and embryo transfer care.

### FAQs

1. **Is frozen embryo transfer better than fresh transfer?**
         Neither is better for everyone. FET offers flexibility and avoids transfer in high-hormone cycles, and for some patients it gives similar or better outcomes. Your doctor will recommend based on your situation. For many patients outcomes are equal or slightly better, because the lining can be prepared calmly without stimulation hormones. Freezing also lets a transfer wait when OHSS risk or timing argues for it.
2. **How long can embryos stay frozen?**
         Embryos can remain frozen for many years without losing viability when stored properly. Storage duration is governed by clinic policy and applicable regulations. Your clinic will explain the details. Many years. Survival on thawing is excellent with modern vitrification, and healthy babies are born from embryos frozen for over a decade. Storage has annual consent and paperwork requirements.
3. **Is frozen embryo transfer painful?**
         The transfer usually brings little or no discomfort, similar to a Pap smear. You do not need anaesthesia. The hormone medicines may cause side effects such as bloating. No. It is a quick procedure like a Pap smear, placing the thawed embryo through a thin catheter without sedation. Most women feel nothing beyond mild discomfort and return to normal activity.
4. **When should I take a pregnancy test after FET?**
         A blood pregnancy test is usually done about ten to fourteen days after the transfer, depending on the embryo's stage and your clinic's protocol. Testing too early can give misleading results. On the date your clinic sets, usually nine to twelve days after a day-5 embryo transfer. Testing sooner risks false negatives and, if a trigger was used, a misleading positive.
5. **Can I resume normal activities after embryo transfer?**
         Most people can resume light daily activities soon after transfer, avoiding heavy exercise and straining as advised. Complete bed rest is not required. Follow your doctor's instructions. Yes, normal daily activity is fine and bed rest is not needed. Avoid very strenuous exercise, heavy lifting and heat on the abdomen for a few days while the embryo settles.
### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)

Reviewer box: use global text.

---

## Post 51 · Early Pregnancy After IVF

```yaml
title: "Early Pregnancy After IVF: When to Call Your Doctor"
description: "Some symptoms in early IVF pregnancy are normal, while others need urgent care. Learn the warning signs of ectopic pregnancy, OHSS and miscarriage, and."
url: /blog/early-pregnancy-after-ivf-warning-signs/
lastReviewed: "2026-10-17"
category: "Pregnancy After IVF"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-17"
dateModified: "2026-10-17"
badge: early-pregnancy-scan
readingTime: 4
cluster: "Pregnancy After IVF"
pillar: false
keywords: []
about: {type: MedicalTherapy, name: "In vitro fertilization", alternateName: ["IVF"]}
related: [/treatments/ivf/, /services/early-pregnancy-scan/]
posts: [/blog/pregnancy-after-ivf/, /blog/ovarian-hyperstimulation-syndrome-warning-signs/, /blog/embryo-implantation-after-ivf-timeline/, /blog/frozen-embryo-transfer-process-preparation/]
```

H1: Early Pregnancy After IVF: When to Call Your Doctor

> **Quick answer:** Call your fertility clinic or go to emergency care if you have heavy bleeding with clots, severe abdominal pain, pain on one side, shoulder tip pain, dizziness or fainting, rapid weight gain or tight swollen belly, breathlessness, very little urine, fever or severe vomiting. If unsure, it is always safer to call.

In early pregnancy after IVF, mild cramps, light spotting, tiredness and nausea can be normal. But some symptoms need prompt medical attention, including heavy bleeding, severe or one-sided abdominal pain, shoulder tip pain, fainting, severe bloating or breathlessness. These may signal ectopic pregnancy, ovarian hyperstimulation syndrome (OHSS) or miscarriage, which need quick assessment.

This article is part of our [pregnancy after IVF](/blog/pregnancy-after-ivf/) guide.

### What is usually normal?
- Mild cramps, similar to period pain
- Light spotting or brown discharge
- Breast tenderness
- Tiredness
- Mild nausea
- Mild bloating, often from medicines

Even normal symptoms should be mentioned at your next visit.

### Urgent warning signs

## Heavy bleeding

Bleeding like a heavy period or passing clots may point to a threatened miscarriage or other problem.

## Severe or one-sided pain

Sharp pain on one side, especially with bleeding, can be a sign of ectopic pregnancy, where the pregnancy grows outside the uterus. Though less common, ectopic pregnancy can happen after IVF.

## Shoulder tip pain, dizziness or fainting

These can signal internal bleeding from an ectopic pregnancy and need emergency care.

## Signs of OHSS
- Rapidly increasing belly size or tightness
- Weight gain of more than about 1 kg in a day
- Nausea or vomiting
- Breathlessness
- Passing very little urine

OHSS can worsen in early pregnancy because hCG stimulates the ovaries.

## Fever or foul discharge

May point to infection.

## Severe vomiting

Being unable to keep fluids down may cause dehydration and needs treatment.

### What will your doctor do?

Depending on symptoms, your doctor may:
- Check hCG levels
- Do an ultrasound to check pregnancy location and heartbeat
- Assess ovaries and fluid in the abdomen
- Check blood pressure, blood tests and hydration

### Twin or multiple pregnancy considerations

Multiple pregnancies after IVF carry higher risks. Closer monitoring is usually advised.

### How can you prepare?
- Save your clinic's emergency number
- Know the nearest hospital with emergency gynaecology care
- Keep a record of medicines you are taking
- Do not stop progesterone or other medicines without advice

### Key Takeaways
- Mild cramps and spotting can be normal.
- Heavy bleeding or severe pain need urgent care.
- Shoulder tip pain or fainting may mean an emergency.
- OHSS signs include rapid swelling and breathlessness.
- When in doubt, call your clinic.

### Final Thoughts

Early IVF pregnancy can feel fragile, and every twinge may cause worry. Knowing which symptoms are expected and which need help allows you to act confidently. For close early pregnancy monitoring, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Is bleeding in early IVF pregnancy always a miscarriage?**
         No. Light spotting is fairly common and many pregnancies continue normally. Heavy bleeding, clots or bleeding with pain need prompt assessment. Always inform your clinic about any bleeding. No. Light spotting is common and often harmless, though any bleeding after IVF deserves a call the same day. Heavy bleeding with strong pain is the pattern that needs urgent assessment.
2. **Can ectopic pregnancy happen after IVF?**
         Yes, although the embryo is placed in the uterus, it can sometimes implant elsewhere, most often in a tube. This is why early ultrasound is done. Severe or one-sided pain needs urgent checking. Yes, slightly more often than after natural conception, which is why early scanning to confirm the sac is inside the uterus is routine. One-sided pain with bleeding is the warning pattern.
3. **What is OHSS in early pregnancy?**
         Ovarian hyperstimulation syndrome is a reaction to fertility medicines that causes swollen ovaries and fluid buildup. Pregnancy hormones can worsen it. Watch for rapid swelling, breathlessness and reduced urine. Ovarian hyperstimulation can persist or worsen if pregnancy occurs, with marked bloating, rapid weight gain, vomiting or breathlessness. Report these promptly, since moderate or severe OHSS needs hospital care.
4. **Are cramps normal after a positive IVF test?**
         Mild cramps similar to period pain are common as the uterus grows. Severe, sharp or one-sided pain, or cramps with heavy bleeding, should be checked quickly by your doctor. Mild cramps are common and usually harmless, helped along by progesterone support and the stretching uterus. Severe, worsening or one-sided pain with or without bleeding needs prompt review.
5. **Should I go to the emergency room or call my clinic?**
         For severe pain, fainting, heavy bleeding or breathlessness, go to emergency care immediately. For milder symptoms, call your clinic for advice. Keep your clinic's emergency number handy. Call the clinic first during the day, since they know your cycle and can triage quickly. For severe pain, heavy bleeding, faintness or breathlessness, go to emergency care without waiting.
6. **Can I travel during early IVF pregnancy?**
         Short, comfortable travel is often fine once the pregnancy is confirmed in the uterus. Check with your doctor first, especially if you have bleeding, OHSS or a multiple pregnancy. Short, uneventful travel is usually fine after the pregnancy is confirmed well placed on scan. Keep medicines, reports and your clinic's number handy, and avoid long trips before the first scan.
### Sources and further reading

- [NHS: IVF](https://www.nhs.uk/conditions/ivf/)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)
- [ACOG: Treating infertility](https://www.acog.org/womens-health/faqs/treating-infertility)

Reviewer box: use global text.

---

## Post 52 · Recurrent Miscarriage

```yaml
title: "Recurrent Miscarriage: Causes, Tests & Treatment"
description: "Learn about recurrent miscarriage, possible causes, recommended tests, treatment options and planning for a future pregnancy with specialist fertility."
url: /blog/recurrent-miscarriage-causes-tests-treatment/
lastReviewed: "2026-10-18"
category: "Recurrent Pregnancy Loss"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-18"
dateModified: "2026-10-18"
badge: pregnancy-loss
readingTime: 16
cluster: "Recurrent Pregnancy Loss"
pillar: true
keywords: []
about: {type: MedicalCondition, name: "Recurrent pregnancy loss", alternateName: ["Recurrent miscarriage"]}
related: [/conditions/recurrent-pregnancy-loss/, /services/reproductive-immunology/]
posts: [/blog/endometriosis-fertility-symptoms-diagnosis-treatment-ivf/, /blog/pregnancy-after-ivf/, /blog/pcos-fertility-ovulation-iui-ivf/, /blog/low-amh-ovarian-reserve-fertility/]
```

H1: Recurrent Miscarriage: Causes, Tests & Treatment

> **Quick answer:** Recurrent pregnancy loss is assessed by looking at the pattern of previous pregnancies and considering possible genetic, uterine, endocrine, metabolic and autoimmune factors. Depending on the history, a doctor may recommend ultrasound or other uterine imaging, selected blood tests, genetic testing or additional investigations. Treatment depends on what is found. Some causes can be treated or managed before or during pregnancy. When no specific cause is identified, care may focus on preconception counselling, appropriate monitoring and support during a future pregnancy. The content strategy for this pillar specifically calls for coverage of the definition, genetic and uterine causes, endocrine and antiphospholipid factors, the evaluation pathway, future pregnancy planning and the possible role of IVF or genetic testing. Dr_Swati_Shree_Content_Strategy…

Losing a pregnancy is difficult. Going through this more than once can leave a couple wondering why it is happening and whether anything can be done differently next time.

Recurrent miscarriage, also called recurrent pregnancy loss, can have several possible causes. These include chromosomal or genetic factors, problems affecting the uterus, antiphospholipid syndrome, thyroid and other endocrine conditions, and some metabolic or reproductive factors. In some couples, testing does not identify one clear cause.

The purpose of an evaluation is not to order every possible test. It is to understand the pregnancy history, look for causes that are relevant to that individual, and identify anything that could change treatment or future pregnancy care.

### What does recurrent pregnancy loss mean?

Recurrent pregnancy loss refers to repeated miscarriages or pregnancy losses. The terms recurrent miscarriage and recurrent pregnancy loss (RPL) are both used in clinical practice.

There is some variation between medical guidelines in exactly how recurrent pregnancy loss is defined and when investigations should begin. The number of losses, their timing and the details of each pregnancy can all matter.

For that reason, a fertility specialist will usually look beyond the number alone.

They may want to know:
- How many pregnancies you have had
- How far each pregnancy had progressed
- Whether an ultrasound had confirmed a heartbeat
- Whether the pregnancy was located inside the uterus
- Whether any pregnancy tissue was tested
- Whether there were complications before or during the loss
- Whether either partner has a known medical or genetic condition
- Whether there is a history of infertility or fertility treatment

A detailed history can help narrow down which investigations are actually useful.

### Why does recurrent miscarriage happen?

There is no single explanation for recurrent miscarriage.

Pregnancy depends on several processes working together. The embryo needs the right genetic information, implantation needs to occur in a suitable uterine environment, and maternal health and hormonal support also play important roles.

The main causes doctors consider include genetic factors, uterine or anatomical problems, antiphospholipid syndrome, endocrine conditions and other medical factors.

## Genetic and Chromosomal Causes

Chromosomal abnormalities are an important cause of miscarriage, particularly during early pregnancy.

An embryo may develop with an abnormal number or arrangement of chromosomes. When this affects development significantly, the pregnancy may stop developing.

This does not necessarily mean that either parent has a genetic disease.

In some couples, however, one partner may carry a chromosome rearrangement such as a balanced translocation. The carrier may be completely healthy, but some embryos may receive an unbalanced chromosome arrangement.

This is one reason genetic counselling and, in selected situations, genetic testing may be considered.

## Uterine or Anatomical Causes

The structure of the uterus can sometimes play a role in pregnancy loss.

Possible findings include:
- Certain congenital differences in the shape of the uterus
- Fibroids affecting the uterine cavity
- Endometrial polyps
- Intrauterine adhesions or scar tissue
- Other abnormalities involving the uterine cavity

Finding a fibroid or polyp does not automatically mean that it caused a miscarriage.

Its size, position and effect on the uterine cavity need to be considered alongside the pregnancy history. Treating an incidental finding without understanding its clinical relevance may not be helpful.

## Antiphospholipid Syndrome

Antiphospholipid syndrome, usually shortened to APS, is an autoimmune condition associated with pregnancy complications, including recurrent pregnancy loss in some patients.

When the clinical history suggests APS, specific blood tests may be considered.

A single abnormal blood-test result does not necessarily establish the diagnosis. APS requires appropriate clinical and laboratory assessment.

This is important because confirmed APS can change the way a future pregnancy is managed.

## Thyroid and Other Hormonal Factors

Thyroid disorders can affect reproductive health and pregnancy, so thyroid function may be assessed when appropriate.

Other endocrine or metabolic problems can also be relevant depending on the individual's history.

For example, a doctor may consider conditions affecting:
- Blood glucose
- Prolactin
- Ovulation
- Menstrual cycles
- General metabolic health

Having PCOS or a thyroid condition does not automatically explain recurrent miscarriage. The doctor needs to consider the complete clinical picture.

## Other Factors

A recurrent pregnancy loss assessment may also take into account:
- Maternal age
- Previous pregnancy history
- Existing medical conditions
- Previous fertility treatment
- Medication history
- Male reproductive factors in selected cases
- Family history
- Findings from earlier pregnancy investigations

Sometimes no definite cause is found.

That can be frustrating, but it does not mean the losses were insignificant or that there is nothing more to discuss. It simply means that the available evaluation has not identified a specific explanation that can be acted upon.

### Is recurrent miscarriage only a woman's problem?

No.

Pregnancy involves genetic material from both partners, as well as the embryo, uterus and several other biological processes.

Some genetic causes can involve either partner. In selected situations, male reproductive health may also form part of the assessment.

The important point is that recurrent pregnancy loss should not automatically be treated as something the woman has caused.

This matters even more when families or relatives place pressure on a woman after a miscarriage. Pregnancy loss is a medical issue, not a reason to assign blame.

### What tests are done after recurrent miscarriage?

There is no single "recurrent miscarriage test."

The appropriate evaluation depends on the person's history.

A fertility specialist may recommend some investigations and not others. The aim is to answer specific clinical questions rather than collect as many reports as possible.

## Pregnancy History Review

This is often the starting point.

The doctor may review:
- Gestational age at each loss
- Ultrasound findings
- Whether fetal cardiac activity was seen
- Symptoms before the miscarriage
- Previous treatment or procedures
- Genetic or pathology reports
- Previous pregnancy complications
- Menstrual and reproductive history
- Existing medical conditions
- Previous fertility treatment

Two people may have the same number of miscarriages but require very different evaluations because the circumstances were different.

## Ultrasound and Uterine Imaging

Ultrasound can provide information about the uterus, endometrium and ovaries.

If a more detailed assessment is needed, the doctor may recommend another method of evaluating the uterine cavity.

The purpose is to look for structural findings that could potentially affect pregnancy.

A scan finding does not automatically mean that treatment is needed. Its significance depends on what the finding is, where it is located and whether it fits with the pregnancy history.

## Antiphospholipid Antibody Tests

When appropriate, blood tests for antiphospholipid antibodies may form part of the evaluation.

These results need to be interpreted alongside the clinical history. A positive result on its own does not necessarily mean that a person has antiphospholipid syndrome.

If APS is diagnosed, the doctor can discuss what it means for a future pregnancy and whether treatment is required.

## Thyroid and Metabolic Tests

Depending on the medical history, the doctor may assess thyroid function and other metabolic factors.

For example, additional assessment may be relevant when there is:
- Known thyroid disease
- Diabetes
- Irregular periods
- PCOS
- Symptoms suggesting another endocrine condition

The goal is to find a condition that matters to the person's reproductive and pregnancy health, rather than performing every hormone test available.

## Genetic Testing

Genetic testing can sometimes provide useful information.

In selected circumstances, pregnancy tissue from a miscarriage may be tested to look for chromosomal abnormalities.

Parental chromosome testing may also be considered when the history suggests that one partner could carry a structural chromosome rearrangement.

Genetic counselling can be particularly useful here because genetic reports can be difficult to interpret without the right context.

## Are More Tests Always Better?

Not necessarily.

A longer list of tests does not automatically mean a better evaluation.

The recurrent pregnancy loss strategy developed for Dr. Swati Shree specifically recommends a test-purpose approach, asking what each investigation is intended to answer rather than suggesting that every patient requires every possible test. Dr_Swati_Shree_Content_Strategy…

That approach can reduce unnecessary investigations and keep the discussion focused on findings that may actually affect care.

### Can PCOS or thyroid problems cause recurrent miscarriage?

PCOS and thyroid disorders can be relevant to reproductive health, but neither should automatically be blamed for repeated pregnancy loss.

PCOS can affect ovulation and metabolic health. Thyroid disorders can affect pregnancy when thyroid function is not appropriately controlled.

If one of these conditions is present, the doctor may include its management in preconception planning.

The important distinction is between having a medical condition and proving that the condition caused a particular miscarriage. Those are not always the same thing.

The supporting content plan for this pillar specifically includes PCOS and thyroid-related pregnancy loss as a topic requiring evidence-qualified explanations rather than blanket statements. Dr_Swati_Shree_Content_Strategy…

### How is recurrent miscarriage treated?

There is no single treatment that works for every case.

Treatment should follow the cause when one is identified.

## Treating a Uterine Abnormality

If a significant abnormality affecting the uterine cavity is found, treatment may sometimes be recommended.

Depending on the problem, this can involve a procedure to remove or correct the abnormality.

However, not every fibroid, polyp or uterine variation needs treatment. The possible benefit of intervention should be considered in the context of the patient's actual history.

## Managing Antiphospholipid Syndrome

When APS is properly diagnosed, specific treatment may be used during pregnancy.

The exact medication plan depends on the individual situation and must be prescribed by a doctor.

Aspirin or blood-thinning medication should not be started simply because someone has read that it may help recurrent miscarriage.

## Managing Thyroid or Metabolic Conditions

If thyroid disease, diabetes or another endocrine or metabolic condition is identified, appropriate management can form part of preconception care.

The doctor may also recommend monitoring during pregnancy.

The aim is to address a real medical condition, rather than treating a laboratory result in isolation.

## Cervical Insufficiency

Cervical insufficiency is different from many causes of early miscarriage.

In some women, the cervix may open too early during pregnancy, particularly in a history suggestive of second-trimester pregnancy loss.

Depending on the history, an obstetrician may discuss closer cervical monitoring or a procedure such as cervical cerclage.

This is not appropriate for every woman who has experienced miscarriage.

## Progesterone

Progesterone supports the uterine lining and early pregnancy.

Progesterone treatment may be considered in certain clinical situations, depending on the pregnancy history and other findings.

It is not a universal treatment for recurrent miscarriage.

Whether it is appropriate, and how it should be used, should be decided by the treating doctor.

## Genetic Counselling

When genetic testing identifies or raises suspicion of a chromosomal issue, genetic counselling can help the couple understand what the result means.

The discussion may cover:
- Whether either parent carries a chromosome rearrangement
- What the result could mean for another pregnancy
- Whether further testing is useful
- Whether assisted reproduction should be considered
- What options are available based on the couple's circumstances

The value of genetic counselling is often in making a complicated report easier to understand and putting it into the context of future pregnancy planning.

### When is IVF considered after recurrent miscarriage?

Recurrent miscarriage does not automatically mean that IVF is necessary.

IVF may be discussed when there is another reason for assisted reproduction, such as infertility, or in selected genetic situations where embryo testing becomes part of the treatment discussion.

The decision depends on the couple's complete reproductive history.

Factors that may influence the discussion include:
- Age
- Ovarian reserve
- Sperm factors
- Previous fertility treatment
- Genetic findings
- Number and pattern of pregnancy losses
- Other fertility diagnoses

IVF also cannot guarantee that miscarriage will not occur.

For patients who need advanced ART, Dr. Swati Shree evaluates them at EVE Women and Fertility Clinic, which provides fertility assessment, counselling, ovulation induction, follicle monitoring and IUI. IVF laboratory procedures are carried out at associated, registered ART centres.

### Does embryo genetic testing prevent miscarriage?

Embryo genetic testing may be discussed in selected circumstances, particularly when there is a relevant genetic concern.

It is not a routine answer for every couple experiencing recurrent miscarriage.

The decision depends on the reason for considering IVF, the genetic findings, age, embryo availability and other factors.

It is also important to understand what genetic testing can and cannot tell you. Testing can provide information about specific genetic characteristics, but it cannot guarantee implantation, an ongoing pregnancy or a healthy baby.

### What should you do before trying again?

After repeated pregnancy loss, it is reasonable to pause and review the situation before trying again.

A preconception appointment can be useful for reviewing:
- Previous pregnancy records
- Ultrasound reports
- Genetic or pathology results
- Current medicines
- Existing medical conditions
- Thyroid or metabolic health
- Previous fertility treatment
- The plan for the next pregnancy

There is no universal waiting period that applies to every person after pregnancy loss. The appropriate timing can depend on physical recovery, emotional readiness and the circumstances of the miscarriage.

Your doctor can advise you based on what happened and your current health.

### What happens after a positive pregnancy test?

A positive pregnancy test after recurrent miscarriage can bring mixed emotions.

You may feel happy, but you may also feel nervous about becoming attached to the pregnancy. That does not mean you are being negative. It is a common emotional response after loss.

Your doctor may create an early pregnancy plan based on your previous history.

Depending on the situation, this may involve:
- Confirming the pregnancy appropriately.
- Checking hCG when clinically indicated.
- Arranging an early ultrasound at the appropriate time.
- Reviewing medicines and existing medical conditions.
- Monitoring the pregnancy more closely if there is a clinical reason.
- Explaining which symptoms should prompt medical attention.

The exact schedule varies from person to person.

### Which symptoms need urgent attention in early pregnancy?

Some symptoms should not wait for a routine appointment.

Seek urgent medical assessment if you have:
- Heavy vaginal bleeding
- Severe or increasing abdominal or pelvic pain
- Pain mainly on one side
- Shoulder-tip pain, particularly with bleeding or pelvic pain
- Fainting or significant dizziness
- Fever
- Severe weakness or feeling acutely unwell

Bleeding combined with one-sided pelvic pain, shoulder-tip pain or fainting can be a warning sign of an ectopic pregnancy.

If symptoms are severe, seek emergency medical care rather than waiting for your fertility clinic appointment.

### Can stress cause recurrent miscarriage?

After a miscarriage, people often replay everything they did during the pregnancy.

Was work too stressful? Was there too much travel? Did exercise cause a problem? Did something eaten or done during the pregnancy lead to the loss?

This kind of self-blame is understandable, but it is not a useful way to approach recurrent pregnancy loss.

Ordinary emotional stress should not automatically be treated as the cause of repeated miscarriage.

At the same time, emotional wellbeing matters. Recurrent pregnancy loss can affect sleep, relationships, work and confidence about trying again. Counselling or other emotional support can be helpful.

Support should complement medical care, not replace it.

### Does bed rest prevent miscarriage?

Routine bed rest is not a general treatment for recurrent miscarriage.

A miscarriage caused by a chromosomal problem, for example, cannot be prevented by simply remaining in bed.

Advice about activity after a miscarriage or during a subsequent pregnancy should be based on the person's medical situation.

If someone recommends complete bed rest, avoiding all exercise or stopping normal activities, it is worth discussing that advice with the treating doctor rather than assuming it is necessary.

### Lifestyle changes before pregnancy

Healthy habits can support general health before and during pregnancy, although they cannot prevent every miscarriage.

Useful areas to discuss with your doctor include:
- Avoiding tobacco
- Avoiding alcohol when trying to conceive and during pregnancy
- Reviewing regular medicines before conception
- Managing known medical conditions
- Eating a balanced diet
- Maintaining appropriate physical activity
- Getting adequate sleep
- Taking prenatal supplements recommended by your doctor
- Attending preconception appointments

These steps should not be presented as a guarantee against pregnancy loss.

A previous miscarriage does not mean that a woman failed to follow the "right" lifestyle.

### Common misconceptions about recurrent miscarriage

## "One miscarriage means something is seriously wrong."

Not necessarily.

Miscarriage can happen for many reasons. One loss does not automatically mean that a person has recurrent pregnancy loss or an underlying fertility problem.

## "Recurrent miscarriage is always caused by the woman."

No.

Genetic factors can involve either partner, and pregnancy loss can have several possible causes.

## "Normal tests mean nothing can be done."

Not necessarily.

Sometimes the available evaluation does not identify a clear cause. Preconception counselling and appropriate early pregnancy care can still be useful.

## "IVF prevents miscarriage."

IVF does not guarantee that a pregnancy will continue normally.

It may be appropriate for some couples for specific fertility or genetic reasons, but it is not automatically required after recurrent miscarriage.

## "Aspirin prevents miscarriage."

Aspirin has specific medical uses. It should not be started without medical advice simply because someone has experienced pregnancy loss.

## "Bed rest is the safest thing after miscarriage."

Routine bed rest is not a universal treatment for miscarriage or recurrent pregnancy loss. Activity recommendations should be individualized.

### Questions to ask your fertility specialist

It can help to take your previous medical records to the appointment.

Consider asking:
- Does my pregnancy history require a recurrent pregnancy loss evaluation?
- Which causes are relevant in my case?
- Which tests would actually change my treatment or pregnancy plan?
- Does my partner need any evaluation?
- Should we consider genetic counselling?
- Does my uterus need a more detailed assessment?
- Should I be tested for thyroid or metabolic problems?
- Is antiphospholipid syndrome relevant to my history?
- Is there anything that should be treated before conception?
- What will monitoring look like in the next pregnancy?
- When should I contact you after a positive pregnancy test?
- Is IVF or embryo genetic testing relevant to my situation?

### When should you see a fertility specialist?

A fertility specialist can be helpful when pregnancy losses have happened repeatedly or when you want a structured review before trying again.

Earlier assessment may be particularly useful when there is:
- A known genetic condition
- A suspected uterine abnormality
- A history suggestive of antiphospholipid syndrome
- Thyroid or metabolic disease
- Infertility alongside pregnancy loss
- Previous fertility treatment
- Pregnancy loss later in pregnancy
- A family history suggesting a genetic condition
- Concern about planning another pregnancy

The aim is not simply to find a label. It is to understand what happened, identify anything treatable and decide what should be done differently, if anything, in a future pregnancy.

For couples in Gunjur and other parts of East Bangalore, a consultation with Dr. Swati Shree at EVE Women and Fertility Clinic can provide an opportunity to review previous pregnancy records and discuss an individualized evaluation.

### Key Takeaways
- Recurrent miscarriage is also called recurrent pregnancy loss.
- The exact definition can vary between clinical guidelines.
- Possible causes include genetic, uterine, endocrine, metabolic and antiphospholipid factors.
- The pregnancy history is an important part of the evaluation.
- Not every patient needs every available test.
- Genetic counselling may be useful in selected situations.
- Treatment depends on the cause, when one can be identified.
- IVF is not automatically required after recurrent miscarriage.
- Embryo genetic testing may be relevant in selected cases, not universally.
- A healthy future pregnancy can still be possible after recurrent pregnancy loss.
- Appropriate preconception planning and early pregnancy care can provide a clearer path forward.
- Neither partner should be blamed for a pregnancy loss.

### Final Thoughts

Repeated miscarriage can make the next pregnancy feel frightening before it has even begun. It is normal to have questions about why it happened and whether something can be done to reduce the risk in the future.

There is no single recurrent miscarriage test and no treatment that applies to everyone. A careful review of the previous pregnancies, followed by targeted investigations, is usually more useful than a long list of unrelated tests.

Sometimes a clear cause is found and treatment can be offered. Sometimes the investigations are reassuring but do not provide a definite explanation. Both situations deserve proper medical care and honest counselling.

If you have experienced recurrent pregnancy loss, discussing your history with a reproductive medicine specialist can help you understand what should be investigated and how a future pregnancy can be planned.

Dr. Swati Shree provides fertility evaluation and reproductive medicine care at EVE Women and Fertility Clinic, Gunjur, Bangalore.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility and pregnancy outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [When Is Miscarriage Called Recurrent Pregnancy Loss?](/blog/recurrent-miscarriage-recurrent-pregnancy-loss/)
- [Hysteroscopy for Infertility When Is It Needed](/blog/hysteroscopy-for-infertility-when-is-it-needed/)
- [Tests After Recurrent Miscarriage: What Is Checked](/blog/tests-after-recurrent-miscarriage/)
- [Thyroid Problems and Fertility](/blog/thyroid-problems-and-fertility/)
- [Genetic Testing in IVF PGT-A Is It Worth It](/blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/)

### FAQs

1. **How many miscarriages are considered recurrent pregnancy loss?**
   The definition of recurrent pregnancy loss can vary between medical guidelines and clinical situations. Doctors consider not only the number of miscarriages but also when they occurred, previous ultrasound findings, genetic results and the couple's medical history. A fertility specialist can determine whether an evaluation is appropriate.
2. **What is the most common cause of recurrent miscarriage?**
   There is no single cause that explains every case. Chromosomal abnormalities are an important cause of pregnancy loss, particularly early in pregnancy. Other possibilities include uterine abnormalities, antiphospholipid syndrome, endocrine conditions and genetic factors involving a parent. Some couples have no identifiable cause after evaluation.
3. **What blood tests are done for recurrent miscarriage?**
   Blood tests are selected according to the patient's history. They may include testing related to antiphospholipid syndrome, thyroid function and selected endocrine or metabolic conditions. Genetic testing may also be discussed in appropriate cases. A doctor should decide which tests are useful rather than ordering every available blood test.
4. **Can thyroid problems cause recurrent miscarriage?**
   Thyroid disorders can affect pregnancy, particularly when thyroid function is not appropriately managed. However, thyroid disease should not automatically be assumed to be the cause of recurrent miscarriage. A doctor can assess thyroid function and consider the result alongside the complete pregnancy and medical history.
5. **Can recurrent miscarriage be treated?**
   Treatment depends on the underlying cause. Depending on the findings, management may include treating an identified medical condition, addressing certain uterine abnormalities, managing antiphospholipid syndrome or providing genetic counselling. When no cause is identified, preconception planning and appropriate monitoring during a future pregnancy may still be useful.
6. **Is IVF recommended for recurrent miscarriage?**
   IVF is not automatically recommended after recurrent miscarriage. It may be considered when there is another fertility indication or when particular genetic circumstances make assisted reproduction relevant. Embryo genetic testing may be discussed in selected cases, but IVF cannot guarantee that a future pregnancy will continue normally.
7. **Can I have a healthy pregnancy after recurrent miscarriage?**
         Yes, a healthy future pregnancy can be possible after recurrent pregnancy loss. The appropriate care depends on factors such as age, medical history, previous pregnancy findings and test results. No treatment can guarantee a particular outcome, but identifying a treatable cause and planning early pregnancy care can help guide management. Yes, most couples do. Even after several losses, a good share of next pregnancies succeed, especially once treatable causes are found. Early supportive monitoring in the next pregnancy helps.
8. **Where can recurrent miscarriage be evaluated in Bangalore?**
   Recurrent pregnancy loss can be assessed by a gynecologist or fertility specialist with experience in reproductive medicine. Dr. Swati Shree provides fertility evaluation at EVE Women and Fertility Clinic in Gunjur, Bangalore, where the assessment can be tailored to the individual's previous pregnancy history and medical findings.

### Sources and further reading

- [NHS: Miscarriage](https://www.nhs.uk/conditions/miscarriage/)
- [ACOG: Repeated miscarriages](https://www.acog.org/womens-health/faqs/repeated-miscarriages)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)

Reviewer box: use global text.

---

## Post 53 · When Is Miscarriage Called Recurrent Pregnancy Loss?

```yaml
title: "When Is Miscarriage Called Recurrent Pregnancy Loss?"
description: "Recurrent pregnancy loss usually means two or more pregnancy losses. Learn how it is defined, why evaluation matters and what most couples can hope for."
url: /blog/recurrent-miscarriage-recurrent-pregnancy-loss/
lastReviewed: "2026-10-18"
category: "Recurrent Pregnancy Loss"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-18"
dateModified: "2026-10-18"
badge: pregnancy-loss
readingTime: 4
cluster: "Recurrent Pregnancy Loss"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Recurrent pregnancy loss", alternateName: ["Recurrent miscarriage"]}
related: [/conditions/recurrent-pregnancy-loss/, /services/reproductive-immunology/]
posts: [/blog/hysteroscopy-for-infertility-when-is-it-needed/, /blog/thyroid-problems-and-fertility/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/]
```

H1: When Is Miscarriage Called Recurrent Pregnancy Loss?

> **Quick answer:** Recurrent pregnancy loss, also called recurrent miscarriage, usually means two or more failed pregnancies before 20 to 24 weeks. Evaluation looks for treatable causes such as uterine problems, hormone issues, blood clotting conditions and genetic factors. In about half of couples, no clear cause is found, yet the chance of a future successful pregnancy is still encouraging.

Recurrent pregnancy loss is generally defined as two or more pregnancy losses. Some guidelines use three or more consecutive losses. Most experts now recommend starting an evaluation after two losses, especially if the woman is older or the couple has had difficulty conceiving. Even after several losses, many couples go on to have a healthy pregnancy.

This article is part of our [recurrent miscarriage](/blog/recurrent-miscarriage-causes-tests-treatment/) guide.

### How common is miscarriage?

Miscarriage is common. A large share of recognised pregnancies end in early loss, often due to chromosomal problems in the embryo. Having one miscarriage does not usually mean there is an underlying problem. Repeated loss is much less common and deserves evaluation.

### What counts as a pregnancy loss?

Different guidelines count losses differently, but they usually include:
- Pregnancies confirmed by blood test or ultrasound
- Losses before 20 to 24 weeks
- Some guidelines include biochemical pregnancies (very early losses shown only by hCG)

Ectopic and molar pregnancies are usually counted separately.

### Why does evaluation matter?

Finding a cause can guide treatment that may improve the chance of a healthy pregnancy. Even when no cause is found, evaluation:
- Rules out treatable conditions
- Gives couples clearer information
- Helps plan early pregnancy monitoring and support

### What are the main cause categories?
- Genetic factors: chromosome changes in the embryo or, less often, in a parent
- Uterine factors: septum, fibroids, polyps or scar tissue
- Hormonal and metabolic factors: thyroid problems, uncontrolled diabetes, PCOS
- Antiphospholipid syndrome: an immune condition that affects blood clotting
- Age: egg quality declines with age, increasing chromosomal issues
- Lifestyle: smoking, heavy alcohol and obesity

### When should you seek evaluation?
- After two pregnancy losses
- After one loss if you are over 35 and have had trouble conceiving
- After a second-trimester loss
- If you have a known condition such as thyroid disease or a clotting disorder

### Emotional support matters

Repeated loss can cause grief, anxiety and strain on relationships. Counselling, support groups and open conversation with your partner can help. Many couples find that early scans and close care in the next pregnancy reduce anxiety.

### Key Takeaways
- Recurrent pregnancy loss usually means two or more losses.
- Evaluation is often advised after two losses.
- Causes include genetic, uterine, hormonal and clotting factors.
- In many couples no cause is found.
- Future pregnancy outcomes are often encouraging.

### Final Thoughts

Losing a pregnancy more than once is deeply painful, and it is not your fault. A careful, compassionate evaluation can help you move forward with clearer answers and a plan. For support and assessment, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **How many miscarriages before testing is recommended?**
         Many specialists now recommend evaluation after two pregnancy losses, rather than waiting for three. Testing may be advised after one loss in women over 35 or with other fertility concerns. Evaluation is generally offered after two consecutive losses, and after three is standard. With a strong history or older age, earlier review is reasonable. Your doctor will tailor when to begin.
2. **Is recurrent miscarriage caused by something I did?**
         Usually not. Most miscarriages are due to chromosomal problems in the embryo, which are not caused by anything the woman did. Normal activity, work and intercourse do not cause miscarriage. No. Most early losses come from chromosome errors in that embryo, not from work, exercise, travel or anything you ate or did. The evaluation looks for the few treatable causes.
3. **Can I have a healthy pregnancy after recurrent miscarriage?**
   Yes. Many couples go on to have a healthy pregnancy, even when no cause is found. Close monitoring and support in the next pregnancy can be helpful.
4. **Do men need to be tested after recurrent miscarriage?**
         In some cases, both partners may be offered blood tests to check chromosomes. Sperm DNA testing may be discussed in selected cases. Your specialist will decide what is useful. Yes. A semen analysis and sometimes DNA fragmentation are checked, since sperm factors contribute to embryo quality. Both partners' chromosome testing is part of the standard workup.
5. **Does age affect the risk of miscarriage?**
         Yes. The risk of miscarriage rises with the woman's age, mainly because of chromosomal changes in eggs. This is why women over 35 may be evaluated sooner. Yes, clearly. Chromosome errors rise with egg age, so risk climbs through the late 30s and 40s. Age also shapes which tests and treatments offer the best value for you.
6. **Should I try again soon after a miscarriage?**
         It depends on your physical and emotional readiness and your doctor's advice. Many women can try again after their next normal period. If you have had recurrent losses, evaluation first is often helpful. Physically, most women can try after one normal cycle once they feel ready emotionally. There is no medical need to wait many months, though recurrent loss deserves its evaluation first.
### Sources and further reading

- [NHS: Miscarriage](https://www.nhs.uk/conditions/miscarriage/)
- [ACOG: Repeated miscarriages](https://www.acog.org/womens-health/faqs/repeated-miscarriages)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)

Reviewer box: use global text.

---

## Post 54 · Hysteroscopy for Infertility When Is It Needed

```yaml
title: "Hysteroscopy for Infertility When Is It Needed"
description: "Hysteroscopy lets doctors see inside the womb to find polyps, fibroids and scar tissue that affect fertility. Learn when it is advised, how it is done."
url: /blog/hysteroscopy-for-infertility-when-is-it-needed/
lastReviewed: "2026-10-18"
category: "Recurrent Pregnancy Loss"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-18"
dateModified: "2026-10-18"
badge: fertility-evaluation
readingTime: 4
cluster: "Recurrent Pregnancy Loss"
pillar: false
keywords: []
about: {type: DiagnosticProcedure, name: "Hysteroscopy"}
related: [/conditions/recurrent-pregnancy-loss/, /services/reproductive-immunology/]
posts: [/blog/fibroids-and-fertility-can-you-get-pregnant/, /blog/blocked-fallopian-tubes-symptoms-hsg-treatment/, /blog/recurrent-miscarriage-causes-tests-treatment/, /blog/frozen-embryo-transfer-process-preparation/, /blog/female-infertility-tests-amh-ultrasound-hsg/, /blog/recurrent-miscarriage-recurrent-pregnancy-loss/]
```

H1: Hysteroscopy for Infertility When Is It Needed

> **Quick answer:** Hysteroscopy may be recommended when ultrasound or HSG suggests an abnormality of the uterine cavity, before IVF in selected patients, after repeated implantation failure or recurrent miscarriage, or for unexplained abnormal bleeding. It can be diagnostic, to look, or operative, to treat problems at the same time.

Hysteroscopy is a procedure in which a thin telescope with a camera is passed through the cervix to look inside the womb. It allows doctors to see and often treat problems such as polyps, fibroids, scar tissue and a uterine septum that can affect fertility and implantation.

This article is part of our [recurrent miscarriage](/blog/recurrent-miscarriage-causes-tests-treatment/) guide.

### Why does the uterine cavity matter?

The inside of the womb is where the embryo implants. Anything that distorts or disturbs the cavity, such as polyps, submucosal fibroids, adhesions or a septum, can reduce the chance of implantation or increase the risk of miscarriage. Finding and correcting these problems can help.

### When is it recommended?

Your fertility specialist may suggest hysteroscopy if you have abnormal findings on ultrasound or HSG, repeated IVF failures, recurrent miscarriage, heavy or irregular bleeding, suspected scar tissue after previous surgery or infection, or before certain fertility treatments. It is not required for everyone.

### What can hysteroscopy find and treat?

## Polyps

Soft growths from the lining that can be removed.

## Submucosal fibroids

Growths that protrude into the cavity and can be resected through the hysteroscope.

## Intrauterine adhesions

Scar tissue that can be divided, a condition sometimes called Asherman syndrome.

## Uterine septum

A wall of tissue dividing the cavity, which can be removed.

## Other findings

Endometrial changes or retained tissue after a miscarriage or delivery.

### How is it done?

Diagnostic hysteroscopy is often done in a clinic or day-care setting with little or no anaesthesia. Operative hysteroscopy is usually done under sedation or anaesthesia. A fluid or gas expands the cavity so the camera can view the walls. The procedure typically takes from a few minutes to under an hour, depending on what is done.

### What is recovery like?

Most women go home the same day. Mild cramping, spotting or watery discharge for a few days is common. Your doctor will advise when to resume intercourse and when to try conceiving, which is often within the next cycle or two, depending on the procedure.

### What are the risks?

Hysteroscopy is generally safe. Rare risks include infection, bleeding, uterine perforation and fluid overload with operative procedures. Report fever, severe pain or heavy bleeding promptly.

### Key Takeaways
- Hysteroscopy looks inside the womb with a camera.
- It can diagnose and treat cavity problems.
- It may help after repeated implantation failure or miscarriage.
- Recovery is usually quick.
- Serious complications are rare.

### Final Thoughts

A healthy uterine cavity is a foundation for pregnancy. If your tests suggest a problem, hysteroscopy offers clarity and often treatment. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru provides assessment and fertility-focused care.

### FAQs

1. **Is hysteroscopy painful?**
         Diagnostic hysteroscopy may cause mild to moderate cramping, and many women tolerate it well in a clinic. Operative procedures are usually done under sedation or anaesthesia, so you feel little during the procedure. It is usually done under sedation or short anaesthesia, so you feel nothing during it. Mild cramping and spotting for a day or two afterward is common and settles quickly.
2. **Does hysteroscopy improve fertility?**
         Removing polyps, fibroids that distort the cavity, scar tissue or a septum can improve the uterine environment and may improve the chance of implantation in selected women. It does not help everyone. When it finds and removes a problem such as a polyp, small fibroid, septum or scar tissue, yes. As a routine step with a normal cavity it adds little, which is why it is used selectively.
3. **When can I try to conceive after hysteroscopy?**
         Many women can try in the next cycle or after a short interval, depending on what was done. Your doctor will give specific advice, particularly after removing fibroids or scar tissue. Often after one normal period, though removing a septum or larger lesion may need a few months for the lining to heal. Your surgeon gives a clear timeframe for your procedure.
4. **Do I need hysteroscopy before IVF?**
         Not for everyone. It may be advised if scans suggest cavity problems, after repeated implantation failure or when otherwise indicated. Your specialist will decide. Not routinely. It is advised when scans suggest a polyp, fibroid, septum or scarring, or after repeated failed transfers with good embryos. A normal cavity does not need routine scoping.
5. **What are the risks of hysteroscopy?**
         Risks are uncommon and include infection, bleeding and, rarely, uterine perforation or fluid overload. Seek help for fever, heavy bleeding or severe pain after the procedure. It is generally safe; uncommon risks include infection, bleeding, or rarely a small hole in the uterine wall. These are uncommon, and your specialist explains them before the procedure.
### Sources and further reading

- [NHS: Miscarriage](https://www.nhs.uk/conditions/miscarriage/)
- [ACOG: Repeated miscarriages](https://www.acog.org/womens-health/faqs/repeated-miscarriages)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)

Reviewer box: use global text.

---

## Post 55 · Tests After Recurrent Miscarriage

```yaml
title: "Tests After Recurrent Miscarriage: What Is Checked"
description: "After repeated pregnancy loss, specialists may check the uterus, hormones, clotting factors and chromosomes. Learn what each test looks for and why not."
url: /blog/tests-after-recurrent-miscarriage/
lastReviewed: "2026-10-19"
category: "Recurrent Pregnancy Loss"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-19"
dateModified: "2026-10-19"
badge: pregnancy-loss
readingTime: 4
cluster: "Recurrent Pregnancy Loss"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Recurrent pregnancy loss", alternateName: ["Recurrent miscarriage"]}
related: [/conditions/recurrent-pregnancy-loss/, /services/reproductive-immunology/]
posts: [/blog/hysteroscopy-for-infertility-when-is-it-needed/, /blog/thyroid-problems-and-fertility/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/]
```

H1: Tests After Recurrent Miscarriage: What Is Checked

> **Quick answer:** Common tests after recurrent miscarriage include a 3D ultrasound or hysteroscopy for the uterus, TSH and thyroid antibodies, blood sugar or HbA1c, antiphospholipid antibody tests, and parental karyotyping in selected cases. Testing of pregnancy tissue, if available, can also show whether a loss was due to chromosomal problems.

After two or more pregnancy losses, a fertility specialist may recommend tests to look for treatable causes. These usually include an assessment of the uterus, hormone and thyroid tests, blood tests for antiphospholipid syndrome and, in some cases, chromosome tests for both partners. Not every couple needs every test. The choice depends on your history and previous findings.

This article is part of our [recurrent miscarriage](/blog/recurrent-miscarriage-causes-tests-treatment/) guide.

### Why are tests done?

The aim is to find conditions that can be treated or managed to improve the chance of a healthy pregnancy. Tests also help couples understand what happened and plan the next pregnancy.

### Which tests may be considered?

## Uterine assessment
- 3D ultrasound: checks the shape of the uterus for a septum, fibroids or polyps
- Hysteroscopy: a thin camera looks inside the uterus and can treat some problems at the same time
- Saline sonography or MRI: used in selected cases

## Hormone and metabolic tests
- TSH and thyroid antibodies: thyroid problems are linked with pregnancy loss
- Blood sugar or HbA1c: to check diabetes control
- Prolactin: in selected women
- PCOS-related tests: when relevant

## Antiphospholipid syndrome tests

Blood tests for lupus anticoagulant, anticardiolipin antibodies and anti-beta-2 glycoprotein antibodies. Positive tests are usually repeated after about 12 weeks to confirm.

## Genetic tests
- Parental karyotype: a blood test checking chromosomes of both partners, offered in selected couples
- Testing pregnancy tissue: if a future loss occurs, analysing the tissue can show whether chromosomal problems caused it

## Other tests in selected cases

Vitamin D, sperm DNA fragmentation or other tests may be discussed depending on history. Some tests offered elsewhere have limited evidence, so your specialist will explain which ones are useful.

### What if all tests are normal?

This is common and is called unexplained recurrent pregnancy loss. It can be frustrating, but the chance of a successful next pregnancy is often still encouraging. Supportive care, early scans and regular contact with your doctor can help.

### What treatments may follow?
- Surgery to correct a uterine septum or remove polyps or fibroids
- Thyroid medicine if needed
- Blood thinners such as low-dose aspirin and heparin for antiphospholipid syndrome, under medical supervision
- Better diabetes control
- IVF with genetic testing of embryos in selected couples

### Key Takeaways
- Tests look at the uterus, hormones, clotting and genetics.
- Not every couple needs every test.
- Antiphospholipid tests are confirmed with repeat testing.
- Many couples have normal results.
- Treatment depends on what is found.

### Final Thoughts

Tests after repeated loss can bring clarity and, in many cases, a treatable cause. Even when results are normal, there is real reason for hope. For a thoughtful evaluation plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Do I need every test after recurrent miscarriage?**
         No. Tests are chosen based on your history, age, timing of losses and previous results. Your specialist will recommend tests that are useful for your situation and avoid those with limited value. No. The standard set covers the uterus, parental chromosomes, antiphospholipid antibodies and thyroid; extras like extensive immune panels are added only when your history suggests them.
2. **What is antiphospholipid syndrome?**
   It is an immune condition where antibodies increase the risk of blood clots, which can affect the placenta. It is a treatable cause of recurrent miscarriage. Diagnosis needs positive tests on two occasions about 12 weeks apart.
3. **Why test the uterus after miscarriage?**
         Problems such as a uterine septum, fibroids or polyps can interfere with implantation or pregnancy growth. Many of these can be treated with minor surgery like hysteroscopy. To look for structural problems that can disturb implantation or growth, such as a septum, polyps, fibroids or scar tissue. Ultrasound, saline sonography or hysteroscopy shows them clearly.
4. **What is a parental karyotype?**
         It is a blood test that checks the chromosomes of both partners. In a small number of couples, one partner carries a balanced chromosome change that can lead to pregnancy loss. Genetic counselling helps plan next steps. A blood test that maps the chromosomes of each partner to find balanced rearrangements. A carrier is healthy but can make embryos with unbalanced chromosome sets, which is one cause of repeated loss.
5. **Can thyroid problems cause miscarriage?**
         Untreated thyroid problems are linked with a higher risk of pregnancy loss. Testing TSH and treating abnormal levels before and during pregnancy is a simple and important step. Untreated thyroid disease and thyroid antibodies are linked to higher miscarriage risk, which is why TSH is part of the workup. Treating a genuinely abnormal result improves the outlook.
6. **Should pregnancy tissue be tested after a miscarriage?**
         If possible, testing tissue from a future loss can show whether chromosome problems were the cause. This can help guide further evaluation. Ask your doctor whether it can be arranged. When available, chromosome testing of the tissue can show whether the loss was a random embryo error, which guides whether deeper testing of the couple is useful. Your doctor will advise when it helps.
### Sources and further reading

- [NHS: Miscarriage](https://www.nhs.uk/conditions/miscarriage/)
- [ACOG: Repeated miscarriages](https://www.acog.org/womens-health/faqs/repeated-miscarriages)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)

Reviewer box: use global text.

---

## Post 56 · Thyroid Problems and Fertility

```yaml
title: "Thyroid Problems and Fertility: Tests and Treatment"
description: "Thyroid disorders can disturb ovulation, periods and early pregnancy. Learn how hypothyroidism and hyperthyroidism affect fertility, which tests matter."
url: /blog/thyroid-problems-and-fertility/
lastReviewed: "2026-10-19"
category: "Recurrent Pregnancy Loss"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-19"
dateModified: "2026-10-19"
badge: thyroid
readingTime: 4
cluster: "Recurrent Pregnancy Loss"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Thyroid disease"}
related: [/conditions/recurrent-pregnancy-loss/, /services/reproductive-immunology/]
posts: [/blog/pcos-ovulation-irregular-periods-pregnancy/, /blog/female-infertility-causes-symptoms-tests-treatment/, /blog/ovulation-tracking-how-to-know-fertile-window/, /blog/tests-after-recurrent-miscarriage/]
```

H1: Thyroid Problems and Fertility

> **Quick answer:** Both an underactive thyroid (hypothyroidism) and an overactive thyroid (hyperthyroidism) can interfere with ovulation and increase the risk of miscarriage. A TSH blood test screens for thyroid problems, and treatment with the right medicine usually restores balance. Thyroid control before and during pregnancy is important for the baby's development.

The thyroid gland produces hormones that regulate metabolism and influence the menstrual cycle and ovulation. When thyroid hormones are too low or too high, it can make periods irregular and reduce the chance of conceiving. Thyroid problems are common in women of reproductive age and are treatable.

This article is part of our [recurrent miscarriage](/blog/recurrent-miscarriage-causes-tests-treatment/) guide.

### How does the thyroid affect fertility?

Thyroid hormones interact with the hormones that control ovulation. Abnormal levels can cause irregular or absent periods, anovulation, higher prolactin levels, shorter luteal phase and difficulty implanting an embryo. Autoimmune thyroid disease can also be linked with miscarriage even when hormone levels appear normal.

### What are the symptoms?

## Hypothyroidism

Tiredness, weight gain, feeling cold, constipation, dry skin, hair loss, heavy or irregular periods and low mood.

## Hyperthyroidism

Weight loss, palpitations, sweating, anxiety, tremor, heat intolerance and light or irregular periods.

Many women have mild symptoms or none, so testing is important when planning pregnancy.

### What tests are used?

A TSH test is the main screening test. Doctors may also measure free T4 and thyroid antibodies such as anti-TPO. For women trying to conceive, TSH targets are usually lower than for the general population, and your doctor will set the right range for you.

### How is it treated?

## Hypothyroidism

Daily levothyroxine replacement restores hormone levels. It is taken on an empty stomach as directed, and doses are adjusted using blood tests. Do not stop or change the dose without medical advice.

## Hyperthyroidism

Treatment depends on the cause and may include anti-thyroid medicines or other approaches. Pregnancy planning should be discussed with your doctor because some medicines require adjustment.

## Monitoring during pregnancy

Thyroid needs usually increase in early pregnancy, so doses are often increased and tests repeated regularly.

### Should you test before pregnancy?

Many specialists recommend checking thyroid function in women with infertility, irregular periods, a history of miscarriage, goitre, family history of thyroid disease or other autoimmune conditions. Your doctor will advise on testing.

### Can thyroid treatment improve fertility?

Correcting thyroid hormone levels often improves cycle regularity and the chance of conception, and lowers pregnancy complications. It works alongside evaluation of other factors, since thyroid disease is only one possible cause of difficulty conceiving.

### Key Takeaways
- Thyroid disorders can disturb ovulation and periods.
- TSH testing is simple and useful.
- Treatment is safe and effective when monitored.
- Dose often needs adjustment in pregnancy.
- Thyroid control protects the baby's development.

### Final Thoughts

Addressing thyroid health is one of the simplest steps in fertility care. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru includes thyroid assessment in fertility evaluation.

### FAQs

1. **Can hypothyroidism prevent pregnancy?**
         Hypothyroidism can disturb ovulation and cycles and make conception harder, but with treatment many women conceive. Controlling thyroid levels before pregnancy improves fertility and pregnancy outcomes. Untreated hypothyroidism can disturb ovulation and raise miscarriage risk, but treated well it rarely stops conception. A TSH blood test is a routine part of every fertility evaluation.
2. **What TSH level is best for pregnancy?**
         Many specialists aim for a lower TSH range when trying to conceive, but the exact target is individual. Your doctor will set the right range for you and monitor it regularly. Most specialists aim for roughly under 2.5 mIU/L before and during early pregnancy, since needs rise once you conceive. Your dose is adjusted and rechecked through each trimester.
3. **Should I take thyroid medicine during pregnancy?**
         If you have hypothyroidism, treatment is important and generally continued during pregnancy, often at a higher dose. Do not stop or change your medicine without your doctor's advice. Yes, keep taking it; the need usually increases in pregnancy and stopping is the greater risk. Levothyroxine is safe, and doses are monitored with regular TSH tests.
4. **Can thyroid antibodies cause miscarriage?**
         Thyroid antibodies are linked with a higher risk of miscarriage in some women, even with normal hormone levels. Your doctor may monitor your thyroid more closely during pregnancy. Antibodies alone are linked to a somewhat higher miscarriage risk even with normal TSH, though evidence is mixed. Your doctor may lower the treatment threshold or monitor more closely when they are present.
5. **Do both partners need thyroid tests?**
         Thyroid testing is mainly advised for women, but men with symptoms or abnormal semen analysis may also be tested. Your fertility specialist will decide which tests are needed. Usually just the woman, since thyroid effects on fertility act through ovulation and pregnancy. His history may prompt a check if symptoms or results suggest it, but routine testing is hers.
### Sources and further reading

- [NHS: Underactive thyroid](https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/)
- [NHS: Miscarriage](https://www.nhs.uk/conditions/miscarriage/)
- [ACOG: Repeated miscarriages](https://www.acog.org/womens-health/faqs/repeated-miscarriages)

Reviewer box: use global text.

---

## Post 57 · Genetic Testing in IVF PGT-A Is It Worth It

```yaml
title: "Genetic Testing in IVF PGT-A Is It Worth It"
description: "Preimplantation genetic testing screens embryos for chromosome problems. Learn what PGT-A, PGT-M and PGT-SR are, who may benefit, limits of testing and."
url: /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/
lastReviewed: "2026-10-19"
category: "Recurrent Pregnancy Loss"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-19"
dateModified: "2026-10-19"
badge: fertility-evaluation
readingTime: 4
cluster: "Recurrent Pregnancy Loss"
pillar: false
keywords: []
about: {type: MedicalTest, name: "Preimplantation genetic testing", alternateName: ["PGT"]}
related: [/conditions/recurrent-pregnancy-loss/, /services/reproductive-immunology/]
posts: [/blog/blastocyst-transfer-embryo-grading-explained/, /blog/recurrent-miscarriage-causes-tests-treatment/, /blog/fertility-after-35-when-to-seek-help/, /blog/ivf-success-factors-age-egg-quality-sperm-embryos/, /blog/frozen-embryo-transfer-process-preparation/, /blog/tests-after-recurrent-miscarriage/]
```

H1: Genetic Testing in IVF PGT-A Is It Worth It

> **Quick answer:** PGT-A screens embryos for the wrong number of chromosomes, PGT-M tests for a specific inherited single-gene condition and PGT-SR checks for structural chromosome rearrangements. Testing may help selected couples, such as those with a known genetic condition, recurrent miscarriage or older age, but it does not guarantee a pregnancy, and evidence for routine use in all patients is limited.

Preimplantation genetic testing, or PGT, is a set of tests that examine embryos created through IVF for certain genetic or chromosomal problems before transfer. It is not necessary for every IVF patient, and its value depends on individual circumstances. Understanding the types and limits helps you decide.

This article is part of our [recurrent miscarriage](/blog/recurrent-miscarriage-causes-tests-treatment/) guide.

### What are the types of PGT?

## PGT-A (aneuploidy)

Screens embryos for extra or missing chromosomes, which are a common cause of failed implantation and miscarriage, particularly with increasing age.

## PGT-M (monogenic)

Tests embryos for a specific single-gene disorder, such as thalassaemia or cystic fibrosis, when parents are known carriers.

## PGT-SR (structural rearrangements)

Checks for balanced translocations or other structural changes in a parent's chromosomes that can lead to unbalanced embryos.

### How is it done?

After fertilisation, embryos are grown to the blastocyst stage. A few cells are carefully removed from the outer layer, which will become the placenta, and sent for genetic analysis. Embryos are usually frozen while results are awaited, and a suitable embryo is transferred in a later frozen cycle.

### Who may Benefit?

PGT-M and PGT-SR are clearly indicated when there is a known genetic condition or translocation. PGT-A may be considered in women of advanced maternal age, couples with recurrent pregnancy loss or repeated implantation failure and, in some cases, when previous pregnancies had chromosomal abnormalities. Evidence for benefit in all patients is debated, and results differ by age group and clinic.

### What are the limitations?

PGT does not guarantee a pregnancy or a healthy baby. It cannot detect every genetic or health condition. Biopsy results from a few cells may not perfectly represent the whole embryo, and mosaic results, where some cells are normal and others abnormal, can be difficult to interpret. Some embryos may be discarded or not used because of results, which raises ethical questions that you should discuss. Testing adds cost and requires embryo freezing.

### What are the risks?

The biopsy is performed by skilled embryologists and is considered safe, but there is a small theoretical risk to the embryo. Prenatal tests such as NIPT or amniocentesis may still be recommended during pregnancy.

### What should you ask your specialist?

Is PGT recommended in my situation, what exactly will it test, how accurate is it and what are its limits, how many embryos might be suitable, what is the cost, how are mosaic embryos handled and what are the legal and ethical considerations? In India, sex selection is prohibited by law, and testing must follow legal requirements.

### Key Takeaways
- PGT screens embryos for genetic or chromosome problems.
- PGT-M and PGT-SR have clear indications.
- PGT-A benefits are debated and individual.
- Testing does not guarantee pregnancy.
- Discuss costs, limits and ethics beforehand.

### Final Thoughts

PGT is a tool, not a guarantee. A thoughtful discussion helps you decide whether it fits your situation. Dr. Swati Shree at EVE Women and Fertility Clinic in Bengaluru provides counselling and personalised IVF planning.

### FAQs

1. **What is PGT-A in IVF?**
         PGT-A is testing of embryos for an abnormal number of chromosomes before transfer. It aims to help choose embryos with a normal chromosome count, but it does not guarantee a pregnancy and its routine benefit is debated. A biopsy of a few cells from a day-5 embryo, tested to count its chromosomes before transfer. It aims to avoid transferring embryos with the wrong number, a major cause of failure and miscarriage.
2. **Does PGT-A improve IVF success?**
         It may help some groups, such as older women or those with recurrent pregnancy loss, by reducing transfers of chromosomally abnormal embryos, but it does not benefit everyone. Your specialist will discuss whether it suits you. It helps selected groups, mainly older women and those with repeated failures or losses, by avoiding transfers destined to fail. For younger women with few embryos the benefit is debated.
3. **Is embryo biopsy safe?**
         Embryo biopsy is performed by experienced embryologists and is considered safe, though a small theoretical risk to the embryo exists. Discuss the details with your clinic. Generally yes in experienced labs; the biopsy takes a few outer cells that would form the placenta, not the part that becomes the baby. A small risk of harming the embryo exists and is weighed.
4. **What is the difference between PGT-A and PGT-M?**
         PGT-A looks for the wrong number of chromosomes, while PGT-M tests for a specific single-gene disorder that parents carry. Their purposes and indications differ. PGT-A screens chromosome numbers for common errors. PGT-M tests for a specific inherited disease the couple carries, and needs a custom probe built for that family's mutation first.
5. **Do I still need prenatal tests after PGT?**
         Yes. PGT does not detect every condition, so prenatal screening or diagnostic tests may still be recommended. Your doctor will advise during pregnancy. Yes. PGT is a screening tool, not a guarantee, so standard prenatal screening and, when advised, diagnostic tests like amniocentesis are still recommended during the pregnancy.
### Sources and further reading

- [NHS: Miscarriage](https://www.nhs.uk/conditions/miscarriage/)
- [ACOG: Repeated miscarriages](https://www.acog.org/womens-health/faqs/repeated-miscarriages)
- [NICE Guideline NG126: Ectopic pregnancy and miscarriage](https://www.nice.org.uk/guidance/ng126)

Reviewer box: use global text.

---

## Post 58 · Fertility After 35

```yaml
title: "Fertility After 35 in Bangalore: Egg Quality & Treatment"
description: "How age affects egg quality after 35, when to see a fertility specialist, and what IUI, IVF and egg freezing can and can't do. A clear, practical guide."
url: /blog/fertility-after-thirty-five-egg-quality-age-treatment/
lastReviewed: "2026-10-20"
category: "Fertility After 35"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-20"
dateModified: "2026-10-20"
badge: ovarian-reserve
readingTime: 17
cluster: "Fertility After 35"
pillar: true
keywords: []
about: {type: MedicalCondition, name: "Age-related fertility decline", alternateName: ["Fertility after 35"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /treatments/egg-freezing/]
posts: [/blog/pcos-fertility-ovulation-iui-ivf/, /blog/low-amh-ovarian-reserve-fertility/, /blog/egg-quality-after-35/, /blog/pregnancy-after-40-fertility-risks-options/, /blog/egg-freezing-fertility-preservation/, /blog/low-amh-at-30-35-40-age/]
```

H1: Fertility After 35: Egg Quality, Age and Your Options

> **Quick answer:** Yes, you can get pregnant after 35, and many women do, with or without treatment. Fertility falls gradually because egg numbers drop and a bigger share of the remaining eggs have chromosomal errors. If you're 35 to 39, most guidelines suggest seeing a fertility specialist after six months of trying. After 40, go sooner. Testing both partners early saves time.

Fertility after 35 is a woman's ability to conceive and carry a pregnancy in her late thirties and forties. It starts dropping slowly in the early 30s and the dip gets steeper after 35, mostly because a woman has fewer eggs left and more of them carry genetic errors. Plenty of women still get pregnant naturally at this age. It just tends to take longer, and testing early gives you more room to choose.

A lot of couples in Bangalore start trying later than their parents did. Marriage happens later, careers take priority for a while, and some people simply weren't ready at 28. None of that is a mistake. But it does help to know how age affects your fertility, which parts you can influence, and at what point waiting stops being a good idea.

### Why does fertility decline after 35?

The short version is that eggs age and the uterus mostly doesn't. A woman's uterus can usually carry a pregnancy well into her forties. The ovaries are what change.

## How many eggs is a woman born with?

Every egg a woman will ever have is already in her ovaries when she's born. The body doesn't make new ones later. Doctors call this store the ovarian reserve.

Each month a small batch of eggs starts to grow. Usually one gets released and the rest are lost. Over twenty or thirty years the reserve runs down. How fast it runs down differs a lot between women, so two friends who are both 36 can get very different reports.

## What is egg quality, and why does it get worse with age?

When doctors talk about egg quality, they mostly mean one thing. Does the egg have the right number of chromosomes? Chromosomes carry the genetic instructions, and an embryo needs exactly the right set to grow normally.

In older eggs, the process that splits chromosomes evenly makes more mistakes. The egg ends up with one too many or one too few. The medical word for this is aneuploidy.

An embryo formed from an egg like that often won't implant. Sometimes it implants and then miscarries early. Less often, the pregnancy continues with a chromosomal condition such as Down syndrome.

This is the main reason it takes longer to conceive in your late 30s and why miscarriage becomes more common. It has nothing to do with something you did or didn't do.

## Does a man's age affect fertility too?

It does, though the effect is usually milder. Older men can have lower semen volume, slower sperm and more damage to sperm DNA. And male factors are part of the picture in a large number of couples at any age.

So a semen test belongs in the first round of tests, not the last. It's quick, it doesn't hurt, and many men in India put it off longer than they should.

### What is the difference between egg quantity and egg quality?

People mix these two up all the time, and the difference matters.

|  | Egg quantity (ovarian reserve) | Egg quality |
|---|---|---|
| What it means | Roughly how many eggs are left | Whether an egg is genetically normal and can form a healthy embryo |
| How it's checked | AMH blood test and antral follicle count on ultrasound | No simple test. Age is the best predictor. Sometimes judged from how embryos develop in IVF, or through embryo testing |
| Effect of age | Falls steadily | Falls more sharply from the mid to late 30s |
| Can it be improved? | No proven way to raise it | Age-related decline can't be reversed |


A 32-year-old with low AMH may still have decent eggs. A 41-year-old with a normal AMH may have plenty of eggs, many of which aren't chromosomally normal. A good fertility doctor reads both together and never judges by one number.

### How does age affect your chances of getting pregnant?

Nothing dramatic happens on your 35th birthday. The decline is slow at first and picks up speed in the late 30s and after 40. Here is a rough guide, along with the timing that bodies such as ASRM and ACOG suggest for getting checked.

| Age | What usually happens | When to get a fertility evaluation |
|---|---|---|
| Under 35 | Fertility is generally at its peak, though it varies | After 12 months of regular unprotected sex |
| 35 to 39 | Chance of conceiving each month slowly drops and miscarriage risk goes up | After 6 months of trying |
| 40 and above | The drop is steeper and egg quality matters more | When you start trying, or even before |


These timelines assume no known problems. Irregular periods or a known condition mean you should go earlier, whatever your age.

## Is miscarriage more common after 35?

Yes. Miscarriage risk rises with the mother's age, and the main cause is chromosomal errors in the embryo. An early loss after 35 is usually not linked to food, travel, lifting things or stress, though many women blame themselves anyway.

If you've had two or more losses, ask for a recurrent pregnancy loss workup. It looks for things that can be treated, like thyroid disease, a uterine septum or a clotting disorder.

## What pregnancy risks go up after 35 and 40?

Most women over 35 have healthy pregnancies. Some risks do climb with age, though. Gestational diabetes, high blood pressure and preeclampsia are more common. So are placental problems, preterm birth, caesarean delivery and chromosomal conditions in the baby.

Regular antenatal check-ups catch most of these early. You'll also be offered screening, and sometimes diagnostic tests, for chromosomal conditions during pregnancy. In India these tests are done only for medical reasons. Finding out or choosing a baby's sex is illegal under the PCPNDT Act.

### Can you get pregnant naturally after 35?

Many women in their late 30s do, and some in their early 40s too. Age is one factor among several. Your doctor will also want to know if you ovulate regularly, what your ovarian reserve looks like, whether your tubes are open, and whether PCOS, endometriosis, fibroids or thyroid problems are in the picture. Your partner's semen report matters just as much. So does something more basic, which is how often you're actually together during the fertile days.

## How can you improve your chances of conceiving naturally?

Sex every two or three days across the cycle covers the fertile window without turning it into a project. Ovulation kits work well for some couples. For others they become one more source of anxiety, so use them only if they help.

For a lot of couples working in Whitefield or on Outer Ring Road, the real obstacle is logistics. One partner is travelling, the other is on late calls, and by the fertile week both are too tired. It's a more common reason for delay than people admit, and worth talking about honestly at home.

## Do regular periods mean my fertility is normal?

Not necessarily. A regular cycle usually means you're ovulating, which is good news. It says nothing about egg quality, ovarian reserve, your tubes or your partner's sperm. Women with clockwork cycles find out they have low ovarian reserve all the time.

### How long should you try to conceive after 35 before getting help?

At 35 to 39, give it six months. At 40 or older, see someone when you start trying or within a couple of months.

Don't wait that long if you have irregular or very infrequent periods, known PCOS, endometriosis, adenomyosis or fibroids, or really painful periods or pain during sex. The same goes if you've had a pelvic infection, genital tuberculosis or pelvic surgery in the past, two or more miscarriages, or cancer treatment. If your partner has a known sperm problem, had testicular surgery or has trouble with ejaculation, book an appointment now.

A first consultation doesn't sign you up for treatment. It tells you where things stand, and after 35 the months you'd otherwise spend guessing are worth a lot.

### Which fertility tests are done after 35?

The workup covers eggs, tubes, uterus, hormones and sperm. Most of it is done in one or two cycles.

| Test | What it tells you | When it's usually done |
|---|---|---|
| AMH (Anti-Müllerian Hormone) | Ovarian reserve | Any day of the cycle |
| Antral follicle count (AFC) | Number of small follicles seen on a transvaginal scan | Early in the cycle |
| FSH, LH and estradiol | How the brain and ovaries are signalling each other | Day 2 to 4 of the period |
| TSH and prolactin | Thyroid or prolactin problems that can disturb ovulation | Any time |
| Pelvic ultrasound | Fibroids, polyps, cysts, endometrioma, shape of the uterus | Usually early in the cycle |
| Follicular study | Whether you ovulate, and when | A series of scans through one cycle |
| HSG or saline sonography | Whether the fallopian tubes are open | After the period ends, before ovulation |
| Semen analysis | Sperm count, movement and shape | After 2 to 5 days without ejaculation |


Depending on your history, your doctor may also check blood sugar, rubella immunity and screen for infections.

## Can an AMH test tell me if my eggs are good?

No. AMH estimates how many eggs you have left. It helps predict how your ovaries will respond to IVF injections. It doesn't measure quality, and it's a poor guide to whether you'll conceive naturally in the next few months.

Seeing "low AMH" on a report is frightening for most women. It means planning matters more and you shouldn't drift for another year. It doesn't mean you can't get pregnant.

### What are the fertility treatment options after 35?

The plan depends on your age, your results, how long you've been trying and what you both want. After 35, doctors tend to move to the next step a bit sooner than they would for a younger couple, because time counts.

## Ovulation induction and follicle monitoring

If you don't ovulate regularly, a tablet like letrozole can help an egg mature and release. A follicular study tracks the egg on ultrasound so you can time sex or an IUI. This is often where treatment starts for women with PCOS and other ovulation problems. These medicines should only be taken under a doctor's supervision.

## Is IUI a good option after 35?

In IUI, or intrauterine insemination, washed and concentrated sperm are placed inside the uterus around ovulation. It can be reasonable after 35 if your tubes are open, your partner's count is adequate and your reserve isn't too low.

The catch is that each IUI cycle works less often as age goes up. So in the late 30s most specialists suggest fewer IUI attempts before talking about IVF, and after 40 many move to IVF sooner. There's no fixed number. It depends on your situation.

## When is IVF recommended after 35?

IVF, or in vitro fertilisation, means stimulating the ovaries to grow several eggs, collecting them, fertilising them in a lab and transferring an embryo to the uterus. ICSI is a version of IVF where one sperm is injected straight into each egg. It's often used when sperm counts or motility are low.

After 35, IVF usually comes up when IUI hasn't worked, when tubes are blocked or damaged, or when reserve is low and waiting is risky. Moderate to severe endometriosis, a significant sperm problem and long-standing unexplained infertility are other common reasons.

IVF gets around many fertility problems. It can't make eggs younger. Using your own eggs, success rates generally fall as age rises, and some women need more than one cycle.

At EVE Women and Fertility Clinic, Dr. Swati Shree handles your evaluation, counselling and monitoring. The IVF lab work itself, including egg retrieval, embryo culture, embryo freezing and embryo transfer, is carried out at associated, registered ART centres.

## IUI vs IVF after 35: how do they compare?

|  | IUI | IVF |
|---|---|---|
| Where the egg is fertilised | Inside the body | In a lab |
| Medicines | Tablets, low-dose injections, or sometimes none | Daily injections for about 8 to 12 days |
| Procedure | A few minutes in the clinic | Egg collection under anaesthesia, then embryo transfer |
| Open tubes needed? | Yes | No |
| Usual role after 35 | A short trial for selected couples | Often discussed earlier, especially from 38 to 40 |
| Cost and effort | Lower | Higher |


## What is embryo testing (PGT-A), and do you need it?

PGT-A checks IVF embryos for an abnormal number of chromosomes before transfer. It's sometimes discussed for older women, after repeated miscarriages, or after several transfers that didn't work. Experts still disagree about who really benefits. It doesn't raise the odds for everyone and it adds to the cost, so it's a decision to make carefully with your doctor. Testing embryos to pick their sex is illegal in India.

## Are donor eggs an option?

If your own eggs are very unlikely to lead to a pregnancy, your doctor may raise donor eggs as an option. Egg donation in India falls under the ART (Regulation) Act, 2021, which sets specific rules. The clinic team can walk you through eligibility and what the process involves.

## Should you consider egg freezing?

Egg freezing means collecting eggs now and storing them for later. It's worth a conversation if you aren't ready for a baby yet, don't have a partner at the moment, or need treatment like chemotherapy that could damage your ovaries.

Younger eggs freeze and thaw better, so the age at freezing matters more than the age at use. Frozen eggs give you an option, not a promise. Women freezing in their late 30s often need more eggs stored to have a reasonable chance later. Collection and freezing happen at a centre with an IVF lab, after testing and counselling.

### What happens in an IVF cycle after 35? a step-by-step look
- Tests and consultation. Both of you are evaluated. Reserve, uterus, tubes, hormones and semen are all checked.
- Planning. Your doctor picks a stimulation protocol based on your age, AMH and follicle count.
- Stimulation. You take hormone injections for roughly 8 to 12 days so several follicles grow at once.
- Monitoring. Scans and blood tests show how the follicles are growing, and doses are adjusted if needed.
- Trigger. When the follicles are ready, one last injection prepares the eggs for collection.
- Egg retrieval. At the partner IVF centre, eggs are collected with a fine needle under anaesthesia. It usually takes under half an hour.
- Fertilisation and culture. Eggs are fertilised by IVF or ICSI and the embryos grow in the lab for a few days.
- Embryo transfer. One embryo is placed in the uterus, either fresh or later in a frozen embryo transfer.
- Pregnancy test. A blood hCG test is usually done around two weeks after transfer.

After 35 you may get fewer eggs, and some won't develop into embryos that can be used. Some couples do two or more collection cycles and freeze embryos before attempting a transfer. Ask your doctor whether that approach suits you.

### Pregnancy planning after 35: what can you do before trying?

Get a preconception check-up. It's one of the simplest and most useful things you can do. Your doctor will go over your health history and any medicines you take, and check your blood pressure, sugar, thyroid and haemoglobin. Rubella immunity and a few other screens are usually part of it.

You'll also be advised to start folic acid before you conceive, since it lowers the risk of neural tube defects. Ask your doctor how much to take. If you have diabetes, high blood pressure or thyroid disease, the aim is to get it well controlled before pregnancy, not during.

## Can diet and lifestyle improve egg quality after 35?

They can't undo age-related changes in your eggs. They do help your general reproductive health, and they make pregnancy safer.

Smoking is the big one, including second-hand smoke, because it's linked to losing ovarian reserve faster. Cut down on alcohol or stop while you're trying. Being well over or under a healthy weight can upset ovulation, so gradual changes help.

Food doesn't need to be complicated. Regular home meals with dal, rajma, chana, eggs, curd or paneer, vegetables, fruit, a few nuts and millets like ragi or jowar are a solid base. Go easy on sweets, fried snacks and sugary drinks, but crash diets and guilt won't help either. Walk, do yoga or swim most days. And try to protect your sleep, which late calls and phone time tend to eat into.

Your husband's habits count too. Smoking, heavy drinking, obesity and too much heat around the testes, such as a laptop on the lap for hours, can all affect sperm.

## Do supplements like CoQ10 or DHEA improve egg quality?

You'll find dozens of "egg quality" supplements online. Some, like CoQ10 and DHEA, are being researched, but the evidence isn't strong enough to say they work for most women, and a few may be wrong for you. Talk to your doctor before you start anything.

## How do you look after your emotional health?

Trying after 35 can feel like a countdown. Throw in relatives asking "any good news?" at every function, friends announcing pregnancies, and a demanding job, and it gets heavy.

Lean on your partner and let them lean on you. It's fine to tell relatives you won't be discussing it. Taking a month or two off between treatment cycles is fine too. A fertility counsellor or therapist can make a real difference, and asking for that support isn't a sign that you're coping badly.

Stress on its own rarely causes infertility, whatever an aunt may say.

### What are the risks and limitations of fertility treatment after 35?

Treatment works for many couples over 35, but going in with realistic expectations makes the hard moments easier to handle.

With your own eggs, the chance of pregnancy per IVF cycle generally drops as you get older. You may need more than one cycle, which costs money, leave from work and emotional energy. Sometimes a cycle doesn't result in pregnancy even when everything was done right. A positive test can still end in miscarriage.

There are physical risks too. Fertility injections occasionally overstimulate the ovaries, a condition called OHSS (ovarian hyperstimulation syndrome) that causes swelling and fluid build-up. Twins or triplets carry higher risks for mother and babies, which is one reason doctors often prefer transferring a single embryo.

### What are the common myths about fertility after 35?

"My periods are regular, so I'm fine."

Regular periods point to ovulation. They don't tell you anything about egg quality, reserve, tubes or sperm.

"IVF will take care of the age problem."

IVF solves many fertility problems, but egg aging isn't one of them.

"Low AMH means I'll never conceive."

It means fewer eggs are left. Women with low AMH get pregnant, naturally and through treatment.

"Actresses have babies at 45, so it can't be that hard."

What isn't usually mentioned is the fertility treatment, and often the donor eggs, behind some of those pregnancies.

"If a couple can't conceive, it's the wife's issue."

Male factors are involved in a large share of couples. Both partners need testing.

"The right supplement or diet will turn back the clock on my eggs."

No diet or supplement has been shown to reverse egg aging.

"You must stay in bed after embryo transfer."

Strict bed rest hasn't been shown to help. Light normal activity is generally fine unless your doctor says otherwise.

### What questions should you ask your fertility doctor?
- What do my AMH and follicle count mean at my age?
- Is my husband's semen report normal?
- Are my tubes open and is my uterus healthy?
- Should we keep trying naturally, try IUI, or go to IVF?
- How many cycles should we try before changing plans?
- What can someone with my age and results realistically expect?
- Is egg or embryo freezing worth considering for us?
- What should I do to get healthy before pregnancy?
- Which symptoms during treatment mean I should call you right away?

### When should you see a fertility specialist?

Book an appointment if you're 35 to 39 and six months have passed, if you're 40 or older and want a baby, or if you have irregular periods, a known gynaecological condition, past miscarriages or a partner with a sperm concern. You don't need to wait for a problem, either. Some women come in before they start trying, just to know where they stand.

If you live in Gunjur, Varthur, Whitefield, Sarjapur Road or nearby in East Bangalore, Dr. Swati Shree offers fertility evaluation and counselling at EVE Women and Fertility Clinic.

## When should you seek urgent medical care?

Go to a hospital or call your doctor straight away if you have severe abdominal pain, bloating, breathlessness or are passing very little urine after fertility injections or egg retrieval, as this can be OHSS. In early pregnancy, pain on one side of the pelvis, pain in the shoulder tip, dizziness or fainting can point to an ectopic pregnancy and needs immediate care. Heavy bleeding in pregnancy, or a fever after any fertility procedure, also needs prompt attention.

### Key Takeaways
- Female fertility starts falling slowly in the early 30s and faster after 35.
- The main reason is fewer eggs, with more chromosomal errors in the ones that remain.
- AMH tells you about egg numbers, not egg quality.
- See a specialist after 6 months of trying at 35 to 39, and sooner after 40.
- Test both partners from the beginning.
- Options include ovulation induction, IUI, IVF or ICSI, embryo testing, donor eggs and egg freezing.
- IVF helps with many causes of infertility but can't reverse egg aging.
- Healthy habits support pregnancy. No supplement has been shown to reverse egg aging.
- With good planning and antenatal care, many women have healthy pregnancies after 35.

### Final Thoughts

Being over 35 doesn't rule out a pregnancy. It does mean you have less time to spend wondering. Getting both of you tested gives you real information to work with, and decisions get a lot easier once you have it.

Some couples conceive on their own after a few months. Others need IUI, IVF, or a conversation about donor eggs or freezing. Knowing early which group you're likely to fall into is worth far more than any supplement.

If you're trying to conceive after 35, or want to understand your fertility before you start, you can book a consultation with Dr. Swati Shree at EVE Women and Fertility Clinic in Gunjur, Bangalore.

Medical Disclaimer: This article is for educational purposes only and does not replace professional medical advice. Fertility treatment outcomes vary from person to person. Please consult a qualified doctor for diagnosis and treatment.

### More in this series

- [Fertility After 35: What Changes and When to Seek Help](/blog/fertility-after-35-when-to-seek-help/)
- [Egg Quality After 35: What You Can and Cannot Change](/blog/egg-quality-after-35/)
- [Pregnancy After 40: Fertility, Risks and Options](/blog/pregnancy-after-40-fertility-risks-options/)
- [Egg Freezing: Who Should Consider It?](/blog/egg-freezing-fertility-preservation/)
- [Trying to Conceive After 35: When to Consider IVF](/blog/ivf-after-35-when-to-consider/)

### FAQs

1. **Is it hard to get pregnant after 35?**
   It usually takes longer after 35, but plenty of women still conceive naturally. The main reason for the change is that fewer eggs remain and more of them carry chromosomal errors. If you're between 35 and 39 and haven't conceived after six months of trying, it's sensible to see a fertility specialist and get both partners tested.
2. **What is a good AMH level at 35 or 40?**
   AMH drops naturally with age, and labs use slightly different reference ranges, so a single number means little on its own. Your doctor will read it alongside your age, antral follicle count and other results. Low AMH suggests fewer eggs are left. It says nothing about egg quality and doesn't mean pregnancy is impossible.
3. **Can I improve my egg quality after 35?**
         Age-related changes in egg quality can't be reversed. What you can do is support your overall health by not smoking, cutting down on alcohol, eating regular balanced meals, staying active and keeping conditions like thyroid disease under control. Many supplements claim to help, but the evidence is thin, so check with your doctor first. You cannot reverse age-related change, but stopping smoking, treating thyroid or metabolic problems and good general health support the environment eggs mature in. Supplements have limited, unproven benefit.
4. **Should I try IUI or go straight to IVF after 35?**
   That depends on your test results and how long you've been trying. A few IUI cycles can make sense if your tubes are open, your reserve is reasonable and sperm counts are adequate. After about 38 to 40, or if tubes are blocked, reserve is low or there's a significant sperm problem, IVF is usually discussed earlier.
5. **Is egg freezing worth it at 35?**
   It can be, if you want to delay pregnancy. Eggs frozen at 35 generally give better chances later than eggs frozen in your 40s. Freezing doesn't guarantee a baby, and how many eggs you'd need varies from woman to woman. Ovarian reserve testing and a consultation will help you decide whether it's right for you.
6. **Does my husband's age matter when trying to conceive?**
   Yes, although usually less than a woman's age does. Older men can have lower semen quality and more sperm DNA damage. Male factors play a part in a large number of couples who struggle to conceive, at any age. A semen analysis is simple and comfortable, and should be done early in the evaluation.
7. **Where can I get a fertility evaluation in East Bangalore?**
   Dr. Swati Shree sees patients at EVE Women and Fertility Clinic in Gunjur, close to Varthur, Whitefield and Sarjapur Road. The clinic offers fertility evaluation, counselling, ovulation monitoring and IUI. For IVF, the laboratory procedures are carried out at associated, registered ART centres. You can book a consultation to go over your tests and next steps.

### Sources and further reading

- [ACOG: Having a baby after age 35](https://www.acog.org/womens-health/faqs/having-a-baby-after-age-35-how-aging-affects-fertility-and-pregnancy)
- [NHS: Infertility](https://www.nhs.uk/conditions/infertility/)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 59 · Fertility After 35

```yaml
title: "Fertility After 35: What Changes and When to Seek Help"
description: "Fertility gradually declines after 35, but many women still conceive. Learn what changes with age, which tests help and why seeking help after 6 months."
url: /blog/fertility-after-35-when-to-seek-help/
lastReviewed: "2026-10-20"
category: "Fertility After 35"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-20"
dateModified: "2026-10-20"
badge: ovarian-reserve
readingTime: 4
cluster: "Fertility After 35"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Age-related fertility decline", alternateName: ["Fertility after 35"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /treatments/egg-freezing/]
posts: [/blog/egg-quality-after-35/, /blog/pregnancy-after-40-fertility-risks-options/, /blog/egg-freezing-fertility-preservation/, /blog/ivf-after-35-when-to-consider/, /blog/low-amh-at-30-35-40-age/]
```

H1: Fertility After 35: What Changes and When to Seek Help

> **Quick answer:** After 35, both egg quantity and egg quality decline. This means conception may take longer and the risk of miscarriage rises. If you are 35 to 39 and have not conceived after 6 months, seek an evaluation. If you are 40 or older, consider seeing a specialist as soon as you start trying.

Fertility gradually declines with age, and the change becomes more noticeable after 35. Women have fewer eggs, and a higher share of eggs may have chromosomal changes, which can lower the monthly chance of pregnancy and raise the risk of miscarriage. Many women still conceive naturally after 35, but experts advise seeing a fertility specialist after 6 months of trying, rather than 12.

This article is part of our [fertility after 35](/blog/fertility-after-thirty-five-egg-quality-age-treatment/) guide.

### What changes with age?

## Egg quantity

Women are born with all the eggs they will ever have. Numbers fall steadily over time, faster in the late thirties.

## Egg quality

More eggs carry chromosomal errors as women age. This affects fertilisation, embryo development and miscarriage risk.

## Other health factors

Conditions such as fibroids, endometriosis, thyroid problems and high blood pressure become more common with age and can affect fertility and pregnancy.

## Male age

Sperm quality may also decline with age, especially after the mid-forties, though more slowly.

### Can you still conceive naturally after 35?

Yes. Many women conceive naturally in their late thirties and some in their early forties. It may simply take a little longer. Having regular intercourse every 2 to 3 days through the cycle gives a good chance without needing exact timing.

### When should you seek help?
- Age 35 to 39: after 6 months of trying without pregnancy
- Age 40 and above: at the start, or within a few months
- Sooner if you have irregular periods, known endometriosis, PCOS, past pelvic infection or surgery
- Sooner if your partner has known sperm problems
- After two or more miscarriages

### What tests are usually done?
- AMH and antral follicle count to assess egg reserve
- Hormone tests such as FSH, TSH and prolactin
- Pelvic ultrasound
- Tubal test if needed
- Semen analysis for the partner
- General health checks such as blood sugar and blood pressure

### What options are available?

Depending on results, options may include timed intercourse, ovulation support, IUI or IVF. Some women consider egg freezing if they plan to delay pregnancy further. Your specialist will suggest a plan that matches your age and test results.

### Healthy steps that help
- Take folic acid before trying to conceive
- Stop smoking and limit alcohol
- Maintain a healthy weight
- Manage chronic conditions
- Review medicines with your doctor

### Key Takeaways
- Fertility declines gradually after 35.
- Egg quantity and quality both decrease.
- Many women still conceive naturally.
- Seek help after 6 months of trying at 35 or older.
- Early testing gives more options.

### Final Thoughts

Age is one important factor, but it is not the whole story. With timely evaluation and the right plan, many women build their families after 35. For a personalised assessment, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Is it harder to get pregnant after 35?**
         It can take longer because both egg quantity and quality decline with age. Many women still conceive naturally. Seeking help after 6 months without pregnancy helps avoid unnecessary delay. Yes, gradually rather than suddenly. Egg quantity and quality decline, so it often takes longer, but many women conceive in their late 30s. Time matters more, which is why the six-month rule exists.
2. **Why should I see a specialist after 6 months if I am over 35?**
         Time matters more as fertility declines with age. Earlier evaluation can find treatable problems sooner and allows more treatment options while egg reserve is still adequate. Because each month has a smaller chance and waiting a full year loses time that matters at this age. A basic evaluation quickly shows whether anything needs correcting before more trying.
3. **Does a normal AMH mean my fertility is fine after 35?**
         A normal AMH suggests good egg quantity for your age, but it does not measure egg quality. Age remains the most important factor for egg quality. Your doctor will consider all results together. Not by itself. AMH counts eggs, not their quality, which declines with age regardless. A normal AMH at 38 is reassuring but does not reset the clock on quality or time.
4. **Does miscarriage risk increase after 35?**
         Yes. The risk of miscarriage rises with age, mainly due to more chromosomal changes in eggs. Good antenatal care and early monitoring can help, and many pregnancies after 35 are healthy. Yes, because chromosome errors rise with egg age. It climbs gradually through the late 30s and more steeply after 40, which is part of why acting sooner is advised rather than waiting.
5. **Should I consider IVF straight away after 35?**
         Not necessarily. Many women conceive naturally or with simpler treatments. IVF may be recommended sooner if there are other factors like low egg reserve, blocked tubes or male factor problems. Not automatically. If tests look good, a timed natural or IUI trial may come first; IVF is favoured when time, reserve or diagnosis argues for faster results. The plan follows the workup.
6. **Can lifestyle changes improve fertility after 35?**
         Healthy habits support overall fertility and pregnancy health, but they cannot reverse age-related changes in eggs. Stopping smoking, keeping a healthy weight and managing health conditions are still worthwhile. They support the odds but cannot reverse age. Stopping smoking, limiting alcohol, healthy weight and folic acid help, but the biggest lever after 35 is simply not losing more time.
### Sources and further reading

- [ACOG: Having a baby after age 35](https://www.acog.org/womens-health/faqs/having-a-baby-after-age-35-how-aging-affects-fertility-and-pregnancy)
- [NHS: Infertility](https://www.nhs.uk/conditions/infertility/)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 60 · Egg Quality After 35

```yaml
title: "Egg Quality After 35: What You Can and Cannot Change"
description: "Egg quality declines with age, and no supplement can fully reverse that. Learn what egg quality means, which habits support it and which marketing claims."
url: /blog/egg-quality-after-35/
lastReviewed: "2026-10-20"
category: "Fertility After 35"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-20"
dateModified: "2026-10-20"
badge: ovarian-reserve
readingTime: 4
cluster: "Fertility After 35"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Age-related fertility decline", alternateName: ["Fertility after 35"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /treatments/egg-freezing/]
posts: [/blog/fertility-after-35-when-to-seek-help/, /blog/egg-freezing-fertility-preservation/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/, /blog/pregnancy-after-40-fertility-risks-options/]
```

H1: Egg Quality After 35: What You Can and Cannot Change

> **Quick answer:** Age is the main factor in egg quality, and no proven treatment can turn back that clock. What you can influence includes smoking, alcohol, weight, blood sugar control, thyroid health and some environmental exposures. These changes support overall fertility. If egg quality is a concern, a fertility specialist can discuss options such as IVF, embryo testing or egg freezing.

Egg quality refers to an egg's ability to be fertilised and develop into a healthy embryo with the right number of chromosomes. It declines naturally with age, especially after 35, and this change cannot be fully reversed. However, healthy habits can support the eggs you have, and avoiding harmful exposures helps protect them. Be cautious about products promising to "boost" egg quality.

This article is part of our [fertility after 35](/blog/fertility-after-thirty-five-egg-quality-age-treatment/) guide.

### What is egg quality?

A good-quality egg has healthy chromosomes and enough energy to support fertilisation and early development. With age, more eggs develop chromosomal errors. These errors are a main reason for lower pregnancy rates and higher miscarriage risk after 35.

### Can egg quality be tested?

There is no direct test for egg quality before an egg is collected. AMH and antral follicle count show egg quantity, not quality. During IVF, embryo development and genetic testing of embryos give some insight into quality.

### What cannot be changed?
- The natural, age-related decline in egg quality
- The total number of eggs you were born with
- Genetic factors that affect ovarian ageing

### What can be supported?

## Stop smoking

Smoking speeds up egg loss and harms egg quality. Quitting is one of the most useful steps.

## Limit alcohol

Heavy alcohol use may affect fertility. Reducing or avoiding it while trying to conceive is wise.

## Healthy weight

Both obesity and very low body weight can affect hormones and ovulation.

## Blood sugar and thyroid control

Managing diabetes, insulin resistance and thyroid problems supports a healthier hormonal environment.

## Balanced diet

A diet rich in vegetables, fruits, whole grains, legumes, nuts and healthy fats supports general health.

## Sleep and stress

Regular sleep and stress management support overall well-being.

## Avoid harmful exposures

Limit exposure to tobacco smoke, some industrial chemicals and unnecessary medicines.

### What about supplements?

Folic acid is recommended for everyone trying to conceive. Some supplements, such as CoQ10, vitamin D or DHEA, are studied for egg quality, but evidence is limited or mixed. They should be used only after discussing with your doctor, and none can reverse age-related changes.

### When should you seek help?

If you are 35 or older and have tried for 6 months, or 40 or older at any stage, see a specialist. Options like IVF, genetic testing of embryos or egg freezing may be discussed based on your goals.

### Key Takeaways
- Egg quality declines with age and cannot be reversed.
- AMH reflects quantity, not quality.
- Quitting smoking is one of the most helpful steps.
- Supplements have limited evidence.
- Early evaluation gives more choices.

### Final Thoughts

Understanding egg quality helps you focus on what truly matters and avoid costly myths. Small, steady habits and timely advice make a real difference. For honest guidance on your fertility options, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Can I improve my egg quality after 35?**
   You cannot reverse age-related decline, but you can support overall egg health by quitting smoking, limiting alcohol, keeping a healthy weight and managing health conditions. These steps help fertility in general.
2. **Is there a test for egg quality?**
   There is no direct test before eggs are collected. AMH and antral follicle count measure egg numbers. During IVF, embryo development and genetic testing give more information about egg quality.
3. **Do supplements like CoQ10 improve egg quality?**
         Some studies suggest a possible benefit, but evidence is limited. CoQ10 is not a proven cure. Speak with your doctor before taking any supplement, especially during fertility treatment. Evidence is limited and inconsistent. CoQ10 is generally safe and some clinics suggest it, but it cannot undo the effect of age. Spend effort on what is proven before supplements.
4. **Does good AMH mean good egg quality?**
         No. AMH shows egg quantity, not quality. A woman can have a normal AMH and still have age-related changes in egg quality. Age is the strongest predictor of egg quality. Not necessarily. AMH counts how many follicles remain, not how healthy the eggs are. A woman of 40 can have a normal AMH and still poorer quality than a woman of 28 with low AMH.
5. **Can diet improve egg quality?**
         A balanced diet supports overall health and fertility, but no single food has been proven to improve egg quality. Focus on whole foods, vegetables, protein and healthy fats rather than special fertility diets. A balanced diet supports overall reproductive health, but no diet has been shown to reverse age-related egg change. What helps most is acting promptly rather than searching for a perfect regimen.
6. **Should I freeze my eggs to protect egg quality?**
         Egg freezing preserves eggs at their current quality, which may help if you plan to delay pregnancy. It works best at younger ages. A specialist can discuss whether it suits your plans. Freezing preserves the age the eggs are now, so it is most useful if done earlier rather than later. At 35-plus it is worth an honest discussion about realistic numbers and chances.
### Sources and further reading

- [ACOG: Having a baby after age 35](https://www.acog.org/womens-health/faqs/having-a-baby-after-age-35-how-aging-affects-fertility-and-pregnancy)
- [NHS: Infertility](https://www.nhs.uk/conditions/infertility/)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 61 · Pregnancy After 40

```yaml
title: "Pregnancy After 40: Fertility, Risks and Options"
description: "Pregnancy after 40 is possible, but fertility is lower and some risks are higher. Learn what changes, which checks matter and the treatment options that."
url: /blog/pregnancy-after-40-fertility-risks-options/
lastReviewed: "2026-10-21"
category: "Fertility After 35"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-21"
dateModified: "2026-10-21"
badge: ovarian-reserve
readingTime: 4
cluster: "Fertility After 35"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Age-related fertility decline", alternateName: ["Fertility after 35"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /treatments/egg-freezing/]
posts: [/blog/fertility-after-35-when-to-seek-help/, /blog/egg-quality-after-35/, /blog/ivf-after-35-when-to-consider/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/, /blog/egg-freezing-fertility-preservation/]
```

H1: Pregnancy After 40: Fertility, Risks and Options

> **Quick answer:** After 40, egg quantity and quality fall more sharply, lowering the monthly chance of natural pregnancy and raising miscarriage and chromosomal risks. Pregnancy risks such as high blood pressure, gestational diabetes and caesarean delivery are also higher. Options may include natural conception with early evaluation, IVF with or without embryo testing and, for some women, donor eggs.

Pregnancy after 40 is possible, and many women have healthy babies at this age. However, fertility is lower, conception often takes longer and some pregnancy risks are higher. Seeing a fertility specialist early, planning pregnancy carefully and having close antenatal care can help women over 40 have the safest possible pregnancy.

This article is part of our [fertility after 35](/blog/fertility-after-thirty-five-egg-quality-age-treatment/) guide.

### How does fertility change after 40?
- Fewer eggs remain in the ovaries
- More eggs have chromosomal errors
- Monthly chance of conception is lower
- Miscarriage risk is higher
- Response to fertility medicines may be reduced

### What pregnancy risks are higher?
- Miscarriage
- Chromosomal conditions such as Down syndrome
- High blood pressure and pre-eclampsia
- Gestational diabetes
- Placenta problems
- Preterm birth and low birth weight
- Caesarean delivery
- Twin pregnancy, especially after fertility treatment

Higher risk does not mean these problems will happen. It means closer monitoring is helpful.

### When should you seek help?

Women over 40 are often advised to see a fertility specialist when they start trying or within a few months. Early evaluation gives the most options.

### What should be checked before pregnancy?
- Egg reserve with AMH and antral follicle count
- Thyroid, blood sugar and blood pressure
- Pelvic ultrasound for fibroids or polyps
- Partner's semen analysis
- Review of existing medical conditions and medicines
- Folic acid supplementation

### What treatment options may be considered?

## Natural conception with monitoring

Some women conceive naturally, especially in the early forties with good egg reserve.

## IUI

May be offered in selected women, though IVF is often discussed sooner at this age.

## IVF

IVF allows embryos to be created and assessed. Outcomes depend strongly on age and egg reserve.

## Genetic testing of embryos (PGT-A)

May be discussed to select embryos with the expected number of chromosomes. It has benefits and limitations that your specialist will explain.

## Donor eggs

For some women, using eggs from a younger donor offers a higher chance of pregnancy. This is a personal decision, with legal and counselling support.

### Antenatal care after 40

Expect closer monitoring, including early scans, screening for chromosomal conditions, blood pressure and sugar checks and growth scans later in pregnancy.

### Key Takeaways
- Pregnancy after 40 is possible but less likely each month.
- Miscarriage and chromosomal risks are higher.
- Seek specialist advice early.
- IVF, embryo testing and donor eggs may be options.
- Close antenatal care improves safety.

### Final Thoughts

Becoming a mother after 40 is a real possibility for many women, with the right planning and support. Honest information helps you make choices that feel right for you. For a personalised plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Can I get pregnant naturally after 40?**
         Yes, some women do, especially in the early forties with good egg reserve and regular ovulation. The chance each month is lower than at younger ages, so early specialist advice is recommended. Yes, though the monthly chance is much lower and miscarriage risk higher. If you want to try, do so promptly with preconception checks in place rather than a long unmonitored wait.
2. **Is pregnancy after 40 safe?**
         Many women have healthy pregnancies after 40. Risks such as high blood pressure, diabetes and miscarriage are higher, so close antenatal care and early screening are important. Your obstetrician will plan monitoring. Usually, with closer monitoring. Risks of diabetes, blood pressure problems, chromosome conditions and complications rise with age, which is why early antenatal care and screening matter more.
3. **Is IVF effective after 40?**
         IVF can help some women over 40, but outcomes depend strongly on age and egg reserve. Your specialist will explain realistic expectations based on your tests rather than general figures. It can be, though success per cycle falls with egg age. Options like PGT-A, embryo banking or, discussed honestly, donor eggs come into the picture depending on reserve and priorities.
4. **What is PGT-A and should I consider it?**
         PGT-A tests embryos for chromosome numbers before transfer. It may help select embryos in some women over 40, but it has limitations and costs. Discuss the benefits and drawbacks with your specialist. A chromosome screen of embryos before transfer, which is more relevant after 40 because a larger share of embryos carry errors. Whether it helps depends on how many embryos you get.
5. **When are donor eggs considered?**
   Donor eggs may be discussed when egg reserve is very low, previous IVF cycles have not worked, or age significantly reduces the chance of success. Counselling helps couples make this personal decision.
6. **What tests should I have before trying after 40?**
         Common checks include AMH, thyroid, blood sugar, blood pressure, a pelvic scan and the partner's semen analysis. Starting folic acid and reviewing medicines are also important. AMH, an antral follicle scan, TSH and general health checks for you, plus a semen analysis for your partner. These quickly show whether prompt treatment or a monitored natural trial fits.
### Sources and further reading

- [ACOG: Having a baby after age 35](https://www.acog.org/womens-health/faqs/having-a-baby-after-age-35-how-aging-affects-fertility-and-pregnancy)
- [NHS: Infertility](https://www.nhs.uk/conditions/infertility/)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 62 · Egg Freezing

```yaml
title: "Egg Freezing: Who Should Consider It and When to Act"
description: "Egg freezing lets women store eggs for future use. Learn who may benefit, how the process works, why age at freezing matters and what it can and cannot."
url: /blog/egg-freezing-fertility-preservation/
lastReviewed: "2026-10-21"
category: "Fertility After 35"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-21"
dateModified: "2026-10-21"
badge: egg-freezing
readingTime: 4
cluster: "Fertility After 35"
pillar: false
keywords: []
about: {type: MedicalProcedure, name: "Oocyte cryopreservation", alternateName: ["Egg freezing"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /treatments/egg-freezing/]
posts: [/blog/egg-quality-after-35/, /blog/fertility-after-35-when-to-seek-help/, /blog/low-amh-at-30-35-40-age/, /blog/pregnancy-after-40-fertility-risks-options/, /blog/low-amh-ovarian-reserve-fertility/]
```

H1: Egg Freezing: Who Should Consider It?

> **Quick answer:** Egg freezing may be worth discussing if you plan to delay pregnancy for personal, career or relationship reasons, are about to have cancer treatment or surgery that may affect your ovaries, have low AMH for your age, endometriosis affecting the ovaries, or a family history of early menopause. Outcomes depend mostly on your age at freezing and the number of eggs stored.

Egg freezing, also called oocyte cryopreservation, is a way to store eggs for possible use in the future. It may be considered by women who want to delay pregnancy, those facing medical treatments that can harm fertility, and women with conditions that may reduce egg reserve early. The younger you are when eggs are frozen, the better their quality is likely to be. Egg freezing improves options but does not guarantee a future pregnancy.

This article is part of our [fertility after 35](/blog/fertility-after-thirty-five-egg-quality-age-treatment/) guide.

### Who may consider egg freezing?

## Planned or social reasons

Women who are not ready for pregnancy but want to keep future options open.

## Medical reasons
- Before chemotherapy or radiation
- Before ovarian surgery
- Endometriosis with ovarian cysts
- Autoimmune conditions needing treatments that affect the ovaries
- Genetic conditions linked with early ovarian failure

## Low egg reserve

Women with low AMH for their age may consider freezing sooner rather than later.

### Why does age at freezing matter?

Frozen eggs keep the quality they had at the time of freezing. Eggs frozen in the early thirties generally have better quality than those frozen in the late thirties or forties. Women who freeze eggs at younger ages often need fewer eggs for a similar chance of pregnancy later.

### How does the process work?

## Evaluation

AMH, antral follicle count and other tests help predict response.

## Ovarian stimulation

Hormone injections for about 10 to 14 days help several eggs grow. Ultrasound and blood tests monitor progress.

## Egg collection

Eggs are collected under sedation using a thin needle guided by ultrasound. The procedure takes about 15 to 30 minutes.

## Freezing

Mature eggs are frozen using vitrification, a fast-freezing method that improves survival after thawing.

### What happens when you want to use them?

Eggs are thawed, fertilised using ICSI, and resulting embryos are transferred to the uterus. Not every egg survives thawing, fertilises or becomes an embryo, which is why several eggs are usually stored.

### What are the limitations?
- It does not guarantee a future baby
- More than one cycle may be needed to store enough eggs
- Results drop when eggs are frozen at older ages
- There are costs for freezing and yearly storage
- Pregnancy at an older age still carries higher risks

### Key Takeaways
- Egg freezing stores eggs for possible future use.
- Age at freezing is the biggest factor in outcomes.
- It may help both planned and medical situations.
- Several eggs are usually needed.
- It improves options but is not a guarantee.

### Final Thoughts

Egg freezing can give women more control over their reproductive future when chosen with clear information. The best time to discuss it is before age becomes a major factor. For a personalised fertility preservation plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **What is the best age to freeze eggs?**
         Freezing at a younger age, often in the late twenties or early thirties, generally gives better outcomes because egg quality is higher. Women in their mid to late thirties can still benefit, but may need more eggs. Earlier is better, ideally in the early to mid 30s when more eggs are frozen and they are healthier. Freezing later still works but typically needs more cycles for the same chance.
2. **How many eggs should I freeze?**
   It depends on your age and goals. Younger women usually need fewer eggs for a similar chance of pregnancy. Your specialist will suggest a target based on your age and test results.
3. **Is egg freezing painful?**
         The injections can cause mild discomfort and bloating. Egg collection is done under sedation, so you should not feel pain during the procedure. Mild cramps may occur for a day or two afterward. The process mirrors the first half of IVF: hormone injections, scans and egg collection under sedation. Injections sting a little; the collection itself is not felt. Recovery is a day or two.
4. **How long can eggs stay frozen?**
         With vitrification, eggs can remain frozen for many years without losing quality. Storage limits may be governed by local regulations and clinic policies, so ask your clinic. Many years. Survival rates on thawing are high with modern vitrification. Indian law and clinic policy set storage and consent rules, which your clinic explains when you freeze.
5. **Does egg freezing affect my future fertility?**
         Egg freezing does not use up your remaining eggs faster or cause early menopause. The medicines help eggs that would have been lost that month to mature. No. It uses eggs that would have been lost that month anyway, so it does not reduce your reserve or your chances of conceiving naturally later. Most women conceive without ever using them.
6. **Can I freeze embryos instead of eggs?**
         Yes, if you have a partner or use donor sperm. Embryo freezing is an established option. Egg freezing offers more flexibility if you do not yet have a partner. Your specialist can explain both options. If you have a partner, embryos survive freezing even better than eggs and give clearer odds later. The choice depends on your situation, since embryos carry shared consent considerations.
### Sources and further reading

- [ACOG: Having a baby after age 35](https://www.acog.org/womens-health/faqs/having-a-baby-after-age-35-how-aging-affects-fertility-and-pregnancy)
- [NHS: Infertility](https://www.nhs.uk/conditions/infertility/)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

## Post 63 · Trying to Conceive After 35

```yaml
title: "Trying to Conceive After 35: When to Consider IVF"
description: "After 35, the right time for IVF depends on age, egg reserve, diagnosis and past treatment. Learn when simpler options may be tried first and when IVF."
url: /blog/ivf-after-35-when-to-consider/
lastReviewed: "2026-10-22"
category: "Fertility After 35"
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "2026-10-22"
dateModified: "2026-10-22"
badge: ovarian-reserve
readingTime: 4
cluster: "Fertility After 35"
pillar: false
keywords: []
about: {type: MedicalCondition, name: "Age-related fertility decline", alternateName: ["Fertility after 35"]}
related: [/conditions/thin-endometrium-and-low-ovarian-reserve/, /treatments/egg-freezing/]
posts: [/blog/fertility-after-35-when-to-seek-help/, /blog/iui-vs-ivf-which-fertility-treatment/, /blog/how-many-iui-cycles-before-ivf/, /blog/low-amh-and-ivf-treatment/, /blog/genetic-testing-in-ivf-pgt-a-is-it-worth-it/]
```

H1: Trying to Conceive After 35: When to Consider IVF

> **Quick answer:** For women 35 to 39 with good egg reserve, open tubes and normal sperm, a short trial of ovulation support or IUI may be reasonable. IVF may be advised sooner if egg reserve is low, tubes are blocked, there is significant male factor, moderate to severe endometriosis, recurrent miscarriage or if simpler treatments have not worked. After 40, IVF is often discussed early.

After 35, IVF may be considered sooner than for younger women, but it is not always the first step. The decision depends on your age, egg reserve, the cause of infertility, your partner's semen analysis and how long you have been trying. Many women over 35 conceive naturally or with simpler treatment, while others benefit from moving to IVF early.

This article is part of our [fertility after 35](/blog/fertility-after-thirty-five-egg-quality-age-treatment/) guide.

### How does age change the plan?

As age increases, the monthly chance of pregnancy decreases and time becomes more valuable. Specialists often shorten the time spent on simpler treatments to avoid losing months when egg reserve is falling.

### When might simpler treatment be tried first?
- Age 35 to 37 with normal egg reserve
- Open fallopian tubes
- Normal or mildly reduced sperm parameters
- Ovulation problems such as PCOS
- Mild endometriosis
- Shorter duration of trying

Options may include ovulation induction with monitoring and a limited number of IUI cycles.

### When might IVF be considered sooner?
- Low AMH or low antral follicle count
- Blocked or damaged tubes
- Severe male factor infertility
- Moderate to severe endometriosis
- Unexplained infertility after several months of treatment
- Previous unsuccessful IUI cycles
- Age 40 or above
- Desire for embryo genetic testing in selected cases

### What does IVF offer after 35?
- Several eggs can be collected in one cycle
- Fertilisation is checked in the lab
- Embryos can be assessed before transfer
- Extra embryos can be frozen for future use
- Genetic testing of embryos may be discussed

IVF outcomes still depend strongly on age and egg reserve, so your specialist will give realistic expectations based on your results.

### How should you prepare?
- Complete basic fertility tests for both partners
- Take folic acid
- Manage weight, thyroid and blood sugar
- Stop smoking and limit alcohol
- Discuss costs, timelines and emotional support

### Questions to ask your specialist
- What is my egg reserve for my age?
- Is IUI reasonable for us, and for how many cycles?
- What would make you recommend IVF now?
- Would embryo testing help in our case?
- Should we consider freezing embryos for the future?

### Key Takeaways
- IVF is not always the first step after 35.
- Age, egg reserve and diagnosis guide timing.
- Simpler options may be tried briefly in some couples.
- Low reserve or tubal damage often lead to earlier IVF.
- After 40, IVF is often discussed early.

### Final Thoughts

There is no single right time for IVF after 35, only the right time for you. A clear evaluation helps balance trying simpler steps with not losing valuable time. For a personalised treatment plan, you can consult Dr. Swati Shree, a fertility specialist at Eve Women & Fertility Clinic in Bengaluru.

### FAQs

1. **Should I go straight to IVF at 35?**
         Not always. If your egg reserve is good, tubes are open and sperm is normal, simpler treatments may be tried for a short time. Your specialist will consider all factors before advising IVF. Not automatically. If tests look good, a short trial of natural attempts or IUI may come first; IVF is favoured when time, reserve or the diagnosis argues for faster results. The workup decides.
2. **How many IUI cycles should I try after 35?**
         Often fewer than younger women, because time is important. Many specialists suggest a limited number of well-timed IUI cycles before discussing IVF. The exact number depends on your results. Fewer than a younger woman might, since time matters more. Many specialists suggest two to three at most before reassessing, or skipping IUI entirely when reserve or sperm factors argue for IVF.
3. **Is IVF more successful than IUI after 35?**
         IVF usually offers a higher chance per cycle than IUI, especially when other factors are present. However, it is more intensive and costly. The best option depends on your diagnosis and age. Per cycle, yes, which is exactly why it is favoured when time is short. The trade-off is greater cost and intensity, so the decision weighs your age, diagnosis and how long you have tried.
4. **Does low AMH mean I need IVF immediately?**
         Low AMH means fewer eggs remain, so specialists often suggest moving to treatment sooner. It does not always mean IVF is the only option. Your age and other results guide the choice. Not always, but it argues against a long unmonitored wait. If reserve is low at 35-plus, evaluation should be prompt and IVF often enters the plan sooner than it would for a younger woman.
5. **Can I freeze embryos during IVF for later?**
         Yes. Extra good-quality embryos can often be frozen for future use. This may help couples plan a second child or another attempt without repeating stimulation. Yes, spare good embryos are routinely frozen for a later transfer or a sibling. Freezing adds flexibility, and outcomes with modern vitrification are as good as fresh transfer.
6. **Is genetic testing of embryos needed after 35?**
         It is not essential for everyone. PGT-A may be discussed for women over 35, especially with recurrent miscarriage or failed IVF. Your specialist will explain the benefits and limitations. Not required, but more relevant, since a larger share of embryos carry chromosome errors. Whether PGT-A helps depends on how many embryos you produce and your history.
### Sources and further reading

- [ACOG: Having a baby after age 35](https://www.acog.org/womens-health/faqs/having-a-baby-after-age-35-how-aging-affects-fertility-and-pregnancy)
- [NHS: Infertility](https://www.nhs.uk/conditions/infertility/)
- [WHO: Infertility fact sheet](https://www.who.int/news-room/fact-sheets/detail/infertility)

Reviewer box: use global text.

---

# Part 7 · Review guide for Dr. Swati and open confirmations

## How to review

1. Read each page as a patient would. Mark anything that is medically inaccurate, does not match how you practise at EVE, or that you would not say to a patient.
2. Write corrections next to the line (comment or a short note with the page number). You do not need to rewrite whole paragraphs.
3. Answer the `[CONFIRM]` items below. Each one is a yellow chip on the preview site and blocks launch until answered.
4. When done, reply "Approved with corrections" or "Approved as written". Your approval date becomes "Last reviewed" on every medical page.

What we deliberately left out (compliance, IMC Regulations 2002, DMR Act 1954, ART Act 2021, PCPNDT Act 1994):
- Patient stories, patient quotes and the Patient Stories page (testimonials are not allowed)
- "World-class IVF", "successful, healthy pregnancy", pregnancy-rate or success-rate figures
- Named hospital partnerships implying referral arrangements (credentials shown on the doctor profile only)
- Drug names, doses, brand names and machine models
- Prices and packages
- Any wording on sex of the baby
- Donor gametes, surrogacy and embryo testing offers

## Open confirmations (57 items)

### Profile and credentials
1. ~~Years of experience~~ RESOLVED: 16 years
2. ~~Languages spoken~~ RESOLVED: English, Hindi and Kannada
3. ~~KMC registration number~~ RESOLVED: DLH20090000353KTK
4. ~~AIIMS campus, role and years~~ RESOLVED: Junior Resident, Department of Blood Bank, AIIMS New Delhi, Jul-Sep 2011
5. ~~Years for MBBS, DNB, fellowship, MRCOG~~ RESOLVED: 2008, 2017, 2021, 2023
5a. ~~Years for each consultant role~~ RESOLVED (CV): Garbhagudi IVF Centre Mar 2021 - Jan 2022; Apollo Fertility Feb 2022 - Oct 2024; Motherhood Fertility and IVF Centre Nov 2024 onwards. Casualty Medical Officer, Deen Dayal Hospital, Delhi, Jan 2013 - Mar 2014 added.
6. Visiting consultant arrangements with Apollo Fertility and Motherhood Fertility: claim removed from site pending doctor's confirmation of exact wording
7. ~~Any papers, FOGSI, ISAR, IFS or other memberships~~ RESOLVED (CV): AICOG 2017 free paper + SOMI Nov 2018 poster; member of IMA, FOGSI, SOMI and ISAR
8. Year of the 16th GCU International Women's Day Award
9. Quoted "How Dr. Swati works" wording approved
10. Personal pregnancy story approved in writing, and the wording used on About

### Clinic and visits
11. OPD hours, phone hours, Sunday and holiday timings
12. WhatsApp number
13. Correct clinic email (the current address contains "cliic")
14. Landmark, parking, lift or stairs, and wheelchair access
15. Google Maps pin and Google Business Profile access
16. Distance and time from the airport, major railway stations and the nearest metro station
17. Typical first-consultation duration
18. Walk-in policy
19. Female attendant available on request
20. Payment modes accepted
21. Fee display and estimate policy
22. Video or tele-consultation offered: yes or no
23. Catchment areas for the footer and schema (Gunjur, Varthur, Whitefield, Sarjapur Road, Bellandur, Marathahalli, others)
24. Social media links
25. Single clinic reply time (the site says 24 hours)

### ART and procedures
26. National ART and Surrogacy Registry registration number, and ART level
27. Exact wording about IVF laboratory procedures at associated ART centres
28. Which procedures are done on site: HSG, endometrial biopsy, IUI, hysteroscopy
29. Where semen is collected and analysed, and where sperm preparation for IUI is done
30. Who performs TESA and PESA, and where
31. Where eggs and embryos are frozen and stored
32. Eligibility, storage period and use-after-age wording for egg freezing under the ART Act
33. ART eligibility wording (married couples, widowed or divorced women, age limits) approved
34. Donor gametes, surrogacy: confirm not offered at launch
35. Number of IUI cycles typically advised before reviewing the plan
36. Whether IUD insertion and removal, implants and injections are offered
37. Whether colposcopy is offered
38. Whether HPV vaccination is given at EVE or by referral
39. Turnaround times for blood tests, pathology reports and Pap smear results
40. Typical sample collection instructions (semen abstinence, timing)

### Medical wording
41. Screening start age and interval for cervical screening
42. Statement on genital tuberculosis and infertility
43. Reproductive immunology evidence stance approved
44. Thyroid TSH target wording (below about 2.5 mIU/L)
45. Letrozole as first-line ovulation induction in PCOS mentioned in the PCOS blog post: approved
46. Unexplained infertility share (about one in four to one in three couples) approved
47. "Female attendant" and chaperone policy
48. Any additional red-flag symptoms for emergency callouts

### Legal
49. Legal entity name and address for the footer and Terms
50. Privacy contact and grievance officer
51. Retention periods for records, enquiries and ART records
52. Refund of mistaken payments within 7 working days
53. Jurisdiction: courts at Bangalore
54. Charter of Patients' Rights displayed at reception
55. Cancellation and no-show fee policy
56. Cancelled or incomplete treatment cycle refund policy
57. Accessibility audit done or not
58. Independent legal review of all 7 legal pages and the ART wording
59. Blog launch dates and the order of the first three posts
60. Doctor approval to publish the blog posts under her name

When all 60 are answered, the next step is the preview build for review, then the launch check.
