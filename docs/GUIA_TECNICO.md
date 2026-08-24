# Guia Técnico — gusmaolima-portfolio

Documento de referência para desenvolvimento, revisão de código e onboarding de colaboradores (humanos ou IA).

---

## Stack e justificativas

| Tecnologia | Papel | Por que esta escolha |
|------------|-------|----------------------|
| **Next.js 15+ (App Router)** | Framework React full-stack | Roteamento por arquivos, SSR/SSG nativo, otimização de imagens, excelente integração com Vercel e SEO out-of-the-box |
| **TypeScript** | Linguagem | Tipagem estática reduz erros em tempo de desenvolvimento; melhora autocomplete e refatoração |
| **Tailwind CSS** | Estilização | Utility-first acelera prototipagem, mantém CSS co-localizado e facilita responsividade sem arquivos CSS separados |
| **Vitest** | Runner de testes | Compatível com Vite/ESM, API similar ao Jest, execução rápida e integração nativa com TypeScript |
| **React Testing Library** | Testes de componentes | Testa comportamento do ponto de vista do usuário, alinhado às boas práticas de acessibilidade |
| **Vercel** | Hospedagem e CI/CD | Deploy zero-config para Next.js, preview por PR, domínio customizado e CDN global |

> **Nota:** Os sistemas individuais listados no portfólio terão stacks próprias, definidas caso a caso. Este guia aplica-se exclusivamente ao site do portfólio.

---

## Documentação oficial

| Tecnologia | Link |
|------------|------|
| Next.js | https://nextjs.org/docs |
| React | https://react.dev |
| TypeScript | https://www.typescriptlang.org/docs |
| Tailwind CSS | https://tailwindcss.com/docs |
| Vercel | https://vercel.com/docs |
| Vitest | https://vitest.dev |
| Testing Library (React) | https://testing-library.com/docs/react-testing-library/intro |

---

## Estrutura de pastas (`/src`)

```
src/
├── app/                    # App Router — páginas, layouts, metadata
│   ├── layout.tsx          # Layout raiz (fontes, meta globais)
│   ├── page.tsx            # Página inicial (composição das seções)
│   └── globals.css         # Diretivas Tailwind + estilos globais mínimos
├── components/
│   ├── ui/                 # Componentes genéricos reutilizáveis (Button, Card base)
│   ├── layout/             # Header, Footer, Section wrapper
│   └── sections/           # Hero, AboutProject, ProjectGrid
├── data/
│   └── projects.ts         # Lista estática de projetos (até eventual CMS)
├── lib/
│   └── utils.ts            # Funções utilitárias puras
├── types/
│   └── project.ts          # Interfaces compartilhadas (Project, etc.)
└── test/
    └── setup.ts            # Configuração global do Vitest (matchers, cleanup)
```

**Regras:**

- Páginas e rotas ficam exclusivamente em `app/`.
- Componentes de seção (`Hero`, `ProjectGrid`) vivem em `components/sections/`.
- Dados estáticos (lista de projetos) ficam em `data/` — separados da UI para facilitar testes e futura migração para CMS.
- Não criar pasta `pages/` (legado do Pages Router).

---

## Padrões de código

### Nomenclatura

| Elemento | Convenção | Exemplo |
|----------|-----------|---------|
| Componentes React | PascalCase | `ProjectCard.tsx` |
| Arquivos de componente | PascalCase (mesmo nome do componente) | `HeroSection.tsx` |
| Hooks customizados | camelCase com prefixo `use` | `useMediaQuery.ts` |
| Funções utilitárias | camelCase | `formatProjectUrl.ts` |
| Tipos/Interfaces | PascalCase | `Project`, `ProjectCardProps` |
| Constantes | UPPER_SNAKE_CASE | `SITE_URL` |
| Pastas | kebab-case ou lowercase | `components/sections/` |

### Componentes

- Preferir **function components** com tipagem explícita de props via interface (`ProjectCardProps`).
- Um componente por arquivo; export nomeado (evitar `export default` exceto em `page.tsx` e `layout.tsx`, exigidos pelo App Router).
- Props opcionais com `?`; valores padrão na desestructuring, não dentro do corpo.
- Manter componentes pequenos: se passar de ~150 linhas, extrair subcomponentes.

