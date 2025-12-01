"use client";
import { siteName, sitePhoneDisplay } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-slate-500 md:flex-row md:gap-4">
        <span className="text-center md:text-left">
          © 2025 {siteName}. All rights reserved.
        </span>
        
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-4">
          <span className="font-medium">Tel: {sitePhoneDisplay}</span>
          
          <Link
            href="/jackets"
            className="text-sm font-medium text-primary hover:text-primary/80 hover:underline underline-offset-4 transition-colors duration-200"
          >
            Shop Jackets
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;