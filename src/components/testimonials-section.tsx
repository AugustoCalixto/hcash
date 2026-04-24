"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number
  name: string
  username: string
  avatar: string
  content: string
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maris Lima",
      username: "@marislimamakeup",
      avatar: "/images/testimonials/marislimamakeup.jpg",
      content:
        "Atendimento simplesmente IMPECÁVEL! 😍 Humanizado de verdade, resolvem meus problemas em tempo recorde! Além disso, os planos são top demais e as taxas de pagamento no cartão? As MELHORES que já vi! 👏👏",
    },
    {
      id: 2,
      name: "KP Acessórios",
      username: "@kp_acessorio",
      avatar: "/images/testimonials/kp_acessorio.jpg",
      content:
        "Olá, passando aqui para expressar minha vivência com a aquisição da minha maquineta. Através dela, pude expandir as vendas e sem contar com o apoio do suporte dessa equipe maravilhosa da HeroCash!",
    },
    {
      id: 3,
      name: "Alessandra Lima Verde",
      username: "@alessandramatiaslimaverde",
      avatar: "/images/testimonials/alessandramatiaslimaverde.jpg",
      content:
        "Vender maquineta é fácil... mas vender maquineta NO NÍVEL HERO nunca vi! Agilidade, atendimento de excelência e suporte! Aí sim! 👏👏👏👏",
    },
    {
      id: 4,
      name: "Felipe Moreira",
      username: "@felipemoreira.ce",
      avatar: "/images/testimonials/felipemoreira.jpg",
      content:
        "⭐⭐⭐⭐⭐ Empresa referência em maquininhas! Atendimento humanizado, suporte nota 10 e soluções inovadoras como a conversão de limite do cartão em Pix.",
    },
    {
      id: 5,
      name: "Arte Verde Artesanato",
      username: "@arteverdeartesanato",
      avatar: "/images/testimonials/arteverdeartesanato.jpg",
      content:
        "Me sinto segura pq sei que o que precisar, posso contar com a equipe de vocês! Obrigada e parabéns! 👏👏👏👏👏👏",
    },
    {
      id: 7,
      name: "Helida Rodrigues",
      username: "@helidardgs",
      avatar: "/images/testimonials/helidardgs.jpg",
      content:
        "Adoro a loja 🫶🏼 melhores taxas e melhor atendimento, parabéns 👏🏼👏🏼",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="editorial-spacing relative overflow-hidden bg-secondary/20" id="depoimentos">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 mb-20">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">RECONHECIMENTO</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-foreground">
            A VOZ DE <br/>
            <span className="text-glow italic">QUEM USA</span>
          </h2>
          <p className="text-xl text-foreground/40 font-medium">
            Confira a experiência de quem já transformou seu negócio com a Hero Cash Brasil.
          </p>
        </div>

        <div className="relative group/nav">
          <div className="flex gap-8 overflow-hidden py-10 px-4">
            {testimonials.map((testimonial, idx) => {
                return (
                    <div 
                        key={testimonial.id} 
                        className={cn(
                            "flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.33rem)] transition-all duration-700 ease-in-out",
                            idx < currentIndex && "opacity-0 invisible -translate-x-full absolute",
                            idx >= currentIndex && idx < currentIndex + 3 && "opacity-100 visible translate-x-0 relative",
                            idx >= currentIndex + 3 && "opacity-0 invisible translate-x-full absolute"
                        )}
                    >
                        <div className="glass-card p-10 rounded-[3rem] h-full flex flex-col justify-between border-black/5 relative group/item hover:bg-white transition-all duration-500 hover:shadow-2xl shadow-primary/5">
                            <Quote className="absolute top-8 right-8 w-12 h-12 text-primary opacity-10 group-hover/item:opacity-20 transition-opacity" />
                            
                            <p className="text-lg text-foreground/70 font-medium leading-relaxed mb-10 italic">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-secondary p-0.5 border border-primary/20 shadow-inner">
                                    <Image
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover rounded-[1.1rem]"
                                    />
                                </div>
                                <div className="space-y-0.5">
                                    <h3 className="font-black uppercase tracking-tight text-foreground">{testimonial.name}</h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{testimonial.username}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 -right-4 flex justify-between pointer-events-none group-hover/nav:opacity-100 transition-opacity">
            <button
              onClick={handlePrev}
              className="p-5 bg-white shadow-xl rounded-full border border-black/5 pointer-events-auto hover:bg-primary hover:text-black transition-all hover:scale-110 active:scale-95 group/btn"
            >
              <ChevronLeft className="h-6 w-6 text-foreground group-hover/btn:text-black" />
            </button>
            <button
              onClick={handleNext}
              className="p-5 bg-white shadow-xl rounded-full border border-black/5 pointer-events-auto hover:bg-primary hover:text-black transition-all hover:scale-110 active:scale-95 group/btn"
            >
              <ChevronRight className="h-6 w-6 text-foreground group-hover/btn:text-black" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
    </section>
  )
}



