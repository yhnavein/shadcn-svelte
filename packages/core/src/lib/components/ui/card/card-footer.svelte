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
  data-slot="card-footer"
  class={cn('sh-card__footer', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-card__footer {
    display: flex;
    align-items: center;
    padding: 1.5rem;
    padding-top: 0;
  }
</style>
