import { cn } from "@/lib/utils"
import { CheckIcon } from "lucide-react"
import type { ServiceData } from "@/lib/types"

interface ServiceCardProps {
  service: ServiceData
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const { title, description, capabilities, Icon } = service

  return (
    <div
      className={cn(
        "flex flex-col gap-6 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8",
        className
      )}
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10">
        <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="leading-relaxed text-muted-foreground">{description}</p>
      </div>
      <ul className="flex flex-col gap-2">
        {capabilities.map((cap) => (
          <li key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
            <CheckIcon className="h-4 w-4 shrink-0 text-accent" />
            {cap}
          </li>
        ))}
      </ul>
    </div>
  )
}
