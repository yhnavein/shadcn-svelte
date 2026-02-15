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
  data-slot="dialog-footer"
  class={cn('sh-dialog__footer', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  :global(.sh-dialog__footer) {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem; /* gap-2 */
  }

  @media (min-width: 640px) {
    :global(.sh-dialog__footer) {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
</style>
