import { company, type WhatsAppMessageKey } from "@/data/company"

export function resolveWhatsAppMessage(
  message: WhatsAppMessageKey | string,
  params?: { planName?: string }
): string {
  if (message === "plano" && params?.planName) {
    return company.whatsappMessages.plano(params.planName)
  }

  if (message in company.whatsappMessages && message !== "plano") {
    return company.whatsappMessages[message as WhatsAppMessageKey]
  }

  return message
}

export function buildWhatsAppUrl(
  message: WhatsAppMessageKey | string,
  params?: { planName?: string }
): string {
  const text = resolveWhatsAppMessage(message, params)
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`
}

export function openWhatsApp(
  message: WhatsAppMessageKey | string,
  params?: { planName?: string }
): void {
  if (typeof window === "undefined") return
  window.open(buildWhatsAppUrl(message, params), "_blank")
}
