"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero/index";
import SignatureDishes from "@/components/home/SignatureDishes";
import HomeFeatures from "@/components/home/HomeFeatures";
import HomeHighlightImage from "@/components/home/HomeHighlightImage";
import { BottomHighlight } from "@/components/home/BottomHighlight";
import HomeCallToActionStrip from "@/components/home/HomeCallToActionStrip";
import { DishCarousel } from "@/components/Common/DishCarousel";
import { StandardCard } from "@/components/ui/nc-card";
import { homeHeroCarouselImages } from "@/data/homeImages";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Section, SectionMuted, SectionHighlight } from "@/components/Section";

// Animation variants for scroll-triggered reveals
const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

// No metadata export needed here - handled by layout.tsx

export default function Home() {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Block 1: Hero Section */}
      <Section className="py-0 -mt-16 md:-mt-20">
        <Hero />
      </Section>
      
      {/* Block 2: Signature Dishes Video Showcase */}
      <SectionMuted>
        <SignatureDishes />
        
        {/* Carousel 1: Sushi Showcase with Scroll Animation */}
        <motion.div
          className="mt-10 md:mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <StandardCard className="backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
            <div className="p-6 md:p-8">
              <div className="mb-6 flex flex-col gap-2">
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                  {t.discover.title}
                </h2>
                <p className="text-base md:text-lg font-sans font-light text-muted-foreground max-w-2xl mt-2 leading-relaxed">
                  {t.discover.description}
                </p>
              </div>
              <DishCarousel images={homeHeroCarouselImages} />
            </div>
          </StandardCard>
        </motion.div>
      </SectionMuted>
      
      {/* Block 2: Three Feature Cards with Scroll Animation */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <div className="mb-10 text-center">
            <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
              {t.home.whatWeOffer.overline}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t.home.whatWeOffer.title}
            </h2>
          </div>
          <HomeFeatures />
        </motion.div>
      </Section>
      
      {/* Block 3: Fresh Sushi & Thai Cuisine Section with Carousel 2 */}
      <SectionMuted>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <HomeHighlightImage />
        </motion.div>
      </SectionMuted>
      
      {/* Block 4: Bottom Highlight - Dynamic "We have the best..." text */}
      <SectionHighlight className="py-0">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <div className="mb-10 text-center">
            <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
              {t.home.bestThai.overline}
            </p>
          </div>
          <BottomHighlight />
        </motion.div>
      </SectionHighlight>
      
      {/* Block 5: Call-To-Action Strip */}
      <SectionMuted>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariants}
        >
          <div className="mb-10 text-center">
            <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
              {t.home.experienceInPerson.overline}
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t.home.experienceInPerson.title}
            </h2>
          </div>
          <HomeCallToActionStrip />
        </motion.div>
      </SectionMuted>
    </>
  );
}

