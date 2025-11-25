// Reusable section wrappers for banded page layout:
// - Section: base background (bg-background)
// - SectionMuted: light band section (bg-muted) for alternating stripes
// - SectionHighlight: emphasis band (bg-card) for CTAs / important content
//
// These helpers keep vertical spacing and max-width consistent across pages.
// They will be used across Home, Menu, Gallery, and Contact pages to create
// consistent banded sections with proper visual hierarchy.

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

/**
 * Section - Base section wrapper with default background
 * 
 * Uses bg-background for the main page surface color.
 * Provides consistent vertical padding (py-16) and max-width container.
 * 
 * @example
 * <Section>
 *   <h2>Your Content Here</h2>
 * </Section>
 */
export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("bg-background py-16", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}

/**
 * SectionMuted - Light band section for visual rhythm
 * 
 * Uses bg-muted for subtle alternating section backgrounds.
 * Creates visual separation between content blocks without harsh contrast.
 * Ideal for alternating with Section to create banded page layouts.
 * 
 * @example
 * <SectionMuted>
 *   <h2>Alternate Section</h2>
 * </SectionMuted>
 */
export function SectionMuted({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("bg-muted py-16", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}

/**
 * SectionHighlight - Emphasis band for important content
 * 
 * Uses bg-card (pure white) to create a highlighted content area.
 * Perfect for CTAs, featured content, or key information that needs emphasis.
 * Provides maximum contrast against the base background.
 * 
 * @example
 * <SectionHighlight>
 *   <h2>Special Offer</h2>
 *   <button>Order Now</button>
 * </SectionHighlight>
 */
export function SectionHighlight({ className, children, ...props }: SectionProps) {
  return (
    <section
      className={cn("bg-card py-16", className)}
      {...props}
    >
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
        {children}
      </div>
    </section>
  );
}
