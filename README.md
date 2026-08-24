# AuraElevates

Production website for AuraElevates, a premium, faceless posture, mobility and everyday stability brand. The first product is the Stand Steady Guide, a digital PDF that teaches people how to stand more steadily, confidently and comfortably on buses and trains while they are moving.

Core message: Stay steady when life moves.

## Stack

- React 19
- Vite (relative base, so it works on a root domain or a subpath)
- Vanilla CSS (design tokens in `src/index.css`)
- Vercel (`vercel.json` SPA rewrite)

## Local development

```bash
npm install
npm run dev
```

## Production checks

```bash
npm run lint   # ESLint, flat config
npm run build  # Vite production build to dist/
npm run preview
```

## Where links are configured

All purchase and social links are centralized in `src/data/config.js`:

- `payhipUrl`: every purchase CTA opens this URL. Update this single value to roll out the real Payhip link everywhere.
- `instagram.url`: every Instagram link uses `https://www.instagram.com/auraelevates/`.

Every CTA button is rendered by `src/components/Button.jsx`, which reads `payhipUrl` by default. The nav and footer also pull Instagram and Payhip links from the same config.

## Replacing image placeholders

The site intentionally uses designed placeholder blocks (no external stock photos). Each placeholder is rendered by `src/components/Placeholder.jsx` and is labelled with a caption and `alt` text describing the intended asset.

To replace a placeholder with real photography:

1. Add the image to `src/assets/` and import it (so Vite emits a hashed, relative URL).
2. In the relevant section file, swap the placeholder glyph for an `<img>` inside the `<Placeholder>` frame, or replace the whole `<Placeholder>` with an `<img>`.

Placeholder locations by section:

- Hero image: `src/sections/Hero.jsx`
- Problem image: `src/sections/Problem.jsx`
- Method graphic (abstract SVG, not a photo): `src/sections/Method.jsx`
- Product preview: `src/sections/Product.jsx`
- Everyday confidence image: `src/sections/Confidence.jsx`

The brand logo is `src/assets/logo.jpg` (imported in `src/components/Logo.jsx`). Favicon, app icons and `public/og-image.jpg` live in `public/`.

## Content policy

Do not invent testimonials, credentials, medical claims or exaggerated promises. The guide is general educational fitness and movement guidance, not medical advice. People with pain, injuries, dizziness, balance concerns or a medical condition should speak with a qualified health professional (see the FAQ).

Website copy must not use em dashes. Use short sentences, commas, colons or full stops instead.
