<script lang="ts">
  import { Switch as SwitchPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    checked = $bindable(false),
    ...restProps
  }: WithoutChildrenOrChild<SwitchPrimitive.RootProps> = $props();
</script>

<SwitchPrimitive.Root
  bind:ref
  bind:checked
  data-slot="switch"
  class={cn('sh-switch peer', className)}
  {...restProps}
>
  <SwitchPrimitive.Thumb data-slot="switch-thumb" class={cn('sh-switch__thumb')} />
</SwitchPrimitive.Root>

<style>
  :global(.sh-switch) {
    display: inline-flex;
    height: 1.15rem;
    width: 2rem;
    flex-shrink: 0;
    cursor: pointer;
    align-items: center;
    border-radius: 9999px;
    border-width: 1px;
    border-color: transparent;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }

  :global(.sh-switch:focus-visible) {
    outline: none;
    border-color: var(--ring);
    box-shadow: 0 0 0 3px color-mix(in oklch, var(--ring), transparent 50%);
  }

  :global(.sh-switch:disabled) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :global(.sh-switch[data-state='checked']) {
    background-color: var(--primary);
  }

  :global(.sh-switch[data-state='unchecked']) {
    background-color: var(--input);
  }

  :global(.dark .sh-switch[data-state='unchecked']) {
    background-color: color-mix(in oklch, var(--input), transparent 20%);
  }

  :global(.sh-switch__thumb) {
    pointer-events: none;
    display: block;
    height: 1rem;
    width: 1rem;
    border-radius: 9999px;
    background-color: var(--background);
    box-shadow: 0 0 0 0 transparent;
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  :global(.sh-switch__thumb[data-state='checked']) {
    transform: translateX(calc(100% - 2px));
  }

  :global(.sh-switch__thumb[data-state='unchecked']) {
    transform: translateX(0);
  }

  :global(.dark .sh-switch__thumb[data-state='unchecked']) {
    background-color: var(--foreground);
  }

  :global(.dark .sh-switch__thumb[data-state='checked']) {
    background-color: var(--primary-foreground);
  }
</style>
