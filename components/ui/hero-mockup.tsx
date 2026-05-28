import { PhoneCall, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

const recentItems = [
  "Reservation confirmed — Table for 4, 7 pm",
  "Catering inquiry captured",
  "After-hours FAQ answered",
  "Missed call recovered",
]

interface HeroMockupProps {
  className?: string
}

export function HeroMockup({ className }: HeroMockupProps) {
  return (
    <div
      className={cn("w-full max-w-[440px]", className)}
      aria-hidden="true"
    >
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">

        {/* Header — deep navy */}
        <div className="flex items-start justify-between bg-primary px-5 py-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-semibold text-primary-foreground">
              AI Phone Agent
            </p>
            <p className="text-xs text-primary-foreground/60">
              Woodbridge Restaurant
            </p>
          </div>
          <div className="flex items-center gap-1.5 pt-0.5">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              aria-label="Active"
            />
            <span className="text-xs font-medium text-primary-foreground/80">
              Active
            </span>
          </div>
        </div>

        {/* Active call */}
        <div className="border-b border-border px-5 py-4">
          <div className="mb-2.5 flex items-center gap-2">
            <PhoneCall className="h-3.5 w-3.5 text-accent" />
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Right now
            </span>
          </div>
          <p className="text-sm font-medium text-foreground">
            Handling: Pickup order
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
            &ldquo;Two chicken sandwiches and a side of fries for
            12:30 pickup, please.&rdquo;
          </p>
        </div>

        {/* Recent activity */}
        <div className="px-5 py-4">
          <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Recent
          </p>
          <ul className="flex flex-col gap-2.5">
            {recentItems.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Stats footer */}
        <div className="flex items-center gap-6 border-t border-border bg-muted/40 px-5 py-3">
          <div>
            <p className="text-base font-semibold">24</p>
            <p className="text-xs text-muted-foreground">Calls today</p>
          </div>
          <div>
            <p className="text-base font-semibold text-accent">0</p>
            <p className="text-xs text-muted-foreground">Missed</p>
          </div>
          <div>
            <p className="text-base font-semibold">12</p>
            <p className="text-xs text-muted-foreground">Orders taken</p>
          </div>
        </div>

      </div>
    </div>
  )
}
