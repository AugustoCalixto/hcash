import { getProductPublicUrl } from "@/config/env"
import { company } from "@/data/company"
import { RATES } from "@/data/plans/rates"
import { formatRate } from "@/lib/format"
import { CreditCard, MessageSquare } from "lucide-react"
import type { SiteSlug } from "@/lib/sites"

const lowestPixRate = RATES.visa.find((row) => row.modalidade === "PIX")?.taxa.hero ?? 0.56

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
  highlights: string[]
  statLabel: string
  statValue: string
  accentClass: string
  gradientClass: string
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
    highlights: [
      `PIX a partir de ${formatRate(lowestPixRate)}`,
      "Parcelamento em até 18x",
      "App Herocash para acompanhar vendas",
    ],
    statLabel: "PIX a partir de",
    statValue: formatRate(lowestPixRate),
    accentClass: "from-yellow-400 to-amber-500",
    gradientClass: "from-yellow-500/20 via-amber-400/10 to-orange-300/20",
  },
  {
    slug: "crm",
    name: "CRM Herocash",
    shortName: "CRM Herocash",
    href: getProductPublicUrl("crm"),
    description: "Atendimento, vendas e automação no WhatsApp com inteligência artificial.",
    cta: "Conhecer CRM Herocash",
    backgroundImage: "/images/mosaic/table-pro.png",
    whatsappMessage: company.whatsappMessages.crm,
    icon: MessageSquare,
    highlights: [
      "Agente de IA no WhatsApp",
      "Central de atendimento multicanal",
      "Pipeline e automações integradas",
    ],
    statLabel: "Atendimento",
    statValue: "24h com IA",
    accentClass: "from-emerald-400 to-green-500",
    gradientClass: "from-emerald-500/20 via-green-400/10 to-teal-300/20",
  },
]
