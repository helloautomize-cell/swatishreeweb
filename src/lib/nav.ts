/*
 * Site navigation (site-plan.md section 5). The single source for header,
 * mega menus, mobile menu, utility bar and footer link lists.
 */

export type NavLink = { label: string; href: string };
export type MegaColumn = { title: string; links: NavLink[] };
export type MegaMenu = {
  id: string;
  label: string;
  href: string;
  columns: MegaColumn[];
  side?: NavLink[];
};

export const servicesMenu: MegaMenu = {
  id: "services",
  label: "Services",
  href: "/services/",
  columns: [
    {
      title: "Fertility",
      links: [
        { label: "Fertility evaluation", href: "/services/fertility-evaluation/" },
        { label: "Natural conception support", href: "/services/natural-conception-support/" },
        { label: "Follicular monitoring", href: "/services/follicular-monitoring/" },
        { label: "Tubal patency test (HSG)", href: "/services/tubal-patency-test-hsg/" },
        { label: "Male fertility evaluation", href: "/services/male-fertility-evaluation/" },
      ],
    },
    {
      title: "Women's health and pregnancy",
      links: [
        { label: "Contraceptive counselling", href: "/services/contraceptive-counselling/" },
        { label: "Early pregnancy scan", href: "/services/early-pregnancy-scan/" },
        { label: "Reproductive immunology", href: "/services/reproductive-immunology/" },
        { label: "Adolescent gynaecology", href: "/services/adolescent-gynaecology/" },
      ],
    },
    {
      title: "Prevention",
      links: [
        { label: "Cervical cancer screening and HPV vaccination", href: "/services/cervical-cancer-screening-hpv-vaccination/" },
        { label: "Endometrial biopsy", href: "/services/endometrial-biopsy/" },
      ],
    },
  ],
};

export const treatmentsMenu: MegaMenu = {
  id: "treatments",
  label: "Treatments",
  href: "/treatments/",
  columns: [
    {
      title: "Treatments",
      links: [
        { label: "IUI", href: "/treatments/iui/" },
        { label: "IVF", href: "/treatments/ivf/" },
        { label: "Egg freezing", href: "/treatments/egg-freezing/" },
        { label: "TESA and PESA", href: "/treatments/tesa-pesa/" },
      ],
    },
  ],
  side: [
    { label: "Your fertility journey", href: "/your-fertility-journey/" },
    { label: "Plan your visit", href: "/plan-your-visit/" },
  ],
};

export const conditionsMenu: MegaMenu = {
  id: "conditions",
  label: "Conditions",
  href: "/conditions/",
  columns: [
    {
      title: "Fertility",
      links: [
        { label: "Female factor infertility", href: "/conditions/female-factor-infertility/" },
        { label: "Male factor infertility", href: "/services/male-fertility-evaluation/" },
        { label: "Thin endometrium and low ovarian reserve", href: "/conditions/thin-endometrium-and-low-ovarian-reserve/" },
        { label: "Recurrent pregnancy loss", href: "/conditions/recurrent-pregnancy-loss/" },
        { label: "Thyroid and fertility", href: "/conditions/thyroid-and-fertility/" },
      ],
    },
    {
      title: "Women's health",
      links: [
        { label: "PCOS", href: "/conditions/pcos/" },
        { label: "Endometriosis", href: "/conditions/endometriosis/" },
        { label: "Menstrual disorders", href: "/conditions/menstrual-disorders/" },
        { label: "Fibroids", href: "/conditions/fibroids/" },
        { label: "Adenomyosis", href: "/conditions/adenomyosis/" },
        { label: "Menopause and perimenopause", href: "/conditions/menopause-and-perimenopause/" },
      ],
    },
  ],
};

export const megaMenus: MegaMenu[] = [servicesMenu, treatmentsMenu, conditionsMenu];

/** Flat header links after the three menus. */
export const headerLinks: NavLink[] = [
  { label: "Dr. Swati Shree", href: "/dr-swati-shree/" },
  { label: "About", href: "/about/" },
];

/** Utility bar, left side (desktop). */
export const utilityLinks: NavLink[] = [
  { label: "Plan your visit", href: "/plan-your-visit/" },
  { label: "Blog", href: "/blog/" },
];

export type MobileItem =
  | { type: "menu"; menu: MegaMenu }
  | { type: "link"; link: NavLink };

/** Mobile accordion order (site-plan §5). All sections start closed. */
export const mobileMenu: MobileItem[] = [
  { type: "menu", menu: servicesMenu },
  { type: "menu", menu: treatmentsMenu },
  { type: "menu", menu: conditionsMenu },
  { type: "link", link: { label: "Dr. Swati Shree", href: "/dr-swati-shree/" } },
  { type: "link", link: { label: "About EVE", href: "/about/" } },
  { type: "link", link: { label: "Your fertility journey", href: "/your-fertility-journey/" } },
  { type: "link", link: { label: "Plan your visit", href: "/plan-your-visit/" } },
  { type: "link", link: { label: "Coming from outside Bangalore", href: "/coming-from-outside-bangalore/" } },
  { type: "link", link: { label: "Blog", href: "/blog/" } },
  { type: "link", link: { label: "FAQs", href: "/faqs/" } },
  { type: "link", link: { label: "Contact", href: "/contact/" } },
];

/** Footer link columns (site-plan §5). */
export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "All services", href: "/services/" },
      ...servicesMenu.columns.flatMap((c) => c.links),
    ],
  },
  {
    title: "Treatments",
    links: [
      { label: "All treatments", href: "/treatments/" },
      ...treatmentsMenu.columns[0].links,
    ],
  },
  {
    title: "Conditions",
    links: [
      { label: "All conditions", href: "/conditions/" },
      ...conditionsMenu.columns.flatMap((c) => c.links),
    ],
  },
  {
    title: "Patient information",
    links: [
      { label: "Your fertility journey", href: "/your-fertility-journey/" },
      { label: "Plan your visit", href: "/plan-your-visit/" },
      { label: "Coming from outside Bangalore", href: "/coming-from-outside-bangalore/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Blog", href: "/blog/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
  { label: "Medical Disclaimer", href: "/medical-disclaimer/" },
  { label: "Editorial and Medical Review Policy", href: "/editorial-policy/" },
  { label: "Patient Rights and Responsibilities", href: "/patient-rights/" },
  { label: "Appointments, Cancellation and Refund", href: "/appointments-cancellation-refund/" },
  { label: "Accessibility Statement", href: "/accessibility/" },
];

export const booking = {
  href: "/contact/#book",
  label: "Book Consultation",
};

/** WhatsApp pre-fill pattern (site-plan §5). */
export function whatsappPrefill(pageTitle: string): string {
  return `Hello EVE Women and Fertility Clinic, I would like to book a consultation about ${pageTitle}. My name is `;
}
