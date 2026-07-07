import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { company } from "@/data/company"
import { hubProducts } from "@/data/hub-products"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white pt-16 pb-8 border-t mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logo-full.png"
                alt="Herocash Brasil Logo"
                width={200}
                height={50}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600 mb-6">
              {company.description} Nossa missão é tornar as transações mais simples,
              alavancar as vendas e impulsionar o crescimento dos negócios, combinando
              tecnologia de ponta com um atendimento ágil e transparente.
            </p>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Soluções</h3>
            <ul className="space-y-2">
              {hubProducts.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={product.href}
                    className="text-gray-600 hover:text-yellow-500 text-sm"
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={company.urls.clientArea}
                  className="text-gray-600 hover:text-yellow-500 text-sm"
                >
                  Área do cliente
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Transparência</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href={company.urls.privacy}
                  className="text-gray-600 hover:text-yellow-500 text-sm"
                  target="_blank"
                >
                  Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href={company.urls.terms}
                  className="text-gray-600 hover:text-yellow-500 text-sm"
                  target="_blank"
                >
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-b py-6 mb-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <Link href={buildWhatsAppUrl("default")} target="_blank" aria-label="WhatsApp">
              <Image
                src="/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </Link>
            <Link href={company.urls.instagram} target="_blank" aria-label="Instagram">
              <Instagram className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
            <Link href={company.urls.facebook} target="_blank" aria-label="Facebook">
              <Facebook className="h-6 w-6 text-gray-600 hover:text-yellow-500" />
            </Link>
            <Link href={company.urls.tiktok} target="_blank" aria-label="TikTok">
              <Image
                src="/images/tiktok.svg"
                alt="TikTok"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href={company.urls.appStore} target="_blank">
              <Image
                src="/images/download/app-store.png"
                alt="Download na App Store"
                width={120}
                height={40}
                className="object-contain"
              />
            </Link>
            <Link href={company.urls.playStore} target="_blank">
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

        <div className="text-center text-sm text-gray-600">
          <p>© {company.name}. Todos os direitos reservados.</p>
          <p className="mt-2">
            Telefone: {company.phone} | E-mail: {company.email}
          </p>
        </div>
      </div>
    </footer>
  )
}
