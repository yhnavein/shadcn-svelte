<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLUListElement>> = $props();
</script>

<ul
  bind:this={ref}
  data-slot="sidebar-menu-sub"
  data-sidebar="menu-sub"
  class={cn('sh-sidebar-menu-sub', className)}
  {...restProps}
>
  {@render children?.()}
</ul>

<style>
  /* Sidebar Menu Sub */
  .sh-sidebar-menu-sub {
    margin-inline: 1.125rem; /* mx-3.5 */
    display: flex;
    min-width: 0;
    transform: translateX(1px); /* translate-x-px */
    flex-direction: column;
    gap: 0.25rem; /* gap-1 */
    border-inline-start-width: 1px;
    border-inline-start-style: solid;
    border-inline-start-color: var(--sidebar-border);
    padding-inline: 0.625rem; /* px-2.5 */
    padding-block: 0.125rem; /* py-0.5 */
  }

  :global(.sh-sidebar-wrapper[data-collapsible='icon']) .sh-sidebar-menu-sub {
    display: none;
  }
</style>
