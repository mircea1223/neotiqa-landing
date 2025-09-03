"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ChevronDown, Menu, Zap } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            
            <span className="text-foreground tracking-[0.2em] text-xl font-medium font-sans">NEOTIQA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors text-sm xl:text-base">
                <span>Solutions</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-card border-border/40">
                <DropdownMenuItem asChild>
                  <Link href="/solutions" className="w-full">
                    All Solutions
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions?filter=sales" className="w-full">
                    Sales Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions?filter=finance" className="w-full">
                    Finance Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions?filter=hr" className="w-full">
                    HR Automation
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/solutions?filter=support" className="w-full">
                    Customer Support
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Industries Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors text-sm xl:text-base">
                <span>Industries</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-card border-border/40">
                <DropdownMenuItem asChild>
                  <Link href="/industries/healthcare" className="w-full">
                    Healthcare
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/industries/financial-services" className="w-full">
                    Financial Services
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/industries/ecommerce" className="w-full">
                    E-commerce
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>SaaS</DropdownMenuItem>
                <DropdownMenuItem>Manufacturing</DropdownMenuItem>
                <DropdownMenuItem>Real Estate</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/case-studies"
              className="text-foreground hover:text-primary transition-colors text-sm xl:text-base"
            >
              Case Studies
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors text-sm xl:text-base">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 glass-card border-border/40">
                <DropdownMenuItem asChild>
                  <Link href="/resources/blog" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Guides</DropdownMenuItem>
                <DropdownMenuItem>Webinars</DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/resources/roi-calculator" className="w-full">
                    ROI Calculator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Documentation</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/about" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              About
            </Link>

            <Link href="/contact" className="text-foreground hover:text-primary transition-colors text-sm xl:text-base">
              Contact
            </Link>
          </div>

          {/* CTA Button - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex">
            <Link
              href="/quiz"
              className="glass-button-primary text-primary-foreground px-4 lg:px-6 py-2 rounded-lg text-sm font-medium lg:text-sm"
            >
              Get Free Audit
            </Link>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9 glass-button">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 glass-card">
              <div className="flex flex-col space-y-6 mt-6">
                <Link
                  href="/solutions"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Solutions
                </Link>

                <div className="space-y-3 pl-4">
                  <Link
                    href="/solutions?filter=sales"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Sales Automation
                  </Link>
                  <Link
                    href="/solutions?filter=finance"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Finance Automation
                  </Link>
                  <Link
                    href="/solutions?filter=hr"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    HR Automation
                  </Link>
                  <Link
                    href="/solutions?filter=support"
                    className="block text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Customer Support
                  </Link>
                </div>

                <Link
                  href="/case-studies"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Case Studies
                </Link>

                <Link
                  href="/about"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                <div className="pt-6 border-t border-border">
                  <Link
                    href="/quiz"
                    onClick={() => setIsOpen(false)}
                    className="w-full glass-button-primary text-primary-foreground px-4 py-3 rounded-lg text-center font-medium block"
                  >
                    Get Free Audit
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
