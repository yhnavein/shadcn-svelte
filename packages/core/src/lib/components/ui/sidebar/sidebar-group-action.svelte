<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    child,
    ...restProps
  }: WithElementRef<HTMLButtonAttributes> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const mergedProps = $derived({
    class: cn('sh-sidebar-group-action', className),
    'data-slot': 'sidebar-group-action',
    'data-sidebar': 'group-action',
    ...restProps,
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}

<style>
  /* Sidebar Group Action */
  :global(.sh-sidebar-group-action) {
    color: var(--sidebar-foreground);
    position: absolute;
    inset-inline-end: 0.75rem; /* end-3 */
    top: 0.875rem; /* top-3.5 */
    display: flex;
    aspect-ratio: 1 / 1;
    width: 1.25rem; /* w-5 */
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    padding: 0;
    outline: none;
    transition: transform 0.2s;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  :global(.sh-sidebar-group-action:hover) {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-group-action:focus-visible) {
    box-shadow: 0 0 0 2px var(--sidebar-ring);
  }

  :global(.sh-sidebar-group-action > svg) {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  :global(.sh-sidebar-group-action::after) {
    content: '';
    position: absolute;
    inset: -0.5rem;
  }

  @media (min-width: 768px) {
    :global(.sh-sidebar-group-action::after) {
      display: none;
    }
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) :global(.sh-sidebar-group-action) {
    display: none;
  }
</style>
