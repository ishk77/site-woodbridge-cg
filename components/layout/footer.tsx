import Link from "next/link"
import { ExternalLinkIcon } from "lucide-react"
import { SITE } from "@/lib/content/site"
import { NAV_ITEMS } from "@/lib/content/nav"
import { INDUSTRIES } from "@/lib/content/industries"
import { Container } from "@/components/ui/container"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <Link
              href="#top"
              className="text-base font-semibold transition-opacity hover:opacity-80"
            >
              {SITE.name}
            </Link>
            <p className="text-sm leading-relaxed text-primary-foreground/70">
              Modernizing small businesses without enterprise complexity.
            </p>
            <Link
              href={SITE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
              aria-label="Woodbridge CG on LinkedIn"
            >
              <ExternalLinkIcon className="h-4 w-4" />
              LinkedIn
            </Link>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/50">
              Services
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {["Custom Websites", "AI Phone Voice Agents", "Workflow Automation"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="#services"
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Industries column */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/50">
              Industries
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {INDUSTRIES.map((industry) => (
                <li key={industry.id}>
                  <Link
                    href="#industries"
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/50">
              Company
            </p>
            <ul className="flex flex-col gap-2" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-2 border-t border-primary-foreground/10 pt-8 text-sm text-primary-foreground/50 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-1">
            {SITE.locations.map((loc, i) => (
              <span key={loc}>
                {i > 0 && <span className="mx-1.5">&middot;</span>}
                {loc}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}
