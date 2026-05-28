"use client"

import * as React from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { CalendlyButton } from "@/components/ui/calendly-button"
import { NAV_ITEMS } from "@/lib/content/nav"
import { SITE } from "@/lib/content/site"

export function MobileNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="h-5 w-5" />
        </Button>
        <SheetContent side="right" className="w-full max-w-xs p-0">
          <SheetHeader className="border-b border-border px-6 py-4">
            <SheetTitle className="text-left text-base font-semibold">
              {SITE.name}
            </SheetTitle>
          </SheetHeader>
          <nav aria-label="Mobile navigation" className="flex flex-col px-6 py-6">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-border pt-6">
              <CalendlyButton className="w-full justify-center" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  )
}
