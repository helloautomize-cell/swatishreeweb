/*
 * The [CONFIRM] system (master prompt Part 9.2).
 *
 * A value not yet confirmed by the client is wrapped in confirm("note").
 * It renders as a yellow chip in development, is hidden in production,
 * and `npm run launch-check` fails while any remain in content, config,
 * JSON-LD or image captions.
 */

export class ConfirmValue {
  readonly __confirm = true as const;
  constructor(readonly note: string) {}
}

export type ConfirmOr<T> = T | ConfirmValue;

export const confirm = (note: string): ConfirmValue => new ConfirmValue(note);

export const isConfirm = (v: unknown): v is ConfirmValue =>
  v instanceof ConfirmValue ||
  (typeof v === "object" && v !== null && "__confirm" in v);

/** Walk a value and collect every ConfirmValue with a dotted path. */
export function collectConfirms(
  value: unknown,
  path = "",
  out: { path: string; note: string }[] = [],
): { path: string; note: string }[] {
  if (isConfirm(value)) {
    out.push({ path, note: value.note });
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((v, i) => collectConfirms(v, `${path}[${i}]`, out));
  } else if (typeof value === "object" && value !== null) {
    for (const [k, v] of Object.entries(value)) {
      collectConfirms(v, path ? `${path}.${k}` : k, out);
    }
  }
  return out;
}

/** Resolve a ConfirmOr to a displayable value, or null when unconfirmed. */
export function resolveConfirm<T>(v: ConfirmOr<T>): T | null {
  return isConfirm(v) ? null : v;
}
