"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { hubProducts } from "@/data/hub-products"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

interface ProductsDropdownProps {
  triggerClassName?: string
  onNavigate?: () => void
}

export function ProductsDropdown({ triggerClassName, onNavigate }: ProductsDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium outline-none transition-colors",
          triggerClassName
        )}
      >
        Produtos
        <ChevronDown className="h-4 w-4 opacity-70" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        {hubProducts.map((product) => (
          <DropdownMenuItem key={product.slug} asChild>
            <Link href={product.href} className="flex items-center gap-2 cursor-pointer" onClick={onNavigate}>
              <product.icon className="h-4 w-4 text-yellow-600" />
              {product.name}
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/produtos" className="cursor-pointer font-medium" onClick={onNavigate}>
            Ver todos os produtos
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
