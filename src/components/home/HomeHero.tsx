import Link from "next/link";
import Image from "next/image";
import { siteName, siteTagline, qoplaOrderUrl } from "@/config/site";
import { Button } from "@/components/ui/button";

const HomeHero = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl mb-4">
              {siteName}
            </h1>
            <h2 className="text-xl text-orange-500 font-semibold mb-6 md:text-2xl">
              {siteTagline}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl">
              Welcome to us at Nomi Sushi and Thai in Nykvarn! Food is our passion. 
              We are specialists in sushi and Thai. Feel free to explore our website!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/menu">
                <Button variant="default" size="lg">
                  View Menu
                </Button>
              </Link>
              
              <a
                href={qoplaOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" size="lg">
                  Order Online
                </Button>
              </a>
            </div>
          </div>
          
          {/* Right Column - Hero Illustration with Premium Frame */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* PREMIUM DOUBLE-BORDER FRAME */}
            <div className="p-2 bg-gradient-to-br from-orange-400 via-primary to-orange-600 rounded-[36px] shadow-xl hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 group">
              <div className="p-1.5 bg-white/95 rounded-[32px]">
                <div className="relative h-[380px] md:h-[440px] lg:h-[480px] w-full max-w-[640px] rounded-[28px] bg-gradient-to-br from-white via-orange-50/30 to-white border-2 border-white/50 shadow-xl overflow-hidden p-6 md:p-8">
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/hero/nomi_2.png"
                      alt="Nomi Sushi & Thai sushi illustration"
                      fill
                      className="object-contain transition-all duration-700 group-hover:scale-105 drop-shadow-2xl"
                      priority
                    />
                  </div>
                  
                  {/* Subtle gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-100/20 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;