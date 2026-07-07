import type { Metadata } from "next"
import { HubContactSection } from "@/components/hub/contact-section"

export const metadata: Metadata = {
  title: "Contato | Herocash Brasil",
  description: "Entre em contato com a Herocash Brasil por telefone, e-mail ou WhatsApp.",
}

export default function ContatoPage() {
  return (
    <div className="container mx-auto max-w-[1350px] px-4 py-16 md:py-24">
      <HubContactSection />
    </div>
  )
}
