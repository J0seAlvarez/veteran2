import Image from "next/image"
import { Star } from "lucide-react"

export function FinalCta() {
  return (
    <section id="donate" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-veterans-parade.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>
      <div className="relative mx-auto max-w-3xl px-5 py-20 text-center text-primary-foreground md:py-28">
        <Star className="mx-auto size-6 fill-accent text-accent" aria-hidden="true" />
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Ready to make a difference?
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-5xl">
          Veterans in our community need you — today.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#involve"
            className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
          >
            Volunteer Now
          </a>
          <a
            href="#donate"
            className="inline-flex items-center rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Donate
          </a>
        </div>
      </div>
    </section>
  )
}
