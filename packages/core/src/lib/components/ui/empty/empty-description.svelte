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
  data-slot="empty-description"
  class={cn('sh-empty__description', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-empty__description {
    margin-top: 0.5rem;
    max-width: 24rem;
    font-size: 0.875rem;
    color: var(--muted-foreground);
  }
</style>
