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
        debito: "1,45%",
        creditoAVista: "3,21%",
        credito12x: "12,04%",
    },
    ON: {
        debito: "1,45%",
        creditoAVista: "2,97%",
        credito12x: "11,45%",
    },
    PREMIUM: {
        debito: "1,15%",
        creditoAVista: "3,05%",
        credito12x: "11,14%",
    },
    BASIC: {
        debito: "1,49%",
        creditoAVista: "3,74%",
        credito12x: "13,71%",
    },
    ECONOMICO: {
        debito: "1,15%",
        creditoAVista: "2,26%",
        credito12x: "2,84%",
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
        { modalidade: 'PIX', taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.56 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, premium: 1.15, basic: 1.49, economico: 1.15 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.21, on: 2.97, premium: 3.05, basic: 3.74, economico: 2.26 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.06, on: 4.59, premium: 4.36, basic: 5.17, economico: 2.51 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.72, on: 5.29, premium: 5.06, basic: 6.06, economico: 2.51 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.39, on: 6.01, premium: 5.76, basic: 6.93, economico: 2.51 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.05, on: 6.70, premium: 6.44, basic: 7.80, economico: 2.51 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.70, on: 7.39, premium: 7.13, basic: 8.65, economico: 2.51 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 8.90, on: 8.13, premium: 7.85, basic: 9.65, economico: 2.84 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.54, on: 8.80, premium: 8.52, basic: 10.48, economico: 2.84 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.17, on: 9.47, premium: 9.18, basic: 11.30, economico: 2.84 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 10.80, on: 10.14, premium: 9.84, basic: 12.11, economico: 2.84 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.42, on: 10.80, premium: 10.49, basic: 12.91, economico: 2.84 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.04, on: 11.45, premium: 11.14, basic: 13.71, economico: 2.84 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 12.65, on: 12.09, premium: 11.78, basic: 14.49, economico: 2.86 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.26, on: 12.73, premium: 12.40, basic: 15.27, economico: 2.86 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 13.86, on: 13.37, premium: 13.03, basic: 16.03, economico: 2.86 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.45, on: 14.00, premium: 13.65, basic: 16.79, economico: 2.86 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.04, on: 14.62, premium: 14.27, basic: 17.54, economico: 2.86 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 15.62, on: 15.23, premium: 14.88, basic: 18.28, economico: 2.86 } },
    ],
    elo: [
        { modalidade: 'PIX', taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.56 } },
        { modalidade: 'Débito', taxa: { hero: 1.51, on: 1.51, premium: 1.41, basic: 1.99, economico: 1.45 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.50, on: 3.30, premium: 3.31, basic: 4.74, economico: 2.31 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.21, on: 4.74, premium: 4.56, basic: 5.72, economico: 2.70 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.87, on: 5.44, premium: 5.26, basic: 6.61, economico: 2.70 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.54, on: 6.16, premium: 5.96, basic: 7.48, economico: 2.70 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.20, on: 6.85, premium: 6.64, basic: 8.35, economico: 2.70 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.85, on: 7.54, premium: 7.33, basic: 9.20, economico: 2.70 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.20, on: 8.33, premium: 8.05, basic: 10.50, economico: 3.00 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.84, on: 9.00, premium: 8.72, basic: 11.33, economico: 3.00 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.47, on: 9.67, premium: 9.38, basic: 12.15, economico: 3.00 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.10, on: 10.34, premium: 10.04, basic: 12.96, economico: 3.00 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.72, on: 11.00, premium: 10.69, basic: 13.76, economico: 3.00 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.34, on: 11.65, premium: 11.34, basic: 14.56, economico: 3.00 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 12.95, on: 12.29, premium: 11.98, basic: 15.34, economico: 3.06 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.56, on: 12.93, premium: 12.60, basic: 16.12, economico: 3.06 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.16, on: 13.57, premium: 13.23, basic: 16.88, economico: 3.06 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.75, on: 14.20, premium: 13.85, basic: 17.64, economico: 3.06 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.34, on: 14.82, premium: 14.47, basic: 18.39, economico: 3.06 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 15.92, on: 15.43, premium: 15.08, basic: 19.13, economico: 3.06 } },
    ],
    hiper: [
        { modalidade: 'PIX', taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.56 } },
        { modalidade: 'Débito', taxa: { hero: 1.66, on: 1.85, premium: 1.55, basic: 1.99, economico: 1.45 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.50, on: 3.30, premium: 3.31, basic: 4.74, economico: 2.56 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.21, on: 4.74, premium: 4.56, basic: 5.72, economico: 2.70 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.87, on: 5.44, premium: 5.26, basic: 6.61, economico: 2.70 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.54, on: 6.16, premium: 5.96, basic: 7.48, economico: 2.70 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.20, on: 6.85, premium: 6.64, basic: 8.35, economico: 2.70 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.85, on: 7.54, premium: 7.33, basic: 9.20, economico: 2.70 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.20, on: 8.33, premium: 8.05, basic: 10.50, economico: 3.00 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.84, on: 9.00, premium: 8.72, basic: 11.33, economico: 3.00 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.47, on: 9.67, premium: 9.38, basic: 12.15, economico: 3.00 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.10, on: 10.34, premium: 10.04, basic: 12.96, economico: 3.00 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.72, on: 11.00, premium: 10.69, basic: 13.76, economico: 3.00 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.34, on: 11.65, premium: 11.34, basic: 14.56, economico: 3.00 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 12.95, on: 12.29, premium: 11.98, basic: 15.34, economico: 3.11 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.56, on: 12.93, premium: 12.60, basic: 16.12, economico: 3.11 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.16, on: 13.57, premium: 13.23, basic: 16.88, economico: 3.11 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.75, on: 14.20, premium: 13.85, basic: 17.64, economico: 3.11 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.34, on: 14.82, premium: 14.47, basic: 18.39, economico: 3.11 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 15.92, on: 15.43, premium: 15.08, basic: 19.13, economico: 3.11 } },
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
        taxa: { HERO: 0.56, ON: 0.56, PREMIUM: 0.56, BASIC: 0.56, ECONOMICO: 0.56 },
        comparativo: { brother: 0.99, infinitepay: 0.00 }
    },
    {
        value: 2,
        label: 'Débito',
        taxa: { HERO: 1.45, ON: 1.45, PREMIUM: 1.15, BASIC: 1.49, ECONOMICO: 1.15 },
        comparativo: { brother: 1.45, infinitepay: 1.37 }
    },
    {
        value: 3,
        label: 'Crédito à vista',
        taxa: { HERO: 3.21, ON: 2.97, PREMIUM: 3.05, BASIC: 3.74, ECONOMICO: 2.26 },
        comparativo: { brother: 3.51, infinitepay: 3.15 }
    },
    {
        value: 4,
        label: 'Parcelado 2x',
        taxa: { HERO: 5.06, ON: 4.59, PREMIUM: 4.36, BASIC: 5.17, ECONOMICO: 2.51 },
        comparativo: { brother: 6.99, infinitepay: 5.39 }
    },
    {
        value: 5,
        label: 'Parcelado 3x',
        taxa: { HERO: 5.72, ON: 5.29, PREMIUM: 5.06, BASIC: 6.06, ECONOMICO: 2.51 },
        comparativo: { brother: 6.99, infinitepay: 6.12 }
    },
    {
        value: 6,
        label: 'Parcelado 4x',
        taxa: { HERO: 6.39, ON: 6.01, PREMIUM: 5.76, BASIC: 6.93, ECONOMICO: 2.51 },
        comparativo: { brother: 7.99, infinitepay: 6.85 }
    },
    {
        value: 7,
        label: 'Parcelado 5x',
        taxa: { HERO: 7.05, ON: 6.70, PREMIUM: 6.44, BASIC: 7.80, ECONOMICO: 2.51 },
        comparativo: { brother: 9.99, infinitepay: 7.57 }
    },
    {
        value: 8,
        label: 'Parcelado 6x',
        taxa: { HERO: 7.70, ON: 7.39, PREMIUM: 7.13, BASIC: 8.65, ECONOMICO: 2.51 },
        comparativo: { brother: 10.99, infinitepay: 8.28 }
    },
    {
        value: 9,
        label: 'Parcelado 7x',
        taxa: { HERO: 8.90, ON: 8.13, PREMIUM: 7.85, BASIC: 9.65, ECONOMICO: 2.84 },
        comparativo: { brother: 11.99, infinitepay: 8.99 }
    },
    {
        value: 10,
        label: 'Parcelado 8x',
        taxa: { HERO: 9.54, ON: 8.80, PREMIUM: 8.52, BASIC: 10.48, ECONOMICO: 2.84 },
        comparativo: { brother: 11.99, infinitepay: 9.69 }
    },
    {
        value: 11,
        label: 'Parcelado 9x',
        taxa: { HERO: 10.17, ON: 9.47, PREMIUM: 9.18, BASIC: 11.30, ECONOMICO: 2.84 },
        comparativo: { brother: 12.99, infinitepay: 10.38 }
    },
    {
        value: 12,
        label: 'Parcelado 10x',
        taxa: { HERO: 10.80, ON: 10.14, PREMIUM: 9.84, BASIC: 12.11, ECONOMICO: 2.84 },
        comparativo: { brother: 13.99, infinitepay: 11.06 }
    },
    {
        value: 13,
        label: 'Parcelado 11x',
        taxa: { HERO: 11.42, ON: 10.80, PREMIUM: 10.49, BASIC: 12.91, ECONOMICO: 2.84 },
        comparativo: { brother: 14.79, infinitepay: 11.74 }
    },
    {
        value: 14,
        label: 'Parcelado 12x',
        taxa: { HERO: 12.04, ON: 11.45, PREMIUM: 11.14, BASIC: 13.71, ECONOMICO: 2.84 },
        comparativo: { brother: 14.79, infinitepay: 12.40 }
    },
    {
        value: 15,
        label: 'Parcelado 13x',
        taxa: { HERO: 12.65, ON: 12.09, PREMIUM: 11.78, BASIC: 14.49, ECONOMICO: 2.86 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 16,
        label: 'Parcelado 14x',
        taxa: { HERO: 13.26, ON: 12.73, PREMIUM: 12.40, BASIC: 15.27, ECONOMICO: 2.86 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 17,
        label: 'Parcelado 15x',
        taxa: { HERO: 13.86, ON: 13.37, PREMIUM: 13.03, BASIC: 16.03, ECONOMICO: 2.86 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 18,
        label: 'Parcelado 16x',
        taxa: { HERO: 14.45, ON: 14.00, PREMIUM: 13.65, BASIC: 16.79, ECONOMICO: 2.86 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 19,
        label: 'Parcelado 17x',
        taxa: { HERO: 15.04, ON: 14.62, PREMIUM: 14.27, BASIC: 17.54, ECONOMICO: 2.86 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 20,
        label: 'Parcelado 18x',
        taxa: { HERO: 15.62, ON: 15.23, PREMIUM: 14.88, BASIC: 18.28, ECONOMICO: 2.86 },
        comparativo: { brother: null, infinitepay: null }
    },
];
