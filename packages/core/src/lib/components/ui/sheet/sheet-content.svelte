<script lang="ts" module>
  export type Side = 'top' | 'bottom' | 'left' | 'right';
</script>

<script lang="ts">
  import { Dialog as SheetPrimitive } from 'bits-ui';
  import XIcon from '@lucide/svelte/icons/x';
  import type { Snippet } from 'svelte';
  import SheetPortal from './sheet-portal.svelte';
  import SheetOverlay from './sheet-overlay.svelte';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    side = 'right',
    portalProps,
    children,
    ...restProps
  }: WithoutChildrenOrChild<SheetPrimitive.ContentProps> & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof SheetPortal>>;
    side?: Side;
    children: Snippet;
  } = $props();
</script>

<SheetPortal {...portalProps}>
  <SheetOverlay />
  <SheetPrimitive.Content
    bind:ref
    data-slot="sheet-content"
    data-side={side}
    class={cn('sh-sheet__content', className)}
    {...restProps}
  >
    {@render children?.()}
    <SheetPrimitive.Close class="sh-sheet__close">
      <XIcon />
      <span class="sr-only">Close</span>
    </SheetPrimitive.Close>
  </SheetPrimitive.Content>
</SheetPortal>

<style>
  @keyframes sh-slide-in-from-top {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes sh-slide-out-to-top {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-100%);
    }
  }
  @keyframes sh-slide-in-from-bottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
  @keyframes sh-slide-out-to-bottom {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
  @keyframes sh-slide-in-from-left {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes sh-slide-out-to-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes sh-slide-in-from-right {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
  @keyframes sh-slide-out-to-right {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }

  :global(.sh-sheet__content) {
    position: fixed;
    z-index: 50;
    gap: 1rem;
    background-color: var(--background);
    padding: 1.5rem;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
    transition: all 300ms ease-in-out;
    display: flex;
    flex-direction: column;
  }

  :global(.sh-sheet__content[data-state='open']) {
    transition-duration: 500ms;
  }
  :global(.sh-sheet__content[data-state='closed']) {
    transition-duration: 300ms;
  }

  /* Side Variants */
  :global(.sh-sheet__content[data-side='top']) {
    inset-inline: 0;
    top: 0;
    border-bottom: 1px solid var(--border);
  }
  :global(.sh-sheet__content[data-side='top'][data-state='open']) {
    animation: sh-slide-in-from-top 0.5s ease-in-out;
  }
  :global(.sh-sheet__content[data-side='top'][data-state='closed']) {
    animation: sh-slide-out-to-top 0.3s ease-in-out;
  }

  :global(.sh-sheet__content[data-side='bottom']) {
    inset-inline: 0;
    bottom: 0;
    border-top: 1px solid var(--border);
  }
  :global(.sh-sheet__content[data-side='bottom'][data-state='open']) {
    animation: sh-slide-in-from-bottom 0.5s ease-in-out;
  }
  :global(.sh-sheet__content[data-side='bottom'][data-state='closed']) {
    animation: sh-slide-out-to-bottom 0.3s ease-in-out;
  }

  :global(.sh-sheet__content[data-side='left']) {
    inset-block: 0;
    inset-inline-start: 0;
    height: 100%;
    width: 75%;
    border-inline-end: 1px solid var(--border);
  }
  @media (min-width: 640px) {
    :global(.sh-sheet__content[data-side='left']) {
      max-width: 24rem;
    }
  }
  :global(.sh-sheet__content[data-side='left'][data-state='open']) {
    animation: sh-slide-in-from-left 0.5s ease-in-out;
  }
  :global(.sh-sheet__content[data-side='left'][data-state='closed']) {
    animation: sh-slide-out-to-left 0.3s ease-in-out;
  }

  :global(.sh-sheet__content[data-side='right']) {
    inset-block: 0;
    inset-inline-end: 0;
    height: 100%;
    width: 75%;
    border-inline-start: 1px solid var(--border);
  }
  @media (min-width: 640px) {
    :global(.sh-sheet__content[data-side='right']) {
      max-width: 24rem;
    }
  }
  :global(.sh-sheet__content[data-side='right'][data-state='open']) {
    animation: sh-slide-in-from-right 0.5s ease-in-out;
  }
  :global(.sh-sheet__content[data-side='right'][data-state='closed']) {
    animation: sh-slide-out-to-right 0.3s ease-in-out;
  }

  :global(.sh-sheet__close) {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border-radius: 0.125rem;
    opacity: 0.7;
    transition: opacity 150ms;
    background: transparent;
    border: none;
    cursor: pointer;
    color: var(--foreground);
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :global(.sh-sheet__close:hover) {
    opacity: 1;
  }
  :global(.sh-sheet__close:focus-visible) {
    outline: none;
    box-shadow:
      0 0 0 2px var(--ring),
      0 0 0 4px var(--background);
  }
  :global(.sh-sheet__close:disabled) {
    pointer-events: none;
  }
  :global(.sh-sheet__close svg) {
    width: 1rem;
    height: 1rem;
  }
</style>
