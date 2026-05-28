import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { SITE } from "@/lib/content/site"
import type { VariantProps } from "class-variance-authority"

interface CalendlyButtonProps extends VariantProps<typeof buttonVariants> {
  label?: string
  className?: string
}

export function CalendlyButton({
  label = "Book a Free Consultation",
  variant = "default",
  size = "lg",
  className,
}: CalendlyButtonProps) {
  return (
    <a
      href={SITE.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ variant, size }), "h-11 px-6", className)}
    >
      {label}
    </a>
  )
}
