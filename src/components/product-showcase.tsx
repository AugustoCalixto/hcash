"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Printer, Wifi, Zap, Battery, ShoppingCart, CreditCard, Smartphone } from "lucide-react"

interface ProductFeature {
  icon: React.ReactNode
  title: string
  description: string
}

interface ProductInfo {
  id: string
  name: string
  title: string
  description: string
  image: string
  features: ProductFeature[]
  buttonText: string
  buttonLink: string
  color: string
}

export default function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState<string>("pro")

  const products: ProductInfo[] = [
    {
      id: "plus",
      name: "PLUS Hero",
      title: "Maquininha prática e portátil",
      description:
        "Ideal para quem está começando! Compacta e fácil de usar, esta maquininha oferece todas as funcionalidades essenciais para o seu negócio com o melhor custo-benefício do mercado.",
      image: "/placeholder.svg?height=400&width=300",
      features: [
        {
          icon: <Printer className="h-8 w-8 text-yellow-400" />,
          title: "Comprovante por SMS",
          description: "Envie comprovantes digitais",
        },
        {
          icon: <Wifi className="h-8 w-8 text-yellow-400" />,
          title: "Wifi + Chip 2G Grátis",
          description: "Conectividade garantida",
        },
        {
          icon: <Zap className="h-8 w-8 text-yellow-400" />,
          title: "Receba por aproximação (NFC)",
          description: "Pagamentos sem contato",
        },
        {
          icon: <Battery className="h-8 w-8 text-yellow-400" />,
          title: "Bateria de longa duração",
          description: "Trabalhe o dia todo",
        },
      ],
      buttonText: "Peça agora sua PLUS Hero!",
      buttonLink: "#comprar-plus",
      color: "yellow-400",
    },
    {
      id: "pro",
      name: "PRO Hero",
      title: "Máquina de pagamento completa",
      description:
        "Impulsione suas vendas com agilidade e economia! Este modelo de maquininha oferece o melhor custo-benefício do mercado, bateria de longa duração e taxas exclusivas da Herocash para potencializar seus lucros.",
      image: "",
      features: [
        {
          icon: <Printer className="h-8 w-8 text-yellow-400" />,
          title: "Comprovante impresso e SMS",
          description: "Flexibilidade para seus clientes",
        },
        {
          icon: <Wifi className="h-8 w-8 text-yellow-400" />,
          title: "Wifi + Chip 4G Grátis",
          description: "Conexão rápida e estável",
        },
        {
          icon: <Zap className="h-8 w-8 text-yellow-400" />,
          title: "Receba por aproximação (NFC)",
          description: "Pagamentos sem contato",
        },
        {
          icon: <Battery className="h-8 w-8 text-yellow-400" />,
          title: "Bateria de longa duração",
          description: "Trabalhe o dia todo sem preocupações",
        },
      ],
      buttonText: "Peça agora sua PRO Hero!",
      buttonLink: "#comprar-pro",
      color: "yellow-400",
    },
    {
      id: "smart",
      name: "SMART Hero",
      title: "A maquininha mais avançada do mercado",
      description:
        "Tecnologia de ponta para seu negócio! Com sistema Android integrado, tela touchscreen e recursos exclusivos, a SMART Hero é a solução completa para quem busca modernidade, eficiência e controle total das vendas.",
      image: "/placeholder.svg?height=400&width=300",
      features: [
        {
          icon: <Printer className="h-8 w-8 text-yellow-400" />,
          title: "Comprovante impresso e SMS",
          description: "Opções para todos os clientes",
        },
        {
          icon: <Smartphone className="h-8 w-8 text-yellow-400" />,
          title: "Sistema Android + Touchscreen",
          description: "Interface moderna e intuitiva",
        },
        {
          icon: <ShoppingCart className="h-8 w-8 text-yellow-400" />,
          title: "Gestão de produtos/estoque",
          description: "Controle completo do seu negócio",
        },
        {
          icon: <CreditCard className="h-8 w-8 text-yellow-400" />,
          title: "Aceite todos os cartões e Pix",
          description: "Mais opções de pagamento",
        },
      ],
      buttonText: "Peça agora sua SMART Hero!",
      buttonLink: "#comprar-smart",
      color: "yellow-400",
    },
  ]

  const handleProductChange = (productId: string) => {
    setActiveProduct(productId)
  }

  const handleOrderProduct = (productLink: string) => {
    window.open(productLink, "_self")
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-10">
          <div className="flex space-x-4">
            {products.map((product) => (
              <button
                key={product.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeProduct === product.id
                    ? `bg-${product.color} text-black`
                    : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                onClick={() => handleProductChange(product.id)}
              >
                {product.name}
              </button>
            ))}
          </div>
        </div>

        {products.map((product, index) => (
          <div key={product.id} className={`${activeProduct === product.id ? "block" : "hidden"}`}>
            <div className={`bg-black text-white rounded-xl overflow-hidden`}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                  <div className="flex justify-center">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Maquininha ${product.name}`}
                      width={300}
                      height={400}
                      className="object-contain max-h-[400px]"
                    />
                  </div>
                </div>

                <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                  <h2 className={`text-${product.color} text-3xl font-bold mb-4`}>{product.title}</h2>
                  <p className="text-gray-300 mb-8">{product.description}</p>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div className="bg-gray-800 p-4 rounded-diamond mb-3">{feature.icon}</div>
                        <h3 className="text-sm font-medium mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-400">{feature.description}</p>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`bg-${product.color} hover:bg-opacity-90 text-black font-medium`}
                    onClick={() => handleOrderProduct(product.buttonLink)}
                  >
                    {product.buttonText}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

