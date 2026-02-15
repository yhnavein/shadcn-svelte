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
  data-slot="drawer-footer"
  class={cn('sh-drawer__footer', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-drawer__footer {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
  }
</style>
