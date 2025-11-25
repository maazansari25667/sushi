"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { StandardCard } from "@/components/ui/nc-card";
import { Button } from "@/components/ui/button";
import { qoplaOrderUrl } from "@/config/site";
import { showOrderSuccessToast } from "@/lib/toast";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const dishes = [
  {
    id: 1,
    videoSrc: "/images/Gallery/video_1.mp4",
    title: "Dragon Roll Supreme",
    subtitle: "A masterpiece of flavor",
    description: "Premium eel, avocado, and cucumber wrapped in our signature rice, topped with fresh tuna sashimi and drizzled with our house special sauce.",
    badge: "Chef's Specialty",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 2,
    videoSrc: "/images/Gallery/video_2.mp4",
    title: "Thai Fusion Delight",
    subtitle: "Where East meets excellence",
    description: "Aromatic Thai basil, tender chicken, and exotic spices come together in this contemporary creation that honors traditional flavors.",
    badge: "Customer Favorite",
    color: "from-emerald-500 to-teal-500"
  }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
  }
};

const VideoCard = ({ dish, index, t }: { dish: typeof dishes[0], index: number, t: any }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0, y: 60, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.7, delay: index * 0.2, ease: "easeOut" }
        }
      }}
      className="group"
    >
      {/* PREMIUM DOUBLE-BORDER FRAME */}
      <div className="p-2 bg-gradient-to-br from-orange-400 via-primary to-orange-600 rounded-[28px] shadow-xl hover:shadow-2xl hover:shadow-orange-500/40 transition-all duration-500">
        <div className="p-1.5 bg-white/95 rounded-[24px]">
          <StandardCard
            className="relative overflow-hidden border-2 border-white/50 hover:border-orange-300/80 backdrop-blur-xl bg-white/90 hover:bg-white transition-all duration-500"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Video Container */}
            <div className="relative w-full overflow-hidden bg-slate-900 rounded-t-[20px]" style={{ aspectRatio: '361/649' }}>
          <video
            ref={videoRef}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loop
            muted
            playsInline
            poster={`/images/Gallery/${index === 0 ? '10' : 'DSC08735-min'}-768x512.jpg`}
          >
            <source src={dish.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* PREMIUM GRADIENT OVERLAYS - Multi-layer for depth */}
          {/* Primary gradient: Dark bottom → Transparent top */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-95 group-hover:opacity-80 transition-opacity duration-700" />
          
          {/* Secondary gradient: Warm color wash */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/30 via-transparent to-primary/20 opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-overlay" />
          
          {/* Edge vignette for professional look */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 opacity-50" />

          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${dish.color} text-white text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm`}>
              {dish.badge}
            </span>
          </div>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-300 ${
              isHovered && !isPlaying ? 'opacity-100 scale-100' : isPlaying ? 'opacity-0 scale-75' : 'opacity-80 scale-90'
            }`}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-2xl hover:bg-white hover:scale-110 transition-all duration-300">
                {isPlaying ? (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                  </svg>
                ) : (
                  <svg className="w-8 h-8 md:w-10 md:h-10 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </div>
            </div>
          </button>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
            >
              <p className="text-white/80 text-sm md:text-base font-medium mb-2 tracking-wide">
                {dish.subtitle}
              </p>
              <h3 className="font-display text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)]">
                {dish.title}
              </h3>
              <p className="text-white/90 text-base md:text-lg font-sans font-light leading-relaxed mb-4 max-w-xl tracking-wide">
                {dish.description}
              </p>
              
              {/* CTA Button */}
              <a
                href={qoplaOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => showOrderSuccessToast()}
              >
                <Button
                  variant="default"
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <span className="font-semibold">{t.signature.orderThis}</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${dish.color} opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`} />
        </div>

          {/* Animated Border Glow */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${dish.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700 -z-10`} />
        </StandardCard>
        </div>
      </div>
    </motion.div>
  );
};

export default function SignatureDishes() {
  const { t } = useLanguage();
  
  const dishes = [
    {
      id: 1,
      videoSrc: "/images/Gallery/video_1.mp4",
      title: t.signature.dish1.title,
      subtitle: t.signature.dish1.subtitle,
      description: t.signature.dish1.description,
      badge: t.signature.dish1.badge,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 2,
      videoSrc: "/images/Gallery/video_2.mp4",
      title: t.signature.dish2.title,
      subtitle: t.signature.dish2.subtitle,
      description: t.signature.dish2.description,
      badge: t.signature.dish2.badge,
      color: "from-emerald-500 to-teal-500"
    }
  ];
  
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
            {t.signature.badge}
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-display-lg font-bold tracking-tighter bg-gradient-to-r from-foreground via-primary to-orange-600 bg-clip-text text-transparent mb-5 drop-shadow-[0_4px_20px_rgba(251,146,60,0.3)]">
            {t.signature.title}
          </h2>
          <p className="text-lg md:text-xl font-sans font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed tracking-wide">
            {t.signature.description}
          </p>
        </motion.div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-[1400px] mx-auto">
          {dishes.map((dish, index) => (
            <VideoCard key={dish.id} dish={dish} index={index} t={t} />
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
          <p className="text-muted-foreground mb-4">
            {t.signature.ctaDescription}
          </p>
          <a href="/menu">
            <Button variant="outline" size="lg" className="group">
              <span>{t.signature.exploreMenu}</span>
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
