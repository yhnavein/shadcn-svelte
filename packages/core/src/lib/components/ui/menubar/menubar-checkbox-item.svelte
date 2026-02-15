<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import CheckIcon from '@lucide/svelte/icons/check';
  import MinusIcon from '@lucide/svelte/icons/minus';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { Snippet } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    checked = $bindable(false),
    indeterminate = $bindable(false),
    children: childrenProp,
    ...restProps
  }: WithoutChildrenOrChild<MenubarPrimitive.CheckboxItemProps> & {
    children?: Snippet;
  } = $props();
</script>

<MenubarPrimitive.CheckboxItem
  bind:ref
  bind:checked
  bind:indeterminate
  data-slot="menubar-checkbox-item"
  class={cn('sh-menubar__checkbox-item', className)}
  {...restProps}
>
  {#snippet children({ checked, indeterminate })}
    <span class="sh-menubar__item-indicator">
      {#if indeterminate}
        <MinusIcon class="size-4" />
      {:else}
        <CheckIcon class={cn('size-4', !checked && 'text-transparent')} />
      {/if}
    </span>
    {@render childrenProp?.()}
  {/snippet}
</MenubarPrimitive.CheckboxItem>

<style>
  :global(.sh-menubar__checkbox-item) {
    position: relative;
    display: flex;
    cursor: default;
    align-items: center;
    gap: 0.5rem;
    border-radius: var(--radius-sm);
    padding: 0.375rem 0.5rem 0.375rem 2rem;
    font-size: 0.875rem;
    outline: none;
    user-select: none;
  }

  :global(.sh-menubar__checkbox-item:focus) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-menubar__checkbox-item[data-disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-menubar__checkbox-item svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-menubar__checkbox-item svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  .sh-menubar__item-indicator {
    pointer-events: none;
    position: absolute;
    inset-inline-start: 0.5rem;
    display: flex;
    width: 0.875rem;
    height: 0.875rem;
    align-items: center;
    justify-content: center;
  }
</style>
