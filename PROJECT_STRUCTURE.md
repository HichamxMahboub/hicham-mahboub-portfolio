# Project Folder Structure

This document describes the organized folder structure for the portfolio project.

## Folders

### `/app`

Next.js App Router pages and layouts.

- `page.tsx` — Home page
- `about/page.tsx` — About page
- `projects/page.tsx` — Projects list page
- `projects/[id]/page.tsx` — Project detail page (dynamic)
- `contact/page.tsx` — Contact page
- `layout.tsx` — Root layout with Navbar & Footer
- `globals.css` — Global styles

### `/components`

Reusable React components.

- `Navbar.tsx` — Navigation component
- `Footer.tsx` — Footer component
- `ProjectCard.tsx` — Project card component
- `Button.tsx` — CTA button component
- `SectionTitle.tsx` — Section header component
- `AnimatedContainer.tsx` — Motion wrapper component
- `Timeline.tsx` — Timeline/experience component
- `ContactForm.tsx` — Contact form component
- `ui/` — shadcn-style primitive components (`button`, `card`, `badge`, `input`, `textarea`, `separator`)

### `/data`

Application data and content. Types are defined in `/types`.

- `projects.ts` — Project entries and project categories
- `skills.ts` — Skills, experience, and education data

### `/config`

Application configuration and constants.

- `siteConfig.ts` — Navigation items, social links, footer links (moved from `/data`)

### `/lib`

Utilities and helper functions.

- `content.ts` — Server-side data access with Neon fallback
- `neon.ts` — Neon connection helper
- `motion.ts` — Shared Framer Motion variants for consistent animations
- `utils.ts` — Shared utility helpers

### `/db`

Database schema and SQL helpers.

- `schema.sql` — Neon/Postgres schema for portfolio projects

### `/types`

Shared TypeScript type definitions used across the project.

- `index.ts` — Central exports for `NavItem`, `SocialLink`, `ProjectItem`, `Skill`, `ExperienceItem`, `EducationItem`, `TimelineItemType`, `SiteConfig`

### `/public`

Static assets (images, icons, etc.)

### `/tools`

Development and CI scripts.

- `ai-review.js` — AI-powered code review script for CI pipeline
- `seed-neon.js` — Seeds the Neon `projects` table from the portfolio content

## Import Patterns

### Configuration

```typescript
import { navItems, socialLinks } from "@/config/siteConfig";
```

### Types

```typescript
import type { ProjectItem, NavItem } from "@/types";
```

### Motion Variants

```typescript
import { fadeIn, slideUp, staggerContainer } from "@/lib/motion";
```

### Data

```typescript
import { projects } from "@/data/projects";
import { skills, experience, education } from "@/data/skills";
```

## Benefits of This Structure

1. **Separation of Concerns**: Types, configs, utils, and data are clearly separated.
2. **Reusability**: Shared motion variants and types reduce duplication.
3. **Maintainability**: Easy to locate and update specific functionality.
4. **Scalability**: Clear patterns for adding new features.
5. **Type Safety**: Centralized types prevent inconsistencies.
