<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: RangeCalendarPrimitive.GridRowProps = $props();
</script>

<RangeCalendarPrimitive.GridRow bind:ref class={cn('sh-calendar__row', className)} {...restProps} />

<style>
  :global(.sh-calendar__row) {
    display: flex;
  }

  :global(.sh-calendar__row--head) {
    user-select: none;
  }

  :global(.sh-calendar__row--body) {
    margin-top: 0.5rem;
    width: 100%;
  }
</style>
