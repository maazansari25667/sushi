import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./ui/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        japanese: ["var(--font-japanese)", "serif"],
        cormorant: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      fontSize: {
        // Premium typography scale with custom line heights
        // Display sizes for hero sections (72px+)
        "display-sm": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 56px
        "display-md": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }], // 64px
        "display-lg": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }], // 72px
        "display-xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.02em" }], // 80px
        "display-2xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.03em" }], // 96px
      },
      letterSpacing: {
        // Enhanced letter spacing for premium typography
        tighter: "-0.03em",
        tight: "-0.02em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
        "ultra-wide": "0.2em",
      },
      colors: {
        // Section/background tokens for banded page layouts:
        // - background: Main page background (overall site surface)
        // - muted: Light band background for alternate sections (visual rhythm)
        // - card: Card/panel surfaces for content blocks, carousels, info boxes
        // These tokens create consistent visual hierarchy across Home, Menu, Gallery, Contact
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "24px",
        "2xl": "40px",
        "3xl": "64px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.08)",
        "glass-lg": "0 12px 48px 0 rgba(0, 0, 0, 0.12)",
        "glass-xl": "0 20px 64px 0 rgba(0, 0, 0, 0.16)",
        "glass-hover": "0 24px 80px 0 rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
