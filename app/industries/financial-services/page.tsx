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
  CreditCard,
  Calculator,
  FileText,
  BarChart,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function FinancialServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>

        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-6">
              Financial Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-foreground mb-4 sm:mb-6 text-balance leading-tight font-bold font-sans">
              AI Automation for
              <span className="gradient-text block mt-2">Financial Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              Enhance compliance, reduce risk, and accelerate operations with intelligent automation 
              built for banks, credit unions, and financial institutions.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg tech-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Get Financial Audit</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Financial Services Solutions */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Financial Automation Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Streamline operations while maintaining the highest security and compliance standards.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Loan Processing</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Automated application review, credit checks, and approval workflows.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 75% faster loan approvals
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Fraud Detection</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Real-time transaction monitoring and anomaly detection systems.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 98% fraud detection accuracy
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Calculator className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Risk Assessment</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Automated credit scoring and risk evaluation for better decision making.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 90% more accurate risk models
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <BarChart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Regulatory Reporting</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Automated compliance reporting for BSA, AML, and regulatory requirements.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 100% compliance accuracy
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Account Management</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Automated account opening, KYC verification, and customer onboarding.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 5 minutes account opening
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Customer Service</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  AI-powered chatbots and automated response systems for customer inquiries.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 24/7 customer support
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Financial Services Success Story
            </h2>
          </div>

          <Card className="glass-card tech-border max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-1">
                    Community Credit Union
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">Regional Financial Institution</h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">The Challenge</h4>
                  <p className="text-muted-foreground mb-6">
                    Manual loan processing was taking 2-3 weeks, creating customer dissatisfaction and competitive disadvantage. 
                    Compliance reporting consumed 40+ hours weekly of staff time.
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-4">The Solution</h4>
                  <p className="text-muted-foreground">
                    Implemented automated loan processing, fraud detection, and regulatory reporting system 
                    with integrated risk assessment and customer communication workflows.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Results Achieved</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Loan Processing Time</span>
                      <span className="text-primary font-semibold">3 weeks → 2 days</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Fraud Detection Rate</span>
                      <span className="text-primary font-semibold">85% → 98%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Compliance Time</span>
                      <span className="text-primary font-semibold">40 hrs → 8 hrs</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Customer Satisfaction</span>
                      <span className="text-primary font-semibold">74% → 92%</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium mb-2">"Competitive advantage restored"</p>
                    <p className="text-xs text-muted-foreground italic">
                      "We went from losing customers due to slow processing to being the fastest lender in our market. The automation has been transformational."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Michael Chen, VP Operations</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Built for Financial Security
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Our solutions meet the strictest security and compliance requirements in the financial industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="glass-card text-center hover:tech-glow transition-all duration-500">
              <CardContent className="p-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">SOC 2 Type II</h3>
                <p className="text-sm text-muted-foreground">Certified security controls</p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:tech-glow transition-all duration-500">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">FFIEC Compliance</h3>
                <p className="text-sm text-muted-foreground">Federal banking standards</p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:tech-glow transition-all duration-500">
              <CardContent className="p-6">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">256-bit Encryption</h3>
                <p className="text-sm text-muted-foreground">End-to-end data protection</p>
              </CardContent>
            </Card>

            <Card className="glass-card text-center hover:tech-glow transition-all duration-500">
              <CardContent className="p-6">
                <BarChart className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Real-time Monitoring</h3>
                <p className="text-sm text-muted-foreground">24/7 security oversight</p>
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
            Ready to Modernize Your Financial Operations?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover how AI automation can enhance your competitive position while maintaining strict compliance.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl tech-glow group relative overflow-hidden"
          >
            <span className="relative z-10">Get Free Financial Audit</span>
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
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
                <p>+447366393491</p>
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