# Development Guidelines for @puredev/shadcn-svelte

This document outlines the architectural decisions and coding standards for developing and maintaining the `@puredev/shadcn-svelte` component library. All contributors and AI agents must adhere to these guidelines.

## Core Philosophy

1.  **Framework-Agnostic Styling:** We use vanilla CSS and CSS Variables (Custom Properties) for all styling. No utility-first frameworks (Tailwind CSS) or runtime CSS-in-JS libraries are permitted.
2.  **Svelte-First Architecture:** Styles are co-located within Svelte components using the `<style>` block to leverage Svelte's built-in scoping and tree-shaking capabilities.
3.  **Data-Driven State:** Component variants and states are managed primarily through HTML `data-` attributes rather than complex BEM modifier classes.

## Styling Architecture

### 1. Co-location & Tree Shaking

- **Rule:** Every component's CSS must be defined inside its own `.svelte` file within a `<style>` block.
- **Prohibited:** Do not create separate `.css` files for individual components (e.g., no `button.css`).
- **Goal:** Ensure that importing a component only loads the CSS for that specific component (Tree Shaking).

### 2. Class Naming & Scoping

- **Root Class:** Each component should have a single, distinct root class following the `.sh-{component}` naming convention (e.g., `.sh-button`, `.sh-input`, `.sh-card`).
- **Scoping:** Use Svelte's native scoping where possible.
  - _Preferred:_ Scoped styles (e.g., `.sh-button { ... }` inside `button.svelte`).
  - _Allowed:_ `:global(.sh-button) { ... }` only when necessary to target elements created dynamically or to allow easier external overrides by consumers.
- **Internal Elements:** Use standard CSS combinators or BEM-lite for internal parts if needed, but prefer simple descendant selectors scoped to the component (e.g., `.sh-card header` or `.sh-card__header`).

### 3. Variants & State (Data Attributes > BEM)

- **Rule:** Use `data-` attributes to represent variants, sizes, and states instead of appending modifier classes.
- **Why:** This reduces string interpolation complexity in JS and keeps CSS selectors semantic and readable.
- **Example (Bad):**
  - JS: `class="sh-btn sh-btn--destructive sh-btn--sm"`
  - CSS: `.sh-btn--destructive { ... }`
- **Example (Good):**
  - JS: `class="sh-btn" data-variant="destructive" data-size="sm"`
  - CSS:
    ```css
    .sh-btn { ... }
    .sh-btn[data-variant="destructive"] { ... }
    .sh-btn[data-size="sm"] { ... }
    ```

### 4. Theme & Variables

- **Source of Truth:** All design tokens (colors, radius, spacing) are defined as CSS variables in `src/lib/theme.css`.
- **Usage:** Components must reference these variables (e.g., `color: var(--primary)`) and never hardcode hex values.
- **Theme File:** `src/lib/theme.css` should **only** contain global variables and base resets. It must **not** import component styles.

## Component Implementation Steps

1.  **Markup:** define the HTML structure.
2.  **Logic:** script block handles props, context, and computes `data-` attributes.
3.  **Style:** `<style>` block defines the visual appearance using the root class and data attribute selectors.

## Migration Checklist (Tailwind -> Vanilla)

When converting a component:

1.  Identify all Tailwind utility classes.
2.  Map utilities to CSS properties using `theme.css` variables.
3.  Move logic from `class="..."` construction to `data-variant="..."` attributes.
4.  Write standard CSS in the `<style>` block.
5.  Verify accessibility and interactive states (`:hover`, `:focus-visible`, `[aria-disabled]`).
