"use client"

import { useState } from "react"
import { X } from "lucide-react"

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="w-full bg-yellow-300 py-2 px-4 text-center relative">
      <div className="flex items-center justify-center space-x-4 text-sm md:text-base font-medium">
        <span>MENORES TAXAS | APROVEITE E ECONOMIZE JÁ</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">DÉBITO À PARTIR DE 1,39%</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">CRÉDITO À PARTIR DE 3,20%</span>
        <span className="hidden md:inline">|</span>
        <span className="hidden md:inline">CRÉDITO À PARTIR DE 3,20%</span>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2"
        aria-label="Fechar banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

