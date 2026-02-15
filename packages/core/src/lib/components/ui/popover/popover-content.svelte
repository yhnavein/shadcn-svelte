<script lang="ts">
  import { Popover as PopoverPrimitive } from 'bits-ui';
  import PopoverPortal from './popover-portal.svelte';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    sideOffset = 4,
    align = 'center',
    portalProps,
    ...restProps
  }: PopoverPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof PopoverPortal>>;
  } = $props();
</script>

<PopoverPortal {...portalProps}>
  <PopoverPrimitive.Content
    bind:ref
    data-slot="popover-content"
    {sideOffset}
    {align}
    class={cn('sh-popover__content', className)}
    {...restProps}
  />
</PopoverPortal>

<style>
  @keyframes sh-popover-in-from-top {
    from {
      opacity: 0;
      transform: translateY(-0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sh-popover-in-from-bottom {
    from {
      opacity: 0;
      transform: translateY(0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @keyframes sh-popover-in-from-left {
    from {
      opacity: 0;
      transform: translateX(-0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes sh-popover-in-from-right {
    from {
      opacity: 0;
      transform: translateX(0.5rem) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @keyframes sh-popover-out {
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  :global(.sh-popover__content) {
    z-index: 50;
    width: 18rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background-color: var(--popover);
    padding: 1rem;
    color: var(--popover-foreground);
    box-shadow:
      0 4px 6px -1px rgb(0 0 0 / 0.1),
      0 2px 4px -2px rgb(0 0 0 / 0.1);
    outline: none;
    transform-origin: var(--bits-popover-content-transform-origin);
  }

  :global(.sh-popover__content[data-state='open']) {
    animation-duration: 0.2s;
    animation-timing-function: ease-out;
  }

  :global(.sh-popover__content[data-state='closed']) {
    animation: sh-popover-out 0.2s ease-in;
  }

  :global(.sh-popover__content[data-state='open'][data-side='bottom']) {
    animation-name: sh-popover-in-from-top;
  }

  :global(.sh-popover__content[data-state='open'][data-side='top']) {
    animation-name: sh-popover-in-from-bottom;
  }

  :global(.sh-popover__content[data-state='open'][data-side='left']) {
    animation-name: sh-popover-in-from-right;
  }

  :global(.sh-popover__content[data-state='open'][data-side='right']) {
    animation-name: sh-popover-in-from-left;
  }
</style>
