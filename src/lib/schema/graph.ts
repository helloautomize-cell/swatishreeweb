/*
 * Per-page JSON-LD builder (site plan 9.2 matrix, 9.9 rules).
 * One @graph per page: global nodes + page-type nodes. Every value comes
 * from site-config or the page's parsed content, never typed by hand.
 * CONFIRM values are pruned before output (and reported by launch-check).
 */

import { abs, site } from "../site-config";
import { collectConfirms, confirm, type ConfirmOr } from "../confirm";
import {
  IDS,
  clinicNode,
  consultationServiceNode,
  doctorNode,
  placeNode,
  pruneConfirms,
  websiteNode,
} from "./nodes";
import type { PageDoc } from "../content/load";
import { childrenOf } from "../content/load";
import { plainText } from "../content/load";
import { imageEntry, pageLeadImage } from "../images";

type Json = Record<string, unknown>;

const ABOUT_FRAG: Record<string, string> = {
  MedicalCondition: "condition",
  MedicalProcedure: "procedure",
  MedicalTherapy: "therapy",
  MedicalTest: "test",
  DiagnosticProcedure: "procedure",
  TherapeuticProcedure: "procedure",
};

/* Well-known medical entity -> canonical Wikipedia article, for about-node
 * sameAs (audit SEO-017). Only entities with a stable article are listed. */
const WIKIPEDIA_SAMEAS: Record<string, string> = {
  "endometriosis": "https://en.wikipedia.org/wiki/Endometriosis",
  "polycystic ovary syndrome": "https://en.wikipedia.org/wiki/Polycystic_ovary_syndrome",
  "adenomyosis": "https://en.wikipedia.org/wiki/Adenomyosis",
  "uterine fibroids": "https://en.wikipedia.org/wiki/Uterine_fibroid",
  "uterine fibroid": "https://en.wikipedia.org/wiki/Uterine_fibroid",
  "female infertility": "https://en.wikipedia.org/wiki/Infertility",
  "male infertility": "https://en.wikipedia.org/wiki/Male_infertility",
  "recurrent pregnancy loss": "https://en.wikipedia.org/wiki/Miscarriage#Recurrent_miscarriage",
  "recurrent miscarriage": "https://en.wikipedia.org/wiki/Miscarriage#Recurrent_miscarriage",
  "miscarriage": "https://en.wikipedia.org/wiki/Miscarriage",
  "in vitro fertilisation": "https://en.wikipedia.org/wiki/In_vitro_fertilisation",
  "in vitro fertilization": "https://en.wikipedia.org/wiki/In_vitro_fertilisation",
  "intrauterine insemination": "https://en.wikipedia.org/wiki/Intrauterine_insemination",
  "oocyte cryopreservation": "https://en.wikipedia.org/wiki/Oocyte_cryopreservation",
  "egg freezing": "https://en.wikipedia.org/wiki/Oocyte_cryopreservation",
  "embryo transfer": "https://en.wikipedia.org/wiki/Embryo_transfer",
  "frozen embryo transfer": "https://en.wikipedia.org/wiki/Embryo_transfer",
  "blastocyst": "https://en.wikipedia.org/wiki/Blastocyst",
  "anti-mullerian hormone test": "https://en.wikipedia.org/wiki/Anti-M%C3%BCllerian_hormone",
  "hysterosalpingography": "https://en.wikipedia.org/wiki/Hysterosalpingography",
  "preimplantation genetic testing": "https://en.wikipedia.org/wiki/Preimplantation_genetic_diagnosis",
  "intracytoplasmic sperm injection": "https://en.wikipedia.org/wiki/Intracytoplasmic_sperm_injection",
  "icsi": "https://en.wikipedia.org/wiki/Intracytoplasmic_sperm_injection",
  "semen analysis": "https://en.wikipedia.org/wiki/Semen_analysis",
  "ovarian reserve": "https://en.wikipedia.org/wiki/Ovarian_reserve",
  "age-related fertility decline": "https://en.wikipedia.org/wiki/Advanced_maternal_age",
  "ovarian hyperstimulation syndrome": "https://en.wikipedia.org/wiki/Ovarian_hyperstimulation_syndrome",
  "hysteroscopy": "https://en.wikipedia.org/wiki/Hysteroscopy",
  "letrozole": "https://en.wikipedia.org/wiki/Letrozole",
  "menopause": "https://en.wikipedia.org/wiki/Menopause",
  "perimenopause": "https://en.wikipedia.org/wiki/Menopause",
  "menstrual disorder": "https://en.wikipedia.org/wiki/Menstrual_disorder",
  "menstrual disorders": "https://en.wikipedia.org/wiki/Menstrual_disorder",
  "endometrial biopsy": "https://en.wikipedia.org/wiki/Endometrial_biopsy",
  "cervical cancer screening": "https://en.wikipedia.org/wiki/Cervical_screening",
  "pap smear": "https://en.wikipedia.org/wiki/Pap_test",
  "early pregnancy scan": "https://en.wikipedia.org/wiki/Obstetric_ultrasonography",
  "thyroid and fertility": "https://en.wikipedia.org/wiki/Thyroid",
  "testicular sperm extraction": "https://en.wikipedia.org/wiki/Testicular_sperm_extraction",
  "tesa": "https://en.wikipedia.org/wiki/Testicular_sperm_extraction",
};

