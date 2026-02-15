<script lang="ts">
  import { Dialog as DialogPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DialogPrimitive.CloseProps = $props();
</script>

<DialogPrimitive.Close
  bind:ref
  data-slot="dialog-close"
  class={cn('sh-dialog__close', className)}
  {...restProps}
/>

<style>
  :global(.sh-dialog__close) {
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
