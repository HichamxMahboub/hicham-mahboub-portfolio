import {
  isLocale,
  locales,
  messages,
  type Locale,
  type TranslationMessages,
} from "@/lib/localization";

/** Locales exposed as public, indexable portfolio routes. */
export const routeLocales = ["en", "fr"] as const;
export type RouteLocale = (typeof routeLocales)[number];

export { isLocale, locales, messages };
export type { Locale, TranslationMessages };

export function isRouteLocale(value: string): value is RouteLocale {
  return routeLocales.includes(value as RouteLocale);
}

/** Adds the current locale to an internal route while leaving external URLs intact. */
export function localizePath(locale: RouteLocale, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

/** Replaces only the leading locale segment, preserving the rest of the route. */
export function switchLocalePath(pathname: string, locale: RouteLocale): string {
  const segments = pathname.split("/");
  if (isRouteLocale(segments[1] ?? "")) {
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }
  return localizePath(locale, pathname || "/");
}
