<script lang="ts" module>
  export type EmptyMediaVariant = 'default' | 'icon';
</script>

<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    variant = 'default',
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    variant?: EmptyMediaVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="empty-icon"
  data-variant={variant}
  class={cn('sh-empty__media', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-empty__media {
    margin-bottom: 0.5rem;
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  .sh-empty__media :global(svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  /* Variant: default */
  .sh-empty__media[data-variant='default'] {
    background-color: transparent;
  }

  /* Variant: icon */
  .sh-empty__media[data-variant='icon'] {
    background-color: var(--muted);
    color: var(--foreground);
    width: 2.5rem;
    height: 2.5rem;
    border-radius: var(--radius);
  }

  .sh-empty__media[data-variant='icon'] :global(svg:not([class*='size-'])) {
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
