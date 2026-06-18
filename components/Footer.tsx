"use client";

import Link from "next/link";
import { footerLinks, siteConfig, socialLinks } from "@/config/siteConfig";

const positioning =
  "2nd-year ESI engineering student focused on full-stack systems, backend APIs, analytics platforms, and digital transformation.";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const emailHref = siteConfig.contactEmail ? `mailto:${siteConfig.contactEmail}` : null;

  return (
    <footer className="border-t border-white/10 bg-[#080a0f] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-6">
          <div>
            <p className="text-sm font-semibold text-white">
              Available for junior full-stack internship opportunities.
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Interested in backend APIs, full-stack systems, dashboards, analytics tools, and digital transformation projects.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-5 text-sm font-medium text-slate-950 transition-colors hover:bg-cyan-100"
            >
              Contact Me
            </Link>
            <a
              href={siteConfig.cvPath}
              download
              className="inline-flex h-10 items-center justify-center rounded-lg border border-white/15 px-5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.25fr_0.65fr_0.75fr_0.75fr]">
          <div className="space-y-4">
            <Link href="/" className="flex w-fit items-center gap-3" aria-label="Hicham Mahboub home">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white text-sm font-bold text-slate-950">
                HM
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">
                  Hicham Mahboub
                </span>
                <span className="block text-xs text-slate-500">
                  Junior full-stack internship candidate
                </span>
              </span>
            </Link>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              {positioning}
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Quick links</h2>
            <div className="grid gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Contact</h2>
            <div className="grid gap-2 text-sm">
              {emailHref && (
                <a className="break-all text-slate-400 transition-colors hover:text-white" href={emailHref}>
                  {siteConfig.contactEmail}
                </a>
              )}
              <Link className="text-slate-400 transition-colors hover:text-white" href="/contact">
                Contact page
              </Link>
              <a className="text-slate-400 transition-colors hover:text-white" href={siteConfig.cvPath} download>
                Download CV
              </a>
              <Link className="text-slate-400 transition-colors hover:text-white" href="/projects">
                Projects
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-white">Connect</h2>
            <div className="grid gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm text-slate-400 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Hicham Mahboub. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
