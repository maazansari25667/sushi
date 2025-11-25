import { StandardCard } from "@/components/ui/nc-card";
import { CardContent } from "@/components/ui/card";

const HomeFeatures = () => {
  const features = [
    {
      icon: "📍",
      title: "Where are we?",
      description: "Nomi Sushi & Thai is conveniently located in Nykvarn, serving the finest sushi and authentic Thai dishes to our local community and visitors."
    },
    {
      icon: "📄",
      title: "Download our menu",
      description: "Click here to download our full menu and explore all our delicious offerings.",
      hasLink: true
    },
    {
      icon: "⚡",
      title: "Fast service",
      description: "We stand for fast service and high quality. Experience quick preparation without compromising on taste and freshness."
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
                    Download menu (PDF)
                  </a>
                )}
          </CardContent>
        </StandardCard>
      ))}
    </div>
  );
};

export default HomeFeatures;