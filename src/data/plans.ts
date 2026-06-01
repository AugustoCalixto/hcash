export type PlanId = "HERO" | "ON" | "PREMIUM" | "BASIC" | "ECONOMICO";
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
        credito12x: "12,09%",
    },
    ON: {
        debito: "1,39%",
        creditoAVista: "2,91%",
        credito12x: "11,51%",
    },
    PREMIUM: {
        debito: "1,09%",
        creditoAVista: "2,99%",
        credito12x: "11,19%",
    },
    BASIC: {
        debito: "1,49%",
        creditoAVista: "3,74%",
        credito12x: "13,71%",
    },
    ECONOMICO: {
        debito: "1,09%",
        creditoAVista: "2,20%",
        credito12x: "2,78%",
    },
};

// From pricing-plans.tsx
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

export const paymentRates: Record<CardId, PaymentRate[]> = {
    visa: [
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, premium: 0.50, basic: 0.50, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.39, on: 1.39, premium: 1.09, basic: 1.49, economico: 1.09 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.15, on: 2.91, premium: 2.99, basic: 3.74, economico: 2.20 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.03, on: 4.56, premium: 4.33, basic: 5.17, economico: 2.45 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.70, on: 5.27, premium: 5.03, basic: 6.06, economico: 2.45 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.38, on: 5.99, premium: 5.75, basic: 6.93, economico: 2.45 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.05, on: 6.69, premium: 6.44, basic: 7.80, economico: 2.45 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.70, on: 7.40, premium: 7.13, basic: 8.65, economico: 2.45 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 8.91, on: 8.14, premium: 7.87, basic: 9.65, economico: 2.78 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.56, on: 8.83, premium: 8.54, basic: 10.48, economico: 2.78 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.20, on: 9.51, premium: 9.21, basic: 11.30, economico: 2.78 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 10.84, on: 10.17, premium: 9.88, basic: 12.11, economico: 2.78 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.47, on: 10.84, premium: 10.54, basic: 12.91, economico: 2.78 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.09, on: 11.51, premium: 11.19, basic: 13.71, economico: 2.78 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 12.71, on: 12.16, premium: 11.83, basic: 14.49, economico: 2.80 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.33, on: 12.80, premium: 12.47, basic: 15.27, economico: 2.80 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 13.93, on: 13.45, premium: 13.11, basic: 16.03, economico: 2.80 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.53, on: 14.08, premium: 13.74, basic: 16.79, economico: 2.80 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.13, on: 14.71, premium: 14.36, basic: 17.54, economico: 2.80 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 15.73, on: 15.33, premium: 14.97, basic: 18.28, economico: 2.80 } },
    ],
    elo: [
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, premium: 0.50, basic: 0.50, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, premium: 1.35, basic: 1.99, economico: 1.09 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.49, on: 3.24, premium: 3.25, basic: 4.74, economico: 2.20 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.18, on: 4.71, premium: 4.53, basic: 5.72, economico: 2.45 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.85, on: 5.42, premium: 5.23, basic: 6.61, economico: 2.45 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.53, on: 6.14, premium: 5.95, basic: 7.48, economico: 2.45 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.20, on: 6.84, premium: 6.64, basic: 8.35, economico: 2.45 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.85, on: 7.55, premium: 7.33, basic: 9.20, economico: 2.45 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.21, on: 8.34, premium: 8.07, basic: 10.50, economico: 2.78 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.86, on: 9.03, premium: 8.74, basic: 11.33, economico: 2.78 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.50, on: 9.71, premium: 9.41, basic: 12.15, economico: 2.78 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.14, on: 10.37, premium: 10.08, basic: 12.96, economico: 2.78 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.77, on: 11.04, premium: 10.74, basic: 13.76, economico: 2.78 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.39, on: 11.71, premium: 11.39, basic: 14.56, economico: 2.78 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.01, on: 12.36, premium: 12.03, basic: 15.34, economico: 2.80 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.63, on: 13.00, premium: 12.67, basic: 16.12, economico: 2.80 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.23, on: 13.65, premium: 13.31, basic: 16.88, economico: 2.80 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.83, on: 14.28, premium: 13.94, basic: 17.64, economico: 2.80 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.43, on: 14.91, premium: 14.56, basic: 18.39, economico: 2.80 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.03, on: 15.53, premium: 15.17, basic: 19.13, economico: 2.80 } },
    ],
    hiper: [
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, premium: 0.50, basic: 0.50, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, premium: 1.35, basic: 1.99, economico: 1.09 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.49, on: 3.24, premium: 3.25, basic: 4.74, economico: 2.20 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.18, on: 4.71, premium: 4.53, basic: 5.72, economico: 2.45 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.85, on: 5.42, premium: 5.23, basic: 6.61, economico: 2.45 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.53, on: 6.14, premium: 5.95, basic: 7.48, economico: 2.45 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.20, on: 6.84, premium: 6.64, basic: 8.35, economico: 2.45 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.85, on: 7.55, premium: 7.33, basic: 9.20, economico: 2.45 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.21, on: 8.34, premium: 8.07, basic: 10.50, economico: 2.78 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.86, on: 9.03, premium: 8.74, basic: 11.33, economico: 2.78 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.50, on: 9.71, premium: 9.41, basic: 12.15, economico: 2.78 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.14, on: 10.37, premium: 10.08, basic: 12.96, economico: 2.78 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.77, on: 11.04, premium: 10.74, basic: 13.76, economico: 2.78 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.39, on: 11.71, premium: 11.39, basic: 14.56, economico: 2.78 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.01, on: 12.36, premium: 12.03, basic: 15.34, economico: 2.80 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.63, on: 13.00, premium: 12.67, basic: 16.12, economico: 2.80 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.23, on: 13.65, premium: 13.31, basic: 16.88, economico: 2.80 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.83, on: 14.28, premium: 13.94, basic: 17.64, economico: 2.80 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.43, on: 14.91, premium: 14.56, basic: 18.39, economico: 2.80 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.03, on: 15.53, premium: 15.17, basic: 19.13, economico: 2.80 } },
    ],
};

