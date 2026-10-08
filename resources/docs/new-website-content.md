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

EVE Women and Fertility Clinic is a fertility and women's health clinic in Gunjur, Bengaluru, founded in December 2024 by Dr. Swati Shree, a reproductive medicine specialist with an MRCOG from the Royal College of Obstetricians and Gynaecologists (UK). Every patient starts with a complete evaluation and a long conversation. IUI, IVF, egg freezing and other treatments are explained clearly and used only when they are the right step for you.

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
2. **Years of hospital experience.** Dr. Swati has worked as a consultant in busy fertility centres in Bangalore, and trained at AIIMS and Sakra World Hospital. `[CONFIRM: wording of past roles]`
3. **A full evaluation first.** We look at ovulation, the tubes, the uterus, the ovarian reserve and the male partner before recommending any treatment.
4. **Every option explained.** Natural conception support, IUI, IVF and egg freezing are laid out side by side, with the honest pros and cons of each.
5. **One doctor throughout.** Dr. Swati sees every patient herself and follows you over time, so you do not repeat your story at each visit.
6. **A founder-led clinic.** EVE was started by Dr. Swati Shree in December 2024 to offer fertility care that feels personal.

### 02 / About EVE

H2: A founder-led clinic in *Gunjur*

Photo labels (placed off faces): "Caring for East Bangalore since December 2024" · `[CONFIRM: opening hours line]`

Paragraph: Dr. Swati Shree opened EVE Women and Fertility Clinic in December 2024 at LG Complex Towers, Gunjur, in East Bangalore. She trained in obstetrics and gynaecology, completed a fellowship in reproductive medicine at KJK Hospital in Trivandrum, and earned the MRCOG from the Royal College of Obstetricians and Gynaecologists in the UK. After years as a consultant in busy fertility centres, she built EVE around one idea: patients deserve time, plain explanations and a plan that respects their choices.

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
Hours: `[CONFIRM: OPD hours]`
Buttons: [Get directions] [Plan your visit]

### 05 / Meet your doctor

H2: Meet *Dr. Swati Shree*

Card text: Reproductive medicine specialist and founder of EVE Women and Fertility Clinic.
Qualifications line: MBBS · DNB (Obstetrics and Gynaecology) · Fellowship in Reproductive Medicine, KJK Hospital, Trivandrum · MRCOG (UK)
Experience: Trained at AIIMS, Kanke General Hospital and Research Centre, and Sakra World Hospital. Former consultant at Garbhagudi IVF Centre, Apollo Fertility and Motherhood Fertility. Recipient, 16th GCU International Women's Day Award.
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
- **Hours** `[CONFIRM]`

### CTA band

Use the global CTA band from `site-plan.md`, section 6.

---

## Page 2 · About EVE

```yaml
title: "About EVE Women and Fertility Clinic | Gunjur, Bangalore"
description: "How EVE began, how Dr. Swati Shree works, and what to expect: a founder-led fertility and women's health clinic in Gunjur, East Bangalore, since 2024."
url: /about/
reviewer: dr-swati-shree
schema: [AboutPage]
entities: [Gunjur, Bengaluru, MRCOG, ART Act 2021, KJK Hospital]
```

H1: About EVE Women and *Fertility* Clinic

Intro (answer-first): EVE Women and Fertility Clinic is a founder-led fertility and women's health clinic in Gunjur, Bengaluru (Bangalore), started in December 2024 by Dr. Swati Shree. It exists to offer fertility care that is unhurried, honest and clear, with a full evaluation first and every option explained.

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

Dr. Swati Shree holds an MBBS, a DNB in Obstetrics and Gynaecology, a fellowship in reproductive medicine from KJK Hospital in Trivandrum, and the MRCOG from the Royal College of Obstetricians and Gynaecologists (UK). She trained at AIIMS, Kanke General Hospital and Research Centre, and Sakra World Hospital, and has worked as a consultant at Garbhagudi IVF Centre, Apollo Fertility and Motherhood Fertility. She also teaches: she has taken MRCOG Part 1 and Part 2 preparation sessions with StudyMedic and spoken at a one-day Clinical Embryology workshop at Garden City University. She received the 16th GCU International Women's Day Award.

