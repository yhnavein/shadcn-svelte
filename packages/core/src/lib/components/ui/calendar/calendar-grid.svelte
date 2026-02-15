<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.GridProps = $props();
</script>

<CalendarPrimitive.Grid bind:ref class={cn('sh-calendar__table', className)} {...restProps} />

<style>
  :global(.sh-calendar__table) {
    margin-top: 1rem;
    display: flex;
    width: 100%;
    border-collapse: collapse;
    flex-direction: column;
    gap: 0.25rem;
  }
</style>
