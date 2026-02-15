<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    inset?: boolean;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="dropdown-menu-label"
  data-inset={inset}
  class={cn('sh-dropdown-menu__label', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  :global(.sh-dropdown-menu__label) {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 600;
  }
  :global(.sh-dropdown-menu__label[data-inset]) {
    padding-left: 2rem;
  }
</style>
