# 🎨 Premium Typography System - Japanese Aesthetic

## Overview
Enterprise-level typography system with curated font pairing and Japanese aesthetic. This system creates a distinct, premium personality that differentiates the site from standard restaurant templates.

---

## 📚 Font Family Hierarchy

### 1. **Display Font - Playfair Display**
**Usage**: Large headings, hero titles, section headings  
**Personality**: Elegant, luxury, timeless  
**Weights**: 400, 500, 600, 700, 800  
**CSS Variable**: `--font-display`  
**Tailwind Class**: `font-display`

```tsx
<h1 className="font-display text-display-lg font-bold">
  Nomi Sushi & Thai
</h1>
```

**Why Playfair Display?**
- High-end serif with strong personality
- Used by luxury brands and premium restaurants
- Excellent readability at large sizes
- Creates sophisticated, upscale impression

---

### 2. **Body Font - Inter**
**Usage**: Body text, descriptions, captions  
**Personality**: Clean, modern, readable (Apple-style)  
**Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)  
**CSS Variable**: `--font-sans`  
**Tailwind Class**: `font-sans`

```tsx
<p className="font-sans font-light text-lg leading-relaxed">
  Welcome to Nomi Sushi & Thai in Nykvarn!
</p>
```

**Why Inter?**
- System font alternative with better rendering
- Used by Figma, Linear, Vercel (modern SaaS products)
- Perfect letter spacing and proportions
- Excellent at all sizes (readable + elegant)

---

### 3. **Japanese Accent Font - Noto Serif JP**
**Usage**: Japanese text, authentic accents, cultural elements  
**Personality**: Authentic, traditional, elegant  
**Weights**: 300, 400, 500, 600, 700  
**CSS Variable**: `--font-japanese`  
**Tailwind Class**: `font-japanese`

```tsx
<p className="font-japanese text-lg text-primary/60">
  ノミ寿司 {/* Nomi Sushi in Japanese */}
</p>
```

**Why Noto Serif JP?**
- Google's open-source Japanese serif (professional quality)
- Harmonizes with Playfair Display (both serifs)
- Authentic Japanese typography for credibility
- Supports kanji, hiragana, katakana

---

### 4. **Alternative Display - Cormorant**
**Usage**: Optional ultra-premium headings, special sections  
**Personality**: Sophisticated, refined, classical  
**Weights**: 300, 400, 500, 600, 700  
**CSS Variable**: `--font-cormorant`  
**Tailwind Class**: `font-cormorant`

```tsx
<h2 className="font-cormorant text-5xl font-light">
  Weekly Special
</h2>
```

**Why Cormorant?**
- Free alternative to expensive fonts like Didot
- Thinner strokes for luxury feel
- Pairs well with Playfair for variety

---

## 📐 Typography Scale - Premium Sizes

### Display Sizes (Hero/Landing)
**Large-scale typography for maximum impact**

```tsx
// 56px - Small Display
<h1 className="text-display-sm">      // text-[3.5rem]
  
// 64px - Medium Display  
<h1 className="text-display-md">      // text-[4rem]

// 72px - Large Display (Desktop Hero)
<h1 className="text-display-lg">      // text-[4.5rem]

// 80px - XL Display
<h1 className="text-display-xl">      // text-[5rem]

// 96px - 2XL Display (Ultra Premium)
<h1 className="text-display-2xl">     // text-[6rem]
```

**All display sizes include**:
- `line-height: 1` or `1.1` (tight leading)
- `letter-spacing: -0.02em` to `-0.03em` (negative tracking)

---

### Standard Heading Sizes

```tsx
// H1 - Page Titles
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">

// H2 - Section Headings
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">

// H3 - Subsection Headings
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight">

// H4 - Card Headings
<h4 className="text-xl md:text-2xl font-semibold">
```

---

### Body Text Sizes

```tsx
// Large Body (Introductions)
<p className="text-lg md:text-xl font-light leading-relaxed">

// Regular Body (Default)
<p className="text-base md:text-lg font-normal leading-relaxed">

// Small Body (Captions)
<p className="text-sm md:text-base font-light">

// Tiny (Labels, Metadata)
<p className="text-xs font-medium">
```

---

## 📏 Letter Spacing System

### Ultra-Wide Tracking (Uppercase Labels)
**0.2em spacing for maximum impact**

```tsx
<p className="tracking-ultra-wide uppercase text-xs">
  SUSHI • THAI • SMAK
</p>
```

**Use Cases**:
- Overline labels ("WEEKLY SPECIAL", "GALLERY")
- Navigation uppercase items
- Badge text
- Eyebrow headings

---

### Tight Tracking (Display Headings)
**-0.02em to -0.03em for luxury feel**

```tsx
<h1 className="tracking-tight">      // -0.02em
<h1 className="tracking-tighter">    // -0.03em
```

