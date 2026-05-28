import { cn } from "@/lib/utils"
import type { IndustryData } from "@/lib/types"

interface IndustryCardProps {
  industry: IndustryData
  className?: string
}

export function IndustryCard({ industry, className }: IndustryCardProps) {
  const { title, description, painPoints, Icon } = industry

  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8",
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/8">
        <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Common challenges
        </p>
        <ul className="flex flex-col gap-1.5">
          {painPoints.map((point) => (
            <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
