"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { planRates, paymentRates } from "@/data/plans"
import { cn } from "@/lib/utils"
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react"

type RateType = 'hero' | 'on' | 'premium' | 'basic' | 'economico'

interface PlanConfig {
  id: RateType
  label: string
  color: string
  accent: string
  description: string
}

const planConfigs: PlanConfig[] = [
  { id: 'hero', label: 'HERO', color: 'text-primary-foreground', accent: 'bg-primary', description: 'Venda mais com as menores taxas!' },
  { id: 'on', label: 'ON', color: 'text-emerald-700', accent: 'bg-emerald-100', description: 'Venda mais com as menores taxas!' },
  { id: 'premium', label: 'PREMIUM', color: 'text-blue-700', accent: 'bg-blue-100', description: 'Venda mais com as menores taxas!' },
  { id: 'basic', label: 'BASIC', color: 'text-slate-700', accent: 'bg-slate-100', description: 'O plano mais acessível para começar!' },
  { id: 'economico', label: 'ECONÔMICO', color: 'text-purple-700', accent: 'bg-purple-100', description: 'Venda mais com as menores taxas!' },
]

export default function PricingPlans() {
  const [detailsOpen, setDetailsOpen] = useState<RateType | null>(null)

  function openWhatsapp(plan: string) {
    const whatsappNumber = "5585987005263"
    const message = `Olá, gostaria de saber mais sobre o plano ${plan}!`
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  const toggleDetails = (plan: RateType) => {
    setDetailsOpen(detailsOpen === plan ? null : plan)
  }

  const PlanCard = ({ config }: { config: PlanConfig }) => {
    const rates = planRates[config.label.replace('Ô', 'O') as keyof typeof planRates]
    const isHero = config.id === 'hero'

    return (
      <div className={cn(
        "group relative flex flex-col glass-card rounded-[2rem] p-1 transition-all duration-500 hover:scale-[1.02]",
        isHero && "lg:scale-105 lg:hover:scale-[1.07] z-10 ring-2 ring-primary/20"
      )}>
        <Card className="bg-white/80 border-none shadow-none flex flex-col h-full rounded-[1.9rem]">
          <CardHeader className="text-center pt-8 pb-4">
            <div className={cn("inline-block px-6 py-1.5 rounded-full text-sm font-black tracking-[0.2em] uppercase mb-4", 
              isHero ? "bg-hero-gradient text-black" : config.accent, 
              isHero ? "" : config.color
            )}>
              {config.label}
            </div>
            <p className="text-sm text-foreground/60 min-h-[40px] px-4 font-medium">
              {config.description}
            </p>
          </CardHeader>

          <CardContent className="flex-1 px-6">
            <div className="grid grid-cols-1 gap-6 text-center py-4">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">DÉBITO</p>
                <p className={cn("text-4xl font-black tracking-tighter", isHero ? "text-foreground" : config.color)}>{rates.debito}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">CRÉDITO À VISTA</p>
                <p className={cn("text-4xl font-black tracking-tighter", isHero ? "text-foreground" : config.color)}>{rates.creditoAVista}</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-foreground/30 uppercase tracking-widest">CRÉDITO 12x</p>
                <p className={cn("text-4xl font-black tracking-tighter", isHero ? "text-foreground" : config.color)}>{rates.credito12x}</p>
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <button 
                onClick={() => toggleDetails(config.id)}
                className="flex items-center justify-center w-full py-2 text-xs font-bold text-foreground/40 hover:text-foreground/80 transition-colors"
              >
                {detailsOpen === config.id ? <ChevronUp className="w-4 h-4 mr-1" /> : <ChevronDown className="w-4 h-4 mr-1" />}
                TAXAS COMPLETAS
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-500",
                detailsOpen === config.id ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
              )}>
                <div className="space-y-1 rounded-xl overflow-hidden bg-secondary/50">
                  {paymentRates['visa'].slice(0, 14).map((rate, idx) => (
                    <div key={rate.modalidade} className={cn(
                      "flex justify-between items-center px-4 py-2 text-[11px]",
                      idx % 2 === 0 ? "bg-black/[0.02]" : "bg-transparent"
                    )}>
                      <span className="font-bold opacity-40 uppercase">{rate.modalidade}</span>
                      <span className={cn("font-black text-sm", isHero ? "text-foreground" : config.color)}>{rate.taxa[config.id]}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-6 pt-2">
            <Button 
              className={cn(
                "w-full h-14 rounded-2xl font-black text-xs tracking-widest gap-2 border-none transition-all shadow-lg hover:shadow-xl uppercase",
                isHero ? "bg-hero-gradient text-black" : "bg-foreground/5 hover:bg-foreground/10 text-foreground"
              )}
              onClick={() => openWhatsapp(config.label)}
            >
              VEM PRA HERO
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <section className="editorial-spacing relative overflow-hidden bg-white" id="planos">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(251,205,22,0.05),transparent)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-6 max-w-4xl mx-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">OPÇÕES DE RECEBIMENTO</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] uppercase text-foreground">
            ESCOLHA SEU <br/>
            <span className="text-glow italic">DESTINO</span>
          </h2>
          <p className="text-xl text-foreground/60 font-medium">
            Temos o plano perfeito para o momento atual da sua jornada empreendedora.
          </p>
          
          <div className="flex flex-col items-center gap-4 pt-4">
            <div className="flex glass p-1.5 rounded-full bg-secondary/80">
              <div className="px-8 py-2 bg-primary text-black rounded-full text-[10px] font-black tracking-widest uppercase shadow-sm">NA HORA</div>
              <div className="px-8 py-2 text-foreground/40 text-[10px] font-black tracking-widest uppercase">DIA SEGUINTE</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {planConfigs.map((config) => (
            <PlanCard key={config.id} config={config} />
          ))}
        </div>
      </div>
    </section>
  )
}


