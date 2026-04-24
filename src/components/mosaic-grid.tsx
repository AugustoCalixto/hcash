"use client"

import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

interface MosaicItemProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink?: string
  onClick?: () => void
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
  onClick,
  imageSrc,
  imageAlt,
  size = "medium",
  bgColor = "bg-white",
  textColor = "text-foreground",
  highlightColor = "text-foreground",
  icon,
}: MosaicItemProps) => {
  const CtaContent = () => (
    <>
      <span className={cn("font-black uppercase tracking-widest text-[10px]", highlightColor === "text-white" ? "text-primary" : highlightColor)}>{ctaText}</span>
      {icon || (
        <ArrowRight
          className={cn("ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1", highlightColor === "text-white" ? "text-primary" : highlightColor)}
        />
      )}
    </>
  )

  const containerClasses = cn(
    "relative overflow-hidden group/card glass-card rounded-[2.5rem] transition-all duration-700 hover:scale-[1.01] border-black/5 bg-white/40",
    size === "large" ? "col-span-1 md:col-span-2 xl:col-span-4 aspect-[2/1] md:aspect-[2.5/1] xl:aspect-[3/1]" :
    size === "medium" ? "col-span-1 md:col-span-1 xl:col-span-2 aspect-square md:aspect-[4/3]" :
    "col-span-1 aspect-square"
  )

  return (
    <div className={containerClasses}>
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 transition-transform duration-1000 group-hover/card:scale-110">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-cover opacity-20 group-hover/card:opacity-30 transition-opacity"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-8 md:p-10">
        <div className="mb-auto space-y-3">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{subtitle}</p>
          <h3 className={cn("text-2xl md:text-4xl font-black tracking-tighter leading-[0.9] uppercase", highlightColor === "text-white" ? "text-foreground" : highlightColor)}>
            {title}
          </h3>
          <p className="text-sm md:text-base text-foreground/40 font-medium max-w-xl">
            {description}
          </p>
        </div>

        <div className="pt-6">
          {onClick ? (
            <button onClick={onClick} className="inline-flex items-center bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/5 transition-all hover:bg-white group/btn shadow-sm">
              <CtaContent />
            </button>
          ) : (
            <Link href={ctaLink || "#"} className="inline-flex items-center bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-black/5 transition-all hover:bg-white group/btn shadow-sm">
              <CtaContent />
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MosaicGrid() {
  function openWhatsapp(message: string) {
    const whatsappNumber = "5585987005263"
    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`
    if (typeof window !== "undefined") {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="editorial-spacing relative overflow-hidden bg-white" id="sobre">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          <MosaicItem
            size="large"
            title="Taxas imbatíveis para CPF e CNPJ"
            subtitle="Planos especiais para todos."
            description="Poupe com as taxas mais baixas do mercado!"
            ctaText="Saiba mais"
            onClick={() => openWhatsapp("Olá, gostaria de saber mais sobre as taxas.")}
            imageSrc="/images/mosaic/all.png"
            imageAlt="Maquininhas Hero Cash"
          />

          <MosaicItem
            size="medium"
            title="Receba seu dinheiro"
            subtitle="RECEBIMENTO ÁGIL"
            description="Recebimento na hora ou em 1 dia (Todos os dias)"
            ctaText="Saiba mais"
            onClick={() => openWhatsapp("Olá, gostaria de saber mais sobre o recebimento.")}
            imageSrc="/images/mosaic/table-pro.png"
            imageAlt="Pessoa recebendo pagamento"
          />

          <MosaicItem
            size="medium"
            title="A maquininha mais inovadora do mercado"
            subtitle="DESEMPENHO SUPERIOR"
            description="Tecnologia Smart para o seu negócio."
            ctaText="Saiba mais"
            onClick={() => openWhatsapp("Olá, gostaria de saber mais sobre a maquininha Smart.")}
            imageSrc="/images/mosaic/table-pro.png"
            imageAlt="Maquininha Hero Smart"
          />

          <MosaicItem
            size="small"
            title="Excelência no atendimento"
            subtitle="SELO RA1000"
            description="Falar via WhatsApp"
            ctaText="Fale conosco"
            onClick={() => openWhatsapp("Olá, gostaria de falar com um atendente.")}
            imageSrc="/images/mosaic/model-oficce.png"
            imageAlt="Atendente Hero Cash"
          />

          <MosaicItem
            size="small"
            title="Siga a Hero Cash"
            subtitle="REDES SOCIAIS"
            description="@herocashbrasil"
            ctaText="Seguir"
            ctaLink="https://instagram.com/herocashbrasil"
            imageSrc="/images/mosaic/ig.webp"
            imageAlt="Logo Instagram"
            highlightColor="text-foreground"
            icon={<Instagram className="ml-2 h-4 w-4 text-primary" />}
          />

          <MosaicItem
            size="small"
            title="Sempre ao seu lado"
            subtitle="MOBILIDADE"
            description="Gestão na palma da mão."
            ctaText="Abrir app"
            ctaLink="https://cliente.herocashbrasil.com.br/"
            imageSrc="/images/mosaic/cell-front.png"
            imageAlt="Pessoa com celular"
          />
        </div>
      </div>
    </section>
  )
}
