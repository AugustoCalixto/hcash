"use client"

import { installmentOptions } from "@/data/plans"
import { cn } from "@/lib/utils"

export default function PricingTable() {
    const plans = [
        { id: "HERO", name: "Hero", color: "bg-primary" },
        { id: "PREMIUM", name: "Premium", color: "bg-blue-500" },
        { id: "ON", name: "On", color: "bg-emerald-500" },
        { id: "BASIC", name: "Basic", color: "bg-slate-400" },
        { id: "ECONOMICO", name: "Econômico", color: "bg-purple-500" },
    ]

    return (
        <section className="editorial-spacing relative overflow-hidden bg-secondary/30" id="tabela-planos">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 mb-16">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">COMPARAÇÃO DETALHADA</p>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] uppercase text-foreground">
                        TABELA DE <br />
                        <span className="text-glow italic">TAXAS COMPLETAS</span>
                    </h2>
                    <p className="text-xl text-foreground/60 font-medium">
                        Compare todas as modalidades de pagamento em todos os nossos planos em um único lugar.
                    </p>
                </div>

                <div className="glass-card rounded-[2.5rem] overflow-hidden border-black/5 bg-white/40">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-black/5">
                                    <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40 sticky left-0 bg-white/80 backdrop-blur-md z-20">
                                        Modalidade
                                    </th>
                                    {plans.map((plan) => (
                                        <th key={plan.id} className="p-8 group min-w-[140px]">
                                            <div className="space-y-2">
                                                <div className={cn("h-1 w-8 rounded-full mb-4 opacity-40 group-hover:opacity-100 transition-opacity", plan.color)} />
                                                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/80">Plano</div>
                                                <div className="text-2xl font-black tracking-tighter uppercase">{plan.name}</div>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                {installmentOptions.map((option) => (
                                    <tr key={option.value} className="group hover:bg-black/[0.02] transition-colors">
                                        <td className="p-6 md:p-8 font-black uppercase tracking-tight text-foreground/90 text-sm whitespace-nowrap sticky left-0 bg-white/80 backdrop-blur-md group-hover:bg-white/90 z-10">
                                            {option.label}
                                        </td>
                                        {plans.map((plan) => {
                                            const rate = option.taxa[plan.id as keyof typeof option.taxa]
                                            return (
                                                <td key={plan.id} className="p-6 md:p-8">
                                                    <div className="flex flex-col">
                                                        <span className="text-xl font-bold tracking-tighter text-foreground">
                                                            {rate.toFixed(2).replace('.', ',')}%
                                                        </span>
                                                        <span className="text-[9px] font-black uppercase tracking-widest text-foreground/30">Taxa Final</span>
                                                    </div>
                                                </td>
                                            )
                                        })}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center justify-center space-y-4">
                    <p className="text-sm text-foreground/40 font-medium">* Taxas sujeitas a alteração conforme bandeira e modalidade.</p>
                </div>
            </div>

            {/* Decorative Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />
        </section>
    )
}
