/*
 * Specimen copy for /styleguide, taken verbatim from
 * resources/reference/eve-styleguide.html (the visual contract).
 * The canonical page copy arrives with resources/docs/new-website-content.md;
 * these strings are the approved snippets embedded in the style guide.
 */

export const heroCopy = {
  eyebrow: "EVE Women and Fertility Clinic · Gunjur, Bangalore",
  h1Before: "Fertility care built around ",
  h1Accent: "you",
  sub: "Unhurried, honest care for fertility, PCOS, pregnancy and women's health, led by Dr. Swati Shree, MRCOG (UK).",
  chips: [
    "Fertility evaluation",
    "PCOS",
    "Recurrent pregnancy loss",
    "IUI and IVF",
    "Egg freezing",
    "Male fertility",
    "Menopause",
  ],
  tag: "Founded Dec 2024",
};

export type ServiceTab = {
  label: string;
  intro: string;
  cards: { slug: string; title: string; line: string }[];
};

export const serviceTabs: ServiceTab[] = [
  {
    label: "Fertility",
    intro:
      "Understanding what is happening in your body is the first step, whether you are trying naturally or need a closer look.",
    cards: [
      { slug: "natural-conception", title: "Natural conception support", line: "Mapping your cycle" },
      { slug: "follicular-monitoring", title: "Follicular monitoring", line: "Tracking your fertile window" },
      { slug: "tubal-patency-hsg", title: "Tubal patency test (HSG)", line: "Checking the tubes are open" },
      { slug: "male-fertility", title: "Male fertility evaluation", line: "Semen analysis and counselling" },
    ],
  },
  {
    label: "Treatments",
    intro:
      "When natural conception or a simple evaluation is not enough, the options are explained before any decision is made.",
    cards: [
      { slug: "iui", title: "IUI", line: "A gentler first step" },
      { slug: "ivf", title: "IVF", line: "Planned around your profile" },
      { slug: "egg-freezing", title: "Egg freezing", line: "More choices for later" },
      { slug: "tesa-pesa", title: "TESA and PESA", line: "Surgical sperm retrieval" },
    ],
  },
  {
    label: "Women's health",
    intro:
      "Everyday concerns deserve unhurried, judgment-free consultations, not just quick prescriptions.",
    cards: [
      { slug: "contraceptive-counselling", title: "Contraceptive counselling", line: "Honest guidance on every option" },
      { slug: "pcos", title: "PCOS care", line: "Hormones, cycles, long-term health" },
      { slug: "endometriosis", title: "Endometriosis", line: "Pain care that respects your goals" },
    ],
  },
  {
    label: "Pregnancy care",
    intro:
      "From the earliest days of pregnancy to the harder questions, with you at every scan and every decision.",
    cards: [
      { slug: "early-pregnancy-scan", title: "Early pregnancy scan", line: "Early growth and heartbeat" },
      { slug: "recurrent-pregnancy-loss", title: "Recurrent miscarriage", line: "A thorough, kind workup" },
      { slug: "reproductive-immunology", title: "Reproductive immunology", line: "Looking at immune factors" },
    ],
  },
  {
    label: "Prevention and general care",
    intro:
      "Catching things early is often the difference between a simple fix and a complicated one.",
    cards: [
      { slug: "cervical-screening", title: "Cervical screening and HPV", line: "Pap smear and vaccination" },
      { slug: "endometrial-biopsy", title: "Endometrial biopsy", line: "A check on the uterine lining" },
      { slug: "menstrual-disorders", title: "Menstrual issues", line: "Irregular, heavy or painful periods" },
      { slug: "adolescent-gynaecology", title: "Adolescent gynaecology", line: "A gentle first visit" },
      { slug: "menopause", title: "Menopause care", line: "Support through the transition" },
    ],
  },
];

export const visitSteps = [
  {
    title: "Book",
    text: "Use the form, call 72049 21212 or 72049 21516. We aim to confirm within [CONFIRM: reply time].",
  },
  {
    title: "Arrive and register",
    text: "Bring past reports, scans and prescriptions. If you are trying to conceive, note the dates of your last few periods. Partners are welcome.",
  },
  {
    title: "Consultation",
    text: "Dr. Swati listens first, asks about your history and examines you. There is time for every question.",
  },
  {
    title: "Tests if needed",
    text: "A scan or blood tests may be advised after the consultation. Dr. Swati decides which, and explains why.",
  },
  {
    title: "Your options",
    text: "Each option is explained in plain words, from natural conception support to IUI or IVF where suitable, so the decision is yours.",
  },
  {
    title: "Follow-up",
    text: "Review as planned. Reach the team between visits by phone.",
  },
];

export const conditionCards = [
  {
    icon: "pcos",
    title: "PCOS",
    sub: "Cycles, hormones and fertility",
    text: "A plan built on your own hormone and metabolic pattern: lifestyle, medicines or fertility support, whichever fits where you are.",
  },
  {
    icon: "endometriosis",
    title: "Endometriosis",
    sub: "Often missed for years",
    text: "Careful evaluation to confirm it, then pain care and fertility-sparing options built around your goals.",
  },
  {
    icon: "pregnancy-loss",
    title: "Recurrent pregnancy loss",
    sub: "More than one miscarriage deserves answers",
    text: "A thorough workup of hormonal, structural, immune and genetic factors, so you leave with a clearer path.",
  },
  {
    icon: "thyroid",
    title: "Thyroid and fertility",
    sub: "Simple to test, often fixable",
    text: "A blood test checks thyroid function. Correcting an imbalance can bring cycles back and help fertility.",
  },
  {
    icon: "fibroids",
    title: "Fibroids",
    sub: "Many cause no symptoms",
    text: "Imaging maps size and location, then you decide with the doctor whether to monitor, treat or plan a procedure.",
  },
  {
    icon: "menopause",
    title: "Menopause and perimenopause",
    sub: "Symptoms can start early",
    text: "Hormonal and lifestyle support that looks at your whole health picture, not only the symptoms.",
  },
];

export const whyCards = [
  {
    title: "Time, not rush",
    text: "Consultations are built around your questions, not the clock.",
    icon: "why-time.png",
  },
  {
    title: "Years of hospital experience",
    text: "Consultant roles across Garbhagudi IVF Centre, Apollo Fertility and Motherhood Fertility.",
    icon: "why-experience.png",
  },
  {
    title: "Advanced lab care, only if needed",
    text: "Advanced IVF lab procedures are available through associated centres when your plan calls for them.",
    icon: "why-options.png",
  },
  {
    title: "One doctor throughout",
    text: "One doctor, one relationship, from first consultation to follow-up.",
    icon: "badge-doctor.png",
  },
  {
    title: "Every option explained",
    text: "Clear explanations in plain words, with no pressure toward treatment you may not need.",
    icon: "why-evaluation.png",
  },
  {
    title: "Founder-led clinic",
    text: "Personally led by Dr. Swati Shree, MRCOG (UK).",
    icon: "stage-understand.png",
  },
];

export const doctorCard = {
  name: "Dr. Swati Shree",
  quals:
    "MBBS · DNB (Obstetrics and Gynaecology) · Fellowship in Reproductive Medicine, KJK Hospital, Trivandrum · MRCOG (UK)",
  role: "Reproductive medicine specialist and founder, EVE Women and Fertility Clinic",
  bio: "Trained at AIIMS, Kanke General Hospital and Research Centre and Sakra World Hospital. Former consultant at Garbhagudi IVF Centre, Apollo Fertility and Motherhood Fertility. Recipient, 16th GCU International Women's Day Award.",
};
