import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { brand, site } from "@/lib/site-config";
import { footerColumns, legalLinks } from "@/lib/nav";
import { MaybeConfirm, WithConfirms } from "@/components/ConfirmChip";
import { isConfirm } from "@/lib/confirm";
import { CookieSettingsButton } from "./CookieBanner";
import EmailLink from "./EmailLink";

const year = new Date().getFullYear();
const addr = site.address;

/** Site footer: brand line, NAP block, link columns, catchment, legal strip. */
export default function SiteFooter() {
  return (
    <footer className="sfooter">
      <div className="container-eve">
        <div className="ftop">
          <div className="fbrand">
            <Link href="/" aria-label={`${site.name} home`}>
              <Image src={`/images/${brand.logoFull}`} alt="" width={1099} height={338} style={{ height: 52, width: "auto" }} />
            </Link>
            <p>Founder-led fertility and women&rsquo;s health care in Gunjur, Bangalore, since December 2024.</p>
          </div>
          <div className="fcontact">
            <div className="fline">
              <MapPin size={17} strokeWidth={1.8} aria-hidden />
              <span>
                <address>
                  {site.name}
                  <br />
                  {addr.line1}
                  <br />
                  {addr.line2}, {addr.city} {addr.postalCode}
                </address>
                {isConfirm(site.mapsUrl) ? (
                  <MaybeConfirm value={site.mapsUrl} />
                ) : (
                  <a href={site.mapsUrl as string} target="_blank" rel="noopener noreferrer">
                    Get directions
                  </a>
                )}
              </span>
            </div>
            <div className="fline">
              <Clock size={17} strokeWidth={1.8} aria-hidden />
              <MaybeConfirm value={site.hours} />
            </div>
            {site.phones.map((p) => (
              <div className="fline" key={p.e164}>
                <Phone size={17} strokeWidth={1.8} aria-hidden />
                <a href={`tel:${p.e164}`}>{p.display}</a>
              </div>
            ))}
            <div className="fline">
              <MessageCircle size={17} strokeWidth={1.8} aria-hidden />
              {isConfirm(site.whatsapp) ? (
                <MaybeConfirm value={site.whatsapp} />
              ) : (
                <a href={`https://wa.me/${(site.whatsapp as string).replace(/\D/g, "")}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              )}
            </div>
            <div className="fline">
              <Mail size={17} strokeWidth={1.8} aria-hidden />
              {isConfirm(site.email) ? (
                <MaybeConfirm value={site.email} />
              ) : (
                <EmailLink address={site.email} />
              )}
            </div>
          </div>
        </div>

        <div className="fcols">
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={`Footer: ${col.title}`}>
              <p className="fcol-t">{col.title}</p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <nav aria-label="Footer: Legal">
            <p className="fcol-t">Legal</p>
            <ul>
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
              <li>
                <CookieSettingsButton />
              </li>
            </ul>
          </nav>
        </div>

        <p className="catch">
          <WithConfirms text="Patients come to us from Gunjur, Varthur, Whitefield, Sarjapur Road, Bellandur and across Bangalore, and travel from other cities for a consultation. [CONFIRM: Intake Q28]" />
        </p>

        <p className="fbot">
          © {year} {site.name}, Bangalore. This website is run by {site.name}, {addr.line1}, {addr.line2},{" "}
          {addr.city} {addr.postalCode}. The information here is for general education and is not a substitute
          for a consultation. Registration: <MaybeConfirm value={site.registration.kmc} />
        </p>
      </div>
    </footer>
  );
}