> **Dr. Swati's story.** `[CONFIRM: Dr. Swati approves this text in writing before publishing]` Dr. Swati's own path to motherhood was difficult. Her son was born at 30 weeks and spent 28 days in the neonatal intensive care unit. He is now 11 years old. That experience taught her what anxiety and waiting feel like from the patient's side, and it shapes how she speaks to every couple. She does not share her son's name or photograph.

### The clinic

EVE is on the 1st floor of LG Complex Towers in Gunjur, East Bangalore. It is an outpatient clinic: consultations, scans, tests and procedures such as IUI are done here. `[CONFIRM: HSG, biopsy and other procedures done on site or at a partner centre]` IVF laboratory procedures are carried out at associated, registered ART centres. `[CONFIRM: wording and registration]`

### Facts at a glance

- **Name:** EVE Women and Fertility Clinic, by Dr Swati Shree
- **Founded:** December 2024
- **Location:** 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087, Karnataka
- **Doctor:** Dr. Swati Shree, MBBS, DNB (OBG), MRCOG (UK), fellowship in reproductive medicine
- **Experience:** 16 years in practice
- **Phone:** 72049 21212 · 72049 21516
- **Hours:** `[CONFIRM]`
- **Registration:** Karnataka Medical Council Reg. No. DLH20090000353KTK · National ART and Surrogacy Registry no. `[CONFIRM]`
- **Areas served:** Gunjur, Varthur, Whitefield, Sarjapur Road, Bellandur and the rest of Bangalore; patients travel from other cities `[CONFIRM: catchment]`

### FAQs

1. **Who runs EVE Women and Fertility Clinic?**
   EVE was founded in December 2024 by Dr. Swati Shree, a reproductive medicine specialist with an MRCOG (UK), a DNB in obstetrics and gynaecology and a fellowship in reproductive medicine. She personally leads the clinic and sees every patient herself.
2. **Where is EVE located?**
   EVE is on the 1st floor of LG Complex Towers in Gunjur, Bangalore 560087, in East Bengaluru. It is close to Varthur, Balagere, Whitefield and Sarjapur Road. `[CONFIRM: landmark]` See Plan your visit for directions and parking.
3. **Is EVE a hospital?**
   No. EVE is an outpatient clinic. You do not stay overnight. Consultations, scans, tests and clinic procedures happen here. For procedures that need a hospital or a registered ART laboratory, Dr. Swati explains where it will be done before you decide.
4. **Does EVE treat only fertility problems?**
   No. EVE also looks after PCOS, endometriosis, menstrual problems, fibroids, thyroid issues linked to pregnancy, early pregnancy scans, cervical screening, contraception counselling and menopause care. You do not need to be trying to conceive to see Dr. Swati.
5. **Do you accept patients from outside Bangalore?**
   Yes. Many couples travel for the first evaluation. We try to complete tests in as few visits as possible and plan follow-up with you. See Coming from outside Bangalore for a visit plan.
6. **How can I check that the clinic and doctor are registered?**
   Dr. Swati's registration is with the Karnataka Medical Council, number DLH20090000353KTK, and can be checked on the National Medical Commission's Indian Medical Register. The clinic's ART registration appears in the footer and on the Patient Rights page `[CONFIRM]`.

Reviewer note: this page is reviewed and approved by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 3 · Dr. Swati Shree

