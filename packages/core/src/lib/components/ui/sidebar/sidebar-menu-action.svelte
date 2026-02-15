<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    showOnHover = false,
    children,
    child,
    ...restProps
  }: WithElementRef<HTMLButtonAttributes> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
    showOnHover?: boolean;
  } = $props();

  const mergedProps = $derived({
    class: cn(
      'sh-sidebar-menu-action',
      showOnHover && 'sh-sidebar-menu-action-show-on-hover',
      className
    ),
    'data-slot': 'sidebar-menu-action',
    'data-sidebar': 'menu-action',
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
  /* Sidebar Menu Action */
  :global(.sh-sidebar-menu-action) {
    color: var(--sidebar-foreground);
    position: absolute;
    inset-inline-end: 0.25rem; /* end-1 */
    top: 0.375rem; /* top-1.5 */
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

  :global(.sh-sidebar-menu-action:hover) {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-item:hover) :global(.sh-sidebar-menu-action),
  :global(.sh-sidebar-menu-button:hover) ~ :global(.sh-sidebar-menu-action) {
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-button[data-active='true'])
    ~ :global(.sh-sidebar-menu-action.sh-sidebar-menu-action-show-on-hover) {
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-action:focus-visible) {
    box-shadow: 0 0 0 2px var(--sidebar-ring);
  }

  :global(.sh-sidebar-menu-action > svg) {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  :global(.sh-sidebar-menu-action::after) {
    content: '';
    position: absolute;
    inset: -0.5rem;
  }

  @media (min-width: 768px) {
    :global(.sh-sidebar-menu-action::after) {
      display: none;
    }
  }

  :global(.sh-sidebar-menu-button[data-size='sm']) ~ :global(.sh-sidebar-menu-action) {
    top: 0.25rem; /* top-1 */
  }

  :global(.sh-sidebar-menu-button[data-size='default']) ~ :global(.sh-sidebar-menu-action) {
    top: 0.375rem; /* top-1.5 */
  }

  :global(.sh-sidebar-menu-button[data-size='lg']) ~ :global(.sh-sidebar-menu-action) {
    top: 0.625rem; /* top-2.5 */
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) :global(.sh-sidebar-menu-action) {
    display: none;
  }

  /* Show on Hover logic */
  :global(.sh-sidebar-menu-action.sh-sidebar-menu-action-show-on-hover) {
    opacity: 0;
  }

  @media (min-width: 768px) {
    :global(.sh-sidebar-menu-action.sh-sidebar-menu-action-show-on-hover) {
      opacity: 0;
    }

    :global(.sh-sidebar-menu-item:hover)
      :global(.sh-sidebar-menu-action.sh-sidebar-menu-action-show-on-hover),
    :global(.sh-sidebar-menu-item:focus-within)
      :global(.sh-sidebar-menu-action.sh-sidebar-menu-action-show-on-hover),
    :global(.sh-sidebar-menu-action.sh-sidebar-menu-action-show-on-hover[data-state='open']) {
      opacity: 1;
    }
  }
</style>
