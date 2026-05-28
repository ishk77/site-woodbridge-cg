import { Container } from "@/components/ui/container"
import { TrustPill } from "@/components/ui/trust-pill"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { TRUST_ITEMS } from "@/lib/content/trust"

export function TrustSection() {
  return (
    <section
      id="trust"
      aria-label="Why choose Woodbridge CG"
      className="border-y border-border bg-muted/30 py-10 md:py-12"
    >
      <Container>
        <MotionWrapper stagger className="flex flex-wrap justify-center gap-3">
          {TRUST_ITEMS.map((item) => (
            <MotionItem key={item.label}>
              <TrustPill item={item} />
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
