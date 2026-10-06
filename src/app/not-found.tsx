import type { Metadata } from "next";
import Link from "next/link";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main id="main">
      <div className="container-eve page-plain">
        <span className="eyebrow">404</span>
        <h1>
          We could not find that <em className="acc">page</em>
        </h1>
        <p>
          The link may be old or the address may have a typo. If you need help finding care, call
          72049 21212, or try one of these pages.
        </p>
        <div className="quick-links">
          <Link className="gchip" href="/">Home</Link>
          <Link className="gchip" href="/services/">Services</Link>
          <Link className="gchip" href="/treatments/">Treatments</Link>
          <Link className="gchip" href="/conditions/">Conditions</Link>
          <Link className="gchip" href="/faqs/">FAQs</Link>
          <Link className="gchip" href="/contact/">Contact</Link>
        </div>
        <div className="btns">
          <BookButton />
        </div>
      </div>
    </main>
  );
}
