const STATS = [
  { num: "200+", label: "Families helped in the past year" },
  { num: "$150K", label: "In emergency grants distributed" },
  { num: "1,000+", label: "Meals provided with the USO" },
  { num: "26", label: "Local business partners" },
]

export function ImpactBand() {
  return (
    <section aria-label="Our impact" className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4 md:divide-x md:divide-border">
        {STATS.map((stat) => (
          <div key={stat.label} className="px-4 text-center">
            <p className="font-serif text-3xl font-semibold text-primary md:text-4xl">{stat.num}</p>
            <p className="mx-auto mt-1.5 max-w-[9rem] text-sm leading-snug text-muted-foreground text-pretty">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
