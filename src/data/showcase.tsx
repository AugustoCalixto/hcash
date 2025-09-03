import type React from "react"
import { Printer, Wifi, Zap, Battery, ShoppingCart, CreditCard, Smartphone } from "lucide-react"

export interface ProductFeature {
  icon: React.ReactNode
  title: string
  description: string
}

export interface ProductInfo {
  id: string
  name: string
  title: string
  description: string
  image: string
  features: ProductFeature[]
  buttonText: string
  buttonLink: string
  color?: string
}

export const productsShowcase: ProductInfo[] = [
    {
      id: "plus",
      name: "PLUS Hero",
      title: "Maquininha prática e portátil",
      description:
        "Ideal para quem está começando! Compacta e fácil de usar, esta maquininha oferece todas as funcionalidades essenciais para o seu negócio com o melhor custo-benefício do mercado.",
      image: "/placeholder.svg?height=400&width=300",
      features: [
        {
          icon: <Printer className="h-8 w-8 text-yellow-400" />,
          title: "Comprovante por SMS",
          description: "Envie comprovantes digitais",
        },
        {
          icon: <Wifi className="h-8 w-8 text-yellow-400" />,
          title: "Wifi + Chip 2G Grátis",
          description: "Conectividade garantida",
        },
        {
          icon: <Zap className="h-8 w-8 text-yellow-400" />,
          title: "Receba por aproximação (NFC)",
          description: "Pagamentos sem contato",
        },
        {
          icon: <Battery className="h-8 w-8 text-yellow-400" />,
          title: "Bateria de longa duração",
          description: "Trabalhe o dia todo",
        },
      ],
      buttonText: "Peça agora sua PLUS Hero!",
      buttonLink: "#comprar-plus",
      color: "yellow-400",
    },
    {
      id: "pro",
      name: "PRO Hero",
      title: "Máquina de pagamento completa",
      description:
        "Impulsione suas vendas com agilidade e economia! Este modelo de maquininha oferece o melhor custo-benefício do mercado, bateria de longa duração e taxas exclusivas da Herocash para potencializar seus lucros.",
      image: "",
      features: [
        {
          icon: <Printer className="h-8 w-8 text-yellow-400" />,
          title: "Comprovante impresso e SMS",
          description: "Flexibilidade para seus clientes",
        },
        {
          icon: <Wifi className="h-8 w-8 text-yellow-400" />,
          title: "Wifi + Chip 4G Grátis",
          description: "Conexão rápida e estável",
        },
        {
          icon: <Zap className="h-8 w-8 text-yellow-400" />,
          title: "Receba por aproximação (NFC)",
          description: "Pagamentos sem contato",
        },
        {
          icon: <Battery className="h-8 w-8 text-yellow-400" />,
          title: "Bateria de longa duração",
          description: "Trabalhe o dia todo sem preocupações",
        },
      ],
      buttonText: "Peça agora sua PRO Hero!",
      buttonLink: "#comprar-pro",
      color: "yellow-400",
    },
    {
      id: "smart",
      name: "SMART Hero",
      title: "A maquininha mais avançada do mercado",
      description:
        "Tecnologia de ponta para seu negócio! Com sistema Android integrado, tela touchscreen e recursos exclusivos, a SMART Hero é a solução completa para quem busca modernidade, eficiência e controle total das vendas.",
      image: "/placeholder.svg?height=400&width=300",
      features: [
        {
          icon: <Printer className="h-8 w-8 text-yellow-400" />,
          title: "Comprovante impresso e SMS",
          description: "Opções para todos os clientes",
        },
        {
          icon: <Smartphone className="h-8 w-8 text-yellow-400" />,
          title: "Sistema Android + Touchscreen",
          description: "Interface moderna e intuitiva",
        },
        {
          icon: <ShoppingCart className="h-8 w-8 text-yellow-400" />,
          title: "Gestão de produtos/estoque",
          description: "Controle completo do seu negócio",
        },
        {
          icon: <CreditCard className="h-8 w-8 text-yellow-400" />,
          title: "Aceite todos os cartões e Pix",
          description: "Mais opções de pagamento",
        },
      ],
      buttonText: "Peça agora sua SMART Hero!",
      buttonLink: "#comprar-smart",
      color: "yellow-400",
    },
];
