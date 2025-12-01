"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionMuted } from "@/components/Section";
import { jacketCategories, jackets, type JacketCategoryId, type JacketItem } from "@/data/jackets";
import JacketCard from "@/components/jackets/JacketCard";
import { BottomSheet } from "@/components/ui/bottom-sheet";
import { ChevronDown, SlidersHorizontal, X } from "lucide-react";

// Types for filters and sorting
type SortOption = "popular" | "price-low" | "price-high" | "discount-high";
type PriceRange = "under-1500" | "1500-3000" | "over-3000" | null;

// Available filter options
const SIZES = ["S", "M", "L", "XL"];
const COLORS = ["Svart", "Marinblå", "Grå", "Grön", "Beige", "Röd"];
const PRICE_RANGES = [
  { id: "under-1500" as const, label: "Under 1 500 kr", min: 0, max: 1500 },
  { id: "1500-3000" as const, label: "1 500–3 000 kr", min: 1500, max: 3000 },
  { id: "over-3000" as const, label: "Över 3 000 kr", min: 3000, max: Infinity },
];

const SORT_OPTIONS = [
  { id: "popular" as const, label: "Mest populära" },
  { id: "price-low" as const, label: "Lägst pris" },
  { id: "price-high" as const, label: "Högst pris" },
  { id: "discount-high" as const, label: "Högst rabatt" },
];

