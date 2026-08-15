import Image from "next/image"
import { HeartHandshake, Gift, Handshake, Share2, ArrowRight } from "lucide-react"

const WAYS = [
  {
    icon: HeartHandshake,
    title: "Volunteer",
    desc: "Help with food distributions, events, transportation, and more. Flexible time commitments available.",
    linkLabel: "Sign up to volunteer",
    href: "#involve",
  },
  {
    icon: Gift,
    title: "Donate",
    desc: "Your contribution funds emergency grants, meals, and legal aid directly for veterans in need.",
    linkLabel: "Make a donation",
    href: "#donate",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    desc: "Local businesses can sponsor events, provide in-kind donations, or join our partner network.",
    linkLabel: "See our partners",
    href: "#partners",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    desc: "Share our mission on social media and help connect veterans in your community with our services.",
    linkLabel: "Follow us on Facebook",
    href: "#",
  },
]

export function GetInvolvedSection() {
  return (
    <section id="involve" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
        <div className="relative order-last lg:order-first">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ring-1 ring-border">
            <Image
              src="/images/get-involved-volunteers.png"
              alt="A cheerful group of volunteers in matching shirts at a community event"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Get Involved</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-primary text-balance md:text-4xl">
            There are many ways to help
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            You don&apos;t have to be a veteran to make a difference. Join our community of volunteers, donors, and
            partners.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {WAYS.map((way) => (
              <div key={way.title} className="rounded-xl border border-border bg-card p-5">
                <span className="flex size-10 items-center justify-center rounded-md bg-accent/15 text-primary">
                  <way.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-serif text-lg font-semibold text-primary">{way.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">{way.desc}</p>
                <a
                  href={way.href}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  {way.linkLabel}
                  <ArrowRight className="size-3.5" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
