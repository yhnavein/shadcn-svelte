<script lang="ts" module>
  import { type WithElementRef } from '$lib/utils.js';
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

  export type ButtonVariant =
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon' | 'icon-sm' | 'icon-lg';

  export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
    WithElementRef<HTMLAnchorAttributes> & {
      variant?: ButtonVariant;
      size?: ButtonSize;
      isLoading?: boolean;
    };
</script>

<script lang="ts">
  import Spinner from '../spinner/spinner.svelte';
  import { cn } from '$lib/utils.js';

  let {
    class: className,
    variant = 'default',
    size = 'default',
    isLoading = false,
    ref = $bindable(null),
    href = undefined,
    type = 'button',
    disabled,
    children,
    ...restProps
  }: ButtonProps = $props();
</script>

{#if href}
  <a
    bind:this={ref}
    data-slot="button"
    class={cn('sh-button', className)}
    data-variant={variant}
    data-size={size}
    href={disabled ? undefined : href}
    aria-disabled={disabled}
    role={disabled ? 'link' : undefined}
    tabindex={disabled ? -1 : undefined}
    {...restProps}
  >
    {@render children?.()}
  </a>
{:else}
  <button
    bind:this={ref}
    data-slot="button"
    class={cn('sh-button', className)}
    data-variant={variant}
    data-size={size}
    {type}
    disabled={isLoading || disabled}
    {...restProps}
  >
    {#if isLoading}
      <Spinner />
    {/if}
    {@render children?.()}
  </button>
{/if}

<style>
  :global(.sh-button) {
    /* Base styles */
    display: inline-flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    white-space: nowrap;
    transition-property:
      color, background-color, border-color, text-decoration-color, fill, stroke, opacity,
      box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    outline: none;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid transparent;
  }

  /* Focus visible */
  :global(.sh-button:focus-visible) {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px oklch(from var(--ring) l c h / 0.5);
    outline: none;
  }

  /* Disabled state */
  :global(.sh-button:disabled),
  :global(.sh-button[aria-disabled='true']),
  :global(.sh-button.is-disabled) {
    pointer-events: none;
    opacity: 0.5;
  }

  /* SVG children */
  :global(.sh-button svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-button svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  /* Variants */
  :global(.sh-button[data-variant='default']) {
    background-color: var(--primary);
    color: var(--primary-foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  :global(.sh-button[data-variant='default']:hover) {
    background-color: oklch(from var(--primary) l c h / 0.9);
  }

  :global(.sh-button[data-variant='destructive']) {
    background-color: var(--destructive);
    color: white;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  :global(.sh-button[data-variant='destructive']:hover) {
    background-color: oklch(from var(--destructive) l c h / 0.9);
  }

  :global(.sh-button[data-variant='destructive']:focus-visible) {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.2);
  }

  :global(.dark .sh-button[data-variant='destructive']:focus-visible) {
    box-shadow: 0 0 0 3px oklch(from var(--destructive) l c h / 0.4);
  }

  :global(.sh-button[data-variant='outline']) {
    background-color: var(--background);
    border-color: var(--input);
    color: var(--foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  :global(.sh-button[data-variant='outline']:hover) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-button[data-variant='secondary']) {
    background-color: var(--secondary);
    color: var(--secondary-foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }

  :global(.sh-button[data-variant='secondary']:hover) {
    background-color: oklch(from var(--secondary) l c h / 0.8);
  }

  :global(.sh-button[data-variant='ghost']:hover) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-button[data-variant='link']) {
    color: var(--primary);
    text-underline-offset: 4px;
    background-color: transparent;
  }

  :global(.sh-button[data-variant='link']:hover) {
    text-decoration: underline;
  }

  /* Sizes */
  :global(.sh-button[data-size='default']) {
    height: 2.25rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  /* has-[>svg]:px-3 logic replacement using simple class if possible or :has */
  :global(.sh-button[data-size='default']:has(> svg)) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  :global(.sh-button[data-size='sm']) {
    height: 2rem;
    border-radius: var(--radius-md);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    gap: 0.375rem;
  }

  :global(.sh-button[data-size='sm']:has(> svg)) {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  :global(.sh-button[data-size='lg']) {
    height: 2.5rem;
    border-radius: var(--radius-md);
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  :global(.sh-button[data-size='lg']:has(> svg)) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  :global(.sh-button[data-size='icon']) {
    height: 2.25rem;
    width: 2.25rem;
  }

  :global(.sh-button[data-size='icon-sm']) {
    height: 2rem;
    width: 2rem;
  }

  :global(.sh-button[data-size='icon-lg']) {
    height: 2.5rem;
    width: 2.5rem;
  }
</style>
