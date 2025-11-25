"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function ContactFAQ() {
  const { t } = useLanguage();
  
  return (
    <div>
      <div className="mb-6">
        <p className="text-xs font-medium tracking-ultra-wide uppercase text-primary/80 font-sans">
          {t.contact.faq.title}
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
          {t.contact.faq.subtitle}
        </h2>
        <p className="text-sm md:text-base font-sans font-light text-muted-foreground mt-3 max-w-2xl leading-relaxed">
          {t.contact.faq.description}
        </p>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="reservation">
          <AccordionTrigger className="text-left">
            {t.contact.faq.reservation.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.reservation.a}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="parking">
          <AccordionTrigger className="text-left">
            {t.contact.faq.parking.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.parking.a}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="allergies">
          <AccordionTrigger className="text-left">
            {t.contact.faq.allergies.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.allergies.a}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="groups">
          <AccordionTrigger className="text-left">
            {t.contact.faq.groups.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.groups.a}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="takeaway">
          <AccordionTrigger className="text-left">
            {t.contact.faq.takeaway.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.takeaway.a}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="payment">
          <AccordionTrigger className="text-left">
            {t.contact.faq.payment.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.payment.a}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="accessibility">
          <AccordionTrigger className="text-left">
            {t.contact.faq.accessibility.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.accessibility.a}
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="menu">
          <AccordionTrigger className="text-left">
            {t.contact.faq.menu.q}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            {t.contact.faq.menu.a}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
