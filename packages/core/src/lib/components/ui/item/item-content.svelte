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
  data-slot="item-content"
  class={cn('sh-item__content', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-item__content {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>
