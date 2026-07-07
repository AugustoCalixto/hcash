import { Sparkles, TrendingUp, Headphones, ShieldCheck } from "lucide-react"
import { hubHomeContent } from "@/data/hub-home-content"
import { InView } from "@/components/hub/in-view"

const icons = [Sparkles, TrendingUp, Headphones, ShieldCheck] as const

export function HubValueProps() {
  const { valuePropsSection, valueProps } = hubHomeContent

  return (
    <section className="py-16 md:py-20">
      <div className="rounded-3xl bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-400 p-1 shadow-xl shadow-yellow-500/20">
        <div className="rounded-[1.35rem] bg-gradient-to-br from-yellow-50 to-amber-50 px-6 py-10 md:px-10 md:py-14">
          <InView className="text-center max-w-2xl mx-auto mb-10 md:mb-12 space-y-4">
            <p className="text-sm uppercase tracking-wider font-bold text-yellow-700">
              {valuePropsSection.eyebrow}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-balance">
              {valuePropsSection.title}
            </h2>
            <p className="text-lg text-muted-foreground">{valuePropsSection.description}</p>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {valueProps.map((prop, index) => {
              const Icon = icons[index] ?? Sparkles
              return (
                <InView key={prop.title} delay={index * 80}>
                  <div className="h-full rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/20 text-yellow-700 mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{prop.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                  </div>
                </InView>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