**Why Negative Tracking?**
- Makes large text feel more premium
- Reduces visual weight
- Used by luxury brands (Chanel, Vogue, Apple)
- Creates cohesive, tight wordmarks

---

### Wide Tracking (Body Text Enhancement)
**0.025em for improved readability**

```tsx
<p className="tracking-wide">         // 0.025em
<p className="tracking-wider">        // 0.05em
```

**Use Cases**:
- Long-form body text
- Descriptions needing breathing room
- Light font weights (300)

---

## 🎌 Japanese Text Integration

### Horizontal Japanese Text

```tsx
// Subtitle under English headings
<h1 className="font-display text-6xl">Nomi Sushi & Thai</h1>
<p className="font-japanese text-xl text-primary/60 mt-2">
  ノミ寿司
</p>
```

**Japanese Text Examples**:
- `ノミ寿司` - Nomi Sushi (Katakana)
- `メニュー` - Menu
- `ギャラリー` - Gallery
- `寿司` - Sushi
- `料理` - Cuisine
- `週替わりスペシャル` - Weekly Special

---

### Vertical Japanese Text

```tsx
// Right sidebar accent
<div className="writing-mode-vertical-rl font-japanese text-primary/20">
  寿司とタイ料理の融合
</div>
```

**CSS Classes**:
- `.writing-mode-vertical-rl` - Right to left vertical
- `.writing-mode-vertical-lr` - Left to right vertical

**Use Cases**:
- Hero section side decorations
- Menu page sidebars
- Gallery headers
- Premium accent elements

**Example Vertical Text**:
```
寿
司
と
タ
イ
料
理
の
融
合
```
Translation: "Fusion of Sushi and Thai Cuisine"

---

## 🎯 Implementation Examples

### Hero Section

```tsx
<section className="relative">
  {/* Vertical Japanese Accent - Right Side */}
  <div className="absolute right-8 top-1/2 -translate-y-1/2">
    <div className="writing-mode-vertical-rl font-japanese text-primary/20 text-sm">
      寿司とタイ料理の融合
    </div>
  </div>

  <div className="text-center">
    {/* Overline */}
    <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
      SUSHI • THAI • SMAK
    </p>
    
    {/* Main Heading - 72px on Desktop */}
    <h1 className="font-display text-display-sm md:text-display-md lg:text-display-lg xl:text-display-xl font-bold tracking-tighter text-foreground">
      Nomi Sushi & Thai
    </h1>
    
    {/* Japanese Subtitle */}
    <p className="font-japanese text-lg md:text-xl text-primary/60 mt-2">
      ノミ寿司
    </p>
    
    {/* Tagline */}
    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-primary tracking-tight mt-4">
      Sushi, Thai & Smak i Nykvarn
    </h2>
    
    {/* Description */}
    <p className="mt-6 text-lg md:text-xl font-sans font-light text-muted-foreground max-w-xl mx-auto leading-relaxed tracking-wide">
      Welcome to us at Nomi Sushi and Thai in Nykvarn! Food is our passion.
    </p>
  </div>
</section>
```

---

### Section Heading Pattern

```tsx
<div className="text-center mb-12">
  {/* Overline */}
  <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
    WEEKLY SPECIAL
  </p>
  
  {/* Main Heading */}
  <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3">
    This Week's Creation
  </h2>
  
  {/* Japanese Accent */}
  <p className="font-japanese text-lg text-primary/60 mt-2">
    週替わりスペシャル
  </p>
  
  {/* Subtitle */}
  <p className="font-sans font-light text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto leading-relaxed">
    Handcrafted sushi selections made fresh daily by our master chefs.
  </p>
</div>
```

---

### Menu Card Typography

```tsx
<div className="p-6">
  {/* Dish Name */}
  <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2">
    Dragon Roll Special
  </h3>
  
  {/* Japanese Name */}
  <p className="font-japanese text-sm text-primary/60 mb-3">
    ドラゴンロール
  </p>
  
  {/* Description */}
  <p className="font-sans font-light text-base text-muted-foreground leading-relaxed mb-4">
    Premium eel, avocado, and cucumber wrapped in sesame-topped nori
  </p>
  
  {/* Price */}
  <div className="flex items-baseline gap-2">
    <span className="font-display text-3xl font-bold text-primary">189:-</span>
    <span className="font-sans text-sm text-muted-foreground">per portion</span>
  </div>
</div>
```

---

## ♿ Accessibility Considerations

### Font Weight Balance
```tsx
// DON'T: Too many weights create visual clutter
<h1 className="font-black">      // 900 - Too heavy
<p className="font-thin">         // 100 - Too light

// DO: Use moderate weights for readability
<h1 className="font-bold">        // 700 - Strong but readable
<p className="font-light">        // 300 - Light but legible
```

---

