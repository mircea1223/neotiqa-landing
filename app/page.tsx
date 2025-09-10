import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { ImpactSection } from "@/components/impact-section"
import { CaseStudy } from "@/components/case-study"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <ImpactSection />
      <CaseStudy />
      <CTASection />
      <Footer />
    </main>
  )
}
