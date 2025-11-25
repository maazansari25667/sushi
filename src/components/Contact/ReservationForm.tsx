"use client";

import * as React from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

type ReservationFormProps = {
  className?: string;
};

export function ReservationForm({ className }: ReservationFormProps) {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    // Placeholder behavior: log the reservation request
    // In production, this would send to an API endpoint or email service
    console.log("📋 Reservation request received:", data);
    console.log("📧 This would send to:", data.email);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      (event.target as HTMLFormElement).reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 800);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
    >
      <div className="grid gap-6">
        {/* Name Field */}
        <div className="grid gap-2">
          <Label htmlFor="name" className="text-sm font-semibold text-slate-700">
            {t.contact.form.name} <span className="text-primary">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder={t.contact.form.namePlaceholder}
            required
            disabled={isSubmitting}
            className="h-11"
          />
        </div>

        {/* Email and Phone - Side by side on larger screens */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email" className="text-sm font-semibold text-slate-700">
              {t.contact.form.email} <span className="text-primary">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t.contact.form.emailPlaceholder}
              required
              disabled={isSubmitting}
              className="h-11"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone" className="text-sm font-semibold text-slate-700">
              {t.contact.form.phone} <span className="text-primary">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t.contact.form.phonePlaceholder}
              required
              disabled={isSubmitting}
              className="h-11"
            />
          </div>
        </div>

        {/* Message / Special Requests */}
        <div className="grid gap-2">
          <Label htmlFor="message" className="text-sm font-semibold text-slate-700">
            {t.contact.form.message} <span className="text-primary">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder={t.contact.form.messagePlaceholder}
            required
            disabled={isSubmitting}
            className="resize-none"
          />
          <p className="text-xs text-muted-foreground mt-1">
            {t.contact.form.helper}
          </p>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="rounded-lg bg-green-50 border border-green-200 p-4 flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
              <Icons.check className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-green-900">{t.contact.form.success.title}</h4>
              <p className="text-sm text-green-700 mt-1">
                {t.contact.form.success.message}
              </p>
            </div>
          </div>
        )}

        {/* Submit Button and Helper Text */}
        <div className="flex flex-col gap-3 pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full md:w-auto"
          >
            {isSubmitting ? (
              <>
                <Icons.loader className="mr-2 h-4 w-4 animate-spin" />
                <span>{t.contact.form.submitting}</span>
              </>
            ) : (
              <>
                <Icons.send className="mr-2 h-4 w-4" />
                <span>{t.contact.form.submit}</span>
              </>
            )}
          </Button>
          
          {!isSuccess && (
            <p className="text-xs text-muted-foreground leading-relaxed">
              <Icons.info className="inline h-3 w-3 mr-1" />
              {t.contact.form.privacy}
            </p>
          )}
        </div>
      </div>
    </form>
  );
}
