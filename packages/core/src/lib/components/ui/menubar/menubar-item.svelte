<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    inset = undefined,
    variant = 'default',
    ...restProps
  }: MenubarPrimitive.ItemProps & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
  } = $props();
</script>

<MenubarPrimitive.Item
  bind:ref
  data-slot="menubar-item"
  data-inset={inset}
  data-variant={variant}
  class={cn('sh-menubar__item', className)}
  {...restProps}
/>

<style>
  :global(.sh-menubar__item) {
    position: relative;
    display: flex;
    cursor: default;
    align-items: center;
    gap: 0.5rem;
    border-radius: var(--radius-sm);
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    outline: none;
    user-select: none;
  }

  :global(.sh-menubar__item[data-inset]) {
    padding-inline-start: 2rem;
  }

  :global(.sh-menubar__item:focus) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-menubar__item[data-disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-menubar__item svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-menubar__item svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  :global(.sh-menubar__item svg:not([class*='text-'])) {
    color: var(--muted-foreground);
  }

  /* Destructive variant */
  :global(.sh-menubar__item[data-variant='destructive']) {
    color: var(--destructive);
  }

  :global(.sh-menubar__item[data-variant='destructive']:focus) {
    background-color: color-mix(in srgb, var(--destructive), transparent 90%);
    color: var(--destructive);
  }

  :global(.sh-menubar__item[data-variant='destructive'] svg:not([class*='text-'])) {
    color: var(--destructive);
  }
</style>
