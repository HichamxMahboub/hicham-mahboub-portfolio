# Codex CLI Task Prompts for This Portfolio

Use these prompts inside the repository root with Codex CLI.

## 1. First audit

```text
Audit this Next.js portfolio. Check structure, missing files, TypeScript errors, build readiness, duplicated content, generic placeholders, SEO metadata, responsive layout, and deployment readiness. Do not rewrite everything. Give me a prioritized checklist first, then apply only safe fixes.
```

## 2. Personalize the portfolio

```text
Update this portfolio for Hicham Mahboub, an information systems engineering student focused on full-stack development, digital transformation, dashboards, web/mobile apps, and academic software delivery. Replace generic Alex/San Francisco content, keep the premium visual style, and make the copy sound professional but student-friendly.
```

## 3. Improve projects

```text
Improve the projects section. Use these main projects: Smart Match recruitment platform, Assistant d’Analyse des Compétences, and a Digital Transformation project delivery. Make every project detail page include problem, solution, result, tech stack, and presentation-ready wording. Keep all TypeScript types valid.
```

## 4. Add a CV download area

```text
Add a clean CV call-to-action section on the homepage and about page. Create a public/cv folder placeholder and link to /cv/Hicham-Mahboub-CV.pdf. If the file does not exist, do not break the build; show the button only when the path is configured in a central config file.
```

## 5. Add contact form integration

```text
Replace the simulated contact form with a production-ready option using either mailto fallback or a server action. Do not add paid services. Validate fields, show helpful messages, and keep accessibility good.
```

## 6. Final QA

```text
Run npm install if needed, then npm run lint and npm run build. Fix all errors. Do not ignore TypeScript or ESLint issues. At the end, summarize changed files and exact commands that passed.
```
