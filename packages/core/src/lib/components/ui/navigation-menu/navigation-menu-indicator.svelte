<script lang="ts">
  import { NavigationMenu as NavigationMenuPrimitive } from 'bits-ui';
  import { cn } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    ...restProps
  }: NavigationMenuPrimitive.IndicatorProps = $props();
</script>

<NavigationMenuPrimitive.Indicator
  bind:ref
  data-slot="navigation-menu-indicator"
  class={cn('sh-navigation-menu__indicator', className)}
  {...restProps}
>
  <div class="bg-border rounded-ts-sm relative top-[60%] h-2 w-2 rotate-45 shadow-md"></div>
</NavigationMenuPrimitive.Indicator>
