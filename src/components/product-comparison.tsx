"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

import { products, PlanType } from "@/data/products";

export default function ProductComparison() {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>("HERO")



  const handlePlanChange = (value: PlanType) => {
    setSelectedPlan(value)
  }

  const handleOrderProduct = (productName: string) => {
    const whatsappNumber = "5585987005263"
    const message = `Olá, gostaria de pedir a maquininha ${productName} com o plano ${selectedPlan}.`
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
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
              <RadioGroupItem value="PREMIUM" id="plan-premium" className="text-yellow-400" />
              <Label
                htmlFor="plan-premium"
                className="bg-black border border-white rounded-full px-6 py-1 cursor-pointer"
              >
                PREMIUM
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="ECONOMICO" id="plan-economico" className="text-yellow-400" />
              <Label
                htmlFor="plan-economico"
                className="bg-black border border-white rounded-full px-6 py-1 cursor-pointer"
              >
                ECONOMICO
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
              className={`bg-black border border-gray-800 hover:border-yellow-400 transition-colors flex flex-col justify-between`}
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
                  onClick={() => handleOrderProduct(product.name)}
                >
                  Pedir {product.name.split(" ")[1]} {selectedPlan === "HERO" ? "HERO" : selectedPlan}
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}