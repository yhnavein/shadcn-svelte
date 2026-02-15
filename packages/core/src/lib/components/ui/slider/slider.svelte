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

<style>
  :global(.sh-slider) {
    position: relative;
    display: flex;
    width: 100%;
    touch-action: none;
    user-select: none;
    align-items: center;
  }

  :global(.sh-slider[data-disabled]) {
    opacity: 0.5;
  }

  :global(.sh-slider[data-orientation='vertical']) {
    height: 100%;
    min-height: 11rem;
    width: auto;
    flex-direction: column;
  }

  .sh-slider__track {
    position: relative;
    flex-grow: 1;
    overflow: hidden;
    border-radius: 9999px;
    background-color: var(--secondary);
  }

  .sh-slider__track[data-orientation='horizontal'] {
    height: 0.375rem;
    width: 100%;
  }

  .sh-slider__track[data-orientation='vertical'] {
    height: 100%;
    width: 0.375rem;
  }

  :global(.sh-slider__range) {
    position: absolute;
    background-color: var(--primary);
  }

  :global(.sh-slider__range[data-orientation='horizontal']) {
    height: 100%;
  }

  :global(.sh-slider__range[data-orientation='vertical']) {
    width: 100%;
  }

  :global(.sh-slider__thumb) {
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 9999px;
    border: 1px solid color-mix(in srgb, var(--primary), transparent 50%);
    background-color: var(--background);
    box-shadow:
      0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  :global(.sh-slider__thumb:focus-visible) {
    outline: none;
    box-shadow:
      0 0 0 1px var(--ring),
      0 1px 3px 0 rgb(0 0 0 / 0.1),
      0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  :global(.sh-slider__thumb:disabled) {
    pointer-events: none;
    opacity: 0.5;
  }
</style>
