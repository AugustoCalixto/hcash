"use client"

import { createContext, useContext, useMemo, type ReactNode } from "react"
import { usePathname } from "next/navigation"
import { getSiteFromHost, SITES, type SiteConfig } from "@/lib/sites"

const SiteContext = createContext<SiteConfig>(SITES.hub)

export function SiteProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  const site = useMemo(() => {
    if (typeof window === "undefined") return SITES.hub
    return getSiteFromHost(window.location.host, pathname)
  }, [pathname])

  return <SiteContext.Provider value={site}>{children}</SiteContext.Provider>
}

export function useSite(): SiteConfig {
  return useContext(SiteContext)
}
