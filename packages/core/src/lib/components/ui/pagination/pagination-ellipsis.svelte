<script lang="ts">
  import EllipsisIcon from '@lucide/svelte/icons/ellipsis';
  import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLSpanElement>>> = $props();
</script>

<span
  bind:this={ref}
  aria-hidden="true"
  data-slot="pagination-ellipsis"
  class={cn('sh-pagination__ellipsis', className)}
  {...restProps}
>
  <EllipsisIcon />
  <span class="sh-pagination__sr-only">More pages</span>
</span>

<style>
  :global(.sh-pagination__ellipsis) {
    display: flex;
    height: 2.25rem;
    width: 2.25rem;
    align-items: center;
    justify-content: center;
  }

  :global(.sh-pagination__ellipsis svg) {
    height: 1rem;
    width: 1rem;
  }

  .sh-pagination__sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
</style>
