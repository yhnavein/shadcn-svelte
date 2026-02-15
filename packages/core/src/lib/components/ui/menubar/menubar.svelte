<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: MenubarPrimitive.RootProps = $props();
</script>

<MenubarPrimitive.Root
  bind:ref
  data-slot="menubar"
  class={cn('sh-menubar', className)}
  {...restProps}
/>

<style>
  :global(.sh-menubar) {
    display: flex;
    height: 2.25rem;
    align-items: center;
    gap: 0.25rem;
    border-radius: var(--radius-md);
    border: 1px solid var(--border);
    background-color: var(--background);
    padding: 0.25rem;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
</style>
