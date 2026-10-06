import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main id="main">
      <Breadcrumbs items={[{ label: "Thank you" }]} />
      <div className="container-eve page-plain">
        <h1>
          Thank you, we have your <em className="acc">request</em>
        </h1>
        <p>
          We aim to reply within {site.replyTime}. If your question is urgent, call{" "}
          <a href={`tel:${site.phones[0].e164}`}>{site.phones[0].display}</a>.
        </p>
        <p>
          <Link className="link" href="/">
            Back to the home page
          </Link>
        </p>
      </div>
    </main>
  );
}