```yaml
title: "Dr. Swati Shree, MRCOG | Fertility Specialist Bangalore"
description: "Dr. Swati Shree: MBBS, DNB (OBG), MRCOG (UK), fellowship in reproductive medicine. Fertility and gynaecology specialist at EVE, Gunjur, Bangalore."
url: /dr-swati-shree/
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

Her training took her through some of India's well-known institutions, including AIIMS, Kanke General Hospital and Research Centre, and Sakra World Hospital in Bangalore. `[CONFIRM: AIIMS campus, role and years]` She has worked as a consultant at Garbhagudi IVF Centre, Apollo Fertility and Motherhood Fertility, and continues as a visiting consultant with Apollo Fertility and Motherhood Fertility `[CONFIRM: current arrangement and wording]`.

Alongside clinical work, Dr. Swati teaches. She has conducted MRCOG Part 1 and Part 2 preparation sessions with StudyMedic and has been a speaker at a one-day Clinical Embryology workshop at Garden City University. She received the 16th GCU International Women's Day Award.

She opened EVE in December 2024 to offer care built around time, honest evaluation and clear explanations.

### How Dr. Swati works

H2: How Dr. Swati *works*

1. **A full evaluation first.** "I do not believe in forcing a protocol. We look at both partners and find the reason, and then decide the next step together."
2. **Every option explained.** "You should leave the room understanding what your choices are, what each can and cannot do, and what it costs you in time and effort."
3. **Care that respects you.** "A fertility journey is personal. The decision is always yours, and I will support it."

Note for build: quotes are Dr. Swati's own approach, from the client documents, lightly edited for reading. `[CONFIRM: Dr. Swati approves the quoted wording.]`

### Education and training (timeline)

- `[CONFIRM: year]` · MBBS, `[CONFIRM: college]`
- `[CONFIRM: year]` · DNB, Obstetrics and Gynaecology `[CONFIRM: hospital]`
- `[CONFIRM: year]` · Training at AIIMS `[CONFIRM: campus and role]`
- `[CONFIRM: year]` · Kanke General Hospital and Research Centre, Ranchi
- `[CONFIRM: year]` · Sakra World Hospital, Bangalore
- `[CONFIRM: year]` · Fellowship in Reproductive Medicine, KJK Hospital, Trivandrum
- `[CONFIRM: year]` · MRCOG, Royal College of Obstetricians and Gynaecologists, UK

### Work experience

- Since December 2024 · Founder and consultant, EVE Women and Fertility Clinic, Gunjur, Bangalore
- `[CONFIRM: years]` · Consultant, Garbhagudi IVF Centre
- `[CONFIRM: years]` · Consultant, Apollo Fertility (visiting consultant `[CONFIRM]`)
- `[CONFIRM: years]` · Consultant, Motherhood Fertility (visiting consultant `[CONFIRM]`)

### Teaching, talks and award

- MRCOG Part 1 and Part 2 preparation sessions, StudyMedic
- Session at a one-day Clinical Embryology workshop, Garden City University
- 16th GCU International Women's Day Award, Garden City University `[CONFIRM: year]`

Publications and memberships: `[CONFIRM: any papers, FOGSI, ISAR, IFS or other society memberships]`

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
   Dr. Swati sees patients at EVE Women and Fertility Clinic, 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087. Call 72049 21212 or 72049 21516 to book. She also holds visiting consultant roles with associated fertility centres `[CONFIRM: wording]`.
5. **Do I see Dr. Swati herself at every visit?**
   Yes. EVE is a founder-led clinic, and Dr. Swati sees every patient herself. Scans and tests may be done by trained staff under her supervision, but the consultation, the plan and the decisions are hers and yours.
6. **How can I check Dr. Swati's registration?**
   Dr. Swati is registered with the Karnataka Medical Council, registration number DLH20090000353KTK. You can verify registered doctors through the National Medical Commission's Indian Medical Register, or by contacting the Karnataka Medical Council.

Reviewer note: this page is reviewed and approved by Dr. Swati Shree. Last reviewed `[date]`.

---
## Page 4 · All services

```yaml
title: "Fertility and Gynaecology Services in Bangalore | EVE"
description: "Fertility evaluation, follicular monitoring, HSG, male fertility testing, early pregnancy scans, cervical screening and more with Dr. Swati Shree, Gunjur."
url: /services/
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

Sources: ESHRE Guideline on Unexplained Infertility (2023); NICE Guideline CG156, Fertility problems: assessment and treatment; ASRM Practice Committee, Definition of infertility (2023); ART (Regulation) Act, 2021

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 8 · Plan your visit

```yaml
title: "Plan Your Visit | EVE Fertility Clinic, Gunjur Bangalore"
description: "Address, timings, directions, what to bring and how to prepare for your first consultation at EVE Women and Fertility Clinic, Gunjur, Bangalore."
url: /plan-your-visit/
schema: [WebPage, FAQPage]
```

H1: Plan your *visit*

Intro: EVE Women and Fertility Clinic is on the 1st floor of LG Complex Towers, Gunjur, Bangalore 560087. This page tells you when we are open, how to reach us, what to bring, and how to prepare.

### Timings

