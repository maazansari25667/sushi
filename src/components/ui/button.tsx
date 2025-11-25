"use client";

import * as React from "react"
import { motion } from "framer-motion"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * CTA Design System - Button Hierarchy (Semantic Intent)
 * 
 * This button system supports a clear Call-to-Action (CTA) hierarchy for the restaurant:
 * 
 * **CTA Variants:**
 * - `primary` (or `default`): Main conversion actions
 *   Examples: "Order Online", "Reserve Table", "Get Directions"
 *   Visual: Solid primary color, prominent shadow, strong hover effects
 * 
 * - `secondary`: Supporting actions that guide but don't convert
 *   Examples: "View Menu", "Explore Gallery", "Learn More"
 *   Visual: Outlined style, lighter emphasis, subtle hover
 * 
 * - `ghost`: Low-emphasis utility actions
 *   Examples: "Call Us", "Download Menu", "Share"
 *   Visual: Transparent background, minimal styling, hover highlight
 * 
 * **Icon Usage Convention:**
 * - Import icons from `@/components/ui/icons` (centralized lucide-react exports)
 * - Phone icon (`Icons.phone`) for "Call us" actions
 * - ArrowRight (`Icons.arrowRight`) for forward navigation
 * - ExternalLink (`Icons.externalLink`) for "Order Online" when linking to external sites
 * - Icons typically placed on the right with `className="ml-2 h-4 w-4"`
 * - Icons automatically sized via `[&_svg]:size-4` in base classes
 * 
 * **Size Recommendations:**
 * - `size="lg"`: Hero CTAs, primary page actions, navbar main CTA
 * - `size="default"`: Standard CTAs in content, cards, forms
 * - `size="sm"`: Secondary actions, compact layouts, mobile optimizations
 * 
 * @example
 * ```tsx
 * import { Button } from "@/components/ui/button";
 * import { Icons } from "@/components/ui/icons";
 * 
 * // Primary CTA with icon
 * <Button variant="primary" size="lg">
 *   Order Online
 *   <Icons.externalLink className="ml-2 h-4 w-4" />
 * </Button>
 * 
 * // Secondary CTA
 * <Button variant="secondary" size="default">
 *   View Menu
 *   <Icons.arrowRight className="ml-2 h-4 w-4" />
 * </Button>
 * 
 * // Ghost CTA
 * <Button variant="ghost">
 *   <Icons.phone className="mr-2 h-4 w-4" />
 *   Call Us
 * </Button>
 * ```
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background " +
  "transition-all duration-200 " +
  "hover:-translate-y-1 hover:shadow-xl active:scale-[0.97] " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-50 " +
  "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary CTA: main conversion actions (Order Online, Reserve, etc.)
        default: "bg-primary text-primary-foreground rounded-full px-6 py-3 shadow-md hover:shadow-xl",
        primary: "bg-primary text-primary-foreground rounded-full px-6 py-3 shadow-md hover:shadow-xl",
        
        // Secondary CTA: supporting navigation/exploration actions
        secondary:
          "border-2 border-border bg-transparent text-foreground rounded-full px-6 py-3 hover:bg-muted/50 hover:border-primary/50",
        
        // Ghost CTA: low-emphasis utility actions
        ghost: "bg-transparent text-foreground hover:bg-muted/40 rounded-lg",
        
        // System variants (keep for compatibility)
        destructive:
          "bg-destructive text-destructive-foreground rounded-full px-6 py-3 shadow-md hover:shadow-xl",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-full",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 text-xs",
        // lg: optimized for prominent CTAs (Hero, Navbar, major page actions)
        lg: "h-12 px-8 py-3 text-sm md:text-base font-semibold",
        // icon: reduced lift for icon-only buttons to prevent excessive movement
        icon: "h-11 w-11 hover:-translate-y-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([])
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()
      
      setRipples(prev => [...prev, { x, y, id }])
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600)
      
      if (props.onClick) {
        props.onClick(e)
      }
    }
    
    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return
      const rect = buttonRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      setMousePosition({ x: x * 0.1, y: y * 0.1 })
    }
    
    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 })
    }

    // Don't apply motion to link variant or when asChild is true
    if (variant === "link" || asChild) {
      const StaticComp = asChild ? Slot : "button"
      return (
        <StaticComp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        />
      )
    }
    
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }), "relative overflow-hidden")}
        ref={buttonRef as any}
        onClick={handleClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{
          scale: 1.02,
        }}
        whileTap={{
          scale: 0.98,
        }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        {...(props as any)}
      >
        {props.children}
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30 pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 0,
              height: 0,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 200, height: 200, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        ))}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

/**
 * CTA Intent Type - Semantic mapping for Call-to-Action buttons
 */
type CtaIntent = "primary" | "secondary" | "ghost";

/**
 * CtaButton - Ergonomic helper for the CTA funnel
 * 
 * This component provides a cleaner semantic API for CTA usage by mapping
 * intent-based prop to button variant. Use this when you want to think in
 * terms of CTA hierarchy rather than visual variants.
 * 
 * @param ctaIntent - Semantic CTA intent:
 *   - "primary": Main conversion actions (Order Online, Reserve)
 *   - "secondary": Supporting actions (View Menu, Explore)
 *   - "ghost": Utility actions (Call Us, Download)
 * 
 * @example
 * ```tsx
 * import { CtaButton } from "@/components/ui/button";
 * import { Icons } from "@/components/ui/icons";
 * 
 * // Primary CTA
 * <CtaButton ctaIntent="primary" size="lg">
 *   Order Online
 *   <Icons.externalLink className="ml-2 h-4 w-4" />
 * </CtaButton>
 * 
 * // Secondary CTA
 * <CtaButton ctaIntent="secondary">
 *   View Menu
 * </CtaButton>
 * 
 * // Ghost CTA
 * <CtaButton ctaIntent="ghost">
 *   <Icons.phone className="mr-2 h-4 w-4" />
 *   Call Us
 * </CtaButton>
 * ```
 */
export interface CtaButtonProps extends Omit<ButtonProps, "variant"> {
  ctaIntent?: CtaIntent;
}

export const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ ctaIntent = "primary", ...props }, ref) => {
    // Map CTA intent to button variant
    const variant = ctaIntent === "primary" 
      ? "primary" 
      : ctaIntent === "secondary" 
      ? "secondary" 
      : "ghost";

    return <Button ref={ref} variant={variant} {...props} />;
  }
);
CtaButton.displayName = "CtaButton";

export { Button, buttonVariants }

