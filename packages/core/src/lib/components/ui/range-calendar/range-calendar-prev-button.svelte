<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import ChevronLeftIcon from '@lucide/svelte/icons/chevron-left';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: RangeCalendarPrimitive.PrevButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronLeftIcon class="size-4" />
{/snippet}

<RangeCalendarPrimitive.PrevButton
  bind:ref
  class={cn('sh-calendar__nav-button', className)}
  children={children || Fallback}
  {...restProps}
/>

<style>
  :global(.sh-calendar__nav-button) {
    height: var(--cell-size);
    width: var(--cell-size);
    background-color: transparent;
    padding: 0;
    opacity: 0.5;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  :global(.sh-calendar__nav-button:hover) {
    opacity: 1;
  }

  :global([dir='rtl'] .sh-calendar__nav-button) {
    transform: rotate(180deg);
  }
</style>
