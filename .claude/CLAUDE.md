# Woodbridge CG Engineering Rules

## Stack
- Next.js App Router
- TypeScript strict mode
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

## Design Rules
- Both mobile and computer friendly
- Spacious layouts
- Premium whitespace
- Rounded-xl cards
- Minimal borders
- Subtle shadows only
- Avoid visual clutter
- Avoid gradient abuse
- Avoid excessive glassmorphism

## Motion Rules
- Subtle motion only
- No floating particles
- No AI sci-fi animations
- Prefer fade-up transitions
- Use staggered reveals
- Respect reduced-motion accessibility

## Typography
- Large confident headlines
- Clean SaaS typography
- High readability
- Avoid tiny text
- Strong spacing rhythm

## Component Rules
- Build reusable sections
- Use shared container widths
- Use shared button variants
- Use consistent spacing tokens

## Code Rules
- No `any`
- Strong typing
- Accessible components
- Semantic HTML
- Server components by default

## Verification
After every phase:
- run npm run lint
- run npm run typecheck
- verify responsiveness
- verify accessibility
- verify SEO metadata

## Important
The website should feel:
- local
- trustworthy
- operationally practical
- premium but approachable

NOT:
- crypto startup
- AI hype company
- generic marketing agency

# Project Documentation

Core files:
- Product spec: .claude/build.md
- Design system: .claude/DESIGN.md
- Implementation plan: .claude/implementation-plan.md

Always review these before major changes.

## Architecture Rules
- Prefer composition over large monolithic components
- Each section must be its own component in /components/sections
- Shared UI primitives go in /components/ui
- Do not create inline page-only JSX blocks longer than ~50 lines

## Folder Structure Expectation

/app
  /page.tsx
  /layout.tsx

/components
  /sections
  /ui
  /layout

/lib
  utils.ts

/styles