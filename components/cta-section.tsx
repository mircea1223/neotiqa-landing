"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFadeIn } from "@/hooks/use-fade-in"

export function CTASection() {
  const headerFade = useFadeIn({ delay: 200 })
  const formFade = useFadeIn({ delay: 400 })

  return (
    <>
      <div className="w-full h-px bg-divider"></div>
      <section id="cta" className="py-12 sm:py-16 lg:py-20 bg-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div ref={headerFade.ref} style={headerFade.fadeInStyle} className="text-center mb-8 sm:mb-12">
              <h2 className="font-bold text-balance mb-4 sm:text-3xl text-foreground text-2xl">
                {"Are you ready to "}
                <span className="text-primary">Double</span>
                {" your "}
                <span className="text-primary">Conversion Rate?</span>
              </h2>
              <p className="text-pretty max-w-2xl mx-auto sm:text-base text-foreground px-4 sm:px-0 text-xs font-light">
                Get in touch to see how our AI platform can transform your business. Pricing adapted to your company's
                size and needs.
              </p>
            </div>

            <div className="max-w-lg mx-auto">
              <div ref={formFade.ref} style={formFade.fadeInStyle} className="space-y-6">
                <div className="bg-card rounded-lg p-4 sm:p-8 border border-border">
                  <h3 className="sm:text-xl font-semibold mb-3 sm:mb-6 text-primary text-base">Request a Demo</h3>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input
                        className="dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xm text-xs"
                        placeholder="First Name"
                      />
                      <Input
                        className="dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs"
                        placeholder="Last Name"
                      />
                    </div>
                    <Input
                      className="dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs"
                      placeholder="Company Email"
                      type="email"
                    />
                    <Input
                      className="dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs"
                      placeholder="Company Name"
                    />
                    <Input
                      className="dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs"
                      placeholder="Phone Number"
                      type="tel"
                    />
                    <Textarea
                      className="dark:text-input-dark dark:placeholder-input-dark light:text-input-light light:placeholder-input-light text-xs"
                      placeholder="Tell us about your business and how you'd like to use AI visualization"
                      rows={4}
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90">Book a Demo</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
