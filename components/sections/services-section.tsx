import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/ui/service-card"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { SERVICES } from "@/lib/content/services"

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-label="Our services"
      className="section-padding"
    >
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="Services"
            title="What We Offer"
            description="Three practical tools that directly address the challenges local businesses face every day — built around how you actually work."
          />
        </MotionWrapper>

        <MotionWrapper
          stagger
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {SERVICES.map((service) => (
            <MotionItem key={service.id}>
              <ServiceCard service={service} className="h-full" />
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
