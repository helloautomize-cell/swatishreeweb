/*
 * Home page data (Part 7.1): extracts the structured fields and lists out of
 * resources/content/index.md so the bespoke Home template never retypes copy.
 * Approved deviation applied here: named hospitals stay off Home, so the
 * Why EVE "hospital experience" card is reworded and the doctor card's
 * Experience line is not used.
 */

import type { PageDoc, Section } from "./content/load";
import { plainText } from "./content/load";

const stripTicks = (s: string) => s.replace(/`([^`]*)`/g, "$1").trim();

const field = (s: Section | undefined, label: RegExp) =>
  s?.fields.find((f) => label.test(f.label))?.value;

/** `1. **Title.** text` numbered items -> title/text pairs. */
export function numbered(markdown: string): { title: string; text: string }[] {
  const parts = markdown.split(/^(\d+)\.\s+\*\*/m);
  const out: { title: string; text: string }[] = [];
  for (let i = 1; i + 1 < parts.length; i += 2) {
    const chunk = parts[i + 1];
    const close = chunk.indexOf("**");
    if (close === -1) continue;
    out.push({
      title: chunk.slice(0, close).trim().replace(/\.$/, ""),
      text: chunk.slice(close + 2).trim(),
    });
  }
  return out;
}

/** `- text` or `- **a** · b` bullets. */
function bullets(markdown: string): string[] {
  return markdown
    .split("\n")
    .map((l) => l.replace(/^-\s+/, "").trim())
    .filter((l) => l && !l.startsWith("#"));
}

/** `- label → /url/` rows. */
function links(markdown: string): { label: string; href: string }[] {
  return bullets(markdown)
    .map((b) => b.match(/^(.*?)\s*→\s*(\/\S+)\s*$/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => ({ label: m[1].trim(), href: m[2] }));
}

export type HomeData = {
  hero: {
    eyebrow: string;
    h1: string;
    sub: string;
    chips: string[];
    doctorChip: string;
    namePill: string;
    mobileLine: string;
  };
  answerFirst: string;
  concernLabel: string;
  concerns: { label: string; href: string }[];
  why: { h2: string; intro: string; cards: { title: string; text: string }[] };
  about: {
    h2: string;
    labels: string[];
    paragraph: string;
    rows: { badge: string; title: string; text: string }[];
    link: string;
  };
  help: { h2: string; groups: { label: string; intro: string; cards: { title: string; line: string }[] }[] };
  visit: { steps: { title: string; text: string }[] };
  visitBand: { h2: string; text: string; hours: string };
  doctor: { h2: string; text: string; quals: string; experience: string; chips: string[] };
  plan: { h2: string; text: string; link: string };
  marquee: string[];
  blogLink: string;
  faqs: { q: string; a: string }[];
  contact: { title: string; rows: { label: string; text: string }[] };
};

/* Approved Home deviation: strip named hospitals from Home copy only. */
const sanitizeHome = (s: string) =>
  s.replace(
    /,?\s*and trained at AIIMS and Sakra World Hospital/i,
    ", after specialist training in obstetrics, gynaecology and reproductive medicine",
  );

export function homeData(doc: PageDoc): HomeData {
  const by = (re: RegExp) => doc.sections.find((s) => re.test(s.id));

  const hero = by(/^hero$/);
  const answer = by(/^answer-first/);
  const concern = by(/^find-care/);
  const why = by(/^why-eve$/);
  const about = by(/^about-eve$/);
  const help = by(/^how-we-can-help$/);
  const visit = by(/^your-first-visit/);
  const visitBand = by(/^visit-band$/);
  const doctor = by(/^meet-your-doctor$/);
  const plan = by(/evaluation-comes-first/);
  const marquee = by(/^conditions-we-look-after/);
  const blog = by(/^from-our-blog$/);
  const quick = by(/^quick-answers$/);
  const contact = by(/^contact-block$/);

  // "How we can help": `**Group**` heads + `Intro:` fields (order-aligned) + `- card` rows.
  const groups: HomeData["help"]["groups"] = [];
  if (help) {
    const intros = help.fields.filter((f) => f.label === "Intro").map((f) => f.value);
    const blocks = help.markdown.split(/\n(?=\*\*[^*]+\*\*\s*$)/m).filter((b) => b.trim());
    blocks.forEach((block, gi) => {
      const head = block.match(/^\*\*([^*]+)\*\*\s*$/m)?.[1]?.trim();
      if (!head) return;
      const cards = bullets(block)
        .map((b) => b.match(/^(.*?)\s*·\s*(.*)$/))
        .filter((m): m is RegExpMatchArray => !!m)
        .map((m) => ({ title: m[1].trim(), line: m[2].trim() }));
      groups.push({ label: head, intro: intros[gi] ?? "", cards });
    });
  }

  return {
    hero: {
      eyebrow: stripTicks(field(hero, /^Eyebrow/) ?? ""),
      h1: stripTicks(field(hero, /^H1/) ?? doc.h1),
      sub: stripTicks(field(hero, /^Sub/) ?? ""),
      chips: (field(hero, /^Service chips/) ?? "").split(/\s*·\s*/).filter(Boolean),
      doctorChip: stripTicks(field(hero, /^Doctor chip/) ?? ""),
      namePill: stripTicks(field(hero, /name pill/i) ?? ""),
      mobileLine: stripTicks(field(hero, /^Mobile short line/) ?? ""),
    },
    answerFirst: answer?.markdown ?? "",
    concernLabel: stripTicks(field(concern, /label/i) ?? "What brings you here today"),
    concerns: links(concern?.markdown ?? ""),
    why: {
      h2: stripTicks(field(why, /^H2/) ?? why?.heading ?? ""),
      intro: stripTicks(field(why, /^Intro/) ?? ""),
      cards: numbered(why?.markdown ?? "").map((c) => ({
        title: c.title,
        text: stripTicks(sanitizeHome(c.text)),
      })),
    },
    about: {
      h2: stripTicks(field(about, /^H2/) ?? about?.heading ?? ""),
      labels: (field(about, /labels/i) ?? "")
        .split(/\s*·\s*/)
        .map((l) => stripTicks(l.replace(/^"|"$/g, "")))
        .filter(Boolean),
      paragraph: stripTicks(field(about, /^Paragraph/) ?? ""),
      rows: bullets(about?.markdown ?? "")
        .map((b) => b.match(/^\((\w[\w -]*)\)\s*\*\*(.+?)\*\*\s*·\s*(.*)$/))
        .filter((m): m is RegExpMatchArray => !!m)
        .map((m) => ({ badge: m[1], title: m[2], text: m[3] })),
      link: stripTicks(field(about, /^Link/) ?? "").replace(/\s*→\s*$/, ""),
    },
    help: { h2: stripTicks(field(help, /^H2/) ?? help?.heading ?? ""), groups },
    visit: { steps: numbered(visit?.markdown ?? "") },
    visitBand: {
      h2: stripTicks(field(visitBand, /^H2/) ?? "Visit us in Gunjur"),
      text: stripTicks(field(visitBand, /^Text/) ?? ""),
      hours: stripTicks(field(visitBand, /^Hours/) ?? ""),
    },
    doctor: {
      h2: stripTicks(field(doctor, /^H2/) ?? doctor?.heading ?? ""),
      text: stripTicks(field(doctor, /Card text/) ?? ""),
      quals: stripTicks(field(doctor, /Qualifications/) ?? ""),
      experience: stripTicks(field(doctor, /^Experience/) ?? ""),
      chips: (field(doctor, /^Chips/) ?? "").split(/\s*·\s*/).map(stripTicks).filter(Boolean),
    },
    plan: {
      h2: stripTicks(field(plan, /^H2/) ?? plan?.heading ?? ""),
      text: stripTicks(field(plan, /^Text/) ?? ""),
      link: stripTicks(field(plan, /^Link/) ?? "").replace(/\s*→\s*$/, ""),
    },
    marquee: plainText(marquee?.markdown ?? "")
      .split(/\s*·\s*/)
      .filter(Boolean),
    blogLink: stripTicks(field(blog, /^Link/) ?? "").replace(/\s*→\s*$/, ""),
    faqs: (quick?.faqs ?? []).map((f) => ({ q: f.q, a: f.a })),
    contact: {
      title: stripTicks(field(contact, /^Title/) ?? "Talk to us"),
      rows: bullets(contact?.markdown ?? "")
        .map((b) => b.match(/^\*\*(.+?)\*\*\s*(.*)$/))
        .filter((m): m is RegExpMatchArray => !!m)
        .map((m) => ({ label: m[1], text: m[2] })),
    },
  };
}
