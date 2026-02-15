<script lang="ts">
  import type { HTMLOlAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLOlAttributes> = $props();
</script>

<ol
  bind:this={ref}
  data-slot="breadcrumb-list"
  class={cn('sh-breadcrumb__list', className)}
  {...restProps}
>
  {@render children?.()}
</ol>

<style>
  .sh-breadcrumb__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.375rem;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: var(--muted-foreground);
  }

  @media (min-width: 640px) {
    .sh-breadcrumb__list {
      gap: 0.625rem;
    }
  }
</style>
