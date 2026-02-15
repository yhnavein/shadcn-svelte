<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: CalendarPrimitive.HeaderProps = $props();
</script>

<CalendarPrimitive.Header bind:ref class={cn('sh-calendar__header', className)} {...restProps} />

<style>
  :global(.sh-calendar__header) {
    position: relative;
    display: flex;
    height: var(--cell-size);
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
    gap: 0.375rem;
  }
</style>
