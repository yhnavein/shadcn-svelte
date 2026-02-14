<script lang="ts">
  import type { HTMLLiAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLLiAttributes> = $props();
</script>

<li
  bind:this={ref}
  data-slot="pagination-item"
  class={cn('sh-pagination__item', className)}
  {...restProps}
>
  {@render children?.()}
</li>
