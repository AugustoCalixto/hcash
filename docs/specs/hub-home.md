# Spec: Home do HUB (herocashbrasil.com.br)

> **Status:** Fase 1 validada — implementação em andamento  
> **Escopo:** Apenas a home do HUB (`app/(sites)/hub/page.tsx`)  
> **Spec pai:** [hub-produtos.md](./hub-produtos.md)  
> **Última atualização:** 2026-07-07

---

## ASSUMPTIONS I'M MAKING

1. **Escopo isolado** — Esta spec cobre somente a home do HUB. Maquininhas, CRM e páginas institucionais serão tratadas em specs separadas.
2. **Identidade amarela Herocash** permanece como cor primária (decisão validada no spec pai).
3. **Tema claro** como base — glassmorphism e profundidade vêm de blur/sombras, não de dark mode completo.
4. **Conteúdo derivado de fontes existentes** — `hub-products.ts`, `company.ts`, `plans/rates.ts`, `crm-content.ts`. Copy novo só onde não houver dado.
5. **ProductCards voltam para a home** — hoje estão só em `/produtos`; a home precisa ser o ponto de descoberta dos produtos.
6. **Splash screen** aparece **uma vez por sessão** (sessionStorage), não em toda navegação interna.
7. **Animações** via CSS + `tailwindcss-animate` + Intersection Observer; **framer-motion só se necessário** (evitar dependência extra na v1).
8. **Breakpoints de referência:** 375px (mobile), 768px (tablet), 1280px+ (desktop) — herdado do spec pai.
9. **Performance:** LCP < 2.5s; splash não bloqueia renderização crítica além de ~1.2s; `prefers-reduced-motion` respeitado.
10. **Imagens** em `/public/images/` já existentes no deploy (model-01.png, payment.png, logo-full.png) — não criar assets novos nesta fase.

→ **Corrija agora ou seguimos com estas premissas.**

---

## Objective

Transformar a home do HUB de uma landing institucional básica em uma **experiência de descoberta de produtos** moderna, fluida e mobile-first — inspirada em Airbnb (storytelling visual), Nubank/InfinitePay (fintech premium), Apple (tipografia e hierarquia) e glassmorphism sutil (nav, cards, overlays).

### Usuários

| Persona | Objetivo na home |
|---------|------------------|
| Visitante novo | Entender em 10s o que a Herocash oferece e para quem |
| Comerciante | Ver destaque de maquininhas (taxas, parcelamento) e ir ao subdomínio |
| Empresário | Ver destaque do CRM Herocash e ir ao subdomínio |
| Mobile | Navegar, rolar e converter sem fricção |

### User Stories

1. **Como visitante**, quero ver na home os dois produtos com contexto suficiente (benefícios, números) para decidir qual explorar.
2. **Como visitante**, quero uma primeira impressão premium (splash + hero) que transmita confiança de fintech.
3. **Como usuário mobile**, quero scroll fluido, CTAs acessíveis e cards legíveis em 375px.
4. **Como visitante**, quero animações suaves que guiem o olhar sem distrair ou travar a página.

### Estado atual (baseline)

```
HubPage
├── HubHero          → texto centralizado, CTA para /produtos
├── StatsSection     → 2 métricas estáticas
└── HubAboutSection  → sobre + imagem

NÃO renderizado na home (mas existe):
├── ProductCards     → em /produtos
└── HubContactSection
```

---

## Tech Stack

| Item | Versão / nota |
|------|----------------|
| Next.js | 16.x (App Router) |
| React | 19.x |
| Tailwind CSS | 3.4 + `tailwindcss-animate` |
| Fontes | Geist Sans (já no layout) |
| Ícones | lucide-react |
| Dados | `src/data/*` (fonte única) |

**Dependência opcional (Fase 2):** `framer-motion` — só se animações CSS não atingirem fluidez desejada em scroll-stagger e splash.

---

## Commands

```bash
# Desenvolvimento local (home via rewrite do middleware ou /hub)
npm run dev

# Build de produção
npm run build

# Lint
npm run lint

# Verificar home no browser
open http://localhost:3000/hub
# ou com host simulado (se configurado): herocashbrasil.local
```

