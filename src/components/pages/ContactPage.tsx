import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import Callout from "@/components/Callout";
import MapCard from "@/components/MapCard";
import EmailLink from "@/components/shell/EmailLink";
import ConfirmChip from "@/components/ConfirmChip";
import AppointmentForm from "@/components/AppointmentForm";
import DirectionsLink from "@/components/DirectionsLink";
import { InlineText } from "@/lib/content/render";
import type { PageDoc } from "@/lib/content/load";
import { site } from "@/lib/site-config";
import { resolveConfirm } from "@/lib/confirm";
import { whatsappPrefill } from "@/lib/nav";
import { bookingReasonFor } from "@/lib/booking-context";

/** Contact and book template (Part 5.3, 5.4): real form, not the spec list. */
export default function ContactPage({ doc }: { doc: PageDoc }) {
  const intro = doc.lead.fields.find((f) => f.label === "Intro")?.value;
  const emergency = doc.lead.fields.find(
    (f) => f.label === "Emergency notice above the form",
  )?.value;

  const whatsapp = resolveConfirm<string>(site.whatsapp);
  const email = resolveConfirm<string>(site.email);
  const hours = resolveConfirm<string>(site.hours);
  const mapsUrl = resolveConfirm<string>(site.mapsUrl);
  const waHref = whatsapp
    ? `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(whatsappPrefill("your appointment request"))}`
    : null;

  const defaultReason = bookingReasonFor(doc.url);

  return (
    <main id="main">
      <Breadcrumbs items={[{ label: doc.name }]} />
      <article className="pg container-eve">
        <header className="pg-hero">
          <h1>
            <InlineText source={doc.h1} />
          </h1>
          {intro && <p className="pg-sub">{intro}</p>}
        </header>

        {emergency && <Callout variant="em">{emergency}</Callout>}

        <div className="contact-grid">
          {/* Server-render time is the anti-spam min-fill timestamp (Part
              12); it must be baked into the static HTML for the no-JS form
              path to work, so this one read is intentionally impure. */}
          <AppointmentForm
            defaultReason={defaultReason}
            sourcePath={doc.url}
            // eslint-disable-next-line react-hooks/purity
            renderedAt={Date.now()}
          />

          <aside className="contact-side">
            <MapCard
              src="clinic-consultation-room-4x3.png"
              sizes="(max-width: 900px) 100vw, 420px"
            />

            <div className="ccards">
              <div className="ccard">
                <Phone size={18} strokeWidth={1.75} aria-hidden />
                <div>
                  <b>Call</b>
                  {site.phones.map((p, i) => (
                    <span key={p.e164}>
                      {i > 0 && " · "}
                      <a href={`tel:${p.e164}`}>{p.display}</a>
                    </span>
                  ))}
                </div>
              </div>

              <div className="ccard">
                <MessageCircle size={18} strokeWidth={1.75} aria-hidden />
                <div>
                  <b>WhatsApp</b>
                  {waHref ? <a href={waHref}>{whatsapp}</a> : <ConfirmChip note="WhatsApp number" />}
                </div>
              </div>

              <div className="ccard">
                <Mail size={18} strokeWidth={1.75} aria-hidden />
                <div>
                  <b>Email</b>
                  {email ? <EmailLink address={email} /> : <ConfirmChip note="clinic email" />}
                </div>
              </div>

              <div className="ccard">
                <MapPin size={18} strokeWidth={1.75} aria-hidden />
                <div>
                  <b>Address</b>
                  <p className="ccard-more">
                    {site.name}, {site.address.line1}, {site.address.line2}, {site.address.city}{" "}
                    {site.address.postalCode}
                  </p>
                  {mapsUrl ? (
                    <DirectionsLink href={mapsUrl}>Get directions</DirectionsLink>
                  ) : (
                    <ConfirmChip note="Google Maps link" />
                  )}
                </div>
              </div>

              <div className="ccard">
                <Clock size={18} strokeWidth={1.75} aria-hidden />
                <div>
                  <b>Hours</b>
                  {hours ? <span>{hours}</span> : <ConfirmChip note="OPD hours" />}
                </div>
              </div>

              <p className="ccard-more">
                Coming from outside Bangalore?{" "}
                <Link href="/coming-from-outside-bangalore/">Plan your visit</Link>
              </p>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}
