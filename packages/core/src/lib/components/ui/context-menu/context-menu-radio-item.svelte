<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import CircleIcon from '@lucide/svelte/icons/circle';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children: childrenProp,
    ...restProps
  }: WithoutChild<ContextMenuPrimitive.RadioItemProps> = $props();
</script>

<ContextMenuPrimitive.RadioItem
  bind:ref
  data-slot="context-menu-radio-item"
  class={cn('sh-context-menu__radio-item', className)}
  {...restProps}
>
  {#snippet children({ checked })}
    <span class="pointer-events-none absolute start-2 flex size-3.5 items-center justify-center">
      {#if checked}
        <CircleIcon class="size-2 fill-current" />
      {/if}
    </span>
    {@render childrenProp?.({ checked })}
  {/snippet}
</ContextMenuPrimitive.RadioItem>

<style>
  :global(.sh-context-menu__radio-item) {
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
    padding-left: 2rem;
    padding-right: 0.5rem;
  }

  :global(.sh-context-menu__radio-item:focus),
  :global(.sh-context-menu__radio-item[data-highlighted]) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-context-menu__radio-item[data-disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Icons styling */
  :global(.sh-context-menu__radio-item svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-context-menu__radio-item svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  :global(.sh-context-menu__radio-item svg:not([class*='text-'])) {
    color: var(--muted-foreground);
  }

  :global(.sh-context-menu__radio-item:focus svg:not([class*='text-'])),
  :global(.sh-context-menu__radio-item[data-highlighted] svg:not([class*='text-'])) {
    color: currentColor;
  }
</style>
