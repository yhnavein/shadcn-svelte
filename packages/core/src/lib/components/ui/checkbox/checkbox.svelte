<script lang="ts">
  import { Checkbox as CheckboxPrimitive } from 'bits-ui';
  import CheckIcon from '@lucide/svelte/icons/check';
  import MinusIcon from '@lucide/svelte/icons/minus';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    checked = $bindable(false),
    indeterminate = $bindable(false),
    class: className,
    ...restProps
  }: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
  bind:ref
  data-slot="checkbox"
  class={cn('sh-checkbox peer', className)}
  bind:checked
  bind:indeterminate
  {...restProps}
>
  {#snippet children({ checked, indeterminate })}
    <div data-slot="checkbox-indicator" class="sh-checkbox-indicator">
      {#if checked}
        <CheckIcon />
      {:else if indeterminate}
        <MinusIcon />
      {/if}
    </div>
  {/snippet}
</CheckboxPrimitive.Root>

<style>
  :global(.sh-checkbox) {
    display: flex;
    height: 1rem;
    width: 1rem;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 1px solid var(--input);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    transition: box-shadow 0.15s ease-in-out;
    outline: none;
  }

  :global(.dark .sh-checkbox) {
    background-color: color-mix(in oklch, var(--input), transparent 70%);
  }

  :global(.sh-checkbox:focus-visible) {
    border-color: var(--ring);
    box-shadow: 0 0 0 3px color-mix(in oklch, var(--ring), transparent 50%);
  }

  :global(.sh-checkbox[data-state='checked']) {
    background-color: var(--primary);
    border-color: var(--primary);
    color: var(--primary-foreground);
  }

  :global(.sh-checkbox[aria-invalid='true']) {
    border-color: var(--destructive);
    box-shadow: 0 0 0 3px color-mix(in oklch, var(--destructive), transparent 80%);
  }

  :global(.dark .sh-checkbox[aria-invalid='true']) {
    box-shadow: 0 0 0 3px color-mix(in oklch, var(--destructive), transparent 60%);
  }

  :global(.sh-checkbox:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .sh-checkbox-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    color: currentColor;
    transition: none;
  }

  .sh-checkbox-indicator :global(svg) {
    height: 0.875rem;
    width: 0.875rem;
  }
</style>