### Contrast Ratios
```tsx
// Ensure sufficient contrast for body text
<p className="text-foreground">           // Primary text (high contrast)
<p className="text-muted-foreground">     // Secondary text (4.5:1 minimum)
<p className="text-primary/60">           // Accent text (decorative only)
```

---

### Responsive Typography
```tsx
// Always provide mobile sizes first
<h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-display-lg">
  
// This ensures:
// - Mobile: 36px (readable on small screens)
// - Tablet: 48px (scales up)
// - Desktop: 60px (impact)
// - XL Desktop: 72px+ (premium)
```

---

## 🎨 Typography Personality

### Before (Standard Restaurant Site)
- ❌ Generic system fonts
- ❌ Small heading sizes (24px-36px)
- ❌ No cultural authenticity
- ❌ Standard letter spacing
- ❌ Limited hierarchy

### After (Enterprise Premium)
- ✅ **Curated font pairing** (Playfair + Inter + Noto Serif JP)
- ✅ **Large-scale typography** (72px+ hero titles)
- ✅ **Japanese authenticity** (vertical text, kanji accents)
- ✅ **Refined tracking** (ultra-wide labels, tight headings)
- ✅ **6-level hierarchy** (display → body → captions)

---

## 📊 Font Loading Performance

### Optimizations Applied
```typescript
// layout.tsx - Font preloading with swap strategy
const inter = Inter({ 
  display: "swap",           // Prevents FOIT (Flash of Invisible Text)
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"], // Only load needed weights
});

const playfairDisplay = Playfair_Display({ 
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const notoSerifJP = Noto_Serif_JP({
  display: "swap",
  variable: "--font-japanese",
  weight: ["300", "400", "500", "600", "700"],
});
```

**Performance Benefits**:
- Next.js automatic font optimization
- CSS variables prevent re-downloads
- Swap strategy shows fallback immediately
- Only specified weights are loaded (reduces bundle)

---

## 🚀 Why This Makes It "Enterprise-Level"

### 1. **Typography = 80% of Design**
Good typography instantly elevates perceived quality. Compare:
- **Basic**: Arial 16px, black text → Generic
- **Premium**: Inter Light 18px, -0.01em tracking → Sophisticated

### 2. **Cultural Authenticity**
Japanese font integration shows:
- Attention to cultural detail
- Respect for sushi/Asian cuisine roots
- Premium brand positioning (not just "Asian fusion")

### 3. **Scale & Hierarchy**
72px+ headings create:
- **Impact** - Impossible to ignore
- **Confidence** - "We know we're good"
- **Luxury** - Space and scale = premium

### 4. **Distinct Personality**
Playfair Display vs. Helvetica:
- **Playfair**: Elegant, timeless, upscale restaurant
- **Helvetica**: Corporate, generic, fast-food chain

### 5. **Professional Execution**
Details matter:
- Consistent letter spacing
- Proper font weight progression
- Responsive scale breakpoints
- Accessibility-first approach

---

## 🎯 Quick Reference Cheat Sheet

```tsx
// HERO TITLES (72px+)
className="font-display text-display-lg font-bold tracking-tighter"

// SECTION HEADINGS (48-60px)
className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"

// CARD HEADINGS (24-32px)
className="font-display text-2xl md:text-3xl font-bold tracking-tight"

// BODY TEXT (16-18px)
className="font-sans font-light text-lg leading-relaxed tracking-wide"

// UPPERCASE LABELS (12px)
className="text-xs font-medium tracking-ultra-wide uppercase font-sans"

// JAPANESE HORIZONTAL
className="font-japanese text-lg text-primary/60"

// JAPANESE VERTICAL (Decorative)
className="writing-mode-vertical-rl font-japanese text-primary/20 text-sm"
```

---

## 📝 Implementation Checklist

### Pages Updated
- ✅ Hero section (`src/components/Hero.tsx`)
- ✅ Gallery page (`src/app/gallery/page.tsx`)
- ✅ Menu page (`src/app/menu/page.tsx`)
- ✅ Footer special section (`src/components/Footer/index.tsx`)

### Core Files Modified
- ✅ `src/app/layout.tsx` - Added Noto Serif JP + Cormorant fonts
- ✅ `src/styles/index.css` - Typography system variables + vertical text CSS
- ✅ `tailwind.config.ts` - Custom font families + display sizes + tracking scale

### Typography Features
- ✅ 4 font families (Display, Sans, Japanese, Cormorant)
- ✅ 5 display sizes (56px → 96px)
- ✅ 7 letter spacing levels (ultra-wide to tighter)
- ✅ Vertical Japanese text support
- ✅ Responsive typography scale
- ✅ Accessibility-first contrast ratios

---

*Typography is the voice of your brand. Premium typography = premium perception.* ✨

**Result**: Your sushi restaurant now has the same typographic sophistication as Apple, Chanel, and Vogue. 🚀
