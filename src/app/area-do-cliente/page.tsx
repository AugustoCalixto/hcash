import type { Metadata } from "next"
import { ClientAreaPageContent } from "@/components/client-area/client-area-section"

export const metadata: Metadata = {
  title: "Área do cliente | Herocash Brasil",
  description:
    "Acesse o painel do seu produto Herocash: maquininhas ou CRM Herocash.",
}

export default function ClientAreaPage() {
  return <ClientAreaPageContent />
}
