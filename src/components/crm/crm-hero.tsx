"use client"

import Image from "next/image"
import { MessageSquare } from "lucide-react"
import { crmContent } from "@/data/crm-content"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function CrmHero() {
  const { hero } = crmContent
  const whatsappUrl = buildWhatsAppUrl("crm")

  return (
    <section className="py-16 md:py-24 lg:py-28" id="inicio">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <InView className="space-y-6 md:space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-yellow-200 bg-yellow-50 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-wider text-yellow-800">
            <MessageSquare className="h-3.5 w-3.5" />
            {hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.08]">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12 px-8 text-base transition-all hover:scale-[1.02]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {hero.cta}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-2 hover:bg-gray-50 transition-all hover:scale-[1.02]"
            >
              <a href="#recursos">{hero.secondaryCta}</a>
            </Button>
          </div>
        </InView>

        <InView delay={150} className="relative">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-[480px] rounded-3xl overflow-hidden border bg-gray-50 shadow-xl shadow-gray-200/60">
            <Image
              src="/images/payment.png"
              alt="CRM Herocash — vendas e atendimento via WhatsApp"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-transparent" />
          </div>

          <div className="absolute -bottom-4 -right-2 md:bottom-6 md:-right-4 rounded-2xl border bg-white p-4 shadow-lg max-w-[240px]">
            <div className="flex items-center gap-2 mb-2">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Online agora</p>
            </div>
            <p className="text-sm font-medium leading-snug">
              &ldquo;Olá! Quero saber mais sobre o produto.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground mt-2">Resposta automática com IA em segundos</p>
          </div>
        </InView>
      </div>
    </section>
  )
}
