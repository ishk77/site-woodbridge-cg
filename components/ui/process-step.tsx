import { cn } from "@/lib/utils"
import type { ProcessStep } from "@/lib/types"

interface ProcessStepProps {
  step: ProcessStep
  isLast?: boolean
  className?: string
}

export function ProcessStepCard({ step, isLast = false, className }: ProcessStepProps) {
  return (
    <div className={cn("flex gap-5", className)}>
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
          {step.step}
        </div>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-border" />
        )}
      </div>
      <div className={cn("flex flex-col gap-1 pb-10", isLast && "pb-0")}>
        <h3 className="text-lg font-semibold">{step.title}</h3>
        <p className="leading-relaxed text-muted-foreground">{step.description}</p>
      </div>
    </div>
  )
}
