import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

const shellVariants = {
  hero: "bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-500",
  stats: "bg-gradient-to-br from-zinc-900 via-zinc-950 to-black",
  products: "bg-gradient-to-b from-amber-400 via-yellow-400 to-yellow-300",
  highlights: "bg-white",
  value: "bg-gradient-to-br from-yellow-400 via-amber-500 to-orange-500",
  about: "bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50",
  contact: "bg-zinc-950",
} as const

export type HubSectionVariant = keyof typeof shellVariants

interface HubSectionShellProps {
  children: ReactNode
  variant: HubSectionVariant
  id?: string
  className?: string
}

export function HubSectionShell({ children, variant, id, className }: HubSectionShellProps) {
  return (
    <section
      id={id}
      className={cn(
        "relative overflow-x-hidden py-16 md:py-20 lg:py-24",
        shellVariants[variant],
        className
      )}
    >
      {variant === "hero" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 top-10 -z-10 h-72 w-72 rounded-full bg-orange-400/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 bottom-0 -z-10 h-64 w-64 rounded-full bg-yellow-200/50 blur-3xl"
          />
        </>
      )}

      {variant === "products" && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute left-[5%] top-12 -z-10 h-40 w-40 rounded-full bg-white/25 blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-10 right-[8%] -z-10 h-52 w-52 rounded-full bg-orange-300/30 blur-3xl"
          />
        </>
      )}

      {variant === "stats" && (
        <div
          aria-hidden
          className="pointer-events-none absolute right-[12%] top-1/2 -z-10 h-48 w-48 -translate-y-1/2 rounded-full bg-yellow-400/15 blur-3xl"
        />
      )}

      <div className="relative">{children}</div>
    </section>
  )
}
