<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLThAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLThAttributes> = $props();
</script>

<th bind:this={ref} data-slot="table-head" class={cn('sh-table__head', className)} {...restProps}>
  {@render children?.()}
</th>

<style>
  .sh-table__head {
    height: 3rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: left;
    vertical-align: middle;
    font-weight: 500;
    color: var(--muted-foreground);
  }

  .sh-table__head:has(:global([role='checkbox'])) {
    padding-right: 0;
  }
</style>
