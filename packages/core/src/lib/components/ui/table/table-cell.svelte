<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLTdAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLTdAttributes> = $props();
</script>

<td bind:this={ref} data-slot="table-cell" class={cn('sh-table__cell', className)} {...restProps}>
  {@render children?.()}
</td>

<style>
  .sh-table__cell {
    padding: 1rem;
    vertical-align: middle;
  }

  .sh-table__cell:has(:global([role='checkbox'])) {
    padding-right: 0;
  }
</style>
