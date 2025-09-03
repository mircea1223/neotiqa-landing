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
  Building,
  ShoppingCart,
  Calculator,
  Briefcase,
  Calendar,
  FileText,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function CaseStudiesPage() {
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
              Success
              <span className="gradient-text block mt-2">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              Real businesses, real results. See how companies across different industries have transformed 
              their operations with NEOTIQA's AI automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Industries We've Transformed
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              From startups to enterprises, our automation solutions work across all sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">E-commerce</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xl font-bold gradient-text">15+</div>
                <p className="text-xs text-muted-foreground">Companies Automated</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Calculator className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">Finance</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xl font-bold gradient-text">25+</div>
                <p className="text-xs text-muted-foreground">Companies Automated</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">Professional Services</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xl font-bold gradient-text">30+</div>
                <p className="text-xs text-muted-foreground">Companies Automated</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base sm:text-lg">SaaS</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-xl font-bold gradient-text">40+</div>
                <p className="text-xs text-muted-foreground">Companies Automated</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Featured Success Stories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Deep dives into how our automation solutions transformed these businesses.
            </p>
          </div>

          <div className="space-y-12 lg:space-y-16">
            {/* Case Study 1: E-commerce Giant */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-1">
                      E-commerce
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Global Fashion Retailer
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Processing 1,000+ daily orders manually was causing 3-4 hour delays, leading to customer complaints and lost sales. 
                      The team was spending 40+ hours weekly on order validation, inventory checks, and shipping coordination.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Solution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Implemented end-to-end order processing automation including payment verification, inventory management, 
                      supplier coordination, and automated shipping label generation with real-time customer notifications.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">95%</div>
                    <p className="text-xs text-muted-foreground">Faster Processing</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">$180K</div>
                    <p className="text-xs text-muted-foreground">Annual Savings</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">99.8%</div>
                    <p className="text-xs text-muted-foreground">Accuracy Rate</p>
                  </div>
                </div>
              </div>

              <Card className="glass-card tech-border">
                <CardContent className="p-6 sm:p-8">
                  <h4 className="font-semibold text-foreground mb-4">Results Breakdown</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Order Processing Time</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">3 hours → 10 minutes</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Error Rate</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">12% → 0.2%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Customer Satisfaction</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">78% → 94%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Team Capacity</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">+300% More Orders</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium mb-2">"Game-changing results"</p>
                    <p className="text-xs text-muted-foreground italic">
                      "NEOTIQA's automation solution completely transformed our order fulfillment process. 
                      We can now handle 3x more orders with the same team size."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Sarah Chen, Operations Director</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Case Study 2: Accounting Firm */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <Card className="glass-card tech-border lg:order-1">
                <CardContent className="p-6 sm:p-8">
                  <h4 className="font-semibold text-foreground mb-4">Process Transformation</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-1">Before Automation</h5>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                        <li>• 40+ hours weekly on manual data entry</li>
                        <li>• 15% error rate in categorization</li>
                        <li>• 5-7 days for invoice processing</li>
                        <li>• Manual approval workflows</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-foreground text-sm mb-1">After Automation</h5>
                      <ul className="text-xs text-muted-foreground space-y-1 ml-4">
                        <li>• 8 hours weekly on oversight only</li>
                        <li>• 0.5% error rate with AI validation</li>
                        <li>• Same-day invoice processing</li>
                        <li>• Automated approval workflows</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium mb-2">"Incredible ROI"</p>
                    <p className="text-xs text-muted-foreground italic">
                      "We achieved 340% ROI in the first year alone. Our team can now focus on high-value advisory work instead of manual data entry."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Michael Torres, Managing Partner</p>
                  </div>
                </CardContent>
              </Card>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-1">
                      Professional Services
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      Mid-Size Accounting Firm
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      The firm's 25-person team was drowning in manual invoice processing and expense categorization. 
                      High error rates and long processing times were affecting client satisfaction and employee morale.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Solution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      AI-powered document scanning and processing system with automatic categorization, 
                      intelligent approval workflows, and integrated client portals for real-time transparency.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">80%</div>
                    <p className="text-xs text-muted-foreground">Time Reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">340%</div>
                    <p className="text-xs text-muted-foreground">ROI Year 1</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">99.5%</div>
                    <p className="text-xs text-muted-foreground">Accuracy Rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study 3: SaaS Startup */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-1">
                      SaaS
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                      B2B SaaS Platform
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Challenge</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Sales team was overwhelmed with 500+ leads monthly but only converting 2.1%. 
                      Most leads went unqualified and follow-ups were inconsistent, causing massive revenue loss.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">The Solution</h4>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      Intelligent lead scoring system with automated email sequences, CRM integration, 
                      and dynamic follow-up schedules based on prospect behavior and engagement patterns.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">3x</div>
                    <p className="text-xs text-muted-foreground">Qualified Leads</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">$1.2M</div>
                    <p className="text-xs text-muted-foreground">Additional ARR</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold gradient-text">6.8%</div>
                    <p className="text-xs text-muted-foreground">Conversion Rate</p>
                  </div>
                </div>
              </div>

              <Card className="glass-card tech-border">
                <CardContent className="p-6 sm:p-8">
                  <h4 className="font-semibold text-foreground mb-4">Sales Pipeline Transformation</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Lead Quality Score</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">+200% improvement</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Follow-up Consistency</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">30% → 95%</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Response Time</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">4 hours → 5 minutes</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-sm">Sales Cycle Length</span>
                      <div className="text-right">
                        <div className="text-sm font-medium text-foreground">45 days → 28 days</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium mb-2">"Revenue game-changer"</p>
                    <p className="text-xs text-muted-foreground italic">
                      "The automated lead qualification system helped us triple our conversion rate and add $1.2M in ARR. 
                      Our sales team can now focus on closing deals instead of chasing unqualified leads."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Alex Rodriguez, VP of Sales</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Aggregate Results Across All Clients
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Combined impact of our automation solutions across 200+ companies.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">$5.2M</div>
                <CardTitle className="text-base sm:text-lg">Total Cost Savings</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Operational costs eliminated across all clients
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">52,000</div>
                <CardTitle className="text-base sm:text-lg">Hours Automated</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Manual work hours eliminated monthly
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">98.7%</div>
                <CardTitle className="text-base sm:text-lg">Average Accuracy</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Process accuracy across all implementations
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 text-center">
              <CardHeader className="pb-0">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">6.2x</div>
                <CardTitle className="text-base sm:text-lg">ROI Multiple</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Average return on automation investment
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join the 200+ companies already transforming their operations with AI automation. 
            Your success story could be next.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl min-h-[48px] tech-glow group relative overflow-hidden"
          >
            <span className="relative z-10">Get Free Audit</span>
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Button>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Free consultation • No commitment required • Results guaranteed
          </p>
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