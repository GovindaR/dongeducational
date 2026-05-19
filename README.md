# DONG Educational Consultancy (Next.js)

Website for **DONG Educational Consultancy** — Nepal to Japan study abroad, with a **contact form that saves inquiries to PostgreSQL** using free-tier services.

Brand assets: `public/logo.png`, `public/favicon.png`

## Free stack (recommended)

| Service | Free tier | Purpose |
|---------|-----------|---------|
| [Vercel](https://vercel.com) | Hobby plan | Host Next.js |
| [Neon](https://neon.tech) | Free PostgreSQL | Store contact form data |

Alternatives: [Supabase](https://supabase.com) (Postgres + dashboard) also works with the same SQL table.

## Setup

### 1. Clone and install

```bash
cd nepal-japan-consultancy
npm install
```

Use **Node.js 20+** (required by Next.js 16).

### 2. Create Neon database

1. Sign up at [neon.tech](https://neon.tech) (free).
2. Create a project and copy the **connection string** (you will paste it into `.env.local` in the next step).

### 3. Environment variables

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```
DATABASE_URL="postgresql://..."
```

### 4. Create tables (from your machine)

With `DATABASE_URL` set in `.env.local`:

```bash
npm run db:setup
```

This uses Neon's `sql.query()` API to run each statement in `scripts/init-db.sql`.

### 5. Run locally

```bash
npm run dev
```

Open [http://localhost:3000/contact](http://localhost:3000/contact) and submit a test inquiry.

### 6. Deploy to Vercel (free)

1. Push this repo to GitHub.
2. Import the project on [vercel.com](https://vercel.com).
3. Add `DATABASE_URL` in Vercel → Settings → Environment Variables.
4. Deploy.

## Customize

Edit `src/lib/site.ts` for your consultancy name, phone, email, and address.

## View saved inquiries

In Neon: **Tables → contact_inquiries**, or run:

```sql
SELECT * FROM contact_inquiries ORDER BY created_at DESC;
```

Later you can add a password-protected admin page to list inquiries in the app.
