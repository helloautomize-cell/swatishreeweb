import { Clock, Phone } from "lucide-react";
import { utilityLinks } from "@/lib/nav";
import { site } from "@/lib/site-config";
import { MaybeConfirm } from "@/components/ConfirmChip";
import TextSizeToggle from "./TextSizeToggle";

/** Thin desktop utility bar: visit/blog links, hours, phone, emergency line, A/A+. */
export default function UtilityBar() {
  return (
    <div className="sh-ubar container-eve">
      <ul>
        {utilityLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <div className="u-right">
        <span className="u-item">
          <Clock size={15} strokeWidth={1.8} aria-hidden />
          <MaybeConfirm value={site.hours} />
        </span>
        <a href={`tel:${site.phones[0].e164}`}>
          <Phone size={15} strokeWidth={1.8} aria-hidden />
          {site.phones[0].display}
        </a>
        <span className="u-em">Medical emergency? Call 108 or 112</span>
        <TextSizeToggle />
      </div>
    </div>
  );
}
