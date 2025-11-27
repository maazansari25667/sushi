"use client";
import { qoplaOrderUrl, sitePhoneDisplay, sitePhoneHref } from "@/config/site";
import { DishCarousel } from "@/components/Common/DishCarousel";
import { menuCarouselImages } from "@/data/menuImages";
import { menuCategories } from "@/data/menu";
import Enhanced3DMenuCard from "@/components/menu/Enhanced3DMenuCard";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { StandardCard } from "@/components/ui/nc-card";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} from "@/components/ui/tabs";
import { showOrderSuccessToast } from "@/lib/toast";
import { useState, useEffect } from "react";
import { SkeletonMenuGrid } from "@/components/ui/skeleton";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { SectionMuted } from "@/components/Section";
import { BottomCtaBar } from "@/components/layout/BottomCtaBar";
import { motion } from "framer-motion";

const MenuPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useLanguage();

  // Helper function to resolve nested translation keys
  const getTranslation = (key: string) => {
    const keys = key.split('.');
    let value: any = t;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Map category IDs to translation keys
  const getCategoryLabel = (categoryId: string) => {
    const labelMap: Record<string, string> = {
      "sushi": t.menuPage.categories.sushi,
      "vegetarian-sushi": t.menuPage.categories.vegetarianSushi,
      "nigiri": t.menuPage.categories.nigiri,
      "maki": t.menuPage.categories.makiRolls,
      "hot-food": t.menuPage.categories.hotFood,
      "curry": t.menuPage.categories.curryDishes,
      "stir-fried": t.menuPage.categories.stirFried
    };
    return labelMap[categoryId] || categoryId;
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    <SectionMuted>
      <div className="container mx-auto px-0 md:px-0">
        {/* Hero Banner Image - "MENY" */}
        <div className="mb-12 overflow-hidden rounded-3xl shadow-lg">
        <div className="relative w-full aspect-[1920/550]">
          <Image
            src="/images/Menu/Meny_Banner.png"
            alt="Meny - Menu at Nomi Sushi & Thai"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 1024px) 1200px, 100vw"
          />
        </div>
        </div>

        {/* Section Heading - Premium Typography */}
        <div className="mb-12 text-center relative">
          {/* Japanese Vertical Text - Left Side */}
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2">
            <div className="writing-mode-vertical-rl font-japanese text-primary/20 text-sm tracking-wider">
              メニュー
            </div>
          </div>
          
          <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
            {t.menuPage.categories.sushi}
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-display-lg xl:text-display-xl font-bold tracking-tighter mt-3 bg-gradient-to-r from-foreground via-primary to-orange-600 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(251,146,60,0.3)]">
            {t.menuPage.title}
          </h1>
          <p className="font-japanese text-xl md:text-2xl text-primary/60 mt-2">
            メニュー
          </p>
          <p className="font-sans font-light text-lg md:text-xl text-muted-foreground max-w-2xl mt-4 mx-auto leading-relaxed tracking-wide">
            {t.menuPage.description}
          </p>
          
          {/* Japanese Vertical Text - Right Side */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <div className="writing-mode-vertical-rl font-japanese text-primary/20 text-sm tracking-wider">
              料理
            </div>
          </div>
        </div>      {/* Tabs Menu System */}
      <section className="mb-12">
        {isLoading ? (
          <SkeletonMenuGrid />
        ) : (
          <Tabs defaultValue="sushi" className="w-full">
          
          <div className="w-full overflow-x-auto mb-8 pb-2">
            <TabsList className="inline-flex min-w-max flex-nowrap md:flex-wrap justify-start md:justify-center gap-2 md:gap-3 bg-transparent border-0 px-4 md:px-0">
              <TabsTrigger 
                value="sushi"
                className="rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary/75 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:shadow-primary/25 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-muted/80"
              >
                <span className="mr-1" aria-hidden="true">🍣</span>
                <span>{getCategoryLabel("sushi")}</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="vegetarian-sushi"
                className="rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary/75 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:shadow-primary/25 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-muted/80"
              >
                <span className="mr-1" aria-hidden="true">🥬</span>
                <span>{getCategoryLabel("vegetarian-sushi")}</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="nigiri"
                className="rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary/75 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:shadow-primary/25 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-muted/80"
              >
                <span className="mr-1" aria-hidden="true">🍣</span>
                <span>{getCategoryLabel("nigiri")}</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="maki"
                className="rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary/75 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:shadow-primary/25 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-muted/80"
              >
                <span className="mr-1" aria-hidden="true">🌀</span>
                <span>{getCategoryLabel("maki")}</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="hot-food"
                className="rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary/75 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:shadow-primary/25 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-muted/80"
              >
                <span className="mr-1" aria-hidden="true">🔥</span>
                <span>{getCategoryLabel("hot-food")}</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="curry"
                className="rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary/75 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:shadow-primary/25 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-muted/80"
              >
                <span className="mr-1" aria-hidden="true">🍛</span>
                <span>{getCategoryLabel("curry")}</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="stir-fried"
                className="rounded-full px-4 md:px-6 py-2.5 text-sm md:text-base font-medium transition-all data-[state=active]:bg-primary/75 data-[state=active]:text-primary-foreground data-[state=active]:shadow-md data-[state=active]:shadow-primary/25 data-[state=inactive]:bg-muted data-[state=inactive]:text-muted-foreground hover:data-[state=inactive]:bg-muted/80"
              >
                <span className="mr-1" aria-hidden="true">🍜</span>
                <span>{getCategoryLabel("stir-fried")}</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {menuCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                {category.items.map((item, index) => (
                  <motion.div
                    key={index}
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
                    <Enhanced3DMenuCard
                      name={item.nameKey ? getTranslation(item.nameKey) : item.name || ''}
                      price={item.price}
                      description={item.descriptionKey ? getTranslation(item.descriptionKey) : item.description}
                      spicy={item.spicy}
                      vegetarian={item.vegetarian}
                      vegan={item.vegan}
                      glutenFree={item.glutenFree}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}

        </Tabs>
        )}
      </section>

      {/* Menu Image Carousel - After menu content */}
      <StandardCard className="mb-12 backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
        <div className="p-4 md:p-6">
          <DishCarousel images={menuCarouselImages} />
        </div>
      </StandardCard>

      {/* Bottom CTA Section - "Ready to order?" */}
      <div className="mt-16">
        <div className="text-center mb-6">
          <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
            {t.menuPage.overline}
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
            {t.menuPage.readyToOrder.title}
          </h2>
          <p className="mt-4 text-base md:text-lg font-sans font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.menuPage.readyToOrder.subtitle}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          {/* Primary CTA: Order Online */}
          <Button
            variant="primary"
            size="lg"
            asChild
          >
            <a
              href={qoplaOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => showOrderSuccessToast()}
            >
              <span>{t.menuPage.readyToOrder.cta.orderOnline}</span>
              <Icons.externalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>

          {/* Ghost CTA: Call Us */}
          <Button
            variant="ghost"
            size="lg"
            asChild
          >
            <a href={`tel:${sitePhoneHref}`}>
              <Icons.phone className="mr-2 h-4 w-4" />
              <span>{t.menuPage.readyToOrder.cta.call}</span>
            </a>
          </Button>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-8 text-center">
        <p className="text-xs text-muted-foreground">
          {t.menuPage.disclaimer.pricesVary}
          <br />
          {t.menuPage.disclaimer.allergies} {sitePhoneDisplay}
        </p>
      </div>
      </div>
    </SectionMuted>
    
    {/* Mobile-only sticky CTA bar */}
    <BottomCtaBar />
    </>
  );
};

export default MenuPage;