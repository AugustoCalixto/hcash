import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-16 pb-8 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
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

          {/* Coluna 3 - Parcerias */}
          <div className="md:col-span-1">
            {/* <h3 className="font-semibold text-lg mb-4">Parcerias</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#afiliado" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Seja um Afiliado
                </Link>
              </li>
              <li>
                <Link href="#business" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Yelly Business
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Coluna 4 - Institucional */}
          <div className="md:col-span-1">
            {/* <h3 className="font-semibold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#ajuda" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Central de Ajuda
                </Link>
              </li>
              <li>
                <Link href="#portal" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Portal Yelly
                </Link>
              </li>
              <li>
                <Link href="#blog" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Blog
                </Link>
              </li>
            </ul> */}
          </div>

          {/* Coluna 5 - Transparência */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Transparência</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#privacidade" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="#termos" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Termos de Uso
                </Link>
              </li>
              {/* <li>
                <Link href="#troca" className="text-gray-600 hover:text-yellow-500 text-sm">
                  Troca e devolução
                </Link>
              </li> */}
            </ul>

            <div className="mt-6 flex flex-col space-y-2">
              {/* <div className="flex space-x-2">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Selo RA1000"
                  width={60}
                  height={60}
                  className="object-contain"
                />
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Selo Reclame Aqui 2024"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* Redes Sociais e App Stores */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b py-6 mb-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
            <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
              <Youtube className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="https://apps.apple.com" target="_blank">
              <Image
                src="/placeholder.svg?height=40&width=120"
                alt="Download na App Store"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href="https://play.google.com" target="_blank">
              <Image
                src="/placeholder.svg?height=40&width=120"
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
          <p>© Yelly Fintech CNPJ: 42.928.123/0001-37. Todos os direitos reservados.</p>
          <p className="mt-2">WhatsApp: (27) 99607-5780 | E-mail: contato@yelly.com.br</p>
        </div>
      </div>
    </footer>
  )
}

