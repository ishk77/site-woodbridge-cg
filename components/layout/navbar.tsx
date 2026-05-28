"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { NAV_ITEMS } from "@/lib/content/nav"
import { SITE } from "@/lib/content/site"
import { CalendlyButton } from "@/components/ui/calendly-button"
import { MobileNav } from "@/components/layout/mobile-nav"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/80 bg-background/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-8"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="#top"
          className="text-[15px] font-semibold tracking-tight text-foreground transition-opacity duration-150 hover:opacity-70"
          aria-label={`${SITE.name} — back to top`}
        >
          {SITE.name}
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-0.5 md:flex" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + mobile trigger */}
        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CalendlyButton
              size="sm"
              className="h-9 px-4 text-sm font-medium"
            />
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
