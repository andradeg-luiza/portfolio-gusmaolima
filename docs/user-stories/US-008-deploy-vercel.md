# US-008 — Deploy Vercel com domínio customizado

**Prioridade:** Alta  
**Status:** Não iniciado

---

## Descrição

Como **autora do portfólio**, eu quero **que o site seja publicado automaticamente a cada push na branch principal e acessível em gusmaolima.com**, para que **visitantes acessem o portfólio em um endereço profissional sem deploy manual**.

---

## Critérios de aceite

- [ ] Repositório GitHub criado e código-fonte pushado (branch `main`)
- [ ] Projeto importado na Vercel via integração GitHub
- [ ] Framework detectado automaticamente como Next.js
- [ ] Build de produção (`npm run build`) conclui com sucesso na Vercel
- [ ] Deploy automático configurado: push/merge em `main` → produção
- [ ] Preview deployments habilitados para Pull Requests
- [ ] Domínio customizado `gusmaolima.com` adicionado no painel Vercel → Settings → Domains
- [ ] Subdomínio `www.gusmaolima.com` redireciona para `gusmaolima.com` (ou vice-versa, conforme preferência)
- [ ] DNS configurado no registrador do domínio conforme instruções da Vercel (registro A ou CNAME)
- [ ] Certificado SSL ativo (HTTPS) — provisionado automaticamente pela Vercel
- [ ] Variável de ambiente `NEXT_PUBLIC_SITE_URL=https://gusmaolima.com` configurada no painel Vercel (Production)
- [ ] Site acessível publicamente em `https://gusmaolima.com` após propagação DNS

---

## Passo a passo (checklist operacional)

### 1. GitHub

1. Criar repositório `gusmaolima-portfolio` (público)
2. Push do código na branch `main`

### 2. Vercel

1. Acessar [vercel.com](https://vercel.com) → New Project
2. Importar repositório GitHub
3. Confirmar settings: Framework Preset = Next.js, Root Directory = `./`
4. Deploy inicial

### 3. Domínio customizado

1. Vercel → Project → Settings → Domains
2. Adicionar `gusmaolima.com` e `www.gusmaolima.com`
3. Copiar registros DNS indicados pela Vercel
4. No registrador do domínio, configurar:
   - **Opção A (apex):** Registro `A` apontando para IP da Vercel (`76.76.21.21`)
   - **Opção B (www):** Registro `CNAME` de `www` para `cname.vercel-dns.com`
5. Aguardar propagação (pode levar até 48h, geralmente minutos)

### 4. Variáveis de ambiente

| Ambiente | Variável | Valor |
|----------|----------|-------|
| Production | `NEXT_PUBLIC_SITE_URL` | `https://gusmaolima.com` |
| Preview | `NEXT_PUBLIC_SITE_URL` | URL do preview deployment |

---

## Dependências

- [US-001](US-001-setup-nextjs.md) — Projeto buildável
- US-002 a US-007 — Conteúdo mínimo publicável (pode deployar incrementalmente)

---

## Referências

- [Vercel — Custom Domains](https://vercel.com/docs/projects/domains)
- [Vercel — Git Integration](https://vercel.com/docs/deployments/git)
- [Guia Técnico — Deploy e ambientes](../GUIA_TECNICO.md#deploy-e-ambientes)
