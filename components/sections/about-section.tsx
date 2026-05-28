import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { TeamMemberCard } from "@/components/ui/team-member-card"
import { MotionWrapper, MotionItem } from "@/components/ui/motion-wrapper"
import { TEAM } from "@/lib/content/team"

export function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Woodbridge CG"
      className="section-padding"
    >
      <Container>
        <MotionWrapper>
          <SectionHeader
            eyebrow="About Us"
            title="Local. Practical. Hands-On."
            description="We work directly with business owners — not through account managers or support tickets. When you have a question, you talk to the people who built it."
          />
        </MotionWrapper>

        <MotionWrapper
          stagger
          className="mx-auto grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {TEAM.map((member) => (
            <MotionItem key={member.id}>
              <TeamMemberCard member={member} className="h-full" />
            </MotionItem>
          ))}
        </MotionWrapper>
      </Container>
    </section>
  )
}
