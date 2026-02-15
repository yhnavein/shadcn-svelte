<script lang="ts" module>
  export type EmptyMediaVariant = 'default' | 'icon';
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
    variant?: EmptyMediaVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="empty-icon"
  data-variant={variant}
  class={cn('sh-empty__media', className)}
  {...restProps}
>
  {@render children?.()}
</div>
