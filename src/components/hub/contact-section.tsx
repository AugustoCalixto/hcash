import { company } from "@/data/company"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function HubAboutSection() {
  return (
    <section className="py-16 md:py-20 border-t">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre a {company.name}</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {company.description} Nossa missão é tornar as transações mais simples,
            alavancar as vendas e impulsionar o crescimento dos negócios, combinando
            tecnologia de ponta com um atendimento ágil e transparente.
          </p>
          <Button asChild variant="outline">
            <Link href="/sobre">Saiba mais sobre nós</Link>
          </Button>
        </div>
        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
          <Image
            src="/images/payment.png"
            alt="Soluções Herocash Brasil"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export function HubContactSection() {
  return (
    <section className="py-16 md:py-20 bg-gray-50 rounded-2xl px-6 md:px-10">
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold">Fale com a Herocash Brasil</h2>
        <p className="text-muted-foreground">
          Estamos prontos para ajudar você a escolher a melhor solução para o seu negócio.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
          <a
            href={`tel:${company.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 hover:text-yellow-600 transition-colors"
          >
            <Phone className="h-4 w-4" />
            {company.phone}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 hover:text-yellow-600 transition-colors"
          >
            <Mail className="h-4 w-4" />
            {company.email}
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <Link href={company.urls.instagram} target="_blank" aria-label="Instagram">
            <Instagram className="h-6 w-6 hover:text-yellow-500 transition-colors" />
          </Link>
          <Link href={company.urls.facebook} target="_blank" aria-label="Facebook">
            <Facebook className="h-6 w-6 hover:text-yellow-500 transition-colors" />
          </Link>
          <Link href={company.urls.tiktok} target="_blank" aria-label="TikTok">
            <Image src="/images/tiktok.svg" alt="TikTok" width={24} height={24} />
          </Link>
        </div>
        <Button
          asChild
          size="lg"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
        >
          <a href={buildWhatsAppUrl("default")} target="_blank" rel="noopener noreferrer">
            Chamar no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  )
}
