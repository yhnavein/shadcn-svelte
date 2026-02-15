<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DialogPrimitive.OverlayProps = $props();
</script>

<DialogPrimitive.Overlay
  bind:ref
  data-slot="dialog-overlay"
  class={cn('sh-dialog__overlay', className)}
  {...restProps}
/>

<style>
  @keyframes sh-dialog-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes sh-dialog-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  :global(.sh-dialog__overlay) {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: rgb(0 0 0 / 0.8);
  }

  :global(.sh-dialog__overlay[data-state='open']) {
    animation: sh-dialog-fade-in 150ms ease-out;
  }

  :global(.sh-dialog__overlay[data-state='closed']) {
    animation: sh-dialog-fade-out 150ms ease-in;
  }
</style>
