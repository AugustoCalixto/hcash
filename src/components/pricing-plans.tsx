"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Flame } from "lucide-react"

type PlanType = "HERO" | "ON" | "ECONÔMICO"

interface PlanRates {
  debito: string
  creditoAVista: string
  credito12x: string
}

type CardId = 'visa' | 'elo' | 'hiper'

interface PaymentRate {
  modalidade: string
  taxa: {
    hero: number
    on: number
    economico: number
  }
}

export default function PricingPlans() {
  const [deliveryOption, setDeliveryOption] = useState<"next-day" | "30-days">("next-day")
  const [seeMore, setSeeMore] = useState(false)
  function openWhatsapp(plan: string) {
    const whatsappNumber = "5585987005263" // Substitua pelo número de WhatsApp desejado
    const message = `Olá, gostaria de saber mais sobre o plano ${plan}!`
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }

  }
  const planRates: Record<PlanType, PlanRates> = {
    HERO: {
      debito: "1,39%",
      creditoAVista: "3,20%",
      credito12x: "11,11%",
    },
    ON: {
      debito: "1,39%",
      creditoAVista: "2,96%",
      credito12x: "10,38%",
    },
    ECONÔMICO: {
      debito: "1,15%",
      creditoAVista: "2,40%",
      credito12x: "3,25%",
    },
  }

  const paymentRates: Record<CardId, PaymentRate[]> = {
    visa: [
      { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50 } },
      { modalidade: 'Débito', taxa: { hero: 1.39, on: 1.39, economico: 1.15 } },
      { modalidade: 'Crédito à vista', taxa: { hero: 3.15, on: 2.91, economico: 2.40 } },
      { modalidade: 'Parcelado 2x', taxa: { hero: 5.05, on: 4.49, economico: 3.00 } },
      { modalidade: 'Parcelado 3x', taxa: { hero: 5.74, on: 5.22, economico: 3.00 } },
      { modalidade: 'Parcelado 4x', taxa: { hero: 6.42, on: 5.94, economico: 3.00 } },
      { modalidade: 'Parcelado 5x', taxa: { hero: 7.10, on: 6.66, economico: 3.00 } },
      { modalidade: 'Parcelado 6x', taxa: { hero: 7.77, on: 7.36, economico: 3.00 } },
      { modalidade: 'Parcelado 7x', taxa: { hero: 8.98, on: 8.11, economico: 3.25 } },
      { modalidade: 'Parcelado 8x', taxa: { hero: 9.64, on: 8.81, economico: 3.25 } },
      { modalidade: 'Parcelado 9x', taxa: { hero: 10.29, on: 9.49, economico: 3.25 } },
      { modalidade: 'Parcelado 10x', taxa: { hero: 10.93, on: 10.18, economico: 3.25 } },
      { modalidade: 'Parcelado 11x', taxa: { hero: 11.57, on: 10.85, economico: 3.25 } },
      { modalidade: 'Parcelado 12x', taxa: { hero: 12.21, on: 11.51, economico: 3.25 } },
      { modalidade: 'Parcelado 13x', taxa: { hero: 12.83, on: 12.18, economico: 3.25 } },
      { modalidade: 'Parcelado 14x', taxa: { hero: 13.45, on: 12.83, economico: 3.25 } },
      { modalidade: 'Parcelado 15x', taxa: { hero: 14.07, on: 13.48, economico: 3.25 } },
      { modalidade: 'Parcelado 16x', taxa: { hero: 14.68, on: 14.12, economico: 3.25 } },
      { modalidade: 'Parcelado 17x', taxa: { hero: 15.29, on: 14.76, economico: 3.25 } },
      { modalidade: 'Parcelado 18x', taxa: { hero: 15.88, on: 15.39, economico: 3.25 } },
    ],
    elo: [
      { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50 } },
      { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, economico: 1.15 } },
      { modalidade: 'Crédito à vista', taxa: { hero: 3.44, on: 3.24, economico: 2.40 } },
      { modalidade: 'Parcelado 2x', taxa: { hero: 5.20, on: 4.64, economico: 3.00 } },
      { modalidade: 'Parcelado 3x', taxa: { hero: 5.89, on: 5.37, economico: 3.00 } },
      { modalidade: 'Parcelado 4x', taxa: { hero: 6.57, on: 6.09, economico: 3.00 } },
      { modalidade: 'Parcelado 5x', taxa: { hero: 7.25, on: 6.81, economico: 3.00 } },
      { modalidade: 'Parcelado 6x', taxa: { hero: 7.92, on: 7.51, economico: 3.00 } },
      { modalidade: 'Parcelado 7x', taxa: { hero: 9.28, on: 8.31, economico: 3.25 } },
      { modalidade: 'Parcelado 8x', taxa: { hero: 9.94, on: 9.01, economico: 3.25 } },
      { modalidade: 'Parcelado 9x', taxa: { hero: 10.59, on: 9.69, economico: 3.25 } },
      { modalidade: 'Parcelado 10x', taxa: { hero: 11.23, on: 10.38, economico: 3.25 } },
      { modalidade: 'Parcelado 11x', taxa: { hero: 11.87, on: 11.05, economico: 3.25 } },
      { modalidade: 'Parcelado 12x', taxa: { hero: 12.51, on: 11.71, economico: 3.25 } },
      { modalidade: 'Parcelado 13x', taxa: { hero: 13.13, on: 12.38, economico: 3.25 } },
      { modalidade: 'Parcelado 14x', taxa: { hero: 13.75, on: 13.03, economico: 3.25 } },
      { modalidade: 'Parcelado 15x', taxa: { hero: 14.37, on: 13.68, economico: 3.25 } },
      { modalidade: 'Parcelado 16x', taxa: { hero: 14.98, on: 14.32, economico: 3.25 } },
      { modalidade: 'Parcelado 17x', taxa: { hero: 15.59, on: 14.96, economico: 3.25 } },
      { modalidade: 'Parcelado 18x', taxa: { hero: 16.18, on: 15.59, economico: 3.25 } }
    ],
    hiper: [
      // Similar structure for Hipercard rates...
      { modalidade: 'Débito', taxa: { hero: 1.79, on: 1.69, economico: 1.59 } },
      { modalidade: 'Crédito à vista', taxa: { hero: 3.29, on: 3.19, economico: 3.09 } },
      { modalidade: 'Parcelado 2x', taxa: { hero: 3.92, on: 3.82, economico: 3.72 } },
      { modalidade: 'Parcelado 3x', taxa: { hero: 4.47, on: 4.37, economico: 4.27 } },
      { modalidade: 'Parcelado 4x', taxa: { hero: 5.01, on: 4.91, economico: 4.81 } },
      { modalidade: 'Parcelado 5x', taxa: { hero: 5.56, on: 5.46, economico: 5.36 } },
      { modalidade: 'Parcelado 6x', taxa: { hero: 6.09, on: 5.99, economico: 5.89 } },
      { modalidade: 'Parcelado 7x', taxa: { hero: 6.67, on: 6.57, economico: 6.47 } },
      { modalidade: 'Parcelado 8x', taxa: { hero: 7.20, on: 7.10, economico: 7.00 } },
      { modalidade: 'Parcelado 9x', taxa: { hero: 7.72, on: 7.62, economico: 7.52 } },
      { modalidade: 'Parcelado 10x', taxa: { hero: 8.24, on: 8.14, economico: 8.04 } },
      { modalidade: 'Parcelado 11x', taxa: { hero: 8.76, on: 8.66, economico: 8.56 } },
      { modalidade: 'Parcelado 12x', taxa: { hero: 9.28, on: 9.18, economico: 9.08 } },
      { modalidade: 'Parcelado 13x', taxa: { hero: 9.78, on: 9.68, economico: 9.58 } },
      { modalidade: 'Parcelado 14x', taxa: { hero: 10.29, on: 10.19, economico: 10.09 } },
      { modalidade: 'Parcelado 15x', taxa: { hero: 10.79, on: 10.69, economico: 10.59 } },
      { modalidade: 'Parcelado 16x', taxa: { hero: 11.28, on: 11.18, economico: 11.08 } },
      { modalidade: 'Parcelado 17x', taxa: { hero: 11.78, on: 11.68, economico: 11.58 } },
      { modalidade: 'Parcelado 18x', taxa: { hero: 12.27, on: 12.17, economico: 12.07 } }
    ],
  }


  const renderPaymentRatesByPlan = (plan: CardId, rateType: 'hero' | 'on' | 'economico') => {
    return (
      seeMore && (
        <Card className={`border-2 transition-all w-full`} key={plan}>
          <CardHeader className="text-center">
            {/* <CardTitle className="inline-block bg-blue-400 px-6 py-1 rounded-full text-xl">{plan.toUpperCase()}</CardTitle> */}
          </CardHeader>
          <CardContent className="space-y-4 ">
            <div className="grid grid-cols-2 gap-2 text-center">
              {paymentRates[plan].map((rate) => (
                <div key={rate.modalidade}>
                  <p className="text-xs uppercase">{rate.modalidade}</p>
                  <p className="text-2xl font-bold">{rate.taxa[rateType]}%</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      )
    )
  }

  const handleViewAllRates = () => {
    setSeeMore(!seeMore)
  }

  return (
    <section className="py-16 " id="planos">
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-3xl font-bold">ANALISAR OS PLANOS!</h2>
        <p className="text-lg">Você deseja receber:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-2 rounded-lg md:col-span-2 text-center mb-4 hidden md:block">
          <h3 className="text-lg font-bold text-white">Taxas para 30 dias</h3>
        </div>
        <div className="bg-gray-800 p-2 rounded-lg md:col-span-1 text-center mb-4">
          <h3 className="text-lg font-bold text-white">Taxas para 30 dias</h3>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-2 hover:border-yellow-400 transition-all">
          <CardHeader className="text-center">
            <CardTitle className="inline-block bg-yellow-400 px-6 py-1 rounded-full text-xl">HERO</CardTitle>
            <p className="text-sm mt-2">
              Venda mais com as <span className="font-bold">menores taxas!</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs uppercase">DÉBITO</p>
                <p className="text-2xl font-bold">{planRates.HERO.debito}</p>
              </div>
              <div>
                <p className="text-xs uppercase">CRÉDITO À VISTA</p>
                <p className="text-2xl font-bold">{planRates.HERO.creditoAVista}</p>
              </div>
              <div>
                <p className="text-xs uppercase">CRÉDITO 12x</p>
                <p className="text-2xl font-bold">{planRates.HERO.credito12x}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
              onClick={() => openWhatsapp("HERO")}
            >
              Quero o plano HERO
            </Button>
            {renderPaymentRatesByPlan('visa', 'hero')}
          </CardFooter>
        </Card>

        <Card className="border-2 hover:border-yellow-400 transition-all">
          <CardHeader className="text-center">
            <CardTitle className="inline-block bg-green-400 px-6 py-1 rounded-full text-xl">ON</CardTitle>
            <p className="text-sm mt-2">
              Venda mais com as <span className="font-bold">menores taxas!</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs uppercase">DÉBITO</p>
                <p className="text-2xl font-bold">{planRates.ON.debito}</p>
              </div>
              <div>
                <p className="text-xs uppercase">CRÉDITO À VISTA</p>
                <p className="text-2xl font-bold">{planRates.ON.creditoAVista}</p>
              </div>
              <div>
                <p className="text-xs uppercase">CRÉDITO 12x</p>
                <p className="text-2xl font-bold">{planRates.ON.credito12x}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
              onClick={() => openWhatsapp("ON")}
            >
              Quero o plano ON
            </Button>
            {renderPaymentRatesByPlan('visa', 'on')}
          </CardFooter>
        </Card>

        <Card className="border-2 hover:border-yellow-400 transition-all">
          <CardHeader className="text-center">
            <CardTitle className="inline-block bg-purple-400 px-6 py-1 rounded-full text-xl">ECONÔMICO</CardTitle>
            <p className="text-sm mt-2">
              Venda mais com as <span className="font-bold">menores taxas!</span>
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-xs uppercase">DÉBITO</p>
                <p className="text-2xl font-bold">{planRates.ECONÔMICO.debito}</p>
              </div>
              <div>
                <p className="text-xs uppercase">CRÉDITO À VISTA</p>
                <p className="text-2xl font-bold">{planRates.ECONÔMICO.creditoAVista}</p>
              </div>
              <div>
                <p className="text-xs uppercase">CRÉDITO 12x</p>
                <p className="text-2xl font-bold">{planRates.ECONÔMICO.credito12x}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            <Button
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black"
              onClick={() => openWhatsapp("econômico")}
            >
              Quero o plano ECONÔMICO
            </Button>
            {renderPaymentRatesByPlan('visa', 'economico')}
          </CardFooter>
        </Card>
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="rounded-full" onClick={handleViewAllRates}>
          Ver taxas completas
        </Button>
      </div>
    </section>
  )
}

