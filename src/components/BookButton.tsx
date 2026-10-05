import { CalendarDays } from "lucide-react";

/** The two-part Book button: sage icon block, deep moss label, one line. */
export default function BookButton({
  label = "Book Appointment",
  href = "/contact/#book",
}: {
  label?: string;
  href?: string;
}) {
  return (
    <a className="book" href={href} aria-label={label}>
      <span className="ic">
        <CalendarDays size={22} strokeWidth={1.8} aria-hidden />
      </span>
      <span className="lb">{label}</span>
    </a>
  );
}
