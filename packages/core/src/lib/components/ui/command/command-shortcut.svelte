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
  data-slot="command-shortcut"
  class={cn('sh-command__shortcut', className)}
  {...restProps}
>
  {@render children?.()}
</span>

<style>
  .sh-command__shortcut {
    margin-left: auto;
    font-size: 0.75rem; /* text-xs */
    letter-spacing: 0.1em; /* tracking-widest */
    color: var(--muted-foreground);
  }
</style>
