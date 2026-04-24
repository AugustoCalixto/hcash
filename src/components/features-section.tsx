"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Flame, CircleDashedIcon, Coins } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FeaturesSection() {
  const features = [
    {
      id: "feature-1",
      title: "Máquinas sem taxa de aluguel",
      description: "Sem mensalidade e com garantia vitalícia contra defeitos. Foco total no seu lucro.",
      icon: Flame,
    },
    {
      id: "feature-2",
      title: "Taxas únicas para CPF e CNPJ.",
      description: "Hero Cash Brasil tem as melhores taxas para CPF e CNPJ. Sem diferenciação.",
      icon: CircleDashedIcon,
    },
    {
      id: "feature-3",
      title: "Receba em 1 dia, todos os dias.",
      description: "Escolha a conta e o plano de taxas que atendem você. Velocidade real.",
      icon: Coins,
    },
  ]

  const handleAcquire = () => {
    const whatsappNumber = "5585987005263"
    const message = "Olá, gostaria de adquirir uma maquininha Hero Cash!"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="editorial-spacing relative overflow-hidden bg-white" id="caracteristicas">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 relative space-y-12">
            <div className="space-y-6">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">RECURSOS PREMIUM</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-foreground">
                A EXPERIÊNCIA <br/>
                <span className="text-glow italic">DEFINITIVA</span>
              </h2>
              <p className="text-xl text-foreground/40 font-medium">
                Tecnologia robusta e transparência total para transformar como você recebe.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-start gap-8 glass-card p-10 rounded-[3rem] border-black/5 group transition-all hover:bg-white hover:shadow-2xl hover:shadow-primary/5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center transition-transform group-hover:scale-110 shadow-inner">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-black uppercase tracking-tight text-foreground">{feature.title}</h3>
                    <p className="text-sm text-foreground/40 font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button
                className="bg-hero-gradient text-black font-black px-12 h-16 rounded-[1.5rem] shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all border-none group uppercase tracking-widest text-xs"
                onClick={handleAcquire}
              >
                Vem ser Hero
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
             <div className="relative z-10 w-full aspect-square glass-card rounded-[4rem] p-1 overflow-hidden border-black/5 bg-white/40">
                <div className="relative w-full h-full rounded-[3.8rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/images/payment.png"
                    alt="Maquininhas Hero Cash"
                    fill
                    className="object-cover transition-transform duration-1000 hover:scale-110"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
                </div>
             </div>
             
             {/* Floating elements */}
             <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[80px] pointer-events-none" />
             <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}



