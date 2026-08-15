import Image from "next/image"
import { Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* subtle vertical stripe texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent, transparent 58px, rgba(201,168,76,0.05) 58px, rgba(201,168,76,0.05) 59px)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
        <div className="max-w-xl">
          <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <Star className="size-3.5 fill-current" aria-hidden="true" />
            California Friends of Veterans
          </p>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-6xl">
            When a veteran needs help, <em className="text-accent not-italic">we show up.</em>
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-primary-foreground/75 text-pretty">
            Emergency grants, food, legal aid, and community — for those who served in Sonoma County and beyond.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#involve"
              className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
            >
              Volunteer with Us
            </a>
            <a
              href="#donate"
              className="inline-flex items-center rounded-md border border-white/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Make a Donation
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl ring-1 ring-white/10 sm:aspect-[4/3] md:aspect-[4/5]">
            <Image
              src="/images/hero-veterans-parade.png"
              alt="Veterans marching with American flags in a community Memorial Day parade"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          </div>
          {/* floating badge */}
          <div className="absolute -bottom-5 -left-4 hidden rounded-lg bg-background px-5 py-4 text-foreground shadow-xl sm:block">
            <p className="font-serif text-2xl font-semibold text-primary">Since 2011</p>
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Serving those who served</p>
          </div>
        </div>
      </div>
    </section>
  )
}
