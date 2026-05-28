# Woodbridge CG — Implementation Plan

> Single-page marketing site. Next.js App Router · TypeScript (strict) · Tailwind · shadcn/ui · Framer Motion · Lucide.
> This plan reflects the locked decisions below. No code is written until Phase 1.

## Locked decisions (source of truth)

1. **Single page** with anchor-scroll navigation (no multi-route IA).
2. **Calendly** powers the consultation CTA.
3. CTA labels are fixed: primary **"Book a Free Consultation"**, secondary **"See AI Demos"**.
4. Animations are **subtle and minimal** everywhere.
5. Hero is a **clean split-layout** with one primary visual area — no layered dashboards.
6. Treat as a **single regional consultancy** — no per-location SEO/page architecture.
7. **No site i18n.** "Multilingual" describes the AI phone-agent product only.
8. Testimonials and results metrics are **clearly-labeled placeholders** for now.
9. AI demo is a **lightweight placeholder section** — no real interactivity, audio, or backend.
10. Testimonials render as a **responsive grid**, not a carousel.
11. **Stay pragmatic** — avoid overengineering.

---

## 1. Brand + UX strategy

**Positioning.** Woodbridge CG is the trusted local technology partner that modernizes small businesses *without enterprise complexity*. The site must feel local, trustworthy, operationally practical, and premium-but-approachable — never crypto/AI-hype, never generic agency, never enterprise-cold.

**Voice.** Conversational, reassuring, outcome-focused. Talk about saving time, fewer missed calls, and helping overwhelmed owners — not "revolutionary AI." Speak like a consultant who'll show up in person, not a SaaS landing page.

**UX principles.**
- **One conversion path.** Every CTA leads to the same place: book a free consultation via Calendly. Primary CTA repeats at hero, mid-page, and final CTA.
- **Scannable narrative.** Each section answers one question and earns the scroll to the next. Owners are busy; reward skimming.
- **Show, don't hype.** Concrete capabilities and real-world scenarios (lunch-rush calls, after-hours voicemail) over buzzwords.
- **Honest by construction.** Placeholder testimonials/metrics are visibly labeled as samples so nothing reads as a fabricated claim.
- **Calm motion.** Motion guides attention (fade-up on scroll), never decorates. Respects reduced-motion.

**Narrative arc (top → bottom).**
Hook (Hero) → Reassurance (Trust strip) → What we do (Services) → Who it's for (Industries) → How it works (Process) → Proof (Results + Testimonials) → Who we are (About) → See it (AI Demo) → Convert (Final CTA) → Footer.

---

## 2. Information architecture

**Single page, anchor navigation.** Nav stays lean — 5 anchors max plus the primary CTA. Trust, Results, and Testimonials are scroll-through (not nav items) to avoid clutter.

**Navbar:** `Logo` · Services · Industries · Process · About · AI Demos · **[Book a Free Consultation]**
**Mobile:** hamburger → drawer with the same anchors + full-width primary CTA.

**Section order & anchors:**

| # | Section | Anchor | In nav | Notes |
|---|---------|--------|--------|-------|
| 1 | Hero | `#top` | — | Split layout, both CTAs |
| 2 | Trust strip | `#trust` | no | Lightweight value-prop row |
| 3 | Services | `#services` | yes | 3 services, capabilities |
| 4 | Industries | `#industries` | yes | Restaurants, Corner Stores + pain points |
| 5 | Process | `#process` | yes | 4-step timeline, "we handle everything" |
| 6 | Results | `#results` | no | Placeholder metric cards (labeled) |
| 7 | About / Team | `#about` | yes | Founders prominent |
| 8 | AI Demo | `#ai-demos` | yes | Placeholder; secondary CTA target |
| 9 | Testimonials | `#testimonials` | no | Responsive grid (labeled samples) |
| 10 | Final CTA | `#contact` | — | Calendly CTA |
| 11 | Footer | — | — | Services, Industries, Locations, Contact, LinkedIn |

Secondary CTA "See AI Demos" scrolls to `#ai-demos`.

---

## 3. Component architecture

**Rendering model.** Sections are **server components** by default. Only interactive/animated leaves are client components. Reveal animation is achieved by wrapping server-rendered children in a client `MotionWrapper` (children pass through as an RSC payload), so content stays on the server.

**Client components (the only `"use client"` files):** `navbar`, `mobile-nav`, `motion-wrapper`, `calendly-button`.

### Layout (`/components/layout`)
- `navbar.tsx` — sticky; scroll-state styling; anchor links; primary CTA; hamburger trigger.
- `mobile-nav.tsx` — shadcn `Sheet` drawer; anchors + full-width CTA.
- `footer.tsx` — column grid (Services / Industries / Locations / Contact), LinkedIn, copyright.

### UI primitives (`/components/ui`)
- `button.tsx` (shadcn variants) · `container.tsx` · `section-header.tsx` (eyebrow + title + optional description) · `card.tsx` · `badge.tsx` · `sheet.tsx`
- `motion-wrapper.tsx` — `FadeUp` + staggered-children variants; reduced-motion aware.
- `calendly-button.tsx` — Calendly-aware CTA (popup or link), reused everywhere.

