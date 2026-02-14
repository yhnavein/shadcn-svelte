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
