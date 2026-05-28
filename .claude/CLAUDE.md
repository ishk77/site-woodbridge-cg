# Woodbridge CG Engineering Rules

## Stack (actual versions)
- Next.js 16.2.6 — App Router, Turbopack
- TypeScript 5.x — strict mode (`strict: true`, `noEmit: true`, `isolatedModules: true`)
- Tailwind CSS v4 — `@import "tailwindcss"`, `@theme inline {}` blocks, OKLCH color tokens, no `tailwind.config.js`
- shadcn/ui base-nova — uses `@base-ui/react` (NOT Radix UI); polymorphism via `render` prop, not `asChild`
- Framer Motion 12 — `MotionWrapper`/`MotionItem` for below-fold scroll animations
- Lucide React — icons only; all decorative icons get `aria-hidden="true"`

## Design Rules
- Mobile-first, responsive at sm/md/lg/xl breakpoints
- Spacious layouts — `section-padding: py-20 md:py-28 lg:py-32`
- Premium whitespace — let breathing room do the work
- Cards: `rounded-xl border border-border bg-card p-6 shadow-sm md:p-8`
- Icon containers inside cards: `h-11 w-11 rounded-lg` (intentionally smaller radius than card)
- Minimal borders — `border-border` only; no heavy outlines
- Subtle shadows only — `shadow-sm` max
- No gradients, no glassmorphism, no floating particles
- No "AI sci-fi" aesthetics

## Section Background Rhythm (locked)
Hero (bg) → TrustStrip (muted/30) → Services (bg) → Industries (muted/40) → Process (bg) → Results (muted/40) → About (bg) → AIDemo (muted/40) → Testimonials (bg) → FinalCTA (muted/40) → Footer (primary)

## Motion Rules
- Below-fold: `MotionWrapper` (fade-up) + `MotionItem` (stagger children) — `whileInView`, `once: true`, `margin: "-80px"`
- Above-fold (hero): pure CSS `@keyframes fade-up` + `.animate-fade-up` utility — avoids FOIC from Framer Motion SSR
- Stagger: `staggerChildren: 0.08`; fade duration: `0.5s ease-out`; y-offset: `16px`
- All animations respect `prefers-reduced-motion` — `MotionWrapper` renders a plain `<div>` when reduced motion is on
- No hover scale, no parallax, no entrance sequences beyond fade-up

## Typography Scale
| Role | Classes |
|------|---------|
| H1 (hero) | `text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-tight` |
| H2 (section) | `text-3xl md:text-4xl font-semibold tracking-tight` |
| H2 (FinalCTA) | `text-4xl md:text-5xl` — intentionally larger, conversion emphasis |
| H3 (featured card) | `text-xl font-semibold` |
| H3 (list/compact) | `font-semibold` (base 16px) |
| Eyebrow | `text-sm font-medium uppercase tracking-wide text-accent` |
| Body | `leading-relaxed text-muted-foreground` |
| Subhead | `text-lg leading-relaxed text-muted-foreground` |

Minimum text: `text-sm`. No `text-xs` for primary content.

## Component Rules
- Sections: server components in `/components/sections` — one file per section
- UI primitives: `/components/ui` — shared, data-driven via typed props
- Layout: `/components/layout` — navbar, mobile-nav, footer
- Client components (`"use client"`): ONLY `navbar`, `mobile-nav`, `motion-wrapper`, `sheet`
- `CalendlyButton` is a server component (plain `<a>` tag, no interactivity)
- No inline JSX blocks > ~50 lines in section files — extract to primitives

## Code Rules
- No `any` — strict TypeScript throughout
- All content interfaces in `lib/types.ts`; all content data in `lib/content/*.ts`
- Sections are purely presentational — they map over typed content, compose primitives
- Decorative icons: always `aria-hidden="true"`
- Landmark elements: `<header>`, `<main id="top" tabIndex={-1}>`, `<footer>`, `<nav aria-label="...">`
- Sections: `<section id="..." aria-label="...">`
- Heading hierarchy: `h1` (hero) → `h2` (section) → `h3` (card/item) — no gaps

## Placeholder Content Protocol
All placeholder values live in `lib/content/site.ts` only:
- `SITE.calendlyUrl` — Calendly link
- `SITE.phone` — business phone
- `SITE.email` — business email
- `SITE.socials.linkedin` — LinkedIn URL

Team data: `lib/content/team.ts`
Testimonials: `lib/content/testimonials.ts`
Never hardcode contact info in component files.

## Verification (after every change)
```
npm run lint
npm run typecheck
npm run build
```
Build must produce only static routes (`○`). Zero TypeScript errors. Zero lint errors.

## Project Documentation
- Original product spec: `.claude/build.md`
- This file: engineering rules and conventions
- Build state: `.claude/implementation-plan.md`

## Folder Structure (actual)
```
/app
  layout.tsx              # Inter font, metadata, JSON-LD, skip link, Navbar, main, Footer
  page.tsx                # Composes all sections in narrative order
  globals.css             # Tailwind v4 base, OKLCH tokens, @keyframes fade-up, section-padding
  opengraph-image.tsx     # Auto-wires og:image and twitter:image via Next.js convention
  sitemap.ts
  robots.ts

/components
  /layout
    navbar.tsx            # "use client" — scroll state, sticky header
    mobile-nav.tsx        # "use client" — Sheet drawer state
    footer.tsx            # server — 4-column grid, locations, contact links
  /sections               # all server components
    hero-section.tsx
    trust-section.tsx
    services-section.tsx
    industries-section.tsx
    process-section.tsx
    results-section.tsx
    about-section.tsx
    ai-demo-section.tsx
    testimonials-section.tsx
    final-cta-section.tsx
  /ui
    button.tsx            # @base-ui/react/button + CVA variants
    badge.tsx
    calendly-button.tsx   # server — <a> tag wrapping SITE.calendlyUrl
    container.tsx
    demo-card.tsx
    hero-mockup.tsx       # server — aria-hidden decorative UI illustration
    industry-card.tsx
    motion-wrapper.tsx    # "use client" — MotionWrapper + MotionItem
    process-step.tsx
    section-header.tsx
    service-card.tsx
    sheet.tsx             # "use client" — @base-ui/react/dialog
    team-member-card.tsx
    testimonial-card.tsx
    trust-pill.tsx

/lib
  utils.ts                # cn() = clsx + tailwind-merge
  types.ts                # all content interfaces
  /content
    site.ts               # SITE constants — all placeholder values live here
    nav.ts
    services.ts
    industries.ts
    process.ts
    results.ts
    demos.ts
    testimonials.ts
    team.ts
    trust.ts

/public
  (empty — scaffold SVGs removed)
```
