<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLTableRowElement>> = $props();
</script>

<tr bind:this={ref} data-slot="table-row" class={cn('sh-table__row', className)} {...restProps}>
  {@render children?.()}
</tr>

<style>
  .sh-table__row {
    border-bottom: 1px solid var(--border);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  .sh-table__row:hover {
    background-color: color-mix(in oklch, var(--muted), transparent 50%);
  }

  .sh-table__row[data-state='selected'] {
    background-color: var(--muted);
  }
</style>
