import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { StandardCard } from "@/components/ui/nc-card";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "Oops! This page seems to have wandered off the menu.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <StandardCard className="max-w-2xl mx-auto text-center p-8 md:p-12">
        {/* Sushi Illustration */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl" />
          <div className="relative text-8xl">🍣</div>
          <div className="absolute -bottom-2 -right-2 text-4xl">❓</div>
        </div>

        {/* Error Code */}
        <div className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Error 404
          </span>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl md:text-4xl font-display font-semibold text-foreground mb-4">
          Lost in the Kitchen?
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          This page seems to have rolled away like a piece of sushi!
        </p>
        <p className="text-base text-muted-foreground mb-8 max-w-md mx-auto">
          Don&apos;t worry though – we&apos;ll guide you back to something delicious.
        </p>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link href="/">
            <Button variant="default" size="lg">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Button>
          </Link>
          <Link href="/menu">
            <Button variant="outline" size="lg">
              <svg
                className="mr-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              View Menu
            </Button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground mb-3">
            Popular destinations:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/gallery"
              className="text-sm text-primary hover:underline"
            >
              Gallery
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="/contact"
              className="text-sm text-primary hover:underline"
            >
              Contact Us
            </Link>
            <span className="text-muted-foreground">•</span>
            <a
              href="https://qopla.com/restaurant/nomi-sushi-/qEQPB9Rwjg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-primary hover:underline"
            >
              Order Online
            </a>
          </div>
        </div>
      </StandardCard>
    </div>
  );
}
