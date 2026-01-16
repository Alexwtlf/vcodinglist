## VcodingList — Waitlist Landing (Spec)

### Overview
This repository contains a **production-ready waitlist landing page** for **VcodingList**.
The landing is designed to capture early interest and collect emails for a waitlist (currently **UI-only**, backend integration planned).

### Goal
- Ship a clean, premium SaaS landing page that communicates the value proposition quickly.
- Convert visitors into waitlist signups (“Join Waitlist”).

### Non-goals (for current phase)
- No real email persistence yet (no DB writes).
- No authentication.
- No dashboard/product features.

---

## Tech stack
- **Next.js 16** (App Router, `src/app`)
- **React 19**
- **TypeScript**
- **Tailwind CSS** (utility-first styling)
- **Font**: Inter (via `next/font/google`)

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
- Badge: “The #1 platform for AI-built products”
- Headline:
  - “Launch. Validate.”
  - “Reach Real Users.” (gradient accent)
- Subheadline:
  - “The product discovery and ranking platform for AI-native builders.”
  - “Turn early traction into real users.”
- Background: subtle blurred gradient accents

### 3) Waitlist form (overlay)
- UI-only email submit form:
  - Email input
  - “Join Waitlist” button
  - Validation: basic email regex + empty state
  - Simulated loading + success state
- Privacy note: “We respect your privacy. No spam, ever.”

### 4) Social proof / stats
- Metrics row:
  - 2M+ — AI-native builders
  - 80% — avg. Vibe in 2026
  - Cursor — top AI-native tool
- “Early signal > vanity metrics” indicator row

### 5) Value proposition / features
- Headline:
  - “Building is easy.”
  - “Getting users is not.” (gradient accent)
- 4 feature cards with hover styling:
  1. Real Feedback, Not Noise
  2. Validation Through Rankings
  3. From Validation to Real Users
  4. Built for Vibe Coders

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
  - `--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--border`, etc.
- Utility classes provided:
  - `.gradient-text` (text gradient)
  - `.gradient-teal-cyan` (background gradient)
  - simple animations (`animate-fade-up`, `animate-scale-in`)

### Current behavior of “Join Waitlist”
- It **does not send data anywhere yet**.
- It validates email and shows success state after simulated delay.

---

## Deployment (Vercel)
Plan: deploy **this landing** to Vercel as production.

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

