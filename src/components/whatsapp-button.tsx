"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Substitua pelo número de WhatsApp real
    window.open("https://wa.me/5500000000000?text=Olá! Tenho interesse nas maquininhas Hero Cash.", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 flex items-center justify-center shadow-lg z-50"
      aria-label="Contato via WhatsApp"
    >
      <MessageSquare className="h-6 w-6 text-white" />
      <span className="absolute top-0 right-0 h-3 w-3 bg-red-500 rounded-full"></span>
    </Button>
  )
}

