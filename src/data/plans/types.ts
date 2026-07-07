export type PlanId = "HERO" | "ON" | "PREMIUM" | "BASIC" | "ECONOMICO"
export type CardId = "visa" | "elo" | "hiper"

export interface PlanRates {
  debito: string
  creditoAVista: string
  credito12x: string
}

export interface PaymentRate {
  modalidade: string
  taxa: {
    hero: number
    on: number
    premium: number
    basic: number
    economico: number
  }
}

export interface InstallmentOption {
  value: number
  label: string
  taxa: Record<PlanId, number>
  comparativo: {
    brother: number | null
    infinitepay: number | null
  }
}
