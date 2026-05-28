import { cn } from "@/lib/utils"
import type { TestimonialData } from "@/lib/types"

interface TestimonialCardProps {
  testimonial: TestimonialData
  className?: string
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <figure
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm md:p-8",
        className
      )}
    >
      <blockquote className="text-base leading-relaxed text-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="flex flex-col gap-0.5 border-t border-border pt-4">
        <p className="font-medium">{testimonial.author}</p>
        <p className="text-sm text-muted-foreground">
          {testimonial.business} &middot; {testimonial.location}
        </p>
      </figcaption>
    </figure>
  )
}
