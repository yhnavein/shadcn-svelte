<script lang="ts">
  import { ScrollArea as ScrollAreaPrimitive } from 'bits-ui';
  import { Scrollbar } from './index.js';
  import { cn, type WithoutChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    viewportRef = $bindable(null),
    class: className,
    orientation = 'vertical',
    scrollbarXClasses = '',
    scrollbarYClasses = '',
    children,
    ...restProps
  }: WithoutChild<ScrollAreaPrimitive.RootProps> & {
    orientation?: 'vertical' | 'horizontal' | 'both' | undefined;
    scrollbarXClasses?: string | undefined;
    scrollbarYClasses?: string | undefined;
    viewportRef?: HTMLElement | null;
  } = $props();
</script>

<ScrollAreaPrimitive.Root
  bind:ref
  data-slot="scroll-area"
  class={cn('sh-scroll-area', className)}
  {...restProps}
>
  <ScrollAreaPrimitive.Viewport
    bind:ref={viewportRef}
    data-slot="scroll-area-viewport"
    class="sh-scroll-area__viewport"
  >
    {@render children?.()}
  </ScrollAreaPrimitive.Viewport>
  {#if orientation === 'vertical' || orientation === 'both'}
    <Scrollbar orientation="vertical" class={scrollbarYClasses} />
  {/if}
  {#if orientation === 'horizontal' || orientation === 'both'}
    <Scrollbar orientation="horizontal" class={scrollbarXClasses} />
  {/if}
  <ScrollAreaPrimitive.Corner />
</ScrollAreaPrimitive.Root>

<style>
  :global(.sh-scroll-area) {
    position: relative;
    overflow: hidden;
  }

  :global(.sh-scroll-area__viewport) {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  :global(.sh-scroll-area__viewport:focus-visible) {
    outline: 2px solid var(--ring);
    outline-offset: 2px;
  }
</style>
