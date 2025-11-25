import Image, { StaticImageData } from "next/image";
import { StandardCard } from "@/components/ui/nc-card";

interface MenuItemCardProps {
  name: string;
  description?: string;
  price?: string | number;
  image: StaticImageData | string;
  tags?: string[];
}

export default function MenuItemCard({ 
  name, 
  description, 
  price, 
  image, 
  tags 
}: MenuItemCardProps) {
  return (
    <StandardCard className="backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
      {/* Image Block */
      <div className="aspect-[768/463] w-full overflow-hidden rounded-t-2xl">
        <Image
          src={image}
          alt={name}
          className="h-full w-full object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Text Block */}
      <div className="flex flex-col gap-2 py-4 px-4">
        <h3 className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground">
          {name}
        </h3>

        {description && (
          <p className="text-sm md:text-base font-sans font-light text-muted-foreground leading-relaxed">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between pt-2">
          {/* Tags / Chips - Left Side */}
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Price - Right Side */}
          {price && (
            <span className="text-base font-medium text-foreground ml-auto">
              {price}
            </span>
          )}
        </div>
      </div>
    </StandardCard>
  );
}
