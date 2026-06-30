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
        credito12x: "12,27%",
    },
    ON: {
        debito: "1,45%",
        creditoAVista: "2,97%",
        credito12x: "11,67%",
    },
    PREMIUM: {
        debito: "1,15%",
        creditoAVista: "3,05%",
        credito12x: "11,37%",
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
        { modalidade: 'PIX', taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, premium: 1.15, basic: 1.49, economico: 1.09 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.21, on: 2.97, premium: 3.05, basic: 3.74, economico: 2.20 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.11, on: 4.65, premium: 4.42, basic: 5.17, economico: 2.45 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.80, on: 5.38, premium: 5.13, basic: 6.06, economico: 2.45 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.48, on: 6.10, premium: 5.85, basic: 6.93, economico: 2.45 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.16, on: 6.82, premium: 6.55, basic: 7.80, economico: 2.45 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.83, on: 7.52, premium: 7.26, basic: 8.65, economico: 2.45 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.04, on: 8.27, premium: 8.00, basic: 9.65, economico: 2.78 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.70, on: 8.97, premium: 8.69, basic: 10.48, economico: 2.78 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.35, on: 9.65, premium: 9.37, basic: 11.30, economico: 2.78 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 10.99, on: 10.34, premium: 10.03, basic: 12.11, economico: 2.78 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.63, on: 11.01, premium: 10.70, basic: 12.91, economico: 2.78 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.27, on: 11.67, premium: 11.37, basic: 13.71, economico: 2.78 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 12.89, on: 12.34, premium: 12.02, basic: 14.49, economico: 2.80 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.51, on: 12.99, premium: 12.66, basic: 15.27, economico: 2.80 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.13, on: 13.64, premium: 13.31, basic: 16.03, economico: 2.80 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.74, on: 14.28, premium: 13.94, basic: 16.79, economico: 2.80 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.35, on: 14.92, premium: 14.57, basic: 17.54, economico: 2.80 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 15.94, on: 15.55, premium: 15.19, basic: 18.28, economico: 2.80 } },
    ],
    elo: [
        { modalidade: 'PIX', taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.51, on: 1.51, premium: 1.41, basic: 1.99, economico: 1.09 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.55, on: 3.30, premium: 3.31, basic: 4.74, economico: 2.20 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.26, on: 4.80, premium: 4.62, basic: 5.72, economico: 2.45 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.95, on: 5.53, premium: 5.33, basic: 6.61, economico: 2.45 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.63, on: 6.25, premium: 6.05, basic: 7.48, economico: 2.45 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.31, on: 6.97, premium: 6.75, basic: 8.35, economico: 2.45 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.98, on: 7.67, premium: 7.46, basic: 9.20, economico: 2.45 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.19, on: 8.47, premium: 8.20, basic: 10.50, economico: 2.78 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.85, on: 9.17, premium: 8.89, basic: 11.33, economico: 2.78 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.50, on: 9.85, premium: 9.57, basic: 12.15, economico: 2.78 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.14, on: 10.54, premium: 10.23, basic: 12.96, economico: 2.78 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.78, on: 11.21, premium: 10.90, basic: 13.76, economico: 2.78 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.42, on: 11.87, premium: 11.57, basic: 14.56, economico: 2.78 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.04, on: 12.54, premium: 12.22, basic: 15.34, economico: 2.80 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.66, on: 13.19, premium: 12.86, basic: 16.12, economico: 2.80 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.28, on: 13.84, premium: 13.51, basic: 16.88, economico: 2.80 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.89, on: 14.48, premium: 14.14, basic: 17.64, economico: 2.80 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.50, on: 15.12, premium: 14.77, basic: 18.39, economico: 2.80 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.09, on: 15.75, premium: 15.39, basic: 19.13, economico: 2.80 } },
    ],
    hiper: [
        { modalidade: 'PIX', taxa: { hero: 0.56, on: 0.56, premium: 0.56, basic: 0.56, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.51, on: 1.51, premium: 1.41, basic: 1.99, economico: 1.09 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.55, on: 3.30, premium: 3.31, basic: 4.74, economico: 2.20 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.26, on: 4.80, premium: 4.62, basic: 5.72, economico: 2.45 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.95, on: 5.53, premium: 5.33, basic: 6.61, economico: 2.45 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.63, on: 6.25, premium: 6.05, basic: 7.48, economico: 2.45 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.31, on: 6.97, premium: 6.75, basic: 8.35, economico: 2.45 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.98, on: 7.67, premium: 7.46, basic: 9.20, economico: 2.45 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.19, on: 8.47, premium: 8.20, basic: 10.50, economico: 2.78 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.85, on: 9.17, premium: 8.89, basic: 11.33, economico: 2.78 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.50, on: 9.85, premium: 9.57, basic: 12.15, economico: 2.78 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.14, on: 10.54, premium: 10.23, basic: 12.96, economico: 2.78 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.78, on: 11.21, premium: 10.90, basic: 13.76, economico: 2.78 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.42, on: 11.87, premium: 11.57, basic: 14.56, economico: 2.78 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.04, on: 12.54, premium: 12.22, basic: 15.34, economico: 2.80 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.66, on: 13.19, premium: 12.86, basic: 16.12, economico: 2.80 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.28, on: 13.84, premium: 13.51, basic: 16.88, economico: 2.80 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.89, on: 14.48, premium: 14.14, basic: 17.64, economico: 2.80 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.50, on: 15.12, premium: 14.77, basic: 18.39, economico: 2.80 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.09, on: 15.75, premium: 15.39, basic: 19.13, economico: 2.80 } },
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
        taxa: { HERO: 0.56, ON: 0.56, PREMIUM: 0.56, BASIC: 0.56, ECONOMICO: 0.50 },
        comparativo: { brother: 0.99, infinitepay: 0.00 }
    },
    {
        value: 2,
        label: 'Débito',
        taxa: { HERO: 1.45, ON: 1.45, PREMIUM: 1.15, BASIC: 1.49, ECONOMICO: 1.09 },
        comparativo: { brother: 1.45, infinitepay: 1.37 }
    },
    {
        value: 3,
        label: 'Crédito à vista',
        taxa: { HERO: 3.21, ON: 2.97, PREMIUM: 3.05, BASIC: 3.74, ECONOMICO: 2.20 },
        comparativo: { brother: 3.51, infinitepay: 3.15 }
    },
    {
        value: 4,
        label: 'Parcelado 2x',
        taxa: { HERO: 5.11, ON: 4.65, PREMIUM: 4.42, BASIC: 5.17, ECONOMICO: 2.45 },
        comparativo: { brother: 6.99, infinitepay: 5.39 }
    },
    {
        value: 5,
        label: 'Parcelado 3x',
        taxa: { HERO: 5.80, ON: 5.38, PREMIUM: 5.13, BASIC: 6.06, ECONOMICO: 2.45 },
        comparativo: { brother: 6.99, infinitepay: 6.12 }
    },
    {
        value: 6,
        label: 'Parcelado 4x',
        taxa: { HERO: 6.48, ON: 6.10, PREMIUM: 5.85, BASIC: 6.93, ECONOMICO: 2.45 },
        comparativo: { brother: 7.99, infinitepay: 6.85 }
    },
    {
        value: 7,
        label: 'Parcelado 5x',
        taxa: { HERO: 7.16, ON: 6.82, PREMIUM: 6.55, BASIC: 7.80, ECONOMICO: 2.45 },
        comparativo: { brother: 9.99, infinitepay: 7.57 }
    },
    {
        value: 8,
        label: 'Parcelado 6x',
        taxa: { HERO: 7.83, ON: 7.52, PREMIUM: 7.26, BASIC: 8.65, ECONOMICO: 2.45 },
        comparativo: { brother: 10.99, infinitepay: 8.28 }
    },
    {
        value: 9,
        label: 'Parcelado 7x',
        taxa: { HERO: 9.04, ON: 8.27, PREMIUM: 8.00, BASIC: 9.65, ECONOMICO: 2.78 },
        comparativo: { brother: 11.99, infinitepay: 8.99 }
    },
    {
        value: 10,
        label: 'Parcelado 8x',
        taxa: { HERO: 9.70, ON: 8.97, PREMIUM: 8.69, BASIC: 10.48, ECONOMICO: 2.78 },
        comparativo: { brother: 11.99, infinitepay: 9.69 }
    },
    {
        value: 11,
        label: 'Parcelado 9x',
        taxa: { HERO: 10.35, ON: 9.65, PREMIUM: 9.37, BASIC: 11.30, ECONOMICO: 2.78 },
        comparativo: { brother: 12.99, infinitepay: 10.38 }
    },
    {
        value: 12,
        label: 'Parcelado 10x',
        taxa: { HERO: 10.99, ON: 10.34, PREMIUM: 10.03, BASIC: 12.11, ECONOMICO: 2.78 },
        comparativo: { brother: 13.99, infinitepay: 11.06 }
    },
    {
        value: 13,
        label: 'Parcelado 11x',
        taxa: { HERO: 11.63, ON: 11.01, PREMIUM: 10.70, BASIC: 12.91, ECONOMICO: 2.78 },
        comparativo: { brother: 14.79, infinitepay: 11.74 }
    },
    {
        value: 14,
        label: 'Parcelado 12x',
        taxa: { HERO: 12.27, ON: 11.67, PREMIUM: 11.37, BASIC: 13.71, ECONOMICO: 2.78 },
        comparativo: { brother: 14.79, infinitepay: 12.40 }
    },
    {
        value: 15,
        label: 'Parcelado 13x',
        taxa: { HERO: 12.89, ON: 12.34, PREMIUM: 12.02, BASIC: 14.49, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 16,
        label: 'Parcelado 14x',
        taxa: { HERO: 13.51, ON: 12.99, PREMIUM: 12.66, BASIC: 15.27, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 17,
        label: 'Parcelado 15x',
        taxa: { HERO: 14.13, ON: 13.64, PREMIUM: 13.31, BASIC: 16.03, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 18,
        label: 'Parcelado 16x',
        taxa: { HERO: 14.74, ON: 14.28, PREMIUM: 13.94, BASIC: 16.79, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 19,
        label: 'Parcelado 17x',
        taxa: { HERO: 15.35, ON: 14.92, PREMIUM: 14.57, BASIC: 17.54, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 20,
        label: 'Parcelado 18x',
        taxa: { HERO: 15.94, ON: 15.55, PREMIUM: 15.19, BASIC: 18.28, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
];
