export type PlanId = "HERO" | "ON" | "ECONOMICO" | "PREMIUM";
export type CardId = 'visa' | 'elo' | 'hiper';

// From pricing-plans.tsx
export interface PlanRates {
    debito: string
    creditoAVista: string
    credito12x: string
}

export const planRates: Record<PlanId, PlanRates> = {
    HERO: {
        debito: "1,39%",
        creditoAVista: "3,15%",
        credito12x: "12,61%",
    },
    ON: {
        debito: "1,39%",
        creditoAVista: "2,91%",
        credito12x: "12,01%", // Updated from 11,91%
    },
    ECONOMICO: {
        debito: "1,09%", // Updated from 1,15%
        creditoAVista: "2,20%", // Updated from 2,40%
        credito12x: "2,78%", // Updated from 3,25%
    },
    PREMIUM: { // New plan
        debito: "1,09%",
        creditoAVista: "2,99%",
        credito12x: "11,70%",
    },
};

// From pricing-plans.tsx
export interface PaymentRate {
    modalidade: string
    taxa: {
        hero: number
        on: number
        economico: number
        premium: number
    }
}

export const paymentRates: Record<CardId, PaymentRate[]> = {
    visa: [
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50, premium: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.39, on: 1.39, economico: 1.09, premium: 1.09 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.15, on: 2.91, economico: 2.20, premium: 2.99 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.16, on: 4.68, economico: 2.45, premium: 4.46 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.87, on: 5.45, economico: 2.45, premium: 5.21 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.59, on: 6.21, economico: 2.45, premium: 5.96 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.29, on: 6.95, economico: 2.45, premium: 6.69 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 8.00, on: 7.69, economico: 2.45, premium: 7.43 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.24, on: 8.47, economico: 2.78, premium: 8.20 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.93, on: 9.19, economico: 2.78, premium: 8.91 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.61, on: 9.91, economico: 2.78, premium: 9.62 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.27, on: 10.61, economico: 2.78, premium: 10.32 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.94, on: 11.32, economico: 2.78, premium: 11.01 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.61, on: 12.01, economico: 2.78, premium: 11.70 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.26, on: 12.70, economico: 2.80, premium: 12.38 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.90, on: 13.38, economico: 2.80, premium: 13.05 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.55, on: 14.05, economico: 2.80, premium: 13.72 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 15.18, on: 14.72, economico: 2.80, premium: 14.37 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.81, on: 15.38, economico: 2.80, premium: 15.03 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.43, on: 16.03, economico: 2.80, premium: 15.67 } },
    ],
    elo: [ // Assuming "OUTRAS" applies to ELO and HIPER
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50, premium: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, economico: 1.39, premium: 1.35 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.44, on: 3.24, economico: 2.25, premium: 3.25 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.31, on: 4.83, economico: 2.64, premium: 4.66 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 6.02, on: 5.60, economico: 2.64, premium: 5.41 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.74, on: 6.36, economico: 2.64, premium: 6.16 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.44, on: 7.10, economico: 2.64, premium: 6.89 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 8.15, on: 7.84, economico: 2.64, premium: 7.63 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.54, on: 8.67, economico: 2.94, premium: 8.40 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 10.23, on: 9.39, economico: 2.94, premium: 9.11 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.91, on: 10.11, economico: 2.94, premium: 9.82 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.57, on: 10.81, economico: 2.94, premium: 10.52 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 12.24, on: 11.52, economico: 2.94, premium: 11.21 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.91, on: 12.21, economico: 2.94, premium: 11.90 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.56, on: 12.90, economico: 3.00, premium: 12.58 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 14.20, on: 13.58, economico: 3.00, premium: 13.25 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.85, on: 14.25, economico: 3.00, premium: 13.92 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 15.48, on: 14.92, economico: 3.00, premium: 14.57 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 16.11, on: 15.58, economico: 3.00, premium: 15.23 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.73, on: 16.23, economico: 3.00, premium: 15.87 } }
    ],
    hiper: [ // Same as ELO for now, as "OUTRAS" is generic
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, economico: 0.50, premium: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, economico: 1.39, premium: 1.35 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.44, on: 3.24, economico: 2.25, premium: 3.25 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.31, on: 4.83, economico: 2.64, premium: 4.66 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 6.02, on: 5.60, economico: 2.64, premium: 5.41 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.74, on: 6.36, economico: 2.64, premium: 6.16 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.44, on: 7.10, economico: 2.64, premium: 6.89 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 8.15, on: 7.84, economico: 2.64, premium: 7.63 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.54, on: 8.67, economico: 2.94, premium: 8.40 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 10.23, on: 9.39, economico: 2.94, premium: 9.11 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.91, on: 10.11, economico: 2.94, premium: 9.82 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.57, on: 10.81, economico: 2.94, premium: 10.52 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 12.24, on: 11.52, economico: 2.94, premium: 11.21 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.91, on: 12.21, economico: 2.94, premium: 11.90 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.56, on: 12.90, economico: 3.00, premium: 12.58 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 14.20, on: 13.58, economico: 3.00, premium: 13.25 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.85, on: 14.25, economico: 3.00, premium: 13.92 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 15.48, on: 14.92, economico: 3.00, premium: 14.57 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 16.11, on: 15.58, economico: 3.00, premium: 15.23 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.73, on: 16.23, economico: 3.00, premium: 15.87 } }
    ],
};

