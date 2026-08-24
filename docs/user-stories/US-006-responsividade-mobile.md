# US-006 — Responsividade mobile

**Prioridade:** Alta  
**Status:** Não iniciado

---

## Descrição

Como **visitante acessando pelo celular**, eu quero **que todo o site se adapte corretamente a telas pequenas**, para que **eu tenha uma experiência de leitura e navegação confortável em qualquer dispositivo**.

---

## Critérios de aceite

- [ ] Página utilizável sem scroll horizontal em viewports de 320px a 768px
- [ ] Hero section: foto e texto empilhados verticalmente em mobile; foto com tamanho proporcional (não estoura a largura)
- [ ] Seção About: texto com padding lateral adequado (mín. 16px)
- [ ] Grid de projetos: 1 coluna em mobile (`grid-cols-1`)
- [ ] Tipografia legível: tamanho mínimo de corpo ~16px; line-height confortável
- [ ] Links e áreas clicáveis com tamanho mínimo de toque (~44×44px onde aplicável)
- [ ] Imagens dos cards responsivas (width 100%, height auto ou aspect-ratio fixo)
- [ ] Testado manualmente nos breakpoints: 320px, 375px, 768px, 1024px, 1440px
- [ ] Abordagem mobile-first documentada no código (estilos base = mobile, breakpoints `md:`/`lg:` para desktop)

---

## Breakpoints Tailwind (referência)

| Prefixo | Largura mínima | Uso neste projeto |
|---------|----------------|-------------------|
| (base)  | 0px            | Mobile |
| `sm:`   | 640px          | Mobile grande |
| `md:`   | 768px          | Tablet |
| `lg:`   | 1024px         | Desktop |
| `xl:`   | 1280px         | Desktop largo |

---

## Dependências

- [US-002](US-002-hero-section.md) — Hero section
- [US-003](US-003-secao-projeto-guarda-chuva.md) — Seção About
- [US-004](US-004-card-projeto.md) — ProjectCard
- [US-005](US-005-listagem-projetos.md) — ProjectGrid

---

## Notas

Esta US pode ser implementada incrementalmente durante US-002 a US-005 (mobile-first). Os critérios acima servem como checklist final de validação.

---

## Referências

- [Guia Técnico — Tailwind CSS](../GUIA_TECNICO.md#tailwind-css)
- [Tailwind — Responsive Design](https://tailwindcss.com/docs/responsive-design)
