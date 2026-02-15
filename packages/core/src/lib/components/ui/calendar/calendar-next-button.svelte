<script lang="ts">
  import { Calendar as CalendarPrimitive } from 'bits-ui';
  import ChevronRightIcon from '@lucide/svelte/icons/chevron-right';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: CalendarPrimitive.NextButtonProps = $props();
</script>

{#snippet Fallback()}
  <ChevronRightIcon class="size-4" />
{/snippet}

<CalendarPrimitive.NextButton
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
