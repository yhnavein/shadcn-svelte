<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLUListElement>> = $props();
</script>

<ul
  bind:this={ref}
  data-slot="pagination-content"
  class={cn('sh-pagination__content', className)}
  {...restProps}
>
  {@render children?.()}
</ul>

<style>
  :global(.sh-pagination__content) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.25rem;
  }
</style>
