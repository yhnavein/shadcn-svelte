<script lang="ts">
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: DrawerPrimitive.TitleProps = $props();
</script>

<DrawerPrimitive.Title
  bind:ref
  data-slot="drawer-title"
  class={cn('sh-drawer__title', className)}
  {...restProps}
/>

<style>
  :global(.sh-drawer__title) {
    color: var(--foreground);
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 1;
    letter-spacing: -0.025em;
  }
</style>
