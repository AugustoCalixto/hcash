import { crmContent } from "@/data/crm-content"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function CrmCta() {
  const { cta } = crmContent
  const whatsappUrl = buildWhatsAppUrl("crm")

  return (
    <section className="py-16 md:py-20">
      <InView>
        <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-black px-6 py-12 md:px-12 md:py-16 text-center text-white">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">{cta.title}</h2>
            <p className="text-white/75 text-lg leading-relaxed">{cta.description}</p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold h-12 px-8 transition-all hover:scale-[1.02]"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {cta.button}
              </a>
            </Button>
          </div>
        </div>
      </InView>
    </section>
  )
}
