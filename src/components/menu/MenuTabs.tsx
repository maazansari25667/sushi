"use client";

import { useState } from "react";
import { StandardCard } from "@/components/ui/nc-card";
import { MenuCategory, MenuCategoryId, menuCategories } from "@/data/menu";

const MenuTabs = () => {
  const [activeId, setActiveId] = useState<MenuCategoryId>("sushi");

  const activeCategory =
    menuCategories.find((category) => category.id === activeId) ??
    menuCategories[0];

  return (
    <div className="bg-gradient-to-br from-slate-50/80 via-white/60 to-slate-50/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-glass">
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="overflow-x-auto">
          <div className="flex gap-2 min-w-max pb-2">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 whitespace-nowrap ${
                  category.id === activeId
                    ? "bg-orange-500 text-white shadow-lg transform scale-105 backdrop-blur-sm"
                    : "bg-white/80 backdrop-blur-md text-slate-600 border border-white/40 hover:bg-white/90 hover:border-orange-200 hover:text-orange-600 shadow-sm"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {activeCategory.items.map((item, index) => (
          <StandardCard
            key={index}
            className="flex flex-col justify-between p-4 backdrop-blur-xl bg-white/80 hover:bg-white/90 transition-all duration-300"
          >
            <div>
              {/* Name and Price Row */}
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="text-sm font-semibold uppercase text-slate-900 leading-tight">
                  {item.name}
                </h3>
                <span className="text-sm font-bold text-orange-600 whitespace-nowrap">
                  {item.price}
                </span>
              </div>
              
              {/* Dotted Separator */}
              <div className="h-px w-full border-b border-dotted border-slate-200 mb-3" />
              
              {/* Description */}
              {item.description && (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              )}
            </div>
          </StandardCard>
        ))}
      </div>

      {/* Category Summary */}
      <div className="mt-6 text-center">
        <p className="text-xs text-slate-500">
          {activeCategory.items.length} items in {activeCategory.label}
        </p>
      </div>
    </div>
  );
};

export default MenuTabs;