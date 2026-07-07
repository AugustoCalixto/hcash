import { company } from "@/data/company"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { Instagram, Facebook, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"

export function HubAboutSection() {
  return (
    <section className="py-16 md:py-20">
      <InView>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center rounded-3xl border bg-white p-6 md:p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-wider font-bold text-yellow-600">Sobre nós</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Sobre a {company.name}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {company.description} Nossa missão é tornar as transações mais simples,
              alavancar as vendas e impulsionar o crescimento dos negócios, combinando
              tecnologia de ponta com um atendimento ágil e transparente.
            </p>
            <Button asChild variant="outline" className="border-2">
              <Link href="/sobre">Saiba mais sobre nós</Link>
            </Button>
          </div>
          <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/payment.png"
              alt="Soluções Herocash Brasil"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </InView>
    </section>
  )
}

export function HubContactSection() {
  return (
    <section className="py-16 md:py-20">
      <InView>
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-black px-6 py-12 md:px-12 md:py-14 text-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Fale com a Herocash Brasil</h2>
            <p className="text-white/75 text-lg">
              Pronto para dar o próximo passo? Nosso time está aqui para ajudar você a escolher a solução certa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
              <a
                href={`tel:${company.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {company.email}
              </a>
            </div>
            <div className="flex justify-center gap-5">
              <Link href={company.urls.instagram} target="_blank" aria-label="Instagram" className="hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href={company.urls.facebook} target="_blank" aria-label="Facebook" className="hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href={company.urls.tiktok} target="_blank" aria-label="TikTok">
                <Image src="/images/tiktok.svg" alt="TikTok" width={24} height={24} className="opacity-90 hover:opacity-100" />
              </Link>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12 px-8"
            >
              <a href={buildWhatsAppUrl("default")} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </InView>
    </section>
  )
}
