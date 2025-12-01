// Gallery images for NordicWardrobe Lookbook
// All images are located in /public/images/Gallery/
// Alt text uses translation keys from galleryAlt namespace

export interface GalleryImage {
  src: string;
  altKey: string; // Translation key for alt text
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  // Black Winter Parka - Premium
  {
    src: "/images/Jackets/Parka/30999-Black_1.webp",
    altKey: "galleryAlt.blackWinterParka",
    featured: true,
  },
  // Black Friday Collection - Designer Down Jacket
  {
    src: "/images/Jackets/Black_friday/2331116D-999_01.webp",
    altKey: "galleryAlt.designerDownJacket",
    featured: true,
  },
  // Olive Green Parka
  {
    src: "/images/Jackets/Parka/30255-Olive_1.webp",
    altKey: "galleryAlt.oliveGreenParka",
    featured: true,
  },
  // Premium Down Jacket - Black
  {
    src: "/images/Jackets/Down jackets/2531101-999_1.webp",
    altKey: "galleryAlt.premiumDownJacket",
    featured: true,
  },
  // Bomber Jacket - Green
  {
    src: "/images/Jackets/Bomber jackets/JA200486-300_1.webp",
    altKey: "galleryAlt.greenBomberJacket",
    featured: true,
  },
  // NordicWardrobe Style Collection
  {
    src: "/images/Jackets/nordick_ward/photo_2025-12-01_16-46-37.jpg",
    altKey: "galleryAlt.nordicStyleJacket",
    featured: true,
  },
  // Puffer Jacket - Navy
  {
    src: "/images/Jackets/Puffers/7006534-433_1.webp",
    altKey: "galleryAlt.navyPufferJacket",
    featured: true,
  },
  // Spring Jacket - Green
  {
    src: "/images/Jackets/Spring Jackets/JA200869-300_1.webp",
    altKey: "galleryAlt.greenSpringJacket",
    featured: true,
  },
  // NordicWardrobe Urban Design
  {
    src: "/images/Jackets/nordick_ward/photo_2025-12-01_16-47-22.jpg",
    altKey: "galleryAlt.urbanDesignJacket",
    featured: true,
  },
  // Lightweight Down - Gray
  {
    src: "/images/Jackets/Lightweight down/G80526-020_1.webp",
    altKey: "galleryAlt.grayLightweightJacket",
    featured: true,
  },
  // Parka - Black Technical
  {
    src: "/images/Jackets/Parka/FMOW11487-9999_1.webp",
    altKey: "galleryAlt.technicalBlackParka",
    featured: true,
  },
  // Puffer - Burgundy
  {
    src: "/images/Jackets/Puffers/7006534-604_1.webp",
    altKey: "galleryAlt.burgundyPufferJacket",
    featured: true,
  },
  // NordicWardrobe Premium Collection
  {
    src: "/images/Jackets/nordick_ward/photo_2025-12-01_16-47-31.jpg",
    altKey: "galleryAlt.premiumNordicJacket",
    featured: true,
  },
  // Spring - Lightweight Blue
  {
    src: "/images/Jackets/Spring Jackets/3033874-6055_1.webp",
    altKey: "galleryAlt.blueLightweightSpring",
    featured: true,
  },
  // Bomber - Beige Premium
  {
    src: "/images/Jackets/Bomber jackets/M34ML313-292_1.webp",
    altKey: "galleryAlt.beigeBomberJacket",
    featured: true,
  },
];

// Featured gallery images - curated selection of ~13 best images
export const featuredGalleryImages = galleryImages.filter(img => img.featured);