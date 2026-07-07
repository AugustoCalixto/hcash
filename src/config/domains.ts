import { getRootDomain } from "@/config/env"

// ─────────────────────────────────────────────────────────
// DOMÍNIOS LIVRES — subdomínios gerenciados FORA deste projeto.
// O middleware ignora qualquer host que case com esta lista.
// Para adicionar um novo subdomínio externo, basta incluir aqui.
// ─────────────────────────────────────────────────────────

/** Subdomínios (sem domínio raiz) que pertencem a outros projetos */
export const EXTERNAL_SUBDOMAINS = [
  "cliente",
] as const

export function getRootDomainFromEnv(): string {
  return getRootDomain()
}

export function getExternalHosts(): readonly string[] {
  const root = getRootDomain()
  return EXTERNAL_SUBDOMAINS.map((sub) => `${sub}.${root}`)
}

export function normalizeHost(host: string): string {
  return host.split(":")[0].toLowerCase()
}

export function isExternalHost(host: string): boolean {
  const normalized = normalizeHost(host)
  return getExternalHosts().some((external) => normalized === external)
}

export { getClientAreaHubUrl, getSiteUrl } from "@/config/env"
