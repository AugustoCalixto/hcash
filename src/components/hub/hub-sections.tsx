"use client"

"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { hubProducts } from "@/data/hub-products"
import { hubHomeContent } from "@/data/hub-home-content"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import { openWhatsApp } from "@/lib/whatsapp"

export function HubHero() {
  const { hero } = hubHomeContent

  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-28">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-yellow-400/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-amber-300/25 blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <InView className="space-y-6 md:space-y-8">
          <p className="inline-flex items-center rounded-full bg-yellow-400/20 px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-wider text-yellow-800 border border-yellow-400/30">
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12 px-8 text-base shadow-lg shadow-yellow-400/25 transition-all hover:scale-[1.02]"
            >
              <a href="#produtos">{hero.primaryCta}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-2 hover:bg-yellow-50 transition-all hover:scale-[1.02]"
              onClick={() => openWhatsApp("default")}
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </InView>

        <InView delay={150} className="relative">
          <div className="relative aspect-[4/5] md:aspect-[5/6] lg:aspect-auto lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/10 ring-1 ring-black/5">
            <Image
              src="/images/model-01.png"
              alt="Empreendedor usando soluções Herocash Brasil"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-4 -left-4 md:bottom-6 md:-left-6 glass-panel rounded-2xl px-5 py-4 shadow-xl max-w-[220px]">
            <p className="text-xs font-semibold uppercase tracking-wider text-yellow-700">Ecossistema</p>
            <p className="text-2xl font-bold mt-1">2 soluções</p>
            <p className="text-sm text-muted-foreground">Pagamentos + CRM WhatsApp</p>
          </div>
        </InView>
      </div>
    </section>
  )
}

export function ProductCards() {
  const { productsSection } = hubHomeContent

  return (
    <section id="produtos" className="py-16 md:py-20 scroll-mt-24">
      <InView className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
        <p className="text-sm uppercase tracking-wider font-bold text-yellow-600">
          {productsSection.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          {productsSection.title}
        </h2>
        <p className="text-lg text-muted-foreground">{productsSection.description}</p>
      </InView>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {hubProducts.map((product, index) => (
          <InView key={product.slug} delay={index * 100}>
            <Link
              href={product.href}
              className="group relative flex min-h-[380px] md:min-h-[440px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >
              <Image
                src={product.backgroundImage}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradientClass}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />

              <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between text-white">
                <div className="flex items-start justify-between gap-4">
                  <div className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-gradient-to-br ${product.accentClass} shadow-lg`}>
                    <product.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="glass-panel-dark rounded-xl px-3 py-2 text-right">
                    <p className="text-[10px] uppercase tracking-wider text-white/70">{product.statLabel}</p>
                    <p className="text-lg font-bold">{product.statValue}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h3>
                  <p className="text-white/85 text-base md:text-lg mb-5 max-w-md leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center gap-2 text-sm md:text-base text-white/90">
                        <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${product.accentClass}`} />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <span className="inline-flex items-center gap-2 bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full group-hover:bg-yellow-300 transition-all duration-300 group-hover:gap-3">
                    {product.cta}
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          </InView>
        ))}
      </div>
    </section>
  )
}
