import type { Section } from "@/lib/content/load";
import { InlineText, Markdown } from "@/lib/content/render";
import FaqAccordion from "@/components/FaqAccordion";
import GlanceCard from "./GlanceCard";
import ProcessSteps, { isStepList } from "./ProcessSteps";

/** One `### ` section of a content page, rendered to its card/accordion type. */
export default function SectionBlock({ section }: { section: Section }) {
  if (section.kind === "glance") {
    return <GlanceCard section={section} />;
  }
  if (section.kind === "normal" && isStepList(section.markdown)) {
    return <ProcessSteps section={section} />;
  }
  if (section.kind === "sources" && section.items) {
    return (
      <details className="pg-sec pg-sources">
        <summary>
          <h2>{section.heading}</h2>
        </summary>
        <ul>
          {section.items.map((s) => (
            <li key={s}>
              <InlineText source={s} />
            </li>
          ))}
        </ul>
      </details>
    );
  }
  const cls = ["pg-sec", section.id === "intro" ? "answer-first" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <section className={cls} id={section.id}>
      {section.heading && (
        <h2>
          {section.numeral && <span className="num">{section.numeral}</span>}
          <InlineText source={section.heading} />
        </h2>
      )}
      {section.fields.length > 0 && (
        <dl className="pg-fields">
          {section.fields.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>
                <InlineText source={f.value || "-"} />
              </dd>
            </div>
          ))}
        </dl>
      )}
      {section.kind === "faqs" && section.faqs ? (
        <FaqAccordion
          items={section.faqs.map((f) => ({
            q: f.q,
            a: <Markdown source={f.a} />,
          }))}
        />
      ) : (
        section.markdown && <Markdown source={section.markdown} />
      )}
    </section>
  );
}
