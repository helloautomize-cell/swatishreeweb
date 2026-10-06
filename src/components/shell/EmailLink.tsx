"use client";

/** Renders the clinic email without exposing a mailto: in static HTML. */
export default function EmailLink({ address, className }: { address: string; className?: string }) {
  return (
    <a
      className={className}
      href={`mailto:${address}`}
      onClick={(e) => {
        e.preventDefault();
        window.location.href = `mailto:${address}`;
      }}
    >
      {address}
    </a>
  );
}
