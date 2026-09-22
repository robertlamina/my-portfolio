# John Robert Cruda - Personal Portfolio

Portfolio website built with **Next.js 14+ (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 1. Reference Sources & Design Standards

- **Resume Reference**: [John Robert Cruda - Resume (Google Docs)](https://docs.google.com/document/d/1_16f_jJx8agdvmunT6sxl8PAtFFRDKR6/edit?usp=sharing&ouid=117368880418228502509&rtpof=true&sd=true)
- **Design Template Reference**: [Hostinger Jason Minimalist Template](https://builder.hostinger.com/templates?preview=jason&hideRating=1)
- **Visual Aesthetic**: Dark mode, minimalist, high-contrast typography, fine structural borders, and compact interactive cards.
- **Color Palette & Tokens**:
    - **Background**: `#0d0d0d`, `bg-neutral-900`, `bg-neutral-950`
    - **Borders & Dividers**: `border-[#262626]`, `border-neutral-800`
    - **Text**: Primary `#f3f4f6` (white/light grey), Muted `text-gray-400`, Subtitles `text-gray-500`
    - **Accents & Badges**: `text-blue-400`, `bg-blue-950/40`, `border-blue-800/40`

---

## 2. Tech Stack Summary

- **Framework**: Next.js (App Router, Server & Client Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS
- **Data Source**: Centralized TypeScript data files (`data/resumeData.ts`)

---

## 3. Essential Commands

### Development & Build
- `npm run dev` - Start local development server (`http://localhost:3000`)
- `npm run build` - Build production-ready output
- `npm run start` - Start production server locally

### Code Quality & Formatting
- `npm run lint` - Run ESLint checks across the codebase
- `npx tsc --noEmit` - Run TypeScript compiler check without emitting files

---

## 5. Skill Usage Rules

Before writing any code, **always invoke the relevant skills** automatically — do not wait to be asked:

| Task type | Skill to invoke |
|---|---|
| Any Next.js / App Router work | `next-best-practices` |
| Any React component | `react-best-practices` |
| Any Tailwind CSS styling | `tailwind-css-patterns` |
| Any TypeScript types / generics | `typescript-advanced-types` |
| Any accessibility concern | `accessibility` |
| Any SEO work | `seo` |
| Any component composition | `composition-patterns` |
| Any caching / RSC patterns | `next-cache-components` |
| Any frontend design decision | `frontend-design` |

This applies to ALL code tasks in this project, not just when explicitly asked.

---

## 4. Architecture & Code Conventions

### Folder Layout
```text
my-portfolio/
├── app/                  # Next.js App Router (layout, page, globals.css)
├── components/           # Reusable UI components (Hero, TechStack, Projects, etc.)
├── data/                 # Resume, achievements, and project data
└── public/               # Static assets (images, icons)