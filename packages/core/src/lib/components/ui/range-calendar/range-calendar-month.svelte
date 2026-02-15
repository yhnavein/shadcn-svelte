<script lang="ts">
  import { type WithElementRef, cn } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<div {...restProps} bind:this={ref} class={cn('sh-calendar__month', className)}>
  {@render children?.()}
</div>

<style>
  .sh-calendar__month {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
