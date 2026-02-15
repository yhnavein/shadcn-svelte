<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { Input } from '$lib/components/ui/input/index.js';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    ...restProps
  }: ComponentProps<typeof Input> = $props();
</script>

<Input
  bind:ref
  bind:value
  data-slot="sidebar-input"
  data-sidebar="input"
  class={cn('sh-sidebar-input', className)}
  {...restProps}
/>

<style>
  /* Sidebar Input */
  :global(.sh-sidebar-input) {
    background-color: var(--background);
    height: 2rem; /* h-8 */
    width: 100%;
    box-shadow: none;
  }
</style>
