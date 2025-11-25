"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: "en" | "sv") => {
    console.log("🌍 Button clicked, changing language to:", lang);
    setLanguage(lang);
  };

  console.log("🔤 LanguageSwitcher render - current language:", language);

  return (
    <div className="flex items-center gap-1 bg-muted rounded-full p-1" role="group" aria-label="Language switcher">
      {/* English Button */}
      <motion.button
        type="button"
        onClick={() => handleLanguageChange("en")}
        aria-label="Switch to English"
        aria-pressed={language === "en"}
        className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          language === "en"
            ? "text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === "en" && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <span className="text-base">🇬🇧</span>
          <span className="hidden sm:inline">EN</span>
        </span>
      </motion.button>

      {/* Swedish Button */}
      <motion.button
        type="button"
        onClick={() => handleLanguageChange("sv")}
        aria-label="Switch to Swedish"
        aria-pressed={language === "sv"}
        className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
          language === "sv"
            ? "text-white"
            : "text-muted-foreground hover:text-foreground"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {language === "sv" && (
          <motion.div
            layoutId="activeLanguage"
            className="absolute inset-0 bg-primary rounded-full"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1.5">
          <span className="text-base">🇸🇪</span>
          <span className="hidden sm:inline">SV</span>
        </span>
      </motion.button>
    </div>
  );
}
