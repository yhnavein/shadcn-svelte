<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="sidebar-content"
  data-sidebar="content"
  class={cn('sh-sidebar-content', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Sidebar Content */
  .sh-sidebar-content {
    display: flex;
    min-height: 0;
    flex: 1;
    flex-direction: column;
    gap: 0.5rem; /* gap-2 */
    overflow: auto;
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) .sh-sidebar-content {
    overflow: hidden;
  }
</style>
