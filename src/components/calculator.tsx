'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { installmentOptions, InstallmentOption, PlanId } from '@/data/plans'
import { cn } from '@/lib/utils'
import { ArrowRight, Calculator } from 'lucide-react'

export default function SalesCalculator() {
    const [selectedPlan, setSelectedPlan] = useState<PlanId>('HERO')
    const [saleValue, setSaleValue] = useState<string>('1.000,00')
    const [calculationType, setCalculationType] = useState<'venda' | 'receber'>('venda')

    const [selectedInstallment, setSelectedInstallment] = useState<InstallmentOption>(
        installmentOptions[installmentOptions.length - 1]
    )

    function openWhatsapp() {
        const whatsappNumber = "5585987005263"
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
        } else {
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
        <section className="editorial-spacing relative" id="simulador">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="glass-card rounded-[3rem] p-1 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
                    
                    <div className="p-8 md:p-12 space-y-12 relative z-10">
                        {/* Header & Toggle */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                            <div className="space-y-4 text-center md:text-left">
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                    <div className="p-2 glass rounded-lg border-primary/20">
                                        <Calculator className="w-5 h-5 text-primary" />
                                    </div>
                                    <h2 className="text-3xl font-black uppercase tracking-tighter">Simulador de Taxas</h2>
                                </div>
                                <p className="text-sm text-foreground/50 font-medium max-w-xs">
                                    Compare agora e descubra quanto você economiza com a Hero Cash.
                                </p>
                            </div>

                            <div className="relative flex w-full max-w-md p-1.5 glass rounded-full border-white/5">
                                <div
                                    className={cn(
                                        "absolute inset-y-1.5 left-1.5 w-[calc(50%-0.375rem)] bg-primary rounded-full transition-transform duration-500 ease-out",
                                        calculationType === 'receber' ? "translate-x-full" : ""
                                    )}
                                />
                                <button
                                    onClick={() => setCalculationType('venda')}
                                    className={cn(
                                        "relative z-10 w-1/2 py-3.5 text-[10px] font-black uppercase tracking-widest text-center transition-colors duration-500",
                                        calculationType === 'venda' ? "text-black" : "text-foreground/40 hover:text-foreground/60"
                                    )}
                                >
                                    Quanto quer cobrar?
                                </button>
                                <button
                                    onClick={() => setCalculationType('receber')}
                                    className={cn(
                                        "relative z-10 w-1/2 py-3.5 text-[10px] font-black uppercase tracking-widest text-center transition-colors duration-500",
                                        calculationType === 'receber' ? "text-black" : "text-foreground/40 hover:text-foreground/60"
                                    )}
                                >
                                    Quanto quer receber?
                                </button>
                            </div>
                        </div>

                        {/* Plan Selection */}
                        <div className="flex flex-wrap justify-center items-center gap-3">
                            {(['HERO', 'ON', 'PREMIUM', 'BASIC', 'ECONOMICO'] as const).map((plan) => (
                                <button
                                    key={plan}
                                    onClick={() => setSelectedPlan(plan)}
                                    className={cn(
                                        "px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300",
                                        plan === selectedPlan
                                            ? "bg-primary text-black shadow-lg shadow-primary/20 scale-105"
                                            : "glass border-white/5 text-foreground/40 hover:text-foreground/70 hover:bg-white/5"
                                    )}
                                >
                                    {plan}
                                </button>
                            ))}
                        </div>

                        {/* Inputs Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
                            <div className="md:col-span-5 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 px-2 leading-none">
                                    {calculationType === 'venda' ? 'VALOR DA VENDA' : 'VALOR A RECEBER'}
                                </label>
                                <div className="relative group">
                                    <span className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl font-black text-primary italic">R$</span>
                                    <input
                                        type="text"
                                        value={saleValue}
                                        onChange={handleSaleValueChange}
                                        className="w-full bg-white/[0.03] glass-card border-none rounded-[1.5rem] py-6 pl-16 pr-8 text-4xl font-black tracking-tighter outline-none focus:bg-white/[0.07] transition-all"
                                    />
                                </div>
                            </div>

                            <div className="md:col-span-4 space-y-3">
                                <label className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 px-2 leading-none">MODALIDADE</label>
                                <select
                                    value={selectedInstallment.value}
                                    onChange={(e) => setSelectedInstallment(
                                        installmentOptions.find(opt => opt.value === Number(e.target.value))!
                                    )}
                                    className="w-full bg-white/[0.03] glass rounded-[1.5rem] border-white/5 py-4 px-6 text-sm font-bold appearance-none outline-none focus:bg-white/10 transition-all cursor-pointer"
                                >
                                    {installmentOptions.map((option) => (
                                        <option key={option.value} value={option.value} className="bg-[#0f1930] text-foreground">
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="md:col-span-3 pb-2 text-center md:text-right">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40 mb-1">TAXA HEROCASH</p>
                                <p className="text-5xl font-black italic tracking-tighter text-primary text-glow">
                                    {results.taxa.toFixed(2)}<span className="text-2xl not-italic">%</span>
                                </p>
                            </div>
                        </div>

                        {/* Comparison Results Card */}
                        <div className="glass rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                             <div className="absolute inset-0 bg-primary/[0.02] pointer-events-none" />
                             
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                                <div className="space-y-6 text-center md:text-left">
                                    <div className="space-y-1">
                                        <p className="text-xs font-bold text-foreground/40 uppercase tracking-widest">
                                            {calculationType === 'venda' ? 'COM A HEROCASH VOCÊ RECEBE:' : 'VOCÊ PRECISA VENDER:'}
                                        </p>
                                        <p className="text-6xl font-black tracking-tighter text-white">
                                            {formatCurrency(calculationType === 'venda' ? results.netAmount : results.grossAmount)}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center gap-4 bg-primary text-black px-6 py-3 rounded-2xl font-black text-sm uppercase tracking-tight shadow-xl shadow-primary/20">
                                        VOCÊ ECONOMIZA {formatCurrency(results.savings)}
                                    </div>
                                </div>

                                <div className="space-y-8 md:border-l md:border-white/10 md:pl-12 text-center md:text-left">
                                    <div className="space-y-1">
                                        <p className="text-[10px] font-black uppercase tracking-widest opacity-30">MÉDIA DO MERCADO</p>
                                        <p className="text-3xl font-black text-foreground/40 tracking-tight">
                                            {formatCurrency(results.marketNetAmount)}
                                        </p>
                                    </div>
                                    <div className="glass bg-destructive/10 border-destructive/20 p-6 rounded-2xl space-y-2">
                                        <p className="text-[9px] font-black uppercase tracking-[0.2em] text-destructive italic">ALERTA DE PERDA</p>
                                        <p className="text-xs font-bold text-foreground/60 leading-tight">
                                            Em 10 vendas iguais a esta, você estaria deixando de ganhar:
                                        </p>
                                        <p className="text-2xl font-black text-destructive tracking-tighter uppercase">
                                            {formatCurrency(results.potentialLoss)}
                                        </p>
                                    </div>
                                </div>
                             </div>
                        </div>

                        {/* Footer Info & Footer button */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                            <div className="flex items-center gap-6 glass px-6 py-3 rounded-full border-white/5">
                                <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Bandeiras Simuadas:</p>
                                <div className="flex items-center gap-6">
                                    <Image
                                        src="/images/credit-cards/MASTERCARD.webp"
                                        alt="Mastercard"
                                        width={32}
                                        height={20}
                                        className="object-contain opacity-40 hover:opacity-100 transition-opacity"
                                    />
                                    <Image
                                        src="/images/credit-cards/VISA.png"
                                        alt="Visa"
                                        width={32}
                                        height={20}
                                        className="object-contain opacity-40 hover:opacity-100 transition-opacity"
                                    />
                                </div>
                            </div>
                            
                            <Button 
                                className="bg-hero-gradient text-black font-black px-12 h-16 rounded-[1.5rem] shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all w-full md:w-auto"
                                onClick={openWhatsapp}
                            >
                                PEDIR AGORA
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

