<script lang="ts">
  import { RangeCalendar as RangeCalendarPrimitive } from 'bits-ui';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: RangeCalendarPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronRightIcon class="size-4" />
{/snippet}

<RangeCalendarPrimitive.NextButton
  bind:ref
  class={cn('sh-calendar__nav-button', className)}
  children={children || Fallback}
  {...restProps}
/>
