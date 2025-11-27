"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import { translations, Language, TranslationKeys } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("sv");
  const [mounted, setMounted] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && (savedLang === "en" || savedLang === "sv")) {
      setLanguageState(savedLang);
    } else {
      // Default to Swedish if no saved language
      setLanguageState("sv");
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    console.log("🔄 Language changing to:", lang);
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const value = useMemo(() => ({
    language,
    setLanguage,
    t: translations[language],
  }), [language]);

  // Prevent hydration mismatch by showing default until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider value={{
        language: "sv",
        setLanguage: () => {},
        t: translations["sv"],
      }}>
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
