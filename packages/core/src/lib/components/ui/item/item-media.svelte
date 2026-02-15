<script lang="ts" module>
  export type ItemMediaVariant = 'default' | 'icon' | 'image';
</script>

<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    variant = 'default',
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    variant?: ItemMediaVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="item-media"
  data-variant={variant}
  class={cn('sh-item__media', className)}
  {...restProps}
>
  {@render children?.()}
</div>
