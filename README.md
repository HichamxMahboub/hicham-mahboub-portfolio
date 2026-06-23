# Hicham Mahboub Portfolio

Production: https://www.hichammahboub.live

A bilingual English/French portfolio for Hicham Mahboub, an ESI Rabat engineering student seeking a full-stack software-development internship.

## Technologies

- Next.js App Router and React
- TypeScript and Tailwind CSS
- Framer Motion
- Neon/PostgreSQL optional project data
- ESLint

## Locale routes

- `/en`, `/en/about`, `/en/projects`, `/en/projects/:slug`, `/en/contact`
- `/fr`, `/fr/about`, `/fr/projects`, `/fr/projects/:slug`, `/fr/contact`

The root path and unprefixed legacy pages permanently redirect to English. Numeric project URLs permanently redirect to their stable slug URLs.

## SEO

- Production-only metadata base and absolute sitemap URLs
- Unique English and French titles, descriptions, canonical URLs, and `hreflang` alternates
- Open Graph and Twitter metadata for public pages
- `robots.txt`, sitemap, and JSON-LD for `WebSite`, `Person`, `ProfilePage`, and project breadcrumbs
- Stable project slug URLs with legacy numeric redirects

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Optional environment variables:

```bash
DATABASE_URL=
NEON_DATABASE_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
```

Run checks before deployment:

```bash
npm run lint
npm run build
```

## Deployment

Deploy the `main` branch with the production domain `https://www.hichammahboub.live`. Keep `public/Hicham-Mahboub-CV.pdf` tracked so the CV download remains available.

## SEO / Search Console checklist

- Submit `https://www.hichammahboub.live/sitemap.xml`.
- Inspect `https://www.hichammahboub.live/en`.
- Inspect `https://www.hichammahboub.live/fr`.
- Inspect `https://www.hichammahboub.live/en/projects`.
- Inspect `https://www.hichammahboub.live/en/contact`.
