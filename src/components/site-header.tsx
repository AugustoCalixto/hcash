"use client"

import { usePathname } from "next/navigation"
import { useSite } from "@/components/site-provider"
import { HomeTopbar } from "@/components/hub/home-topbar"
import { ProductNavbar } from "@/components/nav/product-navbar"

const INSTITUTIONAL_PATHS = ["/sobre", "/contato", "/produtos", "/area-do-cliente"]

function isInstitutionalPath(pathname: string): boolean {
  return INSTITUTIONAL_PATHS.some(
    (path) => pathname === path || pathname.startsWith(`${path}/`)
  )
}

export function SiteHeader() {
  const site = useSite()
  const pathname = usePathname()

  if (site.slug === "hub" || isInstitutionalPath(pathname)) {
    return <HomeTopbar />
  }

  return <ProductNavbar />
}
