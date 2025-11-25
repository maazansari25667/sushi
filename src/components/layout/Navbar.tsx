"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { qoplaOrderUrl } from "@/config/site";
import { showOrderSuccessToast } from "@/lib/toast";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "@/components/navigation/LanguageSwitcher";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (route: string) => {
    if (route === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(route);
  };

  const navLinks = [
    { key: "home", href: "/" },
    { key: "menu", href: "/menu" },
    { key: "gallery", href: "/gallery" },
    { key: "contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-30 border-b border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-8">
        {/* Branding */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-24 md:h-10 md:w-32">
            <Image
              src="/images/hero/Nomi_Logo-oyxtc6ij8tw0kopf1gif67mdone2m0xxyrffzzvq64.png"
              alt="Nomi Sushi & Thai logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="group relative text-sm font-medium transition-colors duration-200 py-2"
            >
              <span className={isActiveRoute(link.href) ? "text-primary" : "text-foreground/80 group-hover:text-primary transition-colors"}>
                {t.nav[link.key as keyof typeof t.nav]}
              </span>
              <span 
                className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActiveRoute(link.href) 
                    ? "w-full" 
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
          
          {/* Language Switcher */}
          <LanguageSwitcher />
          
          {/* Order Online Button - Primary CTA */}
          <Button
            variant="primary"
            size="lg"
            asChild
            className="hidden md:inline-flex"
          >
            <a
              href={qoplaOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => showOrderSuccessToast()}
            >
              <span>{t.nav.orderOnline}</span>
              <Icons.externalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1"
          aria-label="Toggle mobile menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-900 transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/20 bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm font-medium py-2 border-l-4 pl-4 transition-colors duration-200 ${
                  isActiveRoute(link.href)
                    ? "text-primary border-primary bg-primary/5"
                    : "text-foreground/80 border-transparent hover:text-primary hover:underline underline-offset-4"
                }`}
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </Link>
            ))}
            
            {/* Language Switcher - Mobile */}
            <div className="pt-2 pb-2">
              <LanguageSwitcher />
            </div>
            
            {/* Mobile Order Online Button - Primary CTA */}
            <Button
              variant="primary"
              size="lg"
              asChild
              className="w-full mt-4"
            >
              <a
                href={qoplaOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  showOrderSuccessToast();
                  setIsMobileMenuOpen(false);
                }}
              >
                <span>{t.nav.orderOnline}</span>
                <Icons.externalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;