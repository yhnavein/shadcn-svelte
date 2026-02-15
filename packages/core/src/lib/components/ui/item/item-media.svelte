<script lang="ts" module>
  export type ItemMediaVariant = 'default' | 'icon' | 'image';
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
    variant?: ItemMediaVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="item-media"
  data-variant={variant}
  class={cn('sh-item__media', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  /* Media Styles */
  .sh-item__media {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .sh-item__media :global(svg) {
    pointer-events: none;
  }

  /* Variant: default */
  .sh-item__media[data-variant='default'] {
    background-color: transparent;
  }

  /* Variant: icon */
  .sh-item__media[data-variant='icon'] {
    background-color: var(--muted);
    width: 2rem; /* size-8 */
    height: 2rem;
    border-radius: var(--radius-sm);
    border: 1px solid var(--border); /* Implicit border from Tailwind 'border' class */
  }

  .sh-item__media[data-variant='icon'] :global(svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  /* Variant: image */
  .sh-item__media[data-variant='image'] {
    width: 2.5rem; /* size-10 */
    height: 2.5rem;
    overflow: hidden;
    border-radius: var(--radius-sm);
  }

  .sh-item__media[data-variant='image'] :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
