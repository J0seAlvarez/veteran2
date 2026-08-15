import Image from "next/image"
import { Star } from "lucide-react"

const CONTACTS = [
  { label: "Fort Miley Hospital", val: "(415) 221-4810" },
  { label: "Yountville Veterans Home", val: "(707) 944-4600" },
  { label: "Hours", val: "Mon–Fri, 8 AM – 4:30 PM" },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg ring-1 ring-border">
            <Image
              src="/images/about-veterans.png"
              alt="A volunteer warmly greeting an older military veteran"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -right-3 -top-3 hidden size-20 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg md:flex">
            <Star className="size-8 fill-current" aria-hidden="true" />
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Who We Are</p>
          <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight text-primary text-balance md:text-4xl">
            Supporting veterans when it matters most
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground text-pretty">
            We&apos;re a nonprofit dedicated to helping veterans and active-duty military personnel navigate unexpected
            financial hardship. We also support the USO and local veteran hospitals — including Fort Miley VA Hospital
            and the Yountville Veterans Home — through case management, emergency grants, and food distributions.
          </p>

          <div className="mt-7 rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Our Mission</p>
            <p className="mt-3 font-serif text-lg leading-relaxed text-primary text-pretty">
              &ldquo;Comprehensive support for veterans and active-duty personnel — through financial assistance,
              community engagement, and advocacy — so no one who served faces hardship alone.&rdquo;
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <Star className="size-3.5 fill-accent text-accent" aria-hidden="true" />
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Serving Sonoma County and the greater Bay Area
            </p>
          </div>

          <dl className="mt-6 grid gap-4 sm:grid-cols-3">
            {CONTACTS.map((c) => (
              <div key={c.label}>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{c.label}</dt>
                <dd className="mt-1 text-sm font-semibold text-primary">{c.val}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
