import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Coluna 1 - Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo-full.png"
                alt="Hero Cash Brasil Logo"
                width={200}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              A Hero Cash Brasil é uma fintech inovadora, dedicada a transformar a experiência de pagamento de
              empreendedores e comerciantes em todo o país. Nossa missão é tornar as transações mais simples, alavancar
              as vendas e impulsionar o crescimento dos negócios, combinando tecnologia de ponta com um atendimento ágil
              e transparente.
            </p>
          </div>

          {/* Coluna 2 - Soluções */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#maquininhas" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Maquininhas
                </Link>
              </li>
              <li>
                <Link href="#planos" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Planos e Taxas
                </Link>
              </li>
              <li>
                <Link href="#simulador" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Simulador
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Transparência */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Transparência</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://drive.google.com/file/d/1N4YrrVckEFmxsE-acsTb5pooArEPYy12/view?usp=sharing" className="text-gray-600 hover:text-yellow-500 text-sm" target="_blank">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="https://drive.google.com/file/d/1Hqx4PLbqFam9XHO5oBJIjpeZj5MmT3m-/view?usp=sharing" className="text-gray-600 hover:text-yellow-500 text-sm" target="_blank">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Redes Sociais e App Stores */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b py-6 mb-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://instagram.com/herocashbrasil" target="_blank" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
            <Link href="https://facebook.com/herocashbrasil" target="_blank" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
            {/* <Link href="https://youtube.com/channel/UCSnCTXQMJGTQ3SobY0kcsxA" target="_blank" aria-label="YouTube">
              <Youtube className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link> */}
          </div>

          <div className="flex space-x-4">
            <Link href="https://apps.apple.com" target="_blank">
              <Image
                src="/images/download/app-store.png"
                alt="Download na App Store"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="https://play.google.com/store/apps/details?id=app.herocash.rndlrsrt" target="_blank">
              <Image
                src="/images/download/google-play.png"
                alt="Download no Google Play"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
        </div>

        {/* Copyright e Informações Legais */}
        <div className="text-center text-sm text-gray-600">
          <p>© Herocash Brasil. Todos os direitos reservados.</p>
          <p className="mt-2">Telefone: (88) 99640-3238 | E-mail: contato@herocashbrasil.com</p>
        </div>
      </div>
    </footer>
  )
}

