<!-- From: /Users/theone/dev/juansworld.xyz/AGENTS.md -->
<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Agent Guide: JuansWorld.XYZ

Juan's personal site: what he builds with AI, plus a blog. Use this guide before making changes.

## What the site is

A personal site and notebook, not a product. Three projects are featured (see `lib/projects.ts`): **The Loop** (clock-driven prediction machine, private), **SaskPoly — The Prediction Desk** (live at saskpoly.xyz), and **Chilliboys Manufacturing** (client work, private). Blog posts live in `content/blog/` and are bylined **Jason Spooner** — the site is branded Juan, posts carry that byline. Keep it consistent.

## Tech Stack

- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 (+ `@tailwindcss/typography` for the `prose` class on posts)
- Blog: MDX in `content/blog/`, rendered with `gray-matter` + `next-mdx-remote` + `remark-gfm` (same pattern as the sibling saskpoly site)
- Resend (contact form email)
- Google Analytics (`@next/third-parties`) + Vercel Analytics (`@vercel/analytics`)
- Deployed on Vercel

There is **no auth** — Clerk was removed 2026-10-13 when the site was rebuilt. Do not reintroduce it without asking.

## Project Structure

```
app/
  actions/contact.ts      # Resend email sender for contact form
  blog/                   # Blog index + [slug] post pages
  contact/                # Contact page + ContactForm client component
  now/                    # Manual /now page — edit in place when life changes
  privacy-policy/         # Privacy policy page
  projects/               # Projects index + [slug] detail pages (data in lib/projects.ts)
  terms-of-service/       # Terms of service page
  sitemap.ts              # Sitemap (blog posts + static routes)
  globals.css             # Tailwind + global styles
  layout.tsx              # Root layout with Header/Footer + analytics
  page.tsx                # Home page
components/
  Header.tsx              # Nav (client component for the mobile toggle, no auth)
  Footer.tsx              # Footer with project/legal links + affiliate link
content/blog/             # MDX blog posts (frontmatter: title, date, description, tags, author)
lib/
  blog.ts                 # Post loader (gray-matter, sorted newest first)
  projects.ts             # Project data — single source for cards and detail pages
  affiliates.ts           # Amazon affiliate link constants (tag goes here)
scripts/check-blog.mjs    # Blog content sanity check (`npm run check`)
next.config.ts            # Redirects (/games → /)
```

## Conventions

- **Routing**: App Router. Every page is a `page.tsx` in its route directory.
- **Styling**: Tailwind CSS v4. Avoid arbitrary values; stick to the design system.
- **Components**: Server components by default. Add `"use client"` only when using hooks or browser APIs.
- **Forms**: Use Next.js server actions (`"use server"`) for form submissions.
- **Emails**: Use Resend. The verified sending domain is `juansworld.xyz` (from address: `contact@juansworld.xyz`).
- **Text encoding**: Use literal apostrophes (`'`) in JSX and strings. Do **not** use `&apos;` — Next.js/React double-escapes it to `Juan&amp;apos;s World`.
- **Writing voice** (blog posts, project pages, marketing copy): numbers lead, narrative follows. Short declarative sentences. Dry wit, no emojis, no exclamation marks, no hype. Honesty as a flex — disclose the flaw before the reader finds it. Coin a term, define it, then use it. Closers are short and punchy. (Distilled from the saskpoly article voice; same rules, first person singular.)

## Working with the blog

- New post: drop an `.mdx` file in `content/blog/` with frontmatter `title`, `date` (`YYYY-MM-DD`), `description`, optional `tags` and `author` (defaults to `Jason Spooner`).
- The slug is the filename. Posts sort newest-first by `date`.
- Run `npm run check` after adding or editing posts — it verifies every file parses, has required frontmatter, and has a unique slug.
- The `prose` class from `@tailwindcss/typography` styles post bodies; custom MDX components are not wired up (add them in `app/blog/[slug]/page.tsx` if ever needed).

