import { crmContent } from "@/data/crm-content"
import { InView } from "@/components/hub/in-view"

export function CrmHowItWorks() {
  const { howItWorks } = crmContent

  return (
    <section className="py-16 md:py-20 border-y bg-gray-50/50">
      <InView className="text-center max-w-2xl mx-auto mb-10 md:mb-14 space-y-4">
        <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
          {howItWorks.eyebrow}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
          {howItWorks.title}
        </h2>
        <p className="text-lg text-muted-foreground">{howItWorks.description}</p>
      </InView>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {howItWorks.steps.map((step, index) => (
          <InView key={step.step} delay={index * 100}>
            <article className="h-full rounded-2xl border bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
              <p className="text-4xl font-bold text-yellow-400/80 mb-4">{step.step}</p>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </article>
          </InView>
        ))}
      </div>
    </section>
  )
}
