<script lang="ts">
  import { AlertDialog as AlertDialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: AlertDialogPrimitive.OverlayProps = $props();
</script>

<AlertDialogPrimitive.Overlay
  bind:ref
  data-slot="alert-dialog-overlay"
  class={cn('sh-alert-dialog__overlay', className)}
  {...restProps}
/>

<style>
  .sh-alert-dialog__overlay {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: rgb(0 0 0 / 0.5);
  }

  .sh-alert-dialog__overlay[data-state='open'] {
    animation: sh-alert-dialog-fade-in 150ms ease-out;
  }

  .sh-alert-dialog__overlay[data-state='closed'] {
    animation: sh-alert-dialog-fade-out 150ms ease-in;
  }

  @keyframes sh-alert-dialog-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes sh-alert-dialog-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
