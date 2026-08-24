# US-002 — Hero section (foto + currículo)

**Prioridade:** Alta  
**Status:** Não iniciado

---

## Descrição

Como **visitante do portfólio**, eu quero **ver uma seção inicial com a foto de perfil da autora e um resumo do seu currículo**, para que **eu entenda rapidamente quem ela é e qual é sua formação/experiência**.

---

## Critérios de aceite

- [ ] Componente `HeroSection` criado em `src/components/sections/HeroSection.tsx`
- [ ] Exibe foto de perfil com `alt` descritivo (ex.: "Foto de perfil de Gusmão Lima")
- [ ] Foto otimizada via componente `next/image` (width/height definidos, lazy loading)
- [ ] Nome da autora visível como `<h1>` (único h1 da página)
- [ ] Texto de currículo resumido (2–4 parágrafos ou lista de destaques: formação, experiência, skills principais)
- [ ] Seção integrada na página inicial (`page.tsx`) como primeiro bloco visível
- [ ] Layout desktop: foto e texto lado a lado ou empilhados de forma harmoniosa
- [ ] Estilização com Tailwind CSS, visual limpo e profissional
- [ ] Conteúdo textual pode vir de constante em `src/data/profile.ts` ou similar (separado do componente)

---

## Conteúdo esperado (estrutura)

```
[Foto]  Nome completo
        Breve tagline (ex.: "Desenvolvedora que cria sistemas com IA")
        
        Parágrafo(s) com:
        - Formação acadêmica
        - Experiência profissional relevante
        - Interesses/tecnologias principais
```

> Textos finais serão fornecidos pela autora; placeholders aceitáveis nesta fase.

---

## Dependências

- [US-001](US-001-setup-nextjs.md) — Setup inicial

---

## Referências

- Wireframe validado — seção 1 (topo)
- [Guia Técnico — Acessibilidade](../GUIA_TECNICO.md#acessibilidade)
