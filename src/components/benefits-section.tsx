"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Building2, Receipt, Percent } from "lucide-react"

export default function BenefitsSection() {
  function openWhatsapp() {
    const whatsappNumber = "5585987005263" // Substitua pelo número de WhatsApp desejado
    const message = "Olá, gostaria de saber mais sobre a maquininha Hero Cash!"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="py-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">A Hero Cash Brasil tem a maquininha ideal para seu negócio.</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative" style={{ height: "60vh" }}>
          <Image
            src="/images/model-02.png"
            alt="Pessoa segurando maquininha de cartão Hero Cash"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-yellow-100 rounded-full">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">
                    Recebimento na hora ou em 1 dia
                  </h3>
                  <p className="text-sm text-muted-foreground">(Todos os dias)</p>
                  <p className="text-base">
                    Encontre o plano de taxas perfeito para o seu negócio e impulsione suas vendas.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-yellow-100 rounded-full">
                  <Building2 className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">
                    Mesmas taxas para CPF e CNPJ.
                  </h3>
                  <p className="text-base">Oferecemos taxas incríveis para CNPJ e CPF.</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-yellow-100 rounded-full">
                  <Receipt className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">
                    Sem taxas surpresa
                  </h3>
                  <p className="text-base">Sem taxas promocionais e sem valor mínimo de vendas</p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-start space-x-3">
                <div className="mt-1 p-2 bg-yellow-100 rounded-full">
                  <Percent className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">
                    E as taxas? Bem baixinhas!
                  </h3>
                  <p className="text-base">Descubra as melhores taxas do Brasil de forma simples.</p>
                </div>
              </div>
            </div>
          </div>

          <Button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8"
            onClick={() => openWhatsapp()}
          >
            Adquira e aproveite!
          </Button>
        </div>
      </div>
    </section>
  )
}

