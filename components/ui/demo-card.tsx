import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { DemoScenario } from "@/lib/types"

interface DemoCardProps {
  demo: DemoScenario
  className?: string
}

export function DemoCard({ demo, className }: DemoCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm",
        className
      )}
    >
      <Badge variant="accent">{demo.scenario}</Badge>
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{demo.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {demo.description}
        </p>
      </div>
    </div>
  )
}
