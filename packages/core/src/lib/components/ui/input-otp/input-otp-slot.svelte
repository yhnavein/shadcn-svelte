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

<style>
  .sh-input-otp__slot {
    position: relative;
    display: flex;
    height: 2.5rem;
    width: 2.5rem;
    align-items: center;
    justify-content: center;
    border-top: 1px solid var(--input);
    border-bottom: 1px solid var(--input);
    border-right: 1px solid var(--input);
    font-size: 0.875rem;
    line-height: 1.25rem;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    outline: none;
  }

  .sh-input-otp__slot[aria-invalid='true'] {
    border-color: var(--destructive);
  }

  :global(.dark) .sh-input-otp__slot {
    background-color: oklch(from var(--input) l c h / 0.3);
  }

  .sh-input-otp__slot:first-child {
    border-top-left-radius: var(--radius-md);
    border-bottom-left-radius: var(--radius-md);
    border-left: 1px solid var(--input);
  }

  .sh-input-otp__slot:last-child {
    border-top-right-radius: var(--radius-md);
    border-bottom-right-radius: var(--radius-md);
  }

  .sh-input-otp__slot[data-active='true'] {
    z-index: 10;
    border-color: var(--ring);
    box-shadow:
      0 0 0 1px var(--background),
      0 0 0 3px var(--ring);
  }

  .sh-input-otp__slot[data-active='true'][aria-invalid='true'] {
    border-color: var(--destructive);
    box-shadow:
      0 0 0 1px var(--background),
      0 0 0 3px var(--destructive);
  }

  .sh-input-otp__caret-container {
    pointer-events: none;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .sh-input-otp__caret {
    height: 1rem;
    width: 1px;
    background-color: var(--foreground);
    animation: sh-caret-blink 1s ease-out infinite;
  }

  @keyframes sh-caret-blink {
    0%,
    70%,
    100% {
      opacity: 1;
    }
    20%,
    50% {
      opacity: 0;
    }
  }
</style>
