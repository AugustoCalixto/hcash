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
      className={`relative overflow-hidden rounded-lg ${bgColor} ${textColor} 
        ${size === "large"
          ? "p-6 md:p-8 xl:p-10 col-span-1 md:col-span-2 xl:col-span-4 aspect-[2/1] md:aspect-[2.5/1] xl:aspect-[3/1]"
          : size === "medium"
            ? "p-6 md:p-8 col-span-1 md:col-span-1 xl:col-span-2 aspect-square md:aspect-[4/3]"
            : "p-5 md:p-6 col-span-1 aspect-square"
        }`}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover opacity-70"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="mb-auto">
          <p className="text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2">{subtitle}</p>
          <h3 className={`text-xl md:text-2xl xl:text-3xl font-bold mb-2 md:mb-3 ${highlightColor}`}>{title}</h3>
          <p className="text-sm md:text-base xl:text-lg mb-4 md:mb-6 max-w-xl">{description}</p>
        </div>

        <Link href={ctaLink} className="inline-flex items-center text-sm md:text-base font-medium group">
          <span className={`${highlightColor}`}>{ctaText}</span>
          {icon || (
            <ArrowRight
              className={`ml-1 h-4 w-4 md:h-5 md:w-5 ${highlightColor} transition-transform group-hover:translate-x-1`}
            />
          )}
        </Link>
      </div>
    </div>
  )
}

export default function MosaicGrid() {
  return (
    <section className="py-12 md:py-16 xl:py-24">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {/* Item Grande - Topo */}
          <MosaicItem
            size="large"
            title="Taxas imbatíveis para CPF e CNPJ"
            subtitle="TAXAS ESPECIAIS PARA TODOS."
            description="Poupe com as taxas mais baixas do mercado!"
            ctaText="Saiba mais"
            ctaLink="#planos"
            imageSrc="/images/mosaic/all.png"
            imageAlt="Maquininhas Hero Cash"
            highlightColor="text-yellow-400"
          />

          {/* Item Médio - Esquerda */}
          <MosaicItem
            size="medium"
            title="Receba seu dinheiro"
            subtitle="RECEBIMENTO ÁGIL"
            description="em 1 dia (Todos os dias)"
            ctaText="Saiba mais"
            ctaLink="#planos"
            imageSrc="/images/mosaic/table-pro.png"
            imageAlt="Pessoa recebendo pagamento"
            highlightColor="text-yellow-400"
          />

          {/* Item Médio - Direita */}
          <MosaicItem
            size="medium"
            title="A maquininha mais inovadora do mercado"
            subtitle="DESEMPENHO SUPERIOR"
            description=""
            ctaText="Saiba mais"
            ctaLink="#smart"
            imageSrc="/images/mosaic/table-pro.png"
            imageAlt="Maquininha Yelly Smart"
            highlightColor="text-yellow-400"
          />

          {/* Item Pequeno - Esquerda */}
          <MosaicItem
            size="small"
            title="Excelência no atendimento"
            subtitle="SELO RA1000"
            description="Falar via WhatsApp"
            ctaText="Fale conosco"
            ctaLink="#testimonials"
            imageSrc="/images/mosaic/model-oficce.png"
            imageAlt="Atendente Hero Cash"
            highlightColor="text-yellow-400"
          />

          {/* Item Pequeno - Centro */}
          <MosaicItem
            size="small"
            title="Siga a Hero Cash no Instagram!"
            subtitle="REDES SOCIAIS"
            description="@herocashbrasil"
            ctaText="Seguir"
            ctaLink="https://instagram.com/herocashbrasil"
            imageSrc="/images/mosaic/ig.webp"
            imageAlt="Logo Instagram"
            bgColor="bg-gradient-to-br from-purple-600 to-pink-500"
            highlightColor="text-white"
            icon={<Instagram className="ml-1 h-4 w-4 text-white transition-transform group-hover:translate-x-1" />}
          />

          {/* Item Pequeno - Direita */}
          <MosaicItem
            size="small"
            title=""
            subtitle=""
            description=""
            ctaText=""
            ctaLink=""
            icon=" "
            imageSrc="/images/mosaic/cell-front.png"
            imageAlt="Pessoa com celular"
            highlightColor="text-yellow-400"
          />
        </div>
      </div>
    </section>
  )
}

