<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    children,
    class: className,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLLIElement>> = $props();
</script>

<li
  bind:this={ref}
  data-slot="sidebar-menu-sub-item"
  data-sidebar="menu-sub-item"
  class={cn('sh-sidebar-menu-sub-item', className)}
  {...restProps}
>
  {@render children?.()}
</li>

<style>
  /* Sidebar Menu Sub Item */
  .sh-sidebar-menu-sub-item {
    position: relative;
  }
</style>
