"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const wordsEn = ["Jackets", "Style", "Quality"];
const wordsSv = ["Jackor", "Stil", "Kvalitet"];

export function BottomHighlight() {
  const { t, language } = useLanguage();
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);

  const words = language === "sv" ? wordsSv : wordsEn;
  const currentWord = words[index];

  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      // Typing forward
      if (displayedText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        }, 150); // Typing speed
        return () => clearTimeout(timeout);
      } else {
        // Wait before deleting
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000); // Pause at end
        return () => clearTimeout(timeout);
      }
    } else {
      // Typing backward (deleting)
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 100); // Deleting speed (faster)
        return () => clearTimeout(timeout);
      } else {
        // Move to next word
        setIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }
    }
  }, [displayedText, isTyping, currentWord]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blink speed
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50/80 via-amber-50/70 to-yellow-50/80 backdrop-blur-sm py-20 md:py-28">
      {/* Faded background illustration using nomi_2 */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <Image
          src="/images/hero/nomi_2.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-center px-4 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          {t.home.bestThai.titlePrefix}{" "}
          <span className="relative inline-block">
            {/* Typewriter Text with Premium Styling */}
            <motion.span
              key={displayedText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-primary font-display"
            >
              {displayedText}
            </motion.span>
            
            {/* Blinking Cursor */}
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              transition={{ duration: 0 }}
              className="ml-1 inline-block h-[1em] w-[3px] bg-primary align-middle"
            />
            
            {/* Gradient Underline Animation */}
            <motion.span
              className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-primary via-orange-500 to-yellow-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(displayedText.length / currentWord.length) * 100}%` }}
              transition={{ duration: 0.2 }}
            />
          </span>
        </h2>
        <p className="mt-6 font-sans font-light text-lg text-slate-600 md:text-xl max-w-2xl leading-relaxed">
          {t.home.bestThai.subtitle}
        </p>
      </div>
    </section>
  );
}
