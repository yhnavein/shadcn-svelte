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

<div
  bind:this={ref}
  data-slot="alert-description"
  class={cn('sh-alert__description', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-alert__description {
    font-size: 0.875rem;
    line-height: 1.625; /* relaxed */
  }

  .sh-alert__description :global(p) {
    line-height: 1.625;
  }
</style>
