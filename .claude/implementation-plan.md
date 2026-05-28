# Woodbridge CG — Build State

> Single-page marketing site. All 5 phases complete. Tagged `v1-foundation`.
> Next.js 16.2.6 · TypeScript strict · Tailwind v4 · shadcn/ui (base-nova) · Framer Motion 12 · Lucide React

---

## Locked decisions (source of truth)

1. **Single page** with anchor-scroll navigation — no multi-route IA.
2. **Calendly** powers all consultation CTAs.
3. CTA labels are fixed: primary **"Book a Free Consultation"**, secondary **"See AI Demos"**.
4. Animations are **subtle and minimal** everywhere.
5. Hero is a **clean split-layout** — no layered dashboards, one primary visual.
6. **Single regional consultancy** — no per-location pages or SEO splitting.
7. **No site i18n.** Multilingual = AI phone agent product capability only.
8. Testimonials and results metrics are **clearly-labeled placeholders**.
9. AI demo is a **lightweight placeholder section** — no real interactivity, audio, or backend.
10. Testimonials render as a **responsive grid**, not a carousel.
11. **Stay pragmatic** — avoid overengineering.

---

## Narrative arc

Hook (Hero) → Reassurance (Trust strip) → What we do (Services) → Who it's for (Industries) → How it works (Process) → What changes (Results) → Who we are (About) → See it (AI Demo) → What clients say (Testimonials) → Convert (Final CTA) → Footer

---

## Information architecture

| # | Section | Anchor | In nav | Background |
|---|---------|--------|--------|------------|
| 1 | Hero | `#top` / `#hero` | — | bg (warm white) |
| 2 | Trust strip | `#trust` | no | muted/30 |
| 3 | Services | `#services` | yes | bg |
| 4 | Industries | `#industries` | yes | muted/40 |
| 5 | Process | `#process` | yes | bg |
| 6 | Results | `#results` | no | muted/40 |
| 7 | About / Team | `#about` | yes | bg |
| 8 | AI Demo | `#ai-demos` | yes | muted/40 |
| 9 | Testimonials | `#testimonials` | no | bg |
| 10 | Final CTA | `#contact` | — | muted/40 |
| 11 | Footer | — | — | primary (navy) |

---

## Rendering model

All sections are **server components**. Framer Motion animations use `MotionWrapper` (client) wrapping RSC children, keeping content on the server.

**Client components (exactly 4):** `navbar`, `mobile-nav`, `motion-wrapper`, `sheet`

**Above-fold (hero):** CSS `@keyframes fade-up` + `.animate-fade-up` to avoid FOIC from Framer Motion SSR.
**Below-fold (all other sections):** `MotionWrapper`/`MotionItem` with `whileInView`.

---

## Design system

### Color tokens — OKLCH in `app/globals.css`
| Token | Value | Use |
|-------|-------|-----|
| `background` | `oklch(0.985 0.004 90)` | warm white base |
| `foreground` | `oklch(0.175 0.065 265)` | navy body text |
| `primary` | `oklch(0.15 0.07 260)` | deep navy — CTAs, footer |
| `primary-foreground` | `oklch(1 0 0)` | white on navy |
| `muted` | `oklch(0.958 0.007 255)` | subtle panel bg |
| `muted-foreground` | `oklch(0.485 0.025 255)` | secondary text |
| `accent` | `oklch(0.53 0.085 218)` | soft teal — eyebrows, icons |
| `border` | `oklch(0.92 0.007 260)` | hairline borders |
| `ring` | accent | focus rings |
| `radius` | `0.75rem` | base radius |

No gradient backgrounds. Dark mode tokens defined but UI defaults to light.

### Spacing tokens
- Section vertical: `py-20 md:py-28 lg:py-32` (`.section-padding`)
- Section header bottom margin: `mb-12 md:mb-16`
- Card padding: `p-6 md:p-8`
- Card gap: `gap-6 md:gap-8`
- Container: `mx-auto max-w-7xl px-6 md:px-8`
- Scroll offset: `scroll-margin-top: 4rem` on all `section[id]`

---

## Content modules (all in `lib/content/`)

