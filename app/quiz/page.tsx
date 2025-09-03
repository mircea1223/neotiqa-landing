"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  ArrowRight,
  ArrowLeft,
  Users,
  DollarSign,
  UserCheck,
  Headphones,
  CheckCircle,
  Clock,
  TrendingUp,
  Calendar,
  Sparkles,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

interface QuizData {
  department: string
  painPoints: string[]
  teamSize: string
  currentTools: string[]
  desiredOutcome: string
  timeSpent: string
  name: string
  email: string
  company: string
}

const departments = [
  { id: "sales", name: "Sales & Marketing", icon: Users },
  { id: "finance", name: "Finance & Accounting", icon: DollarSign },
  { id: "hr", name: "Human Resources", icon: UserCheck },
  { id: "support", name: "Customer Support", icon: Headphones },
  { id: "operations", name: "Operations", icon: CheckCircle },
  { id: "multiple", name: "Multiple Departments", icon: Users },
]

const painPoints = [
  "Manual data entry taking too much time",
  "Repetitive tasks consuming resources",
  "Inconsistent processes across teams",
  "Difficulty tracking performance metrics",
  "Poor communication between departments",
  "Slow response times to customers",
  "Error-prone manual processes",
  "Difficulty scaling operations",
]

const teamSizes = [
  { id: "1-10", name: "1-10 employees", savings: "$50K-$100K" },
  { id: "11-50", name: "11-50 employees", savings: "$100K-$300K" },
  { id: "51-200", name: "51-200 employees", savings: "$300K-$800K" },
  { id: "200+", name: "200+ employees", savings: "$800K+" },
]

const tools = [
  "CRM (Salesforce, HubSpot, etc.)",
  "Email Marketing (Mailchimp, Constant Contact)",
  "Accounting Software (QuickBooks, Xero)",
  "Project Management (Asana, Trello, Monday)",
  "Communication (Slack, Microsoft Teams)",
  "Spreadsheets (Excel, Google Sheets)",
  "Database Systems (MySQL, PostgreSQL)",
  "E-commerce Platforms (Shopify, WooCommerce)",
]

const outcomes = [
  { id: "save-time", name: "Save Time", description: "Reduce manual work and free up team for strategic tasks" },
  { id: "reduce-costs", name: "Reduce Costs", description: "Lower operational expenses and improve efficiency" },
  { id: "improve-accuracy", name: "Improve Accuracy", description: "Eliminate human errors and ensure consistency" },
  { id: "scale-business", name: "Scale Business", description: "Handle more work without hiring additional staff" },
  {
    id: "better-insights",
    name: "Better Insights",
    description: "Get real-time data and analytics for decision making",
  },
]

