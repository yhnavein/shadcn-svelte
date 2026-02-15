<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLTableSectionElement>> = $props();
</script>

<tfoot
  bind:this={ref}
  data-slot="table-footer"
  class={cn('sh-table__footer', className)}
  {...restProps}
>
  {@render children?.()}
</tfoot>

<style>
  .sh-table__footer {
    background-color: color-mix(in oklch, var(--muted), transparent 50%);
    font-weight: 500;
  }

  .sh-table__footer :global(> tr:last-child) {
    border-bottom: 0;
  }
</style>
