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
  data-slot="drawer-header"
  class={cn('sh-drawer__header', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-drawer__header {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    padding: 1rem;
    text-align: center;
  }

  @media (min-width: 640px) {
    .sh-drawer__header {
      text-align: left;
    }
  }
</style>
