import { crmContent } from "@/data/crm-content"
import { InView } from "@/components/hub/in-view"

export function CrmBenefits() {
  const { benefitsSection, benefits } = crmContent

  return (
    <section className="py-16 md:py-24 scroll-mt-24" id="beneficios">
      <InView className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
        <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
          {benefitsSection.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          {benefitsSection.title}
        </h2>
        <p className="text-lg text-muted-foreground">{benefitsSection.description}</p>
      </InView>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon
          return (
            <InView key={benefit.label} delay={index * 60}>
              <div className="h-full flex items-start gap-4 rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md hover:border-yellow-200 transition-all duration-300">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-50 text-yellow-700">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="font-medium leading-snug pt-1.5">{benefit.label}</p>
              </div>
            </InView>
          )
        })}
      </div>
    </section>
  )
}
