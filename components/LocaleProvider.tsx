"use client";

import { createContext, useContext, useEffect, useMemo } from "react";
import { messages, type RouteLocale, type TranslationMessages } from "@/src/i18n/dictionaries";

type LocaleContextValue = {
  locale: RouteLocale;
  messages: TranslationMessages;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ locale, children }: { locale: RouteLocale; children: React.ReactNode }) {

  useEffect(() => {
    const activeMessages = messages[locale];
    document.documentElement.lang = locale;
    document.documentElement.dir = activeMessages.direction;
  }, [locale]);

  const value = useMemo(
    () => ({ locale, messages: messages[locale] }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider.");
  }
  return context;
}
