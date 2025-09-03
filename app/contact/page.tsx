import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Calendar,
  Zap,
  Users,
  CheckCircle,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>

        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-foreground mb-4 sm:mb-6 text-balance leading-tight font-bold font-sans">
              Get In
              <span className="gradient-text block mt-2">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              Ready to transform your business with AI automation? We would love to hear from you. 
              Let us discuss how we can help eliminate repetitive tasks and accelerate your growth.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Email Us</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Get in touch via email for detailed inquiries
                </p>
                <a href="mailto:hello@neotiqa.com" className="text-primary hover:underline font-medium">
                  hello@neotiqa.com
                </a>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Call Us</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Speak directly with our automation experts
                </p>
                <a href="tel:+15551234567" className="text-primary hover:underline font-medium">
                  +447366393491
                </a>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Schedule a Call</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  Book a free consultation at your convenience
                </p>
                <Button className="glass-button-primary text-primary-foreground px-4 py-2 text-sm" asChild>
                  <a href="/quiz">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 font-medium">NEOTIQA</h3>
              <p className="text-background/80 mb-3 sm:mb-4 text-sm sm:text-base">
                Custom AI automation solutions that help businesses save time, reduce costs, and scale efficiently.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Solutions</h4>
              <ul className="space-y-1 sm:space-y-2 text-background/80 text-sm">
                <li>Sales Automation</li>
                <li>Finance Automation</li>
                <li>HR Automation</li>
                <li>Customer Support</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-background/80 text-sm">
                <li>About</li>
                <li>Case Studies</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <div className="space-y-1 sm:space-y-2 text-background/80 text-sm">
                <p>hello@neotiqa.com</p>
                <p>+447366393491</p>
                <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-background/20 rounded-full"></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-background/20 rounded-full"></div>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-background/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-background/60 text-xs sm:text-sm">
            <p>&copy; 2025 NEOTIQA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}