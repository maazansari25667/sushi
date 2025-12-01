/**
 * Jackets Data Model
 * 
 * This module defines the data structure for jacket categories and items.
 * All image paths point to real files in public/images/Jackets/
 */

// ============================================================================
// TYPES
// ============================================================================

export type JacketCategoryId =
  | "all"
  | "winter-jackets"
  | "autumn-jackets"
  | "down-jackets"
  | "lightweight-down"
  | "parka"
  | "puffers"
  | "bomber-jackets"
  | "spring-jackets"
  | "vests";

export interface JacketCategory {
  id: JacketCategoryId;
  label: string;
  description?: string;
}

export interface JacketItem {
  id: string;
  name: string;
  brand: string;
  categoryId: JacketCategoryId;
  description: string;
  priceSek: number;
  originalPriceSek?: number;
  discountPercentage?: number;
  isNew?: boolean;
  isLimited?: boolean;
  color?: string;
  warmthLevel?: "light" | "medium" | "heavy";
  seasonTags?: string[];
  imagePath: string;
}

// ============================================================================
// CATEGORIES
// ============================================================================

export const jacketCategories: JacketCategory[] = [
  {
    id: "all",
    label: "Alla jackor",
    description: "Hela vårt sortiment av jackor för herr",
  },
  {
    id: "winter-jackets",
    label: "Vinterjackor",
    description: "Varma vinterjackor för kalla dagar",
  },
  {
    id: "autumn-jackets",
    label: "Höstjackor",
    description: "Perfekta jackor för höstens växlande väder",
  },
  {
    id: "down-jackets",
    label: "Dunjackor",
    description: "Lätta och varma dunjackor med premiumisolering",
  },
  {
    id: "lightweight-down",
    label: "Lätta dunjackor",
    description: "Packbara och lätta dunjackor för aktiva dagar",
  },
  {
    id: "parka",
    label: "Parkas",
    description: "Långa parkas med extra skydd mot väder och vind",
  },
  {
    id: "puffers",
    label: "Puffers",
    description: "Moderna pufferjackor med stilren design",
  },
  {
    id: "bomber-jackets",
    label: "Bomberjackor",
    description: "Klassiska bomberjackor i olika material",
  },
  {
    id: "spring-jackets",
    label: "Vårjackor",
    description: "Lätta jackor perfekta för våren",
  },
  {
    id: "vests",
    label: "Västar",
    description: "Ärmlösa västar för extra värme",
  },
];

// ============================================================================
// JACKET ITEMS
// ============================================================================

