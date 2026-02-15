<script lang="ts">
  import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    orientation = 'vertical',
    children,
    ...restProps
  }: WithoutChild<ScrollAreaPrimitive.ScrollbarProps> = $props();
</script>

<ScrollAreaPrimitive.Scrollbar
  bind:ref
  data-slot="scroll-area-scrollbar"
  {orientation}
  class={cn('sh-scroll-area__scrollbar', className)}
  {...restProps}
>
  {@render children?.()}
  <ScrollAreaPrimitive.Thumb data-slot="scroll-area-thumb" class="sh-scroll-area__thumb" />
</ScrollAreaPrimitive.Scrollbar>

<style>
  :global(.sh-scroll-area__scrollbar) {
    display: flex;
    touch-action: none;
    user-select: none;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    padding: 1px;
  }

  :global(.sh-scroll-area__scrollbar[data-orientation='vertical']) {
    height: 100%;
    width: 0.625rem;
    border-inline-start: 1px solid transparent;
  }

  :global(.sh-scroll-area__scrollbar[data-orientation='horizontal']) {
    height: 0.625rem;
    flex-direction: column;
    border-top: 1px solid transparent;
  }

  :global(.sh-scroll-area__thumb) {
    position: relative;
    flex: 1;
    border-radius: 9999px;
    background-color: var(--border);
  }
</style>
