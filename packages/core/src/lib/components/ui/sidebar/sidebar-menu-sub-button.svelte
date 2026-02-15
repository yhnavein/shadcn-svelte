<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { Snippet } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    children,
    child,
    class: className,
    size = 'md',
    isActive = false,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
    size?: 'sm' | 'md';
    isActive?: boolean;
  } = $props();

  const mergedProps = $derived({
    class: cn('sh-sidebar-menu-sub-button', className),
    'data-slot': 'sidebar-menu-sub-button',
    'data-sidebar': 'menu-sub-button',
    'data-size': size,
    'data-active': isActive,
    ...restProps,
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <a bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </a>
{/if}

<style>
  /* Sidebar Menu Sub Button */
  :global(.sh-sidebar-menu-sub-button) {
    color: var(--sidebar-foreground);
    display: flex;
    height: 1.75rem; /* h-7 */
    min-width: 0;
    transform: translateX(-1px); /* -translate-x-px */
    align-items: center;
    gap: 0.5rem; /* gap-2 */
    overflow: hidden;
    border-radius: var(--radius-md);
    padding-inline: 0.5rem; /* px-2 */
    outline: none;
    text-decoration: none;
    cursor: pointer;
  }

  :global(.sh-sidebar-menu-sub-button:hover) {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-sub-button:active),
  :global(.sh-sidebar-menu-sub-button[data-active='true']) {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-sub-button > svg) {
    color: var(--sidebar-accent-foreground);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  :global(.sh-sidebar-menu-sub-button:focus-visible) {
    box-shadow: 0 0 0 2px var(--sidebar-ring);
  }

  :global(.sh-sidebar-menu-sub-button:disabled),
  :global(.sh-sidebar-menu-sub-button[aria-disabled='true']) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-sidebar-menu-sub-button > span:last-child) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :global(.sh-sidebar-menu-sub-button[data-size='sm']) {
    font-size: 0.75rem; /* text-xs */
  }

  :global(.sh-sidebar-menu-sub-button[data-size='md']) {
    font-size: 0.875rem; /* text-sm */
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) :global(.sh-sidebar-menu-sub-button) {
    display: none;
  }
</style>
