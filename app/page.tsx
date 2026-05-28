import { HeroSection } from "@/components/sections/hero-section"

export default function HomePage() {
  return (
    <>
      {/* Phase 2 */}
      <HeroSection />

      {/* Phase 3 stubs */}
      <section id="trust" className="section-padding flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Trust — Phase 3</p>
      </section>
      <section id="services" className="section-padding flex items-center justify-center bg-muted/40">
        <p className="text-sm text-muted-foreground">Services — Phase 3</p>
      </section>
      <section id="industries" className="section-padding flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Industries — Phase 3</p>
      </section>
      <section id="process" className="section-padding flex items-center justify-center bg-muted/40">
        <p className="text-sm text-muted-foreground">Process — Phase 3</p>
      </section>

      {/* Phase 4 stubs */}
      <section id="results" className="section-padding flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Results — Phase 4</p>
      </section>
      <section id="about" className="section-padding flex items-center justify-center bg-muted/40">
        <p className="text-sm text-muted-foreground">About — Phase 4</p>
      </section>
      <section id="ai-demos" className="section-padding flex items-center justify-center">
        <p className="text-sm text-muted-foreground">AI Demos — Phase 4</p>
      </section>
      <section id="testimonials" className="section-padding flex items-center justify-center bg-muted/40">
        <p className="text-sm text-muted-foreground">Testimonials — Phase 4</p>
      </section>
      <section id="contact" className="section-padding flex items-center justify-center">
        <p className="text-sm text-muted-foreground">Final CTA — Phase 4</p>
      </section>
    </>
  )
}
