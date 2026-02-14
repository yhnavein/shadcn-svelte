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
