import type { ReactNode } from "react";
import { isConfirm, type ConfirmOr } from "@/lib/confirm";

/**
 * The [CONFIRM] chip. Yellow in development, hidden in production.
 * launch-check fails while any remain, so production builds must strip them.
 */
export default function ConfirmChip({ note }: { note?: string }) {
  if (process.env.NODE_ENV === "production") return null;
  return <span className="confirm">[CONFIRM{note ? `: ${note}` : ""}]</span>;
}

/** Render a value that may be a CONFIRM token: chip in dev, nothing in prod. */
export function MaybeConfirm({ value }: { value: ConfirmOr<ReactNode> }) {
  if (isConfirm(value)) return <ConfirmChip note={value.note} />;
  return <>{value}</>;
}

/** Render text containing inline "[CONFIRM: ...]" tokens. */
export function WithConfirms({ text }: { text: string }) {
  const parts = text.split(/\[CONFIRM(?::([^\]]*))?\]/g);
  const out: ReactNode[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    out.push(parts[i]);
    if (i + 1 < parts.length) {
      out.push(<ConfirmChip key={i} note={parts[i + 1]?.trim()} />);
    }
  }
  if (process.env.NODE_ENV === "production") {
    return <>{text.replace(/\s*\[CONFIRM(?::[^\]]*)?\]/g, "")}</>;
  }
  return <>{out}</>;
}
