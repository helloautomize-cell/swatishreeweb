/*
 * Service slug -> illustrated badge file (master prompt Part 8.3).
 * Files live under resources/assets/ and are processed to
 * public/images/assets/ by scripts/process-images.mjs.
 * Alt text lands when asset-manifest.json is delivered.
 */

export const serviceBadges: Record<string, string> = {
  // fertility
  "natural-conception": "badge-natural-conception.png",
  "fertility-evaluation": "badge-fertility-evaluation.png",
  "follicular-monitoring": "badge-follicular-monitoring.png",
  "tubal-patency-hsg": "badge-hsg.png",
  "male-fertility": "badge-male-fertility.png",
  // treatments
  iui: "badge-iui.png",
  ivf: "badge-ivf.png",
  "egg-freezing": "badge-egg-freezing.png",
  "tesa-pesa": "badge-tesa-pesa.png",
  // women's health
  "contraceptive-counselling": "badge-contraception.png",
  pcos: "badge-pcos.png",
  endometriosis: "badge-endometriosis.png",
  // pregnancy care
  "early-pregnancy-scan": "badge-early-pregnancy-scan.png",
  "recurrent-pregnancy-loss": "badge-pregnancy-loss.png",
  "reproductive-immunology": "badge-reproductive-immunology.png",
  // prevention and general care
  "cervical-screening": "badge-cervical-screening.png",
  "endometrial-biopsy": "badge-endometrial-biopsy.png",
  "menstrual-disorders": "badge-menstrual.png",
  "adolescent-gynaecology": "badge-adolescent-gynaecology.png",
  menopause: "badge-menopause.png",
  // badge-panel-only pages (Part 7.3) and remaining conditions
  adenomyosis: "badge-adenomyosis.png",
  fibroids: "badge-fibroids.png",
  "female-factor-infertility": "badge-female-infertility.png",
  "thin-endometrium-and-low-ovarian-reserve": "badge-ovarian-reserve.png",
  "thyroid-and-fertility": "badge-thyroid.png",
};

export const badgeFor = (slug: string): string | null =>
  serviceBadges[slug] ?? null;
