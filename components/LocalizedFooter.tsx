"use client";

import Link from "next/link";
import { useLocale } from "@/components/LocaleProvider";
import { localizePath } from "@/src/i18n/dictionaries";
import { siteConfig, socialLinks } from "@/config/siteConfig";

export default function LocalizedFooter() {
  const { locale, messages } = useLocale();
  const footer = messages.footer;
  const currentYear = new Date().getFullYear();
  const emailHref = siteConfig.contactEmail ? `mailto:${siteConfig.contactEmail}` : null;
  const footerLinks = [
    { label: footer.projects, href: localizePath(locale, "/projects") },
    { label: messages.nav.about, href: localizePath(locale, "/about") },
    { label: footer.contact, href: localizePath(locale, "/contact") },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#080a0f] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div>
            <p className="text-sm font-semibold text-white">{footer.availabilityTitle}</p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{footer.availabilityDescription}</p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:flex-row">
            <Link href={localizePath(locale, "/contact")} className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-100">
              {messages.common.contactMe}
            </Link>
            <a href={siteConfig.cvPath} download className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10">
              {messages.common.downloadCv}
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_0.75fr_0.75fr]">
          <div className="space-y-4">
            <Link href={localizePath(locale, "/")} className="flex w-fit items-center gap-3" aria-label="Hicham Mahboub home">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white text-sm font-bold text-slate-950">HM</span>
              <span>
                <span className="block text-sm font-semibold text-white">Hicham Mahboub</span>
                <span className="block text-xs text-slate-500">{footer.candidate}</span>
              </span>
            </Link>
            <p className="max-w-md text-sm leading-6 text-slate-400">{footer.positioning}</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">{footer.quickLinks}</h2>
            <div className="grid gap-2">
              {footerLinks.map((link) => <Link key={link.href} href={link.href} className="text-sm text-slate-400 transition-colors hover:text-white">{link.label}</Link>)}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">{footer.contact}</h2>
            <div className="grid gap-2 text-sm">
              {emailHref && <a className="break-all text-slate-400 transition-colors hover:text-white" href={emailHref}>{siteConfig.contactEmail}</a>}
              <Link className="text-slate-400 transition-colors hover:text-white" href={localizePath(locale, "/contact")}>{footer.contactPage}</Link>
              <a className="text-slate-400 transition-colors hover:text-white" href={siteConfig.cvPath} download>{messages.common.downloadCv}</a>
              <Link className="text-slate-400 transition-colors hover:text-white" href={localizePath(locale, "/projects")}>{footer.projects}</Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">{footer.connect}</h2>
            <div className="grid gap-2">
              {socialLinks.map((link) => <a key={link.href} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-sm text-slate-400 transition-colors hover:text-white">{link.label}</a>)}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Hicham Mahboub. {footer.copyright}</p>
          <p>{footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
