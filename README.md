# EVE Women and Fertility Clinic website

Marketing website for EVE Women and Fertility Clinic, Gunjur, Bangalore. Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Layout

- `src/` application code
- `resources/` source-of-truth material (read-only; copy from it, never edit)
  - `docs/` master prompt, site plan, content file, client data, credentials facts, image map
  - `reference/` approved visual reference
  - `images/` delivered photography and logo masters with `image-manifest.json`
  - `assets/` generated badges, spot icons and scenes
  - `content/` parsed per-page content (pipeline output)
- `scripts/` build and audit scripts
- `public/` static output, including processed images

## Commands

```bash
npm run dev                    # development server
npm run build                  # production build
node scripts/audit-content.mjs # content audit (Part 9 format)
```

## Source files

Every word on the site comes from `resources/docs/new-website-content.md`. URLs, navigation, schema and compliance come from `resources/docs/site-plan.md`. Visual rules come from `resources/reference/eve-styleguide.html`. Image slots come from `resources/images/image-manifest.json`. Values not yet confirmed by the client are `[CONFIRM]` tokens and never appear in production output.
