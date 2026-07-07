import type { PlanId } from "@/data/plans/types"

export type RateColumn = "hero" | "on" | "premium" | "basic" | "economico"

export interface RateRow {
  modalidade: string
  taxa: Record<RateColumn, number>
}

export type CardBrand = "visa" | "elo" | "hiper"

export const RATES: Record<CardBrand, RateRow[]> = {
  visa: [
    { modalidade: "PIX", taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.5 } },
    { modalidade: "Débito", taxa: { hero: 1.45, on: 1.45, premium: 1.15, basic: 1.49, economico: 1.09 } },
    { modalidade: "Crédito à vista", taxa: { hero: 3.21, on: 2.97, premium: 3.05, basic: 3.74, economico: 2.2 } },
    { modalidade: "Parcelado 2x", taxa: { hero: 5.11, on: 4.65, premium: 4.42, basic: 5.17, economico: 2.45 } },
    { modalidade: "Parcelado 3x", taxa: { hero: 5.8, on: 5.38, premium: 5.13, basic: 6.06, economico: 2.45 } },
    { modalidade: "Parcelado 4x", taxa: { hero: 6.48, on: 6.1, premium: 5.85, basic: 6.93, economico: 2.45 } },
    { modalidade: "Parcelado 5x", taxa: { hero: 7.16, on: 6.82, premium: 6.55, basic: 7.8, economico: 2.45 } },
    { modalidade: "Parcelado 6x", taxa: { hero: 7.83, on: 7.52, premium: 7.26, basic: 8.65, economico: 2.45 } },
    { modalidade: "Parcelado 7x", taxa: { hero: 9.04, on: 8.27, premium: 8.0, basic: 9.65, economico: 2.78 } },
    { modalidade: "Parcelado 8x", taxa: { hero: 9.7, on: 8.97, premium: 8.69, basic: 10.48, economico: 2.78 } },
    { modalidade: "Parcelado 9x", taxa: { hero: 10.35, on: 9.65, premium: 9.37, basic: 11.3, economico: 2.78 } },
    { modalidade: "Parcelado 10x", taxa: { hero: 10.99, on: 10.34, premium: 10.03, basic: 12.11, economico: 2.78 } },
    { modalidade: "Parcelado 11x", taxa: { hero: 11.63, on: 11.01, premium: 10.7, basic: 12.91, economico: 2.78 } },
    { modalidade: "Parcelado 12x", taxa: { hero: 12.27, on: 11.67, premium: 11.37, basic: 13.71, economico: 2.78 } },
    { modalidade: "Parcelado 13x", taxa: { hero: 12.89, on: 12.34, premium: 12.02, basic: 14.49, economico: 2.8 } },
    { modalidade: "Parcelado 14x", taxa: { hero: 13.51, on: 12.99, premium: 12.66, basic: 15.27, economico: 2.8 } },
    { modalidade: "Parcelado 15x", taxa: { hero: 14.13, on: 13.64, premium: 13.31, basic: 16.03, economico: 2.8 } },
    { modalidade: "Parcelado 16x", taxa: { hero: 14.74, on: 14.28, premium: 13.94, basic: 16.79, economico: 2.8 } },
    { modalidade: "Parcelado 17x", taxa: { hero: 15.35, on: 14.92, premium: 14.57, basic: 17.54, economico: 2.8 } },
    { modalidade: "Parcelado 18x", taxa: { hero: 15.94, on: 15.55, premium: 15.19, basic: 18.28, economico: 2.8 } },
  ],
  elo: [
    { modalidade: "PIX", taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.5 } },
    { modalidade: "Débito", taxa: { hero: 1.51, on: 1.51, premium: 1.41, basic: 1.99, economico: 1.09 } },
    { modalidade: "Crédito à vista", taxa: { hero: 3.55, on: 3.3, premium: 3.31, basic: 4.74, economico: 2.2 } },
    { modalidade: "Parcelado 2x", taxa: { hero: 5.26, on: 4.8, premium: 4.62, basic: 5.72, economico: 2.45 } },
    { modalidade: "Parcelado 3x", taxa: { hero: 5.95, on: 5.53, premium: 5.33, basic: 6.61, economico: 2.45 } },
    { modalidade: "Parcelado 4x", taxa: { hero: 6.63, on: 6.25, premium: 6.05, basic: 7.48, economico: 2.45 } },
    { modalidade: "Parcelado 5x", taxa: { hero: 7.31, on: 6.97, premium: 6.75, basic: 8.35, economico: 2.45 } },
    { modalidade: "Parcelado 6x", taxa: { hero: 7.98, on: 7.67, premium: 7.46, basic: 9.2, economico: 2.45 } },
    { modalidade: "Parcelado 7x", taxa: { hero: 9.19, on: 8.47, premium: 8.2, basic: 10.5, economico: 2.78 } },
    { modalidade: "Parcelado 8x", taxa: { hero: 9.85, on: 9.17, premium: 8.89, basic: 11.33, economico: 2.78 } },
    { modalidade: "Parcelado 9x", taxa: { hero: 10.5, on: 9.85, premium: 9.57, basic: 12.15, economico: 2.78 } },
    { modalidade: "Parcelado 10x", taxa: { hero: 11.14, on: 10.54, premium: 10.23, basic: 12.96, economico: 2.78 } },
    { modalidade: "Parcelado 11x", taxa: { hero: 11.78, on: 11.21, premium: 10.9, basic: 13.76, economico: 2.78 } },
    { modalidade: "Parcelado 12x", taxa: { hero: 12.42, on: 11.87, premium: 11.57, basic: 14.56, economico: 2.78 } },
    { modalidade: "Parcelado 13x", taxa: { hero: 13.04, on: 12.54, premium: 12.22, basic: 15.34, economico: 2.8 } },
    { modalidade: "Parcelado 14x", taxa: { hero: 13.66, on: 13.19, premium: 12.86, basic: 16.12, economico: 2.8 } },
    { modalidade: "Parcelado 15x", taxa: { hero: 14.28, on: 13.84, premium: 13.51, basic: 16.88, economico: 2.8 } },
    { modalidade: "Parcelado 16x", taxa: { hero: 14.89, on: 14.48, premium: 14.14, basic: 17.64, economico: 2.8 } },
    { modalidade: "Parcelado 17x", taxa: { hero: 15.5, on: 15.12, premium: 14.77, basic: 18.39, economico: 2.8 } },
    { modalidade: "Parcelado 18x", taxa: { hero: 16.09, on: 15.75, premium: 15.39, basic: 19.13, economico: 2.8 } },
  ],
  hiper: [
    { modalidade: "PIX", taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.5 } },
    { modalidade: "Débito", taxa: { hero: 1.51, on: 1.51, premium: 1.41, basic: 1.99, economico: 1.09 } },
    { modalidade: "Crédito à vista", taxa: { hero: 3.55, on: 3.3, premium: 3.31, basic: 4.74, economico: 2.2 } },
    { modalidade: "Parcelado 2x", taxa: { hero: 5.26, on: 4.8, premium: 4.62, basic: 5.72, economico: 2.45 } },
    { modalidade: "Parcelado 3x", taxa: { hero: 5.95, on: 5.53, premium: 5.33, basic: 6.61, economico: 2.45 } },
    { modalidade: "Parcelado 4x", taxa: { hero: 6.63, on: 6.25, premium: 6.05, basic: 7.48, economico: 2.45 } },
    { modalidade: "Parcelado 5x", taxa: { hero: 7.31, on: 6.97, premium: 6.75, basic: 8.35, economico: 2.45 } },
    { modalidade: "Parcelado 6x", taxa: { hero: 7.98, on: 7.67, premium: 7.46, basic: 9.2, economico: 2.45 } },
    { modalidade: "Parcelado 7x", taxa: { hero: 9.19, on: 8.47, premium: 8.2, basic: 10.5, economico: 2.78 } },
    { modalidade: "Parcelado 8x", taxa: { hero: 9.85, on: 9.17, premium: 8.89, basic: 11.33, economico: 2.78 } },
    { modalidade: "Parcelado 9x", taxa: { hero: 10.5, on: 9.85, premium: 9.57, basic: 12.15, economico: 2.78 } },
    { modalidade: "Parcelado 10x", taxa: { hero: 11.14, on: 10.54, premium: 10.23, basic: 12.96, economico: 2.78 } },
    { modalidade: "Parcelado 11x", taxa: { hero: 11.78, on: 11.21, premium: 10.9, basic: 13.76, economico: 2.78 } },
    { modalidade: "Parcelado 12x", taxa: { hero: 12.42, on: 11.87, premium: 11.57, basic: 14.56, economico: 2.78 } },
    { modalidade: "Parcelado 13x", taxa: { hero: 13.04, on: 12.54, premium: 12.22, basic: 15.34, economico: 2.8 } },
    { modalidade: "Parcelado 14x", taxa: { hero: 13.66, on: 13.19, premium: 12.86, basic: 16.12, economico: 2.8 } },
    { modalidade: "Parcelado 15x", taxa: { hero: 14.28, on: 13.84, premium: 13.51, basic: 16.88, economico: 2.8 } },
    { modalidade: "Parcelado 16x", taxa: { hero: 14.89, on: 14.48, premium: 14.14, basic: 17.64, economico: 2.8 } },
    { modalidade: "Parcelado 17x", taxa: { hero: 15.5, on: 15.12, premium: 14.77, basic: 18.39, economico: 2.8 } },
    { modalidade: "Parcelado 18x", taxa: { hero: 16.09, on: 15.75, premium: 15.39, basic: 19.13, economico: 2.8 } },
  ],
}

export const PLAN_TO_COLUMN: Record<PlanId, RateColumn> = {
  HERO: "hero",
  ON: "on",
  PREMIUM: "premium",
  BASIC: "basic",
  ECONOMICO: "economico",
}
