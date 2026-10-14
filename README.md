# JuansWorld.XYZ

Juan's personal site: what he builds with AI, and a notebook about building it. Blog posts are bylined Jason Spooner.

## Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + `@tailwindcss/typography`
- **Blog**: MDX in `content/blog/`, rendered with `gray-matter` + `next-mdx-remote`
- **Email**: [Resend](https://resend.com/) (contact form)
- **Analytics**: Google Analytics (`@next/third-parties`) + Vercel Analytics
- **Deployment**: [Vercel](https://vercel.com/)

## Pages

- `/` — Home: intro, project cards, latest posts
- `/projects` — the three featured projects (data: `lib/projects.ts`)
- `/projects/[slug]` — loopline, saskpoly, chilliboys breakdowns
- `/blog` — post index; `/blog/[slug]` — MDX posts from `content/blog/`
- `/now` — what I'm working on this month (hand-edited)
- `/contact` — contact form (sends email via Resend)
- `/privacy-policy`, `/terms-of-service`

The old `/games` section was removed 2026-10-13; it redirects to `/`.

## Development

```bash
npm install
npm run dev      # dev server
npm run lint     # eslint
npm run check    # validate blog content (frontmatter, slugs, dates)
npm run build    # production build
```

## Adding a blog post

Drop `content/blog/my-post.mdx`:

```mdx
---
title: "The Title"
date: "2026-10-13"
description: "One sentence, shown on the index and in metadata."
tags: ["ai"]
---

Post body in MDX...
```

Then run `npm run check`. Slug = filename; `author` defaults to Jason Spooner.

## Environment Variables

No keys are required to build. Optional (see `.env.local.example`):

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_ID` | Enables Google Analytics |
| `RESEND_API_KEY` | Contact form sending |
| `CONTACT_EMAIL` | Inbox for contact form submissions |

## Deployment

```bash
npx vercel --prod
```

Production URL: https://juansworld.xyz
