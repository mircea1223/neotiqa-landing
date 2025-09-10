"use client"

import { Upload, Settings, Zap } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"

export function HowItWorks() {
  const headerFade = useFadeIn({ delay: 200 })
  const stepsFade = useFadeIn({ delay: 400 })

  const steps = [
    {
      icon: Upload,
      title: "Upload a clear photo of the property",
      description: "Simply upload a clear photo of the existing property from any angle",
    },
    {
      icon: Settings,
      title: "Select extension style, finishes, and options",
      description: "Choose from various architectural styles, materials, and design preferences",
    },
    {
      icon: Zap,
      title: "See the house extension from multiple angles",
      description: "AI creates photorealistic visualizations showing the completed extension",
    },
  ]

  return (
    <>
      <div className="w-full h-px bg-divider"></div>
      <section id="how-it-works" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-0 mt-0">
          <div ref={headerFade.ref} style={headerFade.fadeInStyle} className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-bold text-balance mb-2 sm:mb-4 text-sidebar-ring sm:text-2xl lg:text-3xl xl:text-4xl text-2xl">
              How it works
            </h2>
            <p className="max-w-2xl mx-auto text-pretty sm:text-sm lg:text-base text-foreground px-4 sm:px-0 text-xs font-light">
              Our platform transforms a simple photo of a client's home into a sales-closing visualization — as you
              blink.
            </p>
          </div>

          <div
            ref={stepsFade.ref}
            style={stepsFade.fadeInStyle}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8"
          >
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-lg p-3 sm:p-6 lg:p-8 text-center shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="inline-flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-primary/10 rounded-full mb-2 sm:mb-4 lg:mb-6">
                    <step.icon className="h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 text-sidebar-accent" />
                  </div>
                  <h3 className="font-semibold mb-1 sm:mb-3 lg:mb-4 text-balance text-chart-1 sm:text-base text-base lg:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-pretty text-foreground font-extralight text-xs sm:text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-border"></div>
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
