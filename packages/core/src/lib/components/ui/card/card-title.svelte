<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div bind:this={ref} data-slot="card-title" class={cn('sh-card__title', className)} {...restProps}>
  {@render children?.()}
</div>

<style>
  .sh-card__title {
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.025em;
  }
</style>
