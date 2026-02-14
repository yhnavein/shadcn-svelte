<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.ViewportProps = $props();
</script>

<div class={cn('absolute start-0 top-full isolate z-50 flex justify-center')}>
  <NavigationMenuPrimitive.Viewport
    bind:ref
    data-slot="navigation-menu-viewport"
    class={cn('sh-navigation-menu__viewport', className)}
    {...restProps}
  />
</div>
