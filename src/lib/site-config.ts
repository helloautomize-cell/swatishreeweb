import { confirm, type ConfirmOr } from "./confirm";

/*
 * Single source of truth for site data (master prompt Part 3).
 * Every place that shows one of these values reads it from this file only.
 * CONFIRM values are client-pending facts; they are never invented.
 */

export const site = {
  name: "EVE Women and Fertility Clinic",
  shortName: "EVE",
  doctor: "Dr. Swati Shree",
  doctorShort: "Dr. Swati",
  phones: [
    { display: "72049 21212", e164: "+917204921212" },
    { display: "72049 21516", e164: "+917204921516" },
  ],
  address: {
    line1: "1st Floor, LG Complex Towers",
    line2: "Gunjur",
    city: "Bangalore",
    region: "Karnataka",
    postalCode: "560087",
    country: "IN",
  },
  foundingYear: 2024,
  foundingMonth: "December",
  hours: confirm("OPD hours"),
  whatsapp: confirm("WhatsApp number"),
  email: confirm("clinic email"),
  mapsUrl: confirm("Google Maps link"),
  geo: confirm("coordinates"),
  registration: {
    kmc: confirm("Karnataka Medical Council number string to display"),
    art: confirm("National ART and Surrogacy Registry number"),
  },
  replyTime: "24 hours",
  legalLastUpdated: confirm("legal pages last-updated date"),
} satisfies Record<string, unknown> & {
  hours: ConfirmOr<string>;
  whatsapp: ConfirmOr<string>;
  email: ConfirmOr<string>;
  mapsUrl: ConfirmOr<string>;
  geo: ConfirmOr<{ lat: number; lng: number }>;
  registration: { kmc: ConfirmOr<string>; art: ConfirmOr<string> };
  legalLastUpdated: ConfirmOr<string>;
};

export const brand = {
  logoFull: "brand/logo-full-transparent.png",
  logoWhite: "brand/logo-white-transparent.png",
  logoMark: "brand/logo-mark-transparent.png",
} as const;