const HUB_SEGMENT: Record<string, { name: string; url: string }> = {
  services: { name: "Services", url: "/services/" },
  treatments: { name: "Treatments", url: "/treatments/" },
  conditions: { name: "Conditions", url: "/conditions/" },
  blog: { name: "Blog", url: "/blog/" },
};

function breadcrumbNode(doc: PageDoc): Json | null {
  if (doc.url === "/" || doc.url === "/404") return null;
  const items: Json[] = [
    { "@type": "ListItem", position: 1, name: "Home", item: abs("/") },
  ];
  const seg = doc.url.replace(/^\//, "").replace(/\/$/, "").split("/");
  if (seg.length > 1 && HUB_SEGMENT[seg[0]]) {
    items.push({
      "@type": "ListItem",
      position: 2,
      name: HUB_SEGMENT[seg[0]].name,
      item: abs(HUB_SEGMENT[seg[0]].url),
    });
  }
  /* Post clusters render as a plain-text crumb on the page but have no
   * canonical URL, so they can't be a valid middle ListItem (Google
   * requires `item` on every non-final element). */
  items.push({ "@type": "ListItem", position: items.length + 1, name: doc.name });
  return {
    "@type": "BreadcrumbList",
    "@id": `${abs(doc.url)}#breadcrumb`,
    itemListElement: items,
  };
}

function faqNode(doc: PageDoc): Json | null {
  if (!doc.faqs.length) return null;
  return {
    "@type": "FAQPage",
    "@id": `${abs(doc.url)}#faq`,
    mainEntity: doc.faqs.map((f) => ({
      "@type": "Question",
      name: plainText(f.q),
      acceptedAnswer: { "@type": "Answer", text: f.aText },
    })),
  };
}

function aboutNode(doc: PageDoc): Json | null {
  const about = doc.meta.about;
  if (!about) return null;
  return {
    "@type": about.type,
    "@id": `${abs(doc.url)}#${ABOUT_FRAG[about.type] ?? "about"}`,
    name: about.name,
    alternateName: about.alternateName,
    sameAs: WIKIPEDIA_SAMEAS[about.name.toLowerCase()],
  };
}

function medicalWebPageNode(doc: PageDoc, type: string[] | string): Json {
  const about = aboutNode(doc);
  return {
    "@type": type,
    "@id": `${abs(doc.url)}#webpage`,
    url: abs(doc.url),
    name: doc.meta.title ?? doc.h1,
    inLanguage: "en-IN",
    isPartOf: { "@id": IDS.website },
    about: about ? { "@id": about["@id"] } : undefined,
    reviewedBy: doc.meta.reviewer ? { "@id": IDS.doctor } : undefined,
    lastReviewed: doc.meta.lastReviewed?.includes("CONFIRM")
      ? (confirm(doc.meta.lastReviewed.replace(/^\[CONFIRM:|\]$/g, "")) as ConfirmOr<string>)
      : doc.meta.lastReviewed,
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".answer-first", ".at-a-glance"],
    },
    mainEntity: doc.faqs.length ? { "@id": `${abs(doc.url)}#faq` } : undefined,
  };
}

function itemListOf(urls: string[], nameFor: (u: string) => string): Json {
  return {
    "@type": "ItemList",
    itemListElement: urls.map((u, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: abs(u),
      name: nameFor(u),
    })),
  };
}

function hubChildren(doc: PageDoc): PageDoc[] {
  return childrenOf(doc.url);
}

