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

<caption
  bind:this={ref}
  data-slot="table-caption"
  class={cn('sh-table__caption', className)}
  {...restProps}
>
  {@render children?.()}
</caption>

<style>
  .sh-table__caption {
    margin-top: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--muted-foreground);
  }
</style>
