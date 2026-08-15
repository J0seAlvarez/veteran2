export function TestimonialBand() {
  return (
    <section aria-label="Testimonial" className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-8 -top-16 select-none font-serif text-[18rem] leading-none text-accent/10"
      >
        &ldquo;
      </div>
      <div className="relative mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
        <blockquote className="font-serif text-2xl font-medium leading-snug text-balance md:text-3xl">
          Thanks to the support from California Friends of Veterans, I was able to get the help I needed during a tough
          time. The assistance made a significant difference in my life.
        </blockquote>
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
          — Veteran served at Fort Miley VA Hospital
        </p>
      </div>
    </section>
  )
}
