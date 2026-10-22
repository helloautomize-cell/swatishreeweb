import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import EveImage from "@/components/EveImage";
import BookButton from "@/components/BookButton";
import { WithConfirms } from "@/components/ConfirmChip";
import { resolveConfirm } from "@/lib/confirm";
import { formatReviewDate, kmcRegLine } from "@/lib/facts";
import { site } from "@/lib/site-config";
import type { PageDoc } from "@/lib/content/load";
import { loadPages } from "@/lib/content/load";

const nameFor = (url: string) =>
  loadPages().find((p) => p.url === url)?.name ?? url.replace(/\//g, " ").trim();

/** Global reviewer box (site plan section 6). */
export function ReviewerBox({ note, lastReviewed }: { note: string | null; lastReviewed?: string }) {
  const date = lastReviewed && !lastReviewed.includes("CONFIRM") ? formatReviewDate(lastReviewed) : null;
  return (
    <aside className="pg-reviewer" aria-label="Medical review">
      <p>
        Medically reviewed by <strong>Dr. Swati Shree</strong>, MBBS, DNB (OBG), MRCOG (UK) ·{" "}
        {kmcRegLine} ·{" "}
        {date ? `Last reviewed ${date}` : note ? <WithConfirms text={note.replace(/^reviewed by Dr\. Swati Shree\.\s*/i, "")} /> : "Last reviewed at sign-off"}
      </p>
      <p className="pg-reviewer-sub">
        This page explains general care at EVE. It does not replace a consultation. Read our{" "}
        <Link href="/editorial-policy/">editorial policy</Link>.
      </p>
    </aside>
  );
}

/** Global CTA band (site plan section 6). */
export function CtaBand() {
  const whatsapp = resolveConfirm<string>(site.whatsapp);
  return (
    <section className="pg-cta" aria-label="Book a consultation">
      <h2>
        Ready to talk to a <em className="acc">specialist</em>?
      </h2>
      <p>
        Book a consultation, call {site.phones[0].display}
        {whatsapp ? " or message us on WhatsApp" : ""}. We aim to reply within{" "}
        {site.replyTime}.
      </p>
      <div className="btns">
        <BookButton />
        <a className="btn-call" href={`tel:${site.phones[0].e164}`}>
          <Phone size={18} strokeWidth={1.75} aria-hidden /> Call {site.phones[0].display}
        </a>
        {whatsapp ? (
          <a className="btn-wa" href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}>
            <MessageCircle size={18} strokeWidth={1.75} aria-hidden /> WhatsApp
          </a>
        ) : null}
      </div>
    </section>
  );
}

/** Related pages and blog posts from frontmatter. */
export function RelatedLinks({ doc }: { doc: PageDoc }) {
  const related = doc.meta.related ?? [];
  const posts = doc.meta.posts ?? [];
  if (!related.length && !posts.length) return null;
  return (
    <nav className="pg-related" aria-label="Related pages">
      {related.length > 0 && (
        <div>
          <h2>Related care</h2>
          <ul>
            {related.map((u) => (
              <li key={u}>
                <Link href={u}>
                  {nameFor(u)} <ArrowRight size={14} strokeWidth={2} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {posts.length > 0 && (
        <div>
          <h2>From the library</h2>
          <ul>
            {posts.map((u) => (
              <li key={u}>
                <Link href={u}>
                  {nameFor(u)} <ArrowRight size={14} strokeWidth={2} aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

/** Author box for blog posts: photo, bio, clinic link, booking CTA, disclaimers. */
export function AuthorBox() {
  return (
    <aside className="pg-author" aria-label="About the author">
      <div className="pg-author-row">
        <EveImage
          src="doctor-avatar-1x1.png"
          sizes="96px"
          className="pg-author-photo"
          kind="photo"
        />
        <div>
          <h2 className="pg-author-name">
            Written by <Link href="/dr-swati-shree/">Dr. Swati Shree</Link>
          </h2>
          <p className="pg-author-role">
            Reproductive medicine specialist and gynaecologist, founder of EVE
            Women and Fertility Clinic, Gunjur, Bangalore
          </p>
          <p className="pg-author-quals">
            MBBS, DNB (OBG), MRCOG (UK), Fellowship in Reproductive Medicine
          </p>
        </div>
      </div>
      <p>
        Dr. Swati Shree is an obstetrician and gynaecologist who specialises in
        reproductive medicine. She holds a DNB in obstetrics and gynaecology, a
        fellowship in reproductive medicine from KJK Hospital in Trivandrum, and an
        MRCOG from the Royal College of Obstetricians and Gynaecologists in the
        UK. She looks after fertility problems and women&#39;s health
        conditions.{" "}
        <Link className="link" href="/dr-swati-shree/">
          Read more about Dr. Swati
        </Link>
      </p>
      <div className="btns">
        <BookButton />
        <Link className="btn-s" href="/contact/">
          Clinic location and contact
        </Link>
      </div>
      <p className="pg-author-note">
        This article is for general information only. It is not a diagnosis and
        does not replace a consultation with your doctor.
      </p>
      <p className="pg-author-note">
        Seek urgent care for severe pelvic pain, heavy bleeding, fever, pain or
        bleeding in early pregnancy, or marked bloating, vomiting or
        breathlessness after fertility injections or egg collection.
      </p>
    </aside>
  );
}
