"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ClientAreaButton } from "@/components/nav/client-area-button"
import { ProductsDropdown } from "@/components/nav/products-dropdown"
import { hubProducts } from "@/data/hub-products"
import { SITES } from "@/lib/sites"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
]

interface HomeTopbarProps {
  glass?: boolean
}

export function HomeTopbar({ glass = false }: HomeTopbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (!glass) return

    function onScroll() {
      setScrolled(window.scrollY > 40)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [glass])

  const closeMenu = () => setIsOpen(false)
  const useGlassStyle = glass && scrolled

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        useGlassStyle
          ? "bg-white/75 backdrop-blur-xl border-b border-white/30 shadow-sm"
          : glass
            ? "bg-transparent border-b border-transparent"
            : "bg-white border-b shadow-sm"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 h-16 max-w-7xl mx-auto">
          <Link href={SITES.hub.publicUrl} className="shrink-0" onClick={closeMenu}>
            <Image
              src="/images/logo-full.png"
              alt="Herocash Brasil"
              width={280}
              height={70}
              className="w-36 md:w-40 h-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex flex-1 items-center gap-8">
            <ProductsDropdown triggerClassName="text-gray-900 hover:text-yellow-600" />
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-900 hover:text-yellow-600 transition-colors"
              >
                {item.name}
              </Link>
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
        <div className="md:hidden border-t bg-white/95 backdrop-blur-xl px-4 py-4 space-y-4">
          <div className="space-y-1">
            <p className="px-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Produtos
            </p>
            {hubProducts.map((product) => (
              <Link
                key={product.slug}
                href={product.href}
                className="flex items-center gap-2 py-2.5 text-gray-900 font-medium"
                onClick={closeMenu}
              >
                <product.icon className="h-4 w-4 text-yellow-600" />
                {product.name}
              </Link>
            ))}
            <Link
              href="/produtos"
              className="block py-2.5 text-yellow-700 font-semibold"
              onClick={closeMenu}
            >
              Ver todos os produtos
            </Link>
          </div>
          <div className="space-y-1 border-t pt-3">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2.5 text-gray-900 font-medium"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <ClientAreaButton className="w-full" size="default" onClick={closeMenu} />
        </div>
      )}
    </header>
  )
}
