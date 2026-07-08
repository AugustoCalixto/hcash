"use client"

import Image from "next/image"
import { CreditCard } from "lucide-react"
import { maquininhasContent } from "@/data/maquininhas-content"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/lib/whatsapp"

export function MaquininhasHero() {
  const { hero } = maquininhasContent

  return (
    <section className="py-16 md:py-24 lg:py-28" id="maquininhas">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <InView className="space-y-6 md:space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-yellow-800 md:text-sm">
            <CreditCard className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-balance md:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            {hero.description}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="h-12 bg-yellow-400 px-8 text-base font-semibold text-black transition-all hover:scale-[1.02] hover:bg-yellow-500"
              onClick={() => openWhatsApp("heroMaquininha")}
            >
              {hero.cta}
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-2 px-8 text-base transition-all hover:scale-[1.02] hover:bg-gray-50"
            >
              <a href="#planos">{hero.secondaryCta}</a>
            </Button>
          </div>
        </InView>

        <InView delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border bg-gray-50 shadow-xl shadow-gray-200/60 lg:aspect-auto lg:h-[480px]">
            <Image
              src="/images/model-01.png"
              alt="Pessoa segurando maquininha de cartão Herocash"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="absolute -bottom-4 -right-2 max-w-[220px] rounded-2xl border bg-white p-4 shadow-lg md:bottom-6 md:-right-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700">Parcelamento</p>
            <p className="mt-1 text-2xl font-bold">Até 18x</p>
            <p className="mt-1 text-xs text-muted-foreground">Taxas competitivas em todos os planos</p>
          </div>
        </InView>
      </div>
    </section>
  )
}