export const jackets: JacketItem[] = [
  // ========== WINTER JACKETS ==========
  {
    id: "winter-001",
    name: "Premium Dunparkas med Huva",
    brand: "Polo Ralph Lauren",
    categoryId: "winter-jackets",
    description: "Varm dunparkas med avtagbar huva och premium dun. Perfekt för skandinaviska vintrar med hög värmeisolering.",
    priceSek: 4999,
    originalPriceSek: 6999,
    discountPercentage: 29,
    isNew: false,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "stad"],
    imagePath: "/images/Jackets/Winter jackets/2231102D-956_1.webp",
  },
  {
    id: "winter-002",
    name: "Teknisk Vinterjacka",
    brand: "Sail Racing",
    categoryId: "winter-jackets",
    description: "Teknisk vinterjacka med avancerad värmeisolering och vattentåligt yttertyg. Funktionell design för aktiva dagar.",
    priceSek: 5499,
    isNew: true,
    color: "Marinblå",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "sport"],
    imagePath: "/images/Jackets/Winter jackets/2331116D-951_1.webp",
  },
  {
    id: "winter-003",
    name: "Classic Vinterdunjacka",
    brand: "Tommy Hilfiger",
    categoryId: "winter-jackets",
    description: "Klassisk vinterdunjacka med tidlös design. Varm och bekväm med justerbara detaljer för optimal passform.",
    priceSek: 3999,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter"],
    imagePath: "/images/Jackets/Winter jackets/2331116D-999_01.webp",
  },
  {
    id: "winter-004",
    name: "Urban Vinterparka",
    brand: "Morris",
    categoryId: "winter-jackets",
    description: "Lång vinterparka med skandinavisk design. Extra skydd mot vind och kyla med päls på huvan.",
    priceSek: 4499,
    originalPriceSek: 5999,
    discountPercentage: 25,
    color: "Mörkgrön",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "stad"],
    imagePath: "/images/Jackets/Winter jackets/2431112-999_1.webp",
  },
  {
    id: "winter-005",
    name: "Performance Vinterrock",
    brand: "Canada Goose",
    categoryId: "winter-jackets",
    description: "Premium vinterrock med exceptionell värmeisolering. Designad för extrema väderförhållanden.",
    priceSek: 8999,
    isNew: true,
    isLimited: true,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter"],
    imagePath: "/images/Jackets/Winter jackets/2531108N-999_1.webp",
  },
  {
    id: "winter-006",
    name: "Thermore Vinterjacka",
    brand: "J.Lindeberg",
    categoryId: "winter-jackets",
    description: "Modern vinterjacka med Thermore-isolering. Varm utan att vara för skrymmande, perfekt för stadslivet.",
    priceSek: 3499,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "stad"],
    imagePath: "/images/Jackets/Winter jackets/2531116-999_1.webp",
  },

  // ========== AUTUMN JACKETS ==========
  {
    id: "autumn-001",
    name: "Lätt Höstjacka",
    brand: "Filippa K",
    categoryId: "autumn-jackets",
    description: "Minimalistisk höstjacka i vatten­avvisande material. Perfekt för höstens skiftande väder.",
    priceSek: 2199,
    color: "Beige",
    warmthLevel: "light",
    seasonTags: ["höst", "vår"],
    imagePath: "/images/Jackets/Autumn jackets/2231102D-956_1.webp",
  },
  {
    id: "autumn-002",
    name: "Hybrid Höstjacka",
    brand: "Peak Performance",
    categoryId: "autumn-jackets",
    description: "Hybridjacka med kombination av isolering och stretch. Flexibel och bekväm för aktivt bruk.",
    priceSek: 2799,
    isNew: true,
    color: "Mörkblå",
    warmthLevel: "medium",
    seasonTags: ["höst", "sport"],
    imagePath: "/images/Jackets/Autumn jackets/2331116D-999_01.webp",
  },
  {
    id: "autumn-003",
    name: "Regnskyddad Höstjacka",
    brand: "Didriksons",
    categoryId: "autumn-jackets",
    description: "Vattentät höstjacka med tape-förslutna sömmar. Håller dig torr i höstregnet.",
    priceSek: 1899,
    originalPriceSek: 2499,
    discountPercentage: 24,
    color: "Olivgrön",
    warmthLevel: "light",
    seasonTags: ["höst", "outdoor"],
    imagePath: "/images/Jackets/Autumn jackets/3033874-3916_1.webp",
  },
  {
    id: "autumn-004",
    name: "Windbreaker Höst",
    brand: "Rains",
    categoryId: "autumn-jackets",
    description: "Stilren windbreaker med minimalistisk design. Vindtät och vattenavvisande.",
    priceSek: 1599,
    color: "Marinblå",
    warmthLevel: "light",
    seasonTags: ["höst", "stad"],
    imagePath: "/images/Jackets/Autumn jackets/600841-510_1.webp",
  },
  {
    id: "autumn-005",
    name: "Softshelljacka Höst",
    brand: "Haglöfs",
    categoryId: "autumn-jackets",
    description: "Softshell med stretch och andningsförmåga. Perfekt för aktiva höstdagar.",
    priceSek: 2299,
    color: "Grå",
    warmthLevel: "medium",
    seasonTags: ["höst", "sport"],
    imagePath: "/images/Jackets/Autumn jackets/710968278-002_1.webp",
  },
  {
    id: "autumn-006",
    name: "Technical Höstjacka",
    brand: "Arc'teryx",
    categoryId: "autumn-jackets",
    description: "Teknisk höstjacka med GORE-TEX. Premium kvalitet för seriösa äventyr.",
    priceSek: 4999,
    isLimited: true,
    color: "Svart",
    warmthLevel: "medium",
    seasonTags: ["höst", "outdoor"],
    imagePath: "/images/Jackets/Autumn jackets/710968281-001_1 (1).webp",
  },

  // ========== DOWN JACKETS ==========
  {
    id: "down-001",
    name: "Premium Dunjacka 800 Fill",
    brand: "Canada Goose",
    categoryId: "down-jackets",
    description: "Exklusiv dunjacka med 800 fill power dun. Exceptionell värmeisolering i ett lätt plagg.",
    priceSek: 6999,
    isNew: true,
    isLimited: true,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter"],
    imagePath: "/images/Jackets/Down jackets/2231102D-956_1.webp",
  },
  {
    id: "down-002",
    name: "Hooded Down Jacket",
    brand: "Patagonia",
    categoryId: "down-jackets",
    description: "Miljövänlig dunjacka med återvunnet dun. Varm, hållbar och ansvarsfull.",
    priceSek: 4499,
    originalPriceSek: 5999,
    discountPercentage: 25,
    color: "Marinblå",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "outdoor"],
    imagePath: "/images/Jackets/Down jackets/2331116D-951_1.webp",
  },
  {
    id: "down-003",
    name: "Urban Down Jacket",
    brand: "Moncler",
    categoryId: "down-jackets",
    description: "Lyxig dunjacka med slimmad passform. Stilren design för stadslivet.",
    priceSek: 8999,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "stad"],
    imagePath: "/images/Jackets/Down jackets/2331116D-999_01.webp",
  },
  {
    id: "down-004",
    name: "Sport Down Jacket",
    brand: "The North Face",
    categoryId: "down-jackets",
    description: "Aktivitetsinriktad dunjacka med strategisk isolering. Perfekt för skidåkning och vinteridrott.",
    priceSek: 3999,
    color: "Röd",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "sport"],
    imagePath: "/images/Jackets/Down jackets/2431112-999_1.webp",
  },
  {
    id: "down-005",
    name: "Packable Down Jacket",
    brand: "Uniqlo",
    categoryId: "down-jackets",
    description: "Ultralätt dunjacka som packas i egen ficka. Perfekt som extra lager på resan.",
    priceSek: 1499,
    isNew: true,
    color: "Grå",
    warmthLevel: "medium",
    seasonTags: ["höst", "vinter"],
    imagePath: "/images/Jackets/Down jackets/2531101-999_1.webp",
  },
  {
    id: "down-006",
    name: "Insulated Down Parka",
    brand: "Woolrich",
    categoryId: "down-jackets",
    description: "Lång dunparkas med klassisk design. Extra skydd mot vind och kyla.",
    priceSek: 5499,
    color: "Mörkgrön",
    warmthLevel: "heavy",
    seasonTags: ["vinter"],
    imagePath: "/images/Jackets/Down jackets/2531116-999_1.webp",
  },

  // ========== LIGHTWEIGHT DOWN ==========
  {
    id: "lightweight-001",
    name: "Ultralätt Dunjacka",
    brand: "Montbell",
    categoryId: "lightweight-down",
    description: "Extremt lätt dunjacka med 900 fill power. Packas minimalt och väger nästan ingenting.",
    priceSek: 2499,
    isNew: true,
    color: "Blå",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Lightweight down/2227MB-444_1.webp",
  },
  {
    id: "lightweight-002",
    name: "Travel Down Jacket",
    brand: "Arc'teryx",
    categoryId: "lightweight-down",
    description: "Resevänlig lätt dunjacka med kompakt packmått. Perfekt för flygningar och resor.",
    priceSek: 2999,
    color: "Grå",
    warmthLevel: "light",
    seasonTags: ["vår", "höst", "resa"],
    imagePath: "/images/Jackets/Lightweight down/G80526-020_1.webp",
  },
  {
    id: "lightweight-003",
    name: "Hybrid Light Down",
    brand: "Houdini",
    categoryId: "lightweight-down",
    description: "Hybriddesign med dun på kroppen och stretch i sidorna. Maximal rörlighet.",
    priceSek: 2199,
    originalPriceSek: 2999,
    discountPercentage: 27,
    color: "Svart",
    warmthLevel: "light",
    seasonTags: ["vår", "höst", "sport"],
    imagePath: "/images/Jackets/Lightweight down/G80526-030_1.webp",
  },
  {
    id: "lightweight-004",
    name: "Minimalist Down Vest",
    brand: "Klättermusen",
    categoryId: "lightweight-down",
    description: "Lätt dunväst med skandinavisk design. Extra värme utan begränsad rörlighet.",
    priceSek: 1699,
    color: "Olivgrön",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Lightweight down/M35MJ127-292_1.webp",
  },
  {
    id: "lightweight-005",
    name: "Compact Down Jacket",
    brand: "Norrøna",
    categoryId: "lightweight-down",
    description: "Kompakt lätt dunjacka med nordisk funktionalitet. Perfekt som mellanlager.",
    priceSek: 2299,
    color: "Marinblå",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Lightweight down/PMHYRB02-0710_1.webp",
  },
  {
    id: "lightweight-006",
    name: "Packable Light Puffer",
    brand: "Bergans",
    categoryId: "lightweight-down",
    description: "Packbar lätt puffer med PrimaLoft isolering. Syntetfyllning som tål fukt.",
    priceSek: 1899,
    isNew: true,
    color: "Grön",
    warmthLevel: "light",
    seasonTags: ["vår", "höst", "outdoor"],
    imagePath: "/images/Jackets/Lightweight down/PMHYWU02-117_1.webp",
  },

  // ========== PARKAS ==========
  {
    id: "parka-001",
    name: "Arctic Parka",
    brand: "Woolrich",
    categoryId: "parka",
    description: "Ikonisk Arctic Parka med päls och premiumisolering. Designad för arktiska förhållanden.",
    priceSek: 7999,
    isLimited: true,
    color: "Marinblå",
    warmthLevel: "heavy",
    seasonTags: ["vinter"],
    imagePath: "/images/Jackets/Parka/2531122-999_1.webp",
  },
  {
    id: "parka-002",
    name: "Urban Explorer Parka",
    brand: "Helly Hansen",
    categoryId: "parka",
    description: "Lång stadsparka med vattentätt yttertyg. Perfekt för skandinaviska vintrar.",
    priceSek: 3999,
    color: "Olivgrön",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "stad"],
    imagePath: "/images/Jackets/Parka/30255-Olive_1.webp",
  },
  {
    id: "parka-003",
    name: "Downtown Parka",
    brand: "The North Face",
    categoryId: "parka",
    description: "Klassisk downtown parka med 600 fill dun. Slimmad passform för modern look.",
    priceSek: 5499,
    originalPriceSek: 6999,
    discountPercentage: 21,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "stad"],
    imagePath: "/images/Jackets/Parka/30999-Black_1.webp",
  },
  {
    id: "parka-004",
    name: "Expedition Parka",
    brand: "Canada Goose",
    categoryId: "parka",
    description: "Expedition-grade parka för extrema vintrar. Den varmaste i kollektionen.",
    priceSek: 12999,
    isNew: true,
    isLimited: true,
    color: "Svart",
    warmthLevel: "heavy",
    seasonTags: ["vinter"],
    imagePath: "/images/Jackets/Parka/50547078-404_1.webp",
  },
  {
    id: "parka-005",
    name: "Technical Parka",
    brand: "Arc'teryx",
    categoryId: "parka",
    description: "Teknisk parka med GORE-TEX och strategisk isolering. Premium outdoor-kvalitet.",
    priceSek: 8999,
    color: "Grå",
    warmthLevel: "heavy",
    seasonTags: ["vinter", "outdoor"],
    imagePath: "/images/Jackets/Parka/60012-510_001.webp",
  },
  {
    id: "parka-006",
    name: "Heritage Parka",
    brand: "Fjällräven",
    categoryId: "parka",
    description: "Klassisk parka i G-1000 material. Tidlös skandinavisk design med modern funktion.",
    priceSek: 4499,
    color: "Grön",
    warmthLevel: "heavy",
    seasonTags: ["vinter"],
    imagePath: "/images/Jackets/Parka/FMOW11487-9999_1.webp",
  },

  // ========== PUFFERS ==========
  {
    id: "puffer-001",
    name: "Classic Puffer",
    brand: "Tommy Hilfiger",
    categoryId: "puffers",
    description: "Klassisk pufferjacka med ikonisk design. Varm och stilren för vardagen.",
    priceSek: 2299,
    color: "Röd",
    warmthLevel: "medium",
    seasonTags: ["höst", "vinter"],
    imagePath: "/images/Jackets/Puffers/2331116D-698_01.webp",
  },
  {
    id: "puffer-002",
    name: "Oversized Puffer",
    brand: "Acne Studios",
    categoryId: "puffers",
    description: "Oversized puffer med skandinavisk minimalism. Modernt och bekvämt.",
    priceSek: 4999,
    isNew: true,
    color: "Svart",
    warmthLevel: "medium",
    seasonTags: ["höst", "vinter", "stad"],
    imagePath: "/images/Jackets/Puffers/2331116D-999_01.webp",
  },
  {
    id: "puffer-003",
    name: "Sport Puffer",
    brand: "Peak Performance",
    categoryId: "puffers",
    description: "Aktiv puffer med stretch-paneler. Perfekt för sport och träning.",
    priceSek: 2799,
    color: "Marinblå",
    warmthLevel: "medium",
    seasonTags: ["höst", "vinter", "sport"],
    imagePath: "/images/Jackets/Puffers/2431112-999_1.webp",
  },
  {
    id: "puffer-004",
    name: "Lightweight Puffer",
    brand: "Uniqlo",
    categoryId: "puffers",
    description: "Lätt puffer med ultralätt isolering. Packbar och praktisk.",
    priceSek: 1299,
    originalPriceSek: 1799,
    discountPercentage: 28,
    color: "Grå",
    warmthLevel: "light",
    seasonTags: ["höst"],
    imagePath: "/images/Jackets/Puffers/7006534-433_1.webp",
  },
  {
    id: "puffer-005",
    name: "Hooded Puffer",
    brand: "Napapijri",
    categoryId: "puffers",
    description: "Puffer med huva och geografiska detaljer. Italiensk design med nordisk inspiration.",
    priceSek: 3299,
    color: "Orange",
    warmthLevel: "medium",
    seasonTags: ["höst", "vinter"],
    imagePath: "/images/Jackets/Puffers/7006534-604_1.webp",
  },
  {
    id: "puffer-006",
    name: "Quilted Puffer",
    brand: "Gant",
    categoryId: "puffers",
    description: "Quiltad puffer med preppy design. Klassisk amerikansk stil.",
    priceSek: 2499,
    color: "Marinblå",
    warmthLevel: "medium",
    seasonTags: ["höst", "vinter", "stad"],
    imagePath: "/images/Jackets/Puffers/7006535-5_1.webp",
  },

  // ========== BOMBER JACKETS ==========
  {
    id: "bomber-001",
    name: "MA-1 Bomber Classic",
    brand: "Alpha Industries",
    categoryId: "bomber-jackets",
    description: "Klassisk MA-1 bomberjacka med militärt arv. Ikonisk design sedan 1958.",
    priceSek: 1999,
    color: "Olivgrön",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Bomber jackets/50494621-404_10.webp",
  },
  {
    id: "bomber-002",
    name: "Nylon Bomber",
    brand: "Acne Studios",
    categoryId: "bomber-jackets",
    description: "Minimalistisk bomber i premium nylon. Skandinavisk design när den är som bäst.",
    priceSek: 3499,
    isNew: true,
    color: "Svart",
    warmthLevel: "light",
    seasonTags: ["vår", "höst", "stad"],
    imagePath: "/images/Jackets/Bomber jackets/7006547-264_1.webp",
  },
  {
    id: "bomber-003",
    name: "Reversible Bomber",
    brand: "Our Legacy",
    categoryId: "bomber-jackets",
    description: "Vändbar bomber med två olika looks. Funktionell och stilfull.",
    priceSek: 2799,
    color: "Grön/Svart",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Bomber jackets/JA200486-300_1.webp",
  },
  {
    id: "bomber-004",
    name: "Leather Bomber",
    brand: "Schott NYC",
    categoryId: "bomber-jackets",
    description: "Premium bomber i äkta läder. Tidlös kvalitet som blir bättre med åren.",
    priceSek: 6999,
    isLimited: true,
    color: "Brun",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Bomber jackets/M34ML313-292_1.webp",
  },
  {
    id: "bomber-005",
    name: "Technical Bomber",
    brand: "Stone Island",
    categoryId: "bomber-jackets",
    description: "Teknisk bomber med innovative material. Italiensk funktionalitet och stil.",
    priceSek: 4999,
    isNew: true,
    color: "Mörkblå",
    warmthLevel: "medium",
    seasonTags: ["höst"],
    imagePath: "/images/Jackets/Bomber jackets/MBO021PA067-02083_1.webp",
  },

  // ========== SPRING JACKETS ==========
  {
    id: "spring-001",
    name: "Windbreaker Spring",
    brand: "Rains",
    categoryId: "spring-jackets",
    description: "Lätt windbreaker perfekt för våren. Vattenavvisande och packbar.",
    priceSek: 1299,
    color: "Marinblå",
    warmthLevel: "light",
    seasonTags: ["vår"],
    imagePath: "/images/Jackets/Spring Jackets/1000362-979_1.webp",
  },
  {
    id: "spring-002",
    name: "Spring Coach Jacket",
    brand: "Carhartt WIP",
    categoryId: "spring-jackets",
    description: "Coach jacket med streetwear-känsla. Casual och bekväm.",
    priceSek: 1499,
    isNew: true,
    color: "Grön",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Spring Jackets/1000395-330_1.webp",
  },
  {
    id: "spring-003",
    name: "Light Shell Jacket",
    brand: "Haglöfs",
    categoryId: "spring-jackets",
    description: "Teknisk shelljacka för våren. Andningsbar och vattentät.",
    priceSek: 1999,
    originalPriceSek: 2699,
    discountPercentage: 26,
    color: "Grå",
    warmthLevel: "light",
    seasonTags: ["vår", "sport"],
    imagePath: "/images/Jackets/Spring Jackets/3033874-3916_1.webp",
  },
  {
    id: "spring-004",
    name: "Packable Spring Jacket",
    brand: "Fjällräven",
    categoryId: "spring-jackets",
    description: "Packbar vårjacka i G-1000 Lite. Skandinavisk funktionalitet.",
    priceSek: 1799,
    color: "Grön",
    warmthLevel: "light",
    seasonTags: ["vår"],
    imagePath: "/images/Jackets/Spring Jackets/3033874-6055_1.webp",
  },
  {
    id: "spring-005",
    name: "Urban Spring Jacket",
    brand: "Norse Projects",
    categoryId: "spring-jackets",
    description: "Minimalistisk stadsjacka för våren. Tidlös design och perfekt passform.",
    priceSek: 2299,
    color: "Beige",
    warmthLevel: "light",
    seasonTags: ["vår", "stad"],
    imagePath: "/images/Jackets/Spring Jackets/G80526-020_1 (1).webp",
  },
  {
    id: "spring-006",
    name: "Spring Field Jacket",
    brand: "Belstaff",
    categoryId: "spring-jackets",
    description: "Field jacket med brittiskt arv. Klassisk design för moderna äventyr.",
    priceSek: 3999,
    color: "Khaki",
    warmthLevel: "light",
    seasonTags: ["vår", "höst"],
    imagePath: "/images/Jackets/Spring Jackets/JA200869-300_1.webp",
  },
];

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all jackets for a specific category
 */
