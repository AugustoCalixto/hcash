export const CRM_PLAN_IDS = ["essential", "pro", "plus", "advanced"] as const
export type CrmPlanId = (typeof CRM_PLAN_IDS)[number]

export interface CrmPlanCardFeature {
  label: string
  included: boolean
}

export interface CrmPlan {
  id: CrmPlanId
  name: string
  monthlyPrice: number
  usersLabel: string
  highlighted?: boolean
  highlightLabel?: string
  accent: "default" | "featured"
  mainFeatures: CrmPlanCardFeature[]
  automationFeatures: CrmPlanCardFeature[]
}

export type CompareCell = boolean | string | string[]

export interface CrmCompareRow {
  label: string
  values: Record<CrmPlanId, CompareCell>
}

export interface CrmCompareGroup {
  title: string
  rows: CrmCompareRow[]
}

export interface CrmAddon {
  name: string
  priceLabel: string
  description: string
}

export const crmPricingContent = {
  section: {
    eyebrow: "Planos e preços",
    title: "Planos simples e flexíveis",
    description:
      "Escolha o melhor plano para sua empresa e transforme o atendimento digital no WhatsApp com o CRM Herocash.",
    compareCta: "Comparar planos",
    addonsTitle: "Adicione recursos extras ao seu plano!",
    detailsCta: "Falar com especialista",
    whatsappPlanMessage: (planName: string) =>
      `Olá! Tenho interesse no plano ${planName} do CRM Herocash.`,
  },
  plans: [
    {
      id: "essential",
      name: "Essential",
      monthlyPrice: 657,
      usersLabel: "03 usuários",
      accent: "default",
      mainFeatures: [
        { label: "Também com versão mobile", included: true },
        { label: "Central de Atendimento", included: true },
        { label: "CRM", included: false },
        { label: "Disparo de Mensagem", included: false },
        { label: "Mensagem Agendada", included: false },
        { label: "Distribuição automática de atendimento", included: false },
        { label: "Carteiras de Cliente", included: false },
        { label: "Grupos", included: false },
      ],
      automationFeatures: [
        { label: "Sequências", included: true },
        { label: "Chatbot de Atendimento", included: true },
        { label: "Chatbot de Automação", included: true },
        { label: "Integrações (Webhook + API)", included: false },
      ],
    },
    {
      id: "pro",
      name: "Pro",
      monthlyPrice: 987,
      usersLabel: "05 usuários",
      accent: "default",
      mainFeatures: [
        { label: "Também com versão mobile", included: true },
        { label: "Central de Atendimento", included: true },
        { label: "CRM", included: true },
        { label: "Disparo de Mensagem", included: true },
        { label: "Mensagem Agendada", included: true },
        { label: "Distribuição automática de atendimento", included: false },
        { label: "Carteiras de Cliente", included: false },
        { label: "Grupos", included: false },
      ],
      automationFeatures: [
        { label: "Sequências", included: true },
        { label: "Chatbot de Atendimento", included: true },
        { label: "Chatbot de Automação", included: true },
        { label: "Integrações (Webhook + API)", included: false },
      ],
    },
    {
      id: "plus",
      name: "Plus+",
      monthlyPrice: 1387,
      usersLabel: "10 usuários",
      highlighted: true,
      highlightLabel: "Mais escolhido",
      accent: "featured",
      mainFeatures: [
        { label: "Também com versão mobile", included: true },
        { label: "Central de Atendimento", included: true },
        { label: "CRM", included: true },
        { label: "Disparo de Mensagem", included: true },
        { label: "Mensagem Agendada", included: true },
        { label: "Distribuição automática de atendimento", included: true },
        { label: "Carteiras de Cliente", included: true },
        { label: "Grupos", included: true },
      ],
      automationFeatures: [
        { label: "Sequências", included: true },
        { label: "Chatbot de Atendimento", included: true },
        { label: "Chatbot de Automação", included: true },
        { label: "Integrações (Webhook + API)", included: true },
      ],
    },
    {
      id: "advanced",
      name: "Advanced",
      monthlyPrice: 2007,
      usersLabel: "20 usuários",
      accent: "default",
      mainFeatures: [
        { label: "Também com versão mobile", included: true },
        { label: "Central de Atendimento", included: true },
        { label: "CRM", included: true },
        { label: "Disparo de Mensagem", included: true },
        { label: "Mensagem Agendada", included: true },
        { label: "Distribuição automática de atendimento", included: true },
        { label: "Carteiras de Cliente", included: true },
        { label: "Grupos", included: true },
      ],
      automationFeatures: [
        { label: "Sequências", included: true },
        { label: "Chatbot de Atendimento", included: true },
        { label: "Chatbot de Automação", included: true },
        { label: "Integrações (Webhook + API)", included: true },
      ],
    },
  ] satisfies CrmPlan[],
  addons: [
    {
      name: "Automação Ilimitada",
      priceLabel: "R$ 147/mês",
      description: "Utilize de forma ilimitada todas as automações necessárias para seu negócio.",
    },
    {
      name: "WhatsApp Adicional",
      priceLabel: "R$ 89/mês",
      description: "Tenha todos os números necessários para a sua operação.",
    },
    {
      name: "Direct ou Messenger Adicional",
      priceLabel: "R$ 69/mês",
      description: "Centralize quantos canais de atendimento você precisar.",
    },
    {
      name: "Integração Banco ASAAS",
      priceLabel: "R$ 99/mês",
      description: "Utilize a solução de pagamentos na plataforma através dessa integração.",
    },
    {
      name: "Usuário Adicional",
      priceLabel: "A partir de R$ 47/mês",
      description: "Essential R$ 107 · Pro R$ 87 · Plus+ R$ 57 · Advanced R$ 47 por usuário.",
    },
    {
      name: "Transcrição de áudio com IA",
      priceLabel: "R$ 6,99/mês por usuário",
      description: "Transcreva áudios das conversas em tempo real com inteligência artificial.",
    },
  ] satisfies CrmAddon[],
  compareGroups: [
    {
      title: "CANAIS",
      rows: [
        {
          label: "Usuários inclusos",
          values: { essential: "03", pro: "05", plus: "10", advanced: "20" },
        },
        {
          label: "Canais",
          values: {
            essential: ["Facebook"],
            pro: ["Facebook", "Instagram", "Messenger"],
            plus: ["Facebook", "Instagram", "Messenger"],
            advanced: ["Facebook", "Instagram", "Messenger"],
          },
        },
      ],
    },
    {
      title: "ADICIONAIS",
      rows: [
        {
          label: "Usuário adicional",
          values: {
            essential: "R$ 107/mês",
            pro: "R$ 87/mês",
            plus: "R$ 57/mês",
            advanced: "R$ 47/mês",
          },
        },
        {
          label: "WhatsApp adicional",
          values: {
            essential: "R$ 89/mês",
            pro: "R$ 89/mês",
            plus: "R$ 89/mês",
            advanced: "R$ 89/mês",
          },
        },
        {
          label: "Direct ou Messenger adicional",
          values: {
            essential: "R$ 69/mês",
            pro: "R$ 69/mês",
            plus: "R$ 69/mês",
            advanced: "R$ 69/mês",
          },
        },
        {
          label: "Pagamentos",
          values: {
            essential: "R$ 99/mês",
            pro: "R$ 99/mês",
            plus: "R$ 99/mês",
            advanced: "R$ 99/mês",
          },
        },
      ],
    },
    {
      title: "ATIVAÇÃO",
      rows: [
        {
          label: "Taxa de implantação",
          values: {
            essential: "R$ 1.487,00",
            pro: "R$ 2.087,00",
            plus: "R$ 2.687,00",
            advanced: "R$ 3.287,00",
          },
        },
      ],
    },
    {
      title: "INBOX",
      rows: [
        { label: "Central de Atendimento", values: { essential: true, pro: true, plus: true, advanced: true } },
        { label: "Criação de Setores", values: { essential: true, pro: true, plus: true, advanced: true } },
        { label: "Fila de Espera", values: { essential: true, pro: true, plus: true, advanced: true } },
        { label: "Distribuição automática de atendimento", values: { essential: false, pro: false, plus: true, advanced: true } },
      ],
    },
    {
      title: "CRM",
      rows: [
        { label: "Funis (Kanban)", values: { essential: false, pro: true, plus: true, advanced: true } },
        { label: "Disparo em massa", values: { essential: false, pro: true, plus: true, advanced: true } },
        { label: "Quantidade de funis", values: { essential: false, pro: "2", plus: "5", advanced: "10" } },
        { label: "Base de contatos", values: { essential: false, pro: "Ilimitada", plus: "Ilimitada", advanced: "Ilimitada" } },
      ],
    },
    {
      title: "AUTOMAÇÃO E INTEGRAÇÕES",
      rows: [
        {
          label: "Chatbot de Atendimento",
          values: { essential: "2", pro: "3", plus: "5", advanced: "10" },
        },
        {
          label: "Chatbot de Automação",
          values: { essential: "1", pro: "2", plus: "2", advanced: "4" },
        },
        {
          label: "Chatbot com Webhooks",
          values: { essential: false, pro: true, plus: true, advanced: true },
        },
        { label: "API", values: { essential: false, pro: false, plus: true, advanced: true } },
      ],
    },
    {
      title: "SUPORTE",
      rows: [
        { label: "Suporte por WhatsApp", values: { essential: true, pro: true, plus: true, advanced: true } },
        { label: "Sucesso do Cliente", values: { essential: true, pro: true, plus: true, advanced: true } },
        { label: "Auxílio nas Configurações", values: { essential: true, pro: true, plus: true, advanced: true } },
      ],
    },
  ] satisfies CrmCompareGroup[],
  compareFootnote:
    "* Conversas WhatsApp: valores em dólar pagos diretamente à Meta. Condições conforme política de precificação da plataforma.",
} as const

export function getCrmPlan(id: CrmPlanId): CrmPlan {
  const plan = crmPricingContent.plans.find((item) => item.id === id)
  if (!plan) throw new Error(`Plano CRM não encontrado: ${id}`)
  return plan
}

export function formatCrmPrice(value: number): string {
  return value.toLocaleString("pt-BR")
}