- **OPD hours:** `[CONFIRM]`
- **Phone and WhatsApp hours:** `[CONFIRM]`
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
- Preferred time: Morning · Afternoon · Evening `[CONFIRM: hours]`
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
- **Hours** `[CONFIRM]`
- Line: Coming from outside Bangalore? [Plan your visit]

Map: Show map (click to load; pin from `[CONFIRM: Google Maps share URL]`)

---

## Page 11 · FAQs

```yaml
title: "Fertility and Women's Health FAQs | EVE Bangalore"
description: "Answers to common questions on fertility tests, IUI, IVF, PCOS, miscarriage, egg freezing, booking, privacy and the ART Act, from EVE, Gunjur, Bangalore."
url: /faqs/
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
schema: [Blog, ItemList]
```

H1: Fertility and women's health *library*

Intro: Clear, doctor-reviewed articles to help you understand tests, conditions and treatments before you decide anything. Written for patients, reviewed by Dr. Swati Shree.

Filters: All · Getting started · Conditions · Treatments · Women's health

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
| Are you ovulating regularly? | Cycle history, follicle tracking, mid-luteal progesterone `[CONFIRM]`, thyroid and prolactin tests |
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 16 · Natural conception support

```yaml
title: "Natural Conception Support in Bangalore | EVE Clinic"
description: "Ovulation tracking, cycle mapping and preconception advice to help you conceive naturally, guided by Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /services/natural-conception-support/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 17 · Follicular monitoring

```yaml
title: "Follicular Monitoring in Bangalore | EVE, Gunjur"
description: "Follicular study with serial ultrasound to time ovulation and plan IUI or natural attempts, with Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /services/follicular-monitoring/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 18 · Tubal patency test (HSG)

```yaml
title: "HSG Test in Bangalore | Tubal Patency Test, EVE Clinic"
description: "HSG checks whether your fallopian tubes are open. What happens, how to prepare, risks and results, explained by Dr. Swati Shree, Gunjur, Bangalore."
url: /services/tubal-patency-test-hsg/
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

### Sources
- ASRM Practice Committee, Role of tubal surgery in the era of assisted reproductive technology
- NICE Guideline CG156: Fertility problems
- ESHRE Guideline: Unexplained infertility (2023)

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 19 · Male fertility evaluation

```yaml
title: "Male Fertility Test in Bangalore | Semen Analysis, EVE"
description: "Semen analysis, examination and counselling for male infertility with Dr. Swati Shree at EVE, Gunjur, Bangalore. What results mean and what can help."
url: /services/male-fertility-evaluation/
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
   The WHO 2021 manual gives a lower reference limit of 16 million sperm per millilitre, and 39 million in the whole sample. These are lower limits of normal in fertile men, not a pass mark. Dr. Swati reads your full report, including motility and shape.
2. **Can male infertility be treated?**
   Often, yes. Some causes can be treated directly, such as a varicocele or an infection. Lifestyle changes improve sperm in many men. If sperm numbers or motility stay low, IUI, IVF with ICSI or sperm retrieval can help. The right choice depends on your report.
3. **How do I give a semen sample?**
   After 2 to 7 days without ejaculation, collect the sample by masturbation into the clean container given, with clean hands. Do not use lubricants or condoms. Keep it at body temperature and deliver it promptly. We explain this when you book.
4. **What if the first semen report is abnormal?**
   Repeat the test after 2 to 3 months, because sperm production takes about three months and results vary. Dr. Swati also looks for a cause. A repeat avoids unnecessary worry or unnecessary treatment.
5. **Does age affect male fertility?**
   Sperm quality and DNA integrity decline slowly with age, and some risks rise for fathers over 40 to 45. This is a smaller effect than the age effect in women, and many men remain fertile into later life.
6. **Do tight underwear, mobile phones or hot baths cause infertility?**
   Evidence is limited and the effects are small. Smoking, heavy alcohol, obesity, anabolic steroids and untreated varicocele matter more. Avoiding heat is harmless but should not replace testing.

### Sources
- WHO laboratory manual for the examination and processing of human semen, 6th edition (2021)
- AUA/ASRM Guideline: Diagnosis and treatment of infertility in men (2020)
- ASRM Practice Committee, Diagnostic evaluation of the infertile male (2015)
- EAU Guidelines on Sexual and Reproductive Health `[CONFIRM: edition]`

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 20 · Contraceptive counselling

