"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { galleryImages } from "@/data/gallery";
import { GalleryLightbox } from "./GalleryLightbox";
import { SkeletonGalleryGrid } from "@/components/ui/skeleton";
import { StandardCard } from "@/components/ui/nc-card";

// Separate component for each gallery item to properly use hooks
const GalleryItem = ({ 
  image, 
  index, 
  hoveredIndex, 
  loadedImages, 
  onHoverEnter, 
  onHoverLeave, 
  onImageLoad, 
  onClick 
}: {
  image: { src: string; alt: string };
  index: number;
  hoveredIndex: number | null;
  loadedImages: Set<number>;
  onHoverEnter: () => void;
  onHoverLeave: () => void;
  onImageLoad: () => void;
  onClick: () => void;
}) => {
  const imageRef = useRef(null);
  const isInView = useInView(imageRef, { once: true, margin: "-100px" });
  const isHovered = hoveredIndex === index;
  
  return (
    <motion.div
      ref={imageRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        transition: {
          duration: 0.6,
          delay: (index % 3) * 0.1,
          ease: [0.22, 1, 0.36, 1]
        }
      } : {}}
    >
      {/* PREMIUM DOUBLE-BORDER FRAME */}
      <div className="p-1.5 bg-gradient-to-br from-orange-400 via-primary to-orange-600 rounded-[20px] shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
        <div className="p-1 bg-white/95 rounded-[16px]">
          <StandardCard
            onClick={onClick}
            className="group overflow-hidden cursor-pointer p-0 border-2 border-white/50 hover:border-orange-300/80 transition-all duration-500 backdrop-blur-xl bg-white/90 hover:bg-white"
            onMouseEnter={onHoverEnter}
            onMouseLeave={onHoverLeave}
          >
            <div className="relative w-full overflow-hidden rounded-t-xl">
              {/* Loading Skeleton */}
              {!loadedImages.has(index) && (
                <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-100 to-slate-200 animate-shimmer" />
              )}
              
              {/* IMAGE with Ken Burns effect (zoom + pan) */}
              <motion.div
                className="relative aspect-[768/463]"
                animate={isHovered ? {
                  scale: 1.15,
                  x: (Math.random() - 0.5) * 20,
                  y: (Math.random() - 0.5) * 20
                } : { scale: 1, x: 0, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    isHovered ? 'brightness-110 contrast-105' : 'brightness-100'
                  } ${
                    loadedImages.has(index) ? 'blur-0' : 'blur-md'
                  }`}
                  sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                  onLoad={onImageLoad}
                />
              </motion.div>
              
              {/* GRADIENT OVERLAY - Dark bottom → Transparent top */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
              
              {/* Side gradient for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-orange-500/20 via-transparent to-orange-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Hover Icon - Premium glass button */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <motion.span 
                  className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/95 backdrop-blur-xl border-2 border-orange-400/50 text-primary shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </motion.span>
              </div>
              
              {/* Shine effect on hover */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                animate={isHovered ? {
                  background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)`
                } : {}}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
            </div>
            
            {/* Image Caption with premium styling */}
            <div className="p-4 bg-gradient-to-b from-white/95 to-white/90">
              <p className="text-xs font-medium text-slate-700 leading-relaxed line-clamp-2">
                {image.alt}
              </p>
            </div>
          </StandardCard>
        </div>
      </div>
    </motion.div>
  );
};

const GalleryGrid = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  // Simulate loading state for gallery images
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set([...prev, index]));
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  if (isLoading) {
    return <SkeletonGalleryGrid />;
  }

  return (
    <>
      <div className="bg-slate-50 rounded-3xl p-6 md:p-8" data-gallery-grid>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={image.src} data-gallery-item>
              <GalleryItem
                image={image}
                index={index}
                hoveredIndex={hoveredIndex}
                loadedImages={loadedImages}
                onHoverEnter={() => setHoveredIndex(index)}
                onHoverLeave={() => setHoveredIndex(null)}
                onImageLoad={() => handleImageLoad(index)}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </div>
        
        {/* Gallery Stats */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            {galleryImages.length} photos showcasing our sushi, Thai cuisine, and restaurant atmosphere
          </p>
        </div>
      </div>

      {/* Lightbox */}
      <GalleryLightbox
        images={galleryImages}
        activeIndex={activeIndex}
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
};

export default GalleryGrid;