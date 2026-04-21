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
        credito12x: "12,21%",
    },
    ON: {
        debito: "1,39%",
        creditoAVista: "2,91%",
        credito12x: "11,61%",
    },
    PREMIUM: {
        debito: "1,09%",
        creditoAVista: "2,99%",
        credito12x: "11,25%",
    },
    BASIC: {
        debito: "1,49%",
        creditoAVista: "3,74%",
        credito12x: "13,82%",
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
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.05, on: 4.59, premium: 4.34, basic: 5.20, economico: 2.45 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.74, on: 5.32, premium: 5.05, basic: 6.09, economico: 2.45 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.42, on: 6.04, premium: 5.76, basic: 6.98, economico: 2.45 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.10, on: 6.76, premium: 6.47, basic: 7.85, economico: 2.45 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.77, on: 7.46, premium: 7.17, basic: 8.71, economico: 2.45 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 8.98, on: 8.21, premium: 7.90, basic: 9.72, economico: 2.78 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.64, on: 8.91, premium: 8.58, basic: 10.55, economico: 2.78 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.29, on: 9.59, premium: 9.26, basic: 11.38, economico: 2.78 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 10.93, on: 10.28, premium: 9.93, basic: 12.21, economico: 2.78 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.57, on: 10.95, premium: 10.59, basic: 13.02, economico: 2.78 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.21, on: 11.61, premium: 11.25, basic: 13.82, economico: 2.78 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 12.83, on: 12.28, premium: 11.90, basic: 14.61, economico: 2.80 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.45, on: 12.93, premium: 12.54, basic: 15.39, economico: 2.80 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.07, on: 13.58, premium: 13.18, basic: 16.16, economico: 2.80 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.68, on: 14.22, premium: 13.81, basic: 16.92, economico: 2.80 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.29, on: 14.86, premium: 14.43, basic: 17.68, economico: 2.80 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 15.88, on: 15.49, premium: 15.05, basic: 18.42, economico: 2.80 } },
    ],
    elo: [
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, premium: 0.50, basic: 0.50, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, premium: 1.35, basic: 1.99, economico: 1.39 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.49, on: 3.24, premium: 3.25, basic: 4.74, economico: 2.25 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.20, on: 4.74, premium: 4.54, basic: 5.75, economico: 2.64 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.89, on: 5.47, premium: 5.25, basic: 6.64, economico: 2.64 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.57, on: 6.19, premium: 5.96, basic: 7.53, economico: 2.64 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.25, on: 6.91, premium: 6.67, basic: 8.40, economico: 2.64 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.92, on: 7.61, premium: 7.37, basic: 9.26, economico: 2.64 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.28, on: 8.41, premium: 8.10, basic: 10.57, economico: 2.94 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.94, on: 9.11, premium: 8.78, basic: 11.40, economico: 2.94 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.59, on: 9.79, premium: 9.46, basic: 12.23, economico: 2.94 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.23, on: 10.48, premium: 10.13, basic: 13.06, economico: 2.94 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.87, on: 11.15, premium: 10.79, basic: 13.87, economico: 2.94 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.51, on: 11.81, premium: 11.45, basic: 14.67, economico: 2.94 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.13, on: 12.48, premium: 12.10, basic: 15.46, economico: 3.00 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.75, on: 13.13, premium: 12.74, basic: 16.24, economico: 3.00 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.37, on: 13.78, premium: 13.38, basic: 17.01, economico: 3.00 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.98, on: 14.42, premium: 14.01, basic: 17.77, economico: 3.00 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.59, on: 15.06, premium: 14.63, basic: 18.53, economico: 3.00 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.18, on: 15.69, premium: 15.25, basic: 19.27, economico: 3.00 } },
    ],
    hiper: [
        { modalidade: 'PIX', taxa: { hero: 0.50, on: 0.50, premium: 0.50, basic: 0.50, economico: 0.50 } },
        { modalidade: 'Débito', taxa: { hero: 1.45, on: 1.45, premium: 1.35, basic: 1.99, economico: 1.39 } },
        { modalidade: 'Crédito à vista', taxa: { hero: 3.49, on: 3.24, premium: 3.25, basic: 4.74, economico: 2.25 } },
        { modalidade: 'Parcelado 2x', taxa: { hero: 5.20, on: 4.74, premium: 4.54, basic: 5.75, economico: 2.64 } },
        { modalidade: 'Parcelado 3x', taxa: { hero: 5.89, on: 5.47, premium: 5.25, basic: 6.64, economico: 2.64 } },
        { modalidade: 'Parcelado 4x', taxa: { hero: 6.57, on: 6.19, premium: 5.96, basic: 7.53, economico: 2.64 } },
        { modalidade: 'Parcelado 5x', taxa: { hero: 7.25, on: 6.91, premium: 6.67, basic: 8.40, economico: 2.64 } },
        { modalidade: 'Parcelado 6x', taxa: { hero: 7.92, on: 7.61, premium: 7.37, basic: 9.26, economico: 2.64 } },
        { modalidade: 'Parcelado 7x', taxa: { hero: 9.28, on: 8.41, premium: 8.10, basic: 10.57, economico: 2.94 } },
        { modalidade: 'Parcelado 8x', taxa: { hero: 9.94, on: 9.11, premium: 8.78, basic: 11.40, economico: 2.94 } },
        { modalidade: 'Parcelado 9x', taxa: { hero: 10.59, on: 9.79, premium: 9.46, basic: 12.23, economico: 2.94 } },
        { modalidade: 'Parcelado 10x', taxa: { hero: 11.23, on: 10.48, premium: 10.13, basic: 13.06, economico: 2.94 } },
        { modalidade: 'Parcelado 11x', taxa: { hero: 11.87, on: 11.15, premium: 10.79, basic: 13.87, economico: 2.94 } },
        { modalidade: 'Parcelado 12x', taxa: { hero: 12.51, on: 11.81, premium: 11.45, basic: 14.67, economico: 2.94 } },
        { modalidade: 'Parcelado 13x', taxa: { hero: 13.13, on: 12.48, premium: 12.10, basic: 15.46, economico: 3.00 } },
        { modalidade: 'Parcelado 14x', taxa: { hero: 13.75, on: 13.13, premium: 12.74, basic: 16.24, economico: 3.00 } },
        { modalidade: 'Parcelado 15x', taxa: { hero: 14.37, on: 13.78, premium: 13.38, basic: 17.01, economico: 3.00 } },
        { modalidade: 'Parcelado 16x', taxa: { hero: 14.98, on: 14.42, premium: 14.01, basic: 17.77, economico: 3.00 } },
        { modalidade: 'Parcelado 17x', taxa: { hero: 15.59, on: 15.06, premium: 14.63, basic: 18.53, economico: 3.00 } },
        { modalidade: 'Parcelado 18x', taxa: { hero: 16.18, on: 15.69, premium: 15.25, basic: 19.27, economico: 3.00 } },
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
        taxa: { HERO: 5.05, ON: 4.59, PREMIUM: 4.34, BASIC: 5.20, ECONOMICO: 2.45 },
        comparativo: { brother: 6.99, infinitepay: 5.39 }
    },
    {
        value: 5,
        label: 'Parcelado 3x',
        taxa: { HERO: 5.74, ON: 5.32, PREMIUM: 5.05, BASIC: 6.09, ECONOMICO: 2.45 },
        comparativo: { brother: 6.99, infinitepay: 6.12 }
    },
    {
        value: 6,
        label: 'Parcelado 4x',
        taxa: { HERO: 6.42, ON: 6.04, PREMIUM: 5.76, BASIC: 6.98, ECONOMICO: 2.45 },
        comparativo: { brother: 7.99, infinitepay: 6.85 }
    },
    {
        value: 7,
        label: 'Parcelado 5x',
        taxa: { HERO: 7.10, ON: 6.76, PREMIUM: 6.47, BASIC: 7.85, ECONOMICO: 2.45 },
        comparativo: { brother: 9.99, infinitepay: 7.57 }
    },
    {
        value: 8,
        label: 'Parcelado 6x',
        taxa: { HERO: 7.77, ON: 7.46, PREMIUM: 7.17, BASIC: 8.71, ECONOMICO: 2.45 },
        comparativo: { brother: 10.99, infinitepay: 8.28 }
    },
    {
        value: 9,
        label: 'Parcelado 7x',
        taxa: { HERO: 8.98, ON: 8.21, PREMIUM: 7.90, BASIC: 9.72, ECONOMICO: 2.78 },
        comparativo: { brother: 11.99, infinitepay: 8.99 }
    },
    {
        value: 10,
        label: 'Parcelado 8x',
        taxa: { HERO: 9.64, ON: 8.91, PREMIUM: 8.58, BASIC: 10.55, ECONOMICO: 2.78 },
        comparativo: { brother: 11.99, infinitepay: 9.69 }
    },
    {
        value: 11,
        label: 'Parcelado 9x',
        taxa: { HERO: 10.29, ON: 9.59, PREMIUM: 9.26, BASIC: 11.38, ECONOMICO: 2.78 },
        comparativo: { brother: 12.99, infinitepay: 10.38 }
    },
    {
        value: 12,
        label: 'Parcelado 10x',
        taxa: { HERO: 10.93, ON: 10.28, PREMIUM: 9.93, BASIC: 12.21, ECONOMICO: 2.78 },
        comparativo: { brother: 13.99, infinitepay: 11.06 }
    },
    {
        value: 13,
        label: 'Parcelado 11x',
        taxa: { HERO: 11.57, ON: 10.95, PREMIUM: 10.59, BASIC: 13.02, ECONOMICO: 2.78 },
        comparativo: { brother: 14.79, infinitepay: 11.74 }
    },
    {
        value: 14,
        label: 'Parcelado 12x',
        taxa: { HERO: 12.21, ON: 11.61, PREMIUM: 11.25, BASIC: 13.82, ECONOMICO: 2.78 },
        comparativo: { brother: 14.79, infinitepay: 12.40 }
    },
    {
        value: 15,
        label: 'Parcelado 13x',
        taxa: { HERO: 12.83, ON: 12.28, PREMIUM: 11.90, BASIC: 14.61, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 16,
        label: 'Parcelado 14x',
        taxa: { HERO: 13.45, ON: 12.93, PREMIUM: 12.54, BASIC: 15.39, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 17,
        label: 'Parcelado 15x',
        taxa: { HERO: 14.07, ON: 13.58, PREMIUM: 13.18, BASIC: 16.16, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 18,
        label: 'Parcelado 16x',
        taxa: { HERO: 14.68, ON: 14.22, PREMIUM: 13.81, BASIC: 16.92, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 19,
        label: 'Parcelado 17x',
        taxa: { HERO: 15.29, ON: 14.86, PREMIUM: 14.43, BASIC: 17.68, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
    {
        value: 20,
        label: 'Parcelado 18x',
        taxa: { HERO: 15.88, ON: 15.49, PREMIUM: 15.05, BASIC: 18.42, ECONOMICO: 2.80 },
        comparativo: { brother: null, infinitepay: null }
    },
];
