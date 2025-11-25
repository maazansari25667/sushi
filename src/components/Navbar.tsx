"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { qoplaOrderUrl } from "@/config/site";
import { LiveHoursIndicator } from "./LiveHoursIndicator";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import LanguageSwitcher from "./navigation/LanguageSwitcher";

const Navbar = () => {
  // Mobile menu toggle
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, language } = useLanguage();

  console.log("🎯 Navbar render - current language:", language);
  console.log("📝 Navbar translations - Home label:", t.nav.home);

  // Navigation links for restaurant
  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/menu", label: t.nav.menu },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b border-border bg-background/80">
      <nav aria-label="Main Navigation" className="h-20 flex items-center">
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="flex items-center justify-between w-full">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/images/hero/Nomi_Logo-oyxtc6ij8tw0kopf1gif67mdone2m0xxyrffzzvq64.png"
                  alt="Nomi Sushi & Thai"
                  width={160}
                  height={60}
                  className="w-auto h-12"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links - Center */}
            <ul className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base font-medium transition-all duration-200 hover:underline underline-offset-4 ${
                      pathname === link.href
                        ? "text-primary"
                        : "text-foreground/80 hover:text-primary hover:opacity-100"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA Button + Live Hours - Right */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />
              <LiveHoursIndicator />
              <a href={qoplaOrderUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default">{t.nav.orderOnline}</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            >
              <span
                className={`block h-0.5 w-6 bg-foreground transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground mt-1.5 transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-foreground mt-1.5 transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block text-base font-medium transition-all duration-200 ${
                        pathname === link.href
                          ? "text-primary"
                          : "text-foreground/80 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6">
                <a
                  href={qoplaOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="default" className="w-full">
                    Order Online
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
