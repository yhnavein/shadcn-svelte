<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.ItemProps = $props();
</script>

<NavigationMenuPrimitive.Item
  bind:ref
  data-slot="navigation-menu-item"
  class={cn('sh-navigation-menu__item', className)}
  {...restProps}
/>

<style>
  :global(.sh-navigation-menu__item) {
    position: relative;
  }
</style>
