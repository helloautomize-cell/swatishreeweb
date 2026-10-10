/*
 * Specimen copy for /styleguide, taken verbatim from
 * resources/reference/eve-styleguide.html (the visual contract).
 * The canonical page copy arrives with resources/docs/new-website-content.md;
 * these strings are the approved snippets embedded in the style guide.
 */

import { clinicOpenedDisplay } from "./facts";

export const heroCopy = {
  eyebrow: "EVE Women and Fertility Clinic · Gunjur, Bangalore",
  h1Before: "Fertility care built around ",
  h1Accent: "you",
  sub: "Unhurried, honest care for fertility, PCOS, pregnancy and women's health, led by Dr. Swati Shree, MRCOG (UK).",
  mobileLine: "A full evaluation first. Every option explained.",
  chips: ["Fertility evaluation", "PCOS", "Recurrent pregnancy loss", "IUI and IVF", "Egg freezing", "Male fertility", "Menopause"],
  tag: "Unhurried visits",
};

export const concerns = [
  ["Trying to conceive, not yet pregnant", "/services/fertility-evaluation/", "Start with a full fertility evaluation"],
  ["Irregular periods or PCOS", "/conditions/pcos/", "Hormones, cycles and long-term health"],
  ["More than one miscarriage", "/conditions/recurrent-pregnancy-loss/", "A thorough, kind workup"],
  ["Heavy or painful periods", "/conditions/menstrual-disorders/", "Find the cause, then the right care"],
  ["Thinking about IUI or IVF", "/your-fertility-journey/", "How the journey works, step by step"],
  ["Planning to freeze eggs", "/treatments/egg-freezing/", "What it involves and when to consider it"],
  ["A positive test and an early scan", "/services/early-pregnancy-scan/", "Location, growth and heartbeat"],
  ["Menopause symptoms", "/conditions/menopause-and-perimenopause/", "Support through the transition"],
];

export type ServiceTab = {
  label: string;
  intro: string;
  cards: { slug: string; title: string; line: string; href: string }[];
};

export const serviceTabs: ServiceTab[] = [
  { label: "Fertility", intro: "Understanding what is happening in your body is the first step, whether you are trying naturally or need a closer look.", cards: [
    { slug: "fertility-evaluation", title: "Fertility evaluation", line: "A complete first assessment for both partners", href: "/services/fertility-evaluation/" },
    { slug: "natural-conception", title: "Natural conception support", line: "Cycle mapping and ovulation timing", href: "/services/natural-conception-support/" },
    { slug: "follicular-monitoring", title: "Follicular monitoring", line: "Ultrasound tracking of your fertile window", href: "/services/follicular-monitoring/" },
    { slug: "tubal-patency-hsg", title: "Tubal patency test (HSG)", line: "Checking that the fallopian tubes are open", href: "/services/tubal-patency-test-hsg/" },
    { slug: "male-fertility", title: "Male fertility evaluation", line: "Semen analysis and expert counselling", href: "/services/male-fertility-evaluation/" },
  ] },
  { label: "Treatments", intro: "When natural conception or a simple evaluation is not enough, the options are explained before any decision is made.", cards: [
    { slug: "iui", title: "IUI", line: "A gentler first step for the right couple", href: "/treatments/iui/" },
    { slug: "ivf", title: "IVF", line: "A plan built around your fertility profile", href: "/treatments/ivf/" },
    { slug: "egg-freezing", title: "Egg freezing", line: "More choices for the years ahead", href: "/treatments/egg-freezing/" },
    { slug: "tesa-pesa", title: "TESA and PESA", line: "Surgical sperm retrieval for male factor infertility", href: "/treatments/tesa-pesa/" },
  ] },
  { label: "Women's health", intro: "Everyday concerns deserve unhurried, judgment-free consultations.", cards: [
    { slug: "pcos", title: "PCOS", line: "Hormones, cycles and long-term health", href: "/conditions/pcos/" },
    { slug: "endometriosis", title: "Endometriosis", line: "Pain care that respects your goals", href: "/conditions/endometriosis/" },
    { slug: "menstrual-disorders", title: "Menstrual disorders", line: "Irregular, heavy or painful periods", href: "/conditions/menstrual-disorders/" },
    { slug: "contraceptive-counselling", title: "Contraceptive counselling", line: "Honest guidance on every option", href: "/services/contraceptive-counselling/" },
    { slug: "menopause", title: "Menopause and perimenopause", line: "Support through the transition", href: "/conditions/menopause-and-perimenopause/" },
  ] },
  { label: "Pregnancy care", intro: "From the earliest days of pregnancy to the harder questions after a loss.", cards: [
    { slug: "early-pregnancy-scan", title: "Early pregnancy scan", line: "Confirm a pregnancy and see how it is growing", href: "/services/early-pregnancy-scan/" },
    { slug: "recurrent-pregnancy-loss", title: "Recurrent pregnancy loss", line: "A careful, kind workup", href: "/conditions/recurrent-pregnancy-loss/" },
    { slug: "reproductive-immunology", title: "Reproductive immunology", line: "Looking at immune factors, guided by the evidence", href: "/services/reproductive-immunology/" },
  ] },
  { label: "Prevention and general care", intro: "Catching things early often means a simpler fix.", cards: [
    { slug: "cervical-screening", title: "Cervical screening and HPV vaccination", line: "Pap test and vaccine advice", href: "/services/cervical-cancer-screening-hpv-vaccination/" },
    { slug: "endometrial-biopsy", title: "Endometrial biopsy", line: "A check on the uterine lining", href: "/services/endometrial-biopsy/" },
    { slug: "adolescent-gynaecology", title: "Adolescent gynaecology", line: "A gentle first visit for teenagers", href: "/services/adolescent-gynaecology/" },
    { slug: "fibroids", title: "Fibroids and adenomyosis", line: "Careful evaluation and clear choices", href: "/conditions/fibroids/" },
  ] },
];

