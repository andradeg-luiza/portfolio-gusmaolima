# US-001 — Setup inicial do projeto Next.js

**Prioridade:** Alta  
**Status:** Concluído

---

## Descrição

Como **desenvolvedora**, eu quero **ter a estrutura base do projeto Next.js configurada com TypeScript, Tailwind CSS e Vitest**, para que **eu possa começar a implementar as seções do portfólio sobre uma fundação sólida e padronizada**.

---

## Critérios de aceite

- [x] Projeto criado com Next.js (App Router) e TypeScript habilitado
- [x] Tailwind CSS instalado e configurado (`tailwind.config.ts`, `postcss.config.js`, diretivas em `globals.css`)
- [x] Estrutura de pastas conforme [Guia Técnico](../GUIA_TECNICO.md#estrutura-de-pastas-src): `src/app/`, `src/components/`, `src/data/`, `src/lib/`, `src/types/`, `src/test/`
- [x] Vitest + React Testing Library + jsdom configurados com arquivo `src/test/setup.ts`
- [x] Scripts no `package.json`: `dev`, `build`, `start`, `lint`, `test`, `test:watch`, `test:coverage`
- [x] ESLint configurado com preset do Next.js
- [x] Arquivo `.env.example` com `NEXT_PUBLIC_SITE_URL` documentada
- [x] Arquivo `.gitignore` incluindo `node_modules/`, `.next/`, `.env*.local`, `coverage/`
- [x] `npm run dev` inicia servidor em `http://localhost:3000` sem erros
- [x] `npm run build` completa com sucesso
- [x] `npm run test` executa (mesmo que ainda sem testes) sem erro de configuração
- [x] Página inicial (`src/app/page.tsx`) renderiza placeholder mínimo ("Em construção" ou similar)
- [x] Layout raiz (`src/app/layout.tsx`) com estrutura HTML semântica (`html`, `body`, `lang="pt-BR"`)

---

## Notas técnicas

- Usar `create-next-app` com flags: `--typescript --tailwind --eslint --app --src-dir`
- Versão Node.js recomendada: 20 LTS
- Não adicionar dependências desnecessárias nesta etapa (sem UI libraries externas)

---

## Dependências

Nenhuma (primeira US do projeto).

---

## Referências

- [Guia Técnico — Estrutura de pastas](../GUIA_TECNICO.md#estrutura-de-pastas-src)
- [Next.js — Getting Started](https://nextjs.org/docs/getting-started)
