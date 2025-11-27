import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Serif_JP, Cormorant } from "next/font/google";
import { MotionConfig } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { OrderTrackingBanner } from "@/components/OrderTrackingBanner";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { PWAInstallBanner } from "@/components/PWAInstallBanner";
import FloatingActionButtons from "@/components/navigation/FloatingActionButtons";
import { Toaster } from "@/components/ui/toaster";
import { siteName, siteDescription } from "@/config/site";
import "../styles/index.css";
import { Providers } from "./providers";
import { PageTransition } from "@/components/PageTransition";

// Premium Typography System with Japanese Aesthetic
// Body font - Inter for clean, modern readability (Apple-style sans-serif)
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

// Display font - Playfair Display for elegant headings (luxury serif)
const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

// Japanese accent font - Noto Serif JP for authentic Japanese text
const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-japanese",
  weight: ["300", "400", "500", "600", "700"],
});

// Alternative display font - Cormorant for ultra-premium headings
const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  metadataBase: new URL("https://www.nomisushi.se"),
  manifest: "/manifest.json",
  openGraph: {
    title: siteName,
    description: siteDescription,
    url: "https://www.nomisushi.se",
    siteName,
    locale: "en_SE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/logo/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nomi Sushi",
  },
  applicationName: "Nomi Sushi & Thai",
  formatDetection: {
    telephone: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="sv-SE">
      <head />
      
      <body suppressHydrationWarning className={`${inter.variable} ${playfairDisplay.variable} ${notoSerifJP.variable} ${cormorant.variable} min-h-screen flex flex-col bg-background text-foreground antialiased`}>
        {/* Animated Background with Parallax Blobs */}
        <AnimatedBackground />

        <Providers>
          <MotionConfig reducedMotion="user">
            {/* Navbar - Full width, no container */}
            <Navbar />
            
            {/* Order Tracking Banner - Shows after user clicks Order Online */}
            <OrderTrackingBanner />
            
            {/* Main content wrapper - Centered with max-width */}
            <main className="flex-1 pt-16 md:pt-20">
              <PageTransition>
                <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
                  {children}
                </div>
              </PageTransition>
            </main>
            
          <Footer />
          <ScrollToTop />
          <FloatingActionButtons />
          <PWAInstallBanner />
          <Toaster />
        </MotionConfig>
        </Providers>
      </body>
    </html>
  );
}