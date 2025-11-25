"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StandardCard } from "@/components/ui/nc-card";

interface MenuItemCardProps {
  name: string;
  price: string;
  description?: string;
  spicy?: boolean;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  ingredients?: string[];
  calories?: number;
  image?: string;
}

export default function Enhanced3DMenuCard({ 
  name, 
  price, 
  description, 
  spicy, 
  vegetarian, 
  vegan, 
  glutenFree,
  ingredients = ["Fresh ingredients", "Chef's special sauce", "Premium toppings"],
  calories = 350,
  image = "/images/Gallery/10-768x512.jpg"
}: MenuItemCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div
      className="group perspective-1000 h-[400px] md:h-[450px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); }}
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
            <StandardCard className="overflow-hidden border-2 border-white/50 hover:border-orange-300/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 bg-white/90 backdrop-blur-2xl">
              <div className="relative h-full">
                {/* Image Section with Premium Treatments */}
                <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50">
                  {/* Loading skeleton */}
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 animate-shimmer" />
                  )}
                  
                  {/* Image with hover zoom + brightness */}
                  <motion.img
                    src={image}
                    alt={name}
                    className={`w-full h-full object-cover transition-all duration-700 ${
                      isHovered ? 'brightness-110 contrast-105' : 'brightness-100'
                    } ${
                      imageLoaded ? 'blur-0 opacity-100' : 'blur-md opacity-0'
                    }`}
                    animate={{ scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onLoad={() => setImageLoaded(true)}
                  />
                  
                  {/* GRADIENT OVERLAY - Dark bottom → Transparent top */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />
              
              {/* Shine Effect */}
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

              {/* Spicy Badge */}
              {spicy && (
                <div className="absolute top-3 right-3 flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      initial={{ rotate: 0, scale: 1 }}
                      animate={isHovered ? {
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.2, 1, 1.2, 1]
                      } : {}}
                      transition={{ delay: i * 0.1, duration: 0.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                    >
                      🌶️
                    </motion.span>
                  ))}
                </div>
              )}

              {/* Flip Hint */}
              <motion.div
                className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0 }}
                style={{ display: 'none' }}
              >
                Click to see ingredients
              </motion.div>
            </div>

            {/* Content Section - GLASS OVERLAY */}
            <div className="p-5 space-y-3 bg-gradient-to-b from-white/80 via-white/70 to-white/60 backdrop-blur-md">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground leading-tight flex-1">
                  {name}
                </h3>
                <span className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
                  {price}
                </span>
              </div>

              {description && (
                <p className="text-sm font-medium text-muted-foreground leading-relaxed line-clamp-2">
                  {description}
                </p>
              )}

              {/* Tags */}
              {(vegetarian || vegan || glutenFree) && (
                <div className="flex flex-wrap gap-2">
                  {vegetarian && (
                    <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-medium">
                      Vegetarian
                    </span>
                  )}
                  {vegan && (
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
                      Vegan
                    </span>
                  )}
                  {glutenFree && (
                    <span className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">
                      Gluten Free
                    </span>
                  )}
                </div>
              )}

              {/* Quick Add Button - Slides up */}
              <motion.button
                className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                initial={{ y: 20, opacity: 0 }}
                animate={{ 
                  y: isHovered ? 0 : 20,
                  opacity: isHovered ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                Quick Add to Order
              </motion.button>
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
