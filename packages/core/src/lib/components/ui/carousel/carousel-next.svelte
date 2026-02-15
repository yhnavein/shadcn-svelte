<script lang="ts">
  import ArrowRightIcon from '@lucide/svelte/icons/arrow-right';
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

  const emblaCtx = getEmblaContext('<Carousel.Next/>');
</script>

<Button
  data-slot="carousel-next"
  {variant}
  {size}
  aria-disabled={!emblaCtx.canScrollNext}
  class={cn('sh-carousel__nav', className)}
  data-orientation={emblaCtx.orientation}
  data-variant="next"
  onclick={emblaCtx.scrollNext}
  onkeydown={emblaCtx.handleKeyDown}
  bind:ref
  {...restProps}
>
  <ArrowRightIcon class="size-4" />
  <span class="sr-only">Next slide</span>
</Button>

<style>
  :global(.sh-carousel__nav) {
    position: absolute;
    height: 2rem;
    width: 2rem;
    border-radius: 9999px;
  }

  :global(.sh-carousel__nav[data-variant='next'][data-orientation='horizontal']) {
    inset-inline-end: -3rem;
    top: 50%;
    transform: translateY(-50%);
  }

  :global(.sh-carousel__nav[data-variant='next'][data-orientation='vertical']) {
    inset-inline-start: 50%;
    bottom: -3rem;
    transform: translateX(-50%) rotate(90deg);
  }
</style>
