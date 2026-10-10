/*
 * Global schema nodes (site plan 9.3-9.5). One @graph per page; these four
 * stable ids appear on every page. CONFIRM values come from site-config
 * (or confirm() here) and are pruned from the emitted JSON-LD; each is
 * still reported by launch-check / client-inputs-needed.
 */

import { abs, entityStatement, site, siteUrl } from "../site-config";
import { facts } from "../facts";
import { isConfirm, type ConfirmOr } from "../confirm";

/** site.geo literal type is ConfirmValue; widen so narrowing works. */
const geoPoint = (): ConfirmOr<{ lat: number; lng: number }> => site.geo;
const geoJson = (geo: ReturnType<typeof geoPoint>) =>
  isConfirm(geo)
    ? geo
    : { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng };

export const IDS = {
  clinic: `${siteUrl}/#clinic`,
  place: `${siteUrl}/#place`,
  doctor: `${siteUrl}/#dr-swati-shree`,
  website: `${siteUrl}/#website`,
  consultation: `${siteUrl}/#service-consultation`,
} as const;

type Json = Record<string, unknown>;

/** Drop CONFIRM leaves (and objects/arrays that become empty) from a node. */
export function pruneConfirms<T>(v: T): T {
  if (isConfirm(v)) return undefined as T;
  if (Array.isArray(v)) {
    const arr = v
      .map((x) => pruneConfirms(x))
      .filter(
        (x) =>
          x !== undefined &&
          !(typeof x === "object" && x !== null && !Array.isArray(x) && Object.keys(x).length === 0),
      );
    return arr as T;
  }
  if (typeof v === "object" && v !== null) {
    const out: Json = {};
    for (const [k, x] of Object.entries(v)) {
      const p = pruneConfirms(x);
      if (p === undefined) continue;
      if (typeof p === "object" && p !== null && !Array.isArray(p) && Object.keys(p).length === 0)
        continue;
      out[k] = p;
    }
    return out as T;
  }
  return v;
}

export function clinicNode(): Json {
  const geo = geoPoint();
  return {
    "@type": "MedicalClinic",
    "@id": IDS.clinic,
    name: site.name,
    alternateName: [
      "EVE Women & Fertility Clinic",
      "EVE Women and Fertility Clinic by Dr Swati Shree",
      "EVE Clinic Bengaluru",
    ],
    url: abs("/"),
    logo: { "@type": "ImageObject", url: abs("/images/brand/logo-full.svg"), width: 1099, height: 338 },
    image: [abs("/images/clinic-reception-4x3-w768.webp"), abs("/images/clinic-consultation-room-4x3-w768.webp")],
    description: entityStatement,
    slogan: "Fertility care built around you",
    founder: { "@id": IDS.doctor },
    employee: { "@id": IDS.doctor },
    foundingDate: facts.clinicOpened,
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    knowsAbout: [
      "Infertility",
      "In vitro fertilisation",
      "Intrauterine insemination",
      "Egg freezing",
      "Polycystic ovary syndrome",
      "Endometriosis",
      "Recurrent pregnancy loss",
      "Menopause",
      "Male infertility",
      "Cervical cancer screening",
    ],
    isAcceptingNewPatients: true,
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    telephone: site.phones[0].e164,
    email: site.email,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "appointments",
        telephone: site.phones[0].e164,
        availableLanguage: [...facts.languages],
        areaServed: "IN",
        hoursAvailable: site.hours,
      },
      {
        "@type": "ContactPoint",
        contactType: "appointments",
        telephone: site.phones[1].e164,
        availableLanguage: [...facts.languages],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: "Bengaluru",
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    location: { "@id": IDS.place },
    geo: geoJson(geo),
    hasMap: site.mapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: site.opensTime,
        closes: site.closesTime,
      },
    ],
    areaServed: [
      {
        "@type": "GeoCircle",
        name: "Primary area: Gunjur and nearby East Bengaluru",
        geoMidpoint: geoJson(geo),
        geoRadius: "8000",
      },
      {
        "@type": "GeoCircle",
        name: "Greater Bengaluru",
        geoMidpoint: geoJson(geo),
        geoRadius: "30000",
      },
      { "@type": "City", name: "Bengaluru", sameAs: "https://en.wikipedia.org/wiki/Bangalore" },
      { "@type": "AdministrativeArea", name: "Bengaluru Urban district" },
      { "@type": "State", name: "Karnataka" },
      { "@type": "Place", name: "Varthur, Bengaluru" },
      { "@type": "Place", name: "Whitefield, Bengaluru" },
      { "@type": "Place", name: "Sarjapur Road, Bengaluru" },
      { "@type": "Place", name: "Bellandur, Bengaluru" },
      { "@type": "Place", name: "Marathahalli, Bengaluru" },
    ],
    availableService: [
      { "@id": abs("/treatments/iui/#procedure") },
      { "@id": abs("/treatments/ivf/#procedure") },
      { "@id": abs("/treatments/egg-freezing/#procedure") },
      { "@id": abs("/treatments/tesa-pesa/#procedure") },
      { "@id": abs("/services/fertility-evaluation/#test") },
    ],
    paymentAccepted: site.paymentAccepted,
    currenciesAccepted: "INR",
    sameAs: [
      site.mapsUrl,
      site.instagram,
      site.facebook,
      site.youtube,
      site.linkedin,
    ],
    potentialAction: {
      "@type": "ReserveAction",
      name: "Book a consultation",
      target: {
        "@type": "EntryPoint",
        urlTemplate: abs("/contact/#book"),
        inLanguage: "en-IN",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "Reservation", name: "Consultation request" },
    },
  };
}