// Breadcrumb component
const JacketsBreadcrumb = () => {
  const breadcrumbs = [
    { label: "Hem", href: "/" },
    { label: "Man", href: "#" },
    { label: "Kläder", href: "#" },
    { label: "Jackor", href: "/jackets", active: true },
  ];

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-sm">
        {breadcrumbs.map((crumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2 text-muted-foreground">/</span>
            )}
            {crumb.active ? (
              <span className="font-medium text-primary">{crumb.label}</span>
            ) : (
              <Link
                href={crumb.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

// Filter Panel Component (reusable for desktop sidebar and mobile drawer)
interface FilterPanelProps {
  selectedSizes: string[];
  selectedColors: string[];
  selectedPriceRange: PriceRange;
  onSizeToggle: (size: string) => void;
  onColorToggle: (color: string) => void;
  onPriceRangeChange: (range: PriceRange) => void;
  onClearAll: () => void;
}

const FilterPanel = ({
  selectedSizes,
  selectedColors,
  selectedPriceRange,
  onSizeToggle,
  onColorToggle,
  onPriceRangeChange,
  onClearAll,
}: FilterPanelProps) => {
  const hasActiveFilters = selectedSizes.length > 0 || selectedColors.length > 0 || selectedPriceRange !== null;

  return (
    <div className="space-y-6">
      {/* Clear All Button */}
      {hasActiveFilters && (
        <button
          onClick={onClearAll}
          className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1"
        >
          <X className="h-4 w-4" />
          Rensa alla filter
        </button>
      )}

      {/* Size Filter */}
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
          Storlek
        </h3>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => onSizeToggle(size)}
              className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${
                selectedSizes.includes(size)
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-foreground hover:border-primary/50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
          Färg
        </h3>
        <div className="space-y-2">
          {COLORS.map((color) => (
            <label
              key={color}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => onColorToggle(color)}
                className="w-4 h-4 rounded border-border text-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {color}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground mb-3">
          Pris
        </h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label
              key={range.id}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="radio"
                name="price-range"
                checked={selectedPriceRange === range.id}
                onChange={() => onPriceRangeChange(range.id)}
                className="w-4 h-4 border-border text-primary focus:ring-2 focus:ring-primary/20"
              />
              <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                {range.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function JacketsPage() {
  // Category state
  const [selectedCategory, setSelectedCategory] = useState<JacketCategoryId>("all");

  // Filter states
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>(null);

  // Sorting state
  const [sortBy, setSortBy] = useState<SortOption>("popular");

  // Pagination state
  const [itemsToShow, setItemsToShow] = useState(12);

  // Mobile filter drawer state
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Filter toggle handlers
  const toggleSize = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const clearAllFilters = () => {
    setSelectedSizes([]);
    setSelectedColors([]);
    setSelectedPriceRange(null);
  };

  // Compute filtered and sorted jackets
  const processedJackets = useMemo(() => {
    // Step 1: Filter by category
    let filtered = selectedCategory === "all"
      ? jackets
      : jackets.filter(jacket => jacket.categoryId === selectedCategory);

    // Step 2: Apply additional filters
    // Size filter (note: jacket data doesn't have size, so this is for future-proofing)
    // For now, size filter won't reduce results but UI is ready
    if (selectedSizes.length > 0) {
      // Future: filtered = filtered.filter(jacket => selectedSizes.includes(jacket.size))
      // Currently: no effect since jackets don't have size field
    }

    // Color filter
    if (selectedColors.length > 0) {
      filtered = filtered.filter(jacket =>
        jacket.color && selectedColors.includes(jacket.color)
      );
    }

    // Price range filter
    if (selectedPriceRange) {
      const range = PRICE_RANGES.find(r => r.id === selectedPriceRange);
      if (range) {
        filtered = filtered.filter(
          jacket => jacket.priceSek >= range.min && jacket.priceSek < range.max
        );
      }
    }

    // Step 3: Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.priceSek - b.priceSek);
        break;
      case "price-high":
        sorted.sort((a, b) => b.priceSek - a.priceSek);
        break;
      case "discount-high":
        sorted.sort((a, b) => {
          const discountA = a.discountPercentage || 0;
          const discountB = b.discountPercentage || 0;
          return discountB - discountA;
        });
        break;
      case "popular":
      default:
        // Keep original order (most popular)
        break;
    }

    return sorted;
  }, [selectedCategory, selectedSizes, selectedColors, selectedPriceRange, sortBy]);

  // Paginated jackets
  const displayedJackets = processedJackets.slice(0, itemsToShow);
  const hasMore = itemsToShow < processedJackets.length;

  // Get current category label
  const currentCategory = jacketCategories.find(cat => cat.id === selectedCategory);

  return (
    <SectionMuted>
      <div className="container mx-auto px-4 md:px-6">
        {/* Breadcrumbs */}
        <JacketsBreadcrumb />

        {/* Hero / Header Section */}
        <div className="mb-12 text-center">
          <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans mb-3">
            Premium Swedish Fashion
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-display-lg xl:text-display-xl font-bold tracking-tighter bg-gradient-to-r from-foreground via-primary to-orange-600 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(251,146,60,0.3)]">
            Jackor herr
          </h1>
          <p className="font-sans font-light text-lg md:text-xl text-muted-foreground max-w-2xl mt-6 mx-auto leading-relaxed tracking-wide">
            Upptäck vårt sortiment av jackor för herr – från varma vinterjackor och dunjackor
            till lätta vår- och höstjackor. Här hittar du allt från parkas och puffers till
            bomberjackor för både vardag och stad.
          </p>
        </div>

        {/* Category Navigation Bar (Tabs/Pills) */}
        <div className="mb-8">
          <div className="w-full overflow-x-auto pb-2">
            <div className="inline-flex min-w-max flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 px-4 md:px-0">
              {jacketCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category.id
                      ? "bg-primary/75 text-primary-foreground shadow-md shadow-primary/25"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  aria-pressed={selectedCategory === category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content: Filter Sidebar + Products Grid */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filter Sidebar - Hidden on mobile */}
          <aside className="hidden lg:block lg:w-64 flex-shrink-0">
            <div className="sticky top-24 bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-sm">
              <h2 className="font-bold text-lg mb-6 text-foreground">Filter</h2>
              <FilterPanel
                selectedSizes={selectedSizes}
                selectedColors={selectedColors}
                selectedPriceRange={selectedPriceRange}
                onSizeToggle={toggleSize}
                onColorToggle={toggleColor}
                onPriceRangeChange={setSelectedPriceRange}
                onClearAll={clearAllFilters}
              />
            </div>
          </aside>

          {/* Products Section */}
          <section className="flex-1">
            {/* Toolbar: Mobile Filter Button + Sort + Count */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setIsFilterDrawerOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-medium transition-colors"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Filter
                {(selectedSizes.length > 0 || selectedColors.length > 0 || selectedPriceRange) && (
                  <span className="ml-1 px-2 py-0.5 bg-primary text-primary-foreground text-xs rounded-full">
                    {selectedSizes.length + selectedColors.length + (selectedPriceRange ? 1 : 0)}
                  </span>
                )}
              </button>

              {/* Product Count */}
              <div className="text-sm md:text-base text-muted-foreground">
                <span className="font-semibold text-foreground">{processedJackets.length}</span> produkter
                {selectedCategory !== "all" && currentCategory && (
                  <span> – {currentCategory.label}</span>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none w-full sm:w-auto px-4 py-2.5 pr-10 bg-background border border-border rounded-lg text-sm font-medium text-foreground cursor-pointer hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>

            {/* Jackets Grid */}
            {displayedJackets.length > 0 ? (
              <>
                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.08,
                        delayChildren: 0.1
                      }
                    },
                    hidden: {}
                  }}
                >
                  {displayedJackets.map((jacket) => (
                    <motion.div
                      key={jacket.id}
                      variants={{
                        hidden: { opacity: 0, y: 30, scale: 0.95 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          scale: 1,
                          transition: {
                            type: "spring",
                            stiffness: 260,
                            damping: 20
                          }
                        }
                      }}
                    >
                      <JacketCard jacket={jacket} />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Load More Button */}
                {hasMore && (
                  <div className="mt-12 text-center">
                    <button
                      onClick={() => setItemsToShow(prev => prev + 12)}
                      className="px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                    >
                      Visa fler ({processedJackets.length - itemsToShow} kvar)
                    </button>
                  </div>
                )}
              </>
            ) : (
              // Empty state
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-2">
                  Inga jackor hittades med valda filter.
                </p>
                <button
                  onClick={clearAllFilters}
                  className="text-primary hover:text-primary/80 font-medium text-sm"
                >
                  Rensa filter och försök igen
                </button>
              </div>
            )}
          </section>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <BottomSheet
        isOpen={isFilterDrawerOpen}
        onClose={() => setIsFilterDrawerOpen(false)}
        title="Filter"
        height="lg"
      >
        <div className="px-6 py-4">
          <FilterPanel
            selectedSizes={selectedSizes}
            selectedColors={selectedColors}
            selectedPriceRange={selectedPriceRange}
            onSizeToggle={toggleSize}
            onColorToggle={toggleColor}
            onPriceRangeChange={setSelectedPriceRange}
            onClearAll={clearAllFilters}
          />

          {/* Apply Button */}
          <div className="mt-8 pt-6 border-t border-border">
            <button
              onClick={() => setIsFilterDrawerOpen(false)}
              className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-md transition-all"
            >
              Visa {processedJackets.length} produkter
            </button>
          </div>
        </div>
      </BottomSheet>
    </SectionMuted>
  );
}
