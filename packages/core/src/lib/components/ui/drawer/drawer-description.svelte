<script lang="ts">
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DrawerPrimitive.DescriptionProps = $props();
</script>

<DrawerPrimitive.Description
  bind:ref
  data-slot="drawer-description"
  class={cn('sh-drawer__description', className)}
  {...restProps}
/>

<style>
  :global(.sh-drawer__description) {
    color: var(--muted-foreground);
    font-size: 0.875rem;
  }
</style>