```yaml
title: "Contraceptive Counselling in Bangalore | EVE, Gunjur"
description: "Honest, judgment-free contraception advice with Dr. Swati Shree at EVE, Gunjur, Bangalore: pills, IUDs, implants, emergency contraception and more."
url: /services/contraceptive-counselling/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---
## Page 21 · Early pregnancy scan

```yaml
title: "Early Pregnancy Scan in Bangalore | EVE, Gunjur"
description: "Early pregnancy scan to confirm location, heartbeat and dates, with Dr. Swati Shree at EVE, Gunjur, Bangalore. What to expect and when to scan."
url: /services/early-pregnancy-scan/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 22 · Reproductive immunology

```yaml
title: "Reproductive Immunology in Bangalore | EVE, Gunjur"
description: "Immune factors in miscarriage and implantation failure, explained honestly by Dr. Swati Shree at EVE, Gunjur. What is tested, what helps, what is unproven."
url: /services/reproductive-immunology/
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
   APS is an autoimmune condition where antibodies raise the risk of blood clots and pregnancy loss. It is diagnosed by blood tests repeated at least 12 weeks apart. In pregnancy it is treated with blood-thinning medicine, which improves the chance of a healthy pregnancy.
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 23 · Cervical cancer screening and HPV vaccination

```yaml
title: "Pap Smear and HPV Vaccine in Bangalore | EVE, Gunjur"
description: "Cervical cancer screening (Pap smear, HPV test) and HPV vaccination advice with Dr. Swati Shree at EVE, Gunjur, Bangalore. Who, when and what to expect."
url: /services/cervical-cancer-screening-hpv-vaccination/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 24 · Endometrial biopsy

```yaml
title: "Endometrial Biopsy in Bangalore | EVE, Gunjur"
description: "Endometrial biopsy checks the uterine lining for abnormal bleeding, thickening or infection. What happens and what to expect, with Dr. Swati Shree, Gunjur."
url: /services/endometrial-biopsy/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 25 · Adolescent gynaecology

```yaml
title: "Adolescent Gynaecologist in Bangalore | EVE, Gunjur"
description: "A gentle first gynaecology visit for teenage girls: periods, PCOS, pain, HPV vaccine and questions, with Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /services/adolescent-gynaecology/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---
# Part 3 · Treatments (4 pages)

Treatment pages carry the ART line and the "no outcome promises" line from `site-plan.md`, section 6. They never quote success rates, prices, drug names or doses.

---

## Page 26 · IUI

```yaml
title: "IUI Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "IUI (intrauterine insemination) explained: who it suits, steps, risks, timing and what to expect, with Dr. Swati Shree at EVE, Gunjur, Bangalore."
url: /treatments/iui/
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
   Most women feel little more than mild cramping, similar to a Pap test. No anaesthetic is needed, and the procedure takes a few minutes. You can rest briefly and then go home or back to work. Tell us if you feel uncomfortable, and we will pause.
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

### Sources
- ESHRE Guideline: Unexplained infertility (2023)
- NICE Guideline CG156: Fertility problems
- ASRM Practice Committee, Use of clomiphene citrate and intrauterine insemination in unexplained infertility
- ART (Regulation) Act, 2021 and Rules, 2022

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 27 · IVF

```yaml
title: "IVF Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "IVF explained step by step: who needs it, the process, risks, timing and ART Act rules, with Dr. Swati Shree, MRCOG, at EVE, Gunjur, Bangalore."
url: /treatments/ivf/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 28 · Egg freezing

```yaml
title: "Egg Freezing in Bangalore | EVE, Dr. Swati Shree"
description: "Egg freezing (oocyte cryopreservation) explained: who, when, steps, limits and legal rules, with Dr. Swati Shree, MRCOG, at EVE, Gunjur, Bangalore."
url: /treatments/egg-freezing/
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
   It depends on your age and what you hope for. More eggs frozen at a younger age gives better chances. One cycle may not be enough, especially if reserve is low. Dr. Swati estimates a target for you after your tests.
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

### Sources
- ESHRE Guideline: Female fertility preservation (2020)
- ASRM Ethics Committee and Practice Committee opinions on planned oocyte cryopreservation
- ART (Regulation) Act, 2021 and Rules, 2022

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 29 · TESA and PESA

```yaml
title: "TESA PESA in Bangalore | Sperm Retrieval, EVE Clinic"
description: "TESA and PESA retrieve sperm for men with no sperm in the semen. How they work, who needs them, risks and next steps, with EVE, Gunjur, Bangalore."
url: /treatments/tesa-pesa/
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

