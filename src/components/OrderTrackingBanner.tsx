"use client";

import { useEffect, useState } from "react";
import { qoplaOrderUrl } from "@/config/site";
import { Button } from "./ui/button";

export function OrderTrackingBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has recently ordered (within last 2 hours)
    const lastOrderTime = localStorage.getItem("lastOrderTime");
    const dismissedUntil = localStorage.getItem("orderBannerDismissed");

    if (dismissedUntil) {
      const dismissedTime = parseInt(dismissedUntil);
      if (Date.now() < dismissedTime) {
        setIsDismissed(true);
        return;
      }
    }

    if (lastOrderTime) {
      const orderTime = parseInt(lastOrderTime);
      const twoHoursInMs = 2 * 60 * 60 * 1000;

      if (Date.now() - orderTime < twoHoursInMs) {
        setIsVisible(true);
      }
    }

    // Listen for order button clicks
    const handleOrderClick = () => {
      localStorage.setItem("lastOrderTime", Date.now().toString());
      setIsVisible(true);
    };

    // Track clicks on order buttons (data-order-trigger attribute)
    const orderButtons = document.querySelectorAll('[href*="qopla.com"]');
    orderButtons.forEach((btn) => {
      btn.addEventListener("click", handleOrderClick);
    });

    return () => {
      orderButtons.forEach((btn) => {
        btn.removeEventListener("click", handleOrderClick);
      });
    };
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    // Dismiss for 4 hours
    const fourHoursInMs = 4 * 60 * 60 * 1000;
    localStorage.setItem(
      "orderBannerDismissed",
      (Date.now() + fourHoursInMs).toString()
    );
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="sticky top-20 z-30 w-full backdrop-blur-xl bg-primary/90 border-b border-primary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-white/20 flex-shrink-0">
              <svg
                className="h-5 w-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm sm:text-base font-semibold text-white truncate">
                Order in progress?
              </p>
              <p className="text-xs sm:text-sm text-white/90 truncate">
                Track your delivery status here
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={qoplaOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex"
            >
              <Button
                variant="secondary"
                size="sm"
                className="bg-white text-primary hover:bg-white/90 shadow-md whitespace-nowrap"
              >
                Track Order →
              </Button>
            </a>
            <button
              onClick={handleDismiss}
              className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white flex-shrink-0"
              aria-label="Dismiss banner"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
