"use client"

import { crmContent } from "@/data/crm-content"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { Button } from "@/components/ui/button"
import { Bot, Headphones, MessageSquare, Users } from "lucide-react"

const featureIcons = [Bot, Headphones, MessageSquare, Users]

export function CrmPageContent() {
  const whatsappUrl = buildWhatsAppUrl("crm")

  return (
    <>
      <section className="py-16">
        <div className="max-w-3xl space-y-6" id="inicio">
          <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
            {crmContent.hero.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {crmContent.hero.title}
          </h1>
          <p className="text-xl text-muted-foreground">{crmContent.hero.description}</p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {crmContent.hero.cta}
            </a>
          </Button>
        </div>
      </section>

      <section className="py-16 space-y-12" id="recursos">
        {crmContent.features.map((feature, index) => {
          const Icon = featureIcons[index] ?? MessageSquare
          return (
            <div
              key={feature.title}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b pb-12 last:border-0"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400">
                  <Icon className="h-6 w-6 text-black" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{feature.title}</h2>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
                <Button asChild variant="outline" className="border-yellow-400 hover:bg-yellow-50">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Falar com especialista
                  </a>
                </Button>
              </div>
              <ul className="space-y-3">
                {feature.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 font-medium"
                  >
                    <span className="w-2 h-2 rounded-full bg-yellow-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </section>

      <section className="py-16" id="beneficios">
        <h2 className="text-2xl font-bold text-center mb-10">Tudo que seu negócio precisa</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {crmContent.benefits.map((benefit) => (
            <div
              key={benefit}
              className="bg-yellow-50 border border-yellow-100 rounded-xl p-4 text-center text-sm font-medium"
            >
              {benefit}
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-black text-white rounded-2xl px-8 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">{crmContent.cta.title}</h2>
        <p className="text-white/70 text-lg max-w-xl mx-auto">{crmContent.cta.description}</p>
        <Button
          asChild
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {crmContent.cta.button}
          </a>
        </Button>
      </section>
    </>
  )
}
