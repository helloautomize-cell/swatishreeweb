/*
 * Content loader (master prompt Part 9.1). Server-only: runs at build time
 * over resources/content/**.md produced by scripts/split-content.mjs.
 * Each file's frontmatter is validated by Zod; the body is split into
 * `### ` sections; FAQs, sources and reviewer notes are extracted so the
 * same parsed data drives both the visible page and the JSON-LD graph
 * (which guarantees the FAQ-equality build check).
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, resolve, relative } from "node:path";
import { parse as parseYaml } from "yaml";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import { frontmatterSchema, type Frontmatter } from "./schema";

const CONTENT_DIR = resolve(process.cwd(), "resources/content");

export const CONFIRM_RE = /\[CONFIRM(?::([^\]]*))?\]|\[(date)\]/g;

export type PageKind =
  | "home"
  | "hub"
  | "detail"
  | "legal"
  | "post"
  | "blogIndex"
  | "core"
  | "utility";

export type FaqItem = { q: string; a: string; aText: string };

export type Section = {
  id: string;
  /** Display heading, `01 /`-style numeral split out. */
  numeral: string | null;
  heading: string | null;
  /** Raw markdown body (after labeled-field extraction). */
  markdown: string;
  /** `Label: value` spec lines pulled out of the section. */
  fields: { label: string; value: string }[];
  kind: "normal" | "faqs" | "sources" | "glance";
  /** Parsed Q/A pairs for kind="faqs". */
  faqs?: FaqItem[];
  /** Bullet items for kind="sources". */
  items?: string[];
};

export type PageDoc = {
  file: string;
  url: string;
  kind: PageKind;
  num: number;
  name: string;
  meta: Frontmatter;
  h1: string;
  lead: { markdown: string; fields: { label: string; value: string }[] };
  sections: Section[];
  faqs: FaqItem[];
  sources: string[];
  reviewerNote: string | null;
  confirms: { note: string; where: string }[];
};