### Sources
- AUA/ASRM Guideline: Diagnosis and treatment of infertility in men (2020)
- EAU Guidelines on Sexual and Reproductive Health `[CONFIRM: edition]`
- WHO laboratory manual for the examination and processing of human semen, 6th edition (2021)
- ART (Regulation) Act, 2021 and Rules, 2022

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---
# Part 4 · Conditions (10 pages)

Condition pages explain the condition, then how Dr. Swati evaluates and manages it at EVE. They link to the service or treatment pages for the visit and the procedure, and never repeat their text. Male factor infertility lives on `/services/male-fertility-evaluation/`.

---

## Page 30 · PCOS

```yaml
title: "PCOS Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "PCOS explained: symptoms, diagnosis, treatment and getting pregnant with PCOS. Evidence-based care by Dr. Swati Shree, MRCOG, at EVE, Gunjur, Bangalore."
url: /conditions/pcos/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 31 · Endometriosis

```yaml
title: "Endometriosis Treatment in Bangalore | EVE Clinic"
description: "Endometriosis: symptoms, diagnosis, pain care, surgery and fertility, explained by Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore."
url: /conditions/endometriosis/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 32 · Menstrual disorders

```yaml
title: "Irregular and Heavy Periods Treatment Bangalore | EVE"
description: "Irregular, heavy, painful or missed periods: causes, tests and treatment with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur, Bangalore."
url: /conditions/menstrual-disorders/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 33 · Recurrent pregnancy loss

```yaml
title: "Recurrent Miscarriage Treatment in Bangalore | EVE"
description: "Two or more miscarriages? Causes, tests and care for recurrent pregnancy loss with Dr. Swati Shree, MRCOG, at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/recurrent-pregnancy-loss/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 34 · Menopause and perimenopause

```yaml
title: "Menopause Clinic in Bangalore | EVE, Dr. Swati Shree"
description: "Perimenopause and menopause: symptoms, tests, hormone therapy and bone and heart health, with Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/menopause-and-perimenopause/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---
## Page 35 · Female factor infertility

```yaml
title: "Female Infertility Causes and Care in Bangalore | EVE"
description: "Why a woman may not conceive: ovulation, tubes, uterus, ovarian reserve and age. Evaluation and options with Dr. Swati Shree, EVE, Gunjur, Bangalore."
url: /conditions/female-factor-infertility/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 36 · Fibroids

```yaml
title: "Fibroids Treatment in Bangalore | EVE, Dr. Swati Shree"
description: "Uterine fibroids: symptoms, scan, treatment options and effects on pregnancy, explained by Dr. Swati Shree at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/fibroids/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 37 · Adenomyosis

```yaml
title: "Adenomyosis Treatment in Bangalore | EVE Clinic"
description: "Adenomyosis: painful, heavy periods and fertility effects, diagnosis by ultrasound or MRI, and treatment options with Dr. Swati Shree, Gunjur, Bangalore."
url: /conditions/adenomyosis/
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
   Usually the symptoms ease after menopause, because the condition depends on hormones. Heavy bleeding or new pain after menopause is not expected and should be checked.

### Sources
- ESHRE Guideline: Endometriosis (2022), for overlapping conditions
- ACOG Practice Bulletin: Abnormal uterine bleeding
- Morphological Uterus Sonographic Assessment (MUSA) consensus for adenomyosis

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 38 · Thin endometrium and low ovarian reserve

```yaml
title: "Low AMH and Thin Endometrium Care in Bangalore | EVE"
description: "Low ovarian reserve (low AMH) and thin endometrium: causes, tests and options with Dr. Swati Shree, MRCOG, at EVE Women and Fertility Clinic, Gunjur."
url: /conditions/thin-endometrium-and-low-ovarian-reserve/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---

## Page 39 · Thyroid and fertility

```yaml
title: "Thyroid and Fertility in Bangalore | EVE, Dr. Swati Shree"
description: "How thyroid problems affect periods, fertility and pregnancy, which tests to have, and how treatment helps, with Dr. Swati Shree, EVE Clinic, Gunjur."
url: /conditions/thyroid-and-fertility/
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

