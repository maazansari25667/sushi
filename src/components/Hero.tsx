"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HighlightCard } from "@/components/ui/nc-card";
import { siteName, siteTagline } from "@/config/site";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function Hero() {
  return (
    <section className="w-full min-h-[70vh] md:min-h-[80vh] flex items-center py-12 md:py-20 relative">
      {/* Scandinavian Accent - Right Side */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <div className="writing-mode-vertical-rl font-sans text-primary/20 text-sm tracking-wider">
          NORDIC STYLE
        </div>
      </div>

      <div className="grid w-full gap-10 md:gap-16 md:grid-cols-2 items-center">
        {/* Left: Text Content with Premium Typography */}
        <motion.div
          className="flex flex-col gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Overline - Ultra wide tracking */}
          <motion.p
            className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans"
            variants={itemVariants}
          >
            Premium • Skandinavisk • Herrmode
          </motion.p>
          
          {/* Main Heading - Premium Display Font with Large Scale */}
          <motion.h1
            className="font-display text-display-sm md:text-display-md lg:text-display-lg xl:text-display-xl font-bold tracking-tighter text-foreground leading-[0.95]"
            variants={itemVariants}
          >
            {siteName}
          </motion.h1>
          
          {/* Tagline - Display Font Medium Weight */}
          <motion.h2
            className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-primary tracking-tight"
            variants={itemVariants}
          >
            {siteTagline}
          </motion.h2>
          
          {/* Description - Optimized Body Typography */}
          <motion.p
            className="mt-2 text-lg md:text-xl font-sans font-light text-muted-foreground max-w-xl leading-relaxed tracking-wide"
            variants={itemVariants}
          >
            Välkommen till NordicWardrobe! Premium herrmode är vår passion. 
            Vi specialiserar oss på tidlösa jackor och skandinavisk design. Utforska vår kollektion!
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div className="mt-6 flex flex-wrap gap-4" variants={itemVariants}>
            <Link href="/jackets">
              <Button variant="default" className="text-base font-medium">
                Visa Jackor
              </Button>
            </Link>
            <Link href="/gallery">
              <Button variant="outline" className="text-base font-medium">
                Se Lookbook
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Hero Image in Glassmorphism Card with Scale Animation */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <HighlightCard className="relative w-full max-w-md ml-auto border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="relative aspect-[16/9] w-full p-4 md:p-6">
              <Image
                src="/images/Jackets/home cover/oktjackman.webp"
                alt="NordicWardrobe jacka – hero bild"
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          </HighlightCard>
        </motion.div>
      </div>
    </section>
  );
}

