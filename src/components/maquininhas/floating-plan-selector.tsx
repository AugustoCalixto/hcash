"use client"

import { useState } from "react"
import {
  getPlanDefinition,
  paymentRates,
  planRates,
  RECEIPT_GROUPS,
  type PlanId,
} from "@/data/plans"
import { PLAN_TO_COLUMN } from "@/data/plans/rates"
import { maquininhasContent } from "@/data/maquininhas-content"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"
import { formatRate } from "@/lib/format"
import { openWhatsApp } from "@/lib/whatsapp"

interface FloatingPlanCardProps {
  planId: PlanId
  showFullRates: boolean
  index: number
}

function FloatingPlanCard({ planId, showFullRates, index }: FloatingPlanCardProps) {
  const plan = getPlanDefinition(planId)
  const rates = planRates[planId]
  const { plansSection } = maquininhasContent
  const rateColumn = PLAN_TO_COLUMN[planId]
  const fullRates = paymentRates.visa

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] ring-1 ring-black/5",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)]",
        index % 2 === 1 && "lg:translate-y-4 lg:group-hover:translate-y-2"
      )}
    >
      <header className="mb-5 space-y-2 text-center">
        <span
          className={cn(
            "inline-block rounded-full px-5 py-1.5 text-lg font-bold text-black shadow-sm",
            plan.badgeClass
          )}
        >
          {plan.displayName}
        </span>
        <p className="text-sm leading-snug text-muted-foreground">{plan.tagline}</p>
      </header>

      <div className="mb-5 grid flex-1 grid-cols-3 gap-1 rounded-xl bg-zinc-50 p-3 text-center ring-1 ring-black/5">
        <div className="min-w-0 px-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap">
            {plansSection.rateLabels.debito}
          </p>
          <p className="mt-1 text-xl font-bold tabular-nums md:text-2xl">{rates.debito}</p>
        </div>
        <div className="min-w-0 border-x border-zinc-200/80 px-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap">
            {plansSection.rateLabels.creditoAVista}
          </p>
          <p className="mt-1 text-xl font-bold tabular-nums md:text-2xl">{rates.creditoAVista}</p>
        </div>
        <div className="min-w-0 px-1">
          <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground whitespace-nowrap">
            {plansSection.rateLabels.credito12x}
          </p>
          <p className="mt-1 text-xl font-bold tabular-nums md:text-2xl">{rates.credito12x}</p>
        </div>
      </div>

      {showFullRates && (
        <div className="mb-5 rounded-xl bg-zinc-50 p-3 ring-1 ring-black/5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Todas as modalidades (Visa)
          </p>
          <div className="grid grid-cols-2 gap-2">
            {fullRates.map((rate) => (
              <div
                key={rate.modalidade}
                className="rounded-lg bg-white px-2 py-1.5 text-center shadow-sm"
              >
                <p className="truncate text-[10px] font-medium text-muted-foreground">
                  {rate.modalidade}
                </p>
                <p className="text-sm font-bold tabular-nums">
                  {formatRate(rate.taxa[rateColumn])}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button
        className="mt-auto w-full bg-yellow-400 font-semibold text-black shadow-md shadow-yellow-400/20 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/30"
        onClick={() => openWhatsApp("plano", { planName: plan.whatsappName })}
      >
        {plansSection.ctaTemplate} {plan.displayName}
      </Button>
    </article>
  )
}

export default function FloatingPlanSelector() {
  const [showFullRates, setShowFullRates] = useState(false)
  const { plansSection } = maquininhasContent

  return (
    <section className="relative scroll-mt-24 overflow-x-hidden bg-gradient-to-b from-zinc-100 via-stone-100 to-zinc-50 py-16 md:py-24" id="planos">
      <div
        aria-hidden
        className="pointer-events-none absolute left-[10%] top-12 -z-10 h-48 w-48 rounded-full bg-yellow-300/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 right-[8%] -z-10 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl"
      />

      <InView className="mb-10 space-y-4 text-center md:mb-12">
        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-700">
          {plansSection.eyebrow}
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">
          {plansSection.title}
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600">{plansSection.description}</p>
      </InView>

      <div className="mx-auto max-w-5xl">
        <Tabs defaultValue={RECEIPT_GROUPS[0].id} className="w-full">
          {/* Barra de abas flutuante */}
          <div className="mb-8 flex justify-center">
            <TabsList className="inline-flex h-auto w-full max-w-3xl flex-col gap-2 rounded-2xl bg-white/80 p-2 shadow-[0_8px_32px_rgb(0,0,0,0.08)] ring-1 ring-black/5 backdrop-blur-sm sm:flex-row sm:gap-1">
              {RECEIPT_GROUPS.map((group) => (
                <TabsTrigger
                  key={group.id}
                  value={group.id}
                  className={cn(
                    "h-auto flex-1 rounded-xl px-4 py-3 text-sm leading-snug transition-all duration-300",
                    "data-[state=active]:bg-zinc-900 data-[state=active]:text-white data-[state=active]:shadow-lg",
                    "data-[state=inactive]:text-zinc-600 data-[state=inactive]:hover:bg-zinc-50"
                  )}
                >
                  <span className="block font-semibold">{group.shortLabel}</span>
                  <span className="mt-0.5 block text-xs opacity-80 sm:hidden">{group.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {RECEIPT_GROUPS.map((group) => (
            <TabsContent key={group.id} value={group.id} className="mt-0 space-y-8">
              <p className="text-center text-zinc-600">{group.description}</p>
              <div
                className={cn(
                  "grid gap-6 md:gap-8",
                  group.planIds.length === 1
                    ? "mx-auto max-w-sm"
                    : "md:grid-cols-2 lg:grid-cols-3"
                )}
              >
                {group.planIds.map((planId, index) => (
                  <FloatingPlanCard
                    key={planId}
                    planId={planId}
                    showFullRates={showFullRates}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-10 flex justify-center">
          <Button
            variant="outline"
            className="rounded-full border-2 border-zinc-300 bg-white px-6 shadow-md hover:bg-zinc-50 hover:shadow-lg"
            onClick={() => setShowFullRates((current) => !current)}
          >
            {showFullRates ? plansSection.collapseRatesLabel : plansSection.expandRatesLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