Reviewer note: reviewed by Dr. Swati Shree. Last reviewed `[date]`.

---
# Part 5 · Legal and trust pages (7 pages)

These pages are drafts for review by a lawyer before launch `[CONFIRM: legal review]`. Dates come from `legalLastUpdated` in `lib/site-config.ts`. "EVE", "we" and "us" mean EVE Women and Fertility Clinic. Every legal page has a one-paragraph plain summary at the top, then the numbered sections.

---

## Page 40 · Privacy Policy

```yaml
title: "Privacy Policy | EVE Women and Fertility Clinic"
description: "How EVE Women and Fertility Clinic collects, uses, stores and protects your personal data, and your rights under the DPDP Act 2023."
url: /privacy-policy/
schema: [WebPage]
```

H1: Privacy *Policy*

Last updated: `[date]`

**In short.** We collect only what we need to book your appointment and look after you. We do not sell your data, and we do not publish patient names, photographs or stories. You can ask to see, correct or delete your information at any time.

### 1. Who we are

EVE Women and Fertility Clinic, 1st Floor, LG Complex Towers, Gunjur, Bangalore 560087, Karnataka, run by Dr. Swati Shree. `[CONFIRM: legal entity name]` We decide why and how your personal data is used, which makes us the "data fiduciary" under the Digital Personal Data Protection Act, 2023 (DPDP Act). Privacy contact: `[CONFIRM: name, email, phone]`.

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
schema: [WebPage]
```

H1: Editorial and medical review *policy*

Last updated: `[date]`

**In short.** Every medical page is written for patients, based on named guidelines, and reviewed by Dr. Swati Shree before it is published. We show the review date and the sources.

### 1. Why this matters

Fertility and women's health decisions are important. People need information they can trust, so we explain how our content is made.

### 2. Who writes and reviews

- **Written by:** the clinic's content team, working from guidelines and Dr. Swati's clinical approach `[CONFIRM: authorship wording]`
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

If you find something inaccurate or out of date, please write to `[CONFIRM: email]`. We review reports within `[CONFIRM: 7]` working days.

---

## Page 44 · Patient Rights and Responsibilities

```yaml
title: "Patient Rights and Responsibilities | EVE Clinic"
description: "Your rights as a patient at EVE Women and Fertility Clinic, including consent, privacy and information, and what we ask of you."
url: /patient-rights/
schema: [WebPage]
```

H1: Patient rights and *responsibilities*

Last updated: `[date]`

**In short.** You have the right to be treated with respect, to understand your care, to say no, and to have your privacy protected. This page follows the Charter of Patients' Rights, and a copy is displayed at the clinic `[CONFIRM]`.

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

IUI, IVF and related treatments are regulated by the ART (Regulation) Act, 2021. You will be counselled, and asked for written consent. Sex selection is prohibited. Our ART registration number is `[CONFIRM]`.

### Making a complaint

Speak to Dr. Swati or the front desk first. You may also write to `[CONFIRM: email]`. If you remain unsatisfied, you may approach the Karnataka Medical Council, the District Health Officer, or a consumer forum.

---

## Page 45 · Appointments, Cancellation and Refund

```yaml
title: "Appointments, Cancellation and Refund | EVE Clinic"
description: "How booking works at EVE Women and Fertility Clinic, how to reschedule or cancel, and when fees are refunded."
url: /appointments-cancellation-refund/
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

Fees are told to you before the consultation `[CONFIRM: fee policy]`. We accept `[CONFIRM: cash, UPI, cards]`. A receipt is given for every payment.

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

This statement was prepared on `[date]` using our own review `[CONFIRM: and an independent audit, if done]`.

---
# Part 6 · Blog launch articles (3 posts)

Each post: title, author chip (Dr. Swati Shree), "Published [date] · Updated [date]", "In brief" box, body (68ch), callouts, FAQs + FAQPage schema, reviewer box, 3 related service cards + 2 related posts. Cover: designed gradient + the post badge (never a photo with text). Schema: `BlogPosting` + `MedicalWebPage`, `citation`, `FAQPage`.

---

## Post 1 · Fertility tests explained

