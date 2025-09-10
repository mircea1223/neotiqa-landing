"use client"

import { useEffect, useRef, useState } from "react"

export function ImpactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0])
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    { value: 17, label: "More Approvals", suffix: "%" },
    { value: 27, label: "Larger Average Project Size", suffix: "%" },
    { value: 41, label: "Faster Decision-Making", suffix: "%" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(false)
          setAnimatedValues([0, 0, 0])

          // Small delay to ensure reset is visible
          setTimeout(() => {
            setIsVisible(true)
            stats.forEach((stat, index) => {
              let start = 0
              const end = stat.value
              const duration = 2000
              const increment = end / (duration / 16)

              const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                  start = end
                  clearInterval(timer)
                }
                setAnimatedValues((prev) => {
                  const newValues = [...prev]
                  newValues[index] = Math.round(start)
                  return newValues
                })
              }, 16)
            })
          }, 100)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="w-full h-px bg-divider"></div>
      <section id="impact" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="sm:text-3xl lg:text-4xl font-bold text-balance mb-4 text-foreground text-2xl">
              The <span className="text-primary">Numbers</span> That Matter
            </h2>
            <p className="max-w-2xl mx-auto text-pretty sm:text-base text-foreground px-4 sm:px-0 text-xs font-light">
              Real impact results from using our AI-Powered tool.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-border"
                      opacity="0.6"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-primary"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 50}`}
                      strokeDashoffset={
                        isVisible ? `${2 * Math.PI * 50 * (1 - stat.value / 100)}` : `${2 * Math.PI * 50}`
                      }
                      style={{
                        transition: "stroke-dashoffset 2s ease-in-out",
                        transitionDelay: `${index * 0.3}s`,
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary">
                      {animatedValues[index]}
                      {stat.suffix}
                    </span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-balance px-2 sm:px-0 text-foreground">
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
