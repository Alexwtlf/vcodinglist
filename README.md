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

## Waitlist emails (Resend)
This project sends waitlist emails via a server endpoint: `POST /api/waitlist`.

### 1) Create a Resend account + API key
- Create an account in Resend.
- In Resend dashboard → **API Keys** → create a key.

### 2) Verify your sender (recommended for production)
- In Resend dashboard → **Domains** → add and verify your domain (DNS records).
- After verification, you can use a sender like `VcodingList <hello@vcodinglist.com>`.

### 3) Set environment variables
Local dev: create `.env.local` (do **not** commit it) and copy variables from `env.example`.

Vercel: Project → Settings → Environment Variables:
- `RESEND_API_KEY` (required)
- `WAITLIST_FROM_EMAIL` (recommended)
- `WAITLIST_NOTIFY_EMAIL` (optional)

Then redeploy.

### 4) Test
- Run locally and submit the form.
- If you get an error on submit, check Vercel logs / terminal output of the route and confirm the sender/domain is verified in Resend.

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
