<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
  bind:this={ref}
  data-slot="alert-dialog-header"
  class={cn('sh-alert-dialog__header', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-alert-dialog__header {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  @media (min-width: 640px) {
    .sh-alert-dialog__header {
      text-align: left;
    }
  }
</style>
