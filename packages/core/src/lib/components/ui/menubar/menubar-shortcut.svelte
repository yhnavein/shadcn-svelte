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
  data-slot="menubar-shortcut"
  class={cn('sh-menubar__shortcut', className)}
  {...restProps}
>
  {@render children?.()}
</span>

<style>
  :global(.sh-menubar__shortcut) {
    margin-inline-start: auto;
    font-size: 0.75rem;
    letter-spacing: 0.1em;
    color: var(--muted-foreground);
  }
</style>
