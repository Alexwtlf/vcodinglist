## VcodingList — Waitlist Landing (Next.js)

Minimal, premium waitlist landing for **VcodingList**, built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

### What’s inside
- **Landing page**: `src/app/page.tsx`
- **Landing sections/components**: `src/components/landing/*`
- **Design tokens + utilities** (colors, gradient text, animations): `src/app/globals.css`
- **Waitlist form**: UI-only (no backend yet)

## Requirements
- **Node.js**: 18.18+ (or 20+ recommended)
- **npm**: comes with Node

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` (or the port printed in the terminal).

## Scripts
- **dev**: `npm run dev`
- **build**: `npm run build`
- **start**: `npm run start`
- **lint**: `npm run lint`

## Deployment
This is a standard Next.js app — deploy to Vercel (recommended) or any Node hosting.

- **Vercel**: import the repo, set framework to Next.js, deploy.
- **Production build locally**:

```bash
npm run build
npm run start
```

## Notes
- **App Router location**: this project uses `src/app` (not root `app/`).

## Roadmap (next)
- Persist waitlist emails (Sheets/Airtable/Supabase/etc.)
- Analytics events for CTA + form submit
- SEO: OpenGraph, Twitter cards, sitemap/robots, metadata polish
