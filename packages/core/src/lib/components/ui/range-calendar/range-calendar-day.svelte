<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: RangeCalendarPrimitive.DayProps = $props();
</script>

<RangeCalendarPrimitive.Day bind:ref class={cn('sh-calendar__day', className)} {...restProps} />

<style>
  :global(.sh-calendar__day) {
    height: var(--cell-size);
    width: var(--cell-size);
    padding: 0;
    font-weight: 400;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius-md);
    user-select: none;
  }
  :global(.sh-calendar__day[aria-selected='true']) {
    opacity: 1;
  }

  /* Day states */
  :global(.sh-calendar__day[data-today]:not([data-selected])) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-calendar__day[data-selected]) {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
  :global(.sh-calendar__day[data-selected]:hover),
  :global(.sh-calendar__day[data-selected]:focus) {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }

  :global(.sh-calendar__day[data-selected][data-outside-month]) {
    color: var(--muted-foreground);
    opacity: 0.5;
    background-color: oklch(from var(--accent) l c h / 0.5);
  }

  :global(.sh-calendar__day[data-disabled]) {
    color: var(--muted-foreground);
    opacity: 0.5;
    pointer-events: none;
  }

  :global(.sh-calendar__day[data-unavailable]) {
    text-decoration: line-through;
    color: var(--muted-foreground);
  }

  :global(.sh-calendar__day[data-outside-month]:not([data-selected])) {
    color: var(--muted-foreground);
    opacity: 0.5;
  }

  /* Range specifics */
  :global(.sh-calendar__day[data-range-middle]) {
    background-color: var(--accent);
    color: var(--accent-foreground);
    border-radius: 0;
  }
  :global(.sh-calendar__day[data-range-middle]:hover) {
    background-color: var(--accent);
    color: var(--accent-foreground);
  }

  :global(.sh-calendar__day[data-range-start]) {
    background-color: var(--primary);
    color: var(--primary-foreground);
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  :global(.sh-calendar__day[data-range-start]:hover) {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }

  :global(.sh-calendar__day[data-range-end]) {
    background-color: var(--primary);
    color: var(--primary-foreground);
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  :global(.sh-calendar__day[data-range-end]:hover) {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
</style>
