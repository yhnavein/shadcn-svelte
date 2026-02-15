<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.CellProps = $props();
</script>

<CalendarPrimitive.Cell bind:ref class={cn('sh-calendar__cell', className)} {...restProps} />

<style>
  :global(.sh-calendar__cell) {
    position: relative;
    height: var(--cell-size);
    width: var(--cell-size);
    padding: 0;
    text-align: center;
    font-size: 0.875rem;
  }
  :global(.sh-calendar__cell:focus-within) {
    position: relative;
    z-index: 20;
  }

  /* Range selection styles on the cell */
  :global(.sh-calendar__cell:has([data-selected])) {
    background-color: var(--accent);
  }
  :global(.sh-calendar__cell:has([data-selected][data-outside-month])) {
    background-color: oklch(from var(--accent) l c h / 0.5);
  }

  :global(
    .sh-calendar__cell:first-child:has([data-selected]),
    .sh-calendar__cell:has([data-range-start])
  ) {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
  }

  :global(
    .sh-calendar__cell:last-child:has([data-selected]),
    .sh-calendar__cell:has([data-range-end])
  ) {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }
  :global(.sh-calendar__cell:has([data-range-middle])) {
    border-radius: 0;
  }
</style>
