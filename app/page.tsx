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
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/10">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50"></div>

        {/* Tech-inspired floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-br from-primary/15 to-transparent blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-transparent blur-2xl"></div>

        <div className="container mx-auto px-4 py-16 sm:py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl text-foreground mb-4 sm:mb-6 text-balance leading-tight font-bold lg:text-6xl font-sans">
              AI Automation That Saves Time, Reduces Costs,
              <span className="gradient-text block mt-2"> and Scales Your Business</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              Eliminate repetitive tasks, minimize human errors, and accelerate growth with intelligent workflows
              tailored to your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg tech-glow w-full sm:w-auto min-h-[48px] relative overflow-hidden group"
                asChild
              >
                <a href="/quiz">
                  <span className="relative z-10 text-base">Get Free Audit</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base glass-card border-primary/30 bg-transparent hover:bg-primary/5 w-full sm:w-auto min-h-[48px] sm:text-base"
                asChild
              >
                <a href="/case-studies">
                  See How It Works
                </a>
              </Button>
            </div>

            {/* Tech visualization */}
            <div className="relative max-w-2xl mx-auto mb-8">
              
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground">
              No credit card required • Takes 5 minutes • Free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section - Why Automate Your Business? */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Why Automate Your Business?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:text-base">
              Transform your operations with intelligent automation that delivers measurable results.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-[0-] pb-[0p-] pb-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Clock className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Save Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-sm">
                  Eliminate repetitive tasks and free up your team for strategic work.
                </p>
                <div className="text-xl sm:text-2xl font-bold gradient-text">40+ hrs/week</div>
                <p className="text-muted-foreground text-xs font-normal">Average time saved</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <DollarSign className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Reduce Costs</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-sm">
                  Lower operational expenses while increasing productivity.
                </p>
                <div className="text-xl sm:text-2xl font-bold gradient-text">60%</div>
                <p className="text-muted-foreground text-xs">Cost reduction</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Eliminate Errors</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-sm">
                  Achieve 99.9% accuracy with automated processes.
                </p>
                <div className="text-xl sm:text-2xl font-bold gradient-text">99.9%</div>
                <p className="text-muted-foreground text-xs">Accuracy rate</p>
              </CardContent>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 group">
              <CardHeader className="text-center pb-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <TrendingUp className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl"> Less Hiring</CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-muted-foreground mb-3 sm:mb-4 text-sm">
                  Handle 10x more work without expanding your team.
                </p>
                <div className="text-xl sm:text-2xl font-bold gradient-text">10x</div>
                <p className="text-muted-foreground text-xs">Capacity increase</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 min-h-[48px] tech-glow group relative overflow-hidden"
              asChild
            >
              <a href="/quiz">
                <span className="relative z-10">Get Free Audit</span>
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section - 3 Steps to Automation */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              3 Steps to Automation
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Our proven process gets you from manual work to full automation in weeks, not months.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:gap-12">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  
                </div>
                <div className="glass-card tech-border rounded-xl p-6 md:p-8 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Free Audit</h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Take our 5-minute quiz to identify your biggest automation opportunities and potential savings.
                        We analyze your current workflows and pinpoint areas where AI can make the biggest impact.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                        <Clock className="w-4 h-4" />
                        <span>Takes 5 minutes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  
                </div>
                <div className="glass-card tech-border rounded-xl p-6 md:p-8 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Cpu className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Personalized Plan</h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        Get a custom automation roadmap with ROI projections and implementation timeline. Our AI
                        analyzes your specific needs and creates a step-by-step plan tailored to your business.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span>Custom ROI projections included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Connection Line */}
              

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  
                </div>
                <div className="glass-card tech-border rounded-xl p-6 md:p-8 flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">Implementation & Results</h3>
                      <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                        We build, test, and deploy your automation solutions with ongoing support and optimization.
                        Watch your productivity soar while costs decrease with measurable results from day one.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                        <Shield className="w-4 h-4" />
                        <span>24/7 support & monitoring included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg tech-glow group relative overflow-hidden"
                asChild
              >
                <a href="/quiz">
                  <span className="relative z-10 text-base">Start Your Free Audit</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-background to-primary/5 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Solutions Tailored to Your Workflow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Discover automation solutions designed for your specific business needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="glass-card hover:tech-glow transition-all duration-500 cursor-pointer group tech-border">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Sales Automation</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Automate lead qualification, follow-ups, and pipeline management to close more deals faster.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 cursor-pointer group tech-border">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Finance Automation</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Streamline invoicing, expense tracking, and financial reporting with intelligent automation.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 cursor-pointer group tech-border">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">HR Automation</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Automate recruitment, onboarding, and employee management processes.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 cursor-pointer group tech-border">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Customer Support</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Provide 24/7 support with AI chatbots and automated ticket routing.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 cursor-pointer group tech-border">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Data Processing</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Transform raw data into actionable insights with automated analysis and reporting.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card hover:tech-glow transition-all duration-500 cursor-pointer group tech-border">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Marketing Automation</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Scale your marketing efforts with automated campaigns and lead nurturing.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Real Automation Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:text-base">
              See how businesses in different industries have transformed their operations with AI automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {/* Case Study 1: E-commerce */}
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">E-commerce Company</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Order Processing Automation</p>
                  </div>
                </div>
                <CardTitle className="text-base sm:text-lg">95% Faster Order Processing</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  <strong>Challenge:</strong> Manual order processing taking 2-3 hours per order, causing delays and
                  errors.
                </p>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  <strong>Solution:</strong> Automated order validation, inventory checks, and shipping label
                  generation.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Processing Time:</span>
                    <span className="text-primary font-semibold">2 hours → 6 minutes</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Error Rate:</span>
                    <span className="text-primary font-semibold">15% → 0.1%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Annual Savings:</span>
                    <span className="text-primary font-semibold">$120,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 2: Professional Services */}
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Accounting Firm</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Invoice & Expense Automation</p>
                  </div>
                </div>
                <CardTitle className="text-base sm:text-lg">80% Reduction in Manual Work</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  <strong>Challenge:</strong> 40+ hours weekly spent on invoice processing and expense categorization.
                </p>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  <strong>Solution:</strong> AI-powered document scanning, automatic categorization, and approval
                  workflows.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Weekly Hours Saved:</span>
                    <span className="text-primary font-semibold">32 hours</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Accuracy Improvement:</span>
                    <span className="text-primary font-semibold">85% → 99.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">ROI:</span>
                    <span className="text-primary font-semibold">340% in Year 1</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Case Study 3: SaaS Company */}
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">SaaS Startup</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Lead Qualification & Follow-up</p>
                  </div>
                </div>
                <CardTitle className="text-base sm:text-lg">3x More Qualified Leads</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  <strong>Challenge:</strong> Sales team overwhelmed with unqualified leads, missing follow-up
                  opportunities.
                </p>
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                  <strong>Solution:</strong> Automated lead scoring, personalized email sequences, and CRM integration.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Lead Quality Score:</span>
                    <span className="text-primary font-semibold">+200% improvement</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Follow-up Rate:</span>
                    <span className="text-primary font-semibold">30% → 95%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Conversion Rate:</span>
                    <span className="text-primary font-semibold">2.1% → 6.8%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Industry Stats */}
          <div className="text-center">
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              Based on industry research and automation implementations across 500+ businesses
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">67%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Average cost reduction</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">45hrs</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Weekly hours saved</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">99.2%</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Process accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold gradient-text">8 weeks</div>
                <p className="text-xs sm:text-sm text-muted-foreground">Average implementation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto sm:text-base">
              Get answers to common questions about our automation solutions.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <Card className="glass-card tech-border">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                  Is my data safe with your automation solutions?
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 ml-2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and regular
                  security audits. Your data never leaves your approved systems.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                  How long does setup take?
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 ml-2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Most automation solutions are deployed within 2-4 weeks. Simple workflows can be automated in days,
                  while complex integrations may take 6-8 weeks.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                  What if my current tools aren't supported?
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 ml-2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  We work with 500+ popular business tools and can create custom integrations for proprietary systems.
                  If we can't integrate directly, we'll find alternative solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border">
              <CardHeader className="pb-3 sm:pb-4">
                <CardTitle className="flex items-center justify-between text-base sm:text-lg">
                  Do you provide ongoing support?
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0 ml-2" />
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Yes! We provide 24/7 monitoring, regular optimization, and dedicated support. Our team ensures your
                  automations run smoothly and evolve with your business.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Ready to See Your Automation Potential?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Take our free 5-minute audit and discover how much time and money you could save with custom automation.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl min-h-[48px] tech-glow group relative overflow-hidden"
            asChild
          >
            <a href="/quiz">
              <span className="relative z-10">Get Free Audit</span>
              <ArrowRight className="ml-2 h-5 w-5 sm:h-6 sm:w-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity text-base"></div>
            </a>
          </Button>
          <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
            Join 200+ companies already saving millions with AI automation.
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
