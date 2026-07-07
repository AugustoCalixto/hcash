import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { hubProducts } from "@/data/hub-products"
import { Button } from "@/components/ui/button"

export function HubHero() {
  return (
    <section className="py-16 md:py-24">
      <div className="text-center max-w-3xl mx-auto space-y-6 px-4">
        <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
          Ecossistema Herocash Brasil
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Soluções para impulsionar o seu negócio
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Maquininhas com taxas competitivas e CRM via WhatsApp para organizar vendas,
          atendimento e automação — tudo com a confiança da Herocash Brasil.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
        >
          <Link href="/produtos">Conheça nossos produtos</Link>
        </Button>
      </div>
    </section>
  )
}

export function ProductCards() {
  return (
    <section id="produtos" className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hubProducts.map((product) => (
          <Link
            key={product.slug}
            href={product.href}
            className="group relative min-h-[320px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={product.backgroundImage}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/20" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <product.icon className="h-10 w-10 text-yellow-400 mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold mb-2">{product.name}</h2>
              <p className="text-white/80 text-lg mb-6 max-w-md">{product.description}</p>
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full w-fit group-hover:bg-yellow-300 transition-colors">
                {product.cta}
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
