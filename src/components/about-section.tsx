"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface Slide {
    id: number
    src: string
    alt: string
    label: string
}

export default function AboutSection() {
    const slides: Slide[] = [
        {
            id: 14,
            src: "/images/about/maq-01.png",
            alt: "Pessoa utilizando máquina de pagamento",
            label: "IMG 14",
        },
        {
            id: 15,
            src: "/images/about/model-maq.png",
            alt: "Atendente com máquinas de pagamento",
            label: "IMG 15",
        },
        {
            id: 16,
            src: "/images/about/maq-02.png",
            alt: "Mão tocando caixa de dispositivo de pagamento",
            label: "IMG 16",
        },
    ]

    return (
        <section className="editorial-spacing relative overflow-hidden bg-white" id="sobre">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
                    <div className="space-y-6">
                        <p className="text-[10px] font-black tracking-[0.4em] text-primary uppercase">
                            NOSSA MISSÃO
                        </p>

                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase text-foreground">
                            QUEM <br/>
                            <span className="text-glow italic">SOMOS</span>
                        </h2>
                    </div>

                    <p className="text-lg md:text-2xl text-foreground/40 font-medium max-w-4xl leading-relaxed">
                        A Hero Cash Brasil é uma empresa brasileira especializada em meios de pagamento, que disponibiliza soluções
                        com taxas competitivas, máquinas avançadas e um atendimento qualificado e acolhedor. Inovadora em seu
                        segmento, a Hero Cash Brasil tem se consolidado como referência no mercado desde sua{" "}
                        <span className="text-primary font-black uppercase italic">fundação em julho de 2021.</span>
                    </p>

                    <div className="w-full relative pt-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className="relative glass-card rounded-[3rem] overflow-hidden aspect-[4/5] p-1 group border-black/5 bg-white/40"
                                >
                                    <div className="relative w-full h-full rounded-[2.8rem] overflow-hidden shadow-xl">
                                        <Image 
                                            src={slide.src || "/placeholder.svg"} 
                                            alt={slide.alt} 
                                            fill 
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Background Glows */}
                        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    )
}
