<script lang="ts" module>
  export type AlertVariant = 'default' | 'destructive';
</script>

<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    variant = 'default',
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    variant?: AlertVariant;
  } = $props();
</script>

<div
  bind:this={ref}
  data-slot="alert"
  class={cn(
    'sh-alert',
    variant === 'default' && 'sh-alert--default',
    variant === 'destructive' && 'sh-alert--destructive',
    className
  )}
  {...restProps}
  role="alert"
>
  {@render children?.()}
</div>
