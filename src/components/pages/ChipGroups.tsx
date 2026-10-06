"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { WithConfirms } from "@/components/ConfirmChip";

/*
 * Non-clickable chip groups (doctor page): every chip visible on desktop;
 * below 768px only the first 6 show, with a "Show all (n)" toggle.
 */
export default function ChipGroups({
  groups,
}: {
  groups: { label: string; items: string[] }[];
}) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  return (
    <div className="chip-groups">
      {groups.map((g) => {
        const expanded = !!open[g.label];
        return (
          <div className="chip-group" key={g.label}>
            <h3>{g.label}</h3>
            <ul className={expanded ? "open" : ""}>
              {g.items.map((item, i) => (
                <li key={item} className={i >= 6 ? "extra" : undefined}>
                  <WithConfirms text={item} />
                </li>
              ))}
            </ul>
            {g.items.length > 6 && (
              <button
                type="button"
                className="chip-more"
                aria-expanded={expanded}
                onClick={() => setOpen((s) => ({ ...s, [g.label]: !expanded }))}
              >
                {expanded ? "Show fewer" : `Show all (${g.items.length})`}
                <ChevronDown size={16} strokeWidth={2} aria-hidden />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