/** Plain text for JSON-LD / equality checks: markdown and CONFIRM stripped. */
export function plainText(md: string): string {
  return md
    .replace(/`([^`]*)`/g, "$1")
    .replace(/(^|\n)\s*>+\s*/g, "$1") // blockquote markers
    .replace(/\*\*([^*]*)\*\*/g, "$1")
    .replace(/\*([^*]*)\*/g, "$1")
    .replace(/\s*(?:\[CONFIRM(?::[^\]]*)?\]|\[date\])/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export const mdParser = unified().use(remarkParse).use(remarkGfm);

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/\*/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const FIELD_RE = /^([A-Z][A-Za-z0-9 (),.'&/-]{0,45}?):\s*(.*)$/;

/** Pull `Label: value` spec lines out of a markdown chunk. */
function extractFields(markdown: string): {
  fields: { label: string; value: string }[];
  markdown: string;
} {
  const fields: { label: string; value: string }[] = [];
  const keep: string[] = [];
  for (const line of markdown.split("\n")) {
    const m = line.match(FIELD_RE);
    // A field label is short, starts with a capital, and is not inside a list.
    if (m && !/^\s*[-*>#\d]/.test(line) && !m[1].includes("  ")) {
      fields.push({ label: m[1].trim(), value: m[2].trim() });
      keep.push(""); // preserve blank spacing so paragraphs stay split
    } else {
      keep.push(line);
    }
  }
  return { fields, markdown: keep.join("\n").replace(/\n{3,}/g, "\n\n").trim() };
}

/** Parse `1. **Q?**\n   A` numbered items into FAQ entries. */
function extractFaqs(markdown: string): FaqItem[] {
  const parts = markdown.split(/^(\d+)\.\s+\*\*/m);
  const items: FaqItem[] = [];
  // parts: [pre, "1", "Q?**\n   A", "2", "Q?**\n   A", ...]
  for (let i = 1; i + 1 < parts.length; i += 2) {
    const chunk = parts[i + 1];
    const close = chunk.indexOf("**");
    if (close === -1) continue;
    const q = chunk.slice(0, close).trim();
    const a = chunk
      .slice(close + 2)
      .split("\n")
      .map((l) => l.replace(/^ {1,3}/, ""))
      .join("\n")
      .trim();
    items.push({ q, a, aText: plainText(a) });
  }
  return items;
}

function sectionKind(heading: string): Section["kind"] {
  if (/^(quick answers|faqs?|common questions)/i.test(heading)) return "faqs";
  if (/^sources?$/i.test(heading)) return "sources";
  if (/^at a glance$/i.test(heading)) return "glance";
  return "normal";
}

function kindFor(url: string): PageKind {
  if (url === "/") return "home";
  if (url === "/blog/") return "blogIndex";
  if (/^\/blog\/[\w-]+\/$/.test(url)) return "post";
  if (/^\/(services|treatments|conditions)\/$/.test(url)) return "hub";
  if (/^\/(services|treatments|conditions)\/[\w-]+\/$/.test(url)) return "detail";
  if (
    [
      "/privacy-policy/",
      "/terms-of-use/",
      "/medical-disclaimer/",
      "/editorial-policy/",
      "/patient-rights/",
      "/appointments-cancellation-refund/",
      "/accessibility/",
    ].includes(url)
  )
    return "legal";
  if (["/thank-you/", "/404"].includes(url)) return "utility";
  return "core";
}

function walk(dir: string, base = dir): string[] {
  const out: string[] = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p, base));
    else if (name.endsWith(".md")) out.push(relative(base, p).replace(/\\/g, "/"));
  }
  return out.sort();
}

let cache: PageDoc[] | null = null;

export function loadPages(): PageDoc[] {
  if (cache) return cache;
  const manifestRaw = readFileSync(join(CONTENT_DIR, "_manifest.json"), "utf8");
  const manifest = JSON.parse(manifestRaw) as Record<
    string,
    { type: string; num: number; name: string; url: string }
  >;

  const pages: PageDoc[] = walk(CONTENT_DIR).map((file) => {
    const raw = readFileSync(join(CONTENT_DIR, file), "utf8");
    const metaInfo = manifest[file];
    if (!metaInfo) throw new Error(`No manifest entry for ${file}`);

    // Frontmatter between the first pair of --- fences.
    let meta: Frontmatter = {};
    let body = raw;
    const fm = raw.match(/^---\n([\s\S]*?)\n---\n/);
    if (fm) {
      meta = frontmatterSchema.parse(parseYaml(fm[1]) ?? {});
      body = raw.slice(fm[0].length);
    }

    const confirms = [...body.matchAll(CONFIRM_RE), ...((fm?.[1] ?? "").matchAll(CONFIRM_RE) ?? [])]
      .map((m) => ({ note: (m[1] ?? m[2] ?? "").trim() || "value", where: metaInfo.url }));

    // Pull trailing spec lines out of the body.
    const trailing: { label: string; value: string }[] = [];
    body = body
      .split("\n")
      .filter((line) => {
        const m = line.match(/^(Reviewer note|Reviewer box|Sources?):\s*(.*)$/);
        if (m && !/^\s*[-*>#]/.test(line)) {
          trailing.push({ label: m[1], value: m[2].trim() });
          return false;
        }
        return true;
      })
      .join("\n");

    const reviewerNote =
      trailing.find((t) => t.label.startsWith("Reviewer"))?.value ?? null;
    const sourcesLine = trailing.find((t) => t.label.startsWith("Sources"))?.value;

    // Split into lead + ### sections.
    const chunks = body.split(/^### (.+)$/m);
    const { fields: leadFields, markdown: leadMd } = extractFields(chunks[0]);
    const sections: Section[] = [];
    let faqs: FaqItem[] = [];
    let sources: string[] = sourcesLine
      ? sourcesLine.split(";").map((s) => s.trim()).filter(Boolean)
      : [];

    for (let i = 1; i + 1 < chunks.length; i += 2) {
      const rawHeading = chunks[i].trim();
      const { fields, markdown } = extractFields(chunks[i + 1]);
      const numMatch = rawHeading.match(/^(\d+)\s*\/\s*(.+)$/);
      const anchor = rawHeading.match(/#([a-z0-9-]+)/i)?.[1];
      const heading = (numMatch ? numMatch[2] : rawHeading)
        .replace(/\s*\(`#[a-z0-9-]+`\)\s*/i, " ")
        .trim();
      const kind = sectionKind(heading);
      const section: Section = {
        id: anchor ?? slugify(heading),
        numeral: numMatch ? numMatch[1] : null,
        heading,
        markdown,
        fields,
        kind,
      };
      if (kind === "faqs") {
        section.faqs = extractFaqs(markdown);
        faqs = faqs.concat(section.faqs);
      } else if (kind === "sources") {
        section.items = markdown
          .split("\n")
          .map((l) => l.replace(/^-\s+/, "").trim())
          .filter((l) => l && !l.startsWith("#"));
        sources = sources.concat(section.items);
      }
      sections.push(section);
    }

    // H1: frontmatter wins; else a `H1:` field in the lead or hero section.
    let h1 = meta.h1 ?? "";
    if (!h1) {
      const h1Field =
        leadFields.find((f) => f.label === "H1") ??
        sections.flatMap((s) => s.fields).find((f) => f.label === "H1");
      h1 = h1Field?.value ?? metaInfo.name;
    }

    return {
      file,
      url: meta.url ?? metaInfo.url,
      kind: kindFor(meta.url ?? metaInfo.url),
      num: metaInfo.num,
      name: metaInfo.name,
      meta,
      h1,
      lead: { markdown: leadMd, fields: leadFields },
      sections,
      faqs,
      sources,
      reviewerNote,
      confirms,
    };
  });

  cache = pages;
  return pages;
}

export function pageByUrl(url: string): PageDoc | undefined {
  return loadPages().find((p) => p.url === url);
}

export function childrenOf(prefix: string): PageDoc[] {
  return loadPages().filter(
    (p) => p.url.startsWith(prefix) && p.url !== prefix,
  );
}
