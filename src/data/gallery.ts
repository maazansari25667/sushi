// Gallery images for Nomi Sushi & Thai
// All images are located in /public/images/Gallery/
// Alt text uses translation keys from galleryAlt namespace

export interface GalleryImage {
  src: string;
  altKey: string; // Translation key for alt text
  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/Gallery/DSC08560-min-768x453.jpg",
    altKey: "galleryAlt.freshPlatter",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08592-min-768x435.jpg",
    altKey: "galleryAlt.beautifullyArranged",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08607-min-768x481.jpg",
    altKey: "galleryAlt.assortedRolls",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08618-min-768x435.jpg",
    altKey: "galleryAlt.premiumNigiri",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08622-min-768x443.jpg",
    altKey: "galleryAlt.traditionalPlatter",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08640-min-768x460.jpg",
    altKey: "galleryAlt.sashimiMaki",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08643-min-768x435.jpg",
    altKey: "galleryAlt.colorfulRolls",
  },
  {
    src: "/images/Gallery/DSC08655-min-768x434.jpg",
    altKey: "galleryAlt.sushiThai",
  },
  {
    src: "/images/Gallery/DSC08672-min-768x415.jpg",
    altKey: "galleryAlt.artfulPrep",
  },
  {
    src: "/images/Gallery/DSC08683-min-768x464.jpg",
    altKey: "galleryAlt.salmonTuna",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08708-min-768x435.jpg",
    altKey: "galleryAlt.traditional",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08719-min-768x437.jpg",
    altKey: "galleryAlt.freshIngredients",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08723-min-768x463.jpg",
    altKey: "galleryAlt.premiumCombo",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08735-min-768x435.jpg",
    altKey: "galleryAlt.makiNigiri",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08741-min-768x435.jpg",
    altKey: "galleryAlt.assorted",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC08759-min-768x435.jpg",
    altKey: "galleryAlt.beautifullyCrafted",
    featured: true,
  },
  {
    src: "/images/Gallery/DSC09564-min-768x475.jpg",
    altKey: "galleryAlt.sushiThai",
  },
  {
    src: "/images/Gallery/DSC09670-min-768x377.jpg",
    altKey: "galleryAlt.traditional",
  },
  {
    src: "/images/Gallery/DSC09674-min-768x478.jpg",
    altKey: "galleryAlt.premiumNigiri",
  },
  {
    src: "/images/Gallery/2-768x576.jpg",
    altKey: "galleryAlt.sushiThai",
  },
  {
    src: "/images/Gallery/3-768x512.jpg",
    altKey: "galleryAlt.makiNigiri",
  },
  {
    src: "/images/Gallery/4-768x512.jpg",
    altKey: "galleryAlt.artfulPrep",
  },
  {
    src: "/images/Gallery/5-768x512.jpg",
    altKey: "galleryAlt.traditional",
  },
  {
    src: "/images/Gallery/6-768x512.jpg",
    altKey: "galleryAlt.freshIngredients",
  },
  {
    src: "/images/Gallery/7-768x512.jpg",
    altKey: "galleryAlt.premiumNigiri",
  },
  {
    src: "/images/Gallery/8-768x512.jpg",
    altKey: "galleryAlt.assorted",
  },
  {
    src: "/images/Gallery/9-768x512.jpg",
    altKey: "galleryAlt.assortedRolls",
  },
  {
    src: "/images/Gallery/10-768x512.jpg",
    altKey: "galleryAlt.beautifullyCrafted",
  },
  {
    src: "/images/Gallery/11-768x512.jpg",
    altKey: "galleryAlt.traditional",
  },
];

// Featured gallery images - curated selection of ~13 best images
export const featuredGalleryImages = galleryImages.filter(img => img.featured);