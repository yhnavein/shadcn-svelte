<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import DialogPortal from './dialog-portal.svelte';
  import XIcon from '@lucide/svelte/icons/x';
  import type { Snippet } from 'svelte';
  import * as Dialog from './index.js';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    children,
    showCloseButton = true,
    ...restProps
  }: WithoutChildrenOrChild<DialogPrimitive.ContentProps> & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof DialogPortal>>;
    children: Snippet;
    showCloseButton?: boolean;
  } = $props();
</script>

<DialogPortal {...portalProps}>
  <Dialog.Overlay />
  <DialogPrimitive.Content
    bind:ref
    data-slot="dialog-content"
    class={cn('sh-dialog__content', className)}
    {...restProps}
  >
    {@render children?.()}
    {#if showCloseButton}
      <DialogPrimitive.Close class="sh-dialog__close">
        <XIcon class="size-4" />
        <span class="sr-only">Close</span>
      </DialogPrimitive.Close>
    {/if}
  </DialogPrimitive.Content>
</DialogPortal>

<style>
  @keyframes sh-dialog-zoom-in {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes sh-dialog-zoom-out {
    from {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.95);
    }
  }

  :global(.sh-dialog__content) {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 50;
    display: grid;
    width: 100%;
    max-width: 32rem; /* max-w-lg */
    transform: translate(-50%, -50%);
    gap: 1rem;
    border: 1px solid var(--border);
    background-color: var(--background);
    padding: 1.5rem;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -2px rgb(0 0 0 / 0.05); /* shadow-lg */
    border-radius: var(--radius-lg, 0.5rem);
    transition-duration: 200ms;
  }

  :global(.sh-dialog__content[data-state='open']) {
    animation: sh-dialog-zoom-in 200ms ease-out;
  }

  :global(.sh-dialog__content[data-state='closed']) {
    animation: sh-dialog-zoom-out 200ms ease-in;
  }

  :global(.sh-dialog__close) {
    position: absolute;
    right: 1rem;
    top: 1rem;
    border-radius: var(--radius-sm, 0.125rem); /* rounded-sm */
    opacity: 0.7;
    transition: opacity 200ms;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    color: var(--foreground);
  }

  :global(.sh-dialog__close:hover) {
    opacity: 1;
  }

  :global(.sh-dialog__close:focus) {
    outline: none;
    box-shadow:
      0 0 0 2px var(--ring),
      0 0 0 4px var(--background); /* focus:ring-2 focus:ring-offset-2 approx */
  }

  :global(.sh-dialog__close:disabled) {
    pointer-events: none;
  }
</style>
