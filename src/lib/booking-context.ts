/*
 * Page -> booking reason (master prompt Part 12, site-plan §8). The Book
 * button carries the current page as the appointment form's prefilled
 * reason; `bookingHref` is what every Book button and card CTA should link
 * to instead of the bare `/contact/#book` anchor.
 */

/** Exact dropdown values, in order (site-plan §8). */
export const BOOKING_REASONS = [
  "Fertility evaluation",
  "Trying to conceive naturally",
  "Follicular monitoring",
  "Tubal patency test (HSG)",
  "Male fertility evaluation",
  "IUI",
  "IVF",
  "Egg freezing",
  "TESA or PESA",
  "PCOS",
  "Endometriosis",
  "Irregular, heavy or painful periods",
  "Recurrent miscarriage",
  "Early pregnancy scan",
  "Fibroids or adenomyosis",
  "Thyroid and fertility",
  "Low AMH or thin endometrium",
  "Contraception",
  "Pap smear or HPV vaccine",
  "Menopause",
  "Teenage girl's first visit",
  "Other",
] as const;

export type BookingReason = (typeof BOOKING_REASONS)[number];

const BY_URL: Record<string, BookingReason> = {
  "/services/fertility-evaluation/": "Fertility evaluation",
  "/services/natural-conception-support/": "Trying to conceive naturally",
  "/services/follicular-monitoring/": "Follicular monitoring",
  "/services/tubal-patency-test-hsg/": "Tubal patency test (HSG)",
  "/services/male-fertility-evaluation/": "Male fertility evaluation",
  "/treatments/iui/": "IUI",
  "/treatments/ivf/": "IVF",
  "/treatments/egg-freezing/": "Egg freezing",
  "/treatments/tesa-pesa/": "TESA or PESA",
  "/conditions/pcos/": "PCOS",
  "/conditions/endometriosis/": "Endometriosis",
  "/conditions/menstrual-disorders/": "Irregular, heavy or painful periods",
  "/conditions/recurrent-pregnancy-loss/": "Recurrent miscarriage",
  "/services/early-pregnancy-scan/": "Early pregnancy scan",
  "/conditions/fibroids/": "Fibroids or adenomyosis",
  "/conditions/adenomyosis/": "Fibroids or adenomyosis",
  "/conditions/thyroid-and-fertility/": "Thyroid and fertility",
  "/conditions/thin-endometrium-and-low-ovarian-reserve/": "Low AMH or thin endometrium",
  "/services/contraceptive-counselling/": "Contraception",
  "/services/cervical-cancer-screening-hpv-vaccination/": "Pap smear or HPV vaccine",
  "/conditions/menopause-and-perimenopause/": "Menopause",
  "/services/adolescent-gynaecology/": "Teenage girl's first visit",
  "/conditions/female-factor-infertility/": "Fertility evaluation",
  "/your-fertility-journey/": "Fertility evaluation",
};

/** Booking reason to prefill the form with, for a page with no exact match. */
export function bookingReasonFor(pathname: string): BookingReason | undefined {
  return BY_URL[pathname];
}

/** Book button href: carries the reason as a query param read by `#book`. */
export function bookingHref(pathname: string): string {
  const reason = bookingReasonFor(pathname);
  return reason ? `/contact/?reason=${encodeURIComponent(reason)}#book` : "/contact/#book";
}
