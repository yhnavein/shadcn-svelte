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
  data-slot="alert-title"
  class={cn('sh-alert__title', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-alert__title {
    margin-bottom: 0.25rem;
    font-weight: 500;
    line-height: 1;
    letter-spacing: -0.025em;
  }
</style>
