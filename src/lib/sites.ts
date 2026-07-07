import { getRootDomain, isLocalEnvironment, getProductPublicUrl } from "@/config/env"
import { normalizeHost } from "@/config/domains"

export type SiteSlug = "hub" | "maquininhas" | "crm"

export interface SiteConfig {
  slug: SiteSlug
  hosts: readonly string[]
  internalPath: string
  publicUrl: string
  label: string
}

function buildSites(): Record<SiteSlug, SiteConfig> {
  const rootDomain = getRootDomain()
  const local = isLocalEnvironment()

  return {
    hub: {
      slug: "hub",
      hosts: local
        ? ["localhost", "127.0.0.1"]
        : [rootDomain, `www.${rootDomain}`],
      internalPath: "/hub",
      publicUrl: getProductPublicUrl("hub"),
      label: "Herocash Brasil",
    },
    maquininhas: {
      slug: "maquininhas",
      hosts: local ? [] : [`maquininhas.${rootDomain}`],
      internalPath: "/maquininhas",
      publicUrl: getProductPublicUrl("maquininhas"),
      label: "Maquininhas",
    },
    crm: {
      slug: "crm",
      hosts: local ? [] : [`crm.${rootDomain}`],
      internalPath: "/crm",
      publicUrl: getProductPublicUrl("crm"),
      label: "CRM Herocash",
    },
  }
}

export const SITES = buildSites()

const LOCALHOST_SITE_PATHS: Record<string, SiteSlug> = {
  "/hub": "hub",
  "/maquininhas": "maquininhas",
  "/crm": "crm",
}

export function getSitePublicUrl(slug: SiteSlug): string {
  return getProductPublicUrl(slug)
}

export function getSiteFromHost(host: string, pathname = "/"): SiteConfig {
  const normalized = normalizeHost(host)

  if (normalized === "localhost" || normalized === "127.0.0.1" || normalized.endsWith(".localhost")) {
    if (normalized.startsWith("maquininhas.")) return SITES.maquininhas
    if (normalized.startsWith("crm.")) return SITES.crm

    const pathSite = LOCALHOST_SITE_PATHS[pathname.split("#")[0]]
    if (pathSite) return SITES[pathSite]

    return SITES.hub
  }

  for (const site of Object.values(SITES)) {
    if (site.hosts.includes(normalized)) return site
  }

  return SITES.hub
}

export function getSiteBySlug(slug: SiteSlug): SiteConfig {
  return SITES[slug]
}
