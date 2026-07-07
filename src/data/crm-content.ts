import { company } from "@/data/company"
import type { LucideIcon } from "lucide-react"
import {
  BarChart3,
  Bot,
  Headphones,
  LayoutGrid,
  MessageSquare,
  Radio,
  Send,
  Target,
  Users,
  Zap,
} from "lucide-react"

export interface CrmFeature {
  title: string
  description: string
  highlights: string[]
  icon: LucideIcon
}

export interface CrmBenefit {
  label: string
  icon: LucideIcon
}

export const crmContent = {
  hero: {
    eyebrow: "CRM via WhatsApp",
    title: "Venda e atenda no WhatsApp sem perder nenhuma conversa",
    description:
      "IA, chatbot, pipeline e equipe no mesmo lugar. O CRM Herocash transforma mensagem em oportunidade — sem planilha, sem caos.",
    cta: "Falar com especialista",
    secondaryCta: "Ver recursos",
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: "Do primeiro oi ao fechamento — tudo conectado",
    description: "Três passos para organizar sua operação comercial no WhatsApp.",
    steps: [
      {
        step: "01",
        title: "Conecte seu WhatsApp",
        description: "Integre o canal que seus clientes já usam todos os dias.",
      },
      {
        step: "02",
        title: "Organize leads e atendimentos",
        description: "Distribua conversas, registre histórico e acompanhe cada oportunidade.",
      },
      {
        step: "03",
        title: "Automatize e escale vendas",
        description: "Use IA e chatbot para responder rápido e converter mais.",
      },
    ],
  },
  featuresSection: {
    eyebrow: "Recursos",
    title: "Tudo que sua operação comercial precisa",
    description: "Ferramentas pensadas para quem vende pelo WhatsApp e não pode perder tempo.",
  },
  features: [
    {
      title: "Agente de IA",
      description:
        "Tenha agentes de IA atendendo seus clientes de forma inteligente. Entende o contexto da conversa, responde dúvidas, qualifica leads e aciona sua equipe quando necessário.",
      highlights: ["Contexto de conversa", "Qualificação de leads", "Handoff para equipe"],
      icon: Bot,
    },
    {
      title: "Central de Atendimento",
      description:
        "Organize todas as conversas da sua empresa em um único ambiente integrado ao WhatsApp. Distribua atendimentos, acompanhe sua equipe e mantenha todo o histórico registrado.",
      highlights: ["Múltiplos atendentes", "Distribuição automática", "Histórico completo"],
      icon: Headphones,
    },
    {
      title: "CRM Conversacional",
      description:
        "Centralize atendimentos, leads e oportunidades em um único ambiente. Do primeiro contato à fidelização, acompanhe toda a jornada do cliente sem sair da plataforma.",
      highlights: ["Pipeline de vendas", "Gestão de leads", "Jornada do cliente"],
      icon: MessageSquare,
    },
    {
      title: "Chatbot",
      description:
        "Garanta resposta 24 horas por dia para seus clientes e leads. Automatize envio de informações, encaminhe para departamentos e otimize os seus processos.",
      highlights: ["Atendimento 24h", "Automações", "Encaminhamento inteligente"],
      icon: Bot,
    },
  ] satisfies CrmFeature[],
  benefitsSection: {
    eyebrow: "Benefícios",
    title: "Tudo que seu negócio precisa para escalar no WhatsApp",
    description: "Recursos que fazem diferença no dia a dia — direto ao ponto.",
  },
  benefits: [
    { label: "Múltiplos atendentes e equipes", icon: Users },
    { label: "Gestão das conversas", icon: MessageSquare },
    { label: "Múltiplos canais", icon: Radio },
    { label: "Disparo em massa", icon: Send },
    { label: "CRM integrado", icon: LayoutGrid },
    { label: "Chatbot", icon: Bot },
    { label: "Indicadores", icon: BarChart3 },
    { label: "Automações e integrações", icon: Zap },
    { label: "Rastreabilidade do lead", icon: Target },
  ] satisfies CrmBenefit[],
  cta: {
    title: "Pronto para organizar suas vendas no WhatsApp?",
    description: "Fale com nosso time e descubra como o CRM Herocash pode impulsionar o seu negócio.",
    button: "Falar com especialista",
  },
  whatsappMessage: company.whatsappMessages.crm,
} as const
