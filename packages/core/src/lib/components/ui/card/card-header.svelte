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

<div
  bind:this={ref}
  data-slot="card-header"
  class={cn('sh-card__header', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-card__header {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding: 1.5rem;
  }
</style>
