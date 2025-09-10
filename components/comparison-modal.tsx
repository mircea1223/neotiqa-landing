"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { BeforeAfterSlider } from "./before-after-slider"

interface ComparisonModalProps {
  isOpen: boolean
  onClose: () => void
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export function ComparisonModal({ 
  isOpen, 
  onClose, 
  beforeImage, 
  afterImage, 
  beforeAlt, 
  afterAlt 
}: ComparisonModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className={`relative w-full h-full max-w-7xl max-h-[90vh] mx-4 flex flex-col justify-center transition-all duration-500 ease-out ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm text-foreground hover:text-primary hover:bg-background/90 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
          aria-label="Close comparison"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Title */}
        <div className="text-center mb-6 px-4">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-2">
            AI Visualisation Comparison
          </h3>
          <p className="text-white/70 text-sm sm:text-base">
            Drag the slider to see the complete transformation
          </p>
        </div>

        {/* Comparison Slider */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="w-full max-w-5xl">
            <BeforeAfterSlider
              beforeImage={beforeImage}
              afterImage={afterImage}
              className="w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] shadow-2xl"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-6 px-4">
          <p className="text-white/50 text-xs sm:text-sm">
            Press ESC to close • Click outside to close
          </p>
        </div>
      </div>
    </div>
  )
}