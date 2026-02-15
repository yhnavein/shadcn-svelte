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

<div bind:this={ref} data-slot="card" class={cn('sh-card', className)} {...restProps}>
  {@render children?.()}
</div>

<style>
  .sh-card {
    border-radius: var(--radius-xl);
    border: 1px solid var(--border);
    background-color: var(--card);
    color: var(--card-foreground);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
</style>
