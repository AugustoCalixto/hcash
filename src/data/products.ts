export type PlanType = "HERO" | "ON" | "PREMIUM" | "BASIC" | "ECONOMICO";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  originalPrices: Record<PlanType, string>;
  prices: {
    [key in PlanType]: {
      price: string;
      cents: string;
      installments: string;
      discount: string;
    };
  };
}

export const products: Product[] = [
    {
      id: "PLUS",
      name: "HERO PLUS",
      description: "Prática e ágil, uma maquininha que impõe respeito!",
      image: "/images/maquininhas/mini.png",
      features: [
        "Comprovante por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Chip 2G Grátis + WiFi",
      ],
      originalPrices: {
        HERO: "R$ 499,00",
        ON: "R$ 499,00",
        PREMIUM: "R$ 499,00",
        BASIC: "R$ 399,00",
        ECONOMICO: "R$ 499,00",
      },
      prices: {
        HERO: { price: "233", cents: ",88", installments: "10x de R$ 23,38", discount: "53% OFF" },
        ON: { price: "233", cents: ",88", installments: "10x de R$ 23,38", discount: "53% OFF" },
        PREMIUM: { price: "299", cents: ",88", installments: "10x de R$ 29,98", discount: "53% OFF" },
        BASIC: { price: "99", cents: ",90", installments: "10x de R$ 9,99", discount: "75% OFF" },
        ECONOMICO: { price: "235", cents: ",80", installments: "10x de R$ 23,58", discount: "53% OFF" },
      },
    },
    {
      id: "PRO",
      name: "HERO PRO",
      description: "A máquina de cartão mais completa, garantindo o máximo de economia e benefícios!",
      image: "/images/maquininhas/pro.png",
      features: [
        "Comprovante impresso ou por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Tela Touchscreen",
        "Chip 4G Grátis + WiFi",
      ],
      originalPrices: {
        HERO: "R$ 699,00",
        ON: "R$ 699,00",
        PREMIUM: "R$ 699,00",
        BASIC: "R$ 499,00",
        ECONOMICO: "R$ 699,00",
      },
      prices: {
        HERO: { price: "288", cents: ",88", installments: "10x de R$ 28,88", discount: "59% OFF" },
        ON: { price: "288", cents: ",88", installments: "10x de R$ 28,88", discount: "59% OFF" },
        PREMIUM: { price: "399", cents: ",88", installments: "10x de R$ 39,98", discount: "59% OFF" },
        BASIC: { price: "199", cents: ",80", installments: "10x de R$ 19,98", discount: "60% OFF" },
        ECONOMICO: { price: "335", cents: ",80", installments: "10x de R$ 33,58", discount: "51% OFF" },
      },
    },
    {
      id: "SMART",
      name: "HERO SMART",
      description: "A maquininha mais moderna, completa e cheia de estilo do mercado!",
      image: "/images/maquininhas/smart.png",
      features: [
        "Comprovante impresso ou por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Sistema Android + Tela Touchscreen",
        "Gestão de produtos/estoque (Confira disponibilidade)",
        "Chip 4G Grátis + WiFi",
      ],
      originalPrices: {
        HERO: "R$ 799,00",
        ON: "R$ 799,00",
        PREMIUM: "R$ 799,00",
        BASIC: "R$ 599,00",
        ECONOMICO: "R$ 799,00",
      },
      prices: {
        HERO: { price: "385", cents: ",08", installments: "10x de R$ 38,50", discount: "52% OFF" },
        ON: { price: "385", cents: ",08", installments: "10x de R$ 38,50", discount: "52% OFF" },
        PREMIUM: { price: "492", cents: ",08", installments: "10x de R$ 49,20", discount: "52% OFF" },
        BASIC: { price: "297", cents: ",40", installments: "10x de R$ 29,74", discount: "50% OFF" },
        ECONOMICO: { price: "492", cents: ",80", installments: "10x de R$ 49,28", discount: "38% OFF" },
      },
    },
];
