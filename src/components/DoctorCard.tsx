import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BookButton from "./BookButton";
import DoctorPortrait from "./DoctorPortrait";
import InView from "./InView";
import { clinicOpenedShort } from "@/lib/facts";
import ConfirmChip from "./ConfirmChip";
import { doctorCard } from "@/lib/specimen";

/** Doctor feature card. One doctor, one card. No star ratings. */
export default function DoctorCard({ compact = false }: { compact?: boolean }) {
  return <InView className={`da${compact ? " da-compact" : ""}`}>
    <div className="da-media"><div className="da-frame2" /><div className="da-frame" /><div className="da-fig"><DoctorPortrait slot="D2" id={compact ? "doctor-small" : "doctor-full"} /></div>
      {!compact && <div className="glasschip award"><span>16th GCU International<small>Women&apos;s Day Award</small></span></div>}
    </div>
    <div className="da-body"><span className="eyebrow">Your doctor</span><h3 className="nm">{doctorCard.name}</h3><p className="role">{doctorCard.role}</p>
      <div className="seals">
        <div className="seal"><span className="s">MBBS</span><span>Bachelor of Medicine</span></div>
        <div className="seal"><span className="s">DNB</span><span>Obstetrics and Gynaecology</span></div>
        <div className="seal"><span className="s">Fellow</span><span>Reproductive Medicine, KJK Hospital</span></div>
        <div className="seal hi"><span className="s">MRCOG<br />UK</span><span>Royal College of Obstetricians and Gynaecologists</span></div>
      </div>
      {!compact && <><p>{doctorCard.bio}</p><div className="path"><div><b>AIIMS</b>Training</div><div><b>Sakra World Hospital</b>Bangalore</div><div><b>KJK Hospital</b>Fellowship, Trivandrum</div><div><b>EVE, Gunjur</b>Founded {clinicOpenedShort}</div></div></>}
      <div className="chips"><ConfirmChip note="years in practice" /><ConfirmChip note="languages" /></div>
      <div className="btns"><BookButton label="Book with Dr. Swati" href="#styleguide-form" /><Link className="link" href="/dr-swati-shree/">Read her profile<ArrowRight size={18} strokeWidth={1.75} aria-hidden /></Link></div>
    </div>
  </InView>;
}
