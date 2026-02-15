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
  data-slot="sidebar-header"
  data-sidebar="header"
  class={cn('sh-sidebar-header', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Sidebar Header */
  .sh-sidebar-header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* gap-2 */
    padding: 0.5rem; /* p-2 */
  }
</style>
