# ng-blog-card

[![Angular](https://img.shields.io/badge/Angular-20.x-dd0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![SSR](https://img.shields.io/badge/Rendering-SSR%20%2B%20Prerender-0a7ea4)](#server-side-rendering)
[![CI Ready](https://img.shields.io/badge/CI-ready-success)](#quality--tooling)

A minimal, production-quality **Angular standalone** project demonstrating:
- **SSR + hydration** with Angular 20
- **Accessible UI** patterns for a blog preview card
- **Lightweight SVG icons** (via `@ng-icons/heroicons`)
- **Performance-conscious font strategy** (Noto Sans + system fallbacks)

---

## ✨ Features

- **Standalone Angular** (no NgModules) using `ApplicationConfig`
- **SSR + Prerender** with `@angular/ssr` and Express adapter
- **Hydration-safe icons** via root-level providers (`@ng-icons/core`)
- **Accessibility first**: semantic markup, focusable buttons, proper headings
- **Performance**: strict TypeScript, bundle budgets, `font-display: swap`

---

## 🔧 Tech Stack

- **Angular 20** (standalone APIs, hydration, router)
- **@angular/ssr** for server rendering + Express (`src/server.ts`)
- **@ng-icons/heroicons** for modern, tree-shakable icons
- **Noto Sans** (Google Fonts + system-ui fallbacks)
- **Testing**: Karma + Jasmine scaffolded

---

## 🧱 Architecture at a Glance

```
src/
  app/
    components/
      card/              # Blog-card UI (HTML, CSS, TS)
    app.*                # Root shell, routes, and configs
  main.ts                # Browser bootstrap
  main.server.ts         # Server bootstrap
  server.ts              # Express server entry (SSR)
```

Key decisions:
- Providers are centralized in `app.config.ts` to align client and server.
- Strict compiler options for maintainability and safety.
- Minimal CSS, no frameworks, to highlight Angular structure.

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start dev server
```bash
npm run start
# → http://localhost:4200
```

### 3. Build for production
```bash
npm run build
# → dist/ng-blog-card
```

### 4. Run SSR build locally
```bash
node dist/ng-blog-card/server/server.mjs
# → http://localhost:4000
```

---

## 🧭 Usage & Customization

- **Update content** in `src/app/components/card/card.html`
- **Modify styles** in `card.css`
- **Swap image** in `src/assets/`
- **Add icons** by extending `provideIcons` in `app.config.ts`

---

## ♿ Accessibility

- Proper semantic tags (`<h3>`, `<p>`, `<button>`) for screen readers
- Buttons with visible labels (icon is decorative)
- Readable font sizes and sufficient contrast

---

## ⚡ Performance

- Budgets defined in `angular.json` (initial bundle + styles)
- Fonts loaded with `display=swap` to prevent invisible text
- SSR + hydration improves perceived load speed

---

## 🧪 Testing

```bash
npm run test
```

Basic tests scaffolded in `src/app/app.spec.ts`. Extend with component-level specs.

---

## 🧰 Quality & Tooling

- **EditorConfig** enforces consistent formatting
- **Strict TypeScript** compiler options for safer refactors
- **Prettier** configured for Angular HTML + TS

---

## 📸 Screenshot

![ng-blog-card screenshot](docs/screenshot.png)

---

## 🏷️ License

MIT © Muiz Uvais
