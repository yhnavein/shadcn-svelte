<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<nav {...restProps} bind:this={ref} class={cn('sh-calendar__nav', className)}>
  {@render children?.()}
</nav>

<style>
  .sh-calendar__nav {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
