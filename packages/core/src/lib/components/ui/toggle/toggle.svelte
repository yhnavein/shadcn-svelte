<script lang="ts" module>
  export type ToggleVariant = 'default' | 'outline';
  export type ToggleSize = 'default' | 'sm' | 'lg';
</script>

<script lang="ts">
  import { Toggle as TogglePrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    pressed = $bindable(false),
    class: className,
    size = 'default',
    variant = 'default',
    ...restProps
  }: TogglePrimitive.RootProps & {
    variant?: ToggleVariant;
    size?: ToggleSize;
  } = $props();
</script>

<TogglePrimitive.Root
  bind:ref
  bind:pressed
  data-slot="toggle"
  data-variant={variant}
  data-size={size}
  class={cn('sh-toggle', className)}
  {...restProps}
/>

<style>
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
</style>
