<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  role="group"
  data-slot="field"
  class={cn('sh-field', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .sh-field:has(:disabled) :global(.sh-field__label) {
    cursor: not-allowed;
    opacity: 0.7;
  }
</style>
