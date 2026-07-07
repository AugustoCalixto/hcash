import { company } from "@/data/company"

export interface CrmFeature {
  title: string
  description: string
  highlights: string[]
}

export const crmContent = {
  hero: {
    eyebrow: "CRM via WhatsApp",
    title: "Transforme conversas em vendas com o CRM Herocash",
    description:
      "Organize atendimentos, qualifique leads e automatize processos no WhatsApp. Tudo em um único ambiente integrado à sua operação.",
    cta: "Falar com especialista",
  },
  features: [
    {
      title: "Agente de IA",
      description:
        "Tenha agentes de IA atendendo seus clientes de forma inteligente. Entende o contexto da conversa, responde dúvidas, qualifica leads e aciona sua equipe quando necessário.",
      highlights: ["Contexto de conversa", "Qualificação de leads", "Handoff para equipe"],
    },
    {
      title: "Central de Atendimento",
      description:
        "Organize todas as conversas da sua empresa em um único ambiente integrado ao WhatsApp. Distribua atendimentos, acompanhe sua equipe e mantenha todo o histórico registrado.",
      highlights: ["Múltiplos atendentes", "Distribuição automática", "Histórico completo"],
    },
    {
      title: "CRM Conversacional",
      description:
        "Centralize atendimentos, leads e oportunidades em um único ambiente. Do primeiro contato à fidelização, acompanhe toda a jornada do cliente sem sair da plataforma.",
      highlights: ["Pipeline de vendas", "Gestão de leads", "Jornada do cliente"],
    },
    {
      title: "Chatbot",
      description:
        "Garanta resposta 24 horas por dia para seus clientes e leads. Automatize envio de informações, encaminhe para departamentos e otimize os seus processos.",
      highlights: ["Atendimento 24h", "Automações", "Encaminhamento inteligente"],
    },
  ] satisfies CrmFeature[],
  benefits: [
    "Múltiplos atendentes e equipes",
    "Gestão das conversas",
    "Múltiplos canais",
    "Disparo em massa",
    "CRM integrado",
    "Chatbot",
    "Indicadores",
    "Automações e integrações",
    "Rastreabilidade do lead",
  ],
  cta: {
    title: "Pronto para organizar suas vendas no WhatsApp?",
    description: "Fale com nosso time e descubra como o CRM Herocash pode impulsionar o seu negócio.",
    button: "Falar com especialista",
  },
  whatsappMessage: company.whatsappMessages.crm,
} as const
