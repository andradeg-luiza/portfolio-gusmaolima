# US-007 — SEO básico

**Prioridade:** Média  
**Status:** Não iniciado

---

## Descrição

Como **visitante que encontrou o site via busca ou compartilhamento em rede social**, eu quero **ver título, descrição e imagem corretos ao compartilhar o link**, para que **eu saiba do que se trata o site antes mesmo de acessá-lo**.

---

## Critérios de aceite

- [ ] Metadata configurada via API de Metadata do Next.js em `src/app/layout.tsx` e/ou `page.tsx`
- [ ] `<title>` descritivo (ex.: "Gusmão Lima — Portfólio de projetos com IA")
- [ ] Meta `description` com resumo do site (≤160 caracteres)
- [ ] Open Graph tags:
  - `og:title`
  - `og:description`
  - `og:url` (usando `NEXT_PUBLIC_SITE_URL` ou `https://gusmaolima.com`)
  - `og:type` (`website`)
  - `og:image` (imagem de preview, mín. 1200×630px recomendado)
- [ ] Twitter Card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`)
- [ ] Favicon configurado (`app/favicon.ico` ou `app/icon.png`)
- [ ] `lang="pt-BR"` no elemento `<html>`
- [ ] `robots.txt` acessível (via `app/robots.ts` do Next.js)
- [ ] `sitemap.xml` gerado (via `app/sitemap.ts` do Next.js) listando a URL principal
- [ ] Canonical URL definida quando aplicável

---

## Valores sugeridos

| Campo | Valor sugerido |
|-------|----------------|
| Title | Gusmão Lima — Portfólio |
| Description | Portfólio de sistemas criados com auxílio de IA. Cada projeto documentado com README, prompts e resumo. |
| og:image | `/og-image.png` (criar asset 1200×630) |
| Site URL | `https://gusmaolima.com` |

---

## Dependências

- [US-001](US-001-setup-nextjs.md) — Setup inicial
- [US-002](US-002-hero-section.md) — Conteúdo para enriquecer description (opcional)

---

## Ferramentas de validação

- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Open Graph Debugger](https://www.opengraph.xyz/) ou similar
- Lighthouse (audit SEO no Chrome DevTools)

---

## Referências

- [Next.js — Metadata](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Next.js — robots.ts / sitemap.ts](https://nextjs.org/docs/app/api-reference/file-conventions/metadata)
