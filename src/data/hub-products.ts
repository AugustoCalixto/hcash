import { getProductPublicUrl } from "@/config/env"
import { company } from "@/data/company"
import { CreditCard, MessageSquare } from "lucide-react"
import type { SiteSlug } from "@/lib/sites"

export interface HubProduct {
  slug: SiteSlug
  name: string
  shortName: string
  href: string
  description: string
  cta: string
  backgroundImage: string
  whatsappMessage: string
  icon: typeof CreditCard
}

export const hubProducts: HubProduct[] = [
  {
    slug: "maquininhas",
    name: "Maquininhas",
    shortName: "Maquininhas",
    href: getProductPublicUrl("maquininhas"),
    description: "Taxas competitivas, recebimento rápido e parcelamento em até 18x.",
    cta: "Conhecer maquininhas",
    backgroundImage: "/images/model-01.png",
    whatsappMessage: company.whatsappMessages.maquininhas,
    icon: CreditCard,
  },
  {
    slug: "crm",
    name: "CRM Herocash",
    shortName: "CRM Herocash",
    href: getProductPublicUrl("crm"),
    description: "Atendimento, vendas e automação no WhatsApp com inteligência artificial.",
    cta: "Conhecer CRM Herocash",
    backgroundImage: "/images/payment.png",
    whatsappMessage: company.whatsappMessages.crm,
    icon: MessageSquare,
  },
]
