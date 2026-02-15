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
  data-slot="sidebar-footer"
  data-sidebar="footer"
  class={cn('sh-sidebar-footer', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Sidebar Footer */
  .sh-sidebar-footer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* gap-2 */
    padding: 0.5rem; /* p-2 */
  }
</style>
