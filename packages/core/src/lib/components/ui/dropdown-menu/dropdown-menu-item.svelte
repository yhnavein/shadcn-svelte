<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    variant = 'default',
    ...restProps
  }: DropdownMenuPrimitive.ItemProps & {
    inset?: boolean;
    variant?: 'default' | 'destructive';
  } = $props();
</script>

<DropdownMenuPrimitive.Item
  bind:ref
  data-slot="dropdown-menu-item"
  data-inset={inset}
  data-variant={variant}
  class={cn('sh-dropdown-menu__item', className)}
  {...restProps}
/>

<style>
  :global(.sh-dropdown-menu__item) {
    position: relative;
    display: flex;
    cursor: default;
    user-select: none;
    align-items: center;
    border-radius: var(--radius-sm);
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    outline: none;
    gap: 0.5rem;
    transition:
      background-color 0.15s ease,
      color 0.15s ease;
  }

  :global(.sh-dropdown-menu__item:focus),
  :global(.sh-dropdown-menu__item[data-highlighted]) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-dropdown-menu__item[data-disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-dropdown-menu__item[data-inset]) {
    padding-left: 2rem;
  }

  /* Icons styling */
  :global(.sh-dropdown-menu__item svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-dropdown-menu__item svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  :global(.sh-dropdown-menu__item svg:not([class*='text-'])) {
    color: var(--muted-foreground);
  }

  :global(.sh-dropdown-menu__item:focus svg:not([class*='text-'])),
  :global(.sh-dropdown-menu__item[data-highlighted] svg:not([class*='text-'])) {
    color: currentColor;
  }

  /* Destructive variant */
  :global(.sh-dropdown-menu__item[data-variant='destructive']) {
    color: var(--destructive);
  }
  :global(.sh-dropdown-menu__item[data-variant='destructive'] svg) {
    color: var(--destructive) !important;
  }

  :global(.sh-dropdown-menu__item[data-variant='destructive'][data-highlighted]) {
    background-color: color-mix(in srgb, var(--destructive), transparent 90%);
    color: var(--destructive);
  }

  :global(.dark .sh-dropdown-menu__item[data-variant='destructive'][data-highlighted]) {
    background-color: color-mix(in srgb, var(--destructive), transparent 80%);
  }
</style>
