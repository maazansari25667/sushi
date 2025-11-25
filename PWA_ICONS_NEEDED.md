# PWA Icons Required

To complete the PWA (Progressive Web App) setup, you need to create the following icon files in `public/images/logo/`:

## Required Icons:

1. **icon-192.png** (192x192 pixels)
   - Standard PWA icon
   - Should contain the Nomi Sushi logo or branding
   - PNG format with transparent or branded background

2. **icon-512.png** (512x512 pixels)
   - High-resolution PWA icon
   - Should contain the Nomi Sushi logo or branding
   - PNG format with transparent or branded background

3. **apple-touch-icon.png** (180x180 pixels)
   - Apple iOS home screen icon
   - Should contain the Nomi Sushi logo or branding
   - PNG format, typically with colored background (brand color: #ff6b35)

## How to Create:

### Option 1: Using Existing Logo
1. Open `public/images/logo/logo-2.svg` in a design tool (Figma, Photoshop, GIMP, etc.)
2. Export at the required sizes above
3. Add a background color (#ff6b35 orange or #f5f5f7 off-white) if needed
4. Save as PNG files with the exact names above

### Option 2: Using Online Tools
1. Use https://realfavicongenerator.net/
2. Upload your logo SVG
3. Generate all required sizes
4. Download and place in `public/images/logo/`

### Option 3: Quick Placeholder (Temporary)
Run this script to generate simple text-based icons:
```bash
# You can use online tools like:
# https://favicon.io/favicon-generator/
# Text: "NS" (for Nomi Sushi)
# Background: #ff6b35
# Font: Inter
```

## Current Status:
- ✅ manifest.json created with correct paths
- ✅ PWA metadata configured in layout.tsx
- ✅ PWAInstallBanner component ready
- ⏳ **PENDING**: Icon files need to be created

## Testing:
Once icons are created, test PWA functionality:
1. Build the app: `npm run build`
2. Serve production build: `npm start`
3. Open Chrome DevTools > Application > Manifest
4. Verify all icons load correctly
5. Test "Add to Home Screen" on mobile device
