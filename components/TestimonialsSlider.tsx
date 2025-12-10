'use client'

import { useState, useEffect } from 'react'

interface Testimonial {
  name: string
  goal: string
  quote: string
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(3)

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (typeof window !== 'undefined') {
        const width = window.innerWidth
        if (width < 640) {
          setItemsPerView(1) // Mobile: 1 item
        } else if (width < 1280) {
          setItemsPerView(2) // Tablet: 2 items
        } else {
          setItemsPerView(3) // Desktop: 3 items
        }
      }
    }

    // Set initial value
    updateItemsPerView()
    
    // Add resize listener
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  // Helper function to get max index (prevents negative values)
  const getMaxIndex = () => Math.max(testimonials.length - itemsPerView, 0)

  // Clamp currentIndex to valid bounds whenever itemsPerView changes
  useEffect(() => {
    const maxIndex = Math.max(testimonials.length - itemsPerView, 0)
    setCurrentIndex((prev) => Math.min(Math.max(prev, 0), maxIndex))
  }, [itemsPerView, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = getMaxIndex()
      if (maxIndex === 0) return 0 // No sliding needed
      if (prev >= maxIndex) {
        return 0 // Loop back to start
      }
      return Math.min(prev + 1, maxIndex)
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = getMaxIndex()
      if (maxIndex === 0) return 0 // No sliding needed
      if (prev <= 0) {
        return maxIndex // Loop to end
      }
      return Math.max(prev - 1, 0)
    })
  }

  const goToSlide = (slideIndex: number) => {
    const maxIndex = getMaxIndex()
    const clampedIndex = Math.min(Math.max(slideIndex, 0), maxIndex)
    setCurrentIndex(clampedIndex)
  }

  // Calculate the width percentage for each item (100% / itemsPerView)
  const itemWidthPercent = 100 / itemsPerView

  // Ensure we have testimonials
  if (!testimonials || testimonials.length === 0) {
    return <div className="text-center text-gray-400">אין המלצות להצגה</div>
  }

  // FIX #3: Static grid if all testimonials fit on screen
  const maxIndex = getMaxIndex()
  if (testimonials.length <= itemsPerView || maxIndex === 0) {
    return (
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 transition-shadow border border-slate-700 h-full flex flex-col"
          >
            <div className="mb-4">
              <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
              <p className="text-sm text-accent">{testimonial.goal}</p>
            </div>
            <p className="text-gray-200 leading-relaxed italic flex-grow">
              "{testimonial.quote}"
            </p>
          </div>
        ))}
      </div>
    )
  }

  const totalSlides = Math.ceil(testimonials.length / itemsPerView)
  const currentSlide = Math.floor(currentIndex / itemsPerView)

  // FIX #1: Use POSITIVE translation for RTL (moves RIGHT as index increases)
  const translateX = currentIndex * itemWidthPercent

  return (
    <div className="relative px-12">
      {/* Slider Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${translateX}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-3"
              style={{ 
                width: `${itemWidthPercent}%`,
                minWidth: `calc(100% / ${itemsPerView})`,
              }}
            >
              <div className="bg-slate-900 rounded-xl p-6 shadow-lg hover:shadow-blue-900/30 transition-shadow border border-slate-700 h-full flex flex-col">
                <div className="mb-4">
                  <h3 className="font-bold text-lg text-white">{testimonial.name}</h3>
                  {/* <p className="text-sm text-accent">{testimonial.goal}</p> */}
                </div>
                <p className="text-gray-200 leading-relaxed italic flex-grow">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Fixed for RTL (swapped handlers) */}
      <button
        onClick={nextSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-accent text-white rounded-full p-3 shadow-lg transition-all z-10 border border-slate-700"
        aria-label="Next testimonials"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={prevSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-slate-800 hover:bg-accent text-white rounded-full p-3 shadow-lg transition-all z-10 border border-slate-700"
        aria-label="Previous testimonials"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator - FIX #4: Direct index mapping for RTL */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => {
          const slideStartIndex = index * itemsPerView
          const isActive = currentIndex >= slideStartIndex && currentIndex < slideStartIndex + itemsPerView
          return (
            <button
              key={index}
              onClick={() => goToSlide(slideStartIndex)}
              className={`h-2 rounded-full transition-all ${
                isActive
                  ? 'bg-accent w-8'
                  : 'bg-slate-600 w-2 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          )
        })}
      </div>
    </div>
  )
}
