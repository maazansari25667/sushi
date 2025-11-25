/**
 * CTA Design System - Usage Examples
 * 
 * This file demonstrates how to use the CTA Design System with Button and CtaButton components.
 * These examples show the recommended patterns for implementing CTAs across the restaurant website.
 * 
 * DO NOT import this file in production code - it's for reference only.
 */

import { Button, CtaButton } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

/**
 * Example 1: Primary CTAs (Main Conversion Actions)
 * Use for: Order Online, Reserve Table, Get Directions
 */
export function PrimaryCtaExamples() {
  return (
    <div className="flex flex-col gap-4">
      {/* Method A: Using Button with variant="primary" */}
      <Button variant="primary" size="lg">
        Order Online
        <Icons.externalLink className="ml-2 h-4 w-4" />
      </Button>

      {/* Method B: Using CtaButton with ctaIntent="primary" */}
      <CtaButton ctaIntent="primary" size="lg">
        Reserve a Table
        <Icons.calendar className="ml-2 h-4 w-4" />
      </CtaButton>

      {/* Link wrapper pattern for external URLs */}
      <a
        href="https://qopla.com/restaurant/nomi-sushi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="primary" size="lg">
          Order Now
          <Icons.externalLink className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}

/**
 * Example 2: Secondary CTAs (Supporting Actions)
 * Use for: View Menu, Explore Gallery, Learn More
 */
export function SecondaryCtaExamples() {
  return (
    <div className="flex flex-col gap-4">
      {/* Method A: Using Button with variant="secondary" */}
      <Button variant="secondary" size="default">
        View Menu
        <Icons.arrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Method B: Using CtaButton with ctaIntent="secondary" */}
      <CtaButton ctaIntent="secondary">
        Explore Gallery
        <Icons.arrowRight className="ml-2 h-4 w-4" />
      </CtaButton>

      {/* Internal navigation pattern */}
      <a href="/menu">
        <Button variant="secondary">
          Browse Our Menu
          <Icons.arrowRight className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  );
}

/**
 * Example 3: Ghost CTAs (Low-Emphasis Utility Actions)
 * Use for: Call Us, Download Menu, Share
 */
export function GhostCtaExamples() {
  return (
    <div className="flex flex-col gap-4">
      {/* Method A: Using Button with variant="ghost" */}
      <Button variant="ghost">
        <Icons.phone className="mr-2 h-4 w-4" />
        Call Us
      </Button>

      {/* Method B: Using CtaButton with ctaIntent="ghost" */}
      <CtaButton ctaIntent="ghost">
        <Icons.download className="mr-2 h-4 w-4" />
        Download Menu
      </CtaButton>

      {/* Clickable phone link pattern */}
      <a href="tel:+46123456789">
        <Button variant="ghost">
          <Icons.phone className="mr-2 h-4 w-4" />
          +46 123 456 789
        </Button>
      </a>
    </div>
  );
}

/**
 * Example 4: Mixed CTA Layout (Hero Section Pattern)
 * Common pattern: Primary + Secondary CTAs side-by-side
 */
export function HeroCtaPattern() {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Primary CTA - conversion focus */}
      <CtaButton ctaIntent="primary" size="lg">
        Order Online
        <Icons.externalLink className="ml-2 h-4 w-4" />
      </CtaButton>

      {/* Secondary CTA - exploration */}
      <CtaButton ctaIntent="secondary" size="lg">
        View Menu
        <Icons.arrowRight className="ml-2 h-4 w-4" />
      </CtaButton>
    </div>
  );
}

/**
 * Example 5: Contact CTAs (Multiple Contact Methods)
 * Pattern for contact page or footer
 */
export function ContactCtaPattern() {
  return (
    <div className="flex flex-col gap-3 md:flex-row">
      {/* Primary: Order online */}
      <Button variant="primary" size="default">
        Order Online
        <Icons.externalLink className="ml-2 h-4 w-4" />
      </Button>

      {/* Ghost: Phone */}
      <a href="tel:+46123456789">
        <Button variant="ghost">
          <Icons.phone className="mr-2 h-4 w-4" />
          Call Us
        </Button>
      </a>

      {/* Ghost: Directions */}
      <a
        href="https://maps.google.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="ghost">
          <Icons.mapPin className="mr-2 h-4 w-4" />
          Get Directions
        </Button>
      </a>
    </div>
  );
}

/**
 * Example 6: Size Variations
 * Demonstrates when to use different sizes
 */
export function SizeVariations() {
  return (
    <div className="flex flex-col gap-4">
      {/* Large: Hero, Navbar main CTA */}
      <Button variant="primary" size="lg">
        Order Online (Hero/Navbar)
        <Icons.externalLink className="ml-2 h-4 w-4" />
      </Button>

      {/* Default: Content CTAs, cards */}
      <Button variant="primary" size="default">
        Order Online (Content)
        <Icons.externalLink className="ml-2 h-4 w-4" />
      </Button>

      {/* Small: Compact layouts, mobile */}
      <Button variant="primary" size="sm">
        Order (Compact)
        <Icons.externalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}

/**
 * Example 7: Icon Positioning
 * Shows left vs right icon placement
 */
export function IconPositioning() {
  return (
    <div className="flex flex-col gap-4">
      {/* Icon on right (navigation/forward action) */}
      <Button variant="secondary">
        View Menu
        <Icons.arrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Icon on left (utility/descriptive action) */}
      <Button variant="ghost">
        <Icons.phone className="mr-2 h-4 w-4" />
        Call Us
      </Button>

      {/* Icon only (compact) */}
      <Button variant="ghost" size="icon">
        <Icons.search className="h-4 w-4" />
      </Button>
    </div>
  );
}
