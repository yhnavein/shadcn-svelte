<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="sidebar-group-content"
  data-sidebar="group-content"
  class={cn('sh-sidebar-group-content', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Sidebar Group Content */
  .sh-sidebar-group-content {
    width: 100%;
    font-size: 0.875rem; /* text-sm */
  }
</style>
