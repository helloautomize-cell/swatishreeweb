import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/shell/Breadcrumbs";
import Callout from "@/components/Callout";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

/** Success landing for the appointment form (Part 5.3): `?type=` names the booking reason. */
export default async function ThankYou({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;

  return (
    <main id="main">
      <Breadcrumbs items={[{ label: "Thank you" }]} />
      <div className="container-eve page-plain">
        <h1>
          Thank you, we have your <em className="acc">request</em>
        </h1>
        <p>
          {type
            ? `We have your request about ${type.toLowerCase()}. `
            : "We have your appointment request. "}
          We aim to reply within {site.replyTime}. If your question is urgent, call{" "}
          <a href={`tel:${site.phones[0].e164}`}>{site.phones[0].display}</a>.
        </p>
        <Callout variant="em">
          This is not for emergencies. In a medical emergency, call 108 or 112.
        </Callout>
        <p>
          <Link className="link" href="/">
            Back to the home page
          </Link>
        </p>
      </div>
    </main>
  );
}
