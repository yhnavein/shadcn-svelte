<script lang="ts" module>
  export type InputGroupAddonAlign = 'inline-start' | 'inline-end' | 'block-start' | 'block-end';
</script>

<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    align = 'inline-start',
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    align?: InputGroupAddonAlign;
  } = $props();
</script>

<div
  bind:this={ref}
  role="group"
  data-slot="input-group-addon"
  data-align={align}
  class={cn('sh-input-group__addon', className)}
  onclick={(e) => {
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    e.currentTarget.parentElement?.querySelector('input')?.focus();
  }}
  {...restProps}
>
  {@render children?.()}
</div>
