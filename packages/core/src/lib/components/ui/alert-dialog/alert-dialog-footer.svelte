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
  data-slot="alert-dialog-footer"
  class={cn('sh-alert-dialog__footer', className)}
  {...restProps}
>
  {@render children?.()}
</div>

<style>
  .sh-alert-dialog__footer {
    display: flex;
    flex-direction: column-reverse;
    gap: 0.5rem;
  }

  @media (min-width: 640px) {
    .sh-alert-dialog__footer {
      flex-direction: row;
      justify-content: flex-end;
    }
  }
</style>
