import { sitePhoneDisplay, sitePhoneHref, qoplaOrderUrl } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HomeCallToActionStrip = () => {
  const { t } = useLanguage();
  
  return (
    <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-primary px-6 py-8 text-white shadow-2xl md:px-12 md:py-10">
      <div className="flex flex-col items-center gap-6">
        {/* Phone Number Display */}
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-orange-100 mb-2">
            {t.home.experienceInPerson.ctaOverline}
          </p>
          <p className="text-2xl font-bold md:text-3xl lg:text-4xl">
            {t.home.experienceInPerson.phoneLabel} <span className="text-white drop-shadow-lg">{sitePhoneDisplay}</span>
          </p>
        </div>
        
        {/* CTA Buttons - CTA Design System */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mt-2">
          {/* Primary CTA: Call Us */}
          <Button
            variant="primary"
            size="lg"
            asChild
            className="bg-white text-primary hover:bg-slate-50 shadow-lg hover:shadow-xl"
          >
            <a href={`tel:${sitePhoneHref}`}>
              <Icons.phone className="mr-2 h-4 w-4" />
              <span>{t.home.experienceInPerson.cta.call}</span>
            </a>
          </Button>
          
          {/* Secondary CTA: Order Online */}
          <Button
            variant="secondary"
            size="lg"
            asChild
            className="bg-transparent border-2 border-white text-white hover:bg-white/20"
          >
            <a
              href={qoplaOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{t.home.experienceInPerson.cta.orderOnline}</span>
              <Icons.externalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeCallToActionStrip;