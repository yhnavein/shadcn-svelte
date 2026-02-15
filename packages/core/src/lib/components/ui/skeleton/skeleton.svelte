<script lang="ts">
  import { cn, type WithElementRef, type WithoutChildren } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildren<WithElementRef<HTMLAttributes<HTMLDivElement>>> = $props();
</script>

<div bind:this={ref} data-slot="skeleton" class={cn('sh-skeleton', className)} {...restProps}></div>

<style>
  .sh-skeleton {
    background-color: var(--muted);
    border-radius: var(--radius-md);
    animation: sh-skeleton-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes sh-skeleton-pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
</style>
