<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: RangeCalendarPrimitive.HeadCellProps = $props();
</script>

<RangeCalendarPrimitive.HeadCell
  bind:ref
  class={cn('sh-calendar__head-cell', className)}
  {...restProps}
/>

<style>
  :global(.sh-calendar__head-cell) {
    color: var(--muted-foreground);
    width: var(--cell-size);
    border-radius: var(--radius-md);
    font-size: 0.8rem;
    font-weight: 400;
    text-align: center;
  }
</style>
