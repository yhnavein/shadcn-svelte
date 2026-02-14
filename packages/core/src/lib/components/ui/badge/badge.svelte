<script lang="ts" module>
  export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';
</script>

<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    href,
    class: className,
    variant = 'default',
    children,
    ...restProps
  }: WithElementRef<HTMLAnchorAttributes> & {
    variant?: BadgeVariant;
  } = $props();

  const variantClass = `sh-badge--${variant}`;
  const baseClass = `sh-badge ${variantClass}`;
</script>

<svelte:element
  this={href ? 'a' : 'span'}
  bind:this={ref}
  data-slot="badge"
  {href}
  class={cn(baseClass, className)}
  {...restProps}
>
  {@render children?.()}
</svelte:element>
