"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HighlightCard } from "@/components/ui/nc-card";
import { siteName, siteTagline, qoplaOrderUrl } from "@/config/site";
import { showOrderSuccessToast } from "@/lib/toast";

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
      {/* Japanese Vertical Text Accent - Right Side */}
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <div className="writing-mode-vertical-rl font-japanese text-primary/20 text-sm tracking-wider">
          寿司とタイ料理の融合
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
            Sushi • Thai • Smak
          </motion.p>
          
          {/* Main Heading - Premium Display Font with Large Scale */}
          <motion.h1
            className="font-display text-display-sm md:text-display-md lg:text-display-lg xl:text-display-xl font-bold tracking-tighter text-foreground leading-[0.95]"
            variants={itemVariants}
          >
            {siteName}
          </motion.h1>
          
          {/* Japanese Subtitle - Authentic Font */}
          <motion.p
            className="font-japanese text-lg md:text-xl text-primary/60 -mt-2"
            variants={itemVariants}
          >
            ノミ寿司
          </motion.p>
          
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
            Welcome to us at Nomi Sushi and Thai in Nykvarn! Food is our passion. 
            We are specialists in sushi and Thai. Feel free to explore our website!
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div className="mt-6 flex flex-wrap gap-4" variants={itemVariants}>
            <Link href="/menu">
              <Button variant="default" className="text-base font-medium">
                View Menu
              </Button>
            </Link>
            <a
              href={qoplaOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => showOrderSuccessToast()}
            >
              <Button variant="outline" className="text-base font-medium">
                Order Online
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Hero Image in Glassmorphism Card with Scale Animation */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <HighlightCard className="relative w-full max-w-md ml-auto border-white/10 backdrop-blur-xl overflow-hidden">
            <div className="relative aspect-[4/3] w-full p-4 md:p-6">
              <Image
                src="/images/hero/nomi_2.png"
                alt="Nomi Sushi & Thai hero illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </HighlightCard>
        </motion.div>
      </div>
    </section>
  );
}