## Environment Variables

No env keys are required for the site to build — blog, projects, and pages are all static. Optional vars (see `.env.local.example`):

- `NEXT_PUBLIC_GA_ID` — enables Google Analytics when set
- `RESEND_API_KEY` + `CONTACT_EMAIL` — required for the contact form to actually send

## Build & Deploy

```bash
npm run lint
npm run check
npm run build
npx vercel --prod
```

**The site ships only via `npx vercel --prod`.** There is no git-connected deploy and no CI — pushing to GitHub does not publish anything, and the site does not update until the Vercel CLI deploy completes. The GitHub repo (github.com/vote4arealclown/juansworld.xyz) is a public source mirror; keep it in sync with what's deployed, but treat Vercel as the only deploy path. When someone says "push it" or "ship it", they mean: commit, push to GitHub, then `npx vercel --prod` — in that order, all three.

**Verify the custom domain actually moved.** As of 2026-10-13, `npx vercel --prod` aliased the deployment URL but left `juansworld.xyz` pointing at the previous deployment. After every deploy, check `curl -s -o /dev/null -w '%{http_code}' https://juansworld.xyz/<new-path>` (expect 200, not 404); if it's stale, retarget with `npx vercel alias set <new-deployment-url> juansworld.xyz`. `npx vercel alias ls` shows what the domain currently points to.

## Common Tasks

- **Add a blog post**: `content/blog/<slug>.mdx`, then `npm run check`.
- **Update a project**: edit its entry in `lib/projects.ts` (cards and detail pages update together).
- **Update the /now page**: edit `app/now/page.tsx` — keep the month line current.
- **Add the Amazon Associates tag**: one constant in `lib/affiliates.ts`.
- **Update header/footer**: edit `components/Header.tsx` or `components/Footer.tsx`.
- **Update contact form logic**: edit `app/actions/contact.ts`.
- **Change env vars**: update `.env.local` locally and `npx vercel env add <name> <env>` for deployments.

## Gotchas

- The old `/games` section is gone (removed 2026-10-13); `next.config.ts` redirects it to `/`. Don't resurrect APK/game promos here — that's not what this site is anymore.
- `ClerkProvider`-in-`<body>` was a Clerk-era constraint; there is no provider now. Don't add one back without a reason.
- Do not commit `.env.local`. `.env.local.example` is the template.
- Affiliate links are disclosed in the privacy policy — keep that disclosure if you add more monetization.
- Keep the project on free tiers: monitor Vercel bandwidth/function usage and Resend daily email quota.

# Ponytail — lazy senior dev mode

Imported from [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail).

You are a lazy senior developer. Lazy means efficient, not careless. The best code is the code never written.

Before writing any code, stop at the first rung that holds:

1. Does this need to be built at all? (YAGNI)
2. Does the standard library already do this? Use it.
3. Does a native platform feature cover it? Use it.
4. Does an already-installed dependency solve it? Use it.
5. Can this be one line? Make it one line.
6. Only then: write the minimum code that works.

Rules:

- No abstractions that weren't explicitly requested.
- No new dependency if it can be avoided.
- No boilerplate nobody asked for.
- Deletion over addition. Boring over clever. Fewest files possible.
- Question complex requests: "Do you actually need X, or does Y cover it?"
- Pick the edge-case-correct option when two stdlib approaches are the same size — lazy means less code, not the flimsier algorithm.
- Mark intentional simplifications with a `ponytail:` comment. If the shortcut has a known ceiling (global lock, O(n²) scan, naive heuristic), the comment names the ceiling and the upgrade path.

Not lazy about: input validation at trust boundaries, error handling that prevents data loss, security, accessibility, anything explicitly requested. Non-trivial logic leaves ONE runnable check behind — the smallest thing that fails if the logic breaks (an assert-based demo/self-check or one small test file; no frameworks, no fixtures). Trivial one-liners need no test.
