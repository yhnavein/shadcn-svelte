<script lang="ts">
  import * as Sheet from '$lib/components/ui/sheet/index.js';
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { SIDEBAR_WIDTH_MOBILE } from './constants.js';
  import { useSidebar } from './context.svelte.js';

  let {
    ref = $bindable(null),
    side = 'left',
    variant = 'sidebar',
    collapsible = 'offcanvas',
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
    side?: 'left' | 'right';
    variant?: 'sidebar' | 'floating' | 'inset';
    collapsible?: 'offcanvas' | 'icon' | 'none';
  } = $props();

  const sidebar = useSidebar();
</script>

{#if collapsible === 'none'}
  <div class={cn('sh-sidebar', className)} bind:this={ref} {...restProps}>
    {@render children?.()}
  </div>
{:else if sidebar.isMobile}
  <Sheet.Root bind:open={() => sidebar.openMobile, (v) => sidebar.setOpenMobile(v)} {...restProps}>
    <Sheet.Content
      data-sidebar="sidebar"
      data-slot="sidebar"
      data-mobile="true"
      class="sh-sidebar-mobile"
      style="--sidebar-width: {SIDEBAR_WIDTH_MOBILE};"
      {side}
    >
      <Sheet.Header class="sr-only">
        <Sheet.Title>Sidebar</Sheet.Title>
        <Sheet.Description>Displays the mobile sidebar.</Sheet.Description>
      </Sheet.Header>
      <div class="flex h-full w-full flex-col">
        {@render children?.()}
      </div>
    </Sheet.Content>
  </Sheet.Root>
{:else}
  <div
    bind:this={ref}
    class="sh-sidebar-wrapper group peer"
    data-state={sidebar.state}
    data-collapsible={sidebar.state === 'collapsed' ? collapsible : ''}
    data-variant={variant}
    data-side={side}
    data-slot="sidebar"
  >
    <!-- This is what handles the sidebar gap on desktop -->
    <div data-slot="sidebar-gap" class="sh-sidebar-gap"></div>
    <div data-slot="sidebar-container" class={cn('sh-sidebar-container', className)} {...restProps}>
      <div data-sidebar="sidebar" data-slot="sidebar-inner" class="sh-sidebar-inner">
        {@render children?.()}
      </div>
    </div>
  </div>
{/if}

<style>
  /* Sidebar */
  .sh-sidebar {
    background-color: var(--sidebar);
    color: var(--sidebar-foreground);
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .sh-sidebar[data-collapsible='none'] {
    width: var(--sidebar-width);
  }

  /* Mobile Sidebar (in Sheet) */
  :global(.sh-sidebar-mobile) {
    background-color: var(--sidebar);
    color: var(--sidebar-foreground);
    width: var(--sidebar-width);
    padding: 0;
  }

  :global(.sh-sidebar-mobile > button) {
    display: none;
  }

  /* Desktop Sidebar Wrapper */
  .sh-sidebar-wrapper {
    color: var(--sidebar-foreground);
    display: none;
  }

  @media (min-width: 768px) {
    .sh-sidebar-wrapper {
      display: block;
    }
  }

  /* Sidebar Gap */
  .sh-sidebar-gap {
    position: relative;
    width: var(--sidebar-width);
    background-color: transparent;
    transition: width 0.2s linear;
  }

  .sh-sidebar-wrapper[data-collapsible='offcanvas'] .sh-sidebar-gap {
    width: 0;
  }

  .sh-sidebar-wrapper[data-side='right'] .sh-sidebar-gap {
    transform: rotate(180deg);
  }

  .sh-sidebar-wrapper[data-variant='floating'][data-collapsible='icon'] .sh-sidebar-gap,
  .sh-sidebar-wrapper[data-variant='inset'][data-collapsible='icon'] .sh-sidebar-gap {
    width: calc(var(--sidebar-width-icon) + var(--spacing-4, 1rem) + 2px);
  }

  .sh-sidebar-wrapper:not([data-variant='floating']):not(
      [data-variant='inset']
    )[data-collapsible='icon']
    .sh-sidebar-gap {
    width: var(--sidebar-width-icon);
  }

  /* Sidebar Container */
  .sh-sidebar-container {
    position: fixed;
    inset-block: 0;
    z-index: 10;
    display: none;
    height: 100svh;
    width: var(--sidebar-width);
    transition:
      left 0.2s linear,
      right 0.2s linear,
      width 0.2s linear;
  }

  @media (min-width: 768px) {
    .sh-sidebar-container {
      display: flex;
    }
  }

  .sh-sidebar-wrapper[data-side='left'] .sh-sidebar-container {
    inset-inline-start: 0;
  }

  .sh-sidebar-wrapper[data-side='left'][data-collapsible='offcanvas'] .sh-sidebar-container {
    inset-inline-start: calc(var(--sidebar-width) * -1);
  }

  .sh-sidebar-wrapper[data-side='right'] .sh-sidebar-container {
    inset-inline-end: 0;
  }

  .sh-sidebar-wrapper[data-side='right'][data-collapsible='offcanvas'] .sh-sidebar-container {
    inset-inline-end: calc(var(--sidebar-width) * -1);
  }

  /* Variant: Floating & Inset */
  .sh-sidebar-wrapper[data-variant='floating'] .sh-sidebar-container,
  .sh-sidebar-wrapper[data-variant='inset'] .sh-sidebar-container {
    padding: 0.5rem; /* p-2 */
  }

  .sh-sidebar-wrapper[data-variant='floating'][data-collapsible='icon'] .sh-sidebar-container,
  .sh-sidebar-wrapper[data-variant='inset'][data-collapsible='icon'] .sh-sidebar-container {
    width: calc(var(--sidebar-width-icon) + var(--spacing-4, 1rem) + 2px);
  }

  /* Variant: Sidebar (Default) */
  .sh-sidebar-wrapper:not([data-variant='floating']):not(
      [data-variant='inset']
    )[data-collapsible='icon']
    .sh-sidebar-container {
    width: var(--sidebar-width-icon);
  }

  .sh-sidebar-wrapper:not([data-variant='floating']):not([data-variant='inset'])[data-side='left']
    .sh-sidebar-container {
    border-inline-end-width: 1px;
    border-inline-end-style: solid;
    border-inline-end-color: var(--sidebar-border);
  }

  .sh-sidebar-wrapper:not([data-variant='floating']):not([data-variant='inset'])[data-side='right']
    .sh-sidebar-container {
    border-inline-start-width: 1px;
    border-inline-start-style: solid;
    border-inline-start-color: var(--sidebar-border);
  }

  /* Sidebar Inner */
  .sh-sidebar-inner {
    background-color: var(--sidebar);
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
  }

  .sh-sidebar-wrapper[data-variant='floating'] .sh-sidebar-inner {
    border: 1px solid var(--sidebar-border);
    border-radius: var(--radius-lg);
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  }
</style>
