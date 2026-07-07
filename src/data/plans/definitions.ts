import type { PlanId } from "@/data/plans/types"

export const PLAN_DEFINITIONS = [
  {
    id: "BASIC" as PlanId,
    name: "Basic",
    displayName: "Basic",
    color: "bg-slate-400",
    tagline: "O plano mais acessível para começar!",
  },
  {
    id: "HERO" as PlanId,
    name: "Hero",
    displayName: "Hero",
    color: "bg-primary",
    tagline: "Recebimento na hora",
  },
  {
    id: "ON" as PlanId,
    name: "On",
    displayName: "On",
    color: "bg-emerald-500",
    tagline: "Recebimento em 1 dia",
  },
  {
    id: "PREMIUM" as PlanId,
    name: "Prime",
    displayName: "Prime",
    color: "bg-blue-500",
    tagline: "Venda mais com as menores taxas!",
  },
  {
    id: "ECONOMICO" as PlanId,
    name: "Econômico",
    displayName: "Econômico",
    color: "bg-purple-500",
    tagline: "Recebimento conforme parcelas",
  },
] as const