export const visitSteps = [
  { title: "Book", text: "Use the form, call 72049 21212 or 72049 21516, or message us on WhatsApp. We aim to reply within 24 hours.", chips: ["Online form", "Phone", "WhatsApp"] },
  { title: "Arrive and register", text: "Bring past reports, scans and prescriptions. If you are trying to conceive, note the dates of your last few periods. Your partner is welcome.", chips: ["Past reports", "Scans", "Prescriptions", "Last period dates", "Partner welcome"] },
  { title: "Consultation", text: "Dr. Swati listens first, asks about your history, and examines you. There is time for every question.", chips: ["Your history", "Examination", "Your questions"] },
  { title: "Tests if needed", text: "A scan or blood tests may be advised after the consultation. Dr. Swati decides which, and explains why.", chips: ["Ultrasound scan", "Blood tests", "Semen analysis"] },
  { title: "Your options", text: "Each option is explained in plain words, from natural conception support to IUI or IVF where suitable, so the decision is yours.", chips: ["Natural conception support", "IUI", "IVF"] },
  { title: "Follow-up", text: "Review as planned. Reach the team between visits by phone or WhatsApp.", chips: ["Review visit", "Phone or WhatsApp"] },
];

export const conditionCards = [
  { icon: "ovary", title: "PCOS", sub: "Cycles, hormones and fertility", text: "A plan built on your own hormone and metabolic pattern: lifestyle, medicines or fertility support, whichever fits where you are." },
  { icon: "pain", title: "Endometriosis", sub: "Often missed for years", text: "Careful evaluation to confirm it, then pain care and fertility-sparing options built around your goals." },
  { icon: "loss", title: "Recurrent pregnancy loss", sub: "More than one miscarriage deserves answers", text: "A thorough workup of hormonal, structural, immune and genetic factors, so you leave with a clearer path." },
  { icon: "thy", title: "Thyroid and fertility", sub: "Simple to test, often fixable", text: "A blood test checks thyroid function. Correcting an imbalance can bring cycles back and help fertility." },
  { icon: "fibroid", title: "Fibroids", sub: "Many cause no symptoms", text: "Imaging maps size and location, then you decide with the doctor whether to monitor, treat or plan a procedure." },
  { icon: "sun", title: "Menopause and perimenopause", sub: "Symptoms can start early", text: "Hormonal and lifestyle support that looks at your whole health picture, not only the symptoms." },
];

export const whyCards = [
  { title: "Time, not rush", text: "Consultations are built around your history and your questions, not the clock. Partners are welcome at every visit.", icon: "why-time.png" },
  { title: "Years of hospital experience", text: "Dr. Swati has worked as a consultant in busy fertility centres in Bangalore, after resident roles in obstetrics and gynaecology. [CONFIRM: wording of past roles]", icon: "why-experience.png" },
  { title: "A full evaluation first", text: "We look at ovulation, the tubes, the uterus, the ovarian reserve and the male partner before recommending any treatment.", icon: "why-evaluation.png" },
  { title: "Every option explained", text: "Natural conception support, IUI, IVF and egg freezing are laid out side by side, with the honest pros and cons of each.", icon: "why-options.png" },
  { title: "One doctor throughout", text: "Dr. Swati sees every patient herself and follows you over time, so you do not repeat your story at each visit.", icon: "badge-doctor.png" },
  { title: "A founder-led clinic", text: `EVE was started by Dr. Swati Shree in ${clinicOpenedDisplay} to offer fertility care that feels personal.`, icon: "stage-understand.png" },
];

export const doctorCard = {
  name: "Dr. Swati Shree",
  quals: "MBBS · DNB (Obstetrics and Gynaecology) · Fellowship in Reproductive Medicine, KJK Hospital, Trivandrum · MRCOG (UK)",
  role: "Reproductive medicine specialist and founder of EVE Women and Fertility Clinic.",
  bio: "Junior Resident at AIIMS, New Delhi; Senior Resident in obstetrics and gynaecology at Kanke General Hospital and Sakra World Hospital. Recipient, 16th GCU International Women's Day Award.",
};
