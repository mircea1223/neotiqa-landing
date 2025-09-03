"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Clock,
  Calendar,
  User,
  BookOpen,
  TrendingUp,
  Zap,
  Users,
  Target,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function BlogPage() {
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
              Automation
              <span className="gradient-text block mt-2">Insights</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              Expert insights, best practices, and real-world strategies for implementing AI automation 
              in your business operations.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Card className="glass-card tech-border max-w-4xl mx-auto mb-16">
            <CardContent className="p-8">
              <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-4">
                Featured Article
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                The Complete Guide to AI Automation ROI: How to Measure Success in 2025
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discover the key metrics and methodologies that leading companies use to measure and 
                maximize their automation investments. Learn how to calculate true ROI, track performance, 
                and demonstrate value to stakeholders.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
              </div>
              <Button className="glass-button-primary text-primary-foreground" asChild>
                <a href="/resources/blog/roi-guide-2025">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary/5 to-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Explore by Category
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Find articles tailored to your specific interests and business needs.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Strategy & ROI</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  Business strategy, ROI calculation, and implementation planning for automation projects.
                </p>
                <div className="text-xs text-primary">24 Articles</div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Technical Deep Dives</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  In-depth technical articles about AI, machine learning, and automation technologies.
                </p>
                <div className="text-xs text-primary">18 Articles</div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Industry Insights</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm mb-4">
                  Automation trends, case studies, and best practices for specific industries.
                </p>
                <div className="text-xs text-primary">32 Articles</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Latest Articles
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Stay up to date with the latest automation trends and insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-3">
                  Strategy
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  5 Signs Your Business is Ready for AI Automation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Learn the key indicators that suggest your business could benefit from automation implementation.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>January 10, 2025</span>
                  <span>8 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-3">
                  Technical
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Understanding AI Models: LLMs vs. Traditional Automation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  A comprehensive comparison of different AI approaches and when to use each one.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>January 8, 2025</span>
                  <span>15 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-3">
                  Industry
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Healthcare Automation: Privacy and Security Considerations
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Essential guidelines for implementing automation while maintaining HIPAA compliance.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>January 5, 2025</span>
                  <span>10 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-3">
                  Strategy
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Building an Automation Center of Excellence
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  How to establish governance and best practices for enterprise-wide automation.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>January 3, 2025</span>
                  <span>12 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-3">
                  Technical
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  API Integration Patterns for Business Automation
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Best practices for connecting different systems in your automation workflows.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>December 30, 2024</span>
                  <span>14 min read</span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500 cursor-pointer">
              <CardContent className="p-6">
                <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-3">
                  Industry
                </Badge>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  E-commerce Automation Trends for 2025
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Discover the latest automation trends shaping the e-commerce landscape this year.
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>December 28, 2024</span>
                  <span>9 min read</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="glass-card border-primary/30 bg-transparent hover:bg-primary/5">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Stay Updated
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get the latest automation insights delivered to your inbox weekly.
          </p>
          <form className="max-w-md mx-auto flex gap-3" onSubmit={(e) => { e.preventDefault(); alert('Newsletter signup functionality would be implemented here!'); }}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-lg glass-card border-border/40 bg-background/50 text-foreground placeholder:text-muted-foreground"
              required
            />
            <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-3">
            No spam. Unsubscribe at any time.
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