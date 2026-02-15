<script lang="ts">
  import { PinInput as InputOTPPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    value = $bindable(''),
    ...restProps
  }: InputOTPPrimitive.RootProps = $props();
</script>

<InputOTPPrimitive.Root
  bind:ref
  bind:value
  data-slot="input-otp"
  class={cn('sh-input-otp', className)}
  {...restProps}
/>

<style>
  .sh-input-otp {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 1;
  }

  .sh-input-otp:has(:disabled) {
    opacity: 0.5;
  }

  .sh-input-otp :global(input:disabled) {
    cursor: not-allowed;
  }
</style>
