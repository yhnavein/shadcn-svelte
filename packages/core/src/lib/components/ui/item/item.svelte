<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import type { Snippet } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    child,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const mergedProps = $derived({
    class: cn('sh-item', className),
    'data-slot': 'item',
    ...restProps,
  });
</script>

{#if child}
  {@render child({ props: mergedProps })}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render mergedProps.children?.()}
  </div>
{/if}

<style>
  :global(.sh-item) {
    position: relative;
    display: flex;
    gap: 1rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    padding: 1rem;
    transition: background-color 0.2s;
  }

  :global(.sh-item:hover) {
    background-color: color-mix(in srgb, var(--muted), transparent 50%);
  }

  :global(.sh-item:has([data-slot='item-description'])) :global(.sh-item__media) {
    transform: translateY(0.125rem); /* translate-y-0.5 */
    align-self: flex-start;
  }
</style>
