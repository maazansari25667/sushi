"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import JacketCard from "@/components/jackets/JacketCard";
import { jackets, getNewJackets } from "@/data/jackets";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

export default function FeaturedJackets() {
  const { t } = useLanguage();
  
  // Get new arrivals, fallback to first 6 items
  const newJackets = getNewJackets();
  const featuredJackets = newJackets.length > 0 
    ? newJackets.slice(0, 6) 
    : jackets.slice(0, 6);
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-orange-500/20 border border-primary/30 text-primary text-sm font-bold uppercase tracking-ultra-wide mb-5">
            {t.featuredJackets.badge}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-display-lg font-bold tracking-tighter bg-gradient-to-r from-foreground via-primary to-orange-600 bg-clip-text text-transparent mb-5 drop-shadow-[0_4px_20px_rgba(251,146,60,0.3)]">
            {t.featuredJackets.title}
          </h2>
          <p className="text-lg md:text-xl font-sans font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide">
            {t.featuredJackets.description}
          </p>
        </motion.div>

        {/* Jackets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {featuredJackets.map((jacket, index) => (
            <motion.div
              key={jacket.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.7, delay: index * 0.1, ease: "easeOut" }
                }
              }}
            >
              <JacketCard jacket={jacket} />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mt-12 md:mt-16"
        >
          <a href="/jackets">
            <Button variant="outline" size="lg" className="group">
              <span>{t.featuredJackets.viewAll}</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
