<script lang="ts">
  import { Label as LabelPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: LabelPrimitive.RootProps = $props();
</script>

<LabelPrimitive.Root bind:ref data-slot="label" class={cn('sh-label', className)} {...restProps} />

<style>
  .sh-label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    line-height: 1;
    font-weight: 500;
    user-select: none;
  }

  /* Disabled state from group or parent */
  :global(:where([data-disabled='true'])) .sh-label,
  :global(:where([disabled])) .sh-label,
  :global(.group[data-disabled='true']) .sh-label {
    pointer-events: none;
    opacity: 0.5;
  }

  /* Peer disabled state (Label AFTER Input) */
  :global(:disabled) ~ .sh-label {
    cursor: not-allowed;
    opacity: 0.5;
  }

  /* Peer disabled state (Label BEFORE Input) */
  .sh-label:has(+ :global(:disabled)),
  .sh-label:has(~ :global(:disabled)) {
    cursor: not-allowed;
    opacity: 0.5;
  }
</style>
