<script lang="ts">
  import { Separator } from '$lib/components/ui/separator/index.js';
  import { cn } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: ComponentProps<typeof Separator> = $props();
</script>

<Separator
  bind:ref
  data-slot="sidebar-separator"
  data-sidebar="separator"
  class={cn('sh-sidebar-separator', className)}
  {...restProps}
/>

<style>
  /* Sidebar Separator */
  :global(.sh-sidebar-separator) {
    background-color: var(--sidebar-border);
    height: 1px;
    width: 100%;
  }
</style>
