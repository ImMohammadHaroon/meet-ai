This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This project is configured for Vercel's Node.js runtime for API routes and server actions.

### Required environment variables

Create a `.env` (or set in Vercel Project Settings → Environment Variables):

```
DATABASE_URL=postgres://...

GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...

GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

### Database

- This project uses Drizzle ORM with Neon serverless Postgres via `neon-http` driver.
- Ensure `DATABASE_URL` points to a Neon (or Postgres) connection string compatible with HTTP.
- To apply schema on first run locally:

```bash
npm run db:push
```

On Vercel, apply migrations manually from your local machine or CI before first deploy.

### Build & deploy

1. Push your repository to GitHub/GitLab/Bitbucket.
2. Import the project in Vercel.
3. Set the environment variables above in Vercel (Preview and Production).
4. Trigger a deployment. Build command defaults to `npm run build`. Start is `next start` for self-host; Vercel handles this automatically.

Notes:
- API routes explicitly export `runtime = "nodejs"` to avoid Edge default for incompatible libraries.
- tRPC endpoint is available at `/api/trpc`.
- Auth routes are mounted under `/api/(auth)` via Better Auth.
