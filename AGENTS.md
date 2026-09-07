<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Stack

Next.js 16 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Everything lives under `src/`. Do not assume older Next/React behavior — see the block above.

## Commands

- `npm run dev` — dev server
- `npm run lint` — ESLint (`eslint`); only lint script exists, no separate typecheck or test scripts
- `npm run build` — production build (runs type checking via Next)
- No test framework is configured.

## Conventions / gotchas

- **React Compiler is enabled** (`reactCompiler: true` in `next.config.ts`). Follow React Compiler rules (correct hooks deps, no manual memoization against compiler).
- **Tailwind v4 is CSS-first**: there is *no* `tailwind.config.*`. Theme is configured in `src/app/globals.css` via `@theme` and `@import "tailwindcss"`. Color/font tokens map CSS variables (`--background`, `--foreground`, `--font-sans`, etc.) — reference these variables, not the default Tailwind palette, in components.
- Path alias `@/*` → `src/*` (`tsconfig.json`).
- Git root is the repo (`fountain-of-hope/`), not the parent folder.
