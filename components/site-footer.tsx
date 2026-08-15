import { Star } from "lucide-react"

export function SiteFooter() {
  return (
    <footer id="partners" className="border-t border-white/10 bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Star className="size-5 fill-current" aria-hidden="true" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-serif text-base font-semibold">California Friends</span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-accent">of Veterans</span>
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Serving veterans and active-duty military across Sonoma County and the greater Bay Area.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>Fort Miley Hospital · (415) 221-4810</li>
            <li>Yountville Veterans Home · (707) 944-4600</li>
            <li>Mon–Fri, 8 AM – 4:30 PM</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">Get Involved</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="#involve" className="text-primary-foreground/75 transition-colors hover:text-accent">
                Volunteer
              </a>
            </li>
            <li>
              <a href="#donate" className="text-primary-foreground/75 transition-colors hover:text-accent">
                Donate
              </a>
            </li>
            <li>
              <a href="#programs" className="text-primary-foreground/75 transition-colors hover:text-accent">
                Programs &amp; Resources
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="mx-auto max-w-6xl px-5 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} California Friends of Veterans. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
