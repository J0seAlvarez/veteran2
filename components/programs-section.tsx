import Image from "next/image"
import { ArrowRight } from "lucide-react"

const PROGRAMS = [
  {
    title: "Food Distribution",
    desc: "Essential food supplies for veterans and their families facing financial hardship.",
    img: "/images/program-food-distribution.png",
    alt: "Volunteers loading boxes of fresh food into a car at a distribution event",
  },
  {
    title: "Free Lunches",
    desc: "Complimentary meals at community locations — open to all veterans, no questions asked.",
    img: "/images/program-free-lunches.png",
    alt: "Veterans and volunteers sharing a meal together at community tables",
  },
  {
    title: "Legal Help",
    desc: "Legal assistance for veterans navigating housing disputes, benefits claims, and more.",
    img: "/images/program-legal-help.png",
    alt: "A caseworker helping a veteran review paperwork at a desk",
  },
  {
    title: "Memorials",
    desc: "Dignified memorial services honoring the lives and service of veterans and their families.",
    img: "/images/program-memorial.png",
    alt: "A folded American flag presented at a solemn veterans memorial service",
  },
  {
    title: "Wreaths Across America",
    desc: "Participating in the national wreath-laying tradition each holiday season to honor the fallen.",
    img: "/images/program-wreaths.png",
    alt: "Evergreen wreaths with red bows laid on white military headstones in winter",
  },
]

export function ProgramsSection() {
  return (
    <section id="programs" className="bg-card">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">What We Do</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-primary text-balance md:text-4xl">
            Programs &amp; Resources
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROGRAMS.map((program) => (
            <article
              key={program.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-background shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={program.img || "/placeholder.svg"}
                  alt={program.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-semibold text-primary">{program.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {program.desc}
                </p>
              </div>
            </article>
          ))}

          {/* CTA tile */}
          <article className="flex flex-col justify-center rounded-xl bg-primary p-8 text-primary-foreground shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Need help?</p>
            <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-balance">
              See all veteran resources
            </h3>
            <a
              href="#involve"
              className="mt-5 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/85"
            >
              View Resources
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}
