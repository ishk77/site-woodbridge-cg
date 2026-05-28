import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { RESULTS } from "@/lib/content/results"

export function ResultsSection() {
  return (
    <section
      id="results"
      aria-label="Business outcomes"
      className="section-padding bg-muted/40"
    >
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="Outcomes"
            title="What Changes for Your Business"
            description="The practical difference our work makes — measured in how your day actually feels."
          />
        </MotionWrapper>

        <MotionWrapper stagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {RESULTS.map((result) => (
            <MotionItem key={result.id}>
              <div className="flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                  <result.Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold leading-snug">{result.headline}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {result.detail}
                  </p>
                </div>
              </div>
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
