/*
 * Site-plan badge id -> illustrated badge file (site-plan section 4,
 * master prompt Part 8.3). Content frontmatter `badge:` uses these ids.
 * URL-slug aliases are kept so older specimen data keeps resolving.
 * Files live under resources/assets/ and are processed to
 * public/images/assets/ by scripts/process-images.mjs.
 */

export const serviceBadges: Record<string, string> = {
  // fertility services
  "fertility-evaluation": "badge-fertility-evaluation.png",
  "natural-conception": "badge-natural-conception.png",
  "follicular-monitoring": "badge-follicular-monitoring.png",
  hsg: "badge-hsg.png",
  "male-fertility": "badge-male-fertility.png",
  // treatments
  iui: "badge-iui.png",
  ivf: "badge-ivf.png",
  "egg-freezing": "badge-egg-freezing.png",
  "tesa-pesa": "badge-tesa-pesa.png",
  // women's health
  contraception: "badge-contraception.png",
  pcos: "badge-pcos.png",
  endometriosis: "badge-endometriosis.png",
  // pregnancy care
  "early-pregnancy-scan": "badge-early-pregnancy-scan.png",
  "pregnancy-loss": "badge-pregnancy-loss.png",
  "reproductive-immunology": "badge-reproductive-immunology.png",
  // prevention and general care
  "cervical-screening": "badge-cervical-screening.png",
  "endometrial-biopsy": "badge-endometrial-biopsy.png",
  menstrual: "badge-menstrual.png",
  "adolescent-gynaecology": "badge-adolescent-gynaecology.png",
  menopause: "badge-menopause.png",
  // remaining conditions
  adenomyosis: "badge-adenomyosis.png",
  fibroids: "badge-fibroids.png",
  "female-infertility": "badge-female-infertility.png",
  "ovarian-reserve": "badge-ovarian-reserve.png",
  thyroid: "badge-thyroid.png",
};

/** URL slugs -> canonical badge ids, for card rows that link by URL. */
const urlAliases: Record<string, string> = {
  "natural-conception-support": "natural-conception",
  "tubal-patency-test-hsg": "hsg",
  "tubal-patency-hsg": "hsg",
  "male-fertility-evaluation": "male-fertility",
  "contraceptive-counselling": "contraception",
  "cervical-cancer-screening-hpv-vaccination": "cervical-screening",
  "menstrual-disorders": "menstrual",
  "recurrent-pregnancy-loss": "pregnancy-loss",
  "menopause-and-perimenopause": "menopause",
  "female-factor-infertility": "female-infertility",
  "thin-endometrium-and-low-ovarian-reserve": "ovarian-reserve",
  "thyroid-and-fertility": "thyroid",
};

export const badgeFor = (slug: string): string | null =>
  serviceBadges[slug] ?? serviceBadges[urlAliases[slug] ?? ""] ?? null;
