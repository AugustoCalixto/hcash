"use client"

import { Coins, Users } from "lucide-react"
import { InView } from "@/components/hub/in-view"

const stats = [
  {
    icon: Coins,
    value: "+ de 2,5 BILHÕES",
    label: "movimentados no ano de 2024",
    iconClass: "bg-yellow-400 text-yellow-900",
  },
  {
    icon: Users,
    value: "+ de 4.050",
    label: "clientes em todo o Brasil",
    iconClass: "bg-black text-white",
  },
] as const

export default function StatsSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="rounded-3xl border bg-white/70 backdrop-blur-sm shadow-sm px-6 py-8 md:px-10 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <InView key={stat.label} delay={index * 100}>
              <div className="flex items-center gap-5 justify-center md:justify-start">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${stat.iconClass}`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{stat.value}</h3>
                  <p className="text-sm md:text-base text-muted-foreground mt-1">{stat.label}</p>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  )
}
