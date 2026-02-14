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
