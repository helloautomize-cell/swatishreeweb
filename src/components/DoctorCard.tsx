import BookButton from "./BookButton";
import EveImage from "./EveImage";
import ConfirmChip from "./ConfirmChip";
import { doctorCard } from "@/lib/specimen";

/** Doctor feature card. One doctor, one card. No star ratings. */
export default function DoctorCard({ compact = false }: { compact?: boolean }) {
  return (
    <article className={`doc${compact ? " doc-sm" : ""}`}>
      <EveImage
        src="doctor/doctor-standing-clinic-arms-crossed-4x3.png"
        sizes={compact ? "300px" : "(min-width: 900px) 38vw, 100vw"}
        imgClassName="doc-img"
      />
      <div className="b">
        <h3>{doctorCard.name}</h3>
        <div className="q">{doctorCard.quals}</div>
        <div className="role">{doctorCard.role}</div>
        {!compact && <div className="q">{doctorCard.bio}</div>}
        <div className="chips">
          <span className="chip xp">
            <ConfirmChip note="years" />
          </span>
          <span className="chip">
            <ConfirmChip note="languages" />
          </span>
        </div>
        <div className="acts">
          <BookButton label="Book with Dr. Swati" />
          <a className="btn btn-s" href="#">
            View profile
          </a>
        </div>
      </div>
    </article>
  );
}
