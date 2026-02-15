<script lang="ts">
  import { Progress as ProgressPrimitive } from 'bits-ui';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    max = 100,
    value,
    ...restProps
  }: WithoutChildrenOrChild<ProgressPrimitive.RootProps> = $props();
</script>

<ProgressPrimitive.Root
  bind:ref
  data-slot="progress"
  class={cn('sh-progress', className)}
  {value}
  {max}
  {...restProps}
>
  <div
    data-slot="progress-indicator"
    class="sh-progress__indicator"
    style="transform: translateX(-{100 - (100 * (value ?? 0)) / (max ?? 1)}%)"
  ></div>
</ProgressPrimitive.Root>

<style>
  :global(.sh-progress) {
    position: relative;
    height: 0.5rem;
    width: 100%;
    overflow: hidden;
    border-radius: 9999px;
    background-color: oklch(from var(--primary) l c h / 0.2);
  }

  .sh-progress__indicator {
    height: 100%;
    width: 100%;
    flex: 1 1 0%;
    background-color: var(--primary);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
</style>
