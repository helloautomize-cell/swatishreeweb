import AssetImage from "@/components/AssetImage";
import { assetEntry } from "@/lib/images";
import type { Section } from "@/lib/content/load";
import { InlineText } from "@/lib/content/render";

/*
 * The At a glance card (Part 5.4b): labelled rows, each with a glance-*
 * spot icon chosen from the label's wording.
 */
const ICONS: [RegExp, string][] = [
  [/not suited|limit|risk|cannot|won't|does not/i, "glance-limits.png"],
  [/regulat|rule|legal|consent|ART/i, "glance-rules.png"],
  [/prepare|bring|before/i, "glance-prepare.png"],
  [/when|timing|test|day/i, "glance-when.png"],
  [/who|suit|eligible/i, "glance-who.png"],
  [/where|done|place/i, "glance-where.png"],
  [/long|duration|time|session/i, "glance-time.png"],
];

const iconFor = (label: string) =>
  ICONS.find(([re]) => re.test(label))?.[1] ?? "glance-what.png";

export default function GlanceCard({ section }: { section: Section }) {
  const rows = section.markdown
    .split("\n")
    .map((l) => l.replace(/^-\s+/, "").trim())
    .map((l) => l.match(/^\*\*(.+?)\s*:\*\*\s*(.*)$/))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => ({ label: m[1], text: m[2] }));
  if (!rows.length) return null;
  return (
    <section className="pg-sec at-a-glance" id={section.id} aria-label={section.heading ?? "At a glance"}>
      <h2>{section.heading ?? "At a glance"}</h2>
      <ul>
        {rows.map((r) => {
          const icon = iconFor(r.label);
          return (
            <li key={r.label}>
              <span className="g-ic" aria-hidden>
                {assetEntry(icon) && <AssetImage file={icon} size={48} />}
              </span>
              <div>
                <b>{r.label}</b>
                <p><InlineText source={r.text} /></p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
