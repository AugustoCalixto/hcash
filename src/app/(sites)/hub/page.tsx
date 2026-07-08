import type { Metadata } from "next"
import StatsSection from "@/components/stats-section"
import { HubAboutSection, HubContactSection } from "@/components/hub/contact-section"
import { HubProductHighlights } from "@/components/hub/hub-product-highlights"
import { HubSectionShell } from "@/components/hub/hub-section-shell"
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
      <HubSectionShell variant="hero">
        <div className="container mx-auto max-w-[1350px] px-4">
          <HubHero />
        </div>
      </HubSectionShell>

      <HubSectionShell variant="stats">
        <div className="container mx-auto max-w-[1350px] px-4">
          <StatsSection tone="dark" />
        </div>
      </HubSectionShell>

      <HubSectionShell variant="products" id="produtos" className="scroll-mt-24">
        <div className="container mx-auto max-w-[1350px] px-4">
          <ProductCards />
        </div>
      </HubSectionShell>

      <HubSectionShell variant="highlights">
        <div className="container mx-auto max-w-[1350px] px-4">
          <HubProductHighlights />
        </div>
      </HubSectionShell>

      <HubSectionShell variant="value">
        <div className="container mx-auto max-w-[1350px] px-4">
          <HubValueProps />
        </div>
      </HubSectionShell>

      <HubSectionShell variant="about">
        <div className="container mx-auto max-w-[1350px] px-4">
          <HubAboutSection />
        </div>
      </HubSectionShell>

      <HubSectionShell variant="contact">
        <div className="container mx-auto max-w-[1350px] px-4">
          <HubContactSection />
        </div>
      </HubSectionShell>
    </>
  )
}