---

## Project Structure

```
src/
├── app/(sites)/hub/
│   └── page.tsx                    → Composição das seções da home
├── components/hub/
│   ├── home-topbar.tsx             → Nav (glassmorphism na v2 desta spec)
│   ├── hub-sections.tsx            → Hero, ProductCards (expandir)
│   ├── contact-section.tsx         → About + Contact
│   ├── hub-splash.tsx              → [NOVO] Splash de marca
│   ├── hub-product-highlights.tsx  → [NOVO] Teasers por produto
│   └── hub-value-props.tsx         → [NOVO] Por que Herocash
├── components/stats-section.tsx    → Modernizar + animação de contagem
├── data/
│   ├── hub-products.ts             → Estender com highlights/bullets
│   └── hub-home-content.ts         → [NOVO] Copy específico da home
├── hooks/
│   └── use-in-view.ts              → [NOVO] Trigger de animações on-scroll
└── app/globals.css                 → Tokens glass, keyframes splash

docs/specs/
└── hub-home.md                     → Este documento
```

---

## Code Style

Convenções alinhadas ao codebase existente:

```tsx
// Seção server-first; animação isolada em client components pequenos
export function HubHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-50/80 to-background" />
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <p className="text-sm uppercase tracking-wider font-semibold text-yellow-600">
          Ecossistema Herocash Brasil
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
          Soluções para impulsionar o seu negócio
        </h1>
      </div>
    </section>
  )
}
```

- **Naming:** `Hub*` para componentes da home; dados em `hub-*.ts`
- **Classes:** Tailwind utilitárias; glass via `backdrop-blur-xl bg-white/70 border border-white/20`
- **Animações:** `data-[state=visible]:animate-in` ou classes `.in-view` toggled por hook
- **Acessibilidade:** `prefers-reduced-motion`, `aria-label` em CTAs, contraste WCAG AA
- **Imagens:** `next/image` com `priority` só no hero/splash

---

## Design Direction

### Referências traduzidas para Herocash

| Inspiração | O que absorver | O que evitar |
|------------|----------------|--------------|
| **Airbnb** | Cards grandes com imagem, storytelling por scroll, whitespace generoso | Layout genérico de busca |
| **Nubank / InfinitePay** | Tipografia bold, confiança fintech, micro-interações nos CTAs | Roxo como cor primária |
| **Apple** | Hierarquia clara, poucos elementos, fotos com respiro | Minimalismo extremo sem CTAs |
| **Glassmorphism** | Topbar e cards com `backdrop-blur`, bordas sutis | Excesso de transparência (ilegível) |

### Tokens visuais propostos

```css
/* globals.css — adições */
--hero-glow: 45 100% 51% / 0.15;        /* amarelo suave */
--glass-bg: 0 0% 100% / 0.72;
--glass-border: 0 0% 100% / 0.25;
--section-spacing: 5rem;                 /* py-20 mobile, py-28 desktop */
```

### Paleta

- **Primária:** `yellow-400` / `yellow-500` (CTAs, destaques)
- **Neutros:** `gray-50` → `gray-900` (fundos e texto)
- **Glass:** branco 70–85% opacity + blur 12–24px
- **Gradientes:** `from-yellow-50/80 to-background` no hero; overlays escuros nos cards de produto

---

## Arquitetura da Página (wireframe lógico)

```
┌─────────────────────────────────────────┐
│  SPLASH (1x/sessão, ~1s)                │
│  Logo Herocash + fade out               │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  TOPBAR (sticky, glass on scroll)       │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  HERO                                   │
│  Headline + sub + 2 CTAs                │
│  (primário: scroll produtos | sec: WA)  │
│  Visual: imagem/gráfico sutil           │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  STATS (animados on-scroll)             │
│  +2.5 bi movimentados | +4.050 clientes │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  PRODUTOS — cards grandes (ProductCards)│
│  Maquininhas | CRM Herocash             │
│  + bullets por produto                  │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  HIGHLIGHTS POR PRODUTO                 │
│  Maquininhas: PIX 0,56%, 18x, app       │
│  CRM: IA, chatbot, pipeline             │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  POR QUE HEROCASH (3–4 value props)     │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  SOBRE (HubAboutSection modernizado)    │
└─────────────────────────────────────────┘
┌─────────────────────────────────────────┐
│  CONTATO (HubContactSection)            │
└─────────────────────────────────────────┘
│  FOOTER (já global)                     │
└─────────────────────────────────────────┘
```

