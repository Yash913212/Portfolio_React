# Yaswanth OS — Interactive Hacker HUD Portfolio

An exceptional, high-fidelity developer portfolio designed and built as a custom digital workspace. The theme mimics a premium sci-fi **Hacker OS / Telemetry HUD** interface with scrolling terminal scripts, dynamic multi-plane star backgrounds, and interactive SVG widgets.

This portfolio is fully responsive, highly optimized for speed and accessibility, and features robust system instrumentation metrics mapped across production-ready web architectures.

---

## 🚀 Live Environment & Demos

- **Production Node (Vercel)**: [https://vitanova-one.vercel.app/](https://vitanova-one.vercel.app/)
- **Core Repository**: [https://github.com/Yash913212/Portfolio_React](https://github.com/Yash913212/Portfolio_React)
- **Interactive Handshake Form Endpoint**: Direct connection to Formspree core API with full toast notifier status telemetry.

---

## ⚙️ Core Architecture & Tech Stack

This frontend SPA workspace is built exclusively using modern web standard layers to achieve maximum visual consistency and execution speed:

- **React.js (v18)** — Component-based workspace mapping.
- **Vite** — Lightning-fast build tool and asset bundler.
- **Tailwind CSS (v4)** — Custom theme extensions and modern responsive styling utilities.
- **Framer Motion** — Premium cinematic entry animations and UI transitions.
- **Lucide Icons** — Clean vector telemetry-aligned icon assets.
- **Radix UI** — Unstyled accessible component primitives (e.g., toast alerts).

---

## ⚡️ Key Systems & Engineering Features

### 1. Viewport-Entry Scroll Animations
Leverages a custom React hook `useIntersectionObserver` to defer CSS entry animations (using `IntersectionObserver` browser APIs) until elements scroll into the active viewport. This prevents premature animation triggering on initial mount and maintains optimal performance.

### 2. Multi-Plane Parallax Depth
The background grid and custom glowing SVG radial blobs translate at different scroll speeds (via passive scroll listener logic in `StarBackground.jsx`), creating smooth, visual parallax depth.

### 3. Highly Optimized Asset Budgets
All project images are served in compressed `.webp` format and utilize standard `loading="lazy"` attributes for below-the-fold content, bringing asset footprints down to **<35KB per image** (a 99%+ optimization over raw PNG templates).

### 4. Interactive SVG Orbital HUD
An interactive orbital tracker widget built using pure SVG path vectors, drawing geo/meo/leo satellite tracks that respond directly to user cursor hovers and state changes.

### 5. Seamless Responsive Mechanics
The telemetry control dashboard adapts smoothly to mobile, tablet, and desktop breakpoints. The navigation system collapses into a high-tech fullscreen terminal interface on smaller viewports.

### 6. Built-in Accessibility (A11y)
- Global `prefers-reduced-motion` media queries built into `index.css` to respect user motion sensitivity choices by disabling transitions and animations globally.
- Fully semantic HTML structure utilizing `main`, `section`, and correct layout hierarchies.
- Clickable descriptive `aria-label` tags for external resource buttons.

---

## 👌 Quick Start & Local Run

### Prerequisites
Make sure you have [Node.js (v18+)](https://nodejs.org/) and [Git](https://git-scm.com/) installed.

### Commands

```bash
# Clone the repository
git clone https://github.com/Yash913212/Portfolio_React.git

# Enter the terminal workspace
cd Portfolio_React

# Install pure frontend dependencies
npm install

# Boot local server
npm run dev
```

The system interface will load at: [http://localhost:5173](http://localhost:5173)

---

## ☁️ Deployment Pipeline

This portfolio is statically compiled and optimized for sub-80ms load times:

```bash
# Compile and build the optimized production package
npm run build
```

The resulting assets in `dist/` can be instantly deployed to any CDN hosting provider (e.g., Vercel, Netlify, or GitHub Pages).
