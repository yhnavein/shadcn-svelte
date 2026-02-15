<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import AlertDialogPortal from './alert-dialog-portal.svelte';
  import AlertDialogOverlay from './alert-dialog-overlay.svelte';
  import { cn, type WithoutChild, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    ...restProps
  }: WithoutChild<AlertDialogPrimitive.ContentProps> & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof AlertDialogPortal>>;
  } = $props();
</script>

<AlertDialogPortal {...portalProps}>
  <AlertDialogOverlay />
  <AlertDialogPrimitive.Content
    bind:ref
    data-slot="alert-dialog-content"
    class={cn('sh-alert-dialog__content', className)}
    {...restProps}
  />
</AlertDialogPortal>

<style>
  .sh-alert-dialog__content {
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 50;
    display: grid;
    width: 100%;
    max-width: calc(100% - 2rem);
    transform: translate(-50%, -50%);
    gap: 1rem;
    border: 1px solid var(--border);
    background-color: var(--background);
    padding: 1.5rem;
    box-shadow:
      0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -2px rgb(0 0 0 / 0.05);
    border-radius: var(--radius-lg, 0.5rem);
    transition-duration: 200ms;
  }

  @media (min-width: 640px) {
    .sh-alert-dialog__content {
      max-width: 32rem;
    }
  }

  .sh-alert-dialog__content[data-state='open'] {
    animation: sh-alert-dialog-zoom-in 200ms ease-out;
  }

  .sh-alert-dialog__content[data-state='closed'] {
    animation: sh-alert-dialog-zoom-out 200ms ease-in;
  }

  @keyframes sh-alert-dialog-zoom-in {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  @keyframes sh-alert-dialog-zoom-out {
    from {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
    to {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.95);
    }
  }
</style>
