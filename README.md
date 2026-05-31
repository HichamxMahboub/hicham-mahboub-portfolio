# Hicham Mahboub Portfolio

A professional internship portfolio for Hicham Mahboub, an Information Systems and Digital Transformation Engineering student looking for a junior full-stack / software engineering internship.

Official portfolio URL: https://portfolio-prbrwhomy-hichamxmahboubs-projects.vercel.app

The portfolio highlights practical projects around full-stack platforms, backend APIs, dashboards, admin panels, mobile apps, and digital transformation workflows. It is built to be simple to review, easy to deploy, and honest about project status.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Neon serverless Postgres support
- ESLint

## Setup

Install dependencies:

```bash
npm install
```

Create a local environment file from the example:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

All variables are optional unless you want the related feature enabled.

```bash
DATABASE_URL=
NEON_DATABASE_URL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_LINKEDIN_URL=
```

- `DATABASE_URL` or `NEON_DATABASE_URL`: enables loading project data from Neon.
- `NEXT_PUBLIC_SITE_URL`: used for canonical metadata and sitemap URLs after deployment.
- `NEXT_PUBLIC_CONTACT_EMAIL`: enables the mailto contact form and email link.
- `NEXT_PUBLIC_LINKEDIN_URL`: shows the LinkedIn link. If it is empty, LinkedIn is hidden.

GitHub is configured in `config/siteConfig.ts`.

## Add the CV PDF

The CV file is stored at:

```text
public/Hicham-Mahboub-CV.pdf
```

Keep the real CV PDF at that path before sharing the site. The project does not generate or invent CV content.

## Project Data

Primary project content lives in:

```text
data/projects.ts
```

Each project includes:

- short overview
- problem solved
- key features
- tech stack
- internship relevance
- what was learned
- optional GitHub link
- optional live demo link

Do not add a live demo URL unless it points to a real deployed project.

## Seed Neon

If using Neon, set `DATABASE_URL` or `NEON_DATABASE_URL`, then run:

```bash
npm run db:seed
```

The app falls back to local project data if no database URL is configured or if the database query fails.

## Deploy on Vercel

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Set the build command to `npm run build` if Vercel does not auto-detect it.
4. Add environment variables in Vercel Project Settings.
5. Set `NEXT_PUBLIC_SITE_URL` to the final deployed URL.
6. Keep `public/Hicham-Mahboub-CV.pdf` in the repository before final sharing so the CV button works.
7. Deploy.

## Validation

Run these before sending the portfolio to recruiters:

```bash
npm run lint
npm run build
```

## Notes

- No fake phone number or address is included.
- LinkedIn is only shown when `NEXT_PUBLIC_LINKEDIN_URL` is configured.
- Live demo buttons only appear when a project has a real `liveLink`.
- CV download points to `/Hicham-Mahboub-CV.pdf`, backed by `public/Hicham-Mahboub-CV.pdf`.
