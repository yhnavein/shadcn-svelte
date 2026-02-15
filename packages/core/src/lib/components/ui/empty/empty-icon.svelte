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

<div bind:this={ref} data-slot="empty-icon" class={cn('sh-empty__icon', className)} {...restProps}>
  {@render children?.()}
</div>

<style>
  .sh-empty__icon {
    background-color: var(--muted);
    margin-bottom: 1rem;
    display: flex;
    height: 5rem;
    width: 5rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
  }
</style>
