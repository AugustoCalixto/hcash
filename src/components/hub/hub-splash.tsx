"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const SPLASH_KEY = "herocash-splash-seen"

export function HubSplash() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const alreadySeen = sessionStorage.getItem(SPLASH_KEY) === "1"

    if (alreadySeen || prefersReducedMotion) {
      sessionStorage.setItem(SPLASH_KEY, "1")
      return
    }

    setVisible(true)
    document.body.style.overflow = "hidden"

    const timer = window.setTimeout(() => dismiss(), 1200)
    return () => window.clearTimeout(timer)
  }, [])

  function dismiss() {
    sessionStorage.setItem(SPLASH_KEY, "1")
    setVisible(false)
    document.body.style.overflow = ""
  }

  useEffect(() => {
    if (!visible) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") dismiss()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [visible])

  if (!mounted || !visible) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-yellow-300 via-yellow-400 to-amber-400 animate-splash-fade-out cursor-pointer"
      onClick={dismiss}
      role="presentation"
      aria-hidden="true"
    >
      <div className="animate-splash-logo flex flex-col items-center gap-4">
        <Image
          src="/images/logo-full.png"
          alt="Herocash Brasil"
          width={280}
          height={70}
          className="w-48 md:w-56 h-auto drop-shadow-lg"
          priority
        />
        <p className="text-sm font-semibold tracking-widest uppercase text-black/70">
          Soluções para o seu negócio
        </p>
      </div>
    </div>
  )
}
