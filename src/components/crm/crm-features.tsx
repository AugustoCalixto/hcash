import { crmContent } from "@/data/crm-content"
import { InView } from "@/components/hub/in-view"
import { Button } from "@/components/ui/button"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

export function CrmFeatures() {
  const { featuresSection, features } = crmContent
  const whatsappUrl = buildWhatsAppUrl("crm")

  return (
    <section className="py-16 md:py-24 scroll-mt-24" id="recursos">
      <InView className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
        <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
          {featuresSection.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          {featuresSection.title}
        </h2>
        <p className="text-lg text-muted-foreground">{featuresSection.description}</p>
      </InView>

      <div className="space-y-8 md:space-y-12">
        {features.map((feature, index) => {
          const isReversed = index % 2 === 1
          const Icon = feature.icon

          return (
            <InView key={feature.title} delay={80}>
              <article
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center rounded-3xl border bg-white p-6 md:p-8 lg:p-10 shadow-sm",
                  isReversed && "lg:[&>*:first-child]:order-2"
                )}
              >
                <div className="space-y-5">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                  <Button asChild variant="outline" className="border-2 hover:bg-yellow-50">
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Falar com especialista
                    </a>
                  </Button>
                </div>

                <ul className="space-y-3">
                  {feature.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-3 rounded-xl border bg-gray-50/80 px-4 py-3.5 font-medium"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-yellow-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </InView>
          )
        })}
      </div>
    </section>
  )
}
