# Tone cleanup

Phase 8 sweep of agent-authored text (code comments and generated-report
strings; `resources/docs/new-website-content.md` is locked copy and is not
rewritten) against Part 1.1 rule 11: no em dashes, no en dashes, plain short
sentences, sentence-case headings, no emojis, no exclamation marks.

Findings: no emojis and no exclamation marks in `src/` or `scripts/`. Seven
em dashes found and fixed, all in code comments or CLI/report strings
(nothing user-facing on the site itself):

| File | Line | Before | After |
|---|---|---|---|
| `src/lib/schema/nodes.ts` | 4 | "...emitted JSON-LD — each is" | "...emitted JSON-LD; each is" |
| `src/lib/schema/graph.ts` | 4 | "...parsed content — never typed by hand." | "...parsed content, never typed by hand." |
| `src/components/pages/BadgePanel.tsx` | 7 | "...page has none — a blush-to-white panel" | "...page has none, a blush-to-white panel" |
| `src/components/AppointmentForm.tsx` | 34 | "...stays pure — see `ContactPage`." | "...stays pure. See `ContactPage`." |
| `scripts/launch-check.mjs` | 5 | "client-inputs-needed.md — the checklist" | "client-inputs-needed.md, the checklist" |
| `scripts/launch-check.mjs` | 52 | "`npm run launch-check` — N open item(s)." (written into `client-inputs-needed.md`) | "`npm run launch-check`: N open item(s)." |
| `scripts/launch-check.mjs` | 68 | "N open [CONFIRM] item(s) — launch blocked." (console output) | "N open [CONFIRM] item(s), launch blocked." |
| `scripts/split-content.mjs` | 35 | "(review guide) — not a page." | "(review guide), not a page." |

Not flagged (dash characters present but used correctly, as the literal
pattern a check searches for, not as an em/en dash in written text):
`scripts/build-check.mjs:54`, `tests/content.spec.ts:73,135`.

`tests/content.spec.ts` already enforces zero em/en dashes in rendered HTML
and JSON-LD site-wide (`content` Playwright project, passing); this sweep
extends the same rule to code comments and the one generated report string
that test doesn't reach.
