<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    inset,
    children,
    ...restProps
  }: WithoutChild<ContextMenuPrimitive.SubTriggerProps> & {
    inset?: boolean;
  } = $props();
</script>

<ContextMenuPrimitive.SubTrigger
  bind:ref
  data-slot="context-menu-sub-trigger"
  data-inset={inset}
  class={cn('sh-context-menu__sub-trigger', className)}
  {...restProps}
>
  {@render children?.()}
  <ChevronRightIcon class="ms-auto" />
</ContextMenuPrimitive.SubTrigger>

<style>
  :global(.sh-context-menu__sub-trigger) {
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

  :global(.sh-context-menu__sub-trigger:focus),
  :global(.sh-context-menu__sub-trigger[data-highlighted]),
  :global(.sh-context-menu__sub-trigger[data-state='open']) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-context-menu__sub-trigger[data-disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-context-menu__sub-trigger[data-inset]) {
    padding-left: 2rem;
  }

  /* Icons styling */
  :global(.sh-context-menu__sub-trigger svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-context-menu__sub-trigger svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  :global(.sh-context-menu__sub-trigger svg:not([class*='text-'])) {
    color: var(--muted-foreground);
  }

  :global(.sh-context-menu__sub-trigger:focus svg:not([class*='text-'])),
  :global(.sh-context-menu__sub-trigger[data-highlighted] svg:not([class*='text-'])),
  :global(.sh-context-menu__sub-trigger[data-state='open'] svg:not([class*='text-'])) {
    color: currentColor;
  }
</style>
