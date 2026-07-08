"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { ClientAreaButton } from "@/components/nav/client-area-button"
import { SITES } from "@/lib/sites"
import { useSite } from "@/components/site-provider"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  href: string
}

const maquininhasNavItems: NavItem[] = [
  { name: "Maquininhas", href: "#maquininhas" },
  { name: "Planos", href: "#planos" },
  { name: "Simulador", href: "#simulador" },
  { name: "Taxas", href: "#tabela-planos" },
]

const crmNavItems: NavItem[] = [
  { name: "Recursos", href: "#recursos" },
  { name: "Planos", href: "#planos" },
  { name: "Benefícios", href: "#beneficios" },
]

function NavLink({ item, className, onClick }: { item: NavItem; className?: string; onClick?: () => void }) {
  return (
    <a
      href={item.href}
      className={cn("text-sm font-medium text-gray-900 hover:text-yellow-600 transition-colors", className)}
      onClick={onClick}
    >
      {item.name}
    </a>
  )
}

export function ProductNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const site = useSite()

  const navItems = site.slug === "maquininhas" ? maquininhasNavItems : crmNavItems
  const logoHref = SITES[site.slug].publicUrl

  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 h-16 max-w-7xl mx-auto">
          <Link href={logoHref} className="shrink-0" onClick={closeMenu}>
            <Image
              src="/images/logo-full.png"
              alt="Herocash Brasil"
              width={280}
              height={70}
              className="w-36 md:w-40 h-auto"
            />
          </Link>

          <nav className="hidden md:flex flex-1 items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          <div className="hidden md:block shrink-0">
            <ClientAreaButton />
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto p-2 text-gray-900"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t bg-white px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                item={item}
                className="block py-2.5"
                onClick={closeMenu}
              />
            ))}
          </nav>
          <ClientAreaButton className="w-full" size="default" onClick={closeMenu} />
        </div>
      )}
    </header>
  )
}
