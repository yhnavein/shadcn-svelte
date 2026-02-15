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
  data-slot="empty-title"
  class={cn('sh-empty__title', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-empty__title {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 600;
    letter-spacing: -0.025em;
  }
</style>