### Reusable cards (`/components/ui`, data-driven via props)
`service-card` · `industry-card` · `process-step` · `stat-card` · `team-member-card` · `testimonial-card` · `trust-pill` · `demo-card`

### Sections (`/components/sections`)
`hero-section` · `trust-section` · `services-section` · `industries-section` · `process-section` · `results-section` · `about-section` · `ai-demo-section` · `testimonials-section` · `final-cta-section`
Each maps over typed content and composes primitives — no inline JSX blocks > ~50 lines.

### Content & config (`/lib`)
All copy/data lives in typed modules (no `any`), so sections stay presentational:
`site.ts` (name, contact, calendlyUrl, socials) · `nav.ts` · `services.ts` · `industries.ts` · `process.ts` · `stats.ts` · `testimonials.ts` · `team.ts` · `trust.ts` · `types.ts` · `utils.ts` (`cn`).

---

## 4. Folder structure (Next.js App Router)

```
/app
  layout.tsx            # fonts, metadata, <Navbar/> <main> <Footer/>
  page.tsx              # composes all sections in narrative order
  globals.css           # Tailwind base + CSS-variable design tokens
  sitemap.ts            # Phase 5
  robots.ts             # Phase 5
/components
  /layout
    navbar.tsx
    mobile-nav.tsx
    footer.tsx
  /sections
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
    button.tsx  container.tsx  section-header.tsx  card.tsx  badge.tsx  sheet.tsx
    motion-wrapper.tsx  calendly-button.tsx
    service-card.tsx  industry-card.tsx  process-step.tsx  stat-card.tsx
    team-member-card.tsx  testimonial-card.tsx  trust-pill.tsx  demo-card.tsx
/lib
  utils.ts  types.ts
  /content
    site.ts  nav.ts  services.ts  industries.ts  process.ts
    stats.ts  testimonials.ts  team.ts  trust.ts
/public
  /images               # placeholder assets, clearly labeled as samples
```

> **Note:** Design tokens live in `app/globals.css` (shadcn convention). CLAUDE.md lists a `/styles` folder — flagged as a minor deviation to confirm (see §6).

---

## 5. Design system

> If desired, this section can be lifted into the `.claude/DESIGN.md` that CLAUDE.md references (see §6).

### Color tokens (light, warm-white base) — CSS variables in `globals.css`
| Token | Value (starting point) | Use |
|-------|------------------------|-----|
| `background` | `#FBFAF8` warm white | page base |
| `foreground` | `#14213A` navy ink | body text, headings |
| `primary` | `#0E1C3A` deep navy | primary buttons, key headings |
| `primary-foreground` | `#FFFFFF` | text on navy |
| `muted` | `#EEF1F5` | subtle panels |
| `muted-foreground` | `#5C6678` | secondary text |
| `accent` | `#1F7A8C` soft teal | links, icon accents, eyebrows (sparingly) |
| `accent-foreground` | `#FFFFFF` | text on accent |
| `border` | `#E4E6EC` | minimal hairline borders |
| `card` | `#FFFFFF` | card surfaces |
| `ring` | accent @ ~40% | focus rings |

Accent is **soft teal**; reserve it for emphasis to avoid the "AI startup" look. No gradient backgrounds.

### Typography — Inter via `next/font` (`--font-sans`)
| Role | Tailwind | Weight / tracking |
|------|----------|-------------------|
| Hero / H1 | `text-4xl md:text-6xl` | semibold, `tracking-tight`, `leading-[1.05]` |
| Section / H2 | `text-3xl md:text-4xl` | semibold, `tracking-tight` |
| Card title / H3 | `text-xl md:text-2xl` | semibold |
| Subhead | `text-lg md:text-xl` | regular, `text-muted-foreground`, `leading-relaxed` |
| Body | `text-base` | regular, `leading-relaxed` |
| Eyebrow | `text-sm font-medium uppercase tracking-wide` | accent color |

Minimum body size 1rem — no tiny text.

### Spacing & layout
- 4px base unit (Tailwind default).
- **Container:** `max-w-7xl mx-auto px-6 md:px-8` via shared `<Container>`.
- **Section rhythm:** `py-20 md:py-28 lg:py-32`; section header `mb-12 md:mb-16`.
- **Cards:** `p-6 md:p-8`; grid gaps `gap-6 md:gap-8`.
- **Radius:** cards `rounded-xl`, buttons/inputs `rounded-lg`.
- **Borders/shadows:** `border-border/60` hairlines + `shadow-sm`; subtle soft lift on hover only. No heavy glassmorphism.

### Motion (Framer Motion)
- **FadeUp:** `initial {opacity:0, y:16}` → `whileInView {opacity:1, y:0}`, `viewport once, margin -80px`, `duration 0.5, ease-out`.
- **Stagger:** `staggerChildren 0.08` for card grids.
- **Hover:** shadow lift or `scale 1.01` max.
- **Reduced motion:** when `prefers-reduced-motion`, disable transforms and render instantly. No parallax, particles, or animated gradients.

