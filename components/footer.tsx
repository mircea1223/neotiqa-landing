"use client"

import { Mail, Phone } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-stone-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-light text-primary font-montserrat tracking-[0.1em]">NEOTIQA</span>
            </div>
            <p className="text-sm italic text-slate-100">
              AI-Powered Tool that doubles conversion rates on House Extensions sales.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sidebar-ring">Navigation</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("hero")}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("case-study")}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                Case Study
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sidebar-ring">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span className="text-white">hello@neotiqa.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span className="text-white">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Get Started</h4>
            <button
              onClick={() => scrollToSection("cta")}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Book a Demo
            </button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">© 2024 NEOTIQA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
