import Image, { ImageProps } from "next/image";

interface DishImageFrameProps extends Omit<ImageProps, "fill" | "width" | "height"> {
  alt: string;
  src: string;
  className?: string;
}

/**
 * Standardized container for product/jacket images across the site.
 * Uses 591:1280 aspect ratio to match nordick_ward jacket images (portrait).
 * Use in carousels on Home and product pages.
 */
export function DishImageFrame({ 
  src, 
  alt, 
  className = "", 
  ...rest 
}: DishImageFrameProps) {
  return (
    <div
      className={`
        relative w-full aspect-[591/1280]
        overflow-hidden rounded-3xl
        bg-slate-100 group
        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 800px, 100vw"
        className="object-contain transition-transform duration-300 group-hover:scale-105"
        {...rest}
      />
    </div>
  );
}
