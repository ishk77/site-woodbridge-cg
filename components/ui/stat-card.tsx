import { cn } from "@/lib/utils"
import type { StatData } from "@/lib/types"

interface StatCardProps {
  stat: StatData
  className?: string
}

export function StatCard({ stat, className }: StatCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 rounded-xl border border-border bg-card p-6 shadow-sm",
        className
      )}
    >
      <p className="text-3xl font-semibold tracking-tight text-primary">
        {stat.value}
      </p>
      <p className="font-medium">{stat.label}</p>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {stat.description}
      </p>
    </div>
  )
}
