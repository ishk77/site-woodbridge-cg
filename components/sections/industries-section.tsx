import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { IndustryCard } from "@/components/ui/industry-card"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { INDUSTRIES } from "@/lib/content/industries"

export function IndustriesSection() {
  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="section-padding bg-muted/40"
    >
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="Who We Work With"
            title="Built for Local Businesses Like Yours"
            description="We work directly with owners — not IT teams — to solve the problems that affect your business every single day."
          />
        </MotionWrapper>

        <MotionWrapper
          stagger
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          {INDUSTRIES.map((industry) => (
            <MotionItem key={industry.id}>
              <IndustryCard industry={industry} className="h-full" />
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
