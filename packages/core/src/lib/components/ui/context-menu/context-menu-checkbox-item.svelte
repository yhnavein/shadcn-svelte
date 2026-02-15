<script lang="ts">
  import { ContextMenu as ContextMenuPrimitive } from 'bits-ui';
  import CheckIcon from '@lucide/svelte/icons/check';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { Snippet } from 'svelte';

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    children: childrenProp,
    ...restProps
  }: WithoutChildrenOrChild<ContextMenuPrimitive.CheckboxItemProps> & {
    children?: Snippet;
  } = $props();
</script>

<ContextMenuPrimitive.CheckboxItem
  bind:ref
  bind:checked
  bind:indeterminate
  data-slot="context-menu-checkbox-item"
  class={cn('sh-context-menu__checkbox-item', className)}
  {...restProps}
>
  {#snippet children({ checked })}
    <span class="pointer-events-none absolute start-2 flex size-3.5 items-center justify-center">
      {#if checked}
        <CheckIcon class="size-4" />
      {/if}
    </span>
    {@render childrenProp?.()}
  {/snippet}
</ContextMenuPrimitive.CheckboxItem>

<style>
  :global(.sh-context-menu__checkbox-item) {
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

  :global(.sh-context-menu__checkbox-item:focus),
  :global(.sh-context-menu__checkbox-item[data-highlighted]) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-context-menu__checkbox-item[data-disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Icons styling */
  :global(.sh-context-menu__checkbox-item svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-context-menu__checkbox-item svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }
</style>
