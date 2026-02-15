<script lang="ts">
  import { RadioGroup as RadioGroupPrimitive } from 'bits-ui';
  import CircleIcon from '@lucide/svelte/icons/circle';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<RadioGroupPrimitive.ItemProps> = $props();
</script>

<RadioGroupPrimitive.Item
  bind:ref
  data-slot="radio-group-item"
  class={cn('sh-radio-group__item', className)}
  {...restProps}
>
  {#snippet children({ checked })}
    <div data-slot="radio-group-indicator" class="sh-radio-group__indicator">
      {#if checked}
        <CircleIcon class="sh-radio-group__icon" />
      {/if}
    </div>
  {/snippet}
</RadioGroupPrimitive.Item>

<style>
  :global(.sh-radio-group__item) {
    aspect-ratio: 1 / 1;
    height: 1rem;
    width: 1rem;
    flex-shrink: 0;
    border-radius: 9999px;
    border: 1px solid var(--primary);
    color: var(--primary);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    outline: none;
  }

  :global(.sh-radio-group__item:focus-visible) {
    box-shadow: 0 0 0 1px var(--ring);
  }

  :global(.sh-radio-group__item:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :global(.sh-radio-group__item[aria-invalid='true']) {
    border-color: var(--destructive);
  }

  .sh-radio-group__indicator {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :global(.sh-radio-group__icon) {
    height: 0.875rem;
    width: 0.875rem;
    fill: currentColor;
  }
</style>
