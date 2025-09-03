"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ArrowRight,
  ChevronDown,
  Users,
  DollarSign,
  UserCheck,
  Headphones,
  FileText,
  BarChart3,
  Mail,
  Database,
  Clock,
  TrendingUp,
  CheckCircle,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

const departments = [
  { id: "all", name: "All Solutions" },
  { id: "sales", name: "Sales" },
  { id: "finance", name: "Finance" },
  { id: "hr", name: "HR" },
  { id: "support", name: "Support" },
]

const solutions = [
  {
    id: "lead-qualification",
    department: "sales",
    icon: Users,
    title: "Lead Qualification",
    description: "Automatically score and qualify leads based on behavior, demographics, and engagement.",
    timeframe: "2-3 weeks",
    roi: "300% ROI in 6 months",
    howItWorks: [
      "AI analyzes lead behavior and engagement patterns",
      "Automatic scoring based on your ideal customer profile",
      "Qualified leads routed to sales team instantly",
      "Continuous learning improves qualification accuracy",
    ],
    caseStudy: {
      company: "TechStart Inc",
      result: "Increased qualified leads by 250% and reduced sales cycle by 40%",
    },
  },
  {
    id: "invoice-processing",
    department: "finance",
    icon: FileText,
    title: "Invoice Processing",
    description: "Streamline invoice creation, approval workflows, and payment tracking.",
    timeframe: "1-2 weeks",
    roi: "400% ROI in 4 months",
    howItWorks: [
      "Automatic invoice generation from project data",
      "Smart approval routing based on amount and department",
      "Payment tracking and automated follow-ups",
      "Integration with accounting systems",
    ],
    caseStudy: {
      company: "ServicePro LLC",
      result: "Reduced invoice processing time by 85% and improved cash flow by 30%",
    },
  },
  {
    id: "employee-onboarding",
    department: "hr",
    icon: UserCheck,
    title: "Employee Onboarding",
    description: "Automate the entire onboarding process from paperwork to training schedules.",
    timeframe: "3-4 weeks",
    roi: "200% ROI in 8 months",
    howItWorks: [
      "Digital paperwork and document collection",
      "Automated training schedule creation",
      "Equipment and access provisioning workflows",
      "Progress tracking and milestone notifications",
    ],
    caseStudy: {
      company: "GrowthCorp",
      result: "Reduced onboarding time by 60% and improved new hire satisfaction by 45%",
    },
  },
  {
    id: "customer-support",
    department: "support",
    icon: Headphones,
    title: "Customer Support Automation",
    description: "AI-powered chatbots and automated ticket routing for 24/7 customer service.",
    timeframe: "2-3 weeks",
    roi: "350% ROI in 5 months",
    howItWorks: [
      "AI chatbot handles common inquiries instantly",
      "Smart ticket routing to appropriate specialists",
      "Automated follow-ups and satisfaction surveys",
      "Knowledge base integration for self-service",
    ],
    caseStudy: {
      company: "CustomerFirst Co",
      result: "Reduced response time by 90% and increased customer satisfaction by 35%",
    },
  },
  {
    id: "sales-reporting",
    department: "sales",
    icon: BarChart3,
    title: "Sales Reporting",
    description: "Automated sales reports with real-time insights and performance tracking.",
    timeframe: "1-2 weeks",
    roi: "250% ROI in 6 months",
    howItWorks: [
      "Real-time data collection from CRM and sales tools",
      "Automated report generation and distribution",
      "Performance alerts and trend analysis",
      "Custom dashboards for different stakeholders",
    ],
    caseStudy: {
      company: "SalesMax Pro",
      result: "Saved 20 hours/week on reporting and increased sales visibility by 100%",
    },
  },
  {
    id: "expense-management",
    department: "finance",
    icon: DollarSign,
    title: "Expense Management",
    description: "Automate expense reporting, approval workflows, and reimbursement processing.",
    timeframe: "2-3 weeks",
    roi: "300% ROI in 5 months",
    howItWorks: [
      "Receipt scanning and automatic categorization",
      "Policy compliance checking and flagging",
      "Automated approval workflows",
      "Integration with payroll and accounting systems",
    ],
    caseStudy: {
      company: "ExpenseEasy Ltd",
      result: "Reduced expense processing time by 75% and improved compliance by 90%",
    },
  },
  {
    id: "recruitment",
    department: "hr",
    icon: Users,
    title: "Recruitment Automation",
    description: "Streamline candidate screening, interview scheduling, and hiring workflows.",
    timeframe: "3-4 weeks",
    roi: "400% ROI in 6 months",
    howItWorks: [
      "AI-powered resume screening and ranking",
      "Automated interview scheduling coordination",
      "Candidate communication and status updates",
      "Integration with job boards and ATS systems",
    ],
    caseStudy: {
      company: "TalentFind Inc",
      result: "Reduced time-to-hire by 50% and improved candidate quality by 40%",
    },
  },
  {
    id: "email-marketing",
    department: "sales",
    icon: Mail,
    title: "Email Marketing Automation",
    description: "Personalized email campaigns with automated follow-ups and lead nurturing.",
    timeframe: "2-3 weeks",
    roi: "500% ROI in 4 months",
    howItWorks: [
      "Behavioral trigger-based email sequences",
      "Personalization using customer data",
      "A/B testing and optimization",
      "Integration with CRM and analytics tools",
    ],
    caseStudy: {
      company: "MarketGrow Co",
      result: "Increased email conversion rates by 180% and generated $2M in additional revenue",
    },
  },
  {
    id: "data-entry",
    department: "finance",
    icon: Database,
    title: "Data Entry Automation",
    description: "Eliminate manual data entry with intelligent document processing and data extraction.",
    timeframe: "1-2 weeks",
    roi: "600% ROI in 3 months",
    howItWorks: [
      "OCR and AI-powered document scanning",
      "Intelligent data extraction and validation",
      "Automatic data entry into target systems",
      "Error detection and quality assurance",
    ],
    caseStudy: {
      company: "DataFlow Systems",
      result: "Eliminated 95% of manual data entry and reduced errors by 99%",
    },
  },
]

