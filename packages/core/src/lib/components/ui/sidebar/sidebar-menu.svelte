<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLUListElement>, HTMLUListElement> = $props();
</script>

<ul
  bind:this={ref}
  data-slot="sidebar-menu"
  data-sidebar="menu"
  class={cn('sh-sidebar-menu', className)}
  {...restProps}
>
  {@render children?.()}
</ul>

<style>
  /* Sidebar Menu */
  .sh-sidebar-menu {
    display: flex;
    width: 100%;
    min-width: 0;
    flex-direction: column;
    gap: 0.25rem; /* gap-1 */
    list-style: none;
    padding: 0;
    margin: 0;
  }
</style>
