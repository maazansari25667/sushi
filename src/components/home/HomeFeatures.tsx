import { StandardCard } from "@/components/ui/nc-card";
import { CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const HomeFeatures = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: "📍",
      title: t.home.whatWeOffer.location,
      description: t.home.whatWeOffer.locationDescription
    },
    {
      icon: "📄",
      title: t.home.whatWeOffer.menuDownload,
      description: t.home.whatWeOffer.menuDownloadDescription,
      hasLink: true
    },
    {
      icon: "⚡",
      title: t.home.whatWeOffer.fastService,
      description: t.home.whatWeOffer.fastServiceDescription
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
      {features.map((feature, index) => (
        <StandardCard key={index} className="backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
              <CardContent className="flex flex-col gap-4 pt-6">
                <div className="text-3xl mb-2">{feature.icon}</div>
                
                <h3 className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-sm md:text-base font-sans font-light text-muted-foreground leading-relaxed flex-1">
                  {feature.description}
                </p>
                
                {feature.hasLink && (
                  <a
                    href="/menu.pdf"
                    download
                    className="text-sm font-semibold text-orange-600 hover:underline"
                  >
                    {t.home.whatWeOffer.downloadPdf}
                  </a>
                )}
          </CardContent>
        </StandardCard>
      ))}
    </div>
  );
};

export default HomeFeatures;