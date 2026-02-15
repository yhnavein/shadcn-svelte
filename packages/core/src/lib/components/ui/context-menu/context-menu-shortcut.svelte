<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
  bind:this={ref}
  data-slot="context-menu-shortcut"
  class={cn('sh-context-menu__shortcut', className)}
  {...restProps}
>
  {@render children?.()}
</span>

<style>
  :global(.sh-context-menu__shortcut) {
    margin-left: auto;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
    opacity: 0.6;
  }
</style>
