"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

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

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    <p className="text-base md:text-lg font-medium mb-2">
                        A <span className="font-bold">PARCERIA PERFEITA</span> PARA O SEU NEGÓCIO!
                    </p>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 md:mb-8">Quem somos</h2>

                    <p className="text-base md:text-lg mb-6 md:mb-8 max-w-3xl">
                        A Hero Cash Brasil é uma empresa brasileira especializada em meios de pagamento, que disponibiliza soluções
                        com taxas competitivas, máquinas avançadas e um atendimento qualificado e acolhedor. Inovadora em seu
                        segmento, a Hero Cash Brasil tem se consolidado como referência no mercado desde sua{" "}
                        <span className="text-red-600 font-medium">fundação em julho de 2021.</span>
                    </p>

                    <div className="relative w-full max-w-5xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={cn(
                                        "relative rounded-xl overflow-hidden aspect-square md:aspect-auto md:h-[400px]",
                                        index !== currentIndex && "hidden md:block",
                                    )}
                                >
                                    <Image src={slide.src || "/placeholder.svg"} alt={slide.alt} fill className="object-cover" />
                                </div>
                            ))}
                        </div>

                        <div className="absolute top-1/2 left-0 -translate-y-1/2 md:left-4">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-black/30 border-none text-white hover:bg-black/50 md:hidden"
                                onClick={prevSlide}
                            >
                                <ChevronLeft className="h-6 w-6" />
                                <span className="sr-only">Slide anterior</span>
                            </Button>
                        </div>

                        <div className="absolute top-1/2 right-0 -translate-y-1/2 md:right-4">
                            <Button
                                variant="outline"
                                size="icon"
                                className="rounded-full bg-black/30 border-none text-white hover:bg-black/50 md:hidden"
                                onClick={nextSlide}
                            >
                                <ChevronRight className="h-6 w-6" />
                                <span className="sr-only">Próximo slide</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
