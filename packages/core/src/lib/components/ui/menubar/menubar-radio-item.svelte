<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import CircleIcon from '@lucide/svelte/icons/circle';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children: childrenProp,
    ...restProps
  }: WithoutChild<MenubarPrimitive.RadioItemProps> = $props();
</script>

<MenubarPrimitive.RadioItem
  bind:ref
  data-slot="menubar-radio-item"
  class={cn('sh-menubar__radio-item', className)}
  {...restProps}
>
  {#snippet children({ checked })}
    <span class="sh-menubar__item-indicator">
      {#if checked}
        <CircleIcon class="size-2 fill-current" />
      {/if}
    </span>
    {@render childrenProp?.({ checked })}
  {/snippet}
</MenubarPrimitive.RadioItem>

<style>
  :global(.sh-menubar__radio-item) {
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

  :global(.sh-menubar__radio-item:focus) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-menubar__radio-item[data-disabled]) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-menubar__radio-item svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-menubar__radio-item svg:not([class*='size-'])) {
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
