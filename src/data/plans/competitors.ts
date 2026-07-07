export interface CompetitorRates {
  brother: number | null
  infinitepay: number | null
}

/** Taxas de concorrentes para o simulador — dados de mercado, não Herocash */
export const COMPETITOR_RATES: Record<string, CompetitorRates> = {
  PIX: { brother: 0.99, infinitepay: 0.0 },
  Débito: { brother: 1.45, infinitepay: 1.37 },
  "Crédito à vista": { brother: 3.51, infinitepay: 3.15 },
  "Parcelado 2x": { brother: 6.99, infinitepay: 5.39 },
  "Parcelado 3x": { brother: 6.99, infinitepay: 6.12 },
  "Parcelado 4x": { brother: 7.99, infinitepay: 6.85 },
  "Parcelado 5x": { brother: 9.99, infinitepay: 7.57 },
  "Parcelado 6x": { brother: 10.99, infinitepay: 8.28 },
  "Parcelado 7x": { brother: 11.99, infinitepay: 8.99 },
  "Parcelado 8x": { brother: 11.99, infinitepay: 9.69 },
  "Parcelado 9x": { brother: 12.99, infinitepay: 10.38 },
  "Parcelado 10x": { brother: 13.99, infinitepay: 11.06 },
  "Parcelado 11x": { brother: 14.79, infinitepay: 11.74 },
  "Parcelado 12x": { brother: 14.79, infinitepay: 12.4 },
  "Parcelado 13x": { brother: null, infinitepay: null },
  "Parcelado 14x": { brother: null, infinitepay: null },
  "Parcelado 15x": { brother: null, infinitepay: null },
  "Parcelado 16x": { brother: null, infinitepay: null },
  "Parcelado 17x": { brother: null, infinitepay: null },
  "Parcelado 18x": { brother: null, infinitepay: null },
}
