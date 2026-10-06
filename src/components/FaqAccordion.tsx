import type { ReactNode } from "react";
import { Plus } from "lucide-react";
import { WithConfirms } from "./ConfirmChip";

export type Faq = { q: string; a: string | ReactNode };

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
          <div className="a">
            {typeof f.a === "string" ? <WithConfirms text={f.a} /> : f.a}
          </div>
        </details>
      ))}
    </div>
  );
}
