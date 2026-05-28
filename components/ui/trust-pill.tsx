import { cn } from "@/lib/utils"
import type { TrustItem } from "@/lib/types"

interface TrustPillProps {
  item: TrustItem
  className?: string
}

export function TrustPill({ item, className }: TrustPillProps) {
  const { label, Icon } = item

  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2.5 shadow-sm",
        className
      )}
    >
      <Icon className="h-4 w-4 shrink-0 text-accent" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}
