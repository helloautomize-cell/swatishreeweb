import Link from "next/link";

export type Crumb = { label: string; href?: string };

/** Visible breadcrumb trail. JSON-LD BreadcrumbList is added in Phase 3. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumbs container-eve" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link href="/">Home</Link>
        </li>
        {items.map((c, i) => (
          <li key={c.label}>
            {c.href && i < items.length - 1 ? (
              <Link href={c.href}>{c.label}</Link>
            ) : (
              <span aria-current="page">{c.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
