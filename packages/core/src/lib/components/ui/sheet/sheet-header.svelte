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
  data-slot="sheet-header"
  class={cn('sh-sheet__header', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  :global(.sh-sheet__header) {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    text-align: center;
  }
  @media (min-width: 640px) {
    :global(.sh-sheet__header) {
      text-align: left;
    }
  }
</style>
