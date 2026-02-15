<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';
  import NavigationMenuViewport from './navigation-menu-viewport.svelte';

  let {
    ref = $bindable(null),
    class: className,
    viewport = true,
    children,
    ...restProps
  }: NavigationMenuPrimitive.RootProps & {
    viewport?: boolean;
  } = $props();
</script>

<NavigationMenuPrimitive.Root
  bind:ref
  data-slot="navigation-menu"
  data-viewport={viewport}
  class={cn('sh-navigation-menu', className)}
  {...restProps}
>
  {@render children?.()}

  {#if viewport}
    <NavigationMenuViewport />
  {/if}
</NavigationMenuPrimitive.Root>

<style>
  :global(.sh-navigation-menu) {
    position: relative;
    display: flex;
    max-width: max-content;
    flex: 1;
    align-items: center;
    justify-content: center;
  }
</style>
