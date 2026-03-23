# Blog com Next.js App Router

Aplicacao de blog com rotas dinamicas por slug, carregamento de dados via JSON local, renderizacao server-side com componentes async e SEO dinamico por artigo.

## Requisitos atendidos

- Home em `app/page.tsx` com listagem de artigos.
- Rotas dinamicas em `app/artigos/[slug]/page.tsx`.
- Dados vindos de `data/artigos.json` por meio de helpers server-side.
- Uso de `async` diretamente nas paginas e `generateStaticParams` para SSG.
- SEO dinamico com `generateMetadata` por artigo.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`

## Executar localmente

```bash
npm install
npm run dev
```

## Deploy na Vercel

1. Importe este projeto na Vercel.
2. Use o framework detectado `Next.js`.
3. Mantenha os comandos padrao de build e output.
4. Apos o deploy, atualize `metadataBase` em `app/layout.tsx` com a URL publica final.

## Fonte de dados

Os artigos estao em `data/artigos.json`. Para trocar por uma API externa, basta adaptar `lib/articles.ts` preservando o mesmo formato retornado.