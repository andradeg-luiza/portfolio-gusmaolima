# US-009 — Testes unitários dos componentes principais

**Prioridade:** Média  
**Status:** Não iniciado

---

## Descrição

Como **desenvolvedora**, eu quero **ter testes unitários cobrindo os componentes principais do portfólio**, para que **eu possa refatorar e adicionar features com confiança de que não quebro comportamentos existentes**.

---

## Critérios de aceite

### Configuração

- [ ] Vitest executando testes co-localizados (`*.test.tsx` ao lado de `*.tsx`)
- [ ] `src/test/setup.ts` importa `@testing-library/jest-dom` e faz cleanup após cada teste
- [ ] `npm run test` passa com zero falhas
- [ ] `npm run test:coverage` gera relatório; cobertura ≥70% em `components/sections/` e `lib/`

### Testes por componente

#### `HeroSection.test.tsx`

- [ ] Renderiza o nome da autora
- [ ] Renderiza texto de currículo (ou placeholder)
- [ ] Imagem de perfil presente com `alt` correto

#### `AboutProjectSection.test.tsx`

- [ ] Renderiza título da seção
- [ ] Renderiza parágrafo(s) explicativos do projeto guarda-chuva

#### `ProjectCard.test.tsx`

- [ ] Renderiza título, resumo e imagem do projeto
- [ ] Link "Ver README" aponta para URL correta e abre em nova aba
- [ ] Link "Ver prompts" aponta para URL correta e abre em nova aba
- [ ] Imagem possui atributo `alt` correto

#### `ProjectGrid.test.tsx`

- [ ] Renderiza N cards quando recebe lista de N projetos
- [ ] Exibe mensagem quando lista está vazia
- [ ] Renderiza título da seção

### Testes de utilitários (se existirem)

- [ ] Funções em `src/lib/` com testes para entradas válidas e edge cases

---

## Abordagem recomendada

1. **Co-localização:** criar `ComponentName.test.tsx` junto ao componente
2. **Dados mock:** usar objetos `Project` e `Profile` fictícios nos testes — não depender de arquivos em `data/`
3. **Queries acessíveis:** preferir `getByRole`, `getByText`, `getByAltText` em vez de seletores de classe CSS
4. **Desenvolvimento incremental:** escrever teste ao criar cada componente (US-002 a US-005), consolidar cobertura nesta US

---

## Exemplo de estrutura

```
src/components/sections/
├── HeroSection.tsx
├── HeroSection.test.tsx
├── AboutProjectSection.tsx
├── AboutProjectSection.test.tsx
├── ProjectCard.tsx
├── ProjectCard.test.tsx
├── ProjectGrid.tsx
└── ProjectGrid.test.tsx
```

---

## Dependências

- [US-001](US-001-setup-nextjs.md) — Vitest configurado
- [US-002](US-002-hero-section.md) — HeroSection
- [US-003](US-003-secao-projeto-guarda-chuva.md) — AboutProjectSection
- [US-004](US-004-card-projeto.md) — ProjectCard
- [US-005](US-005-listagem-projetos.md) — ProjectGrid

---

## Referências

- [Guia Técnico — Estratégia de testes](../GUIA_TECNICO.md#estratégia-de-testes)
- [Testing Library — Guiding Principles](https://testing-library.com/docs/guiding-principles)
