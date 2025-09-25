"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ChevronLeft, ChevronRight, CircleDashedIcon, Coins, Flame } from "lucide-react"

export default function FeaturesSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      id: "feature-1",
      title: "Máquinas sem taxa de aluguel",
      description: "Sem mensalidade e com garantia vitalícia contra defeitos.",
      icon: Flame,
    },
    {
      id: "feature-2",
      title: "Taxas únicas para CPF e CNPJ.",
      description: "Hero Cash Brasil tem as melhores taxas para CPF e CNPJ.",
      icon: CircleDashedIcon,
    },
    {
      id: "feature-3",
      title: "Receba seu pagamento em 1 dia, todos os dias.",
      description: "Escolha a conta e o plano de taxas que atendem você.",
      icon: Coins,
    },
  ]

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const handleAcquire = () => {
    const whatsappNumber = "5585987005263"
    const message = "Olá, gostaria de adquirir uma maquininha Hero Cash!"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="py-16 bg-gray-50 rounded-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-full md:w-1/2 flex items-center justify-center">

            <div className="relative w-full max-w-md h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/payment.png?height=400&width=400"
                alt="Maquininha Hero Cash"
                fill
                className="mx-auto object-cover h-full w-full"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    {feature.icon && (
                      <feature.icon className="h-8 w-8 text-yellow-400" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-base text-muted-foreground">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex justify-center md:justify-start pt-4">
              <Button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8"
                onClick={handleAcquire}
              >
                Adquira a sua!
              </Button>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {features.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${currentSlide === index ? "bg-yellow-400" : "bg-gray-300"}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

