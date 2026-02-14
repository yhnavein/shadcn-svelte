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