const timeSpentOptions = [
  { id: "5-10", name: "5-10 hours/week", potential: "20-40 hours/month" },
  { id: "10-20", name: "10-20 hours/week", potential: "40-80 hours/month" },
  { id: "20-40", name: "20-40 hours/week", potential: "80-160 hours/month" },
  { id: "40+", name: "40+ hours/week", potential: "160+ hours/month" },
]

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [quizData, setQuizData] = useState<QuizData>({
    department: "",
    painPoints: [],
    teamSize: "",
    currentTools: [],
    desiredOutcome: "",
    timeSpent: "",
    name: "",
    email: "",
    company: "",
  })
  const [showResults, setShowResults] = useState(false)

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handlePainPointToggle = (painPoint: string) => {
    setQuizData((prev) => ({
      ...prev,
      painPoints: prev.painPoints.includes(painPoint)
        ? prev.painPoints.filter((p) => p !== painPoint)
        : [...prev.painPoints, painPoint],
    }))
  }

  const handleToolToggle = (tool: string) => {
    setQuizData((prev) => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter((t) => t !== tool)
        : [...prev.currentTools, tool],
    }))
  }

  const getRecommendations = () => {
    const recommendations = []
    const selectedTeamSize = teamSizes.find((size) => size.id === quizData.teamSize)
    const selectedTimeSpent = timeSpentOptions.find((time) => time.id === quizData.timeSpent)

    if (quizData.department === "sales") {
      recommendations.push("Lead Qualification Automation", "Email Marketing Automation", "Sales Reporting")
    } else if (quizData.department === "finance") {
      recommendations.push("Invoice Processing", "Expense Management", "Data Entry Automation")
    } else if (quizData.department === "hr") {
      recommendations.push("Employee Onboarding", "Recruitment Automation")
    } else if (quizData.department === "support") {
      recommendations.push("Customer Support Automation", "Ticket Routing")
    } else {
      recommendations.push("Process Automation", "Data Integration", "Workflow Optimization")
    }

    return {
      solutions: recommendations,
      savings: selectedTeamSize?.savings || "$50K+",
      timeSaved: selectedTimeSpent?.potential || "20+ hours/month",
    }
  }

  if (showResults) {
    const results = getRecommendations()
    return (
      <div className="min-h-screen bg-background bg-circuit-pattern">
        <Navigation />

        <div className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="glass-card tech-border">
                <CardHeader className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 tech-glow">
                    <Sparkles className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl mb-2">Your Automation Potential</CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Based on your responses, here's what we recommend for {quizData.company || "your business"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6 sm:space-y-8">
                  {/* Key Metrics */}
                  <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="text-center p-4 sm:p-6 glass-card tech-border">
                      <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-primary">{results.timeSaved}</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Time Saved Monthly</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 glass-card tech-border">
                      <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-primary">{results.savings}</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Annual Savings Potential</p>
                    </div>
                    <div className="text-center p-4 sm:p-6 glass-card tech-border">
                      <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                      <div className="text-xl sm:text-2xl font-bold text-primary">300%+</div>
                      <p className="text-xs sm:text-sm text-muted-foreground">Expected ROI</p>
                    </div>
                  </div>

                  {/* Recommended Solutions */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Recommended Solutions for You:</h3>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {results.solutions.map((solution, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 sm:p-4 glass-card tech-border">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          <span className="font-medium text-sm sm:text-base">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pain Points Addressed */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Pain Points We'll Address:</h3>
                    <div className="space-y-2">
                      {quizData.painPoints.slice(0, 3).map((painPoint, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm sm:text-base">{painPoint}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="text-center pt-4 sm:pt-6 border-t border-border/40">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      Book a free 30-minute strategy call to discuss your specific needs and get a detailed
                      implementation plan.
                    </p>
                    <button className="glass-button-primary text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto">
                      <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                      Book Free Strategy Call
                    </button>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-3 sm:mt-4">
                      No commitment required • Get personalized recommendations • 30-minute consultation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background bg-circuit-pattern">
      <Navigation />

      <div className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-6 sm:mb-8">
              <Badge
                variant="secondary"
                className="mb-3 sm:mb-4 glass-card text-primary border-primary/20 text-xs sm:text-sm"
              >
                Free Automation Audit
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Discover Your <span className="gradient-text">Automation Potential</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Answer 6 quick questions to get personalized recommendations and savings estimates.
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 sm:mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Quiz Content */}
            <Card className="glass-card tech-border">
              <CardContent className="p-6 sm:p-8">
                {/* Step 1: Department */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">Which department needs automation most?</h2>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      Select the area where you spend the most manual effort.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                      {departments.map((dept) => {
                        const Icon = dept.icon
                        return (
                          <button
                            key={dept.id}
                            onClick={() => setQuizData({ ...quizData, department: dept.id })}
                            className={`p-3 sm:p-4 rounded-lg transition-all text-left min-h-[60px] ${
                              quizData.department === dept.id
                                ? "glass-button-primary text-primary-foreground"
                                : "glass-button text-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                              <span className="font-medium text-sm sm:text-base">{dept.name}</span>
                            </div>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Pain Points */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">What are your biggest pain points?</h2>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      Select all that apply to your current situation.
                    </p>
                    <div className="space-y-2 sm:space-y-3">
                      {painPoints.map((painPoint) => (
                        <button
                          key={painPoint}
                          onClick={() => handlePainPointToggle(painPoint)}
                          className={`w-full p-3 sm:p-4 rounded-lg transition-all text-left ${
                            quizData.painPoints.includes(painPoint)
                              ? "glass-button-primary text-primary-foreground"
                              : "glass-button text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                quizData.painPoints.includes(painPoint)
                                  ? "border-primary-foreground bg-primary-foreground/20"
                                  : "border-muted-foreground"
                              }`}
                            >
                              {quizData.painPoints.includes(painPoint) && (
                                <CheckCircle className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-primary-foreground" />
                              )}
                            </div>
                            <span className="text-sm sm:text-base">{painPoint}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Team Size */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">What's your team size?</h2>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      This helps us estimate your potential savings.
                    </p>
                    <div className="space-y-3 sm:space-y-4">
                      {teamSizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setQuizData({ ...quizData, teamSize: size.id })}
                          className={`w-full p-3 sm:p-4 rounded-lg transition-all text-left ${
                            quizData.teamSize === size.id
                              ? "glass-button-primary text-primary-foreground"
                              : "glass-button text-foreground"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-sm sm:text-base">{size.name}</span>
                            <Badge variant="outline" className="glass-card border-primary/30 text-primary text-xs">
                              {size.savings} potential savings
                            </Badge>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 4: Current Tools */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">What tools do you currently use?</h2>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      Select all tools your team uses regularly.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-2 sm:gap-3">
                      {tools.map((tool) => (
                        <button
                          key={tool}
                          onClick={() => handleToolToggle(tool)}
                          className={`p-2.5 sm:p-3 rounded-lg transition-all text-left ${
                            quizData.currentTools.includes(tool)
                              ? "glass-button-primary text-primary-foreground"
                              : "glass-button text-foreground"
                          }`}
                        >
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded border-2 flex items-center justify-center flex-shrink-0 ${
                                quizData.currentTools.includes(tool)
                                  ? "border-primary-foreground bg-primary-foreground/20"
                                  : "border-muted-foreground"
                              }`}
                            >
                              {quizData.currentTools.includes(tool) && (
                                <CheckCircle className="h-2 w-2 sm:h-2.5 sm:w-2.5 text-primary-foreground" />
                              )}
                            </div>
                            <span className="text-xs sm:text-sm">{tool}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Desired Outcome & Time Spent */}
                {currentStep === 5 && (
                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-2">What's your primary goal?</h2>
                      <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                        Choose your most important objective.
                      </p>
                      <div className="space-y-2 sm:space-y-3">
                        {outcomes.map((outcome) => (
                          <button
                            key={outcome.id}
                            onClick={() => setQuizData({ ...quizData, desiredOutcome: outcome.id })}
                            className={`w-full p-3 sm:p-4 rounded-lg transition-all text-left ${
                              quizData.desiredOutcome === outcome.id
                                ? "glass-button-primary text-primary-foreground"
                                : "glass-button text-foreground"
                            }`}
                          >
                            <div className="font-medium mb-1 text-sm sm:text-base">{outcome.name}</div>
                            <div className="text-xs sm:text-sm opacity-80">{outcome.description}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        How much time do you spend on manual tasks weekly?
                      </h3>
                      <div className="space-y-2 sm:space-y-3">
                        {timeSpentOptions.map((time) => (
                          <button
                            key={time.id}
                            onClick={() => setQuizData({ ...quizData, timeSpent: time.id })}
                            className={`w-full p-3 sm:p-4 rounded-lg transition-all text-left ${
                              quizData.timeSpent === time.id
                                ? "glass-button-primary text-primary-foreground"
                                : "glass-button text-foreground"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-sm sm:text-base">{time.name}</span>
                              <Badge variant="outline" className="glass-card border-primary/30 text-primary text-xs">
                                Save {time.potential}
                              </Badge>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 6: Contact Information */}
                {currentStep === 6 && (
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold mb-2">Get your personalized results</h2>
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                      We'll send your automation recommendations and savings estimate.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-sm sm:text-base">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={quizData.name}
                          onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                          placeholder="Enter your full name"
                          className="mt-1 h-11 sm:h-12 glass-card border-primary/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm sm:text-base">
                          Business Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={quizData.email}
                          onChange={(e) => setQuizData({ ...quizData, email: e.target.value })}
                          placeholder="Enter your business email"
                          className="mt-1 h-11 sm:h-12 glass-card border-primary/20"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company" className="text-sm sm:text-base">
                          Company Name *
                        </Label>
                        <Input
                          id="company"
                          value={quizData.company}
                          onChange={(e) => setQuizData({ ...quizData, company: e.target.value })}
                          placeholder="Enter your company name"
                          className="mt-1 h-11 sm:h-12 glass-card border-primary/20"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border/40">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className="glass-button text-foreground px-4 py-2 rounded-lg font-medium flex items-center gap-2 w-full sm:w-auto order-2 sm:order-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !quizData.department) ||
                      (currentStep === 2 && quizData.painPoints.length === 0) ||
                      (currentStep === 3 && !quizData.teamSize) ||
                      (currentStep === 4 && quizData.currentTools.length === 0) ||
                      (currentStep === 5 && (!quizData.desiredOutcome || !quizData.timeSpent)) ||
                      (currentStep === 6 && (!quizData.name || !quizData.email || !quizData.company))
                    }
                    className="glass-button-primary text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 w-full sm:w-auto order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep === totalSteps ? "Get My Results" : "Next"}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
