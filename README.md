# Yaswanth OS Portfolio (React + Vite)

A high-performance developer portfolio built with a custom hacker/HUD visual language, animated telemetry UI, and responsive sectioned architecture.

## Live Project

- Live site: https://portfolio-react.vercel.app
- Source code: https://github.com/Yash913212/Portfolio_React

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 4
- Framer Motion
- React Router
- Lucide React
- Radix Toast

## Features

- Responsive single-page portfolio layout
- Hero, About, Skills, Projects, and Contact sections
- Interactive telemetry-style UI and SVG orbit widget
- Scroll-driven parallax background layers
- Viewport-entry animations for key sections
- Theme toggle with saved user preference
- Functional contact form submission via Formspree
- Reduced-motion accessibility support
- Optimized WebP project images with lazy loading
- Route-level code splitting with lazy-loaded pages

## Local Development

Prerequisites:
- Node.js 18+
- npm

Install and run:

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production Build

```bash
npm run build
npm run preview
```

## Image Optimization

Project screenshots are optimized with Sharp and saved as WebP.

```bash
node optimize-images.js
```

This script converts PNG files in public/projects to WebP files.

## Project Structure

- src/components: UI sections and shared components
- src/pages: Route components
- src/hooks: Reusable hooks
- src/lib: Utility helpers
- public/projects: Optimized project images

## Contact

- Email: yaswanthamjuri@gmail.com
- GitHub: https://github.com/Yash913212
- LinkedIn: https://linkedin.com/in/yaswanth-amjuri
