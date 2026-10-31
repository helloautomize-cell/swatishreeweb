/*
 * Brand icons drawn inline in the Lucide stroke style: lucide-react ships no
 * brand glyphs, and we do not load third-party icon scripts. Same contract as
 * the Lucide icons used across the site: 24x24 viewBox, currentColor, round
 * caps and joins, aria-hidden.
 */

type IconProps = {
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const base = ({ size = 24, strokeWidth = 1.8, className }: IconProps) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className,
  "aria-hidden": true,
});

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="2" y="5" width="20" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" />
    </svg>
  );
}
