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
  data-slot="sidebar-group"
  data-sidebar="group"
  class={cn('sh-sidebar-group', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Sidebar Group */
  .sh-sidebar-group {
    position: relative;
    display: flex;
    width: 100%;
    min-width: 0;
    flex-direction: column;
    padding: 0.5rem; /* p-2 */
  }
</style>
