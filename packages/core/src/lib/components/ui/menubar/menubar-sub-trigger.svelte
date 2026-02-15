<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    inset = undefined,
    children,
    ...restProps
  }: WithoutChild<MenubarPrimitive.SubTriggerProps> & {
    inset?: boolean;
  } = $props();
</script>

<MenubarPrimitive.SubTrigger
  bind:ref
  data-slot="menubar-sub-trigger"
  data-inset={inset}
  class={cn('sh-menubar__sub-trigger', className)}
  {...restProps}
>
  {@render children?.()}
  <ChevronRightIcon class="ms-auto size-4" />
</MenubarPrimitive.SubTrigger>

<style>
  :global(.sh-menubar__sub-trigger) {
    display: flex;
    cursor: default;
    align-items: center;
    border-radius: var(--radius-sm);
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    outline: none;
    user-select: none;
  }

  :global(.sh-menubar__sub-trigger[data-inset]) {
    padding-inline-start: 2rem;
  }

  :global(.sh-menubar__sub-trigger:focus),
  :global(.sh-menubar__sub-trigger[data-state='open']) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-menubar__sub-trigger svg) {
    pointer-events: none;
    flex-shrink: 0;
  }

  :global(.sh-menubar__sub-trigger svg:not([class*='size-'])) {
    width: 1rem;
    height: 1rem;
  }

  :global(.sh-menubar__sub-trigger svg:not([class*='text-'])) {
    color: var(--muted-foreground);
  }
</style>
