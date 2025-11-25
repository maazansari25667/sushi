import Image, { ImageProps } from "next/image";

interface DishImageFrameProps extends Omit<ImageProps, "fill" | "width" | "height"> {
  alt: string;
  src: string;
  className?: string;
}

/**
 * Standardized container for all dish/food images across the site.
 * Enforces 768×463 aspect ratio to match actual image dimensions.
 * Use in carousels on Home and Menu pages.
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
        relative w-full aspect-[768/463]
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
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        {...rest}
      />
    </div>
  );
}
