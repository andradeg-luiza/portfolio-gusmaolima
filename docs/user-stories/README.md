# User Stories — gusmaolima-portfolio

Índice de todas as histórias de usuário do projeto. Cada US descreve um entregável testável com critérios de aceite claros.

**Legenda de status:** Não iniciado · Em andamento · Concluído

---

## Visão geral

| ID | Título | Prioridade | Status |
|----|--------|------------|--------|
| [US-001](US-001-setup-nextjs.md) | Setup inicial Next.js | Alta | Concluído |
| [US-002](US-002-hero-section.md) | Hero section (foto + currículo) | Alta | Concluído |
| [US-003](US-003-secao-projeto-guarda-chuva.md) | Seção projeto guarda-chuva | Alta | Concluído |
| [US-004](US-004-card-projeto.md) | Card de projeto reutilizável | Alta | Não iniciado |
| [US-005](US-005-listagem-projetos.md) | Listagem/grid de projetos | Alta | Não iniciado |
| [US-006](US-006-responsividade-mobile.md) | Responsividade mobile | Alta | Não iniciado |
| [US-007](US-007-seo-basico.md) | SEO básico | Média | Não iniciado |
| [US-008](US-008-deploy-vercel.md) | Deploy Vercel + domínio customizado | Alta | Não iniciado |
| [US-009](US-009-testes-unitarios.md) | Testes unitários dos componentes | Média | Não iniciado |

---

## Ordem de implementação sugerida

```
US-001 → US-002 → US-003 → US-004 → US-005 → US-006 → US-007 → US-009 → US-008
         └────────────────── testes co-localizados (US-009) ──────────────────┘
```

- **US-001** é pré-requisito de todas as demais.
- **US-002 a US-005** compõem a página principal na ordem do wireframe.
- **US-006** pode ser feita incrementalmente durante US-002–005 (mobile-first).
- **US-007** e **US-008** podem ser paralelizadas após a página funcional.
- **US-009** idealmente acompanha cada componente criado; a US consolida cobertura mínima.

---

## Como usar este índice

1. Antes de iniciar uma US, leia o arquivo correspondente e confirme critérios de aceite.
2. Ao concluir, atualize o **Status** no arquivo da US e neste índice.
3. Atualize também o [Estado Atual](../ESTADO_ATUAL.md) com o progresso e decisões tomadas.
