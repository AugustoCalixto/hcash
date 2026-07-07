import Image from "next/image"
import Link from "next/link"
import { ArrowRight, LogIn } from "lucide-react"
import { clientAreaProducts } from "@/data/client-areas"
import { company } from "@/data/company"

export function ClientAreaCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {clientAreaProducts.map((product) => (
        <a
          key={product.slug}
          href={product.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative min-h-[280px] md:min-h-[340px] rounded-2xl overflow-hidden shadow-lg"
        >
          <Image
            src={product.backgroundImage}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/25" />
          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/90 mb-4">
              <product.icon className="h-6 w-6 text-black" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h2>
            <p className="text-white/80 mb-6 max-w-md">{product.description}</p>
            <span className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full w-fit group-hover:bg-yellow-300 transition-colors">
              <LogIn className="h-4 w-4" />
              {product.cta}
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </a>
      ))}
    </div>
  )
}

export function ClientAreaPageContent() {
  return (
    <div className="container mx-auto max-w-[1350px] px-4 py-16 md:py-24">
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
        <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
          Acesso
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Área do cliente
        </h1>
        <p className="text-lg text-muted-foreground">
          Cada produto Herocash possui seu próprio painel. Selecione abaixo o serviço que
          você utiliza para acessar sua conta.
        </p>
      </div>

      <ClientAreaCards />

      <p className="text-center text-sm text-muted-foreground mt-10">
        Precisa de ajuda?{" "}
        <Link href="/contato" className="text-yellow-600 hover:underline font-medium">
          Fale conosco
        </Link>
      </p>
    </div>
  )
}