---

## Conteúdo — Produtos na Home

### Dados a estender em `hub-products.ts`

```ts
export interface HubProduct {
  // ...campos existentes
  highlights: string[]      // 3 bullets para card e seção highlight
  statLabel?: string        // ex: "PIX a partir de 0,56%"
  statValue?: string
}
```

### Maquininhas — highlights sugeridos (fonte: `plans/rates.ts`)

- PIX a partir de **0,56%**
- Parcelamento em até **18x**
- Recebimento rápido e app Herocash

### CRM Herocash — highlights sugeridos (fonte: `crm-content.ts`)

- Agente de **IA** no WhatsApp
- Central de atendimento **multicanal**
- **Pipeline** e automações integradas

### Value props (nova seção)

1. **Tecnologia de ponta** — Fintech com soluções integradas
2. **Atendimento humano** — Time ágil e transparente
3. **Ecossistema completo** — Pagamentos + gestão de vendas
4. **Confiança comprovada** — +2,5 bi movimentados, +4.050 clientes

---

## Splash Screen (extra)

### Comportamento

| Aspecto | Decisão proposta |
|---------|------------------|
| Quando | Primeira visita da **sessão** ao HUB |
| Duração | ~800ms animação + ~400ms fade out = **~1.2s total** |
| Conteúdo | Logo Herocash centralizado, fundo amarelo/branco |
| Skip | Clique ou tecla ESC encerra imediatamente |
| Acessibilidade | `prefers-reduced-motion`: splash ≤ 300ms ou omitido |
| Implementação | Client component em `layout` ou wrapper só do hub |
| Persistência | `sessionStorage.setItem('herocash-splash-seen', '1')` |

### Animação proposta

1. Fundo fade-in (branco → amarelo suave)
2. Logo scale 0.9 → 1.0 + opacity 0 → 1
3. Fade out da overlay revelando a home

---

## Animações e Transições

### Níveis

| Nível | Onde | Técnica |
|-------|------|---------|
| **Micro** | Hover em cards, botões | `transition-all duration-300`, scale/translate |
| **Scroll reveal** | Seções abaixo do fold | Intersection Observer + `animate-in fade-in slide-in-from-bottom-4` |
| **Contadores** | Stats | `requestAnimationFrame` ou CSS stepped (sem lib) |
| **Splash** | Entrada | CSS keyframes `@keyframes splash-logo` |
| **Nav** | Scroll > 50px | `backdrop-blur-xl bg-white/80 shadow-sm transition` |

### Regras

- Duração padrão: **300–500ms**; easing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Stagger entre cards: **100ms**
- Nunca animar `width`/`height` (usar `transform`)
- `@media (prefers-reduced-motion: reduce)` desativa animações não essenciais

---

## Responsividade

### Mobile (375px)

- Hero: tipografia `text-4xl`, padding `px-4`, CTAs full-width empilhados
- ProductCards: 1 coluna, `min-h-[280px]`, texto legível (mín. 16px body)
- Topbar: menu hamburger existente; garantir touch targets ≥ 44px
- Stats: coluna única, ícones menores

### Tablet (768px)

- ProductCards: 2 colunas
- Hero: pode usar layout 2 colunas (texto + visual)
- Highlights: grid 2 colunas

### Desktop (1280px+)

- `max-w-[1350px]` container (padrão atual)
- Hero com visual lateral
- Animações parallax leve no hero (opcional, CSS only)

### Checklist manual

- [ ] Sem scroll horizontal em 375px
- [ ] CTAs não sobrepostos pelo WhatsApp flutuante
- [ ] Imagens com `sizes` corretos
- [ ] Menu mobile fecha ao navegar

---

## Testing Strategy

