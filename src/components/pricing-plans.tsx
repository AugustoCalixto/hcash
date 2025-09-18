"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { planRates, paymentRates, CardId } from "@/data/plans";

export default function PricingPlans() {
  const [seeMore, setSeeMore] = useState(false)

  function openWhatsapp(plan: string) {
    const whatsappNumber = "5585987005263" // Substitua pelo número de WhatsApp desejado
    const message = `Olá, gostaria de saber mais sobre o plano ${plan}!`
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  const renderPaymentRatesByPlan = (plan: CardId, rateType: 'hero' | 'on' | 'economico' | 'premium') => {
    return (
      seeMore && (
        <Card className={`border-2 transition-all w-full`} key={plan}>
          <CardHeader className="text-center">
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Coluna Recebimento na hora */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-800 p-2 rounded-lg text-center">
            <h3 className="text-lg font-bold text-white">Recebimento na hora</h3>
          </div>
          <Card className="border-2 hover:border-yellow-400 transition-all flex-1">
            <CardHeader className="text-center">
              <CardTitle className="inline-block bg-yellow-400 px-6 py-1 rounded-full text-xl">HERO</CardTitle>
              <p className="text-sm mt-2">Venda mais com as <span className="font-bold">menores taxas!</span></p>
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
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" onClick={() => openWhatsapp("HERO")}>Quero o plano HERO</Button>
              {renderPaymentRatesByPlan('visa', 'hero')}
            </CardFooter>
          </Card>
        </div>

        {/* Coluna Recebimento no dia seguinte */}
        <div className="flex flex-col gap-6 md:col-span-2">
          <div className="bg-gray-800 p-2 rounded-lg text-center">
            <h3 className="text-lg font-bold text-white">Recebimento no dia seguinte</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-2 hover:border-yellow-400 transition-all flex-1">
              <CardHeader className="text-center">
                <CardTitle className="inline-block bg-green-400 px-6 py-1 rounded-full text-xl">ON</CardTitle>
                <p className="text-sm mt-2">Venda mais com as <span className="font-bold">menores taxas!</span></p>
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
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" onClick={() => openWhatsapp("ON")}>Quero o plano ON</Button>
                {renderPaymentRatesByPlan('visa', 'on')}
              </CardFooter>
            </Card>
            <Card className="border-2 hover:border-yellow-400 transition-all flex-1">
              <CardHeader className="text-center">
                <CardTitle className="inline-block bg-blue-400 px-6 py-1 rounded-full text-xl">PREMIUM</CardTitle>
                <p className="text-sm mt-2">Venda mais com as <span className="font-bold">menores taxas!</span></p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div>
                    <p className="text-xs uppercase">DÉBITO</p>
                    <p className="text-2xl font-bold">{planRates.PREMIUM.debito}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase">CRÉDITO À VISTA</p>
                    <p className="text-2xl font-bold">{planRates.PREMIUM.creditoAVista}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase">CRÉDITO 12x</p>
                    <p className="text-2xl font-bold">{planRates.PREMIUM.credito12x}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" onClick={() => openWhatsapp("PREMIUM")}>Quero o plano PREMIUM</Button>
                {renderPaymentRatesByPlan('visa', 'premium')}
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Coluna Recebimento conforme parcelas */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-800 p-2 rounded-lg text-center">
            <h3 className="text-lg font-bold text-white">Recebimento conforme parcelas</h3>
          </div>
          <Card className="border-2 hover:border-yellow-400 transition-all flex-1">
            <CardHeader className="text-center">
              <CardTitle className="inline-block bg-purple-400 px-6 py-1 rounded-full text-xl">ECONOMICO</CardTitle>
              <p className="text-sm mt-2">Venda mais com as <span className="font-bold">menores taxas!</span></p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-xs uppercase">DÉBITO</p>
                  <p className="text-2xl font-bold">{planRates.ECONOMICO.debito}</p>
                </div>
                <div>
                  <p className="text-xs uppercase">CRÉDITO À VISTA</p>
                  <p className="text-2xl font-bold">{planRates.ECONOMICO.creditoAVista}</p>
                </div>
                <div>
                  <p className="text-xs uppercase">CRÉDITO 12x</p>
                  <p className="text-2xl font-bold">{planRates.ECONOMICO.credito12x}</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" onClick={() => openWhatsapp("econômico")}>Quero o plano ECONÔMICO</Button>
              {renderPaymentRatesByPlan('visa', 'economico')}
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button variant="outline" className="rounded-full" onClick={handleViewAllRates}>
          Ver taxas completas
        </Button>
      </div>
    </section>
  )
}