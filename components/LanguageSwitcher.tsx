"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { switchLocalePath, type RouteLocale } from "@/src/i18n/dictionaries";

const languageCodes: Record<RouteLocale, string> = { en: "EN", fr: "FR" };

export default function LanguageSwitcher() {
  const { locale, messages } = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const controlRef = useRef<HTMLDivElement>(null);
  const options: { locale: RouteLocale; label: string }[] = [
    { locale: "en", label: messages.language.en },
    { locale: "fr", label: messages.language.fr },
  ];

  useEffect(() => {
    const closeOnOutsidePointer = (event: MouseEvent) => {
      if (!controlRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={controlRef} className="relative shrink-0">
      <button type="button" onClick={() => setIsOpen((open) => !open)} aria-label={messages.language.label} aria-expanded={isOpen} aria-haspopup="listbox" aria-controls="language-options" className="inline-flex h-10 min-w-14 items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/90 px-3 font-sans text-xs font-semibold tracking-[0.08em] text-slate-100 shadow-sm transition-colors hover:border-cyan-200/40 hover:bg-slate-800 focus-visible:ring-cyan-300">
        {languageCodes[locale]}
        <span className={`text-[10px] text-cyan-200 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">v</span>
      </button>

      {isOpen && (
        <div id="language-options" role="listbox" aria-label={messages.language.label} className="absolute right-0 z-[60] mt-2 w-36 overflow-hidden rounded-lg border border-white/10 bg-slate-950 p-1 shadow-[0_18px_50px_rgba(2,6,23,0.5)]">
          {options.map((option) => {
            const selected = option.locale === locale;
            return (
              <button key={option.locale} type="button" role="option" aria-selected={selected} onClick={() => {
                const query = window.location.search;
                router.push(`${switchLocalePath(pathname, option.locale)}${query}`);
                setIsOpen(false);
              }} className={`flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left font-sans text-sm transition-colors ${selected ? "bg-cyan-300/15 text-cyan-100" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
                <span>{option.label}</span>
                <span className="text-xs font-semibold text-slate-500">{languageCodes[option.locale]}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
