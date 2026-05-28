import { HeroSection } from "@/components/sections/hero-section"
import { TrustSection } from "@/components/sections/trust-section"
import { ServicesSection } from "@/components/sections/services-section"
import { IndustriesSection } from "@/components/sections/industries-section"
import { ProcessSection } from "@/components/sections/process-section"
import { ResultsSection } from "@/components/sections/results-section"
import { AboutSection } from "@/components/sections/about-section"
import { AIDemoSection } from "@/components/sections/ai-demo-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { FinalCTASection } from "@/components/sections/final-cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <ResultsSection />
      <AboutSection />
      <AIDemoSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
