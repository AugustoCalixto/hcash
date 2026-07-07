import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { hubProducts } from "@/data/hub-products"
import { hubHomeContent } from "@/data/hub-home-content"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import { buildWhatsAppUrl } from "@/lib/whatsapp"

export function HubProductHighlights() {
  const { highlightsSection } = hubHomeContent

  return (
    <section className="py-16 md:py-20">
      <InView className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
        <p className="text-sm uppercase tracking-wider font-bold text-yellow-600">
          {highlightsSection.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          {highlightsSection.title}
        </h2>
        <p className="text-lg text-muted-foreground">{highlightsSection.description}</p>
      </InView>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {hubProducts.map((product, index) => (
          <InView key={product.slug} delay={index * 100}>
            <article className="h-full rounded-3xl border bg-white p-7 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${product.accentClass}`}>
                  <product.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.statLabel}: {product.statValue}</p>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {product.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 rounded-xl bg-gray-50 px-4 py-3 text-sm md:text-base"
                  >
                    <span className={`mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${product.accentClass}`} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold"
                >
                  <Link href={product.href}>
                    {product.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a href={buildWhatsAppUrl(product.slug === "maquininhas" ? "maquininhas" : "crm")} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </Button>
              </div>
            </article>
          </InView>
        ))}
      </div>
    </section>
  )
}
