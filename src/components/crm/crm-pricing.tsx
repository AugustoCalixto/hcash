"use client"

import { useState } from "react"
import { Check, CheckCircle2, Smartphone, X } from "lucide-react"
import { CrmPricingCompareDialog } from "@/components/crm/crm-pricing-compare-dialog"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import {
  type CrmPlan,
  crmPricingContent,
  formatCrmPrice,
} from "@/data/crm-pricing"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

function PlanFeatureList({
  features,
  accent,
}: {
  features: CrmPlan["mainFeatures"]
  accent: CrmPlan["accent"]
}) {
  const includedIconClass =
    accent === "featured" ? "text-yellow-600" : "text-emerald-600"

  return (
    <ul className="space-y-2.5">
      {features.map((feature) => (
        <li key={feature.label} className="flex items-start gap-2.5 text-sm">
          {feature.label.toLowerCase().includes("versão mobile") ? (
            <Smartphone className={cn("mt-0.5 h-4 w-4 shrink-0", includedIconClass)} />
          ) : feature.included ? (
            <CheckCircle2 className={cn("mt-0.5 h-4 w-4 shrink-0", includedIconClass)} />
          ) : (
            <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
          )}
          <span className={cn(!feature.included && "text-muted-foreground")}>{feature.label}</span>
        </li>
      ))}
    </ul>
  )
}

function PlanCard({ plan }: { plan: CrmPlan }) {
  const whatsappUrl = buildWhatsAppUrl("plano", { planName: plan.name })
  const isFeatured = plan.accent === "featured"

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
        isFeatured && "border-yellow-400 shadow-md ring-1 ring-yellow-400/30"
      )}
    >
      {plan.highlighted && plan.highlightLabel ? (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
            {plan.highlightLabel}
          </span>
        </div>
      ) : null}

      <div className="space-y-1 border-b pb-5">
        <h3 className="text-lg font-bold">{plan.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-sm font-medium text-muted-foreground">R$</span>
          <span className="text-4xl font-bold tracking-tight">{formatCrmPrice(plan.monthlyPrice)}</span>
          <span className="text-sm text-muted-foreground">/mês</span>
        </div>
        <p className="text-sm text-muted-foreground">{plan.usersLabel}</p>
      </div>

      <div className="flex-1 space-y-5 py-5">
        <PlanFeatureList features={plan.mainFeatures} accent={plan.accent} />

        <div className="space-y-3">
          <p
            className={cn(
              "text-xs font-bold uppercase tracking-wider",
              isFeatured ? "text-yellow-700" : "text-muted-foreground"
            )}
          >
            Automação
          </p>
          <ul className="space-y-2">
            {plan.automationFeatures.map((feature) => (
              <li key={feature.label} className="flex items-start gap-2 text-sm">
                {feature.included ? (
                  <Check className={cn("mt-0.5 h-4 w-4 shrink-0", isFeatured ? "text-yellow-600" : "text-emerald-600")} />
                ) : (
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40" />
                )}
                <span className={cn(!feature.included && "text-muted-foreground")}>{feature.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        asChild
        className={cn(
          "w-full font-semibold",
          isFeatured
            ? "bg-yellow-400 text-black hover:bg-yellow-500"
            : "bg-gray-900 text-white hover:bg-gray-800"
        )}
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Falar com especialista
        </a>
      </Button>
    </article>
  )
}

function AddonCard({ name, priceLabel, description }: (typeof crmPricingContent.addons)[number]) {
  return (
    <article className="flex h-full flex-col rounded-2xl border bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/15 text-yellow-700">
        <CheckCircle2 className="h-5 w-5" />
      </div>
      <h4 className="font-semibold">{name}</h4>
      <p className="mt-2 text-xl font-bold">{priceLabel}</p>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  )
}

export function CrmPricing() {
  const { section, plans, addons } = crmPricingContent
  const [compareOpen, setCompareOpen] = useState(false)

  return (
    <section className="scroll-mt-24 bg-gray-50/80 py-16 md:py-24" id="planos">
      <InView className="mx-auto mb-10 max-w-2xl space-y-4 text-center md:mb-14">
        <p className="text-sm font-semibold uppercase tracking-wider text-yellow-600">{section.eyebrow}</p>
        <h2 className="text-3xl font-bold tracking-tight text-balance md:text-4xl">{section.title}</h2>
        <p className="text-lg text-muted-foreground">{section.description}</p>
      </InView>

      <InView delay={60}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} />
          ))}
        </div>
      </InView>

      <InView delay={100} className="mt-10 flex justify-center">
        <Button
          variant="outline"
          size="lg"
          className="border-2 px-8 font-semibold hover:bg-white"
          onClick={() => setCompareOpen(true)}
        >
          {section.compareCta}
        </Button>
      </InView>

      <InView delay={120} className="mt-16 md:mt-20">
        <h3 className="mb-8 text-center text-2xl font-bold md:text-3xl">{section.addonsTitle}</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {addons.map((addon) => (
            <AddonCard key={addon.name} {...addon} />
          ))}
        </div>
      </InView>

      <CrmPricingCompareDialog open={compareOpen} onOpenChange={setCompareOpen} />
    </section>
  )
}