export default function SolutionsPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all")
  const [openSolutions, setOpenSolutions] = useState<string[]>([])

  const filteredSolutions =
    selectedDepartment === "all"
      ? solutions
      : solutions.filter((solution) => solution.department === selectedDepartment)

  const toggleSolution = (solutionId: string) => {
    setOpenSolutions((prev) =>
      prev.includes(solutionId) ? prev.filter((id) => id !== solutionId) : [...prev, solutionId],
    )
  }

  return (
    <div className="min-h-screen bg-background bg-circuit-pattern">
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 glass-card text-primary border-primary/20">
              Comprehensive Automation Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Automation Solutions for
              <span className="gradient-text"> Every Workflow</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Discover tailored automation solutions designed to transform your specific business processes and drive
              measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background/50 backdrop-blur-sm border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={
                  selectedDepartment === dept.id
                    ? "glass-button-primary text-primary-foreground px-6 py-2 rounded-lg font-medium"
                    : "glass-button text-foreground px-6 py-2 rounded-lg font-medium"
                }
              >
                {dept.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredSolutions.map((solution) => {
              const Icon = solution.icon
              const isOpen = openSolutions.includes(solution.id)

              return (
                <Card key={solution.id} className="glass-card tech-border hover:tech-glow transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 tech-glow">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl">{solution.title}</CardTitle>
                          <Badge variant="outline" className="text-xs glass-card border-primary/30 text-primary">
                            {departments.find((d) => d.id === solution.department)?.name}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">{solution.description}</CardDescription>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {solution.timeframe}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary font-medium">
                        <TrendingUp className="h-4 w-4" />
                        {solution.roi}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <Collapsible open={isOpen} onOpenChange={() => toggleSolution(solution.id)}>
                      <CollapsibleTrigger asChild>
                        <Button
                          variant="ghost"
                          className="w-full justify-between p-0 h-auto font-medium text-primary hover:text-primary/80"
                        >
                          How It Works
                          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </Button>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="mt-4 space-y-4">
                        <div>
                          <h4 className="font-medium mb-3 text-foreground">Implementation Process:</h4>
                          <ul className="space-y-2">
                            {solution.howItWorks.map((step, index) => (
                              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="glass-card p-4 border-primary/20">
                          <h4 className="font-medium mb-2 text-foreground">Success Story:</h4>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-primary">{solution.caseStudy.company}:</span>{" "}
                            {solution.caseStudy.result}
                          </p>
                        </div>

                        <button className="w-full glass-button-primary text-primary-foreground px-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2">
                          Get This Solution
                          <ArrowRight className="h-4 w-4" />
                        </button>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-20 glass-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Not Sure Which Solution Fits Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take our free 5-minute assessment to discover your biggest automation opportunities and potential savings.
          </p>
          <button className="glass-button-primary text-primary-foreground px-12 py-4 text-xl rounded-lg font-medium flex items-center gap-2 mx-auto">
            Find Out What You Can Automate
            <ArrowRight className="h-6 w-6" />
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            Get personalized recommendations • No commitment required
          </p>
        </div>
      </section>

      {/* Additional Case Studies */}
      <section className="py-20 bg-background/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">More Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how businesses across different industries have transformed their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card tech-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center tech-glow">
                    <span className="text-primary font-bold text-sm">MS</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">MedSupply Co</h4>
                    <p className="text-sm text-muted-foreground">Healthcare</p>
                  </div>
                </div>
                <CardTitle className="text-lg">Automated Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Reduced stockouts by 90% and cut inventory costs by $200K annually through predictive ordering
                  automation.
                </p>
                <div className="text-primary font-medium text-sm">ROI: 450% in 8 months</div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center tech-glow">
                    <span className="text-primary font-bold text-sm">LF</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">LegalFirm Pro</h4>
                    <p className="text-sm text-muted-foreground">Legal Services</p>
                  </div>
                </div>
                <CardTitle className="text-lg">Document Review Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  AI-powered contract analysis reduced review time by 80% and improved accuracy to 99.5%.
                </p>
                <div className="text-primary font-medium text-sm">ROI: 300% in 6 months</div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center tech-glow">
                    <span className="text-primary font-bold text-sm">RE</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">RealEstate Plus</h4>
                    <p className="text-sm text-muted-foreground">Real Estate</p>
                  </div>
                </div>
                <CardTitle className="text-lg">Lead Nurturing System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3">
                  Automated follow-up sequences increased conversion rates by 65% and generated $1.5M in additional
                  sales.
                </p>
                <div className="text-primary font-medium text-sm">ROI: 520% in 4 months</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