| File | Export | Status |
|------|--------|--------|
| `site.ts` | `SITE` | Placeholder contact info — swap before launch |
| `nav.ts` | `NAV_ITEMS` | Final |
| `services.ts` | `SERVICES` | Final |
| `industries.ts` | `INDUSTRIES` | Final |
| `process.ts` | `PROCESS_STEPS` | Final |
| `results.ts` | `RESULTS` | Final (qualitative outcomes) |
| `demos.ts` | `DEMO_SCENARIOS` | Final |
| `trust.ts` | `TRUST_ITEMS` | Final |
| `testimonials.ts` | `TESTIMONIALS` | Placeholder — replace with real quotes |
| `team.ts` | `TEAM` | Placeholder — replace names/bios/photos |

---

## SEO / metadata

- `app/layout.tsx`: `metadata` export with title template, description, canonical, OpenGraph, Twitter
- `app/opengraph-image.tsx`: auto-generates `/opengraph-image` (navy bg, wordmark, tagline, location)
- `app/sitemap.ts`: generates `/sitemap.xml`
- `app/robots.ts`: generates `/robots.txt`
- `app/layout.tsx` `<head>`: JSON-LD `LocalBusiness` with `areaServed` Woodbridge VA + Philadelphia PA

---

## Accessibility baseline

- Skip-to-content link at top of `<body>` (`sr-only`, revealed on focus)
- `<main id="top" tabIndex={-1}>` — skip link target, focusable programmatically
- All decorative icons have `aria-hidden="true"`
- All sections have `aria-label="..."` describing content
- Heading hierarchy complete: `h1` → `h2` (per section) → `h3` (per card/item)
- `MotionWrapper` renders plain `<div>` when `prefers-reduced-motion` is active
- Mobile nav: `aria-expanded`, `aria-label`, keyboard-navigable via @base-ui/react Sheet

---

## Launch blockers (content only — no code changes needed)

| Item | Location | Action |
|------|----------|--------|
| Calendly URL | `lib/content/site.ts` → `calendlyUrl` | Replace placeholder |
| Phone number | `lib/content/site.ts` → `phone` | Replace `(703) 000-0000` |
| Email | `lib/content/site.ts` → `email` | Replace `hello@woodbridgecg.com` |
| LinkedIn URL | `lib/content/site.ts` → `socials.linkedin` | Replace placeholder |
| Team: names/roles | `lib/content/team.ts` | Fill in real founder info |
| Team: bios | `lib/content/team.ts` | Fill in real bios |
| Team: photos | `lib/content/team.ts` + `TeamMemberCard` | Replace `<div>` placeholder with `next/image` |
| Testimonials | `lib/content/testimonials.ts` | Replace sample quotes with real customer stories |
| OG image | `app/opengraph-image.tsx` | Replace text-only placeholder with designed image |
| Favicon | (missing) | Add `app/icon.svg` or `app/favicon.ico` |

---

## Recommended post-launch improvements

1. **Favicon** — add `app/icon.svg` with the actual logo mark
2. **OG image** — replace `opengraph-image.tsx` text-only placeholder with designed 1200×630 image
3. **Accent color contrast** — `oklch(0.53 0.085 218)` is borderline WCAG AA at small sizes; darken accent to L≈0.45 post-audit
4. **Privacy policy** — Calendly + any future contact forms require a privacy stub at `/privacy`
5. **Analytics** — Vercel Analytics or Plausible; no tracking installed yet
6. **`next.config.ts`** — add `images.remotePatterns` if team photos are externally hosted; add security headers
7. **`font-display`** — Inter uses `display: "swap"`; consider `optional` after Lighthouse audit

---

## Phase completion log

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | Scaffolding, design system, layout shell, typed content, UI primitives | ✓ Complete |
| 2 | HeroSection, navbar polish, CSS motion baseline | ✓ Complete |
| 3 | TrustSection, ServicesSection, IndustriesSection, ProcessSection | ✓ Complete |
| 4 | ResultsSection, AboutSection, AIDemoSection, TestimonialsSection, FinalCTASection, footer | ✓ Complete |
| 5 | Responsive QA, a11y audit, SEO metadata, sitemap/robots/JSON-LD, OG image, dead code removal | ✓ Complete |
