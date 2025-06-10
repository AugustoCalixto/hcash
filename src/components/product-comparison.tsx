"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

type PlanType = "HERO" | "ON" | "ECONOMICO"

interface Product {
  id: string
  name: string
  description: string
  image: string
  features: string[]
  originalPrice: string
  prices: {
    [key in PlanType]: {
      price: string
      cents: string
      installments: string
      discount: string
    }
  }
}

export default function ProductComparison() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("HERO")

  const products: Product[] = [
    {
      id: "PLUS",
      name: "HERO PLUS",
      description: "Prática e ágil, uma maquininha que impõe respeito!",
      image: "/images/maquininhas/mini.png?height=150&width=100",
      features: [
        "Comprovante por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Chip 2G Grátis + WiFi",
      ],
      originalPrice: "R$ 499,00",
      prices: {
        HERO: {
          price: "235",
          cents: ",80",
          installments: "10x de R$ 23,58",
          discount: "53% OFF",
        },
        ON: {
          price: "299",
          cents: ",80",
          installments: "10x de R$ 29,98",
          discount: "39% OFF",
        },
        ECONOMICO: {
          price: "235",
          cents: ",80",
          installments: "10x de R$ 23,58",
          discount: "53% OFF",
        },
      },
    },
    {
      id: "PRO",
      name: "HERO PRO",
      description: "A máquina de cartão mais completa, garantindo o máximo de economia e benefícios!",
      image: "/images/maquininhas/pro.png?height=150&width=100",
      features: [
        "Comprovante impresso ou por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Tela Touchscreen",
        "Chip 4G Grátis + WiFi",
      ],
      originalPrice: "R$ 699,00",
      prices: {
        HERO: {
          price: "335",
          cents: ",80",
          installments: "10x de R$ 33,58",
          discount: "51% OFF",
        },
        ON: {
          price: "399",
          cents: ",80",
          installments: "10x de R$ 39,98",
          discount: "42% OFF",
        },
        ECONOMICO: {
          price: "335",
          cents: ",80",
          installments: "10x de R$ 33,58",
          discount: "51% OFF",
        },
      },
    },
    {
      id: "SMART",
      name: "HERO SMART",
      description: "A maquininha mais moderna, completa e cheia de estilo do mercado!",
      image: "/images/maquininhas/smart.png?height=150&width=100",
      features: [
        "Comprovante impresso ou por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Sistema Android + Tela Touchscreen",
        "Gestão de produtos/estoque (Confira disponibilidade)",
        "Chip 4G Grátis + WiFi",
      ],
      originalPrice: "R$ 799,00",
      prices: {
        HERO: {
          price: "492",
          cents: ",80",
          installments: "10x de R$ 49,28",
          discount: "38% OFF",
        },
        ON: {
          price: "492",
          cents: ",80",
          installments: "10x de R$ 49,28",
          discount: "38% OFF",
        },
        ECONOMICO: {
          price: "492",
          cents: ",80",
          installments: "10x de R$ 49,28",
          discount: "38% OFF",
        },
      },
    },
  ]

  const handlePlanChange = (value: PlanType) => {
    setSelectedPlan(value)
  }

  const handleOrderProduct = (productId: string) => {
    console.log(`Pedido do produto ${productId} com plano ${selectedPlan}`)
    window.open(`#comprar-${productId.toLowerCase()}-${selectedPlan.toLowerCase()}`, "_self")
  }

  return (
    <section className="py-16 bg-black text-white rounded-lg px-4 md:px-8 mb-16" id="maquininhas">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Encontre a maquininha perfeita para o seu negócio!</h2>

        <div className="mt-6">
          <p className="mb-2">Selecione seu plano:</p>
          <RadioGroup
            defaultValue="HERO"
            className="flex flex-wrap justify-center gap-4"
            onValueChange={(value) => handlePlanChange(value as PlanType)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="HERO" id="plan-hero" className="text-yellow-400" />
              <Label
                htmlFor="plan-hero"
                className="bg-black border border-white rounded-full px-6 py-1 cursor-pointer"
              >
                HERO
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ON" id="plan-on" className="text-yellow-400" />
              <Label htmlFor="plan-on" className="bg-black border border-white rounded-full px-6 py-1 cursor-pointer">
                ON
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ECONOMICO" id="plan-economico" className="text-yellow-400" />
              <Label
                htmlFor="plan-economico"
                className="bg-black border border-white rounded-full px-6 py-1 cursor-pointer"
              >
                ECONÔMICO
              </Label>
            </div>
          </RadioGroup>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const { price, cents, installments, discount } = product.prices[selectedPlan]
          return (
            <Card
              key={product.id}
              className={`bg-black border border-gray-800 ${product.id === "PRO" ? "border-yellow-400 border-2" : ""}`}
            >
              <CardHeader className="text-center">
                <h3 className="text-2xl font-bold text-yellow-400">{product.name}</h3>
                <p className="text-sm">{product.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative w-full h-[250px]">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>

                <div>
                  <p className="text-sm mb-1">Planos a partir de:</p>
                  <div className="text-center">
                    <p className="text-sm line-through text-gray-400">de: {product.originalPrice} por</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-sm">R$</span>
                      <span className="text-3xl font-bold text-yellow-400">{price}</span>
                      <span className="text-sm text-yellow-400">{cents}</span>
                      <span className="text-xs ml-1">à vista</span>
                    </div>
                    <p className="text-sm">
                      <span className="text-yellow-400 font-bold">{installments.split(" ")[0]}</span>
                      <span> de </span>
                      <span className="text-yellow-400 font-bold">R$ {installments.split("R$ ")[1]}</span>
                    </p>
                    <p className="text-sm text-yellow-400">{discount}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <Check className="h-4 w-4 mr-2 text-yellow-400" />
                      <span className="text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                  onClick={() => handleOrderProduct(product.id)}
                >
                  Pedir {product.name.split(" ")[1]} Hero
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}