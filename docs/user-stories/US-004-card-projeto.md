# US-004 — Card de projeto reutilizável

**Prioridade:** Alta  
**Status:** Não iniciado

---

## Descrição

Como **visitante**, eu quero **ver cada sistema representado por um card com imagem, resumo e links para documentação**, para que **eu possa explorar rapidamente os projetos e acessar README e prompts de cada um**.

---

## Critérios de aceite

- [ ] Componente `ProjectCard` criado em `src/components/sections/ProjectCard.tsx` (ou `components/ui/` se preferir reutilização mais ampla)
- [ ] Interface `Project` definida em `src/types/project.ts` com campos:
  - `id: string`
  - `title: string`
  - `summary: string` (resumo curto, 1–2 frases)
  - `imageUrl: string` (caminho local ou URL externa)
  - `imageAlt: string`
  - `readmeUrl: string` (link para repositório/README)
  - `promptsUrl: string` (link para prompts utilizados)
- [ ] Card exibe:
  - Imagem do sistema (via `next/image`, proporção consistente)
  - Título do projeto
  - Resumo curto
  - Link "Ver README" apontando para `readmeUrl` (abre em nova aba)
  - Link "Ver prompts" apontando para `promptsUrl` (abre em nova aba)
- [ ] Links externos com `rel="noopener noreferrer"` e `target="_blank"`
- [ ] Card aceita props tipadas (`ProjectCardProps`)
- [ ] Estilos Tailwind: borda/sombra sutil, hover state nos links e/ou card
- [ ] Componente funciona de forma isolada (pode ser renderizado com dados mock em Storybook ou teste)

---

## Exemplo de dados

```typescript
{
  id: "exemplo-sistema",
  title: "Sistema Exemplo",
  summary: "Uma ferramenta de demonstração criada com IA para ilustrar o portfólio.",
  imageUrl: "/images/projects/exemplo.png",
  imageAlt: "Screenshot do Sistema Exemplo",
  readmeUrl: "https://github.com/usuario/exemplo-sistema",
  promptsUrl: "https://github.com/usuario/exemplo-sistema/tree/main/docs/prompts"
}
```

---

## Dependências

- [US-001](US-001-setup-nextjs.md) — Setup inicial

---

## Referências

- Wireframe validado — estrutura de cada card
- [Guia Técnico — Nomenclatura](../GUIA_TECNICO.md#nomenclatura)
