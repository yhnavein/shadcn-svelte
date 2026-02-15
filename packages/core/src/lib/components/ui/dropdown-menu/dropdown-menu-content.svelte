<script lang="ts">
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import DropdownMenuPortal from './dropdown-menu-portal.svelte';
  import { DropdownMenu as DropdownMenuPrimitive } from 'bits-ui';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    sideOffset = 4,
    portalProps,
    class: className,
    ...restProps
  }: DropdownMenuPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof DropdownMenuPortal>>;
  } = $props();
</script>

<DropdownMenuPortal {...portalProps}>
  <DropdownMenuPrimitive.Content
    bind:ref
    data-slot="dropdown-menu-content"
    {sideOffset}
    class={cn('sh-dropdown-menu__content', className)}
    {...restProps}
  />
</DropdownMenuPortal>

<style>
  @keyframes sh-dropdown-enter {
    from {
      opacity: 0;
      transform: scale(0.95)
        translate(var(--sh-dropdown-enter-translate-x, 0), var(--sh-dropdown-enter-translate-y, 0));
    }
    to {
      opacity: 1;
      transform: scale(1) translate(0, 0);
    }
  }

  @keyframes sh-dropdown-exit {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :global(.sh-dropdown-menu__content) {
    z-index: 50;
    min-width: 8rem;
    overflow: hidden;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background-color: var(--popover);
    padding: 0.25rem;
    color: var(--popover-foreground);
    outline: none;
    max-height: var(--bits-dropdown-menu-content-available-height);
    transform-origin: var(--bits-dropdown-menu-content-transform-origin);
    overflow-x: hidden;
    overflow-y: auto;
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  :global(.sh-dropdown-menu__content[data-state='open']) {
    animation: sh-dropdown-enter 0.1s ease-out;
  }

  :global(.sh-dropdown-menu__content[data-state='closed']) {
    animation: sh-dropdown-exit 0.1s ease-in;
  }

  :global(.sh-dropdown-menu__content[data-side='bottom']) {
    --sh-dropdown-enter-translate-y: -0.5rem;
  }
  :global(.sh-dropdown-menu__content[data-side='top']) {
    --sh-dropdown-enter-translate-y: 0.5rem;
  }
  :global(.sh-dropdown-menu__content[data-side='left']) {
    --sh-dropdown-enter-translate-x: 0.5rem;
  }
  :global(.sh-dropdown-menu__content[data-side='right']) {
    --sh-dropdown-enter-translate-x: -0.5rem;
  }
</style>
