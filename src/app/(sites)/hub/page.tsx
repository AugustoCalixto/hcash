import type { Metadata } from "next"
import StatsSection from "@/components/stats-section"
import { HubAboutSection, HubContactSection } from "@/components/hub/contact-section"
import { HubProductHighlights } from "@/components/hub/hub-product-highlights"
import { HubSplash } from "@/components/hub/hub-splash"
import { HubHero, ProductCards } from "@/components/hub/hub-sections"
import { HubValueProps } from "@/components/hub/hub-value-props"

export const metadata: Metadata = {
  title: "Herocash Brasil | Soluções para o seu negócio",
  description:
    "Conheça o ecossistema Herocash Brasil: maquininhas com taxas competitivas e CRM Herocash para vendas e atendimento via WhatsApp.",
}

export default function HubPage() {
  return (
    <>
      <HubSplash />
      <div className="container mx-auto max-w-[1350px] px-4">
        <HubHero />
        <StatsSection />
        <ProductCards />
        <HubProductHighlights />
        <HubValueProps />
        <HubAboutSection />
        <HubContactSection />
      </div>
    </>
  )
}
