import { cn } from "@/lib/utils"
import type { TeamMember } from "@/lib/types"

interface TeamMemberCardProps {
  member: TeamMember
  className?: string
}

export function TeamMemberCard({ member, className }: TeamMemberCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8",
        className
      )}
    >
      <div
        className="h-20 w-20 rounded-xl bg-muted"
        role="img"
        aria-label={member.imageAlt}
      />
      <div className="flex flex-col gap-1">
        <p className="font-semibold">{member.name}</p>
        <p className="text-sm text-accent">{member.role}</p>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
    </div>
  )
}
