# HellCore Club — Landing de captação de leads

Landing page para o **HellCore Club**, o clube que conecta streamers de todo o
Brasil para crescerem de forma legal e lícita, sem bots ou métodos que prejudicam
o canal. A plataforma está em desenvolvimento e esta página captura interessados.

Construída com **Next.js (App Router)** + **Neon Postgres**, pronta para deploy na
**Vercel**. O visual segue o design system descrito em [`DESIGN.md`](./DESIGN.md)
(inspirado na Vodafone: display ultra-bold em caixa alta, vermelho `#e60000`,
ink `#25282b` e CTAs em pílula).

## Seções da página

- **Header** com menu (responsivo, com hambúrguer no mobile)
- **Hero** — chamada principal
- **Sobre** — manifesto do clube
- **ZigZag** — comunica que a aplicação está em desenvolvimento / fase de captação
- **Cards** — vantagens da plataforma
- **Formulário de lead** — Nome, E-mail, WhatsApp, Nick na Kick, Instagram
- **Footer**

## Stack

- Next.js 16 (App Router, TypeScript, Turbopack)
- Tailwind CSS v4
- Neon serverless Postgres (`@neondatabase/serverless`)

## Configuração local

1. Instale as dependências:

```bash
npm install
```

2. Configure o banco. Copie o exemplo e cole a connection string do Neon:

```bash
cp .env.example .env.local
```

No [Console do Neon](https://console.neon.tech/app/projects/green-shadow-07592369)
(projeto `hellcoreclub-database`, ID `green-shadow-07592369`), copie a
**Pooled connection string** e coloque em `DATABASE_URL` no `.env.local`:

```
DATABASE_URL="postgresql://USUARIO:SENHA@ep-xxxx-pooler.REGIAO.aws.neon.tech/hellcoreclub-database?sslmode=require"
```

3. Rode em desenvolvimento:

```bash
npm run dev
```

Acesse http://localhost:3000.

> A tabela `leads` é criada automaticamente na primeira submissão do formulário
> (idempotente, via `CREATE TABLE IF NOT EXISTS`). Não é necessário rodar migração
> manual. O e-mail tem índice único — reenvios atualizam o cadastro existente.

## Schema da tabela `leads`

| Coluna       | Tipo          | Observação                          |
| ------------ | ------------- | ----------------------------------- |
| `id`         | `BIGSERIAL`   | PK                                  |
| `nome`       | `TEXT`        | obrigatório                         |
| `email`      | `TEXT`        | obrigatório, único (case-insensitive) |
| `whatsapp`   | `TEXT`        | obrigatório                         |
| `kick_nick`  | `TEXT`        | obrigatório (nick na Kick)          |
| `instagram`  | `TEXT`        | obrigatório                         |
| `created_at` | `TIMESTAMPTZ` | default `now()`                     |

## Assets no Vercel Blob (logo e material do site)

O logo e demais materiais do **próprio site** são hospedados no Vercel Blob
(não há upload por parte do streamer).

1. Coloque os arquivos em [`assets/`](./assets) (ex.: `hellcore-mark.svg`, banners, PDFs).
2. Defina `BLOB_READ_WRITE_TOKEN` no `.env.local` (Vercel → Storage → Blob store → `.env`).
3. Faça o upload:

```bash
npm run upload:assets
```

O script (`scripts/upload-assets.mjs`) sobe cada arquivo via `put` do
`@vercel/blob` (acesso público) e grava as URLs em `lib/blob-assets.json`.
Os componentes consomem essas URLs por meio de `lib/assets.ts` — enquanto um
asset não foi enviado, há fallback para um SVG inline (ex.: o `Logo`).

> O domínio `*.public.blob.vercel-storage.com` já está liberado em
> `next.config.ts` para uso com `next/image`.

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Em [vercel.com](https://vercel.com), importe o projeto (framework detectado: Next.js).
3. Em **Settings → Environment Variables**, adicione `DATABASE_URL` com a connection
   string pooled do Neon (Production, Preview e Development).
   - Dica: pelo **Vercel Marketplace** você pode conectar a integração Neon, que
     injeta `DATABASE_URL` automaticamente.
   - Crie um **Blob store** (Storage → Blob); o `BLOB_READ_WRITE_TOKEN` é
     injetado automaticamente e é usado para subir os assets do site.
4. Deploy. O endpoint `POST /api/leads` roda como função serverless.

## API

`POST /api/leads`

```json
{
  "nome": "Fulano",
  "email": "fulano@email.com",
  "whatsapp": "(11) 90000-0000",
  "kickNick": "fulano",
  "instagram": "@fulano"
}
```

Respostas: `201` (criado), `422` (validação, com `errors` por campo),
`503` (DB não configurado), `500` (erro inesperado).
