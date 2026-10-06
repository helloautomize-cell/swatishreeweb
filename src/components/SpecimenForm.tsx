"use client";

import Link from "next/link";
import { useState } from "react";
import { CircleAlert } from "lucide-react";
import BookButton from "./BookButton";

/** Appointment form specimen (Part 5.3): every state on one static form. */
export default function SpecimenForm() {
  const [time, setTime] = useState("morning");
  const [under18, setUnder18] = useState(false);

  return (
    <form className="form" noValidate onSubmit={(e) => e.preventDefault()}>
      <div className="errsummary" role="alert">
        <b>Please check these fields</b>
        <ul>
          <li>
            <a href="#f-phone">Mobile number</a>
          </li>
        </ul>
      </div>

      <div className="field">
        <label htmlFor="f-name">Full name</label>
        <input id="f-name" name="name" autoComplete="name" />
        <span className="hint">As on your records or prescription.</span>
      </div>

      <div className="field invalid">
        <label htmlFor="f-phone">Mobile number</label>
        <div className="phone-prefix">
          <span aria-hidden>+91</span>
          <input
            id="f-phone"
            name="phone"
            inputMode="tel"
            autoComplete="tel-national"
            aria-invalid="true"
            aria-describedby="f-phone-err"
          />
        </div>
        <span className="err" id="f-phone-err">
          <CircleAlert size={16} strokeWidth={1.75} aria-hidden />
          Enter a 10 digit mobile number.
        </span>
      </div>

      <div className="field">
        <label id="f-time-lab">Preferred time</label>
        <div className="pillrow" role="group" aria-labelledby="f-time-lab">
          {[
            ["morning", "Morning"],
            ["afternoon", "Afternoon"],
            ["evening", "Evening"],
          ].map(([v, l]) => (
            <button
              key={v}
              type="button"
              className="pill"
              aria-pressed={time === v}
              onClick={() => setTime(v)}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-date">Preferred date</label>
        <input id="f-date" name="date" type="date" />
        <span className="hint">Any day in the next 60 days.</span>
      </div>

      <label className="checkline">
        <input
          type="checkbox"
          checked={under18}
          onChange={(e) => setUnder18(e.target.checked)}
        />
        <span>The patient is under 18.</span>
      </label>

      {under18 && (
        <div className="field">
          <label htmlFor="f-guardian">Parent or guardian name</label>
          <input id="f-guardian" name="guardian" autoComplete="off" required />
          <span className="hint">I am the parent or legal guardian and I consent to EVE Women and Fertility Clinic using these details to arrange care for this patient.</span>
        </div>
      )}

      <label className="checkline">
        <input type="checkbox" />
        <span>
          I agree that EVE Women and Fertility Clinic may use these details to contact me about my appointment, as explained in the <Link href="/privacy-policy/">Privacy Policy</Link>.
        </span>
      </label>

      <div className="btns">
        <BookButton />
        <button className="btn btn-p" type="button" disabled>
          <span className="spinner" aria-hidden /> Sending
        </button>
      </div>
    </form>
  );
}
