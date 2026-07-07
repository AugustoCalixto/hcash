"use client"

import { cn } from "@/lib/utils"
import { useInView } from "@/hooks/use-in-view"
import type { ReactNode } from "react"

interface InViewProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function InView({ children, className, delay = 0 }: InViewProps) {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      className={cn(
        "motion-safe:transition-all motion-safe:duration-700 motion-safe:ease-out",
        isInView ? "motion-safe:opacity-100 motion-safe:translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-6",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
