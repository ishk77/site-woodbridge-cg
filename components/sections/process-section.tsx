import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ProcessStepCard } from "@/components/ui/process-step"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { PROCESS_STEPS } from "@/lib/content/process"

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-label="How we work"
      className="section-padding"
    >
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="How It Works"
            title="Simple Process. We Handle Everything."
            description="You focus on running your business. We take care of the technology — from the first conversation through to launch and beyond."
          />
        </MotionWrapper>

        <MotionWrapper stagger className="mx-auto max-w-2xl">
          {PROCESS_STEPS.map((step, index) => (
            <MotionItem key={step.step}>
              <ProcessStepCard
                step={step}
                isLast={index === PROCESS_STEPS.length - 1}
              />
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
