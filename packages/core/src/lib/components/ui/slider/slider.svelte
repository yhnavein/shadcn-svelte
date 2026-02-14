<script lang="ts">
  import { Slider as SliderPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(),
    orientation = 'horizontal',
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<SliderPrimitive.RootProps> = $props();
</script>

<!--
Discriminated Unions + Destructing (required for bindable) do not
get along, so we shut typescript up by casting `value` to `never`.
-->
<SliderPrimitive.Root
  bind:ref
  bind:value={value as never}
  data-slot="slider"
  {orientation}
  class={cn('sh-slider', className)}
  {...restProps}
>
  {#snippet children({ thumbs })}
    <span data-orientation={orientation} data-slot="slider-track" class="sh-slider__track">
      <SliderPrimitive.Range data-slot="slider-range" class="sh-slider__range" />
    </span>
    {#each thumbs as thumb (thumb)}
      <SliderPrimitive.Thumb data-slot="slider-thumb" index={thumb} class="sh-slider__thumb" />
    {/each}
  {/snippet}
</SliderPrimitive.Root>
