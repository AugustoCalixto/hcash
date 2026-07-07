import type { Metadata } from "next"
import { CrmPageContent } from "@/components/crm/crm-sections"

export const metadata: Metadata = {
  title: "CRM Herocash | Vendas e atendimento via WhatsApp",
  description:
    "CRM Herocash: agentes de IA, central de atendimento, chatbot e pipeline de vendas integrados ao WhatsApp.",
}

export default function CrmPage() {
  return (
    <div className="container mx-auto max-w-[1350px] px-4">
      <CrmPageContent />
    </div>
  )
}
