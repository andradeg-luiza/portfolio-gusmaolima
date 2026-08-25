# US-003 — Seção resumo do projeto guarda-chuva

**Prioridade:** Alta  
**Status:** Concluído

---

## Descrição

Como **visitante interessado em IA aplicada**, eu quero **ler uma seção que explica o propósito deste portfólio e a abordagem de criar sistemas com auxílio de IA**, para que **eu compreenda a filosofia do projeto e o valor da documentação pública (prompts, READMEs)**.

---

## Critérios de aceite

- [x] Componente `AboutProjectSection` criado em `src/components/sections/AboutProjectSection.tsx`
- [x] Título da seção como `<h2>` (ex.: "Sobre este projeto" ou "Criando com IA")
- [x] Texto explicando:
  - O que é o projeto guarda-chuva (portfólio de sistemas criados com IA)
  - Por que documentar prompts e processos publicamente
  - O que o visitante encontrará em cada card de projeto (README, prompts, resumo)
- [x] Seção posicionada na página inicial **abaixo** da Hero e **acima** da listagem de projetos
- [x] Conteúdo em arquivo de dados separado (`src/data/about.ts` ou similar)
- [x] Visualmente distinta da Hero (pode usar fundo alternado, borda ou ícone)
- [x] Comprimento adequado: 1–3 parágrafos, linguagem clara e acessível

---

## Conteúdo sugerido (rascunho)

> Este portfólio reúne pequenos sistemas e aplicações que desenvolvo com auxílio de inteligência artificial, usando o Cursor como parceiro de codificação. Cada projeto é documentado de forma transparente: você encontrará o README completo, os prompts utilizados na criação e um resumo do que o sistema faz. O objetivo é compartilhar o processo, não apenas o resultado final.

---

## Dependências

- [US-001](US-001-setup-nextjs.md) — Setup inicial
- [US-002](US-002-hero-section.md) — Hero (ordem visual na página)

---

## Referências

- Wireframe validado — seção 2 (resumo do projeto guarda-chuva)
