'use client'

import { useState } from 'react'
import Image from 'next/image'

import { installmentOptions, InstallmentOption, PlanId } from '@/data/plans';

type PaymentTiming = 'NO DIA SEGUINTE' | 'NA HORA'

export default function SalesCalculator() {
    const [selectedTiming, setSelectedTiming] = useState<PaymentTiming>('NO DIA SEGUINTE')
    const [selectedPlan, setSelectedPlan] = useState<PlanId>('HERO')
    const [saleValue, setSaleValue] = useState<string>('1.000,00')
    const [calculationType, setCalculationType] = useState<'venda' | 'receber'>('venda')

    const [selectedInstallment, setSelectedInstallment] = useState<InstallmentOption>(
        installmentOptions[installmentOptions.length - 1]
    )

    function openWhatsapp() {
        const whatsappNumber = "5585987005263" // Substitua pelo número de WhatsApp desejado
        const message = "Olá, gostaria de saber mais sobre as taxas e planos da HeroCash para vendas parceladas. Poderia me ajudar?"
        const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
        if (typeof window !== 'undefined') {
            window.open(url, "_blank")
        }
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
        const inputValue = parseCurrency(saleValue)
        const taxa = selectedInstallment.taxa[selectedPlan]
        const marketTaxa = selectedInstallment.comparativo.brother ?? selectedInstallment.comparativo.infinitepay ?? (taxa + 0.93)

        let grossAmount: number;
        let netAmount: number;
        let marketNetAmount: number;

        if (calculationType === 'venda') {
            grossAmount = inputValue;
            netAmount = grossAmount * (1 - taxa / 100);
            marketNetAmount = grossAmount * (1 - marketTaxa / 100);
        } else { // 'receber'
            netAmount = inputValue;
            grossAmount = netAmount / (1 - taxa / 100);
            marketNetAmount = grossAmount * (1 - marketTaxa / 100);
        }

        const savings = netAmount - marketNetAmount;
        const potentialLoss = savings * 10;

        return {
            grossAmount,
            netAmount,
            marketNetAmount,
            savings,
            potentialLoss,
            taxa,
        }
    }
    const results = calculateResults()

    return (
        <div className="bg-white p-8 rounded-2xl HERO-w-4xl mx-auto" id='simulador'>
            <div className="flex justify-center mb-6">
                <div className="relative flex w-full max-w-md p-1 bg-gray-200 rounded-full">
                    <span
                        className={`absolute inset-0 m-1 rounded-full bg-yellow-400 shadow-lg transition-transform duration-300 ease-in-out transform ${
                            calculationType === 'receber' ? 'translate-x-full' : ''
                        }`}
                        style={{ width: 'calc(50% - 0.25rem)' }}
                    />
                    <button
                        onClick={() => setCalculationType('venda')}
                        className={`relative z-10 w-1/2 py-3 text-sm font-bold text-center transition-colors ${
                            calculationType === 'venda' ? 'text-black' : 'text-gray-700'
                        }`}
                    >
                        Quanto você quer cobrar?
                    </button>
                    <button
                        onClick={() => setCalculationType('receber')}
                        className={`relative z-10 w-1/2 py-3 text-sm font-bold text-center transition-colors ${
                            calculationType === 'receber' ? 'text-black' : 'text-gray-700'
                        }`}
                    >
                        Quanto você quer receber?
                    </button>
                </div>
            </div>
            <div className="mb-8">
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
                    {(['HERO', 'ECONOMICO', 'PREMIUM', 'ON'] as const).map((plan) => (
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
                    <label className="block text-black mb-2">{calculationType === 'venda' ? 'Valor da Venda:' : 'Quanto quer receber?'}</label>
                    <input
                        type="text"
                        value={saleValue}
                        onChange={handleSaleValueChange}
                        className="w-full px-4 py-2 rounded-lg border-2 bg-white text-black"
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        {calculationType === 'venda'
                            ? 'Você digita o valor que vai aparecer na maquininha.'
                            : 'Você digita o valor que quer que caia na sua conta.'}
                    </p>
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
                        <p className="text-gray-600 mb-2">
                            {calculationType === 'venda' ? 'Com a HeroCash você recebe:' : 'Você precisa vender:'}
                        </p>
                        <div className="text-4xl font-bold mb-4">
                            {formatCurrency(calculationType === 'venda' ? results.netAmount : results.grossAmount)}
                        </div>
                        <p className="text-gray-600 mb-2">Aqui você economiza</p>
                        <div className="bg-yellow-400 rounded-lg py-2 px-4 inline-block">
                            {formatCurrency(results.savings)}
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-600 mb-2">Com a taxa média do mercado você recebe:</p>
                        <div className="text-4xl font-bold mb-4">
                            {formatCurrency(results.marketNetAmount)}
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