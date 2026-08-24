# gusmaolima-portfolio

Site pessoal de portfólio de **Luiza Gusmão de Andrade Lima**, publicado em [gusmaolima.com](https://gusmaolima.com). O projeto funciona como vitrine dos pequenos sistemas e aplicações criados com auxílio de IA (via Cursor), cada um acompanhado de documentação pública: README do repositório, prompts utilizados na criação e um resumo do que o sistema faz.

O site em si é construído com **Next.js (App Router)**, **TypeScript** e **Tailwind CSS**, com testes unitários via **Vitest** e **React Testing Library**. O código-fonte fica no GitHub e o deploy contínuo é feito pela **Vercel**, conectada ao repositório principal.

A estrutura visual segue um wireframe já validado: hero com foto e currículo resumido, seção explicando o projeto guarda-chuva (criar sistemas com IA e documentar tudo publicamente) e uma grade de cards, cada um representando um sistema com imagem, links para README e prompts, e descrição curta.

---

## Documentação

| Documento | Descrição |
|-----------|-----------|
| [Guia Técnico](docs/GUIA_TECNICO.md) | Stack, padrões de código, execução e estratégia de testes |
| [User Stories](docs/user-stories/README.md) | Requisitos funcionais detalhados por história de usuário |
| [Estado Atual](docs/ESTADO_ATUAL.md) | Documentação viva do progresso e decisões do projeto |

---

## Setup local

> **Pré-requisitos:** Node.js 20 LTS ou superior, npm (ou pnpm/yarn) e Git.

```bash
# Clonar o repositório
git clone https://github.com/<usuario>/gusmaolima-portfolio.git
cd gusmaolima-portfolio

# Instalar dependências
npm install

# Copiar variáveis de ambiente (quando existirem)
cp .env.example .env.local
```

### Variáveis de ambiente

Nesta fase inicial, o site é estático e não exige variáveis obrigatórias. Quando forem necessárias (ex.: URL base para metadados, analytics), elas serão documentadas em `.env.example` com descrição de cada chave.

| Variável | Obrigatória | Descrição |
|----------|-------------|-----------|
| `NEXT_PUBLIC_SITE_URL` | Recomendada | URL canônica do site (`https://gusmaolima.com`) — usada em meta tags Open Graph |

### Modo desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). O servidor recarrega automaticamente ao salvar alterações.

### Build de produção

```bash
npm run build
npm run start
```

---

## Testes

```bash
# Executar todos os testes uma vez
npm run test

# Modo watch (reexecuta ao salvar)
npm run test:watch

# Relatório de cobertura
npm run test:coverage
```

Consulte a [estratégia de testes](docs/GUIA_TECNICO.md#estratégia-de-testes) no Guia Técnico para saber o que deve ser testado.

---

## Deploy

O deploy é automatizado via integração **GitHub → Vercel**:

1. Push na branch `main` dispara build e deploy em produção.
2. Pull requests geram **preview deployments** com URL temporária para revisão.
3. O domínio customizado `gusmaolima.com` é configurado no painel da Vercel (DNS apontando para os registros indicados pela plataforma).

Detalhes completos de configuração estão na [US-008 — Deploy Vercel](docs/user-stories/US-008-deploy-vercel.md).

---

## Licença

Conteúdo e código deste repositório são de autoria de Luiza Gusmão de Andrade Lima, salvo indicação contrária.
