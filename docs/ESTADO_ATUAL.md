# Estado Atual do Projeto

> ⚠️ **Este arquivo deve ser atualizado a cada nova funcionalidade implementada ou decisão tomada.**

---

**Última atualização:** 24 de agosto de 2026

**Fase atual:** US-002 concluída — Hero section com foto, bio e links; próxima etapa: seção sobre o projeto (US-003)

---

## O que já foi feito

- [x] Definição do escopo e wireframe visual validado
- [x] Escolha da stack (Next.js, TypeScript, Tailwind, Vitest, Vercel)
- [x] Criação do `README.md` raiz com visão geral e instruções de setup
- [x] Criação do `docs/GUIA_TECNICO.md` com padrões, estrutura e estratégia de testes
- [x] Criação das User Stories em `docs/user-stories/` (9 histórias + índice)
- [x] Criação deste documento de estado atual
- [x] **US-001** — Setup inicial Next.js (App Router, TypeScript, Tailwind CSS v3, Vitest, ESLint)
- [x] Estrutura de pastas em `src/` conforme Guia Técnico
- [x] Scripts `dev`, `build`, `start`, `lint`, `test`, `test:watch`, `test:coverage` configurados
- [x] `.env.example` e `.gitignore` padrão Next.js
- [x] **US-002** — Hero section com foto de perfil, nome, tagline, bio e links (LinkedIn, GitHub)
- [x] Conteúdo real em `src/data/profile.ts` e imagem em `public/images/profile.jpeg`
- [x] Testes unitários co-localizados em `HeroSection.test.tsx` (4 casos)

---

## O que está em andamento

_Nenhum item em andamento no momento._

---

## Próximos passos

Ordem sugerida, alinhada às User Stories:

1. **US-003** — Seção de resumo do projeto guarda-chuva
2. **US-004** — Componente reutilizável de card de projeto/sistema
3. **US-005** — Listagem/grid de cards de projetos
4. **US-006** — Responsividade mobile
5. **US-007** — SEO básico (meta tags, Open Graph, favicon)
6. **US-009** — Testes unitários dos componentes principais
7. **US-008** — Configuração de deploy no Vercel com domínio `gusmaolima.com`

> **Nota:** US-009 pode ser desenvolvida incrementalmente junto com US-003 a US-005 (testar cada componente ao criá-lo). A listagem acima coloca testes consolidados após as features, mas a abordagem co-localizada (teste junto ao componente) é preferível.

---

## Decisões técnicas tomadas

| Decisão | Justificativa |
|---------|---------------|
| Next.js App Router (não Pages Router) | Padrão atual do ecossistema Next.js; melhor suporte a layouts, metadata API e Server Components |
| Dados de projetos em arquivo estático (`data/projects.ts`) | Simplicidade para MVP; sem backend necessário; fácil migrar para CMS ou JSON remoto depois |
| Dados de perfil em `src/data/profile.ts` | Separa conteúdo da UI; facilita testes e futuras edições sem alterar componente |
| Vitest em vez de Jest | Melhor performance com ESM/TypeScript; API familiar |
| Tailwind CSS | Velocidade de desenvolvimento e consistência visual sem CSS modules |
| Deploy via Vercel + GitHub | Integração nativa com Next.js, preview deployments e domínio customizado simples |
| Um repositório por sistema listado no portfólio | Cada projeto tem README e prompts próprios; o portfólio apenas referencia links externos |
| Conteúdo em português | Site pessoal da autora; audiência principal falante de português |
| Scaffold manual (não `create-next-app`) | Diretório não vazio (`README.md`, `docs/`, `prototipo.pdf`) impedia inicialização automática; estrutura criada manualmente com equivalência funcional |
| Next.js 15.5 + React 19 | Versões estáveis atuais compatíveis com App Router e ESLint flat config |
| Tailwind CSS v3 (não v4) | Alinhado aos critérios da US-001 (`tailwind.config.ts` + `@tailwind` directives); v4 usa configuração CSS-first diferente |
| Fonte Geist via `next/font/google` | Padrão recomendado pelo Next.js; pendência #6 resolvida provisoriamente |
| ESLint ignore para `next-env.d.ts` | Arquivo gerado pelo Next.js dispara falso positivo `@typescript-eslint/triple-slash-reference` |
| HeroSection como Server Component | Sem interatividade; melhor performance; `next/image` com `priority` na foto acima da dobra |
| Mock de `next/image` nos testes | Vitest/jsdom não suporta Image Optimization nativamente; mock renderiza `<img>` simples |

---

## Pendências / dúvidas em aberto

| # | Pendência | Impacto |
|---|-----------|---------|
| 2 | Lista inicial de projetos/sistemas a exibir | Bloqueia dados reais na US-005; pode começar com 1–2 projetos de exemplo |
| 3 | Imagens/screenshots de cada sistema | Necessárias para os cards; definir dimensões padrão (sugestão: 16:9, mín. 800×450px) |
| 4 | Repositório GitHub — URL e visibilidade (público) | Necessário para US-008 (integração Vercel) |
| 5 | Configuração DNS do domínio `gusmaolima.com` | Responsabilidade da autora no registrador; Vercel fornece registros A/CNAME |
| 7 | Analytics (Vercel Analytics, Plausible, etc.) | Fora do escopo inicial; avaliar após launch |

---

## Histórico de atualizações

| Data | Alteração |
|------|-----------|
| 2026-08-24 | Criação inicial — documentação completa, fase pré-desenvolvimento |
| 2026-08-24 | US-001 concluída — setup Next.js 15, TypeScript strict, Tailwind v3, Vitest, ESLint; página placeholder funcional |
| 2026-08-24 | US-002 concluída — HeroSection com conteúdo real, foto, bio, links e 4 testes unitários |