### Buttons (shadcn variants)
- `primary`: navy bg, white text, `hover:bg-primary/90`, `h-11 px-6 rounded-lg`.
- `outline`: hairline border, transparent, `hover:bg-muted`.
- `ghost`/`link`: nav and inline use.
- `lg` size (`h-12`) for hero CTAs.

---

## 6. Open ambiguities / missing product decisions

These don't block Phase 1 but are needed before launch:

1. **Calendly URL** — exact scheduling link for the CTA.
2. **Real contact details** — phone, email, service-area/address for footer + structured data.
3. **Brand assets** — logo/wordmark SVG, favicon, OG image. (Using a text wordmark until provided.)
4. **Founders** — real names, roles, bios, photos for About (placeholders until then).
5. **Social URLs** — LinkedIn (and any others).
6. **Contact form?** — Calendly only, or also an email/form fallback? (Plan assumes Calendly only.)
7. **Privacy Policy / Terms** — Calendly + lead capture implies a privacy link; need content or a stub page (would add one route, accepted exception to single-page rule).
8. **Placeholder labeling** — agree on a visible "Sample" badge treatment for testimonials/results to stay honest.
9. **DESIGN.md** — CLAUDE.md references `.claude/DESIGN.md`, which doesn't exist. Promote §5 into it, or leave the design system here?
10. **`/styles` vs `globals.css`** — confirm shadcn-convention tokens in `app/globals.css` (plan's choice).
11. **Analytics** — recommend Vercel Analytics or Plausible for a lead-gen site; currently unspecified.
12. **Accent hue** — palette says "blue/teal"; plan picks soft teal — confirm.
13. **Font** — plan recommends Inter; confirm brand font.

---

## Phased build plan

### Phase 1 — Foundation & design system *(no visible sections)*
- Scaffold Next.js (App Router, TS strict) + Tailwind + shadcn/ui + Framer Motion + Lucide.
- Establish folder structure (§4).
- Implement design tokens in `globals.css`; wire Inter via `next/font`.
- Build layout shell: `RootLayout` with baseline SEO metadata, `<main>`, slots for Navbar/Footer.
- Build UI primitives: `Container`, `SectionHeader`, `Button`, `Card`, `Badge`, `Sheet`, `MotionWrapper`, `CalendlyButton`.
- Build navigation **structure** (Navbar + MobileNav shells with anchors + CTA) — styling polished in Phase 2.
- Define typed content model + placeholder content modules in `/lib/content`.
- **Verify:** `npm run lint`, `npm run typecheck`, folder structure matches plan. No page sections yet.

### Phase 2 — Hero + navigation polish + motion baseline
- `HeroSection`: clean split layout, headline/subhead, both CTAs (primary → Calendly, secondary → `#ai-demos`), one primary visual area (placeholder mock/photo).
- Polish Navbar (sticky/scroll state, active-anchor styling) and MobileNav drawer interactions.
- Finalize the shared motion system (FadeUp + stagger + reduced-motion) and apply to the hero as the reference implementation.
- **Verify:** lint, typecheck, responsiveness, reduced-motion.

### Phase 3 — Core narrative sections
- `ServicesSection` (3 services + capabilities; note Workflow Automation needs a capabilities list — drafted as placeholder).
- `TrustSection` (lightweight value-prop strip).
- `IndustriesSection` (Restaurants, Corner Stores + pain points).
- `ProcessSection` (4-step timeline; "we handle everything").
- **Verify:** lint, typecheck, responsive, a11y (landmarks/headings).

### Phase 4 — Proof, about, demo, conversion, footer
- `ResultsSection` (placeholder metric cards, clearly labeled).
- `AboutSection` (founders/team prominent; placeholder bios/photos).
- `AIDemoSection` (lightweight placeholder — no interactivity/audio/backend).
- `TestimonialsSection` (responsive grid, labeled samples).
- `FinalCTASection` (Calendly CTA).
- `Footer` (columns, LinkedIn, copyright).
- **Verify:** lint, typecheck, responsive, a11y.

### Phase 5 — Launch polish
- Motion consistency pass; confirm reduced-motion everywhere.
- Full responsive QA (mobile / tablet / desktop).
- Accessibility audit: semantic HTML, ARIA where needed, focus management for the drawer, keyboard nav, color contrast.
- SEO: per-page metadata, OpenGraph/Twitter, `sitemap.ts`, `robots.ts`, `LocalBusiness` JSON-LD (single regional entity).
- Performance: `next/image` for placeholders, font display strategy, Lighthouse pass.
- Final `npm run lint` + `npm run typecheck`.

---

## Definition of Done (per phase)
Responsive on mobile/tablet/desktop · no TS errors · no ESLint errors · components reusable (no duplication) · copy follows brand tone · animations subtle/consistent · accessibility verified.
