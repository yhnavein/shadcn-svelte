<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { cn, type WithElementRef } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLSpanElement>> = $props();
</script>

<span
  bind:this={ref}
  data-slot="dropdown-menu-shortcut"
  class={cn('sh-dropdown-menu__shortcut', className)}
  {...restProps}
>
  {@render children?.()}
</span>

<style>
  :global(.sh-dropdown-menu__shortcut) {
    margin-left: auto;
    font-size: 0.75rem;
    line-height: 1rem;
    letter-spacing: 0.1em;
    opacity: 0.6;
  }
</style>
