<script lang="ts">
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { getEmblaContext } from './context.js';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

  const emblaCtx = getEmblaContext('<Carousel.Content/>');
</script>

<div
  data-slot="carousel-content"
  class="sh-carousel__viewport"
  use:emblaCarouselSvelte={{
    options: {
      container: '[data-embla-container]',
      slides: '[data-embla-slide]',
      ...emblaCtx.options,
      axis: emblaCtx.orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins: emblaCtx.plugins,
  }}
  onemblaInit={emblaCtx.onInit}
>
  <div
    bind:this={ref}
    class={cn('sh-carousel__content', className)}
    data-orientation={emblaCtx.orientation}
    data-embla-container=""
    {...restProps}
  >
    {@render children?.()}
  </div>
</div>

<style>
  .sh-carousel__viewport {
    overflow: hidden;
  }

  .sh-carousel__content {
    display: flex;
  }

  .sh-carousel__content[data-orientation='horizontal'] {
    margin-inline-start: -1rem;
  }

  .sh-carousel__content[data-orientation='vertical'] {
    flex-direction: column;
    margin-top: -1rem;
  }
</style>