export function placeNode(): Json {
  const geo = geoPoint();
  return {
    "@type": "Place",
    "@id": IDS.place,
    name: `${site.name}, LG Complex Towers`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: "Bengaluru",
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: geoJson(geo),
    hasMap: site.mapsUrl,
    containedInPlace: { "@type": "AdministrativeArea", name: "Gunjur, Varthur, East Bengaluru" },
    publicAccess: true,
  };
}

export function doctorNode(): Json {
  return {
    "@type": ["Physician", "Person"],
    "@id": IDS.doctor,
    name: site.doctor,
    honorificPrefix: "Dr.",
    honorificSuffix: "MBBS, DNB (OBG), MRCOG (UK)",
    jobTitle: "Reproductive medicine specialist and founder",
    identifier: {
      "@type": "PropertyValue",
      propertyID: "Karnataka Medical Council Registration",
      value: facts.kmcRegistration,
    },
    url: abs("/dr-swati-shree/"),
    image: abs("/images/doctors/dr-swati-shree-hero.jpg"),
    medicalSpecialty: ["Gynecologic", "Obstetric"],
    knowsAbout: [
      "Reproductive medicine",
      "Infertility",
      "IVF",
      "IUI",
      "PCOS",
      "Recurrent pregnancy loss",
      "Menopause",
    ],
    knowsLanguage: [...facts.languages],
    worksFor: { "@id": IDS.clinic },
    /* alumniOf = the MBBS school only. AIIMS, Kanke and Sakra were jobs, not
     * schools; KJK Fellowship sits under hasCredential. */
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Patna Medical College and Hospital" },
    ],
    hasCredential: [
      ...facts.qualifications.map((q) => ({
        "@type": "EducationalOccupationalCredential" as const,
        credentialCategory: q.category,
        name: q.name,
        recognizedBy: {
          "@type": "Organization" as const,
          name: q.body,
          ...(q.name === "MRCOG"
            ? { sameAs: "https://en.wikipedia.org/wiki/Royal_College_of_Obstetricians_and_Gynaecologists" }
            : {}),
        },
        dateCreated: String(q.year),
      })),
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Medical registration",
        recognizedBy: { "@type": "Organization", name: "Karnataka Medical Council" },
        identifier: facts.kmcRegistration,
      },
    ],
    memberOf: [
      { "@type": "Organization", name: "Royal College of Obstetricians and Gynaecologists" },
    ],
    award: "16th GCU International Women's Day Award, Garden City University",
  };
}

export function websiteNode(): Json {
  return {
    "@type": "WebSite",
    "@id": IDS.website,
    url: abs("/"),
    name: site.name,
    inLanguage: "en-IN",
    publisher: { "@id": IDS.clinic },
  };
}

/** The serviceable-location layer (9.4): home, contact, outstation pages. */
export function consultationServiceNode(): Json {
  const geo = geoPoint();
  return {
    "@type": "Service",
    "@id": IDS.consultation,
    name: "Fertility and women's health consultation",
    serviceType: "Gynaecology and reproductive medicine consultation",
    provider: { "@id": IDS.clinic },
    audience: { "@type": "PeopleAudience", suggestedGender: "female" },
    areaServed: [
      {
        "@type": "GeoCircle",
        geoMidpoint: isConfirm(geo)
          ? geo
          : { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
        geoRadius: "30000",
      },
      { "@type": "City", name: "Bengaluru" },
      { "@type": "Country", name: "India" },
    ],
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceLocation: { "@id": IDS.place },
        servicePhone: {
          "@type": "ContactPoint",
          telephone: site.phones[0].e164,
          contactType: "appointments",
        },
        serviceUrl: abs("/contact/#book"),
        availableLanguage: ["en"],
        name: "Clinic visit",
      },
    ],
    hoursAvailable: site.hours,
  };
}

/** Raw node map for confirm-collection (pre-prune). */
export function globalNodesRaw(): Json[] {
  return [clinicNode(), placeNode(), doctorNode(), websiteNode()];
}
