import { getProductClientAreaUrl } from "@/config/env"
import { CreditCard, MessageSquare } from "lucide-react"

export type ClientAreaProductSlug = "maquininhas" | "crm"

export interface ClientAreaProduct {
  slug: ClientAreaProductSlug
  name: string
  description: string
  href: string
  cta: string
  backgroundImage: string
  icon: typeof CreditCard
}

export const clientAreaProducts: ClientAreaProduct[] = [
  {
    slug: "maquininhas",
    name: "Maquininhas",
    description: "Acesse sua conta, acompanhe vendas, extratos e gestão da sua maquininha.",
    href: getProductClientAreaUrl("maquininhas"),
    cta: "Entrar — Maquininhas",
    backgroundImage: "/images/model-01.png",
    icon: CreditCard,
  },
  {
    slug: "crm",
    name: "CRM Herocash",
    description: "Acesse o painel do CRM, conversas, automações e gestão de leads no WhatsApp.",
    href: getProductClientAreaUrl("crm"),
    cta: "Entrar — CRM Herocash",
    backgroundImage: "/images/payment.png",
    icon: MessageSquare,
  },
]
