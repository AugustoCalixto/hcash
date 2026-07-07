/**
 * Configuração central de URLs via variáveis de ambiente.
 *
 * Desenvolvimento (.env.local):
 *   NEXT_PUBLIC_SITE_URL=http://localhost:3000
 *
 * Produção:
 *   NEXT_PUBLIC_SITE_URL=https://herocashbrasil.com.br
 *   NEXT_PUBLIC_ROOT_DOMAIN=herocashbrasil.com.br
 */

const DEFAULT_SITE_URL = "http://localhost:3000"
const DEFAULT_ROOT_DOMAIN = "herocashbrasil.com.br"

function stripTrailingSlash(url: string): string {
  return url.replace(/\/$/, "")
}

export function getSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  return stripTrailingSlash(value || DEFAULT_SITE_URL)
}

export function getRootDomain(): string {
  const value = process.env.NEXT_PUBLIC_ROOT_DOMAIN?.trim()
  if (value) {
    return value.replace(/^https?:\/\//, "").split("/")[0].split(":")[0]
  }

  try {
    const hostname = new URL(getSiteUrl()).hostname
    if (hostname === "localhost" || hostname === "127.0.0.1") {
      return hostname
    }
    return hostname.replace(/^www\./, "")
  } catch {
    return DEFAULT_ROOT_DOMAIN
  }
}

export function isLocalEnvironment(): boolean {
  const url = getSiteUrl()
  return url.includes("localhost") || url.includes("127.0.0.1")
}

export type ClientAreaProductSlug = "maquininhas" | "crm"

const DEFAULT_CLIENT_AREA_URLS: Record<ClientAreaProductSlug, string> = {
  maquininhas: "https://cliente.herocashbrasil.com.br",
  crm: "https://cliente.herocashbrasil.com.br",
}

export function getProductClientAreaUrl(product: ClientAreaProductSlug): string {
  const envKey =
    product === "maquininhas"
      ? process.env.NEXT_PUBLIC_CLIENT_AREA_MAQUININHAS_URL
      : process.env.NEXT_PUBLIC_CLIENT_AREA_CRM_URL

  const value = envKey?.trim()
  return stripTrailingSlash(value || DEFAULT_CLIENT_AREA_URLS[product])
}

/** Página interna que lista as áreas do cliente por produto */
export function getClientAreaHubUrl(): string {
  return `${getSiteUrl()}/area-do-cliente`
}

export function getProductPublicUrl(slug: "hub" | "maquininhas" | "crm"): string {
  const hubUrl = getSiteUrl()

  if (slug === "hub") return hubUrl

  if (isLocalEnvironment()) {
    return `${hubUrl}/${slug}`
  }

  return `https://${slug}.${getRootDomain()}`
}
