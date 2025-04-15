"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-wider">RAPIDEZ E INOVAÇÃO PARA SUAS VENDAS!</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">O poder de vender mais direto na sua mão!</h1>
            <p className="text-xl text-muted-foreground mt-4">
              Receba suas vendas com a maquininha líder de mercado e parcele em até 18x com as taxas mais baixas do
              Brasil!
            </p>
          </div>
          <Button
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-6 h-auto text-lg"
            onClick={() => window.open("#comprar", "_self")}
          >
            Adquira já a sua
          </Button>
        </div>
        <div className="relative w-full" style={{ height: '70vh' }}>
          <Image
            src="/images/model-01.png"
            alt="Pessoa segurando maquininha de cartão Hero Cash"
            layout="fill"
            className="rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

