import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram } from "lucide-react"

interface MosaicItemProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  imageSrc: string
  imageAlt: string
  size?: "large" | "medium" | "small"
  bgColor?: string
  textColor?: string
  highlightColor?: string
  icon?: React.ReactNode
}

const MosaicItem = ({
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  imageSrc,
  imageAlt,
  size = "medium",
  bgColor = "bg-black",
  textColor = "text-white",
  highlightColor = "text-yellow-400",
  icon,
}: MosaicItemProps) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg ${bgColor} ${textColor} p-6 flex flex-col justify-end
        ${size === "large"
          ? "col-span-1 md:col-span-2 aspect-[2/1]"
          : size === "medium"
            ? "col-span-1 aspect-square md:aspect-[4/3]"
            : "col-span-1 aspect-square"
        }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-auto">
          <p className="text-xs uppercase tracking-wider mb-1">{subtitle}</p>
          <h3 className={`text-xl md:text-2xl font-bold mb-2 ${highlightColor}`}>{title}</h3>
          <p className="text-sm md:text-base mb-4">{description}</p>
        </div>

        <Link href={ctaLink} className="inline-flex items-center text-sm font-medium group">
          <span className={`${highlightColor}`}>{ctaText}</span>
          {icon || (
            <ArrowRight className={`ml-1 h-4 w-4 ${highlightColor} transition-transform group-hover:translate-x-1`} />
          )}
        </Link>
      </div>
    </div>
  )
}

export default function MosaicGridWithImages() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Item Grande - Topo */}
          <MosaicItem
            size="large"
            title="As melhores taxas para você CPF ou CNPJ"
            subtitle="TAXAS EXCLUSIVAS PARA TODOS"
            description="Economize com as menores taxas do mercado!"
            ctaText="Saiba mais"
            ctaLink="#taxas"
            imageSrc=" "
            imageAlt="Maquininhas Hero Cash"
            highlightColor="text-yellow-400"
          />

          {/* Item Médio - Esquerda */}
          <MosaicItem
            size="medium"
            title="Receba seu dinheiro em até um dia"
            subtitle="RECEBIMENTO RÁPIDO"
            description="Confira nossas taxas"
            ctaText="Saiba mais"
            ctaLink="#recebimento"
            imageSrc=" "
            imageAlt="Pessoa recebendo pagamento"
            highlightColor="text-yellow-400"
          />

          {/* Item Médio - Direita */}
          <MosaicItem
            size="medium"
            title="A máquina mais moderna do mercado!"
            subtitle="ALTA PERFORMANCE"
            description="Conheça o Herocash Smart"
            ctaText="Saiba mais"
            ctaLink="#smart"
            imageSrc=" "
            imageAlt="Maquininha Herocash Smart"
            highlightColor="text-yellow-400"
          />

          {/* Item Pequeno - Esquerda */}
          <MosaicItem
            size="small"
            title="Excelência no atendimento"
            subtitle="SELO RA1000"
            description="Falar via WhatsApp"
            ctaText="Fale conosco"
            ctaLink="#whatsapp"
            imageSrc=" "
            imageAlt="Atendente Hero Cash"
            highlightColor="text-yellow-400"
          />

          {/* Item Pequeno - Centro */}
          <MosaicItem
            size="small"
            title="Siga a Herocash Brasil no Instagram e fique por dentro das novidades!"
            subtitle="REDES SOCIAIS"
            description="@herocashbrasil"
            ctaText="Seguir"
            ctaLink="https://instagram.com/herocashbrasil"
            imageSrc=" "
            imageAlt="Logo Instagram"
            bgColor="bg-gradient-to-br from-purple-600 to-pink-500"
            highlightColor="text-white"
            icon={<Instagram className="ml-1 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />}
          />

          {/* Item Pequeno - Direita */}
          <MosaicItem
            size="small"
            title="Obtenha acesso antecipado!"
            subtitle="LINK DE PAGAMENTO"
            description="Saiba mais"
            ctaText="Acessar agora"
            ctaLink="#link-pagamento"
            imageSrc=" "
            imageAlt="Pessoa com celular"
            highlightColor="text-yellow-400"
          />
        </div>
      </div>
    </section>
  )
}

