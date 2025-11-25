"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/gallery";

interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  images,
  activeIndex,
  isOpen,
  onClose: onCloseAction,
  onPrevious: onPreviousAction,
  onNext: onNextAction,
}: GalleryLightboxProps) {
  const onClose = onCloseAction;
  const onPrevious = onPreviousAction;
  const onNext = onNextAction;
  
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Focus trap and keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    // Save previously focused element
    previouslyFocusedRef.current = document.activeElement as HTMLElement;

    // Focus the dialog container
    const dialog = dialogRef.current;
    if (dialog) {
      dialog.focus();
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC to close
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      // Arrow navigation
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        onPrevious();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        onNext();
      }

      // Focus trap - Tab cycling
      if (e.key === "Tab" && dialog) {
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      // Restore focus to previously focused element
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [isOpen, onClose, onPrevious, onNext]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !images[activeIndex]) return null;

  const currentImage = images[activeIndex];
  
  // Generate share URLs
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const imageUrl = origin + currentImage.src;
  const encodedPageUrl = encodeURIComponent(pageUrl);
  const encodedImageUrl = encodeURIComponent(imageUrl);

  const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodedPageUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?url=${encodedPageUrl}&text=${encodeURIComponent(currentImage.alt)}`;
  const pinterestShare = `https://www.pinterest.com/pin/create/button/?url=${encodedPageUrl}&media=${encodedImageUrl}&description=${encodeURIComponent(currentImage.alt)}`;

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery preview"
      tabIndex={-1}
      className="fixed left-0 top-0 z-[9999] h-screen w-screen overflow-hidden bg-black/95"
      style={{ margin: 0, padding: 0 }}
      onClick={onClose}
    >
      {/* Close Button - Top Right */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close lightbox"
        className="fixed right-6 top-6 z-[10000] flex h-12 w-12 items-center justify-center text-white/80 transition hover:text-white focus-visible:outline-none"
      >
        <svg className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Image Counter - Top Left */}
      <div className="fixed left-6 top-6 z-[10000] text-lg font-medium text-white/90">
        {activeIndex + 1} / {images.length}
      </div>

      {/* Main Image - Centered */}
      <div 
        className="absolute left-0 top-0 flex h-screen w-screen flex-col items-center justify-center px-4 pb-[180px] pt-[120px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex max-h-full w-full max-w-7xl flex-col items-center justify-center">
          <div className="relative w-full" style={{ maxHeight: 'calc(100vh - 380px)' }}>
            <Image
              src={currentImage.src}
              alt={currentImage.alt}
              width={1920}
              height={1080}
              className="h-auto w-full object-contain"
              style={{ maxHeight: 'calc(100vh - 380px)' }}
              sizes="100vw"
              priority
            />
          </div>
          
          {/* Caption Below Image */}
          <div className="mt-4 text-center">
            <p className="text-sm text-white/80 md:text-base">
              {currentImage.alt}
            </p>
          </div>

          {/* Share Buttons Below Caption */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={facebookShare}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[#1877F2] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0d65d9]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span>Facebook</span>
            </a>

            <a
              href={twitterShare}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Twitter</span>
            </a>

            <a
              href={pinterestShare}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded bg-[#E60023] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#c50019]"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
              </svg>
              <span>Pinterest</span>
            </a>

            <a
              href={currentImage.src}
              download
              className="inline-flex items-center gap-2 rounded bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
        className="fixed left-4 top-1/2 z-[10000] flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/60 transition hover:text-white focus-visible:outline-none md:left-8"
      >
        <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="fixed right-4 top-1/2 z-[10000] flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/60 transition hover:text-white focus-visible:outline-none md:right-8"
      >
        <svg className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Thumbnail Filmstrip */}
      <div className="fixed bottom-0 left-0 right-0 z-[10000] bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="mx-auto max-w-7xl">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                  setTimeout(() => {
                    const grid = document.querySelector('[data-gallery-grid]');
                    if (grid) {
                      const items = grid.querySelectorAll('[data-gallery-item]');
                      if (items[index]) {
                        (items[index] as HTMLElement).click();
                      }
                    }
                  }, 50);
                }}
                className={`relative h-16 w-24 flex-shrink-0 overflow-hidden rounded transition ${
                  index === activeIndex ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
