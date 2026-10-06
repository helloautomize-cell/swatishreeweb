import { ArrowRight, Stethoscope } from "lucide-react";
import AssetImage from "./AssetImage";
import { badgeFor } from "@/lib/service-badges";

export default function ServiceCard({ slug, title, line, href }: { slug: string; title: string; line: string; href: string }) {
  const file = badgeFor(slug);
  return <a className="svc" href={href}>
    <span className="badge"><span className="coin">{file ? <AssetImage file={file} size={80} /> : <Stethoscope size={48} strokeWidth={1.75} aria-hidden />}</span></span>
    <h3>{title}</h3><span className="d">{line}</span><span className="more">View service<span className="go3"><ArrowRight size={18} strokeWidth={1.75} aria-hidden /></span></span>
  </a>;
}
