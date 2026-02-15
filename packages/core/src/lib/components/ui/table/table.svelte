<script lang="ts">
  import type { HTMLTableAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLTableAttributes> = $props();
</script>

<div data-slot="table-container" class="relative w-full overflow-x-auto">
  <table bind:this={ref} data-slot="table" class={cn('sh-table', className)} {...restProps}>
    {@render children?.()}
  </table>
</div>

<style>
  .sh-table {
    width: 100%;
    caption-side: bottom;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
</style>
