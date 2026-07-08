import type { PlanId } from "@/data/plans/types"

export interface PlanDefinition {
  id: PlanId
  name: string
  displayName: string
  badgeClass: string
  tagline: string
  whatsappName: string
}

export const PLAN_DEFINITIONS: PlanDefinition[] = [
  {
    id: "BASIC",
    name: "Basic",
    displayName: "Basic",
    badgeClass: "bg-slate-400",
    tagline: "O plano mais acessível para começar!",
    whatsappName: "Basic",
  },
  {
    id: "HERO",
    name: "Hero",
    displayName: "Hero",
    badgeClass: "bg-yellow-400",
    tagline: "Receba na hora e venda com as menores taxas!",
    whatsappName: "Hero",
  },
  {
    id: "ON",
    name: "On",
    displayName: "On",
    badgeClass: "bg-emerald-400",
    tagline: "Taxas competitivas com recebimento no dia seguinte.",
    whatsappName: "On",
  },
  {
    id: "PREMIUM",
    name: "Prime",
    displayName: "Prime",
    badgeClass: "bg-blue-400",
    tagline: "O equilíbrio ideal entre taxa e recebimento rápido.",
    whatsappName: "Prime",
  },
  {
    id: "ECONOMICO",
    name: "Econômico",
    displayName: "Econômico",
    badgeClass: "bg-purple-400",
    tagline: "Menores taxas com recebimento conforme parcelas.",
    whatsappName: "Econômico",
  },
]

export const RECEIPT_GROUPS = [
  {
    id: "instant",
    label: "Recebimento na hora",
    shortLabel: "Na hora",
    description: "Receba suas vendas instantaneamente, todos os dias.",
    planIds: ["HERO"] as const satisfies readonly PlanId[],
  },
  {
    id: "next-day",
    label: "Recebimento no dia seguinte",
    shortLabel: "Dia seguinte",
    description: "Receba no próximo dia útil com taxas competitivas.",
    planIds: ["BASIC", "ON", "PREMIUM"] as const satisfies readonly PlanId[],
  },
  {
    id: "installments",
    label: "Recebimento conforme parcelas",
    shortLabel: "Conforme parcelas",
    description: "Receba a cada parcela vendida — ideal para fluxo de caixa previsível.",
    planIds: ["ECONOMICO"] as const satisfies readonly PlanId[],
  },
] as const

export type ReceiptGroupId = (typeof RECEIPT_GROUPS)[number]["id"]

export function getPlanDefinition(planId: PlanId): PlanDefinition {
  const plan = PLAN_DEFINITIONS.find((item) => item.id === planId)
  if (!plan) throw new Error(`Plano não encontrado: ${planId}`)
  return plan
}

export function getPlansForReceiptGroup(groupId: ReceiptGroupId): PlanDefinition[] {
  const group = RECEIPT_GROUPS.find((item) => item.id === groupId)
  if (!group) throw new Error(`Grupo de recebimento não encontrado: ${groupId}`)
  return group.planIds.map((planId) => getPlanDefinition(planId))
}