import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { TESTIMONIALS } from "@/lib/content/testimonials"

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      className="section-padding"
    >
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="What Clients Say"
            title="Heard From the People We Work With"
            description="Sample testimonials — real customer stories coming soon."
          />
        </MotionWrapper>

        <MotionWrapper
          stagger
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <MotionItem key={testimonial.id}>
              <TestimonialCard testimonial={testimonial} className="h-full" />
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
