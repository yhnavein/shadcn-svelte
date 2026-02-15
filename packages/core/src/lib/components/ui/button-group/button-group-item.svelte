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
  data-slot="button-group-item"
  class={cn('sh-button-group__item', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-button-group__item {
    flex: 1;
  }

  .sh-button-group__item:first-child {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }

  .sh-button-group__item:last-child {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }

  .sh-button-group__item:not(:first-child) {
    margin-left: -1px;
  }
</style>
