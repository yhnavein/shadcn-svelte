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

<thead
  bind:this={ref}
  data-slot="table-header"
  class={cn('sh-table__header', className)}
  {...restProps}
>
  {@render children?.()}
</thead>

<style>
  thead :global(tr) {
    border-bottom: 1px solid var(--border);
  }
</style>
