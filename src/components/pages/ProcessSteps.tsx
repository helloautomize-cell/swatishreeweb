import AssetImage from "@/components/AssetImage";
import { assetEntry } from "@/lib/images";
import type { Section } from "@/lib/content/load";
import { InlineText } from "@/lib/content/render";

/*
 * Process steps (Part 7.2): a numbered `**Title.** text` list rendered as
 * steps with step-* icons picked from the step title. Used natively for the
 * IVF process (never the infographic image) and any other step-by-step list.
 */
const ICONS: [RegExp, string][] = [
  [/trigger/i, "step-trigger.png"],
  [/egg collection|retriev/i, "step-egg-collection.png"],
  [/embryo transfer|transfer/i, "step-embryo-transfer.png"],
  [/culture|embryo/i, "step-embryo-culture.png"],
  [/fertilis|icsi/i, "step-fertilisation.png"],
  [/freez|frozen|vitrif/i, "step-freezing.png"],
  [/sperm|semen|sample|wash/i, "step-sperm-prep.png"],
  [/insemination|iui\b|catheter|placed/i, "step-insemination.png"],
  [/pregnan|test|luteal|support/i, "step-pregnancy-test.png"],
  [/early scan|6 weeks/i, "step-early-scan.png"],
  [/scan|ultrasound|exam/i, "step-scan.png"],
  [/monitor|follic|track|timing|cycle/i, "step-monitoring.png"],
  [/medicin|stimulat|injection|hormone|tablet/i, "step-medicine.png"],
  [/consent|counsel/i, "step-consent.png"],
  [/blood/i, "step-blood-test.png"],
];

const iconFor = (title: string) =>
  ICONS.find(([re]) => re.test(title))?.[1] ?? "step-consultation.png";

/** True when a section body is one numbered `**T.** text` list. */
export function isStepList(markdown: string): boolean {
  const items = markdown.trim().split(/^\d+\.\s+/m).slice(1);
  return items.length >= 3 && items.every((i) => /^\*\*.+?\*\*/.test(i.trim()));
}

export default function ProcessSteps({ section }: { section: Section }) {
  const items = section.markdown
    .trim()
    .split(/^\d+\.\s+\*\*/m)
    .slice(1)
    .map((chunk) => {
      const close = chunk.indexOf("**");
      return {
        title: chunk.slice(0, close).trim().replace(/\.$/, ""),
        text: chunk.slice(close + 2).trim(),
      };
    });
  if (!items.length) return null;
  return (
    <section className="pg-sec pg-steps" id={section.id}>
      <h2>
        {section.numeral && <span className="num">{section.numeral}</span>}
        <InlineText source={section.heading ?? ""} />
      </h2>
      <ol className="process-steps">
        {items.map((step, i) => {
          const icon = iconFor(step.title);
          return (
            <li key={step.title}>
              <span className="p-ic" aria-hidden>
                {assetEntry(icon) && <AssetImage file={icon} size={56} />}
              </span>
              <span className="p-num" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p><InlineText source={step.text} /></p>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
