export type PlanType = "HERO" | "ON" | "ECONOMICO" | "PREMIUM";

export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  features: string[];
  originalPrice: string;
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
      image: "/images/maquininhas/mini.png?height=150&width=100",
      features: [
        "Comprovante por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Chip 2G Grátis + WiFi",
      ],
      originalPrice: "R$ 499,00",
      prices: {
        HERO: { price: "235", cents: ",80", installments: "10x de R$ 23,58", discount: "53% OFF" },
        ON: { price: "235", cents: ",80", installments: "10x de R$ 23,58", discount: "53% OFF" }, // Updated from 299,80
        ECONOMICO: { price: "235", cents: ",80", installments: "10x de R$ 23,58", discount: "53% OFF" },
        PREMIUM: { price: "299", cents: ",80", installments: "10x de R$ 29,98", discount: "39% OFF" }, // New plan
      },
    },
    {
      id: "PRO",
      name: "HERO PRO",
      description: "A máquina de cartão mais completa, garantindo o máximo de economia e benefícios!",
      image: "/images/maquininhas/pro.png?height=150&width=100",
      features: [
        "Comprovante impresso ou por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Tela Touchscreen",
        "Chip 4G Grátis + WiFi",
      ],
      originalPrice: "R$ 699,00",
      prices: {
        HERO: { price: "335", cents: ",80", installments: "10x de R$ 33,58", discount: "51% OFF" },
        ON: { price: "335", cents: ",80", installments: "10x de R$ 33,58", discount: "51% OFF" }, // Updated from 399,80
        ECONOMICO: { price: "335", cents: ",80", installments: "10x de R$ 33,58", discount: "51% OFF" },
        PREMIUM: { price: "399", cents: ",80", installments: "10x de R$ 39,98", discount: "42% OFF" }, // New plan
      },
    },
    {
      id: "SMART",
      name: "HERO SMART",
      description: "A maquininha mais moderna, completa e cheia de estilo do mercado!",
      image: "/images/maquininhas/smart.png?height=150&width=100",
      features: [
        "Comprovante impresso ou por SMS",
        "Receba por aproximação (NFC)",
        "Aceite Pix com QR CODE",
        "Sistema Android + Tela Touchscreen",
        "Gestão de produtos/estoque (Confira disponibilidade)",
        "Chip 4G Grátis + WiFi",
      ],
      originalPrice: "R$ 799,00",
      prices: {
        HERO: { price: "492", cents: ",80", installments: "10x de R$ 49,28", discount: "38% OFF" },
        ON: { price: "492", cents: ",80", installments: "10x de R$ 49,28", discount: "38% OFF" },
        ECONOMICO: { price: "492", cents: ",80", installments: "10x de R$ 49,28", discount: "38% OFF" },
        PREMIUM: { price: "492", cents: ",80", installments: "10x de R$ 49,28", discount: "38% OFF" }, // New plan
      },
    },
];