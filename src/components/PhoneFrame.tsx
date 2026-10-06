import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import EveImage from "./EveImage";
import { heroCopy } from "@/lib/specimen";

/** The mobile action bar specimen inside a phone frame. */
export default function PhoneFrame() {
  return (
    <div className="phonewrap">
      <div className="phone">
        <div className="scr">
          <div className="mh">
            <img src="/images/brand/logo-full-transparent.png" alt="EVE Women and Fertility Clinic" />
          </div>
          <div className="mhero">
            <span className="eyebrow">Gunjur, Bangalore</span>
            <b>
              {heroCopy.h1Before}
              <em className="acc">{heroCopy.h1Accent}</em>
            </b>
            <EveImage
              src="doctor/doctor-hero-portrait-4x5-INTERIM.png"
              sizes="272px"
              objectPosition="50% 12%"
            />
          </div>
        </div>
        <div className="bar" role="group" aria-label="Quick actions">
          <button type="button">
            <CalendarDays size={20} strokeWidth={1.75} aria-hidden />
            Book Now
          </button>
          <button type="button">
            <Phone size={20} strokeWidth={1.75} aria-hidden />
            Call Now
          </button>
          <button type="button">
            <MessageCircle size={20} strokeWidth={1.75} aria-hidden />
            WhatsApp
          </button>
        </div>
      </div>
      <div className="specs">
        <p>
          <b>Book Now</b> opens the appointment form (<code>/contact/#book</code>).
        </p>
        <p>
          <b>Call Now</b> opens a sheet with two numbers: 72049 21212 and 72049 21516.
        </p>
        <p>
          <b>WhatsApp</b> opens a chat with the clinic number and a message built
          from the page.
        </p>
        <p>
          Sage to deep moss gradient at 92% under glass, 64px tall buttons, 16px
          top corners, safe-area padding. Hidden while typing in a form and on
          the thank-you page. On desktop it becomes the solid WhatsApp-green
          button at the bottom right of this page.
        </p>
      </div>
    </div>
  );
}
