# Nomi Sushi & Thai - Premium Next.js Restaurant Website

A modern, high-performance restaurant website built with Next.js 15, TypeScript, and Tailwind CSS. Features glass-morphism design, smooth animations, multi-language support, and a fully functional gallery with lightbox.

## 🚀 Live Demo

Visit the live site: [Nomi Sushi & Thai](https://www.nomisushi.se)

## ✨ Key Features

- 🎨 **Glass-morphism Design System** - Modern, premium UI with frosted glass effects
- 🌊 **Smooth Page Transitions** - Framer Motion animations throughout
- 🖼️ **Premium Gallery** - Full-screen lightbox with thumbnail navigation
- 🌐 **Multi-language Support** - English/Swedish with persistent language selection
- 📱 **PWA Support** - Installable as a mobile app
- 🎯 **Floating Action Buttons** - Quick access to order, call, directions
- 🍱 **Interactive Menu** - 3D card effects with category filtering
- 📞 **Contact Features** - Reservation form, FAQ accordion, live hours
- ⚡ **Performance Optimized** - Next.js 15 with Image optimization
- 🎭 **Advanced Animations** - Scroll-triggered reveals, parallax effects
- 📐 **Responsive Design** - Mobile-first, works on all devices
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter cards

## 🛠️ Tech Stack

- **Framework:** Next.js 15.3.0
- **Language:** TypeScript 5.3.3
- **Styling:** Tailwind CSS 4.1.3
- **Animations:** Framer Motion 12.23
- **UI Components:** Radix UI primitives
- **Fonts:** Google Fonts (Inter, Playfair Display, Noto Serif JP)
- **Icons:** Lucide React
- **Toast Notifications:** Sonner

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/maaz-ka-baap/sushi-.git

# Navigate to project directory
cd sushi-

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Configure build settings (auto-detected)
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmaaz-ka-baap%2Fsushi-)

## 📁 Project Structure

```
src/
├── app/              # Next.js app directory (pages)
├── components/       # React components
│   ├── ui/          # Reusable UI components
│   ├── gallery/     # Gallery & lightbox
│   ├── menu/        # Menu cards & tabs
│   ├── navigation/  # Navbar, FABs, language switcher
│   └── ...
├── data/            # Static data (menu, gallery, images)
├── lib/             # Utilities & i18n
├── styles/          # Global CSS
└── types/           # TypeScript types

public/
├── images/          # Static images
│   ├── Gallery/    # Gallery photos
│   ├── hero/       # Hero section images
│   └── logo/       # Logo files
└── manifest.json    # PWA manifest
```

## 🎯 Key Pages

- `/` - Homepage with hero, features, signature dishes
- `/menu` - Full menu with category tabs
- `/gallery` - Photo gallery with lightbox
- `/contact` - Contact form, info, FAQ
- `/about` - About the restaurant

## 🌐 Multi-language Support

The site supports English and Swedish with persistent language selection:
- Language stored in localStorage
- Automatic language detection
- Easy to extend to more languages

## 📱 PWA Features

- Installable on mobile devices
- Offline-ready with service worker
- App shortcuts for quick actions
- Custom install banner

## ⚡ Performance

- Static generation where possible
- Image optimization with Next.js Image
- Code splitting by route
- Lazy loading for images
- Optimized font loading

## 🔧 Configuration

Edit `src/config/site.ts` to customize:
- Site name and description
- Contact information
- Opening hours
- Order URL

## 📄 License

MIT License - feel free to use for your projects

## 🙏 Credits

- Template base: NextJS Templates
- Images: Nomi Sushi & Thai
- Icons: Lucide React
- UI Components: Radix UI

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NextJSTemplates/startup-nextjs)


### 📄 License
Startup is 100% free and open-source, feel free to use with your personal and commercial projects.

### 💜 Support
If you like the template, please star this repository to inspire the team to create more stuff like this and reach more users like you!

### ✨ Explore and Download - Free [Next.js Templates](https://nextjstemplates.com)

### Update Log

**10 April 2025**
- Fix peer deps issue with Next.js 15
- Upgrade to tailwind v4
- Refactored blog cards for handling edge cases(text ellipsis on bio, keeping author details at the bottom etc.)
- Re-wrote blog details page with icons separation, fallback author image and better markup.
- Fixed duplicate key errors on homepage.
- Separated icons on theme-switcher button, and refactored scroll-to-top button.

**29 Jan 2025**
- Upgraded to Next.js 15
