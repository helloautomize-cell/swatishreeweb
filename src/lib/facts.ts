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
  /**
   * Career entries from Dr. Swati Shree's CV (11 April 2025), oldest first.
   * Roles as held, no embellishment. Display ranges: "Jul 2011 - Sep 2011".
   */
  career: [
    { org: "AIIMS, New Delhi", role: "Junior Resident, Department of Blood Bank", from: "2011-07", to: "2011-09" },
    { org: "Deen Dayal Hospital, Delhi", role: "Casualty Medical Officer", from: "2013-01", to: "2014-03" },
    { org: "Kanke General Hospital and Research Centre, Ranchi", role: "Senior Resident, Department of Obstetrics and Gynaecology", from: "2017-05", to: "2019-03" },
    { org: "Sakra World Hospital, Bangalore", role: "Senior Resident, Department of Obstetrics and Gynaecology", from: "2019-04", to: "2019-09" },
    { org: "KJK Hospital and Fertility Research Centre, Trivandrum", role: "Fellowship in Reproductive Medicine", from: "2020-01", to: "2021-01" },
    { org: "Garbhagudi IVF Centre, Bangalore", role: "Consultant", from: "2021-03", to: "2022-01" },
    { org: "Apollo Fertility, Brookefield and Varthur", role: "Consultant Infertility Specialist", from: "2022-02", to: "2024-10" },
    { org: "Motherhood Fertility and IVF Centre, Whitefield", role: "Consultant Infertility Specialist", from: "2024-11", to: null },
  ],
  /** Professional memberships from the CV (11 April 2025). */
  memberships: [
    "Indian Medical Association (IMA)",
    "Federation of Obstetric and Gynaecological Societies of India (FOGSI)",
    "Society of Obstetric Medicine of India (SOMI)",
    "Indian Society for Assisted Reproduction (ISAR)",
  ],
  /** Qualifications with awarding body and year, oldest first. */
  qualifications: [
    { name: "MBBS", body: "Patna Medical College and Hospital, Patna University", year: 2008, category: "degree" },
    { name: "DNB, Obstetrics and Gynaecology", body: "National Board of Examinations", year: 2017, category: "degree" },
    { name: "Fellowship in Reproductive Medicine", body: "KJK Hospital and Fertility Research Centre", year: 2021, category: "fellowship" },
    { name: "MRCOG", body: "Royal College of Obstetricians and Gynaecologists, UK", year: 2023, category: "membership" },
  ],
} as const;

export const kmcRegLine = `Karnataka Medical Council Reg. No. ${facts.kmcRegistration}` as const;
export const languagesDisplay = "English, Hindi and Kannada" as const;
export const yearsInPracticeDisplay = `${facts.yearsOfExperience} years in practice` as const;
export const clinicOpenedDisplay = "December 2025" as const;
export const clinicOpenedShort = "Dec 2025" as const;

/** "2026-09-14" -> "14 September 2026" (UTC so SSR and client agree). */
export const formatReviewDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