// From calculator.tsx
export interface InstallmentOption {
    value: number
    label: string
    taxa: {
        HERO: number
        ON: number
        ECONOMICO: number
        PREMIUM: number
    }
    comparativo: {
        brother: number | null
        infinitepay: number | null
    }
}

export const installmentOptions: InstallmentOption[] = [
    {
        value: 1,
        label: 'PIX',
        taxa: { HERO: 0.50, ON: 0.50, ECONOMICO: 0.50, PREMIUM: 0.50 },
        comparativo: { brother: 0.99, infinitepay: 0.00 }
    },
    {
        value: 2,
        label: 'Débito',
        taxa: { HERO: 1.39, ON: 1.39, ECONOMICO: 1.09, PREMIUM: 1.09 },
        comparativo: { brother: 1.45, infinitepay: 1.37 }
    },
    {
        value: 3,
        label: 'Crédito à vista',
        taxa: { HERO: 3.15, ON: 2.91, ECONOMICO: 2.20, PREMIUM: 2.99 },
        comparativo: { brother: 3.51, infinitepay: 3.15 }
    },
    {
        value: 4,
        label: 'Parcelado 2x',
        taxa: { HERO: 5.16, ON: 4.68, ECONOMICO: 2.45, PREMIUM: 4.46 },
        comparativo: { brother: 6.99, infinitepay: 5.39 }
    },
    {
        value: 5,
        label: 'Parcelado 3x',
        taxa: { HERO: 5.87, ON: 5.45, ECONOMICO: 2.45, PREMIUM: 5.21 },
        comparativo: { brother: 6.99, infinitepay: 6.12 }
    },
    {
        value: 6,
        label: 'Parcelado 4x',
        taxa: { HERO: 6.59, ON: 6.21, ECONOMICO: 2.45, PREMIUM: 5.96 },
        comparativo: { brother: 7.99, infinitepay: 6.85 }
    },
    {
        value: 7,
        label: 'Parcelado 5x',
        taxa: { HERO: 7.29, ON: 6.95, ECONOMICO: 2.45, PREMIUM: 6.69 },
        comparativo: { brother: 9.99, infinitepay: 7.57 }
    },
    {
        value: 8,
        label: 'Parcelado 6x',
        taxa: { HERO: 8.00, ON: 7.69, ECONOMICO: 2.45, PREMIUM: 7.43 },
        comparativo: { brother: 10.99, infinitepay: 8.28 }
    },
    {
        value: 9,
        label: 'Parcelado 7x',
        taxa: { HERO: 9.24, ON: 8.47, ECONOMICO: 2.78, PREMIUM: 8.20 },
        comparativo: { brother: 11.99, infinitepay: 8.99 }
    },
    {
        value: 10,
        label: 'Parcelado 8x',
        taxa: { HERO: 9.93, ON: 9.19, ECONOMICO: 2.78, PREMIUM: 8.91 },
        comparativo: { brother: 11.99, infinitepay: 9.69 }
    },
    {
        value: 11,
        label: 'Parcelado 9x',
        taxa: { HERO: 10.61, ON: 9.91, ECONOMICO: 2.78, PREMIUM: 9.62 },
        comparativo: { brother: 12.99, infinitepay: 10.38 }
    },
    {
        value: 12,
        label: 'Parcelado 10x',
        taxa: { HERO: 11.27, ON: 10.61, ECONOMICO: 2.78, PREMIUM: 10.32 },
        comparativo: { brother: 13.99, infinitepay: 11.06 }
    },
    {
        value: 13,
        label: 'Parcelado 11x',
        taxa: { HERO: 11.94, ON: 11.32, ECONOMICO: 2.78, PREMIUM: 11.01 },
        comparativo: { brother: 14.79, infinitepay: 11.74 }
    },
    {
        value: 14,
        label: 'Parcelado 12x',
        taxa: { HERO: 12.61, ON: 12.01, ECONOMICO: 2.78, PREMIUM: 11.70 },
        comparativo: { brother: 14.79, infinitepay: 12.40 }
    },
    {
        value: 15,
        label: 'Parcelado 13x',
        taxa: { HERO: 13.26, ON: 12.70, ECONOMICO: 2.80, PREMIUM: 12.38 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 16,
        label: 'Parcelado 14x',
        taxa: { HERO: 13.90, ON: 13.38, ECONOMICO: 2.80, PREMIUM: 13.05 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 17,
        label: 'Parcelado 15x',
        taxa: { HERO: 14.55, ON: 14.05, ECONOMICO: 2.80, PREMIUM: 13.72 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 18,
        label: 'Parcelado 16x',
        taxa: { HERO: 15.18, ON: 14.72, ECONOMICO: 2.80, PREMIUM: 14.37 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 19,
        label: 'Parcelado 17x',
        taxa: { HERO: 15.81, ON: 15.38, ECONOMICO: 2.80, PREMIUM: 15.03 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 20,
        label: 'Parcelado 18x',
        taxa: { HERO: 16.43, ON: 16.03, ECONOMICO: 2.80, PREMIUM: 15.67 },
        comparativo: { brother: null, infinitepay: null }
    },
];