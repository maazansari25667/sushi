/**
 * 🎯 CTA DESIGN SYSTEM - QUICK REFERENCE
 * 
 * Fast lookup for implementing CTAs across the restaurant website.
 * See PART-3.1-CTA-SYSTEM-SUMMARY.md for full documentation.
 * 
 * THIS FILE IS FOR REFERENCE ONLY - DO NOT IMPORT IN PRODUCTION CODE
 */

// This is a reference file showing code examples. Not meant to be compiled.
// Copy patterns from here into your actual components.

export const CTA_REFERENCE = `

// ═══════════════════════════════════════════════════════════════
// 🎨 CTA VARIANTS - WHEN TO USE WHAT
// ═══════════════════════════════════════════════════════════════

/**
 * PRIMARY (variant="primary" or ctaIntent="primary")
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Use for: Order Online, Reserve Table, Get Directions
 * Visual: Solid orange, strong shadow, lift on hover
 * Where: Hero (size="lg"), Navbar (size="lg"), Bottom of menu
 */
<Button variant="primary" size="lg">
  Order Online
  <Icons.externalLink className="ml-2 h-4 w-4" />
</Button>

/**
 * SECONDARY (variant="secondary" or ctaIntent="secondary")
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Use for: View Menu, Explore Gallery, Learn More
 * Visual: Outlined, transparent, subtle hover
 * Where: Hero (paired with primary), Content cards, Supporting actions
 */
<Button variant="secondary">
  View Menu
  <Icons.arrowRight className="ml-2 h-4 w-4" />
</Button>

/**
 * GHOST (variant="ghost" or ctaIntent="ghost")
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * Use for: Call Us, Download Menu, Share
 * Visual: Transparent, minimal, light hover
 * Where: Contact section, Footer, Utility actions
 */
<Button variant="ghost">
  <Icons.phone className="mr-2 h-4 w-4" />
  Call Us
</Button>

// ═══════════════════════════════════════════════════════════════
// 📏 SIZE GUIDE
// ═══════════════════════════════════════════════════════════════

size="lg"      // Hero, Navbar main CTA (h-12, px-8, semibold)
size="default" // Content, Cards, Forms (h-11, px-6, medium)
size="sm"      // Compact, Mobile (h-9, px-4, text-xs)
size="icon"    // Icon-only (h-11 w-11)

// ═══════════════════════════════════════════════════════════════
// 🎯 ICON CHEAT SHEET
// ═══════════════════════════════════════════════════════════════

Icons.phone         // Call Us (left: mr-2)
Icons.externalLink  // Order Online (right: ml-2)
Icons.arrowRight    // View Menu, Navigate (right: ml-2)
Icons.mapPin        // Get Directions (left: mr-2)
Icons.calendar      // Reserve Table (right: ml-2)
Icons.download      // Download Menu (left: mr-2)
Icons.mail          // Email Us (left: mr-2)
Icons.share         // Share (left: mr-2)

// ═══════════════════════════════════════════════════════════════
// 🔥 COMMON PATTERNS (COPY-PASTE READY)
// ═══════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────
// Pattern 1: Hero Dual CTA
// ─────────────────────────────────────────────────────────────
<div className="flex flex-wrap gap-3">
  <CtaButton ctaIntent="primary" size="lg">
    Order Online
    <Icons.externalLink className="ml-2 h-4 w-4" />
  </CtaButton>
  <CtaButton ctaIntent="secondary" size="lg">
    View Menu
    <Icons.arrowRight className="ml-2 h-4 w-4" />
  </CtaButton>
</div>

// ─────────────────────────────────────────────────────────────
// Pattern 2: Navbar Main CTA
// ─────────────────────────────────────────────────────────────
<a href="https://qopla.com/restaurant/nomi-sushi" target="_blank" rel="noopener noreferrer">
  <Button variant="primary" size="lg">
    Order Online
    <Icons.externalLink className="ml-2 h-4 w-4" />
  </Button>
</a>

// ─────────────────────────────────────────────────────────────
// Pattern 3: Contact Methods (3 buttons)
// ─────────────────────────────────────────────────────────────
<div className="flex flex-col gap-3 md:flex-row">
  <a href="https://qopla.com" target="_blank" rel="noopener noreferrer">
    <Button variant="primary">
      Order Online
      <Icons.externalLink className="ml-2 h-4 w-4" />
    </Button>
  </a>
  <a href="tel:+46123456789">
    <Button variant="ghost">
      <Icons.phone className="mr-2 h-4 w-4" />
      Call Us
    </Button>
  </a>
  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
    <Button variant="ghost">
      <Icons.mapPin className="mr-2 h-4 w-4" />
      Get Directions
    </Button>
  </a>
</div>

// ─────────────────────────────────────────────────────────────
// Pattern 4: Menu Bottom CTA
// ─────────────────────────────────────────────────────────────
<div className="text-center mt-12">
  <h3 className="text-2xl font-semibold mb-4">Ready to Order?</h3>
  <Button variant="primary" size="lg">
    Order Online Now
    <Icons.externalLink className="ml-2 h-4 w-4" />
  </Button>
</div>

// ─────────────────────────────────────────────────────────────
// Pattern 5: Contact Page Header CTAs
// ─────────────────────────────────────────────────────────────
<div className="flex flex-wrap gap-3 justify-center">
  <a href="tel:+46123456789">
    <CtaButton ctaIntent="ghost" size="lg">
      <Icons.phone className="mr-2 h-4 w-4" />
      +46 123 456 789
    </CtaButton>
  </a>
  <a href="mailto:info@nomisushi.se">
    <CtaButton ctaIntent="ghost" size="lg">
      <Icons.mail className="mr-2 h-4 w-4" />
      info@nomisushi.se
    </CtaButton>
  </a>
</div>

// ─────────────────────────────────────────────────────────────
// Pattern 6: Footer CTA
// ─────────────────────────────────────────────────────────────
<div className="text-center">
  <p className="text-muted-foreground mb-4">Hungry? Order now!</p>
  <Button variant="primary" size="default">
    Order Online
    <Icons.externalLink className="ml-2 h-4 w-4" />
  </Button>
</div>

// ═══════════════════════════════════════════════════════════════
// ⚡ TIPS & TRICKS
// ═══════════════════════════════════════════════════════════════

// ✅ DO:
// - Use primary for "Order Online" (main conversion)
// - Use secondary for "View Menu" (exploration)
// - Use ghost for "Call Us" (utility)
// - Pair primary + secondary in hero sections
// - Use size="lg" for hero and navbar CTAs
// - Place navigation icons on right (ml-2)
// - Place descriptive icons on left (mr-2)

// ❌ DON'T:
// - Mix multiple primaries side-by-side (creates confusion)
// - Use primary for low-priority actions
// - Forget to add icons to external links
// - Use default sizes in hero sections (use lg)
// - Over-use ghost variant (reserve for utilities)

// ═══════════════════════════════════════════════════════════════
// 🎨 VISUAL HIERARCHY REMINDER
// ═══════════════════════════════════════════════════════════════

// Page should have clear visual hierarchy:
// 1. ONE primary CTA (Order Online) - most prominent
// 2. ONE-TWO secondary CTAs (View Menu, Gallery) - supporting
// 3. MULTIPLE ghost CTAs (Call, Directions, Share) - utilities

// Example page structure:
// Hero:    Primary (lg) + Secondary (lg)
// Content: Secondary (default) in cards
// Footer:  Ghost utilities + Primary (default) for order
`;

// End of reference file
