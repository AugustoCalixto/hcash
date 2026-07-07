import type { Metadata } from "next"
import StatsSection from "@/components/stats-section"
import { HubAboutSection } from "@/components/hub/contact-section"
import { HubHero } from "@/components/hub/hub-sections"

export const metadata: Metadata = {
  title: "Herocash Brasil | Soluções para o seu negócio",
  description:
    "Conheça o ecossistema Herocash Brasil: maquininhas com taxas competitivas e CRM Herocash para vendas e atendimento via WhatsApp.",
}

export default function HubPage() {
  return (
    <div className="container mx-auto max-w-[1350px] px-4">
      <HubHero />
      <StatsSection />
      <HubAboutSection />
    </div>
  )
}
