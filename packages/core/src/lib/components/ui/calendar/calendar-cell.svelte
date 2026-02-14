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
