<script lang="ts">
  import { Drawer as DrawerPrimitive } from 'vaul-svelte';
  import DrawerPortal from './drawer-portal.svelte';
  import DrawerOverlay from './drawer-overlay.svelte';
  import { cn } from '$lib/utils.js';
  import type { ComponentProps } from 'svelte';
  import type { WithoutChildrenOrChild } from '$lib/utils.js';

  let {
    ref = $bindable(null),
    class: className,
    portalProps,
    children,
    ...restProps
  }: DrawerPrimitive.ContentProps & {
    portalProps?: WithoutChildrenOrChild<ComponentProps<typeof DrawerPortal>>;
  } = $props();
</script>

<DrawerPortal {...portalProps}>
  <DrawerOverlay />
  <DrawerPrimitive.Content
    bind:ref
    data-slot="drawer-content"
    class={cn('sh-drawer__content', className)}
    {...restProps}
  >
    <div class="sh-drawer__handle"></div>
    {@render children?.()}
  </DrawerPrimitive.Content>
</DrawerPortal>

<style>
  :global(.sh-drawer__content) {
    position: fixed;
    z-index: 50;
    display: flex;
    height: auto;
    flex-direction: column;
    background-color: var(--background);
  }

  :global(.sh-drawer__content[data-vaul-drawer-direction='top']) {
    inset-inline: 0;
    top: 0;
    margin-bottom: 6rem;
    max-height: 80vh;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-width: 1px;
  }

  :global(.sh-drawer__content[data-vaul-drawer-direction='bottom']) {
    inset-inline: 0;
    bottom: 0;
    margin-top: 6rem;
    max-height: 80vh;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-top-width: 1px;
  }

  :global(.sh-drawer__content[data-vaul-drawer-direction='right']) {
    inset-block: 0;
    inset-inline-end: 0;
    width: 75%;
    border-inline-start-width: 1px;
  }

  @media (min-width: 640px) {
    :global(.sh-drawer__content[data-vaul-drawer-direction='right']) {
      max-width: 24rem;
    }
  }

  :global(.sh-drawer__content[data-vaul-drawer-direction='left']) {
    inset-block: 0;
    inset-inline-start: 0;
    width: 75%;
    border-inline-end-width: 1px;
  }

  @media (min-width: 640px) {
    :global(.sh-drawer__content[data-vaul-drawer-direction='left']) {
      max-width: 24rem;
    }
  }

  .sh-drawer__handle {
    background-color: var(--muted);
    margin-inline: auto;
    margin-top: 1rem;
    height: 0.5rem;
    width: 100px;
    flex-shrink: 0;
    border-radius: 9999px;
    display: none;
  }

  :global(.sh-drawer__content[data-vaul-drawer-direction='bottom']) .sh-drawer__handle {
    display: block;
  }
</style>
