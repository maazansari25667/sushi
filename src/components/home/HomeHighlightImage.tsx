"use client";

import { DishCarousel } from "@/components/Common/DishCarousel";
import { StandardCard } from "@/components/ui/nc-card";
import { homeCarouselImages } from "@/data/homeImages";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HomeHighlightImage = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-10 md:py-16">
      <StandardCard className="backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
        <div className="p-6 md:p-8">
          {/* Text Block - Full Width at Top */}
          <div className="mb-6 flex flex-col gap-2">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t.ambience.title}
            </h2>
            <p className="text-base md:text-lg font-sans font-light text-muted-foreground max-w-2xl mt-3 leading-relaxed">
              {t.ambience.description}
            </p>
          </div>

          {/* Carousel 2: Large Centered Carousel Below Text */}
          <DishCarousel images={homeCarouselImages} />
        </div>
      </StandardCard>
    </section>
  );
};

export default HomeHighlightImage;