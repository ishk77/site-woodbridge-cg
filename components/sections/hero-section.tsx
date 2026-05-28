import Link from "next/link"
import { Check } from "lucide-react"
import { Container } from "@/components/ui/container"
import { CalendlyButton } from "@/components/ui/calendly-button"
import { HeroMockup } from "@/components/ui/hero-mockup"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const trustPoints = [
  "Free in-person consultation",
  "No enterprise complexity",
  "We handle everything",
]

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex items-center pt-16 lg:min-h-screen"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-0">

          {/* Left — static content with CSS entrance animations */}
          <div className="flex flex-col gap-6">
            {/* Eyebrow */}
            <p
              className="animate-fade-up text-sm font-medium text-accent [animation-delay:0ms]"
            >
              Serving Woodbridge, VA &amp; Philadelphia, PA
            </p>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="animate-fade-up text-4xl font-semibold leading-tight tracking-tight [animation-delay:80ms] md:text-5xl lg:text-[3.25rem]"
            >
              Modernizing Small Businesses Without Enterprise Complexity
            </h1>

            {/* Subheading */}
            <p
              className="animate-fade-up max-w-lg text-lg leading-relaxed text-muted-foreground [animation-delay:160ms]"
            >
              We help local restaurants, stores, and service businesses simplify
              operations with personalized websites, AI phone agents, and
              practical workflow automation.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center"
            >
              <CalendlyButton />
              <Link
                href="#ai-demos"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 px-6 justify-center"
                )}
              >
                See AI Demos
              </Link>
            </div>

            {/* Trust micro-copy */}
            <ul
              className="animate-fade-up flex flex-wrap gap-x-5 gap-y-2 [animation-delay:320ms]"
            >
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — UI mockup with gentle entrance */}
          <div
            className="animate-fade-up flex justify-center [animation-delay:180ms] lg:justify-end"
          >
            <HeroMockup />
          </div>

        </div>
      </Container>
    </section>
  )
}
