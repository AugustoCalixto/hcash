"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "5585987005263";
    const message = "Olá! Tenho interesse nos produtos da Hero Cash.";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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

