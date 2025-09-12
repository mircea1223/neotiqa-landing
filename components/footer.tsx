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
        const isMobile = window.innerWidth < 768; // sm breakpoint
        const headerOffset = isMobile ? 60 : 70; // 60px on mobile, 70px on desktop
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
                <span className="text-white">+44 20 8191 3412</span>
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.linkedin.com/company/neotiqa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/neotiqa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.44-.645 1.44-1.44-.644-1.44-1.44-1.44z"/>
                </svg>
              </a>
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
