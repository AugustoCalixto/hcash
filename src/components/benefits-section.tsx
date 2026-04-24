"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Building2, Receipt, Percent, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BenefitsSection() {
  function openWhatsapp() {
    const whatsappNumber = "5585987005263"
    const message = "Olá, gostaria de saber mais sobre a maquininha Hero Cash!"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Recebimento na hora ou em 1 dia",
      description: "Encontre o plano de taxas perfeito para o seu negócio e impulsione suas vendas. (Todos os dias)",
    },
    {
      icon: <Building2 className="h-6 w-6 text-primary" />,
      title: "Mesmas taxas para CPF e CNPJ.",
      description: "Oferecemos taxas incríveis para CNPJ e CPF de forma simplificada.",
    },
    {
      icon: <Receipt className="h-6 w-6 text-primary" />,
      title: "Sem taxas surpresa",
      description: "Sem taxas promocionais e sem valor mínimo de vendas. Transparência total.",
    },
    {
      icon: <Percent className="h-6 w-6 text-primary" />,
      title: "E as taxas? Bem baixinhas!",
      description: "Descubra as melhores taxas do Brasil de forma simples e direta.",
    },
  ]

  return (
    <section className="editorial-spacing relative overflow-hidden bg-white" id="beneficios">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative z-10 w-full aspect-[4/5]">
              <Image
                src="/images/model-02.png"
                alt="Pessoa segurando maquininha de cartão Hero Cash"
                fill
                className="rounded-[4rem] object-cover shadow-2xl shadow-primary/5"
              />
            </div>
            {/* Decorative Glow */}
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          </div>

          <div className="lg:col-span-7 space-y-12 order-1 lg:order-2">
            <div className="space-y-6">
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">VANTAGENS EXCLUSIVAS</p>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-foreground">
                A HERO CASH <br/> 
                <span className="text-glow italic">TEM A SOLUÇÃO</span>
              </h2>
              <p className="text-xl text-foreground/40 font-medium">
                A maquininha ideal para o seu negócio, com benefícios que aceleram seu crescimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="group relative glass-card p-10 rounded-[3rem] border-black/5 transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary/5">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-8 transition-transform group-hover:scale-110 shadow-inner">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-foreground/40 font-medium leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button
                className="bg-hero-gradient text-black font-black px-12 h-16 rounded-[1.5rem] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all border-none gap-3 group uppercase tracking-widest text-xs"
                onClick={() => openWhatsapp()}
              >
                Vem ser Hero
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}



