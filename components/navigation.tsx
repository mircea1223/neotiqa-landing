"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
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

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <div className="flex-shrink-0">
            <button
              onClick={scrollToTop}
              className="font-montserrat text-lg sm:text-xl text-moss hover:text-moss/80 transition-colors font-medium tracking-[0.2em]"
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
                onClick={() => scrollToSection("contact")}
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

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-center focus:outline-none z-50"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-500 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-500 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "opacity-0 w-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-foreground transition-all duration-500 ease-in-out mt-1 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-0 left-0 w-full h-full bg-background z-40 flex flex-col justify-center items-center animate-in fade-in duration-500">
            <div className="flex flex-col items-center space-y-8 text-center">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors animate-in slide-in-from-bottom-4 fade-in duration-500"
                style={{ animationDelay: "0.1s" }}
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors animate-in slide-in-from-bottom-4 fade-in duration-500"
                style={{ animationDelay: "0.2s" }}
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("case-study")}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors animate-in slide-in-from-bottom-4 fade-in duration-500"
                style={{ animationDelay: "0.3s" }}
              >
                Case Study
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-2xl font-medium text-foreground hover:text-primary transition-colors animate-in slide-in-from-bottom-4 fade-in duration-500"
                style={{ animationDelay: "0.4s" }}
              >
                Contact
              </button>

              <div className="w-full max-w-xs">
                <div className="border-t border-border/30 mb-6"></div>
                <div
                  className="flex items-center justify-center space-x-4 animate-in slide-in-from-bottom-4 fade-in duration-500"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="text-lg font-medium text-foreground">Theme</span>
                  <Button variant="ghost" size="sm" onClick={toggleTheme} className="p-2" aria-label="Toggle theme">
                    {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  </Button>
                </div>
                <div className="border-t border-border/30 mt-6"></div>
              </div>

              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-primary hover:bg-primary/90 text-lg px-8 py-3 animate-in slide-in-from-bottom-4 fade-in duration-500"
                style={{ animationDelay: "0.6s" }}
              >
                Book a Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