| Nível | O quê | Como |
|-------|-------|------|
| **Build** | Sem erros TS/Next | `npm run build` |
| **Lint** | Padrões | `npm run lint` |
| **Visual manual** | 375 / 768 / 1280 | Chrome DevTools device toolbar |
| **A11y** | Contraste, reduced motion | Lighthouse + toggle OS |
| **Performance** | LCP, CLS | Lighthouse mobile |
| **Splash** | 1x por sessão | Abrir aba anônima, recarregar, navegar internamente |

**Testes automatizados:** fora do escopo desta fase (não há suite e2e no projeto).

---

## Boundaries

### Always

- Reutilizar `hubProducts`, `company`, taxas e `crmContent` como fonte de verdade
- Manter amarelo Herocash como identidade
- Mobile-first em todo componente novo
- Respeitar `prefers-reduced-motion`
- Componentes client apenas onde necessário (splash, animações, topbar scroll)

### Ask first

- Adicionar `framer-motion` ou outra dependência de animação
- Novas imagens/fotos profissionais (stock ou produção)
- Alterar copy institucional aprovado em `company.ts`
- Splash em **toda** carga (não só 1x/sessão)
- Dark mode na home

### Never

- Hardcodar taxas ou números que existem em `src/data/`
- Bloquear interação > 2s no splash sem skip
- Remover `/produtos` (página dedicada permanece)
- Quebrar SEO metadata da home

---

## Success Criteria

### Conteúdo

- [ ] Home exibe **ProductCards** com highlights por produto
- [ ] Seção de **highlights** com dados reais (taxa PIX, features CRM)
- [ ] Seção **Por que Herocash** com 3–4 value props
- [ ] **HubContactSection** renderizada na home
- [ ] CTAs levam aos subdomínios corretos e WhatsApp

### Design

- [ ] Hero com hierarquia visual premium (tipografia, gradiente, CTA duplo)
- [ ] Topbar com efeito **glass** ao rolar
- [ ] Cards de produto com glass overlay sutil e hover fluido
- [ ] Espaçamento consistente entre seções

### Animações

- [ ] Splash de marca funcional (1x/sessão, skip, reduced-motion)
- [ ] Seções revelam ao entrar no viewport
- [ ] Stats com animação de entrada (contador opcional v1.1)
- [ ] Transições ≤ 500ms, sem jank perceptível

### Responsividade

- [ ] Layout correto em 375px, 768px, 1280px
- [ ] Sem overflow horizontal mobile
- [ ] Menu mobile funcional

### Técnico

- [ ] `npm run build` passa
- [ ] Lighthouse Performance ≥ 85 mobile (aspiracional)
- [ ] LCP < 2.5s com splash

---

## Decisões Validadas (2026-07-07)

| Tópico | Decisão |
|--------|---------|
| Splash | 1x por sessão (sessionStorage) |
| Hero | Split texto + imagem (Apple/Airbnb) |
| Tom visual HUB | Bold/colorido |
| Tom visual produtos (subdomínios) | Clean/branco — fora do escopo desta spec |
| Copy | Derivar de `src/data/` inicialmente; tom empreendedor, criativo e direto |
| Topbar glass | Apenas na home do HUB |
| Contadores animados | v1.1 (v1: fade-in on scroll) |

## Perguntas para incremento de conteúdo (futuro)

1. Existe **depoimento ou case** de cliente que possamos destacar na home?
2. Há **números atualizados** além de +2,5 bi e +4.050 clientes?
3. Qual o **diferencial #1** da Herocash vs concorrentes (em uma frase)?
4. Maquininhas: qual **plano ou taxa** merece destaque principal no card?
5. CRM: qual **feature** converte mais leads hoje (IA, chatbot, pipeline)?
6. Há **fotos reais** de clientes/equipe para substituir stock?
7. Existe **vídeo institucional** para uma futura seção media?
8. Qual **CTA principal** da home: WhatsApp, explorar produtos ou ambos iguais?

---

## Próximos passos (após aprovação)

1. **Fase 2 — Plan:** ordem de implementação (splash → hero → dados → seções → polish)
2. **Fase 3 — Tasks:** tarefas de ~5 arquivos cada com critérios de aceite
3. **Fase 4 — Implement:** execução incremental
