<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: TabsPrimitive.TriggerProps = $props();
</script>

<TabsPrimitive.Trigger
  bind:ref
  data-slot="tabs-trigger"
  class={cn('sh-tabs__trigger', className)}
  {...restProps}
/>

<style>
  .sh-tabs__trigger {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: var(--radius-sm);
    padding: 0.25rem 0.5rem; /* px-2 py-1 */
    font-size: 0.875rem;
    font-weight: 500;
    gap: 0.375rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    height: 100%;
    border: 1px solid transparent; /* Align with TW border-transparent */
  }

  .sh-tabs__trigger:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--background),
      0 0 0 4px var(--ring);
  }

  .sh-tabs__trigger:disabled {
    pointer-events: none;
    opacity: 0.5;
  }

  .sh-tabs__trigger :global(svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  .sh-tabs__trigger :global(svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  .sh-tabs__trigger[data-state='active'] {
    background-color: var(--background);
    color: var(--foreground);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  }
</style>
