<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Calendar as CalendarPrimitive } from 'bits-ui';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.DayProps = $props();
</script>

<CalendarPrimitive.Day bind:ref class={cn('sh-calendar__day', className)} {...restProps} />
