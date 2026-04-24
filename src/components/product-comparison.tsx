"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check, ArrowRight } from "lucide-react"
import { products, PlanType } from "@/data/products"
import { cn } from "@/lib/utils"

const plans: { id: PlanType; label: string }[] = [
  { id: "HERO", label: "HERO" },
  { id: "ON", label: "ON" },
  { id: "PREMIUM", label: "PREMIUM" },
  { id: "BASIC", label: "BASIC" },
  { id: "ECONOMICO", label: "ECONÔMICO" },
]

export default function ProductComparison() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("HERO")

  const handleOrderProduct = (productName: string) => {
    const whatsappNumber = "5585987005263"
    const message = `Olá, gostaria de pedir a maquininha ${productName} com o plano ${selectedPlan}.`
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  const ProductCard = ({ product }: { product: typeof products[0] }) => {
    const { price, cents, installments, discount } = product.prices[selectedPlan]
    const originalPrice = product.originalPrices[selectedPlan]
    
    return (
      <div className="glass-card rounded-[3rem] p-1 h-full flex flex-col group transition-all duration-700 hover:shadow-primary/10">
        <Card className="bg-white/80 border-none shadow-none flex flex-col h-full rounded-[2.9rem]">
          <CardHeader className="text-center pt-10 pb-2">
            <h3 className="text-3xl font-black tracking-tighter text-foreground group-hover:text-primary transition-colors duration-500 uppercase">
              {product.name}
            </h3>
            <p className="text-sm text-foreground/40 font-medium px-6 leading-relaxed">
              {product.description}
            </p>
          </CardHeader>
          
          <CardContent className="flex-1 space-y-8 px-8">
            <div className="relative w-full aspect-square max-h-[220px] mx-auto filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.1)]">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3"
              />
            </div>

            <div className="bg-secondary/40 rounded-[2rem] p-6 text-center space-y-0.5 relative overflow-hidden">
               <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
               <p className="text-[9px] font-black uppercase tracking-[0.3em] text-primary/80 mb-2">A PARTIR DE</p>
               <p className="text-xs line-through text-foreground/20 font-medium">{originalPrice}</p>
               <div className="flex items-baseline justify-center text-primary">
                 <span className="text-lg font-black mr-0.5 italic">R$</span>
                 <span className="text-5xl font-black tracking-tighter text-glow text-foreground">{price}</span>
                 <span className="text-xl font-bold tracking-tight text-foreground">{cents}</span>
               </div>
               <p className="text-[13px] font-bold text-foreground/40">
                 ou <span className="text-foreground/90">{installments}</span>
               </p>
               {discount && (
                 <div className="mt-4">
                   <span className="inline-block bg-primary text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                     {discount}
                   </span>
                 </div>
               )}
            </div>

            <div className="space-y-4 pt-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start text-[13px] group/item">
                  <div className="h-5 w-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-3 mt-0.5 shrink-0 transition-colors group-hover/item:bg-primary/20">
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={4} />
                  </div>
                  <span className="text-foreground/50 leading-tight font-medium group-hover/item:text-foreground/80 transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-8 pt-4">
            <Button
              className="w-full bg-hero-gradient text-black font-black h-16 rounded-[1.5rem] shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all border-none uppercase tracking-widest text-xs"
              onClick={() => handleOrderProduct(product.name)}
            >
              Pedir agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <section className="editorial-spacing bg-white relative overflow-hidden" id="maquininhas">
      {/* Dynamic Background Element */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="space-y-6 max-w-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">CATÁLOGO DE PRODUTOS</p>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase">
              A MAQUININHA <br/>
              <span className="text-glow italic">PERFEITA</span>
            </h2>
            <p className="text-xl md:text-2xl text-foreground/40 font-medium leading-relaxed">
              Tecnologia de ponta com as melhores taxas do Brasil. Selecione o plano e veja o preço.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 bg-secondary/50 p-2 rounded-full backdrop-blur-md">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={cn(
                  "px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500",
                  selectedPlan === plan.id
                    ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105"
                    : "text-foreground/40 hover:text-foreground/70 hover:bg-white/50"
                )}
              >
                {plan.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
