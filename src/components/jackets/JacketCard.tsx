"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { StandardCard } from "@/components/ui/nc-card";
import { Button } from "@/components/ui/button";
import type { JacketItem } from "@/data/jackets";

interface JacketCardProps {
  jacket: JacketItem;
}

/**
 * JacketCard - Premium clothing product card with 3D hover effects
 * 
 * Reuses the visual quality and interaction patterns from Enhanced3DMenuCard,
 * adapted for fashion products with clothing-specific badges and metadata.
 * 
 * Features:
 * - 3D tilt effect on hover with mouse tracking
 * - Premium double-border frame with gradient
 * - Discount badge for sale items
 * - "Nyhet" (New) and "Limited" badges
 * - Brand and product name hierarchy
 * - Responsive design for mobile → desktop
 * - Next.js Image optimization
 * - Swedish alt text for accessibility
 */
export default function JacketCard({ jacket }: JacketCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  // Calculate discount if exists
  const hasDiscount = jacket.originalPriceSek && jacket.originalPriceSek > jacket.priceSek;
  const discountAmount = hasDiscount 
    ? jacket.discountPercentage || Math.round(((jacket.originalPriceSek! - jacket.priceSek) / jacket.originalPriceSek!) * 100)
    : 0;

  // Format price in Swedish style (space as thousand separator)
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div
      className="group perspective-1000 h-[420px] md:h-[460px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{
          rotateX: isHovered ? (mousePosition.y - 50) / 15 : 0,
          rotateY: isHovered ? (mousePosition.x - 50) / 15 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {/* PREMIUM DOUBLE-BORDER FRAME */}
        <div className="p-1.5 bg-gradient-to-br from-orange-400 via-primary to-orange-600 rounded-[24px] shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
          <div className="p-1 bg-white/95 rounded-[20px]">
            <StandardCard className="overflow-hidden border-2 border-white/50 hover:border-orange-300/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-white/90 backdrop-blur-2xl h-full">
              <div className="relative h-full flex flex-col">
                {/* Image Section with Premium Treatments */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                  {/* Loading skeleton */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 animate-pulse" />
                  )}
                  
                  {/* Product Image with hover zoom */}
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={jacket.imagePath}
                      alt={`${jacket.brand} ${jacket.name}`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-all duration-700 ${
                        isHovered ? 'brightness-110 contrast-105' : 'brightness-100'
                      } ${
                        imageLoaded ? 'blur-0 opacity-100' : 'blur-md opacity-0'
                      }`}
                      onLoad={() => setImageLoaded(true)}
                    />
                  </motion.div>
                  
                  {/* GRADIENT OVERLAY - Dark bottom → Transparent top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
              
                  {/* Shine Effect on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        className="absolute inset-0 opacity-40"
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: 0.4,
                          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.8) 0%, transparent 50%)`
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Badges - Top Right */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    {/* Discount Badge */}
                    {hasDiscount && (
                      <motion.div
                        className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        initial={{ scale: 0, rotate: -12 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15 }}
                      >
                        -{discountAmount}%
                      </motion.div>
                    )}

                    {/* New Badge */}
                    {jacket.isNew && (
                      <motion.div
                        className="bg-emerald-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        initial={{ scale: 0, rotate: 12 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.05 }}
                      >
                        Nyhet
                      </motion.div>
                    )}

                    {/* Limited Badge */}
                    {jacket.isLimited && (
                      <motion.div
                        className="bg-amber-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                        initial={{ scale: 0, rotate: -12 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.1 }}
                      >
                        Limited
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Content Section - GLASS OVERLAY */}
                <div className="flex-1 p-5 space-y-3 bg-gradient-to-b from-white/80 via-white/70 to-white/60 backdrop-blur-md flex flex-col">
                  {/* Brand - Small uppercase */}
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                    {jacket.brand}
                  </div>

                  {/* Product Name */}
                  <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground leading-tight line-clamp-2 flex-1">
                    {jacket.name}
                  </h3>

                  {/* Price Section */}
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      {/* Current Price */}
                      <span className="text-xl md:text-2xl font-bold text-primary">
                        {formatPrice(jacket.priceSek)} kr
                      </span>

                      {/* Original Price (if discounted) */}
                      {hasDiscount && (
                        <span className="text-sm text-muted-foreground line-through">
                          {formatPrice(jacket.originalPriceSek!)} kr
                        </span>
                      )}
                    </div>

                    {/* Color tag */}
                    {jacket.color && (
                      <div className="text-xs text-muted-foreground">
                        Färg: {jacket.color}
                      </div>
                    )}
                  </div>

                  {/* CTA Button - Slides up on hover */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: isHovered ? 0 : 20,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="w-full pt-2"
                    style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
                  >
                    <Button
                      asChild
                      className="w-full rounded-lg bg-primary hover:bg-primary/90 text-white"
                      size="default"
                    >
                      <Link 
                        href={`/jackets/${jacket.id}`}
                        className="flex w-full h-full items-center justify-center gap-2 px-4 py-2"
                      >
                        <span className="font-semibold">Visa detaljer</span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </StandardCard>
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
