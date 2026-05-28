import Link from "next/link"
import { Container } from "@/components/ui/container"
import { CalendlyButton } from "@/components/ui/calendly-button"
import { MotionWrapper } from "@/components/ui/motion-wrapper"
import { SITE } from "@/lib/content/site"

export function FinalCTASection() {
  return (
    <section
      id="contact"
      aria-label="Book a free consultation"
      className="section-padding bg-muted/40"
    >
      <Container>
        <MotionWrapper>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-wide text-accent">
              Get Started
            </p>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight md:text-5xl">
              Ready to Modernize Your Business?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
              Book a free 30-minute conversation. We&apos;ll listen, ask the right
              questions, and give you an honest assessment — no pressure, no technical
              jargon.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <CalendlyButton label="Book a Free Consultation" />
              <Link
                href={`tel:${SITE.phone}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Or call us: {SITE.phone}
              </Link>
            </div>
          </div>
        </MotionWrapper>
      </Container>
    </section>
  )
}
