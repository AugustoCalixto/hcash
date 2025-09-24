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
        HERO: { price: "233", cents: ",88", installments: "10x de R$ 23,38", discount: "53% OFF" },
        ECONOMICO: { price: "233", cents: ",88", installments: "10x de R$ 23,38", discount: "53% OFF" },
        ON: { price: "299", cents: ",88", installments: "10x de R$ 29,98", discount: "40% OFF" },
        PREMIUM: { price: "399", cents: ",88", installments: "10x de R$ 39,88", discount: "20% OFF" },
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
        HERO: { price: "288", cents: ",88", installments: "10x de R$ 28,88", discount: "59% OFF" },
        ECONOMICO: { price: "288", cents: ",88", installments: "10x de R$ 28,88", discount: "59% OFF" },
        ON: { price: "399", cents: ",88", installments: "10x de R$ 39,98", discount: "43% OFF" },
        PREMIUM: { price: "499", cents: ",88", installments: "10x de R$ 49,98", discount: "29% OFF" },
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
        HERO: { price: "385", cents: ",08", installments: "10x de R$ 38,50", discount: "52% OFF" },
        ECONOMICO: { price: "385", cents: ",08", installments: "10x de R$ 38,50", discount: "52% OFF" },
        ON: { price: "492", cents: ",08", installments: "10x de R$ 49,20", discount: "38% OFF" },
        PREMIUM: { price: "592", cents: ",08", installments: "10x de R$ 59,20", discount: "26% OFF" },
      },
    },
];