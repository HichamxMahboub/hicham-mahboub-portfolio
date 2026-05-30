/**
 * Site configuration: navigation, social links, footer links
 * Centralized for easy maintenance and reuse across components
 */

import type { NavItem, SocialLink, FooterLink, SiteConfig } from "@/types";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || null;
export const academicEmail = "hicham.mahboub@esi.ac.ma";
export const personalEmail = "hichammahboub45@gmail.com";
export const phone = "+212 621 960 921";
export const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || academicEmail;
export const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || null;
export const githubUrl = "https://github.com/HichamxMahboub";
export const cvPath = "/Hicham-Mahboub-CV.pdf";

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: githubUrl, icon: "GH" },
  ...(linkedinUrl ? [{ label: "LinkedIn", href: linkedinUrl, icon: "LI" }] : []),
  ...(contactEmail
    ? [{ label: "Email", href: `mailto:${contactEmail}`, icon: "EM" }]
    : []),
];

export const footerLinks: FooterLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const siteConfig: SiteConfig = {
  name: "Hicham Mahboub",
  title: "Hicham Mahboub - Full Stack Engineer",
  description:
    "Information Systems and Digital Transformation Engineering student seeking an internship as a junior full-stack developer.",
  url: siteUrl,
  contactEmail,
  academicEmail,
  personalEmail,
  phone,
  cvPath,
  githubUrl,
  linkedinUrl,
  navItems,
  socialLinks,
  footerLinks,
};

export default siteConfig;
