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
  ShoppingCart,
  Package,
  Truck,
  Star,
} from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function EcommercePage() {
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
              E-commerce Solutions
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl text-foreground mb-4 sm:mb-6 text-balance leading-tight font-bold font-sans">
              AI Automation for
              <span className="gradient-text block mt-2">E-commerce</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6 sm:mb-8 text-pretty max-w-3xl mx-auto leading-relaxed sm:text-base">
              Scale your online store with intelligent automation for order processing, inventory management, 
              customer service, and marketing campaigns.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg tech-glow group relative overflow-hidden"
            >
              <span className="relative z-10">Get E-commerce Audit</span>
              <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* E-commerce Solutions */}
      <section className="py-16 sm:py-20 bg-background relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              E-commerce Automation Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Handle more orders, reduce errors, and delight customers with intelligent automation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Order Processing</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Automated order validation, payment processing, and fulfillment coordination.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 95% faster order processing
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Package className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Inventory Management</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Real-time stock tracking, automated reordering, and supplier coordination.
                </p>
                <div className="text-sm text-primary font-medium">
                  • Zero stockouts guaranteed
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
                  AI chatbots for instant support and automated ticket routing.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 24/7 customer support
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Marketing Automation</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Personalized email campaigns, abandoned cart recovery, and upselling.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 40% increase in conversions
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Truck className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Shipping & Returns</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Automated shipping label generation and return processing workflows.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 80% faster fulfillment
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card tech-border hover:tech-glow transition-all duration-500">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <CardTitle className="text-lg sm:text-xl">Product Management</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground text-sm sm:text-base mb-4">
                  Automated product listings, pricing optimization, and catalog updates.
                </p>
                <div className="text-sm text-primary font-medium">
                  • 3x faster product launches
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
              E-commerce Success Story
            </h2>
          </div>

          <Card className="glass-card tech-border max-w-4xl mx-auto">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <ShoppingCart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <Badge variant="outline" className="border-primary/30 text-primary bg-primary/5 mb-1">
                    Fashion Retailer
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground">Global Online Fashion Store</h3>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4">The Challenge</h4>
                  <p className="text-muted-foreground mb-6">
                    Processing 1,000+ daily orders manually was causing 3-4 hour delays and 15% error rates. 
                    Customer complaints about shipping delays were hurting brand reputation.
                  </p>
                  
                  <h4 className="font-semibold text-foreground mb-4">The Solution</h4>
                  <p className="text-muted-foreground">
                    Implemented end-to-end automation for order processing, inventory management, 
                    customer notifications, and shipping coordination across multiple warehouses.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Results Achieved</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Order Processing Time</span>
                      <span className="text-primary font-semibold">3 hours → 10 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Error Rate</span>
                      <span className="text-primary font-semibold">15% → 0.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Customer Satisfaction</span>
                      <span className="text-primary font-semibold">78% → 94%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">Annual Savings</span>
                      <span className="text-primary font-semibold">$180,000</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium mb-2">"Game-changing results"</p>
                    <p className="text-xs text-muted-foreground italic">
                      "We can now handle 3x more orders with the same team size. Customer satisfaction has never been higher."
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">— Sarah Chen, Operations Director</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-30"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Ready to Scale Your E-commerce Operations?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            Discover how AI automation can help you handle more orders while reducing costs and improving customer satisfaction.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-lg sm:text-xl tech-glow group relative overflow-hidden"
          >
            <span className="relative z-10">Get Free E-commerce Audit</span>
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