### TypeScript

- Modo `strict` habilitado.
- Evitar `any`; usar `unknown` quando o tipo for incerto.
- Tipos de domínio centralizados em `src/types/`.

### Tailwind CSS

- Usar classes utilitárias diretamente no JSX.
- Extrair combinações repetidas com `@apply` apenas em casos excepcionais (preferir componentes).
- Mobile-first: estilos base para mobile, breakpoints `sm:`, `md:`, `lg:` para telas maiores.
- Paleta e espaçamentos consistentes — definir tokens em `tailwind.config.ts` se necessário (cores da marca, fontes).

### Acessibilidade

- Imagens com `alt` descritivo.
- Links externos com `rel="noopener noreferrer"` e `target="_blank"`.
- Hierarquia semântica de headings (`h1` único na página, `h2` por seção).
- Contraste de cores conforme WCAG AA.

### Commits

Seguir [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(escopo opcional): descrição curta no imperativo

feat(hero): adiciona seção hero com foto de perfil
fix(project-card): corrige link quebrado do README
docs: atualiza estado atual do projeto
test(hero): adiciona testes de renderização
chore: atualiza dependências
```

Tipos comuns: `feat`, `fix`, `docs`, `test`, `refactor`, `chore`, `style`.

---

## Execução

### Instalação

```bash
git clone https://github.com/<usuario>/gusmaolima-portfolio.git
cd gusmaolima-portfolio
npm install
```

### Desenvolvimento

```bash
npm run dev
# http://localhost:3000
```

### Build de produção

```bash
npm run build    # Gera output otimizado em .next/
npm run start    # Serve o build localmente (porta 3000)
```

### Lint e formatação

```bash
npm run lint     # ESLint (Next.js preset)
```

> Scripts exatos (`test`, `test:watch`, `test:coverage`) serão definidos no `package.json` durante a US-001.

---

## Estratégia de testes

### O que testar

| Camada | O que incluir | O que excluir |
|--------|---------------|---------------|
| **Componentes de UI** | Renderização de conteúdo, presença de links/imagens, props condicionais | Estilos visuais exatos (snapshots de CSS), detalhes de implementação interna |
| **Funções utilitárias** | Entrada/saída, edge cases, formatação de URLs | — |
| **Páginas (`page.tsx`)** | Smoke test: renderiza sem erro, contém seções esperadas | Lógica de negócio (delegar aos componentes) |
| **Integração E2E** | Fora do escopo inicial | Playwright/Cypress pode ser adicionado futuramente |

### Componentes prioritários para testes

1. `ProjectCard` — links corretos (README, prompts), imagem com alt, resumo visível
2. `ProjectGrid` — renderiza N cards a partir da lista de dados
3. `HeroSection` — nome, foto e texto de currículo presentes
4. `AboutProjectSection` — texto do projeto guarda-chuva renderizado

### Ferramentas

- **Vitest** — runner e assertions
- **@testing-library/react** — render e queries
- **@testing-library/jest-dom** — matchers extras (`toBeInTheDocument`, etc.)
- **jsdom** — ambiente DOM para testes

### Comandos

```bash
npm run test              # Execução única
npm run test:watch        # Watch mode
npm run test:coverage     # Relatório em coverage/
```

### Meta de cobertura

- **Mínimo inicial:** 70% de cobertura de statements nos componentes em `components/sections/` e funções em `lib/`.
- Não perseguir 100% — foco em comportamentos críticos e regressões.

### Exemplo de estrutura de teste

```
src/
├── components/
│   └── sections/
│       ├── ProjectCard.tsx
│       └── ProjectCard.test.tsx   # Co-localizado com o componente
```

---

## Deploy e ambientes

| Ambiente | Branch | URL | Trigger |
|----------|--------|-----|---------|
| Produção | `main` | https://gusmaolima.com | Push/merge em `main` |
| Preview | feature branches / PRs | `*.vercel.app` | Abertura/atualização de PR |

Configuração detalhada: [US-008 — Deploy Vercel](user-stories/US-008-deploy-vercel.md).

---

## Referências internas

- [User Stories](user-stories/README.md)
- [Estado Atual do Projeto](ESTADO_ATUAL.md)
