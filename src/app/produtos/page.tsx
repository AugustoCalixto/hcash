import type { Metadata } from "next"
import { ProductCards } from "@/components/hub/hub-sections"

export const metadata: Metadata = {
  title: "Produtos | Herocash Brasil",
  description:
    "Conheça as soluções Herocash Brasil: maquininhas com taxas competitivas e CRM Herocash para vendas via WhatsApp.",
}

export default function ProdutosPage() {
  return (
    <div className="container mx-auto max-w-[1350px] px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
          Nossas soluções
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Produtos</h1>
        <p className="text-lg text-muted-foreground">
          Escolha a solução ideal para o seu negócio e acesse a página completa de cada produto.
        </p>
      </div>
      <ProductCards />
    </div>
  )
}
