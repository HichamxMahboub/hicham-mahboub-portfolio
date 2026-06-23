"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/components/LocaleProvider";
import { localizePath } from "@/src/i18n/dictionaries";

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export default function Navbar() {
  const pathname = usePathname();
  const { locale, messages } = useLocale();
  const navItems = [
    { label: messages.nav.home, href: localizePath(locale, "/") },
    { label: messages.nav.about, href: localizePath(locale, "/about") },
    { label: messages.nav.projects, href: localizePath(locale, "/projects") },
    { label: messages.nav.contact, href: localizePath(locale, "/contact") },
  ];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      className="sticky top-0 z-50 px-3 py-3 sm:px-4"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-lg border border-white/10 bg-slate-950/78 px-4 py-3 text-white shadow-[0_18px_50px_rgba(2,6,23,0.18)] backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          isScrolled ? "bg-slate-950/88 shadow-[0_18px_60px_rgba(2,6,23,0.26)]" : ""
        }`}
        aria-label="Primary navigation"
      >
        <Link href={localizePath(locale, "/")} className="flex min-w-0 items-center gap-3" aria-label="Hicham Mahboub home">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white text-sm font-bold text-slate-950">
            HM
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-semibold text-white">
              Hicham Mahboub
            </span>
            <span className="block truncate text-xs text-slate-400">
              {messages.nav.role}
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-white/[0.04] p-1 md:flex">
          {navItems.map((item) => {
            const active = isActiveRoute(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-white text-slate-950"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
        <div className="md:hidden">
          <LanguageSwitcher />
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          aria-label={isMobileMenuOpen ? messages.nav.closeMenu : messages.nav.menu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-navigation"
          type="button"
        >
          <span className="space-y-1.5" aria-hidden="true">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-slate-950/95 p-2 text-white shadow-[0_18px_50px_rgba(2,6,23,0.24)] backdrop-blur-xl md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            <div className="grid gap-1">
              {navItems.map((item) => {
                const active = isActiveRoute(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      active
                        ? "bg-white text-slate-950"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
