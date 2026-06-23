"use client";

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactEmail, socialLinks } from "@/config/siteConfig";

export default function ContactForm() {
  const { messages } = useLocale();
  const copy = messages.contactForm;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!contactEmail) {
      setSubmitMessage(copy.noEmailMessage);
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

${formData.message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFormData({ name: "", email: "", subject: "", message: "" });
    setSubmitMessage(copy.sentMessage);
    setIsSubmitting(false);
  };

  if (!contactEmail) {
    return (
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold text-white">{copy.unavailableTitle}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {copy.unavailableDescription}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <Button key={link.href} href={link.href} variant="outline">
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          type="text"
          name="name"
          aria-label={copy.nameLabel}
          placeholder={copy.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          aria-label={copy.emailLabel}
          placeholder={copy.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <Input
        type="text"
        name="subject"
        aria-label={copy.subjectLabel}
        placeholder={copy.subjectPlaceholder}
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <Textarea
        name="message"
        aria-label={copy.messageLabel}
        placeholder={copy.messagePlaceholder}
        rows={6}
        value={formData.message}
        onChange={handleChange}
        required
      />

      {submitMessage && (
        <div className="rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm font-medium text-emerald-100">
          {submitMessage}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? copy.opening : copy.send}
      </Button>
    </form>
  );
}
