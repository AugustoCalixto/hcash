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


  const paymentRates: Record<CardId, PaymentRate[]> = {
    visa: [
      { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50 } },
      { modalidade: 'Débito', taxa: { hero: 1.39, on: 1.39, economico: 1.15 } },
      { modalidade: 'Crédito à vista', taxa: { hero: 3.15, on: 2.91, economico: 2.40 } },
      { modalidade: 'Parcelado 2x', taxa: { hero: 5.16, on: 4.58, economico: 3.00 } },
      { modalidade: 'Parcelado 3x', taxa: { hero: 5.87, on: 5.35, economico: 3.00 } },
      { modalidade: 'Parcelado 4x', taxa: { hero: 6.59, on: 6.11, economico: 3.00 } },
      { modalidade: 'Parcelado 5x', taxa: { hero: 7.29, on: 6.85, economico: 3.00 } },
      { modalidade: 'Parcelado 6x', taxa: { hero: 8.00, on: 7.59, economico: 3.00 } },
      { modalidade: 'Parcelado 7x', taxa: { hero: 9.24, on: 8.37, economico: 3.25 } },
      { modalidade: 'Parcelado 8x', taxa: { hero: 9.93, on: 9.09, economico: 3.25 } },
      { modalidade: 'Parcelado 9x', taxa: { hero: 10.61, on: 9.81, economico: 3.25 } },
      { modalidade: 'Parcelado 10x', taxa: { hero: 11.27, on: 10.51, economico: 3.25 } },
      { modalidade: 'Parcelado 11x', taxa: { hero: 11.94, on: 11.22, economico: 3.25 } },
      { modalidade: 'Parcelado 12x', taxa: { hero: 12.61, on: 11.91, economico: 3.25 } },
      { modalidade: 'Parcelado 13x', taxa: { hero: 13.26, on: 12.60, economico: 3.25 } },
      { modalidade: 'Parcelado 14x', taxa: { hero: 13.90, on: 12.28, economico: 3.25 } },
      { modalidade: 'Parcelado 15x', taxa: { hero: 14.55, on: 13.95, economico: 3.25 } },
      { modalidade: 'Parcelado 16x', taxa: { hero: 15.18, on: 14.62, economico: 3.25 } },
      { modalidade: 'Parcelado 17x', taxa: { hero: 15.81, on: 15.28, economico: 3.25 } },
      { modalidade: 'Parcelado 18x', taxa: { hero: 16.43, on: 15.93, economico: 3.25 } },
    ],
    elo: [
      { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50 } },
      { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, economico: 1.55 } },
      { modalidade: 'Crédito à vista', taxa: { hero: 3.44, on: 3.24, economico: 2.40 } },
      { modalidade: 'Parcelado 2x', taxa: { hero: 5.31, on: 4.73, economico: 3.25 } },
      { modalidade: 'Parcelado 3x', taxa: { hero: 6.02, on: 5.50, economico: 3.25 } },
      { modalidade: 'Parcelado 4x', taxa: { hero: 6.74, on: 6.26, economico: 3.25 } },
      { modalidade: 'Parcelado 5x', taxa: { hero: 7.44, on: 7.00, economico: 3.25 } },
      { modalidade: 'Parcelado 6x', taxa: { hero: 8.15, on: 7.74, economico: 3.25 } },
      { modalidade: 'Parcelado 7x', taxa: { hero: 9.54, on: 8.57, economico: 3.45 } },
      { modalidade: 'Parcelado 8x', taxa: { hero: 10.23, on: 9.29, economico: 3.45 } },
      { modalidade: 'Parcelado 9x', taxa: { hero: 10.91, on: 10.01, economico: 3.45 } },
      { modalidade: 'Parcelado 10x', taxa: { hero: 11.57, on: 10.71, economico: 3.45 } },
      { modalidade: 'Parcelado 11x', taxa: { hero: 12.24, on: 11.42, economico: 3.45 } },
      { modalidade: 'Parcelado 12x', taxa: { hero: 12.91, on: 12.11, economico: 3.45 } },
      { modalidade: 'Parcelado 13x', taxa: { hero: 13.56, on: 12.80, economico: 3.45 } },
      { modalidade: 'Parcelado 14x', taxa: { hero: 14.20, on: 13.48, economico: 3.45 } },
      { modalidade: 'Parcelado 15x', taxa: { hero: 14.85, on: 14.15, economico: 3.45 } },
      { modalidade: 'Parcelado 16x', taxa: { hero: 15.48, on: 14.82, economico: 3.45 } },
      { modalidade: 'Parcelado 17x', taxa: { hero: 16.11, on: 15.48, economico: 3.45 } },
      { modalidade: 'Parcelado 18x', taxa: { hero: 16.73, on: 16.13, economico: 3.45 } }
    ],
    hiper: [
      { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50 } },
      { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, economico: 1.55 } },
      { modalidade: 'Crédito à vista', taxa: { hero: 3.44, on: 3.24, economico: 2.40 } },
      { modalidade: 'Parcelado 2x', taxa: { hero: 5.31, on: 4.73, economico: 3.25 } },
      { modalidade: 'Parcelado 3x', taxa: { hero: 6.02, on: 5.50, economico: 3.25 } },
      { modalidade: 'Parcelado 4x', taxa: { hero: 6.74, on: 6.26, economico: 3.25 } },
      { modalidade: 'Parcelado 5x', taxa: { hero: 7.44, on: 7.00, economico: 3.25 } },
      { modalidade: 'Parcelado 6x', taxa: { hero: 8.15, on: 7.74, economico: 3.25 } },
      { modalidade: 'Parcelado 7x', taxa: { hero: 9.54, on: 8.57, economico: 3.45 } },
      { modalidade: 'Parcelado 8x', taxa: { hero: 10.23, on: 9.29, economico: 3.45 } },
      { modalidade: 'Parcelado 9x', taxa: { hero: 10.91, on: 10.01, economico: 3.45 } },
      { modalidade: 'Parcelado 10x', taxa: { hero: 11.57, on: 10.71, economico: 3.45 } },
      { modalidade: 'Parcelado 11x', taxa: { hero: 12.24, on: 11.42, economico: 3.45 } },
      { modalidade: 'Parcelado 12x', taxa: { hero: 12.91, on: 12.11, economico: 3.45 } },
      { modalidade: 'Parcelado 13x', taxa: { hero: 13.56, on: 12.80, economico: 3.45 } },
      { modalidade: 'Parcelado 14x', taxa: { hero: 14.20, on: 13.48, economico: 3.45 } },
      { modalidade: 'Parcelado 15x', taxa: { hero: 14.85, on: 14.15, economico: 3.45 } },
      { modalidade: 'Parcelado 16x', taxa: { hero: 15.48, on: 14.82, economico: 3.45 } },
      { modalidade: 'Parcelado 17x', taxa: { hero: 16.11, on: 15.48, economico: 3.45 } },
      { modalidade: 'Parcelado 18x', taxa: { hero: 16.73, on: 16.13, economico: 3.45 } }
    ],
  }

  const planRates: Record<PlanType, PlanRates> = {
    HERO: {
      debito: "1,39%",
      creditoAVista: "3,15%",
      credito12x: "12,61%",
    },
    ON: {
      debito: "1,39%",
      creditoAVista: "2,91%",
      credito12x: "11,91%",
    },
    ECONÔMICO: {
      debito: "1,15%",
      creditoAVista: "2,40%",
      credito12x: "3,25%",
    },
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
        <div className="bg-gray-800 p-2 rounded-lg md:col-span-2 text-center mb-4">
          <h3 className="text-lg font-bold text-white">Recebimento no dia seguinte</h3>
        </div>
        <div className="bg-gray-800 p-2 rounded-lg md:col-span-1 text-center mb-4 hidden md:block">
          <h3 className="text-lg font-bold text-white">Recebimento conforme parcelas</h3>
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

