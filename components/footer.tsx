"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleNavigation = (sectionId: string, e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault()
      const element = document.getElementById(sectionId)
      if (element) {
        const headerOffset = 70; // Adjust for fixed header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
    // If not on home page, let the Link component handle navigation with hash
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
              AI-Powered Tool that doubles conversion rates on construction 
sales. 
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-sidebar-ring">Navigation</h4>
            <div className="space-y-2">
              <Link
                href="/#hero"
                onClick={(e) => handleNavigation("hero", e)}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                Home
              </Link>
              <Link
                href="/#how-it-works"
                onClick={(e) => handleNavigation("how-it-works", e)}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                How It Works
              </Link>
              <Link
                href="/#impact"
                onClick={(e) => handleNavigation("impact", e)}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                Impact
              </Link>
              <Link
                href="/#case-study"
                onClick={(e) => handleNavigation("case-study", e)}
                className="block text-sm hover:text-primary transition-colors text-white"
              >
                Case Study
              </Link>
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
            <h4 className="font-semibold text-white">Get Started</h4>
            <Link
              href="/#cta"
              onClick={(e) => handleNavigation("cta", e)}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 NEOTIQA. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-white hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
