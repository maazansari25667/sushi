"use client";

import { useState } from "react";
import { DishImageFrame } from "@/components/shared/DishImageFrame";

export interface DishCarouselProps {
  images: { src: string; alt: string }[];
  className?: string;
}

/**
 * Carousel specifically for dish/food images.
 * Uses DishImageFrame to enforce 768×463 aspect ratio.
 * Manual navigation only (arrows + dots).
 */
export function DishCarousel({ 
  images, 
  className = "" 
}: DishCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  return (
    <section 
      className={`relative ${className}`}
      aria-label="Dish image carousel"
      role="region"
    >
      {/* Dish Image with standardized aspect ratio */}
      <div className="relative w-full overflow-hidden rounded-2xl">
        <DishImageFrame
          src={currentImage.src}
          alt={currentImage.alt}
          priority={currentIndex === 0}
        />
      </div>

      {/* Navigation Arrows - Only show if more than 1 image */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-lg shadow-md transition-all duration-200 motion-safe:hover:-translate-y-1 hover:shadow-xl active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Previous image"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-lg shadow-md transition-all duration-200 motion-safe:hover:-translate-y-1 hover:shadow-xl active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            aria-label="Next image"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {images.map((_, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1} of ${images.length}`}
                aria-current={index === currentIndex ? "true" : undefined}
                className={`h-2 rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                  index === currentIndex
                    ? "w-4 bg-primary"
                    : "w-2 bg-muted hover:bg-primary/50 motion-safe:hover:scale-110"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 right-4 z-10 bg-foreground/80 backdrop-blur-sm text-background text-sm font-medium px-4 py-1.5 rounded-full">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </section>
  );
}
