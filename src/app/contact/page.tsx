"use client";
import { siteName, siteTagline, sitePhoneDisplay, sitePhoneHref, siteAddressLine1, siteAddressLine2 } from "@/config/site";
import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import { StandardCard } from "@/components/ui/nc-card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { showPhoneCopiedToast, showAddressCopiedToast } from "@/lib/toast";
import { Section, SectionMuted, SectionHighlight } from "@/components/Section";
import { ReservationForm } from "@/components/Contact/ReservationForm";
import { ContactFAQ } from "@/components/Contact/ContactFAQ";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const ContactPage = () => {
  const { t } = useLanguage();
  
  return (
    <>
      {/* Hero Banner - Premium Fashion Split Design */}
      <Section className="py-0">
        <div className="mb-12 overflow-hidden rounded-3xl shadow-2xl">
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Image */}
              <div className="relative aspect-[685/500] overflow-hidden">
                <Image
                  src="/images/Jackets/home cover/exp_1.png"
                  alt="NordicWardrobe Premium Collection - Nordic Fashion"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
              </div>
              
              {/* Right Image */}
              <div className="relative aspect-[685/500] overflow-hidden">
                <Image
                  src="/images/Jackets/home cover/exp_2.webp"
                  alt="NordicWardrobe Style Experience - Swedish Design"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
              </div>
            </div>
            
            {/* Center Text Overlay - Premium Typography */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center px-6 py-8 bg-background/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-md mx-4 border border-border/50">
                <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 mb-3 font-sans">
                  {t.contact.header.overline}
                </p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-display-lg font-bold tracking-tighter mb-3 bg-gradient-to-r from-foreground via-primary to-orange-600 bg-clip-text text-transparent drop-shadow-[0_2px_16px_rgba(251,146,60,0.3)]">
                  {t.contact.header.title}
                </h1>
                <p className="text-base md:text-lg font-sans font-light text-muted-foreground leading-relaxed tracking-wide">
                  {t.contact.header.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Info + Map */}
      <SectionMuted>
        <div className="mb-10 text-center md:text-left">
          <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
            {t.contact.header.overline}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-display-lg font-bold tracking-tight mt-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(251,146,60,0.25)]">
            {t.contact.header.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg font-sans font-light text-muted-foreground leading-relaxed">
            {t.contact.header.subtitle}
          </p>
        </div>

        {/* Quick Action CTAs */}
        <div className="mb-12 flex flex-wrap justify-center md:justify-start gap-4">
          <Button
            variant="primary"
            size="lg"
            asChild
          >
            <a href={`tel:${sitePhoneHref}`}>
              <Icons.phone className="mr-2 h-4 w-4" />
              <span>{t.contact.cta.call}</span>
            </a>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            asChild
          >
            <a href="/jackets">
              <span>{t.contact.cta.orderOnline}</span>
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>

          <Button
            variant="ghost"
            size="lg"
            asChild
          >
            <a href="/jackets">
              <span>{t.contact.cta.viewMenu}</span>
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
          {/* Left Column: Contact Form */}
          <div className="space-y-6">
            <StandardCard className="p-6 md:p-8 backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
              <div className="mb-6">
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                  {t.contact.form.title}
                </h2>
                <p className="mt-3 text-sm md:text-base font-sans font-light text-muted-foreground leading-relaxed">
                  {t.contact.form.subtitle}
                </p>
              </div>
              <ReservationForm />
            </StandardCard>
          </div>

          {/* Right Column: Contact Info + Map */}
          <div className="space-y-6">
            {/* Main Info Card */}
            <StandardCard className="backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
              <CardContent className="space-y-6 pt-6">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">{t.contact.info.title}</h2>
                <p className="mt-3 text-base md:text-lg font-sans font-light text-muted-foreground leading-relaxed">
                  {t.contact.info.tagline}
                </p>
              </div>

            {/* Contact Details */}
            <div className="space-y-3 text-slate-700">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.contact.info.phone}</p>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(sitePhoneHref);
                      showPhoneCopiedToast(sitePhoneDisplay);
                    }}
                    className="text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors duration-200 cursor-pointer"
                  >
                    {sitePhoneDisplay}
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                  <svg className="h-5 w-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium">{t.contact.info.address}</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`${siteAddressLine1}, ${siteAddressLine2}`);
                      showAddressCopiedToast();
                    }}
                    className="text-slate-700 leading-relaxed hover:text-orange-600 transition-colors duration-200 cursor-pointer text-left"
                  >
                    {siteAddressLine1}<br />
                    {siteAddressLine2}
                  </button>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="rounded-xl bg-white/60 backdrop-blur-md p-4 border border-white/40">
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
                {t.contact.info.hours}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">{t.contact.info.mondayThursday}</span>
                  <span className="font-medium text-slate-900">11:00 – 20:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">{t.contact.info.friday}</span>
                  <span className="font-medium text-slate-900">11:00 – 20:30</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">{t.contact.info.weekend}</span>
                  <span className="font-medium text-slate-900">12:00 – 20:30</span>
                </div>
              </div>
            </div>

              </CardContent>
            </StandardCard>

            {/* Google Maps */}
            <StandardCard className="overflow-hidden p-0 backdrop-blur-xl bg-white/70 border-white/30">
              <div className="relative w-full h-[400px] lg:h-[600px]">
                <iframe
                  title="Nomi Sushi & Thai Location - Gammeltorpsvägen 4, 155 30 Nykvarn"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2043.5234567890123!2d17.123456789!3d59.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGammeltorpsv%C3%A4gen%204%2C%20155%2030%20Nykvarn%2C%20Sweden!5e0!3m2!1sen!2sse!4v1234567890123"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                />
              </div>
            </StandardCard>
          </div>
        </div>
      </SectionMuted>

      {/* FAQ Section */}
      <Section>
        <StandardCard className="p-6 md:p-10 backdrop-blur-xl bg-white/70 hover:bg-white/80 transition-all duration-300">
          <ContactFAQ />
        </StandardCard>
      </Section>

      {/* Call to Action - Plan Visit */}
      <SectionHighlight>
        <div className="text-center max-w-3xl mx-auto">
          <div className="mb-8">
            <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
              {t.contact.planVisit.overline}
            </p>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              {t.contact.planVisit.title}
            </h3>
          </div>
          <p className="text-muted-foreground mb-6 text-base md:text-lg font-sans font-light leading-relaxed">
            {t.contact.planVisit.description}
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            {t.contact.planVisit.location}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              asChild
            >
              <a href={`tel:${sitePhoneHref}`}>
                <Icons.phone className="mr-2 h-4 w-4" />
                <span>{t.contact.planVisit.cta.call}</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="lg"
              asChild
            >
              <a href="/">
                <Icons.home className="mr-2 h-4 w-4" />
                <span>{t.contact.planVisit.cta.home}</span>
              </a>
            </Button>
          </div>
        </div>
      </SectionHighlight>
    </>
  );
};

export default ContactPage;