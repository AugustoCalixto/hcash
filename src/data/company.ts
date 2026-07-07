import { getClientAreaHubUrl, getSiteUrl } from "@/config/env"

export const company = {
  name: "Herocash Brasil",
  phone: "(88) 99640-3238",
  email: "contato@herocashbrasil.com",
  whatsapp: "5585987005263",
  description:
    "A Herocash Brasil é uma fintech inovadora, dedicada a transformar a experiência de pagamento de empreendedores e comerciantes em todo o país.",
  urls: {
    get hub() {
      return getSiteUrl()
    },
    get clientArea() {
      return getClientAreaHubUrl()
    },
    privacy:
      "https://drive.google.com/file/d/1N4YrrVckEFmxsE-acsTb5pooArEPYy12/view?usp=sharing",
    terms:
      "https://drive.google.com/file/d/1Hqx4PLbqFam9XHO5oBJIjpeZj5MmT3m-/view?usp=sharing",
    instagram: "https://instagram.com/herocashbrasil",
    facebook: "https://facebook.com/herocashbrasil",
    tiktok: "https://www.tiktok.com/@herocashbrasil?_t=ZM-8zznkJvAUJP&_r=1",
    appStore: "https://apps.apple.com/br/app/hero-cash-brasil/id6749166029",
    playStore: "https://play.google.com/store/apps/details?id=app.herocash.rndlrsrt",
  },
  whatsappMessages: {
    default: "Olá! Gostaria de mais informações sobre a Herocash Brasil.",
    maquininhas: "Olá! Tenho interesse nas maquininhas Herocash.",
    crm: "Olá! Quero conhecer o CRM Herocash.",
    simulador:
      "Olá, gostaria de saber mais sobre as taxas e planos da Herocash para vendas parceladas. Poderia me ajudar?",
    heroMaquininha: "Olá, gostaria de saber mais sobre a maquininha Herocash!",
    plano: (planName: string) => `Olá, gostaria de saber mais sobre o plano ${planName}!`,
  },
}

export type WhatsAppMessageKey = keyof {
  [K in keyof typeof company.whatsappMessages as (typeof company.whatsappMessages)[K] extends string
    ? K
    : never]: true
}
