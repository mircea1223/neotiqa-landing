"use client"

import type React from "react"
import { useState, useRef, useCallback } from "react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, className = "" }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    [isDragging],
  )

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging || !containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
      setSliderPosition(percentage)
    },
    [isDragging],
  )

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg cursor-col-resize select-none ${className}`}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* After image (background) */}
      <img
        src={afterImage || "/placeholder.svg"}
        alt="House with extension"
        className="w-full h-full object-cover"
        draggable={false}
        onError={(e) => {
          console.log("[v0] After image failed to load:", afterImage)
          e.currentTarget.src = "/house-with-extension.jpg"
        }}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage || "/placeholder.svg"}
          alt="House before extension"
          className="w-full h-full object-cover"
          draggable={false}
          onError={(e) => {
            console.log("[v0] Before image failed to load:", beforeImage)
            e.currentTarget.src = "/house-without-extension.jpg"
          }}
        />
      </div>

      {/* Slider line and handle */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-foreground shadow-lg" style={{ left: `${sliderPosition}%` }}>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-background border-2 border-foreground rounded-full shadow-lg flex items-center justify-center cursor-col-resize touch-manipulation"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="w-0.5 h-3 sm:w-1 sm:h-4 bg-gray-400 rounded-full mx-0.5"></div>
          <div className="w-0.5 h-3 sm:w-1 sm:h-4 bg-gray-400 rounded-full mx-0.5"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-black/70 text-white px-2 py-1 rounded text-xs sm:text-sm font-medium">
        Before
      </div>
      <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/70 text-white px-2 py-1 rounded text-xs sm:text-sm font-medium">
        After
      </div>
    </div>
  )
}
