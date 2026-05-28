import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { DemoCard } from "@/components/ui/demo-card"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { DEMO_SCENARIOS } from "@/lib/content/demos"

export function AIDemoSection() {
  return (
    <section
      id="ai-demos"
      aria-label="AI phone agent use cases"
      className="section-padding bg-muted/40"
    >
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="AI in Action"
            title="Real Scenarios, Not a Sales Demo"
            description="These are the everyday situations where an AI phone agent makes the biggest difference. No live audio required to get started."
          />
        </MotionWrapper>

        <MotionWrapper
          stagger
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8"
        >
          {DEMO_SCENARIOS.map((demo) => (
            <MotionItem key={demo.id}>
              <DemoCard demo={demo} className="h-full" />
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
