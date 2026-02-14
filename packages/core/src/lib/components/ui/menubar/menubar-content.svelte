<script lang="ts">
  import { Menubar as MenubarPrimitive } from 'bits-ui';
  import MenubarPortal from './menubar-portal.svelte';
  import { cn, type WithoutChildrenOrChild } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';

  let {
    ref = $bindable(null),
    class: className,
    sideOffset = 8,
    alignOffset = -4,
    align = 'start',
    side = 'bottom',
    portalProps,
    ...restProps
  }: MenubarPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof MenubarPortal>>;
  } = $props();
</script>

<MenubarPortal {...portalProps}>
  <MenubarPrimitive.Content
    bind:ref
    data-slot="menubar-content"
    {sideOffset}
    {align}
    {alignOffset}
    {side}
    class={cn('sh-menubar__content', className)}
    {...restProps}
  />
</MenubarPortal>
