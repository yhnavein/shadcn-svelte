<script lang="ts" module>
  export type SidebarMenuButtonVariant = 'default' | 'outline';
  export type SidebarMenuButtonSize = 'default' | 'sm' | 'lg';
</script>

<script lang="ts">
  import * as Tooltip from '$lib/components/ui/tooltip/index.js';
  import { cn, type WithElementRef, type WithoutChildrenOrChild } from '$lib/utils.js';
  import { mergeProps } from 'bits-ui';
  import type { ComponentProps, Snippet } from 'svelte';
  import type { HTMLAttributes } from 'svelte/elements';
  import { useSidebar } from './context.svelte.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    child,
    variant = 'default',
    size = 'default',
    isActive = false,
    tooltipContent,
    tooltipContentProps,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    isActive?: boolean;
    variant?: SidebarMenuButtonVariant;
    size?: SidebarMenuButtonSize;
    tooltipContent?: Snippet | string;
    tooltipContentProps?: WithoutChildrenOrChild<ComponentProps<typeof Tooltip.Content>>;
    child?: Snippet<[{ props: Record<string, unknown> }]>;
  } = $props();

  const sidebar = useSidebar();

  const buttonProps = $derived({
    class: cn('sh-sidebar-menu-button', className),
    'data-slot': 'sidebar-menu-button',
    'data-sidebar': 'menu-button',
    'data-size': size,
    'data-variant': variant,
    'data-active': isActive,
    ...restProps,
  });
</script>

{#snippet Button({ props }: { props?: Record<string, unknown> })}
  {@const mergedProps = mergeProps(buttonProps, props)}
  {#if child}
    {@render child({ props: mergedProps })}
  {:else}
    <button bind:this={ref} {...mergedProps}>
      {@render children?.()}
    </button>
  {/if}
{/snippet}

{#if !tooltipContent}
  {@render Button({})}
{:else}
  <Tooltip.Root>
    <Tooltip.Trigger>
      {#snippet child({ props })}
        {@render Button({ props })}
      {/snippet}
    </Tooltip.Trigger>
    <Tooltip.Content
      side="right"
      align="center"
      hidden={sidebar.state !== 'collapsed' || sidebar.isMobile}
      {...tooltipContentProps}
    >
      {#if typeof tooltipContent === 'string'}
        {tooltipContent}
      {:else if tooltipContent}
        {@render tooltipContent()}
      {/if}
    </Tooltip.Content>
  </Tooltip.Root>
{/if}

<style>
  /* Sidebar Menu Button */
  :global(.sh-sidebar-menu-button) {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem; /* gap-2 */
    overflow: hidden;
    border-radius: var(--radius-md);
    padding: 0.5rem; /* p-2 */
    text-align: start;
    font-size: 0.875rem; /* text-sm */
    outline: none;
    transition:
      width 0.2s,
      height 0.2s,
      padding 0.2s;
    background: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
  }

  :global(.sh-sidebar-menu-button:hover),
  :global(.sh-sidebar-menu-button:active),
  :global(.sh-sidebar-menu-button[data-active='true']),
  :global(.sh-sidebar-menu-button[data-state='open']:hover) {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-button:focus-visible) {
    box-shadow: 0 0 0 2px var(--sidebar-ring);
  }

  :global(.sh-sidebar-menu-button:disabled),
  :global(.sh-sidebar-menu-button[aria-disabled='true']) {
    pointer-events: none;
    opacity: 0.5;
  }

  :global(.sh-sidebar-menu-button[data-active='true']) {
    font-weight: 500;
  }

  :global(.sh-sidebar-menu-button > span:last-child) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :global(.sh-sidebar-menu-button > svg) {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }

  /* Menu Button Variants */
  :global(.sh-sidebar-menu-button[data-variant='default']:hover) {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
  }

  :global(.sh-sidebar-menu-button[data-variant='outline']) {
    background-color: var(--background);
    box-shadow: 0 0 0 1px var(--sidebar-border);
  }

  :global(.sh-sidebar-menu-button[data-variant='outline']:hover) {
    background-color: var(--sidebar-accent);
    color: var(--sidebar-accent-foreground);
    box-shadow: 0 0 0 1px var(--sidebar-accent);
  }

  /* Menu Button Sizes */
  :global(.sh-sidebar-menu-button[data-size='default']) {
    height: 2rem; /* h-8 */
    font-size: 0.875rem; /* text-sm */
  }

  :global(.sh-sidebar-menu-button[data-size='sm']) {
    height: 1.75rem; /* h-7 */
    font-size: 0.75rem; /* text-xs */
  }

  :global(.sh-sidebar-menu-button[data-size='lg']) {
    height: 3rem; /* h-12 */
    font-size: 0.875rem; /* text-sm */
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon'])
    :global(.sh-sidebar-menu-button[data-size='lg']) {
    padding: 0 !important;
  }

  :global(.sh-sidebar-menu-item:has([data-sidebar='menu-action']))
    :global(.sh-sidebar-menu-button) {
    padding-inline-end: 2rem; /* pe-8 */
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) :global(.sh-sidebar-menu-button) {
    width: 2rem !important; /* size-8! */
    height: 2rem !important;
    padding: 0.5rem !important; /* p-2! */
  }
</style>
