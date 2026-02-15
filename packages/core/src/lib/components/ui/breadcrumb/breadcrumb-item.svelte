<script lang="ts">
  import type { HTMLLiAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLLiAttributes> = $props();
</script>

<li
  bind:this={ref}
  data-slot="breadcrumb-item"
  class={cn('sh-breadcrumb__item', className)}
  {...restProps}
>
  {@render children?.()}
</li>

<style>
  .sh-breadcrumb__item {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
  }
</style>
