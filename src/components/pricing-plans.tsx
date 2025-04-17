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
    basic: number
    pro: number
    hyper: number
  }
}

export default function PricingPlans() {
  const [deliveryOption, setDeliveryOption] = useState<"next-day" | "30-days">("next-day")
  const [seeMore, setSeeMore] = useState(false)

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
      { modalidade: 'Débito', taxa: { basic: 1.39, pro: 1.29, hyper: 1.19 } },
      { modalidade: 'Crédito à vista', taxa: { basic: 2.96, pro: 2.86, hyper: 2.76 } },
      { modalidade: 'Parcelado 2x', taxa: { basic: 3.92, pro: 3.82, hyper: 3.72 } },
      { modalidade: 'Parcelado 3x', taxa: { basic: 4.47, pro: 4.37, hyper: 4.27 } },
      { modalidade: 'Parcelado 4x', taxa: { basic: 5.01, pro: 4.91, hyper: 4.81 } },
      { modalidade: 'Parcelado 5x', taxa: { basic: 5.56, pro: 5.46, hyper: 5.36 } },
      { modalidade: 'Parcelado 6x', taxa: { basic: 6.09, pro: 5.99, hyper: 5.89 } },
      { modalidade: 'Parcelado 7x', taxa: { basic: 6.67, pro: 6.57, hyper: 6.47 } },
      { modalidade: 'Parcelado 8x', taxa: { basic: 7.20, pro: 7.10, hyper: 7.00 } },
      { modalidade: 'Parcelado 9x', taxa: { basic: 7.72, pro: 7.62, hyper: 7.52 } },
      { modalidade: 'Parcelado 10x', taxa: { basic: 8.24, pro: 8.14, hyper: 8.04 } },
      { modalidade: 'Parcelado 11x', taxa: { basic: 8.76, pro: 8.66, hyper: 8.56 } },
      { modalidade: 'Parcelado 12x', taxa: { basic: 9.28, pro: 9.18, hyper: 9.08 } },
      { modalidade: 'Parcelado 13x', taxa: { basic: 9.78, pro: 9.68, hyper: 9.58 } },
      { modalidade: 'Parcelado 14x', taxa: { basic: 10.29, pro: 10.19, hyper: 10.09 } },
      { modalidade: 'Parcelado 15x', taxa: { basic: 10.79, pro: 10.69, hyper: 10.59 } },
      { modalidade: 'Parcelado 16x', taxa: { basic: 11.28, pro: 11.18, hyper: 11.08 } },
      { modalidade: 'Parcelado 17x', taxa: { basic: 11.78, pro: 11.68, hyper: 11.58 } },
      { modalidade: 'Parcelado 18x', taxa: { basic: 12.27, pro: 12.17, hyper: 12.07 } },
    ],
    elo: [
      // Similar structure for Elo rates...
      { modalidade: 'Débito', taxa: { basic: 1.45, pro: 1.35, hyper: 1.25 } },
      { modalidade: 'Crédito à vista', taxa: { basic: 3.29, pro: 3.19, hyper: 3.09 } },
      { modalidade: 'Parcelado 2x', taxa: { basic: 3.92, pro: 3.82, hyper: 3.72 } },
      { modalidade: 'Parcelado 3x', taxa: { basic: 4.47, pro: 4.37, hyper: 4.27 } },
      { modalidade: 'Parcelado 4x', taxa: { basic: 5.01, pro: 4.91, hyper: 4.81 } },
      { modalidade: 'Parcelado 5x', taxa: { basic: 5.56, pro: 5.46, hyper: 5.36 } },
      { modalidade: 'Parcelado 6x', taxa: { basic: 6.09, pro: 5.99, hyper: 5.89 } },
      { modalidade: 'Parcelado 7x', taxa: { basic: 6.67, pro: 6.57, hyper: 6.47 } },
      { modalidade: 'Parcelado 8x', taxa: { basic: 7.20, pro: 7.10, hyper: 7.00 } },
      { modalidade: 'Parcelado 9x', taxa: { basic: 7.72, pro: 7.62, hyper: 7.52 } },
      { modalidade: 'Parcelado 10x', taxa: { basic: 8.24, pro: 8.14, hyper: 8.04 } },
      { modalidade: 'Parcelado 11x', taxa: { basic: 8.76, pro: 8.66, hyper: 8.56 } },
      { modalidade: 'Parcelado 12x', taxa: { basic: 9.28, pro: 9.18, hyper: 9.08 } },
      { modalidade: 'Parcelado 13x', taxa: { basic: 9.78, pro: 9.68, hyper: 9.58 } },
      { modalidade: 'Parcelado 14x', taxa: { basic: 10.29, pro: 10.19, hyper: 10.09 } },
      { modalidade: 'Parcelado 15x', taxa: { basic: 10.79, pro: 10.69, hyper: 10.59 } },
      { modalidade: 'Parcelado 16x', taxa: { basic: 11.28, pro: 11.18, hyper: 11.08 } },
      { modalidade: 'Parcelado 17x', taxa: { basic: 11.78, pro: 11.68, hyper: 11.58 } },
      { modalidade: 'Parcelado 18x', taxa: { basic: 12.27, pro: 12.17, hyper: 12.07 } }
    ],
    hiper: [
      // Similar structure for Hipercard rates...
      { modalidade: 'Débito', taxa: { basic: 1.79, pro: 1.69, hyper: 1.59 } },
      { modalidade: 'Crédito à vista', taxa: { basic: 3.29, pro: 3.19, hyper: 3.09 } },
      { modalidade: 'Parcelado 2x', taxa: { basic: 3.92, pro: 3.82, hyper: 3.72 } },
      { modalidade: 'Parcelado 3x', taxa: { basic: 4.47, pro: 4.37, hyper: 4.27 } },
      { modalidade: 'Parcelado 4x', taxa: { basic: 5.01, pro: 4.91, hyper: 4.81 } },
      { modalidade: 'Parcelado 5x', taxa: { basic: 5.56, pro: 5.46, hyper: 5.36 } },
      { modalidade: 'Parcelado 6x', taxa: { basic: 6.09, pro: 5.99, hyper: 5.89 } },
      { modalidade: 'Parcelado 7x', taxa: { basic: 6.67, pro: 6.57, hyper: 6.47 } },
      { modalidade: 'Parcelado 8x', taxa: { basic: 7.20, pro: 7.10, hyper: 7.00 } },
      { modalidade: 'Parcelado 9x', taxa: { basic: 7.72, pro: 7.62, hyper: 7.52 } },
      { modalidade: 'Parcelado 10x', taxa: { basic: 8.24, pro: 8.14, hyper: 8.04 } },
      { modalidade: 'Parcelado 11x', taxa: { basic: 8.76, pro: 8.66, hyper: 8.56 } },
      { modalidade: 'Parcelado 12x', taxa: { basic: 9.28, pro: 9.18, hyper: 9.08 } },
      { modalidade: 'Parcelado 13x', taxa: { basic: 9.78, pro: 9.68, hyper: 9.58 } },
      { modalidade: 'Parcelado 14x', taxa: { basic: 10.29, pro: 10.19, hyper: 10.09 } },
      { modalidade: 'Parcelado 15x', taxa: { basic: 10.79, pro: 10.69, hyper: 10.59 } },
      { modalidade: 'Parcelado 16x', taxa: { basic: 11.28, pro: 11.18, hyper: 11.08 } },
      { modalidade: 'Parcelado 17x', taxa: { basic: 11.78, pro: 11.68, hyper: 11.58 } },
      { modalidade: 'Parcelado 18x', taxa: { basic: 12.27, pro: 12.17, hyper: 12.07 } }
    ],
  }


  const renderPaymentRatesByPlan = (plan: CardId, rateType: 'basic' | 'pro' | 'hyper') => {
    return (
      seeMore && (
        <Card className={`border-2 hover:border-blue-400 transition-all w-full`} key={plan}>
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
            <Button
              className="w-full bg-blue-400 hover:bg-blue-500 text-black"
              onClick={() => handlePlanSelection(plan)}
            >
              Quero Plano {rateType.toUpperCase()}
            </Button>
          </CardFooter>
        </Card>
      )
    )
  }

  const handlePlanSelection = (plan: PlanType) => {
    console.log(`Plano selecionado: ${plan}`)
    // Aqui você pode implementar a lógica para redirecionar para a página de checkout
    // ou abrir um modal com mais detalhes do plano
    window.open(`#plano-${plan.toLowerCase()}`, "_self")
  }

  const handleViewAllRates = () => {
    setSeeMore(!seeMore)
  }

  return (
    <section className="py-16" id="planos">
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-3xl font-bold">Conheça as melhores taxas do Brasil!</h2>
        <p className="text-lg">Você deseja receber:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-2 rounded-lg md:col-span-2 text-center mb-4">
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
              onClick={() => handlePlanSelection("HERO")}
            >
              Quero Plano HERO
            </Button>
            {renderPaymentRatesByPlan('visa', 'basic')}
          </CardFooter>
        </Card>

        <Card className="border-2 hover:border-green-400 transition-all">
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
              onClick={() => handlePlanSelection("ON")}
            >
              Quero Plano ON
            </Button>
            {renderPaymentRatesByPlan('visa', 'hyper')}
          </CardFooter>
        </Card>

        <Card className="border-2 hover:border-purple-400 transition-all">
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
              onClick={() => handlePlanSelection("HERO")}
            >
              Quero Plano ECONÔMICO
            </Button>
            {renderPaymentRatesByPlan('visa', 'basic')}
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

