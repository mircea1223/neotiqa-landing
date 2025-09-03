import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Clock,
  DollarSign,
  Shield,
  TrendingUp,
  Users,
  Zap,
  CheckCircle,
  Cpu,
  Network,
  Bot,
  Award,
  Globe,
  Target,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
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
              About
              <span className="gradient-text block mt-2">NEOTIQA</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              We're on a mission to make AI automation accessible to every business, regardless of size or technical expertise.
              Our team of experts combines cutting-edge technology with deep business understanding to deliver solutions that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-16">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize AI automation and help businesses of all sizes eliminate repetitive tasks, reduce costs, and scale efficiently. 
                  We believe every business should have access to the same powerful automation tools that Fortune 500 companies use.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where businesses focus on what matters most - serving customers and growing - while AI handles the repetitive work. 
                  We envision a future where intelligent automation is the standard, not the exception.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Our Story
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base">
                Founded by entrepreneurs who experienced the pain of manual processes firsthand.
              </p>
            </div>

            <Card className="glass-card tech-border">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    <strong className="text-foreground">NEOTIQA</strong> was born from frustration. Our founders were running growing businesses but spending countless hours on repetitive tasks - 
                    processing orders, following up with leads, managing invoices, and handling customer support tickets.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    After implementing their first automation solutions and seeing immediate results - 40+ hours saved per week and 60% cost reduction - 
                    they realized this wasn't just their problem. Every business they talked to was facing the same challenges.
                  </p>
                  
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    That's when NEOTIQA was founded with a simple mission: make enterprise-level AI automation accessible to businesses of all sizes. 
                    Today, we've helped 200+ companies automate their workflows and save millions in operational costs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Our Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Numbers that showcase the real impact of our automation solutions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">200+</div>
                <CardTitle className="text-base sm:text-lg">Companies Served</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm">
                  From startups to enterprises across various industries
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">$5M+</div>
                <CardTitle className="text-base sm:text-lg">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm">
                  Total operational costs saved by our clients
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">50K+</div>
                <CardTitle className="text-base sm:text-lg">Hours Automated</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm">
                  Manual work hours eliminated through automation
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">98%</div>
                <CardTitle className="text-base sm:text-lg">Client Satisfaction</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground text-sm">
                  Of clients would recommend our services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-primary/5 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              The principles that guide everything we do.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Reliability</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  We build automation solutions that work consistently and reliably, giving you peace of mind that your processes are in good hands.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Customer-Centric</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Every solution is tailored to your specific needs. We don't believe in one-size-fits-all - your business is unique, and so should be your automation.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Transparency</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  No hidden costs, no surprise fees. We provide clear timelines, honest assessments, and regular updates throughout the process.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Innovation</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  We stay at the forefront of AI and automation technology, continuously improving our solutions to deliver better results.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Results-Driven</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  We measure our success by your success. Every project includes clear KPIs and measurable outcomes that impact your bottom line.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Excellence</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  We don't just deliver working solutions - we deliver exceptional ones. Quality is never compromised in pursuit of speed.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Ready to Start Your Automation Journey?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join the 200+ companies already transforming their operations with NEOTIQA's AI automation solutions.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl min-h-[48px] tech-glow group relative overflow-hidden"
          >
            <span className="relative z-10">Get Free Audit</span>
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
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
                <p>(555) 123-4567</p>
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