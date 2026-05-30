"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactEmail, socialLinks } from "@/config/siteConfig";

export default function ContactForm() {
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
      setSubmitMessage("Contact email is not configured yet. Please use LinkedIn or GitHub.");
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
    setSubmitMessage("Your email app should open with the message ready to send.");
    setIsSubmitting(false);
  };

  if (!contactEmail) {
    return (
      <div className="space-y-5">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Contact form unavailable</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
            Please reach out through one of the available social links.
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
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <Input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        required
      />

      <Textarea
        name="message"
        placeholder="Your Message"
        rows={6}
        value={formData.message}
        onChange={handleChange}
        required
      />

      {submitMessage && (
        <div className="rounded-lg bg-green-50 p-4 text-sm font-medium text-green-800 dark:bg-green-900/20 dark:text-green-300">
          {submitMessage}
        </div>
      )}

      <Button
        type="submit"
        className="w-full"
        size="lg"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Opening..." : "Send Message"}
      </Button>
    </form>
  );
}
