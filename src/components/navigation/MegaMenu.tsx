"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { LiveHoursIndicator } from "@/components/LiveHoursIndicator";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "/", image: "/images/Gallery/10-768x512.jpg" },
  { label: "Menu", href: "/menu", image: "/images/Gallery/DSC08747-min-768x512.jpg" },
  { label: "Gallery", href: "/gallery", image: "/images/Gallery/DSC08769-min-768x512.jpg" },
  { label: "About", href: "/about", image: "/images/Gallery/DSC08806-min-768x512.jpg" },
  { label: "Contact", href: "/contact", image: "/images/Gallery/DSC08814-min-768x512.jpg" },
];

export default function MegaMenu({ isOpen, onClose: onCloseAction }: MegaMenuProps) {
  const onClose = onCloseAction;
  const [hoveredImage, setHoveredImage] = useState(navItems[0].image);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <motion.button
            className="absolute top-8 right-8 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Split Screen Layout */}
          <div className="h-full grid lg:grid-cols-[40%_60%]">
            {/* Left Side - Navigation */}
            <motion.div
              className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20 relative"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {/* Search Bar */}
              <motion.div
                className="mb-12"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search menu, dishes..."
                    className="w-full px-6 py-4 pr-12 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:outline-none transition-all text-base font-medium text-foreground placeholder:text-muted-foreground/60"
                  />
                  <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </motion.div>

              {/* Navigation Links */}
              <nav className="space-y-4 mb-16">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="group block"
                      onMouseEnter={() => setHoveredImage(item.image)}
                      onClick={onClose}
                    >
                      <motion.div
                        className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground/80 hover:text-primary transition-colors relative"
                        whileHover={{ x: 20 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {item.label}
                        <motion.div
                          className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                        />
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Live Hours */}
              <motion.div
                className="mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <LiveHoursIndicator />
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="flex gap-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,107,53,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </motion.a>
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 hover:bg-primary hover:text-white transition-all"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(255,107,53,0.5)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Side - Featured Image */}
            <motion.div
              className="hidden lg:block relative overflow-hidden bg-gradient-to-br from-orange-100 to-orange-50"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={hoveredImage}
                  src={hoveredImage}
                  alt="Featured Dish"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
