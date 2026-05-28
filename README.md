# Woodbridge CG — Website

Marketing website for Woodbridge CG, a local technology consultancy serving small businesses in Woodbridge, VA and Philadelphia, PA.

**Stack:** Next.js 16 App Router · TypeScript strict · Tailwind CSS v4 · shadcn/ui · Framer Motion · Lucide React

**Status:** v1-foundation complete. Awaiting real business content before deployment.

---

## Development

```bash
npm run dev       # start dev server at localhost:3000
npm run build     # production build
npm run lint      # ESLint
npm run typecheck # TypeScript check
```

---

## Content updates

All placeholder values live in one place — swap these before launch:

| What | File |
|------|------|
| Calendly URL, phone, email, LinkedIn | `lib/content/site.ts` |
| Team names, bios, photos | `lib/content/team.ts` |
| Testimonials | `lib/content/testimonials.ts` |
| OG image | `app/opengraph-image.tsx` |

Section copy (services, industries, process, etc.) lives in `lib/content/`.

---

## Deployment

Deploy via Vercel. Push to `main` — Vercel builds automatically.

After deploying, verify:
- `/sitemap.xml` returns valid XML
- `/robots.txt` is accessible
- `/opengraph-image` renders correctly
- Calendly link opens the booking page
