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
        ECONOMICO: number
        ON: number
    }
}

const installmentOptions: InstallmentOption[] = [
    { value: 1, label: 'À vista', taxa: { HERO: 2.96, ECONOMICO: 3.29, ON: 3.49 } },
    { value: 2, label: 'Parcelado em 2x', taxa: { HERO: 3.92, ECONOMICO: 4.07, ON: 4.27 } },
    // Add more installment options...
    { value: 12, label: 'Parcelado em 12x', taxa: { HERO: 9.28, ECONOMICO: 9.48, ON: 9.68 } },
]

export default function SalesCalculator() {
    const [selectedTiming, setSelectedTiming] = useState<PaymentTiming>('NO DIA SEGUINTE')
    const [selectedPlan, setSelectedPlan] = useState<PaymentPlan>('HERO')
    const [saleValue, setSaleValue] = useState<string>('1.000,00')
    const [selectedInstallment, setSelectedInstallment] = useState<InstallmentOption>(
        installmentOptions[installmentOptions.length - 1]
    )

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
        const marketTaxa = taxa + 0.8 // Assuming market rate is 0.8% higher

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
                <p className="text-black text-center mb-4">Selecione seu plano de recebimento:</p>
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
                <button className="px-8 py-3 bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded-full">
                    Pedir Agora
                </button>
                <button className="px-8 py-3 bg-white hover:bg-gray-100 text-black font-bold rounded-full">
                    Ver taxas completas
                </button>
            </div>
        </div>
    )
}