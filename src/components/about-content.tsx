"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutContentSection() {
    return (
        <section className="w-full py-12 md:py-16 lg:py-20 bg-amber-300 rounded-lg">
            <div className="container px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Imagens lado esquerdo */}
                    <div className="relative grid grid-cols-2 gap-3 max-w-xl mx-auto md:mx-0">
                        {/* Imagem grande central */}
                        <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden aspect-[4/3]  border-white">
                            <Image
                                src="/images/about/todes.png"
                                alt="Pessoa usando máquina de pagamento"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Imagem esquerda superior */}
                        <div className="relative rounded-lg overflow-hidden aspect-square  border-white">
                            <Image
                                src="/images/about/model-maq.png"
                                alt="Atendente com máquinas de pagamento"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Imagem direita superior */}
                        <div className="relative rounded-lg overflow-hidden aspect-square  border-white">
                            <Image
                                src="/images/maquininhas/pro.png"
                                alt="Máquina de pagamento"
                                fill
                                className="object-cover"
                            />
                        </div>

                    </div>

                    {/* Conteúdo lado direito */}
                    <div className="flex flex-col space-y-6 max-w-md mx-auto md:mx-0">
                        <div className="space-y-2">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                                Alguma dúvida?
                                <br />
                                Tire conosco!
                            </h2>
                            <p className="text-base md:text-lg">
                                Aqui, a transparência é o que mais importa. Se tiver qualquer dúvida, é só entrar em contato com o nosso
                                time.
                            </p>
                        </div>

                        <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-fit px-6 py-2 h-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Fale agora mesmo!
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
