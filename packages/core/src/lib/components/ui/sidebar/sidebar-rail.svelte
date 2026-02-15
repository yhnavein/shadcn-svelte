<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';
  import { useSidebar } from './context.svelte.js';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> = $props();

  const sidebar = useSidebar();
</script>

<button
  bind:this={ref}
  data-sidebar="rail"
  data-slot="sidebar-rail"
  aria-label="Toggle Sidebar"
  tabIndex={-1}
  onclick={sidebar.toggle}
  title="Toggle Sidebar"
  class={cn('sh-sidebar-rail', className)}
  {...restProps}
>
  {@render children?.()}
</button>

<style>
  /* Sidebar Rail */
  .sh-sidebar-rail {
    position: absolute;
    inset-block: 0;
    z-index: 20;
    display: none;
    width: 1rem; /* w-4 */
    transform: translateX(-50%);
    transition: all 0.2s linear;
    background: transparent;
    border: none;
    cursor: pointer;
  }

  @media (min-width: 640px) {
    .sh-sidebar-rail {
      display: flex;
    }
  }

  .sh-sidebar-rail::after {
    content: '';
    position: absolute;
    inset-block: 0;
    inset-inline-start: calc(50% - 1px);
    width: 2px;
    background-color: transparent;
  }

  .sh-sidebar-rail:hover::after {
    background-color: var(--sidebar-border);
  }

  :global(.sh-sidebar-wrapper[data-side='left']) .sh-sidebar-rail {
    inset-inline-end: -1rem; /* -end-4 */
    cursor: w-resize;
  }

  :global(.sh-sidebar-wrapper[data-side='right']) .sh-sidebar-rail {
    inset-inline-start: 0;
    cursor: e-resize;
  }

  :global(.sh-sidebar-wrapper[data-side='left'][data-state='collapsed']) .sh-sidebar-rail {
    cursor: e-resize;
  }

  :global(.sh-sidebar-wrapper[data-side='right'][data-state='collapsed']) .sh-sidebar-rail {
    cursor: w-resize;
  }

  :global(.sh-sidebar-wrapper[data-collapsible='offcanvas']:hover) .sh-sidebar-rail {
    background-color: var(--sidebar);
  }

  :global(.sh-sidebar-wrapper[data-collapsible='offcanvas']) .sh-sidebar-rail {
    transform: translateX(0);
  }

  :global(.sh-sidebar-wrapper[data-collapsible='offcanvas']) .sh-sidebar-rail::after {
    inset-inline-start: 100%;
  }

  :global(.sh-sidebar-wrapper[data-side='left'][data-collapsible='offcanvas']) .sh-sidebar-rail {
    inset-inline-end: -0.5rem; /* -end-2 */
  }

  :global(.sh-sidebar-wrapper[data-side='right'][data-collapsible='offcanvas']) .sh-sidebar-rail {
    inset-inline-start: -0.5rem; /* -start-2 */
  }
</style>
