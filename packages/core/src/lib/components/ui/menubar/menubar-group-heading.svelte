<script lang="ts">
  import { cn } from '$lib/utils.js';
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    inset,
    class: className,
    ...restProps
  }: ComponentProps<typeof MenubarPrimitive.GroupHeading> & {
    inset?: boolean;
  } = $props();
</script>

<MenubarPrimitive.GroupHeading
  bind:ref
  data-slot="menubar-group-heading"
  data-inset={inset}
  class={cn('sh-menubar__group-heading', className)}
  {...restProps}
/>

<style>
  :global(.sh-menubar__group-heading) {
    padding: 0.375rem 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
  :global(.sh-menubar__group-heading[data-inset]) {
    padding-inline-start: 2rem;
  }
</style>
