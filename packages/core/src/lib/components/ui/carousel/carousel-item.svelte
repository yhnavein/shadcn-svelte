<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { getEmblaContext } from './context.js';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

  const emblaCtx = getEmblaContext('<Carousel.Item/>');
</script>

<div
  bind:this={ref}
  data-slot="carousel-item"
  role="group"
  aria-roledescription="slide"
  class={cn('sh-carousel__item', className)}
  data-orientation={emblaCtx.orientation}
  data-embla-slide=""
  {...restProps}
>
  {@render children?.()}
</div>
