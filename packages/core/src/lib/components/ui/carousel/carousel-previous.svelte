<script lang="ts">
  import ArrowLeftIcon from '@lucide/svelte/icons/arrow-left';
  import type { WithoutChildren } from 'bits-ui';
  import { getEmblaContext } from './context.js';
  import { cn } from '$lib/utils.js';
  import { Button, type Props } from '$lib/components/ui/button/index.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'outline',
    size = 'icon',
    ...restProps
  }: WithoutChildren<Props> = $props();

  const emblaCtx = getEmblaContext('<Carousel.Previous/>');
</script>

<Button
  data-slot="carousel-previous"
  {variant}
  {size}
  aria-disabled={!emblaCtx.canScrollPrev}
  class={cn('sh-carousel__nav', className)}
  data-orientation={emblaCtx.orientation}
  data-variant="prev"
  onclick={emblaCtx.scrollPrev}
  onkeydown={emblaCtx.handleKeyDown}
  {...restProps}
  bind:ref
>
  <ArrowLeftIcon class="size-4" />
  <span class="sr-only">Previous slide</span>
</Button>

<style>
  :global(.sh-carousel__nav) {
    position: absolute;
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
  }

  :global(.sh-carousel__nav[data-variant='prev'][data-orientation='horizontal']) {
    inset-inline-start: -3rem;
    top: 50%;
    transform: translateY(-50%);
  }

  :global(.sh-carousel__nav[data-variant='prev'][data-orientation='vertical']) {
    inset-inline-start: 50%;
    top: -3rem;
    transform: translateX(-50%) rotate(90deg);
  }
</style>
