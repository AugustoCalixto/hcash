"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

type ProductType = "PLUS" | "PRO" | "SMART"
type PlanType = "SUPER" | "ON" | "ECONOMICO"

export default function ProductComparison() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("SUPER")

  const products = [
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
      price: "R$ 397",
      cents: ",80",
      installments: "12x de R$ 33,15",
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
      price: "R$ 497",
      cents: ",60",
      installments: "12x de R$ 41,48",
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
      price: "R$ 597",
      cents: ",60",
      installments: "12x de R$ 49,81",
    },
  ]

  const handlePlanChange = (value: PlanType) => {
    setSelectedPlan(value)
  }

  const handleOrderProduct = (productId: ProductType) => {
    console.log(`Pedido do produto ${productId} com plano ${selectedPlan}`)
    // Implementar lógica para redirecionar para a página de checkout
    window.open(`#comprar-${productId.toLowerCase()}-${selectedPlan.toLowerCase()}`, "_self")
  }

  return (
    <section className="py-16 bg-black text-white rounded-lg px-4 md:px-8 mb-16" id="maquininhas">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Encontre a maquininha perfeita para o seu negócio!</h2>

        <div className="mt-6">
          <p className="mb-2">Selecione seu plano:</p>
          <RadioGroup
            defaultValue="SUPER"
            className="flex flex-wrap justify-center gap-4"
            onValueChange={(value) => handlePlanChange(value as PlanType)}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="SUPER" id="plan-super" className="text-yellow-400" />
              <Label
                htmlFor="plan-super"
                className="bg-black border border-white rounded-full px-6 py-1 cursor-pointer"
              >
                SUPER
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
        {products.map((product) => (
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
                <p className="text-sm mb-1">Taxas a partir de:</p>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs uppercase">Débito</p>
                    <p className="text-xl font-bold text-yellow-400">1,39%</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase">1x</p>
                    <p className="text-xl font-bold text-yellow-400">3,20%</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase">12x</p>
                    <p className="text-xl font-bold text-yellow-400">11,11%</p>
                  </div>
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

              <div className="text-center space-y-1 pt-4">
                <div className="flex items-center justify-center">
                  <p className="text-sm line-through text-gray-400">de: {product.originalPrice} por</p>
                </div>
                <div className="flex items-baseline justify-center">
                  <span className="text-sm">R$</span>
                  <span className="text-3xl font-bold text-yellow-400">{product.price.split("R$ ")[1]}</span>
                  <span className="text-sm text-yellow-400">{product.cents}</span>
                  <span className="text-xs ml-1">à vista</span>
                </div>
                <p className="text-sm">
                  <span className="text-yellow-400 font-bold">{product.installments.split(" ")[0]}</span>
                  <span> de </span>
                  <span className="text-yellow-400 font-bold">R$ {product.installments.split("R$ ")[1]}</span>
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
                onClick={() => handleOrderProduct(product.id as ProductType)}
              >
                Pedir {product.name.split(" ")[1]} Hero
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

