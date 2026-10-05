import { Plus } from "lucide-react";

export type Faq = { q: string; a: string };

/** FAQ accordion built on native details/summary so it works without JS. */
export default function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary>
            <span>{f.q}</span>
            <span className="ic" aria-hidden>
              <Plus size={16} strokeWidth={1.75} />
            </span>
          </summary>
          <div className="a">{f.a}</div>
        </details>
      ))}
    </div>
  );
}
