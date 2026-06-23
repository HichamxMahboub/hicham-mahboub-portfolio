import { NextResponse, type NextRequest } from "next/server";
import { routeLocales } from "@/src/i18n/dictionaries";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (routeLocales.includes(firstSegment as (typeof routeLocales)[number])) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/en${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|icon.svg|robots.txt|sitemap.xml|images|Hicham-Mahboub-CV.pdf).*)"],
};