function pageNodes(doc: PageDoc): Json[] {
  const nodes: Json[] = [];
  const pageType = (t: string[] | string) =>
    medicalWebPageNode(doc, t) as Json;

  switch (doc.kind) {
    case "home": {
      nodes.push(pageType(["MedicalWebPage", "WebPage"]));
      nodes.push(consultationServiceNode());
      const services = childrenOf("/services/");
      nodes.push(
        itemListOf(
          services.map((s) => s.url),
          (u) => services.find((s) => s.url === u)?.name ?? u,
        ),
      );
      break;
    }
    case "hub": {
      nodes.push({
        ...pageType("CollectionPage"),
        "@type": "CollectionPage",
      });
      const kids = hubChildren(doc);
      nodes.push(itemListOf(kids.map((k) => k.url), (u) => kids.find((k) => k.url === u)?.name ?? u));
      break;
    }
    case "detail": {
      nodes.push(pageType(["MedicalWebPage", "WebPage"]));
      const about = aboutNode(doc);
      if (about) nodes.push(about);
      break;
    }
    case "post": {
      const about = aboutNode(doc);
      if (about) nodes.push(about);
      const heroFile = pageLeadImage(doc.url);
      const hero = heroFile ? imageEntry(heroFile) : null;
      const wordCount = [
        doc.lead.markdown,
        ...doc.sections.map((sec) => sec.markdown),
        ...doc.faqs.map((f) => `${f.q} ${f.a}`),
      ]
        .map(plainText)
        .join(" ")
        .split(/\s+/)
        .filter(Boolean).length;
      nodes.push({
        ...pageType(["BlogPosting", "MedicalWebPage"]),
        headline: doc.meta.title ?? doc.h1,
        author: { "@id": IDS.doctor },
        reviewedBy: { "@id": IDS.doctor },
        datePublished: doc.meta.datePublished?.includes("CONFIRM")
          ? confirm("launch date")
          : doc.meta.datePublished,
        dateModified: doc.meta.dateModified?.includes("CONFIRM")
          ? confirm("launch date")
          : doc.meta.dateModified,
        publisher: { "@id": IDS.clinic },
        isPartOf: { "@type": "Blog", "@id": `${abs("/blog/")}#blog` },
        image: hero ? abs(hero.src) : abs(`${doc.url}opengraph-image`),
        citation: doc.sources.map(
          (src) => src.match(/\((https?:\/\/[^)\s]+)\)/)?.[1] ?? src,
        ),
        articleSection: doc.meta.cluster ?? doc.meta.category,
        keywords: doc.meta.keywords?.length ? doc.meta.keywords.join(", ") : undefined,
        wordCount,
        about: about ? { "@id": about["@id"] } : undefined,
        mainEntityOfPage: { "@id": `${abs(doc.url)}#webpage` },
        mentions: (
          doc.meta.entities?.length ? doc.meta.entities : about ? [about.name] : []
        ).map((e) => ({ "@type": "Thing", name: e })),
      });
      break;
    }
    case "blogIndex": {
      const posts = childrenOf("/blog/");
      nodes.push({
        "@type": "Blog",
        "@id": `${abs(doc.url)}#blog`,
        url: abs(doc.url),
        name: doc.meta.title ?? doc.h1,
        publisher: { "@id": IDS.clinic },
        blogPost: posts.map((p) => ({ "@id": `${abs(p.url)}#webpage` })),
      });
      nodes.push(itemListOf(posts.map((p) => p.url), (u) => posts.find((p) => p.url === u)?.meta.title ?? u));
      break;
    }
    case "legal": {
      nodes.push({
        "@type": "WebPage",
        "@id": `${abs(doc.url)}#webpage`,
        url: abs(doc.url),
        name: doc.meta.title ?? doc.h1,
        inLanguage: "en-IN",
        isPartOf: { "@id": IDS.website },
        dateModified: site.legalLastUpdated,
      });
      break;
    }
    case "core": {
      if (doc.url === "/about/") {
        nodes.push(pageType("AboutPage"));
      } else if (doc.url === "/dr-swati-shree/") {
        nodes.push({ ...pageType("ProfilePage"), mainEntity: { "@id": IDS.doctor } });
      } else if (doc.url === "/contact/") {
        nodes.push({ ...pageType("ContactPage"), mainEntity: { "@id": IDS.clinic } });
        nodes.push(consultationServiceNode());
      } else if (doc.url === "/coming-from-outside-bangalore/") {
        nodes.push(pageType("WebPage"));
        nodes.push(consultationServiceNode());
      } else if (doc.url === "/your-fertility-journey/") {
        nodes.push(pageType("MedicalWebPage"));
      } else {
        nodes.push(pageType("WebPage"));
      }
      break;
    }
    case "utility":
      break;
  }

  const faq = faqNode(doc);
  if (faq) nodes.push(faq);
  return nodes;
}

/** The full JSON-LD object for one page. `null` for noindex utility pages. */
export function buildGraph(doc: PageDoc): Json | null {
  if (doc.kind === "utility") return null;
  const graph = [
    websiteNode(),
    clinicNode(),
    placeNode(),
    doctorNode(),
    breadcrumbNode(doc),
    ...pageNodes(doc),
  ].filter(Boolean) as Json[];
  return {
    "@context": "https://schema.org",
    "@graph": graph.map((n) => pruneConfirms(n)),
  };
}

/** Confirms present in this page's graph (pre-prune), for client-inputs. */
export function graphConfirms(doc: PageDoc): { path: string; note: string }[] {
  const raw = [
    clinicNode(),
    placeNode(),
    doctorNode(),
    breadcrumbNode(doc),
    ...pageNodes(doc),
  ].filter(Boolean);
  return collectConfirms(raw, `@graph`).map((c) => ({ ...c, path: `${doc.url} ${c.path}` }));
}
