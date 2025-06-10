'use client'

import { useState } from 'react'
import Image from 'next/image'

type PaymentPlan = 'HERO' | 'ECONOMICO' | 'ON'
type PaymentTiming = 'NO DIA SEGUINTE' | 'NA HORA'

interface InstallmentOption {
    value: number
    label: string
    taxa: {
        HERO: number
        ON: number
        ECONOMICO: number
    }
    comparativo: {
        brother: number | null
        infinitepay: number | null
    }
}

const installmentOptions: InstallmentOption[] = [
    {
        value: 1,
        label: 'PIX',
        taxa: { HERO: 0.50, ON: 0.50, ECONOMICO: 0.50 },
        comparativo: { brother: 0.99, infinitepay: 0.00 }
    },
    {
        value: 2,
        label: 'Débito',
        taxa: { HERO: 1.39, ON: 1.39, ECONOMICO: 1.15 },
        comparativo: { brother: 1.45, infinitepay: 1.37 }
    },
    {
        value: 3,
        label: 'Crédito à vista',
        taxa: { HERO: 3.15, ON: 2.91, ECONOMICO: 2.40 },
        comparativo: { brother: 3.51, infinitepay: 3.15 }
    },
    {
        value: 4,
        label: 'Parcelado 2x',
        taxa: { HERO: 5.05, ON: 4.49, ECONOMICO: 3.00 },
        comparativo: { brother: 6.99, infinitepay: 5.39 }
    },
    {
        value: 5,
        label: 'Parcelado 3x',
        taxa: { HERO: 5.74, ON: 5.22, ECONOMICO: 3.00 },
        comparativo: { brother: 6.99, infinitepay: 6.12 }
    },
    {
        value: 6,
        label: 'Parcelado 4x',
        taxa: { HERO: 6.42, ON: 5.94, ECONOMICO: 3.00 },
        comparativo: { brother: 7.99, infinitepay: 6.85 }
    },
    {
        value: 7,
        label: 'Parcelado 5x',
        taxa: { HERO: 7.10, ON: 6.66, ECONOMICO: 3.00 },
        comparativo: { brother: 9.99, infinitepay: 7.57 }
    },
    {
        value: 8,
        label: 'Parcelado 6x',
        taxa: { HERO: 7.77, ON: 7.36, ECONOMICO: 3.00 },
        comparativo: { brother: 10.99, infinitepay: 8.28 }
    },
    {
        value: 9,
        label: 'Parcelado 7x',
        taxa: { HERO: 8.98, ON: 8.11, ECONOMICO: 3.25 },
        comparativo: { brother: 11.99, infinitepay: 8.99 }
    },
    {
        value: 10,
        label: 'Parcelado 8x',
        taxa: { HERO: 9.64, ON: 8.81, ECONOMICO: 3.25 },
        comparativo: { brother: 11.99, infinitepay: 9.69 }
    },
    {
        value: 11,
        label: 'Parcelado 9x',
        taxa: { HERO: 10.29, ON: 9.49, ECONOMICO: 3.25 },
        comparativo: { brother: 12.99, infinitepay: 10.38 }
    },
    {
        value: 12,
        label: 'Parcelado 10x',
        taxa: { HERO: 10.93, ON: 10.18, ECONOMICO: 3.25 },
        comparativo: { brother: 13.99, infinitepay: 11.06 }
    },
    {
        value: 13,
        label: 'Parcelado 11x',
        taxa: { HERO: 11.57, ON: 10.85, ECONOMICO: 3.25 },
        comparativo: { brother: 14.79, infinitepay: 11.74 }
    },
    {
        value: 14,
        label: 'Parcelado 12x',
        taxa: { HERO: 12.21, ON: 11.51, ECONOMICO: 3.25 },
        comparativo: { brother: 14.79, infinitepay: 12.40 }
    },
    {
        value: 15,
        label: 'Parcelado 13x',
        taxa: { HERO: 12.83, ON: 12.18, ECONOMICO: 3.25 },
        comparativo: { brother: 14.79, infinitepay: 12.99 }
    },
    {
        value: 16,
        label: 'Parcelado 14x',
        taxa: { HERO: 13.45, ON: 12.83, ECONOMICO: 3.25 },
        comparativo: { brother: 14.80, infinitepay: null }
    },
    {
        value: 17,
        label: 'Parcelado 15x',
        taxa: { HERO: 14.07, ON: 13.48, ECONOMICO: 3.25 },
        comparativo: { brother: 14.77, infinitepay: 14.88 }
    },
    {
        value: 18,
        label: 'Parcelado 16x',
        taxa: { HERO: 14.68, ON: 14.12, ECONOMICO: 3.25 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 19,
        label: 'Parcelado 17x',
        taxa: { HERO: 15.29, ON: 14.76, ECONOMICO: 3.25 },
        comparativo: { brother: 15.33, infinitepay: null }
    },
    {
        value: 20,
        label: 'Parcelado 18x',
        taxa: { HERO: 15.88, ON: 15.39, ECONOMICO: 3.25 },
        comparativo: { brother: 15.99, infinitepay: null }
    },
];

export default function SalesCalculator() {
    const [selectedTiming, setSelectedTiming] = useState<PaymentTiming>('NO DIA SEGUINTE')
    const [selectedPlan, setSelectedPlan] = useState<PaymentPlan>('HERO')
    const [saleValue, setSaleValue] = useState<string>('1.000,00')
    const [selectedInstallment, setSelectedInstallment] = useState<InstallmentOption>(
        installmentOptions[installmentOptions.length - 1]
    )

    function openWhatsapp() {
        const whatsappNumber = "5585987005263" // Substitua pelo número de WhatsApp desejado
        const message = "Olá, gostaria de saber mais sobre as taxas e planos da HeroCash para vendas parceladas. Poderia me ajudar?"
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
        window.open(url, "_blank")
    }

    const formatCurrency = (value: number) => {
        return value.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })
    }

    const parseCurrency = (value: string) => {
        return Number(value.replace(/\D/g, '')) / 100
    }

    const handleSaleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, '')
        const formattedValue = (Number(value) / 100).toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        })
        setSaleValue(formattedValue)
    }

    const calculateResults = () => {
        const value = parseCurrency(saleValue)
        const taxa = selectedInstallment.taxa[selectedPlan]

        // Obter a taxa de mercado com base no comparativo
        const marketTaxa = selectedInstallment.comparativo.brother ?? selectedInstallment.comparativo.infinitepay ?? (taxa + 0.93) //

        const cashReceives = value * (1 - taxa / 100)
        const marketReceives = value * (1 - marketTaxa / 100)
        const savings = cashReceives - marketReceives
        const potentialLoss = savings * 10

        return {
            HeroCashReceives: cashReceives,
            marketReceives,
            savings,
            potentialLoss,
            taxa,
        }
    }
    const results = calculateResults()

    return (
        <div className="bg-white p-8 rounded-2xl HERO-w-4xl mx-auto" id='simulador'>
            <div className="mb-8">
                <p className="text-black text-center mb-4">Selecione seu plano ideal</p>
                {/* <div className="flex justify-center gap-4 mb-4">
                    {(['NO DIA SEGUINTE', 'NA HORA'] as const).map((timing) => (
                        <button
                            key={timing}
                            onClick={() => setSelectedTiming(timing)}
                            className={`px-8 py-2 rounded-full text-sm font-bold transition-colors
                ${timing === selectedTiming
                                    ? 'bg-white text-black'
                                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                                }`}
                        >
                            {timing}
                        </button>
                    ))}
                </div> */}

                <div className="flex-column md:flex justify-center gap-4">
                    {(['HERO', 'ECONOMICO', 'ON'] as const).map((plan) => (
                        <button
                            key={plan}
                            onClick={() => setSelectedPlan(plan)}
                            className={`px-12 py-2 rounded-full text-sm font-bold transition-colors flex items-center gap-2 mb-2 w-full justify-center md:w-1/3
                ${plan === selectedPlan
                                    ? 'bg-yellow-400 text-black shadow-lg'
                                    : 'bg-yellow-300 text-black hover:bg-yellow-700 opacity-[0.8]'
                                }`}
                        >
                            {plan === selectedPlan && (
                                <div className="w-2 h-2 rounded-full bg-green-600" />
                            )}
                            {plan}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div>
                    <label className="block text-black mb-2">Valor da Venda:</label>
                    <input
                        type="text"
                        value={saleValue}
                        onChange={handleSaleValueChange}
                        className="w-full px-4 py-2 rounded-lg border-2 bg-white text-black"
                    />
                </div>
                <div>
                    <label className="block text-black mb-2">Tipo de Venda</label>
                    <select
                        value={selectedInstallment.value}
                        onChange={(e) => setSelectedInstallment(
                            installmentOptions.find(opt => opt.value === Number(e.target.value))!
                        )}
                        className="w-full px-4 py-2 rounded-lg bg-white text-black border-2"
                    >
                        {installmentOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-black mb-2">Taxa HeroCash:</label>
                    <div className="text-3xl font-bold text-gray-700 ">
                        {results.taxa.toFixed(2)}%
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">Com a HeroCash você recebe:</p>
                        <div className="text-4xl font-bold mb-4">
                            {formatCurrency(results.HeroCashReceives)}
                        </div>
                        <p className="text-gray-600 mb-2">Aqui você economiza</p>
                        <div className="bg-yellow-400 rounded-lg py-2 px-4 inline-block">
                            {formatCurrency(results.savings)}
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">Com a taxa média do mercado você recebe:</p>
                        <div className="text-4xl font-bold mb-4">
                            {formatCurrency(results.marketReceives)}
                        </div>
                        <p className="text-gray-600 mb-2">10 vendas como essa você perderia:</p>
                        <div className="bg-red-600 text-white rounded-lg py-2 px-4 inline-block">
                            {formatCurrency(results.potentialLoss)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mb-8">
                <div className="flex items-center align-center justify-center gap-4">
                    <p className="text-black">Simulação aplicada para seguintes bandeiras:</p>

                    <Image
                        src="/images/credit-cards/MASTERCARD.webp"
                        alt="Mastercard"
                        width={50}
                        height={30}
                        className="object-contain bg-white rounded px-2"
                    />
                    <Image
                        src="/images/credit-cards/VISA.png"
                        alt="Visa"
                        width={50}
                        height={30}
                        className="object-contain bg-white rounded px-2"
                    />
                </div>
            </div>

            <div className="flex justify-center gap-4">
                <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full" onClick={openWhatsapp}>
                    Pedir Agora
                </button>
            </div>
        </div>
    )
}