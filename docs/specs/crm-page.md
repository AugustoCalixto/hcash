# Spec: Página CRM Herocash (crm.herocashbrasil.com.br)

> **Status:** Implementado (v1)  
> **Escopo:** Apenas a página CRM (`app/(sites)/crm/page.tsx`)  
> **Spec pai:** [hub-produtos.md](./hub-produtos.md)  
> **Última atualização:** 2026-07-07

---

## Decisões Validadas (herdadas do HUB)

| Tópico | Decisão |
|--------|---------|
| Tom visual | **Clean/branco** (contraste com HUB bold/colorido) |
| Copy | Derivar de `crm-content.ts`; tom empreendedor, criativo e direto |
| Vídeos demo | Não na v1 — ilustrações estáticas com ícones |
| Splash | Apenas no HUB — **não** na página CRM |
| Topbar | ProductNavbar branca padrão (sem glass) |
| Animações | CSS + `InView` + `prefers-reduced-motion` |
| CTAs | WhatsApp com mensagem pré-preenchida (`company.whatsappMessages.crm`) |
| Breakpoints | 375px / 768px / 1280px |

---

## Objective

Transformar a landing do CRM Herocash em uma página de produto **premium, clara e conversiva** — inspirada em Apple (hierarquia e respiro), com storytelling por seções no estilo HelenaCRM (sem vídeos), focada em converter empresários via WhatsApp.

### Success Criteria

- [ ] Hero split texto + visual, CTA WhatsApp visível acima do fold
- [ ] 4 feature blocks (IA, Central, CRM Conversacional, Chatbot) com highlights
- [ ] Grid de benefícios com ícones e layout responsivo
- [ ] Seção "Como funciona" em 3 passos
- [ ] CTA final destacado
- [ ] Animações on-scroll suaves
- [ ] 100% responsivo em 375px
- [ ] `npm run build` passa

---

## Arquitetura da Página

```
CrmHero (split clean)
  → CrmHowItWorks (3 passos)
  → CrmFeatures (4 blocos alternados, #recursos)
  → CrmBenefits (grid 9 itens, #beneficios)
  → CrmCta (fechamento escuro)
```

---

## Perguntas para incremento de conteúdo (futuro)

1. Há **screenshots reais** da plataforma CRM para substituir ilustrações?
2. Existe **case de cliente** usando CRM Herocash com resultado mensurável?
3. Qual **integração** merece destaque (ERP, e-commerce, outro)?
4. O CRM atende **quantos atendentes** no plano base?
5. Há **preço ou planos** para exibir na landing?
6. Existe **demo agendada** além do WhatsApp?
7. Qual **dor #1** do público-alvo (perda de leads, demora no atendimento, desorganização)?
8. Há **vídeo demo** para uma futura v2?
