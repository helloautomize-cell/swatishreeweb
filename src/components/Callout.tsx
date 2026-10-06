import type { ReactNode } from "react";
import { CircleAlert, Info, Lightbulb } from "lucide-react";

const icons = {
  em: CircleAlert,
  info: Info,
  warn: Lightbulb,
} as const;

/** Medical page notice. em = emergency, info = reviewer and info, warn = tip. */
export default function Callout({
  variant,
  children,
}: {
  variant: keyof typeof icons;
  children: ReactNode;
}) {
  const Icon = icons[variant];
  return (
    <div className={`callout ${variant}`} role={variant === "em" ? "alert" : "note"}>
      <Icon size={24} strokeWidth={1.75} aria-hidden />
      <p>{children}</p>
    </div>
  );
}
