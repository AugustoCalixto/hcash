import { COMPETITOR_RATES } from "@/data/plans/competitors"
import { PLAN_TO_COLUMN, RATES, type CardBrand, type RateColumn } from "@/data/plans/rates"
import type {
  CardId,
  InstallmentOption,
  PaymentRate,
  PlanId,
  PlanRates,
} from "@/data/plans/types"
import { formatRate } from "@/lib/format"

const PLAN_IDS: PlanId[] = ["HERO", "ON", "PREMIUM", "BASIC", "ECONOMICO"]

function rowToPlanTaxa(taxa: Record<RateColumn, number>): Record<PlanId, number> {
  return {
    HERO: taxa.hero,
    ON: taxa.on,
    PREMIUM: taxa.premium,
    BASIC: taxa.basic,
    ECONOMICO: taxa.economico,
  }
}

function findRate(modalidade: string, card: CardBrand = "visa") {
  const row = RATES[card].find((rate) => rate.modalidade === modalidade)
  if (!row) throw new Error(`Modalidade não encontrada: ${modalidade}`)
  return row
}

export function getRate(plan: PlanId, modalidade: string, card: CardBrand = "visa"): number {
  return findRate(modalidade, card).taxa[PLAN_TO_COLUMN[plan]]
}

export function getPlanRates(): Record<PlanId, PlanRates> {
  const result = {} as Record<PlanId, PlanRates>

  for (const planId of PLAN_IDS) {
    const column = PLAN_TO_COLUMN[planId]
    result[planId] = {
      debito: formatRate(findRate("Débito").taxa[column]),
      creditoAVista: formatRate(findRate("Crédito à vista").taxa[column]),
      credito12x: formatRate(findRate("Parcelado 12x").taxa[column]),
    }
  }

  return result
}

export function getPaymentRates(): Record<CardId, PaymentRate[]> {
  const result = {} as Record<CardId, PaymentRate[]>

  for (const card of Object.keys(RATES) as CardId[]) {
    result[card] = RATES[card].map((row) => ({
      modalidade: row.modalidade,
      taxa: { ...row.taxa },
    }))
  }

  return result
}

export function getInstallmentOptions(): InstallmentOption[] {
  return RATES.visa.map((row, index) => ({
    value: index + 1,
    label: row.modalidade,
    taxa: rowToPlanTaxa(row.taxa),
    comparativo: COMPETITOR_RATES[row.modalidade] ?? { brother: null, infinitepay: null },
  }))
}

export const planRates = getPlanRates()
export const paymentRates = getPaymentRates()
export const installmentOptions = getInstallmentOptions()
