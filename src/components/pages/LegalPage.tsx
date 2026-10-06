import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { InlineText, Markdown } from "@/lib/content/render";
import type { PageDoc } from "@/lib/content/load";
import SectionBlock from "./SectionBlock";
import PageToc from "./PageToc";

/**
 * Legal template (Part 7.2): left table of contents, last-updated line,
 * print styles. Content sections keep their document order.
 */
export default function LegalPage({ doc }: { doc: PageDoc }) {
  const lastUpdated = doc.lead.fields.find((f) => f.label === "Last updated")?.value;
  const toc = doc.sections
    .filter((s) => s.kind !== "sources")
    .map((s) => ({ id: s.id, label: s.heading ?? s.id }));

  return (
    <main id="main">
      <Breadcrumbs items={[{ label: doc.name }]} />
      <article className="pg container-eve pg-legal">
        <PageToc sections={toc} />
        <div className="pg-main">
          <header className="pg-hero">
            <h1><InlineText source={doc.h1} /></h1>
            {lastUpdated && (
              <p className="pg-updated"><InlineText source={`Last updated: ${lastUpdated}`} /></p>
            )}
            {doc.lead.markdown && <Markdown source={doc.lead.markdown} />}
          </header>
          {doc.sections.map((s) => (
            <SectionBlock key={s.id} section={s} />
          ))}
        </div>
      </article>
    </main>
  );
}
