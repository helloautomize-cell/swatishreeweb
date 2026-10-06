import { CalendarDays, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import DoctorPortrait from "./DoctorPortrait";
import { heroCopy } from "@/lib/specimen";

/** The mobile action bar specimen inside a phone frame. */
export default function PhoneFrame() {
  return (
    <div className="phonewrap">
      <div className="phone" aria-label="Mobile action bar specimen">
        <div className="scr">
          <div className="mh">
            <Image src="/images/brand/logo-full-transparent.png" alt="EVE Women and Fertility Clinic" width={130} height={40} loading="lazy" unoptimized style={{ width: "auto", height: 30 }} />
          </div>
          <div className="mhero">
            <span className="eyebrow">Gunjur, Bangalore</span>
            <b>
              {heroCopy.h1Before}
              <em className="acc">{heroCopy.h1Accent}</em>
            </b>
            <div className="mmedia"><div className="hb-blob" /><DoctorPortrait slot="D1" id="phone-portrait" /></div>
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
