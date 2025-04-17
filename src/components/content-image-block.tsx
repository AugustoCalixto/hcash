"use client"

import type { ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ContentImageBlockProps {
    /**
     * Conteúdo textual a ser exibido
     */
    content: ReactNode
    /**
     * Configuração da imagem
     */
    image: {
        src: string
        alt: string
        label?: string
    }
    /**
     * Direção do layout: 'content-image' (conteúdo à esquerda, imagem à direita)
     * ou 'image-content' (imagem à esquerda, conteúdo à direita)
     * @default 'content-image'
     */
    direction?: "content-image" | "image-content"
    /**
     * Classes CSS adicionais para o componente
     */
    className?: string
}

export function ContentImageBlock({ content, image, direction = "content-image", className }: ContentImageBlockProps) {
    const isContentFirst = direction === "content-image"

    return (
        <div className={cn("w-full py-8 md:py-12", className)}>
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Conteúdo */}
                    <div
                        className={cn(
                            "bg-gray-100 rounded-3xl p-8 md:p-10 space-y-6",
                            isContentFirst ? "md:order-1" : "md:order-2",
                        )}
                    >
                        {content}
                    </div>

                    {/* Imagem */}
                    <div
                        className={cn(
                            "relative aspect-[4/3] md:aspect-square rounded-3xl overflow-hidden",
                            isContentFirst ? "md:order-2" : "md:order-1",
                        )}
                    >
                        <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                        {/* {image.label && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-white text-2xl md:text-3xl font-bold opacity-70">{image.label}</span>
                            </div>
                        )} */}
                    </div>
                </div>
            </div>
        </div>
    )
}
