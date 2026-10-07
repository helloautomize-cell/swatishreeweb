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

/**
 * Render text containing inline "[CONFIRM: ...]" or "[date]" tokens. Content
 * files wrap these in backticks (so markdown doesn't mangle the brackets)
 * even where the surrounding text is handled as a plain string rather than
 * parsed markdown, so the match consumes an optional backtick on each side.
 */
export function WithConfirms({ text }: { text: string }) {
  if (process.env.NODE_ENV === "production") {
    return <>{text.replace(/`?\s*(?:\[CONFIRM(?::[^\]]*)?\]|\[date\])`?/g, "")}</>;
  }
  const out: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(/`?(?:\[CONFIRM(?::([^\]]*))?\]|\[(date)\])`?/g)) {
    const i = m.index ?? 0;
    if (i > last) out.push(text.slice(last, i));
    out.push(<ConfirmChip key={i} note={(m[1] ?? m[2])?.trim()} />);
    last = i + m[0].length;
  }
  out.push(text.slice(last));
  return <>{out}</>;
}
