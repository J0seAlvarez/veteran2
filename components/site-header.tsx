"use client"

import { useState } from "react"
import { Menu, X, Star } from "lucide-react"

const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Get Involved", href: "#involve" },
  { label: "Partners", href: "#partners" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5 text-primary-foreground">
          <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
            <Star className="size-5 fill-current" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-base font-semibold tracking-tight">California Friends</span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-accent">of Veterans</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-primary-foreground/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#donate"
            className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
          >
            Donate
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-primary-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-primary px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-base font-medium text-primary-foreground/85 hover:bg-white/5 hover:text-accent"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <a
                href="#donate"
                onClick={() => setOpen(false)}
                className="block rounded-md bg-accent px-3 py-2.5 text-center text-base font-semibold text-accent-foreground"
              >
                Donate
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
