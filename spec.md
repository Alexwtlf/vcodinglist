## VcodingList — Waitlist Landing (Spec)

### Overview
This repository contains a **production-ready waitlist landing page** for **VcodingList**.
The landing is designed to capture early interest and collect emails for a waitlist.
Current behavior: **email signup triggers a confirmation email via Resend** (database persistence planned next).

### Goal
- Ship a clean, premium SaaS landing page that communicates the value proposition quickly.
- Convert visitors into waitlist signups (“Join Waitlist”).

### Non-goals (for current phase)
- No DB persistence yet (planned: Supabase).
- No authentication.
- No dashboard/product features.

---

## Tech stack
- **Next.js 16** (App Router, `src/app`)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (utility-first styling)
- **Fonts**: Inter (body) + Poppins (brand) via `next/font/google`

---

## Page structure (current)
Single page route: **`/`**

### 1) Header (fixed)
- Logo text: **VcodingList** (left)
- CTA button (right): **Join Waitlist**
- Behavior:
  - Header is **fixed** at top
  - CTA scrolls to the waitlist email input (`#waitlist-email`) with scroll offset so the fixed header doesn’t cover it

### 2) Hero (full viewport)
- Badge: "Built for the vibe coding era"
- Headline:
  - "Launch. Get feedback."
  - "Find your first 100 users." (gradient accent)
- Subheadline:
  - "A discovery and ranking platform for AI-native builders."
  - "Submit your product in under 60 seconds."
- Background: subtle blurred gradient accents (primary/secondary colors)

### 3) Waitlist form (inside Hero)
- Email submit form:
  - Email input
  - “Join Waitlist” button
  - Validation: basic email regex + empty state
  - Real POST request to server endpoint (`POST /api/waitlist`)
- Privacy note: “We respect your privacy. No spam, ever.”

### 4) Social proof / stats
- Metrics row:
  - 2M+ — AI-native builders
  - 80% — avg. Vibe in 2026
  - Cursor — top AI-native tool
- “Early signal > vanity metrics” indicator row

### 5) Value proposition — Pain Points & How It Works
- Main headline:
  - "Building is easy."
  - "Getting users is not." (gradient accent)

#### Pain Points ("Sound Familiar?")
- Badge: "Sound Familiar?"
- Subheadline: "This Is Your Chance"
- 2 scenario cards with hover effects:
  1. **Want to get users fast?** — "real users now", "viral", distribution vs visibility
  2. **Have a great product but stuck?** — "can't break through the noise", "a different channel"
- CTA arrow: "Here's how we solve this"

#### How It Works
- Headline: "How VcodingList Actually Works" (gradient)
- Subheadline: "Not just another launch platform. A distribution engine."
- 3 step cards with animated connecting lines:
  1. **Launch & Signal** — ranked by builders who understand AI-native products
  2. **Validation Filter** — real traction, upvotes + comments = proof
  3. **Distribution to Real Users** — pushed outside the platform to consumer channels

#### Differentiator Card
- Badge: "THIS IS THE DIFFERENCE"
- Key message:
  - "We don't sell attention inside the platform." (gradient)
  - "We take products outside the platform." (highlighted)
- Tagline: "Distribution > Attention"

#### Animations
- Scroll-triggered fade-in animations (Intersection Observer)
- Hover effects on all cards
- Pulsing background blobs

### 6) Quote / mission
Centered quote:
“AI changed how fast we build.
It didn’t change how hard it is to get users.
VcodingList exists to close that gap.”

### 7) Footer
- “Built in public by @alexwtlf” (link)
- “From validation to real users.”
- Email: `contact@vcodinglist.com`
- Copyright

---

## Implementation notes
### Source of truth (files)
- Page: `src/app/page.tsx`
- Layout + font: `src/app/layout.tsx`
- Design tokens + utilities: `src/app/globals.css`
- Landing components: `src/components/landing/*`

### Styling / design system
- Uses semantic CSS variables (HSL) for:
  - `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--border`, `--destructive`, etc.
- Utility classes provided:
  - `.gradient-text` (text gradient)
  - `.gradient-teal-cyan` (background gradient)
  - `.font-brand` (Poppins brand font)
  - simple animations (`animate-fade-up`, `animate-scale-in`)
- Scroll-triggered animations:
  - Custom `useInView` hook (Intersection Observer)
  - Staggered fade-up effects on cards
  - Scale-in effect on differentiator card

### Current behavior of “Join Waitlist”
- It sends a request to `POST /api/waitlist`.
- Server sends a confirmation email via Resend.
- Optional: server also sends an internal notification email if configured.

## Resend integration (waitlist)
### Route handler
- Endpoint: `src/app/api/waitlist/route.ts`
- Method: `POST`
- Body: JSON `{ "email": "user@example.com" }`

### Environment variables
- `RESEND_API_KEY` (required)
- `NEXT_PUBLIC_SITE_URL` (recommended; production: `https://vcodinglist.com`)
- `WAITLIST_FROM_EMAIL` (recommended; use a verified sender/domain in Resend for production)
- `WAITLIST_NOTIFY_EMAIL` (optional; internal notification recipient)

### Notes
- Keep Resend API key server-side only (never in client components).

---

## Deployment (Vercel)
Status: deployed to **Vercel** and running on **`vcodinglist.com`** (production).

### Steps
1. Push repo to GitHub.
2. In Vercel: “Add New Project” → import repository.
3. Framework preset: **Next.js**.
4. Build command: `npm run build` (default)
5. Output: default Next.js
6. Deploy.

### Notes
- Landing is static-friendly and should deploy fast.
- If multiple `next dev` instances run locally, `.next/dev/lock` can cause issues; stop old process and restart dev server.

---

## Next step: Production waitlist persistence with Supabase
Plan: after the landing is live, connect **Supabase** in production for storing waitlist emails.

### Recommended approach (secure)
- Use a **server-side endpoint** (Next Route Handler or Server Action) to write to Supabase.
- Keep Supabase keys on the server via environment variables.

### Suggested table (Postgres)
Table: `waitlist_subscribers`
- `id` (uuid, primary key, default `gen_random_uuid()`)
- `email` (text, unique, not null)
- `created_at` (timestamp with time zone, default `now()`)
- optional: `source` (text), `referrer` (text), `utm_*` columns

### Expected behavior
- On submit:
  - Insert new email
  - If already exists: return “already on the list”
  - Show success UI

### Environment variables (Vercel)
To be added when implementing Supabase:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY` (server only)

