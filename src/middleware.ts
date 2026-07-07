import { NextRequest, NextResponse } from "next/server"
import { isExternalHost, normalizeHost } from "@/config/domains"
import { getSiteFromHost, getSitePublicUrl, SITES, type SiteSlug } from "@/lib/sites"

const SITE_PATH_PREFIXES: Record<string, SiteSlug> = {
  "/hub": "hub",
  "/maquininhas": "maquininhas",
  "/crm": "crm",
}

function redirectTo(url: string, request: NextRequest) {
  return NextResponse.redirect(new URL(url, request.url))
}

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") ?? ""
  const { pathname, search } = request.nextUrl

  if (isExternalHost(host)) {
    return NextResponse.next()
  }

  const site = getSiteFromHost(host, pathname)
  const isLocalhost =
    normalizeHost(host) === "localhost" || normalizeHost(host).endsWith(".localhost")

  for (const [prefix, slug] of Object.entries(SITE_PATH_PREFIXES)) {
    if (pathname === prefix || pathname.startsWith(`${prefix}/`) || pathname.startsWith(`${prefix}#`)) {
      const targetSite = SITES[slug]
      if (!isLocalhost && site.slug !== slug && slug !== "hub") {
        const subPath = pathname.slice(prefix.length) || "/"
        return redirectTo(`${targetSite.publicUrl}${subPath}${search}`, request)
      }
    }
  }

  if (!isLocalhost && site.slug === "hub") {
    if (pathname.startsWith("/maquininhas")) {
      const subPath = pathname.replace("/maquininhas", "") || "/"
      return redirectTo(`${SITES.maquininhas.publicUrl}${subPath}${search}`, request)
    }
    if (pathname.startsWith("/crm")) {
      const subPath = pathname.replace("/crm", "") || "/"
      return redirectTo(`${SITES.crm.publicUrl}${subPath}${search}`, request)
    }
    if (pathname === "/hub" || pathname.startsWith("/hub/")) {
      const subPath = pathname.replace("/hub", "") || "/"
      return redirectTo(`${SITES.hub.publicUrl}${subPath}${search}`, request)
    }
  }

  if (!isLocalhost && site.slug !== "hub") {
    const foreignPrefix = Object.entries(SITE_PATH_PREFIXES).find(
      ([prefix, slug]) => slug !== site.slug && (pathname === prefix || pathname.startsWith(`${prefix}/`))
    )
    if (foreignPrefix) {
      const [prefix, slug] = foreignPrefix
      const subPath = pathname.slice(prefix.length) || "/"
      return redirectTo(`${getSitePublicUrl(slug)}${subPath}${search}`, request)
    }
  }

  if (pathname === "/" && site.slug !== "hub") {
    return NextResponse.rewrite(new URL(site.internalPath, request.url))
  }

  if (pathname === "/" && site.slug === "hub") {
    return NextResponse.rewrite(new URL("/hub", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|pdf|ico)$).*)"],
}
