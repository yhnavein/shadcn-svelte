<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    placement = 'left',
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLSpanElement>> & { placement?: 'left' | 'right' } = $props();
</script>

<span
  bind:this={ref}
  data-slot="input-group-text"
  data-placement={placement}
  class={cn('sh-input-group__text', className)}
  {...restProps}
>
  {@render children?.()}
</span>

<style>
  .sh-input-group__text {
    position: absolute;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 0.875rem;
    color: var(--muted-foreground);
    pointer-events: none;
  }

  .sh-input-group__text[data-placement='left'] {
    left: 0;
  }

  .sh-input-group__text[data-placement='right'] {
    right: 0;
  }
</style>
