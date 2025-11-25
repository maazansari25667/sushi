/**
 * Centralized Icon Exports for CTA Design System
 * 
 * This file provides a single source of truth for all icons used across the application,
 * particularly in Call-to-Action (CTA) buttons. By centralizing icon imports from lucide-react,
 * we ensure consistency and make future icon changes easier to manage.
 * 
 * **CTA Icon Convention:**
 * - Use `Icons.phone` for "Call Us" actions
 * - Use `Icons.arrowRight` for forward navigation (View Menu, Learn More)
 * - Use `Icons.externalLink` for external links (Order Online via third-party)
 * - Use `Icons.mapPin` for location/directions actions
 * - Use `Icons.calendar` for booking/reservation actions
 * 
 * **Icon Sizing:**
 * - Default size in buttons: `h-4 w-4` or rely on `[&_svg]:size-4` from button base classes
 * - Spacing: `ml-2` for right-positioned icons, `mr-2` for left-positioned icons
 * 
 * @example
 * ```tsx
 * import { Icons } from "@/components/ui/icons";
 * import { Button } from "@/components/ui/button";
 * 
 * // Phone CTA
 * <Button variant="ghost">
 *   <Icons.phone className="mr-2 h-4 w-4" />
 *   Call Us
 * </Button>
 * 
 * // External link CTA
 * <Button variant="primary" size="lg">
 *   Order Online
 *   <Icons.externalLink className="ml-2 h-4 w-4" />
 * </Button>
 * 
 * // Navigation CTA
 * <Button variant="secondary">
 *   View Menu
 *   <Icons.arrowRight className="ml-2 h-4 w-4" />
 * </Button>
 * ```
 */

import {
  Phone,
  ArrowRight,
  ExternalLink,
  MapPin,
  Calendar,
  Clock,
  Mail,
  Download,
  Share2,
  ChevronRight,
  ChevronLeft,
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
  Heart,
  Star,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  Utensils,
  Home,
  Send,
  Loader2,
  Check,
  type LucideIcon,
} from "lucide-react";

/**
 * Icons object - Centralized icon registry
 * 
 * All icons are imported from lucide-react and re-exported here for consistency.
 * This makes it easy to swap icon libraries in the future if needed, and provides
 * a clear inventory of which icons are used throughout the application.
 */
export const Icons = {
  // CTA-specific icons (primary use case)
  phone: Phone,
  arrowRight: ArrowRight,
  externalLink: ExternalLink,
  mapPin: MapPin,
  calendar: Calendar,
  
  // Utility icons
  clock: Clock,
  mail: Mail,
  download: Download,
  share: Share2,
  
  // Navigation icons
  chevronRight: ChevronRight,
  chevronLeft: ChevronLeft,
  menu: Menu,
  close: X,
  search: Search,
  home: Home,
  
  // E-commerce icons
  cart: ShoppingCart,
  user: User,
  heart: Heart,
  star: Star,
  
  // Status/feedback icons
  info: Info,
  alertCircle: AlertCircle,
  checkCircle: CheckCircle,
  xCircle: XCircle,
  check: Check,
  
  // Form icons
  send: Send,
  loader: Loader2,
  
  // Restaurant-specific icons
  utensils: Utensils,
} as const;

/**
 * Type helper for Icons
 */
export type IconName = keyof typeof Icons;

/**
 * Type for Icon components
 */
export type { LucideIcon };
