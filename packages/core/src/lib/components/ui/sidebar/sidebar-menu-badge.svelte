<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="sidebar-menu-badge"
  data-sidebar="menu-badge"
  class={cn('sh-sidebar-menu-badge', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Sidebar Menu Badge */
  .sh-sidebar-menu-badge {
    color: var(--sidebar-foreground);
    pointer-events: none;
    position: absolute;
    inset-inline-end: 0.25rem; /* end-1 */
    display: flex;
    height: 1.25rem; /* h-5 */
    min-width: 1.25rem; /* min-w-5 */
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    padding-inline: 0.25rem; /* px-1 */
    font-size: 0.75rem; /* text-xs */
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    user-select: none;
  }

  :global(.sh-sidebar-menu-item:hover) .sh-sidebar-menu-badge,
  :global(.sh-sidebar-menu-button:hover) ~ .sh-sidebar-menu-badge,
  :global(.sh-sidebar-menu-button[data-active='true']) ~ .sh-sidebar-menu-badge {
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-button[data-size='sm']) ~ .sh-sidebar-menu-badge {
    top: 0.25rem; /* top-1 */
  }

  :global(.sh-sidebar-menu-button[data-size='default']) ~ .sh-sidebar-menu-badge {
    top: 0.375rem; /* top-1.5 */
  }

  :global(.sh-sidebar-menu-button[data-size='lg']) ~ .sh-sidebar-menu-badge {
    top: 0.625rem; /* top-2.5 */
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) .sh-sidebar-menu-badge {
    display: none;
  }
</style>
