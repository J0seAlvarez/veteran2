import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ImpactBand } from "@/components/impact-band"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { TestimonialBand } from "@/components/testimonial-band"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  return (
    <h1>Hello from California Friends</h1>;
}
      <SiteHeader />
      <main>
        <HeroSection />
        <ImpactBand />
        <AboutSection />
        <ProgramsSection />
        <TestimonialBand />
        <GetInvolvedSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
