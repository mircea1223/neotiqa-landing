"use client"

import { useState, useEffect } from "react"

export function CaseStudy() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedData, setAnimatedData] = useState([
    { name: "Decision Speed", without: 0, with: 0 },
    { name: "Average Project", without: 0, with: 0 },
    { name: "Options Explored", without: 0, with: 0 },
  ])

  const finalData = [
    { name: "Decision Speed", without: 23, with: 70 },
    { name: "Average Project", without: 30, with: 85 },
    { name: "Options Explored", without: 35, with: 96 },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("case-study-chart")
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = Math.min(currentStep / steps, 1)
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)

        setAnimatedData(
          finalData.map((item) => ({
            name: item.name,
            without: Math.round(item.without * easeOutQuart),
            with: Math.round(item.with * easeOutQuart),
          })),
        )

        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  return (
    <>
      <div className="w-full h-px bg-divider"></div>
      <section id="case-study" className="py-12 sm:py-16 lg:py-20 bg-section">
        <div className="container mx-auto sm:px-6 lg:px-8 px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-balance sm:px-8 lg:px-44 sm:text-3xl lg:text-4xl font-semibold text-sidebar-ring text-2xl text-left px-0 mt-0 py-0 gap-0 mb-0">
              {"Overcoming Client Hesitation with \nAI Visualization"}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 sm:gap-12 items-center mb-8 sm:mb-16">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-pretty sm:text-base text-foreground mx-2 px-0 mt-0 text-xs ml-0 pr-1.5 pl-0 mb-0.5 pb-0 font-light">
                Clients often hesitate to approve extensions because they can't visualize the final result on their own
                home. This uncertainty slows decisions, limits project scope, and reduces conversion potential.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">Before</span>
                <img
                  src="/traditional-house-exterior-needing-extension.jpg"
                  alt="House before extension"
                  className="w-full sm:h-40 lg:h-48 object-cover rounded-lg h-40"
                />
              </div>
              <div className="space-y-2">
                <span className="text-xs sm:text-sm font-medium text-chart-5">After</span>
                <img
                  src="/same-house-with-stunning-modern-extension-ai-gener.jpg"
                  alt="House with AI-generated extension"
                  className="sm:h-40 lg:h-48 object-cover rounded-lg h-40 w-full"
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 items-center gap-4 sm:gap-12">
            <div
              id="case-study-chart"
              className="bg-card rounded-lg p-2 sm:p-4 border border-border sm:py-4 mt-4 sm:mt-16 pb-6"
            >
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-6 mt-2">
                <div className="space-y-2 sm:space-y-4">
                  <h5 className="text-xs sm:text-base font-medium text-center text-chart-1">Before NEOTIQA</h5>
                  {animatedData.map((item, index) => (
                    <div key={`without-${index}`} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground">{item.name}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 sm:h-4 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${item.without}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <h5 className="text-xs sm:text-base font-medium text-center text-primary">After NEOTIQA</h5>
                  {animatedData.map((item, index) => (
                    <div key={`with-${index}`} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-muted-foreground">{item.name}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 sm:h-4 overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${item.with}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-6 mt-4 sm:mt-0">
              <p className="sm:text-lg text-pretty text-foreground text-base">
                By integrating AI-generated visualizations, businesses will:
              </p>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="font-thin text-foreground text-xs sm:text-base">
                    Accelerate approvals by making designs instantly clear
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="font-thin text-foreground text-xs sm:text-base">
                    Encourage larger, more ambitious projects
                  </span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                  <span className="font-thin text-foreground text-xs sm:text-base">
                    Allow clients to explore multiple options quickly, reducing uncertainty and revisions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
