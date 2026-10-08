/*
 * Verified clinic facts (client-confirmed, Prompt 08 Part B).
 * Single source of truth: every component, schema builder and script
 * reads these from here. No literal copies anywhere else.
 */

export const facts = {
  /** Karnataka Medical Council registration number (display: "Karnataka Medical Council Reg. No. DLH20090000353KTK"). */
  kmcRegistration: "DLH20090000353KTK",
  languages: ["English", "Hindi", "Kannada"],
  yearsOfExperience: 16,
  /** ISO year-month; display as "December 2025". */
  clinicOpened: "2025-12",
} as const;

export const kmcRegLine = `Karnataka Medical Council Reg. No. ${facts.kmcRegistration}` as const;
export const languagesDisplay = "English, Hindi and Kannada" as const;
export const yearsInPracticeDisplay = `${facts.yearsOfExperience} years in practice` as const;
export const clinicOpenedDisplay = "December 2025" as const;
export const clinicOpenedShort = "Dec 2025" as const;
