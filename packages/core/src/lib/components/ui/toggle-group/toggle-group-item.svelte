<script lang="ts">
  import { ToggleGroup as ToggleGroupPrimitive } from 'bits-ui';
  import { getToggleGroupCtx } from './toggle-group.svelte';
  import { cn } from '$lib/utils.js';
  import type { ToggleVariant, ToggleSize } from '$lib/components/ui/toggle/index.js';

  let {
    ref = $bindable(null),
    value = $bindable(),
    class: className,
    size,
    variant,
    ...restProps
  }: ToggleGroupPrimitive.ItemProps & {
    variant?: ToggleVariant;
    size?: ToggleSize;
  } = $props();

  const ctx = getToggleGroupCtx();
</script>

<ToggleGroupPrimitive.Item
  bind:ref
  data-slot="toggle-group-item"
  data-variant={ctx.variant || variant}
  data-size={ctx.size || size}
  data-spacing={ctx.spacing}
  class={cn('sh-toggle', 'sh-toggle-group-item', className)}
  {value}
  {...restProps}
/>

<style>
  /* Toggle Styles (Duplicated from toggle.svelte) */
  :global(.sh-toggle) {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    transition-property: color, background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    background-color: transparent;
  }

  :global(.sh-toggle:hover) {
    background-color: var(--muted);
    color: var(--muted-foreground);
  }

  :global(.sh-toggle:focus-visible) {
    outline: none;
    box-shadow:
      0 0 0 2px var(--background),
      0 0 0 4px var(--ring);
  }

  :global(.sh-toggle[data-state='on']) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-toggle:disabled) {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Variants */
  :global(.sh-toggle[data-variant='default']) {
    background-color: transparent;
  }

  :global(.sh-toggle[data-variant='outline']) {
    border: 1px solid var(--input);
    background-color: transparent;
  }

  :global(.sh-toggle[data-variant='outline']:hover) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  /* Sizes */
  :global(.sh-toggle[data-size='default']) {
    height: 2.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  :global(.sh-toggle[data-size='sm']) {
    height: 2.25rem;
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  :global(.sh-toggle[data-size='lg']) {
    height: 2.75rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }

  /* Toggle Group Item Styles */
  :global(.sh-toggle-group-item) {
    width: auto;
    min-width: 0;
    flex-shrink: 0;
  }

  :global(.sh-toggle-group-item:focus),
  :global(.sh-toggle-group-item:focus-visible) {
    z-index: 10;
  }

  /* Joined items logic */
  :global(.sh-toggle-group-item[data-spacing='0']) {
    border-radius: 0;
    box-shadow: none;
  }

  :global(.sh-toggle-group-item[data-spacing='0']:first-child) {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }

  :global(.sh-toggle-group-item[data-spacing='0']:last-child) {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }

  :global(.sh-toggle-group-item[data-spacing='0'][data-variant='outline']) {
    border-left-width: 0;
  }

  :global(.sh-toggle-group-item[data-spacing='0'][data-variant='outline']:first-child) {
    border-left-width: 1px;
  }
</style>
