<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
  bind:this={ref}
  data-slot="breadcrumb-page"
  role="link"
  aria-disabled="true"
  aria-current="page"
  class={cn('sh-breadcrumb__page', className)}
  {...restProps}
>
  {@render children?.()}
</span>

<style>
  .sh-breadcrumb__page {
    font-weight: 400;
    color: var(--foreground);
  }
</style>
