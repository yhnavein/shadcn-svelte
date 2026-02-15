<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.ListProps = $props();
</script>

<NavigationMenuPrimitive.List
  bind:ref
  data-slot="navigation-menu-list"
  class={cn('sh-navigation-menu__list', className)}
  {...restProps}
/>

<style>
  :global(.sh-navigation-menu__list) {
    display: flex;
    flex: 1;
    list-style: none;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }
</style>
