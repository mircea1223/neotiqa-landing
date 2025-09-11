"use client"

import { Button } from "@/components/ui/button"
import { BeforeAfterSlider } from "./before-after-slider"
import { TypingAnimation } from "./typing-animation"
import { useFadeIn } from "@/hooks/use-fade-in"

export function HeroSection() {
  const titleFade = useFadeIn({ delay: 200 })
  const subtitleFade = useFadeIn({ delay: 400 })
  const buttonFade = useFadeIn({ delay: 600 })
  const sliderFade = useFadeIn({ delay: 800 })

  const scrollToDemo = () => {
    const element = document.getElementById("cta")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col bg-section">
      {/* Centered headline and CTA section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12 lg:py-20 flex-1 flex flex-col">
        <div className="text-center space-y-4 sm:space-y-6 lg:space-y-8 sm:mb-8 lg:mb-12 mb-4">
          <div className="space-y-2 sm:space-y-3 lg:space-y-4">
            <h1
              ref={titleFade.ref}
              style={titleFade.fadeInStyle}
              className="text-balance leading-tight text-foreground sm:mt-8 lg:mt-20 font-semibold px-0 w-auto sm:text-3xl lg:text-4xl text-2xl mt-28"
            >
              Double Your{" "}
              <span className="text-primary">
                <TypingAnimation
                  words={[
                    "Extensions",
                    "Conservatories",
                    "Orangeries",
                    "Verandas",
                    "Outhouses",
                    "Garden Rooms",
                  ]}
                />
              </span>{" "}
              <br className="sm:hidden" />
              Sales
              <br />
              with AI-Powered Visualisations
            </h1>
            <p
              ref={subtitleFade.ref}
              style={subtitleFade.fadeInStyle}
              className="text-pretty max-w-3xl mx-auto text-foreground px-2 sm:px-0 font-extralight sm:text-base gap-0 my-4 text-xs"
            >
              Turn hesitation into instant desire. Show clients exactly how
              their dream extension looks on their home and close more deals on
              the spot.
            </p>
          </div>
          <div
            ref={buttonFade.ref}
            style={buttonFade.fadeInStyle}
            className="flex justify-center"
          >
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 sm:px-6 lg:px-8 py-2 sm:py-2 lg:py-3 text-xs sm:text-sm lg:text-base mb-0 mt-3.5"
              onClick={scrollToDemo}
            >
              Book a Demo
            </Button>
          </div>
        </div>

        {/* Full-width before/after slider */}
        <div
          ref={sliderFade.ref}
          style={sliderFade.fadeInStyle}
          className="flex flex-col items-center justify-center py-0 px-0 mt-8 mb-0"
        >
          <div className="w-full max-w-4xl px-2 sm:px-0">
            <p className="text-center text-foreground/70 text-xs sm:text-sm mb-3 font-light">
              Drag the slider to see the transformation
            </p>
            <BeforeAfterSlider
              beforeImage="/images/house-before.png"
              afterImage="/images/house-after.png"
              className="w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] 2xl:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
