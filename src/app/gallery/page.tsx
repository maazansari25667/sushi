"use client";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SectionMuted, SectionHighlight } from "@/components/Section";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const GalleryPage = () => {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect for hero images
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const leftY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  return (
    <>
      <SectionMuted>
        <div className="container mx-auto px-0 md:px-0">
          {/* Parallax Split Hero */}
          <div ref={heroRef} className="relative mb-12 overflow-hidden rounded-3xl shadow-2xl min-h-[400px] md:min-h-[500px]">
            <div className="grid md:grid-cols-2 gap-0 h-full">
              {/* Left Image - Winter Parka */}
              <motion.div 
                style={{ y: leftY }}
                className="relative aspect-[480/574] overflow-hidden"
              >
                <Image
                  src="/images/Jackets/Parka/30999-Black_1.webp"
                  alt="NordicWardrobe svart vinter parka - premium herrmode"
                  fill
                  className="object-contain"
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </motion.div>
              
              {/* Right Image - Down Jacket */}
              <motion.div 
                style={{ y: rightY }}
                className="relative aspect-[480/574] overflow-hidden"
              >
                <Image
                  src="/images/Jackets/Down jackets/2531101-999_1.webp"
                  alt="NordicWardrobe dunjacka - skandinavisk design vinterjacka"
                  fill
                  className="object-contain"
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                {/* Gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
              </motion.div>
            </div>
            
            {/* Center Text Overlay - Premium Typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center px-6 py-8 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md mx-4 border border-border/50">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 mb-3 font-sans">
                    {t.gallery.overline}
                  </p>
                  <h1 className="font-display text-5xl md:text-6xl lg:text-display-lg font-bold tracking-tighter mb-3 bg-gradient-to-r from-foreground via-primary to-orange-600 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(251,146,60,0.3)]">
                    {t.gallery.title}
                  </h1>
                  <p className="text-base md:text-lg font-sans font-light text-muted-foreground leading-relaxed tracking-wide">
                    {t.gallery.description}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          <header className="mb-10 text-center">
            <p className="text-sm text-muted-foreground mt-2">
              {t.gallery.subtitle}
            </p>
          </header>

          <GalleryGrid />
        </div>
      </SectionMuted>
      
      {/* Shop CTA - Premium Typography */}
      <SectionHighlight>
        <div className="mb-10 text-center">
          <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
            {t.gallery.visitUs.overline}
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-display-lg font-bold tracking-tighter mt-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {t.gallery.visitUs.title}
          </h2>
          <p className="font-sans font-light text-muted-foreground text-lg md:text-xl mt-4 max-w-xl mx-auto leading-relaxed tracking-wide">
            {t.gallery.visitUs.subtitle}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/jackets">
            <Button variant="secondary" size="lg">
              {t.gallery.visitUs.cta.findUs}
            </Button>
          </Link>
          
          <Link href="/jackets">
            <Button variant="default" size="lg">
              {t.gallery.visitUs.cta.orderOnline}
            </Button>
          </Link>
        </div>
      </SectionHighlight>
    </>
  );
};

export default GalleryPage;