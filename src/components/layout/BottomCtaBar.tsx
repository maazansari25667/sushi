"use client";

import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { qoplaOrderUrl } from "@/config/site";
import { showOrderSuccessToast } from "@/lib/toast";

/**
 * BottomCtaBar - Mobile-only sticky CTA bar
 * 
 * Displays at the bottom of the screen on mobile devices to provide
 * a persistent "Order Online" action. Only visible on screens < 768px.
 * 
 * @example
 * ```tsx
 * import { BottomCtaBar } from "@/components/layout/BottomCtaBar";
 * 
 * export default function MenuPage() {
 *   return (
 *     <>
 *       {/* page content *\/}
 *       <BottomCtaBar />
 *     </>
 *   );
 * }
 * ```
 */
export function BottomCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl px-4 py-3 shadow-[0_-4px_12px_rgba(0,0,0,0.15)] md:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
        <span className="text-sm font-medium text-foreground">
          Ready to order?
        </span>
        <Button
          variant="primary"
          size="lg"
          className="flex-1 justify-center max-w-[200px]"
          asChild
        >
          <a
            href={qoplaOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => showOrderSuccessToast()}
          >
            <span>Order Online</span>
            <Icons.externalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
}
