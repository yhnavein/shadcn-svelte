<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} data-slot="item-title" class={cn('sh-item__title', className)} {...restProps}>
  {@render children?.()}
</div>

<style>
  .sh-item__title {
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.025em;
  }
</style>
