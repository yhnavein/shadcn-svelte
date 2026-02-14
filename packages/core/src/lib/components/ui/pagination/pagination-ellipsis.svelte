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
