# John Robert Cruda — Portfolio

Personal portfolio website for **John Robert Cruda**, a software engineer specializing in full-stack web applications, APIs, cloud services, and high-traffic digital products.

The site is built with a clean editorial layout inspired by the Jason minimalist portfolio template. It uses a white navigation bar, dark purple hero section, alternating portfolio project rows, a skills grid, and a violet contact section.

## Tech Stack

- [Next.js](https://nextjs.org/) 14 with the App Router
- [React](https://react.dev/) 18
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) for icons
- ESLint and strict TypeScript checking

## Getting Started

### Requirements

- Node.js 18.17 or later
- npm

### Installation

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Run the TypeScript compiler without emitting files |

## Project Structure

```text
.
├── app/
│   ├── globals.css       # Global styles and responsive design system
│   ├── layout.tsx        # Root layout and metadata
│   └── page.tsx          # Main portfolio page
├── components/
│   ├── Footer.tsx
│   └── Navbar.tsx        # Responsive site navigation
├── data/
│   └── resumeData.ts     # Centralized portfolio and resume content
├── public/               # Static assets and web metadata
├── next.config.mjs
├── tailwind.config.ts
└── package.json
```

## Updating Portfolio Content

Most personal information is centralized in [`data/resumeData.ts`](./data/resumeData.ts). Update that file to change:

- Name, title, biography, location, and contact details
- Social links and resume URL
- Work experience
- Projects
- Skills
- Achievements
- Education and certifications

The main page also contains the presentation-specific project, about, and skills sections in [`app/page.tsx`](./app/page.tsx).

## Styling

Global styling is defined in [`app/globals.css`](./app/globals.css). The current visual system uses:

- White content areas
- Charcoal-purple hero background
- Violet accent color
- Pale blue-gray about and skills section
- Responsive layouts for desktop and mobile screens

## Production Build

To verify the application before deployment:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

The project can be deployed to platforms that support Next.js, including [Vercel](https://vercel.com/).

## License

This project is a personal portfolio. Content and branding belong to John Robert Cruda.
