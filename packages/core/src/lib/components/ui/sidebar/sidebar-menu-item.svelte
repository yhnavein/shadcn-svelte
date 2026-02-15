<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLLIElement>, HTMLLIElement> = $props();
</script>

<li
  bind:this={ref}
  data-slot="sidebar-menu-item"
  data-sidebar="menu-item"
  class={cn('sh-sidebar-menu-item group/menu-item', className)}
  {...restProps}
>
  {@render children?.()}
</li>

<style>
  /* Sidebar Menu Item */
  .sh-sidebar-menu-item {
    position: relative;
  }
</style>