// From calculator.tsx
export interface InstallmentOption {
    value: number
    label: string
    taxa: {
        HERO: number
        ON: number
        PREMIUM: number
        BASIC: number
        ECONOMICO: number
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
        taxa: { HERO: 0.50, ON: 0.50, PREMIUM: 0.50, BASIC: 0.50, ECONOMICO: 0.50 },
        comparativo: { brother: 0.99, infinitepay: 0.00 }
    },
    {
        value: 2,
        label: 'Débito',
        taxa: { HERO: 1.39, ON: 1.39, PREMIUM: 1.09, BASIC: 1.49, ECONOMICO: 1.09 },
        comparativo: { brother: 1.45, infinitepay: 1.37 }
    },
    {
        value: 3,
        label: 'Crédito à vista',
        taxa: { HERO: 3.15, ON: 2.91, PREMIUM: 2.99, BASIC: 3.74, ECONOMICO: 2.20 },
        comparativo: { brother: 3.51, infinitepay: 3.15 }
    },
    {
        value: 4,
        label: 'Parcelado 2x',
        taxa: { HERO: 5.03, ON: 4.56, PREMIUM: 4.33, BASIC: 5.17, ECONOMICO: 2.45 },
        comparativo: { brother: 6.99, infinitepay: 5.39 }
    },
    {
        value: 5,
        label: 'Parcelado 3x',
        taxa: { HERO: 5.70, ON: 5.27, PREMIUM: 5.03, BASIC: 6.06, ECONOMICO: 2.45 },
        comparativo: { brother: 6.99, infinitepay: 6.12 }
    },
    {
        value: 6,
        label: 'Parcelado 4x',
        taxa: { HERO: 6.38, ON: 5.99, PREMIUM: 5.75, BASIC: 6.93, ECONOMICO: 2.45 },
        comparativo: { brother: 7.99, infinitepay: 6.85 }
    },
    {
        value: 7,
        label: 'Parcelado 5x',
        taxa: { HERO: 7.05, ON: 6.69, PREMIUM: 6.44, BASIC: 7.80, ECONOMICO: 2.45 },
        comparativo: { brother: 9.99, infinitepay: 7.57 }
    },
    {
        value: 8,
        label: 'Parcelado 6x',
        taxa: { HERO: 7.70, ON: 7.40, PREMIUM: 7.13, BASIC: 8.65, ECONOMICO: 2.45 },
        comparativo: { brother: 10.99, infinitepay: 8.28 }
    },
    {
        value: 9,
        label: 'Parcelado 7x',
        taxa: { HERO: 8.91, ON: 8.14, PREMIUM: 7.87, BASIC: 9.65, ECONOMICO: 2.78 },
        comparativo: { brother: 11.99, infinitepay: 8.99 }
    },
    {
        value: 10,
        label: 'Parcelado 8x',
        taxa: { HERO: 9.56, ON: 8.83, PREMIUM: 8.54, BASIC: 10.48, ECONOMICO: 2.78 },
        comparativo: { brother: 11.99, infinitepay: 9.69 }
    },
    {
        value: 11,
        label: 'Parcelado 9x',
        taxa: { HERO: 10.20, ON: 9.51, PREMIUM: 9.21, BASIC: 11.30, ECONOMICO: 2.78 },
        comparativo: { brother: 12.99, infinitepay: 10.38 }
    },
    {
        value: 12,
        label: 'Parcelado 10x',
        taxa: { HERO: 10.84, ON: 10.17, PREMIUM: 9.88, BASIC: 12.11, ECONOMICO: 2.78 },
        comparativo: { brother: 13.99, infinitepay: 11.06 }
    },
    {
        value: 13,
        label: 'Parcelado 11x',
        taxa: { HERO: 11.47, ON: 10.84, PREMIUM: 10.54, BASIC: 12.91, ECONOMICO: 2.78 },
        comparativo: { brother: 14.79, infinitepay: 11.74 }
    },
    {
        value: 14,
        label: 'Parcelado 12x',
        taxa: { HERO: 12.09, ON: 11.51, PREMIUM: 11.19, BASIC: 13.71, ECONOMICO: 2.78 },
        comparativo: { brother: 14.79, infinitepay: 12.40 }
    },
    {
        value: 15,
        label: 'Parcelado 13x',
        taxa: { HERO: 12.71, ON: 12.16, PREMIUM: 11.83, BASIC: 14.49, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 16,
        label: 'Parcelado 14x',
        taxa: { HERO: 13.33, ON: 12.80, PREMIUM: 12.47, BASIC: 15.27, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 17,
        label: 'Parcelado 15x',
        taxa: { HERO: 13.93, ON: 13.45, PREMIUM: 13.11, BASIC: 16.03, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 18,
        label: 'Parcelado 16x',
        taxa: { HERO: 14.53, ON: 14.08, PREMIUM: 13.74, BASIC: 16.79, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 19,
        label: 'Parcelado 17x',
        taxa: { HERO: 15.13, ON: 14.71, PREMIUM: 14.36, BASIC: 17.54, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 20,
        label: 'Parcelado 18x',
        taxa: { HERO: 15.73, ON: 15.33, PREMIUM: 14.97, BASIC: 18.28, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
];

