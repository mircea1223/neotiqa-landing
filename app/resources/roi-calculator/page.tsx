import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Calculator,
  DollarSign,
  TrendingUp,
  Clock,
  Users,
  Zap,
  CheckCircle,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function ROICalculatorPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>

        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-foreground mb-4 sm:mb-6 text-balance leading-tight font-bold font-sans">
              ROI
              <span className="gradient-text block mt-2">Calculator</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              Discover the potential return on investment for AI automation in your business. 
              Get personalized projections based on your current operations.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              
              {/* Input Form */}
              <Card className="glass-card tech-border">
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Business Information</CardTitle>
                  <CardDescription>
                    Enter your current business metrics to calculate potential savings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="employees" className="text-sm font-medium text-foreground block mb-2">
                        Number of Employees
                      </Label>
                      <Input 
                        id="employees" 
                        type="number"
                        placeholder="50" 
                        className="glass-card border-border/40 bg-background/50"
                      />
                    </div>
                    <div>
                      <Label htmlFor="avgSalary" className="text-sm font-medium text-foreground block mb-2">
                        Average Salary ($)
                      </Label>
                      <Input 
                        id="avgSalary" 
                        type="number"
                        placeholder="65000" 
                        className="glass-card border-border/40 bg-background/50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="manualHours" className="text-sm font-medium text-foreground block mb-2">
                      Weekly Hours Spent on Manual Tasks
                    </Label>
                    <Input 
                      id="manualHours" 
                      type="number"
                      placeholder="40" 
                      className="glass-card border-border/40 bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="errorRate" className="text-sm font-medium text-foreground block mb-2">
                      Current Error Rate (%)
                    </Label>
                    <Input 
                      id="errorRate" 
                      type="number"
                      placeholder="5" 
                      className="glass-card border-border/40 bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="errorCost" className="text-sm font-medium text-foreground block mb-2">
                      Average Cost per Error ($)
                    </Label>
                    <Input 
                      id="errorCost" 
                      type="number"
                      placeholder="500" 
                      className="glass-card border-border/40 bg-background/50"
                    />
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-sm font-medium text-foreground block mb-2">
                      Industry
                    </Label>
                    <select className="w-full px-3 py-2 rounded-lg glass-card border-border/40 bg-background/50 text-foreground">
                      <option>Select your industry</option>
                      <option>Healthcare</option>
                      <option>Financial Services</option>
                      <option>E-commerce</option>
                      <option>SaaS</option>
                      <option>Manufacturing</option>
                      <option>Professional Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                  
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground tech-glow group relative overflow-hidden"
                  >
                    <span className="relative z-10">Calculate ROI</span>
                    <Calculator className="ml-2 h-4 w-4 relative z-10" />
                  </Button>
                </CardContent>
              </Card>

              {/* Results Display */}
              <div className="space-y-6">
                <Card className="glass-card tech-border">
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">Projected Results</CardTitle>
                    <CardDescription>
                      Based on industry benchmarks and your inputs
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    
                    {/* Annual Savings */}
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="w-6 h-6 text-primary" />
                        <h3 className="text-lg font-semibold text-foreground">Annual Savings</h3>
                      </div>
                      <div className="text-3xl font-bold gradient-text mb-2">$284,000</div>
                      <p className="text-sm text-muted-foreground">Total operational cost reduction</p>
                    </div>

                    {/* Time Savings */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="p-4 glass-card rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">Time Saved</span>
                        </div>
                        <div className="text-xl font-bold gradient-text">32 hrs/week</div>
                        <p className="text-xs text-muted-foreground">Manual work eliminated</p>
                      </div>

                      <div className="p-4 glass-card rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-primary" />
                          <span className="font-medium text-foreground">ROI</span>
                        </div>
                        <div className="text-xl font-bold gradient-text">420%</div>
                        <p className="text-xs text-muted-foreground">Return on investment</p>
                      </div>
                    </div>

                    {/* Efficiency Gains */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Efficiency Improvements</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Error Rate Reduction</span>
                          <span className="text-sm font-medium text-primary">5% → 0.2%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Processing Speed</span>
                          <span className="text-sm font-medium text-primary">85% faster</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-muted-foreground">Team Capacity</span>
                          <span className="text-sm font-medium text-primary">+200% increase</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payback Period */}
                <Card className="glass-card tech-border">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h3 className="font-semibold text-foreground mb-2">Payback Period</h3>
                      <div className="text-2xl font-bold gradient-text mb-2">4.2 months</div>
                      <p className="text-sm text-muted-foreground">Time to recover automation investment</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Breakdown */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              How We Calculate Your ROI
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Our calculator uses proven methodologies and industry benchmarks to provide accurate projections.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">Time Savings</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Calculate labor cost savings based on hours eliminated from manual tasks.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">Error Reduction</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Quantify cost savings from eliminating human errors and rework.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">Scalability</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Factor in increased capacity without proportional staff increases.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-base">Efficiency Gains</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm">
                  Include productivity improvements and faster processing times.
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
            Ready to Realize These Savings?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get a detailed automation assessment and implementation roadmap tailored to your business.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl tech-glow group relative overflow-hidden"
          >
            <span className="relative z-10">Schedule Free Consultation</span>
            <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            No obligation • Expert guidance • Custom roadmap included
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