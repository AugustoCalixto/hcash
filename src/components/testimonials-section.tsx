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
      name: "Maris Lima",
      username: "@marislimamakeup",
      avatar: "/images/testimonials/marislimamakeup.jpg",
      content:
        "Atendimento simplesmente IMPECÁVEL! 😍 Humanizado de verdade, resolvem meus problemas em tempo recorde! Além disso, os planos são top demais e astaxas de pagamento no cartão? As MELHORES que já vi! 👏👏 Mas o que mais me ganhou foi o atendimento mesmo… que experiência maravilhosa! 🧡 Recomendo de olhos fechados!",
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
        "⭐⭐⭐⭐⭐ Empresa referência em maquininhas! Atendimento humanizado, suporte nota 10 e soluções inovadoras como a conversão de limite do cartão em Pix. Confiança, agilidade e parceria de verdade para o seu negócio vender mais!",
    },
    {
      id: 5,
      name: "Arte Verde Artesanato",
      username: "@arteverdeartesanato",
      avatar: "/images/testimonials/arteverdeartesanato.jpg",
      content:
        "Tem muita gente vendendo maquineta no mercado... mas fazer o que vocês fazem, dando segurança para o cliente, esclarecendo tudo, tirando dúvidas e PRINCIPALMENTE fazendo o acompanhamento pós venda... NÃO CONHEÇO QUEM FAÇA COMO VOCÊS! Me sinto segura pq sei que o que precisar, posso contar com a equipe de vocês! Obrigada e parabéns! 👏👏👏👏👏👏",
    },
    {
      id: 7,
      name: "Helida Rodrigues",
      username: "@helidardgs",
      avatar: "/images/testimonials/helidardgs.jpg",
      content:
        "Adoro a loja 🫶🏼 melhores taxas e melhor atendimento, parabéns 👏🏼👏🏼",
    },
    {
      id: 8,
      name: "Maciel Ceição",
      username: "@maciellceicao",
      avatar: "/images/testimonials/maciellceicao.jpg",
      content:
        "A melhor da região sem dúvidas! Melhores preços, atendimento, resolução de problemas e melhores taxas.😍😍❤️.",
    },
    {
      id: 9,
      name: "Rebeca Santos",
      username: "@rebecasants69_",
      avatar: "/images/testimonials/rebecasants69_.jpg",
      content:
        "Já comprei e recomendo para todos, as melhores taxas é com a herocash, tem um ótimo atendimento, e o melhor suporte de todos👏👏👏!",
    },
    {
      id: 10,
      name: "Maria Jardenia Torres",
      username: "@maria_jardenia_torres_",
      avatar: "/images/testimonials/maria_jardenia_torres_.jpg",
      content:
        "Melhores taxas e atendimento vip . Sou cliente há mais de 3 anos e indico a todas as amigas empreendedoras que encontro. Parabéns a equipe @herocashbrasil!",
    },
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

