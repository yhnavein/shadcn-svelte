<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import { Skeleton } from '$lib/components/ui/skeleton/index.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    showIcon = false,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> & {
    showIcon?: boolean;
  } = $props();

  // Random width between 50% and 90%
  const width = `${Math.floor(Math.random() * 40) + 50}%`;
</script>

<div
  bind:this={ref}
  data-slot="sidebar-menu-skeleton"
  data-sidebar="menu-skeleton"
  class={cn('sh-sidebar-menu-skeleton', className)}
  {...restProps}
>
  {#if showIcon}
    <Skeleton class="sh-sidebar-menu-skeleton-icon" data-sidebar="menu-skeleton-icon" />
  {/if}
  <Skeleton
    class="sh-sidebar-menu-skeleton-text"
    data-sidebar="menu-skeleton-text"
    style="--skeleton-width: {width};"
  />
  {@render children?.()}
</div>

<style>
  /* Sidebar Menu Skeleton */
  .sh-sidebar-menu-skeleton {
    display: flex;
    height: 2rem; /* h-8 */
    align-items: center;
    gap: 0.5rem; /* gap-2 */
    border-radius: var(--radius-md);
    padding-inline: 0.5rem; /* px-2 */
  }

  :global(.sh-sidebar-menu-skeleton-icon) {
    width: 1rem;
    height: 1rem;
    border-radius: var(--radius-md);
  }

  :global(.sh-sidebar-menu-skeleton-text) {
    height: 1rem;
    max-width: var(--skeleton-width);
    flex: 1;
  }
</style>
