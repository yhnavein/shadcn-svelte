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
  role="group"
  data-slot="button-group"
  class={cn('sh-button-group', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-button-group {
    display: flex;
    width: 100%;
  }
</style>
