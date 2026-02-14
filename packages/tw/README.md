# Shadcn Svelte as Package

You're reading this correctly: this package does exactly what the original Shadcn authors advise against.

Sometimes you just want a UI library you can drop into your app and start using—no custom CLI, no syncing with a company design system, and no maintaining hundreds of copied component files. In those cases, the "recommended" approach quickly stops being fun or practical.

This package is for that scenario: install it, use it, and forget about the messy implementation details.

If you do want deep customization or design-system alignment, you should use the original [Shadcn library](https://www.shadcn-svelte.com) and follow its official guidelines.

## Installation

Install the package along with its peer dependencies:

```sh
# npm
npm i @puredev/shadcn-svelte-tw tailwindcss tw-animate-css

# bun
bun i @puredev/shadcn-svelte-tw tailwindcss tw-animate-css
```

Your project also needs the Tailwind CSS Vite plugin. If you don't have it yet:

```sh
npm i -D @tailwindcss/vite
```

And register it in your `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({ plugins: [tailwindcss(), sveltekit()] });
```

### CSS Setup

Add the following three imports to your global CSS file (e.g. `src/app.css`):

```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import '@puredev/shadcn-svelte-tw/theme.css';
```

The order matters — `tailwindcss` must come first, then `tw-animate-css` (provides accordion/collapsible animations), then the theme which defines color tokens, radius values, and base styles.

Then import that CSS file in your root layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';

  const { children } = $props();
</script>

{@render children()}
```

## Usage

Components are exported as namespaces to avoid naming collisions:

```svelte
<script>
  import { Button, Card, Accordion } from '@puredev/shadcn-svelte-tw';
</script>

<Button.Root variant="outline">Click me</Button.Root>

<Card.Root>
  <Card.Header>
    <Card.Title>Hello</Card.Title>
  </Card.Header>
  <Card.Content>World</Card.Content>
</Card.Root>

<Accordion.Root type="single">
  <Accordion.Item value="item-1">
    <Accordion.Trigger>Open</Accordion.Trigger>
    <Accordion.Content>Content here</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

### Customizing the theme

The theme uses CSS custom properties, so you can override any token after the import:

```css
@import 'tailwindcss';
@import 'tw-animate-css';
@import '@puredev/shadcn-svelte-tw/theme.css';

:root {
  --radius: 0.5rem;
  --primary: oklch(0.6 0.25 260);
  --primary-foreground: oklch(1 0 0);
}
```
