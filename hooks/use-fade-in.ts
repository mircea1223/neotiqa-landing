"use client"

import { useEffect, useRef, useState } from "react"

interface UseFadeInOptions {
  threshold?: number
  delay?: number
  duration?: number
}

export function useFadeIn(options: UseFadeInOptions = {}) {
  const { threshold = 0.1, delay = 0, duration = 600 } = options
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [threshold, delay])

  const fadeInStyle = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(20px)",
    transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
  }

  return { ref, isVisible, fadeInStyle }
}
