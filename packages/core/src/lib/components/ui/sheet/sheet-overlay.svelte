<script lang="ts">
  import { Dialog as SheetPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: SheetPrimitive.OverlayProps = $props();
</script>

<SheetPrimitive.Overlay
  bind:ref
  data-slot="sheet-overlay"
  class={cn('sh-sheet__overlay', className)}
  {...restProps}
/>

<style>
  @keyframes sh-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes sh-fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  :global(.sh-sheet__overlay) {
    position: fixed;
    inset: 0;
    z-index: 50;
    background-color: rgb(0 0 0 / 0.8);
  }

  :global(.sh-sheet__overlay[data-state='open']) {
    animation: sh-fade-in 150ms ease-out;
  }

  :global(.sh-sheet__overlay[data-state='closed']) {
    animation: sh-fade-out 150ms ease-in;
  }
</style>
