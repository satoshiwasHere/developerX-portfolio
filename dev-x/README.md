## DeveloperX Portfolio (Next.js + Chakra UI + Supabase)

> Modern, accessible personal portfolio scaffold built with Next.js (App Router), Chakra UI, TypeScript, and Supabase. Ready for deployment on Vercel.

### Tech Stack

- Next.js 15 (App Router) + TypeScript
- Chakra UI for UI components and theming
- Supabase for backend data and APIs
- Vercel for hosting/deployment

### Project Structure

```
dev-x/
├─ app/
│  ├─ api/contact/route.ts         # API route to store contact form submissions in Supabase
│  ├─ about/page.tsx               # About page template
│  ├─ contact/page.tsx             # Contact form (uses /api/contact)
│  ├─ projects/page.tsx            # Projects grid using ProjectCard
│  ├─ layout.tsx                   # App wrapper (Chakra Provider, Header, Footer)
│  ├─ page.tsx                     # Home hero section
│  └─ providers.tsx                # Chakra provider
├─ components/
│  ├─ Footer.tsx
│  ├─ Header.tsx
│  └─ ProjectCard.tsx
├─ lib/
│  └─ supabaseClient.ts            # Browser client (public anon key)
├─ theme/
│  └─ index.ts                     # Chakra theme config
├─ .env.example                    # Example env vars (copy to .env.local)
├─ .eslintrc.json, .prettierrc     # Code quality configs
└─ package.json
```

### Setup

1) Install dependencies

```bash
npm install
```

2) Configure environment variables

Copy `.env.example` to `.env.local` and fill in values from your Supabase project.

Required variables:

```
NEXT_PUBLIC_SUPABASE_URL=...          # Supabase project URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=...     # Public anon key
SUPABASE_SERVICE_ROLE_KEY=...         # Service role key (server-only)
```

3) Start the dev server

```bash
npm run dev
```

Open http://localhost:3000

### Supabase Setup

Create a table to store contact form submissions (example schema):

```sql
create table if not exists public.contacts (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);
```

Notes:

- The API route `app/api/contact/route.ts` uses `SUPABASE_SERVICE_ROLE_KEY`; ensure this is provided only on the server (Vercel project env vars).
- For production, you should enable RLS with a policy that allows the service role to insert rows.

### Development Notes

- UI is scaffolded with Chakra UI for quick customization and accessibility.
- Components and pages include comments/placeholders to guide content population.
- Lint/format scripts:

```bash
npm run lint
npm run format
```

### Deploying on Vercel

1) Push the repo to GitHub
2) Create a new Vercel project and import the repo
3) Add the env vars in Vercel Project Settings → Environment Variables
4) Deploy

### Roadmap / Ideas

- Add blog (MDX) and RSS feed
- Add projects from Supabase table with images
- Integrate analytics and contact notifications
