"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun, X } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        setIsScrolled(window.scrollY > 10)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 70 // Adjust for fixed header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isMobileMenuOpen 
            ? "bg-background/95 backdrop-blur-sm border-b border-border"
            : isScrolled 
            ? "bg-background/95 backdrop-blur-sm border-b border-border" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-16 mt-2.5">
            <div className="flex-shrink-0">
              <button
                onClick={scrollToTop}
                className="font-montserrat sm:text-xl text-moss hover:text-moss/80 transition-colors tracking-[0.2em] text-base font-normal"
              >
                NEOTIQA
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block w-auto mr-6">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-thin"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-thin"
                >
                  Impact
                </button>
                <button
                  onClick={() => scrollToSection("case-study")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-thin"
                >
                  Case Study
                </button>
                <button
                  onClick={() => scrollToSection("cta")}
                  className="text-foreground hover:text-primary transition-colors text-sm font-thin"
                >
                  Contact
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-2 hover:bg-muted"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button onClick={() => scrollToSection("cta")} className="bg-primary hover:bg-primary/90">
                Book a Demo
              </Button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none z-[110] group"
                aria-label="Toggle menu"
              >
                <div className="relative flex flex-col items-center justify-center w-6 h-6">
                  <span
                    className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-200 ease-in-out ${
                      isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                  />
                  <span
                    className={`absolute h-0.5 w-6 bg-foreground transform transition-all duration-300 ease-in-out ${
                      isMobileMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? "opacity-100 pointer-events-auto" 
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Background Overlay */}
        <div 
          className={`absolute inset-0 bg-background/95 backdrop-blur-md transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMobileMenu}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col justify-center items-center transition-all duration-700 ease-out ${
          isMobileMenuOpen ? "transform translate-y-0 opacity-100" : "transform translate-y-8 opacity-0"
        }`}>
          
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className={`absolute top-8 right-8 w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:rotate-90 ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: isMobileMenuOpen ? "300ms" : "0ms" }}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Items */}
          <div className="flex flex-col items-center space-y-8 px-8">
            {[
              { label: "How It Works", section: "how-it-works", delay: "100ms" },
              { label: "Impact", section: "impact", delay: "200ms" },
              { label: "Case Study", section: "case-study", delay: "300ms" },
              { label: "Contact", section: "cta", delay: "400ms" }
            ].map((item, index) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={`text-3xl font-light text-foreground hover:text-primary transition-all duration-500 hover:scale-110 transform ${
                  isMobileMenuOpen 
                    ? "translate-y-0 opacity-100" 
                    : "translate-y-8 opacity-0"
                }`}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? item.delay : `${(3 - index) * 100}ms`,
                  fontFamily: 'var(--font-montserrat)'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Theme Toggle and CTA */}
          <div className={`mt-12 flex flex-col items-center space-y-6 transition-all duration-500 ${
            isMobileMenuOpen 
              ? "translate-y-0 opacity-100" 
              : "translate-y-8 opacity-0"
          }`}
          style={{ transitionDelay: isMobileMenuOpen ? "500ms" : "0ms" }}
          >
            {/* Theme Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-foreground/70">Theme</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="p-3 hover:bg-muted/50 hover:scale-110 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>

            {/* CTA Button */}
            <Button
              onClick={() => scrollToSection("cta")}
              className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}