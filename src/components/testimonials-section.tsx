"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
      name: "Gleiciane",
      username: "@cliente01",
      avatar: "/images/testimonials/avatar-01.jpg",
      content:
        "No começo, fiquei com receio pelo preço, mas a máquina é incrível! Taxas super acessíveis e o atendimento é excelente. Em menos de dois meses, já vi o retorno. Vale muito a pena!",
    },
    {
      id: 2,
      name: "Filipe",
      username: "@cliente02",
      avatar: "/images/testimonials/avatar-02.jpg",
      content:
        "A melhor decisão que tomei! A maquininha é super eficiente, e as taxas continuam caindo. Em poucas semanas, já cobre o custo da máquina. Totalmente recomendada!",
    },
    {
      id: 3,
      name: "Erilania",
      username: "@cliente03",
      avatar: "/images/testimonials/avatar-03.jpg",
      content:
        "Fui surpreendido! Achei que o valor inicial era alto, mas em pouco tempo, as taxas baixaram e os pagamentos estão super rápidos e sem erro. Compensa demais, e com certeza indico para outros empreendedores.",
    },
    {
      id: 4,
      name: "Arte Verde",
      username: "@cliente04",
      avatar: "/images/testimonials/avatar-04.jpg",
      content:
        "Estou usando a Hero Cash há 6 meses e não me arrependo. O suporte é rápido, as taxas são justas e a máquina nunca me deixou na mão. Recomendo para todos os pequenos negócios!",
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const itemsPerPage = 3

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, testimonials.length - itemsPerPage) : Math.max(0, prev - 1)))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - itemsPerPage ? 0 : prev + 1))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl font-bold">Opinião e recomendação dos clientes</h2>
          <p className="text-lg text-muted-foreground">
            Veja como os clientes da Hero Cash Brasil tornam nossas soluções financeiras ainda mais ágeis e eficientesClientes
          </p>
        </div>

        <div className="relative">
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 rounded-full p-2 shadow-md"
            aria-label="Depoimentos anteriores"
          >
            <ChevronLeft className="h-5 w-5 text-black" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
            {visibleTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                      <Image
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.username}</p>
                    </div>

                    <p className="text-sm">{testimonial.content}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-yellow-400 rounded-full p-2 shadow-md"
            aria-label="Próximos depoimentos"
          >
            <ChevronRight className="h-5 w-5 text-black" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${index >= currentIndex && index < currentIndex + itemsPerPage ? "bg-yellow-400" : "bg-gray-300"
                  }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

