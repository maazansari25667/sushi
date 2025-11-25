"use client";

import Image from "next/image";
import { useMemo } from "react";

interface HomeImageStripProps {
  images: string[];
  reverse?: boolean;
  speed?: number; // seconds per full loop
}

export function HomeImageStrip({ 
  images, 
  reverse = false, 
  speed = 40 
}: HomeImageStripProps) {
  // Duplicate images for seamless infinite loop
  const sequence = useMemo(() => [...images, ...images], [images]);

  return (
    <div className="relative w-full overflow-hidden py-4">
      <div
        className="flex min-w-max items-center gap-4"
        style={{
          animation: `${reverse ? 'scroll-right' : 'scroll-left'} ${speed}s linear infinite`,
        }}
      >
        {sequence.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="relative h-40 w-64 flex-shrink-0 md:h-52 md:w-80 lg:h-60 lg:w-96"
          >
            <Image
              src={src}
              alt="Nomi Sushi & Thai - Fresh sushi and Thai cuisine"
              fill
              className="rounded-2xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
