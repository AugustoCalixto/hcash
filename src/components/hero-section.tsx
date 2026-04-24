"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  function openWhatsapp() {
    const whatsappNumber = "5585987005263"
    const message = "Olá, gostaria de saber mais sobre a maquininha Hero Cash!"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Glows */}
      <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center glass px-4 py-1.5 rounded-full border-primary/20">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                  RAPIDEZ E INOVAÇÃO PARA SUAS VENDAS!
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
                O PODER DE VENDER <span className="text-primary text-glow italic">MAIS</span>, DIRETO NA SUA MÃO!
              </h1>
              <p className="text-xl md:text-2xl text-foreground/50 font-medium leading-relaxed max-w-xl">
                Receba suas vendas com a maquininha líder de mercado e parcele em até 18x com as taxas mais baixas do Brasil!
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Button
                size="lg"
                className="bg-hero-gradient text-black font-black px-10 py-8 rounded-[1.5rem] text-lg shadow-2xl shadow-primary/20 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all border-none group"
                onClick={() => openWhatsapp()}
              >
                ADQUIRA JÁ A SUA
                <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full glass border-2 border-background flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-primary/20" />
                    </div>
                  ))}
                </div>
                <p className="text-xs font-bold text-foreground/40 leading-tight uppercase tracking-widest">
                  +4.000 clientes <br/> satisfeitos
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative z-10 w-full aspect-square md:aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src="/images/model-01.png"
                alt="Pessoa segurando maquininha de cartão Hero Cash"
                fill
                className="rounded-[3rem] object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Floating Decorative Glass Card */}
              <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-[2rem] max-w-[200px] hidden md:block animate-bounce-slow">
                 <p className="text-[10px] font-black uppercase text-primary mb-1">TX. CONTAGEM</p>
                 <p className="text-2xl font-black italic tracking-tighter">ZERO TAXA</p>
                 <p className="text-[9px] font-bold text-foreground/40 mt-2 uppercase">NO PRIMEIRO MÊS</p>
              </div>
            </div>
            
            {/* Background Shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[40px] border-primary/5 rounded-full pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}


