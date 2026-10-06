<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# EVE project instructions

- Current brief: `resources/docs/WINDSURF-MASTER-PROMPT-EVE.md` (v2). Visual authority: `resources/reference/eve-styleguide-final.html`, not the older reference.
- Copy authority: `resources/docs/new-website-content.md`, copied unchanged from the root `new-website-content_swati.md`. Use `resources/docs/site-plan.md` for URLs and global copy, and `resources/docs/eve-client-data.md` for facts.
- Approved resolutions: use the final HTML layouts, card dimensions and hover behavior; restrict named hospitals to About and the doctor profile, removing those names from Home only; map the manifest's menopause page to `/conditions/menopause-and-perimenopause/` and cervical-screening page to `/services/cervical-cancer-screening-hpv-vaccination/`.
- Preserve all supplied sources and client images. Archive superseded material privately; never delete originals or publish archives, certificates or restricted source images.
- Never create a branch, commit or push. Keep changes uncommitted. Follow phase STOP gates; do not deploy or enable indexing without explicit approval.
- Phase 0 resource setup uses `node scripts/audit-content.mjs --prepare-resources`. Subsequent read-only audits use `npm run audit`. `npm run images` now supports the v2 `slots` and `badgeOnly` manifest. All manifest photos are converted with normal Sharp processing to public/images (C2PA preservation is not required per the user). Slots flagged for background removal (D1/D2 hero cut-outs) stay withheld in .devin/image-preview until cut-outs exist; draft alt text still awaits review. Originals remain untouched in resources/images/.
- Verification commands: `npm run lint`, `npm run typecheck`, `npm run build`, and `npm run test:e2e` with an already running server. Playwright covers 390, 768, 1024 and 1440 widths.
- Installed framework guides remain ignored by the tooling. The user supplied readable copies: `next16-images-guide.md`, `next16-fonts-guide.md`, and `next16-viewport-guide.md`. Read the appropriate copy before related Next.js changes; do not bypass the ignore policy.
- The final reference's Why EVE tiles use inline vector icons with per-part micro-motion, not the supplied illustrated PNGs. First-visit guide artwork uses the exact 140x140 SVG scenes and staggered finite animations from the reference. Honour reduced motion.
- Keep mobile grid tracks shrinkable with `minmax(0, 1fr)` and `min-width: 0`; horizontal carousels must not expand the document viewport. A click-selected visit step remains selected until scrolling input resumes.
- Phase 2 shell lives in `src/components/shell/` and `src/app/shell.css`. Navigation data is `src/lib/nav.ts` (site-plan §5 verbatim). Mega panels anchor to the full-width sticky header (`position: absolute; left/right: 0` under `.sh-hdr`), not to nav items, so they can never overflow the viewport; the 13px `top` overlap is the hover bridge.
- The new-react lint forbids synchronous `setState` inside `useEffect`. For close-on-navigation use the render-phase adjust pattern (`prevPath` state compared in render); for localStorage reads defer with `requestAnimationFrame` inside the effect.
- `site.whatsapp`/`site.hours` are `ConfirmValue` literals (satisfies narrows them). Call `resolveConfirm<string>(...)` with the explicit type argument or the generic collapses to `ConfirmValue` and breaks narrowing.
- Cookie consent is `localStorage["eve-consent"]` = `{choice, at}`; re-open it by dispatching the window event `eve:cookie-settings`. Phase 6 must gate GA4/maps/video behind this.
- Phase 3 content pipeline: `scripts/split-content.mjs` regenerates `resources/content/*.md` (never edit those files by hand — edit `resources/docs/new-website-content.md` and re-split). Frontmatter is Zod-validated in `src/lib/content/schema.ts`; `load.ts` parses sections/FAQs/sources/reviewer notes/CONFIRMs; `render.tsx` maps mdast to React. Schema graphs are built in `src/lib/schema/` from `site-config.ts` + frontmatter — one `@graph` per page with stable `#clinic` `#place` `#dr-swati-shree` `#website` ids; `[CONFIRM]` values are pruned from JSON-LD. Routes render via `src/app/[[...slug]]/page.tsx` templates in `src/components/pages/`.
- `[date]` placeholders behave exactly like `[CONFIRM]`: dev-only chips via `CONFIRM_RE` in `src/lib/content/load.ts`, stripped by `plainText`, pruned from JSON-LD, and counted by `launch-check`. Never publish a literal `[date]`.
- `npm run launch-check` must fail with open CONFIRM items until the client confirms them; it writes `client-inputs-needed.md`. `scripts/build-check.mjs` (Part 9.1) runs as `prebuild`.
- Content rules enforced by `tests/content.spec.ts` (runs once in the `content` project): zero em/en dashes in HTML and JSON-LD, visible FAQ text must equal FAQPage JSON-LD, no nested interactives, internal links must resolve, unique titles/descriptions, axe clean on samples. Arrow rows (`text → /url/`) become accessible links whose name is the row text.
- The content file's `badge:` frontmatter uses site-plan canonical badge ids; `src/lib/service-badges.ts` maps them (plus URL-slug aliases) to processed badge assets.
