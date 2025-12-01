// Nomi Card System
// ----------------
// This file defines higher-level card variants on top of shadcn's <Card>.
// Use these to keep card styling consistent across the site:
//
// - NomiCard (variant="standard" | "highlight")
// - StandardCard: default content surfaces (menus, grids, info boxes)
// - HighlightCard: emphasis / CTA surfaces (hero image card, strong CTAs)
//
// Standard card:
//   rounded-3xl, border, bg-card/95, soft shadow, hover lift
//
// Highlight card:
//   same base + subtle gradient and stronger shadow for emphasis.

import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NomiCardVariant = "standard" | "highlight";

interface NomiCardProps extends React.ComponentProps<typeof Card> {
  variant?: NomiCardVariant;
}

/**
 * NomiCard - Core card component with variant support
 * 
 * A unified card system for NordicWardrobe that provides consistent
 * styling across all card-based UI elements (product cards, galleries, info boxes, etc.)
 * 
 * @param variant - "standard" (default content) or "highlight" (emphasis/CTA)
 * @param className - Additional Tailwind classes to merge
 * @param props - All standard Card props (children, etc.)
 * 
 * @example
 * // Standard content card
 * <NomiCard variant="standard">
 *   <CardContent>Your content</CardContent>
 * </NomiCard>
 * 
 * @example
 * // Highlight card with gradient
 * <NomiCard variant="highlight">
 *   <CardContent>Important CTA</CardContent>
 * </NomiCard>
 */
export function NomiCard({
  variant = "standard",
  className,
  ...props
}: NomiCardProps) {
  // Base styles shared by all card variants - GLASS-MORPHISM SYSTEM
  const baseClasses =
    "rounded-3xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] " +
    "transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] " +
    "hover:border-white/40 hover:bg-white/70";

  // Additional styles for highlight variant - ENHANCED GLASS
  const highlightClasses =
    "bg-gradient-to-br from-white/70 via-white/60 to-primary/10 shadow-[0_12px_48px_rgba(251,146,60,0.15)] " +
    "border-primary/20 hover:border-primary/30 hover:shadow-[0_24px_72px_rgba(251,146,60,0.2)]";

  // Apply variant-specific classes
  const variantClasses = variant === "highlight" ? highlightClasses : "";

  return (
    <Card
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    />
  );
}

/**
 * StandardCard - Convenience wrapper for standard variant
 * 
 * Use this for default content surfaces like menu grids, info boxes,
 * gallery tiles, and general content containers.
 * 
 * Features:
 * - Rounded corners (3xl)
 * - Subtle border and shadow
 * - Smooth hover lift effect
 * - Semi-transparent background
 * 
 * @example
 * <StandardCard>
 *   <CardContent>
 *     <h3>Menu Item</h3>
 *     <p>Description...</p>
 *   </CardContent>
 * </StandardCard>
 */
export function StandardCard({
  className,
  ...props
}: React.ComponentProps<typeof NomiCard>) {
  return (
    <NomiCard
      variant="standard"
      className={className}
      {...props}
    />
  );
}

/**
 * HighlightCard - Convenience wrapper for highlight variant
 * 
 * Use this for emphasis surfaces like featured content, CTAs,
 * hero sections, or any element that needs extra visual weight.
 * 
 * Features:
 * - All StandardCard features
 * - Subtle gradient background (card → primary tint)
 * - Stronger shadow for depth
 * - Enhanced visual prominence
 * 
 * @example
 * <HighlightCard>
 *   <CardContent>
 *     <h2>Special Offer!</h2>
 *     <Button>Order Now</Button>
 *   </CardContent>
 * </HighlightCard>
 */
export function HighlightCard({
  className,
  ...props
}: React.ComponentProps<typeof NomiCard>) {
  return (
    <NomiCard
      variant="highlight"
      className={className}
      {...props}
    />
  );
}
