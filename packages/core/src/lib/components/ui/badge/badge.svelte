<script lang="ts" module>
  export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';
</script>

<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    href,
    class: className,
    variant = 'default',
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant;
  } = $props();
</script>

<svelte:element
  this={href ? 'a' : 'span'}
  bind:this={ref}
  data-slot="badge"
  {href}
  class={cn('sh-badge', className)}
  data-variant={variant}
  {...restProps}
>
  {@render children?.()}
</svelte:element>

<style>
  :global(.sh-badge) {
    /* Base styles */
    display: inline-flex;
    width: fit-content;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    overflow: hidden;
    border-radius: 9999px;
    border: 1px solid var(--border);
    padding: 0.125rem 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    white-space: nowrap;
    transition-property:
      color, background-color, border-color, text-decoration-color, fill, stroke, opacity,
      box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  /* Focus visible */
  :global(.sh-badge:focus-visible) {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px oklch(from var(--ring) l c h / 0.5);
    outline: none;
  }

  /* Aria Invalid */
  :global(.sh-badge[aria-invalid='true']) {
    border-color: var(--destructive);
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.2);
  }

  :global(.dark .sh-badge[aria-invalid='true']) {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.4);
  }

  /* SVG children */
  :global(.sh-badge svg) {
    pointer-events: none;
    flex-shrink: 0;
    width: 0.75rem;
    height: 0.75rem;
  }

  /* Variants */
  :global(.sh-badge[data-variant='default']) {
    background-color: var(--primary);
    color: var(--primary-foreground);
    border-color: transparent;
  }

  :global(a.sh-badge[data-variant='default']:hover) {
    background-color: oklch(from var(--primary) l c h / 0.9);
  }

  :global(.sh-badge[data-variant='secondary']) {
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    border-color: transparent;
  }

  :global(a.sh-badge[data-variant='secondary']:hover) {
    background-color: oklch(from var(--secondary) l c h / 0.9);
  }

  :global(.sh-badge[data-variant='destructive']) {
    background-color: var(--destructive);
    color: white;
    border-color: transparent;
  }

  :global(a.sh-badge[data-variant='destructive']:hover) {
    background-color: oklch(from var(--destructive) l c h / 0.9);
  }

  :global(.sh-badge[data-variant='destructive']:focus-visible) {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.2);
  }

  :global(.dark .sh-badge[data-variant='destructive']:focus-visible) {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.4);
  }

  :global(.dark .sh-badge[data-variant='destructive']) {
    background-color: oklch(from var(--destructive) l c h / 0.7);
  }

  :global(.sh-badge[data-variant='outline']) {
    color: var(--foreground);
    background-color: transparent; /* Implicit in tailwind if not set */
  }

  :global(a.sh-badge[data-variant='outline']:hover) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }
</style>
