# US-005 — Listagem/grid de cards de projetos

**Prioridade:** Alta  
**Status:** Não iniciado

---

## Descrição

Como **visitante**, eu quero **ver todos os sistemas/projetos organizados em uma grade de cards**, para que **eu possa navegar e comparar facilmente os diferentes projetos disponíveis**.

---

## Critérios de aceite

- [ ] Componente `ProjectGrid` criado em `src/components/sections/ProjectGrid.tsx`
- [ ] Arquivo de dados `src/data/projects.ts` exportando array de `Project[]`
- [ ] Grid renderiza um `ProjectCard` para cada item da lista
- [ ] Título da seção como `<h2>` (ex.: "Projetos" ou "Sistemas")
- [ ] Layout em grid responsivo:
  - Desktop (≥1024px): 2 ou 3 colunas
  - Tablet (≥768px): 2 colunas
  - Mobile: 1 coluna
- [ ] Seção posicionada na página inicial abaixo de `AboutProjectSection`
- [ ] Lista vazia: exibir mensagem amigável ("Nenhum projeto publicado ainda") em vez de grid vazio
- [ ] Pelo menos 1 projeto de exemplo no arquivo de dados para validação visual
- [ ] Keys únicas (`project.id`) ao mapear a lista

---

## Estrutura de dados

```typescript
// src/data/projects.ts
import { Project } from '@/types/project';

export const projects: Project[] = [
  // ... projetos
];
```

---

## Dependências

- [US-001](US-001-setup-nextjs.md) — Setup inicial
- [US-004](US-004-card-projeto.md) — Componente ProjectCard
- [US-003](US-003-secao-projeto-guarda-chuva.md) — Ordem visual na página

---

## Referências

- Wireframe validado — seção 3 (lista de cards)
