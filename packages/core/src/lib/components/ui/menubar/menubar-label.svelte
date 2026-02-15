<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { type WithElementRef } from 'bits-ui';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    inset,
    children,
    class: className,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> & {
    inset?: boolean;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="menubar-label"
  data-inset={inset}
  class={cn('sh-menubar__label', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  :global(.sh-menubar__label) {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  :global(.sh-menubar__label[data-inset]) {
    padding-inline-start: 2rem;
  }
</style>
