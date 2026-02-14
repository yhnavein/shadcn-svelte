<script lang="ts">
  import { PinInput as InputOTPPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    cell,
    class: className,
    ...restProps
  }: InputOTPPrimitive.CellProps = $props();
</script>

<InputOTPPrimitive.Cell
  {cell}
  bind:ref
  data-slot="input-otp-slot"
  data-active={cell.isActive ? 'true' : undefined}
  class={cn('sh-input-otp__slot', className)}
  {...restProps}
>
  {cell.char}
  {#if cell.hasFakeCaret}
    <div class="sh-input-otp__caret-container">
      <div class="sh-input-otp__caret"></div>
    </div>
  {/if}
</InputOTPPrimitive.Cell>