export function getJacketsByCategory(categoryId: JacketCategoryId): JacketItem[] {
  if (categoryId === "all") {
    return jackets;
  }
  return jackets.filter((jacket) => jacket.categoryId === categoryId);
}

/**
 * Get all jackets that are currently on sale (have a discount)
 */
export function getDiscountedJackets(): JacketItem[] {
  return jackets.filter(
    (jacket) => jacket.originalPriceSek && jacket.originalPriceSek > jacket.priceSek
  );
}

/**
 * Get all new arrivals
 */
export function getNewJackets(): JacketItem[] {
  return jackets.filter((jacket) => jacket.isNew === true);
}

/**
 * Get all limited edition jackets
 */
export function getLimitedJackets(): JacketItem[] {
  return jackets.filter((jacket) => jacket.isLimited === true);
}

/**
 * Get a single jacket by ID
 */
export function getJacketById(id: string): JacketItem | undefined {
  return jackets.find((jacket) => jacket.id === id);
}

/**
 * Get jackets by warmth level
 */
export function getJacketsByWarmth(warmthLevel: "light" | "medium" | "heavy"): JacketItem[] {
  return jackets.filter((jacket) => jacket.warmthLevel === warmthLevel);
}

/**
 * Get jackets by season tag
 */
export function getJacketsBySeason(season: string): JacketItem[] {
  return jackets.filter((jacket) => jacket.seasonTags?.includes(season));
}

/**
 * Get jackets by brand
 */
export function getJacketsByBrand(brand: string): JacketItem[] {
  return jackets.filter((jacket) => jacket.brand.toLowerCase() === brand.toLowerCase());
}

/**
 * Get category by ID
 */
export function getCategoryById(categoryId: JacketCategoryId): JacketCategory | undefined {
  return jacketCategories.find((cat) => cat.id === categoryId);
}
