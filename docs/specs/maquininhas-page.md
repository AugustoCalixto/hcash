# Spec: Página Maquininhas (maquininhas.herocashbrasil.com.br)

> **Status:** Implementado (v1)  
> **Escopo:** `app/(sites)/maquininhas/page.tsx` + refactor de `pricing-plans.tsx`  
> **Spec pai:** [hub-produtos.md](./hub-produtos.md)  
> **Última atualização:** 2026-07-07

---

## Decisões Validadas

| Tópico | Decisão |
|--------|---------|
| Tom visual | **Clean/branco** (páginas de produto) |
| Dados de planos | Fonte única em `src/data/plans/` — alterar taxas em `rates.ts` propaga automaticamente |
| PricingPlans | **Abas no desktop** por tipo de recebimento; mobile também em abas |
| Conteúdo existente | Manter simulador, tabela, comparação, depoimentos — sem perda de informação |
| Copy | Derivar de dados existentes; tom empreendedor e direto |
| Animações | `InView` on-scroll |

---

## Grupos de Recebimento (abas)

| Aba | Planos |
|-----|--------|
| Recebimento na hora | HERO |
| Recebimento no dia seguinte | BASIC, ON, PRIME |
| Recebimento conforme parcelas | ECONÔMICO |

---

## Success Criteria

- [ ] Planos em abas — sem grid 5 colunas que quebra texto
- [ ] Taxas derivadas de `planRates` / `paymentRates` (zero hardcode)
- [ ] Alterar `rates.ts` atualiza planos, simulador e tabela
- [ ] Hero split clean/branco
- [ ] `npm run build` passa

---

## Perguntas para incremento de conteúdo (futuro)

1. Qual **plano** deve ser destacado como "mais popular"?
2. Há **foto real** da maquininha para substituir stock?
3. Existe **comparativo oficial** com concorrentes além dos dados atuais?
4. Qual **modalidade** merece destaque no hero (PIX, débito, 12x)?
5. Há **depoimentos novos** para a seção de testimonials?
6. O plano **Prime** mantém esse nome comercial ou é Premium?
7. Taxas de **Elo/Hiper** devem aparecer nos cards ou só na tabela completa?
8. Existe **promoção ativa** (taxa zero, aluguel grátis) para banner?
