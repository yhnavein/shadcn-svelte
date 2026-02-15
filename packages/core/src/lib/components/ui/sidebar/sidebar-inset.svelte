<script lang="ts">
  import { cn, type WithElementRef } from '$lib/utils.js';
  import type { HTMLAttributes } from 'svelte/elements';

  let {
    ref = $bindable(null),
    class: className,
    children,
    ...restProps
  }: WithElementRef<HTMLAttributes<HTMLElement>> = $props();
</script>

<main
  bind:this={ref}
  data-slot="sidebar-inset"
  class={cn('sh-sidebar-inset', className)}
  {...restProps}
>
  {@render children?.()}
</main>

<style>
  /* Sidebar Inset */
  .sh-sidebar-inset {
    background-color: var(--background);
    position: relative;
    display: flex;
    width: 100%;
    flex: 1;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    :global(.sh-sidebar-provider:has([data-variant='inset'])) .sh-sidebar-inset {
      margin: 0.5rem; /* m-2 */
      margin-inline-start: 0;
      border-radius: var(--radius-xl);
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }

    :global(
        .sh-sidebar-provider:has([data-variant='inset']) .sh-sidebar-wrapper[data-state='collapsed']
      )
      ~ .sh-sidebar-inset {
      margin-inline-start: 0.5rem; /* ms-2 */
    }
  }
</style>
