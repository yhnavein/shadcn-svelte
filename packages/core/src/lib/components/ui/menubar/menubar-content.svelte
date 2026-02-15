<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import MenubarPortal from './menubar-portal.svelte';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    sideOffset = 8,
    alignOffset = -4,
    align = 'start',
    side = 'bottom',
    portalProps,
    ...restProps
  }: MenubarPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof MenubarPortal>>;
  } = $props();
</script>

<MenubarPortal {...portalProps}>
  <MenubarPrimitive.Content
    bind:ref
    data-slot="menubar-content"
    {sideOffset}
    {align}
    {alignOffset}
    {side}
    class={cn('sh-menubar__content', className)}
    {...restProps}
  />
</MenubarPortal>

<style>
  @keyframes sh-menubar-in-from-top {
    from {
      opacity: 0;
      transform: translateY(-0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sh-menubar-in-from-bottom {
    from {
      opacity: 0;
      transform: translateY(0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sh-menubar-in-from-left {
    from {
      opacity: 0;
      transform: translateX(-0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes sh-menubar-in-from-right {
    from {
      opacity: 0;
      transform: translateX(0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes sh-menubar-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :global(.sh-menubar__content) {
    z-index: 50;
    min-width: 12rem;
    overflow: hidden;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background-color: var(--popover);
    padding: 0.25rem;
    color: var(--popover-foreground);
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    transform-origin: var(--bits-menubar-content-transform-origin);
  }

  :global(.sh-menubar__content[data-state='open']) {
    animation-duration: 0.15s;
    animation-timing-function: ease-out;
  }

  :global(.sh-menubar__content[data-state='closed']) {
    animation: sh-menubar-out 0.15s ease-in;
  }

  :global(.sh-menubar__content[data-state='open'][data-side='bottom']) {
    animation-name: sh-menubar-in-from-top;
  }

  :global(.sh-menubar__content[data-state='open'][data-side='top']) {
    animation-name: sh-menubar-in-from-bottom;
  }

  :global(.sh-menubar__content[data-state='open'][data-side='left']) {
    animation-name: sh-menubar-in-from-right;
  }

  :global(.sh-menubar__content[data-state='open'][data-side='right']) {
    animation-name: sh-menubar-in-from-left;
  }
</style>
