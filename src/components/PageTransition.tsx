"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Premium Page Transition System
 * 
 * Provides smooth, sophisticated page transitions with:
 * - Fade + slide animations (fade in from bottom, fade out to top)
 * - Spring physics for natural, fluid motion
 * - Exit animations for seamless page changes
 * - Prevents layout shift during transitions
 * 
 * Impact: Creates a $50k+ website feel with smooth navigation
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ 
          opacity: 0, 
          y: 24,
          scale: 0.98
        }}
        animate={{ 
          opacity: 1, 
          y: 0,
          scale: 1
        }}
        exit={{ 
          opacity: 0, 
          y: -24,
          scale: 0.98
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 24,
          mass: 0.8,
          opacity: { duration: 0.35 },
          scale: { duration: 0.4 }
        }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