```yaml
title: "Fertility Tests Explained: AMH, Semen, HSG, Scans"
description: "What each fertility test measures, what the numbers mean and what they cannot tell you: AMH, antral follicle count, semen analysis, HSG and thyroid tests."
url: /blog/fertility-tests-explained/
category: Getting started
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "[CONFIRM: launch date]"
dateModified: "[CONFIRM: launch date]"
badge: fertility-evaluation
readingTime: 7
related: [/services/fertility-evaluation/, /services/tubal-patency-test-hsg/, /services/male-fertility-evaluation/]
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

Sources: WHO laboratory manual for the examination and processing of human semen, 6th edition (2021); ASRM Practice Committee, Testing and interpreting measures of ovarian reserve (2015); NICE Guideline CG156; ESHRE Guideline: Unexplained infertility (2023)

Reviewer box: use global text.

---

## Post 2 · PCOS and getting pregnant

```yaml
title: "PCOS and Getting Pregnant: What the Evidence Says"
description: "Can you get pregnant with PCOS? How ovulation is treated, what lifestyle changes help, when IUI or IVF is needed, and what to avoid. By Dr. Swati Shree."
url: /blog/pcos-and-getting-pregnant/
category: Conditions
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "[CONFIRM: launch date]"
dateModified: "[CONFIRM: launch date]"
badge: pcos
readingTime: 7
related: [/conditions/pcos/, /services/follicular-monitoring/, /conditions/thyroid-and-fertility/]
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

### Step 1: lifestyle that is realistic

- If weight is raised, aim for a modest loss of 5 to 10 percent. This alone can restore ovulation in some women.
- Eat regular meals with whole grains, pulses, vegetables and protein, and cut sweet drinks. There is no single "PCOS diet".
- Move most days. Walking, cycling, yoga and strength work all help insulin.
- Sleep well, and take care of stress.
- Stop smoking and keep alcohol low.
- Take folic acid, as advised, before you conceive.

Dr. Swati sets goals that are kind and realistic. Weight is not a moral failing, and lean women with PCOS also benefit from healthy habits.

### Step 2: check the rest

Before treatment goes on for months, check your thyroid, prolactin and sugar, the tubes if indicated, and your partner's semen. A second cause missed is a common reason that treatment does not work.

### Step 3: ovulation induction

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
   Some studies show a slightly higher risk, linked to weight, insulin resistance and age. Good sugar control and a healthy weight lower it. Many women with PCOS have healthy pregnancies. Early care and monitoring help.
4. **Is IVF always needed in PCOS?**
   No. Many women with PCOS conceive with ovulation induction or IUI. IVF is considered when these do not work, or when there is a tubal or male factor. Dr. Swati will not recommend IVF before simpler steps have been tried, unless your tests point that way.
5. **Will PCOS affect my pregnancy?**
   PCOS raises the chance of gestational diabetes and high blood pressure in pregnancy. Early checks, healthy habits and regular antenatal care manage these well. Dr. Swati advises on a plan during pregnancy.

Sources: International evidence-based guideline for the assessment and management of PCOS (2023); ESHRE Guideline: Ovarian stimulation for IVF/ICSI (2020); ASRM Practice Committee guidance on ovulation induction

Reviewer box: use global text.

---

## Post 3 · When to see a fertility doctor

```yaml
title: "When to See a Fertility Doctor: 12 Months, 6 or Sooner"
description: "When to see a fertility specialist: the 12-month and 6-month rules, signs to act sooner, what to bring, and what happens at the first visit."
url: /blog/when-to-see-a-fertility-doctor/
category: Getting started
author: dr-swati-shree
reviewer: dr-swati-shree
datePublished: "[CONFIRM: launch date]"
dateModified: "[CONFIRM: launch date]"
badge: natural-conception
readingTime: 6
related: [/your-fertility-journey/, /services/fertility-evaluation/, /treatments/egg-freezing/]
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

Sources: ASRM Practice Committee, Definition of infertility (2023); ESHRE Guideline: Unexplained infertility (2023); NICE Guideline CG156: Fertility problems

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
4. AIIMS campus, role and years
5. Years for MBBS, DNB, fellowship, MRCOG, and each consultant role
6. Visiting consultant arrangements with Apollo Fertility and Motherhood Fertility: exact current wording
7. Any papers, FOGSI, ISAR, IFS or other memberships
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
